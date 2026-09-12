import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { overlaps } from '../../physics/aabb.ts'
import {
  ASHMANT, type Ashmant, type AshmantContext, type AshmantState, attackBoxesOf, awakenAshmant,
  createAshmant, damageAshmant, isAshmantWindingUp, isCoreExposedOf, nextPattern, phaseForAshmant,
  stepAshmant,
} from './ashmant.ts'

/**
 * 애쉬맨트 (AF-4, 4a 그레이박스).
 *
 * 수치의 출처는 docs/13 §S2 와 §공통 설계 계약이다. 여기서 바꾸면 문서도 함께 고친다.
 */

const GROUND_Y = 200
/** 기본 컨텍스트 — 위험물 자리는 넉넉하고, 내보낸 불씨는 없다. */
const CTX: AshmantContext = { target: { x: 300, y: GROUND_Y - 13 }, groundY: GROUND_Y, hazardRoom: 12, ownedHazards: 0 }
/** 불씨가 아직 날아가는 중. B 는 이 상태에서 끝나지 않아야 한다. */
const CTX_FLYING: AshmantContext = { ...CTX, ownedHazards: 1 }

/**
 * 깨어난 애쉬맨트. 패턴 중간으로 뛰어드는 테스트를 위해 **스냅샷을 미리 찍어 둔다** —
 * 실제 흐름에서는 패턴 첫 틱에 찍히지만, 여기서는 그 틱을 건너뛰기 때문이다.
 */
function boss(patch: Partial<Ashmant> = {}): Ashmant {
  const base = awakenAshmant(createAshmant(200, GROUND_Y, createRng(7)))
  return { ...base, targetSnapshot: { x: CTX.target.x, y: CTX.target.y }, ...patch }
}

/** 상태를 못 박고 n 틱 돌린다. 대기로 돌아가면 다시 그 상태로 되돌려 패턴만 본다. */
function run(start: Ashmant, ticks: number, ctx = CTX): { boss: Ashmant; boxes: number; emitted: number } {
  let b = start
  let boxes = 0
  let emitted = 0
  for (let i = 0; i < ticks; i += 1) {
    const step = stepAshmant(b, ctx, 1 / 60)
    b = step.boss
    boxes = Math.max(boxes, attackBoxesOf(b).length)
    emitted += step.emission.gravestones.length
  }
  return { boss: b, boxes, emitted }
}

describe('수치 — docs/13 §S2', () => {
  it('HP 360, 페이즈 경계 216/90', () => {
    expect(ASHMANT.maxHp).toBe(360)
    expect(ASHMANT.phase2Hp).toBe(216)
    expect(ASHMANT.phase3Hp).toBe(90)
    expect(phaseForAshmant(360)).toBe(1)
    expect(phaseForAshmant(217)).toBe(1)
    expect(phaseForAshmant(216)).toBe(2)
    expect(phaseForAshmant(91)).toBe(2)
    expect(phaseForAshmant(90)).toBe(3)
    expect(phaseForAshmant(1)).toBe(3)
  })

  it('모든 패턴의 선행은 48프레임 이상이다 — 예고 없는 공격은 없다', () => {
    for (const spec of Object.values(ASHMANT.patterns)) {
      expect(spec.windupFrames).toBeGreaterThanOrEqual(48)
    }
  })

  it('대기 54f, 잡몹 소환 0', () => {
    expect(ASHMANT.idleFrames).toBe(54)
    const step = stepAshmant(boss({ state: 'ash', stateFrames: ASHMANT.patterns.ash.windupFrames - 1 }), CTX, 1 / 60)
    expect(step.emission.ghouls).toEqual([])
  })
})

