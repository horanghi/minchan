import type { Container } from 'pixi.js'
import type { BossKind } from '../entities/bosses/kind.ts'
import { BossNotRegisteredError } from '../entities/bosses/registry.ts'
import type { Boss } from '../entities/bosses/slot.ts'
import { CairnRenderer } from './cairnRenderer.ts'

/**
 * 보스 렌더러 레지스트리. 판정 레지스트리(`entities/bosses/registry.ts`)와 짝이다 —
 * 보스 티켓은 판정 한 줄, 렌더러 한 줄을 등록하면 된다. 미등록이면 여기서도 실패한다.
 */
export interface BossRenderer {
  draw(boss: Boss, tick: number): void
}

const FACTORIES: Partial<Record<BossKind, (stage: Container) => BossRenderer>> = Object.freeze({
  cairn: (stage: Container) => new CairnRenderer(stage),
})

/** 렌더러가 있는 종류. 판정 레지스트리와 같아야 한다 — 어긋나면 보스룸 첫 프레임에 터진다. */
export const BOSS_RENDERER_KINDS: readonly BossKind[] = Object.freeze(Object.keys(FACTORIES) as BossKind[])

export function createBossRenderer(kind: BossKind, stage: Container): BossRenderer {
  const make = FACTORIES[kind]
  if (make === undefined) throw new BossNotRegisteredError(kind)
  return make(stage)
}
