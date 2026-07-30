// 게임 루프와 배선.

import * as THREE from 'three';

import { BEHIND_CAMERA_DEATH, CAM_LERP } from './constants.js';
import { biomeAt, moodAt } from './biomes.js';
import { findHit } from './collision.js';
import { loadAssets } from './assets.js';
import { applyMood, createRenderer, trackCamera, trackShadow } from './renderer.js';
import { createPool } from './pool.js';
import { createWorld } from './world.js';
import { createPlayer } from './player.js';
import { createUI } from './ui.js';
import { stagger, updateAnimals } from './animals.js';

const DEATH_HOLD = 1.35;      // 사망 연출 길이(실시간 초)
const SHAKE_TIME = 0.45;

const view = createRenderer(document.body);
const { renderer, scene, camera, sun } = view;

let assets = null;
let pool = null;
let world = null;
let player = null;

let state = 'loading';        // loading | menu | playing | dying | dead
let score = 0;
let deathTimer = 0;
let shakeTimer = 0;
let timeScale = 1;

const ui = createUI({
  onMove: (dx, dz) => tryMove(dx, dz),
  onStart: () => startGame(),
  onRetry: () => startGame(),
});

// ── 부팅 ──────────────────────────────────────────────────────
(async function boot() {
  try {
    assets = await loadAssets((p) => ui.setProgress(p));
  } catch (err) {
    document.getElementById('loadNote').textContent =
      '모델을 불러오지 못했어요. 새로고침 해주세요.';
    console.error('에셋 로드 실패', err);
    return;
  }

  pool = createPool(scene, assets.species);
  world = createWorld(scene, pool, 1);
  player = createPlayer(scene, assets.player);

  // 메뉴 뒤로 실제 맵이 보이게 미리 한 판 깔아둔다.
  world.reset(randomSeed());
  applyMood(view, moodAt(0));
  camera.position.set(6, 8, 6);
  camera.lookAt(-1, 0, -1);

  state = 'menu';
  ui.showMenu();
})();

function randomSeed() {
  return (Math.random() * 0x7fffffff) | 0;
}

function startGame() {
  score = 0;
  deathTimer = 0;
  shakeTimer = 0;
  timeScale = 1;
  player.reset();
  world.reset(randomSeed());
  camera.position.set(6, 8, 6);
  camera.lookAt(-1, 0, -1);
  applyMood(view, moodAt(0));
  ui.showGame();
  state = 'playing';
}

function tryMove(dx, dz) {
  if (state !== 'playing') return;
  const moved = player.move(dx, dz, (gx, row) => !world.isBlocked(gx, row));
  if (moved && dz < 0) {
    // 앞으로 나아간 만큼만 점수. 가장 멀리 간 지점을 기준으로 한다.
    const reached = -player.state.gridZ;
    if (reached > score) {
      score = reached;
      ui.setScore(score);
    }
  }
}

function die(knockDir) {
  if (state !== 'playing') return;
  player.kill(knockDir);
  state = 'dying';
  deathTimer = 0;
  shakeTimer = SHAKE_TIME;
}

// ── 루프 ──────────────────────────────────────────────────────
const shake = new THREE.Vector3();
let last = performance.now();

function frame(now) {
  requestAnimationFrame(frame);
  const real = Math.min((now - last) / 1000, 0.05);
  last = now;

  if (state === 'loading') return;

  // 사망 중에는 시간을 늦춰 연출에 무게를 준다.
  if (state === 'dying') {
    deathTimer += real;
    timeScale = 0.25 + 0.75 * Math.max(0, 1 - deathTimer / 0.35);
    if (deathTimer >= DEATH_HOLD) {
      state = 'dead';
      ui.showGameOver(score);
    }
  } else {
    timeScale = 1;
  }

  const delta = real * timeScale;
  const playerRow = -player.state.gridZ;

  if (state === 'menu') {
    // 메뉴에서도 동물은 움직인다 — 정지 화면보다 살아 있어 보인다.
    updateAnimals(world.animals, delta, 0);
    orbitMenuCamera(real);
  } else {
    world.update(playerRow);
    updateAnimals(world.animals, delta, player.group.position.z);
    player.update(delta);

    if (state === 'playing') {
      const hit = findHit(player.state.box, world.animals);
      if (hit) {
        stagger(pool, hit);
        die(hit.dir);
      } else if (player.group.position.z - camera.position.z > BEHIND_CAMERA_DEATH) {
        // 화면 뒤로 밀려나면 사망 (원본과 같은 규칙)
        die(1);
      }
    }

    trackCamera(camera, player.group.position, CAM_LERP);
    trackShadow(sun, player.group.position);

    const mood = moodAt(playerRow);
    applyMood(view, mood);
    if (state === 'playing') ui.setBiome(biomeAt(playerRow).label, real);
  }

  // 카메라 흔들림 — 감쇠하며 사라진다.
  if (shakeTimer > 0) {
    shakeTimer = Math.max(0, shakeTimer - real);
    const amp = (shakeTimer / SHAKE_TIME) ** 2 * 0.42;
    shake.set(
      (Math.random() - 0.5) * amp,
      (Math.random() - 0.5) * amp,
      (Math.random() - 0.5) * amp,
    );
    camera.position.add(shake);
  }

  renderer.render(scene, camera);
}

/**
 * 메뉴 화면 카메라 — 트랙을 따라 내려다보며 좌우로 천천히 흔들린다.
 * 넓게 도는 궤도로 만들면 깔린 바닥의 바깥 경계가 화면에 잡힌다.
 * 시선을 앞쪽(-Z)으로 두면 먼 쪽은 안개가, 좌우는 화각이 알아서 가려준다.
 */
let menuAngle = 0;
function orbitMenuCamera(real) {
  menuAngle += real * 0.24;
  // 낮게 깔아야 좌우로 펼쳐진 바닥의 바깥 경계가 화각 밖에 남는다.
  camera.position.set(Math.sin(menuAngle) * 2.6, 4.4, 1.6 + Math.cos(menuAngle * 0.7) * 0.9);
  camera.lookAt(Math.sin(menuAngle) * 1.0, 0.5, -11);
}

requestAnimationFrame(frame);

// 디버깅·자동 테스트용 창구. 콘솔에서 상태를 보고 조작할 수 있게 열어둔다.
window.__game = {
  get state() { return state; },
  get score() { return score; },
  get player() { return player; },
  get world() { return world; },
  stats: () => ({
    ...world.stats(),
    pool: pool.stats(),
    calls: renderer.info.render.calls,
    // GPU 자원 카운터. 줄이 사라져도 이 값이 늘면 그게 곧 누수다.
    gpu: { ...renderer.info.memory },
  }),
  move: tryMove,
  start: startGame,

  /** 특정 줄로 즉시 이동 — 뒤쪽 바이오미를 확인할 때 쓴다. */
  jumpToRow(row) {
    if (state !== 'playing') startGame();
    player.state.gridZ = -row;
    player.state.isMoving = false;
    player.group.position.set(player.state.gridX, 0, -row);
    score = Math.max(score, row);
    ui.setScore(score);
    world.update(row);
    const c = player.group.position;
    camera.position.set(c.x + 6, 8, c.z + 6);
    applyMood(view, moodAt(row));
  },
};
