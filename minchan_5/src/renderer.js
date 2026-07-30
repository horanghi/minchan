// 렌더 파이프라인.
//
// 원본이 "투박"했던 진짜 이유는 지오메트리보다 조명·톤매핑에 있었다.
// Lambert 머티리얼 + 톤매핑 없음 + 환경광 없음이면 아무리 좋은 모델을 넣어도
// 색이 납작하게 뭉개진다. 여기서는 세 가지를 바꾼다.
//   1) ACESFilmic 톤매핑 — 하이라이트가 타지 않고 색이 살아난다
//   2) RoomEnvironment IBL — 파일 0KB 로 그림자면에 은은한 반사광이 들어간다
//   3) 섀도맵을 플레이어 주변만 덮게 추적 — 같은 해상도로 텍셀 밀도를 올린다

import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import {
  CAM_FOV, CAM_LOOK_OFFSET, CAM_OFFSET,
  SHADOW_HALF, SHADOW_MAP_SIZE,
} from './constants.js';

export function createRenderer(canvasParent) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  canvasParent.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x87ceeb, 20, 34);

  // 파일을 받지 않는 절차적 환경맵. 스타일라이즈드 룩에서 그림자면이
  // 새까맣게 죽는 걸 막아준다.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(CAM_FOV, innerWidth / innerHeight, 0.1, 120);
  camera.position.set(CAM_OFFSET.x, CAM_OFFSET.y, CAM_OFFSET.z);
  camera.lookAt(0, 0, 0);

  const sun = new THREE.DirectionalLight(0xfff2d8, 2.4);
  sun.position.set(6, 14, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(SHADOW_MAP_SIZE, SHADOW_MAP_SIZE);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 60;
  sun.shadow.bias = -0.0009;
  sun.shadow.normalBias = 0.02;
  // 원본은 ±14 고정이었다. 플레이어를 따라다니며 ±8 만 덮으면 텍셀이 촘촘해진다.
  sun.shadow.camera.left = -SHADOW_HALF;
  sun.shadow.camera.right = SHADOW_HALF;
  sun.shadow.camera.top = SHADOW_HALF;
  sun.shadow.camera.bottom = -SHADOW_HALF;
  sun.shadow.camera.updateProjectionMatrix();
  scene.add(sun);
  scene.add(sun.target);

  const ambient = new THREE.AmbientLight(0xbfd8ff, 0.42);
  scene.add(ambient);

  addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  });

  return { renderer, scene, camera, sun, ambient };
}

/**
 * 바이오미 분위기를 화면에 반영한다. moodAt() 이 준 값만 받는다.
 * 매 프레임 호출되므로 새 Color 를 만들지 않고 기존 인스턴스를 수정한다.
 */
const _sky = new THREE.Color();
export function applyMood(view, mood) {
  const { renderer, scene, sun, ambient } = view;
  _sky.setHex(mood.sky);
  if (!scene.background) scene.background = _sky.clone();
  else scene.background.copy(_sky);
  scene.fog.color.copy(_sky);
  scene.fog.near = mood.fogNear;
  scene.fog.far = mood.fogFar;
  sun.color.setHex(mood.sunColor);
  sun.intensity = mood.sunIntensity;
  ambient.intensity = mood.ambient;
  renderer.toneMappingExposure = mood.exposure;
}

/** 그림자 카메라가 플레이어를 따라가게 한다 (텍셀 밀도 유지). */
export function trackShadow(sun, target) {
  sun.position.set(target.x + 6, 14, target.z + 8);
  sun.target.position.set(target.x, 0, target.z);
  sun.target.updateMatrixWorld();
}

/** 카메라 추적 — 원본과 같은 오프셋·같은 lerp 계수. */
const _camTarget = new THREE.Vector3();
export function trackCamera(camera, target, lerpAmount) {
  _camTarget.set(
    target.x + CAM_OFFSET.x,
    target.y + CAM_OFFSET.y,
    target.z + CAM_OFFSET.z,
  );
  camera.position.lerp(_camTarget, lerpAmount);
  camera.lookAt(
    target.x + CAM_LOOK_OFFSET.x,
    0,
    target.z + CAM_LOOK_OFFSET.z,
  );
}

/**
 * 접지 그림자 데칼용 텍스처. 방사형 그라디언트를 캔버스로 그려 쓰므로
 * 파일이 늘지 않는다. SSAO 대신 이걸 쓰는 이유는 모바일에서 안전하고
 * 훨씬 싸면서, 발이 바닥에 붙어 보이는 효과의 90% 를 내주기 때문이다.
 */
export function createContactShadowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(0,0,0,0.55)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.28)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
