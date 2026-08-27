import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type InputState } from '../../core/input.ts'
import { createRng } from '../../core/rng.ts'
import { loadBalance } from '../../data/load.ts'
import type { Stage } from '../../game/stage.ts'
import { createWorld, stepWorld } from '../../game/world.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, type Enemy } from './enemy.ts'
import { LEVIN, stepLevin, strikeBoxOfLevin, warnPointOfLevin } from './levin.ts'

/**
 * 낙뢰 (Levin) — AT-1 신규 잡몹.
 *
 * "머문 자리에 번개를 떨어뜨린다." 구름 자체는 닿아도 아프지 않고,
 * 위협은 전부 예고된 번개 기둥이다. → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16

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

function cloud(x = 100, y = 32): Enemy {
  return createEnemy(1, 'levin', x, y, createRng(1), 'drift')
}

function run(enemy: Enemy, ticks: number, target: { x: number; y: number }): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepLevin(e, MAP, target, DT)
  return e
}

/** 구름 가로 중심 바로 아래의 플레이어. */
function under(enemy: Enemy): { x: number; y: number } {
  return { x: enemy.body.x + enemy.body.width / 2, y: 100 }
}

describe('낙뢰 추적', () => {
  it('플레이어를 향해 수평으로만 따라온다 — 고도는 바꾸지 않는다', () => {
    const start = cloud()
    const moved = run(start, 30, { x: 300, y: 100 })

    expect(moved.state).toBe('drift')
    expect(moved.body.x).toBeGreaterThan(start.body.x)
    expect(moved.body.y).toBe(start.body.y)
    expect(moved.facing).toBe(1)
  })

  it('추적은 느리다 — 뛰는 플레이어가 벗어날 수 있어야 한다', () => {
    // 플레이어 걷기(90px/s)의 절반 이하. 빠르면 벗어날 수 없는 추적이 된다.
    expect(LEVIN.followSpeed).toBeLessThanOrEqual(45)
  })

  it('알 수 없는 스폰 상태는 추적으로 시작한다', () => {
    const spawned = createEnemy(1, 'levin', 100, 32, createRng(1))
    const next = stepLevin(spawned, MAP, { x: 300, y: 100 }, DT)
    expect(next.state).toBe('drift')
  })
})

