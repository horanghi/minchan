import { describe, expect, it } from 'vitest'
import { bitOf } from './input.ts'
import { EMPTY_TOUCH, frameOfTouch, press, release, releaseAll } from './touch.ts'

describe('화면 조작판', () => {
  it('누르면 그 액션이 들어간다', () => {
    expect(frameOfTouch(press(EMPTY_TOUCH, 1, 'jump'))).toBe(bitOf('jump'))
  })

  it('여러 손가락이 동시에 눌린다 — 달리면서 던지기', () => {
    let s = press(EMPTY_TOUCH, 1, 'right')
    s = press(s, 2, 'attack')
    expect(frameOfTouch(s)).toBe(bitOf('right') | bitOf('attack'))
  })

  it('손가락을 끌면 뗐다 누르지 않아도 방향이 바뀐다', () => {
    // 십자키 위에서 미끄러뜨리는 경우. 뗐다 누르게 하면 한 박자가 죽고,
    // 고정 점프 궤도에서 그 한 박자는 구덩이 하나다.
    let s = press(EMPTY_TOUCH, 1, 'left')
    s = press(s, 1, 'right')

    expect(frameOfTouch(s)).toBe(bitOf('right'))
    expect(frameOfTouch(s) & bitOf('left')).toBe(0)
  })

  it('같은 자리를 다시 눌러도 상태가 그대로다 — 쓸데없이 새 객체를 만들지 않는다', () => {
    const s = press(EMPTY_TOUCH, 1, 'left')
    expect(press(s, 1, 'left')).toBe(s)
  })

  it('두 손가락이 반대 방향을 누르면 나중 것을 살린다', () => {
    // 상쇄시키면 제자리에 선다. 반대쪽을 누른 건 방향을 바꾸려는 뜻이다.
    let s = press(EMPTY_TOUCH, 1, 'left')
    s = press(s, 2, 'right')

    expect(frameOfTouch(s)).toBe(bitOf('right'))
  })

  it('id 가 작은 손가락이 나중에 눌려도 그쪽이 이긴다', () => {
    // 상태를 객체로 들면 여기서 뒤집힌다 — 자바스크립트는 정수 키를 삽입
    // 순서가 아니라 오름차순으로 돌려주므로 "id 가 큰 쪽"이 이겨 버린다.
    // 브라우저가 포인터 id 를 재사용하면 실제로 이 순서가 나온다.
    let s = press(EMPTY_TOUCH, 9, 'left')
    s = press(s, 2, 'right')

    expect(frameOfTouch(s)).toBe(bitOf('right'))
  })

  it('끌어서 방향을 바꾼 손가락은 맨 뒤로 간다', () => {
    // 왼쪽을 누른 채 다른 손가락으로 오른쪽을 누르고, 원래 손가락을 왼쪽에서
    // 오른쪽으로 끌면 — 마지막 의사는 오른쪽이다.
    let s = press(EMPTY_TOUCH, 1, 'left')
    s = press(s, 2, 'right')
    s = press(s, 1, 'right')
    expect(frameOfTouch(s)).toBe(bitOf('right'))

    // 반대로 2번 손가락을 왼쪽으로 끌면 그쪽이 마지막이다.
    s = press(s, 2, 'left')
    expect(frameOfTouch(s)).toBe(bitOf('left'))
  })

  it('떼면 그 손가락 몫만 빠진다', () => {
    let s = press(EMPTY_TOUCH, 1, 'right')
    s = press(s, 2, 'jump')
    s = release(s, 1)

    expect(frameOfTouch(s)).toBe(bitOf('jump'))
  })

  it('없는 손가락을 떼도 아무 일도 없다', () => {
    const s = press(EMPTY_TOUCH, 1, 'right')
    expect(release(s, 99)).toBe(s)
  })

  it('전부 떼면 비어 있다 — 카드가 열릴 때 눌린 채로 남으면 안 된다', () => {
    let s = press(EMPTY_TOUCH, 1, 'right')
    s = press(s, 2, 'jump')

    expect(frameOfTouch(releaseAll(s))).toBe(0)
    expect(releaseAll(EMPTY_TOUCH)).toBe(EMPTY_TOUCH)
  })

  it('아무것도 안 눌렸으면 0 이다', () => {
    expect(frameOfTouch(EMPTY_TOUCH)).toBe(0)
  })

  it('원본을 바꾸지 않는다', () => {
    const s = press(EMPTY_TOUCH, 1, 'right')
    press(s, 2, 'jump')
    release(s, 1)
    expect(frameOfTouch(s)).toBe(bitOf('right'))
  })
})
