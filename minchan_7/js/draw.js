import {
  ctx, cw, ch, dpr, camX, camY, zoom, zoomFit, TEAM, PLAYERS,
  VERT, HUB, GATE_OFF, minePos, roadPath, alongPath, roadPoint,
  setGeom, setCam, setZoom, setFit, clamp, dirOn, gateXOn,
} from './world.js';
import { G, W, liveEdges } from './state.js';
import { drawUnit } from './unitArt.js';

let cv = null;
export function attach(canvas) { cv = canvas; }

/** 삼각형 전체가 들어오는 배율. 여기가 가장 멀리 물러선 자리다. */
function fitZoom() {
  const pad = 260;
  const w = 2 * (Math.abs(VERT.c.x) + pad), h = (VERT.b.y - VERT.a.y) + pad * 2;
  return Math.min(cw / w, ch / h);
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

/** 삼각형 전체가 보이도록 물러선다. */
export function survey() { setFit(fitZoom()); setZoom(fitZoom()); setCam(HUB.x, HUB.y); }

/** 그 변의 전선으로 파고든다. */
export function focus(E, z) {
  if (!E) return;
  const p = roadPoint(E, E.front, 0);
  setZoom(z || Math.max(zoomFit, .62));
  setCam(p.x, p.y - 90);
}

export function follow(dt) {
  const E = G.E[G.view];
  if (!E || zoom <= zoomFit * 1.05) return;   // 물러서서 볼 때는 따라가지 않는다
  const p = roadPoint(E, E.front, 0);
  const k = Math.min(1, dt * 1.8);
  setCam(camX + (p.x - camX) * k, camY + (p.y - 90 - camY) * k);
}

export function panBy(dx, dy) { setCam(camX - dx / zoom, camY - dy / zoom); }
export function zoomBy(f, ax, ay) {
  const before = toWorld(ax, ay);
  setZoom(zoom * f);
  const after = toWorld(ax, ay);
  setCam(camX + (before.x - after.x), camY + (before.y - after.y));
}
/** 화면 좌표 → 전장 좌표. */
export function toWorld(sx, sy) {
  return { x: camX + (sx - cw / 2) / zoom, y: camY + (sy - ch / 2) / zoom };
}

/** 눌린 자리에서 가장 가까운 길. 그 전선을 고르는 데 쓴다. */
export function pickEdge(sx, sy) {
  const w = toWorld(sx, sy);
  let best = null, bd = 150 / zoom;
  for (const E of liveEdges()) {
    const pts = roadPath(E);
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distSeg(w, pts[i], pts[i + 1]);
      if (d < bd) { bd = d; best = E.id; }
    }
  }
  return best;
}
function distSeg(p, a, b) {
  const vx = b.x - a.x, vy = b.y - a.y, L = vx * vx + vy * vy;
  const t = L ? clamp(((p.x - a.x) * vx + (p.y - a.y) * vy) / L, 0, 1) : 0;
  return Math.hypot(p.x - (a.x + vx * t), p.y - (a.y + vy * t));
}

/* ── 그리기 ─────────────────────────────────────────────────────────── */

export function draw() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#e9eef2'; ctx.fillRect(0, 0, cw, ch);
  if (!G) return;

  const sh = G.shake > 0 ? G.shake * 9 : 0;
  const sx = sh ? (Math.random() - .5) * sh : 0, sy = sh ? (Math.random() - .5) * sh : 0;
  ctx.setTransform(dpr * zoom, 0, 0, dpr * zoom,
    (cw / 2 - (camX - sx) * zoom) * dpr, (ch / 2 - (camY - sy) * zoom) * dpr);

  grid();
  for (const E of liveEdges()) road(E);
  for (const w of PLAYERS) mine(w);
  for (const E of liveEdges()) if (E.via) ruin(E);
  for (const w of PLAYERS) castle(w);

  // 병사는 **길 위에 서 있되 기울지 않는다.** 아래쪽에 있는 것을 나중에
  // 그려 앞으로 나오게 한다.
  const cast = [];
  for (const E of liveEdges()) {
    for (const u of E.units) {
      const p = roadPoint(E, u.x, u.yo);
      u.px = p.x; u.py = p.y; cast.push(u);
    }
  }
  for (const w of PLAYERS) {
    const P = W(w); if (!P.alive) continue;
    const v = VERT[w], m = minePos(w);
    for (const mi of P.miners) {
      const k = mi.hx / 94;
      mi.px = v.x + (m.x - v.x) * k; mi.py = v.y + (m.y - v.y) * k;
      mi.dir = m.x >= v.x ? -1 : 1;      // 광산 쪽을 보고 걷는다
      cast.push(mi);
    }
  }
  cast.sort((a, b) => a.py - b.py);
  for (const u of cast) drawUnit(u);

  for (const E of liveEdges()) fx(E);
}

