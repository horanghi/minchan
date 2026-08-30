import { gy, ULT_CD, clamp } from './world.js';
import { G, W, dmgMul, foeGate, fall } from './state.js';
import { beep } from './sound.js';

/**
 * 지금 굴리고 있는 변.
 *
 * 불꽃·글자·화살·번개는 전부 변마다 따로 담긴다. 그런데 `puff(x,y,색,수)`
 * 같은 함수까지 변을 인자로 받게 하면 호출부 수십 곳이 지저분해진다.
 * 시뮬레이션은 **한 번에 변 하나씩** 순서대로 돌리므로, 그 앞에서 여기를
 * 한 번 맞춰 두면 그만이다.
 */
let CUR = null;
export function useEdge(E) { CUR = E; }

let _dt = 1 / 60;
export function setDt(v) { _dt = v; }
function dt0() { return _dt; }

/* ── 자국 ───────────────────────────────────────────────────────────── */

export function ring(x, y, c, size, life) {
  CUR.parts.push({ x, y, vx: 0, vy: 0, life, max: life, c, s: size, ring: 1 });
}
export function puff(x, y, c, n) {
  for (let i = 0; i < n; i++) CUR.parts.push({
    x, y, vx: (Math.random() - .5) * 190, vy: -Math.random() * 150 - 30,
    life: .35 + Math.random() * .25, c, s: 3 + Math.random() * 2,
  });
}
export function float(x, y, txt, c, life) {
  CUR.texts.push({ x, y, txt: String(txt), c, life, max: life });
}

/* ── 피해 ───────────────────────────────────────────────────────────── */

export function hit(t, d, at) {
  if (t.T) {
    if (t.dead) return;
    // **광부는 무적이다.** 무기도 없고 전선에도 오지 않는다. 광역기가
    // 스치기만 해도 경제가 통째로 날아가면, 싸우는 게 아니라 서로의
    // 광산을 지우는 게임이 된다.
    if (t.type === 'miner') {
      // 무적인 건 맞다. 다만 아무 반응이 없으면 화면에서는 '쓸려나간 것'과
      // 구분이 안 된다. 튕겨냈다는 걸 보여준다.
      t.ward = .5;
      puff(t.x, gy - t.size * .7 + t.yo, '#bfe6ff', 3);
      return;
    }
    t.hp -= d; t.hurt = .12;
    float(t.x, gy - t.size - 6 + t.yo, Math.round(d), '#1b2430', .55);
    puff(at || t.x, gy - t.size * .6 + t.yo, '#c9302c', 5);
    if (t.hp <= 0) {
      t.dead = .001; t.hp = 0;
      // 현상금은 **잡은 사람**에게 간다. 삼각전에서는 누가 잡았는지가
      // 곧 누가 앞서는지다.
      const k = t.killer;
      if (k && k !== t.own && W(k)) {
        W(k).gold += t.bounty; W(k).kills++; W(k).loot += t.bounty;
        float(t.x, gy - t.size - 18 + t.yo, '+' + t.bounty + 'G', '#c98f1a', 1.1);
        beep(1040, .07, .03);
      }
      beep(120, .14, .06);
    }
  } else {
    // 성문이다. 체력은 주인의 성에 그대로 꽂힌다.
    const before = t.hp;
    t.hp = Math.max(0, before - d);
    puff(t.x + (t.pos === 'p' ? 26 : -26), gy - 70, '#6b7785', 6);
    if (before > 0 && t.hp <= 0) fall(t.owner, t.lastHitBy || null);
  }
}

/** 때린 주인을 표시해 둔다 — 현상금과 막타 정복이 여기에 달렸다. */
export function mark(target, who) {
  if (target.T) target.killer = who; else target.lastHitBy = who;
}

/* ── 날아가는 것 ────────────────────────────────────────────────────── */

