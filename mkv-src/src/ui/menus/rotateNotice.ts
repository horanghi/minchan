/**
 * "가로로 돌려주세요" 안내.
 *
 * 화면 조작판이 생겨 폰에서도 할 수 있게 됐지만, 세로로 들면 16:9 게임이
 * 손톱만 하게 줄고 조작판이 화면을 절반 넘게 먹는다. 구덩이 너머가 안 보이는
 * 채로 고정 궤도 점프를 하라는 것이나 같다.
 *
 * 닫을 수 있게 둔다 — 판정이 틀렸을 때 게임을 막아 버리면 더 나쁘다.
 *
 * 계측 대상이 아니다 — vitest coverage 에서 ui/ 제외.
 */

export class RotateNotice {
  private readonly root: HTMLElement

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div')
    this.root.style.cssText = [
      'position:absolute',
      'inset:0',
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'justify-content:center',
      'gap:14px',
      'padding:24px',
      'box-sizing:border-box',
      'text-align:center',
      'background:rgba(10,4,6,.92)',
      'color:#EDE6D8',
      'font:13px/1.8 ui-monospace,SFMono-Regular,Menlo,monospace',
      'z-index:40',
    ].join(';')

    const title = document.createElement('div')
    title.textContent = '가로로 돌려주세요'
    title.style.cssText = 'font-size:17px;letter-spacing:.18em'

    const body = document.createElement('div')
    body.textContent = '가로로 들어야 앞이 보입니다.\n세로로는 구덩이 너머가 화면 밖입니다.'
    body.style.cssText = 'color:#BEB4C6;font-size:12px;white-space:pre-line;max-width:340px'

    const close = document.createElement('button')
    close.textContent = '이대로 할래요'
    close.style.cssText = [
      'margin-top:4px',
      'padding:8px 16px',
      'border:0',
      'border-radius:3px',
      'background:#241C2E',
      'color:#BEB4C6',
      'font:11px ui-monospace,SFMono-Regular,Menlo,monospace',
      'cursor:pointer',
    ].join(';')
    close.addEventListener('click', () => this.close())

    this.root.append(title, body, close)
    parent.appendChild(this.root)
  }

  show(): void {
    this.root.style.display = 'flex'
  }

  close(): void {
    this.root.style.display = 'none'
  }
}
