import type { RngState } from '../../core/rng.ts'
import { overlaps, type Aabb } from '../../physics/aabb.ts'
import type { BossEmission } from './slot.ts'

/**
 * 잿굴 여왕 애쉬맨트 (Ashmant) — 스테이지 2 보스. HP 360.
 *
 * 불타는 마령촌의 집터를 둥지로 삼아 불씨를 운반하고, 턱과 행군로로 퇴로를 압박한다.
 * 수치는 전부 `docs/13-stage-bosses-plan.md` §S2 와 §공통 설계 계약의 표에서 왔다 —
 * 여기서 숫자를 바꾸면 그 표도 같이 고친다.
 *
 * **캐른과 다른 점 셋.** (1) 패턴 선택이 난수가 아니라 가중치 순환이다.
 * (2) 목표와 방향을 **선행 시작에 고정**한다 — 표식이 플레이어를 따라가면 예고가 아니다.
 * (3) C·D·E 의 판정은 위험물 목록이 아니라 **보스 파츠**다. 위험물 상한(12)에 걸려
 * 예고만 하고 아무 일도 일어나지 않는 결함을 구조로 막는다.
 */

export const ASHMANT = {
  maxHp: 360,
  width: 56,
  height: 52,
  /** 앞가슴의 불씨 주머니. 다른 부위는 절반만 들어간다. G5 */
  core: { x: 23, y: 26, width: 10, height: 10 },
  weakPointMultiplier: 0.5,

  /** 360 의 60% · 25%. → docs/05 §5.3 */
  phase2Hp: 216,
  phase3Hp: 90,

  /** 패턴 사이 숨. 캐른과 같다. G7 */
  idleFrames: 54,

  /** 모든 선행은 48f 이상이다 — 체공 34f 뒤에도 14f 가 남는다. G1 */
  patterns: {
    /** A 턱찍기 — 근접 응징. G2 */
    jaw: { windupFrames: 48, activeFrames: 12, recoverFrames: 36, reach: 40, height: 24 },
    /** B 불씨 운반 — 중거리 위치 압박. G3 */
    embers: { windupFrames: 48, recoverFrames: 30, count: 2 },
    /** C 잿더미 분출 — 전역 지목. G4·G8 */
    ash: { windupFrames: 48, activeFrames: 12, recoverFrames: 40, count: 3 },
    /** D 불씨 행군 — 저공 직진. G6·G8 */
    march: { windupFrames: 48, recoverFrames: 36 },
    /** E 외피 탈락 — 조각마다 예고. 재결합 36f 는 `shellMergeFrames` 하나로만 둔다. G6·G9 */
    shell: { windupFrames: 48 },
  },

  /** B — 겨냥 상한과 착지점 간격. G3 */
  aimMaxPx: 190,
  emberGapPx: 128,
  emberLaunchVy: -340,
  emberGravity: 1750,
  /** C — 기둥 셋이 덮는 폭과 크기. G4·G8 */
  ashSpreadPx: 160,
  ashPillar: { width: 10, height: 24 },
  /** D — 이동 조각. G6·G8 */
  marchBox: 14,
  marchSpeed: 58,
  marchRangePx: 190,
  /** E — 조각 4개, 낮음/높음 교대. 높은 조각은 웅크려 지나가도록 판정만 8px 로 깎는다. G9 */
  shellPieces: 4,
  shellBox: 14,
  shellHighHitHeight: 8,
  /** 높은 조각의 판정 아래 끝 — 바닥에서 이만큼 위. 웅크림 16px 위, 서기 26px 아래. */
  shellHighFloorGap: 18,
  shellSpeed: 58,
  shellRangePx: 190,
  shellMergeFrames: 36,

  /** B 의 포물선 비행 시간. 캐른 묘비와 같은 식이다. */
  emberFlightSeconds(launchY: number, groundY: number): number {
    const drop = Math.max(1, groundY - launchY)
    const v = ASHMANT.emberLaunchVy
    return (-v + Math.sqrt(v ** 2 + 2 * ASHMANT.emberGravity * drop)) / ASHMANT.emberGravity
  },
} as const

export type AshmantState = 'idle' | 'jaw' | 'embers' | 'ash' | 'march' | 'shell' | 'dead'

