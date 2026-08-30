import {
  ctx, cw, ch, dpr, camX, camY, zoom, zoomFit, TEAM, ME,
  GATE_OFF, MINE_OFF, EDGE_LEN, laneX,
  setGeom, setCam, setZoom, setFit, clamp,
} from './world.js';
import { G, W, liveEdges } from './state.js';
import { drawUnit } from './unitArt.js';

let cv = null;
export function attach(canvas) { cv = canvas; }

/* ── 줄 자리 ─────────────────────────────────────────────────────────
 *
 * 길 셋을 나란히 눕힌다. 매 프레임 살아 있는 변만 골라 위에서 아래로
 * 줄을 세운다 — 하나가 무너져 둘이 되면 자연히 가운데로 모인다.
 */
let rows = {};

/**
 * 줄 간격.
 *
 * 배율은 **폭**이 정한다(길이 1560 이니 폰에서는 늘 폭이 먼저 찬다). 그러면
 * 세로가 많이 남는데, 간격을 그만큼 벌려 남는 자리를 쓴다. 화면이 넓어지면
 * 자연히 좁아진다.
 */
/** 배너가 첫 줄을 가리지 않게 위를 이만큼(화면 px) 비워 둔다. */
const TOP_PAD = 74;
function gapFor(n) {
  const zw = cw / (EDGE_LEN + 300);
  return clamp(((ch - TOP_PAD) / Math.max(1e-6, zw) - 300) / Math.max(1, n), 520, 1200);
}
/**
 * 줄을 세운다.
 *
 * 두 가지를 맞춘다.
 *
 * **내 전선을 위로.** 내가 지켜야 할 둘이 먼저 눈에 들어와야 한다. 내가
 * 끼지 않은 싸움은 아래에 둔다.
 *
 * **내 성은 늘 왼쪽.** 변마다 내가 p 였다 q 였다 하는데, 그대로 그리면 줄마다
 * 내 성이 왼쪽이었다 오른쪽이었다 해서 **미는 방향이 뒤집힌다.** 내가
 * 오른쪽 끝인 변은 좌우를 뒤집어 눕힌다.
 */
let flips = {};
function layout() {
  const all = G ? liveEdges() : [];
  const mine = all.filter(E => E.p === ME || E.q === ME);
  const rest = all.filter(E => !mine.includes(E));
  const live = [...mine, ...rest];
  const g = gapFor(live.length || 3);
  rows = {}; flips = {};
  live.forEach((E, i) => {
    rows[E.id] = (i - (live.length - 1) / 2) * g;
    flips[E.id] = E.q === ME;
  });
  return live;
}
/** 이 줄이 뒤집혀 있나. 뒤집혔으면 화면 왼쪽이 q 다. */
function flipped(E) { return !!flips[E.id]; }
/** 뒤집힘을 반영한 좌우 부호. */
function sgn(E) { return flipped(E) ? -1 : 1; }
/** 변 위의 (거리, 지면 위 높이) 를 화면 좌표로. */
function pt(E, x, h) {
  return { x: laneX(E, x) * sgn(E), y: (rows[E.id] || 0) + (h || 0) };
}

/* ── 카메라 ─────────────────────────────────────────────────────────── */

function bounds() {
  // 판이 열리기 전에도 화면 크기는 잡아야 한다. 그때는 기본 세 줄로 친다.
  const live = G ? liveEdges() : [];
  const wide = live.length ? Math.max(EDGE_LEN, ...live.map(E => E.len)) : EDGE_LEN;
  const n = live.length || 3;
  return { w: wide + 300, h: n * gapFor(n) + 300 };
}
function fitZoom() {
  const b = bounds();
  return Math.min(cw / b.w, ch / b.h);
}

export function resize() {
  const r = cv.getBoundingClientRect();
  const d = Math.min(devicePixelRatio || 1, 2);
  cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d);
  setGeom({ dpr: d, cw: r.width, ch: r.height });
  const f = fitZoom();
  setFit(f);
  setZoom(zoom < f * 1.02 ? f : zoom);
}

/** 세 길이 다 보이도록 물러선다. */
export function survey() {
  const f = fitZoom();
  setFit(f); setZoom(f);
  // 비워 둔 윗자리만큼 내려 앉힌다.
  setCam(0, -(TOP_PAD / 2) / f);
}

