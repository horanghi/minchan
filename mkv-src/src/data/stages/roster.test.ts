import { describe, expect, it } from 'vitest'
import { loadBalance } from '../load.ts'
import { STAGES } from './stages.ts'

/**
 * 스테이지 로스터 자물쇠 (AT-2).
 *
 * **스테이지마다 나오는 적이 달라야 한다.** 한때 S1~S5 가 전부 좀비·그림·까마귀
 * 셋만 돌려 쓰고 있었고, 그래서 어느 스테이지를 하든 같은 게임이었다.
 * 테마(docs/04)와 등장 표(docs/05 5.2)는 그때도 달랐다 — 데이터만 안 따라갔다.
 *
 * 이 파일은 그 상태로 되돌아가는 것을 막는다. `enemies.json` 의 `stages` 열이
 * docs/05 5.2 표의 사본이므로, 배치가 그 표를 어기면 여기서 깨진다.
 */

const balance = loadBalance()

/** 스테이지 id('s3') → 등장 표의 표기('S3'). */
function tag(id: string): string {
  return id.toUpperCase()
}

function kindsOf(stageIndex: number): readonly string[] {
  const stage = STAGES[stageIndex]
  if (stage === undefined) throw new Error(`스테이지가 없다: ${stageIndex}`)
  return [...new Set(stage.enemies.map((spawn) => spawn.kind as string))].sort()
}

describe('스테이지 로스터', () => {
  it('배치된 적은 전부 그 스테이지에 나오도록 정해진 적이다 — docs/05 5.2 등장 열', () => {
    for (const stage of STAGES) {
      for (const spawn of stage.enemies) {
        const entry = balance.enemies.find((e) => e.id === spawn.kind)
        expect([stage.id, spawn.kind, entry !== undefined]).toEqual([stage.id, spawn.kind, true])
        expect([stage.id, spawn.kind, entry?.stages.includes(tag(stage.id))])
          .toEqual([stage.id, spawn.kind, true])
      }
    }
  })

  it('어느 두 스테이지도 로스터가 같지 않다 — 같으면 같은 게임을 두 번 하는 것이다', () => {
    const seen = new Map<string, string>()
    STAGES.forEach((stage, i) => {
      const key = kindsOf(i).join(',')
      const twin = seen.get(key)
      expect([stage.id, twin]).toEqual([stage.id, undefined])
      seen.set(key, stage.id)
    })
  })

  it('S2 부터는 자기만의 적이 최소 2종 있다 — 테마를 적으로 말한다', () => {
    // 좀비·그림처럼 전 스테이지 공통인 적은 스테이지의 성격을 만들지 못한다.
    // 그 스테이지에서만 만나는 적이 있어야 "여기가 어디인지"가 적으로 읽힌다.
    //
    // **S1 은 제외한다.** 튜토리얼이라 공통 적이 곧 기준선이고, 뒤 스테이지는
    // 그 기준선 위에 자기 색을 얹는 구조다. → docs/04 STAGE 1
    STAGES.forEach((stage, i) => {
      if (i === 0) return
      const exclusive = kindsOf(i).filter((kind) => {
        const entry = balance.enemies.find((e) => e.id === kind)
        return entry !== undefined && entry.stages.length <= 2
      })
      expect([stage.id, exclusive.length >= 2]).toEqual([stage.id, true])
    })
  })

  it('전 스테이지 공통 적만으로 채워진 스테이지는 없다', () => {
    STAGES.forEach((stage, i) => {
      const kinds = kindsOf(i)
      const allCommon = kinds.every((kind) => {
        const entry = balance.enemies.find((e) => e.id === kind)
        return entry !== undefined && entry.stages.length >= 5
      })
      expect([stage.id, allCommon]).toEqual([stage.id, false])
    })
  })
})
