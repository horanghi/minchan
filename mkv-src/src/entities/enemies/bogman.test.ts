import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, type Enemy } from './enemy.ts'
import { BOGMAN, isEmerging, isSubmerged, stepBogman } from './bogman.ts'

/**
 * 늪지기 (Bogman) — AT-2 S4 전용 잡몹.
 *
 * "물속 잠복 → 랜슬 접근 시 도약." 잠복은 보이지 않는 위협이므로
 * **예고가 전부다** — 솟아오르는 동안은 아직 아무도 다치지 않는다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16
const GRAVITY = 1750

const MAP = parseTilemap([
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '####################',
])
const GROUND_Y = 7 * SIZE

/** 늪 바닥에 잠복한 늪지기. 기본 상태는 언제나 잠복이다. */
function bog(x = 100): Enemy {
  return createEnemy(1, 'bogman', x, GROUND_Y - 20, createRng(1), 'submerged')
}

function run(enemy: Enemy, ticks: number, target: { x: number; y: number }): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepBogman(e, MAP, target, GRAVITY, DT)
  return e
}

/** 상태가 바뀔 때까지 돌린다. 비행 시간을 테스트가 손으로 세지 않게. */
function until(
  enemy: Enemy,
  state: string,
  target: { x: number; y: number },
  limit = 400,
): Enemy {
  let e = enemy
  for (let i = 0; i < limit && e.state !== state; i += 1) {
    e = stepBogman(e, MAP, target, GRAVITY, DT)
  }
  return e
}

/** 늪지기 바로 옆. 반경 안이다. */
const NEAR = { x: 150, y: GROUND_Y }
/** 반경 밖. 잠복이 풀리지 않는 거리. */
const FAR = { x: 300, y: GROUND_Y }

describe('늪지기 잠복', () => {
  it('기본 상태는 잠복이다 — 플레이어가 멀면 움직이지 않는다', () => {
    const still = run(bog(), 30, FAR)

    expect(still.state).toBe('submerged')
    expect(still.body.x).toBe(100)
    expect(still.body.vx).toBe(0)
  })

  it('잠복 중에는 피격도 피해도 없다 — 물속의 것은 판정 밖이다', () => {
    expect(isSubmerged(bog())).toBe(true)
  })

  it('죽었거나 다른 종류면 잠복이 아니다 — 월드가 시체를 무적으로 착각하지 않게', () => {
    expect(isSubmerged({ ...bog(), dead: true })).toBe(false)
    expect(isSubmerged(createEnemy(2, 'ghoul', 100, 92, createRng(1), 'submerged'))).toBe(false)
  })
})

describe('늪지기 예고', () => {
  it('플레이어가 반경에 들어오면 솟아오른다 — 잠복은 여기서 풀린다', () => {
    const warned = run(bog(), 1, NEAR)
    expect(warned.state).toBe('surface')
  })

  it('예고 없이 튀어나오지 않는다 — 잠복에서 곧장 도약할 수 없다', () => {
    // 플레이어가 바로 위에 붙어 있어도 한 틱 만에 도약하지 않는다.
    const onTop = { x: 107, y: 102 }
    let e = stepBogman(bog(), MAP, onTop, GRAVITY, DT)
    expect(e.state).toBe('surface')

    for (let i = 0; i < BOGMAN.surfaceFrames - 1; i += 1) {
      e = stepBogman(e, MAP, onTop, GRAVITY, DT)
      expect(e.state).toBe('surface')
    }
  })

  it('예고는 16프레임 이상이다 — 물결을 보고 비킬 시간을 준다', () => {
    // 원칙 2 의 하한은 12프레임이지만, 잠복은 위치 자체가 안 보이므로 더 길다.
    expect(BOGMAN.surfaceFrames).toBeGreaterThanOrEqual(16)

    const warned = run(bog(), BOGMAN.surfaceFrames, NEAR)
    expect(warned.state).toBe('surface')
  })

  it('예고 중에는 아직 피해를 주지 않는다 — 솟는 중에 맞는 것은 부당하다', () => {
    const warned = run(bog(), 1, NEAR)
    expect(isEmerging(warned)).toBe(true)
  })

  it('예고 중에는 때릴 수 있다 — 반응한 플레이어에게 돌아오는 것이 있어야 한다', () => {
    // 잠복(안 보임)과 예고(보임)는 다르다. 보이는데 때릴 수 없으면
    // 예고가 경고가 아니라 유예가 된다. 그림·까마귀·낙뢰 전부 예고 중 피격된다.
    const warned = run(bog(), 1, NEAR)
    expect(isSubmerged(warned)).toBe(false)
  })
})