/** 그 줄을 화면 가운데로. 배율은 건드리지 않는다. */
export function focus(E) {
  if (!E || zoom <= zoomFit * 1.05) return;
  setCam(0, rows[E.id] || 0);
}

/**
 * 카메라는 **따라다니지 않는다.** 전선을 고를 때마다 화면이 미끄러지면
 * 어디가 어디인지 알 수 없게 된다. 옮기고 싶으면 손으로 끈다.
 */
export function follow() {}

export function panBy(dx, dy) { setCam(camX - dx / zoom, camY - dy / zoom); }
export function zoomBy(f, ax, ay) {
  const before = toWorld(ax, ay);
  setZoom(zoom * f);
  const after = toWorld(ax, ay);
  setCam(camX + (before.x - after.x), camY + (before.y - after.y));
}
export function toWorld(sx, sy) {
  return { x: camX + (sx - cw / 2) / zoom, y: camY + (sy - ch / 2) / zoom };
}

/** 눌린 줄. 그 전선을 고르는 데 쓴다. */
export function pickEdge(sx, sy) {
  const w = toWorld(sx, sy);
  let best = null, bd = gapFor(liveEdges().length) * .5;
  for (const E of liveEdges()) {
    const d = Math.abs(w.y - (rows[E.id] || 0));
    if (d < bd) { bd = d; best = E.id; }
  }
  return best;
}

/* ── 그리기 ─────────────────────────────────────────────────────────── */

export function draw() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#e9eef2'; ctx.fillRect(0, 0, cw, ch);
  if (!G) return;
  const live = layout();

  const sh = G.shake > 0 ? G.shake * 9 : 0;
  const sx = sh ? (Math.random() - .5) * sh : 0, sy = sh ? (Math.random() - .5) * sh : 0;
  ctx.setTransform(dpr * zoom, 0, 0, dpr * zoom,
    (cw / 2 - (camX - sx) * zoom) * dpr, (ch / 2 - (camY - sy) * zoom) * dpr);

  for (const E of live) lane(E);

  // 병사는 아래 줄이 앞이다. 같은 줄 안에서는 lane 값으로 앞뒤를 가른다.
  const cast = [];
  const drew = new Set();          // 광부를 이미 세운 사람
  for (const E of live) {
    const s = sgn(E);
    for (const u of E.units) {
      const p = pt(E, u.x, u.yo);
      u.px = p.x; u.py = p.y; u.face = u.dir * s; cast.push(u);
    }
    // 광부는 **사람마다 딱 한 줄에만** 세운다.
    //
    // 성은 두 줄에 나타나는데 광부까지 두 번 그리면 같은 여섯 명이 두 번
    // 보여 몇 명인지 알 수 없다. 반대로 한쪽 끝에만 그리면 늘 오른쪽에
    // 서는 사람은 광부가 아예 안 보인다. 그래서 **처음 만나는 줄**에 세운다.
    for (const pos of ['p', 'q']) {
      const who = pos === 'p' ? E.p : E.q;
      const P = W(who);
      if (!P || !P.alive || drew.has(who)) continue;
      drew.add(who);
      const onLeft = (pos === 'p') !== flipped(E);
      for (const m of P.miners) {
        const x = pos === 'p' ? GATE_OFF - m.hx : E.len - GATE_OFF + m.hx;
        const p = pt(E, x, 0);
        m.px = p.x; m.py = p.y;
        // 광산은 늘 자기 성의 바깥쪽이다. 캐러 갈 때 그쪽을 본다.
        m.face = (m.job === 'toMine' ? -1 : 1) * (onLeft ? 1 : -1);
        cast.push(m);
      }
    }
  }
  cast.sort((a, b) => (a.py - b.py) || (a.yo - b.yo));
  for (const u of cast) drawUnit(u);

  for (const E of live) fx(E);
}

