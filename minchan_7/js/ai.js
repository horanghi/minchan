import { dirOn } from './world.js';
import { TYPES, BUYABLE } from './types.js';
import { G, edgesOf, minerCount } from './state.js';
import { buy } from './shop.js';
import { UPS, upCost, buyUp } from './upgrades.js';
import { castRain } from './combat.js';

/**
 * 컴퓨터 플레이어.
 *
 * **사람과 같은 규칙으로 논다.** minchan_6 의 적은 AI 가 아니라 공짜
 * 웨이브 스포너였다 — 지갑이 있는데 한 번도 쓰지 않았다. 1:1 에서는
 * 그래도 됐지만 셋이 붙는 판에서 하나만 공짜면 "쟤는 왜 공짜야" 가
 * 바로 보인다. 그래서 같은 금으로 같은 값을 치르고 산다.
 *
 * 난이도는 성향값이다. 쉬움은 광부를 적게 두고 돈을 아끼지 못하며
 * 화살비를 자주 잊는다 — 못 하게 막는 게 아니라 서툴게 둔다.
 */
export const BRAINS = {
  '쉬움':   { miners: 4, tick: 1.7, spend: .55, rain: .30, up: .20, wide: 5 },
  '보통':   { miners: 6, tick: 1.2, spend: .75, rain: .70, up: .45, wide: 4 },
  '어려움': { miners: 8, tick: 0.85, spend: .92, rain: 1.0, up: .75, wide: 3 },
};
export const LEVELS = Object.keys(BRAINS);

export function stepAI(P, dt) {
  const B = BRAINS[P.cpu] || BRAINS['보통'];
  if (!P.brain) P.brain = { t: Math.random() * B.tick, upT: 8 + Math.random() * 6 };
  const br = P.brain;
  br.t -= dt; br.upT -= dt;

  // 화살비는 손이 비어 있어도 쓴다. 사는 것과 경쟁시키면 영영 안 쓴다.
  const mine = edgesOf(P.id);
  if (!mine.length) return;
  if (P.rainCd <= 0 && Math.random() < B.rain * dt * 2) rain(P, mine, B);

  if (br.t > 0) return;
  br.t = B.tick * (.7 + Math.random() * .6);

  // 1) 광부가 먼저다. 금이 없으면 아무것도 못 산다.
  if (minerCount(P.id) < B.miners) { if (buy('miner', P.id) === true) return; }

  // 2) 가끔 강화에 붓는다. 병사만 사면 후반에 밀린다.
  //
  // **살 때가 되면 병사를 참는다.** 매 판 지갑의 대부분을 병사에 쏟으면
  // 강화 값에 닿을 만큼 돈이 모이는 순간이 오지 않는다 — 어려움일수록
  // 더 쏟아붓기 때문에, 놔두면 제일 센 상대가 강화를 하나도 못 산다.
  if (br.upT <= 0) {
    if (spendOnUp(P)) { br.upT = 12 + Math.random() * 8; return; }
    if (Math.random() < B.up) return;          // 이번 판은 모은다
    br.upT = 6 + Math.random() * 6;
  }

  // 3) 밀리는 전선에 병사를 보낸다.
  const k = choose(P, B);
  if (k) buy(k, P.id, weakest(P, mine));
}

/** 내 성문 쪽으로 가장 많이 밀린 전선. 급한 데부터 막는다. */
function weakest(P, edges) {
  let worst = edges[0], best = 1e9;
  for (const E of edges) {
    const d = dirOn(E, P.id);
    const gx = d > 0 ? E.gp.x : E.gq.x;
    const push = (E.front - gx) * d;      // 클수록 내가 밀고 있다
    if (push < best) { best = push; worst = E; }
  }
  return worst;
}

/**
 * 무엇을 살까.
 *
 * 지갑의 일부만 쓴다 — 전부 털면 비싼 것을 영영 못 산다. 살 수 있는 것들
 * 중 비싼 쪽 몇 개에서 골라, 한 병종만 줄줄이 나오는 지루한 상대가 되지
 * 않게 한다.
 */
function choose(P, B) {
  const budget = P.gold * B.spend;
  const opts = BUYABLE.filter(k => k !== 'miner' && TYPES[k].cost <= budget);
  if (!opts.length) return null;
  opts.sort((a, b) => TYPES[b].cost - TYPES[a].cost);
  const top = opts.slice(0, Math.min(B.wide, opts.length));
  return top[Math.floor(Math.random() * top.length)];
}

/** 가장 싼 강화를 하나 집는다. 고민하는 척할 이유가 없다. */
function spendOnUp(P) {
  const can = UPS.map(u => u.k).filter(k => upCost(P.id, k) <= P.gold);
  if (!can.length) return false;
  can.sort((a, b) => upCost(P.id, a) - upCost(P.id, b));
  return buyUp(P.id, can[0]) === true;
}

/** 적이 가장 많이 몰린 전선에 쏟는다. */
function rain(P, edges, B) {
  let best = null, n = -1;
  for (const E of edges) {
    let c = 0;
    for (const u of E.units) if (u.own !== P.id && !u.dead) c++;
    if (c > n) { n = c; best = E; }
  }
  if (best && n >= B.wide) castRain(P.id, best);
}

export function stepAll(dt) {
  for (const w of Object.keys(G.P)) {
    const P = G.P[w];
    if (P.alive && P.cpu) stepAI(P, dt);
  }
}
