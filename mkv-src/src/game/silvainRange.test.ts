import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_3 } from '../data/stages/stage3.ts'
import { SILVAIN, type SilvainState } from '../entities/bosses/silvain.ts'
import { asSilvainBoss } from '../entities/bosses/slot.ts'
import { createWorld, stepWorld, type World } from './world.ts'

/**
 * 실베인에게 **안전지대가 없어야 한다** (AF-5).
 *
 * docs/05 §5.4 가 금지하는 것은 "거기 서서 던지기만 하는 것이 최적해"인 영구 안전 위치다.
 * 동시에 매 공격에는 확정 회피가 있어야 한다. 두 검사를 따로 한다 —
 * 정지 검사(어디 서 있어도 언젠가 맞는다)와 이동 검사(읽으면 반드시 피한다).
 *
 * 실베인은 **박자**가 있어 한 순환이 애쉬맨트보다 훨씬 길다(패턴마다 240f 경계를 기다린다).
 * 그래서 정지 검사의 틱 수가 크다 — P3 순환 7개 × 240f 를 덮어야 한다.
 */

const balance = loadBalance()
const SIZE = 16
/** 서기 26px · 웅크림 16px — docs/02 §2.1 */
const STAND_H = 26
const CROUCH_H = 16
/** P3 순환(7패턴) × 박자 240f + 여유. */
const CYCLE_TICKS = SILVAIN.beatFrames * 8

function silvainWorld(): { world: World; bossX: number; groundY: number } {
  const world = createWorld(STAGE_3, balance)
  expect(world.boss.kind).toBe('silvain')
  return { world, bossX: world.boss.x, groundY: (world.map.height - 1) * SIZE }
}

/**
 * 보스 오른쪽 끝에서 **벽 앞까지**의 여유.
 *
 * 보스룸 오른쪽은 타일 한 칸(16px)이 벽이다. 그 칸을 빼지 않으면 "벽에 붙어 서기"가
 * 벽 **속**에 서는 것이 되고, 그 자리로 떨어지는 고드름도 지형에 부딪혀 사라져
 * 검사가 거짓으로 통과한다.
 */
function wallGapPx(): number {
  const { world, bossX } = silvainWorld()
  const insideWallX = (world.map.width - 1) * SIZE
  return Math.max(0, insideWallX - (bossX + SILVAIN.width) - 12 - 2)
}

/** 그 자리에 못 박고 돌린다. 이동으로 피하는지가 아니라 **닿기는 하는지**를 본다. */
function hitWhileStanding(options: {
  gapPx: number; height: number; phase: 1 | 2 | 3; state?: SilvainState; ticks?: number
  /** -1 = 보스 왼쪽, 1 = 오른쪽. 좌우 산술이 서로 다르므로 양쪽을 다 본다. */
  side?: -1 | 1
}): boolean {
  const { world: base, bossX, groundY } = silvainWorld()
  const side = options.side ?? -1
  const standX = side === -1 ? bossX - options.gapPx : bossX + SILVAIN.width + options.gapPx
  const boss = asSilvainBoss(base.boss)

  let w: World = {
    ...base,
    // 스테이지 잡몹을 치운다. 재는 것은 보스 패턴이 닿는가다.
    enemies: [],
    boss: {
      ...boss,
      awake: true,
      phase: options.phase,
      hp: options.phase === 1 ? SILVAIN.maxHp : options.phase === 2 ? SILVAIN.phase2Hp : SILVAIN.phase3Hp,
      state: options.state ?? 'idle',
      stateFrames: 0,
      cycleIndex: 0,
      // 박자 경계 직전에서 시작해 첫 패턴을 곧바로 받는다.
      beatTicks: SILVAIN.beatFrames - 1,
      targetSnapshot: { x: standX, y: groundY - 13 },
    },
  }

  for (let i = 0; i < (options.ticks ?? CYCLE_TICKS); i += 1) {
    w = {
      ...w,
      player: {
        ...w.player,
        body: { ...w.player.body, x: standX, y: groundY - options.height, height: options.height, vx: 0, vy: 0 },
      },
      vitals: { ...w.vitals, iFrames: 0, dead: false, armor: 'steel' },
    }
    const step = stepWorld(w, INITIAL_INPUT, balance)
    w = step.world
    if (step.events.hurt) return true
  }
  return false
}

