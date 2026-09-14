import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_3 } from '../data/stages/stage3.ts'
import { MAX_HAZARDS, spawnHazard } from '../entities/bosses/hazard.ts'
import { opsOf } from '../entities/bosses/registry.ts'
import { SILVAIN } from '../entities/bosses/silvain.ts'
import { asSilvainBoss, type SilvainBoss } from '../entities/bosses/slot.ts'
import { hashState } from './replay.ts'
import { createWorld, stepWorld, type World, type WorldEvents } from './world.ts'

/**
 * 실베인과 월드 사이의 **이음매** (AF-5).
 *
 * 패턴은 `silvain.test.ts` 가, 안전지대는 `silvainRange.test.ts` 가 지킨다.
 * 여기서 보는 것은 그것들이 **실제 S3 월드에 배선됐는가**다 — 특히 C 고드름은 위험물
 * 경로를 타므로, 실제로 떨어져서 때리는지(천장에 막히지 않는지)를 여기서 확인한다.
 */

const balance = loadBalance()
const SIZE = 16

function s3(): { world: World; groundY: number } {
  const world = createWorld(STAGE_3, balance)
  return { world, groundY: (world.map.height - 1) * SIZE }
}

function run(
  start: World,
  ticks: number,
  keys: (tick: number) => readonly Action[] = () => [],
  /** 매 틱의 월드를 본다. 최종 상태만으로는 "떨어지던 중" 을 증명할 수 없어서 필요하다. */
  observe: (world: World, tick: number) => void = () => {},
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
    observe(world, i)
  }
  return { world, events }
}

function rocksOf(world: World): readonly { readonly y: number }[] {
  return world.hazards.hazards.filter((h) => h.kind === 'rock')
}

/** 보스를 깨우고 그 앞에 플레이어를 세운 월드. 잡몹은 치운다. */
function arena(patch: Partial<SilvainBoss> = {}, gapPx = 120): World {
  const { world, groundY } = s3()
  const boss = asSilvainBoss(world.boss)
  const playerX = boss.x - gapPx
  return {
    ...world,
    enemies: [],
    player: { ...world.player, body: { ...world.player.body, x: playerX, y: groundY - 26, vx: 0, vy: 0 } },
    vitals: { ...world.vitals, armor: 'steel' },
    // 패턴 중간으로 뛰어드는 경우를 위해 스냅샷을 미리 찍어 둔다.
    boss: {
      ...boss, awake: true,
      targetSnapshot: { x: playerX, y: groundY - 13 },
      attackFacing: -1,
      ...patch,
    },
  }
}

function firstCause(events: readonly WorldEvents[]): string | null {
  const hit = events.find((e) => e.hurt || e.died)
  return hit?.cause ?? null
}

