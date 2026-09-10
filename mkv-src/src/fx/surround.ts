import type { Enemy, EnemyKind } from '../entities/enemies/enemy.ts'
import { distanceTo } from '../entities/enemies/enemy.ts'
import { canBeHit } from '../entities/enemies/vulnerable.ts'
import type { Body } from '../physics/body.ts'

/**
 * 포위 경고 (AF-2).
 *
 * 취약한 좀비가 플레이어 반경 안에 셋 이상 모이면 화면 가장자리 비네트가
 * 붉어진다. **경고는 정보이지 처벌이 아니다** — 켜져 있는 동안 게임 로직은
 * 아무것도 바뀌지 않는다. 예고를 읽은 사람에게 돌아오는 것이 있어야 경고다.
 * → docs/05-enemies-bosses.md 5.1
 *
 * 수치(3마리 · 64px · 켜짐 200ms · 꺼짐 500ms)의 출처는 Jira AF-2 의 완료 조건뿐이다.
 * docs/05 에는 아직 "포위 경고" 항목이 없다 — 문서가 생기면 그쪽이 기준이다.
 *
 * 이벤트→감쇠 모양은 `fx/aberration.ts` 와 같지만, 이것은 이벤트가 아니라
 * **지속 상태**다. 매 프레임 월드에서 다시 세고, 상태는 램프만 기억한다.
 */

export interface SurroundSpec {
  /** 세는 종류. 1차는 좀비만이다 — 확장은 이 인자 하나로 한다. */
  readonly kind: EnemyKind
  /** 플레이어 중심에서 적 중심까지, 이하이면 안이다. */
  readonly radiusPx: number
  /** 이 수 이상이면 켜진다. */
  readonly on: number
  /** 이 수 이하이면 꺼진다. */
  readonly off: number
  readonly riseMs: number
  readonly fallMs: number
}

export const SURROUND: SurroundSpec = {
  kind: 'ghoul',
  radiusPx: 64,
  on: 3,
  off: 2,
  riseMs: 200,
  fallMs: 500,
}

export interface Vignette {
  readonly strength: number
  /** 0xRRGGBB. 가장자리를 이 색 쪽으로 섞는다. 검정이면 지금까지의 비네트와 같다. */
  readonly tint: number
}

/** docs/06 6.4 — 비네트 0.25, 색은 스테이지 팔레트에서 파생 (셰이더에서 검정 곱). */
export const BASE_VIGNETTE: Vignette = Object.freeze({ strength: 0.25, tint: 0x000000 })

/**
 * 경고 비네트. **docs/06 6.4 "비네트 색은 스테이지 팔레트에서 파생" 규칙의 유일한 예외**다.
 * 색만으로 구분하지 않도록 강도도 함께 올린다 (색각 이상 고려).
 */
export const SURROUND_VIGNETTE: Vignette = Object.freeze({ strength: 0.55, tint: 0x8b1a1a })

export interface SurroundState {
  readonly surrounded: boolean
  /** 0(평상) .. 1(경고 최대). 램프의 현재 위치다. */
  readonly level: number
}

export const NO_SURROUND: SurroundState = Object.freeze({ surrounded: false, level: 0 })

/**
 * 반경 안의 **취약한** 적 수. 죽었거나 무적인 것은 세지 않는다 — 무적이면 무해하다
 * (docs/05 5.2). 취약 판정은 월드의 피격 판정과 **같은 술어**(`canBeHit`)를 쓴다.
 * 좀비는 솟는 중(spawn)만 무적이지만, 종류를 바꿔 쓸 때 늪지기(잠복)·번개령(비실체)이
 * 세어지지 않는 것은 이 공유 덕이다. 거리는 적 상자 중심 ↔ 플레이어 몸 중심.
 */
export function countSurrounding(
  enemies: readonly Enemy[],
  player: Body,
  spec: SurroundSpec = SURROUND,
  vulnerable: (enemy: Enemy) => boolean = canBeHit,
): number {
  const center = { x: player.x + player.width / 2, y: player.y + player.height / 2 }
  let count = 0
  for (const enemy of enemies) {
    if (enemy.kind !== spec.kind || enemy.dead || !vulnerable(enemy)) continue
    if (distanceTo(enemy, center) <= spec.radiusPx) count += 1
  }
  return count
}

/**
 * 램프를 한 프레임 진행한다. 켜질 때는 riseMs, 꺼질 때는 fallMs 에 걸쳐 선형으로 간다.
 * 도중에 반전하면 그 자리에서 방향만 바꾼다 — 뚝 떨어지거나 튀지 않는다.
 *
 * on=3 · off=2 는 인접값이라 **사실상 히스테리시스가 없다** — 티켓 수치 그대로다.
 * 경계에서의 깜빡임을 눌러 주는 것은 이 램프뿐이다. 반경 히스테리시스(들어올 때 64,
 * 나갈 때 72 같은)는 두지 않았다. 필요해지면 `off` 를 `on` 보다 작게 두는 것으로 시작한다.
 * dt 가 0 이면(일시정지) 상태는 그대로다. 유한하지 않은 dt 는 0 으로 본다 — NaN 이 한 번
 * 들어오면 지속 상태라 회복 경로가 없다.
 */
export function stepSurround(
  state: SurroundState,
  count: number,
  dtMs: number,
  spec: SurroundSpec = SURROUND,
): SurroundState {
  const surrounded = state.surrounded ? count > spec.off : count >= spec.on
  const dt = Number.isFinite(dtMs) ? Math.max(0, dtMs) : 0
  const level = surrounded
    ? Math.min(1, state.level + dt / spec.riseMs)
    : Math.max(0, state.level - dt / spec.fallMs)
  return { surrounded, level }
}

/** 지금 화면에 걸 비네트. 기본값과 경고값 사이를 level 로 섞는다. */
export function vignetteOf(state: SurroundState): Vignette {
  const t = clamp01(state.level)
  if (t <= 0) return BASE_VIGNETTE
  if (t >= 1) return SURROUND_VIGNETTE
  return {
    strength: lerp(BASE_VIGNETTE.strength, SURROUND_VIGNETTE.strength, t),
    tint: lerpColor(BASE_VIGNETTE.tint, SURROUND_VIGNETTE.tint, t),
  }
}

/** 0xRRGGBB → [r, g, b] (0..1). 셰이더 유니폼용. */
export function rgbOf(tint: number): readonly [number, number, number] {
  return [((tint >> 16) & 0xff) / 255, ((tint >> 8) & 0xff) / 255, (tint & 0xff) / 255]
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function lerpColor(a: number, b: number, t: number): number {
  const [ar, ag, ab] = rgbOf(a)
  const [br, bg, bb] = rgbOf(b)
  const ch = (x: number, y: number): number => Math.round(lerp(x, y, t) * 255)
  return (ch(ar, br) << 16) | (ch(ag, bg) << 8) | ch(ab, bb)
}

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v))
}
