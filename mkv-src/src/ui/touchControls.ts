import type { Action, InputFrame } from '../core/input.ts'
import { EMPTY_TOUCH, frameOfTouch, press, release, releaseAll, type TouchState } from '../core/touch.ts'

/**
 * 화면 조작판.
 *
 * 폰에서 이 게임은 조작이 없어 열어 봐야 가만히 서 있는 화면만 본다.
 * 그 사람은 사망이 0이라 결과를 보낼 버튼조차 못 보고 조용히 사라진다.
 *
 * 판정 규칙은 `core/touch.ts` 에 있고 거기가 테스트된다. 여기는 DOM 과
 * 포인터 이벤트만 다룬다 — 계측 대상이 아니다(vitest coverage 에서 ui/ 제외).
 *
 * **버튼 위에서 손가락을 끌 수 있어야 한다.** `setPointerCapture` 를 쓰지
 * 않는 이유가 그거다 — 잡아 버리면 옆 버튼으로 넘어가도 이벤트가 원래
 * 버튼에 계속 간다.
 */

/** 손가락이 닿을 최소 크기. 이보다 작으면 달리면서 누르다 빗나간다. */
const TOUCH_TARGET_PX = 56

/** 조작판 둘레 여백. */
const GUTTER_PX = 14

/**
 * 조작판이 차지하는 높이.
 *
 * 게임 화면은 **이만큼 위로 올라간다.** 겹쳐 두면 버튼이 바닥선과 플레이어를
 * 가린다 — 가로로 들면 시작하자마자 자기 캐릭터가 안 보인다. 발밑이 안 보이는
 * 플랫포머는 조작이 있으나 마나다.
 */
export const CONTROLS_HEIGHT_PX = TOUCH_TARGET_PX + 12 + GUTTER_PX * 2

const PAD = [
  // 화면에 고정한다. 게임 화면 안에 두면 그쪽 여백 계산에 딸려 들어간다.
  'position:fixed', 'left:0', 'right:0', 'bottom:0',
  `height:${CONTROLS_HEIGHT_PX}px`, 'box-sizing:border-box',
  'pointer-events:none', 'z-index:30',
  'display:flex', 'justify-content:space-between', 'align-items:flex-end',
  `padding:${GUTTER_PX}px`, 'gap:10px',
  // iOS 사파리의 홈 바를 피한다.
  `padding-bottom:max(${GUTTER_PX}px, env(safe-area-inset-bottom))`,
  'user-select:none', '-webkit-user-select:none', 'touch-action:none',
].join(';')

const CLUSTER = 'display:flex; gap:10px; align-items:flex-end; pointer-events:auto'

function keyStyle(size: number, tint: string): string {
  return [
    `width:${size}px`, `height:${size}px`,
    'display:flex', 'align-items:center', 'justify-content:center',
    'border-radius:14px', 'border:1px solid rgba(255,255,255,.14)',
    `background:${tint}`, 'color:#E8E2EF',
    'font-size:20px', 'font-weight:800', 'line-height:1',
    'touch-action:none', '-webkit-tap-highlight-color:transparent',
    'user-select:none', '-webkit-user-select:none',
    'backdrop-filter:blur(2px)', 'transition:background .08s, transform .08s',
  ].join(';')
}

interface Key {
  readonly el: HTMLElement
  readonly action: Action
}

export class TouchControls {
  private readonly root: HTMLElement
  private readonly keys: Key[] = []
  private state: TouchState = EMPTY_TOUCH
  private visible = false

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div')
    this.root.style.cssText = PAD
    this.root.style.display = 'none'

    const left = document.createElement('div')
    left.style.cssText = CLUSTER
    left.append(
      this.key('left', '◀', TOUCH_TARGET_PX),
      this.key('down', '▼', TOUCH_TARGET_PX),
      this.key('right', '▶', TOUCH_TARGET_PX),
    )

    const right = document.createElement('div')
    right.style.cssText = CLUSTER
    // 던지기가 왼쪽, 점프가 오른쪽이다. 엄지는 바깥쪽이 빠르고
    // 이 게임에서 한 프레임이 아쉬운 쪽은 점프다.
    right.append(
      this.key('attack', '✦', TOUCH_TARGET_PX),
      this.key('jump', '▲', TOUCH_TARGET_PX + 12),
    )

    this.root.append(left, right)
    // `#app` 이 아니라 문서에 붙인다 — 게임 화면의 여백과 서로 밀지 않게.
    parent.appendChild(this.root)

    // 손가락을 뗀 자리가 버튼 밖일 수 있다. 문서 전체에서 받는다.
    for (const type of ['pointerup', 'pointercancel'] as const) {
      document.addEventListener(type, (e) => this.lift(e.pointerId))
    }
    // 버튼 사이를 지나 조작판 밖으로 나가면 그 손가락은 뗀 것으로 본다.
    document.addEventListener('pointermove', (e) => {
      if (!this.visible || !this.state.some((t) => t.pointerId === e.pointerId)) return
      const under = document.elementFromPoint(e.clientX, e.clientY)
      const key = this.keys.find((k) => k.el === under || k.el.contains(under))
      if (key === undefined) this.lift(e.pointerId)
      else this.hold(e.pointerId, key)
    })
    // 탭이 숨으면 눌린 채로 남지 않게 한다.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.releaseAll()
    })
  }

  private key(action: Action, glyph: string, size: number): HTMLElement {
    const el = document.createElement('div')
    el.style.cssText = keyStyle(size, 'rgba(36,28,46,.72)')
    el.textContent = glyph
    el.setAttribute('role', 'button')
    el.setAttribute('aria-label', action)

    const entry: Key = { el, action }
    this.keys.push(entry)

    el.addEventListener('pointerdown', (e) => {
      // 길게 누르기 메뉴·스크롤·확대를 막는다.
      e.preventDefault()
      this.hold(e.pointerId, entry)
    })
    return el
  }

  private hold(pointerId: number, key: Key): void {
    this.state = press(this.state, pointerId, key.action)
    this.paint()
  }

  private lift(pointerId: number): void {
    const next = release(this.state, pointerId)
    if (next === this.state) return
    this.state = next
    this.paint()
  }

  private releaseAll(): void {
    this.state = releaseAll(this.state)
    this.paint()
  }

  /** 눌린 버튼을 눈에 보이게 한다. 눌렸는지 모르면 빗나간 건지 알 수 없다. */
  private paint(): void {
    const active = new Set(this.state.map((t) => t.action))
    for (const { el, action } of this.keys) {
      const on = active.has(action)
      el.style.background = on ? 'rgba(122,92,168,.9)' : 'rgba(36,28,46,.72)'
      el.style.transform = on ? 'scale(.94)' : 'scale(1)'
    }
  }

  /** 이 기기에서 조작판을 쓸 것인가. `pointer.ts` 의 판정과 같은 조건이다. */
  show(): void {
    this.visible = true
    this.root.style.display = 'flex'
  }

  hide(): void {
    this.visible = false
    this.root.style.display = 'none'
    this.releaseAll()
  }

  get isVisible(): boolean {
    return this.visible
  }

  /** 설문 카드처럼 위를 덮는 것이 열리면 입력을 끊는다. */
  setSuspended(suspended: boolean): void {
    if (!this.visible) return
    this.root.style.pointerEvents = suspended ? 'none' : 'auto'
    if (suspended) this.releaseAll()
  }

  /** 이번 프레임의 입력. 키보드와 같은 모양이라 그대로 OR 하면 된다. */
  poll(): InputFrame {
    return frameOfTouch(this.state)
  }
}