describe('S3 배선', () => {
  it('스테이지 3 의 보스는 실베인이다 — 데이터가 종류를 말한다', () => {
    const { world } = s3()
    expect(STAGE_3.bossKind).toBe('silvain')
    expect(world.boss.kind).toBe('silvain')
    expect(world.boss.hp).toBe(SILVAIN.maxHp)
    expect(opsOf('silvain').maxHp).toBe(340)
  })

  it('bosses.json 의 S3 행이 구현과 같다 — 표와 코드가 갈라지지 않게', () => {
    const row = balance.bosses.find((b) => b.id === 'silvain')
    expect(row).toBeDefined()
    expect(row?.hp).toBe(SILVAIN.maxHp)
    expect(row?.stage).toBe('S3')
    // 대체된 비르나 행은 남아 있지 않다.
    expect(balance.bosses.find((b) => b.id === 'byrna')).toBeUndefined()
  })

  it('게이트를 넘으면 깨어난다', () => {
    const { world } = s3()
    expect(world.boss.awake).toBe(false)
    const gate = world.stage.bossGateX
    const walked = run({
      ...world,
      player: { ...world.player, body: { ...world.player.body, x: gate - 20 } },
    }, 120, () => ['right'])
    expect(walked.world.boss.awake).toBe(true)
  })

  it('A 근접에 맞은 사인은 실베인이다', () => {
    const spec = SILVAIN.patterns.stomp
    const w = arena({ state: 'stomp', stateFrames: spec.windupFrames - 1 }, 30)
    const r = run(w, spec.activeFrames + 10)
    expect(firstCause(r.events)).toBe('silvain')
  })

  it('C 고드름이 실제로 떨어져 때린다 — 천장에 막히지 않는다', () => {
    // 보스룸 천장이 낮으면 낙하 시작점(바닥−200)이 벽 속이 되어 아무 일도 일어나지 않는다.
    // docs/13 §S3 가 명시적으로 요구한 검사다.
    const spec = SILVAIN.patterns.icicle
    const w = arena({ state: 'icicle', stateFrames: spec.windupFrames - 1 }, 120)
    const groundY = (w.map.height - 1) * SIZE
    let spawnY = Number.POSITIVE_INFINITY
    let deepestY = Number.NEGATIVE_INFINITY
    const r = run(w, 60 * 4, () => [], (world) => {
      for (const rock of rocksOf(world)) {
        spawnY = Math.min(spawnY, rock.y)
        deepestY = Math.max(deepestY, rock.y)
      }
    })
    // 고드름이 생겼는가 — 천장에 막혀 생성 자체가 없으면 아래 낙하 검사가 공허 통과한다.
    expect(Number.isFinite(spawnY)).toBe(true)
    // 생긴 자리에 머무르지 않고 플레이어가 서 있는 높이까지 실제로 내려왔는가.
    expect(deepestY).toBeGreaterThan(spawnY + 40)
    expect(deepestY).toBeGreaterThanOrEqual(groundY - 26)
    expect(firstCause(r.events)).toBe('silvain')
  })

  it('D 바닥 띠에 맞은 사인도 실베인이다 — 상태에서 나온 상자도 귀속된다', () => {
    const spec = SILVAIN.patterns.lowSilk
    const w = arena({ state: 'lowSilk', stateFrames: spec.windupFrames - 1, phase: 2, hp: SILVAIN.phase2Hp }, 60)
    const r = run(w, spec.activeFrames + 10)
    expect(firstCause(r.events)).toBe('silvain')
  })

  it('슬롯을 통해 피해가 들어간다 — ops.damage 가 실제로 불린다', () => {
    const w = arena({ state: 'idle' }, 30)
    const r = run(w, 60 * 3, (t) => (t % 6 < 3 ? ['attack'] : []))
    expect(r.world.boss.hp).toBeLessThan(SILVAIN.maxHp)
  })

  it('위험물이 가득 차면 C 는 예고조차 하지 않는다', () => {
    let base = arena({ state: 'idle', beatTicks: SILVAIN.beatFrames - 1, cycleIndex: 2 }, 120)
    let hazards = base.hazards
    for (let i = 0; i < MAX_HAZARDS; i += 1) {
      hazards = spawnHazard(hazards, 'poison', { x: 10 + i, y: 10 })
    }
    base = { ...base, hazards }
    const after = asSilvainBoss(run(base, 4).world.boss)
    // 박자 경계를 지나도 시작하지 않고, 순환 위치도 그대로다.
    expect(after.state).toBe('idle')
    expect(after.cycleIndex).toBe(2)
  })

  it('죽으면 판정이 사라지고 떨어지던 고드름도 멎는다', () => {
    const spec = SILVAIN.patterns.icicle
    const dying = arena({ state: 'icicle', stateFrames: spec.windupFrames - 1, hp: 1 }, 90)
    const ops = opsOf('silvain')
    let ticksWithRocksAlive = 0
    const r = run(dying, 60 * 3, (t) => (t % 6 < 3 ? ['attack'] : []), (world) => {
      if (!ops.isDead(world.boss) && rocksOf(world).length > 0) ticksWithRocksAlive += 1
    })
    expect(ops.isDead(r.world.boss)).toBe(true)
    // 살아 있는 동안 떨어지던 고드름이 없었다면 빈 배열 단정은 아무것도 증명하지 않는다.
    expect(ticksWithRocksAlive).toBeGreaterThan(0)
    expect(ops.hitBoxes(r.world.boss)).toEqual([])
    expect(rocksOf(r.world)).toEqual([])
  })

  it('보스룸 동시 적 수가 5 를 넘지 않는다 — 소환 0 이므로 보스 하나뿐이다', () => {
    const r = run(arena({ state: 'idle' }, 120), SILVAIN.beatFrames * 3)
    expect(r.world.enemies.length).toBe(0)
  })
})

/**
 * S3 골든 해시 — 보스룸까지 가지 않는 300틱 구간을 숫자 하나로 고정한다.
 * S1·S2 골든과 같은 목적이다. 의도한 변경이면 값을 갱신하고 이유를 커밋에 적는다.
 */
describe('스테이지 3 · 300틱 골든', () => {
  it('플레이어·보스·적·위험물의 해시가 고정값과 같다', () => {
    const { world } = s3()
    const r = run(world, 300, (i) => [
      ...(i % 40 < 30 ? ['right' as const] : ['right' as const, 'jump' as const]),
      ...(i % 6 < 3 ? ['attack' as const] : []),
    ])
    const snapshot = {
      player: r.world.player, boss: r.world.boss, enemies: r.world.enemies,
      hazards: r.world.hazards, vitals: r.world.vitals, elapsedTicks: r.world.elapsedTicks,
    }
    expect(hashState(snapshot)).toBe(4768861)
  })
})
