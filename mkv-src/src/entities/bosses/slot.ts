import type { RngState } from '../../core/rng.ts'
import type { Aabb } from '../../physics/aabb.ts'
import type { Cairn } from './cairn.ts'
import type { BossKind } from './kind.ts'

/**
 * 보스 슬롯 계약 (AF-3 선행).
 *
 * 월드와 화면은 보스를 **이 표를 통해서만** 만진다 — 생성·각성·갱신·피해·판정 상자·생사.
 * 캐른 함수를 그대로 일반화한 것이라 캐른 코드는 한 줄도 바뀌지 않는다.
 * 이 저장소 관례대로 클래스가 아니라 값 + 순수 함수 테이블이다.
 *
 * `BossOps<B>` 는 자기 종류의 상태만 받는다 — 종류가 늘어도 캐른 슬롯은 손대지 않는다.
 * 레지스트리는 `BossOps`(= `BossOps<Boss>`) 로 들고 있고, 메서드 파라미터가 양변이라
 * `BossOps<CairnBoss>` 가 그대로 들어간다. → docs/13 §데이터 초안과 공통 구현 경계
 */

/** 캐른 상태에 종류 태그를 붙인 것. */
export type CairnBoss = Cairn & { readonly kind: 'cairn' }

/** 등록된 종류의 상태 합집합. 보스 티켓이 멤버를 추가한다. */
export type Boss = CairnBoss

/**
 * 이번 틱에 내보낼 것들. 키의 의미는 캐른 때와 같다 — 신규 보스는 `ghouls` 를 비운다.
 * 캐른의 `CairnEmission` 이 이 구조를 그대로 만족한다.
 */
export interface BossEmission {
  readonly gravestones: readonly { x: number; y: number; vx: number; vy: number }[]
  readonly rocks: readonly { x: number; y: number }[]
  readonly ghouls: readonly { x: number; y: number }[]
  /** 지면 강타 — 카메라 셰이크 신호 */
  readonly quake: boolean
}

export interface BossContext {
  readonly target: { readonly x: number; readonly y: number }
  readonly groundY: number
}

export interface BossStep<B extends Boss = Boss> {
  readonly boss: B
  readonly emission: BossEmission
}

export interface BossDamage<B extends Boss = Boss> {
  readonly boss: B
  readonly dealt: number
  readonly killed: boolean
}

export interface BossOps<B extends Boss = Boss> {
  /** 레지스트리 키와 같아야 한다 — 종류가 늘어도 `Boss` 합집합과 무관하게 이름을 받는다. */
  readonly kind: BossKind
  /** HUD 보스 바의 분모. 300 을 화면 코드에 박아 두지 않는다. */
  readonly maxHp: number
  /** `groundY` 는 바닥 y 다 — 어디에 서는지는 보스가 안다. */
  create(x: number, groundY: number, rng: RngState): B
  awaken(boss: B): B
  step(boss: B, ctx: BossContext, dt: number): BossStep<B>
  damage(boss: B, amount: number, box: Aabb): BossDamage<B>
  /** 죽었는가. 상태 머신의 이름은 종류마다 다르므로 월드는 이걸로 묻는다. */
  isDead(boss: B): boolean
  bodyBox(boss: B): Aabb
  coreBox(boss: B): Aabb
  /** 플레이어를 때리는 상자들 — 몸통 접촉은 `bodyBox` 로 따로 본다. */
  hitBoxes(boss: B): readonly Aabb[]
  isCoreExposed(boss: B): boolean
}
