import type { BossOps, SilvainBoss } from './slot.ts'
import {
  SILVAIN, attackBoxesOf, awakenSilvain, bodyBoxOf, coreBoxOf, createSilvain,
  damageSilvain, isCoreExposedOf, stepSilvain, type Silvain,
} from './silvain.ts'

function tag(boss: Silvain): SilvainBoss {
  return { ...boss, kind: 'silvain' }
}

/** 실베인 슬롯 — S3. 판정·연출의 유일한 접점이다. → docs/13 §S3 */
export const silvainOps: BossOps<SilvainBoss> = {
  kind: 'silvain',
  maxHp: SILVAIN.maxHp,
  create: (x, groundY, rng) => tag(createSilvain(x, groundY, rng)),
  awaken: (boss) => tag(awakenSilvain(boss)),
  step: (boss, ctx, dt) => {
    const stepped = stepSilvain(boss, ctx, dt)
    return { boss: tag(stepped.boss), emission: stepped.emission }
  },
  damage: (boss, amount, box) => {
    const hit = damageSilvain(boss, amount, box)
    return { boss: tag(hit.boss), dealt: hit.dealt, killed: hit.killed }
  },
  isDead: (boss) => boss.state === 'dead',
  bodyBox: bodyBoxOf,
  coreBox: coreBoxOf,
  hitBoxes: attackBoxesOf,
  isCoreExposed: isCoreExposedOf,
}
