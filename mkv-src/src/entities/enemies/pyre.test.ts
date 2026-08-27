import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, type Enemy } from './enemy.ts'
import { GHOUL } from './ghoul.ts'
import { PYRE, flameBoxOfPyre, stepPyre } from './pyre.ts'

/**
 * 소각인 (Pyre) — AT-2, S2 불타는 마령촌 전용 잡몹.
 *
 * "근접 화염 방사, 느림". 화염귀가 먼 거리를 맡고 이쪽이 가까운 거리를 맡는다.
 * HP 45 라 밀어낼 수 없으므로, **느린 대신 반드시 읽히는** 적이어야 한다 —
 * 24프레임 예고 · 예고 중 무해 · 구덩이 앞에서 선다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16
const GRAVITY = 900

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

/** tx5~tx9(x 80~159)가 끊긴 맵. 구덩이 회피 검증용. */
const PIT_MAP = parseTilemap([
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '#####.....##########',
])

const GROUND_Y = 7 * SIZE
/** 소각인은 14x24 다. 지면에 세우면 y 는 여기다. */
const STAND_Y = GROUND_Y - 24
const PIT_LEFT = 5 * SIZE

function pyre(x = 100): Enemy {
  return createEnemy(1, 'pyre', x, STAND_Y, createRng(1), 'walk')
}

function run(
  enemy: Enemy,
  ticks: number,
  target: { readonly x: number; readonly y: number },
  map = MAP,
): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepPyre(e, map, target, GRAVITY, DT)
  return e
}

/** 소각인과 같은 높이, 사정권 밖의 플레이어. */
function farRight(): { x: number; y: number } {
  return { x: 900, y: STAND_Y + 12 }
}

/** 화염 사정권 안의 플레이어. */
const CLOSE_RIGHT = { x: 120, y: STAND_Y + 12 }

describe('소각인 전진', () => {
  it('좀비보다 느리다 — 느린 것이 이 적의 유일한 방어책이다', () => {
    expect(PYRE.speed).toBeLessThan(GHOUL.speed)
  })

  it('플레이어를 향해 전진한다', () => {
    const start = pyre()
    const moved = run(start, 60, farRight())

    expect(moved.state).toBe('walk')
    expect(moved.facing).toBe(1)
    expect(moved.body.x).toBeGreaterThan(start.body.x)
  })

  it('플레이어가 뒤에 있으면 돌아선다', () => {
    const moved = run(pyre(), 60, { x: 10, y: STAND_Y + 12 })

    expect(moved.facing).toBe(-1)
    expect(moved.body.x).toBeLessThan(100)
  })

  it('구덩이에 스스로 걸어 들어가지 않는다 — 건너편의 플레이어를 쫓더라도', () => {
    const start = pyre(32)
    const stopped = run(start, 600, { x: 200, y: STAND_Y + 12 }, PIT_MAP)

    // 구덩이 왼쪽 끝을 넘지 않았고, 떨어지지도 않았다.
    expect(stopped.body.x + stopped.body.width).toBeLessThanOrEqual(PIT_LEFT)
    expect(stopped.body.y).toBe(STAND_Y)
    expect(stopped.body.vx).toBe(0)
    // 멈춰 서도 플레이어를 계속 노려본다 — 등을 돌리며 떨지 않는다.
    expect(stopped.facing).toBe(1)
  })

  it('알 수 없는 스폰 상태는 걷기로 시작한다', () => {
    const spawned = createEnemy(1, 'pyre', 100, STAND_Y, createRng(1))
    expect(stepPyre(spawned, MAP, farRight(), GRAVITY, DT).state).toBe('walk')
  })
})

describe('소각인 예고', () => {
  it('근접해도 즉시 뿜지 않는다 — 먼저 예고한다', () => {
    const next = stepPyre(pyre(), MAP, CLOSE_RIGHT, GRAVITY, DT)

    expect(next.state).toBe('windup')
    expect(next.body.vx).toBe(0)
  })

  it('예고는 24프레임 이상이다 — HP 45 를 밀어낼 수 없으니 더 길게 읽힌다', () => {
    expect(PYRE.windupFrames).toBeGreaterThanOrEqual(24)
  })

  it('예고 중에는 화염 판정이 없다 — 예고 없는 공격은 없다', () => {
    for (let i = 1; i <= PYRE.windupFrames; i += 1) {
      const held = run(pyre(), i, CLOSE_RIGHT)
      expect(held.state).toBe('windup')
      expect(flameBoxOfPyre(held)).toBeNull()
    }
  })

  it('예고 중에는 움직이지 않는다 — 예고와 함께 파고들지 않는다', () => {
    const start = pyre()
    const wound = run(start, PYRE.windupFrames, CLOSE_RIGHT)
    expect(wound.body.x).toBe(start.body.x)
  })
})