describe('낙뢰 예고와 기둥', () => {
  it('플레이어 상공에 정렬되면 멈추고 예고에 들어간다', () => {
    const aligned = stepLevin(cloud(), MAP, under(cloud()), DT)

    expect(aligned.state).toBe('windup')
    expect(aligned.body.vx).toBe(0)
  })

  it('예고는 12프레임 이상이다 — 예고 없는 공격은 없다', () => {
    expect(LEVIN.windupFrames).toBeGreaterThanOrEqual(12)

    const target = under(cloud())
    const wound = run(cloud(), LEVIN.windupFrames, target)
    expect(wound.state).toBe('windup')

    // 예고 중에는 기둥이 없다 — 표식만 있다.
    expect(strikeBoxOfLevin(wound, MAP)).toBeNull()
  })

  it('예고 중 바닥 표식은 착탄 지점을 미리 보여준다', () => {
    const target = under(cloud())
    const wound = stepLevin(cloud(), MAP, target, DT)

    const warn = warnPointOfLevin(wound, MAP)
    expect(warn).not.toBeNull()
    expect(warn!.y).toBe(GROUND_Y)
    expect(Math.abs(warn!.x - target.x)).toBeLessThanOrEqual(LEVIN.triggerX + 1)

    // 추적 중에는 표식이 없다.
    expect(warnPointOfLevin(cloud(), MAP)).toBeNull()
  })

  it('기둥이 생길 수 없는 자리에는 표식도 없다 — 표식과 기둥은 항상 함께다', () => {
    // 구름이 지면보다 아래에 있는 비정상 상황.
    const buried = { ...stepLevin(cloud(), MAP, under(cloud()), DT) }
    const sunk = { ...buried, body: { ...buried.body, y: 8 * SIZE } }

    expect(warnPointOfLevin(sunk, MAP)).toBeNull()
    expect(strikeBoxOfLevin({ ...sunk, state: 'strike' }, MAP)).toBeNull()
  })

  it('예고가 끝나면 기둥이 구름에서 지면까지 내리꽂힌다', () => {
    const target = under(cloud())
    const striking = run(cloud(), LEVIN.windupFrames + 1, target)

    expect(striking.state).toBe('strike')
    const column = strikeBoxOfLevin(striking, MAP)
    expect(column).not.toBeNull()
    expect(column!.y + column!.height).toBe(GROUND_Y)
    expect(column!.width).toBe(LEVIN.columnWidth)
    // 기둥은 구름 바로 아래에서 시작한다.
    expect(column!.y).toBe(striking.body.y + striking.body.height)
  })

  it('기둥은 아래 첫 지형에서 멈춘다 — 발판 아래를 관통하지 않는다', () => {
    const withLedge = parseTilemap([
      '....................',
      '....................',
      '....................',
      '....................',
      '......####..........',
      '....................',
      '....................',
      '####################',
    ])
    const target = { x: 100 + 7, y: 100 }
    const striking = run(cloud(100, 16), LEVIN.windupFrames + 1, target)
    // 구름(x100~114) 중심 아래 ty4 에 발판이 있다.
    const column = strikeBoxOfLevin(striking, withLedge)

    expect(column).not.toBeNull()
    expect(column!.y + column!.height).toBe(4 * SIZE)
  })

  it('기둥이 끝나면 재충전하고, 다시 추적으로 돌아간다', () => {
    const target = under(cloud())
    const cooling = run(cloud(), LEVIN.windupFrames + LEVIN.strikeFrames + 2, target)
    expect(cooling.state).toBe('cooldown')
    expect(strikeBoxOfLevin(cooling, MAP)).toBeNull()

    const drifting = run(cooling, LEVIN.cooldownFrames + 1, { x: 300, y: 100 })
    expect(drifting.state).toBe('drift')
  })

  it('죽은 구름은 아무것도 하지 않는다', () => {
    const striking = run(cloud(), LEVIN.windupFrames + 1, under(cloud()))
    const dead = { ...striking, dead: true }

    expect(stepLevin(dead, MAP, under(cloud()), DT)).toBe(dead)
    expect(strikeBoxOfLevin(dead, MAP)).toBeNull()
  })
})

describe('낙뢰 × 월드', () => {
  const balance = loadBalance()

  /** 플레이어 머리 위에 낙뢰 하나뿐인 시험장. */
  const PROVING_GROUND: Stage = {
    id: 'levin-proving',
    name: '낙뢰 시험장',
    map: MAP,
    spawn: { tx: 6, ty: 5 },
    checkpoints: [],
    enemies: [{ kind: 'levin', tx: 6, ty: 1, state: 'drift' }],
    chests: [],
    sections: [0],
    bossGateX: 10_000,
  }

  it('기둥이 아래의 플레이어를 때리고, 사인은 levin 으로 기록된다', () => {
    let world = createWorld(PROVING_GROUND, balance)
    let input: InputState = INITIAL_INPUT
    let cause: string | null = null

    for (let i = 0; i < LEVIN.windupFrames + LEVIN.strikeFrames + 10 && cause === null; i += 1) {
      input = advanceInput(input, frameOf())
      const step = stepWorld(world, input, balance)
      world = step.world
      input = step.input
      if (step.events.hurt || step.events.died) cause = step.events.cause
    }

    expect(cause).toBe('levin')
  })

  it('예고가 끝나기 전에는 맞지 않는다 — 예고 없는 공격은 없다', () => {
    let world = createWorld(PROVING_GROUND, balance)
    let input: InputState = INITIAL_INPUT

    for (let i = 0; i < LEVIN.windupFrames - 1; i += 1) {
      input = advanceInput(input, frameOf())
      const step = stepWorld(world, input, balance)
      world = step.world
      input = step.input
      expect(step.events.hurt).toBe(false)
      expect(step.events.died).toBe(false)
    }
  })
})
