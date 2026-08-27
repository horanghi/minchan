import { resolve, type Body } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'
import { patrol } from './patrol.ts'

/**
 * 포자충 (Spore) — HP 8.
 *
 * **죽을 때 독 구름을 남긴다.**
 *
 * 살아 있는 동안에는 거의 아무것도 아니다. HP 8 에 22px/s 인 좀비보다도
 * 느리게 배회하고, 위협은 접촉 피해뿐이다. **진짜 위협은 죽은 뒤다.**
 * 쓰러진 자리에 독 구름이 피어 잠시 그 자리를 지나갈 수 없게 만든다 —
 * "적의 역할은 지형이다"(원칙 3)의 가장 순수한 형태다.
 *
 * 설계 의도는 **죽이는 것이 항상 이득은 아니라는 것을 가르치는 것**이다.
 * 넓은 곳에서는 잡고 지나가면 그만이지만, 좁은 통로에서 잡으면 자기 길이
 * 막힌다. 그때 플레이어는 처음으로 "안 죽이고 지나갈 수 있나"를 생각한다.
 * 그래서 이 적은 약할수록 좋다 — 강하면 잡을지 말지가 선택이 아니게 된다.
 *
 * 독 구름은 여기서 만들지 않는다. 이 모듈은 **좌표만** 알려 주고
 * (`poisonSpawnOfSpore`), 실제 hazard 스폰은 월드가 처치 순간에 한다.
 * 적이 위험물 목록을 직접 건드리면 판정 방향이 섞인다 → `bosses/hazard.ts`
 * → docs/05-enemies-bosses.md 5.1 원칙 3 · 5.2
 */

export const SPORE = {
  /** 좀비(22)보다 느리다. 위협은 속도가 아니라 시체가 남기는 자리다. */
  speed: 18,
  /** 벽에 막히면 돌아선다. 제자리에서 떠는 것처럼 보이지 않게. */
  turnOnWall: true,
} as const

export function stepSpore(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  if (enemy.dead) return enemy

  // 발밑을 먼저 본다. 앞이 구덩이면 돌아서고, 양쪽 다 끊겼으면 선다.
  // 스스로 빠져 죽으면 독 구름도 플레이어가 볼 수 없는 곳에 생긴다.
  // → entities/enemies/patrol.ts
  const step = patrol(enemy.body, map, enemy.facing)

  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const moving: Body = {
    ...enemy.body,
    vx: step.halt ? 0 : step.facing * SPORE.speed,
    vy,
  }
  const resolved = resolve(moving, map, dt)

  const facing = SPORE.turnOnWall && resolved.body.hitWall
    ? (step.facing === 1 ? -1 : 1)
    : step.facing

  return setState({ ...enemy, body: resolved.body, facing }, 'walk')
}

/**
 * 죽은 포자충이 독 구름을 띄울 중심 좌표. 살아 있으면 `null`.
 *
 * 월드가 처치 순간에 호출해 `spawnHazard(hazards, 'poison', here)` 를 부른다.
 * 좌표는 **몸의 중심**이다 — `spawnHazard` 가 중심 기준으로 배치하므로,
 * 이렇게 해야 구름이 쓰러진 그 자리에 정확히 앉는다. 어긋나면 "죽인 자리가
 * 막힌다"는 규칙이 흐려지고, 플레이어는 구름이 왜 거기 있는지 읽지 못한다.
 */
export function poisonSpawnOfSpore(
  enemy: Enemy,
): { readonly x: number; readonly y: number } | null {
  if (enemy.kind !== 'spore' || !enemy.dead) return null

  const box = boxOfEnemy(enemy)
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 }
}
