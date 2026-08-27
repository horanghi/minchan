import type { Aabb } from '../../physics/aabb.ts'
import { resolve, type Body } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'
import { patrol, type Facing } from './patrol.ts'

/**
 * 소각인 (Pyre) — HP 45.
 *
 * **느리게 다가와 근접 화염을 뿜는다.** S2 에서 가까운 거리를 맡는 적이고,
 * 먼 거리는 화염귀(`ember.ts`)가 맡는다. → docs/05-enemies-bosses.md 5.2
 *
 * HP 45 는 잡몹 중 상위다 — 다가오는 것을 화력으로 밀어낼 수 없다는 뜻이고,
 * 그래서 **반드시 읽히는 적**이어야 한다. 안전장치는 셋이다.
 *   1. 좀비(22)보다도 느리다 — 걸어서 벗어날 수 있다
 *   2. 예고 30프레임 — 원칙 2 하한(12)의 두 배 이상
 *   3. 화염은 몸통 높이를 넘지 않는다 — 뛰어넘어 지나갈 수 있다
 *
 * 셋 중 하나라도 빠지면 좁은 통로에서 이 적은 통행 금지 표지가 된다.
 */

export const PYRE = {
  /** 전진 속도. 좀비(22)보다 느리다 — 느린 것이 이 적에게 허락된 유일한 방어책이다. */
  speed: 14,
  /** 이 가로 거리 안이면 멈추고 예고한다. */
  triggerX: 40,
  /** 세로 시야. 층이 다르면 반응하지 않는다. */
  sightY: 28,
  /** 예고. 원칙 2 하한의 두 배 이상 — 밀어낼 수 없는 적이라 더 길게 읽혀야 한다. */
  windupFrames: 30,
  /** 화염 지속. 길수록 지형처럼 자리를 막는다(원칙 3). */
  breatheFrames: 40,
  /** 재충전. 없으면 붙는 순간부터 화염이 끊이지 않는다. */
  cooldownFrames: 60,
  /** 화염 사거리 px. 근접 무기다 — 여기서 더 길어지면 화염귀의 영역을 잠식한다. */
  flameWidth: 34,
  /** 몸통 안쪽에서 시작한다. 몸과 화염 사이에 안전한 틈이 생기면 안 된다. */
  flameInset: 2,
  /** 화염 위쪽 여백. 머리 위를 비워 둬야 뛰어넘을 수 있다. */
  flameTopInset: 4,
} as const

/** 낙하 종단 속도. 좀비와 같다 — 지상 적이 서로 다른 속도로 떨어질 이유가 없다. */
const TERMINAL_VY = 480

export function stepPyre(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'windup': {
      const held = brace(enemy, map, gravity, dt, 'windup')
      return held.stateFrames < PYRE.windupFrames ? held : setState(held, 'breathe')
    }
    case 'breathe': {
      const held = brace(enemy, map, gravity, dt, 'breathe')
      return held.stateFrames < PYRE.breatheFrames ? held : setState(held, 'cooldown')
    }
    case 'cooldown': {
      const held = brace(enemy, map, gravity, dt, 'cooldown')
      return held.stateFrames < PYRE.cooldownFrames ? held : setState(held, 'walk')
    }
    // 'walk' 와 스폰 직후의 알 수 없는 상태는 전부 전진이다.
    default:
      return advance(enemy, map, target, gravity, dt)
  }
}

/**
 * 자리에 굳는다 — 예고·화염·재충전 동안은 한 발짝도 움직이지 않는다.
 *
 * 예고와 함께 파고들면 "예고를 보고 물러선다"가 성립하지 않는다.
 * 중력은 계속 받는다. 밀려서 공중에 뜬 채로 뿜으면 판정 상자가 허공에 뜬다.
 */
function brace(
  enemy: Enemy,
  map: Tilemap,
  gravity: number,
  dt: number,
  state: string,
): Enemy {
  const standing: Body = {
    ...enemy.body,
    vx: 0,
    vy: Math.min(TERMINAL_VY, enemy.body.vy + gravity * dt),
  }
  return setState({ ...enemy, body: resolve(standing, map, dt).body }, state)
}

/**
 * 플레이어 쪽으로 느리게 전진한다.
 *
 * **앞이 구덩이면 그 자리에 선다 — 돌아서지 않는다.** 좀비와 다른 점이다.
 * 좀비는 정해진 구간을 오가는 순찰자라 돌아서는 것이 맞지만, 이쪽은 추적자라
 * 돌아서는 순간 다시 플레이어 쪽으로 방향이 뒤집혀 매 틱 떨게 된다.
 * 대신 플레이어를 계속 노려보며 구덩이 건너에 서 있는다 — 지형이 만든 안전지대다.
 * → entities/enemies/patrol.ts · docs/05 5.2
 */
function advance(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  const box = boxOfEnemy(enemy)
  const dx = target.x - (box.x + box.width / 2)
  const dy = target.y - (box.y + box.height / 2)
  const want: Facing = dx < 0 ? -1 : 1

  // 붙었으면 멈추고 예고부터 한다. 방향은 이 순간 굳는다.
  if (Math.abs(dx) <= PYRE.triggerX && Math.abs(dy) <= PYRE.sightY) {
    return brace({ ...enemy, facing: want }, map, gravity, dt, 'windup')
  }

  const step = patrol(enemy.body, map, want)
  // 가려는 쪽에 디딜 곳이 없다(멈춤이거나 판단이 뒤로 돌아섰다).
  const blocked = step.halt || step.facing !== want

  const moving: Body = {
    ...enemy.body,
    vx: blocked ? 0 : want * PYRE.speed,
    vy: Math.min(TERMINAL_VY, enemy.body.vy + gravity * dt),
  }
  return setState({ ...enemy, body: resolve(moving, map, dt).body, facing: want }, 'walk')
}

/**
 * 전방 화염 판정. **화염 상태에서만** 존재한다.
 *
 * 몸통 높이를 넘지 않는 것이 핵심이다 — 위로 키우면 뛰어넘을 수 없어지고,
 * 그러면 이 적은 좁은 통로에서 40프레임짜리 통행 금지가 된다.
 */
export function flameBoxOfPyre(enemy: Enemy): Aabb | null {
  if (enemy.kind !== 'pyre' || enemy.dead || enemy.state !== 'breathe') return null

  const box = boxOfEnemy(enemy)
  const x = enemy.facing === 1
    ? box.x + box.width - PYRE.flameInset
    : box.x + PYRE.flameInset - PYRE.flameWidth

  return {
    x,
    y: box.y + PYRE.flameTopInset,
    width: PYRE.flameWidth,
    height: box.height - PYRE.flameTopInset,
  }
}
