import { Container, Graphics, Sprite, type Texture } from 'pixi.js'
import { boxOfEnemy, type Enemy } from '../entities/enemies/enemy.ts'
import { LEVIN, strikeBoxOfLevin, warnPointOfLevin } from '../entities/enemies/levin.ts'
import type { Tilemap } from '../physics/tilemap.ts'
import { ENEMY_SPRITES, enemyFrame } from '../sprite/enemies.ts'
import { matrixToTexture } from './spriteTexture.ts'

/**
 * 잡몹 그리기.
 *
 * 프레임은 유한하므로(종류 3 · 클립 2~3 · 프레임 1~2) 필요할 때 한 번 구워
 * 캐시한다. 스프라이트 객체는 풀에서 재사용한다 — 매 프레임 새로 만들면
 * 적 10마리에 10개의 GC 대상이 생긴다.
 *
 * 계측 대상이 아니다 — vitest coverage 에서 render/ 제외. 도트는 sprite/ 에서 검증한다.
 */
export class EnemyRenderer {
  private readonly cache = new Map<string, Texture>()
  private readonly pool: Sprite[] = []
  private readonly root = new Container()
  /** 낙뢰 전용 — 예고 표식과 번개 기둥. 적 도트보다 앞에 그린다. */
  private readonly fx = new Graphics()

  constructor(stage: Container) {
    stage.addChild(this.root)
    // 기둥은 적 앞이다. 뒤에 깔리면 기둥 경로의 좀비가 번개를 가린다.
    stage.addChild(this.fx)
  }

  draw(enemies: readonly Enemy[], tick: number, map: Tilemap): void {
    this.drawLevinFx(enemies, tick, map)
    while (this.pool.length < enemies.length) {
      const sprite = new Sprite()
      // 좌우 반전을 위해 가로 기준점만 가운데로 둔다. 세로는 발밑이 기준이다.
      sprite.anchor.set(0.5, 0)
      this.pool.push(sprite)
      this.root.addChild(sprite)
    }

    this.pool.forEach((sprite, i) => {
      const enemy = enemies[i]
      if (enemy === undefined) {
        sprite.visible = false
        return
      }

      const art = ENEMY_SPRITES[enemy.kind]
      if (art === undefined) {
        sprite.visible = false
        return
      }

      sprite.visible = true
      // 맞은 순간에는 흰 실루엣으로 바꾼다. 틴트로는 원본보다 밝게 만들 수 없다.
      sprite.texture = this.textureFor(enemy, tick, enemy.hitFlash > 0)
      const box = boxOfEnemy(enemy)
      sprite.x = Math.round(box.x + box.width / 2)
      sprite.y = Math.round(box.y)
      sprite.scale.x = enemy.facing
    })
  }

  /**
   * 낙뢰의 기둥은 도트가 아니라 **판정 상자를 그대로** 그린다.
   * 보이는 것과 판정이 다르면 부당한 죽음이 된다. → docs/02 2.1
   * 바닥 표식만은 판정보다 넓게(2배) 그린다 — 경고는 잘 보여야 공정하고,
   * 넓은 경고는 플레이어에게 유리한 쪽 오차다.
   */
  private drawLevinFx(enemies: readonly Enemy[], tick: number, map: Tilemap): void {
    this.fx.clear()
    for (const enemy of enemies) {
      if (enemy.kind !== 'levin') continue

      // 예고 표식은 깜빡인다 — 멈춘 픽셀은 배경으로 읽힌다.
      const warn = warnPointOfLevin(enemy, map)
      if (warn !== null && Math.floor(tick / 4) % 2 === 0) {
        this.fx.rect(warn.x - LEVIN.columnWidth, warn.y - 2, LEVIN.columnWidth * 2, 2).fill(0xffe066)
      }

      const column = strikeBoxOfLevin(enemy, map)
      if (column !== null) {
        this.fx.rect(column.x, column.y, column.width, column.height)
          .fill(tick % 2 === 0 ? 0xf4f7ff : 0xffe066)
      }
    }
  }

  private textureFor(enemy: Enemy, tick: number, flash: boolean): Texture {
    const art = ENEMY_SPRITES[enemy.kind] as (typeof ENEMY_SPRITES)[string]
    const frames = art.clips[enemy.state] ?? art.clips['default'] ?? []
    const index = frames.length === 0 ? 0 : Math.floor(tick / art.frameTicks) % frames.length
    const clip = enemy.state in art.clips ? enemy.state : 'default'
    const key = `${enemy.kind}|${clip}|${index}|${flash ? 'f' : '-'}`

    const cached = this.cache.get(key)
    if (cached) return cached

    const matrix = enemyFrame(art, enemy.state, tick)
    const texture = flash
      ? matrixToTexture(whiten(matrix), WHITE_PALETTE)
      : matrixToTexture(matrix, art.palette)
    this.cache.set(key, texture)
    return texture
  }
}

const WHITE_PALETTE = { W: '#FFFFFF' } as const

/** 칠해진 픽셀을 전부 흰색으로. 실루엣만 남는다. */
function whiten(matrix: readonly string[]): readonly string[] {
  return matrix.map((row) => row.replace(/[^.]/g, 'W'))
}
