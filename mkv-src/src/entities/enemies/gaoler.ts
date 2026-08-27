import type { Aabb } from '../../physics/aabb.ts'
import { resolve } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'
import { patrol } from './patrol.ts'

/**
 * 간수 (Gaoler) — HP 55. S5 눈먼 갱도.
 *
 * **사슬 채찍을 긴 리치로 휘두른다.** 느리게 배회하다 플레이어가 채찍
 * 사거리(85px)에 들어오면 멈춰 서서 예고하고, 한 번 크게 휘두른 뒤 재충전한다.
 *
 * 리치가 정체성이므로 **예고도 그만큼 길어야 한다** — 24프레임이다.
 * 원칙 2 의 하한(12프레임)의 두 배이고, docs 5.2 가 "예비 동작 24f" 로
 * 못 박은 수치다. 몸통 폭(14px)의 여섯 배까지 닿는 공격이 원칙 하한만큼만
 * 예고하면, 플레이어가 사거리를 읽어도 빠져나갈 시간이 없다.
 *
 * 방향은 예고가 시작되는 순간 고정된다. 예고 중에는 한 발도 움직이지 않는다 —
 * 예고하며 다가오면 읽어도 소용이 없어진다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

export const GAOLER = {
  /** 배회 속도. 좀비(22)만큼 느리다 — 거리를 통제하는 쪽은 플레이어다. */
  speed: 20,
  /** 채찍 사거리 px. **긴 리치가 정체성이다.** */
  whipRange: 85,
  /** 세로 허용치. 채찍은 가로로 뻗으므로 머리 위·발밑에는 닿지 않는다. */
  whipReachY: 20,
  /** 예고. docs 5.2 가 명시한 24프레임 — 리치가 요구하는 값이다. */
  whipWindupFrames: 24,
  /** 휘두르는 동안만 판정이 있다. */
  whipFrames: 14,
  /** 재충전. 없으면 사거리 안이 통과 불가능한 벽이 된다. */
  cooldownFrames: 30,
  /** 채찍 판정 두께 px. 사슬은 가늘다 — 세로로 관대할 이유가 없다. */
  whipThickness: 8,
} as const

export function stepGaoler(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'windup': {
      const held = hold(enemy, 'windup', map, gravity, dt)
      return held.stateFrames < GAOLER.whipWindupFrames ? held : setState(held, 'whip')
    }
    case 'whip': {
      const held = hold(enemy, 'whip', map, gravity, dt)
      return held.stateFrames < GAOLER.whipFrames ? held : setState(held, 'cooldown')
    }
    case 'cooldown': {
      const held = hold(enemy, 'cooldown', map, gravity, dt)
      return held.stateFrames < GAOLER.cooldownFrames ? held : setState(held, 'patrol')
    }
    // 'patrol' 과 스폰 직후의 알 수 없는 상태는 전부 배회다.
    default:
      return walk(enemy, map, target, gravity, dt)
  }
}

/**
 * 제자리에 선 채 프레임만 센다.
 *
 * 가로 속도만 0 이고 중력은 그대로 받는다 — 예고 중에 발판이 무너지면
 * 허공에 선 채로 채찍을 휘두르게 된다.
 */
function hold(enemy: Enemy, state: string, map: Tilemap, gravity: number, dt: number): Enemy {
  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const resolved = resolve({ ...enemy.body, vx: 0, vy }, map, dt)
  return setState({ ...enemy, body: resolved.body }, state)
}

/** 배회 — 구덩이 판단은 patrol 에 맡긴다. → entities/enemies/patrol.ts */
function walk(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  // 사거리 판정이 먼저다. 들어온 순간 그 자리에서 예고를 시작한다.
  const reach = reachFrom(enemy, target)
  if (reach !== null) {
    // 방향은 여기서 고정된다. 예고를 읽은 플레이어는 반대편으로 빠져나갈 수 있고,
    // 그것이 이 예고의 존재 이유다.
    return hold({ ...enemy, facing: reach }, 'windup', map, gravity, dt)
  }

  const step = patrol(enemy.body, map, enemy.facing)
  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const resolved = resolve(
    { ...enemy.body, vx: step.halt ? 0 : step.facing * GAOLER.speed, vy },
    map,
    dt,
  )

  // 벽에 막히면 돌아선다. 계속 밀면 제자리에서 떠는 것처럼 보인다.
  const facing = resolved.body.hitWall ? (step.facing === 1 ? -1 : 1) : step.facing
  return setState({ ...enemy, body: resolved.body, facing }, 'patrol')
}

/** 채찍이 닿는 자리인가. 닿으면 그쪽 방향을, 아니면 null 을 준다. */
function reachFrom(
  enemy: Enemy,
  target: { readonly x: number; readonly y: number },
): -1 | 1 | null {
  const box = boxOfEnemy(enemy)
  const dx = target.x - (box.x + box.width / 2)
  const dy = target.y - (box.y + box.height / 2)
  if (Math.abs(dx) > GAOLER.whipRange) return null
  if (Math.abs(dy) > GAOLER.whipReachY) return null
  return dx < 0 ? -1 : 1
}

/**
 * 사슬 채찍 판정. **휘두르는 동안에만 존재한다.**
 *
 * 몸 앞면에서 바라보는 쪽으로 사거리만큼 뻗고, 높이는 몸통 중간이다.
 * 예고·재충전 중에는 null 이다 — 예고 중에 판정이 있으면 예고가 아니다.
 */
export function whipBoxOfGaoler(enemy: Enemy): Aabb | null {
  if (enemy.kind !== 'gaoler' || enemy.dead || enemy.state !== 'whip') return null

  const box = boxOfEnemy(enemy)
  const x = enemy.facing > 0 ? box.x + box.width : box.x - GAOLER.whipRange
  return {
    x,
    y: box.y + box.height / 2 - GAOLER.whipThickness / 2,
    width: GAOLER.whipRange,
    height: GAOLER.whipThickness,
  }
}
