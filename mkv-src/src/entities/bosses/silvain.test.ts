import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { overlaps } from '../../physics/aabb.ts'
import { MAX_HAZARDS } from './hazard.ts'
import {
  SILVAIN, type Silvain, type SilvainContext, type SilvainState, attackBoxesOf, awakenSilvain,
  bodyBoxOf, coreBoxOf, createSilvain, damageSilvain, isCoreExposedOf, isSilvainWindingUp,
  nextPattern, phaseForSilvain, stepSilvain,
} from './silvain.ts'

/**
 * 서리실 종지기 실베인 (AF-5 5a). 수치는 전부 docs/13 §S3 표에서 왔다 —
 * 여기서 숫자를 바꾸려면 그 표를 먼저 고친다.
 */

const GROUND_Y = 256
const CTX: SilvainContext = {
  target: { x: 300, y: GROUND_Y - 13 }, groundY: GROUND_Y, hazardRoom: MAX_HAZARDS, ownedHazards: 0,
}
/** 고드름이 아직 떨어지는 중. 박자를 건너뛰어야 한다. */
const CTX_FALLING: SilvainContext = { ...CTX, ownedHazards: 1 }

/** 깨어난 실베인. 패턴 중간으로 뛰어드는 테스트를 위해 스냅샷을 미리 찍어 둔다. */
function boss(patch: Partial<Silvain> = {}): Silvain {
  const base = awakenSilvain(createSilvain(200, GROUND_Y, createRng(7)))
  return { ...base, targetSnapshot: { x: CTX.target.x, y: CTX.target.y }, ...patch }
}

/** 박자 경계까지 돌린다. 대기 상태에서 패턴이 시작되는 그 틱을 반환한다. */
function runToPatternStart(start: Silvain, ctx: SilvainContext = CTX, maxTicks = SILVAIN.beatFrames * 3): {
  boss: Silvain; ticks: number
} {
  let b = start
  for (let i = 1; i <= maxTicks; i += 1) {
    b = stepSilvain(b, ctx, 1 / 60).boss
    if (b.state !== 'idle') return { boss: b, ticks: i }
  }
  return { boss: b, ticks: -1 }
}

describe('수치 — docs/13 §S3', () => {
  it('HP 340 · 경계 204/85', () => {
    expect(SILVAIN.maxHp).toBe(340)
    expect(SILVAIN.phase2Hp).toBe(204)
    expect(SILVAIN.phase3Hp).toBe(85)
    expect(phaseForSilvain(340)).toBe(1)
    expect(phaseForSilvain(205)).toBe(1)
    expect(phaseForSilvain(204)).toBe(2)
    expect(phaseForSilvain(86)).toBe(2)
    expect(phaseForSilvain(85)).toBe(3)
    expect(phaseForSilvain(1)).toBe(3)
  })

  it('박자는 240f — 오디오 시간이 아니라 고정 틱이다', () => {
    expect(SILVAIN.beatFrames).toBe(240)
  })

  it('모든 선행이 48f 이상이다 — 공정성 하한 12f 의 4배', () => {
    for (const spec of Object.values(SILVAIN.patterns)) {
      expect(spec.windupFrames).toBeGreaterThanOrEqual(48)
    }
  })

  it('순환표 — P1 A·B·C, P2 +D, P3 +E, C 가 모든 페이즈에 있다', () => {
    const cycle = (phase: 1 | 2 | 3): SilvainState[] =>
      Array.from({ length: 12 }, (_, i) => nextPattern(phase, i))
    expect(cycle(1).slice(0, 3)).toEqual(['stomp', 'highSilk', 'icicle'])
    expect(cycle(2).slice(0, 5)).toEqual(['stomp', 'highSilk', 'icicle', 'lowSilk', 'icicle'])
    expect(cycle(3).slice(0, 7)).toEqual(['stomp', 'highSilk', 'icicle', 'lowSilk', 'icicle', 'legFold', 'icicle'])
    // 같은 패턴이 연속하지 않는다 (docs/05 §5.3 "같은 패턴 연속 최대 2회").
    for (const phase of [1, 2, 3] as const) {
      const c = cycle(phase)
      for (let i = 1; i < c.length; i += 1) expect(c[i]).not.toBe(c[i - 1])
    }
  })

  it('소환 0 — 거미는 잡몹을 부르지 않는다', () => {
    let b = boss()
    for (let i = 0; i < SILVAIN.beatFrames * 4; i += 1) {
      const step = stepSilvain(b, CTX, 1 / 60)
      expect(step.emission.ghouls).toEqual([])
      b = step.boss
    }
  })
})

