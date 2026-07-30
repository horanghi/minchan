// 결정론적 난수.
//
// 원본은 genRow() 안에서 Math.random() 을 직접 불렀다. 그래서 같은 줄이라도
// "언제 생성됐는가"에 따라 내용이 달라졌고, 테스트로 고정할 수도 없었다.
// 여기서는 (월드 시드, 줄 번호, 용도) 로 스트림을 만들어 줄 번호만 같으면
// 항상 같은 줄이 나오게 한다.

/** 32비트 정수 해시 (mulberry32 시드용). */
function hash32(x) {
  let h = x | 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  return (h ^ (h >>> 16)) >>> 0;
}

/** mulberry32 — 작고 빠르며 주기가 충분한 PRNG. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * 특정 줄 전용 난수 스트림. 같은 (seed, row) 면 언제 호출해도 같은 수열이
 * 나온다 — 줄이 컬링됐다가 다시 만들어져도 내용이 유지된다.
 */
export function rowRandom(seed, row) {
  return mulberry32(hash32(hash32(seed) ^ hash32(row * 0x9e3779b9)));
}

/** 배열에서 하나 고르기. */
export function pick(rand, arr) {
  return arr[Math.floor(rand() * arr.length)];
}

/** [min, max) 실수. */
export function range(rand, min, max) {
  return min + rand() * (max - min);
}

/** [min, max] 정수. */
export function intRange(rand, min, max) {
  return min + Math.floor(rand() * (max - min + 1));
}
