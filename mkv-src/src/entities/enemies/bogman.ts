import { resolve } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, distanceTo, setState, type Enemy } from './enemy.ts'

/**
 * 늪지기 (Bogman) — HP 40.
 *
 * **물속에 잠복해 있다가 랜슬이 다가오면 도약한다.**
 *
 * 잠복은 그 자체로 부당해질 수 있는 설계다 — 보이지 않는 것이 예고 없이
 * 튀어나오면 플레이어는 죽은 뒤에야 적이 있었다는 것을 안다. 그래서 잠복과
 * 도약 사이에 `surface` 를 넣었다. 물결이 일고 그림자가 떠오르는 이 구간이
 * 위치를 미리 알려 주고, 이 동안은 아직 아무도 다치지 않는다.
 * 예고를 16프레임 이상 잡은 이유는 원칙 2 의 하한(12프레임)이 "보이는 적의
 * 공격" 기준이기 때문이다. 잠복은 위치 자체가 정보이므로 더 길어야 한다.
 *
 * 도약 방향은 `surface` 진입 시점에 고정된다. 공중에서 유도하면 예고를 읽고
 * 비켜도 따라오게 되어, 예고가 있으나 마나 해진다 — 까마귀의 급강하와 같은 규칙이다.
 * 착지 뒤 `recover` 는 유일한 확정 공격 창이다. 그림의 착지 정지와 같은 역할이다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

export const BOGMAN = {
  /**
   * 이 반경에 들어오면 솟아오른다.
   *
   * **도약 거리보다 넉넉히 넓어야 한다.** 좁으면 플레이어가 멈춰 선 자리가 곧
   * 도약 사거리 안이라, 예고를 봐도 물러날 자리가 없다 — 예고가 형식만 남는다.
   * 자동 봇이 이 자리에서 반복해 죽었고(70 일 때), 넓히자 통과했다.
   * → src/game/clearable.test.ts · docs/05 5.1 원칙 2
   */
  aggroRadius: 96,
  /** 예고 — 물결과 그림자로 위치를 알린다. 원칙 2 하한(12)보다 길다. */
  surfaceFrames: 20,
  /** 도약 수평 속도. 플레이어 달리기(110)보다 느리다 — 뒤로 빠지면 벗어난다. */
  leapVx: 90,
  /** 도약 상승 속도. 중력 1750 기준 약 33px(2타일) 뜬다. */
  leapVy: 340,
  /** 착지 후 무방비. 이 창이 없으면 늪지기는 때릴 수 없는 적이 된다. */
  recoverFrames: 40,
} as const

export function stepBogman(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  switch (enemy.state) {
    case 'surface':
      return stepSurface(enemy, map, gravity, dt)
    case 'leap':
      return stepLeap(enemy, map, gravity, dt)
    case 'recover':
      return stepRecover(enemy, map, gravity, dt)
    // 'submerged' 와 스폰 직후의 알 수 없는 상태는 전부 잠복이다.
    // 배치 실수가 예고 없는 도약이 되지 않게, 모르는 상태는 가장 안전한 쪽으로 떨어뜨린다.
    default:
      return stepSubmerged(enemy, map, target, gravity, dt)
  }
}

/** 잠복 — 정지. 반경 안에 들어온 순간 방향을 고정하고 예고에 들어간다. */
function stepSubmerged(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  const waiting = hold(enemy, 'submerged', map, gravity, dt)
  if (distanceTo(waiting, target) > BOGMAN.aggroRadius) return waiting

  // 지금 이 순간의 방향으로 궤도를 고정한다. 이후 target 은 보지 않는다.
  const box = boxOfEnemy(waiting)
  const facing: -1 | 1 = target.x < box.x + box.width / 2 ? -1 : 1
  return setState({ ...waiting, facing }, 'surface')
}