describe('박자 — 선행은 박자 경계에서만 시작한다', () => {
  it('대기 중에는 박자 경계까지 기다린다', () => {
    const started = runToPatternStart(boss({ state: 'idle', stateFrames: 0, beatTicks: 1 }))
    expect(started.ticks).toBeGreaterThan(0)
    // 시작한 틱의 beatTicks 는 0 이다 — 경계에서만 넘어간다.
    expect(started.boss.beatTicks).toBe(0)
    expect(started.boss.state).toBe('stomp')
  })

  it('위험물이 남아 있으면 그 박자를 건너뛴다 — 다음 유효 박자에 선행 전체를 다시 낸다', () => {
    let b = boss({ state: 'idle', stateFrames: 0, beatTicks: SILVAIN.beatFrames - 1 })
    // 경계를 지나도 낙하물이 남아 있으면 시작하지 않는다.
    for (let i = 0; i < SILVAIN.beatFrames + 10; i += 1) {
      b = stepSilvain(b, CTX_FALLING, 1 / 60).boss
      expect(b.state).toBe('idle')
    }
    // 낙하물이 사라지면 다음 경계에서 시작한다.
    const resumed = runToPatternStart(b)
    expect(resumed.boss.state).not.toBe('idle')
    expect(resumed.boss.beatTicks).toBe(0)
  })

  it('beatTicks 는 240 에서 되돌아온다', () => {
    let b = boss({ state: 'idle', beatTicks: SILVAIN.beatFrames - 2 })
    b = stepSilvain(b, CTX_FALLING, 1 / 60).boss
    expect(b.beatTicks).toBe(SILVAIN.beatFrames - 1)
    b = stepSilvain(b, CTX_FALLING, 1 / 60).boss
    expect(b.beatTicks).toBe(0)
  })
})

describe('A 앞다리 찍기 — 근접 40px', () => {
  it('예고 중에는 판정이 없고, 활성 12f 동안만 있다', () => {
    const spec = SILVAIN.patterns.stomp
    let b = boss({ state: 'stomp', stateFrames: 0, attackFacing: -1 })
    const armed: number[] = []
    for (let i = 1; i <= spec.windupFrames + spec.activeFrames + spec.recoverFrames; i += 1) {
      b = stepSilvain(b, CTX, 1 / 60).boss
      if (attackBoxesOf(b).length > 0) armed.push(i)
    }
    expect(armed.length).toBe(spec.activeFrames)
    expect(armed[0]).toBe(spec.windupFrames)
  })

  it('상자는 바라보는 쪽 본체 가장자리에서 40×24 다', () => {
    const spec = SILVAIN.patterns.stomp
    const left = boss({ state: 'stomp', stateFrames: spec.windupFrames, attackFacing: -1 })
    const box = attackBoxesOf(left)[0]
    expect(box).toEqual({ x: left.x - spec.reach, y: left.y + SILVAIN.height - spec.height, width: 40, height: 24 })
    const right = boss({ state: 'stomp', stateFrames: spec.windupFrames, attackFacing: 1 })
    expect(attackBoxesOf(right)[0]?.x).toBe(right.x + SILVAIN.width)
  })
})

describe('B 높은 서리실 — 웅크리면 지나간다', () => {
  it('띠는 길이 190 · 높이 8 이고 바닥 위 18px 에서 시작한다', () => {
    const spec = SILVAIN.patterns.highSilk
    const b = boss({ state: 'highSilk', stateFrames: spec.windupFrames, attackFacing: -1 })
    const band = attackBoxesOf(b)[0]
    expect(band?.width).toBe(SILVAIN.silkLengthPx)
    expect(band?.height).toBe(SILVAIN.highSilkHeight)
    expect(GROUND_Y - (band!.y + band!.height)).toBe(SILVAIN.highSilkFloorGap)
  })

  it('웅크림(12×16)은 지나가고 서기(12×26)는 맞는다 — 회피의 불변식', () => {
    const spec = SILVAIN.patterns.highSilk
    const b = boss({ state: 'highSilk', stateFrames: spec.windupFrames, attackFacing: -1 })
    const band = attackBoxesOf(b)[0]!
    const x = b.x - 60
    expect(overlaps(band, { x, y: GROUND_Y - 16, width: 12, height: 16 })).toBe(false)
    expect(overlaps(band, { x, y: GROUND_Y - 26, width: 12, height: 26 })).toBe(true)
  })
})

