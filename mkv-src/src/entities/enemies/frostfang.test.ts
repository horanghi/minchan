import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, ENEMY_SPECS, type Enemy } from './enemy.ts'
import { FROSTFANG, isLunging, isRecovering, stepFrostfang } from './frostfang.ts'

/**
 * 서리늑대 (Frostfang) — AT-2 · S3 얼어붙은 종루.
 *
 * "빙판에서 미끄러지며 돌진." 위협은 속도지만, 그 속도는 반드시 예고를
 * 거치고 반드시 기절로 끝난다. → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16
const GRAVITY = 900
const H = ENEMY_SPECS.frostfang.height
const GROUND_Y = 3 * SIZE

const FLAT = parseTilemap([
  '........................',
  '........................',
  '........................',
  '########################',
])

/** 오른쪽 tx9~12 가 끊긴 지형. 배회는 여기서 돌아서고, 돌진은 그대로 나간다. */
const PIT = parseTilemap([
  '........................',
  '........................',
  '........................',
  '#########....###########',
])

/** tx12 에 천장까지 닿는 벽. 돌진이 부딪힐 곳. */
const WALLED = parseTilemap([
  '............#...........',
  '............#...........',
  '............#...........',
  '########################',
])

function wolf(x = 48, facing: -1 | 1 = 1): Enemy {
  return createEnemy(1, 'frostfang', x, GROUND_Y - H, createRng(1), 'prowl', facing)
}

/** 같은 높이, 사거리 안 오른쪽의 플레이어. */
function nearby(enemy: Enemy, offset = 60): { x: number; y: number } {
  return { x: enemy.body.x + enemy.body.width / 2 + offset, y: enemy.body.y + H / 2 }
}

/** 반응할 수 없을 만큼 먼 플레이어. */
const FAR = { x: 2000, y: GROUND_Y - H / 2 }

function run(
  enemy: Enemy,
  ticks: number,
  target: { x: number; y: number },
  map = FLAT,
): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepFrostfang(e, map, target, GRAVITY, DT)
  return e
}

describe('서리늑대 배회', () => {
  it('평소에는 느리게 배회한다', () => {
    const start = wolf()
    const moved = run(start, 30, FAR)

    expect(moved.state).toBe('prowl')
    expect(moved.body.x).toBeGreaterThan(start.body.x)
    expect(moved.body.y).toBe(start.body.y)
  })

  it('배회는 느리다 — 걷는 플레이어가 거리를 통제할 수 있어야 한다', () => {
    // 플레이어 걷기(90px/s)의 절반 이하. 빠르면 배회만으로도 도망칠 수 없다.
    expect(FROSTFANG.prowlSpeed).toBeLessThanOrEqual(45)
  })

  it('배회 중에는 구덩이 앞에서 돌아선다 — 스스로 빠지지 않는다', () => {
    const start = wolf(100)
    const turned = run(start, 80, FAR, PIT)

    expect(turned.facing).toBe(-1)
    expect(turned.body.x).toBeLessThan(9 * SIZE)
    expect(turned.body.y).toBe(start.body.y)
  })

  it('알 수 없는 스폰 상태는 배회로 시작한다', () => {
    const spawned = createEnemy(1, 'frostfang', 48, GROUND_Y - H, createRng(1))
    expect(stepFrostfang(spawned, FLAT, FAR, GRAVITY, DT).state).toBe('prowl')
  })
})

describe('서리늑대 예고', () => {
  it('예고는 14프레임 이상이다 — 원칙 2 의 하한보다 길다', () => {
    // 돌진이 빠를수록 예고는 길어야 한다. 260px/s 는 잡몹 중 가장 빠르다.
    expect(FROSTFANG.windupFrames).toBeGreaterThanOrEqual(14)
  })

  it('사거리 안 같은 높이의 플레이어를 보면 멈추고 자세를 낮춘다', () => {
    const start = wolf()
    const crouched = stepFrostfang(start, FLAT, nearby(start), GRAVITY, DT)

    expect(crouched.state).toBe('windup')
    expect(crouched.body.vx).toBe(0)
    expect(isLunging(crouched)).toBe(false)
  })

  it('높이가 다르면 반응하지 않는다 — 위 발판의 플레이어는 안전하다', () => {
    const start = wolf()
    const above = { x: start.body.x + 20, y: start.body.y - 3 * SIZE }

    expect(stepFrostfang(start, FLAT, above, GRAVITY, DT).state).toBe('prowl')
  })

  it('예고 없이 돌진하지 않는다', () => {
    let e = wolf()
    let windupTicks = 0
    let lunged = false

    for (let i = 0; i < 120 && !lunged; i += 1) {
      e = stepFrostfang(e, FLAT, nearby(wolf()), GRAVITY, DT)
      if (e.state === 'windup') windupTicks += 1
      if (isLunging(e)) lunged = true
    }

    expect(lunged).toBe(true)
    expect(windupTicks).toBeGreaterThanOrEqual(FROSTFANG.windupFrames)
  })

  it('예고가 끝나야 돌진이 시작된다', () => {
    const start = wolf()
    const target = nearby(start)

    expect(isLunging(run(start, FROSTFANG.windupFrames, target))).toBe(false)
    expect(isLunging(run(start, FROSTFANG.windupFrames + 1, target))).toBe(true)
  })
})

