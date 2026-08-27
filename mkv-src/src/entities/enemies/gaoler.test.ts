import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, type Enemy } from './enemy.ts'
import { GAOLER, stepGaoler, whipBoxOfGaoler } from './gaoler.ts'

/**
 * 간수 (Gaoler) — AT-2 신규 잡몹, S5 눈먼 갱도.
 *
 * "사슬 채찍 (긴 리치, 예비 동작 24f)". 리치가 길다는 것이 정체성이고,
 * 그만큼 예고가 길어야 공정하다. → docs/05-enemies-bosses.md 5.1·5.2
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
/** 지면(ty7) 위에 선 14×24 간수의 y. */
const STAND_Y = GROUND_Y - 24

function gaoler(x = 100, facing: -1 | 1 = 1): Enemy {
  return createEnemy(1, 'gaoler', x, STAND_Y, createRng(1), 'patrol', facing)
}

function run(enemy: Enemy, ticks: number, target: { x: number; y: number }, map = MAP): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepGaoler(e, map, target, GRAVITY, DT)
  return e
}

/** 간수 몸통 중심 높이. 지면에 선 플레이어가 서 있을 자리다. */
function midY(enemy: Enemy): number {
  return enemy.body.y + enemy.body.height / 2
}

/** 채찍 사거리 안, 오른쪽. */
function inReach(enemy: Enemy): { x: number; y: number } {
  return { x: enemy.body.x + enemy.body.width / 2 + 60, y: midY(enemy) }
}

/** 사거리 밖. 걸어가도 닿지 않을 만큼 멀다. */
const FAR = { x: 400, y: 100 }

describe('간수 배회', () => {
  it('느리게 배회한다 — 플레이어가 거리를 통제할 수 있어야 한다', () => {
    // 플레이어 걷기(90px/s)보다 확실히 느리다. 빠르면 리치 85px 가 흉기가 된다.
    expect(GAOLER.speed).toBeLessThanOrEqual(45)

    const start = gaoler()
    const walked = run(start, 60, FAR)

    expect(walked.state).toBe('patrol')
    expect(walked.body.x).toBeGreaterThan(start.body.x)
    expect(walked.body.y).toBe(STAND_Y)
  })

  it('구덩이 앞에서 돌아선다 — 스스로 빠지지 않는다', () => {
    const pit = parseTilemap([
      '....................',
      '....................',
      '....................',
      '....................',
      '....................',
      '....................',
      '....................',
      '#####.....##########',
    ])
    const turned = run(gaoler(60), 60, FAR, pit)

    expect(turned.facing).toBe(-1)
    expect(turned.body.y).toBe(STAND_Y)
  })

  it('알 수 없는 스폰 상태는 배회로 시작한다', () => {
    const spawned = createEnemy(1, 'gaoler', 100, STAND_Y, createRng(1))
    expect(stepGaoler(spawned, MAP, FAR, GRAVITY, DT).state).toBe('patrol')
  })

  it('사거리 밖의 플레이어에게는 채찍을 휘두르지 않는다', () => {
    const patrolling = run(gaoler(), 300, FAR)
    expect(patrolling.state).toBe('patrol')
    expect(whipBoxOfGaoler(patrolling)).toBeNull()
  })

  it('머리 위 플레이어에게는 닿지 않는다 — 채찍은 가로로 뻗는다', () => {
    const start = gaoler()
    const above = { x: start.body.x + start.body.width / 2, y: midY(start) - 80 }
    expect(run(start, 30, above).state).toBe('patrol')
  })
})