describe('D 바닥 실쓸기 — 뛰어야 넘는다', () => {
  it('띠는 지면에 붙어 높이 14 다 — 웅크림은 맞는다', () => {
    const spec = SILVAIN.patterns.lowSilk
    const b = boss({ state: 'lowSilk', stateFrames: spec.windupFrames, attackFacing: -1 })
    const band = attackBoxesOf(b)[0]!
    expect(band.height).toBe(SILVAIN.lowSilkHeight)
    expect(band.y + band.height).toBe(GROUND_Y)
    const x = b.x - 60
    expect(overlaps(band, { x, y: GROUND_Y - 16, width: 12, height: 16 })).toBe(true)
  })

  it('B 와 D 의 판정 틱은 서로 겹치지 않는다 — 웅크림과 점프를 동시에 요구하지 않는다', () => {
    // 상태가 단일 값이라 "같은 틱에 두 상태" 는 구조상 불가능하다. 그래서 구조가 아니라
    // 시간 분리를 본다: 판정이 살아 있던 틱 번호를 각각 모아 교집합이 비는지 확인한다.
    const highTicks = new Set<number>()
    const lowTicks = new Set<number>()
    let b = boss({ state: 'idle', beatTicks: SILVAIN.beatFrames - 1, phase: 2, hp: SILVAIN.phase2Hp })
    for (let i = 0; i < SILVAIN.beatFrames * 8; i += 1) {
      b = stepSilvain(b, CTX, 1 / 60).boss
      const active = attackBoxesOf(b).length > 0
      if (active && b.state === 'highSilk') highTicks.add(i)
      if (active && b.state === 'lowSilk') lowTicks.add(i)
      // 한 틱에 활성 상자는 1개다(C 고드름은 위험물이라 여기 없다).
      expect(attackBoxesOf(b).length).toBeLessThanOrEqual(1)
    }
    // 두 집합이 비어 있으면 교집합도 비어서 공허 통과한다. 먼저 둘 다 실제로 발생했음을 못박는다.
    expect(highTicks.size).toBeGreaterThan(0)
    expect(lowTicks.size).toBeGreaterThan(0)
    const overlap = [...highTicks].filter((t) => lowTicks.has(t))
    expect(overlap).toEqual([])
  })
})

describe('C 고드름 — 낙하물은 위험물로 낸다', () => {
  it('예고 뒤 3개를 폭 160px 로 내보낸다 — 간격 80px', () => {
    const spec = SILVAIN.patterns.icicle
    let b = boss({ state: 'icicle', stateFrames: spec.windupFrames - 1 })
    const step = stepSilvain(b, CTX, 1 / 60)
    const rocks = step.emission.rocks
    expect(rocks).toHaveLength(spec.count)
    const xs = rocks.map((r) => r.x).sort((a, z) => a - z)
    expect(xs[2]! - xs[0]!).toBe(SILVAIN.icicleSpreadPx)
    expect(xs[1]! - xs[0]!).toBe(SILVAIN.icicleSpreadPx / 2)
    // 낙하 시작점은 바닥에서 200px 위다.
    for (const r of rocks) expect(r.y).toBe(GROUND_Y - SILVAIN.icicleDropPx)
    b = step.boss
    // 고드름은 보스 파츠가 아니다 — 상자로 세지 않는다.
    expect(attackBoxesOf(b)).toEqual([])
  })

  it('겨냥은 스냅샷을 쓴다 — 예고 중에 도망가도 표식이 따라오지 않는다', () => {
    const spec = SILVAIN.patterns.icicle
    let b = boss({ state: 'icicle', stateFrames: 0 })
    let rocks: readonly { x: number; y: number }[] = []
    for (let i = 1; i <= spec.windupFrames; i += 1) {
      // 선행 도중 플레이어가 300px 도망간다.
      const moving: SilvainContext = { ...CTX, target: { x: CTX.target.x + 300 * (i / spec.windupFrames), y: CTX.target.y } }
      const step = stepSilvain(b, moving, 1 / 60)
      b = step.boss
      if (step.emission.rocks.length > 0) rocks = step.emission.rocks
    }
    expect(rocks).toHaveLength(spec.count)
    // 스냅샷(=첫 틱의 목표) 중심이다.
    const center = rocks.map((r) => r.x).sort((a, z) => a - z)[1]!
    expect(Math.abs(center - CTX.target.x)).toBeLessThanOrEqual(SILVAIN.icicleSpreadPx / 4)
  })

  it('고드름이 남아 있으면 C 가 끝나지 않는다 — 회복 타이머만 보지 않는다', () => {
    const spec = SILVAIN.patterns.icicle
    let b = boss({ state: 'icicle', stateFrames: 0 })
    for (let i = 0; i < spec.windupFrames + spec.recoverFrames + 60; i += 1) {
      b = stepSilvain(b, CTX_FALLING, 1 / 60).boss
    }
    expect(b.state).toBe('icicle')
    expect(stepSilvain(b, CTX, 1 / 60).boss.state).toBe('idle')
  })

  it('자리가 없으면 예고조차 하지 않는다 — 순환 위치를 지키고 다음 박자에 다시 시도한다', () => {
    const full: SilvainContext = { ...CTX, hazardRoom: 0 }
    let b = boss({ state: 'idle', beatTicks: SILVAIN.beatFrames - 1, cycleIndex: 2 })
    for (let i = 0; i < SILVAIN.beatFrames * 2; i += 1) {
      const step = stepSilvain(b, full, 1 / 60)
      expect(step.emission.rocks).toEqual([])
      b = step.boss
      expect(b.state).toBe('idle')
    }
    // 자리가 생기면 건너뛰었던 C 를 그대로 시작한다 — 순환이 밀리지 않는다.
    const resumed = runToPatternStart(b)
    expect(resumed.boss.state).toBe('icicle')
  })
})

