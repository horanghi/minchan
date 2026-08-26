import { describe, expect, it } from 'vitest'
import { sectionAt, type Stage } from '../../game/stage.ts'
import { TILE, tileAt, type TileKind } from '../../physics/tilemap.ts'
import { STAGES, indexOfStage, nextStage, stageNumber } from './stages.ts'

/**
 * 다섯 스테이지 **전부**에 걸리는 배치 규칙.
 *
 * 스테이지 1 은 자기 튜토리얼 규칙을 `stage1.test.ts` 에서 따로 검사한다.
 * 여기 있는 것은 어느 판에서든 깨지면 안 되는 공정성이다 — 고정 점프 궤도라
 * 공중에서 궤도를 바꿀 수 없으므로, 못 넘는 간격이나 착지 지점의 적은
 * 실력이 아니라 설계의 문제가 된다. → docs/04 4.2
 */

/** 지면에서 밟을 수 없는 칸. 빈칸·불·독은 물론, 무너질 다리도 결국 구덩이가 된다. */
const NOT_FOOTING: readonly TileKind[] = [TILE.empty, TILE.hazard, TILE.crumbling]
/** 점프 궤도를 끊는 타일. 원웨이는 아래에서 통과하므로 뺀다. → docs/04 원칙 1 */
const BLOCKS_JUMP: readonly TileKind[] = [TILE.solid, TILE.crumbling, TILE.hazard]

interface Gap {
  readonly start: number
  readonly length: number
}

/**
 * 지면 행에서 건너야 하는 구간.
 *
 * 붕괴 타일을 포함하는 이유는 그것이 **1초 뒤 구덩이**이기 때문이다.
 * 밟기 전에는 바닥으로 보이지만, 통과 한계폭을 넘겨 두면 무너진 뒤 갇힌다.
 */
function gapsOf(stage: Stage): readonly Gap[] {
  const map = stage.map
  const groundRow = map.height - 1
  const gaps: Gap[] = []
  let run = 0
  for (let tx = 0; tx < map.width; tx += 1) {
    if (NOT_FOOTING.includes(tileAt(map, tx, groundRow))) {
      run += 1
    } else if (run > 0) {
      gaps.push({ start: tx - run, length: run })
      run = 0
    }
  }
  if (run > 0) gaps.push({ start: map.width - run, length: run })
  return gaps
}

describe('스테이지 차례', () => {
  it('다섯 판이 있다', () => {
    expect(STAGES).toHaveLength(5)
  })

  it('id 가 겹치지 않는다 — 겹치면 진행도가 엉뚱한 판을 가리킨다', () => {
    expect(new Set(STAGES.map((s) => s.id)).size).toBe(STAGES.length)
  })

  it('전부 이름이 있다', () => {
    for (const stage of STAGES) expect(stage.name.length).toBeGreaterThan(0)
  })

  it('차례대로 이어진다', () => {
    for (let i = 0; i < STAGES.length - 1; i += 1) {
      expect(nextStage(STAGES[i]!)?.id).toBe(STAGES[i + 1]!.id)
    }
  })

  it('마지막 다음은 없다 — 호출부가 엔딩을 띄운다', () => {
    expect(nextStage(STAGES[STAGES.length - 1]!)).toBeNull()
  })

  it('모르는 스테이지는 -1 이고 다음도 없다', () => {
    expect(indexOfStage('없는판')).toBe(-1)
    expect(nextStage({ ...STAGES[0]!, id: '없는판' })).toBeNull()
  })

  it('사람에게 보이는 번호는 1부터다', () => {
    expect(stageNumber(STAGES[0]!)).toBe(1)
    expect(stageNumber(STAGES[4]!)).toBe(5)
  })
})

