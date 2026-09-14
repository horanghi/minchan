import type { RngState } from '../../core/rng.ts'
import { overlaps, type Aabb } from '../../physics/aabb.ts'
import type { BossEmission } from './slot.ts'

/**
 * 서리실 종지기 실베인 (Silvain) — 스테이지 3 보스. HP 340.
 *
 * 얼어붙은 종루의 종과 거미줄을 연결해 **같은 박자에 서로 다른 높이의 공격**을 낸다.
 * 수치는 전부 `docs/13-stage-bosses-plan.md` §S3 와 §공통 설계 계약의 표에서 왔다 —
 * 여기서 숫자를 바꾸면 그 표도 같이 고친다.
 *
 * **애쉬맨트와 다른 점 셋.**
 * (1) *박자*가 있다. 선행은 240f(4초) 경계에서만 시작한다. 박자는 **오디오 시간이 아니라
 *     고정 틱**이다 — BGM 템포나 지연이 판정을 바꾸면 소리를 끈 사람에게 부당해진다.
 * (2) *보스 파츠가 없다.* A·E 는 근접 상자, B·D 는 활성 프레임에만 존재하는 띠라
 *     상태에서 바로 나온다. 떨어지는 것(C 고드름)만 위험물로 낸다 — 중력·지형·천장 처리가
 *     이미 있는 쪽을 쓴다.
 * (3) E 의 좌우는 플레이어를 보지 않는다. 왼쪽 다음 오른쪽으로 **고정**이라, 뒤로 도는 것으로
 *     피할 수 있는 공백이 애초에 생기지 않는다.
 */

export const SILVAIN = {
  maxHp: 340,
  width: 56,
  height: 52,
  /** 지상 높이에 늘어진 배의 종추 코어. 다른 부위는 절반만 들어간다. G5 */
  core: { x: 23, y: 26, width: 10, height: 10 },
  weakPointMultiplier: 0.5,

  /** 340 의 60% · 25%. → docs/05 §5.3 */
  phase2Hp: 204,
  phase3Hp: 85,

  /**
   * 박자 — 4초. 기존 비르나·docs/04 STAGE 3 에서 온 값이다.
   * 선행은 이 경계에서만 시작하고, 위험물이 남아 있으면 그 박자를 건너뛴다.
   */
  beatFrames: 240,

  /** 모든 선행은 48f 이상이다 — 체공 34f 뒤에도 14f 가 남는다. G1 */
  patterns: {
    /** A 앞다리 찍기 — 근접 응징. G2 */
    stomp: { windupFrames: 48, activeFrames: 12, recoverFrames: 36, reach: 40, height: 24 },
    /** B 높은 서리실 — 웅크림으로 지나간다. G3·G9 */
    highSilk: { windupFrames: 48, activeFrames: 12, recoverFrames: 30 },
    /** C 고드름 지목 — 전역 지목, 낙하물. G4·G7 */
    icicle: { windupFrames: 48, activeFrames: 0, recoverFrames: 40, count: 3 },
    /** D 바닥 실쓸기 — 고정 점프로 넘는다. G3·G8 */
    lowSilk: { windupFrames: 48, activeFrames: 12, recoverFrames: 36 },
    /** E 다리 접기 — 좌우 순차 2타, 타수마다 다시 예고한다. G2 */
    legFold: { windupFrames: 48, activeFrames: 12, recoverFrames: 36 },
  },

  /** B·D — 띠의 길이. 캐른 투척 상한과 같은 190px 를 순간 띠에 적용한 것이다. G3 */
  silkLengthPx: 190,
  /** B — 높이 8px 짜리 띠. 웅크림 16px 위, 서기 26px 아래에 걸린다. G9 */
  highSilkHeight: 8,
  highSilkFloorGap: 18,
  /** D — 지면에 붙은 띠. 웅크려서는 못 피한다. G8 */
  lowSilkHeight: 14,
  /** C — 고드름 셋이 덮는 폭. 사이 80px 가 확정 회피 경로다. G4 */
  icicleSpreadPx: 160,
  /** C — 낙하 시작 높이. `hazard.ts` 의 낙석과 같은 경로를 쓴다. */
  icicleDropPx: 200,
  /** E — 좌우 2타. */
  legFoldHits: 2,
} as const

