// 플레이어(닭).
//
// 원본은 cannon 바디에 속도를 줘서 점프시키고, 착지를 "속도와 높이가 어떤
// 조건을 만족하면"으로 추정했다. 여기서는 경과 시간이 곧 위치다 — 프레임이
// 밀려도 격자에서 어긋나지 않는다.

import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

import { BOARD_HALF, JUMP_TIME, TILE_SIZE } from './constants.js';
import { hopDone, hopPosition, hopSquash } from './jump.js';

const DEATH_TIME = 1.15;

export function createPlayer(scene, proto) {
  const group = new THREE.Group();
  const model = cloneSkinned(proto.root);
  group.add(model);
  scene.add(group);

  const mixer = new THREE.AnimationMixer(model);
  const actions = new Map();
  for (const [name, clip] of proto.clips) actions.set(name, mixer.clipAction(clip));

  const half = proto.half;
  const state = {
    gridX: 0, gridZ: 0,
    isMoving: false, isDead: false,
    jumpT: 0,
    from: { x: 0, z: 0 },
    to: { x: 0, z: 0 },
    facing: Math.PI,
    death: null,
    // 모델은 +Z 를 본다. 게임 전진 방향은 -Z 이므로 180° 돌려놓는다.
    box: { cx: 0, cy: half.hy, cz: 0, hx: half.hz, hy: half.hy, hz: half.hx },
  };

  let current = null;
  function play(name, { loop = true, clamp = false, timeScale = 1 } = {}) {
    const action = actions.get(name);
    if (!action || current === name) return action;
    mixer.stopAllAction();
    action.reset();
    action.timeScale = timeScale;
    action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
    action.clampWhenFinished = clamp;
    action.play();
    current = name;
    return action;
  }

  const clips = proto.spec.clips;

  function reset() {
    state.gridX = state.gridZ = 0;
    state.isMoving = state.isDead = false;
    state.jumpT = 0;
    state.from = { x: 0, z: 0 };
    state.to = { x: 0, z: 0 };
    state.facing = Math.PI;
    state.death = null;
    group.position.set(0, 0, 0);
    group.rotation.set(0, Math.PI, 0);
    group.scale.set(1, 1, 1);
    syncBox();
    current = null;
    play(clips.idle);
  }

  function syncBox() {
    state.box.cx = group.position.x;
    state.box.cy = group.position.y + half.hy;
    state.box.cz = group.position.z;
  }

  /** 한 칸 이동 시도. 이동했으면 true. */
  function move(dx, dz, isOpen) {
    if (state.isDead || state.isMoving) return false;
    const nx = state.gridX + dx;
    const nz = state.gridZ + dz;
    if (Math.abs(nx) > BOARD_HALF) return false;
    if (!isOpen(nx, -nz)) return false;

    state.gridX = nx;
    state.gridZ = nz;
    state.from = { x: group.position.x, z: group.position.z };
    state.to = { x: nx * TILE_SIZE, z: nz * TILE_SIZE };
    state.jumpT = 0;
    state.isMoving = true;

    // 부리가 이동 방향을 향하게. 모델 기본 방향이 +Z 라 전진(-Z)은 180°.
    if (dz < 0) state.facing = Math.PI;
    else if (dz > 0) state.facing = 0;
    else state.facing = dx < 0 ? -Math.PI / 2 : Math.PI / 2;

    // 리깅된 Jump 클립 길이가 0.42s 로 JUMP_TIME(0.4264s)과 거의 같다.
    // 배속을 맞춰 한 번만 재생하면 도약과 착지가 정확히 떨어진다.
    const action = actions.get(clips.jump);
    if (action) {
      const dur = action.getClip().duration;
      play(clips.jump, { loop: false, clamp: true, timeScale: dur / JUMP_TIME });
      current = null;   // 다음 점프에서 다시 처음부터 재생되게
    }
    return true;
  }

  /**
   * 사망. 원본은 몸을 납작하게 누르고 빨갛게 물들였는데 스타일라이즈드
   * 룩에서는 싸구려로 보인다. 대신 얻어맞은 방향으로 튕겨나가며 구르고,
   * 리깅된 Death 클립을 재생한다. 카메라 흔들림·슬로모는 main 이 맡는다.
   */
  function kill(knockDir = 1) {
    if (state.isDead) return false;
    state.isDead = true;
    state.isMoving = false;
    state.death = {
      t: 0,
      dir: knockDir,
      startX: group.position.x,
      startY: group.position.y,
      startZ: group.position.z,
      spin: (Math.random() - 0.5) * 6,
    };
    play(clips.death, { loop: false, clamp: true });
    return true;
  }

  function update(delta) {
    if (state.isDead) {
      const d = state.death;
      d.t = Math.min(d.t + delta, DEATH_TIME);
      const p = d.t / DEATH_TIME;
      // 포물선으로 튕겨나가 구른다. 감속하며 바닥에 눕는다.
      const fly = Math.sin(Math.min(p, 0.5) * Math.PI);
      group.position.x = d.startX + d.dir * p * 2.4;
      group.position.y = d.startY + fly * 0.9 * (1 - p * 0.5);
      group.position.z = d.startZ + Math.sin(p * Math.PI) * 0.35;
      group.rotation.z = d.dir * p * 3.2;
      group.rotation.y = state.facing + d.spin * p;
      group.scale.setScalar(1 - p * 0.08);
      mixer.update(delta);
      syncBox();
      return;
    }

    if (state.isMoving) {
      state.jumpT += delta;
      const pos = hopPosition(state.from, state.to, state.jumpT);
      group.position.set(pos.x, pos.y, pos.z);

      // 스쿼시&스트레치 — 리깅 클립만으로는 안 나오는 탄력을 스케일로 덧입힌다.
      const s = hopSquash(state.jumpT);
      group.scale.set(s.xz, s.y, s.xz);

      if (hopDone(state.jumpT)) {
        state.isMoving = false;
        group.position.set(state.to.x, 0, state.to.z);
        group.scale.set(1, 1, 1);
        play(clips.idle);
      }
    }

    // 회전은 부드럽게 따라간다 — 즉시 스냅하면 뻣뻣해 보인다.
    const diff = shortestAngle(group.rotation.y, state.facing);
    group.rotation.y += diff * Math.min(1, delta * 18);

    mixer.update(delta);
    syncBox();
  }

  reset();

  return { group, state, move, kill, update, reset, play, mixer };
}

/** -π~π 범위의 최단 각도 차. */
function shortestAngle(from, to) {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}