/**
 * 공격 파츠 하나. C 는 제자리 기둥, D·E 는 움직이는 조각이다.
 * `armed` 가 false 인 동안은 예고만 하고 판정이 없다.
 */
export interface AshmantPart {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly vx: number
  /** 남은 수명(프레임). 0 이면 사라진다. */
  readonly life: number
  readonly armed: boolean
}

export interface Ashmant {
  readonly x: number
  readonly y: number
  readonly hp: number
  readonly phase: 1 | 2 | 3
  readonly state: AshmantState
  readonly stateFrames: number
  readonly facing: -1 | 1
  /** 지금 살아 있는 공격 파츠. 패턴이 끝나면 반드시 빈다. */
  readonly parts: readonly AshmantPart[]
  /** 선행 시작에 찍어 둔 목표. 표식이 플레이어를 따라가지 않게 하는 장치다. */
  readonly targetSnapshot: { readonly x: number; readonly y: number } | null
  /** 선행 시작에 고정한 방향. */
  readonly attackFacing: -1 | 1
  /** 가중치 순환의 위치. 난수가 아니다. */
  readonly cycleIndex: number
  /** E 의 몇 번째 조각까지 냈는가. */
  readonly pieceIndex: number
  /** E 에서 유해 조각이 없는 동안 센 프레임. 이것이 조각별 예고 시간이다. */
  readonly pieceWaitFrames: number
  readonly hitFlash: number
  readonly rng: RngState
  readonly awake: boolean
}

/** 페이즈별 순환표. C(ash)가 모든 페이즈에 있어 원거리 정지 공략을 막는다. */
const CYCLES: Readonly<Record<1 | 2 | 3, readonly AshmantState[]>> = {
  1: ['jaw', 'embers', 'ash'],
  2: ['jaw', 'embers', 'ash', 'march', 'ash'],
  3: ['jaw', 'embers', 'ash', 'march', 'ash', 'shell', 'ash'],
}

/** 이 페이즈의 순환에서 index 번째 패턴. */
export function nextPattern(phase: 1 | 2 | 3, cycleIndex: number): AshmantState {
  const cycle = CYCLES[phase]
  return cycle[((cycleIndex % cycle.length) + cycle.length) % cycle.length] ?? 'jaw'
}

/** 페이즈 전환 뒤 첫 패턴은 C 다 — 순환의 그 자리를 가리키는 인덱스. */
function cycleIndexOfAsh(phase: 1 | 2 | 3): number {
  return CYCLES[phase].indexOf('ash')
}

export function phaseForAshmant(hp: number): 1 | 2 | 3 {
  if (hp <= ASHMANT.phase3Hp) return 3
  if (hp <= ASHMANT.phase2Hp) return 2
  return 1
}

export function createAshmant(x: number, groundY: number, rng: RngState): Ashmant {
  return {
    x,
    y: groundY - ASHMANT.height,
    hp: ASHMANT.maxHp,
    phase: 1,
    state: 'idle',
    stateFrames: 0,
    facing: -1,
    parts: [],
    targetSnapshot: null,
    attackFacing: -1,
    cycleIndex: 0,
    pieceIndex: 0,
    pieceWaitFrames: 0,
    hitFlash: 0,
    rng,
    awake: false,
  }
}

export function awakenAshmant(boss: Ashmant): Ashmant {
  if (boss.awake) return boss
  return { ...boss, awake: true, state: 'idle', stateFrames: 0 }
}

export function bodyBoxOf(boss: Ashmant): Aabb {
  return { x: boss.x, y: boss.y, width: ASHMANT.width, height: ASHMANT.height }
}

export function coreBoxOf(boss: Ashmant): Aabb {
  return {
    x: boss.x + ASHMANT.core.x,
    y: boss.y + ASHMANT.core.y,
    width: ASHMANT.core.width,
    height: ASHMANT.core.height,
  }
}

/** E 에서 외피가 벌어지면 코어가 더 잘 보인다 — 판정은 그대로고 조명만 밝아진다. */
export function isCoreExposedOf(boss: Ashmant): boolean {
  return boss.state === 'shell'
}

