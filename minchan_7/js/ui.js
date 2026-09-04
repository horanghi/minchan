import { TEAM, PLAYERS, MAX_MINERS, ULT_CD, GATE_OFF, foeOn, dirOn, onEdge, setMe as setWorldMe } from './world.js';
import { TYPES, ORDER } from './types.js';
import { G, W, edgesOf, minerCount, haul, minerCycle } from './state.js';
import { buy } from './shop.js';
import { UPS, upCost, buyUp, upMaxed } from './upgrades.js';
import { castRain } from './combat.js';
import { iconOf, setInk } from './icons.js';
import { focus } from './draw.js';
import { beep } from './sound.js';

const el = id => document.getElementById(id);
let ME = 'a';
const btns = {};
let bannerT = null, bannerHold = 0;

export function setMe(who) {
  ME = who;
  setWorldMe(who);
  document.documentElement.style.setProperty('--me', TEAM[who].c);
  setInk(TEAM[who].ink);
  paintIcons();
}
export function me() { return ME; }

export function banner(t) { bannerT.textContent = t; bannerHold = 2.2; }

/* ── 상점 ───────────────────────────────────────────────────────────── */

/** 성 셋의 체력. 삼각형은 전장이 그리므로 여기는 숫자만 맡는다. */
const hps = {};
export function buildHps() {
  const host = el('hps'); host.innerHTML = '';
  for (const w of PLAYERS) {
    const d = document.createElement('div');
    d.className = 'hp';
    d.innerHTML = '<span class="lb" style="color:' + TEAM[w].c + '">' + TEAM[w].nm + '</span>'
      + '<div class="bar"><i style="background:' + TEAM[w].c + '"></i></div><span class="vv"></span>';
    host.appendChild(d);
    hps[w] = { row: d, bar: d.querySelector('i'), vv: d.querySelector('.vv') };
  }
}
function syncHps() {
  for (const w of PLAYERS) {
    const P = W(w), h = hps[w]; if (!h) continue;
    const r = Math.max(0, P.hp / P.max);
    h.bar.style.width = (r * 100) + '%';
    h.vv.textContent = P.alive ? Math.round(P.hp) : '함락';
    h.row.classList.toggle('out', !P.alive);
  }
}

export function buildShop() {
  const host = el('units');
  host.innerHTML = '';
  ORDER.forEach(k => {
    const T = TYPES[k];
    const b = document.createElement('div');
    b.className = 'ubtn';
    b.innerHTML = '<canvas width="60" height="68"></canvas><div class="nm">' + T.nm + '</div>'
                + '<div class="ct">' + T.cost + '</div>'
                + (k === 'miner' ? '<div class="cnt" id="mcnt">0</div>' : '');
    b.addEventListener('pointerdown', e => { e.preventDefault(); order(k); });
    host.appendChild(b); btns[k] = b;
    iconOf(b.querySelector('canvas'), k);
  });
}
function paintIcons() { for (const k of ORDER) if (btns[k]) iconOf(btns[k].querySelector('canvas'), k); }

/**
 * 병사는 **지금 보고 있는 전선**으로 간다.
 *
 * 두 곳에 보낼 수 있다는 건 매번 어디로 보낼지 고른다는 뜻이다. 화면 위의
 * 전선 탭이 곧 그 선택이다 — 보고 있는 곳으로 간다는 규칙이 가장 헷갈리지
 * 않는다.
 */
function order(k) {
  const r = buy(k, ME, G.E[G.view]);
  if (r === 'full') { banner('광부는 최대 ' + MAX_MINERS + '명'); beep(90, .06, .03); }
  else if (!r) beep(90, .06, .03);
}

/* ── 전선 탭 ────────────────────────────────────────────────────────── */

