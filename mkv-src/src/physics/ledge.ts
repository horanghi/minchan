import { bottom, right, type Aabb } from './aabb.ts'
import { TILE, isBlocking, isOneWay, tileAtPoint, type Tilemap } from './tilemap.ts'

/**
 * 발밑 탐지 — "앞으로 한 걸음 디딜 곳이 있는가".
 *
 * 걸어다니는 적은 앞만 보고 전진하다 구덩이로 걸어 들어간다. 물리적으로는
 * 맞지만 플레이어가 보는 것은 "쫓아오던 좀비가 스스로 자살하는" 장면이고,
 * 실제로 배치한 적의 절반이 보스룸에 닿기도 전에 사라졌다.
 * → `entities/enemies/enemy.ts` 의 `pruneEnemies` 주석
 *
 * 여기서는 **질문만** 다룬다. 돌아설지 멈출지는 `entities/enemies/patrol.ts` 가 정한다.
 */

/**
 * 앞면에서 이만큼 앞을 훑는다 (px).
 *
 * 타일 한 칸(16px)보다 훨씬 짧아야 한다 — 길게 잡으면 구덩이에서 한참 떨어진
 * 곳에서 돌아서고, 짧게 잡으면 한 발이 허공에 걸린 뒤에야 돈다.
 * 좀비는 22px/s 로 한 틱에 0.4px 를 가므로 3px 면 여덟 틱 안에 판단이 바뀐다.
 */
export const LEDGE_REACH = 3

/**
 * 이 몸이 `facing` 쪽으로 한 걸음 더 가도 디딜 것이 있는가.
 *
 * 두 가지를 본다.
 *   1. 앞 발밑에 밟을 수 있는 타일이 있는가 — 없으면 구덩이다
 *   2. 앞의 몸높이 자리가 위험 타일인가 — 바닥이 이어져 있어도 밟으면 죽는다
 *
 * 공중에 있는지 여부는 보지 않는다. 그건 호출부가 판단한다 —
 * 떨어지는 중인 적까지 여기서 붙잡으면 낙하가 멈춘다.
 */
export function hasFootingAhead(
  map: Tilemap,
  box: Aabb,
  facing: -1 | 1,
  reach: number = LEDGE_REACH,
): boolean {
  const edge = facing > 0 ? right(box) : box.x
  const probeX = edge + facing * reach

  // 발밑 — 지금 딛고 있는 면 바로 아래 한 칸.
  const under = tileAtPoint(map, probeX, bottom(box) + 1)
  if (!isBlocking(under) && !isOneWay(under)) return false

  // 몸이 들어갈 자리. 불·독 위로는 걸어 들어가지 않는다.
  if (tileAtPoint(map, probeX, bottom(box) - 1) === TILE.hazard) return false

  return true
}
