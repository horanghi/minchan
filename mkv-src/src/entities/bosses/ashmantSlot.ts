import {
  ASHMANT, attackBoxesOf, awakenAshmant, bodyBoxOf, coreBoxOf, createAshmant,
  damageAshmant, isCoreExposedOf, stepAshmant, type Ashmant,
} from './ashmant.ts'
import type { AshmantBoss, BossOps } from './slot.ts'

function tag(boss: Ashmant): AshmantBoss {
  return { ...boss, kind: 'ashmant' }
}

/** 애쉬맨트 슬롯 — S2. 판정·연출의 유일한 접점이다. → docs/13 §S2 */
export const ashmantOps: BossOps<AshmantBoss> = {
  kind: 'ashmant',
  maxHp: ASHMANT.maxHp,
  create: (x, groundY, rng) => tag(createAshmant(x, groundY, rng)),
  awaken: (boss) => tag(awakenAshmant(boss)),
  step: (boss, ctx, dt) => {
    const stepped = stepAshmant(boss, ctx, dt)
    return { boss: tag(stepped.boss), emission: stepped.emission }
  },
  damage: (boss, amount, box) => {
    const hit = damageAshmant(boss, amount, box)
    return { boss: tag(hit.boss), dealt: hit.dealt, killed: hit.killed }
  },
  isDead: (boss) => boss.state === 'dead',
  bodyBox: bodyBoxOf,
  coreBox: coreBoxOf,
  hitBoxes: attackBoxesOf,
  isCoreExposed: isCoreExposedOf,
}
