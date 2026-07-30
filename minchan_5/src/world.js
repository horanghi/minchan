// 줄(row) 생성·제거와 장식물.
//
// 원본의 GPU 메모리 누수(removeRow 가 scene.remove 만 하고 dispose 를 안 함)는
// "제거할 때 dispose 를 부르자"가 아니라 "애초에 줄마다 새로 만들지 말자"로
// 고쳤다. 지오메트리는 전역 공유, 머티리얼은 색으로 캐시한다. 줄이 사라져도
// 반납할 GPU 자원이 없으니 누수가 생길 여지 자체가 없다.

import * as THREE from 'three';

import { CULL_BEHIND, GEN_AHEAD, TILE_SIZE } from './constants.js';
import { moodAt } from './biomes.js';
import { planRow } from './rowplan.js';
import { spawnAnimal } from './animals.js';

// 바닥 폭은 "화각 안에서 월드의 끝이 보이지 않을 것"으로 정해진다.
// 수평 화각 절반이 약 39°이므로 거리 d 에서 d·tan39° ≈ 0.82d 만큼 보인다.
// 안개가 완전히 덮는 거리(≈34)까지 가리려면 반폭 28 이 필요하다.
const FLOOR_WIDTH = 56;
const PLAY_HALF = 4.5;      // 실제 이동 가능 범위(±4 칸)의 시각적 경계
const SIDE_WIDTH = 3.5;     // 경계를 표시하는 갓길 — 바닥 전체를 덮지는 않는다
const DECOR_EDGE = 17;      // 판 밖 장식 나무가 서는 범위

// ── 공유 지오메트리 ───────────────────────────────────────────
// 바닥은 줄 전체를 한 색으로 깔고, 좌우 대칭 갓길로 플레이 영역을 표시한다.
// 원본처럼 가운데만 덮는 오버레이를 얹으면 폭이 어긋나 이음매가 드러난다.
const geo = {
  floor: new THREE.BoxGeometry(FLOOR_WIDTH, 0.2, TILE_SIZE),
  side: new THREE.BoxGeometry(SIDE_WIDTH, 0.08, TILE_SIZE),
  trunk: new THREE.CylinderGeometry(0.075, 0.1, 0.42, 6),
  leafLow: new THREE.IcosahedronGeometry(0.34, 0),
  leafHigh: new THREE.IcosahedronGeometry(0.27, 0),
  rock: new THREE.IcosahedronGeometry(0.11, 0),
};

/** 색마다 하나씩만 만들어 돌려쓰는 머티리얼 캐시. */
function createMaterialCache() {
  const cache = new Map();
  return {
    get(hex, opts = {}) {
      const key = `${hex}|${opts.roughness ?? 1}|${opts.flatShading ? 1 : 0}`;
      let m = cache.get(key);
      if (!m) {
        m = new THREE.MeshStandardMaterial({
          color: hex,
          roughness: opts.roughness ?? 1,
          metalness: 0,
          flatShading: opts.flatShading ?? false,
        });
        cache.set(key, m);
      }
      return m;
    },
    dispose() {
      for (const m of cache.values()) m.dispose();
      cache.clear();
    },
    size: () => cache.size,
  };
}

