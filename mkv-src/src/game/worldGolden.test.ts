import { describe, expect, it } from 'vitest'
import { INITIAL_INPUT, advanceInput, frameOf, type InputState } from '../core/input.ts'
import { loadBalance } from '../data/load.ts'
import { STAGE_1 } from '../data/stages/stages.ts'
import { hashState } from './replay.ts'
import { createWorld, stepWorld } from './world.ts'

/**
 * 월드 골든 해시 — 스테이지 1 을 300틱 돌린 결과를 숫자 하나로 고정한다.
 *
 * 리팩터가 동작을 바꾸지 않았음을 증명하는 가장 싼 핀이다. 보스 슬롯(AF-3)을 넣으며
 * 만들었고, 보스 티켓 4개가 world.ts 를 계속 건드릴 예정이라 값이 크다.
 * **의도한 동작 변경이면 이 값을 갱신하되, 커밋 메시지에 왜 바뀌었는지 적는다.**
 * 시드가 고정돼 있어 결정론은 이미 성립한다 (→ replay.ts).
 */
const GOLDEN = 1747518363

describe('스테이지 1 · 300틱 골든', () => {
  it('플레이어·보스·적·위험물·잔기의 해시가 고정값과 같다', () => {
    const balance = loadBalance()
    let world = createWorld(STAGE_1, balance)
    let input: InputState = INITIAL_INPUT
    for (let i = 0; i < 300; i += 1) {
      // 걷다가 가끔 뛰고, 세 틱에 한 번 던진다 — 적·투사체·판정이 전부 한 번씩 돈다.
      input = advanceInput(input, frameOf(
        ...(i % 40 < 30 ? ['right' as const] : ['right' as const, 'jump' as const]),
        ...(i % 6 < 3 ? ['attack' as const] : []),
      ))
      const step = stepWorld(world, input, balance)
      world = step.world
      input = step.input
    }
    const snapshot = {
      player: world.player, boss: world.boss, enemies: world.enemies,
      hazards: world.hazards, vitals: world.vitals, elapsedTicks: world.elapsedTicks,
    }
    expect(hashState(snapshot)).toBe(GOLDEN)
  })
})