/** 줄 하나 — minchan_6 의 가로 전장 그대로다. */
function lane(E) {
  const y = rows[E.id];
  const L = laneX(E, 0), R = laneX(E, E.len);

  // 땅
  ctx.fillStyle = '#d5dfe7'; ctx.beginPath(); ctx.moveTo(L, y);
  for (let x = L; x < R + 44; x += 44) ctx.lineTo(x, y - 40 - Math.sin(x * .004) * 20 - Math.sin(x * .011) * 9);
  ctx.lineTo(R, y); ctx.closePath(); ctx.fill();

  ctx.strokeStyle = '#1b2430'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(L - 20, y); ctx.lineTo(R + 20, y); ctx.stroke();
  ctx.fillStyle = '#dbe3ea'; ctx.fillRect(L - 20, y, (R - L) + 40, 46);
  ctx.strokeStyle = '#c2ced8'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = L; x < R; x += 26) { ctx.moveTo(x, y + 5); ctx.lineTo(x - 9, y + 16); }
  ctx.stroke();

  // 지금 고른 전선은 밑줄로 알린다.
  if (E.id === G.view) {
    ctx.strokeStyle = TEAM[G.P[E.p].alive ? E.p : E.q].c;
    ctx.globalAlpha = .5; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(L - 20, y + 50); ctx.lineTo(R + 20, y + 50); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  for (const pos of ['p', 'q']) {
    const g = pos === 'p' ? E.gp : E.gq;
    mine(E, pos); gate(E, g);
  }
  if (E.via) ruin(E);

  // 전선 눈금
  const f = pt(E, E.front, 0);
  const t = E.front / E.len;
  ctx.strokeStyle = t < .5 ? TEAM[E.q].c : TEAM[E.p].c;
  ctx.lineWidth = 5; ctx.globalAlpha = .7;
  ctx.beginPath(); ctx.moveTo(f.x, f.y - 46); ctx.lineTo(f.x, f.y + 10); ctx.stroke();
  ctx.globalAlpha = 1;
}

function mine(E, pos) {
  const x = pt(E, pos === 'p' ? MINE_OFF : E.len - MINE_OFF, 0).x;
  const y = rows[E.id];
  ctx.save(); ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#1b2430'; ctx.fillStyle = '#e3ebf1';
  ctx.beginPath();
  ctx.moveTo(x - 42, y); ctx.lineTo(x - 26, y - 58); ctx.lineTo(x + 2, y - 74);
  ctx.lineTo(x + 30, y - 52); ctx.lineTo(x + 44, y); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#e8b23a';
  for (const s of [[-14, -20], [4, -38], [18, -16], [-2, -8], [24, -34]]) {
    ctx.beginPath(); ctx.arc(x + s[0], y + s[1], 4.5, 0, 7); ctx.fill();
  }
  ctx.restore();
}

function gate(E, g) {
  const P = W(g.owner), T = TEAM[g.owner];
  const x = pt(E, g.x, 0).x, y = rows[E.id];
  // 깃발과 이름은 **화면에서 바깥쪽**을 본다. p/q 로 정하면 뒤집힌 줄에서
  // 깃발이 성 안쪽을 향한다.
  const out = x < 0 ? 1 : -1;
  const w = 64, h = 128, top = y - h;
  ctx.save(); ctx.lineWidth = 3.4; ctx.lineJoin = 'round'; ctx.strokeStyle = '#1b2430';
  ctx.fillStyle = P.alive ? '#f4f8fa' : '#c9d2da';
  ctx.beginPath(); ctx.rect(x - w / 2, top, w, h); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 3; i++) {
    ctx.beginPath(); ctx.rect(x - w / 2 + i * (w / 3) + 3, top - 14, w / 3 - 6, 14); ctx.fill(); ctx.stroke();
  }
  ctx.beginPath(); ctx.rect(x - 13, y - 46, 26, 46); ctx.stroke();
  if (P.alive) {
    ctx.beginPath(); ctx.moveTo(x, top - 14); ctx.lineTo(x, top - 62); ctx.stroke();
    ctx.fillStyle = T.c;
    const f = Math.sin(G.t * 4) * 4;
    ctx.beginPath(); ctx.moveTo(x, top - 62); ctx.lineTo(x + out * 34, top - 55 + f); ctx.lineTo(x, top - 42);
    ctx.closePath(); ctx.fill();
    if (P.up.turret > 0) {
      ctx.strokeStyle = T.c; ctx.lineWidth = 3;
      const tx = x + out * 7;
      ctx.beginPath(); ctx.arc(tx, top - 28, 6, 0, 7); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tx, top - 22); ctx.lineTo(tx, top - 6); ctx.stroke();
    }
    const r = Math.max(0, g.hp / g.max), bw = 80;
    ctx.fillStyle = '#c7d2dc'; ctx.fillRect(x - bw / 2, top - 86, bw, 10);
    ctx.fillStyle = T.c; ctx.fillRect(x - bw / 2, top - 86, bw * r, 10);
    ctx.strokeStyle = '#1b2430'; ctx.lineWidth = 2; ctx.strokeRect(x - bw / 2, top - 86, bw, 10);
  }
  ctx.fillStyle = P.alive ? T.c : '#7d8a95';
  ctx.font = '800 30px Nanum Gothic, sans-serif';
  ctx.textAlign = out > 0 ? 'left' : 'right';
  ctx.fillText(T.nm + (P.alive ? '' : ' ✝'), x + out * (w / 2 + 10), y + 34);
  ctx.restore();
}

