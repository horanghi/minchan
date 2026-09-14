import type { RngState } from '../../core/rng.ts'
import { ashmantOps } from './ashmantSlot.ts'
import { silvainOps } from './silvainSlot.ts'
import { cairnOps } from './cairnSlot.ts'
import type { BossKind } from './kind.ts'
import type { Boss, BossOps } from './slot.ts'

/**
 * 보스 레지스트리 — 종류 이름을 구현으로 잇는다.
 *
 * **미등록 종류는 조용히 캐른으로 대체되지 않는다.** 없는 것을 있는 척하면
 * S2 보스룸에 캐른이 서 있던 지금까지의 결함이 그대로 남는다. 보스 티켓은
 * 여기에 한 줄을 추가하는 것으로 자기 스테이지에 선다. → docs/13 티켓 분할안
 */
export type BossRegistry = Partial<Record<BossKind, BossOps>>

export const BOSS_REGISTRY: BossRegistry = Object.freeze({
  cairn: cairnOps, ashmant: ashmantOps, silvain: silvainOps,
})

export class BossNotRegisteredError extends Error {
  constructor(kind: string) {
    super(`보스 종류 '${kind}' 는 등록되지 않았다 — 캐른으로 대체하지 않는다. entities/bosses/registry.ts 에 등록하라.`)
    this.name = 'BossNotRegisteredError'
  }
}

export function opsOf(kind: BossKind, registry: BossRegistry = BOSS_REGISTRY): BossOps {
  const ops = registry[kind]
  if (ops === undefined) throw new BossNotRegisteredError(kind)
  return ops
}

export function createBoss(
  kind: BossKind, x: number, groundY: number, rng: RngState, registry: BossRegistry = BOSS_REGISTRY,
): Boss {
  return opsOf(kind, registry).create(x, groundY, rng)
}
