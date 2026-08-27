import { describe, expect, it } from 'vitest'
import { createRng } from '../../core/rng.ts'
import { parseTilemap } from '../../physics/tilemap.ts'
import { createEnemy, ENEMY_SPECS, type Enemy } from './enemy.ts'
import { RINGER, isEmpowering, stepRinger } from './ringer.ts'

/**
 * 종지기 (Ringer) — AT-2 · S3 얼어붙은 종루.
 *
 * "종을 울려 주변 적 강화 (우선 제거 대상)." 스스로는 아무것도 못 하지만
 * 남을 빠르게 만든다. 먼저 잡으면 나머지가 쉬워진다.
 * → docs/05-enemies-bosses.md 5.1·5.2
 */

const DT = 1 / 60
const SIZE = 16
const GRAVITY = 900
const H = ENEMY_SPECS.ringer.height
const GROUND_Y = 3 * SIZE

const FLAT = parseTilemap([
  '........................',
  '........................',
  '........................',
  '########################',
])

/** 오른쪽 tx9~12 가 끊긴 지형. */
const PIT = parseTilemap([
  '........................',
  '........................',
  '........................',
  '#########....###########',
])

function bell(x = 48, facing: -1 | 1 = 1, state = 'idle'): Enemy {
  return createEnemy(1, 'ringer', x, GROUND_Y - H, createRng(1), state, facing)
}

function run(enemy: Enemy, ticks: number, map = FLAT): Enemy {
  let e = enemy
  for (let i = 0; i < ticks; i += 1) e = stepRinger(e, map, GRAVITY, DT)
  return e
}

/** 종이 울리기 시작하는 틱. 대기 → 예고 를 모두 지난 뒤다. */
const RING_TICK = RINGER.idleFrames + RINGER.windupFrames

describe('종지기 자리', () => {
  it('거의 움직이지 않는다 — 배회 속도는 좀비보다도 느리다', () => {
    expect(RINGER.speed).toBeLessThanOrEqual(15)
  })

  it('스폰 지점 근처를 벗어나지 않는다 — 자리를 뜨면 강화 반경이 흔들린다', () => {
    const start = bell()
    const roamed = run(start, 1000)

    expect(Math.abs(roamed.body.x - start.home.x)).toBeLessThanOrEqual(RINGER.roamRange + 1)
  })

  it('배회 중 구덩이에 빠지지 않는다', () => {
    // 구덩이 바로 앞에 세워 둔다. 집으로 돌아가려는 방향이 구덩이 쪽이어도
    // 발밑 판단이 이긴다 — 한 틱도 넘어가서는 안 된다.
    const start = bell(9 * SIZE - ENEMY_SPECS.ringer.width - 2)
    let e = start

    for (let i = 0; i < 400; i += 1) {
      e = stepRinger(e, PIT, GRAVITY, DT)
      expect(e.body.x + e.body.width).toBeLessThanOrEqual(9 * SIZE)
      expect(e.body.y).toBe(start.body.y)
    }
  })

  it('알 수 없는 스폰 상태는 대기로 시작한다', () => {
    const spawned = createEnemy(1, 'ringer', 48, GROUND_Y - H, createRng(1))
    expect(stepRinger(spawned, FLAT, GRAVITY, DT).state).toBe('idle')
  })

  it('플레이어를 향해 달려들지 않는다 — 접촉 외 직접 공격은 없다', () => {
    // 어떤 상태에서도 배회 속도를 넘지 않는다. 위협은 속도가 아니라 종이다.
    let e = bell()
    for (let i = 0; i < 400; i += 1) {
      e = stepRinger(e, FLAT, GRAVITY, DT)
      expect(Math.abs(e.body.vx)).toBeLessThanOrEqual(RINGER.speed)
    }
  })
})

describe('종지기 예고와 종', () => {
  it('예고는 18프레임 이상이다 — 종을 들어올리는 동작이 먼저 보인다', () => {
    expect(RINGER.windupFrames).toBeGreaterThanOrEqual(18)
  })

  it('대기가 끝나면 종을 들어올린다 — 이 동안은 아직 울리지 않는다', () => {
    const raising = run(bell(), RINGER.idleFrames + 1)

    expect(raising.state).toBe('windup')
    expect(raising.body.vx).toBe(0)
    expect(isEmpowering(raising)).toBe(false)
  })

  it('예고가 끝나야 종이 울린다', () => {
    expect(isEmpowering(run(bell(), RING_TICK - 1))).toBe(false)
    expect(isEmpowering(run(bell(), RING_TICK))).toBe(true)
  })

  it('종이 울리는 동안에는 제자리에 선다', () => {
    const ringing = run(bell(), RING_TICK + 1)

    expect(isEmpowering(ringing)).toBe(true)
    expect(ringing.body.vx).toBe(0)
  })

  it('종은 멎고 대기로 돌아간다 — 영구 강화가 아니다', () => {
    const quiet = run(bell(), RING_TICK + RINGER.ringFrames + 1)

    expect(quiet.state).toBe('idle')
    expect(isEmpowering(quiet)).toBe(false)
  })

  it('종은 주기적으로 다시 울린다', () => {
    let e = bell()
    let rings = 0
    let was = false

    for (let i = 0; i < 500; i += 1) {
      e = stepRinger(e, FLAT, GRAVITY, DT)
      const now = isEmpowering(e)
      if (now && !was) rings += 1
      was = now
    }

    expect(rings).toBeGreaterThanOrEqual(2)
  })

  it('침묵이 종보다 길다 — 먼저 잡을 시간이 있어야 한다', () => {
    expect(RINGER.idleFrames).toBeGreaterThan(RINGER.ringFrames)
  })
})

describe('종지기 강화 판정', () => {
  it('반경과 배율만 제공한다 — 적용은 월드가 한다', () => {
    expect(RINGER.auraRadius).toBe(160)
    expect(RINGER.empowerScale).toBe(1.25)
    // 배율이 크면 강화된 적의 예고를 읽을 수 없게 된다. 공정성의 상한이다.
    expect(RINGER.empowerScale).toBeLessThanOrEqual(1.5)
  })

  it('죽은 종지기는 종을 울리지 않는다 — 먼저 잡으면 나머지가 쉬워진다', () => {
    const ringing = run(bell(), RING_TICK)
    const dead = { ...ringing, dead: true }

    expect(isEmpowering(dead)).toBe(false)
    expect(stepRinger(dead, FLAT, GRAVITY, DT)).toBe(dead)
  })

  it('다른 종류의 적은 종을 울리지 않는다', () => {
    const ghoul = createEnemy(2, 'ghoul', 48, GROUND_Y - 22, createRng(1), 'ring')
    expect(isEmpowering(ghoul)).toBe(false)
  })
})
