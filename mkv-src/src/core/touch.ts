import { bitOf, type Action, type InputFrame } from './input.ts'

/**
 * 화면 조작판의 입력 상태.
 *
 * 손가락 하나가 버튼 하나를 누르는 게 아니다 — 십자키 위에서 손가락을 **끌면**
 * 왼쪽에서 오른쪽으로 눌린 것이 바뀌어야 한다. 뗐다 다시 누르게 하면 달리다
 * 방향을 바꾸는 것만으로 한 박자가 죽고, 고정 점프 궤도에서 그 한 박자는
 * 구덩이 하나다.
 *
 * 그래서 포인터 id 마다 "지금 어느 액션 위에 있는가"를 들고 있는다. DOM 이
 * 아니라 여기 있는 이유는 이 규칙이 테스트돼야 하기 때문이다.
 */

/**
 * 누르고 있는 손가락들. **누른 순서대로** 늘어놓는다.
 *
 * 객체의 정수 키에 기대면 안 된다 — 자바스크립트는 정수형 키를 삽입 순서가
 * 아니라 **오름차순으로** 돌려준다. 그러면 "나중에 누른 쪽"이 아니라
 * "pointerId 가 큰 쪽"이 이긴다. 대개 id 가 증가하니 우연히 맞다가,
 * 브라우저가 id 를 재사용하는 순간 방향이 뒤집힌다.
 */
export interface Touch {
  readonly pointerId: number
  readonly action: Action
}

export type TouchState = readonly Touch[]

export const EMPTY_TOUCH: TouchState = Object.freeze([])

/**
 * 손가락이 눌렸거나 다른 버튼으로 끌려갔다.
 *
 * 끌려간 손가락은 **맨 뒤로 간다.** 방금 의사를 밝힌 쪽이 나중이다.
 */
export function press(state: TouchState, pointerId: number, action: Action): TouchState {
  const at = state.findIndex((t) => t.pointerId === pointerId)
  if (at >= 0 && state[at]?.action === action) return state
  return [...state.filter((t) => t.pointerId !== pointerId), { pointerId, action }]
}

/** 손가락이 조작판 밖으로 나갔다. 그 손가락 몫만 지운다. */
export function release(state: TouchState, pointerId: number): TouchState {
  if (!state.some((t) => t.pointerId === pointerId)) return state
  return state.filter((t) => t.pointerId !== pointerId)
}

/** 전부 뗀다. 카드가 열리거나 탭이 숨을 때 쓴다 — 안 그러면 계속 눌린 채로 남는다. */
export function releaseAll(state: TouchState): TouchState {
  return state.length === 0 ? state : EMPTY_TOUCH
}

/**
 * 지금 눌린 것들을 한 틱 분량의 입력으로 접는다.
 *
 * 왼쪽과 오른쪽이 동시에 눌리는 일이 실제로 생긴다(두 손가락). 그대로 두면
 * 서로 상쇄돼 제자리에 선다. **나중에 누른 쪽을 살린다** — 방향을 바꾸려고
 * 반대쪽을 누른 것이므로 그쪽이 의도다.
 */
export function frameOfTouch(state: TouchState): InputFrame {
  let frame = 0
  let horizontal: Action | null = null

  // 배열이 누른 순서다. 뒤에 있는 것이 나중에 누른 것이다.
  for (const { action } of state) {
    if (action === 'left' || action === 'right') { horizontal = action; continue }
    frame |= bitOf(action)
  }
  if (horizontal !== null) frame |= bitOf(horizontal)
  return frame
}
