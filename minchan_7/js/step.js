import { PLAYERS, HOME_LEN, BODY_GAP, gy } from './world.js';
import {
  G, W, SETUP, haul, dmgMul, foeGate, liveEdges, spawn,
} from './state.js';
import {
  useEdge, setDt, hit, mark, shoot, puff, float, ring, spdOf, standBehind,
  blowUp, lineHit, slamHit, beamHit, titanCombo, tmanCombo, castChain, mgTick,
} from './combat.js';
import { beep } from './sound.js';

export function step(dt) {
  if (G.over) return;
  setDt(dt);
  G.t += dt;
  if (G.shake > 0) G.shake = Math.max(0, G.shake - dt);

  for (const w of PLAYERS) if (G.P[w].alive) stepPlayer(G.P[w], dt);
  // 굴리는 도중 성이 무너지면 변이 합쳐지며 목록이 바뀐다. 미리 뜬 목록을
  // 그대로 돌면 **이미 사라진 변을 한 번 더 굴린다.** 매번 다시 확인한다.
  for (const E of liveEdges()) {
    if (!G.live.includes(E.id)) continue;
    useEdge(E); stepEdge(E, dt);
  }
}

/* ── 살림 ───────────────────────────────────────────────────────────── */

function stepPlayer(P, dt) {
  P.gold += 1.2 * dt;
  if (P.rainCd > 0) P.rainCd -= dt;

  for (const m of P.miners) {
    m.hurt = Math.max(0, m.hurt - dt);
    if (m.ward > 0) m.ward -= dt;
    const sp = m.T.spd;
    if (m.job === 'toMine') {
      m.hx = Math.min(HOME_LEN, m.hx + sp * dt); m.ph += dt * 9;
      if (m.hx >= HOME_LEN - 1) { m.job = 'mining'; m.jobT = SETUP.mineT; }
    } else if (m.job === 'mining') {
      m.jobT -= dt;
      m.sw = (Math.sin(G.t * 11 + m.id) + 1) / 2;
      if (m.jobT <= 0) { m.job = 'toBase'; m.carry = haul(P.id); }
    } else {
      m.hx = Math.max(0, m.hx - sp * dt); m.ph += dt * 9;
      if (m.hx <= 0) {
        P.gold += m.carry; P.mined += m.carry;
        m.carry = 0; m.job = 'toMine';
        beep(880, .05, .02);
      }
    }
  }
}

/* ── 변 하나 ────────────────────────────────────────────────────────── */

