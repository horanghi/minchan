import {
  CAIRN, awaken, bodyBox, coreBox, createCairn, damageCairn, fragmentBoxes,
  isCoreExposed, slamBox, stepCairn, type Cairn,
} from './cairn.ts'
import type { BossOps, CairnBoss } from './slot.ts'

/** 캐른은 바닥에서 몸통 높이만큼 위에 선다. 예전엔 world.ts 가 52 를 갖고 있었다 — 두 수가 갈라지면 묻히거나 뜬다. */
const STAND_OFFSET = CAIRN.height

function tag(cairn: Cairn): CairnBoss {
  return { ...cairn, kind: 'cairn' }
}

/** 캐른 슬롯 — 기존 캐른 함수를 그대로 감싼다. 유일하게 등록된 구현이다. */
export const cairnOps: BossOps<CairnBoss> = {
  kind: 'cairn',
  maxHp: CAIRN.maxHp,
  create: (x, groundY, rng) => tag(createCairn(x, groundY - STAND_OFFSET, rng)),
  awaken: (boss) => tag(awaken(boss)),
  step: (boss, ctx, dt) => {
    const stepped = stepCairn(boss, ctx, dt)
    return { boss: tag(stepped.cairn), emission: stepped.emission }
  },
  damage: (boss, amount, box) => {
    const hit = damageCairn(boss, amount, box)
    return { boss: tag(hit.cairn), dealt: hit.dealt, killed: hit.killed }
  },
  isDead: (boss) => boss.state === 'dead',
  bodyBox,
  coreBox,
  hitBoxes: (boss) => {
    const slam = slamBox(boss)
    return slam === null ? fragmentBoxes(boss) : [...fragmentBoxes(boss), slam]
  },
  isCoreExposed,
}