/** 지금 플레이어를 때리는 상자들. A 는 상태에서, C·D·E 는 파츠에서 나온다. */
export function attackBoxesOf(boss: Ashmant): readonly Aabb[] {
  if (boss.state === 'dead' || !boss.awake) return []
  const boxes: Aabb[] = []

  const jaw = jawBoxOf(boss)
  if (jaw !== null) boxes.push(jaw)

  for (const part of boss.parts) {
    if (!part.armed) continue
    boxes.push({ x: part.x, y: part.y, width: part.width, height: part.height })
  }
  return boxes
}

function jawBoxOf(boss: Ashmant): Aabb | null {
  if (boss.state !== 'jaw') return null
  const spec = ASHMANT.patterns.jaw
  if (boss.stateFrames < spec.windupFrames) return null
  if (boss.stateFrames >= spec.windupFrames + spec.activeFrames) return null
  const x = boss.attackFacing === 1 ? boss.x + ASHMANT.width : boss.x - spec.reach
  return { x, y: boss.y + ASHMANT.height - spec.height, width: spec.reach, height: spec.height }
}

/** 예비 동작 중인가. E 는 조각과 조각 사이의 예고도 포함한다. */
export function isAshmantWindingUp(boss: Ashmant): boolean {
  if (boss.state === 'idle' || boss.state === 'dead') return false
  const spec = ASHMANT.patterns[boss.state]
  if (boss.stateFrames < spec.windupFrames) return true
  // E 는 조각마다 다시 예고한다 — 유해 조각이 없는 구간이 곧 예고다.
  if (boss.state === 'shell') return boss.parts.length === 0 && boss.pieceIndex < ASHMANT.shellPieces
  return false
}

export interface AshmantDamage {
  readonly boss: Ashmant
  readonly dealt: number
  readonly killed: boolean
}

export function damageAshmant(boss: Ashmant, amount: number, box: Aabb): AshmantDamage {
  if (boss.state === 'dead' || !boss.awake) return { boss, dealt: 0, killed: false }

  const hitCore = overlaps(box, coreBoxOf(boss))
  if (!hitCore && !overlaps(box, bodyBoxOf(boss))) return { boss, dealt: 0, killed: false }

  const dealt = Math.round(amount * (hitCore ? 1 : ASHMANT.weakPointMultiplier))
  const hp = Math.max(0, boss.hp - dealt)
  const killed = hp === 0
  const phase = phaseForAshmant(hp)

  return {
    // 페이즈가 올라가면 **다음** 선택을 C 로 되돌린다. 예고 중인 공격은 그대로 둔다.
    boss: {
      ...boss,
      hp,
      hitFlash: 2,
      phase,
      state: killed ? 'dead' : boss.state,
      parts: killed ? [] : boss.parts,
      cycleIndex: phase !== boss.phase ? cycleIndexOfAsh(phase) : boss.cycleIndex,
    },
    dealt,
    killed,
  }
}

export interface AshmantStep {
  readonly boss: Ashmant
  readonly emission: BossEmission
}

const NOTHING: BossEmission = Object.freeze({ gravestones: [], rocks: [], ghouls: [], quake: false })

export interface AshmantContext {
  readonly target: { readonly x: number; readonly y: number }
  readonly groundY: number
  /** 위험물 목록에 남은 자리. B 는 이만큼이 없으면 시작하지도, 방출하지도 않는다. */
  readonly hazardRoom: number
  /** 애쉬맨트가 지금 내보내 둔 불씨 수. 0 이 될 때까지 B 가 끝나지 않는다. */
  readonly ownedHazards: number
}

