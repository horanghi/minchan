import { describe, expect, it } from 'vitest'
import { createRng } from '../core/rng.ts'
import { ENEMY_SPECS, createEnemy, type Enemy, type EnemyKind } from '../entities/enemies/enemy.ts'
import { createBody, type Body } from '../physics/body.ts'
import {
  BASE_VIGNETTE,
  NO_SURROUND,
  SURROUND,
  SURROUND_VIGNETTE,
  countSurrounding,
  rgbOf,
  stepSurround,
  vignetteOf,
  type SurroundState,
} from './surround.ts'

/**
 * 포위 경고 (AF-2).
 *
 * 수치의 출처는 티켓 완료 조건뿐이다 — 좀비 3마리 · 반경 64px · 켜짐 0.2초 · 꺼짐 0.5초.
 * docs/05 에는 "포위 경고" 항목이 없다. 문서가 생기면 여기 수치도 그쪽을 따른다.
 */

const PLAYER: Body = createBody(100, 100, 12, 26)

function centerOf(body: Body): { readonly x: number; readonly y: number } {
  return { x: body.x + body.width / 2, y: body.y + body.height / 2 }
}

/** 플레이어 중심에서 (dx, dy) 만큼 떨어진 곳에 **중심**이 오도록 적을 둔다. */
function enemyAt(dx: number, dy: number, state = 'walk', kind: EnemyKind = 'ghoul', id = 1): Enemy {
  const c = centerOf(PLAYER)
  const spec = ENEMY_SPECS[kind]
  return createEnemy(id, kind, c.x + dx - spec.width / 2, c.y + dy - spec.height / 2, createRng(9), state)
}

const THREE = [enemyAt(40, 0, 'walk', 'ghoul', 1), enemyAt(-40, 0, 'walk', 'ghoul', 2), enemyAt(0, 50, 'walk', 'ghoul', 3)]

describe('countSurrounding — 반경 안의 취약한 좀비 수', () => {
  it('반경 64px 안의 걷는 좀비 3마리는 3 이다', () => {
    expect(countSurrounding(THREE, PLAYER)).toBe(3)
  })

  it('2마리면 2 다', () => {
    expect(countSurrounding(THREE.slice(0, 2), PLAYER)).toBe(2)
  })

  it('솟아나는 중(spawn)인 좀비는 세지 않는다 — 무적이면 무해하다 (docs/05 5.2)', () => {
    const rising = [THREE[0]!, THREE[1]!, enemyAt(0, 50, 'spawn', 'ghoul', 3)]
    expect(countSurrounding(rising, PLAYER)).toBe(2)
  })

  it('죽은 좀비는 세지 않는다', () => {
    const dead = [THREE[0]!, THREE[1]!, { ...THREE[2]!, dead: true }]
    expect(countSurrounding(dead, PLAYER)).toBe(2)
  })

  it('경계 — 64px 는 안, 65px 는 밖', () => {
    expect(countSurrounding([enemyAt(64, 0)], PLAYER)).toBe(1)
    expect(countSurrounding([enemyAt(65, 0)], PLAYER)).toBe(0)
  })

  it('다른 종류는 무시한다 — 1차는 좀비만', () => {
    const others = [enemyAt(10, 0, 'walk', 'grimm', 1), enemyAt(-10, 0, 'walk', 'corvid', 2), enemyAt(0, 10, 'walk', 'ember', 3)]
    expect(countSurrounding(others, PLAYER)).toBe(0)
    // kind 를 바꿔 주면 그 종류를 센다 — 확장은 인자 하나다.
    expect(countSurrounding(others, PLAYER, { ...SURROUND, kind: 'grimm' })).toBe(1)
  })

  it('취약 판정은 주입할 수 있다 — 기본은 월드의 canBeHit 과 같은 술어', () => {
    expect(countSurrounding(THREE, PLAYER, SURROUND, () => false)).toBe(0)
    expect(countSurrounding(THREE, PLAYER, SURROUND, () => true)).toBe(3)
  })

  it('입력을 바꾸지 않는다', () => {
    const before = JSON.stringify(THREE)
    countSurrounding(THREE, PLAYER)
    expect(JSON.stringify(THREE)).toBe(before)
  })
})

