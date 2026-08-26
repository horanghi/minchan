import { describe, expect, it } from 'vitest'
import { parseTilemap } from './tilemap.ts'
import { LEDGE_REACH, hasFootingAhead } from './ledge.ts'
import type { Aabb } from './aabb.ts'

/**
 * 발밑 탐지.
 *
 * 걸어다니는 적이 구덩이 앞에서 돌아서려면, 먼저 "앞에 디딜 것이 있는가"를
 * 물을 수 있어야 한다. 그 질문만 여기서 다룬다 — 돌아설지 말지는 `patrol` 이
 * 정한다.
 */

/** 16px 격자. 지면은 ty2, 구덩이는 tx5~6 이다. */
const MAP = parseTilemap([
  '..........',
  '..........',
  '#####..###',
])

/** 지면(ty2 = y32) 위에 선 12×16 몸. */
function standing(x: number): Aabb {
  return { x, y: 16, width: 12, height: 16 }
}

describe('hasFootingAhead — 앞에 디딜 것이 있는가', () => {
  it('평지 위에서는 참이다', () => {
    expect(hasFootingAhead(MAP, standing(16), 1)).toBe(true)
    expect(hasFootingAhead(MAP, standing(16), -1)).toBe(true)
  })

  it('구덩이 앞에서는 거짓이다 — 여기서 돌아서야 한다', () => {
    // 앞면이 구덩이 시작(x80)에서 LEDGE_REACH 안으로 들어온 순간.
    expect(hasFootingAhead(MAP, standing(80 - 12 - LEDGE_REACH), 1)).toBe(false)
  })

  it('구덩이에서 아직 먼 곳에서는 참이다 — 한 걸음 앞만 본다', () => {
    expect(hasFootingAhead(MAP, standing(48), 1)).toBe(true)
  })

  it('왼쪽도 같다', () => {
    // 구덩이 오른쪽 끝(tx7, x112)에 선 몸이 왼쪽을 보면 디딜 곳이 없다.
    expect(hasFootingAhead(MAP, standing(112), -1)).toBe(false)
    expect(hasFootingAhead(MAP, standing(128), -1)).toBe(true)
  })

  it('원웨이 발판도 디딜 곳으로 친다 — 위에서는 밟히는 타일이다', () => {
    const map = parseTilemap([
      '..........',
      '..........',
      '#####--###',
    ])
    expect(hasFootingAhead(map, standing(80 - 12 - LEDGE_REACH), 1)).toBe(true)
  })

  it('붕괴 타일도 디딜 곳으로 친다 — 무너지기 전까지는 바닥이다', () => {
    const map = parseTilemap([
      '..........',
      '..........',
      '#####xx###',
    ])
    expect(hasFootingAhead(map, standing(80 - 12 - LEDGE_REACH), 1)).toBe(true)
  })

  it('앞이 위험 타일이면 거짓이다 — 밟으면 죽는 곳으로 걸어 들어가지 않는다', () => {
    // 바닥은 이어져 있지만 그 위가 불·독이다. 발밑만 보면 통과해 버린다.
    const map = parseTilemap([
      '..........',
      '.....^^...',
      '##########',
    ])
    expect(hasFootingAhead(map, standing(80 - 12 - LEDGE_REACH), 1)).toBe(false)
  })

  it('격자 밖은 디딜 곳이 아니다 — 맵 끝에서 걸어 나가지 않는다', () => {
    expect(hasFootingAhead(MAP, standing(160 - 12 - LEDGE_REACH), 1)).toBe(false)
  })
})
