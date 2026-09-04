import {
  ctx, cw, ch, dpr, camX, camY, zoom, zoomFit, TEAM, ME,
  GATE_OFF, MINE_OFF, EDGE_LEN,
  setGeom, setCam, setZoom, setFit, clamp, onEdge,
} from './world.js';
import { G, W, liveEdges } from './state.js';
import { drawUnit } from './unitArt.js';

let cv = null;
export function attach(canvas) { cv = canvas; }

/* ── 화면 구성 ───────────────────────────────────────────────────────
 *
 * **하나는 크게, 나머지는 얇게.**
 *
 * 세 줄을 똑같이 나눠 보니 문제가 분명했다. 이 게임의 맛은 구경(타이탄이
 * 화면을 꽉 채우고 코어빔을 쏘는 것)과 판단(두 전선 중 어디에 쓸까)에서
 * 오는데, 셋을 균등하게 놓으면 **둘 다 반씩만** 준다. 병사는 손톱만 하고,
 * 그렇다고 판단이 특별히 쉬워지지도 않는다.
 *
 * 그래서 역할을 갈랐다.
 *   · 보고 있는 전선  = 크게. minchan_6 그대로. 여기서 구경한다
 *   · 나머지 전선들   = 얇은 띠. **길 전체**를 한눈에. 여기서 판단한다
 *
 * 얇은 띠가 큰 화면과 **다른 일**을 하는 것이 핵심이다. 큰 화면은 지금
 * 벌어지는 싸움을, 띠는 길 전체의 형세를 보여준다.
 */

/** 한 줄에 한 번에 보여 줄 길이(전장 px). minchan_6 의 600~940 과 같은 뜻. */
const VIEWW = 940;
/** 배너가 큰 화면을 가리지 않게 위를 이만큼(화면 px) 비운다. */
const TOP_PAD = 70;
/** 얇은 띠 한 줄의 높이(화면 px). */
const STRIP_H = 64;

function baseZoom() { return cw / VIEWW; }
function fitZoom() { return baseZoom(); }

/* ── 큰 화면의 창 중심 ───────────────────────────────────────────────
 *
 * 전선을 따라가되 길 밖으로는 나가지 않는다. **프레임마다 한 번만** 옮긴다 —
 * 좌표를 바꿀 때마다 옮기면 부드럽게 따라가는 게 아니라 그 자리에서 튀고,
 * 같은 줄인데 지면과 병사가 다른 중심으로 그려져 어긋난다.
 */
let centers = {};
function advanceCenter(E) {
  const half = Math.min(VIEWW / 2, E.len / 2);
  const want = clamp(E.front, half, E.len - half);
  const cur = centers[E.id];
  centers[E.id] = cur === undefined ? want : cur + (want - cur) * .08;
}
function centerOf(E) {
  if (centers[E.id] === undefined) advanceCenter(E);
  return centers[E.id];
}

/* ── 좌표 ────────────────────────────────────────────────────────────
 *
 * **내 성은 늘 왼쪽.** 변마다 내가 p 였다 q 였다 하는데 그대로 그리면
 * 미는 방향이 뒤집혀 헷갈린다. 내가 오른쪽 끝인 변은 좌우를 뒤집는다.
 */
