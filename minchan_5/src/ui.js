// DOM 연결 — 점수판, 오버레이, 입력.
//
// 게임 로직은 여기서 아무것도 결정하지 않는다. 입력은 콜백으로 넘기고
// 화면 갱신 명령만 받는다.

import { STORAGE_KEY } from './constants.js';

const $ = (id) => document.getElementById(id);

export function createUI({ onMove, onStart, onRetry }) {
  const el = {
    hud: $('hud'), score: $('score'), biome: $('biome'),
    loading: $('loading'), loadBar: $('loadBar'), loadNote: $('loadNote'),
    menu: $('menu'), gameover: $('gameover'),
    finalScore: $('finalScore'), bestScore: $('bestScore'),
    dpad: $('dpad'),
  };

  let best = Number(localStorage.getItem(STORAGE_KEY)) || 0;
  let lastBiome = null;
  let biomeTimer = 0;

  // ── 키보드 ──
  const KEYS = {
    ArrowUp: [0, -1], w: [0, -1], W: [0, -1], ㅈ: [0, -1],
    ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], ㅁ: [-1, 0],
    ArrowRight: [1, 0], d: [1, 0], D: [1, 0], ㅇ: [1, 0],
    ArrowDown: [0, 1], s: [0, 1], S: [0, 1], ㄴ: [0, 1],
  };
  addEventListener('keydown', (e) => {
    if (e.repeat) return;      // 키를 누르고 있어도 한 칸만 — 원본과 같은 규칙
    const dir = KEYS[e.key];
    if (!dir) return;
    e.preventDefault();
    onMove(dir[0], dir[1]);
  });

  // ── 터치 스와이프 ──
  let touchStart = null;
  addEventListener('touchstart', (e) => {
    if (e.target.closest('#dpad, .btn, #homeBtn')) return;
    touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  addEventListener('touchend', (e) => {
    if (!touchStart || e.target.closest('#dpad, .btn, #homeBtn')) { touchStart = null; return; }
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.hypot(dx, dy) < 22) return onMove(0, -1);   // 탭 = 전진
    if (Math.abs(dx) > Math.abs(dy)) return onMove(dx > 0 ? 1 : -1, 0);
    onMove(0, dy < 0 ? -1 : 1);
  }, { passive: true });

  // ── D-pad ── touchstart 로 받아 클릭 지연 300ms 를 없앤다
  for (const b of el.dpad.querySelectorAll('button')) {
    const fire = (e) => { e.stopPropagation(); onMove(+b.dataset.dx, +b.dataset.dz); };
    b.addEventListener('touchstart', fire, { passive: true });
    b.addEventListener('click', fire);
  }

  $('btnStart').addEventListener('click', onStart);
  $('btnRetry').addEventListener('click', onRetry);

  return {
    setProgress(p) {
      const pct = Math.round(p * 100);
      el.loadBar.style.width = `${pct}%`;
      el.loadNote.textContent = `동물들을 불러오는 중… ${pct}%`;
    },

    showMenu() {
      el.loading.hidden = true;
      el.menu.hidden = false;
      el.gameover.hidden = true;
      el.hud.style.display = 'none';
      el.dpad.classList.remove('show');
    },

    showGame() {
      el.menu.hidden = true;
      el.gameover.hidden = true;
      el.hud.style.display = 'block';
      el.dpad.classList.add('show');
      el.score.textContent = '0';
      lastBiome = null;
    },

    showGameOver(score) {
      const isNewBest = score > best;
      if (isNewBest) {
        best = score;
        localStorage.setItem(STORAGE_KEY, String(best));
      }
      el.finalScore.textContent = String(score);
      el.bestScore.textContent = isNewBest ? `🎉 신기록! ${best}` : `최고 ${best}`;
      el.bestScore.classList.toggle('new', isNewBest);
      el.gameover.hidden = false;
      el.hud.style.display = 'none';
      el.dpad.classList.remove('show');
    },

    setScore(n) { el.score.textContent = String(n); },

    /** 바이오미가 바뀌면 이름을 잠깐 띄운다. */
    setBiome(label, delta) {
      if (label !== lastBiome) {
        lastBiome = label;
        el.biome.textContent = label;
        el.biome.classList.add('show');
        biomeTimer = 2.2;
        return;
      }
      if (biomeTimer > 0) {
        biomeTimer -= delta;
        if (biomeTimer <= 0) el.biome.classList.remove('show');
      }
    },

    get best() { return best; },
  };
}
