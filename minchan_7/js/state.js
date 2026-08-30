import {
  PLAYERS, EDGE_IDS, EDGE_ENDS, EDGE_LEN, GATE_OFF, HOME_LEN, MERGED_MUL,
  BODY_GAP, ART, dirOn, gateXOn, foeOn,
} from './world.js';
import { TYPES } from './types.js';

/** 판 전체 상태. newGame 이 통째로 갈아끼운다(모듈 바인딩은 살아 있다). */
export let G = null;

/**
 * 시작 조건. 셋 다 똑같다 — 삼각전에서 비대칭은 그 자체로 불만이 된다.
 *
 * **성 체력은 1:1 때보다 낮다.** 성은 하나인데 전선이 둘이라, 전선 하나에
 * 걸리는 압력이 1:1 의 절반이다. minchan_6 수준(3200)을 그대로 두면 아무도
 * 성문에 닿지 못한다 — 셋을 15분 붙여 보니 성이 한 대도 안 깎이고 오히려
 * 성벽 보강으로 3800 까지 올라갔다.
 *
 * 그렇다고 1600 까지 내리면 반대로 **한 전선이 뚫리는 순간 1분 만에 끝난다.**
 * 두 방향에서 동시에 맞는 자리라 되돌릴 틈이 없다. 2400 이 그 사이다.
 */
export const SETUP = { gold: 520, castle: 2400, mineT: 2.2 };

let uid = 0;

/* ── 성문 ───────────────────────────────────────────────────────────
 *
 * 성은 플레이어당 하나인데 **두 변에서 동시에 두들겨 맞는다.** 그래서
 * 성문은 체력을 스스로 갖지 않고 주인의 성 체력을 들여다본다. 이렇게 해야
 * 전투 코드가 `t.hp -= d` 를 하던 그대로 돌아간다.
 */
function makeGate(E, pos) {
  return {
    E, pos, gate: true,
    get owner() { return pos === 'p' ? E.p : E.q; },
    get x() { return pos === 'p' ? GATE_OFF : E.len - GATE_OFF; },
    get hp() { return G.P[this.owner].hp; },
    set hp(v) { G.P[this.owner].hp = v; },
    get max() { return G.P[this.owner].max; },
  };
}

function makeEdge(id) {
  const [p, q] = EDGE_ENDS[id];
  const E = {
    id, p, q, len: EDGE_LEN, ruin: null, via: null,
    units: [], shots: [], beams: [], bolts: [], parts: [], texts: [], rain: [],
    front: EDGE_LEN / 2, turretT: { p: 0, q: 0 },
  };
  E.gp = makeGate(E, 'p');
  E.gq = makeGate(E, 'q');
  return E;
}

function makePlayer(id, cpu) {
  return {
    id, cpu,                       // cpu 가 null 이면 사람이 잡는다
    hp: SETUP.castle, max: SETUP.castle,
    gold: SETUP.gold,
    up: { dmg: 0, mine: 0, turret: 0, base: 0 },
    rainCd: 0, mined: 0, kills: 0, loot: 0,
    miners: [],
    alive: true, conqueror: null,
    brain: null,                   // AI 가 쓰는 메모
  };
}

/**
 * 판을 새로 연다.
 *
 * `seats` 는 `{a:null, b:'보통', c:'보통'}` 처럼 준다 — null 이면 사람,
 * 문자열이면 그 난이도의 컴퓨터다.
 */
export function newGame(seats) {
  uid = 0;
  G = {
    t: 0, over: false, winner: null, shake: 0,
    // 알릴 일이 생기면 여기 쌓고 UI 가 비운다. state 가 화면을 직접
    // 부르면 import 가 서로 물린다.
    events: [],
    P: {}, E: {},
    live: [...EDGE_IDS],
    view: 'ab',
  };
  for (const w of PLAYERS) G.P[w] = makePlayer(w, seats ? seats[w] : null);
  for (const id of EDGE_IDS) G.E[id] = makeEdge(id);
  return G;
}

/* ── 조회 ───────────────────────────────────────────────────────────── */

export function W(who) { return G.P[who]; }
export function liveEdges() { return G.live.map(id => G.E[id]); }
/** 이 사람이 물고 있는 변들. 보통 둘이다. */
export function edgesOf(who) {
  return liveEdges().filter(E => E.p === who || E.q === who);
}
export function minerCount(who) { return G.P[who].miners.length; }
/**
 * 광부가 한 번에 캐 오는 양.
 *
 * 두 가지가 얹힌다.
 *
 * **광맥이 갈수록 깊어진다.** 수입이 고정이면 셋이 서로 막기만 하다 판이
 * 끝나지 않는다 — 15분을 돌려도 양쪽 병력이 열 명 언저리에서 맴돌았다.
 *
 * **한 명이 무너지면 남은 둘의 광맥이 더 깊어진다.** 폐허가 된 땅을 나눠
 * 가진 값이다. 이게 없으면 둘만 남은 뒤 다시 2전선 대치가 되어 앞과 똑같이
 * 늘어진다 — 첫 함락은 10분 안에 나는데 마무리가 안 됐다.
 */
export function haul(who) {
  const left = PLAYERS.filter(w => G.P[w].alive).length;
  // 1.7 배는 과했다 — 먼저 하나가 죽는 순간 그때 건강하던 쪽이 그대로
  // 굴러가 뒤집을 여지가 없어진다. 1.3 은 반대로 마무리가 안 됐다(5판 중 3판).
  // 마무리를 돕되 판을 정해 버리지는 않는 선이 1.5 다.
  return (14 + G.P[who].up.mine * 5) * (1 + G.t / 240) * (left < 3 ? 1.5 : 1);
}
export function dmgMul(who) { return 1 + G.P[who].up.dmg * 0.10; }
/** 이 유닛이 이 변에서 두들기는 성문. */
export function foeGate(u) { return u.dir > 0 ? u.E.gq : u.E.gp; }
export function homeGate(u) { return u.dir > 0 ? u.E.gp : u.E.gq; }