/** 무너진 성. 두 길을 이어 붙인 자리에 남는다. */
function ruin(E) {
  const x = pt(E, E.ruin, 0).x, y = rows[E.id];
  ctx.save(); ctx.lineWidth = 3.4; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#6b7785'; ctx.fillStyle = '#cfd8e0';
  ctx.beginPath();
  ctx.moveTo(x - 44, y); ctx.lineTo(x - 38, y - 74); ctx.lineTo(x - 15, y - 52);
  ctx.lineTo(x + 3, y - 94); ctx.lineTo(x + 21, y - 46); ctx.lineTo(x + 42, y - 66);
  ctx.lineTo(x + 46, y); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#8a94a3'; ctx.font = '700 22px Nanum Gothic, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(TEAM[E.via].nm + ' 폐허', x, y + 30);
  ctx.restore();
}

/* ── 자국들 ───────────────────────────────────────────────────────── */

function fx(E) {
  const P = (x, y) => pt(E, x, y);

  for (const b of E.beams) {
    const p1 = P(b.x1, b.y), p2 = P(b.x2, b.y);
    ctx.globalAlpha = b.life / b.max; ctx.lineCap = 'round';
    ctx.lineWidth = (b.w || 22); ctx.strokeStyle = b.c1 || 'rgba(150,210,255,.4)';
    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    ctx.lineWidth = (b.w || 22) * .32; ctx.strokeStyle = b.c2 || '#ffffff';
    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    ctx.globalAlpha = 1;
  }
  for (const b of E.bolts) {
    ctx.globalAlpha = b.t / b.max; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const [wd, c] of [[7.5, '#5fb8ff'], [3.4, '#bfe6ff'], [1.4, '#ffffff']]) {
      ctx.lineWidth = wd; ctx.strokeStyle = c;
      ctx.beginPath();
      b.path.forEach((q, i) => { const p = P(q.x, q.y); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); });
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  ctx.lineWidth = 2.6; ctx.strokeStyle = '#1b2430';
  for (const s of E.shots) {
    const p = P(s.x, s.y);
    const ang = Math.atan2(s.ty - s.y0, s.tx - s.x0) + (s.t / s.dur - .5) * .9 * (s.tx > s.x0 ? 1 : -1);
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(ang);
    ctx.beginPath(); ctx.moveTo(-9, 0); ctx.lineTo(9, 0);
    ctx.moveTo(9, 0); ctx.lineTo(4, -3); ctx.moveTo(9, 0); ctx.lineTo(4, 3); ctx.stroke();
    ctx.restore();
  }
  for (const q of E.parts) {
    const p = P(q.x, q.y);
    ctx.globalAlpha = Math.max(0, Math.min(1, q.life * 3));
    if (q.arrow) {
      ctx.strokeStyle = q.c; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(p.x, p.y - q.s); ctx.lineTo(p.x, p.y + q.s); ctx.stroke();
    } else if (q.ring) {
      const k = 1 - q.life / q.max;
      ctx.strokeStyle = q.c; ctx.lineWidth = 3.4;
      ctx.beginPath(); ctx.ellipse(p.x, p.y, q.s * (.35 + k * .75), q.s * (.16 + k * .3), 0, 0, 7); ctx.stroke();
    } else { ctx.fillStyle = q.c; ctx.fillRect(p.x - q.s / 2, p.y - q.s / 2, q.s, q.s); }
  }
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center'; ctx.font = '700 21px Gaegu, sans-serif';
  for (const t of E.texts) {
    const p = P(t.x, t.y);
    ctx.globalAlpha = Math.min(1, t.life / t.max * 1.7);
    ctx.fillStyle = t.c; ctx.fillText(t.txt, p.x, p.y);
  }
  ctx.globalAlpha = 1;
}