describe('가중치 순환 — §공통 설계 계약', () => {
  it('P1 은 A→B→C, P2 는 +D, P3 는 +E 를 돈다', () => {
    const cycle = (phase: 1 | 2 | 3): AshmantState[] =>
      Array.from({ length: 7 }, (_, i) => nextPattern(phase, i))
    expect(cycle(1).slice(0, 3)).toEqual(['jaw', 'embers', 'ash'])
    expect(cycle(1)[3]).toBe('jaw')
    expect(cycle(2).slice(0, 5)).toEqual(['jaw', 'embers', 'ash', 'march', 'ash'])
    expect(cycle(3).slice(0, 7)).toEqual(['jaw', 'embers', 'ash', 'march', 'ash', 'shell', 'ash'])
  })

  it('같은 패턴이 연속으로 나오지 않는다 — 최대 2회 규칙', () => {
    for (const phase of [1, 2, 3] as const) {
      const seq = Array.from({ length: 20 }, (_, i) => nextPattern(phase, i))
      for (let i = 1; i < seq.length; i += 1) expect(seq[i]).not.toBe(seq[i - 1])
    }
  })

  it('대기가 끝나면 순환의 다음 패턴으로 간다 — 난수가 아니다', () => {
    const idle = boss({ state: 'idle', stateFrames: ASHMANT.idleFrames - 1, cycleIndex: 0 })
    const next = stepAshmant(idle, CTX, 1 / 60).boss
    expect(next.state).toBe('jaw')
    expect(next.cycleIndex).toBe(1)
  })

  it('페이즈가 오르면 다음 선택은 C 부터 — 순환 위치를 되돌린다', () => {
    const hit = damageAshmant(boss({ hp: 217, cycleIndex: 5 }), 1, { x: 0, y: 0, width: 1000, height: 1000 })
    expect(hit.boss.phase).toBe(2)
    expect(nextPattern(hit.boss.phase, hit.boss.cycleIndex)).toBe('ash')
  })
})

describe('A 턱찍기 — 근접 40×24', () => {
  it('선행 48f 뒤 12f 만 살아 있고, 본체 가장자리에서 시작한다', () => {
    const spec = ASHMANT.patterns.jaw
    const before = boss({ state: 'jaw', stateFrames: spec.windupFrames - 1, facing: -1 })
    expect(attackBoxesOf(before)).toEqual([])
    const active = boss({ state: 'jaw', stateFrames: spec.windupFrames, facing: -1 })
    const box = attackBoxesOf(active)[0]
    expect(box).toBeDefined()
    expect(box?.width).toBe(40)
    expect(box?.height).toBe(24)
    expect(box?.x).toBe(active.x - 40)
    const done = boss({ state: 'jaw', stateFrames: spec.windupFrames + spec.activeFrames, facing: -1 })
    expect(attackBoxesOf(done)).toEqual([])
  })

  it('선행 시작에 고정한 방향으로 난다 — 도중에 등 뒤로 돌아가도 따라오지 않는다', () => {
    const right = boss({ state: 'jaw', stateFrames: ASHMANT.patterns.jaw.windupFrames, attackFacing: 1, facing: -1 })
    expect(attackBoxesOf(right)[0]?.x).toBe(right.x + ASHMANT.width)
  })
})

