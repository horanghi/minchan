import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type Action, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_1 } from '../data/stages/stage1.ts'
import { STAGES } from '../data/stages/stages.ts'
import { CAIRN, coreBox, damageCairn } from '../entities/bosses/cairn.ts'
import { boxOfEnemy } from '../entities/enemies/enemy.ts'
import { TILE, tileAt } from '../physics/tilemap.ts'
import { applyDifficulty, applyDifficultyToStage, DIFFICULTIES, rulesFor } from './difficulty.ts'
import { RESPAWN_DELAY_TICKS, createWorld, stepWorld, type World } from './world.ts'
import type { Balance } from '../data/load.ts'
import type { Stage } from './stage.ts'

const balance = loadBalance()

/** 밟을 수 없는 칸. 빈칸과 위험 타일(불·독)을 같이 본다. */
function mustJump(stage: Stage, x: number): boolean {
  const size = stage.map.tileSize
  const kind = tileAt(stage.map, Math.floor((x + 14) / size), stage.map.height - 1)
  return kind === TILE.empty || kind === TILE.hazard
}

/**
 * 사람처럼 움직이는 봇. 규칙은 셋뿐이고, 처음 플레이하는 사람과 같다.
 *
 *   1. 앞에 적이 있으면 멈춰서 던진다
 *   2. 앞에 구덩이가 있으면 뛴다
 *   3. 아니면 걷는다
 *
 * 사람의 플레이를 대신하지는 못한다. **경로가 막혀 있지 않다**는 것만 본다.
 */
function botReachesBoss(stage: Stage, stageBalance: Balance): boolean {
  let world = createWorld(stage, stageBalance)
  let input: InputState = INITIAL_INPUT
  // 불·독도 구덩이와 같다 — 밟으면 죽는 칸은 전부 뛰어넘어야 한다.
  const gapAhead = (x: number): boolean => mustJump(stage, x)
  const enemyAhead = (x: number, y: number): boolean =>
    world.enemies.some((e) => {
      const box = boxOfEnemy(e)
      return box.x - x > 0 && box.x - x < 70 && Math.abs(box.y - y) < 40
    })

  for (let i = 0; i < 60 * 300; i += 1) {
    const body = world.player.body
    const actions: Action[] = []

    if (enemyAhead(body.x, body.y)) {
      // 멈춰서 던진다. 눌렀다 떼야 다시 나간다.
      if (i % 6 < 3) actions.push('attack')
    } else {
      actions.push('right')
      if (body.onGround && gapAhead(body.x)) actions.push('jump')
    }

    input = advanceInput(input, frameOf(...actions))
    const step = stepWorld(world, input, stageBalance)
    world = step.world
    input = step.input
    if (world.cairn.awake) return true
  }

  return false
}

/**
 * 조건이 참이 될 때까지 봇을 돌리고 그때의 월드를 돌려준다.
 *
 * `botReachesBoss` 와 같은 봇이다 — 규칙을 두 벌 두면 하나만 고쳐져 갈라진다.
 */
function runUntil(
  stage: Stage,
  stageBalance: Balance,
  done: (world: World) => boolean,
  maxTicks = 60 * 300,
): World | null {
  let world = createWorld(stage, stageBalance)
  let input: InputState = INITIAL_INPUT
  const gapAhead = (x: number): boolean => mustJump(stage, x)
  const enemyAhead = (x: number, y: number): boolean =>
    world.enemies.some((e) => {
      const box = boxOfEnemy(e)
      return box.x - x > 0 && box.x - x < 70 && Math.abs(box.y - y) < 40
    })

  for (let i = 0; i < maxTicks; i += 1) {
    const body = world.player.body
    const actions: Action[] = []
    if (enemyAhead(body.x, body.y)) {
      if (i % 6 < 3) actions.push('attack')
    } else {
      actions.push('right')
      if (body.onGround && gapAhead(body.x)) actions.push('jump')
    }
    input = advanceInput(input, frameOf(...actions))
    const step = stepWorld(world, input, stageBalance)
    world = step.world
    input = step.input
    if (done(world)) return world
  }
  return null
}

/**
 * 스테이지 1 이 처음부터 끝까지 클리어 가능한가.
 *
 * m1-5 의 Done 조건이다.
 */
