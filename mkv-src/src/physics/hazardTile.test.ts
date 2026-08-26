import { describe, expect, it } from 'vitest'
import { parseTilemap } from './tilemap.ts'
import { HAZARD_INSET, touchesHazard } from './hazardTile.ts'
import type { Aabb } from './aabb.ts'

/**
 * 위험 타일 접촉.
 *
 * `^` 는 파서에도 렌더에도 있었지만 아무도 읽지 않아, 놓아도 통과되는
 * 장식이었다. → CLAUDE.md "문서엔 있는데 게임엔 없는 것"
 */

/** 지면 ty2. 불웅덩이는 ty1 의 tx4~5 (x64~96) 이다. */
const MAP = parseTilemap([
  '........',
  '....^^..',
  '########',
])

function box(x: number, y: number): Aabb {
  return { x, y, width: 12, height: 16 }
}

describe('touchesHazard', () => {
  it('불 위에 서면 참이다', () => {
    expect(touchesHazard(MAP, box(68, 16))).toBe(true)
  })

  it('불 옆에 서면 거짓이다', () => {
    expect(touchesHazard(MAP, box(16, 16))).toBe(false)
  })

  it('가장자리가 스칠 뿐이면 거짓이다 — 판정은 관대한 쪽이다', () => {
    // 몸의 오른쪽 면이 불의 왼쪽 면에 INSET 만큼 겹친 상태.
    expect(touchesHazard(MAP, box(64 - 12 + HAZARD_INSET, 16))).toBe(false)
    // 한 픽셀 더 들어가면 닿는다.
    expect(touchesHazard(MAP, box(64 - 12 + HAZARD_INSET + 1, 16))).toBe(true)
  })

  it('위험 타일이 없는 맵에서는 언제나 거짓이다', () => {
    const safe = parseTilemap(['........', '........', '########'])
    expect(touchesHazard(safe, box(68, 16))).toBe(false)
  })
})
