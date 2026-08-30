import { clamp } from './world.js';
import { TYPES } from './types.js';
import { G, W, edgesOf, minerCount } from './state.js';
import { buy } from './shop.js';
import { UPS, upCost, buyUp, upMaxed } from './upgrades.js';
import { castRain } from './combat.js';
import { readEdge } from './aiRead.js';
import { pick } from './aiPick.js';

/**
 * 컴퓨터 플레이어.
 *
 * **사람과 같은 규칙으로 논다.** 같은 지갑, 같은 값, 같은 화살비다.
 *
 * 판단은 세 걸음이다. 먼저 두 전선을 읽고(`aiRead`), 어디가 급한지 정하고,
 * 그 전선에 맞는 병종을 고른다(`aiPick`). 값만 보고 사던 1단계와 달리
 * 상대가 무엇을 데려왔는지가 결정에 들어간다.
 *
 * 난이도는 성향값이다. `smart` 가 낮으면 상성을 절반만 본다 — 못 하게
 * 막는 게 아니라 서툴게 둔다.
 */
export const BRAINS = {
  // 쉬움은 **정말 쉬워야 한다.** 상성을 거의 안 보고, 손이 느리고, 광부를
  // 적게 두고, 화살비는 어지간히 몰리기 전엔 잊는다.
  '쉬움':   { miners: 3, tick: 2.4, spend: .45, rain: 1500, up: .12, wide: 6, smart: .12, save: 0 },
  '보통':   { miners: 6, tick: 1.1, spend: .78, rain: 600, up: .5, wide: 3, smart: .8, save: .35 },
  '어려움': { miners: 8, tick: .8, spend: .93, rain: 420, up: .8, wide: 2, smart: 1, save: .6 },
};
export const LEVELS = Object.keys(BRAINS);

export function stepAll(dt) {
  for (const w of Object.keys(G.P)) {
    const P = G.P[w];
    if (P.alive && P.cpu) stepAI(P, dt);
  }
}

export function stepAI(P, dt) {
  // `P.tune` 으로 성향값 일부를 덮어쓸 수 있다. 어느 판단이 값을 하는지
  // 가르려면 같은 판에서 서로 다른 성향을 붙여 봐야 한다.
  const B = P.tune ? { ...(BRAINS[P.cpu] || BRAINS['보통']), ...P.tune }
                   : (BRAINS[P.cpu] || BRAINS['보통']);
  if (!P.brain) P.brain = { t: Math.random() * B.tick, upT: 8 + Math.random() * 6, rT: 0 };
  const br = P.brain;
  br.t -= dt; br.upT -= dt; br.rT -= dt;

  // 전선을 읽는 데는 값이 든다(유닛을 훑고 뭉침을 재느라 정렬까지 한다).
  // 살 때도 아니고 화살비를 볼 때도 아니면 여기서 끝낸다 — 대부분의
  // 프레임이 그렇다. 재 보면 초당 60번이 3번으로 준다.
  const wantBuy = br.t <= 0;
  const wantRain = P.rainCd <= 0 && br.rT <= 0;
  if (!wantBuy && !wantRain) return;
  if (wantRain) br.rT = .4;

  const edges = edgesOf(P.id);
  if (!edges.length) return;
  const reads = edges.map(E => readEdge(E, P.id));

  // 화살비는 손이 비어 있어도 쓴다. 사는 것과 경쟁시키면 영영 안 쓴다.
  if (wantRain) rain(P, reads, B);

  if (!wantBuy) return;
  br.t = B.tick * (.7 + Math.random() * .6);

  // 1) 광부가 먼저다. 금이 없으면 아무것도 못 산다.
  //    다만 성문 앞까지 밀렸으면 광부를 늘릴 때가 아니다.
  const panic = reads.some(r => r.urgency > .72);
  if (!panic && minerCount(P.id) < B.miners && buy('miner', P.id) === true) return;

  // 2) 강화. 살 때가 되면 병사를 참는다 — 매 판 지갑을 병사에 쏟으면
  //    강화 값에 닿을 만큼 돈이 모이는 순간이 오지 않는다.
  if (br.upT <= 0 && !panic) {
    if (spendOnUp(P, reads)) { br.upT = 11 + Math.random() * 7; return; }
    if (Math.random() < B.up) return;
    br.upT = 6 + Math.random() * 6;
  }

  // 3) 어느 전선에 보낼까.
  const R = target(reads, B);

  // 4) 굵은 것을 위해 참을 때가 있다. 전선이 성하고 돈이 붙는 중이면
  //    지금 검사 하나를 세우는 것보다 다음 판에 버서커가 낫다.
  if (B.save && R.urgency < .38 && R.hold > .6 && P.gold < 700 && Math.random() < B.save) return;

  const k = pick(R, P, B);
  if (k) buy(k, P.id, R.E);
}

/**
 * 어느 전선을 손볼까.
 *
 * 늘 밀리는 쪽만 보태면 이기고 있던 쪽이 굳어 버려 판이 안 끝난다.
 * 급하면 막고, 급하지 않은데 밀고 있으면 끝내러 간다.
 */
function target(reads, B) {
  const hot = reads.filter(r => r.urgency > .62);
  if (hot.length) return hot.sort((a, b) => b.urgency - a.urgency)[0];
  const win = reads.filter(r => r.push > .72 && r.hold > .55);
  if (win.length) return win.sort((a, b) => b.push - a.push)[0];
  // 그밖에는 급한 정도에 비례해 뽑는다. 한쪽을 아예 비워 두지 않는다.
  let sum = 0; for (const r of reads) sum += r.urgency + .12;
  let x = Math.random() * sum;
  for (const r of reads) { x -= r.urgency + .12; if (x <= 0) return r; }
  return reads[0];
}

/**
 * 무엇을 강화할까. 싼 것부터 집던 1단계와 달리 **지금 아쉬운 것**을 산다.
 */
function spendOnUp(P, reads) {
  const wants = [];
  const hurt = P.hp / P.max;
  const pressed = reads.some(r => r.nearest < 340);
  const army = reads.reduce((s, r) => s + r.mine, 0);

  if (hurt < .45) wants.push('base');            // 성이 위태롭다
  if (pressed && P.up.turret < 3) wants.push('turret');
  if (G.t < 150 && P.up.mine < 3) wants.push('mine');
  if (army > 900) wants.push('dmg');             // 부대가 크면 배율이 값을 한다
  for (const u of UPS) wants.push(u.k);          // 그래도 남으면 아무거나

  for (const k of wants) if (!upMaxed(P.id, k) && upCost(P.id, k) <= P.gold) return buyUp(P.id, k) === true;
  return false;
}

/**
 * 화살비를 어디에 쏟을까.
 *
 * 머릿수가 아니라 **잡을 값**으로 고른다. 해골병 여섯보다 버서커 하나가
 * 값지다. 성문 앞이면 값을 더 쳐준다 — 막는 데 쓰는 한 방이다.
 */
function rain(P, reads, B) {
  let best = null, bestV = 0;
  for (const r of reads) {
    let v = 0;
    for (const u of r.E.units) {
      if (u.dead || u.own === P.id || u.type === 'miner') continue;
      v += (u.T.cost || 70) * clamp(u.hp / u.max, 0, 1);
    }
    v *= 1 + r.urgency * .8;
    if (v > bestV) { bestV = v; best = r; }
  }
  if (best && bestV >= B.rain) castRain(P.id, best.E);
}
