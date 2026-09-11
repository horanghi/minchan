import { describe, expect, it } from 'vitest'
import { BOSS_REGISTRY } from '../entities/bosses/registry.ts'
import { BOSS_RENDERER_KINDS } from './bossRenderers.ts'

/** 판정 레지스트리와 렌더러 레지스트리는 짝이다 — 한쪽만 등록하면 보스룸 첫 프레임에 터진다. */
describe('보스 렌더러 레지스트리', () => {
  it('렌더러가 있는 종류 = 판정이 있는 종류', () => {
    expect([...BOSS_RENDERER_KINDS].sort()).toEqual(Object.keys(BOSS_REGISTRY).sort())
  })
})