const tabs = [];
export function buildTabs() {
  const host = el('frontTag');
  host.innerHTML = ''; tabs.length = 0;
  const mine = edgesOf(ME);
  host.style.gridTemplateColumns = 'repeat(' + Math.max(1, mine.length) + ',1fr)';
  for (const E of mine) {
    const foe = foeOn(E, ME);
    const t = document.createElement('div');
    t.className = 'ftab' + (E.id === G.view ? ' on' : '');
    // 한 명이 무너지면 남은 둘이 **같은 상대와 두 전선**으로 붙는다.
    // 이름만 두 번 적으면 어느 쪽이 어느 길인지 알 수 없다.
    const same = mine.filter(o => foeOn(o, ME) === foe).length > 1;
    const via = E.via ? TEAM[E.via].nm + ' 폐허길' : '곧은길';
    t.innerHTML = '<i style="background:' + TEAM[foe].c + '"></i>'
                + TEAM[foe].nm + (same ? ' <small style="opacity:.72">' + via + '</small>' : '')
                + '<span class="pc">–</span><div class="fill"></div>';
    t.addEventListener('pointerdown', e => { e.preventDefault(); view(E.id); });
    host.appendChild(t);
    tabs.push({ id: E.id, el: t, pc: t.querySelector('.pc'), fill: t.querySelector('.fill') });
  }
}

/**
 * 전선 고르개를 매 프레임 갱신한다.
 *
 * 숫자는 **내가 얼마나 밀고 있는가**다. 0 이면 내 성문 앞까지 밀렸고
 * 100 이면 상대 성문을 두드리고 있다. 두 곳을 지키는 게임에서 이게 없으면
 * 어느 쪽이 급한지 알려고 매번 화면을 넘겨야 한다.
 */
function syncTabs() {
  for (const t of tabs) {
    const E = G.E[t.id];
    if (!E || !G.live.includes(t.id)) continue;
    const d = dirOn(E, ME);
    const from = d > 0 ? E.gp.x : E.gq.x;
    const span = E.len - GATE_OFF * 2;
    const pct = Math.round(Math.max(0, Math.min(100, ((E.front - from) * d) / span * 100)));
    t.pc.textContent = pct + '%';
    t.pc.style.color = pct < 34 ? '#e0605c' : pct > 66 ? '#7fd39b' : '#c9d6e2';
    t.fill.style.width = pct + '%';
    t.el.classList.toggle('on', t.id === G.view);
  }
}
/**
 * 명령할 전선을 고른다.
 *
 * **내가 낀 변만 고를 수 있다.** 화면에는 남의 싸움도 나오지만 그건 구경
 * 거리지 명령할 곳이 아니다 — 막지 않으면 남의 성문 앞에 내 병사가 솟는다.
 */
export function view(id) {
  const E = G.E[id];
  if (!E || !G.live.includes(id) || !onEdge(E, ME)) return;
  G.view = id; focus(E); buildTabs();
}
/** 좌우로 밀어 전선을 바꾼다. */
export function cycleView(step) {
  const mine = edgesOf(ME);
  if (mine.length < 2) return;
  const i = mine.findIndex(E => E.id === G.view);
  view(mine[(i + step + mine.length) % mine.length].id);
}

/* ── 강화 ───────────────────────────────────────────────────────────── */

export function renderUps() {
  const P = W(ME);
  el('uplist').innerHTML = UPS.map(u => {
    const lv = P.up[u.k], done = upMaxed(ME, u.k);
    return '<div class="up"><div class="ic">' + u.ic + '</div><div class="tx"><b>' + u.nm
      + ' <span style="color:#8ea0b2">Lv.' + lv + (u.max ? '/' + u.max : '') + '</span></b><small>'
      + (done ? '더 덧댈 수 없다' : u.d(lv + 1)) + '</small></div>'
      + '<button data-k="' + u.k + '"' + (done ? ' disabled' : '') + '>'
      + (done ? '최대' : u.c(lv)) + '</button></div>';
  }).join('');
  el('uplist').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => { if (buyUp(ME, b.dataset.k)) { renderUps(); beep(660, .1, .04); } });
  });
  syncUps();
}
/** 팝업이 열려 있는 동안에도 금은 들어온다. 버튼 활성화를 계속 맞춘다. */
export function syncUps() {
  if (!el('modal').classList.contains('on')) return;
  const P = W(ME);
  el('uplist').querySelectorAll('button').forEach(b => {
    b.disabled = upMaxed(ME, b.dataset.k) || P.gold < upCost(ME, b.dataset.k);
  });
}

