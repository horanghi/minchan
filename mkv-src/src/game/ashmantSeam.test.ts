import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_2 } from '../data/stages/stage2.ts'
import { ASHMANT } from '../entities/bosses/ashmant.ts'
import { MAX_HAZARDS, spawnHazard } from '../entities/bosses/hazard.ts'
import { opsOf } from '../entities/bosses/registry.ts'
import { asAshmantBoss, type AshmantBoss } from '../entities/bosses/slot.ts'
import { hashState } from './replay.ts'
import { createWorld, stepWorld, type World, type WorldEvents } from './world.ts'

/**
 * 애쉬맨트와 월드 사이의 **이음매** (AF-4).
 *
 * 패턴과 판정은 `ashmant.test.ts` 가, 안전지대는 `ashmantRange.test.ts` 가 지킨다.
 * 여기서 보는 것은 그것들이 **실제 S2 월드에 배선됐는가**다 — 정확한 판정을 만들어 놓고
 * 월드에 연결하지 않으면 아무 일도 일어나지 않는다 (AT-2·AF-2·AF-3 에서 반복된 결함).
 */

const balance = loadBalance()
const SIZE = 16

function s2(): { world: World; groundY: number } {
  const world = createWorld(STAGE_2, balance)
  return { world, groundY: (world.map.height - 1) * SIZE }
}

function run(
  start: World,
  ticks: number,
  keys: (tick: number) => readonly Action[] = () => [],
): { world: World; events: readonly WorldEvents[] } {
  let world = start
  let input: InputState = INITIAL_INPUT
  const events: WorldEvents[] = []
  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf(...keys(i)))
    const step = stepWorld(world, input, balance)
    world = step.world
    input = step.input
    events.push(step.events)
  }
  return { world, events }
}

/** 보스를 깨우고 그 앞에 플레이어를 세운 월드. 잡몹은 치운다. */
function arena(patch: Partial<AshmantBoss> = {}, gapPx = 120): World {
  const { world, groundY } = s2()
  const boss = asAshmantBoss(world.boss)
  const playerX = boss.x - gapPx
  return {
    ...world,
    enemies: [],
    player: { ...world.player, body: { ...world.player.body, x: playerX, y: groundY - 26, vx: 0, vy: 0 } },
    vitals: { ...world.vitals, armor: 'steel' },
    // 패턴 중간으로 뛰어드는 경우를 위해 **스냅샷을 미리 찍어 둔다** — 실제 흐름에서는
    // 패턴 첫 틱에 찍히지만 여기서는 그 틱을 건너뛴다.
    boss: {
      ...boss, awake: true,
      targetSnapshot: { x: playerX, y: groundY - 13 },
      attackFacing: -1,
      ...patch,
    },
  }
}