export type SilvainState = 'idle' | 'stomp' | 'highSilk' | 'icicle' | 'lowSilk' | 'legFold' | 'dead'

export interface Silvain {
  readonly x: number
  readonly y: number
  readonly hp: number
  readonly phase: 1 | 2 | 3
  readonly state: SilvainState
  readonly stateFrames: number
  readonly facing: -1 | 1
  /** 선행 시작에 찍어 둔 목표. 표식이 플레이어를 따라가지 않게 하는 장치다. */
  readonly targetSnapshot: { readonly x: number; readonly y: number } | null
  /** 선행 시작에 고정한 방향. A·B·D 가 쓴다 (E 는 좌우 고정이라 보지 않는다). */
  readonly attackFacing: -1 | 1
  /** 가중치 순환의 위치. 난수가 아니다. */
  readonly cycleIndex: number
  /** E 의 몇 번째 타인가. 0 부터. */
  readonly hitIndex: number
  /** 박자 위치. 0 일 때만 선행을 시작한다. 오디오가 아니라 틱이다. */
  readonly beatTicks: number
  readonly hitFlash: number
  readonly rng: RngState
  readonly awake: boolean
}

/** 페이즈별 순환표. C(icicle)가 모든 페이즈에 있어 원거리 정지 공략을 막는다. */
const CYCLES: Readonly<Record<1 | 2 | 3, readonly SilvainState[]>> = {
  1: ['stomp', 'highSilk', 'icicle'],
  2: ['stomp', 'highSilk', 'icicle', 'lowSilk', 'icicle'],
  3: ['stomp', 'highSilk', 'icicle', 'lowSilk', 'icicle', 'legFold', 'icicle'],
}

export function nextPattern(phase: 1 | 2 | 3, cycleIndex: number): SilvainState {
  const cycle = CYCLES[phase]
  return cycle[((cycleIndex % cycle.length) + cycle.length) % cycle.length] ?? 'stomp'
}

/** 페이즈 전환 뒤 첫 패턴은 C 다 — 순환의 그 자리를 가리키는 인덱스. */
function cycleIndexOfIcicle(phase: 1 | 2 | 3): number {
  return CYCLES[phase].indexOf('icicle')
}

export function phaseForSilvain(hp: number): 1 | 2 | 3 {
  if (hp <= SILVAIN.phase3Hp) return 3
  if (hp <= SILVAIN.phase2Hp) return 2
  return 1
}

export function createSilvain(x: number, groundY: number, rng: RngState): Silvain {
  return {
    x,
    y: groundY - SILVAIN.height,
    hp: SILVAIN.maxHp,
    phase: 1,
    state: 'idle',
    stateFrames: 0,
    facing: -1,
    targetSnapshot: null,
    attackFacing: -1,
    cycleIndex: 0,
    hitIndex: 0,
    beatTicks: 0,
    hitFlash: 0,
    rng,
    awake: false,
  }
}

export function awakenSilvain(boss: Silvain): Silvain {
  if (boss.awake) return boss
  // 깨어난 틱을 박자 0 으로 잡는다 — 첫 박자를 기다리는 시간이 방마다 달라지지 않게.
  return { ...boss, awake: true, state: 'idle', stateFrames: 0, beatTicks: 0 }
}

export function bodyBoxOf(boss: Silvain): Aabb {
  return { x: boss.x, y: boss.y, width: SILVAIN.width, height: SILVAIN.height }
}

export function coreBoxOf(boss: Silvain): Aabb {
  return {
    x: boss.x + SILVAIN.core.x,
    y: boss.y + SILVAIN.core.y,
    width: SILVAIN.core.width,
    height: SILVAIN.core.height,
  }
}

/** E 에서 다리가 펼쳐지면 배의 코어가 더 잘 보인다 — 판정은 그대로고 조명만 밝아진다. */
export function isCoreExposedOf(boss: Silvain): boolean {
  return boss.state === 'legFold'
}

/**
 * 지금 플레이어를 때리는 상자들.
 *
 * 전부 상태에서 나온다 — 파츠 배열이 없으므로 "패턴이 끝났는데 판정이 남는" 길 자체가 없다.
 * C 고드름은 위험물이라 여기 없다 (월드의 `hazardHit` 이 본다).
 */
