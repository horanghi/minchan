import { W } from './state.js';

/** 강화는 **플레이어 단위**다. 두 전선에 함께 붙는다. */
export const UPS = [
  { k: 'dmg', ic: '⚔️', nm: '공격력', d: lv => '내 병사 피해 +' + (lv * 10) + '%', c: lv => Math.round(130 * Math.pow(1.55, lv)) },
  { k: 'mine', ic: '⛏️', nm: '채굴 장비', d: lv => '광부 1회 운반 ' + (14 + lv * 5) + ' 골드', c: lv => Math.round(140 * Math.pow(1.6, lv)) },
  { k: 'turret', ic: '🏰', nm: '성문 포탑', d: lv => lv ? ('피해 ' + (12 + lv * 8) + ' · 연사 ' + Math.max(.45, 1.5 - lv * .12).toFixed(2) + '초') : '두 성문에 궁수 배치', c: lv => Math.round(170 * Math.pow(1.65, lv)) },
  // **성벽만 상한이 있다(3).** 덧대는 것이 깎이는 것보다 빠르면 판이
  // 끝나지 않는다 — 셋을 15분 붙였더니 1900 으로 시작한 성이 3400 이
  // 되어 있었다. 세 번까지는 버티는 수단이고, 그 뒤로는 싸워서 지켜야 한다.
  { k: 'base', ic: '🧱', nm: '성벽 보강', max: 3, d: lv => '최대 체력 +300 · 즉시 회복', c: lv => Math.round(220 * Math.pow(1.7, lv)) },
];

/** 더 살 수 있나. 상한이 있는 강화는 거기서 멈춘다. */
export function upMaxed(who, k) {
  const u = UPS.find(x => x.k === k);
  return !!(u.max && W(who).up[k] >= u.max);
}
export function upCost(who, k) {
  if (upMaxed(who, k)) return Infinity;
  const P = W(who);
  return UPS.find(u => u.k === k).c(P.up[k]);
}

export function buyUp(who, k) {
  const P = W(who);
  if (!P || !P.alive || upMaxed(who, k)) return false;
  const cost = upCost(who, k);
  if (P.gold < cost) return false;
  P.gold -= cost;
  P.up[k]++;
  if (k === 'base') { P.max += 300; P.hp = Math.min(P.max, P.hp + 300); }
  return true;
}