/** 일정한 dt 로 count 를 먹이며 level 이 목표에 닿는 데 걸린 ms. 못 닿으면 Infinity. */
function timeToReach(start: SurroundState, count: number, target: number, dtMs = 5): number {
  let state = start
  for (let ms = 0; ms <= 2000; ms += dtMs) {
    if (target === 1 ? state.level >= 1 : state.level <= 0) return ms
    state = stepSurround(state, count, dtMs)
  }
  return Infinity
}

describe('stepSurround — 켜짐 0.2초 · 꺼짐 0.5초 램프', () => {
  it('3마리가 되면 200ms 안에 최대에 닿는다 (완료 조건 1)', () => {
    expect(timeToReach(NO_SURROUND, 3, 1)).toBeLessThanOrEqual(SURROUND.riseMs)
  })

  it('2마리 이하가 되면 500ms 안에 꺼진다 (완료 조건 2)', () => {
    const full: SurroundState = { surrounded: true, level: 1 }
    expect(timeToReach(full, 2, 0)).toBeLessThanOrEqual(SURROUND.fallMs)
  })

  it('켜짐은 3마리부터, 꺼짐은 2마리부터 — 플래그가 곧 기준이다', () => {
    expect(stepSurround(NO_SURROUND, 2, 5).surrounded).toBe(false)
    expect(stepSurround(NO_SURROUND, 3, 5).surrounded).toBe(true)
    const on: SurroundState = { surrounded: true, level: 1 }
    expect(stepSurround(on, 3, 5).surrounded).toBe(true)
    expect(stepSurround(on, 2, 5).surrounded).toBe(false)
  })

  it('램프 도중 반전하면 그 자리에서 이어서 내려간다 — 뚝 떨어지지 않는다', () => {
    let state = NO_SURROUND
    for (let ms = 0; ms < 100; ms += 5) state = stepSurround(state, 3, 5)
    const mid = state.level
    expect(mid).toBeGreaterThan(0.3)
    expect(mid).toBeLessThan(0.7)
    const next = stepSurround(state, 0, 5)
    expect(next.level).toBeLessThan(mid)
    expect(next.level).toBeGreaterThan(mid - 0.05)
  })

  it('dt 0(일시정지)·음수·NaN 은 상태를 움직이지 않는다', () => {
    const mid: SurroundState = { surrounded: true, level: 0.4 }
    expect(stepSurround(mid, 3, 0).level).toBe(0.4)
    expect(stepSurround(mid, 3, -16).level).toBe(0.4)
    expect(stepSurround(mid, 3, Number.NaN).level).toBe(0.4)
    expect(Number.isFinite(stepSurround(mid, 3, Number.NaN).level)).toBe(true)
  })

  it('level 은 0..1 을 벗어나지 않고, 상태 객체는 새로 만든다', () => {
    const on = stepSurround({ surrounded: true, level: 1 }, 5, 1000)
    expect(on.level).toBe(1)
    const off = stepSurround({ surrounded: false, level: 0 }, 0, 1000)
    expect(off.level).toBe(0)
    expect(Object.isFrozen(NO_SURROUND)).toBe(true)
  })
})

describe('vignetteOf — 기본 비네트와 경고 비네트 사이를 level 로 섞는다', () => {
  it('level 0 은 docs/06 6.4 기본값 (0.25, 팔레트 파생 = 검정 곱)', () => {
    expect(vignetteOf(NO_SURROUND)).toEqual(BASE_VIGNETTE)
  })

  it('level 1 은 경고값 (0.55, #8b1a1a) — 팔레트 파생 규칙의 유일한 예외', () => {
    expect(vignetteOf({ surrounded: true, level: 1 })).toEqual(SURROUND_VIGNETTE)
    expect(SURROUND_VIGNETTE).toEqual({ strength: 0.55, tint: 0x8b1a1a })
  })

  it('중간은 강도와 색을 선형 보간한다', () => {
    const half = vignetteOf({ surrounded: true, level: 0.5 })
    expect(half.strength).toBeCloseTo(0.4, 5)
    // 검정 ↔ #8b1a1a 의 중간: 채널마다 반올림 (139→70, 26→13)
    expect(half.tint).toBe(0x460d0d)
  })

  it('rgbOf 는 0xRRGGBB 를 0..1 세 채널로 푼다', () => {
    const [r, g, b] = rgbOf(0x8b1a1a)
    expect(r).toBeCloseTo(0x8b / 255, 5)
    expect(g).toBeCloseTo(0x1a / 255, 5)
    expect(b).toBeCloseTo(0x1a / 255, 5)
  })
})
