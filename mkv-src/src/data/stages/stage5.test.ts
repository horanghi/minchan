import { describe, expect, it } from 'vitest'
import { loadBalance } from '../load.ts'
import { TILE, tileAt } from '../../physics/tilemap.ts'
import { STAGE_5 } from './stage5.ts'

/**
 * 갱도 천장이 점프를 끊지 않는가.
 *
 * 공통 규칙(`stages.test.ts`)은 **구덩이 위** 머리 공간만 본다. 천장은 구덩이가
 * 없는 곳에도 이어져 있으므로 거기서 걸리지 않는다. 그런데 천장을 한 칸만
 * 낮춰도 평지 점프가 머리부터 막혀 수평 속도가 0 이 된다 — 물리적으로는 맞고
 * 화면에서는 고장으로 보이는, docs/04 원칙 1 이 경고하는 바로 그 배치다.
 */

const map = STAGE_5.map
const GROUND_ROW = map.height - 1
const CEILING_ROW = 9

describe('스테이지 5 — 갱도 천장', () => {
  it('천장이 ty9 에 이어져 있다', () => {
    // 보스룸은 뚫려 있다. 앞의 두 구간만 본다.
    const upToBoss = STAGE_5.sections[2]!
    for (let tx = 0; tx < upToBoss; tx += 1) {
      expect([tx, tileAt(map, tx, CEILING_ROW)]).toEqual([tx, TILE.solid])
    }
  })

  it('점프 정점에서도 머리가 천장에 닿지 않는다', () => {
    const player = loadBalance().player
    // v² / 2g. 상승 중력으로 잰다 — 정점까지는 이쪽이 걸린다.
    const apex = (player.jumpVelocity * player.jumpVelocity) / (2 * player.gravityRising)
    const size = map.tileSize

    const groundTop = GROUND_ROW * size
    const headAtApex = groundTop - player.hitbox.height - apex
    const ceilingBottom = (CEILING_ROW + 1) * size

    expect(headAtApex).toBeGreaterThan(ceilingBottom)
  })

  it('천장을 한 칸 내리면 실제로 막힌다 — 위 검사가 빠듯한 이유', () => {
    const player = loadBalance().player
    const apex = (player.jumpVelocity * player.jumpVelocity) / (2 * player.gravityRising)
    const size = map.tileSize

    const headAtApex = GROUND_ROW * size - player.hitbox.height - apex
    expect(headAtApex).toBeLessThan((CEILING_ROW + 2) * size)
  })
})