let groundY = 0;
function flipped(E) { return E.q === ME; }
function sgn(E) { return flipped(E) ? -1 : 1; }
/** 변 위의 (거리, 지면 위 높이) 를 큰 화면 좌표로. */
function pt(E, x, h) {
  return { x: (x - centerOf(E)) * sgn(E), y: groundY + (h || 0) };
}
/** 큰 화면에 지금 서 있는 변. 없으면 내 첫 전선. */
function focused() {
  const E = G.E[G.view];
  if (E && G.live.includes(E.id) && onEdge(E, ME)) return E;
  return liveEdges().find(x => onEdge(x, ME)) || liveEdges()[0] || null;
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

/** 큰 화면을 기본 배율·자리로 되돌린다. */
export function survey() {
  const f = fitZoom();
  setFit(f); setZoom(f); setCam(0, 0);
  centers = {};
}
export function focus() { setCam(0, 0); }
export function follow() {}

export function panBy(dx, dy) { setCam(camX - dx / zoom, camY - dy / zoom); }
export function zoomBy(f, ax, ay) {
  const before = toWorld(ax, ay);
  setZoom(zoom * f);
  const after = toWorld(ax, ay);
  setCam(camX + (before.x - after.x), camY + (before.y - after.y));
}
export function toWorld(sx, sy) {
  return { x: camX + (sx - cw / 2) / zoom, y: camY + (sy - bigH() / 2 - TOP_PAD) / zoom };
}

/** 큰 화면이 차지하는 높이(화면 px). 얇은 띠들이 아래를 가져간다. */
function bigH() {
  const n = Math.max(0, liveEdges().length - 1);
  return Math.max(120, ch - TOP_PAD - n * STRIP_H);
}

/** 눌린 자리의 얇은 띠. 그 전선으로 갈아탄다. */
export function pickEdge(sx, sy) {
  const strips = liveEdges().filter(E => E !== focused());
  const top = TOP_PAD + bigH();
  if (sy < top) return null;
  const i = Math.floor((sy - top) / STRIP_H);
  return strips[i] ? strips[i].id : null;
}

/* ── 그리기 ─────────────────────────────────────────────────────────── */

export function draw() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#e9eef2'; ctx.fillRect(0, 0, cw, ch);
  if (!G) return;
  const live = liveEdges();
  for (const E of live) advanceCenter(E);

  const big = focused();
  const H = bigH();

  if (big) {
    // 큰 화면 — 지면은 아래쪽에 붙이고 그 위가 통째로 머리 공간이다.
    ctx.save();
    ctx.beginPath(); ctx.rect(0, TOP_PAD, cw, H); ctx.clip();
    const sh = G.shake > 0 ? G.shake * 9 : 0;
    const sx = sh ? (Math.random() - .5) * sh : 0, sy = sh ? (Math.random() - .5) * sh : 0;
    groundY = 0;
    const gyScreen = TOP_PAD + H - 42;
    ctx.setTransform(dpr * zoom, 0, 0, dpr * zoom,
      (cw / 2 - (camX - sx) * zoom) * dpr, (gyScreen - (camY - sy) * zoom) * dpr);
    lane(big);
    ctx.restore();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const strips = live.filter(E => E !== big);
  strips.forEach((E, i) => strip(E, TOP_PAD + H + i * STRIP_H));
}

/** 큰 화면의 한 줄. minchan_6 의 전장 그대로다. */
function lane(E) {
  const y = 0;
  const a = pt(E, 0, 0).x, b = pt(E, E.len, 0).x;
  const L = Math.min(a, b), R = Math.max(a, b);
  ctx.fillStyle = '#d5dfe7'; ctx.beginPath(); ctx.moveTo(L, y);
  for (let x = L; x < R + 44; x += 44) ctx.lineTo(x, y - 40 - Math.sin(x * .004) * 20 - Math.sin(x * .011) * 9);
  ctx.lineTo(R, y); ctx.closePath(); ctx.fill();

  ctx.strokeStyle = '#1b2430'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(L - 20, y); ctx.lineTo(R + 20, y); ctx.stroke();
  ctx.fillStyle = '#dbe3ea'; ctx.fillRect(L - 20, y, (R - L) + 40, 60);
  ctx.strokeStyle = '#c2ced8'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = L; x < R; x += 26) { ctx.moveTo(x, y + 5); ctx.lineTo(x - 9, y + 16); }
  ctx.stroke();

  for (const pos of ['p', 'q']) { mine(E, pos); gate(E, pos === 'p' ? E.gp : E.gq); }
  if (E.via) ruin(E);

  const cast = [];
  const s = sgn(E);
  for (const u of E.units) {
    const p = pt(E, u.x, u.yo);
    u.px = p.x; u.py = p.y; u.face = u.dir * s; cast.push(u);
  }
  for (const pos of ['p', 'q']) {
    const who = pos === 'p' ? E.p : E.q;
    const P = W(who);
    if (!P || !P.alive) continue;
    const onLeft = (pos === 'p') !== flipped(E);
    for (const m of P.miners) {
      const x = pos === 'p' ? GATE_OFF - m.hx : E.len - GATE_OFF + m.hx;
      const p = pt(E, x, 0);
      m.px = p.x; m.py = p.y;
      m.face = (m.job === 'toMine' ? -1 : 1) * (onLeft ? 1 : -1);
      cast.push(m);
    }
  }
  cast.sort((x, z) => x.yo - z.yo);
  for (const u of cast) drawUnit(u);
  fx(E);
}