export function shoot(x, y, tgt, dmg, own, splash, slow, flat) {
  const tx = tgt.x, ty = tgt.T ? gy - tgt.size * .6 + tgt.yo : gy - 70;
  const dist = Math.hypot(tx - x, ty - y);
  // 기관총 탄은 곧고 빠르다. 화살처럼 포물선을 그리면 연사로 안 보인다.
  CUR.shots.push({
    x0: x, y0: y, x, y, tx, ty, tgt, dmg, own, splash, slow, flat, t: 0,
    dur: flat ? Math.max(.05, dist / 1900) : Math.max(.22, dist / 620),
  });
}

/* ── 자리잡기 ───────────────────────────────────────────────────────── */

export function standBehind(u, back, keep) {
  let front = null, fd = 1e9;
  for (const o of u.E.units) {
    if (o.own !== u.own || o.dead || !keep(o)) continue;
    const d = Math.abs(o.x - u.x); if (d < fd) { fd = d; front = o; }
  }
  const goal = front ? front.x - u.dir * back : gateOf(u) + u.dir * 90;
  if (Math.abs(goal - u.x) > 6) {
    u.x += Math.sign(goal - u.x) * spdOf(u) * dt0(); u.ph += dt0() * 9;
  }
}
function gateOf(u) { return u.dir > 0 ? u.E.gp.x : u.E.gq.x; }

/* ── 광역기 ─────────────────────────────────────────────────────────── */

export function blowUp(u, dam, dir) {
  const R = u.T.suicide;
  for (const o of u.E.units) {
    if (o.own === u.own || o.dead) continue;
    const d = Math.abs(o.x - u.x);
    if (d < R) { mark(o, u.own); hit(o, dam * (d < R * .5 ? 1 : .6), o.x); }
  }
  const b = foeGate(u);
  if (b.hp > 0 && Math.abs(b.x - u.x) < R + 30) { mark(b, u.own); hit(b, dam * .8, b.x); }
  ring(u.x, gy - u.size * .4 + u.yo, '#e8724a', R * .85, .4);
  ring(u.x, gy - u.size * .4 + u.yo, '#ffd77a', R * .5, .28);
  puff(u.x, gy - u.size * .4 + u.yo, '#e8894a', 22);
  G.shake = .3; u.hp = 0; u.dead = .001;
  beep(90, .3, .07);
}

export function lineHit(u, dir, reach, dam, nearMul, nearAt, noGate) {
  for (const o of u.E.units) {
    if (o.own === u.own || o.dead) continue;
    const off = (o.x - u.x) * dir;
    if (off > -40 && off < reach) {
      mark(o, u.own);
      hit(o, dam * (nearAt && off < nearAt ? nearMul : (nearAt ? 0.7 : 1)), o.x);
    }
  }
  if (noGate) return;
  const b = foeGate(u);
  const boff = (b.x - u.x) * dir;
  if (b.hp > 0 && boff > -40 && boff < reach) {
    mark(b, u.own);
    hit(b, dam * (nearAt && boff < nearAt ? nearMul : (nearAt ? 0.7 : 1)), b.x);
  }
}

/** 버서커 내려찍기 — 사거리 밖까지 닿지만 먼 쪽은 약하다. */
export function slamHit(u, dam, dir) {
  lineHit(u, dir, u.T.rng + u.T.slam, dam, 1, u.T.rng);
  ring(u.x + dir * (u.T.rng * .7), gy - 6, '#4a5568', u.T.slam * .8, .42);
  ring(u.x + dir * (u.T.rng * .7), gy - 6, '#c9a0a0', u.T.slam * .5, .3);
  puff(u.x + dir * u.T.rng * .8, gy - 14, '#8a94a3', 16);
  G.shake = .38; beep(80, .32, .075);
}

/** 용사 검기 — 직선을 관통한다. */
export function beamHit(u, dam, dir) {
  lineHit(u, dir, u.T.rng, dam);
  u.E.beams.push({ x1: u.x, x2: u.x + dir * u.T.rng, y: gy - u.size * .55 + u.yo, life: .3, max: .3 });
  G.shake = .12; beep(1180, .16, .05);
}

