import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { EMBER, fireballsOfEmber, stepEmber } from './ember.ts'
import { createEnemy, type Enemy } from './enemy.ts'

/**
 * 화염귀 (Ember) — AT-2, S2 불타는 마령촌 전용 잡몹.
 *
 * "불덩이 3연발 (포물선)". 제자리에 서서 먼 거리를 맡는다.
 * 여기서 고정하는 것은 궤적의 예쁨이 아니라 **공정성 불변식**이다 —
 * 예고 없이 쏘지 않는다 · 예고 중에는 아무것도 날아오지 않는다 ·
 * 세 발은 서로 다른 자리에 떨어진다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16
/** 시험용 중력. 월드는 balance.player.gravityFalling 을 넘긴다. */
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
const GROUND_Y = 7 * SIZE

/** 지면에 선 화염귀 (12x20). */
function ember(x = 100): Enemy {
  return createEnemy(1, 'ember', x, GROUND_Y - 20, createRng(1), 'idle')
}

interface Shot {
  readonly x: number
  readonly y: number
  readonly vx: number
  readonly vy: number
  /** 몇 번째 틱에 나갔는가. 예고 하한 검증에 쓴다. */
  readonly tick: number
}

/** 틱을 돌리며 나간 불덩이를 전부 모은다. 월드가 하는 일과 같은 순서다. */
function burn(
  enemy: Enemy,
  ticks: number,
  target: { readonly x: number; readonly y: number },
): { readonly enemy: Enemy; readonly shots: readonly Shot[] } {
  let e = enemy
  const shots: Shot[] = []
  for (let i = 0; i < ticks; i += 1) {
    e = stepEmber(e, MAP, target, GRAVITY, DT)
    for (const s of fireballsOfEmber(e)) shots.push({ ...s, tick: i + 1 })
  }
  return { enemy: e, shots }
}

/** 사거리 안, 같은 층의 플레이어. */
const NEAR_RIGHT = { x: 200, y: GROUND_Y - 10 }
/** 한 번의 공격 주기를 다 돌리기에 충분한 틱. */
const VOLLEY_TICKS = EMBER.windupFrames + EMBER.shotCount * EMBER.shotIntervalFrames + 5

describe('화염귀 사거리', () => {
  it('사거리 밖의 플레이어에게는 아무것도 하지 않는다', () => {
    const far = { x: 100 + EMBER.range + 60, y: GROUND_Y - 10 }
    const { enemy, shots } = burn(ember(), VOLLEY_TICKS, far)

    expect(enemy.state).toBe('idle')
    expect(shots).toHaveLength(0)
  })

  it('가로로는 닿아도 층이 다르면 쏘지 않는다 — 시야 밖이다', () => {
    const upstairs = { x: 160, y: GROUND_Y - 10 - EMBER.sightY - 40 }
    const { enemy, shots } = burn(ember(), VOLLEY_TICKS, upstairs)

    expect(enemy.state).toBe('idle')
    expect(shots).toHaveLength(0)
  })

  it('대기 중에는 플레이어 쪽을 본다 — 등 뒤에서 불이 나오지 않는다', () => {
    const left = stepEmber(ember(), MAP, { x: 20, y: GROUND_Y - 10 }, GRAVITY, DT)
    expect(left.facing).toBe(-1)
  })

  it('알 수 없는 스폰 상태는 대기로 시작한다', () => {
    const spawned = createEnemy(1, 'ember', 100, GROUND_Y - 20, createRng(1))
    const far = { x: 900, y: GROUND_Y - 10 }
    expect(stepEmber(spawned, MAP, far, GRAVITY, DT).state).toBe('idle')
  })
})

describe('화염귀 예고', () => {
  it('사거리에 들어와도 즉시 쏘지 않는다 — 먼저 예고한다', () => {
    const next = stepEmber(ember(), MAP, NEAR_RIGHT, GRAVITY, DT)

    expect(next.state).toBe('windup')
    expect(fireballsOfEmber(next)).toHaveLength(0)
  })

  it('예고는 18프레임 이상이다 — 원칙 2 의 하한보다 넉넉하다', () => {
    expect(EMBER.windupFrames).toBeGreaterThanOrEqual(18)
  })

  it('예고가 끝나기 전에는 단 한 발도 나가지 않는다', () => {
    const { shots } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)

    expect(shots.length).toBeGreaterThan(0)
    expect(shots[0]!.tick).toBeGreaterThan(EMBER.windupFrames)
  })

  it('예고 중 내내 상태가 예고로 유지된다', () => {
    const { enemy } = burn(ember(), EMBER.windupFrames, NEAR_RIGHT)
    expect(enemy.state).toBe('windup')
  })

  it('발사 방향은 예고 시점에 고정된다 — 예고를 읽고 등 뒤로 돌아갈 수 있다', () => {
    const wound = stepEmber(ember(), MAP, { x: 20, y: GROUND_Y - 10 }, GRAVITY, DT)
    expect(wound.facing).toBe(-1)

    // 예고 중 플레이어가 오른쪽으로 빠져나가도 세 발은 전부 왼쪽으로 간다.
    const { shots } = burn(wound, VOLLEY_TICKS, { x: 200, y: GROUND_Y - 10 })
    expect(shots.length).toBe(EMBER.shotCount)
    for (const s of shots) expect(s.vx).toBeLessThan(0)
  })
})

