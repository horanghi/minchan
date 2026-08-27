import type { RngState } from '../../core/rng.ts'
import type { Tilemap } from '../../physics/tilemap.ts'
import type { Body } from '../../physics/body.ts'
import { boxOf, createBody } from '../../physics/body.ts'
import { overlaps, type Aabb } from '../../physics/aabb.ts'

/**
 * 적 공통.
 *
 * 적끼리는 충돌하지 않는다 — 겹쳐도 무방하다. 서로 밀어내면 좁은 통로에서
 * 뭉쳐 굳고, 플레이어는 왜 안 오는지 알 수 없다. → docs/10-tech-spec.md 10.4
 */

export const ENEMY_KINDS = [
  'ghoul', 'grimm', 'corvid', 'levin',
  // 스테이지 전용 잡몹. 어느 스테이지에 나오는지는 docs/05 5.2 등장 열이 정한다.
  'ember', 'pyre', 'frostfang', 'ringer', 'bogman', 'spore', 'gaoler', 'wisp',
] as const
export type EnemyKind = (typeof ENEMY_KINDS)[number]

export interface Enemy {
  readonly id: number
  readonly kind: EnemyKind
  readonly body: Body
  readonly hp: number
  /** 종류별 행동 상태. 각 AI 모듈이 해석한다. */
  readonly state: string
  /** 현재 상태에 머문 프레임 */
  readonly stateFrames: number
  readonly facing: -1 | 1
  /** 피격 백색 플래시 남은 프레임 */
  readonly hitFlash: number
  readonly dead: boolean
  readonly rng: RngState
  /** 스폰 지점. 순찰·복귀 판단에 쓴다. */
  readonly home: { readonly x: number; readonly y: number }
}

export interface EnemySpec {
  readonly kind: EnemyKind
  readonly hp: number
  readonly width: number
  readonly height: number
  /** 접촉 데미지가 있는가. 스테이지 1 잡몹은 전부 접촉으로 때린다. */
  readonly contactDamage: boolean
}

/** 히트박스는 스프라이트보다 작다. 관대한 판정이 원칙이다. → docs/02 2.1 */
export const ENEMY_SPECS: Readonly<Record<EnemyKind, EnemySpec>> = {
  ghoul: { kind: 'ghoul', hp: 20, width: 12, height: 22, contactDamage: true },
  grimm: { kind: 'grimm', hp: 30, width: 14, height: 16, contactDamage: true },
  corvid: { kind: 'corvid', hp: 12, width: 12, height: 10, contactDamage: true },
  // 구름 자체는 닿아도 아프지 않다 — 위협은 전부 예고된 번개 기둥이다.
  levin: { kind: 'levin', hp: 16, width: 14, height: 10, contactDamage: false },

  // S2 불타는 마령촌 — 불은 거리로 나뉜다. 화염귀가 먼 거리, 소각인이 가까운 거리.
  ember: { kind: 'ember', hp: 24, width: 12, height: 20, contactDamage: true },
  pyre: { kind: 'pyre', hp: 45, width: 14, height: 24, contactDamage: true },

  // S3 얼어붙은 종루 — 서리늑대가 속도를, 종지기가 그 속도를 더 키운다.
  frostfang: { kind: 'frostfang', hp: 28, width: 18, height: 14, contactDamage: true },
  ringer: { kind: 'ringer', hp: 35, width: 12, height: 22, contactDamage: true },

  // S4 속삭이는 늪 — 늪지기는 숨어 있고, 포자충은 죽어서 자리를 막는다.
  bogman: { kind: 'bogman', hp: 40, width: 14, height: 20, contactDamage: true },
  /**
   * 포자충은 작지만 **투사체 높이에는 닿아야 한다.**
   * 10px 로 두면 랜슬이 머리 위로 지나가 HP 8 짜리가 사실상 무적이 된다 —
   * 약한 적이 못 잡는 적이 되는 것은 약함이 아니라 고장이다.
   */
  spore: { kind: 'spore', hp: 8, width: 12, height: 16, contactDamage: true },

  // S5 눈먼 갱도 — 간수는 리치로, 번개령은 타이밍으로 압박한다.
  gaoler: { kind: 'gaoler', hp: 55, width: 14, height: 24, contactDamage: true },
  wisp: { kind: 'wisp', hp: 16, width: 10, height: 12, contactDamage: true },
}