/**
 * 타이탄 — 세 동작을 돌아가며 쓴다.
 *
 * **레이저(520)와 코어 빔(780)은 성을 깎지 않는다.** 사거리가 변의 절반을
 * 넘어서, 타이탄 하나를 세워 두면 전선을 만들지 않고 상대 성만 녹인다.
 * 1:1 에서 그랬듯 삼각전도 전부 사람 대 사람이라 똑같이 막는다.
 * 대검(230)은 전선까지 걸어와야 닿으므로 그대로 둔다.
 */
export function titanCombo(u, dam, dir) {
  const st = (u.combo | 0) % 3;
  u.combo = (u.combo | 0) + 1;
  u.lastStage = st;

  if (st === 0) {
    lineHit(u, dir, 520, dam * .75, undefined, undefined, true);
    u.E.beams.push({
      x1: u.x + dir * u.size * .28, x2: u.x + dir * 520, y: gy - u.size * .60 + u.yo,
      life: .26, max: .26, c1: 'rgba(255,90,70,.45)', c2: '#ffd9c8', w: 16,
    });
    G.shake = .14; beep(1400, .16, .05);
  } else if (st === 1) {
    lineHit(u, dir, 230, dam * 1.45);
    ring(u.x + dir * 140, gy - 8, '#4a5568', 170, .42);
    ring(u.x + dir * 140, gy - 8, '#dfe8f0', 130, .36);
    puff(u.x + dir * 150, gy - 16, '#8a94a3', 26);
    G.shake = .45; beep(70, .4, .085);
  } else {
    lineHit(u, dir, 780, dam * 2.1, undefined, undefined, true);
    for (const [c1, c2, w] of [['rgba(120,240,255,.5)', '#f2ffff', 70], ['rgba(90,160,255,.35)', '#bfe9ff', 120]])
      u.E.beams.push({ x1: u.x, x2: u.x + dir * 780, y: gy - u.size * .52 + u.yo, life: .55, max: .55, c1, c2, w });
    G.shake = .45; beep(220, .6, .08);
    float(u.x + dir * 200, gy - u.size * .75 + u.yo, '코어 빔', '#8ff0ff', 1.3);
  }
}

/**
 * T맨 — 세 동작. 타이탄과 달리 **거리마다 성격이 다르다.**
 *
 * 건틀랫은 코앞만 후려치고, 딱풀미사일은 떨어진 자리를 붙잡아 두고,
 * 코어 빔은 전장을 가른다.
 */
export function tmanCombo(u, dam, dir, tgt) {
  const st = (u.combo | 0) % 3;
  u.combo = (u.combo | 0) + 1;
  u.lastStage = st;

  if (st === 0) {
    lineHit(u, dir, 300, dam * 2.0);
    ring(u.x + dir * 200, gy - 10, '#3a3222', 150, .38);
    ring(u.x + dir * 200, gy - 10, '#ffd86a', 105, .30);
    puff(u.x + dir * 205, gy - 18, '#c2a24a', 26);
    G.shake = .55; beep(64, .42, .09);
    float(u.x + dir * 150, gy - u.size * .70 + u.yo, '건틀랫', '#ffd86a', 1.0);
  } else if (st === 1) {
    const aim = tgt || foeGate(u);
    mark(aim, u.own);
    shoot(u.x + dir * u.size * .20, gy - u.size * .80 + u.yo, aim, dam * 1.1, u.own, 130, 3.2);
    G.shake = .18; beep(520, .28, .06);
    float(u.x + dir * 110, gy - u.size * .78 + u.yo, '딱풀미사일', '#ffb347', 1.2);
  } else {
    lineHit(u, dir, 900, dam * 2.4, undefined, undefined, true);
    for (const [c1, c2, w] of [['rgba(255,200,90,.5)', '#fff6d8', 80], ['rgba(255,150,60,.35)', '#ffe6a8', 140]])
      u.E.beams.push({ x1: u.x, x2: u.x + dir * 900, y: gy - u.size * .50 + u.yo, life: .6, max: .6, c1, c2, w });
    G.shake = .5; beep(200, .65, .085);
    float(u.x + dir * 220, gy - u.size * .72 + u.yo, '코어 빔', '#ffd86a', 1.3);
  }
}

