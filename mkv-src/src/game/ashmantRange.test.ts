import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_2 } from '../data/stages/stage2.ts'
import { ASHMANT, type AshmantState } from '../entities/bosses/ashmant.ts'
import { asAshmantBoss } from '../entities/bosses/slot.ts'
import { createWorld, stepWorld, type World } from './world.ts'

/**
 * 애쉬맨트에게 **안전지대가 없어야 한다** (AF-4).
 *
 * docs/05 §5.4 가 금지하는 것은 "거기 서서 던지기만 하는 것이 최적해"인 영구 안전 위치다.
 * 동시에 매 공격에는 확정 회피가 있어야 한다. 두 검사를 따로 한다 —
 * 정지 검사(어디 서 있어도 언젠가 맞는다)와 이동 검사(읽으면 반드시 피한다).
 * 캐른의 `bossRange.test.ts` 와 같은 방식이되, 순환 전체를 돌린다.
 */

const balance = loadBalance()
const SIZE = 16
/** 서기 26px · 웅크림 16px — docs/02 §2.1 */
const STAND_H = 26
const CROUCH_H = 16

function ashmantWorld(): { world: World; bossX: number; groundY: number } {
  const world = createWorld(STAGE_2, balance)
  expect(world.boss.kind).toBe('ashmant')
  return { world, bossX: world.boss.x, groundY: (world.map.height - 1) * SIZE }
}

/** 보스 오른쪽 끝에서 벽까지의 여유. 벽에 붙어 서는 자리를 만든다. */
function wallGapPx(): number {
  const { world, bossX } = ashmantWorld()
  const rightWallX = world.map.width * SIZE
  // 플레이어 폭 12px 를 빼고 2px 여유.
  return Math.max(0, rightWallX - (bossX + ASHMANT.width) - 12 - 2)
}

/** 그 자리에 못 박고 돌린다. 이동으로 피하는지가 아니라 **닿기는 하는지**를 본다. */
function hitWhileStanding(
  options: {
    gapPx: number; height: number; phase: 1 | 2 | 3; state?: AshmantState; ticks?: number
    /** -1 = 보스 왼쪽, 1 = 오른쪽. 좌우 산술이 서로 다르므로 **양쪽을 다 본다.** */
    side?: -1 | 1
  },
): boolean {
  const { world: base, bossX, groundY } = ashmantWorld()
  const side = options.side ?? -1
  const standX = side === -1 ? bossX - options.gapPx : bossX + ASHMANT.width + options.gapPx
  const boss = asAshmantBoss(base.boss)

  let w: World = {
    ...base,
    // 스테이지 잡몹을 치운다. 재는 것은 보스 패턴이 닿는가다.
    enemies: [],
    boss: {
      ...boss,
      awake: true,
      phase: options.phase,
      hp: options.phase === 1 ? ASHMANT.maxHp : options.phase === 2 ? ASHMANT.phase2Hp : ASHMANT.phase3Hp,
      state: options.state ?? 'idle',
      stateFrames: 0,
      cycleIndex: 0,
    },
  }

  for (let i = 0; i < (options.ticks ?? 60 * 30); i += 1) {
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
  // 캐른 검사와 같은 거리 표본 + 사거리 밖(250·320)까지 본다.
  const GAPS = [30, 45, 60, 70, 85, 100, 120, 150, 190, 250, 320]
  /** 보스룸 오른쪽 벽 앞. docs/13 §공통 설계 계약의 정지 검사는 **벽 끝**도 요구한다. */
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

    it(`P${phase} — 오른쪽 벽에 붙어 서 있어도 맞는다`, () => {
      expect(hitWhileStanding({ gapPx: WALL_GAP, height: STAND_H, phase, side: 1 })).toBe(true)
      expect(hitWhileStanding({ gapPx: WALL_GAP, height: CROUCH_H, phase, side: 1 })).toBe(true)
    })
  }

  it('C 잿더미 분출은 거리와 무관하게 그 자리를 지목한다 — 원거리 정지 공략을 막는 것이 C 다', () => {
    for (const gap of [150, 250, 320]) {
      expect(hitWhileStanding({ gapPx: gap, height: STAND_H, phase: 1, state: 'ash', ticks: 60 * 4 })).toBe(true)
    }
  })
})

