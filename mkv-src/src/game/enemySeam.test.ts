import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { parseTilemap } from '../physics/tilemap.ts'
import { RINGER } from '../entities/enemies/ringer.ts'
import type { EnemySpawn, Stage } from './stage.ts'
import { createWorld, stepWorld, type World } from './world.ts'

/**
 * 월드와 잡몹 사이의 **이음매** 검사 (AT-2).
 *
 * 잡몹 모듈 하나하나는 자기 테스트가 지킨다. 여기서 보는 것은 그 모듈들이
 * 월드에 제대로 **배선됐는가**다 — 판정을 정확하게 만들어 놓고 월드에 연결하지
 * 않으면, 적은 아무 일도 하지 않거나 엉뚱한 이름으로 집계된다.
 *
 * 실제로 캐른의 묘비·낙석이 그렇게 방출만 되고 월드가 받지 않은 적이 있고
 * (docs/05 5.4), 불덩이·독 구름이 전부 보스 사망으로 집계된 적도 있다.
 */

const balance = loadBalance()

const FLAT = parseTilemap([
  '..............................',
  '..............................',
  '..............................',
  '..............................',
  '..............................',
  '##############################',
])

function arena(enemies: readonly EnemySpawn[], spawnTx = 3): Stage {
  return {
    id: 's1',
    name: '이음매 시험장',
    map: FLAT,
    spawn: { tx: spawnTx, ty: 4 },
    checkpoints: [],
    chests: [],
    sections: [0],
    // 보스가 깨지 않도록 멀리 둔다. 여기서 보는 것은 잡몹뿐이다.
    bossGateX: 100_000,
    enemies,
  }
}

/** 공격을 반복하는 입력. 눌렀다 떼야 다음 발이 나간다. */
function attacking(tick: number): readonly Action[] {
  return tick % 6 < 3 ? ['attack'] : []
}

/** 가만히 서 있는 입력. 맞는 것을 보려면 때리지 말아야 한다. */
function idle(): readonly Action[] {
  return []
}

interface Trace {
  readonly world: World
  /** 처음 관측된 사인 (없으면 null) */
  readonly cause: string | null
  /** 관측된 모든 사인 */
  readonly causes: ReadonlySet<string>
  /** 어느 한 틱에라도 존재한 위험물 종류 */
  readonly seenHazards: ReadonlySet<string>
}

/**
 * 여러 틱을 돌리며 **지나간 것까지** 모은다.
 *
 * 마지막 틱의 스냅샷만 보면 안 된다 — 불덩이는 0.5초면 날아가 사라지고
 * 독 구름도 3초면 걷힌다. 한 시점만 보는 검사는 배선이 끊겨도 통과한다.
 */
function trace(stage: Stage, ticks: number, keys: (tick: number) => readonly Action[]): Trace {
  let world = createWorld(stage, balance)
  let input: InputState = INITIAL_INPUT
  let cause: string | null = null
  const causes = new Set<string>()
  const seenHazards = new Set<string>()

  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf(...keys(i)))
    const step = stepWorld(world, input, balance)
    world = step.world
    input = step.input
    for (const hazard of world.hazards.hazards) seenHazards.add(hazard.kind)
    if (step.events.hurt || step.events.died) {
      if (step.events.cause !== null) causes.add(step.events.cause)
      if (cause === null) cause = step.events.cause
    }
  }
  return { world, cause, causes, seenHazards }
}

describe('사인 귀속 — 날아온 것은 던진 쪽으로 센다', () => {
  it('화염귀의 불덩이에 맞으면 화염귀로 기록된다 — 보스가 아니다', () => {
    // 이게 깨지면 보스도 없는 S2 한복판의 죽음이 전부 "캐른에게 죽음"이 된다.
    // 반격하지 않는다 — 때려 죽이면 불덩이가 날아오지 않는다.
    const t = trace(arena([{ kind: 'ember', tx: 8, ty: 4, state: 'idle' }]), 60 * 5, idle)
    expect(t.seenHazards.has('fireball')).toBe(true)
    expect(t.cause).toBe('ember')
  })

  it('포자충이 있는 곳의 죽음은 전부 포자충으로 기록된다', () => {
    // 붙어서 잡으면 구름이 그 자리에 앉는다. 접촉이든 독이든 사인은 **포자충**이다.
    const t = trace(arena([{ kind: 'spore', tx: 4, ty: 4, state: 'walk', facing: -1 }]), 60 * 8, attacking)
    expect(t.seenHazards.has('poison')).toBe(true)
    expect(t.causes.has('spore')).toBe(true)
  })

  it('보스가 없는 곳에서는 어떤 죽음도 캐른으로 기록되지 않는다', () => {
    // C1 의 본질. 위험물 목록을 보스와 잡몹이 공유하므로, 목록에 있다는 이유만으로
    // 보스로 세면 사인 통계가 통째로 거짓이 된다.
    const stages = [
      arena([{ kind: 'ember', tx: 8, ty: 4, state: 'idle' }]),
      arena([{ kind: 'spore', tx: 4, ty: 4, state: 'walk', facing: -1 }]),
    ]
    for (const stage of stages) {
      const t = trace(stage, 60 * 8, attacking)
      expect([stage.enemies[0]?.kind, t.causes.has('cairn')]).toEqual([stage.enemies[0]?.kind, false])
    }
  })
})