export function stepAshmant(boss: Ashmant, ctx: AshmantContext, dt: number): AshmantStep {
  if (!boss.awake || boss.state === 'dead') {
    return { boss: { ...boss, hitFlash: Math.max(0, boss.hitFlash - 1) }, emission: NOTHING }
  }

  // 몸은 늘 플레이어를 본다. 공격 방향은 `attackFacing` 이 따로 기억한다.
  const facing: -1 | 1 = ctx.target.x < boss.x + ASHMANT.width / 2 ? -1 : 1
  const stepped: Ashmant = { ...boss, facing, hitFlash: Math.max(0, boss.hitFlash - 1) }
  // 패턴의 **첫 틱**에 목표와 방향을 찍는다. 대기를 거쳐 왔든 아니든 규칙은 하나다 —
  // 여기서 찍어 두지 않으면 표식이 매 틱 플레이어를 따라가 예고가 아니게 된다.
  const started: Ashmant = stepped.state !== 'idle' && stepped.stateFrames === 0
    ? snapshot(stepped, ctx)
    : stepped
  // 불씨를 둘 자리가 없으면 **예고도 하지 않는다.** 상한에서 조용히 버려지면
  // 예비 동작만 하고 아무 일도 일어나지 않는 패턴이 된다 — 캐른에서 실제로 있었던 결함이다.
  const base: Ashmant = started.state === 'embers' && started.stateFrames === 0
    && ctx.hazardRoom < ASHMANT.patterns.embers.count
    ? { ...started, state: 'ash', cycleIndex: started.cycleIndex + 1 }
    : started

  switch (base.state) {
    case 'idle': return stepIdle(base)
    case 'jaw': return stepJaw(base)
    case 'embers': return stepEmbers(base, ctx)
    case 'ash': return stepAsh(base, ctx)
    case 'march': return stepMarch(base, ctx, dt)
    case 'shell': return stepShell(base, ctx, dt)
    default: return { boss: base, emission: NOTHING }
  }
}

/**
 * 겨냥 지점. **스냅샷만 본다** — `ctx.target` 으로 폴백하면 그것이 곧 문서가 금지한
 * "매 틱 목표"다. 스냅샷은 패턴 첫 틱에 반드시 찍히므로 여기서 없을 수 없다.
 */
function aimOf(boss: Ashmant): { readonly x: number; readonly y: number } {
  if (boss.targetSnapshot === null) throw new Error('선행 시작에 목표를 찍지 않았다')
  return boss.targetSnapshot
}

/** 선행이 시작되는 틱에 목표와 방향을 찍는다. 이후 표식은 움직이지 않는다. */
function snapshot(boss: Ashmant, ctx: AshmantContext): Ashmant {
  return {
    ...boss,
    targetSnapshot: { x: ctx.target.x, y: ctx.target.y },
    attackFacing: ctx.target.x < boss.x + ASHMANT.width / 2 ? -1 : 1,
  }
}

function stepIdle(boss: Ashmant): AshmantStep {
  const frames = boss.stateFrames + 1
  if (frames < ASHMANT.idleFrames) {
    return { boss: { ...boss, stateFrames: frames, parts: [] }, emission: NOTHING }
  }
  const next = nextPattern(boss.phase, boss.cycleIndex)
  // 스냅샷은 찍지 않는다 — 다음 틱에 `stepAshmant` 의 첫-틱 스냅샷이 한 곳에서 찍는다.
  return {
    boss: { ...boss, state: next, stateFrames: 0, parts: [], pieceIndex: 0, pieceWaitFrames: 0, cycleIndex: boss.cycleIndex + 1 },
    emission: NOTHING,
  }
}

/** 상태를 끝내고 대기로. 파츠는 여기서 반드시 비운다 — 다음 패턴과 겹치지 않게. */
function toIdle(boss: Ashmant): Ashmant {
  return { ...boss, state: 'idle', stateFrames: 0, parts: [], pieceIndex: 0, pieceWaitFrames: 0 }
}

function stepJaw(boss: Ashmant): AshmantStep {
  const spec = ASHMANT.patterns.jaw
  const frames = boss.stateFrames + 1
  if (frames >= spec.windupFrames + spec.activeFrames + spec.recoverFrames) {
    return { boss: toIdle(boss), emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames }, emission: NOTHING }
}

/**
 * B 불씨 운반 — 포물선 2개.
 *
 * 착지점이 **고정 128px** 로 갈라진다. 비율로 갈라면 가까울수록 틈이 좁아져
 * 정작 위험한 근거리에서 회피 경로가 사라진다 (캐른 묘비에서 실측한 교훈).
 * 겨냥은 스냅샷 기준이라, 선행을 보고 달아나도 착지점은 따라오지 않는다.
 */
