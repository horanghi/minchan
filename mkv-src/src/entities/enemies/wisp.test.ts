import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { overlaps, type Aabb } from '../../physics/aabb.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, createEnemy, type Enemy } from './enemy.ts'
import { isMaterialized, isSettling, stepWisp, WISP } from './wisp.ts'

/**
 * 번개령 (Wisp) — AT-2 신규 잡몹, S5 눈먼 갱도.
 *
 * "번개 칠 때만 실체화 · 그 외 무적". 낙뢰(Levin)의 번개가 곧 이 적의
 * 공격 창이라, 갱도에서 둘은 한 세트로 읽힌다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60

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

function wisp(x = 100, y = 32, state = 'ghost'): Enemy {
  return createEnemy(1, 'wisp', x, y, createRng(1), state)
}

function centerOf(enemy: Enemy): { x: number; y: number } {
  return { x: enemy.body.x + enemy.body.width / 2, y: enemy.body.y + enemy.body.height / 2 }
}

/** 플레이어 히트박스 12×26 을 중심 좌표에 맞춰 세운다. → src/data/player.json */
function playerBoxAt(center: { x: number; y: number }): Aabb {
  return { x: center.x - 6, y: center.y - 13, width: 12, height: 26 }
}

function gapTo(enemy: Enemy, target: { x: number; y: number }): number {
  const c = centerOf(enemy)
  return Math.hypot(c.x - target.x, c.y - target.y)
}

function run(
  enemy: Enemy,
  ticks: number,
  target: { x: number; y: number },
  lightning = false,
): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepWisp(e, MAP, target, { lightning }, DT)
  return e
}

describe('번개령 부유', () => {
  it('중력이 없다 — 가로로만 다가와도 고도가 내려가지 않는다', () => {
    const start = wisp()
    const level = { x: 300, y: centerOf(start).y }
    const floated = run(start, 120, level)

    expect(floated.body.y).toBe(start.body.y)
    expect(floated.body.x).toBeGreaterThan(start.body.x)
  })

  it('아주 느리게 떠다닌다 — 도망칠 수 있어야 한다', () => {
    // 플레이어 걷기(90px/s)의 절반 이하. 무적인 적이 빠르기까지 하면 부당하다.
    expect(WISP.speed).toBeLessThanOrEqual(45)
  })

  it('실체일 때는 부드럽게 붙고, 붙은 뒤에는 튀지 않는다', () => {
    // 보이고 때릴 수 있는 동안에는 따라붙어도 공정하다.
    const start = wisp(100, 32, 'real')
    const target = { x: 300, y: 90 }
    const near = run(start, 900, target, true)
    const gap = centerOf(near)

    expect(Math.abs(gap.x - target.x)).toBeLessThanOrEqual(3)
    expect(Math.abs(gap.y - target.y)).toBeLessThanOrEqual(3)
  })

  it('실체일 때도 계속 떠다닌다 — 멈춰서 표적이 되지는 않는다', () => {
    const start = wisp(100, 32, 'real')
    const moved = run(start, 60, { x: 300, y: centerOf(start).y }, true)

    expect(moved.state).toBe('real')
    expect(moved.body.x).toBeGreaterThan(start.body.x)
  })
})

