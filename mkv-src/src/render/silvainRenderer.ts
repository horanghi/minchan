import { Container, Graphics } from 'pixi.js'
import { SILVAIN, attackBoxesOf, isSilvainWindingUp } from '../entities/bosses/silvain.ts'
import type { SilvainBoss } from '../entities/bosses/slot.ts'
import type { BossRenderer } from './bossRenderers.ts'

/**
 * 실베인 — **그레이박스** 렌더러 (AF-5 5a).
 *
 * 도트와 박자 시각 펄스는 5b 가 그린다. 여기서는 판정과 **같은 자리**에 사각형을 그려,
 * 보이는 것과 맞는 것이 어긋나지 않는지를 눈으로 확인할 수 있게 한다.
 */
const COLOR = {
  body: 0x3c5a6e,
  bodyWindup: 0x8fbcd4,
  core: 0xc9e6ff,
  attack: 0xe23e4e,
} as const

export class SilvainRenderer implements BossRenderer {
  private readonly body = new Graphics()
  private readonly root = new Container()

  constructor(stage: Container) {
    this.root.addChild(this.body)
    stage.addChild(this.root)
  }

  draw(boss: SilvainBoss): void {
    const visible = boss.awake && boss.state !== 'dead'
    this.root.visible = visible
    const g = this.body.clear()
    if (!visible) return

    const winding = isSilvainWindingUp(boss)
    g.rect(Math.round(boss.x), Math.round(boss.y), SILVAIN.width, SILVAIN.height)
      .fill({ color: winding ? COLOR.bodyWindup : COLOR.body })
    g.rect(Math.round(boss.x + SILVAIN.core.x), Math.round(boss.y + SILVAIN.core.y),
      SILVAIN.core.width, SILVAIN.core.height)
      .fill({ color: COLOR.core })

    // 공격 판정 **그대로** 그린다. 고드름은 위험물이라 여기 없다 — 그쪽은 위험물 렌더가 그린다.
    for (const box of attackBoxesOf(boss)) {
      g.rect(Math.round(box.x), Math.round(box.y), box.width, box.height)
        .fill({ color: COLOR.attack, alpha: 0.85 })
    }
  }
}
