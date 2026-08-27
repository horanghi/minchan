import type { Aabb } from '../../physics/aabb.ts'
import { isBlocking, tileAt, type Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'

/**
 * 낙뢰 (Levin) — HP 16.
 *
 * **머문 자리에 번개를 떨어뜨린다.** 상공을 떠다니며 플레이어의 x 를
 * 천천히 따라오고, 정렬되면 멈춰서 예고한 뒤 지면까지 수직 기둥을 내리꽂는다.
 *
 * 구름 자체는 닿아도 아프지 않다 — 위협은 전부 기둥이고, 기둥은 반드시
 * 예고된다(24프레임, 원칙 2 하한의 두 배). 기둥이 떨어지는 동안 그 자리는
 * 잠시 지나갈 수 없는 길이 된다 — 적의 역할은 지형이다 (원칙 3).
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

export const LEVIN = {
  /** 수평 추적 속도. 걷는 플레이어보다 확실히 느리다 — 벗어날 수 있어야 한다. */
  followSpeed: 30,
  /** 이 가로 거리 안이면 정렬로 보고 예고에 들어간다. */
  triggerX: 6,
  /** 예고 — 구름이 번쩍이고 착탄 지점에 표식이 뜬다. */
  windupFrames: 24,
  strikeFrames: 10,
  /** 재충전. 없으면 같은 자리를 영구히 막는 벽이 된다. */
  cooldownFrames: 90,
  /** 기둥 폭 px. */
  columnWidth: 8,
} as const

export function stepLevin(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'windup': {
      const held = hold(enemy, 'windup')
      return held.stateFrames < LEVIN.windupFrames ? held : setState(held, 'strike')
    }
    case 'strike': {
      const held = hold(enemy, 'strike')
      return held.stateFrames < LEVIN.strikeFrames ? held : setState(held, 'cooldown')
    }
    case 'cooldown': {
      const held = hold(enemy, 'cooldown')
      return held.stateFrames < LEVIN.cooldownFrames ? held : setState(held, 'drift')
    }
    // 'drift' 와 스폰 직후의 알 수 없는 상태는 전부 추적이다.
    default:
      return drift(enemy, map, target, dt)
  }
}

/** 제자리에 뜬 채 프레임만 센다. 구름은 예고·타격·재충전 중 움직이지 않는다. */
function hold(enemy: Enemy, state: string): Enemy {
  return setState({ ...enemy, body: { ...enemy.body, vx: 0, vy: 0 } }, state)
}

/** 수평으로만 따라온다. 고도를 바꾸면 점프 계산이 같이 흔들려 부당해진다. */
function drift(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  dt: number,
): Enemy {
  const box = boxOfEnemy(enemy)
  const dx = target.x - (box.x + box.width / 2)
  if (Math.abs(dx) <= LEVIN.triggerX) return hold(enemy, 'windup')

  const dir: -1 | 1 = dx < 0 ? -1 : 1
  const vx = dir * LEVIN.followSpeed
  const x = clampX(enemy.body.x + vx * dt, enemy.body.width, map)
  return setState(
    { ...enemy, facing: dir, body: { ...enemy.body, x, vx, vy: 0 } },
    'drift',
  )
}

function clampX(x: number, width: number, map: Tilemap): number {
  return Math.max(0, Math.min(x, map.width * map.tileSize - width))
}

/** 기둥. 타격 상태에서만 존재하고, 구름 바닥에서 아래 첫 지형까지 닿는다. */
export function strikeBoxOfLevin(enemy: Enemy, map: Tilemap): Aabb | null {
  if (enemy.kind !== 'levin' || enemy.dead || enemy.state !== 'strike') return null

  const box = boxOfEnemy(enemy)
  const cx = box.x + box.width / 2
  const top = box.y + box.height
  const bottom = impactY(map, cx, top)
  if (bottom <= top) return null

  return { x: cx - LEVIN.columnWidth / 2, y: top, width: LEVIN.columnWidth, height: bottom - top }
}

/** 예고 중 착탄 지점. 렌더가 바닥 표식을 그린다 — 표식 없는 낙뢰는 부당하다. */
export function warnPointOfLevin(
  enemy: Enemy,
  map: Tilemap,
): { readonly x: number; readonly y: number } | null {
  if (enemy.kind !== 'levin' || enemy.dead || enemy.state !== 'windup') return null

  const box = boxOfEnemy(enemy)
  const cx = box.x + box.width / 2
  const top = box.y + box.height
  const y = impactY(map, cx, top)
  // 기둥이 생길 수 없는 자리에는 표식도 없다 — strikeBoxOfLevin 과 같은 가드.
  if (y <= top) return null
  return { x: cx, y }
}

/** 아래로 내려가며 처음 만나는 막는 타일의 윗면. 없으면 맵 바닥. */
function impactY(map: Tilemap, x: number, fromY: number): number {
  const tx = Math.floor(x / map.tileSize)
  for (let ty = Math.max(0, Math.floor(fromY / map.tileSize)); ty < map.height; ty += 1) {
    if (isBlocking(tileAt(map, tx, ty))) return ty * map.tileSize
  }
  return map.height * map.tileSize
}
