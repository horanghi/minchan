// 바이오미 진행과 전환 보간.
//
// 줄 번호만으로 어느 바이오미인지가 정해진다(결정론). 구간 경계에서는
// 하늘·안개·바닥색을 BIOME_BLEND_ROWS 에 걸쳐 섞어 뚝 끊기지 않게 한다.
// three.js 의존이 없어야 테스트할 수 있으므로 색은 0xRRGGBB 정수로 다룬다.

import { BIOMES } from './roster.js';
import { BIOME_BLEND_ROWS, ROWS_PER_BIOME } from './constants.js';

/** 줄 번호 → 바이오미 인덱스. 세 구간을 순환한다. */
export function biomeIndexAt(row) {
  const i = Math.floor(Math.max(0, row) / ROWS_PER_BIOME);
  return i % BIOMES.length;
}

/** 줄 번호 → 바이오미 정의. 동물 배분·도로 확률은 이걸 그대로 쓴다. */
export function biomeAt(row) {
  return BIOMES[biomeIndexAt(row)];
}

/**
 * 구간 끝자락에서 다음 바이오미로 섞이는 정도(0~1).
 * 경계 BIOME_BLEND_ROWS 줄 앞에서부터 0 → 1 로 올라간다.
 */
export function blendAt(row) {
  if (row < 0) return 0;
  const into = row % ROWS_PER_BIOME;
  const start = ROWS_PER_BIOME - BIOME_BLEND_ROWS;
  if (into < start) return 0;
  return (into - start + 1) / BIOME_BLEND_ROWS;
}

/** 0xRRGGBB 두 색을 t(0~1)로 선형 보간. */
export function lerpColor(a, b, t) {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

const lerp = (a, b, t) => a + (b - a) * t;

/**
 * 해당 줄에서 화면에 적용할 분위기 값. 전환 구간이면 이웃 바이오미와 섞인다.
 * 렌더러는 이 결과만 보고 하늘·안개·조명을 세팅한다.
 */
export function moodAt(row) {
  const i = biomeAt(row);
  const t = blendAt(row);
  if (t <= 0) {
    return {
      sky: i.sky, grass: i.grass, road: i.road, tree: i.tree,
      fogNear: i.fog[0], fogFar: i.fog[1],
      sunColor: i.sunColor, sunIntensity: i.sunIntensity,
      ambient: i.ambient, exposure: i.exposure,
    };
  }
  const j = BIOMES[(biomeIndexAt(row) + 1) % BIOMES.length];
  return {
    sky: lerpColor(i.sky, j.sky, t),
    grass: lerpColor(i.grass, j.grass, t),
    road: lerpColor(i.road, j.road, t),
    tree: lerpColor(i.tree, j.tree, t),
    fogNear: lerp(i.fog[0], j.fog[0], t),
    fogFar: lerp(i.fog[1], j.fog[1], t),
    sunColor: lerpColor(i.sunColor, j.sunColor, t),
    sunIntensity: lerp(i.sunIntensity, j.sunIntensity, t),
    ambient: lerp(i.ambient, j.ambient, t),
    exposure: lerp(i.exposure, j.exposure, t),
  };
}

/**
 * 거리에 따른 추가 난이도 배율. 바이오미가 한 바퀴 돌 때마다 조금씩 빨라진다.
 * 무한히 오르면 피할 수 없어지므로 상한을 둔다.
 */
export function speedScaleAt(row) {
  const lap = Math.floor(Math.max(0, row) / (ROWS_PER_BIOME * BIOMES.length));
  return Math.min(1 + lap * 0.12, 1.6);
}