describe('B 불씨 운반 — 착지점 ±64 고정', () => {
  it('선행 시작에 목표를 스냅샷하고, 그 뒤 플레이어가 움직여도 착지점이 따라가지 않는다', () => {
    const start = boss({ state: 'embers', stateFrames: 0 })
    const spec = ASHMANT.patterns.embers
    let a = start
    let b = start
    for (let i = 0; i < spec.windupFrames; i += 1) {
      a = stepAshmant(a, CTX, 1 / 60).boss
      // 한쪽은 선행 도중 플레이어가 멀리 달아난다.
      b = stepAshmant(b, { ...CTX, target: { x: CTX.target.x + 300 * (i / spec.windupFrames), y: CTX.target.y } }, 1 / 60).boss
    }
    expect(a.targetSnapshot).toEqual(b.targetSnapshot)
    expect(a.targetSnapshot?.x).toBe(CTX.target.x)
  })

  it('불씨 2개가 스냅샷을 사이에 두고 ±64 로 갈라진다', () => {
    let b = boss({ state: 'embers', stateFrames: 0 })
    const spec = ASHMANT.patterns.embers
    let emitted: readonly { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i <= spec.windupFrames; i += 1) {
      const step = stepAshmant(b, CTX, 1 / 60)
      b = step.boss
      if (step.emission.gravestones.length > 0) emitted = step.emission.gravestones
    }
    expect(emitted).toHaveLength(2)
    // 착지점 = 발사점 + vx * 비행시간. 두 착지점의 차이가 128px(±64)이다.
    const t = ASHMANT.emberFlightSeconds(emitted[0]!.y, GROUND_Y)
    const landing = emitted.map((e) => e.x + e.vx * t)
    expect(Math.abs(landing[0]! - landing[1]!)).toBeCloseTo(128, 0)
    expect((landing[0]! + landing[1]!) / 2).toBeCloseTo(CTX.target.x, 0)
  })

  it('불씨가 아직 날아가면 B 가 끝나지 않는다 — 회복 타이머만 보고 다음 패턴을 시작하지 않는다', () => {
    const spec = ASHMANT.patterns.embers
    let b = boss({ state: 'embers', stateFrames: 0 })
    for (let i = 0; i < spec.windupFrames + spec.recoverFrames + 60; i += 1) {
      b = stepAshmant(b, CTX_FLYING, 1 / 60).boss
    }
    expect(b.state).toBe('embers')
    // 불씨가 사라지면 그 다음 틱에 끝난다.
    expect(stepAshmant(b, CTX, 1 / 60).boss.state).toBe('idle')
  })

  it('불씨를 둘 자리가 없으면 방출 직전에 접는다 — 예비 동작만 남기지 않는다', () => {
    const spec = ASHMANT.patterns.embers
    let b = boss({ state: 'embers', stateFrames: 0 })
    let emitted = 0
    for (let i = 0; i <= spec.windupFrames; i += 1) {
      // 예고 도중 목록이 가득 찬다(잡몹 불덩이가 자리를 먹은 상황).
      const ctx: AshmantContext = { ...CTX, hazardRoom: i < spec.windupFrames - 5 ? 12 : 0 }
      const step = stepAshmant(b, ctx, 1 / 60)
      b = step.boss
      emitted += step.emission.gravestones.length
    }
    expect(emitted).toBe(0)
    expect(b.state).toBe('idle')
  })

  it('겨냥은 190px 로 제한된다', () => {
    let b = boss({ state: 'embers', stateFrames: 0 })
    const far: AshmantContext = { ...CTX, target: { x: 2000, y: CTX.target.y } }
    let emitted: readonly { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i <= ASHMANT.patterns.embers.windupFrames; i += 1) {
      const step = stepAshmant(b, far, 1 / 60)
      b = step.boss
      if (step.emission.gravestones.length > 0) emitted = step.emission.gravestones
    }
    const t = ASHMANT.emberFlightSeconds(emitted[0]!.y, GROUND_Y)
    const center = (emitted[0]!.x + emitted[0]!.vx * t + emitted[1]!.x + emitted[1]!.vx * t) / 2
    expect(center - (b.x + ASHMANT.width / 2)).toBeCloseTo(190, 0)
  })
})

describe('C 잿더미 분출 — 기둥 3개', () => {
  it('스냅샷 중심과 ±80 에 10×24 기둥이 활성 12f 동안 선다', () => {
    const spec = ASHMANT.patterns.ash
    let b = boss({ state: 'ash', stateFrames: 0 })
    for (let i = 0; i < spec.windupFrames; i += 1) b = stepAshmant(b, CTX, 1 / 60).boss
    const boxes = attackBoxesOf(b)
    expect(boxes).toHaveLength(3)
    for (const box of boxes) {
      expect(box.width).toBe(10)
      expect(box.height).toBe(24)
      expect(box.y + box.height).toBe(GROUND_Y)
    }
    const centers = boxes.map((x) => x.x + 5).sort((p, q) => p - q)
    expect(centers[1]! - centers[0]!).toBe(80)
    expect(centers[2]! - centers[1]!).toBe(80)
    expect(centers[1]).toBe(CTX.target.x)
  })

  it('활성 12f 가 지나면 기둥이 사라진다', () => {
    const spec = ASHMANT.patterns.ash
    const active = boss({ state: 'ash', stateFrames: spec.windupFrames, parts: [] })
    let b = active
    for (let i = 0; i < spec.windupFrames + spec.activeFrames + 1; i += 1) b = stepAshmant(b, CTX, 1 / 60).boss
    expect(attackBoxesOf(b)).toEqual([])
  })
})

