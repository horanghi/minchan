// 동물 로스터와 바이오미 정의.
//
// 에셋은 전부 Quaternius CC0 — Animated Animal Pack(12종) + Farm Animal Pack(5종)
// + 단품 Snake/Chicken. 한 작가의 같은 스타일 계열만 쓴다. 다른 작가 팩을
// 섞으면 룩이 즉시 무너진다.
//
// height: 게임 단위 목표 키(타일 1칸 = 1). 로드 시 바운딩박스로 스케일을 역산한다.
//         모델마다 저작 스케일이 제각각이라(팜팩 얼룩말 7.07 vs 애니팩 말 4.83)
//         절대 스케일을 박아두면 팩 간 크기가 어긋난다.
// moveRef: 이동 클립을 timeScale 1 로 재생했을 때 자연스러워 보이는 이동 속도.
//          실제 속도와의 비율로 timeScale 을 잡아 발 미끄러짐을 줄인다.
// hit:    AABB 반크기 배율. 바운딩박스는 꼬리·뿔까지 물어서 실제 몸통보다 크다.

export const SPECIES = {
  cow: {
    file: 'animated_Cow', label: '소',
    height: 0.92, gait: 'quad', moveRef: 1.3, hit: 0.62,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  bull: {
    file: 'animated_Bull', label: '황소',
    height: 1.00, gait: 'quad', moveRef: 1.4, hit: 0.62,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  donkey: {
    file: 'animated_Donkey', label: '당나귀',
    height: 0.86, gait: 'quad', moveRef: 1.3, hit: 0.68,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  deer: {
    file: 'animated_Deer', label: '사슴',
    height: 0.84, gait: 'quad', moveRef: 1.4, hit: 0.68,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  alpaca: {
    file: 'animated_Alpaca', label: '알파카',
    height: 0.90, gait: 'quad', moveRef: 1.3, hit: 0.68,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  fox: {
    file: 'animated_Fox', label: '여우',
    height: 0.56, gait: 'quad', moveRef: 1.6, hit: 0.62,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  shiba: {
    file: 'animated_ShibaInu', label: '시바견',
    height: 0.60, gait: 'quad', moveRef: 1.5, hit: 0.66,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  stag: {
    file: 'animated_Stag', label: '수사슴',
    height: 1.08, gait: 'quad', moveRef: 1.5, hit: 0.55,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  husky: {
    file: 'animated_Husky', label: '허스키',
    height: 0.66, gait: 'quad', moveRef: 1.5, hit: 0.66,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  wolf: {
    file: 'animated_Wolf', label: '늑대',
    height: 0.68, gait: 'quad', moveRef: 1.7, hit: 0.62,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  horse: {
    file: 'animated_Horse', label: '말',
    height: 1.04, gait: 'quad', moveRef: 1.5, hit: 0.66,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },
  whiteHorse: {
    file: 'animated_WhiteHorse', label: '백마',
    height: 1.04, gait: 'quad', moveRef: 1.5, hit: 0.66,
    clips: { walk: 'Walk', run: 'Gallop', idle: 'Idle', death: 'Death' },
  },

  // 팜팩. 얼룩말만 보행 클립이 있고 나머지 넷은 Idle/Jump 뿐이라
  // 홉(hop) 보행으로 돌린다 — 원작 Crossy Road 의 동물 이동과 같은 방식이다.
  zebra: {
    file: 'farm_Zebra', label: '얼룩말',
    height: 1.00, gait: 'quad', moveRef: 1.4, hit: 0.72,
    clips: { walk: 'Walk', run: 'Run', idle: 'Idle', death: 'Death' },
  },
  pig: {
    file: 'farm_Pig', label: '돼지',
    height: 0.60, gait: 'hop', moveRef: 1.1, hit: 0.66,
    clips: { walk: 'Jump', run: 'Jump', idle: 'Idle', death: null },
  },
  sheep: {
    file: 'farm_Sheep', label: '양',
    height: 0.66, gait: 'hop', moveRef: 1.1, hit: 0.70,
    clips: { walk: 'Jump', run: 'Jump', idle: 'Idle', death: null },
  },
  llama: {
    file: 'farm_Llama', label: '라마',
    height: 0.92, gait: 'hop', moveRef: 1.2, hit: 0.70,
    clips: { walk: 'Jump', run: 'Jump', idle: 'Idle', death: null },
  },
  pug: {
    file: 'farm_Pug', label: '퍼그',
    height: 0.48, gait: 'hop', moveRef: 1.0, hit: 0.72,
    clips: { walk: 'Jump', run: 'Jump', idle: 'Idle', death: null },
  },

  // 뱀은 고개를 든 코브라 자세로 저작돼 있다 — 몸을 말고 서 있어서 그대로
  // 쓰면 진행축 0.32 짜리 세로 조각이 된다. 모든 동물 중 가장 짧은 장애물이
  // 돼서 속도를 아무리 올려도 소보다 피하기 쉬워지고, "초고속 위험"이라는
  // 역할이 뒤집힌다(원본 뱀은 진행축 3.16 으로 가장 긴 장애물이었다).
  //
  // stretch 로 진행축만 늘려 길게 미끄러지는 실루엣을 만든다. 스키닝은
  // 로컬 공간에서 끝난 뒤 노드 변환이 걸리므로 포즈가 함께 늘어날 뿐이고,
  // 플랫 셰이딩이라 노멀이 조금 기울어도 티가 나지 않는다.
  // speedMul: 같은 바이오미 안에서도 뱀만 확연히 빠르게.
  snake: {
    file: 'extra_Snake', label: '뱀',
    height: 0.46, stretch: 3.4, gait: 'slither', moveRef: 2.6, hit: 0.72, speedMul: 1.45,
    clips: { walk: 'Snake_Walk', run: 'Snake_Walk', idle: 'Snake_Idle', death: null },
  },
};

export const PLAYER_SPECIES = {
  file: 'extra_ChickenB', label: '닭',
  height: 0.72, hit: 0.5,
  clips: { walk: 'Walk', jump: 'Jump', idle: 'Idle', death: 'Death', win: 'Dance' },
};

// ── 바이오미 ──────────────────────────────────────────────────
// 난이도 곡선을 바이오미에 싣는다. 뒤로 갈수록 빠른 동물이 나오는 구간이 온다.
export const BIOMES = [
  {
    id: 'farm', label: '농장',
    animals: ['cow', 'pig', 'sheep', 'llama', 'horse', 'pug'],
    speed: [0.7, 2.5],
    lanesPerRow: [1, 3],          // 한 줄에 배치할 동물 수
    roadChance: 0.40,             // 나머지는 잔디
    treeChance: 0.55,             // 잔디 줄에 나무가 설 확률
    treeMax: 2,
    sky: 0x87ceeb, grass: 0x6fbf4a, road: 0xb08d5f, tree: 0x4e9e3a,
    fog: [20, 34], sunColor: 0xfff2d8, sunIntensity: 2.4, ambient: 0.42,
    exposure: 1.15,
  },
  {
    id: 'forest', label: '숲',
    animals: ['fox', 'stag', 'deer', 'shiba', 'husky', 'snake'],
    speed: [2.0, 3.5],
    lanesPerRow: [1, 3],
    roadChance: 0.46,
    treeChance: 0.85,             // 숲이니 나무를 촘촘히
    treeMax: 3,
    sky: 0x74a48c, grass: 0x2f7a3a, road: 0x6b5b42, tree: 0x1e5c2b,
    fog: [12, 26], sunColor: 0xe8f0d0, sunIntensity: 1.9, ambient: 0.5,
    exposure: 1.05,
  },
  {
    id: 'savanna', label: '사바나',
    animals: ['zebra', 'bull', 'wolf', 'donkey', 'whiteHorse', 'alpaca'],
    speed: [3.0, 5.0],
    lanesPerRow: [1, 4],
    roadChance: 0.52,
    treeChance: 0.35,
    treeMax: 2,
    sky: 0xe8a866, grass: 0xc9a961, road: 0xa8763f, tree: 0x87954e,
    fog: [16, 30], sunColor: 0xffd9a0, sunIntensity: 2.6, ambient: 0.38,
    exposure: 1.2,
  },
];

/** 로스터에서 실제로 로드해야 하는 파일 목록(중복 없이). */
export function requiredFiles() {
  const files = new Set([PLAYER_SPECIES.file]);
  for (const s of Object.values(SPECIES)) files.add(s.file);
  return [...files];
}