export function createWorld(scene, pool, seed = 1) {
  const materials = createMaterialCache();
  const rows = new Map();       // row → {plan, meshes, animals}
  const animals = [];           // 충돌·이동용 평면 목록
  let worldSeed = seed;
  let farRow = 0;

  function buildRow(row) {
    if (rows.has(row)) return;
    const plan = planRow(worldSeed, row);
    const mood = moodAt(row);
    const z = -row * TILE_SIZE;
    const meshes = [];
    const rowAnimals = [];

    // ── 바닥 ──
    const floorColor = plan.type === 'road' ? mood.road : mood.grass;
    const floor = new THREE.Mesh(geo.floor, materials.get(floorColor));
    floor.position.set(0, -0.1, z);
    floor.receiveShadow = true;
    scene.add(floor);
    meshes.push(floor);

    // 좌우 갓길. 이동 가능 범위 밖을 살짝 어둡게 깔아 "여기까지"를 보여준다.
    // 양쪽이 같은 폭이라 어느 줄에서든 경계가 같은 자리에 온다.
    // 색은 그 줄 노면을 어둡게 한 것 — 도로 줄인데 갓길만 초록이면
    // 동물이 잔디 위를 달리는 것처럼 보인다.
    const sideMat = materials.get(darken(floorColor, 0.82));
    for (const sign of [-1, 1]) {
      const side = new THREE.Mesh(geo.side, sideMat);
      side.position.set(sign * (PLAY_HALF + SIDE_WIDTH / 2), 0.003, z);
      side.receiveShadow = true;
      scene.add(side);
      meshes.push(side);
    }

    // ── 나무 ──
    const leafGeo = plan.biomeId === 'forest' ? geo.leafHigh : geo.leafLow;
    const trunkMat = materials.get(0x6b4423, { flatShading: true });
    const leafMat = materials.get(mood.tree, { flatShading: true });

    for (const x of plan.trees) {
      meshes.push(...makeTree(x, z, leafGeo, trunkMat, leafMat, 1));
    }
    // 판 밖 장식 — 이동을 막지 않는다. 가장자리가 허전해 보이는 걸 막는다.
    if (plan.type === 'grass') {
      const rand = mulberryFrom(worldSeed, row);
      for (let i = 0; i < 6; i++) {
        if (rand() > 0.62) continue;
        const side = rand() < 0.5 ? -1 : 1;
        // 가까울수록 촘촘하고 멀수록 성기게 — 제곱을 쓰면 자연스럽게 흩어진다.
        const t = rand() ** 1.6;
        const x = side * (PLAY_HALF + 0.8 + t * (DECOR_EDGE - PLAY_HALF));
        meshes.push(...makeTree(x, z + (rand() - 0.5) * 0.5, leafGeo, trunkMat, leafMat,
          0.8 + rand() * 0.6));
      }
    }

    // ── 도로 장식 ──
    if (plan.type === 'road') {
      const rand = mulberryFrom(worldSeed, row + 7777);
      const rockMat = materials.get(darken(mood.road), { flatShading: true });
      for (let i = 0; i < 5; i++) {
        if (rand() > 0.34) continue;
        const rock = new THREE.Mesh(geo.rock, rockMat);
        rock.position.set((rand() - 0.5) * (DECOR_EDGE * 1.6), 0.03, z + (rand() - 0.5) * 0.6);
        rock.rotation.set(rand() * 3, rand() * 3, rand() * 3);
        rock.receiveShadow = true;
        scene.add(rock);
        meshes.push(rock);
      }
    }

    // ── 동물 ──
    plan.animals.forEach((planned, i) => {
      // 같은 줄의 개체에 서로 다른 보행 위상을 줘서 한 몸처럼 움직이지 않게 한다.
      const phase = plan.animals.length > 1 ? i / plan.animals.length : 0;
      const inst = spawnAnimal(pool, planned, row, z, phase);
      animals.push(inst);
      rowAnimals.push(inst);
    });

    rows.set(row, { plan, meshes, animals: rowAnimals });
  }

  function makeTree(x, z, leafGeo, trunkMat, leafMat, scale) {
    const trunk = new THREE.Mesh(geo.trunk, trunkMat);
    trunk.position.set(x, 0.21 * scale, z);
    trunk.scale.setScalar(scale);
    trunk.castShadow = true;
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.position.set(x, (0.42 + 0.26) * scale, z);
    leaf.scale.setScalar(scale);
    leaf.rotation.y = x * 1.7;    // 같은 각도로 늘어서 보이지 않게
    leaf.castShadow = true;
    scene.add(trunk, leaf);
    return [trunk, leaf];
  }

  function removeRow(row) {
    const entry = rows.get(row);
    if (!entry) return;
    // 지오메트리·머티리얼은 전부 공유물이므로 dispose 하지 않는다.
    // 씬에서 떼는 것으로 충분하고, 그래서 누수가 발생할 수 없다.
    for (const m of entry.meshes) scene.remove(m);
    for (const inst of entry.animals) {
      pool.release(inst);
      const i = animals.indexOf(inst);
      if (i >= 0) animals.splice(i, 1);
    }
    rows.delete(row);
  }

  return {
    rows,
    animals,

    /** 플레이어 줄 기준으로 앞쪽을 채우고 뒤쪽을 정리한다. */
    update(playerRow) {
      // 정상 플레이에서는 한 번에 한 줄씩만 전진하지만, 어떤 이유로든
      // 크게 건너뛰면 만들자마자 버릴 줄을 수백 개 짓게 된다.
      // 살아남을 구간 앞으로 커서를 당겨 헛일을 막는다.
      const oldest = playerRow - CULL_BEHIND;
      if (farRow < oldest) farRow = oldest - 1;

      const need = playerRow + GEN_AHEAD;
      while (farRow < need) buildRow(++farRow);
      for (const row of rows.keys()) {
        if (row < oldest) removeRow(row);
      }
    },

    /** 나무가 막고 있는 칸인가. 판 밖 장식은 판정에서 제외된다. */
    isBlocked(x, row) {
      const entry = rows.get(row);
      if (!entry) return false;
      return entry.plan.type === 'grass' && entry.plan.trees.includes(x);
    },

    /** 새 판. 시드를 바꾸면 맵 배치가 통째로 달라진다. */
    reset(newSeed) {
      for (const row of [...rows.keys()]) removeRow(row);
      worldSeed = newSeed;
      farRow = -3;
      for (let r = -3; r <= 0; r++) buildRow(r);
      farRow = 0;
      this.update(0);
    },

    dispose() {
      for (const row of [...rows.keys()]) removeRow(row);
      materials.dispose();
      for (const g of Object.values(geo)) g.dispose();
    },

    stats: () => ({ rows: rows.size, animals: animals.length, materials: materials.size() }),
  };
}

/** 장식 배치용 보조 난수 — 줄 내용과 같은 시드 계열을 쓴다. */
function mulberryFrom(seed, row) {
  let a = (Math.imul(seed ^ row, 0x45d9f3b) ^ (row << 7)) >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 돌 색: 도로색보다 어둡게. */
function darken(hex, amount = 0.72) {
  const r = Math.round(((hex >> 16) & 0xff) * amount);
  const g = Math.round(((hex >> 8) & 0xff) * amount);
  const b = Math.round((hex & 0xff) * amount);
  return (r << 16) | (g << 8) | b;
}