/**
 * 읽고 움직이면 피해지는가. 무적 프레임에 기대지 않는다 — 한 번이라도 맞으면 실패다.
 *
 * 입력 스크립트는 **월드를 보고 반응한다.** 사람이 화면을 보고 누르는 것과 같은 조건이고,
 * 고정 타이밍표를 외운 스크립트는 "읽으면 피할 수 있다"를 증명하지 못한다.
 */
function evades(
  state: AshmantState,
  gapPx: number,
  keys: (tick: number, world: World) => readonly Action[],
  ticks = 60 * 20,
): boolean {
  const { world: base, bossX, groundY } = ashmantWorld()
  const boss = asAshmantBoss(base.boss)
  let w: World = {
    ...base,
    enemies: [],
    player: { ...base.player, body: { ...base.player.body, x: bossX - gapPx, y: groundY - STAND_H, vx: 0, vy: 0 } },
    vitals: { ...base.vitals, armor: 'steel' },
    boss: { ...boss, awake: true, phase: 3, hp: ASHMANT.phase3Hp, state, stateFrames: 0 },
  }
  let input: InputState = INITIAL_INPUT
  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf(...keys(i, w)))
    const step = stepWorld(w, input, balance)
    w = step.world
    input = step.input
    if (step.events.hurt || step.events.died) return false
    if (w.boss.state === 'idle' && i > 60) break
  }
  return true
}

describe('D 불씨 행군 — 실제 회피 창 (4c 튜닝 기준선)', () => {
  it('뛰지 않고 서 있으면 반드시 맞는다 — 시험대가 유효하다', () => {
    expect(dodgeMarch({ walk: 'none', jump: false })).toBe(0)
  })

  it('제자리에서도 타이밍을 맞추면 넘어간다 — 이륙 창이 존재한다', () => {
    // 실측 3프레임. **좁다** — 4c 사람 계측에서 부족하면 `marchSpeed`·`marchBox` 부터 조정한다
    // (선행 48f 는 마지막). 지금 코드로 수치를 깎지 않는다 — 수치는 docs/13 §S2 표의 소유물이다.
    expect(dodgeMarch({ walk: 'none' })).toBeGreaterThan(0)
  })

  it('멀어지게 걸으면 아예 닿지 않는다 — 걷기 110 > 조각 58px/s, 190px 에서 소멸', () => {
    // 확정 회피는 점프 타이밍 하나에만 걸려 있지 않다. 이쪽이 더 관대한 경로다.
    expect(dodgeMarch({ walk: 'away', jump: false })).toBeGreaterThan(0)
  })

  it('조각을 향해 계속 걸어 들어가면 점프해도 다시 닿는다 — 착지 후 재진입', () => {
    expect(dodgeMarch({ walk: 'toward' })).toBe(0)
  })
})

