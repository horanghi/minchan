// AABB 충돌 판정.
//
// 원본은 cannon-es 의 beginContact 이벤트에 의존했다. 그런데 동물은 전부
// KINEMATIC 이고 화면 끝에서 반대편으로 순간이동(위치 직접 대입)하기 때문에,
// 빠른 개체(뱀 최대 5.0)는 접촉 이벤트가 프레임 타이밍에 따라 통째로
// 누락될 수 있었다. 매 프레임 겹침을 직접 보는 쪽이 싸고 확실하다.
//
// 순수 함수로 유지한다 — three.js 없이 테스트 가능해야 한다.

/**
 * 축 정렬 박스. center = {x, y, z}, half = {x, y, z} (반크기).
 * @typedef {{cx:number, cy:number, cz:number, hx:number, hy:number, hz:number}} Box
 */

/** 두 AABB 가 겹치는가. 면이 정확히 맞닿는 경우는 겹침으로 보지 않는다. */
export function overlaps(a, b) {
  return Math.abs(a.cx - b.cx) < a.hx + b.hx
    && Math.abs(a.cy - b.cy) < a.hy + b.hy
    && Math.abs(a.cz - b.cz) < a.hz + b.hz;
}

/**
 * 플레이어와 동물 목록의 충돌을 검사해 처음 부딪힌 동물을 돌려준다.
 * 없으면 null.
 *
 * z 가 한 칸 이상 떨어진 동물은 축 비교 전에 걸러낸다 — 동물은 자기 줄을
 * 벗어나지 않으므로 대부분의 후보가 여기서 탈락한다.
 */
export function findHit(playerBox, animals) {
  for (const a of animals) {
    const box = a.box;
    if (Math.abs(playerBox.cz - box.cz) > playerBox.hz + box.hz) continue;
    if (overlaps(playerBox, box)) return a;
  }
  return null;
}

/** 동물의 현재 위치로 AABB 를 갱신한다(할당 없이 제자리 수정). */
export function syncBox(box, x, z) {
  box.cx = x;
  box.cz = z;
  return box;
}
