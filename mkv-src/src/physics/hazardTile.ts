import type { Aabb } from './aabb.ts'
import { TILE, forEachTile, type Tilemap } from './tilemap.ts'

/**
 * 위험 타일(`^`) 접촉 판정.
 *
 * 타일맵은 이것을 **통과 가능한** 타일로 둔다 — 막지 않고 죽인다.
 * 판정을 물리가 아니라 여기서 하는 이유다. → `physics/tilemap.ts` TILE.hazard
 */

/**
 * 상자를 이만큼 줄여서 본다 (px).
 *
 * 히트박스는 스프라이트보다 작고 판정은 관대한 쪽이라는 원칙(docs/02 2.1)이
 * 즉사 판정에서 가장 중요하다. 면이 스치기만 해도 죽으면 "닿지도 않았는데
 * 죽었다" 가 된다.
 */
export const HAZARD_INSET = 2

export function touchesHazard(map: Tilemap, box: Aabb, inset: number = HAZARD_INSET): boolean {
  const probe: Aabb = {
    x: box.x + inset,
    y: box.y + inset,
    width: Math.max(1, box.width - inset * 2),
    height: Math.max(1, box.height - inset * 2),
  }

  let hit = false
  forEachTile(map, probe, (kind) => {
    if (kind === TILE.hazard) hit = true
  })
  return hit
}