function stepEmbers(boss: Ashmant, ctx: AshmantContext): AshmantStep {
  const spec = ASHMANT.patterns.embers
  const frames = boss.stateFrames + 1

  if (frames === spec.windupFrames) {
    // 방출 직전에 자리를 **다시** 본다. 예고 48f 사이에 잡몹의 불덩이가 목록을 채웠을 수 있고,
    // 그러면 `spawnHazard` 가 조용히 버려 예비 동작만 남는다. 자리가 없으면 이번 방출을 접는다.
    if (ctx.hazardRoom < spec.count) {
      return { boss: toIdle(boss), emission: NOTHING }
    }
    const originX = boss.x + ASHMANT.width / 2
    const originY = boss.y + 12
    const flight = ASHMANT.emberFlightSeconds(originY, ctx.groundY)
    const aim = aimOf(boss)
    const dx = Math.max(-ASHMANT.aimMaxPx, Math.min(ASHMANT.aimMaxPx, aim.x - originX))
    const half = ASHMANT.emberGapPx / 2

    const gravestones = Array.from({ length: spec.count }, (_, i) => ({
      x: originX,
      y: originY,
      vx: (dx + (i === 0 ? -half : half)) / flight,
      vy: ASHMANT.emberLaunchVy,
    }))
    return { boss: { ...boss, stateFrames: frames }, emission: { ...NOTHING, gravestones } }
  }

  // 회복이 끝나도 **불씨가 남아 있으면 끝내지 않는다.** 타이머만 보고 다음 패턴을 시작하면
  // 날아가던 포물선 위로 새 판정이 겹친다 — docs/13 §공통 설계 계약이 금지한 바로 그것이다.
  if (frames >= spec.windupFrames + spec.recoverFrames && ctx.ownedHazards === 0) {
    return { boss: toIdle(boss), emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames }, emission: NOTHING }
}

/**
 * C 잿더미 분출 — 바닥 기둥 3개.
 *
 * 캐른의 지진과 같은 자리(중심 ±80)를 맡지만 **낙석이 아니라 바닥에서 솟는다.**
 * 낙석을 방출하는 것만으로는 분출이 되지 않는다 — 그래서 파츠로 낸다.
 * 기둥 사이 80px 가 확정 회피 경로다.
 */
function stepAsh(boss: Ashmant, ctx: AshmantContext): AshmantStep {
  const spec = ASHMANT.patterns.ash
  const frames = boss.stateFrames + 1

  if (frames === spec.windupFrames) {
    const aim = aimOf(boss)
    const half = ASHMANT.ashSpreadPx / 2
    const { width, height } = ASHMANT.ashPillar
    const parts = [-half, 0, half].map((offset) => ({
      x: aim.x + offset - width / 2,
      y: ctx.groundY - height,
      width,
      height,
      vx: 0,
      life: spec.activeFrames,
      armed: true,
    }))
    return { boss: { ...boss, stateFrames: frames, parts }, emission: NOTHING }
  }

  if (frames >= spec.windupFrames + spec.activeFrames + spec.recoverFrames) {
    return { boss: toIdle(boss), emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames, parts: ageParts(boss.parts) }, emission: NOTHING }
}

/** D 불씨 행군 — 지상 직진 하나. 반전도 추적도 없다. 읽고 한 번 뛰면 끝난다. */
function stepMarch(boss: Ashmant, ctx: AshmantContext, dt: number): AshmantStep {
  const spec = ASHMANT.patterns.march
  const frames = boss.stateFrames + 1
  const size = ASHMANT.marchBox

  if (frames === spec.windupFrames) {
    const dir = boss.attackFacing
    const startX = dir === 1 ? boss.x + ASHMANT.width : boss.x - size
    const life = Math.ceil((ASHMANT.marchRangePx / ASHMANT.marchSpeed) * 60)
    const part = {
      x: startX, y: ctx.groundY - size, width: size, height: size,
      vx: dir * ASHMANT.marchSpeed, life, armed: true,
    }
    return { boss: { ...boss, stateFrames: frames, parts: [part] }, emission: NOTHING }
  }

  const parts = moveParts(boss.parts, dt)
  if (frames > spec.windupFrames && parts.length === 0) {
    // 조각이 사라진 뒤에야 회복을 센다 — 남은 조각 위로 다음 패턴이 겹치지 않게.
    const waited = boss.pieceWaitFrames + 1
    return waited >= spec.recoverFrames
      ? { boss: toIdle(boss), emission: NOTHING }
      : { boss: { ...boss, stateFrames: frames, parts, pieceWaitFrames: waited }, emission: NOTHING }
  }
  return { boss: { ...boss, stateFrames: frames, parts, pieceWaitFrames: 0 }, emission: NOTHING }
}