describe('간수 예고와 채찍', () => {
  it('사거리 안에 들어오면 멈추고 예고에 들어간다', () => {
    const start = gaoler()
    const wound = stepGaoler(start, MAP, inReach(start), GRAVITY, DT)

    expect(wound.state).toBe('windup')
    expect(wound.body.vx).toBe(0)
  })

  it('예고 시작 순간 플레이어 쪽으로 돌아선다 — 등 뒤를 때리지 않는다', () => {
    const start = gaoler(100, 1)
    const behind = { x: start.body.x - 40, y: midY(start) }
    const wound = stepGaoler(start, MAP, behind, GRAVITY, DT)

    expect(wound.state).toBe('windup')
    expect(wound.facing).toBe(-1)
  })

  it('예고는 24프레임 이상이다 — docs 가 명시한 수치다', () => {
    // 원칙 2 의 하한은 12프레임이지만, 리치 85px 는 그 두 배를 요구한다.
    expect(GAOLER.whipWindupFrames).toBeGreaterThanOrEqual(24)
  })

  it('예고 없이 채찍을 휘두르지 않는다 — 판정은 24프레임 뒤에야 생긴다', () => {
    const start = gaoler()
    const target = inReach(start)

    let e = start
    for (let i = 0; i < GAOLER.whipWindupFrames; i += 1) {
      e = stepGaoler(e, MAP, target, GRAVITY, DT)
      // 예고 중에는 채찍 판정이 없다. 표식만 있다.
      expect(whipBoxOfGaoler(e)).toBeNull()
    }
    expect(e.state).toBe('windup')

    expect(whipBoxOfGaoler(stepGaoler(e, MAP, target, GRAVITY, DT))).not.toBeNull()
  })

  it('예고 중에는 정지한다 — 예고하며 다가오면 읽어도 소용이 없다', () => {
    const start = gaoler()
    const target = inReach(start)
    const wound = run(start, GAOLER.whipWindupFrames, target)

    expect(wound.state).toBe('windup')
    expect(wound.body.x).toBe(start.body.x)
    expect(wound.body.vx).toBe(0)
  })

  it('예고가 끝나면 채찍이 바라보는 쪽으로 길게 뻗는다', () => {
    const start = gaoler()
    const whipping = run(start, GAOLER.whipWindupFrames + 1, inReach(start))

    expect(whipping.state).toBe('whip')
    const box = whipBoxOfGaoler(whipping)
    expect(box).not.toBeNull()
    expect(box!.width).toBe(GAOLER.whipRange)
    // 오른쪽을 보면 몸 앞면에서 오른쪽으로 뻗는다.
    expect(box!.x).toBe(whipping.body.x + whipping.body.width)
    // 몸통 중간 높이. 지면에 선 플레이어의 몸에 걸린다.
    expect(box!.y + box!.height / 2).toBe(midY(whipping))
    expect(box!.height).toBeLessThanOrEqual(12)
  })

  it('왼쪽을 보면 왼쪽으로 뻗는다', () => {
    const start = gaoler(200, -1)
    const behind = { x: start.body.x - 60, y: midY(start) }
    const whipping = run(start, GAOLER.whipWindupFrames + 1, behind)

    const box = whipBoxOfGaoler(whipping)
    expect(box).not.toBeNull()
    expect(box!.x + box!.width).toBe(start.body.x)
  })

  it('리치가 길다 — 몸통 폭보다 훨씬 멀리 닿는 것이 정체성이다', () => {
    expect(GAOLER.whipRange).toBeGreaterThanOrEqual(80)
    expect(GAOLER.whipRange).toBeGreaterThan(gaoler().body.width * 4)
  })

  it('채찍이 끝나면 재충전하고, 그 동안에는 판정이 없다', () => {
    const start = gaoler()
    const target = inReach(start)
    const cooling = run(start, GAOLER.whipWindupFrames + GAOLER.whipFrames + 1, target)

    expect(cooling.state).toBe('cooldown')
    expect(whipBoxOfGaoler(cooling)).toBeNull()
  })

  it('재충전이 끝나면 배회로 돌아간다 — 영구히 휘두르는 벽이 아니다', () => {
    const start = gaoler()
    const cooled = run(
      start,
      GAOLER.whipWindupFrames + GAOLER.whipFrames + GAOLER.cooldownFrames + 1,
      FAR,
    )
    expect(cooled.state).toBe('patrol')
  })

  it('죽은 간수는 아무것도 하지 않는다', () => {
    const whipping = run(gaoler(), GAOLER.whipWindupFrames + 1, inReach(gaoler()))
    const dead = { ...whipping, dead: true }

    expect(stepGaoler(dead, MAP, inReach(dead), GRAVITY, DT)).toBe(dead)
    expect(whipBoxOfGaoler(dead)).toBeNull()
  })

  it('간수가 아닌 적에게는 채찍 판정이 없다', () => {
    const impostor = createEnemy(2, 'ghoul', 100, STAND_Y, createRng(1), 'whip')
    expect(whipBoxOfGaoler(impostor)).toBeNull()
  })
})
