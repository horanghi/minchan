import type { Container } from 'pixi.js'
import type { BossKind } from '../entities/bosses/kind.ts'
import { BossNotRegisteredError } from '../entities/bosses/registry.ts'
import type { Boss } from '../entities/bosses/slot.ts'
import { AshmantRenderer } from './ashmantRenderer.ts'
import { CairnRenderer } from './cairnRenderer.ts'

/**
 * 보스 렌더러 레지스트리. 판정 레지스트리(`entities/bosses/registry.ts`)와 짝이다 —
 * 보스 티켓은 판정 한 줄, 렌더러 한 줄을 등록하면 된다. 미등록이면 여기서도 실패한다.
 */
export interface BossRenderer {
  draw(boss: Boss, tick: number): void
}

/** 종류별 렌더러는 자기 종류의 상태만 받는다. 합집합을 각자 좁히게 하지 않는다. */
type RendererFor<K extends BossKind> = {
  draw(boss: Extract<Boss, { readonly kind: K }>, tick: number): void
}

const FACTORIES: { [K in BossKind]?: (stage: Container) => RendererFor<K> } = Object.freeze({
  cairn: (stage: Container) => new CairnRenderer(stage),
  ashmant: (stage: Container) => new AshmantRenderer(stage),
})

/** 렌더러가 있는 종류. 판정 레지스트리와 같아야 한다 — 어긋나면 보스룸 첫 프레임에 터진다. */
export const BOSS_RENDERER_KINDS: readonly BossKind[] = Object.freeze(Object.keys(FACTORIES) as BossKind[])

export function createBossRenderer(kind: BossKind, stage: Container): BossRenderer {
  const make = FACTORIES[kind]
  if (make === undefined) throw new BossNotRegisteredError(kind)
  // 메서드 파라미터가 양변이라 `RendererFor<K>` 는 그대로 `BossRenderer` 에 들어간다.
  // 실제 안전은 타입이 아니라 호출부 규약에서 온다 — `boss.kind` 로 고른 렌더러에 그 종류를 넘긴다.
  return make(stage)
}