describe('스테이지 1 — 클리어 가능성', () => {
  it('사람처럼 움직이면 보스룸까지 닿는다', () => {
    expect(botReachesBoss(STAGE_1, balance)).toBe(true)
  })

  it('체크포인트가 진행을 보존한다 — 죽어도 처음부터 하지 않는다', () => {
    // 봇으로 체크포인트를 지나게 한 뒤 죽인다.
    //
    // **"대충 달리다 죽어도 어딘가 남는다" 로 재지 않는다.** 그 봇은 좀비를
    // 한 대도 안 때리므로, 좀비가 구덩이에 빠져 스스로 사라지던 시절에만
    // 통과했다. 발밑 판단이 들어온 지금은 좀비가 길에 남아 잔기부터 떨어진다.
    // 재려던 것은 봇의 실력이 아니라 부활 지점이므로, 그것만 직접 잰다.
    const first = STAGE_1.checkpoints[0]!
    const passed = runUntil(STAGE_1, balance, (w) => w.player.body.x > first.tx * 16)
    expect(passed).not.toBeNull()

    // 체크포인트를 지난 자리에서 죽는다.
    let world: World = { ...passed!, vitals: { ...passed!.vitals, dead: true } }
    for (let i = 0; i <= RESPAWN_DELAY_TICKS; i += 1) {
      world = stepWorld(world, INITIAL_INPUT, balance).world
    }

    // 스폰 지점이 아니라 체크포인트에서 다시 선다.
    expect(world.player.body.x).toBe(first.tx * 16)
    expect(world.player.body.x).toBeGreaterThan(STAGE_1.spawn.tx * 16)
  })

  it('보스를 코어만 노리면 30발로 잡는다 — 창 데미지 10', () => {
    let world = createWorld(STAGE_1, balance)
    world = { ...world, cairn: { ...world.cairn, awake: true } }

    let shots = 0
    while (world.cairn.hp > 0 && shots < 100) {
      const result = damageCairn(world.cairn, 10, coreBox(world.cairn))
      world = { ...world, cairn: result.cairn }
      shots += 1
    }
    expect(world.cairn.hp).toBe(0)
    expect(shots).toBe(CAIRN.maxHp / 10)
  })

  it('보스를 잡으면 클리어 표시가 선다', () => {
    let world = createWorld(STAGE_1, balance)
    world = { ...world, cairn: { ...world.cairn, awake: true, hp: 5 } }

    // 코어 위치에 투사체를 놓아 맞힌다
    const core = coreBox(world.cairn)
    const shot = {
      id: 1, weaponId: 'lance', x: core.x, y: core.y, width: 4, height: 4,
      vx: 0, vy: 0, damage: 10, ageFrames: 0,
    }
    world = { ...world, shots: { projectiles: [shot], nextId: 2 } }

    const step = stepWorld(world, INITIAL_INPUT, balance)
    expect(step.events.bossKilled).toBe(true)
    expect(step.world.cleared).toBe(true)
  })

  it('플레이어가 스테이지 끝까지 갈 수 있다 — 넘을 수 없는 지형이 없다', () => {
    // 각 구덩이 직전에서 최대 속도로 뛰면 반드시 넘는다.
    const size = STAGE_1.map.tileSize
    const groundRow = STAGE_1.map.height - 1
    const gaps: number[] = []
    let run = 0
    for (let tx = 0; tx < STAGE_1.map.width; tx += 1) {
      const solid = STAGE_1.map.tiles[groundRow * STAGE_1.map.width + tx] !== 0
      if (!solid) run += 1
      else { if (run > 0) gaps.push(run); run = 0 }
    }
    // 실측 통과 가능 간격은 3타일이다. → docs/02 실측 주석
    for (const gap of gaps) expect(gap * size).toBeLessThanOrEqual(3 * size)
  })
})

/**
 * 난이도를 바꾼 뒤에도 깰 수 있는가.
 *
 * 성기사는 **적을 늘린다.** 늘린 자리가 구덩이 착지점이거나 통로를 막으면
 * 그 난이도는 어려운 게 아니라 불가능해진다. 게이트는 기사에서만 재므로
 * 여기서 안 잡으면 아무도 모르는 채로 M2 에 실려 간다.
 * → docs/08 8.4 · prompts/m1-gate.md
 */
describe('난이도 3단계 — 전부 보스룸까지 닿는가', () => {
  for (const id of DIFFICULTIES) {
    it(`${rulesFor(id).name} 에서도 길이 막히지 않는다`, () => {
      const stage = applyDifficultyToStage(STAGE_1, id)
      expect(botReachesBoss(stage, applyDifficulty(balance, id))).toBe(true)
    })
  }
})

/**
 * 새로 만든 판이 실제로 끝까지 갈 수 있는가.
 *
 * 배치 규칙(`stages.test.ts`)은 "3타일을 넘지 않는다" 같은 **데이터** 검사다.
 * 그것만으로는 부족하다 — 규칙을 다 지키고도 붕괴 다리 뒤가 막혔거나 적이
 * 통로를 메우면 못 간다. 여기서는 봇을 실제로 걸려 본다.
 */
describe('다섯 판 — 전부 보스룸까지 닿는가', () => {
  for (const stage of STAGES) {
    it(`${stage.name} 의 길이 막히지 않는다`, () => {
      expect(botReachesBoss(stage, balance)).toBe(true)
    })
  }
})
