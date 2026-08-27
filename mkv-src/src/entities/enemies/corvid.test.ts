import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { CORVID, isCommitted, stepCorvid } from './corvid.ts'
import { createEnemy, type Enemy } from './enemy.ts'

/**
 * 까마귀 급강하 예고 (AT-1).
 *
 * 원칙 2 — "예고 없는 공격은 없다. 모든 공격에 최소 12프레임 선행 모션."
 * 예고 없이 즉시 강하하던 결함을 윈드업 상태로 고친다.
 * → docs/05-enemies-bosses.md 5.1
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

function perchedCorvid(): Enemy {
  return createEnemy(1, 'corvid', 160, 32, createRng(1), 'perch')
}

/** 까마귀 바로 아래, 사정권 안의 플레이어. */
const BELOW = { x: 165, y: 100 }

function run(enemy: Enemy, ticks: number, target: { x: number; y: number }): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepCorvid(e, MAP, target, DT)
  return e
}

describe('까마귀 윈드업', () => {
  it('사정권의 플레이어를 봐도 즉시 강하하지 않는다 — 먼저 예고한다', () => {
    const next = stepCorvid(perchedCorvid(), MAP, BELOW, DT)

    expect(next.state).toBe('windup')
    expect(next.body.vx).toBe(0)
    expect(next.body.vy).toBe(0)
  })

  it('예고는 12프레임 이상 유지된다 — 원칙 2 의 하한', () => {
    expect(CORVID.windupFrames).toBeGreaterThanOrEqual(12)

    const wound = run(perchedCorvid(), CORVID.windupFrames, BELOW)
    expect(wound.state).toBe('windup')
    expect(wound.body.vy).toBe(0)
  })

  it('예고가 끝나면 강하한다', () => {
    const diving = run(perchedCorvid(), CORVID.windupFrames + 1, BELOW)

    expect(diving.state).toBe('dive')
    expect(diving.body.vy).toBeGreaterThan(0)
  })

  it('강하 방향은 예고 시점에 고정된다 — 예고를 보고 반대편으로 피할 수 있다', () => {
    const left = { x: 150, y: 100 }
    const wound = stepCorvid(perchedCorvid(), MAP, left, DT)
    expect(wound.state).toBe('windup')
    expect(wound.facing).toBe(-1)

    // 예고 중 플레이어가 오른쪽으로 빠져나가도 궤도는 왼쪽 그대로다.
    const escaped = { x: 400, y: 100 }
    const diving = run(wound, CORVID.windupFrames, escaped)

    expect(diving.state).toBe('dive')
    expect(diving.facing).toBe(-1)
    expect(diving.body.vx).toBeLessThan(0)
  })

  it('예고 중에는 아직 궤도 고정(committed)이 아니다', () => {
    const wound = stepCorvid(perchedCorvid(), MAP, BELOW, DT)
    expect(isCommitted(wound)).toBe(false)

    const diving = run(wound, CORVID.windupFrames, BELOW)
    expect(isCommitted(diving)).toBe(true)
  })

  it('강하 중 지면에 닿으면 활공으로 빠져나간다 — 기존 행동 유지', () => {
    let e = run(perchedCorvid(), CORVID.windupFrames + 1, BELOW)
    for (let i = 0; i < 120 && e.state !== 'glide'; i += 1) e = stepCorvid(e, MAP, BELOW, DT)

    expect(e.state).toBe('glide')
    expect(Math.sign(e.body.vx)).toBe(e.facing)
  })
})
