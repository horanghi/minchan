import { isSubmerged } from './bogman.ts'
import type { Enemy } from './enemy.ts'
import { isVulnerable } from './ghoul.ts'
import { isMaterialized } from './wisp.ts'

/**
 * 지금 이 적을 때릴 수 있는가.
 *
 * **무적과 무해는 한 쌍이다.** 못 때리는 적에게 맞으면 부당하다 —
 * 솟는 중인 좀비, 물속의 늪지기, 실체가 아닌 번개령이 전부 같은 규칙을 따른다.
 * 월드의 피격 판정과 포위 경고(`fx/surround.ts`)가 같은 술어를 쓴다 — 두 군데에
 * 따로 두면 한쪽만 고쳐져 갈라진다. → docs/05-enemies-bosses.md 5.2
 */
export function canBeHit(enemy: Enemy): boolean {
  if (!isVulnerable(enemy)) return false
  if (isSubmerged(enemy)) return false
  if (enemy.kind === 'wisp' && !isMaterialized(enemy)) return false
  return true
}