describe('늪지기 도약', () => {
  it('예고가 끝나면 위쪽 + 플레이어 방향으로 도약한다', () => {
    const leaping = run(bog(), BOGMAN.surfaceFrames + 1, NEAR)

    expect(leaping.state).toBe('leap')
    expect(leaping.body.vy).toBeLessThan(0)
    expect(leaping.body.vx).toBeGreaterThan(0)

    const airborne = run(leaping, 5, NEAR)
    expect(airborne.body.y).toBeLessThan(leaping.body.y)
  })

  it('도약 방향은 예고 시점에 고정된다 — 공중에서 따라오면 회피가 불가능하다', () => {
    const warned = run(bog(), 1, NEAR)
    expect(warned.state).toBe('surface')
    expect(warned.facing).toBe(1)

    // 예고를 읽고 반대편으로 빠져나간 플레이어. 도약은 여전히 오른쪽이다.
    const behind = { x: 20, y: GROUND_Y }
    const leaping = run(warned, BOGMAN.surfaceFrames, behind)
    expect(leaping.state).toBe('leap')
    expect(leaping.body.vx).toBeGreaterThan(0)

    const flying = run(leaping, 6, behind)
    expect(flying.body.vx).toBeGreaterThan(0)
    expect(flying.body.x).toBeGreaterThan(leaping.body.x)
  })

  it('도약 속도는 플레이어 달리기(110)보다 느리다 — 뒤로 빠지면 벗어난다', () => {
    expect(BOGMAN.leapVx).toBeLessThan(110)
  })

  it('공중에 뜬 늪지기는 판정이 살아 있다 — 잠복이 아니다', () => {
    const leaping = run(bog(), BOGMAN.surfaceFrames + 1, NEAR)
    expect(isSubmerged(leaping)).toBe(false)
  })
})

describe('늪지기 착지와 복귀', () => {
  it('착지하면 무방비가 된다 — 이 창이 유일한 확정 공격 타이밍이다', () => {
    const leaping = run(bog(), BOGMAN.surfaceFrames + 1, NEAR)
    const landed = until(leaping, 'recover', NEAR)

    expect(landed.state).toBe('recover')
    expect(landed.body.onGround).toBe(true)
    expect(isSubmerged(landed)).toBe(false)
    expect(BOGMAN.recoverFrames).toBeGreaterThanOrEqual(30)
  })

  it('무방비가 끝나면 다시 잠복한다 — 한 번 쓰고 사라지는 적이 아니다', () => {
    const leaping = run(bog(), BOGMAN.surfaceFrames + 1, NEAR)
    const landed = until(leaping, 'recover', NEAR)
    const back = run(landed, BOGMAN.recoverFrames + 1, FAR)

    expect(back.state).toBe('submerged')
    expect(isSubmerged(back)).toBe(true)
  })
})

describe('늪지기 불변식', () => {
  it('죽은 늪지기는 아무것도 하지 않는다', () => {
    const dead = { ...bog(), dead: true }
    expect(stepBogman(dead, MAP, NEAR, GRAVITY, DT)).toBe(dead)
  })

  it('원본을 건드리지 않는다 — 리플레이가 여기에 기댄다', () => {
    const start = bog()
    const snapshot = JSON.stringify(start)
    stepBogman(start, MAP, NEAR, GRAVITY, DT)
    expect(JSON.stringify(start)).toBe(snapshot)
  })

  it('알 수 없는 스폰 상태는 잠복으로 시작한다 — 배치 실수가 무예고 도약이 되지 않게', () => {
    const spawned = createEnemy(1, 'bogman', 100, GROUND_Y - 20, createRng(1))
    const next = stepBogman(spawned, MAP, FAR, GRAVITY, DT)
    expect(next.state).toBe('submerged')
  })
})