describe('번개령 이격', () => {
  it('유령은 플레이어 히트박스 안으로 들어오지 않는다 — 겹친 채 실체화하면 회피가 불가능하다', () => {
    const target = { x: 140, y: 38 }
    const box = playerBoxAt(target)
    let e = wisp(100, 32)

    // 무적 창 내내 따라다녀도 한 번도 겹치지 않는다.
    for (let i = 0; i < WISP.ghostFrames - 1; i += 1) {
      e = stepWisp(e, MAP, target, { lightning: false }, DT)
      expect(e.state).toBe('ghost')
      expect(overlaps(boxOfEnemy(e), box)).toBe(false)
    }

    // 최소 이격 근처에서 멎는다 — 더 붙지도, 튕겨 나가지도 않는다.
    expect(gapTo(e, target)).toBeGreaterThanOrEqual(WISP.standoff)
    expect(gapTo(e, target)).toBeLessThanOrEqual(WISP.standoff + 2)
  })

  it('어느 방향에서 다가와도 유령은 히트박스 밖에 머문다 — 플레이어는 세로로 길다', () => {
    const target = { x: 160, y: 56 }
    const box = playerBoxAt(target)

    for (let deg = 0; deg < 360; deg += 45) {
      const rad = (deg * Math.PI) / 180
      let e = wisp(target.x + Math.cos(rad) * 40 - 5, target.y + Math.sin(rad) * 40 - 6)

      for (let i = 0; i < WISP.ghostFrames - 1; i += 1) {
        e = stepWisp(e, MAP, target, { lightning: false }, DT)
        expect(overlaps(boxOfEnemy(e), box)).toBe(false)
      }
      expect(gapTo(e, target)).toBeGreaterThanOrEqual(WISP.standoff)
    }
  })

  it('이격 안쪽에서 시작하면 물러난다 — 겹친 채로 버티지 않는다', () => {
    const target = { x: 110, y: 38 }
    const cornered = run(wisp(100, 32), 120, target)

    expect(cornered.state).toBe('ghost')
    expect(gapTo(cornered, target)).toBeGreaterThan(gapTo(wisp(100, 32), target))
    expect(overlaps(boxOfEnemy(cornered), playerBoxAt(target))).toBe(false)
  })

  it('주기를 몇 바퀴 돌아도 실체가 되는 순간에는 겹쳐 있지 않다 — 예고 0프레임이 없다', () => {
    const target = { x: 140, y: 38 }
    const box = playerBoxAt(target)
    let e = wisp(100, 32)
    let materializations = 0

    for (let i = 0; i < (WISP.ghostFrames + WISP.realFrames) * 3; i += 1) {
      e = stepWisp(e, MAP, target, { lightning: false }, DT)
      if (!isMaterialized(e) || e.stateFrames !== 0) continue
      // 실체가 된 그 틱. 여기서 겹쳐 있으면 회피 프레임이 0이다.
      materializations += 1
      expect(overlaps(boxOfEnemy(e), box)).toBe(false)
    }

    expect(materializations).toBeGreaterThanOrEqual(3)
  })

  it('최소 이격은 두 히트박스의 대각 반각보다 넓다 — 비스듬히 붙어도 안 겹친다', () => {
    // 플레이어 12×26, 번개령 10×12 → 가로 11 · 세로 19 → 대각 21.95
    expect(WISP.standoff).toBeGreaterThan(Math.hypot(11, 19))
  })
})

