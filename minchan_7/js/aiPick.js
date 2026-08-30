import { TYPES, BUYABLE } from './types.js';
import { isFront } from './aiRead.js';

/**
 * 무엇을 살까.
 *
 * 값만 보고 사면 상대가 무엇을 데려왔든 늘 같은 것을 산다. 여기서는
 * **읽은 전선 위에서** 고른다 — 뭉쳐 오면 광역을, 두꺼운 것이 오면 꿰는
 * 것을, 멀리서 쏘면 방패를 앞에 세운다.
 *
 * 점수는 곱으로 쌓는다. 이유가 여럿이면 그만큼 세게 끌린다.
 */

const SPLASH = new Set(['bomber', 'frost', 'mage', 'giant', 'berserk']);
const PIERCE = new Set(['spear', 'hero', 'apc', 'titan']);
const BURST = new Set(['hero', 'berserk', 'mage', 'apc', 'titan']);
const HEAL = new Set(['medic', 'priest']);
const CHEAP_WALL = new Set(['sword', 'shield', 'spear']);

/**
 * @param R  readEdge 결과
 * @param P  플레이어
 * @param smart 0~1. 낮으면 상성을 절반만 본다 — 쉬움은 못 하게 막는 게
 *              아니라 서툴게 둔다.
 */
export function score(k, R, P, smart) {
  const T = TYPES[k];
  if (k === 'miner') return 0;
  let s = 1;
  const mul = m => { s *= 1 + (m - 1) * smart; };

  /* ── 상대가 무엇을 데려왔나 ── */
  if (R.cluster >= 3 && SPLASH.has(k)) mul(1.35 + Math.min(.6, R.cluster * .12));
  if (R.bigHp >= 2 && PIERCE.has(k)) mul(1.75);
  if (R.ranged >= 3 && k === 'shield') mul(2.0);
  if (R.ranged >= 3 && k === 'cavalry') mul(1.5);     // 붙어야 이긴다
  if (R.healer >= 1 && BURST.has(k)) mul(1.45);       // 회복을 넘겨야 죽는다
  if (R.melee >= 4 && k === 'spear') mul(1.6);        // 줄을 꿴다
  if (R.melee >= 4 && k === 'frost') mul(1.35);

  /* ── 내 진형이 성한가 ── */
  const bodies = Math.max(1, R.n);
  if (isFront(k)) {
    if (R.myFront / bodies < .45) mul(1.7);           // 몸으로 막을 것이 없다
  } else {
    if (R.myFront / bodies < .35) mul(.45);           // 뒷줄만 사면 다 죽는다
  }
  if (R.myRanged / bodies > .45 && (T.ranged || T.chain)) mul(.5);
  if (HEAL.has(k)) mul(R.n >= 6 && R.myHeal === 0 ? 2.2 : R.myHeal >= 2 ? .25 : 1);

  /* ── 지금 급한가 ── */
  // 성문 앞이면 **지금 세울 수 있는 몸**이 낫다. 아껴 둔 타이탄은 성이
  // 무너진 뒤에 나온다.
  if (R.urgency > .62) {
    if (CHEAP_WALL.has(k)) mul(1.9);
    if (T.cost > P.gold * .5) mul(.3);
  } else if (R.push > .78 && R.hold > .55) {
    // 밀어붙이는 중이면 굵은 것을 얹어 끝낸다.
    if (T.cost >= 500) mul(1.5);
  }
  return s;
}

/**
 * 살 수 있는 것 중에서 고른다.
 *
 * 점수 1등만 사면 같은 것만 줄줄이 나와 상대하기 지루하다. 상위 몇 개에서
 * 점수에 비례해 뽑는다.
 */
export function pick(R, P, B) {
  const budget = P.gold * B.spend;
  const opts = [];
  for (const k of BUYABLE) {
    if (k === 'miner') continue;
    const T = TYPES[k];
    if (T.cost > budget || T.cost > P.gold) continue;
    const s = score(k, R, P, B.smart);
    if (s > 0) opts.push({ k, s, cost: T.cost });
  }
  if (!opts.length) return null;
  // 같은 점수면 비싼 쪽이 대체로 세다.
  opts.sort((a, b) => (b.s - a.s) || (b.cost - a.cost));
  const top = opts.slice(0, Math.min(B.wide, opts.length));
  let sum = 0; for (const o of top) sum += o.s;
  let r = Math.random() * sum;
  for (const o of top) { r -= o.s; if (r <= 0) return o.k; }
  return top[0].k;
}