describe('D 불씨 행군 — 지상 직진', () => {
  /** 플레이어가 보스 **왼쪽**에 선 상황. 조각은 왼쪽으로 가야 한다. */
  const LEFT: AshmantContext = { ...CTX, target: { x: 60, y: GROUND_Y - 13 } }

  it('14×14 상자 하나가 58px/s 로 한 방향으로만 간다 — 반전도 추적도 없다', () => {
    const spec = ASHMANT.patterns.march
    let b = boss({ state: 'march', stateFrames: 0 })
    for (let i = 0; i < spec.windupFrames; i += 1) b = stepAshmant(b, LEFT, 1 / 60).boss
    const first = attackBoxesOf(b)
    expect(first).toHaveLength(1)
    expect(first[0]?.width).toBe(14)
    expect(first[0]?.height).toBe(14)
    expect(b.attackFacing).toBe(-1)
    const startX = first[0]!.x
    // 1초 뒤 58px 왼쪽. 도중에 플레이어가 오른쪽으로 넘어가도 조각은 돌아서지 않는다.
    for (let i = 0; i < 60; i += 1) b = stepAshmant(b, { ...LEFT, target: { x: 900, y: LEFT.target.y } }, 1 / 60).boss
    const moved = attackBoxesOf(b)[0]
    expect(moved).toBeDefined()
    expect(moved!.x - startX).toBeCloseTo(-58, 0)
  })

  it('190px 를 지나면 사라진다', () => {
    const spec = ASHMANT.patterns.march
    let b = boss({ state: 'march', stateFrames: 0 })
    for (let i = 0; i < spec.windupFrames + 60 * 4; i += 1) b = stepAshmant(b, LEFT, 1 / 60).boss
    expect(attackBoxesOf(b)).toEqual([])
  })
})

describe('E 외피 탈락 — 순서와 동시 1개', () => {
  it('낮음→높음→낮음→높음 순서로 한 번에 하나만 유해하다', () => {
    let b = boss({ state: 'shell', stateFrames: 0, facing: -1 })
    const seen: number[] = []
    for (let i = 0; i < 60 * 20; i += 1) {
      b = stepAshmant(b, CTX, 1 / 60).boss
      const boxes = attackBoxesOf(b)
      expect(boxes.length).toBeLessThanOrEqual(1)
      const box = boxes[0]
      if (box !== undefined) {
        const height = box.height
        if (seen.length === 0 || seen.at(-1) !== height) seen.push(height)
      }
      if (b.state === 'idle') break
    }
    // 낮은 조각은 14px, 높은 조각은 8px 판정이다.
    expect(seen).toEqual([14, 8, 14, 8])
  })

  it('높은 조각의 판정은 바닥 위 18~26px 띠 안에 있다', () => {
    let b = boss({ state: 'shell', stateFrames: 0, facing: -1 })
    let highBox: { y: number; height: number } | null = null
    for (let i = 0; i < 60 * 20 && highBox === null; i += 1) {
      b = stepAshmant(b, CTX, 1 / 60).boss
      const box = attackBoxesOf(b)[0]
      if (box !== undefined && box.height === 8) highBox = box
    }
    expect(highBox).not.toBeNull()
    // 바닥 위 18px 에서 시작한다 — 이 값이 내려가면 웅크림이 맞는다.
    expect(GROUND_Y - (highBox!.y + highBox!.height)).toBe(ASHMANT.shellHighFloorGap)
    expect(GROUND_Y - highBox!.y).toBeLessThanOrEqual(26)
  })

  it('높은 조각은 웅크림(12×16)을 지나가고 서기(12×26)는 맞는다 — 회피의 불변식', () => {
    let b = boss({ state: 'shell', stateFrames: 0, facing: -1 })
    let high: { x: number; y: number; width: number; height: number } | null = null
    for (let i = 0; i < 60 * 20 && high === null; i += 1) {
      b = stepAshmant(b, CTX, 1 / 60).boss
      const box = attackBoxesOf(b)[0]
      if (box !== undefined && box.height === ASHMANT.shellHighHitHeight) high = box
    }
    expect(high).not.toBeNull()
    const sameX = high!.x
    const crouch = { x: sameX, y: GROUND_Y - 16, width: 12, height: 16 }
    const stand = { x: sameX, y: GROUND_Y - 26, width: 12, height: 26 }
    expect(overlaps(high!, crouch)).toBe(false)
    expect(overlaps(high!, stand)).toBe(true)
  })
})