describe('소각인 화염 방사', () => {
  function breathing(): Enemy {
    return run(pyre(), PYRE.windupFrames + 1, CLOSE_RIGHT)
  }

  it('예고가 끝나면 전방에 화염 판정이 생긴다', () => {
    const e = breathing()
    expect(e.state).toBe('breathe')

    const flame = flameBoxOfPyre(e)
    expect(flame).not.toBeNull()
    expect(flame!.width).toBe(PYRE.flameWidth)
  })

  it('화염은 바라보는 쪽으로만 뻗는다', () => {
    const e = breathing()
    const flame = flameBoxOfPyre(e)!
    expect(e.facing).toBe(1)
    expect(flame.x).toBeGreaterThan(e.body.x)

    // 왼쪽을 볼 때는 반대편이다.
    const left = run(pyre(), PYRE.windupFrames + 1, { x: 80, y: STAND_Y + 12 })
    const leftFlame = flameBoxOfPyre(left)!
    expect(left.facing).toBe(-1)
    expect(leftFlame.x + leftFlame.width).toBeLessThan(left.body.x + left.body.width)
  })

  it('근접 무기다 — 사거리가 화염귀의 영역까지 넘어오지 않는다', () => {
    expect(PYRE.flameWidth).toBeGreaterThanOrEqual(30)
    expect(PYRE.flameWidth).toBeLessThanOrEqual(48)
  })

  it('화염은 몸통 높이를 넘지 않는다 — 뛰어넘을 수 있어야 한다', () => {
    const e = breathing()
    const flame = flameBoxOfPyre(e)!

    expect(flame.y).toBeGreaterThanOrEqual(e.body.y)
    expect(flame.y + flame.height).toBeLessThanOrEqual(e.body.y + e.body.height)
  })

  it('뿜는 동안에는 멈춘다 — 화염과 함께 밀고 들어오지 않는다', () => {
    const start = breathing()
    const later = run(start, 10, CLOSE_RIGHT)

    expect(later.state).toBe('breathe')
    expect(later.body.x).toBe(start.body.x)
    expect(later.body.vx).toBe(0)
  })

  it('화염은 영원하지 않다 — 끝나면 판정이 사라지고 재충전한다', () => {
    const cooling = run(pyre(), PYRE.windupFrames + PYRE.breatheFrames + 2, CLOSE_RIGHT)

    expect(cooling.state).toBe('cooldown')
    expect(flameBoxOfPyre(cooling)).toBeNull()
  })

  it('재충전이 끝나면 다시 걷는다', () => {
    const cooling = run(pyre(), PYRE.windupFrames + PYRE.breatheFrames + 2, CLOSE_RIGHT)
    const walking = run(cooling, PYRE.cooldownFrames + 1, farRight())

    expect(walking.state).toBe('walk')
  })

  it('재충전 중에는 다시 뿜지 않는다 — 붙어 있어도 연속 화염은 없다', () => {
    let e = run(pyre(), PYRE.windupFrames + PYRE.breatheFrames + 2, CLOSE_RIGHT)
    expect(e.state).toBe('cooldown')

    for (let i = 0; i < PYRE.cooldownFrames; i += 1) {
      e = stepPyre(e, MAP, CLOSE_RIGHT, GRAVITY, DT)
      expect(flameBoxOfPyre(e)).toBeNull()
    }
  })
})

describe('소각인 가드', () => {
  it('죽은 소각인은 아무것도 하지 않는다', () => {
    const breathing = run(pyre(), PYRE.windupFrames + 1, CLOSE_RIGHT)
    const dead = { ...breathing, dead: true }

    expect(stepPyre(dead, MAP, CLOSE_RIGHT, GRAVITY, DT)).toBe(dead)
    expect(flameBoxOfPyre(dead)).toBeNull()
  })

  it('소각인이 아닌 적에게는 화염 판정이 없다', () => {
    const impostor = createEnemy(1, 'ghoul', 100, GROUND_Y - 22, createRng(1), 'breathe')
    expect(flameBoxOfPyre(impostor)).toBeNull()
  })

  it('걷는 중에는 화염 판정이 없다', () => {
    expect(flameBoxOfPyre(run(pyre(), 30, farRight()))).toBeNull()
  })
})
