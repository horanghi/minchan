import type { Stage } from '../../game/stage.ts'
import { STAGE_1 } from './stage1.ts'
import { STAGE_2 } from './stage2.ts'
import { STAGE_3 } from './stage3.ts'
import { STAGE_4 } from './stage4.ts'
import { STAGE_5 } from './stage5.ts'

/**
 * 스테이지 차례.
 *
 * 배열 순서가 곧 진행 순서다. 스테이지 안에 "다음"을 적어 두지 않는다 —
 * 그러면 순서를 바꿀 때 두 곳을 고쳐야 하고, 한 곳만 고친 채로 배포된다.
 *
 * 보스는 다섯 판 모두 캐른이다. 스테이지마다 다른 보스는 docs/04 의 계획이고
 * 아직 구현이 하나뿐이다 — 없는 것을 있는 척 적어 두지 않는다.
 */
export const STAGES: readonly Stage[] = [STAGE_1, STAGE_2, STAGE_3, STAGE_4, STAGE_5]

export const FIRST_STAGE: Stage = STAGE_1

/** 없는 id 면 -1. 저장된 진행도가 낡았을 수 있다. */
export function indexOfStage(id: string): number {
  return STAGES.findIndex((stage) => stage.id === id)
}

/** 이 스테이지 다음. 마지막이면 null — 호출부가 엔딩을 띄운다. */
export function nextStage(stage: Stage): Stage | null {
  const at = indexOfStage(stage.id)
  if (at < 0) return null
  return STAGES[at + 1] ?? null
}

/** 사람에게 보이는 번호. 1부터 센다. */
export function stageNumber(stage: Stage): number {
  return indexOfStage(stage.id) + 1
}

export { STAGE_1, STAGE_2, STAGE_3, STAGE_4, STAGE_5 }