/** 예고 — 솟아오르는 중. 아직 판정이 없다(`isSubmerged`). */
function stepSurface(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const rising = hold(enemy, 'surface', map, gravity, dt)
  if (rising.stateFrames < BOGMAN.surfaceFrames) return rising

  // 예고가 끝났다. 예고 시점에 고정한 방향 그대로 뛴다.
  return setState(
    {
      ...rising,
      body: { ...rising.body, vx: rising.facing * BOGMAN.leapVx, vy: -BOGMAN.leapVy },
    },
    'leap',
  )
}

/** 도약 — 속도를 유지한다. 유도하지 않는다. 착지하면 무방비로 넘어간다. */
function stepLeap(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const resolved = resolve({ ...enemy.body, vy }, map, dt)
  const flying = setState({ ...enemy, body: resolved.body }, 'leap')

  if (resolved.body.onGround) return setState(flying, 'recover')
  return flying
}

/** 무방비 — 착지 경직. 다 지나면 다시 잠복한다. */
function stepRecover(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const resting = hold(enemy, 'recover', map, gravity, dt)
  if (resting.stateFrames < BOGMAN.recoverFrames) return resting
  return setState(resting, 'submerged')
}

/** 제자리에 서서 프레임만 센다. 중력은 받는다 — 공중에 떠 있으면 안 된다. */
function hold(enemy: Enemy, state: string, map: Tilemap, gravity: number, dt: number): Enemy {
  const vy = Math.min(480, enemy.body.vy + gravity * dt)
  const resolved = resolve({ ...enemy.body, vx: 0, vy }, map, dt)
  return setState({ ...enemy, body: resolved.body }, state)
}

/**
 * 물속에 있는가 — 피격도 피해도 없는 구간.
 *
 * 월드가 이걸로 판정을 끈다 (`ghoul.ts` 의 `isVulnerable` 과 같은 역할).
 * **예고(`surface`)도 여기에 포함된다.** 하나의 술어가 양방향 판정을 모두
 * 끄기 때문이다 — 솟아오르는 중에 플레이어를 때리면 예고가 예고가 아니게 되고,
 * 반대로 솟자마자 맞는 것도 부당하다. 좀비의 `riseFrames` 와 같은 이유다.
 */
export function isSubmerged(enemy: Enemy): boolean {
  if (enemy.kind !== 'bogman' || enemy.dead) return false
  return enemy.state === 'submerged'
}

/**
 * 솟아오르는 중인가 — **보이지만 아직 때리지 않는다.**
 *
 * 예고와 잠복을 하나의 술어로 묶으면 안 된다. 물속의 것은 보이지 않으니
 * 양방향 판정이 다 꺼지는 게 맞지만, 솟아오르는 것은 **보인다.**
 * 보이는데 때릴 수 없으면 예고는 경고가 아니라 그냥 유예가 되고,
 * 반응한 플레이어에게 돌아오는 것이 없다.
 *
 * 이 게임의 다른 적도 전부 그렇다 — 그림의 대기, 까마귀의 윈드업,
 * 낙뢰의 예고는 모두 때릴 수 있는 구간이다. 늪지기만 예외일 이유가 없다.
 * (자동 봇이 이 구간을 못 뚫고 반복해 죽었다. → src/game/clearable.test.ts)
 */
export function isEmerging(enemy: Enemy): boolean {
  if (enemy.kind !== 'bogman' || enemy.dead) return false
  return enemy.state === 'surface'
}

/**
 * 보이지만 **아직/이미 때리지 않는** 구간인가 — 솟는 중과 착지 후.
 *
 * 도약은 한 번의 위협이지 지속 피해가 아니다. 착지한 늪지기가 플레이어와
 * 겹친 채로 계속 때리면 한 번의 도약이 죽음이 되고, 무방비라는 말도 거짓이
 * 된다. 실제로 자동 봇이 착지한 늪지기 아래에서 겹친 채 죽었다.
 * → src/game/clearable.test.ts · docs/05 5.2 "착지 후 무방비"
 */
export function isHarmless(enemy: Enemy): boolean {
  if (enemy.kind !== 'bogman' || enemy.dead) return false
  return enemy.state === 'surface' || enemy.state === 'recover'
}