export function attackBoxesOf(boss: Silvain): readonly Aabb[] {
  if (boss.state === 'dead' || !boss.awake) return []
  const box = stompBoxOf(boss) ?? silkBandOf(boss) ?? legFoldBoxOf(boss)
  return box === null ? [] : [box]
}

/** 활성 구간인가. 타수 안의 프레임을 기준으로 본다. */
function isActive(frames: number, spec: { windupFrames: number; activeFrames: number }): boolean {
  return frames >= spec.windupFrames && frames < spec.windupFrames + spec.activeFrames
}

function stompBoxOf(boss: Silvain): Aabb | null {
  if (boss.state !== 'stomp') return null
  const spec = SILVAIN.patterns.stomp
  if (!isActive(boss.stateFrames, spec)) return null
  const x = boss.attackFacing === 1 ? boss.x + SILVAIN.width : boss.x - spec.reach
  return { x, y: boss.y + SILVAIN.height - spec.height, width: spec.reach, height: spec.height }
}

/**
 * B·D 의 띠. 둘은 **높이만 다르다** — 높은 띠는 웅크려 지나가고, 낮은 띠는 뛰어 넘는다.
 * 대응이 갈리므로 두 띠가 같은 틱에 존재하면 안 된다(그건 회피 불가다). 상태가 하나라
 * 구조적으로 그럴 수 없다.
 */
function silkBandOf(boss: Silvain): Aabb | null {
  const high = boss.state === 'highSilk'
  const low = boss.state === 'lowSilk'
  if (!high && !low) return null
  const spec = high ? SILVAIN.patterns.highSilk : SILVAIN.patterns.lowSilk
  if (!isActive(boss.stateFrames, spec)) return null

  const height = high ? SILVAIN.highSilkHeight : SILVAIN.lowSilkHeight
  const floorGap = high ? SILVAIN.highSilkFloorGap : 0
  const groundY = boss.y + SILVAIN.height
  const length = SILVAIN.silkLengthPx
  const x = boss.attackFacing === 1 ? boss.x + SILVAIN.width : boss.x - length
  return { x, y: groundY - floorGap - height, width: length, height }
}

/** E — 왼쪽 다음 오른쪽. 플레이어 위치를 보지 않으므로 뒤로 도는 회피가 통하지 않는다. */
function legFoldBoxOf(boss: Silvain): Aabb | null {
  if (boss.state !== 'legFold') return null
  const spec = SILVAIN.patterns.legFold
  if (!isActive(boss.stateFrames, spec)) return null
  const side: -1 | 1 = boss.hitIndex === 0 ? -1 : 1
  const reach = SILVAIN.patterns.stomp.reach
  const height = SILVAIN.patterns.stomp.height
  const x = side === 1 ? boss.x + SILVAIN.width : boss.x - reach
  return { x, y: boss.y + SILVAIN.height - height, width: reach, height }
}

/** 예비 동작 중인가. E 는 타수마다 다시 예고한다. */
export function isSilvainWindingUp(boss: Silvain): boolean {
  if (boss.state === 'idle' || boss.state === 'dead') return false
  return boss.stateFrames < SILVAIN.patterns[boss.state].windupFrames
}

export interface SilvainDamage {
  readonly boss: Silvain
  readonly dealt: number
  readonly killed: boolean
}

export function damageSilvain(boss: Silvain, amount: number, box: Aabb): SilvainDamage {
  if (boss.state === 'dead' || !boss.awake) return { boss, dealt: 0, killed: false }

  const hitCore = overlaps(box, coreBoxOf(boss))
  if (!hitCore && !overlaps(box, bodyBoxOf(boss))) return { boss, dealt: 0, killed: false }

  const dealt = Math.round(amount * (hitCore ? 1 : SILVAIN.weakPointMultiplier))
  const hp = Math.max(0, boss.hp - dealt)
  const killed = hp === 0
  const phase = phaseForSilvain(hp)

  return {
    // 페이즈가 올라가면 **다음** 선택을 C 로 되돌린다. 예고 중인 공격은 그대로 둔다.
    boss: {
      ...boss,
      hp,
      hitFlash: 2,
      phase,
      state: killed ? 'dead' : boss.state,
      cycleIndex: phase !== boss.phase ? cycleIndexOfIcicle(phase) : boss.cycleIndex,
    },
    dealt,
    killed,
  }
}