describe('화염귀 3연발', () => {
  it('한 주기에 정확히 3발을 쏜다', () => {
    const { shots } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)
    expect(shots).toHaveLength(3)
    expect(EMBER.shotCount).toBe(3)
  })

  it('세 발은 한꺼번에 나오지 않는다 — 일정 간격으로 순차 발사한다', () => {
    const { shots } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)

    expect(shots[1]!.tick - shots[0]!.tick).toBe(EMBER.shotIntervalFrames)
    expect(shots[2]!.tick - shots[1]!.tick).toBe(EMBER.shotIntervalFrames)
  })

  it('세 발은 서로 다른 포물선이다 — 한 자리만 피하면 되는 공격이 아니다', () => {
    const { shots } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)

    // 전부 위로 솟았다가 중력에 떨어진다. 중력은 hazard 가 먹인다.
    for (const s of shots) expect(s.vy).toBeLessThan(0)

    // 착지까지의 수평 거리. 짧음 → 중간 → 김 순서로 벌어져야 한다.
    const reach = shots.map((s) => Math.abs(s.vx) * (2 * Math.abs(s.vy) / GRAVITY))
    expect(reach[0]!).toBeLessThan(reach[1]!)
    expect(reach[1]!).toBeLessThan(reach[2]!)
  })

  it('불덩이는 몸통 앞에서 나온다 — 발밑에서 솟지 않는다', () => {
    const { shots } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)
    const box = { x: 100, y: GROUND_Y - 20, width: 12, height: 20 }

    for (const s of shots) {
      expect(s.x).toBeGreaterThan(box.x + box.width / 2)
      expect(s.y).toBeGreaterThan(box.y)
      expect(s.y).toBeLessThan(box.y + box.height)
    }
  })
})

describe('화염귀 제자리·재장전', () => {
  it('제자리를 지킨다 — 한 주기 내내 가로로 움직이지 않는다', () => {
    const start = ember()
    const { enemy } = burn(start, VOLLEY_TICKS, NEAR_RIGHT)

    expect(enemy.body.x).toBe(start.body.x)
    expect(enemy.body.vx).toBe(0)
  })

  it('3발을 쏘고 나면 재장전한다 — 끊임없이 쏘지 않는다', () => {
    // 두 번째 연발까지 도는 데 넉넉한 틱.
    const long = (EMBER.windupFrames + EMBER.shotCount * EMBER.shotIntervalFrames
      + EMBER.cooldownFrames) * 2
    const { shots } = burn(ember(), long, NEAR_RIGHT)

    expect(shots.length).toBeGreaterThanOrEqual(6)
    // 3발째와 4발째 사이에는 최소한 재장전 시간이 있다.
    expect(shots[3]!.tick - shots[2]!.tick).toBeGreaterThanOrEqual(EMBER.cooldownFrames)
  })

  it('재장전이 끝나면 다시 대기로 돌아온다', () => {
    const { enemy } = burn(ember(), VOLLEY_TICKS, NEAR_RIGHT)
    expect(enemy.state).toBe('cooldown')

    const { enemy: back } = burn(enemy, EMBER.cooldownFrames + 1, {
      x: 900,
      y: GROUND_Y - 10,
    })
    expect(back.state).toBe('idle')
  })
})

describe('화염귀 가드', () => {
  it('죽은 화염귀는 아무것도 하지 않는다', () => {
    const { enemy } = burn(ember(), EMBER.windupFrames + 1, NEAR_RIGHT)
    const dead = { ...enemy, dead: true }

    expect(stepEmber(dead, MAP, NEAR_RIGHT, GRAVITY, DT)).toBe(dead)
    expect(fireballsOfEmber(dead)).toHaveLength(0)
  })

  it('화염귀가 아닌 적에게서는 불덩이가 나오지 않는다', () => {
    const impostor = createEnemy(1, 'ghoul', 100, GROUND_Y - 22, createRng(1), 'fire')
    expect(fireballsOfEmber(impostor)).toHaveLength(0)
  })

  it('발사 프레임이 아닌 틱에는 빈 배열이다', () => {
    const { enemy } = burn(ember(), EMBER.windupFrames + 2, NEAR_RIGHT)
    expect(enemy.state).toBe('fire')
    // 첫 발 다음 틱 — 아직 간격이 차지 않았다.
    expect(fireballsOfEmber(enemy)).toHaveLength(0)
  })
})