describe('정지 검사 — 어느 자리에도 영구 안전지대가 없다', () => {
  // 캐른·애쉬맨트와 같은 거리 표본 + 사거리 밖(250·320)까지 본다.
  const GAPS = [30, 45, 60, 70, 85, 100, 120, 150, 190, 250, 320]
  const WALL_GAP = wallGapPx()

  for (const phase of [1, 2, 3] as const) {
    for (const side of [-1, 1] as const) {
      const where = side === -1 ? '왼쪽' : '오른쪽'

      it(`P${phase} 전체 순환에서, 보스 ${where}에 서 있으면 어느 거리에서도 맞는다`, () => {
        const gaps = side === -1 ? GAPS : GAPS.filter((g) => g <= WALL_GAP)
        const safe = gaps.filter((gap) => !hitWhileStanding({ gapPx: gap, height: STAND_H, phase, side }))
        expect(safe).toEqual([])
      })

      it(`P${phase} 전체 순환에서, 보스 ${where}에 웅크려도 어느 거리에서도 맞는다`, () => {
        const gaps = side === -1 ? GAPS : GAPS.filter((g) => g <= WALL_GAP)
        const safe = gaps.filter((gap) => !hitWhileStanding({ gapPx: gap, height: CROUCH_H, phase, side }))
        expect(safe).toEqual([])
      })
    }

    it(`P${phase} — 오른쪽 벽에 붙어 있어도 맞는다`, () => {
      expect(hitWhileStanding({ gapPx: WALL_GAP, height: STAND_H, phase, side: 1 })).toBe(true)
      expect(hitWhileStanding({ gapPx: WALL_GAP, height: CROUCH_H, phase, side: 1 })).toBe(true)
    })
  }

  it('C 고드름은 거리와 무관하게 그 자리를 지목한다 — 원거리 정지 공략을 막는 것이 C 다', () => {
    for (const gap of [150, 250, 320]) {
      expect(hitWhileStanding({ gapPx: gap, height: STAND_H, phase: 1, state: 'icicle', ticks: 60 * 8 })).toBe(true)
    }
  })

  it('B 는 서 있으면 맞고 웅크리면 안 맞는다 — 이 패턴만 떼어 보면 대응이 갈린다', () => {
    expect(hitWhileStanding({ gapPx: 100, height: STAND_H, phase: 1, state: 'highSilk', ticks: 200 })).toBe(true)
    expect(hitWhileStanding({ gapPx: 100, height: CROUCH_H, phase: 1, state: 'highSilk', ticks: 200 })).toBe(false)
  })

  it('D 는 웅크려도 맞는다 — 뛰어야 넘는다', () => {
    expect(hitWhileStanding({ gapPx: 100, height: CROUCH_H, phase: 2, state: 'lowSilk', ticks: 200 })).toBe(true)
  })
})

/** 한 패턴을 시작해 스크립트대로 대응한다. 맞으면 false. */
function avoids(state: SilvainState, gapPx: number, keys: (tick: number) => readonly Action[], ticks = 240): boolean {
  const { world: base, bossX, groundY } = silvainWorld()
  const boss = asSilvainBoss(base.boss)
  const standX = bossX - gapPx

  let w: World = {
    ...base,
    enemies: [],
    player: { ...base.player, body: { ...base.player.body, x: standX, y: groundY - STAND_H, vx: 0, vy: 0 } },
    vitals: { ...base.vitals, iFrames: 0, dead: false, armor: 'steel' },
    boss: {
      ...boss, awake: true, phase: 3, hp: SILVAIN.phase3Hp,
      state, stateFrames: 0, hitIndex: 0, beatTicks: 1,
      targetSnapshot: { x: standX, y: groundY - 13 }, attackFacing: -1,
    },
  }
  let input: InputState = INITIAL_INPUT
  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf(...keys(i)))
    const step = stepWorld(w, input, balance)
    w = step.world
    input = step.input
    // 무적으로 버티는 경로는 통과로 세지 않는다.
    if (step.events.hurt || step.events.died) return false
  }
  return true
}