describe('S2 배선', () => {
  it('스테이지 2 의 보스는 애쉬맨트다 — 데이터가 종류를 말한다', () => {
    const { world } = s2()
    expect(STAGE_2.bossKind).toBe('ashmant')
    expect(world.boss.kind).toBe('ashmant')
    expect(world.boss.hp).toBe(ASHMANT.maxHp)
    expect(opsOf('ashmant').maxHp).toBe(360)
  })

  it('bosses.json 의 S2 행이 구현과 같다 — 표와 코드가 갈라지지 않게', () => {
    const row = balance.bosses.find((b) => b.id === 'ashmant')
    expect(row).toBeDefined()
    expect(row?.hp).toBe(ASHMANT.maxHp)
    expect(row?.stage).toBe('S2')
  })

  it('보스룸 게이트를 넘으면 깨어난다', () => {
    const { world, groundY } = s2()
    const boss = asAshmantBoss(world.boss)
    expect(boss.awake).toBe(false)
    const atGate: World = {
      ...world,
      player: { ...world.player, body: { ...world.player.body, x: STAGE_2.bossGateX + 8, y: groundY - 26 } },
    }
    expect(run(atGate, 2).world.boss.awake).toBe(true)
  })

  it('투사체 피해가 슬롯을 통해 들어간다', () => {
    const r = run(arena({ state: 'idle', stateFrames: 0 }, 40), 60 * 4, (t) => (t % 6 < 3 ? ['attack'] : []))
    expect(r.world.boss.hp).toBeLessThan(ASHMANT.maxHp)
  })

  it('몸통에 닿은 사인은 애쉬맨트다 — 캐른으로 새지 않는다', () => {
    const r = run(arena({ state: 'idle', stateFrames: 0 }, 10), 60 * 2)
    const cause = r.events.find((e) => e.hurt || e.died)?.cause
    expect(cause).toBe('ashmant')
  })

  it('C 기둥에 맞은 사인도 애쉬맨트다 — 파츠가 실제로 때린다', () => {
    const r = run(arena({ state: 'ash', stateFrames: 0 }, 150), 60 * 3)
    const hit = r.events.find((e) => e.hurt || e.died)
    expect(hit?.cause).toBe('ashmant')
  })

  it('B 불씨(위험물)에 맞은 사인도 애쉬맨트다 — 보스가 던진 것은 보스로 센다', () => {
    // 착지점은 겨냥 지점 ±64 다. 한쪽 착지점이 플레이어 자리에 오도록 스냅샷을 잡아 둔다
    // (stateFrames 를 1 로 두어 첫 틱 스냅샷이 덮어쓰지 않게 한다).
    const { world, groundY } = s2()
    const boss = asAshmantBoss(world.boss)
    const playerX = boss.x - 120
    const playerCenter = playerX + world.player.body.width / 2
    const w0: World = {
      ...world,
      enemies: [],
      player: { ...world.player, body: { ...world.player.body, x: playerX, y: groundY - 26, vx: 0, vy: 0 } },
      vitals: { ...world.vitals, armor: 'steel', iFrames: 0 },
      boss: {
        ...boss, awake: true, state: 'embers', stateFrames: 1,
        targetSnapshot: { x: playerCenter + ASHMANT.emberGapPx / 2, y: groundY - 13 },
        attackFacing: -1,
      },
    }
    const r = run(w0, 60 * 5)
    const hit = r.events.find((e) => e.hurt || e.died)
    expect(hit?.cause).toBe('ashmant')
  })

  it('잡몹을 소환하지 않는다 — 보스룸 동시 적 수가 늘지 않는다', () => {
    const r = run(arena({ state: 'idle', stateFrames: 0, phase: 3, hp: ASHMANT.phase3Hp }), 60 * 30)
    expect(r.world.enemies.length).toBe(0)
  })

  it('S2 보스룸 동시 적 수는 5 이하다 — 보스 포함', () => {
    const { world } = s2()
    const inBossRoom = world.enemies.filter((e) => e.body.x >= STAGE_2.bossGateX - 16 * 8)
    expect(inBossRoom.length + 1).toBeLessThanOrEqual(5)
  })

  it('위험물이 가득 차면 B 는 시작하지 않는다 — 예고만 하고 사라지지 않게', () => {
    let base = arena({ state: 'idle', stateFrames: ASHMANT.idleFrames - 1, cycleIndex: 1 })
    // 목록을 상한까지 채운다.
    let hazards = base.hazards
    for (let i = 0; i < MAX_HAZARDS; i += 1) {
      hazards = spawnHazard(hazards, 'poison', { x: 10 + i, y: 10 })
    }
    base = { ...base, hazards }
    expect(base.hazards.hazards.length).toBe(MAX_HAZARDS)
    const after = asAshmantBoss(run(base, 2).world.boss)
    // B(embers) 대신 C(ash) 로 넘어간다.
    expect(after.state).not.toBe('embers')
    expect(after.state).toBe('ash')
  })

  it('죽으면 판정이 즉시 사라지고 다시 때리지 않는다', () => {
    const dying = arena({ state: 'ash', stateFrames: ASHMANT.patterns.ash.windupFrames, hp: 1 }, 150)
    const r = run(dying, 60 * 3, (t) => (t % 6 < 3 ? ['attack'] : []))
    // 죽는 것 자체를 먼저 단정한다 — 안 죽으면 아래 검사가 조용히 무의미해진다.
    expect(opsOf('ashmant').isDead(r.world.boss)).toBe(true)
    expect(opsOf('ashmant').hitBoxes(r.world.boss)).toEqual([])
  })

  it('죽으면 날아가던 불씨도 함께 멎는다 — 시체가 대신 때리지 않는다', () => {
    // 불씨를 내보낸 직후 상태로 시작해, 비행 중에 보스를 잡는다.
    const flying = arena({ state: 'embers', stateFrames: ASHMANT.patterns.embers.windupFrames - 1, hp: 1 }, 150)
    const r = run(flying, 60 * 2, (t) => (t % 6 < 3 ? ['attack'] : []))
    expect(opsOf('ashmant').isDead(r.world.boss)).toBe(true)
    expect(r.world.hazards.hazards.filter((h) => h.kind === 'gravestone')).toEqual([])
  })
})

/**
 * S2 골든 해시 — 보스룸까지 가지 않는 300틱 구간을 숫자 하나로 고정한다.
 * S1 골든(`worldGolden.test.ts`)과 같은 목적이다. 의도한 변경이면 값을 갱신하고 이유를 커밋에 적는다.
 */
describe('스테이지 2 · 300틱 골든', () => {
  it('플레이어·보스·적·위험물의 해시가 고정값과 같다', () => {
    const { world } = s2()
    const r = run(world, 300, (i) => [
      ...(i % 40 < 30 ? ['right' as const] : ['right' as const, 'jump' as const]),
      ...(i % 6 < 3 ? ['attack' as const] : []),
    ])
    const snapshot = {
      player: r.world.player, boss: r.world.boss, enemies: r.world.enemies,
      hazards: r.world.hazards, vitals: r.world.vitals, elapsedTicks: r.world.elapsedTicks,
    }
    expect(hashState(snapshot)).toBe(1488895573)
  })
})