describe.each(STAGES.map((stage) => [stage.name, stage] as const))(
  '%s — 배치 규칙',
  (_name, stage) => {
    const map = stage.map
    const groundRow = map.height - 1
    const size = map.tileSize

    it('건너야 할 구간이 하나 이상 있다 — 없으면 이 검사가 무의미하다', () => {
      expect(gapsOf(stage).length).toBeGreaterThan(0)
    })

    it('어떤 구간도 3타일을 넘지 않는다 — 실측 통과 한계', () => {
      for (const gap of gapsOf(stage)) {
        expect([gap.start, gap.length]).toEqual([gap.start, Math.min(gap.length, 3)])
      }
    })

    it('건너는 구간의 머리 위 4타일이 비어 있다 — 궤도에 걸리면 회피 불가다', () => {
      for (const gap of gapsOf(stage)) {
        const from = Math.max(0, gap.start - 1)
        const to = Math.min(map.width - 1, gap.start + gap.length)
        for (let tx = from; tx <= to; tx += 1) {
          for (let up = 1; up <= 4; up += 1) {
            const kind = tileAt(map, tx, groundRow - up)
            expect([tx, groundRow - up, BLOCKS_JUMP.includes(kind)])
              .toEqual([tx, groundRow - up, false])
          }
        }
      }
    })

    it('착지 지점 3타일 안에 지상 적이 없다 — 착지 순간은 회피할 수 없다', () => {
      // 공중 적(그림·까마귀)은 뺀다. 화면 안에서 먼저 보이는 것이 그쪽의
      // 공정성 장치다. → docs/12 12.8
      const GROUND_BAND = 2
      for (const gap of gapsOf(stage)) {
        const landing = gap.start + gap.length
        for (const enemy of stage.enemies) {
          if (groundRow - enemy.ty > GROUND_BAND) continue
          const distance = enemy.tx - landing
          expect([enemy.kind, enemy.tx, landing, distance >= 0 && distance < 3])
            .toEqual([enemy.kind, enemy.tx, landing, false])
        }
      }
    })

    it('지상 적이 딛을 곳 위에 선다 — 시작하자마자 빠지지 않는다', () => {
      for (const enemy of stage.enemies) {
        if (groundRow - enemy.ty > 2) continue
        expect([enemy.kind, enemy.tx, tileAt(map, enemy.tx, groundRow)])
          .toEqual([enemy.kind, enemy.tx, TILE.solid])
      }
    })

    it('스폰 지점이 지면 위 빈칸이다', () => {
      expect(tileAt(map, stage.spawn.tx, groundRow)).toBe(TILE.solid)
      expect(tileAt(map, stage.spawn.tx, stage.spawn.ty)).toBe(TILE.empty)
    })

    it('체크포인트가 둘 이상이고 전부 설 수 있는 자리다', () => {
      expect(stage.checkpoints.length).toBeGreaterThanOrEqual(2)
      for (const cp of stage.checkpoints) {
        expect([cp.label, tileAt(map, cp.tx, groundRow)]).toEqual([cp.label, TILE.solid])
        expect([cp.label, tileAt(map, cp.tx, cp.ty)]).toEqual([cp.label, TILE.empty])
      }
    })

    it('구간이 셋이고 경계가 맞는다 — 노히트 보너스가 여기서 계산된다', () => {
      expect(stage.sections).toHaveLength(3)
      expect(stage.sections[0]).toBe(0)
      stage.sections.forEach((start, i) => {
        expect(sectionAt(stage, start * size)).toBe(i)
      })
    })

    it('보스룸은 오른쪽만 막힌다 — 양쪽을 막으면 들어갈 수도 없다', () => {
      const entry = stage.sections[2]!
      expect(tileAt(map, entry, groundRow - 1)).toBe(TILE.empty)
      expect(tileAt(map, entry, groundRow - 2)).toBe(TILE.empty)
      expect(tileAt(map, map.width - 1, groundRow - 1)).toBe(TILE.solid)
    })

    it('보스 게이트가 보스룸 안에 있다', () => {
      expect(stage.bossGateX).toBeGreaterThan(stage.sections[2]! * size)
      expect(stage.bossGateX).toBeLessThan(map.width * size)
    })

    it('무기 상자 둘 이상, 성유물 상자 하나다', () => {
      const weapons = stage.chests.filter((c) => c.contents.kind === 'weapon')
      const relics = stage.chests.filter((c) => c.contents.kind === 'relic')
      expect(weapons.length).toBeGreaterThanOrEqual(2)
      expect(relics).toHaveLength(1)
    })

    it('성유물은 보스룸 전에 반드시 지나는 자리에 있다', () => {
      // 성유물 → 강철 → 속옷 세 단계를 못 보면 갑옷 파괴 연출의 절반만 보는
      // 것이다. → docs/06 6.3
      const relic = stage.chests.find((c) => c.contents.kind === 'relic')!
      expect(relic.tx).toBeLessThan(stage.sections[2]!)
      expect(relic.tx).toBeGreaterThan(stage.sections[1]!)
    })

    it('상자가 지면 위에 놓이고 착지 지점을 피한다', () => {
      const landings = gapsOf(stage).map((gap) => gap.start + gap.length)
      for (const chest of stage.chests) {
        expect([chest.tx, tileAt(map, chest.tx, chest.ty + 1)]).toEqual([chest.tx, TILE.solid])
        expect([chest.tx, tileAt(map, chest.tx, chest.ty)]).toEqual([chest.tx, TILE.empty])
        for (const landing of landings) {
          const distance = chest.tx - landing
          expect([chest.tx, landing, distance >= 0 && distance < 3])
            .toEqual([chest.tx, landing, false])
        }
      }
    })
  },
)