describe('이동 검사 — 각 패턴에 확정 회피가 있다', () => {
  it('A 턱찍기: 예고를 보고 걸어 나가면 닿지 않는다', () => {
    expect(evades('jaw', 50, () => ['left'])).toBe(true)
  })

  it('B 불씨 운반: 제자리에 서 있으면 착지점 사이 128px 틈에 남는다', () => {
    expect(evades('embers', 120, () => [])).toBe(true)
  })

  it('C 잿더미 분출: 기둥 사이 80px 틈으로 걸어 들어가면 피한다', () => {
    // 지목은 선행 시작 위치에 고정된다. 중앙 표식에서 **틈의 한가운데**(40px)로 걷는다 —
    // 80px 를 다 걸으면 바깥 기둥 자리에 선다. 그래서 절반만 간다.
    let walked = 0
    expect(evades('ash', 120, (_t, w) => {
      if (w.boss.state !== 'ash') return []
      if (walked >= 24) return []
      walked += 1
      return ['left']
    })).toBe(true)
  })

  /** 다가오는 유해 상자 중 가장 가까운 것까지의 거리(px). 없으면 null. */
  function incoming(w: World): { dx: number; height: number } | null {
    const boss = asAshmantBoss(w.boss)
    const px = w.player.body.x + w.player.body.width / 2
    let best: { dx: number; height: number } | null = null
    for (const part of boss.parts) {
      if (!part.armed) continue
      const dx = Math.abs(part.x + part.width / 2 - px)
      if (best === null || dx < best.dx) best = { dx, height: part.height }
    }
    return best
  }

  it('D 불씨 행군: 다가오는 조각을 한 번 뛰어 넘는다', () => {
    // 조각은 지면을 14px 높이로 **초당 58px** 로 달린다 — 한 프레임에 1px 이 채 안 된다.
    // 체공 34f 중 실제로 14px 위에 있는 구간은 더 짧아, 겹치는 26f(|dx|<13)를 덮으려면
    // **15~19px 앞**에서 떠야 한다. 너무 일찍 뛰면 조각이 닿기 전에 내려온다.
    // → 이 창이 5프레임뿐이라는 것은 4c 에서 사람 실측으로 다시 볼 일이다.
    expect(evades('march', 120, (_t, w) => {
      const near = incoming(w)
      return near !== null && near.dx < 18 ? ['jump'] : []
    })).toBe(true)
  })

  it('E 외피 탈락: 낮은 조각은 뛰고 높은 조각은 웅크린다', () => {
    // 낮은 조각(판정 14px)은 점프, 높은 조각(판정 8px, 바닥 위 18px)은 웅크림.
    expect(evades('shell', 120, (_t, w) => {
      const near = incoming(w)
      if (near === null) return []
      // 웅크림은 즉시 낮아지므로 일찍 눌러도 되고, 점프는 체공 34f 안에 지나가야 한다.
      if (near.height === ASHMANT.shellHighHitHeight) return near.dx < 60 ? ['down'] : []
      return near.dx < 18 ? ['jump'] : []
    })).toBe(true)
  })
})

/**
 * D 조각을 피할 수 있는 **이륙 가능 프레임 수**. 매 틱 시작 시점에 점프를 시작했을 때
 * 노히트로 넘어가는 틱이 몇 개인지 센다. 조각을 향해 걸으면 상대 속도가 커져 창이 넓어진다.
 */
function dodgeMarch(options: { walk: 'none' | 'toward' | 'away'; jump?: boolean }): number {
  const { world: base, bossX, groundY } = ashmantWorld()
  const boss = asAshmantBoss(base.boss)
  const spec = ASHMANT.patterns.march
  let windows = 0

  // 조각이 도달하는 시점이 걷기 여부에 따라 달라지므로, 패턴 전체 구간에서 이륙 시점을 훑는다.
  for (let start = 0; start < ASHMANT.patterns.march.recoverFrames + 240; start += 1) {
    let w: World = {
      ...base,
      enemies: [],
      player: { ...base.player, body: { ...base.player.body, x: bossX - 170, y: groundY - STAND_H, vx: 0, vy: 0 } },
      vitals: { ...base.vitals, armor: 'steel', iFrames: 0 },
      boss: {
        ...boss, awake: true, phase: 2, hp: ASHMANT.phase2Hp,
        // 다음 틱이 정확히 `windupFrames` 가 되어 조각이 방출된다. windupFrames 로 두면 이미 지나가 버린다.
        state: 'march', stateFrames: spec.windupFrames - 1,
        targetSnapshot: { x: bossX - 170, y: groundY - 13 }, attackFacing: -1,
      },
    }
    let input: InputState = INITIAL_INPUT
    let hurt = false
    for (let i = 0; i < 200 && !hurt; i += 1) {
      const keys: Action[] = []
      // 보스는 오른쪽, 조각은 왼쪽으로 온다 — 'toward' 는 오른쪽(조각 쪽), 'away' 는 왼쪽이다.
      if (options.walk === 'toward') keys.push('right')
      if (options.walk === 'away') keys.push('left')
      if (options.jump !== false && i === start) keys.push('jump')
      input = advanceInput(input, frameOf(...keys))
      const step = stepWorld(w, input, balance)
      w = step.world
      input = step.input
      if (step.events.hurt) hurt = true
      if (asAshmantBoss(w.boss).state !== 'march') break
    }
    if (!hurt) windows += 1
  }
  return windows
}
