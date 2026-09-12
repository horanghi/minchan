import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGES } from '../data/stages/stages.ts'
import { BOSS_REGISTRY, type BossRegistry } from '../entities/bosses/registry.ts'
import { cairnOps } from '../entities/bosses/cairnSlot.ts'
import type { Boss, BossOps } from '../entities/bosses/slot.ts'
import { parseTilemap } from '../physics/tilemap.ts'
import type { Stage } from './stage.ts'
import { createWorld, stepWorld, type World, type WorldEvents } from './world.ts'

/**
 * 보스 슬롯과 월드 사이의 **이음매** (AF-3 선행).
 *
 * 레지스트리는 자기 테스트가 지킨다. 여기서 보는 것은 월드가 실제로 스테이지의
 * 종류로 만들고, 게이트에서 깨우고, 슬롯을 통해 때리고, 사인을 종류로 적는가다.
 * 계약만 만들고 배선을 안 하면 아무 일도 일어나지 않는다 (AT-2·AF-2 교훈).
 */

const balance = loadBalance()

const FLAT = parseTilemap([
  '....................................',
  '....................................',
  '....................................',
  '....................................',
  '....................................',
  '####################################',
])

function arena(bossKind: Stage['bossKind'], bossGateX = 8 * 16): Stage {
  return {
    id: 's1',
    name: '보스 슬롯 시험장',
    map: FLAT,
    spawn: { tx: 2, ty: 4 },
    checkpoints: [],
    chests: [],
    sections: [0],
    enemies: [],
    bossGateX,
    bossKind,
  }
}

/** 캐른 구조에 다른 태그를 붙인 대역 — 증명하는 것은 "키로 분기한다"뿐이다 (registry.test 의 설명 참조). */
const CAIRN_AS_ANY = cairnOps as unknown as BossOps
function fakeOps(kind: 'silvain', patch: Partial<BossOps> = {}): BossOps {
  const retag = (boss: Boss): Boss => ({ ...boss, kind } as unknown as Boss)
  return {
    ...CAIRN_AS_ANY,
    kind,
    maxHp: 999,
    create: (x, groundY, rng) => retag(CAIRN_AS_ANY.create(x, groundY, rng)),
    awaken: (boss) => retag(CAIRN_AS_ANY.awaken(boss)),
    step: (boss) => ({ boss, emission: { gravestones: [], rocks: [], ghouls: [], quake: false } }),
    ...patch,
  }
}

interface Run {
  readonly world: World
  readonly events: readonly WorldEvents[]
}

function run(stage: Stage, ticks: number, keys: (tick: number) => readonly Action[], registry?: BossRegistry): Run {
  let world = createWorld(stage, balance, 20260825, registry)
  let input: InputState = INITIAL_INPUT
  const events: WorldEvents[] = []
  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf(...keys(i)))
    const step = stepWorld(world, input, balance, registry)
    world = step.world
    input = step.input
    events.push(step.events)
  }
  return { world, events }
}

function firstCause(events: readonly WorldEvents[]): string | null {
  const hit = events.find((e) => e.hurt || e.died)
  return hit?.cause ?? null
}

describe('보스 슬롯 — 월드 배선', () => {
  it('실제 스테이지 다섯 판은 전부 등록된 종류를 말한다 (지금은 캐른)', () => {
    for (const stage of STAGES) {
      expect(Object.keys(BOSS_REGISTRY)).toContain(stage.bossKind)
      expect(createWorld(stage, balance).boss.kind).toBe(stage.bossKind)
    }
  })

  it('스테이지의 종류로 만든다 — 대역 종류를 등록하면 캐른이 아닌 것이 선다', () => {
    const registry: BossRegistry = { cairn: cairnOps, silvain: fakeOps('silvain') }
    expect(createWorld(arena('silvain'), balance, 1, registry).boss.kind).toBe('silvain')
    expect(createWorld(arena('cairn'), balance, 1, registry).boss.kind).toBe('cairn')
  })

  it('미등록 종류의 스테이지는 월드를 만들 수 없다 — 조용한 대체 없음', () => {
    expect(() => createWorld(arena('vesca'), balance)).toThrow(/vesca/)
  })

  it('게이트를 넘으면 슬롯이 보스를 깨운다', () => {
    const before = run(arena('cairn'), 1, () => [])
    expect(before.world.boss.awake).toBe(false)
    // 오른쪽으로 계속 걸어 게이트(x=128)를 넘는다.
    const after = run(arena('cairn'), 60 * 4, () => ['right'])
    expect(after.world.player.body.x).toBeGreaterThan(128)
    expect(after.world.boss.awake).toBe(true)
  })

  it('투사체 피해가 슬롯을 통해 들어간다 — ops.damage 가 실제로 불리고 hp 가 준다', () => {
    let damageCalls = 0
    const counting: BossOps = {
      ...CAIRN_AS_ANY,
      damage: (boss, amount, box) => { damageCalls += 1; return CAIRN_AS_ANY.damage(boss, amount, box) },
    }
    const registry: BossRegistry = { cairn: counting }
    const r = run(arena('cairn', 0), 60 * 6, (t) => (t % 6 < 3 ? ['right', 'attack'] : ['right']), registry)
    expect(r.world.boss.awake).toBe(true)
    expect(damageCalls).toBeGreaterThan(0)
    expect(r.world.boss.hp).toBeLessThan(cairnOps.maxHp)
  })

  it('보스 몸에 맞은 사인은 보스 종류다', () => {
    // 게이트 0 이라 처음부터 깨어 있다. 붙어 서 있으면 몸통 접촉으로 맞는다.
    const r = run(arena('cairn', 0), 60 * 8, () => ['right'])
    expect(firstCause(r.events)).toBe('cairn')
  })

  it('보스가 내보낸 것에 맞은 사인도 그 판의 보스 종류다 — 캐른으로 박혀 있지 않다', () => {
    // 대역 보스가 매 틱 플레이어 머리 위에 낙석을 떨어뜨린다. 몸통은 멀리 두어 접촉을 막는다.
    const registry: BossRegistry = {
      cairn: cairnOps,
      silvain: fakeOps('silvain', {
        step: (boss, ctx) => ({
          boss,
          emission: { gravestones: [], rocks: [{ x: ctx.target.x - 4, y: ctx.target.y - 40 }], ghouls: [], quake: false },
        }),
      }),
    }
    const r = run(arena('silvain', 0), 60 * 4, () => [], registry)
    expect(firstCause(r.events)).toBe('silvain')
  })
})