export interface SilvainStep {
  readonly boss: Silvain
  readonly emission: BossEmission
}

const NOTHING: BossEmission = Object.freeze({ gravestones: [], rocks: [], ghouls: [], quake: false })

export interface SilvainContext {
  readonly target: { readonly x: number; readonly y: number }
  readonly groundY: number
  /** 위험물 목록에 남은 자리. C 는 이만큼이 없으면 예고조차 하지 않는다. */
  readonly hazardRoom: number
  /** 실베인이 지금 내보내 둔 고드름 수. 0 이 될 때까지 C 도, 다음 박자도 시작하지 않는다. */
  readonly ownedHazards: number
}

export function stepSilvain(boss: Silvain, ctx: SilvainContext, _dt: number): SilvainStep {
  if (!boss.awake || boss.state === 'dead') {
    return { boss: { ...boss, hitFlash: Math.max(0, boss.hitFlash - 1) }, emission: NOTHING }
  }

  // 박자는 무엇을 하든 흐른다. 공격이 길어져도 다음 경계는 같은 자리에 온다.
  const beatTicks = (boss.beatTicks + 1) % SILVAIN.beatFrames
  // 몸은 늘 플레이어를 본다. 공격 방향은 `attackFacing` 이 따로 기억한다.
  const facing: -1 | 1 = ctx.target.x < boss.x + SILVAIN.width / 2 ? -1 : 1
  const stepped: Silvain = { ...boss, beatTicks, facing, hitFlash: Math.max(0, boss.hitFlash - 1) }
  // 패턴의 **첫 틱**에 목표와 방향을 찍는다. 여기서 찍어 두지 않으면 표식이 매 틱
  // 플레이어를 따라가 예고가 아니게 된다.
  const base: Silvain = stepped.state !== 'idle' && stepped.stateFrames === 0
    ? snapshot(stepped, ctx)
    : stepped

  switch (base.state) {
    case 'idle': return stepIdle(base, ctx)
    case 'stomp': return stepTimed(base, SILVAIN.patterns.stomp)
    case 'highSilk': return stepTimed(base, SILVAIN.patterns.highSilk)
    case 'lowSilk': return stepTimed(base, SILVAIN.patterns.lowSilk)
    case 'icicle': return stepIcicle(base, ctx)
    case 'legFold': return stepLegFold(base)
    default: return { boss: base, emission: NOTHING }
  }
}

/**
 * 겨냥 지점. **스냅샷만 본다** — `ctx.target` 으로 폴백하면 그것이 곧 문서가 금지한
 * "매 틱 목표"다. 스냅샷은 패턴 첫 틱에 반드시 찍히므로 여기서 없을 수 없다.
 */
function aimOf(boss: Silvain): { readonly x: number; readonly y: number } {
  if (boss.targetSnapshot === null) throw new Error('선행 시작에 목표를 찍지 않았다')
  return boss.targetSnapshot
}

function snapshot(boss: Silvain, ctx: SilvainContext): Silvain {
  return {
    ...boss,
    targetSnapshot: { x: ctx.target.x, y: ctx.target.y },
    attackFacing: ctx.target.x < boss.x + SILVAIN.width / 2 ? -1 : 1,
  }
}

/**
 * 대기 — 다음 박자를 기다린다.
 *
 * 박자 경계가 아니면 아무것도 하지 않는다. 경계에 닿았어도 **고드름이 남아 있으면
 * 그 박자를 건너뛴다** — 남은 낙하물 위로 다음 공격을 겹치지 않게 하는 규칙이고,
 * 건너뛴 박자에는 순환 위치를 올리지 않으므로 다음 유효 박자에 같은 패턴이 선행 전체를
 * 다시 보인다. → docs/13 §S3
 */