function stepEdge(E, dt) {
  turrets(E, dt);

  const us = E.units;
  for (const u of us) {
    if (u.dead) { u.dead += dt; continue; }
    u.hurt = Math.max(0, u.hurt - dt);
    if (u.slowT > 0) u.slowT -= dt;
    if (u.ward > 0) u.ward -= dt;
    if (u.mgN > 0) mgTick(u, dt);

    const dir = u.dir;

    /* 사령술사 — 해골병을 불러내고 전선 뒤에 선다 */
    if (u.T.summon) {
      u.cd -= dt;
      if (u.cd <= 0) {
        u.cd = u.T.atk; u.sw = 1;
        for (let i = 0; i < 2; i++) {
          const n = spawn('bone', u.own, E);
          n.x = u.x - dir * (i ? 14 : -10);   // 본진에서 걸어오면 소환이 아니다
        }
        for (let i = 0; i < 8; i++) E.parts.push({
          x: u.x + (Math.random() - .5) * 30, y: gy - 20,
          vx: 0, vy: -90 - Math.random() * 70, life: .6, c: '#9a5fd0', s: 3,
        });
        float(u.x, gy - u.size - 10 + u.yo, '소환', '#9a5fd0', .9);
        beep(210, .18, .04);
      }
      standBehind(u, 90, o => !o.T.summon);
      u.sw = Math.max(0, u.sw - dt * 3.4);
      continue;
    }

    /* 사제 — 가장 많이 다친 아군 하나를 크게 고친다 */
    if (u.T.healer) {
      let worst = null, wd = 1e9;
      for (const o of us) {
        if (o.own !== u.own || o.dead || o.hp >= o.max) continue;
        const d = Math.abs(o.x - u.x); if (d < wd) { wd = d; worst = o; }
      }
      if (worst && wd <= u.T.rng) {
        u.cd -= dt;
        if (u.cd <= 0) {
          u.cd = u.T.atk; u.sw = 1;
          worst.hp = Math.min(worst.max, worst.hp + u.T.heal);
          float(worst.x, gy - worst.size - 6 + worst.yo, '+' + u.T.heal, '#3fa96b', .8);
          for (let i = 0; i < 4; i++) E.parts.push({
            x: worst.x + (Math.random() - .5) * 18, y: gy - worst.size * .5 + worst.yo,
            vx: 0, vy: -70 - Math.random() * 50, life: .5, c: '#5fd39b', s: 3,
          });
          beep(980, .09, .025);
        }
      } else standBehind(u, 70, o => !o.T.healer);
      u.sw = Math.max(0, u.sw - dt * 3.4);
      continue;
    }

    /* 표적 — 광부는 겨누지 않는다(애초에 변에 없다). */
    let tgt = null, td = 1e9, best = 1e9;
    for (const o of us) {
      if (o.own === u.own || o.dead) continue;
      const d = Math.abs(o.x - u.x);
      const sc = d + Math.abs(o.lane - u.lane) * 16;
      if (sc < best && (o.x - u.x) * dir > -40) { best = sc; td = d; tgt = o; }
    }
    const gate = foeGate(u);
    const bd = Math.abs(gate.x - u.x);
    if (gate.hp > 0 && bd < td) { tgt = gate; td = bd; }

    const reach = u.T.rng - u.spread;
    if (tgt && td <= reach) {
      u.cd -= dt;
      if (u.cd <= 0) {
        u.cd = u.T.atk; u.sw = 1;
        let dam = u.dmg * dmgMul(u.own);

        // 로마 기병 — 달려온 만큼이 첫 타에 실린다.
        if (u.T.charge && u.chg > 1.1) {
          dam *= 2.6;
          ring(tgt.x, gy - (tgt.size || 60) * .55 + (tgt.yo || 0), '#f0d27a', 9, .3);
          puff(tgt.x, gy - (tgt.size || 60) * .5 + (tgt.yo || 0), '#f0d27a', 8);
          beep(240, .16, .055);
        }
        u.chg = 0;

        if (u.T.suicide) { blowUp(u, dam, dir); }
        else if (u.T.tman) { tmanCombo(u, dam, dir, tgt); }
        else if (u.T.titan) { titanCombo(u, dam, dir); }
        else if (u.T.slam) { slamHit(u, dam, dir); }
        else if (u.T.beam) { beamHit(u, dam, dir); }
        else if (u.T.medic) {
          // 때리지 않고 고친다. 자기 자신도 포함이다.
          let n = 0;
          for (const o of us) {
            if (o.own !== u.own || o.dead || o.hp >= o.max) continue;
            if (Math.abs(o.x - u.x) > u.T.healRng) continue;
            o.hp = Math.min(o.max, o.hp + u.T.heal); n++;
          }
          if (n) float(u.x, gy - u.size - 6 + u.yo, '+' + u.T.heal, '#7fd39b', .6);
        }
        else if (u.T.mg) { u.mgN = u.T.mg; u.mgT = 0; }
        else if (u.T.chain) castChain(u, tgt, dam);
        else if (u.T.ranged) {
          mark(tgt, u.own);
          shoot(u.x + dir * 10, gy - u.size * .66 + u.yo, tgt, dam, u.own, u.T.splash, u.T.slow);
        }
        else if (u.T.pierce) {
          // **앞쪽만** 꿴다. 거인의 광역은 양옆이지만 창은 방향이 있다.
          for (const o of us) {
            if (o.own === u.own || o.dead) continue;
            const fwd = (o.x - u.x) * dir;
            if (fwd > -6 && fwd <= u.T.rng + 6) { mark(o, u.own); hit(o, dam, o.x); }
          }
          const bf = (gate.x - u.x) * dir;
          if (gate.hp > 0 && bf > -6 && bf <= u.T.rng + 6) { mark(gate, u.own); hit(gate, dam, gate.x); }
        }
        else if (u.type === 'giant') {
          for (const o of us) {
            if (o.own === u.own || o.dead) continue;
            if (Math.abs(o.x - u.x) <= u.T.rng + 6) { mark(o, u.own); hit(o, dam, o.x); }
          }
          if (gate.hp > 0 && Math.abs(gate.x - u.x) <= u.T.rng + 6) { mark(gate, u.own); hit(gate, dam, gate.x); }
        }
        else { mark(tgt, u.own); hit(tgt, dam, u.x + dir * u.T.rng * .8); }

        // 암흑기사 — 준 만큼 회복한다.
        if (u.T.drain && !u.dead) {
          const heal = Math.round(dam * u.T.drain);
          u.hp = Math.min(u.max, u.hp + heal);
          float(u.x, gy - u.size - 8 + u.yo, '+' + heal, '#9a5fd0', .6);
        }
        beep(u.T.chain ? 1180 : (u.T.medic ? 740 : (u.T.mg ? 300 : (u.T.ranged ? 520 : 190))), .05, .05);
      }
    }

    // **때리는 것과 걷는 것은 따로다.** 얼마나 다가갈지는 stand 가 정하고,
    // 없으면 사거리까지다.
    if (td > (u.T.stand || reach)) {
      // 아군끼리는 막지 않는다 — 겹쳐 싸운다. 적군은 뚫고 지나가지 못한다.
      let blocked = false;
      for (const o of us) {
        if (o.dead || o.own === u.own) continue;
        const gap = (o.x - u.x) * dir;
        if (gap > 0 && gap < BODY_GAP) { blocked = true; break; }
      }
      if (!blocked) { u.x += dir * spdOf(u) * dt; u.ph += dt * 9; u.chg += dt; }
    }
    u.sw = Math.max(0, u.sw - dt * 3.4);
  }

  shots(E, dt);
  rain(E, dt);
  decay(E, dt);
  frontOf(E);
  E.units = E.units.filter(u => u.dead < 1.3);
}