describe('번개령 실체화', () => {
  it('기본은 무적이다 — 때릴 수 없고, 때리지도 않는다', () => {
    const start = wisp()
    expect(isMaterialized(start)).toBe(false)

    const drifting = run(start, 30, { x: 120, y: 40 })
    expect(drifting.state).toBe('ghost')
    // 무적과 무해는 한 쌍이다. 하나의 술어가 피격 가능성과 접촉 피해를 함께 정한다.
    expect(isMaterialized(drifting)).toBe(false)
  })

  it('알 수 없는 스폰 상태는 무적으로 시작한다', () => {
    const spawned = createEnemy(1, 'wisp', 100, 32, createRng(1))
    const next = stepWisp(spawned, MAP, { x: 120, y: 40 }, { lightning: false }, DT)

    expect(next.state).toBe('ghost')
    expect(isMaterialized(next)).toBe(false)
  })

  it('번개가 치면 즉시 실체화한다 — 낙뢰의 번개가 곧 공격 창이다', () => {
    const struck = run(wisp(), 1, { x: 120, y: 40 }, true)

    expect(struck.state).toBe('real')
    expect(isMaterialized(struck)).toBe(true)
  })

  it('번개가 이어지는 동안에는 실체를 유지한다', () => {
    const struck = run(wisp(), WISP.realFrames * 3, { x: 120, y: 40 }, true)
    expect(isMaterialized(struck)).toBe(true)
  })

  it('번개가 길게 이어진 뒤 그치면 다시 무적으로 돌아간다', () => {
    const struck = run(wisp(), WISP.realFrames + 5, { x: 120, y: 40 }, true)
    const faded = run(struck, 1, { x: 120, y: 40 })

    expect(faded.state).toBe('ghost')
    expect(isMaterialized(faded)).toBe(false)
  })

  it('번개가 스치듯 지나가도 때릴 틈은 남는다 — 창 없이 사라지면 부당하다', () => {
    const struck = run(wisp(), 1, { x: 120, y: 40 }, true)
    const after = run(struck, 30, { x: 120, y: 40 })

    expect(isMaterialized(after)).toBe(true)
  })

  it('번개가 없어도 혼자 실체화 주기를 돈다 — 낙뢰 없는 구간에서도 잡을 수 있다', () => {
    const target = { x: 120, y: 40 }
    const still = run(wisp(), WISP.ghostFrames - 1, target)
    expect(still.state).toBe('ghost')

    const surfaced = run(wisp(), WISP.ghostFrames, target)
    expect(isMaterialized(surfaced)).toBe(true)

    const back = run(wisp(), WISP.ghostFrames + WISP.realFrames, target)
    expect(isMaterialized(back)).toBe(false)
  })

  it('실체 창은 때릴 수 있을 만큼 길고, 무적 창보다 짧다', () => {
    // 1초는 있어야 다가가 때린다. 그러면서도 무적이 기본이어야 정체성이 산다.
    expect(WISP.realFrames).toBeGreaterThanOrEqual(60)
    expect(WISP.realFrames).toBeLessThan(WISP.ghostFrames)
  })

  it('죽은 번개령은 아무것도 하지 않고, 실체도 아니다', () => {
    const dead = { ...wisp(100, 32, 'real'), dead: true }

    expect(stepWisp(dead, MAP, { x: 120, y: 40 }, { lightning: true }, DT)).toBe(dead)
    expect(isMaterialized(dead)).toBe(false)
  })

  it('번개령이 아닌 적은 이 판정을 쓰지 않는다', () => {
    const impostor = createEnemy(2, 'ghoul', 100, 32, createRng(1), 'real')
    expect(isMaterialized(impostor)).toBe(false)
  })
})

describe('번개령 실체화 램프', () => {
  const TARGET = { x: 120, y: 40 }

  it('실체화 직후 12프레임은 아직 때리지 않는다 — 몸이 맺히는 시간이 곧 예고다', () => {
    expect(WISP.materializeGraceFrames).toBeGreaterThanOrEqual(12)

    let e = run(wisp(), 1, TARGET, true)
    expect(isSettling(e)).toBe(true)

    for (let i = 1; i < WISP.materializeGraceFrames; i += 1) {
      e = stepWisp(e, MAP, TARGET, { lightning: true }, DT)
      expect(isSettling(e)).toBe(true)
    }

    // 램프가 끝나면 여느 접촉 적과 같아진다.
    expect(isSettling(stepWisp(e, MAP, TARGET, { lightning: true }, DT))).toBe(false)
  })

  it('실체화 직후에도 맞을 수는 있다 — 무해한 것과 못 때리는 것은 다르다', () => {
    const struck = run(wisp(), 1, TARGET, true)

    expect(isMaterialized(struck)).toBe(true)
    expect(isSettling(struck)).toBe(true)
  })

  it('번개 없이 스스로 실체화할 때도 램프를 거친다 — 주기가 예고를 건너뛰지 않는다', () => {
    const surfaced = run(wisp(), WISP.ghostFrames, TARGET)

    expect(isMaterialized(surfaced)).toBe(true)
    expect(isSettling(surfaced)).toBe(true)
  })

  it('유령·시체·다른 적은 이 구간이 아니다', () => {
    expect(isSettling(wisp())).toBe(false)
    expect(isSettling({ ...wisp(100, 32, 'real'), dead: true })).toBe(false)
    expect(isSettling(createEnemy(2, 'ghoul', 100, 32, createRng(1), 'real'))).toBe(false)
  })

  it('램프는 실체 창보다 훨씬 짧다 — 예고가 창을 다 먹으면 못 잡는 적이 된다', () => {
    expect(WISP.materializeGraceFrames).toBeLessThan(WISP.realFrames / 2)
  })
})