/** 지금 낼 수 있는 속도. 얼어 있으면 절반이다. */
export function spdOf(u) { return u.T.spd * (u.slowT > 0 ? .5 : 1); }

/**
 * 연쇄 번개. 겨눈 적에서 가까운 적으로 튄다. 이미 맞은 적에게는 다시
 * 튀지 않는다 — 안 그러면 둘 사이를 오가며 같은 둘만 네 번 때린다.
 */
export function castChain(u, first, dam) {
  const yOf = o => o.T ? gy - o.size * .55 + o.yo : gy - 70;
  const nodes = [{ x: u.x, y: gy - u.size * .72 + u.yo }];
  const struck = new Set();
  let cur = first, d = dam;

  for (let i = 0; i < u.T.chain && cur; i++) {
    struck.add(cur);
    nodes.push({ x: cur.x, y: yOf(cur) });
    mark(cur, u.own); hit(cur, d, cur.x);
    puff(cur.x, yOf(cur), '#bfe6ff', 7);
    d *= .8;

    let next = null, best = 1e9;
    for (const o of u.E.units) {
      if (o.own === u.own || o.dead || struck.has(o)) continue;
      const dd = Math.abs(o.x - cur.x);
      if (dd <= u.T.chainRng && dd < best) { best = dd; next = o; }
    }
    cur = next;
  }
  if (nodes.length > 1) u.E.bolts.push({ path: jagged(nodes), t: .30, max: .30 });
}

function jagged(nodes) {
  const out = [nodes[0]];
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i], b = nodes[i + 1], seg = 5;
    for (let k = 1; k <= seg; k++) {
      const t = k / seg, last = (k === seg);
      out.push({
        x: a.x + (b.x - a.x) * t + (last ? 0 : (Math.random() - .5) * 15),
        y: a.y + (b.y - a.y) * t + (last ? 0 : (Math.random() - .5) * 15),
      });
    }
  }
  return out;
}

/**
 * 기관총 연사. 한 번 사격이 여덟 발이고, **탄마다 표적을 새로 고른다.**
 * 하나를 물고 늘어지면 그냥 사거리 긴 궁수다.
 */
export function mgTick(u, dt) {
  u.mgT -= dt;
  while (u.mgN > 0 && u.mgT <= 0) {
    u.mgT += u.T.mgGap; u.mgN--;
    const pool = [];
    for (const o of u.E.units) {
      if (o.own === u.own || o.dead || o.type === 'miner') continue;
      const fwd = (o.x - u.x) * u.dir;
      if (fwd > -40 && fwd <= u.T.rng) pool.push(o);
    }
    const b = foeGate(u);
    const bf = (b.x - u.x) * u.dir;
    if (!pool.length && b.hp > 0 && bf > -40 && bf <= u.T.rng) pool.push(b);
    if (!pool.length) { u.mgN = 0; return; }
    const t = pool[Math.floor(Math.random() * pool.length)];
    mark(t, u.own);
    shoot(u.x + u.dir * u.size * .46, gy - u.size * .42 + u.yo, t,
          u.dmg * dmgMul(u.own), u.own, 0, 0, true);
  }
}

/**
 * 화살비. **한 전선에만 떨어진다.**
 *
 * 병사는 두 전선 어디로든 보낼 수 있지만 화살비는 아니다. 버튼 한 번이
 * 두 전선을 동시에 쓸어 버리면 어디를 칠지 고르는 재미가 사라진다.
 *
 * 피해는 그 변 전체에 들어간다(화면 밖의 적도 맞는다). 화살 그림만
 * 전선 언저리에 뿌려서, 어디서 벌어지는 일인지가 보이게 한다.
 */
export function castRain(who, E) {
  const P = W(who);
  if (!P || !P.alive || P.rainCd > 0 || G.over || !E) return false;
  const w = Math.min(E.len, 900);
  E.rain.push({ t: 1.7, tick: 0, own: who, x0: clamp(E.front - w / 2, 0, E.len - w), w });
  P.rainCd = ULT_CD;
  beep(880, .3, .05);
  return true;
}