/**
 * E 외피 탈락 — 조각 4개가 **하나씩** 날아간다.
 *
 * 순서는 낮음 → 높음 → 낮음 → 높음. 낮은 조각은 뛰어 넘고, 높은 조각은 웅크려 지난다.
 * 높은 조각은 그림이 14px 여도 **판정은 8px** 로 깎아, 웅크린 12×16 이 확실히 빠져나간다.
 * 앞 조각이 사라진 뒤에 다음 예고가 시작된다 — 유해 판정은 언제나 하나뿐이다.
 */
function stepShell(boss: Ashmant, ctx: AshmantContext, dt: number): AshmantStep {
  const spec = ASHMANT.patterns.shell
  const frames = boss.stateFrames + 1
  const parts = moveParts(boss.parts, dt)

  // 유해 조각이 날아가는 동안은 기다린다 — 동시에 둘을 내지 않는다.
  if (parts.length > 0) {
    return { boss: { ...boss, stateFrames: frames, parts, pieceWaitFrames: 0 }, emission: NOTHING }
  }

  const waited = boss.pieceWaitFrames + 1

  // 네 조각을 다 냈으면 재결합하고 대기로.
  if (boss.pieceIndex >= ASHMANT.shellPieces) {
    return waited >= ASHMANT.shellMergeFrames
      ? { boss: toIdle(boss), emission: NOTHING }
      : { boss: { ...boss, stateFrames: frames, parts, pieceWaitFrames: waited }, emission: NOTHING }
  }

  // 조각마다 다시 48f 를 예고한다. 첫 조각도 같은 규칙이다.
  if (waited < spec.windupFrames) {
    // **예고가 시작되는 틱에 방향을 다시 찍는다.** 조각마다 선행이 있는 패턴이므로
    // (docs/13 §S2 E: "각 조각 48f"), 방향도 조각마다 고정하는 것이 "선행 시작에 고정" 이다.
    // 패턴 단위로만 찍으면 첫 조각을 본 뒤 보스 뒤로 걸어가는 것으로 남은 12초가 공짜가 된다.
    const aimed = waited === 1 ? snapshot(boss, ctx) : boss
    return { boss: { ...aimed, stateFrames: frames, parts, pieceWaitFrames: waited }, emission: NOTHING }
  }

  const high = boss.pieceIndex % 2 === 1
  const size = ASHMANT.shellBox
  const dir = boss.attackFacing
  const hitHeight = high ? ASHMANT.shellHighHitHeight : size
  // 낮은 조각은 바닥에 붙어 온다(뛰어 넘는다). 높은 조각은 웅크림 16px 위를 지난다.
  const y = high ? ctx.groundY - ASHMANT.shellHighFloorGap - hitHeight : ctx.groundY - size
  const life = Math.ceil((ASHMANT.shellRangePx / ASHMANT.shellSpeed) * 60)
  const part = {
    x: dir === 1 ? boss.x + ASHMANT.width : boss.x - size,
    y,
    width: size,
    height: hitHeight,
    vx: dir * ASHMANT.shellSpeed,
    life,
    armed: true,
  }
  return {
    boss: { ...boss, stateFrames: frames, parts: [part], pieceIndex: boss.pieceIndex + 1, pieceWaitFrames: 0 },
    emission: NOTHING,
  }
}

function ageParts(parts: readonly AshmantPart[]): readonly AshmantPart[] {
  return parts.map((p) => ({ ...p, life: p.life - 1 })).filter((p) => p.life > 0)
}

function moveParts(parts: readonly AshmantPart[], dt: number): readonly AshmantPart[] {
  return parts
    .map((p) => ({ ...p, x: p.x + p.vx * dt, life: p.life - 1 }))
    .filter((p) => p.life > 0)
}
