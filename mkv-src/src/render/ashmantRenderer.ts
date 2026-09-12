import { Container, Graphics } from 'pixi.js'
import { ASHMANT, attackBoxesOf, isAshmantWindingUp } from '../entities/bosses/ashmant.ts'
import type { AshmantBoss } from '../entities/bosses/slot.ts'
import type { BossRenderer } from './bossRenderers.ts'

/**
 * 애쉬맨트 — **그레이박스** 렌더러 (AF-4 4a).
 *
 * 도트는 4b 가 그린다. 여기서는 판정과 **같은 자리**에 사각형을 그려, 보이는 것과
 * 맞는 것이 어긋나지 않는지를 눈으로 확인할 수 있게 한다. 예고 중에는 몸이 밝아진다.
 */
const COLOR = {
  body: 0x7a4b2a,
  bodyWindup: 0xc98b4b,
  core: 0xffb347,
  attack: 0xe23e4e,
} as const

export class AshmantRenderer implements BossRenderer {
  private readonly body = new Graphics()
  private readonly root = new Container()

  constructor(stage: Container) {
    this.root.addChild(this.body)
    stage.addChild(this.root)
  }

  draw(boss: AshmantBoss): void {
    const visible = boss.awake && boss.state !== 'dead'
    this.root.visible = visible
    const g = this.body.clear()
    if (!visible) return

    const winding = isAshmantWindingUp(boss)
    g.rect(Math.round(boss.x), Math.round(boss.y), ASHMANT.width, ASHMANT.height)
      .fill({ color: winding ? COLOR.bodyWindup : COLOR.body })
    g.rect(Math.round(boss.x + ASHMANT.core.x), Math.round(boss.y + ASHMANT.core.y),
      ASHMANT.core.width, ASHMANT.core.height)
      .fill({ color: COLOR.core })

    // 공격 판정 **그대로** 그린다 — 파츠(C·D·E)뿐 아니라 상태에서 나오는 A 의 턱 상자까지.
    // 그림이 판정과 다르면 부당한 피해로 읽히고, 그걸 눈으로 잡는 것이 그레이박스의 목적이다.
    for (const box of attackBoxesOf(boss)) {
      g.rect(Math.round(box.x), Math.round(box.y), box.width, box.height)
        .fill({ color: COLOR.attack, alpha: 0.85 })
    }
  }
}