/* ── 병사 ───────────────────────────────────────────────────────────── */

export function spawn(type, who, E, m) {
  const T = TYPES[type];
  m = m || { hp: 1, dmg: 1, size: 1 };
  const dir = dirOn(E, who);
  const lane = Math.floor(Math.random() * 7);
  const u = {
    id: ++uid, type, T, own: who, E, dir,
    x: gateXOn(E, who) + dir * 22,
    hp: T.hp * m.hp, max: T.hp * m.hp,
    dmg: T.dmg * (m.dmg || 1), size: T.size * (m.size || 1) * ART,
    cd: .3, ph: Math.random() * 6, sw: 0, dead: 0, hurt: 0, slowT: 0,
    chg: 0, combo: 0, ward: 0, mgN: 0, mgT: 0,
    lane, yo: (lane - 3) * 5,
    // 붙는 거리를 조금씩 달리한다. 전부 같은 지점에 서면 여럿이 겹쳐도
    // 한 사람처럼 보인다.
    spread: Math.max(0, Math.random() * Math.min(30, T.rng * .75, T.rng - BODY_GAP)),
    bounty: Math.round(T.gain * (.7 + (m.hp || 1) * .55)),
  };
  E.units.push(u);
  return u;
}

/**
 * 광부는 **변에 속하지 않는다.**
 *
 * 광산은 성문보다 뒤(삼각형 바깥)라 전장이 아니다. 그래서 광부는
 * 플레이어가 들고 있고, `hx`(성문에서 광산 쪽으로 떨어진 거리)만 갖는다.
 * 화면에 그릴 때 지금 보고 있는 변 기준으로 x 를 만들어 준다 — 덕분에
 * 광부는 두 전선 어느 쪽을 봐도 자기 성 뒤에 서 있다.
 */
export function spawnMiner(who) {
  const T = TYPES.miner;
  G.P[who].miners.push({
    id: ++uid, type: 'miner', T, own: who,
    hp: T.hp, max: T.hp, size: T.size * ART, dmg: 0,
    job: 'toMine', jobT: 0, carry: 0, hx: 0,
    ph: Math.random() * 6, sw: 0, dead: 0, hurt: 0, slowT: 0, ward: 0,
    lane: 3, yo: 0, x: 0, dir: 1,
  });
}

/* ── 무너짐과 정복 ──────────────────────────────────────────────────── */

/**
 * 한 사람이 무너진다.
 *
 * 그 사람이 물던 변 둘을 **폐허를 가운데 두고 하나의 긴 변으로 잇는다.**
 * 남은 둘은 이제 두 전선으로 싸운다 — 원래 있던 짧은 길과, 폐허를 거쳐
 * 도는 긴 길이다.
 *
 * 양쪽 모두 그 길을 쓴다. 한쪽만 지나갈 수 있는 길은 지형이 아니고,
 * 먼저 죽인 쪽만 유리해지면 눈덩이가 된다.
 */
export function fall(who, killer) {
  const P = G.P[who];
  if (!P.alive) return;
  P.alive = false; P.hp = 0;
  P.conqueror = killer && killer !== who ? killer : null;

  for (const id of EDGE_IDS) {
    for (const u of G.E[id].units) if (u.own === who && !u.dead) { u.dead = .001; u.hp = 0; }
  }
  P.miners.length = 0;
  G.events.push({ k: 'fall', who, by: P.conqueror });

  const mine = edgesOf(who);
  const survivors = PLAYERS.filter(x => G.P[x].alive);
  if (survivors.length <= 1) {
    G.over = true; G.winner = survivors[0] || null;
    return;
  }
  if (mine.length === 2) { mergeEdges(mine[0], mine[1], who); G.events.push({ k: 'merge', who }); }
  else for (const E of mine) drop(E);
}

function drop(E) { G.live = G.live.filter(i => i !== E.id); }

function mergeEdges(E1, E2, gone) {
  const s1 = foeOn(E1, gone), s2 = foeOn(E2, gone);
  if (s1 === s2) { drop(E1); drop(E2); return; }   // 남은 하나가 양쪽이면 길이 아니다

  const len = Math.round(EDGE_LEN * MERGED_MUL), mid = Math.round(len / 2);
  // s1 쪽 끝을 0, 폐허를 mid, s2 쪽 끝을 len 으로 편다.
  const from1 = x => (E1.p === s1 ? x : E1.len - x) / E1.len * mid;
  const from2 = x => mid + (E2.p === gone ? x : E2.len - x) / E2.len * (len - mid);

  const kept = [];
  for (const u of E1.units) {
    if (u.dead || u.own !== s1) continue;
    u.x = from1(u.x); u.dir = 1; kept.push(u);
  }
  for (const u of E2.units) {
    if (u.dead || u.own !== s2) continue;
    u.x = from2(u.x); u.dir = -1; u.E = E1; kept.push(u);
  }

  E1.p = s1; E1.q = s2; E1.len = len; E1.ruin = mid; E1.via = gone;
  E1.units = kept;
  // 날아가던 것들의 좌표는 옛 변의 것이다. 그대로 두면 엉뚱한 데서 터진다.
  E1.shots.length = 0; E1.beams.length = 0; E1.bolts.length = 0; E1.rain.length = 0;
  E1.parts.length = 0; E1.texts.length = 0;
  E1.front = mid; E1.turretT = { p: 0, q: 0 };
  drop(E2);
  if (G.view === E2.id) G.view = E1.id;
}
