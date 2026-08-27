import type { Aabb } from '../../physics/aabb.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { whipBoxOfGaoler } from './gaoler.ts'
import { strikeBoxOfLevin } from './levin.ts'
import { flameBoxOfPyre } from './pyre.ts'
import type { Enemy, EnemyKind } from './enemy.ts'

/**
 * 몸 밖으로 판정을 내미는 적의 목록.
 *
 * **여기에 추가하면 컴파일러가 나머지를 강제한다** — `reachBoxOf` 의 분기와
 * 렌더러의 색 표가 둘 다 이 목록으로 총합화돼 있어, 하나만 채우면 빌드가 깨진다.
 * 판정과 그림이 갈라지는 것을 타입으로 막는 것이 이 상수의 존재 이유다.
 */
export const REACH_KINDS = ['levin', 'pyre', 'gaoler'] as const
export type ReachKind = (typeof REACH_KINDS)[number]

export function isReachKind(kind: EnemyKind): kind is ReachKind {
  return (REACH_KINDS as readonly string[]).includes(kind)
}

/**
 * 몸 밖으로 뻗는 판정 — 낙뢰의 기둥, 소각인의 화염, 간수의 채찍.
 *
 * **한 곳에서만 센다.** 월드(피격 판정)와 렌더러(그리기)가 각자 목록을 들고
 * 있으면 한쪽에만 추가되는 순간 갈라진다. 실제로 그렇게 갈라져서, 간수의
 * 85px 짜리 채찍과 소각인의 화염이 판정만 있고 **화면에는 없던** 적이 있다.
 * 이 파일이 두 쪽의 단일 출처다 — 새 리치 적은 여기 한 번만 추가하면 된다.
 *
 * 셋 다 예고를 거친 뒤에만 상자를 돌려준다. 각 함수가 kind·dead 를 스스로
 * 확인하므로, 여기서는 무엇을 물어볼지만 정한다.
 * → docs/02 2.1 "보이는 것과 판정이 다르면 부당한 죽음이 된다"
 */
export function reachBoxOf(enemy: Enemy, map: Tilemap): Aabb | null {
  switch (enemy.kind) {
    case 'levin': return strikeBoxOfLevin(enemy, map)
    case 'pyre': return flameBoxOfPyre(enemy)
    case 'gaoler': return whipBoxOfGaoler(enemy)
    default: return null
  }
}
