import { PLAYERS, TEAM, setCtx } from './world.js';
import { G, newGame, W, edgesOf, minerCount } from './state.js';
import { buy } from './shop.js';
import { UPS, upCost, buyUp } from './upgrades.js';
import { castRain } from './combat.js';
import { readEdge } from './aiRead.js';
import { step } from './step.js';
import { stepAll } from './ai.js';
import { LEVELS } from './ai.js';
import * as draw from './draw.js';
import * as ui from './ui.js';

const el = id => document.getElementById(id);
const cv = el('cv');

/** 자리 배정. null 이면 사람, 문자열이면 그 난이도의 컴퓨터다. */
let seats = { a: null, b: '보통', c: '보통' };
let last = 0, overShown = false;

function firstHuman() {
  return PLAYERS.find(w => seats[w] === null) || 'a';
}

function start() {
  const humans = PLAYERS.filter(w => seats[w] === null);
  if (humans.length === 0) { ui.lobbyMsg('적어도 한 자리는 사람이 잡아야 한다.'); return; }
  if (humans.length > 1) { ui.lobbyMsg('한 화면에서는 한 사람만 잡을 수 있다. 나머지는 컴퓨터로.'); return; }
  newGame(seats);
  const me = firstHuman();
  ui.setMe(me);
  G.view = edgesOf(me)[0].id;
  ui.buildTabs();
  draw.survey();
  ui.closeLobby(); ui.hideOver();
  overShown = false;
  ui.banner('전투 개시 — 두 곳을 동시에 막아라');
}

function again() { ui.hideOver(); ui.openLobby(); }

function pickSeat(who, v) {
  seats = { ...seats, [who]: v };
  // 사람은 한 자리만. 다른 사람 자리는 컴퓨터로 밀어 둔다.
  if (v === null) for (const w of PLAYERS) if (w !== who && seats[w] === null) seats[w] = '보통';
  ui.buildLobby(seats, LEVELS, pickSeat);
  ui.lobbyMsg('');
}

/* ── 입력 ───────────────────────────────────────────────────────────── */

/**
 * 끌어서 옮기고, 두 손가락으로 좁히고 넓힌다. 끌지 않고 톡 누르면 그 길을
 * 고른다 — 삼각형 위에서 전선을 고르는 가장 짧은 길이다.
 */
const ptrs = new Map();
let pinch = 0, moved = 0;
cv.addEventListener('pointerdown', e => {
  cv.setPointerCapture(e.pointerId);
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2) pinch = spread();
  moved = 0;
});
cv.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  moved += Math.abs(dx) + Math.abs(dy);
  if (ptrs.size === 1) draw.panBy(dx, dy);
  else if (ptrs.size === 2 && pinch > 0) {
    const now = spread();
    const c = center(), r = cv.getBoundingClientRect();
    draw.zoomBy(now / pinch, c.x - r.left, c.y - r.top);
    pinch = now;
  }
});
for (const ev of ['pointerup', 'pointercancel']) cv.addEventListener(ev, e => {
  if (ptrs.size === 1 && moved < 8) {
    const r = cv.getBoundingClientRect();
    const id = draw.pickEdge(e.clientX - r.left, e.clientY - r.top);
    if (id) ui.view(id);
  }
  ptrs.delete(e.pointerId);
  if (ptrs.size < 2) pinch = 0;
});
function spread() {
  const [a, b] = [...ptrs.values()];
  return Math.hypot(a.x - b.x, a.y - b.y);
}
function center() {
  const [a, b] = [...ptrs.values()];
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}
cv.addEventListener('wheel', e => {
  e.preventDefault();
  const r = cv.getBoundingClientRect();
  draw.zoomBy(e.deltaY > 0 ? .9 : 1.11, e.clientX - r.left, e.clientY - r.top);
}, { passive: false });
el('wide').addEventListener('click', () => draw.survey());

addEventListener('resize', () => draw.resize());
addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') ui.cycleView(-1);
  if (e.key === 'ArrowRight') ui.cycleView(1);
});

/* ── 루프 ───────────────────────────────────────────────────────────── */

function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000 || 0);
  last = now;
  if (G) {
    if (!G.over) { step(dt); stepAll(dt); }
    if (G.events.length) ui.drainEvents();
    draw.draw();
    ui.hud(dt);
    if (G.over && !overShown) finish();
  }
  requestAnimationFrame(frame);
}

function finish() {
  overShown = true;
  const win = G.winner, me = ui.me();
  const mine = win === me;
  ui.showOver(mine ? '승리' : '패배',
    (win ? TEAM[win].nm + '이 삼국을 통일했다.' : '모두 무너졌다.')
    + ' 처치 ' + W(me).kills + ' · 노획 ' + Math.round(W(me).loot) + 'G');
}

/* ── 부팅 ───────────────────────────────────────────────────────────── */

setCtx(cv.getContext('2d'));
draw.attach(cv);
draw.resize();
ui.buildHps();
ui.buildShop();
ui.wire(start, again);
ui.buildLobby(seats, LEVELS, pickSeat);
ui.setMe('a');
requestAnimationFrame(frame);

// 디버깅용 손잡이. 로컬에서만 연다.
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  Object.assign(globalThis, {
    TRI: {
      get G() { return G; }, start, step, stepAll,
      seat(w, v) { seats[w] = v; },
      draw: () => draw.draw(), ui, view: draw,
      /** 시험용 판. 사람 자리 검사를 건너뛰고 셋 다 컴퓨터로 세울 수 있다. */
      lab(s3) {
        newGame(s3);
        ui.setMe('a');
        G.view = edgesOf('a')[0].id;
        ui.buildTabs(); draw.survey();
        ui.closeLobby(); ui.hideOver(); overShown = false;
      },
      /** 옛 정책을 밖에서 돌려 붙여 보기 위한 손잡이. */
      api: { buy, buyUp, upCost, UPS, castRain, edgesOf, minerCount, readEdge },
    },
  });
}