describe('이동 검사 — 읽으면 반드시 피한다', () => {
  it('A 앞다리 찍기 — 리치 밖으로 걸어 나간다', () => {
    // 30프레임만 걷는다. 끝없이 걸으면 보스룸을 벗어나 구덩이에 빠진다 — 그건 회피가 아니다.
    expect(avoids('stomp', 36, (i) => (i < 30 ? ['left'] : []))).toBe(true)
  })

  it('B 높은 서리실 — 웅크린다 (무적 프레임에 기대지 않는다)', () => {
    expect(avoids('highSilk', 100, () => ['down'])).toBe(true)
  })

  it('D 바닥 실쓸기 — 제자리에서 고정 점프로 넘긴다', () => {
    // 활성 12f 를 체공으로 덮는다. 선행 48f 를 읽고 뛰는 타이밍이 존재한다.
    const jumped = Array.from({ length: 60 }, (_, start) =>
      avoids('lowSilk', 100, (i) => (i === start ? ['jump'] : [])))
    expect(jumped.some((ok) => ok)).toBe(true)
  })

  it('C 고드름 — 표식 사이 80px 틈으로 걸어 나간다', () => {
    // 표식은 중심 ±80px 에 있다. 옆으로 조금 비켜서면 사이에 선다 — 얼마나 걸으면 되는지를
    // 훑어 하나라도 성립하면 확정 회피가 존재하는 것이다.
    const escapes = Array.from({ length: 30 }, (_, walk) =>
      avoids('icicle', 100, (i) => (i < walk + 8 ? ['left'] : []), 260))
    expect(escapes.some((ok) => ok)).toBe(true)
  })

  it('E 다리 접기 — 좌우 두 타 모두 리치 밖으로 물러난다', () => {
    const spec = SILVAIN.patterns.legFold
    const ticks = (spec.windupFrames + spec.activeFrames + spec.recoverFrames) * 2 + 20
    expect(avoids('legFold', 36, (i) => (i < 30 ? ['left'] : []), ticks)).toBe(true)
  })

  it('체공 중에 다음 공격이 끼어들지 않는다 — 점프로 D 를 넘는 동안 B 가 겹치지 않는다', () => {
    // 박자가 있으므로 D 활성과 B 활성은 최소 한 박자(240f) 떨어져 있다.
    const { world: base, bossX, groundY } = silvainWorld()
    const boss = asSilvainBoss(base.boss)
    let w: World = {
      ...base, enemies: [],
      player: { ...base.player, body: { ...base.player.body, x: bossX - 100, y: groundY - STAND_H, vx: 0, vy: 0 } },
      boss: {
        ...boss, awake: true, phase: 3, hp: SILVAIN.phase3Hp, state: 'idle', stateFrames: 0,
        beatTicks: SILVAIN.beatFrames - 1, targetSnapshot: { x: bossX - 100, y: groundY - 13 },
      },
    }
    let input: InputState = INITIAL_INPUT
    let armedTicks = 0
    let lastArmed = -100
    let minGap = Number.POSITIVE_INFINITY
    for (let i = 0; i < CYCLE_TICKS; i += 1) {
      input = advanceInput(input, frameOf())
      const step = stepWorld(w, input, balance)
      w = step.world
      input = step.input
      const armed = opsHitBoxes(w).length > 0
      if (armed) {
        if (i - lastArmed > 1) minGap = Math.min(minGap, i - lastArmed)
        lastArmed = i
        armedTicks += 1
      }
    }
    expect(armedTicks).toBeGreaterThan(0)
    // 서로 다른 공격 사이의 간격이 체공 34f 보다 넉넉히 크다.
    expect(minGap).toBeGreaterThan(34)
  })
})

function opsHitBoxes(w: World): readonly unknown[] {
  const boss = asSilvainBoss(w.boss)
  return boss.state === 'dead' ? [] : hitBoxesOf(boss)
}

function hitBoxesOf(boss: ReturnType<typeof asSilvainBoss>): readonly unknown[] {
  // attackBoxesOf 를 직접 부르지 않고 슬롯을 거친다 — 배선이 끊기면 여기서도 0 이 된다.
  return SILVAIN_OPS.hitBoxes(boss)
}

const SILVAIN_OPS = (await import('../entities/bosses/registry.ts')).opsOf('silvain')
