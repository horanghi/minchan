/**
 * 보스 종류.
 *
 * 스테이지 데이터가 이 이름으로 "누가 서 있는가"를 말하고, `registry.ts` 가
 * 이름을 구현으로 잇는다. 이름은 docs/13 §데이터 초안의 id 그대로다 —
 * 캐른만 구현돼 있고 나머지는 보스 티켓(AF-4~7)이 등록한다.
 */
export const BOSS_KINDS = ['cairn', 'ashmant', 'silvain', 'vesca', 'knockreed'] as const
export type BossKind = (typeof BOSS_KINDS)[number]