describe('패턴 길이 — 4c 튜닝의 기준선', () => {
  it('각 패턴이 대기로 돌아가기까지의 프레임을 기록한다', () => {
    const durations: Record<string, number> = {}
    for (const state of ['jaw', 'embers', 'ash', 'march', 'shell'] as const) {
      let b = boss({ state, stateFrames: 0 })
      let ticks = 0
      for (let i = 0; i < 60 * 25; i += 1) {
        b = stepAshmant(b, CTX, 1 / 60).boss
        ticks += 1
        if (b.state === 'idle') break
      }
      durations[state] = ticks
    }
    // docs/13 §S2 "측정된 패턴 길이" 표를 그대로 고정한다. 수치를 바꾸려면 그 표를 먼저 고친다.
    expect(durations).toEqual({ jaw: 96, embers: 78, ash: 100, march: 280, shell: 1012 })
  })
})

describe('공통 규칙', () => {
  it('패턴이 바뀌면 앞 패턴의 판정이 남지 않는다 — 유해 판정 비중첩', () => {
    for (const state of ['jaw', 'embers', 'ash', 'march', 'shell'] as const) {
      let b = boss({ state, stateFrames: 0 })
      for (let i = 0; i < 60 * 20; i += 1) {
        const step = stepAshmant(b, CTX, 1 / 60)
        b = step.boss
        if (b.state === 'idle') break
      }
      expect(b.state).toBe('idle')
      expect(attackBoxesOf(b)).toEqual([])
      expect(b.parts).toEqual([])
    }
  })

  it('죽으면 모든 판정이 즉시 꺼진다', () => {
    const dying = boss({ state: 'ash', stateFrames: ASHMANT.patterns.ash.windupFrames, hp: 1 })
    const killed = damageAshmant(dying, 999, { x: 0, y: 0, width: 1000, height: 1000 })
    expect(killed.killed).toBe(true)
    expect(killed.boss.state).toBe('dead')
    expect(attackBoxesOf(killed.boss)).toEqual([])
  })

  it('코어는 1배, 다른 부위는 0.5배', () => {
    const b = boss()
    const core = { x: b.x + ASHMANT.core.x, y: b.y + ASHMANT.core.y, width: 10, height: 10 }
    expect(damageAshmant(b, 10, core).dealt).toBe(10)
    expect(damageAshmant(b, 10, { x: b.x, y: b.y, width: 4, height: 4 }).dealt).toBe(5)
  })

  it('예비 동작 중에는 isWindingUp — E 는 조각마다', () => {
    expect(isAshmantWindingUp(boss({ state: 'jaw', stateFrames: 10 }))).toBe(true)
    expect(isAshmantWindingUp(boss({ state: 'jaw', stateFrames: 60 }))).toBe(false)
    let b = boss({ state: 'shell', stateFrames: 0 })
    let sawWindup = false
    for (let i = 0; i < 60 * 4; i += 1) {
      b = stepAshmant(b, CTX, 1 / 60).boss
      const armed = attackBoxesOf(b).length > 0
      // 유해 상자가 살아 있는 동안은 예고가 아니다 — 한 번이라도 겹치면 즉시 실패한다.
      expect(armed && isAshmantWindingUp(b)).toBe(false)
      if (!armed && isAshmantWindingUp(b)) sawWindup = true
    }
    expect(sawWindup).toBe(true)
  })

  it('E 중에는 코어가 드러난다 — 외피가 벌어지면 조명이 밝아진다', () => {
    expect(isCoreExposedOf(boss({ state: 'shell' }))).toBe(true)
    expect(isCoreExposedOf(boss({ state: 'idle' }))).toBe(false)
  })

  it('입력을 바꾸지 않는다', () => {
    const b = boss({ state: 'ash', stateFrames: 3 })
    const before = JSON.stringify(b)
    stepAshmant(b, CTX, 1 / 60)
    attackBoxesOf(b)
    expect(JSON.stringify(b)).toBe(before)
  })

  it('깨어나기 전에는 아무것도 하지 않는다', () => {
    const sleeping = createAshmant(200, GROUND_Y, createRng(1))
    const r = run(sleeping, 300)
    expect(r.boss.state).toBe('idle')
    expect(r.boxes).toBe(0)
    expect(r.emitted).toBe(0)
  })
})