describe('배출 배선 — 만든 판정이 월드에 도달하는가', () => {
  it('화염귀가 예고를 마치면 불덩이가 실제로 월드에 생긴다', () => {
    const t = trace(arena([{ kind: 'ember', tx: 9, ty: 4, state: 'idle' }]), 60 * 3, idle)
    expect(t.seenHazards.has('fireball')).toBe(true)
  })

  it('포자충을 잡으면 그 자리에 독 구름이 남는다 — 처치가 곧 지형 변화다', () => {
    const t = trace(arena([{ kind: 'spore', tx: 6, ty: 4, state: 'walk', facing: -1 }]), 60 * 4, attacking)
    expect(t.seenHazards.has('poison')).toBe(true)
  })

  it('독 구름은 스스로 걷힌다 — 안 그러면 늪이 영구 통행 금지가 된다', () => {
    const t = trace(arena([{ kind: 'spore', tx: 6, ty: 4, state: 'walk', facing: -1 }]), 60 * 12, attacking)
    expect(t.seenHazards.has('poison')).toBe(true)
    expect(t.world.hazards.hazards.some((h) => h.kind === 'poison')).toBe(false)
  })
})

describe('무적과 무해', () => {
  it('잠복한 늪지기는 때릴 수도, 맞을 수도 없다', () => {
    // 반경(96px) 밖에 두어 잠복을 유지시킨다.
    const t = trace(arena([{ kind: 'bogman', tx: 16, ty: 4, state: 'submerged' }]), 120, attacking)
    const bog = t.world.enemies[0]
    expect(bog?.state).toBe('submerged')
    expect(bog?.hp).toBe(40)
    expect(t.cause).toBeNull()
  })

  it('유령 상태의 번개령은 붙어 있어도 플레이어를 때리지 않는다', () => {
    const t = trace(arena([{ kind: 'wisp', tx: 4, ty: 4, state: 'ghost' }]), 100, idle)
    expect(t.cause).toBeNull()
  })
})

describe('종지기의 종', () => {
  /** 좀비가 이 틱 동안 실제로 움직인 거리. 방향은 보지 않는다. */
  function ghoulTravel(withRinger: boolean, ticks: number): number {
    const spawns: EnemySpawn[] = [{ kind: 'ghoul', tx: 12, ty: 4, facing: -1 }]
    if (withRinger) spawns.push({ kind: 'ringer', tx: 13, ty: 4, state: 'idle' })

    let world = createWorld(arena(spawns, 2), balance)
    const startX = world.enemies[0]?.body.x ?? 0
    for (let i = 0; i < ticks; i += 1) world = stepWorld(world, INITIAL_INPUT, balance).world
    return Math.abs((world.enemies[0]?.body.x ?? 0) - startX)
  }

  // 종은 침묵(90) → 예고(18) → 울림(30) 순으로 온다. 울림 구간까지 돌린다.
  const TICKS = RINGER.idleFrames + RINGER.windupFrames + RINGER.ringFrames

  it('종이 울리는 동안 사정권의 적이 더 멀리 움직인다', () => {
    expect(ghoulTravel(true, TICKS)).toBeGreaterThan(ghoulTravel(false, TICKS))
  })

  it('종이 울리기 전에는 아무 차이도 없다 — 강화는 상시 상태가 아니다', () => {
    const before = RINGER.idleFrames - 1
    expect(ghoulTravel(true, before)).toBeCloseTo(ghoulTravel(false, before), 5)
  })

  it('종지기 자신은 강화되지 않는다 — 자기 종에 자기가 빨라지지 않는다', () => {
    const t = trace(arena([{ kind: 'ringer', tx: 12, ty: 4, state: 'idle' }]), TICKS, idle)
    const ringer = t.world.enemies[0]
    const drift = Math.abs((ringer?.body.x ?? 0) - (ringer?.home.x ?? 0))
    expect(drift).toBeLessThanOrEqual(RINGER.roamRange)
  })
})
