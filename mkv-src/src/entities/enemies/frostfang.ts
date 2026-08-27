import { resolve, type Body } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'
import { patrol } from './patrol.ts'

/**
 * 서리늑대 (Frostfang) — HP 28. S3 얼어붙은 종루.
 *
 * **빙판에서 미끄러지며 돌진한다.** 평소에는 느리게 배회하다가, 같은 높이의
 * 플레이어가 사거리에 들어오면 자세를 낮추고(예고) 한 방향으로 미끄러진다.
 *
 * 세 가지가 이 적을 공정하게 만든다.
 *   1. **돌진 방향은 예고 진입 시점에 고정된다.** 돌진 중 따라가면 회피
 *      경로가 사라진다 — 고정 점프 궤도와 겹쳐 부당한 죽음이 된다.
 *      까마귀의 급강하와 같은 원칙이다. → `corvid.ts`
 *   2. 예고는 14프레임. 원칙 2 의 하한(12)보다 길다 — 돌진이 잡몹 중 가장
 *      빠르므로 읽을 시간도 그만큼 더 줘야 한다.
 *   3. 돌진은 반드시 기절로 끝난다. 그림의 착지 정지와 같은 역할 —
 *      **플레이어에게 "지금이다"를 알리는 유일한 확정 공격 창이다.**
 *
 * 돌진 중에는 구덩이를 무시하고 그대로 나간다. 미끄러지는 것이 설계이고,
 * 배회 중에만 발밑을 본다(원칙: 지상 적은 스스로 구덩이에 빠지지 않는다).
 * → docs/05-enemies-bosses.md 5.1·5.2 · AT-2
 */

export const FROSTFANG = {
  /** 배회 속도. 걷는 플레이어(90px/s)의 3분의 1 — 거리는 플레이어가 통제한다. */
  prowlSpeed: 30,
  /** 이 가로 거리 안이면 돌진을 준비한다. */
  triggerX: 130,
  /** 같은 높이로 볼 세로 여유. 한 타일 위 발판의 플레이어에게는 반응하지 않는다. */
  triggerY: 20,
  /** 예고 — 자세를 낮추고 멈춘다. 원칙 2 하한의 두 배 가까이. */
  windupFrames: 14,
  lungeSpeed: 260,
  /** 돌진 최대 지속. 벽에 닿지 않아도 반드시 끝난다 — 영원히 미끄러지지 않는다. */
  lungeFrames: 50,
  /** 기절. 무방비다. 이 창이 없으면 잡을 수 없는 적이 된다. */
  recoverFrames: 45,
} as const

/** 낙하 종단 속도. 다른 지상 적과 같은 값이다. → `ghoul.ts` */
const MAX_FALL = 480

export function stepFrostfang(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'windup': {
      // target 을 보지 않는다. 방향은 이미 고정됐다.
      const held = planted(enemy, map, 'windup', gravity, dt)
      return held.stateFrames < FROSTFANG.windupFrames ? held : setState(held, 'lunge')
    }
    case 'lunge':
      return stepLunge(enemy, map, gravity, dt)
    case 'recover': {
      const resting = planted(enemy, map, 'recover', gravity, dt)
      return resting.stateFrames < FROSTFANG.recoverFrames ? resting : setState(resting, 'prowl')
    }
    // 'prowl' 과 스폰 직후의 알 수 없는 상태는 전부 배회다.
    default:
      return stepProwl(enemy, map, target, gravity, dt)
  }
}

/**
 * 배회 — 발밑을 보며 느리게 걷는다.
 *
 * 사냥 조건을 먼저 본다. 조건이 서면 **그 순간의 방향으로 궤도를 고정하고**
 * 돌진 대신 예고부터 한다. 예고를 읽은 플레이어는 반대편으로 빠져나갈 수 있고,
 * 그것이 이 예고의 존재 이유다.
 */
function stepProwl(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (shouldLunge(enemy, target)) {
    const box = boxOfEnemy(enemy)
    const facing: -1 | 1 = target.x < box.x + box.width / 2 ? -1 : 1
    return setState({ ...enemy, facing, body: { ...enemy.body, vx: 0 } }, 'windup')
  }

  // 앞이 구덩이면 돌아서고, 양쪽 다 끊겼으면 선다. → `patrol.ts`
  const step = patrol(enemy.body, map, enemy.facing)
  const moving: Body = {
    ...enemy.body,
    vx: step.halt ? 0 : step.facing * FROSTFANG.prowlSpeed,
    vy: Math.min(MAX_FALL, enemy.body.vy + gravity * dt),
  }
  const resolved = resolve(moving, map, dt)

  // 벽에 막히면 돌아선다. 계속 밀면 제자리에서 떠는 것처럼 보인다.
  const facing = resolved.body.hitWall ? (step.facing === 1 ? -1 : 1) : step.facing
  return setState({ ...enemy, body: resolved.body, facing }, 'prowl')
}

function shouldLunge(enemy: Enemy, target: { readonly x: number; readonly y: number }): boolean {
  const box = boxOfEnemy(enemy)
  const dx = Math.abs(target.x - (box.x + box.width / 2))
  const dy = Math.abs(target.y - (box.y + box.height / 2))
  return dx <= FROSTFANG.triggerX && dy <= FROSTFANG.triggerY
}

/**
 * 돌진 — 예고 시점에 고정한 방향으로만 간다.
 *
 * `target` 을 인자로 받지 않는 것이 핵심이다. 여기서 플레이어를 볼 수 있으면
 * 언젠가 유도가 들어가고, 그 순간 이 적은 회피 불가능해진다.
 * 구덩이도 보지 않는다 — 미끄러져 나가는 것이 이 적의 정체다.
 */
function stepLunge(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const sliding: Body = {
    ...enemy.body,
    vx: enemy.facing * FROSTFANG.lungeSpeed,
    vy: Math.min(MAX_FALL, enemy.body.vy + gravity * dt),
  }
  const resolved = resolve(sliding, map, dt)
  const lunging = setState({ ...enemy, body: resolved.body }, 'lunge')

  if (resolved.body.hitWall || lunging.stateFrames >= FROSTFANG.lungeFrames) {
    return setState(lunging, 'recover')
  }
  return lunging
}

/** 멈춰 선다. 중력은 계속 받는다 — 예고나 기절 중에 공중에 뜨면 이상하다. */
function planted(enemy: Enemy, map: Tilemap, state: string, gravity: number, dt: number): Enemy {
  const still: Body = {
    ...enemy.body,
    vx: 0,
    vy: Math.min(MAX_FALL, enemy.body.vy + gravity * dt),
  }
  return setState({ ...enemy, body: resolve(still, map, dt).body }, state)
}

/** 궤도가 고정된 구간. 이 동안 늑대는 플레이어를 보지 않는다. */
export function isLunging(enemy: Enemy): boolean {
  return enemy.kind === 'frostfang' && !enemy.dead && enemy.state === 'lunge'
}

/** 기절 — 무방비 구간. 플레이어에게 "지금이다"를 알리는 확정 공격 창이다. */
export function isRecovering(enemy: Enemy): boolean {
  return enemy.kind === 'frostfang' && !enemy.dead && enemy.state === 'recover'
}
