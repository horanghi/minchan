import { boxOf, isGrounded, type Body } from '../../physics/body.ts'
import { hasFootingAhead } from '../../physics/ledge.ts'
import type { Tilemap } from '../../physics/tilemap.ts'

/**
 * 걸어다니는 적의 순찰 판단.
 *
 * 지상 적은 앞만 보고 전진하면 구덩이로 걸어 들어간다. 플레이어에게는
 * "쫓아오던 것이 스스로 사라지는" 장면이라, 긴장이 그 자리에서 끊긴다.
 * 배치한 적이 보스룸에 닿기도 전에 없어지면 난이도 설계도 함께 무너진다.
 *
 * 판단은 셋뿐이다.
 *   앞이 멀쩡하다 → 간다
 *   앞이 끊겼고 뒤는 멀쩡하다 → 돌아선다
 *   양쪽 다 끊겼다 → 선다
 *
 * 마지막 항이 핵심이다. 없으면 1타일 기둥 위의 적이 매 틱 방향을 뒤집으며
 * 제자리에서 떤다 — 버그로 읽히는 움직임이다.
 */

export type Facing = -1 | 1

export interface PatrolDecision {
  readonly facing: Facing
  /** 갈 곳이 없다. 호출부는 가로 속도를 0 으로 둔다. */
  readonly halt: boolean
}

export function patrol(body: Body, map: Tilemap, facing: Facing): PatrolDecision {
  // 공중에서는 판단하지 않는다. 밀려 떨어지는 중인 적까지 붙잡으면
  // 낙하가 공중에서 멈춰 버린다 — 그게 더 이상해 보인다.
  if (!body.onGround && !isGrounded(body, map)) return { facing, halt: false }

  const box = boxOf(body)
  if (hasFootingAhead(map, box, facing)) return { facing, halt: false }

  const back: Facing = facing === 1 ? -1 : 1
  if (hasFootingAhead(map, box, back)) return { facing: back, halt: false }

  return { facing, halt: true }
}
