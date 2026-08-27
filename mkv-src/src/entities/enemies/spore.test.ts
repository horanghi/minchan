import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { overlaps } from '../../physics/aabb.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { EMPTY_HAZARDS, boxOfHazard, spawnHazard } from '../bosses/hazard.ts'
import { ENEMY_SPECS, boxOfEnemy, createEnemy, type Enemy } from './enemy.ts'
import { SPORE, poisonSpawnOfSpore, stepSpore } from './spore.ts'

/**
 * 포자충 (Spore) — AT-2 S4 전용 잡몹.
 *
 * "죽을 때 독 구름 생성." 살아 있는 동안에는 거의 아무것도 아니고,
 * **진짜 위협은 죽은 뒤**다. 좁은 통로에서 잡으면 자기 길을 막는다 —
 * 죽이는 것이 항상 이득은 아니다. → docs/05-enemies-bosses.md 5.1 원칙 3 · 5.2
 */

const DT = 1 / 60
const SIZE = 16
const GRAVITY = 1750

/** 왼쪽 다섯 칸만 바닥. 오른쪽은 전부 구덩이다. */
const LEDGE = parseTilemap([
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '#####...............',
])
const GROUND_Y = 7 * SIZE
/** 바닥에 발을 붙이고 선 높이. 크기를 규격에서 받아 와야 규격이 바뀌어도 안 낡는다. */
const RESTING_Y = GROUND_Y - ENEMY_SPECS.spore.height

/** 발판 오른쪽 끝에 선 포자충. 오른쪽으로 걸으면 구덩이다. */
function spore(x = 64, facing: -1 | 1 = 1): Enemy {
  return createEnemy(1, 'spore', x, RESTING_Y, createRng(1), 'walk', facing)
}

function run(enemy: Enemy, ticks: number, map = LEDGE): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepSpore(e, map, GRAVITY, DT)
  return e
}

describe('포자충 배회', () => {
  it('아주 느리게 배회한다 — 좀비(22)보다도 느리다', () => {
    expect(SPORE.speed).toBeLessThan(22)
  })

  it('앞으로 걷는다', () => {
    const walked = run(spore(64, -1), 20)

    expect(walked.state).toBe('walk')
    expect(walked.body.x).toBeLessThan(64)
  })

  it('구덩이 앞에서 돌아선다 — 스스로 빠져 죽지 않는다', () => {
    const turned = run(spore(64, 1), 40)

    expect(turned.facing).toBe(-1)
    // 떨어지지 않았다.
    expect(turned.body.y).toBe(RESTING_Y)
  })
})

describe('포자충의 독 구름', () => {
  it('살아 있는 동안에는 독을 만들지 않는다 — 위협은 죽은 뒤에만 있다', () => {
    expect(poisonSpawnOfSpore(spore())).toBeNull()
    expect(poisonSpawnOfSpore(run(spore(), 40))).toBeNull()
  })

  it('죽으면 반드시 자기 자리에 독을 남긴다', () => {
    const corpse = { ...spore(), dead: true }
    const at = poisonSpawnOfSpore(corpse)

    expect(at).not.toBeNull()
    const box = boxOfEnemy(corpse)
    expect(at!.x).toBe(box.x + box.width / 2)
    expect(at!.y).toBe(box.y + box.height / 2)
  })

  it('걸어간 자리가 아니라 죽은 자리다', () => {
    const moved = run(spore(64, -1), 30)
    const at = poisonSpawnOfSpore({ ...moved, dead: true })

    expect(at).not.toBeNull()
    expect(at!.x).not.toBe(64 + 5)
    expect(at!.x).toBe(moved.body.x + moved.body.width / 2)
  })

  it('독 구름은 죽은 자리를 덮는다 — 좁은 통로에서 잡으면 자기 길이 막힌다', () => {
    const corpse = { ...spore(), dead: true }
    const at = poisonSpawnOfSpore(corpse)!
    const world = spawnHazard(EMPTY_HAZARDS, 'poison', at)
    const cloud = world.hazards[0]!

    expect(cloud.kind).toBe('poison')
    expect(overlaps(boxOfHazard(cloud), boxOfEnemy(corpse))).toBe(true)
    // 포자충(10x10)보다 넓다. 시체 위에 서 있으면 안전하다는 뜻이 되면 안 된다.
    expect(cloud.width).toBeGreaterThan(corpse.body.width)
  })

  it('포자충이 아닌 적은 죽어도 독을 남기지 않는다', () => {
    const ghoul = createEnemy(2, 'ghoul', 64, 90, createRng(1), 'walk')
    expect(poisonSpawnOfSpore({ ...ghoul, dead: true })).toBeNull()
  })
})

describe('포자충 불변식', () => {
  it('죽은 포자충은 아무것도 하지 않는다', () => {
    const dead = { ...spore(), dead: true }
    expect(stepSpore(dead, LEDGE, GRAVITY, DT)).toBe(dead)
  })

  it('원본을 건드리지 않는다 — 리플레이가 여기에 기댄다', () => {
    const start = spore()
    const snapshot = JSON.stringify(start)
    stepSpore(start, LEDGE, GRAVITY, DT)
    expect(JSON.stringify(start)).toBe(snapshot)
  })
})