function grid() {
  const g = 90, L = camX - cw / 2 / zoom, R = camX + cw / 2 / zoom;
  const T = camY - ch / 2 / zoom, B = camY + ch / 2 / zoom;
  ctx.strokeStyle = '#dde5eb'; ctx.lineWidth = 1 / zoom;
  ctx.beginPath();
  for (let x = Math.floor(L / g) * g; x < R + g; x += g) { ctx.moveTo(x, T); ctx.lineTo(x, B); }
  for (let y = Math.floor(T / g) * g; y < B + g; y += g) { ctx.moveTo(L, y); ctx.lineTo(R, y); }
  ctx.stroke();
}

/** 길. 이 위를 병사가 걷는다. */
function road(E) {
  const pts = roadPath(E), on = E.id === G.view;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#cdd8e1'; ctx.lineWidth = 78;
  ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();
  ctx.strokeStyle = on ? '#b6c6d4' : '#dfe7ed'; ctx.lineWidth = 66;
  ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();

  // 전선. 어느 쪽이 밀고 있는지를 길 위에 못 박는다.
  const f = roadPoint(E, E.front, 0);
  const t = E.front / E.len;
  ctx.strokeStyle = t < .5 ? TEAM[E.q].c : TEAM[E.p].c;
  ctx.lineWidth = 5; ctx.globalAlpha = .75;
  ctx.beginPath(); ctx.moveTo(f.x, f.y - 42); ctx.lineTo(f.x, f.y + 12); ctx.stroke();
  ctx.globalAlpha = 1;
}

function mine(who) {
  const P = W(who); if (!P.alive) return;
  const m = minePos(who), x = m.x, y = m.y;
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

function castle(who) {
  const P = W(who), T = TEAM[who], v = VERT[who];
  const w = 78, h = 150, x = v.x, top = v.y - h;
  ctx.save(); ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.strokeStyle = '#1b2430';
  ctx.fillStyle = P.alive ? '#f4f8fa' : '#c9d2da';
  ctx.beginPath(); ctx.rect(x - w / 2, top, w, h); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 3; i++) {
    ctx.beginPath(); ctx.rect(x - w / 2 + i * (w / 3) + 3, top - 17, w / 3 - 7, 17); ctx.fill(); ctx.stroke();
  }
  ctx.beginPath(); ctx.rect(x - 16, v.y - 54, 32, 54); ctx.stroke();
  if (P.alive) {
    ctx.beginPath(); ctx.moveTo(x, top - 17); ctx.lineTo(x, top - 74); ctx.stroke();
    ctx.fillStyle = T.c;
    const f = Math.sin(G.t * 4) * 5;
    ctx.beginPath(); ctx.moveTo(x, top - 74); ctx.lineTo(x + 42, top - 66 + f); ctx.lineTo(x, top - 50);
    ctx.closePath(); ctx.fill();
    const r = Math.max(0, P.hp / P.max), bw = 96;
    ctx.fillStyle = '#c7d2dc'; ctx.fillRect(x - bw / 2, top - 100, bw, 11);
    ctx.fillStyle = T.c; ctx.fillRect(x - bw / 2, top - 100, bw * r, 11);
    ctx.strokeStyle = '#1b2430'; ctx.lineWidth = 2; ctx.strokeRect(x - bw / 2, top - 100, bw, 11);
  }
  ctx.fillStyle = P.alive ? T.c : '#7d8a95';
  ctx.font = '800 26px Nanum Gothic, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(T.nm + (P.alive ? '' : ' ✝'), x, v.y + 34);
  ctx.restore();
}

/** 무너진 성. 두 길을 이어 붙인 자리에 남는다. */
function ruin(E) {
  const v = VERT[E.via], x = v.x, y = v.y;
  ctx.save(); ctx.lineWidth = 3.4; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#6b7785'; ctx.fillStyle = '#cfd8e0';
  ctx.beginPath();
  ctx.moveTo(x - 44, y); ctx.lineTo(x - 38, y - 78); ctx.lineTo(x - 15, y - 56);
  ctx.lineTo(x + 3, y - 98); ctx.lineTo(x + 21, y - 50); ctx.lineTo(x + 42, y - 70);
  ctx.lineTo(x + 46, y); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
}

/* ── 자국들 ─────────────────────────────────────────────────────────
 *
 * 전투 코드는 자국을 (변 위 x, 지면 위 높이) 로 만든다. 여기서 길 위의
 * 점으로 옮겨 준다 — 그 한 번의 변환으로 1D 시절 코드가 전부 살아난다.
 */
function fx(E) {
  const P = (x, y) => roadPoint(E, x, y);

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
