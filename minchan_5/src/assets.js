// GLB 로딩과 종별 프로토타입 준비.
//
// 모델은 전부 gltf-transform 으로 (1) 안 쓰는 클립 제거 (2) 중복 클립 제거
// (3) weld (4) KHR_mesh_quantization 을 거쳤다. 12.95MB → 3.14MB.
// 양자화는 three.js 가 확장 없이 그대로 읽으므로 Draco/meshopt 처럼
// 별도 디코더 스크립트를 CDN 에서 받을 필요가 없다 — 순수 정적 배포 유지.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { PLAYER_SPECIES, SPECIES, requiredFiles } from './roster.js';

const MODEL_DIR = 'models';

/** 클립 이름은 "Armature|Walk" 처럼 접두사가 붙어 있을 수 있다. */
const shortName = (name) => name.split('|').pop();

/**
 * 모델 하나를 게임에서 쓸 수 있는 상태로 만든다.
 *  - metalness 0: 팩이 0.4 로 저작돼 있어 IBL 아래에서 젖은 플라스틱처럼 보인다
 *  - 목표 크기로 스케일 역산: 팩마다 저작 스케일이 달라 절대값을 못 쓴다
 *  - 그림자 on, 클립 이름 정규화
 */
function prepare(gltf, spec) {
  const root = gltf.scene;

  root.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true;
    o.receiveShadow = false;   // 동물끼리 그림자를 받을 일이 없다
    o.frustumCulled = false;   // 스킨드 메쉬는 바운딩이 바인드포즈 기준이라 잘못 걸러진다
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      m.metalness = 0;
      m.roughness = 0.85;
      m.envMapIntensity = 0.6;
    }
  });

  // 스케일 역산은 바인드 포즈 바운딩박스 기준.
  const raw = new THREE.Box3().setFromObject(root);
  const size = raw.getSize(new THREE.Vector3());
  const scale = spec.length
    ? spec.length / Math.max(size.x, size.z)   // 뱀처럼 똬리를 튼 모델은 길이 기준
    : spec.height / size.y;
  root.scale.setScalar(scale);

  // 발바닥을 y=0 에 맞춘다.
  const scaled = new THREE.Box3().setFromObject(root);
  root.position.y -= scaled.min.y;

  const dim = scaled.getSize(new THREE.Vector3());
  const hit = spec.hit ?? 0.7;

  // 모델은 전부 +Z 를 바라본다. 게임에서는 ±X 로 달리므로 Y 를 90° 돌린다.
  // 그러면 월드 X 폭 = 모델 길이(Z), 월드 Z 폭 = 모델 폭(X) 이 된다.
  const half = {
    hx: (dim.z / 2) * hit,
    hy: dim.y / 2,
    hz: (dim.x / 2) * hit,
  };

  const clips = new Map();
  for (const clip of gltf.animations) {
    clip.name = shortName(clip.name);
    clips.set(clip.name, clip);
  }

  return { root, clips, half, height: dim.y, scale };
}

/**
 * 전체 에셋을 로드한다. onProgress(0~1) 로 로딩 화면을 갱신한다.
 * @returns {Promise<{species: Map<string, object>, player: object}>}
 */
export async function loadAssets(onProgress = () => {}) {
  const loader = new GLTFLoader();
  const files = requiredFiles();

  let done = 0;
  const byFile = new Map();
  await Promise.all(files.map(async (file) => {
    const gltf = await loader.loadAsync(`${MODEL_DIR}/${file}.glb`);
    byFile.set(file, gltf);
    onProgress(++done / files.length);
  }));

  const species = new Map();
  for (const [id, spec] of Object.entries(SPECIES)) {
    species.set(id, { id, spec, ...prepare(byFile.get(spec.file), spec) });
  }
  const player = { spec: PLAYER_SPECIES, ...prepare(byFile.get(PLAYER_SPECIES.file), PLAYER_SPECIES) };

  return { species, player };
}
