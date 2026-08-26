import { resolve, type Body } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { setState, type Enemy } from './enemy.ts'
import { patrol } from './patrol.ts'

/**
 * 좀비 (Ghoul) — HP 20.
 *
 * 지면에서 솟아나 느리게 전진한다. 스테이지 1 의 첫 적이고,
 * **여기서는 죽을 수 없어야 한다.** 느리고 예측 가능한 것이 전부다.
 * → docs/05-enemies-bosses.md 5.2
 */

export const GHOUL = {
  /** 솟아나는 데 걸리는 프레임. 이 동안은 때릴 수 없고 때리지도 않는다. */
  riseFrames: 36,
  speed: 22,
  /** 벽에 막히면 돌아선다. */
  turnOnWall: true,
} as const

export function stepGhoul(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  if (enemy.dead) return enemy

  if (enemy.state === 'spawn') {
    const risen = setState(enemy, 'spawn')
    if (risen.stateFrames < GHOUL.riseFrames) return risen
    return setState(risen, 'walk')
  }

  // 발밑을 먼저 본다. 앞이 구덩이면 돌아서고, 양쪽 다 끊겼으면 선다.
  // 이걸 안 하면 배치한 좀비가 첫 구덩이에서 전부 걸어 들어가 사라진다.
  // → entities/enemies/patrol.ts
  const step = patrol(enemy.body, map, enemy.facing)

  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const moving: Body = {
    ...enemy.body,
    vx: step.halt ? 0 : step.facing * GHOUL.speed,
    vy,
  }
  const resolved = resolve(moving, map, dt)

  // 벽에 막히면 돌아선다. 계속 밀면 제자리에서 떠는 것처럼 보인다.
  const facing = GHOUL.turnOnWall && resolved.body.hitWall
    ? (step.facing === 1 ? -1 : 1)
    : step.facing

  return setState({ ...enemy, body: resolved.body, facing }, 'walk')
}

/** 솟아나는 중에는 판정이 없다. 나오자마자 맞는 것은 부당하다. */
export function isVulnerable(enemy: Enemy): boolean {
  return enemy.state !== 'spawn'
}
