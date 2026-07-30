// 점프 포물선 — 물리 엔진 없이 수식으로.
//
// 원본은 cannon-es 바디에 y 속도 JUMP_VEL 을 주고 중력이 끌어내리게 했다.
// 실제로 쓰인 건 이 포물선 하나뿐이라(나머지는 AABB 겹침 판정) 엔진을
// 통째로 걷어내고 닫힌 수식으로 대체한다. 결과는 수치적으로 동일하면서
// 프레임레이트와 무관하게 결정론적이다.

import { GRAVITY, JUMP_TIME, JUMP_VEL } from './constants.js';

/**
 * 점프 시작 후 t 초 시점의 지면 위 높이.
 * y(t) = JUMP_VEL·t − ½·GRAVITY·t²  (t=JUMP_TIME/2 에서 정확히 JUMP_H)
 */
export function hopHeight(t) {
  if (t <= 0 || t >= JUMP_TIME) return 0;
  return JUMP_VEL * t - 0.5 * GRAVITY * t * t;
}

/** 점프 진행률 0→1. 수평 이동은 이 값으로 선형 보간한다. */
export function hopProgress(t) {
  if (t <= 0) return 0;
  if (t >= JUMP_TIME) return 1;
  return t / JUMP_TIME;
}

/** 착지 여부. */
export function hopDone(t) {
  return t >= JUMP_TIME;
}

/**
 * 점프 중 위치. from/to 는 {x, z} 격자 좌표(월드 단위).
 * 착지 시점에는 정확히 to 를 반환하므로 격자에서 어긋나지 않는다.
 */
export function hopPosition(from, to, t) {
  const p = hopProgress(t);
  return {
    x: from.x + (to.x - from.x) * p,
    y: hopHeight(t),
    z: from.z + (to.z - from.z) * p,
  };
}

/**
 * 착지 직전 몸을 눌렀다 펴는 스쿼시&스트레치 배율.
 * 원작 Crossy Road 의 홉 감각을 만드는 요소 — 리깅된 Jump 클립만으로는
 * 이 "탄력"이 안 나와서 스케일로 덧입힌다.
 * 도약·착지 순간에 납작(y↓, xz↑), 체공 정점에서 길쭉(y↑, xz↓).
 */
export function hopSquash(t) {
  if (t <= 0 || t >= JUMP_TIME) return { xz: 1, y: 1 };
  const p = t / JUMP_TIME;
  // sin 한 주기: 0→0, 0.5→1, 1→0. 정점에서 최대로 늘어난다.
  const stretch = Math.sin(p * Math.PI);
  // 도약/착지 근처(p가 0 또는 1에 가까울 때)에서 눌리는 양.
  const squash = Math.max(0, 1 - Math.sin(p * Math.PI) * 3);
  const y = 1 + stretch * 0.16 - squash * 0.22;
  return { xz: 1 / Math.sqrt(y), y };   // 부피 근사 보존
}