/** 피격 플래시 2프레임. → docs/06 6.5 */
export const HIT_FLASH_FRAMES = 2

export function createEnemy(
  id: number,
  kind: EnemyKind,
  x: number,
  y: number,
  rng: RngState,
  state = 'spawn',
  facing: -1 | 1 = -1,
): Enemy {
  const spec = ENEMY_SPECS[kind]
  return {
    id,
    kind,
    body: createBody(x, y, spec.width, spec.height),
    hp: spec.hp,
    state,
    stateFrames: 0,
    facing,
    hitFlash: 0,
    dead: false,
    rng,
    home: { x, y },
  }
}

/** 상태를 바꾼다. 같은 상태면 프레임만 센다. */
export function setState(enemy: Enemy, state: string): Enemy {
  if (enemy.state === state) return { ...enemy, stateFrames: enemy.stateFrames + 1 }
  return { ...enemy, state, stateFrames: 0 }
}

export interface DamageResult {
  readonly enemy: Enemy
  readonly killed: boolean
  readonly absorbed: boolean
}

/** 데미지. 이미 죽은 적은 다시 맞지 않는다 — 시체에 투사체를 낭비하지 않게. */
export function damage(enemy: Enemy, amount: number): DamageResult {
  if (enemy.dead) return { enemy, killed: false, absorbed: false }

  const hp = Math.max(0, enemy.hp - Math.max(0, amount))
  const killed = hp === 0
  return {
    enemy: { ...enemy, hp, hitFlash: HIT_FLASH_FRAMES, dead: killed },
    killed,
    absorbed: true,
  }
}

export function tickFlash(enemy: Enemy): Enemy {
  if (enemy.hitFlash === 0) return enemy
  return { ...enemy, hitFlash: enemy.hitFlash - 1 }
}

export function boxOfEnemy(enemy: Enemy): Aabb {
  return boxOf(enemy.body)
}

/** 플레이어와 닿았는가. 무적 판정은 호출부(vitals)가 한다. */
export function touches(enemy: Enemy, playerBox: Aabb): boolean {
  if (enemy.dead) return false
  if (!ENEMY_SPECS[enemy.kind].contactDamage) return false
  return overlaps(boxOfEnemy(enemy), playerBox)
}

/** 플레이어까지의 거리. AI 가 활성 반경 판단에 쓴다. */
export function distanceTo(enemy: Enemy, target: { readonly x: number; readonly y: number }): number {
  const box = boxOfEnemy(enemy)
  return Math.hypot(box.x + box.width / 2 - target.x, box.y + box.height / 2 - target.y)
}

/**
 * 맵 아래로 이만큼 벗어나면 사라진다. 플레이어의 낙사 판정과 같은 여유다.
 * → `game/world.ts` 의 `fellOut`
 */
export const FALL_OUT_MARGIN_TILES = 2

/**
 * 걷어낼 적을 걷어낸다 — 죽었거나, **맵 밖으로 떨어졌거나.**
 *
 * 구덩이에 빠진 적은 죽지 않는다. 그대로 두면 영원히 떨어지면서 매 틱
 * 밟히고, 좌표가 무한정 커지며, 결과 화면의 "처치 n/전체" 에서 영영 못
 * 잡는 수로 남는다. 실제로 7마리 중 5마리가 y 21000 까지 내려가 있었다.
 */
export function pruneEnemies(enemies: readonly Enemy[], map?: Tilemap): readonly Enemy[] {
  const floor = map === undefined
    ? Number.POSITIVE_INFINITY
    : (map.height + FALL_OUT_MARGIN_TILES) * map.tileSize

  const kept = enemies.filter((e) => !e.dead && e.body.y <= floor)
  return kept.length === enemies.length ? enemies : kept
}
