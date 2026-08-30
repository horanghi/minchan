/**
 * 삼각 전장의 좌표계.
 *
 * **삼각형은 사실 1:1 세 판이다.** 변이 세 개고, 변 하나하나가 minchan_6 의
 * 전장 그대로다 — 양 끝에 성문이 있고 그 사이를 병사가 걸어간다. 그래서
 * 1D 전투 엔진·병종표·유닛 그림이 손대지 않고 그대로 산다.
 *
 *          A성 ⛏
 *         /      \
 *      변 AB      변 CA
 *       /            \
 *   ⛏ B성 ―― 변 BC ―― C성 ⛏
 */
export const PLAYERS = ['a', 'b', 'c'];

/**
 * 변 하나의 길이. minchan_6 과 같은 1560 을 유지한다.
 *
 * 줄이면 안 된다. 타이탄 사거리 520, T맨 코어빔 900 이 이 길이를 전제로
 * 맞춰져 있다 — 변이 짧으면 큰 것들이 변 전체를 outrange 해서 전선이
 * 생기지 않고 서로 성만 녹인다.
 */
export const EDGE_LEN = 1560;
/** 변의 양 끝. 광산은 성문보다 **뒤**다 — 광부는 전장에 발을 들이지 않는다. */
export const MINE_OFF = 46, GATE_OFF = 140;
/** 광부가 성문에서 광산까지 오가는 거리. */
export const HOME_LEN = GATE_OFF - MINE_OFF;

/** 폐허를 거쳐 이어붙은 변의 길이 배수. 짧은 길은 빠르고 긴 길은 느리다. */
export const MERGED_MUL = 1.5;

export const EDGE_IDS = ['ab', 'bc', 'ca'];
export const EDGE_ENDS = { ab: ['a', 'b'], bc: ['b', 'c'], ca: ['c', 'a'] };

export const TEAM = {
  // c = 선 색, dark = 차체처럼 채우는 색, ink = 어두운 바탕의 글자 색
  a: { nm: '파랑', c: '#1f5fd0', dark: '#2a4f8c', ink: '#8fb4e8' },
  b: { nm: '빨강', c: '#c9302c', dark: '#8e2f2b', ink: '#e89090' },
  c: { nm: '초록', c: '#2f8f4e', dark: '#22633a', ink: '#8ad8a4' },
};

/**
 * 유닛 그림 배율.
 *
 * `size` 는 **순수하게 그림용**이다 — 사거리·피해 어디에도 안 쓰인다.
 * 세 길을 늘 한 화면에 담으므로 배율로만 크기를 벌 수 있다. 전투는 한
 * 눈금도 달라지지 않는다.
 */
export const ART = 1.85;

export const MAX_MINERS = 10;
/** 적과 최소한 이만큼은 떨어져 선다 (px). */
export const BODY_GAP = 14;
/** 화살비 쿨타임 (초). */
export const ULT_CD = 14;

/* ── 변 위에서의 방향과 자리 ────────────────────────────────────────── */

/** 이 플레이어가 이 변에서 나아가는 방향. 왼쪽 끝(p)이면 +1, 오른쪽 끝(q)이면 -1. */
export function dirOn(E, who) { return E.p === who ? 1 : -1; }
/** 이 플레이어의 성문 x. */
export function gateXOn(E, who) { return E.p === who ? GATE_OFF : E.len - GATE_OFF; }
/** 이 플레이어의 광산 x. */
export function mineXOn(E, who) { return E.p === who ? MINE_OFF : E.len - MINE_OFF; }
/** 이 변에서 이 플레이어의 상대. */
export function foeOn(E, who) { return E.p === who ? E.q : E.p; }

/* ── 화면 상태 ──────────────────────────────────────────────────────
 *
 * 여러 모듈이 읽고 몇 곳이 쓴다. ES 모듈의 살아 있는 바인딩을 쓰면 읽는
 * 쪽은 `import { gy }` 로 평범하게 쓸 수 있고, 쓰는 쪽만 아래 setter 를
 * 거친다. 그래야 `gy` 를 `view.gy` 로 바꾸느라 그림 코드 수백 줄을
 * 건드리는 일이 없다.
 */
/**
 * **지면은 0 이다.**
 *
 * 전투 코드는 자국의 자리를 늘 `(변 위 x, gy - 높이)` 로 만든다. gy 를
 * 상수 0 으로 두면 그 y 는 곧 "지면 위 높이(위가 음수)"가 되고, 그리는
 * 쪽에서 길 위의 한 점에 그대로 얹기만 하면 된다. 화면 높이에 묶여 있던
 * 값을 상수로 바꾸는 것만으로 1D 좌표가 삼각형 위로 옮겨진다.
 */
export const gy = 0;

export let ctx = null, cw = 0, ch = 0, dpr = 1;
/** 2D 카메라. 삼각형 전체를 보다가 한 전선으로 파고든다. */
export let camX = 0, camY = 0, zoom = .3, zoomFit = .3;

export function setCtx(v) { ctx = v; }
export function setCam(x, y) { camX = x; camY = y; }
export function setZoom(z) { zoom = clamp(z, zoomFit * .9, 1.15); }
export function setFit(z) { zoomFit = z; }
export function setGeom(o) {
  if (o.cw !== undefined) cw = o.cw;
  if (o.ch !== undefined) ch = o.ch;
  if (o.dpr !== undefined) dpr = o.dpr;
}

/* ── 세 길의 자리 ─────────────────────────────────────────────────────
 *
 * 길 셋을 **나란히 눕힌다.**
 *
 *     A ──────────── B
 *     B ──────────── C
 *     C ──────────── A
 *
 * 삼각형 위에 그대로 얹어 봤더니 대각선 길에서 방향 감각이 흐트러지고,
 * 삼각형 안쪽 빈 땅이 화면을 잡아먹었다. 눕히면 지면이 수평이라 병사가
 * 서 있는 것으로 보이고, 세 전선이 한 화면에 나란히 들어온다.
 * 삼각 구조는 사라지지 않는다 — 줄마다 양 끝이 누구인지가 그 구조다.
 */

/**
 * 변의 왼쪽 끝이 p, 오른쪽 끝이 q. 가운데를 0 에 맞춰 눕힌다.
 *
 * 줄 사이 간격은 화면에 따라 달라지므로 그리는 쪽이 정한다 — 배율은 늘
 * 폭이 먼저 차서, 남는 세로만큼 벌리는 편이 낫다.
 */
export function laneX(E, x) { return x - E.len / 2; }

export function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