function stepIdle(boss: Silvain, ctx: SilvainContext): SilvainStep {
  const waiting: Silvain = { ...boss, stateFrames: boss.stateFrames + 1 }
  if (boss.beatTicks !== 0 || ctx.ownedHazards > 0) return { boss: waiting, emission: NOTHING }

  const next = nextPattern(boss.phase, boss.cycleIndex)
  // C 를 둘 자리가 없으면 예고조차 하지 않는다. 순환 위치를 지켜 다음 박자에 다시 시도한다 —
  // 예고만 하고 아무 일도 일어나지 않는 것보다 한 박자 쉬는 편이 정직하다.
  if (next === 'icicle' && ctx.hazardRoom < SILVAIN.patterns.icicle.count) {
    return { boss: waiting, emission: NOTHING }
  }
  return {
    boss: { ...boss, state: next, stateFrames: 0, hitIndex: 0, cycleIndex: boss.cycleIndex + 1 },
    emission: NOTHING,
  }
}

function toIdle(boss: Silvain): Silvain {
  return { ...boss, state: 'idle', stateFrames: 0, hitIndex: 0 }
}

/** A·B·D — 선행 → 활성 → 회복. 판정은 `attackBoxesOf` 가 상태에서 만든다. */
function stepTimed(
  boss: Silvain,
  spec: { windupFrames: number; activeFrames: number; recoverFrames: number },
): SilvainStep {
  const frames = boss.stateFrames + 1
  if (frames >= spec.windupFrames + spec.activeFrames + spec.recoverFrames) {
    return { boss: toIdle(boss), emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames }, emission: NOTHING }
}

/**
 * C 고드름 지목 — 낙하물 3개.
 *
 * 스냅샷 중심 ±80px 에 떨어진다. 사이 80px 가 확정 회피 경로다. 떨어지는 물체라
 * 중력·지형 충돌·천장 처리가 필요하므로 **위험물(`rock`)로 낸다** — 보스 파츠로 만들면
 * 그 물리를 새로 써야 한다. 사인 귀속·자리 확인·사망 정리는 슬롯 계약이 처리한다.
 */
function stepIcicle(boss: Silvain, ctx: SilvainContext): SilvainStep {
  const spec = SILVAIN.patterns.icicle
  const frames = boss.stateFrames + 1

  if (frames === spec.windupFrames) {
    // 방출 직전에 자리를 다시 본다. 예고 48f 사이에 다른 것이 목록을 채웠을 수 있고,
    // 그러면 `spawnHazard` 가 조용히 버려 예비 동작만 남는다.
    if (ctx.hazardRoom < spec.count) return { boss: toIdle(boss), emission: NOTHING }

    const aim = aimOf(boss)
    const half = SILVAIN.icicleSpreadPx / 2
    const rocks = [-half, 0, half].map((offset) => ({
      x: aim.x + offset,
      y: ctx.groundY - SILVAIN.icicleDropPx,
    }))
    return { boss: { ...boss, stateFrames: frames }, emission: { ...NOTHING, rocks } }
  }

  // 회복이 끝나도 **고드름이 남아 있으면 끝내지 않는다.** 타이머만 보고 다음 패턴을
  // 시작하면 떨어지는 것 위로 새 판정이 겹친다.
  if (frames >= spec.windupFrames + spec.recoverFrames && ctx.ownedHazards === 0) {
    return { boss: toIdle(boss), emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames }, emission: NOTHING }
}

/**
 * E 다리 접기 — 좌우 순차 2타.
 *
 * 타수마다 선행 48f 를 다시 준다. 좌우는 **고정**이라 방향을 다시 찍을 필요가 없다 —
 * 플레이어를 따라가지도, 반대로 한쪽만 계속 때리지도 않는다.
 */
function stepLegFold(boss: Silvain): SilvainStep {
  const spec = SILVAIN.patterns.legFold
  const frames = boss.stateFrames + 1
  const perHit = spec.windupFrames + spec.activeFrames + spec.recoverFrames

  if (frames >= perHit) {
    const nextHit = boss.hitIndex + 1
    if (nextHit >= SILVAIN.legFoldHits) return { boss: toIdle(boss), emission: NOTHING }
    // 다음 타는 프레임을 0 부터 다시 센다 — 그래서 두 번째 타도 48f 예고를 온전히 받는다.
    return { boss: { ...boss, stateFrames: 0, hitIndex: nextHit }, emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames }, emission: NOTHING }
}
