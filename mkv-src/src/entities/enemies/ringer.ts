import { resolve, type Body } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { setState, type Enemy } from './enemy.ts'
import { patrol, type Facing } from './patrol.ts'

/**
 * 종지기 (Ringer) — HP 35. S3 얼어붙은 종루.
 *
 * **종을 울려 주변 적을 강화한다.** 스스로는 거의 아무것도 하지 않는다 —
 * 접촉 외에 직접 공격이 없고, 자리도 뜨지 않는다. 위협은 전부 간접적이다.
 *
 * **우선 제거 대상이라는 것이 설계 의도다.** 서리늑대가 강화된 채로 돌진하면
 * 예고를 읽고도 못 피한다. 그러니 플레이어는 "무엇부터 잡을 것인가"를
 * 판단하게 되고, 종지기를 먼저 잡으면 남은 방이 그대로 쉬워진다. 종과 종
 * 사이의 침묵(90프레임)이 그 판단을 실행할 시간이다.
 *
 * 종도 예고를 거친다(18프레임, 원칙 2 하한의 1.5배). 강화가 소리 없이
 * 시작되면 플레이어는 늑대가 왜 갑자기 빨라졌는지 알 수 없다.
 *
 * 강화의 **적용은 월드가 한다.** 이 모듈은 판정(`isEmpowering`)과 상수
 * (`auraRadius`·`empowerScale`)만 제공하고 다른 적을 건드리지 않는다 —
 * 적이 적을 고치기 시작하면 한 틱의 결과가 순서에 따라 달라진다.
 * → docs/05-enemies-bosses.md 5.1·5.2 · AT-2
 */

export const RINGER = {
  /** 강화가 닿는 반경 px. 월드가 이 안의 다른 적을 고른다. */
  auraRadius: 160,
  /**
   * 반경 안의 적에게 곱하는 **움직임 배율.**
   *
   * 시간 배율이 아니다 — 월드가 물리 적분(dt)에만 곱하므로 예고·공격·재충전
   * 길이는 프레임 수 그대로 남는다. 그렇게 두는 것이 설계다. 종이 울린다고
   * 예고가 짧아지면 공정성 하한(12프레임)이 종지기 한 마리 때문에 무너진다.
   * 강화된 늑대는 더 멀리 돌진하지만, 돌진 전에 자세를 낮추는 시간은 그대로다.
   * → src/game/world.ts `hasteScale`
   */
  empowerScale: 1.25,
  /** 종과 종 사이의 침묵. **이 창이 종지기를 먼저 잡을 시간이다.** */
  idleFrames: 90,
  /** 예고 — 종을 들어올린다. 원칙 2 하한(12)의 1.5배. */
  windupFrames: 18,
  /** 종이 울리는 동안. 침묵보다 짧아야 강화가 상시 상태가 되지 않는다. */
  ringFrames: 30,
  /** 배회 속도. 좀비(22)의 절반도 안 된다 — 자리를 지키는 것이 본분이다. */
  speed: 8,
  /** 스폰 지점에서 벗어날 수 있는 거리 px. 자리를 뜨면 강화 반경이 흔들린다. */
  roamRange: 24,
} as const

/** 낙하 종단 속도. 다른 지상 적과 같은 값이다. → `ghoul.ts` */
const MAX_FALL = 480

export function stepRinger(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'windup': {
      const held = planted(enemy, map, 'windup', gravity, dt)
      return held.stateFrames < RINGER.windupFrames ? held : setState(held, 'ring')
    }
    case 'ring': {
      const held = planted(enemy, map, 'ring', gravity, dt)
      return held.stateFrames < RINGER.ringFrames ? held : setState(held, 'idle')
    }
    // 'idle' 과 스폰 직후의 알 수 없는 상태는 전부 대기다.
    default: {
      const waiting = roam(enemy, map, gravity, dt)
      return waiting.stateFrames < RINGER.idleFrames ? waiting : setState(waiting, 'windup')
    }
  }
}

/**
 * 아주 느린 배회.
 *
 * 스폰 지점에서 멀어지면 돌아설 방향을 **제안하고**, 발밑 판단이 그것을
 * 거부할 수 있게 한다. 순서가 반대면 집으로 가려다 구덩이로 걸어 들어간다.
 * → `patrol.ts`
 */
function roam(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const drifted = enemy.body.x - enemy.home.x
  const homeward: Facing = Math.abs(drifted) >= RINGER.roamRange
    ? (drifted > 0 ? -1 : 1)
    : enemy.facing
  const step = patrol(enemy.body, map, homeward)

  const moving: Body = {
    ...enemy.body,
    vx: step.halt ? 0 : step.facing * RINGER.speed,
    vy: Math.min(MAX_FALL, enemy.body.vy + gravity * dt),
  }
  const resolved = resolve(moving, map, dt)

  const facing: Facing = resolved.body.hitWall ? (step.facing === 1 ? -1 : 1) : step.facing
  return setState({ ...enemy, body: resolved.body, facing }, 'idle')
}

/** 종을 들거나 울리는 동안에는 제자리에 선다. 중력은 계속 받는다. */
function planted(enemy: Enemy, map: Tilemap, state: string, gravity: number, dt: number): Enemy {
  const still: Body = {
    ...enemy.body,
    vx: 0,
    vy: Math.min(MAX_FALL, enemy.body.vy + gravity * dt),
  }
  return setState({ ...enemy, body: resolve(still, map, dt).body }, state)
}

/**
 * 지금 종이 울리는 중인가.
 *
 * 월드는 이 판정이 참인 종지기 반경(`auraRadius`) 안의 **다른** 적에게
 * `empowerScale` 을 곱한다. 죽은 종지기는 울리지 않는다 — 먼저 잡으면
 * 나머지가 그대로 쉬워지는 것이 이 적의 존재 이유다.
 */
export function isEmpowering(enemy: Enemy): boolean {
  if (enemy.kind !== 'ringer' || enemy.dead) return false
  return enemy.state === 'ring'
}