/**
 * 얇은 띠 — 그 전선의 **길 전체**를 한눈에.
 *
 * 여기서는 병사를 사람으로 그리지 않는다. 이 자리에서 알고 싶은 것은
 * "누가 어디까지 밀었나" 지 "누가 칼을 들었나" 가 아니다. 점 하나면 된다.
 */
function strip(E, top) {
  const padX = 58, y = top + STRIP_H * .62;
  const w = cw - padX * 2;
  const fl = flipped(E);
  const at = x => padX + (fl ? (1 - x / E.len) : (x / E.len)) * w;
  const leftWho = fl ? E.q : E.p, rightWho = fl ? E.p : E.q;

  ctx.fillStyle = '#eef2f5'; ctx.fillRect(0, top, cw, STRIP_H);
  ctx.strokeStyle = '#cdd8e1'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, top + .5); ctx.lineTo(cw, top + .5); ctx.stroke();

  // 길
  ctx.strokeStyle = '#c2ced8'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(at(0), y); ctx.lineTo(at(E.len), y); ctx.stroke();

  // 폐허
  if (E.via) {
    ctx.fillStyle = '#9aa6b2';
    ctx.beginPath(); ctx.arc(at(E.ruin), y, 4, 0, 7); ctx.fill();
  }

  // 병사 — 점. 몸집이 클수록 크게. 큰 것은 테두리를 둘러 눈에 걸리게 한다.
  for (const u of E.units) {
    if (u.dead) continue;
    const r = Math.min(4.5, 1.6 + u.size / 150);
    ctx.beginPath(); ctx.arc(at(u.x), y + (u.lane - 3) * 1.6, r, 0, 7);
    ctx.fillStyle = TEAM[u.own].c; ctx.fill();
    if (u.size >= 150) { ctx.strokeStyle = '#f2f6fa'; ctx.lineWidth = 1.1; ctx.stroke(); }
  }

  // 전선
  const t = E.front / E.len;
  ctx.strokeStyle = t < .5 ? TEAM[E.q].c : TEAM[E.p].c;
  ctx.lineWidth = 2.4;
  ctx.beginPath(); ctx.moveTo(at(E.front), y - 13); ctx.lineTo(at(E.front), y + 13); ctx.stroke();

  // 양 끝 성
  for (const [who, x] of [[leftWho, at(fl ? E.len : 0)], [rightWho, at(fl ? 0 : E.len)]]) {
    const P = W(who), T = TEAM[who];
    ctx.fillStyle = P.alive ? T.c : '#8f9aa5';
    ctx.fillRect(x - 7, y - 11, 14, 22);
    ctx.strokeStyle = '#10161c'; ctx.lineWidth = 1.4;
    ctx.strokeRect(x - 7, y - 11, 14, 22);
    if (P.alive) {
      const r = Math.max(0, P.hp / P.max);
      ctx.fillStyle = 'rgba(16,22,28,.55)';
      ctx.fillRect(x - 7, y - 11, 14, 22 * (1 - r));
    }
  }

  // 이름과 눌러서 갈아타라는 표시
  ctx.font = '800 11px Nanum Gothic, sans-serif';
  ctx.textAlign = 'left'; ctx.fillStyle = TEAM[leftWho].c;
  ctx.fillText(TEAM[leftWho].nm, 6, y + 4);
  ctx.textAlign = 'right'; ctx.fillStyle = TEAM[rightWho].c;
  ctx.fillText(TEAM[rightWho].nm, cw - 6, y + 4);

  // **밀리면 붉게 알린다.** 안 보고 있는 전선이 위험해도 숫자를 훑어야만
  // 아는 것은 재미가 아니라 잡일이다.
  if (onEdge(E, ME)) {
    const d = E.p === ME ? 1 : -1;
    const gx = d > 0 ? E.gp.x : E.gq.x;
    const push = clamp(((E.front - gx) * d) / Math.max(1, E.len - GATE_OFF * 2), 0, 1);
    if (push < .22) {
      const a2 = .18 + Math.abs(Math.sin(G.t * 5)) * .22;
      ctx.fillStyle = 'rgba(224,96,92,' + a2.toFixed(3) + ')';
      ctx.fillRect(0, top, cw, STRIP_H);
    }
  }
}

function mine(E, pos) {
  const x = pt(E, pos === 'p' ? MINE_OFF : E.len - MINE_OFF, 0).x;
  const y = groundY;
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
  const x = pt(E, g.x, 0).x, y = groundY;
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
  const x = pt(E, E.ruin, 0).x, y = groundY;
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
