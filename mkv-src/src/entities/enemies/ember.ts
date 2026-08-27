import { resolve } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'

/**
 * 화염귀 (Ember) — HP 24.
 *
 * **제자리에 서서 불덩이를 3연발로 던진다.** S2 에서 먼 거리를 맡는 적이고,
 * 가까운 거리는 소각인(`pyre.ts`)이 맡는다. 둘이 거리를 나눠 가져야
 * 어느 한 자리에 서서 버티는 안전지대가 생기지 않는다 — 캐른의 세 패턴이
 * 거리를 나눈 것과 같은 이유다. → docs/05-enemies-bosses.md 5.1·5.2
 *
 * 쫓아오지 않는 대신 **읽히기만 하면 완전히 무해하다.** 예고 24프레임 동안
 * 사거리 밖으로 걸어 나가거나 등 뒤로 돌아가면 세 발 전부가 빗나간다 —
 * 발사 방향이 예고 시작 시점에 굳기 때문이다(원칙 2).
 *
 * 세 발은 초기 속도가 서로 달라 **짧게·중간·길게** 떨어진다. 셋이 같은
 * 포물선이면 한 자리만 찾아 서 있으면 되는 공격이 된다.
 */

export const EMBER = {
  /**
   * 가로 사거리 px. 이보다 멀면 반응하지 않는다.
   *
   * **불덩이가 실제로 닿는 거리와 같아야 한다.** 한때 150 이라 써 놓고 탄도는
   * 35px 밖에 못 날아, 화염귀가 사거리 안의 누구도 맞히지 못하는 적이었다.
   * 예비 동작만 하고 아무 일도 일어나지 않는 패턴 — 캐른의 묘비에서 이미
   * 한 번 겪은 결함이다. → docs/05 5.4 · src/game/enemySeam.test.ts
   */
  range: 120,
  /** 세로 시야 px. 층이 다르면 보이지 않는다 — 위층 플레이어를 저격하지 않는다. */
  sightY: 40,
  /** 예고. 원칙 2 의 하한(12)의 두 배다 — 이동하지 않는 적이라 더 길어도 위협이 산다. */
  windupFrames: 24,
  shotCount: 3,
  /** 발 사이 간격. 붙여 쏘면 세 발이 한 덩어리로 읽혀 나눠 던진 의미가 없다. */
  shotIntervalFrames: 10,
  /**
   * 발사 상태의 길이. 마지막 발이 나가는 프레임(간격 x 2)보다 **1 커야** 한다.
   * 같으면 3발째가 나가기 전에 상태가 끝나 2연발이 된다.
   */
  fireFrames: 21,
  /** 재장전. 없으면 사거리 안에 들어선 순간부터 불덩이가 끊이지 않는다. */
  cooldownFrames: 72,
  /** 총구 위치 — 중심에서 앞으로, 몸통 위쪽에서. 발밑에서 솟으면 근원이 안 읽힌다. */
  muzzleForward: 8,
  muzzleY: 7,
  /**
   * 세 발의 초기 속도. 위로 솟았다가 중력에 떨어진다(중력은 hazard 가 먹인다).
   * 짧음 → 중간 → 김 순서다. 순서가 뒤집히면 첫 발을 피한 자리가 곧 안전지대가 된다.
   *
   * **솟는 속도가 곧 사거리다.** 총구는 지면에서 9px 밖에 안 뜨므로, 위로 세게
   * 던지지 않으면 몇 프레임 만에 발밑에 처박힌다. 처음 값(-70~-120)이 그랬고,
   * 세 발 다 35px 안에 떨어져 화염귀는 아무도 맞히지 못했다.
   * 중력 1750 기준 체공 약 0.35초 — 대략 45 / 75 / 110px 에 떨어진다.
   */
  shots: [
    { speedX: 130, speedY: -280 },
    { speedX: 215, speedY: -280 },
    { speedX: 315, speedY: -280 },
  ],
} as const

