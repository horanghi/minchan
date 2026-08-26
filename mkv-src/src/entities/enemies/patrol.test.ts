import { describe, expect, it } from 'vitest'
import { createBody } from '../../physics/body.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { LEDGE_REACH } from '../../physics/ledge.ts'
import { patrol } from './patrol.ts'

/**
 * 순찰 판단 — 구덩이 앞에서 무엇을 할 것인가.
 *
 * 규칙은 셋뿐이다. 앞이 멀쩡하면 간다 · 앞이 끊겼고 뒤가 멀쩡하면 돌아선다 ·
 * 양쪽 다 끊겼으면 선다. 마지막 항이 없으면 1타일 기둥 위의 적이 매 틱
 * 방향을 뒤집으며 떤다.
 */

const FLAT = parseTilemap([
  '..........',
  '..........',
  '#####..###',
])

/** 지면(ty2) 위에 선 12×16 몸. */
function standing(x: number) {
  return createBody(x, 16, 12, 16)
}

describe('patrol — 구덩이 앞의 판단', () => {
  it('앞에 땅이 있으면 그대로 간다', () => {
    expect(patrol(standing(16), FLAT, 1)).toEqual({ facing: 1, halt: false })
  })

  it('구덩이 앞에서는 돌아선다 — 걸어 들어가지 않는다', () => {
    expect(patrol(standing(80 - 12 - LEDGE_REACH), FLAT, 1)).toEqual({ facing: -1, halt: false })
  })

  it('돌아선 뒤에는 그 방향으로 계속 간다 — 매 틱 뒤집지 않는다', () => {
    const turned = patrol(standing(80 - 12 - LEDGE_REACH), FLAT, 1)
    expect(patrol(standing(80 - 12 - LEDGE_REACH), FLAT, turned.facing).facing).toBe(-1)
  })

  it('양쪽 다 끊겼으면 선다 — 제자리에서 떨지 않는다', () => {
    // 한 칸짜리 기둥. 어느 쪽으로도 갈 수 없다.
    const pillar = parseTilemap([
      '..........',
      '..........',
      '....#.....',
    ])
    expect(patrol(standing(66), pillar, 1)).toEqual({ facing: 1, halt: true })
  })

  it('공중에서는 판단하지 않는다 — 떨어지는 중인 적을 붙잡지 않는다', () => {
    const falling = createBody(88, 0, 12, 16)
    expect(patrol(falling, FLAT, 1)).toEqual({ facing: 1, halt: false })
  })

  it('불 앞에서도 돌아선다 — 바닥이 이어져 있어도 밟으면 죽는 자리다', () => {
    const lava = parseTilemap([
      '..........',
      '.....^^...',
      '##########',
    ])
    expect(patrol(standing(80 - 12 - LEDGE_REACH), lava, 1).facing).toBe(-1)
  })
})