describe('E 다리 접기 — 좌우 순차 2타', () => {
  it('왼쪽 다음 오른쪽, 동시에 한쪽만 활성', () => {
    const spec = SILVAIN.patterns.legFold
    let b = boss({ state: 'legFold', stateFrames: 0, phase: 3, hp: SILVAIN.phase3Hp })
    const sides: number[] = []
    for (let i = 0; i < (spec.windupFrames + spec.activeFrames + spec.recoverFrames) * 2 + 10; i += 1) {
      b = stepSilvain(b, CTX, 1 / 60).boss
      const boxes = attackBoxesOf(b)
      expect(boxes.length).toBeLessThanOrEqual(1)
      const box = boxes[0]
      if (box !== undefined) {
        const side = box.x < b.x ? -1 : 1
        if (sides.at(-1) !== side) sides.push(side)
      }
    }
    expect(sides).toEqual([-1, 1])
    expect(b.state).toBe('idle')
  })

  it('타수마다 다시 예고한다 — 두 번째 타도 48f 를 받는다', () => {
    const spec = SILVAIN.patterns.legFold
    let b = boss({ state: 'legFold', stateFrames: 0, phase: 3, hp: SILVAIN.phase3Hp })
    let windupTicks = 0
    for (let i = 0; i < (spec.windupFrames + spec.activeFrames + spec.recoverFrames) * 2; i += 1) {
      b = stepSilvain(b, CTX, 1 / 60).boss
      if (isSilvainWindingUp(b)) windupTicks += 1
    }
    // 48f 예고 × 2타 = 96 이지만 틱 0(진입 직전)은 관측하지 않으므로 95 다.
    expect(windupTicks).toBe(spec.windupFrames * 2 - 1)
  })
})

describe('피해·상태', () => {
  it('코어는 1배, 다른 부위는 0.5배', () => {
    const b = boss()
    expect(damageSilvain(b, 10, coreBoxOf(b)).dealt).toBe(10)
    // 코어를 비켜 몸통만 맞히는 상자. 몸통 전체를 주면 코어도 포함되어 1배가 된다.
    const body = bodyBoxOf(b)
    const shoulder = { x: body.x, y: body.y, width: 8, height: 8 }
    expect(overlaps(shoulder, coreBoxOf(b))).toBe(false)
    expect(damageSilvain(b, 10, shoulder).dealt).toBe(5)
  })

  it('페이즈가 오르면 다음 패턴은 C 다', () => {
    const b = boss({ hp: SILVAIN.phase2Hp + 5 })
    const hit = damageSilvain(b, 100, coreBoxOf(b))
    expect(hit.boss.phase).toBe(2)
    expect(nextPattern(2, hit.boss.cycleIndex)).toBe('icicle')
  })

  it('죽으면 판정이 사라진다', () => {
    const b = boss({ state: 'stomp', stateFrames: SILVAIN.patterns.stomp.windupFrames, hp: 1 })
    expect(attackBoxesOf(b).length).toBe(1)
    const dead = damageSilvain(b, 999, coreBoxOf(b)).boss
    expect(dead.state).toBe('dead')
    expect(attackBoxesOf(dead)).toEqual([])
  })

  it('E 중에는 코어가 드러난다', () => {
    expect(isCoreExposedOf(boss({ state: 'legFold' }))).toBe(true)
    expect(isCoreExposedOf(boss({ state: 'idle' }))).toBe(false)
  })

  it('예고 중에는 유해 상자가 없다 — 겹치면 즉시 실패', () => {
    let b = boss({ state: 'idle', beatTicks: SILVAIN.beatFrames - 1, phase: 3, hp: SILVAIN.phase3Hp })
    for (let i = 0; i < SILVAIN.beatFrames * 8; i += 1) {
      b = stepSilvain(b, CTX, 1 / 60).boss
      expect(attackBoxesOf(b).length > 0 && isSilvainWindingUp(b)).toBe(false)
    }
  })

  it('입력을 바꾸지 않는다', () => {
    const b = boss({ state: 'icicle', stateFrames: 3 })
    const before = JSON.stringify(b)
    stepSilvain(b, CTX, 1 / 60)
    expect(JSON.stringify(b)).toBe(before)
  })
})