/* ── 성문 포탑 ──────────────────────────────────────────────────────── */

function turrets(E, dt) {
  for (const pos of ['p', 'q']) {
    const g = pos === 'p' ? E.gp : E.gq;
    const P = W(g.owner);
    if (!P.alive || P.up.turret <= 0) { E.turretT[pos] = .25; continue; }
    E.turretT[pos] -= dt;
    if (E.turretT[pos] > 0) continue;
    const d = pos === 'p' ? 1 : -1, bx = g.x;
    let tgt = null, bestD = 1e9;
    for (const u of E.units) {
      if (u.own === g.owner || u.dead) continue;
      const off = (u.x - bx) * d;
      if (off > 0 && off < 340 && off < bestD) { bestD = off; tgt = u; }
    }
    if (tgt) {
      mark(tgt, g.owner);
      shoot(bx + d * 8, gy - 108, tgt, 12 + P.up.turret * 8, g.owner);
      E.turretT[pos] = Math.max(.45, 1.5 - P.up.turret * .12);
    } else E.turretT[pos] = .25;
  }
}

/* ── 날아가던 것 ────────────────────────────────────────────────────── */

function shots(E, dt) {
  for (const s of E.shots) {
    s.t += dt;
    // 1 을 넘기지 않는다. 넘긴 채로 자리를 계산하면 **목표를 지나친 곳에서**
    // 광역이 터진다 — 한 프레임이 길면 30px 넘게 밀린다.
    const k = Math.min(1, s.t / s.dur);
    s.x = s.x0 + (s.tx - s.x0) * k;
    s.y = s.y0 + (s.ty - s.y0) * k - (s.flat ? 0 : Math.sin(Math.PI * k) * 38);
    if (k >= 1) {
      s.done = 1;
      if (s.splash) {
        // 떨어진 자리를 친다. 겨눈 적이 이미 죽었어도 폭발은 일어난다.
        for (const o of E.units) {
          if (o.own === s.own || o.dead) continue;
          if (Math.abs(o.x - s.x) > s.splash) continue;
          mark(o, s.own); hit(o, s.dmg, s.x);
          if (s.slow) o.slowT = s.slow;
        }
        for (const g of [E.gp, E.gq]) {
          if (g.owner === s.own || g.hp <= 0) continue;
          if (Math.abs(g.x - s.x) <= s.splash) { mark(g, s.own); hit(g, s.dmg, s.x); }
        }
        puff(s.x, s.y, s.slow ? '#9fe0ff' : '#e8b23a', s.slow ? 16 : 12);
      }
      else if (s.tgt && !s.tgt.dead) { mark(s.tgt, s.own); hit(s.tgt, s.dmg, s.x); }
      puff(s.x, s.y, '#1b2430', 4);
    }
  }
  E.shots = E.shots.filter(s => !s.done);
}