/* ── 매 프레임 ──────────────────────────────────────────────────────── */

export function hud(dt) {
  const P = W(ME);
  el('gold').textContent = Math.floor(P.gold);
  const mc = minerCount(ME);
  el('grate').innerHTML = '<b>' + TEAM[ME].nm + '</b> · 광부 ' + mc
    + ' · ' + (mc * haul(ME) / minerCycle()).toFixed(1) + '/초';
  const mcnt = el('mcnt'); if (mcnt) mcnt.textContent = mc;

  for (const k of ORDER) {
    const b = btns[k]; if (!b) continue;
    const ok = P.gold >= TYPES[k].cost && !(k === 'miner' && mc >= MAX_MINERS);
    b.classList.toggle('off', !ok);
    b.classList.toggle('rdy', ok);
  }
  const rc = P.rainCd;
  el('ultcd').style.width = (rc > 0 ? (rc / ULT_CD * 100) : 0) + '%';

  syncTabs(); syncHps();
  if (bannerHold > 0) { bannerHold -= dt; el('banner').style.opacity = Math.min(1, bannerHold * 2); }
  else el('banner').style.opacity = 0;
  syncUps();
}

/** state 가 쌓아 둔 알림을 비운다. */
export function drainEvents() {
  for (const e of G.events) {
    if (e.k === 'fall') {
      banner(TEAM[e.who].nm + ' 성 함락' + (e.by ? ' — ' + TEAM[e.by].nm + ' 정복' : ''));
      beep(70, .5, .08);
    } else if (e.k === 'merge') {
      banner(TEAM[e.who].nm + '의 폐허가 길이 되었다');
    }
    if (e.k === 'fall' && !G.live.includes(G.view)) {
      const mine = edgesOf(ME);
      if (mine.length) view(mine[0].id);
      else if (G.live.length) view(G.live[0]);
    }
  }
  G.events.length = 0;
  buildTabs();
}

export function wire(onStart, onAgain) {
  bannerT = el('bannerT');
  el('ult').addEventListener('pointerdown', e => {
    e.preventDefault();
    if (castRain(ME, G.E[G.view])) banner('화살비');
  });
  el('upBtn').addEventListener('click', () => { renderUps(); el('modal').classList.add('on'); });
  el('closeUp').addEventListener('click', () => el('modal').classList.remove('on'));
  el('again').addEventListener('click', onAgain);
  el('btnStart').addEventListener('click', onStart);
}

/* ── 로비 ───────────────────────────────────────────────────────────── */

export function buildLobby(seats, levels, onPick) {
  const host = el('seats');
  host.innerHTML = '';
  for (const w of PLAYERS) {
    const row = document.createElement('div');
    row.className = 'seat';
    row.innerHTML = '<div class="dot" style="background:' + TEAM[w].c + '"></div>'
      + '<div class="nm">' + TEAM[w].nm + '</div><div class="opts"></div>';
    const opts = row.querySelector('.opts');
    for (const v of [null, ...levels]) {
      const b = document.createElement('button');
      b.textContent = v === null ? '사람' : v;
      b.className = seats[w] === v ? 'on' : '';
      b.addEventListener('click', () => onPick(w, v));
      opts.appendChild(b);
    }
    host.appendChild(row);
  }
}
export function lobbyMsg(t) { el('lobbyMsg').textContent = t || ''; }
export function closeLobby() { el('lobby').classList.add('off'); }
export function openLobby() { el('lobby').classList.remove('off'); }
export function showOver(title, sub) {
  el('overT').textContent = title; el('overS').textContent = sub;
  el('over').classList.add('on');
}
export function hideOver() { el('over').classList.remove('on'); }
