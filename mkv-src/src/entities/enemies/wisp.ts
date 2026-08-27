import { resolve } from '../../physics/body.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import { boxOfEnemy, setState, type Enemy } from './enemy.ts'

/**
 * 번개령 (Wisp) — HP 16. S5 눈먼 갱도.
 *
 * **번개가 칠 때만 실체화하고, 그 외에는 무적이다.**
 *
 * 이 적이 가르치는 것은 "언제 때릴 수 있는가"다. 갱도에는 낙뢰(Levin)가
 * 함께 배치되고, **낙뢰의 번개가 곧 번개령의 공격 창이다** — 하늘이 번쩍이는
 * 순간 번개령이 실체가 되므로, 플레이어는 낙뢰를 피하려고 보던 하늘을
 * 이번에는 때릴 타이밍을 잡으려고 보게 된다. 둘이 한 세트로 읽힌다.
 * → entities/enemies/levin.ts
 *
 * **무적과 무해는 한 쌍이다.** 때릴 수 없는 동안 플레이어를 죽이면 부당하므로,
 * `ghost` 인 번개령은 접촉 피해도 주지 않는다 — `isMaterialized` 가 정한다.
 * 반대 방향으로만 벌어질 수 있다: **때릴 수 있는데 아직 안 때리는** 구간은
 * 괜찮고(`isSettling`), 못 때리는데 때리는 구간은 절대 안 된다.
 *
 * 낙뢰가 없는 구간에서도 잡을 수 있어야 하므로 자체 주기를 함께 돈다.
 * 번개에만 기대면 낙뢰가 죽은 뒤의 번개령은 영원히 못 잡는 적이 된다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

export const WISP = {
  /** 부유 속도. 걷는 플레이어의 3분의 1 이하다 — 무적인 것이 빠르기까지 하면 부당하다. */
  speed: 25,
  /** 무적으로 있는 프레임. 기본 상태다. */
  ghostFrames: 150,
  /** 실체로 있는 프레임. 다가가 때릴 수 있을 만큼은 길어야 한다(1초 이상). */
  realFrames: 70,
  /**
   * 실체가 된 뒤 아직 접촉 피해를 주지 않는 프레임. **몸이 맺히는 시간이자 예고다.**
   *
   * 실체화하는 그 틱에 바로 청구하면 예고가 0프레임이라 회피할 수단이 없다.
   * 실체 창(70)에 비하면 짧아서, 읽고 물러설 틈은 주되 때릴 시간을 잡아먹지는 않는다.
   */
  materializeGraceFrames: 12,
  /** 목표 거리에서 이만큼 떨어진 지점부터 속도를 줄인다. 안 줄이면 목표 주위에서 진동한다. */
  approachRadius: 24,
  /**
   * 유령일 때 지키는 최소 거리(중심 간). 이 안쪽으로는 다가가지 않는다.
   *
   * 플레이어 히트박스 12×26 과 번개령 10×12 의 반각을 더하면 가로 11 · 세로 19 —
   * 대각선으로는 중심이 21.95 떨어져도 아직 겹친다. 20 언저리로 두면 위아래에서
   * 비스듬히 붙었을 때 여전히 히트박스 안이므로, 그보다 넉넉하게 띄운다.
   */
  standoff: 24,
} as const

export interface WispContext {
  /** 지금 갱도에 번개가 치고 있는가. 월드가 낙뢰의 타격 상태를 모아 넘긴다. */
  readonly lightning: boolean
}

export function stepWisp(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  ctx: WispContext,
  dt: number,
): Enemy {
  if (enemy.dead) return enemy

  // 부유는 상태와 무관하다. 실체화됐다고 멈춰서 표적이 되지는 않는다.
  const moved = drift(enemy, map, target, dt)

  // 번개가 치는 동안은 무조건 실체다. 주기를 기다리지 않는다.
  if (ctx.lightning) return setState(moved, 'real')

  if (enemy.state === 'real') {
    const held = setState(moved, 'real')
    // 번개가 길게 이어졌다면 그 동안이 곧 공격 창이었으므로, 그친 즉시 사라져도 공정하다.
    return held.stateFrames < WISP.realFrames ? held : setState(held, 'ghost')
  }

  // 'ghost' 와 스폰 직후의 알 수 없는 상태는 전부 무적이다 — 기본이 무적이다.
  const held = setState(moved, 'ghost')
  return held.stateFrames < WISP.ghostFrames ? held : setState(held, 'real')
}