/**
 * 화살비는 **한 전선에만** 떨어진다.
 *
 * 병사는 두 전선 어디로든 보낼 수 있지만 화살비는 아니다. 셋이 붙는 판에서
 * 버튼 한 번이 두 전선을 동시에 쓸어 버리면, 어디를 칠지 고르는 재미가
 * 통째로 사라진다.
 */
function rain(E, dt) {
  for (const r of E.rain) {
    r.t -= dt; r.tick -= dt;
    if (r.tick <= 0) {
      r.tick = .12;
      for (let i = 0; i < 8; i++) E.parts.push({
        x: r.x0 + Math.random() * r.w, y: gy - 260, vx: 0, vy: 640,
        life: .42, c: '#1b2430', s: 9, arrow: 1,
      });
      for (const u of E.units) {
        if (u.own === r.own || u.dead) continue;
        mark(u, r.own); hit(u, 16 * dmgMul(r.own), u.x);
      }
    }
    if (r.t <= 0) r.done = 1;
  }
  E.rain = E.rain.filter(r => !r.done);
}

function decay(E, dt) {
  for (const p of E.parts) {
    p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt;
    if (!p.arrow && !p.ring) p.vy += 520 * dt;
    if (!p.ring && p.y > gy) { p.y = gy; p.life = Math.min(p.life, .1); }
  }
  E.parts = E.parts.filter(p => p.life > 0);
  for (const b of E.bolts) b.t -= dt;
  E.bolts = E.bolts.filter(b => b.t > 0);
  for (const b of E.beams) b.life -= dt;
  E.beams = E.beams.filter(b => b.life > 0);
  for (const t of E.texts) { t.life -= dt; t.y -= dt * 34; }
  E.texts = E.texts.filter(t => t.life > 0);
}

/** 지표용 전선 — 양쪽 선두의 한가운데다. */
function frontOf(E) {
  let tipP = null, tipQ = null;
  for (const u of E.units) {
    if (u.dead) continue;
    if (u.own === E.p) { if (tipP === null || u.x > tipP) tipP = u.x; }
    else if (u.own === E.q) { if (tipQ === null || u.x < tipQ) tipQ = u.x; }
  }
  if (tipP === null) tipP = E.gp.x;
  if (tipQ === null) tipQ = E.gq.x;
  E.front = (tipP + tipQ) / 2;
}
