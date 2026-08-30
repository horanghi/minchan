import { GATE_OFF, dirOn, foeOn, clamp } from './world.js';
import { TYPES } from './types.js';

/**
 * 전선을 읽는다.
 *
 * 값만 보고 사면 상대가 무엇을 데려왔든 늘 같은 것을 산다. 무엇이 얼마나
 * 와 있는지, 어디까지 밀렸는지를 먼저 숫자로 만들어 두고 그 위에서 고른다.
 */

/** 유닛 하나의 무게. 값이 곧 전투력에 가깝게 매겨져 있어 값을 쓴다. */
function weight(u) { return (u.T.cost || 70) * (u.hp / u.max); }

/** 가장 붐비는 창(window) 안의 적 수. 광역기를 살 이유가 여기서 나온다. */
function clumped(xs, win) {
  if (xs.length < 2) return xs.length;
  xs.sort((a, b) => a - b);
  let best = 1, j = 0;
  for (let i = 0; i < xs.length; i++) {
    while (xs[i] - xs[j] > win) j++;
    best = Math.max(best, i - j + 1);
  }
  return best;
}

/** 이 유닛이 앞에 서는 쪽인가. 몸으로 막을 것이 없으면 뒤가 다 죽는다. */
export function isFront(t) {
  const T = TYPES[t];
  return !T.worker && !T.ranged && !T.medic && !T.healer && !T.chain && !T.summon && !T.mg;
}

export function readEdge(E, who) {
  const foe = foeOn(E, who);
  const d = dirOn(E, who);
  const myGate = d > 0 ? E.gp.x : E.gq.x;
  const span = Math.max(1, E.len - GATE_OFF * 2);

  let mine = 0, theirs = 0, n = 0, tn = 0;
  let bigHp = 0, ranged = 0, melee = 0, healer = 0;
  let myFront = 0, myRanged = 0, myHeal = 0;
  let nearest = 1e9;
  const foeX = [];

  for (const u of E.units) {
    if (u.dead) continue;
    if (u.own === who) {
      mine += weight(u); n++;
      if (isFront(u.type)) myFront++;
      if (u.T.ranged || u.T.chain || u.T.mg) myRanged++;
      if (u.T.medic || u.T.healer) myHeal++;
      continue;
    }
    theirs += weight(u); tn++;
    foeX.push(u.x);
    const dist = (u.x - myGate) * d;
    if (dist < nearest) nearest = dist;
    if (u.T.hp >= 700) bigHp++;
    if (u.T.ranged || u.T.chain || u.T.mg) ranged++;
    else if (u.T.rng <= 90) melee++;
    if (u.T.medic || u.T.healer) healer++;
  }

  const push = clamp(((E.front - myGate) * d) / span, 0, 1);
  const hold = mine / (mine + theirs + 1);      // 전선을 쥐고 있는 정도
  // **급한 정도.** 밀렸는가(0.55) · 병력이 밀리는가(0.3) · 성문 앞인가(0.15)
  const atGate = nearest < 300 ? 1 : nearest < 620 ? .5 : 0;
  const urgency = clamp((1 - push) * .55 + (1 - hold) * .3 + atGate * .15, 0, 1);

  return {
    E, id: E.id, foe, d, myGate, push, hold, urgency,
    mine, theirs, n, tn, nearest,
    cluster: clumped(foeX, 130),
    bigHp, ranged, melee, healer,
    myFront, myRanged, myHeal,
  };
}
