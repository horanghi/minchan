import { Container, Graphics, Sprite, type Texture } from 'pixi.js'
import { boxOfEnemy, type Enemy } from '../entities/enemies/enemy.ts'
import { LEVIN, warnPointOfLevin } from '../entities/enemies/levin.ts'
import { isReachKind, reachBoxOf, type ReachKind } from '../entities/enemies/reach.ts'
import { RINGER, isEmpowering } from '../entities/enemies/ringer.ts'
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
  /** 몸 밖으로 뻗는 것 전부 — 리치 판정·예고 표식·강화 반경. 적 도트보다 앞에 그린다. */
  private readonly fx = new Graphics()

  constructor(stage: Container) {
    stage.addChild(this.root)
    // 기둥은 적 앞이다. 뒤에 깔리면 기둥 경로의 좀비가 번개를 가린다.
    stage.addChild(this.fx)
  }

  draw(enemies: readonly Enemy[], tick: number, map: Tilemap): void {
    this.drawReachFx(enemies, tick, map)
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
   * 몸 밖으로 뻗는 판정은 도트가 아니라 **판정 상자를 그대로** 그린다.
   * 보이는 것과 판정이 다르면 부당한 죽음이 된다. → docs/02 2.1
   *
   * 낙뢰의 기둥만 그러면 되는 것이 아니다. 소각인의 화염(몸 밖 32px)과
   * 간수의 채찍(몸통 폭의 여섯 배인 85px)도 도트에 없으므로, 여기서 그리지
   * 않으면 그대로 **보이지 않는 판정**이 된다. 그래서 종류별로 분기하지 않고
   * 리치 상자를 한 자리에서 받아 그린다 — 새 적이 리치를 얻어도 색만 더하면 된다.
   *
   * 바닥 표식만은 판정보다 넓게(2배) 그린다 — 경고는 잘 보여야 공정하고,
   * 넓은 경고는 플레이어에게 유리한 쪽 오차다.
   */
  private drawReachFx(enemies: readonly Enemy[], tick: number, map: Tilemap): void {
    this.fx.clear()
    for (const enemy of enemies) {
      // 예고 표식은 깜빡인다 — 멈춘 픽셀은 배경으로 읽힌다.
      const warn = warnPointOfLevin(enemy, map)
      if (warn !== null && Math.floor(tick / 4) % 2 === 0) {
        this.fx.rect(warn.x - LEVIN.columnWidth, warn.y - 2, LEVIN.columnWidth * 2, 2).fill(0xffe066)
      }

      this.drawEmpowerAura(enemy, tick)

      const reach = reachBoxOf(enemy, map)
      if (reach === null || !isReachKind(enemy.kind)) continue
      // 색 표가 리치 종류 전체를 덮으므로 여기서 빠지는 적이 생길 수 없다.
      const hues = REACH_COLORS[enemy.kind]
      // 판정 크기 그대로다. 한 픽셀도 넓히지 않는다 — 넓힌 만큼이 부당한 죽음이 된다.
      this.fx.rect(reach.x, reach.y, reach.width, reach.height)
        .fill(tick % 2 === 0 ? hues[0] : hues[1])
    }
  }

  /**
   * 종지기의 강화 반경. **종이 울리는 동안만** 그린다.
   *
   * 강화가 소리 없이 시작되면 플레이어는 늑대가 왜 갑자기 빨라졌는지 알 수 없고,
   * 그러면 "무엇부터 잡을 것인가"라는 이 적의 존재 이유가 사라진다.
   * → entities/enemies/ringer.ts · docs/05 5.1·5.2
   *
   * 채우지 않고 얇은 외곽선이다. 반경 160px 을 칠하면 그 안의 배경도 적도
   * 전부 가려져, 정작 판단해야 할 대상이 보이지 않는다.
   */
  private drawEmpowerAura(enemy: Enemy, tick: number): void {
    if (!isEmpowering(enemy)) return

    const box = boxOfEnemy(enemy)
    // 맥동시켜 "지금 울리는 중"을 읽힌다. 완전히 꺼뜨리지는 않는다 —
    // 반경은 그동안 내내 유효하므로 사라지면 거짓말이 된다.
    const alpha = Math.floor(tick / 4) % 2 === 0 ? 0.5 : 0.24
    this.fx
      .circle(box.x + box.width / 2, box.y + box.height / 2, RINGER.auraRadius)
      .stroke({ width: 1, color: 0xd9a441, alpha })
  }

  private textureFor(enemy: Enemy, tick: number, flash: boolean): Texture {
    // 캐스트가 필요 없다 — `ENEMY_SPRITES` 가 `EnemyKind` 로 잠겨 있어
    // 도트 없는 적은 애초에 컴파일되지 않는다.
    const art = ENEMY_SPRITES[enemy.kind]
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

/**
 * 리치 판정의 색. 두 색을 **프레임마다 교대**해 일렁이게 한다 —
 * 멈춘 픽셀은 배경으로 읽히고, 배경으로 읽힌 판정은 부당한 죽음이 된다.
 *
 * 적마다 색이 다른 이유는 정체를 알려야 하기 때문이다. 같은 흰빛으로 그리면
 * 플레이어는 무엇이 자기를 때렸는지 모르고, 다음에도 같은 자리에서 맞는다.
 * 여기 없는 종류는 몸 밖으로 뻗는 판정이 없다는 뜻이다.
 */
const REACH_COLORS: Readonly<Record<ReachKind, readonly [number, number]>> = {
  /** 번개 — 흰빛과 노란빛. */
  levin: [0xf4f7ff, 0xffe066],
  /** 화염 — 불은 일렁여야 불로 읽힌다. */
  pyre: [0xe8622a, 0xffc24a],
  /** 사슬 채찍 — 쇠붙이가 갱도 등불을 받아 번뜩인다. */
  gaoler: [0xc2c2ce, 0xffd84a],
}

const WHITE_PALETTE = { W: '#FFFFFF' } as const

/** 칠해진 픽셀을 전부 흰색으로. 실루엣만 남는다. */
function whiten(matrix: readonly string[]): readonly string[] {
  return matrix.map((row) => row.replace(/[^.]/g, 'W'))
}