/** 낙하 종단 속도. 좀비와 같다 — 지상 적이 서로 다른 속도로 떨어질 이유가 없다. */
const TERMINAL_VY = 480

/** 월드가 hazard 로 스폰할 불덩이 한 발. `bosses/hazard.ts` 의 `spawnHazard` 인자다. */
export interface FireballSpawn {
  readonly x: number
  readonly y: number
  readonly vx: number
  readonly vy: number
}

const NO_FIREBALLS: readonly FireballSpawn[] = Object.freeze([])

export function stepEmber(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  gravity: number,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  const planted = plant(enemy, map, gravity, dt)

  switch (planted.state) {
    case 'windup': {
      const held = setState(planted, 'windup')
      return held.stateFrames < EMBER.windupFrames ? held : setState(held, 'fire')
    }
    case 'fire': {
      const held = setState(planted, 'fire')
      return held.stateFrames < EMBER.fireFrames ? held : setState(held, 'cooldown')
    }
    case 'cooldown': {
      const held = setState(planted, 'cooldown')
      return held.stateFrames < EMBER.cooldownFrames ? held : setState(held, 'idle')
    }
    // 'idle' 과 스폰 직후의 알 수 없는 상태는 전부 대기다.
    default:
      return wait(planted, target)
  }
}

/**
 * 제자리 사수 — 가로로는 한 발짝도 움직이지 않는다.
 *
 * 그래도 중력은 받는다. 배치가 한 칸 뜬 채로 굳으면 공중에 떠서 쏘는 적이 되고,
 * 그건 배치 실수가 아니라 버그로 읽힌다.
 */
function plant(enemy: Enemy, map: Tilemap, gravity: number, dt: number): Enemy {
  const falling = {
    ...enemy.body,
    vx: 0,
    vy: Math.min(TERMINAL_VY, enemy.body.vy + gravity * dt),
  }
  return { ...enemy, body: resolve(falling, map, dt).body }
}

/**
 * 대기 — 플레이어 쪽을 보며 사거리에 들어오기를 기다린다.
 *
 * 방향은 여기서만 바뀐다. 예고에 들어가는 순간 굳어서, 예고를 읽은 플레이어가
 * 등 뒤로 돌아가면 세 발 전부 빗나간다. 그것이 이 예고의 존재 이유다.
 */
function wait(enemy: Enemy, target: { readonly x: number; readonly y: number }): Enemy {
  const box = boxOfEnemy(enemy)
  const dx = target.x - (box.x + box.width / 2)
  const dy = target.y - (box.y + box.height / 2)
  const aimed: Enemy = { ...enemy, facing: dx < 0 ? -1 : 1 }

  const inSight = Math.abs(dx) <= EMBER.range && Math.abs(dy) <= EMBER.sightY
  return setState(aimed, inSight ? 'windup' : 'idle')
}

/**
 * 이번 틱에 태어난 불덩이. 월드가 매 틱 호출해 hazard 로 스폰한다.
 *
 * **정확히 발사 프레임에만** 한 발을 돌려준다. 매 틱 돌려주면 21프레임 내내
 * 불이 쏟아지고, 상태만 보고 판단하면 같은 발이 여러 번 스폰된다.
 */
export function fireballsOfEmber(enemy: Enemy): readonly FireballSpawn[] {
  if (enemy.kind !== 'ember' || enemy.dead || enemy.state !== 'fire') return NO_FIREBALLS

  const frame = enemy.stateFrames
  if (frame % EMBER.shotIntervalFrames !== 0) return NO_FIREBALLS

  const shot = EMBER.shots[frame / EMBER.shotIntervalFrames]
  if (shot === undefined) return NO_FIREBALLS

  const box = boxOfEnemy(enemy)
  return [{
    x: box.x + box.width / 2 + enemy.facing * EMBER.muzzleForward,
    y: box.y + EMBER.muzzleY,
    vx: enemy.facing * shot.speedX,
    vy: shot.speedY,
  }]
}
