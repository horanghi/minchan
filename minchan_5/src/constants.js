// 게임 전역 상수. 원본(minchan_1)과 수치가 같아야 하는 값은 주석에 근거를 남긴다.

export const TILE_SIZE = 1;
export const BOARD_HALF = 4;          // 좌우 이동 한계 (-4 ~ +4)
export const LANE_WIDTH = 9;          // 실제 플레이 가능 폭 = BOARD_HALF*2+1

// ── 점프 포물선 ────────────────────────────────────────────────
// 원본은 cannon-es 로 y 속도 JUMP_VEL, 중력 -GRAVITY 를 줘서 포물선을 만들었다.
// 물리 엔진을 걷어내면서 같은 수식을 그대로 옮긴다 — 수치가 동일해야
// 조작감이 원본과 어긋나지 않는다. (원본 index.html 116-118행)
export const GRAVITY = 22;
export const JUMP_H = 0.5;
export const JUMP_VEL = Math.sqrt(2 * GRAVITY * JUMP_H);   // 4.69041575982343
export const JUMP_TIME = (2 * JUMP_VEL) / GRAVITY;          // 0.42640143271122085

// ── 시야 · 생성 거리 ──────────────────────────────────────────
// 생성 거리와 안개 거리는 반드시 짝이 맞아야 한다. 어긋나는 방향마다
// 증상이 다르다.
//   생성 > 안개 : 보이지도 않는 줄을 스폰하고 애니메이션까지 돌린다(낭비).
//                 원본이 이쪽이었다 — GEN_AHEAD=35 에 안개 far=28.
//   생성 < 안개 : 월드가 끝나는 지점이 안개에 가려지지 않고 그대로 드러난다.
// 카메라는 플레이어보다 CAM_OFFSET.z 만큼 뒤에 있으므로, 앞쪽 r 번째 줄까지의
// 카메라 거리는 대략 r + CAM_OFFSET.z 다. 가장 멀리 보는 바이오미를 기준으로
// 생성 거리를 잡으면 두 증상이 모두 사라진다.
export const CAM_OFFSET = { x: 6, y: 8, z: 6 };
export const MAX_FOG_FAR = 34;   // 모든 바이오미의 안개 far 상한 (테스트로 강제)
export const GEN_AHEAD = MAX_FOG_FAR - CAM_OFFSET.z;   // 28
export const CULL_BEHIND = 8;

// ── 섀도맵 ────────────────────────────────────────────────────
// 원본은 ±14 고정이라 1024px 를 28 유닛에 펼쳐 텍셀당 0.027 유닛이었다.
// 플레이어 주변 ±8 만 담으면 같은 해상도로 텍셀 밀도가 1.75배가 된다.
export const SHADOW_HALF = 8;
export const SHADOW_MAP_SIZE = 2048;

// ── 카메라 ────────────────────────────────────────────────────
export const CAM_FOV = 52;
export const CAM_LERP = 0.11;
export const CAM_LOOK_OFFSET = { x: -1, z: -1 };
// 플레이어가 카메라 뒤로 이만큼 밀리면 사망 (원본 784행)
export const BEHIND_CAMERA_DEATH = 4.5;

// ── 게임 진행 ─────────────────────────────────────────────────
export const ROWS_PER_BIOME = 24;     // 바이오미 한 구간 길이
export const BIOME_BLEND_ROWS = 6;    // 하늘·안개·바닥색을 섞는 전환 구간

export const STORAGE_KEY = 'minchan5_crossy_best';
