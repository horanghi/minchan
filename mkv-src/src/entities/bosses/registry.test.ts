import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { loadBalance } from '../../data/load.ts'
import { CAIRN } from './cairn.ts'
import { BOSS_KINDS, type BossKind } from './kind.ts'
import { BOSS_REGISTRY, BossNotRegisteredError, createBoss, opsOf, type BossRegistry } from './registry.ts'
import { cairnOps } from './cairnSlot.ts'
import type { Boss, BossOps } from './slot.ts'

/**
 * 보스 슬롯 (AF-3 선행).
 *
 * 스테이지 데이터가 종류를 말하고, 레지스트리가 종류를 구현으로 잇는다.
 * **미등록 종류는 조용히 캐른으로 대체되지 않는다** — 없는 것을 있는 척하면
 * S2 보스룸에 캐른이 서 있는 지금의 결함이 그대로 남는다. → docs/13 티켓 분할안
 */

/**
 * 테스트 대역 — 캐른의 구조에 다른 종류 태그를 붙인 것.
 *
 * 이것이 증명하는 것은 "레지스트리가 키로 분기한다"이지 "구조가 다른 보스도 된다"가
 * 아니다. `Boss` 는 지금 캐른 하나라 캐스트 없이는 다른 태그를 붙일 수 없고, 캐스트는
 * 형태 검사를 끄므로 `Boss` 에 필수 필드가 늘어도 이 대역은 조용히 통과한다 — 그래서
 * 실제 종류가 들어오면 이 대역은 그 종류의 진짜 ops 로 바꾼다.
 */
function fakeOps(kind: Exclude<BossKind, 'cairn'>): BossOps {
  const retag = (boss: Boss): Boss => ({ ...boss, kind } as unknown as Boss)
  const base = cairnOps as unknown as BossOps
  return {
    ...base,
    kind,
    maxHp: 999,
    create: (x, groundY, rng) => retag(base.create(x, groundY, rng)),
    awaken: (boss) => retag(base.awaken(boss)),
    step: (boss) => ({ boss, emission: { gravestones: [], rocks: [], ghouls: [], quake: false } }),
  }
}

describe('종류 목록', () => {
  it('기획서 §데이터 초안의 id 다섯 개다', () => {
    expect([...BOSS_KINDS]).toEqual(['cairn', 'ashmant', 'silvain', 'vesca', 'knockreed'])
  })
})

describe('레지스트리', () => {
  it('지금 등록된 것은 캐른뿐이다 — 있는 것만 있다', () => {
    expect(Object.keys(BOSS_REGISTRY)).toEqual(['cairn'])
    expect(opsOf('cairn')).toBe(cairnOps)
  })

  it('미등록 종류는 명시적으로 실패한다 — 캐른으로 대체되지 않는다', () => {
    expect(() => opsOf('ashmant')).toThrow(BossNotRegisteredError)
    expect(() => createBoss('vesca', 100, 80, createRng(3))).toThrow(/vesca/)
  })

  it('등록된 종류로 만들면 그 종류가 나온다 — 대역으로 분기를 확인한다', () => {
    const registry: BossRegistry = { cairn: cairnOps, ashmant: fakeOps('ashmant') }
    expect(createBoss('cairn', 100, 80, createRng(3), registry).kind).toBe('cairn')
    expect(createBoss('ashmant', 100, 80, createRng(3), registry).kind).toBe('ashmant')
    expect(opsOf('ashmant', registry).maxHp).toBe(999)
  })

  it('등록된 종류는 bosses.json 에 행이 있고 hp 가 ops.maxHp 와 같다 — 표와 코드가 갈라지지 않게', () => {
    const balance = loadBalance()
    for (const kind of Object.keys(BOSS_REGISTRY) as BossKind[]) {
      const row = balance.bosses.find((b) => b.id === kind)
      expect(row, `bosses.json 에 ${kind} 행이 없다`).toBeDefined()
      expect(row?.hp).toBe(opsOf(kind).maxHp)
    }
  })
})

describe('캐른 슬롯 — 기존 함수를 그대로 감싼다', () => {
  it('생성 · 각성 · 최대 HP 300 · 바닥 기준 y', () => {
    const boss = cairnOps.create(200, 160, createRng(7))
    expect(boss.kind).toBe('cairn')
    expect(boss.awake).toBe(false)
    expect(boss.hp).toBe(cairnOps.maxHp)
    expect(cairnOps.maxHp).toBe(300)
    // 캐른은 바닥에서 몸통 높이만큼 위에 선다 — world.ts 가 갖고 있던 52 가 슬롯 안으로 들어왔다.
    expect(boss.y).toBe(160 - CAIRN.height)
    expect(cairnOps.awaken(boss).awake).toBe(true)
    expect(cairnOps.isDead(boss)).toBe(false)
  })

  it('때리면 hp 가 줄고 kind 태그가 유지된다', () => {
    const boss = cairnOps.awaken(cairnOps.create(200, 160, createRng(7)))
    const box = cairnOps.bodyBox(boss)
    const hit = cairnOps.damage(boss, 10, box)
    expect(hit.dealt).toBeGreaterThan(0)
    expect(hit.boss.hp).toBeLessThan(boss.hp)
    expect(hit.boss.kind).toBe('cairn')
    const stepped = cairnOps.step(hit.boss, { target: { x: 0, y: 0 }, groundY: 160 }, 1 / 60)
    expect(stepped.boss.kind).toBe('cairn')
  })

  it('맞는 상자 목록은 강타 + 파편이다 — 잠든 캐른은 아무것도 없다', () => {
    const boss = cairnOps.create(200, 160, createRng(7))
    expect(cairnOps.hitBoxes(boss)).toEqual([])
  })

  it('죽음은 상태 이름이 아니라 ops 로 묻는다', () => {
    const boss = cairnOps.create(200, 160, createRng(7))
    expect(cairnOps.isDead({ ...boss, state: 'dead' })).toBe(true)
  })
})