/**
 * 플레이어를 향해 아주 느리게 떠다닌다. 중력은 받지 않는다.
 *
 * **유령인 동안에는 최소 이격(`standoff`)을 지킨다.** 무적·무해한 채로 겹치도록
 * 따라붙으면, 무시하고 지나가는 **올바른 플레이가 번개령을 히트박스 안에 주차**시킨다.
 * 그러다 번개가 치거나 주기가 차면 그 틱에 바로 접촉 피해가 들어간다 — 예고도
 * 회피할 거리도 없는 피해다. 다른 접촉 적은 늘 유해해서 애초에 닿게 두지 않으니
 * 이 문제가 없고, 번개령만 "겹치도록 유도한 뒤 청구"하는 셈이었다.
 *
 * 실체(`real`)일 때는 그대로 따라붙는다. 보이고 때릴 수 있으니 그때는 공정하다.
 * → docs/05-enemies-bosses.md 5.2 "무적이면 무해하다"
 */
function drift(
  enemy: Enemy,
  map: Tilemap,
  target: { readonly x: number; readonly y: number },
  dt: number,
): Enemy {
  const box = boxOfEnemy(enemy)
  const dx = target.x - (box.x + box.width / 2)
  const dy = target.y - (box.y + box.height / 2)
  const distance = Math.hypot(dx, dy)
  // 방향을 정할 수 없다. 물러날 쪽도 임의가 되므로 그냥 멈춘다.
  if (distance === 0) return { ...enemy, body: { ...enemy.body, vx: 0, vy: 0 } }

  const keep = enemy.state === 'real' ? 0 : WISP.standoff
  // 양수면 다가가고, 음수면 물러난다. 겹친 채로 버티지 않는다.
  const gap = distance - keep

  // 목표 거리에 가까울수록 느려진다. 등속으로 붙이면 매 틱 지나쳐 좌우로 떤다.
  const speed = Math.sign(gap) * WISP.speed * Math.min(1, Math.abs(gap) / WISP.approachRadius)
  const resolved = resolve(
    { ...enemy.body, vx: (dx / distance) * speed, vy: (dy / distance) * speed },
    map,
    dt,
  )
  // 물러나는 중에도 시선은 플레이어를 향한다.
  return { ...enemy, body: resolved.body, facing: dx < 0 ? -1 : 1 }
}

/**
 * 지금 때릴 수 있고, 때리는가.
 *
 * **피격 가능성과 접촉 피해를 한 술어가 정한다.** 무적인 적이 피해를 주면
 * 플레이어에게는 대응할 수단이 없다 — 무적과 무해는 떼어놓을 수 없다.
 */
export function isMaterialized(enemy: Enemy): boolean {
  if (enemy.kind !== 'wisp' || enemy.dead) return false
  return enemy.state === 'real'
}

/**
 * 실체가 됐지만 **아직 때리지 않는** 구간인가 — 몸이 맺히는 12프레임.
 *
 * 이 램프가 곧 예고다. 유령은 이격을 지키지만 플레이어 쪽에서 다가와 겹칠 수는
 * 있고, 하필 그때 번개가 치면 실체화한 그 틱에 접촉 피해가 들어간다.
 * 예고 0프레임짜리 피해이므로, 형체가 맺히는 것을 보고 물러설 틈을 먼저 준다.
 *
 * **때릴 수 있는 것과 때리는 것은 다르다.** 이 구간에도 `isMaterialized` 는
 * 참이다 — 예고를 읽은 사람에게 돌아오는 것이 없으면 그건 경고가 아니라 유예다.
 * 착지 직후의 늪지기(`bogman.isHarmless`)와 같은 규칙이다.
 * → docs/05-enemies-bosses.md 5.2 "예고 중에는 때릴 수 있다"
 */
export function isSettling(enemy: Enemy): boolean {
  if (enemy.kind !== 'wisp' || enemy.dead) return false
  return enemy.state === 'real' && enemy.stateFrames < WISP.materializeGraceFrames
}