describe('서리늑대 돌진', () => {
  it('돌진 중에는 플레이어를 따라가지 않는다 — 궤도는 예고 시점에 고정된다', () => {
    const start = wolf()
    const committed = run(start, FROSTFANG.windupFrames + 1, nearby(start))
    expect(committed.facing).toBe(1)

    // 예고를 읽은 플레이어가 반대편으로 빠져나갔다. 늑대는 돌아보지 않는다.
    const behind = { x: start.body.x - 200, y: start.body.y + H / 2 }
    const past = run(committed, 10, behind)

    expect(past.facing).toBe(1)
    expect(past.body.vx).toBeGreaterThan(0)
    expect(past.body.x).toBeGreaterThan(committed.body.x)
  })

  it('돌진은 배회보다 훨씬 빠르다', () => {
    expect(FROSTFANG.lungeSpeed).toBeGreaterThan(FROSTFANG.prowlSpeed * 4)
  })

  it('돌진 중에는 구덩이를 무시하고 그대로 나간다 — 미끄러지는 것이 설계다', () => {
    const start = wolf(100)
    const sliding = run(start, FROSTFANG.windupFrames + 21, nearby(start, 30), PIT)

    expect(sliding.facing).toBe(1)
    expect(sliding.body.x).toBeGreaterThan(9 * SIZE)
  })

  it('벽에 부딪히면 기절한다', () => {
    const start = wolf()
    const slammed = run(start, FROSTFANG.windupFrames + 40, nearby(start), WALLED)

    expect(isRecovering(slammed)).toBe(true)
    expect(slammed.body.x).toBeLessThanOrEqual(12 * SIZE)
  })

  it('벽이 없어도 반드시 기절로 끝난다 — 무한히 미끄러지지 않는다', () => {
    const stunned = run(wolf(), FROSTFANG.windupFrames + FROSTFANG.lungeFrames + 3, nearby(wolf()))

    expect(isRecovering(stunned)).toBe(true)
    expect(isLunging(stunned)).toBe(false)
    expect(stunned.body.vx).toBe(0)
  })
})

describe('서리늑대 기절', () => {
  it('기절은 무방비다 — 플레이어의 확정 공격 창', () => {
    // 그림의 착지 정지와 같은 역할이다. 이 창이 없으면 잡을 수 없는 적이 된다.
    expect(FROSTFANG.recoverFrames).toBeGreaterThanOrEqual(30)
  })

  it('기절이 끝나면 배회로 돌아간다', () => {
    const cycled = run(
      wolf(),
      FROSTFANG.windupFrames + FROSTFANG.lungeFrames + FROSTFANG.recoverFrames + 2,
      nearby(wolf()),
    )

    expect(cycled.state).toBe('prowl')
    expect(isRecovering(cycled)).toBe(false)
  })
})

describe('서리늑대 판정 노출', () => {
  it('죽은 늑대는 아무것도 하지 않는다', () => {
    const lunging = run(wolf(), FROSTFANG.windupFrames + 2, nearby(wolf()))
    const dead = { ...lunging, dead: true }

    expect(stepFrostfang(dead, FLAT, nearby(wolf()), GRAVITY, DT)).toBe(dead)
    expect(isLunging(dead)).toBe(false)
    expect(isRecovering({ ...dead, state: 'recover' })).toBe(false)
  })

  it('다른 종류의 적은 서리늑대의 판정에 걸리지 않는다', () => {
    const ghoul = createEnemy(2, 'ghoul', 48, GROUND_Y - 22, createRng(1), 'lunge')

    expect(isLunging(ghoul)).toBe(false)
    expect(isRecovering({ ...ghoul, state: 'recover' })).toBe(false)
  })
})
