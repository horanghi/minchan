import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { NO_SURROUND, countSurrounding, stepSurround, type SurroundState } from '../fx/surround.ts'
import { parseTilemap } from '../physics/tilemap.ts'
import type { EnemySpawn, Stage } from './stage.ts'
import { TICK_SECONDS } from '../core/config.ts'
import { createWorld, stepWorld, type World } from './world.ts'

/**
 * 포위 경고와 월드 사이의 **이음매** 검사 (AF-2).
 *
 * `fx/surround.ts` 의 판정은 자기 테스트가 지킨다. 여기서 보는 것은 그 판정이
 * 실제 `stepWorld` 가 내놓는 적 목록·플레이어 몸으로 켜졌다 꺼지는가다 —
 * 판정을 정확하게 만들어 놓고 월드의 실제 상태와 다른 것을 먹이면 아무 일도
 * 일어나지 않는다 (AT-2 교훈, enemySeam.test.ts).
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

function arena(enemies: readonly EnemySpawn[]): Stage {
  return {
    id: 's1',
    name: '포위 시험장',
    map: FLAT,
    spawn: { tx: 10, ty: 4 },
    checkpoints: [],
    chests: [],
    sections: [0],
    bossGateX: 100_000,
    bossKind: 'cairn',
    enemies,
  }
}

/**
 * 좀비 3마리를 플레이어 **왼쪽** 16·32·48px 에 둔다. 전부 spawn 부터 시작한다.
 * 좀비는 기본으로 왼쪽을 보고 걷는다(docs/05 5.2 "느리게 전진") — 그러니 왼쪽에 두면
 * 솟아난 뒤 플레이어에게서 멀어진다. 방향 인자에 기대지 않는다.
 */
const THREE_GHOULS: readonly EnemySpawn[] = [
  // ty 3 — 바닥(5행) 위에 떨어뜨린다. 바닥에 박아 두면 solve 가 벽으로 읽어 제자리에서 떤다.
  { kind: 'ghoul', tx: 9, ty: 3 },
  { kind: 'ghoul', tx: 8, ty: 3 },
  { kind: 'ghoul', tx: 7, ty: 3 },
]

interface Run {
  readonly world: World
  readonly counts: readonly number[]
  readonly surround: SurroundState
  /** 틱마다의 surrounded 플래그 */
  readonly flags: readonly boolean[]
  /** 틱마다의 램프 위치 */
  readonly levels: readonly number[]
}

function run(stage: Stage, ticks: number): Run {
  let world = createWorld(stage, balance)
  let input: InputState = INITIAL_INPUT
  let surround = NO_SURROUND
  const counts: number[] = []
  const flags: boolean[] = []
  const levels: number[] = []
  for (let i = 0; i < ticks; i += 1) {
    input = advanceInput(input, frameOf())
    const step = stepWorld(world, input, balance)
    world = step.world
    input = step.input
    // main.ts 의 배선과 같은 모양 — 월드가 내놓은 것을 그대로 먹인다.
    const count = countSurrounding(world.enemies, world.player.body)
    surround = stepSurround(surround, count, TICK_SECONDS * 1000)
    counts.push(count)
    flags.push(surround.surrounded)
    levels.push(surround.level)
  }
  return { world, counts, surround, flags, levels }
}

describe('포위 경고 — 월드 배선', () => {
  it('솟아나는 동안은 0, 다 솟아난 뒤에는 3 — spawn 은 세지 않는다', () => {
    const early = run(arena(THREE_GHOULS), 10)
    expect(early.counts.at(-1)).toBe(0)
    const risen = run(arena(THREE_GHOULS), 40)
    expect(risen.counts.at(-1)).toBe(3)
  })

  it('3마리가 다 솟아나면 켜지고, 걸어 나가 2마리 이하가 되면 꺼진다', () => {
    const r = run(arena(THREE_GHOULS), 150)
    expect(r.flags.some((f) => f)).toBe(true)
    // 한 틱 켜진 것으로는 부족하다 — 실제 월드에서 램프가 끝까지 올라가야 경고가 보인다.
    expect(Math.max(...r.levels)).toBe(1)
    expect(r.counts.at(-1)).toBeLessThanOrEqual(2)
    expect(r.surround.surrounded).toBe(false)
    expect(r.surround.level).toBe(0)
  })

  it('경고는 정보다 — 켜져 있어도 적의 수·플레이어 상태를 바꾸지 않는다 (docs/05 5.1)', () => {
    const r = run(arena(THREE_GHOULS), 40)
    expect(r.world.enemies.length).toBe(3)
    expect(r.world.vitals.dead).toBe(false)
  })
})
