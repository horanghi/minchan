import type { EnemyKind } from '../entities/enemies/enemy.ts'
import { validateAll, type Matrix } from './matrix.ts'
import type { Palette } from './palette.ts'

/**
 * 잡몹 도트.
 *
 * 랜슬과 달리 파츠 조립을 하지 않는다. 12×22 크기에서 파츠를 나누면
 * 접합부가 스프라이트보다 커진다. 프레임 전체를 통으로 찍는다.
 *
 * **스프라이트 크기 = 히트박스 크기.** docs/02 2.1 의 원칙은 "판정이 보이는 것보다
 * 크지 않다"이고, 1:1 은 그 하한이다. 보이는 것보다 판정이 크면
 * "왜 죽었는지 모르겠다"가 되고, 그건 어려운 게 아니라 불공정한 것이다.
 * → prompts/m1-gate.md 진단표
 *
 * → docs/12-sprites.md
 */

/** 좀비 — 썩은 살, 뼈가 드러난 이빨. 색은 docs/12 12.9 의 `PAL_GHOUL`. */
export const PAL_GHOUL: Palette = {
  '0': '#0B0710', G: '#7A9660', g: '#4E6B3C', L: '#A8C08A',
  '9': '#EDE6D8', R: '#A8323F',
}

/**
 * 그림 — 붉은 몸에 **노란 눈**. 색은 docs/12 12.8 의 `PAL_GRIMM`.
 *
 * 노란 눈이 이 스프라이트에서 유일한 고채도 색이다. 장식이 아니라 공정성
 * 장치다 — 어두운 스테이지 1 에서 그림의 위치를 즉시 읽지 못하면
 * 고정 점프 궤도 때문에 회피할 수 없는 죽음이 된다. → docs/12 12.8
 */
export const PAL_GRIMM: Palette = {
  '0': '#0B0710', S: '#A32332', s: '#6E1826', L: '#E23E4E', R: '#FFD84A',
}

/**
 * 까마귀 — 깃털에 노란 부리.
 *
 * 순수한 검정으로 두면 어두운 배경에 묻힌다. 급강하로 죽이는 적이 안 보이면
 * "왜 죽었는지 모름"이 되므로, 배경 실루엣보다 확실히 밝게 잡았다.
 * → prompts/m1-gate.md 진단표
 */
export const PAL_CORVID: Palette = {
  '0': '#0B0710', K: '#4A3C5E', k: '#251D33', L: '#6A5E88', Y: '#FFD84A',
}

/**
 * 낙뢰 — 폭풍 구름에 번개 노랑.
 *
 * 구름 몸통은 갱도(S5)의 어둠보다 확실히 밝은 청회색이다. 위협이 기둥이라도
 * 근원이 안 보이면 "왜 죽었는지 모름"이 된다. 노랑(Y)과 흰색(W)은
 * 예고·타격에서만 쓰는 신호색이다.
 */
export const PAL_LEVIN: Palette = {
  '0': '#0B0710', C: '#6B7FA3', c: '#46536E', L: '#9FB2CE', Y: '#FFE066', W: '#F4F7FF',
}

/**
 * 좀비 12×22 — **옆모습.** 걷기 2프레임.
 *
 * 횡스크롤에서 정면을 보면 어느 쪽으로 걸어오는지 읽을 수 없다. 옆모습이라야
 * 눈 하나·앞으로 뻗은 팔·엇갈린 다리가 진행 방향을 말한다.
 * 렌더러가 `scale.x = enemy.facing` 으로 뒤집으므로 **오른쪽을 보게** 그린다.
 */
const GHOUL_WALK_A: Matrix = [
  '....0000....',
  '...0GGGG0...',
  '..0GGLLLG0..',
  '..0GGL0LG0..',
  '..0GGLLG990.',
  '..0GgGG9990.',
  '...0GggG00..',
  '....0GG0....',
  '..00GGGG0...',
  '.0GgGGGGG0..',
  '.0GGGGGGGG00',
  '.0GgGGGg0999',
  '..0GGGGG00..',
  '..0GgGGG0...',
  '..0GGGGGG0..',
  '..0GG00GG0..',
  '..0GG0.0G0..',
  '..0Gg0.0G0..',
  '..0GG0.0g0..',
  '.0GG0..0g0..',
  '.0Gg0..0g0..',
  '.0990..0990.',
]

const GHOUL_WALK_B: Matrix = [
  '....0000....',
  '...0GGGG0...',
  '..0GGLLLG0..',
  '..0GGL0LG0..',
  '..0GGLLG990.',
  '..0GgGG9990.',
  '...0GggG00..',
  '....0GG0....',
  '..00GGGG0...',
  '.0GgGGGGG0..',
  '..0GGGGGG000',
  '..0GgGGGg099',
  '..0GGGGG00..',
  '..0GgGGG0...',
  '..0GGGGGG0..',
  '...0GGGG0...',
  '...0GgGG0...',
  '..0GG00GG0..',
  '..0Gg0.0G0..',
  '..0GG0.0g0..',
  '.0Gg0..0GG0.',
  '.0990..0990.',
]

/** 땅에서 솟는 중. 아래가 흙에 묻혀 있다. */
const GHOUL_RISE: Matrix = [
  '............',
  '............',
  '............',
  '............',
  '............',
  '....0000....',
  '...0GGGG0...',
  '..0GGLLLG0..',
  '..0GGL0LG0..',
  '..0GGLLG990.',
  '..0GgGG9990.',
  '...0GggG00..',
  '....0GG0....',
  '..00GGGG0...',
  '.0GgGGGGG0..',
  '.0GGGGGGGG00',
  '.0GgGGGg0999',
  '..0GGGGG00..',
  '..0GgGGG0...',
  '..0gggggg0..',
  '...000000...',
  '............',
]

/**
 * 그림 14×16 — **옆모습.** 떠 있는 그림자, 대기 상태는 웅크린다.
 *
 * 날개는 뒤(왼쪽)로, 머리는 앞(오른쪽)으로 간다. 노란 눈이 하나만 보이는
 * 대신 앞쪽에 붙어 있어 어디를 노리는지가 읽힌다.
 */
const GRIMM_FLY_A: Matrix = [
  '..000.........',
  '.0SSS0........',
  '.0SSSS0.......',
  '0SsSSSSS0.....',
  '0SsssSSSS0000.',
  '0SsssSSSSSSSS0',
  '.0SsssSSSLRR0.',
  '.0SssssSSSSS0.',
  '..0SsssSSSS0..',
  '..0SssSSSS0...',
  '...0SsSSS0....',
  '...0SsSS0.....',
  '....0s0s0.....',
  '....0.0.0.....',
  '..............',
  '..............',
]

const GRIMM_FLY_B: Matrix = [
  '..............',
  '..............',
  '.0............',
  '0S0...........',
  '0SS0......000.',
  '0SSS0...0SSSS0',
  '.0SSS0.0SLRR0.',
  '.0SsSSSSSSSS0.',
  '..0SsssSSSS0..',
  '..0SssssSSS0..',
  '...0SsssSS0...',
  '...0SssSS0....',
  '....0SsS0.....',
  '....0s0s0.....',
  '.....0.0......',
  '..............',
]

/** 대기 — 웅크려 있다. 노란 점 하나로 "여기 있다"를 알린다. */
const GRIMM_DORMANT: Matrix = [
  '..............',
  '..............',
  '..............',
  '..............',
  '..0000........',
  '.0SSSS0.000...',
  '0SsSSSSS0SSS0.',
  '0SsssSSSSLRR0.',
  '0SsssSSSSSSS0.',
  '.0SsssSSSSS0..',
  '.0SssssSSS0...',
  '..0SsssSS0....',
  '..0SssSS0.....',
  '...0ssss0.....',
  '....0000......',
  '..............',
]

/** 까마귀 12×10 — 옆모습. 날개 위/아래 2프레임. 부리는 오른쪽. */
const CORVID_UP: Matrix = [
  '..00....00..',
  '.0KK0..0KK0.',
  '.0KK0..0KK0.',
  '..0KK00KK0..',
  '..0KKKKKK0Y0',
  '..0KkkkkK00.',
  '...0KKKK0...',
  '....0KK0....',
  '.....00.....',
  '............',
]

const CORVID_DOWN: Matrix = [
  '............',
  '.00......00.',
  '0KK0....0KK0',
  '.0KK0kk0KK0.',
  '..0KKKKKK0Y0',
  '..0KkkkkK00.',
  '...0KKKK0...',
  '....0KK0....',
  '.....00.....',
  '............',
]

/**
 * 급강하 예고 — 날개를 수평으로 활짝 편다.
 *
 * 위/아래 날갯짓과 실루엣이 완전히 달라야 한다. 예고가 평소 프레임과
 * 구분되지 않으면 예고가 아니다. → docs/05 5.1 원칙 2
 */
const CORVID_WINDUP: Matrix = [
  '............',
  '............',
  '00........00',
  '0KK000000KK0',
  '.0KKKKKKKK0.',
  '..0KKKKKK0Y0',
  '..0KkkkkK00.',
  '...0KKKK0...',
  '....0KK0....',
  '.....00.....',
]

/** 낙뢰 14×10 — 떠 있는 폭풍 구름. 아랫면이 울퉁불퉁하다. */
const LEVIN_FLOAT_A: Matrix = [
  '.....0000.....',
  '..000CCCC000..',
  '.0CCLLCCCCCC0.',
  '0CLLCCCCCCCCc0',
  '0CCCCCCCCcccc0',
  '.0CcccCCcccc0.',
  '..0ccc00ccc0..',
  '...00....00...',
  '..............',
  '..............',
]

const LEVIN_FLOAT_B: Matrix = [
  '.....0000.....',
  '..000CCCC000..',
  '.0CCCCCCLLCC0.',
  '0cCCCCCCCCLLC0',
  '0ccccCCCCCCCC0',
  '.0ccccCCcccC0.',
  '..0ccc00ccc0..',
  '....00...00...',
  '..............',
  '..............',
]

/** 예고 — 배에서 불꽃이 샌다. 두 프레임이 엇갈려 지직거린다. */
const LEVIN_WINDUP_A: Matrix = [
  '.....0000.....',
  '..000CCCC000..',
  '.0CCLLCCCCCC0.',
  '0CLLCCCCCCCCc0',
  '0CCCCYCCCcccc0',
  '.0CccYYCcccc0.',
  '..0cccYYccc0..',
  '...00.Y..00...',
  '......Y.......',
  '..............',
]

const LEVIN_WINDUP_B: Matrix = [
  '.....0000.....',
  '..000CCCC000..',
  '.0CCLLCCCCCC0.',
  '0CLLCCCCCCCCc0',
  '0CCCCCCYCcccc0',
  '.0CcccYYcccc0.',
  '..0cccYYccc0..',
  '...00..Y.00...',
  '.......Y......',
  '..............',
]

/** 타격 — 구름 속이 하얗게 타고 배에서 번개가 시작된다. 기둥은 렌더러가 그린다. */
const LEVIN_STRIKE: Matrix = [
  '.....0000.....',
  '..000CWWC000..',
  '.0CWWWWWWWWC0.',
  '0CWWWWWWWWWWC0',
  '0CCWWWWWWWWCC0',
  '.0CcWWWWWWcc0.',
  '..0ccWWWWcc0..',
  '...00WYYW00...',
  '.....WYYW.....',
  '.....0YY0.....',
]

/**
 * 스테이지 전용 잡몹의 팔레트 (AT-2).
 *
 * **스테이지마다 색을 묶는다.** 같은 스테이지의 적이 같은 색조를 쓰면
 * "여기는 불의 구역"이라는 것이 적만 봐도 읽힌다 — 배경을 보지 않아도
 * 어디에 있는지 알 수 있어야 한다. → docs/04 스테이지 테마 · docs/12
 *
 * 어느 팔레트든 몸통 주색은 배경 실루엣보다 밝다. 안 그러면 "왜 죽었는지 모름"이 된다.
 */
const PAL_FLAME: Palette = {
  '0': '#0B0710', F: '#E8622A', f: '#A33914', L: '#FFC24A', K: '#6B4A38',
}

const PAL_FROST: Palette = {
  '0': '#0B0710', I: '#7FB8D8', i: '#3E6E8E', L: '#CFE9F5', B: '#D9A441',
}

const PAL_MIRE: Palette = {
  '0': '#0B0710', M: '#6F8F4A', m: '#41562B', L: '#A8C87A', P: '#9B5FBF',
}

const PAL_ADIT: Palette = {
  '0': '#0B0710', S: '#8A8A96', s: '#4E4E5A', L: '#C2C2CE', Y: '#FFD84A',
}

/** 번개령 — 실체화했을 때만 흰빛(W)과 노란 심지(Y)가 켜진다. */
const PAL_WISP: Palette = {
  '0': '#0B0710', B: '#6FA8FF', b: '#2D4E8A', W: '#F4F7FF', Y: '#FFE066',
}

/** 화염귀 12×20 — 불덩이를 던지는 귀신. 옆모습, 오른쪽을 본다. */
const EMBER_A: Matrix = [
  '....0000....',
  '...0FFFF0...',
  '..0FLLLF0...',
  '..0FL0LF0...',
  '..0FLLFF0...',
  '...0FFF0....',
  '....0FF0....',
  '...0FFFF0...',
  '..0FfFFFF0..',
  '.0FfFFFFFF0.',
  '.0FfFFFFFF0.',
  '.0FffFFFFF0.',
  '..0FfFFFF0..',
  '..0FffFF0...',
  '...0FfF0....',
  '...0FfF0....',
  '..0Ff0fF0...',
  '..0F0..0F0..',
  '..0f0..0f0..',
  '..000..000..',
]

const EMBER_B: Matrix = [
  '....0000....',
  '...0FLLF0...',
  '..0FLLLF0...',
  '..0FL0LF0...',
  '..0FLLFF0...',
  '...0FLF0....',
  '....0FF0....',
  '...0FLFF0...',
  '..0FfFLFF0..',
  '.0FfFFLFFF0.',
  '.0FfFFFFFF0.',
  '.0FffFFFFF0.',
  '..0FfFFFF0..',
  '..0FffFF0...',
  '...0FfF0....',
  '...0FfF0....',
  '..0Ff0fF0...',
  '..0F0..0F0..',
  '..0f0..0f0..',
  '..000..000..',
]

/** 예고 — 두 손에 불덩이를 모은다. 이 자세가 3연발의 유일한 경고다. */
const EMBER_WINDUP: Matrix = [
  '....0000....',
  '...0FLLF0...',
  '..0FLLLF0...',
  '..0FL0LF0...',
  '..0FLLFF0...',
  '...0FFF0....',
  '.00.0FF0.00.',
  '0LL0FFFF0LL0',
  '0LL0FfFFF0L0',
  '.00FFFFFFF0.',
  '.0FfFFFFFF0.',
  '.0FffFFFFF0.',
  '..0FfFFFF0..',
  '..0FffFF0...',
  '...0FfF0....',
  '...0FfF0....',
  '..0Ff0fF0...',
  '..0F0..0F0..',
  '..0f0..0f0..',
  '..000..000..',
]

/**
 * 발사 — 앞손이 위로 뻗고 불덩이가 손을 떠났다.
 *
 * 예고(`EMBER_WINDUP`)는 두 손에 불덩이를 **쥐고 있는** 그림이다. 이쪽은 그것이
 * **떠난** 그림이라야 한다. 둘이 같으면 "아직 안 던졌다"와 "이미 날아온다"가
 * 구분되지 않아, 예고를 보고 물러선 플레이어가 왜 맞았는지 알 수 없다.
 * 불덩이가 머리보다 위에 있는 것도 정보다 — 3연발은 포물선이다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/ember.ts
 */
const EMBER_FIRE: Matrix = [
  '....0000....',
  '...0FFFF000.',
  '..0FLLLF0LL0',
  '..0FL0LF0LL0',
  '..0FLLFF000.',
  '...0FFF0FF0.',
  '....0FF0FF0.',
  '...0FFFFFF0.',
  '..0FfFFFF0..',
  '.0FfFFFFFF0.',
  '.0FfFFFFFF0.',
  '.0FffFFFFF0.',
  '..0FfFFFF0..',
  '..0FffFF0...',
  '...0FfF0....',
  '...0FfF0....',
  '..0Ff0fF0...',
  '..0F0..0F0..',
  '..0f0..0f0..',
  '..000..000..',
]

/** 소각인 14×24 — 그을린 거구. 느리고 크다. */
const PYRE_A: Matrix = [
  '.....0000.....',
  '....0KKKK0....',
  '...0KFFFFK0...',
  '...0KFL0FK0...',
  '...0KFLLFK0...',
  '....0KFFK0....',
  '.....0KK0.....',
  '...00KKKK00...',
  '..0FKKKKKKF0..',
  '.0FfKKKKKKfF0.',
  '.0FfKKKKKKfF0.',
  '.0FfKKKKKKfF0.',
  '..0FKKKKKKF0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKK00KKK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0Kf0..0fK0..',
  '..0KK0..0KK0..',
  '.0KKK0..0KKK0.',
  '.0KKK0..0KKK0.',
  '.00000..00000.',
]

const PYRE_B: Matrix = [
  '.....0000.....',
  '....0KKKK0....',
  '...0KFFFFK0...',
  '...0KFL0FK0...',
  '...0KFLLFK0...',
  '....0KFFK0....',
  '.....0KK0.....',
  '...00KKKK00...',
  '..0fKKKKKKf0..',
  '.0fFKKKKKKFf0.',
  '.0fFKKKKKKFf0.',
  '.0fFKKKKKKFf0.',
  '..0fKKKKKKf0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKK00KKK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0Kf0..0fK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '.0KKK0..0KKK0.',
  '.0KKK0..0KKK0.',
  '.00000..00000.',
]

/**
 * 예고 — 입 안에 불을 머금는다. **30프레임 뒤에 화염이 나간다는 유일한 경고다.**
 *
 * HP 45 짜리를 화력으로 밀어낼 수 없으므로 이 적은 반드시 읽혀야 한다.
 * 그런데 예고 전용 도트가 없으면 30프레임 예고가 제자리 걷기로 그려져,
 * "다가온다"와 "곧 뿜는다"가 같은 그림이 된다 — 예고 프레임을 아무리 길게
 * 잡아도 눈에 보이지 않으면 없는 것이다.
 *
 * 그래서 셋을 한꺼번에 바꾼다: 볼이 부풀고, 목까지 밝은 빛(L)이 차오르고,
 * 두 팔을 몸 앞으로 모아 실루엣이 좁아진다. 걷기(팔이 양옆으로 벌어진다)와
 * 화염(빛이 몸 **밖으로** 뻗는다) 어느 쪽과도 겹치지 않는다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/pyre.ts
 */
const PYRE_WINDUP: Matrix = [
  '.....0000.....',
  '....0KKKK0....',
  '...0KFFFFK0...',
  '...0KFL0FK0...',
  '...0KFLLLL0...',
  '....0KLLLL0...',
  '.....0LLL0....',
  '...00KKKK00...',
  '..0KKKKKKKK0..',
  '..0KKKKKKFF0..',
  '..0KKKKKKFf0..',
  '..0KKKKKKFF0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKK00KKK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0Kf0..0fK0..',
  '..0KK0..0KK0..',
  '.0KKK0..0KKK0.',
  '.0KKK0..0KKK0.',
  '.00000..00000.',
]

/**
 * 재충전 60프레임 — **불이 완전히 꺼져 있다. 지금은 붙어도 안전하다.**
 *
 * 예고와 정반대의 뜻인데, 전용 도트가 없으면 둘 다 제자리 걷기로 그려져
 * 정보량이 0이 된다. 가장 긴 상태(60프레임)가 "위험"으로 읽히면 플레이어는
 * 유일한 반격 창을 통째로 버린다.
 *
 * 몸에서 주황(F·f)을 전부 뺀 것이 신호다 — 이 적에게 불빛이 없다는 것은
 * 뿜을 것이 없다는 뜻이다. 고개를 숙여 한 행 내려앉은 실루엣이 거기에 겹친다.
 * → docs/05-enemies-bosses.md 5.1 원칙 3 · entities/enemies/pyre.ts
 */
const PYRE_COOLDOWN: Matrix = [
  '..............',
  '.....0000.....',
  '....0KKKK0....',
  '...0KKKKKK0...',
  '...0KKL0KK0...',
  '...0KKKKKK0...',
  '....0KKKK0....',
  '...00KKKK00...',
  '..0KKKKKKKK0..',
  '.0KKKKKKKKKK0.',
  '.0KKKKKKKKKK0.',
  '.0KKKKKKKKKK0.',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKK00KKK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '.0KKK0..0KKK0.',
  '.0KKK0..0KKK0.',
  '.00000..00000.',
]

/** 화염 방사 — 앞으로 불을 뿜는다. 판정 상자는 렌더러가 따로 그린다. */
const PYRE_BREATHE: Matrix = [
  '.....0000.....',
  '....0KKKK0....',
  '...0KFFFFK0...',
  '...0KFL0LL000.',
  '...0KFLLLLLLL0',
  '....0KFLLLLL0.',
  '.....0KKLL0...',
  '...00KKKK00...',
  '..0FKKKKKKF0..',
  '.0FfKKKKKKfF0.',
  '.0FfKKKKKKfF0.',
  '.0FfKKKKKKfF0.',
  '..0FKKKKKKF0..',
  '..0KKKKKKKK0..',
  '..0KKKKKKKK0..',
  '..0KKK00KKK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0KK0..0KK0..',
  '..0Kf0..0fK0..',
  '..0KK0..0KK0..',
  '.0KKK0..0KKK0.',
  '.0KKK0..0KKK0.',
  '.00000..00000.',
]

/** 서리늑대 18×14 — 네 발. 가로로 길어 돌진 방향이 실루엣으로 읽힌다. */
const FROSTFANG_A: Matrix = [
  '..................',
  '.....000..........',
  '....0III0.........',
  '...0IIIII00000....',
  '..0IiIIIIIIIII0...',
  '..0IiIIIIIIIIII0..',
  '.0LIIIIIIIIIIII0..',
  '.0L0IIIIIIIIII0...',
  '..0IIIIIIIIII0....',
  '..0IiIIIIiII0.....',
  '..0I0IIII0I0......',
  '..0I0.0I0.0I0.....',
  '..0i0.0i0.0i0.....',
  '..000.000.000.....',
]

const FROSTFANG_B: Matrix = [
  '..................',
  '.....000..........',
  '....0III0.........',
  '...0IIIII00000....',
  '..0IiIIIIIIIII0...',
  '..0IiIIIIIIIIII0..',
  '.0LIIIIIIIIIIII0..',
  '.0L0IIIIIIIIII0...',
  '..0IIIIIIIIII0....',
  '..0IiIIIIiII0.....',
  '..0I0IIII0I0......',
  '...0I00I0.0I0.....',
  '...0i00i0.0i0.....',
  '...000000.000.....',
]

/** 돌진 예고 — 자세를 낮추고 앞발을 굽힌다. 궤도는 이 순간 정해진다. */
const FROSTFANG_WINDUP: Matrix = [
  '..................',
  '..................',
  '..................',
  '.....000..........',
  '....0III00000.....',
  '...0IiIIIIIIII0...',
  '...0IiIIIIIIIII0..',
  '..0LIIIIIIIIIII0..',
  '..0L0IIIIIIIII0...',
  '...0IIIIIIIII0....',
  '...0IiIIIIiI0.....',
  '...0I0III0I0......',
  '...0i0.0i0.0i0....',
  '...000.000.000....',
]

/**
 * 돌진 — 몸을 쭉 뻗어 낮게 미끄러진다. 캔버스 가로를 끝까지 쓴다.
 *
 * 예고(웅크림)와 돌진(뻗음)이 같은 그림이면 "아직 안 왔다"와 "이미 온다"가
 * 구분되지 않는다. 잡몹 중 가장 빠른 적이라 그 반 프레임이 회피 여부를 가른다.
 * 다리를 앞뒤로 벌려 둔 것도 같은 이유다 — 걷는 것이 아니라 미끄러지는 중이다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/frostfang.ts
 */
const FROSTFANG_LUNGE: Matrix = [
  '..................',
  '..................',
  '..................',
  '..................',
  '.....000..........',
  '....0III000000....',
  '..00IiIIIIIIIII000',
  '.0LIIIIIIIIIIIIII0',
  '.0L0IIIIIIIIIIIII0',
  '..0IiIIIIIIIIII00.',
  '..0I0IIIII0II0....',
  '.0I0..0I0...0I0...',
  '.0i0..0i0...0i0...',
  '.000..000...000...',
]

/**
 * 기절 — 배를 바닥에 붙이고 주저앉는다. 다리가 접혀 보이지 않는다.
 *
 * **잡몹 중 유일하게 확정된 반격 창이다.** 45프레임 동안 무방비인데 그것이
 * 그림으로 안 보이면 플레이어는 그 창을 못 쓰고, 그러면 서리늑대는 돌진만
 * 반복하는 잡을 수 없는 적이 된다. 서 있는 프레임(배회·예고·돌진)은 전부
 * 다리가 보이므로, 다리가 사라진 실루엣 하나로 "지금이다"가 읽힌다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/frostfang.ts
 */
const FROSTFANG_RECOVER: Matrix = [
  '..................',
  '..................',
  '..................',
  '..................',
  '..................',
  '..................',
  '.....000..........',
  '....0III00000.....',
  '...0IiIIIIIIII0...',
  '..0LIIIIIIIIIII0..',
  '..0L0IIIIIIIIII0..',
  '..0IiIIIIIIIIi0...',
  '..0iiiiiiiiii0....',
  '..000000000000....',
]

/** 종지기 12×22 — 머리 위로 종을 든다. 종(B)이 유일한 고채도 색이다. */
const RINGER_A: Matrix = [
  '.....00.....',
  '....0BB0....',
  '...0BBBB0...',
  '..0BBBBBB0..',
  '..0BBBBBB0..',
  '...0BBBB0...',
  '....0000....',
  '....0II0....',
  '...0IIII0...',
  '..0ILLLI0...',
  '..0IL0LI0...',
  '..0ILLII0...',
  '...0IIII0...',
  '..00IIII00..',
  '.0IiIIIIiI0.',
  '.0IiIIIIiI0.',
  '..0IIIIII0..',
  '..0IIIIII0..',
  '..0III0II0..',
  '..0II0.0I0..',
  '..0Ii0.0i0..',
  '..000..000..',
]

const RINGER_B: Matrix = [
  '.....00.....',
  '....0BB0....',
  '...0BBBB0...',
  '..0BBBBBB0..',
  '..0BBBBBB0..',
  '...0BBBB0...',
  '....0000....',
  '....0II0....',
  '...0IIII0...',
  '..0ILLLI0...',
  '..0IL0LI0...',
  '..0ILLII0...',
  '...0IIII0...',
  '..00IIII00..',
  '.0IiIIIIiI0.',
  '.0IiIIIIiI0.',
  '..0IIIIII0..',
  '..0IIIIII0..',
  '..0II0III0..',
  '..0I0.0II0..',
  '..0i0.0iI0..',
  '..000..000..',
]

/**
 * 예고 — 두 팔을 위로 뻗어 종을 떠받쳐 올린다.
 *
 * 종지기는 **먼저 잡아야 하는 적**이다(주변 적을 1.25배로 만든다). 그러려면
 * 침묵 90프레임과 예고 18프레임이 눈으로 갈려야 한다 — 언제 종이 울리는지
 * 모르면 "지금 뛰어들어 종지기를 친다"라는 판단 자체가 성립하지 않는다.
 *
 * 파문(`RINGER_RING`)은 종 **바깥으로** 퍼지는 밝은 L 이고, 이쪽은 몸 색(I)의
 * 팔이 머리 옆에 세로로 서는 그림이다. 색도 방향도 겹치지 않는다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/ringer.ts
 */
const RINGER_WINDUP: Matrix = [
  '....0BB0....',
  '...0BBBB0...',
  '..0BBBBBB0..',
  '..0BBBBBB0..',
  '0I0BBBBBB0I0',
  '0I.0BBBB0.I0',
  '0I..0000..I0',
  '0I..0II0..I0',
  '0I.0IIII0.I0',
  '0I0ILLLI0.I0',
  '0I0IL0LI0.I0',
  '0I0ILLII0.I0',
  '0I.0IIII0.I0',
  '0I00IIII00I0',
  '.0IiIIIIiI0.',
  '.0IiIIIIiI0.',
  '..0IIIIII0..',
  '..0IIIIII0..',
  '..0III0II0..',
  '..0II0.0I0..',
  '..0Ii0.0i0..',
  '..000..000..',
]

/** 종이 울린다 — 파문이 좌우로 퍼진다. 주변 적이 빨라지는 신호다. */
const RINGER_RING: Matrix = [
  '.0...00...0.',
  '.0..0BB0..0.',
  '0L.0BBBB0.L0',
  '0L0BBBBBB0L0',
  '0L0BBBBBB0L0',
  '.0.0BBBB0.0.',
  '....0000....',
  '....0II0....',
  '...0IIII0...',
  '..0ILLLI0...',
  '..0IL0LI0...',
  '..0ILLII0...',
  '...0IIII0...',
  '..00IIII00..',
  '.0IiIIIIiI0.',
  '.0IiIIIIiI0.',
  '..0IIIIII0..',
  '..0IIIIII0..',
  '..0III0II0..',
  '..0II0.0I0..',
  '..0Ii0.0i0..',
  '..000..000..',
]

/** 늪지기 14×20 — 물에서 솟는 거구. 눈 두 개가 먼저 보인다. */
const BOGMAN_A: Matrix = [
  '....000000....',
  '...0MMMMMM0...',
  '..0MLLMMLLM0..',
  '..0ML0MM0LM0..',
  '..0MMMMMMMM0..',
  '..0MmMMMMmM0..',
  '...0MMMMMM0...',
  '..00MMMMMM00..',
  '.0MmMMMMMMmM0.',
  '.0MmMMMMMMmM0.',
  '.0MmMMMMMMmM0.',
  '..0MMMMMMMM0..',
  '..0MmMMMMmM0..',
  '..0MMM00MMM0..',
  '..0MM0..0MM0..',
  '..0MM0..0MM0..',
  '..0Mm0..0mM0..',
  '.0MMM0..0MMM0.',
  '.0MMM0..0MMM0.',
  '.00000..00000.',
]

const BOGMAN_B: Matrix = [
  '....000000....',
  '...0MMMMMM0...',
  '..0MLLMMLLM0..',
  '..0ML0MM0LM0..',
  '..0MMMMMMMM0..',
  '..0MmMMMMmM0..',
  '...0MMMMMM0...',
  '..00MMMMMM00..',
  '.0mMMMMMMMMm0.',
  '.0mMMMMMMMMm0.',
  '.0mMMMMMMMMm0.',
  '..0MMMMMMMM0..',
  '..0MmMMMMmM0..',
  '..0MMM00MMM0..',
  '..0MM0..0MM0..',
  '..0Mm0..0mM0..',
  '..0MM0..0MM0..',
  '.0MMM0..0MMM0.',
  '.0MMM0..0MMM0.',
  '.00000..00000.',
]

/**
 * 잠복 — 눈만 물 위에 있다.
 *
 * 좀비의 `spawn` 과 같은 원리다: 위쪽이 비어 있어야 "아직 다 안 나왔다"로 읽힌다.
 * 이 프레임이 없으면 늪지기는 예고 없이 튀어나오는 적이 된다.
 */
const BOGMAN_SUBMERGED: Matrix = [
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..0MLLMMLLM0..',
  '..0ML0MM0LM0..',
  '..0MMMMMMMM0..',
  '.0mmMMMMMMmm0.',
  '.0mmmmmmmmmm0.',
  '.000000000000.',
]

/**
 * 솟는 중 — 상체까지 올라오고 어깨 아래는 아직 물속이다. **이 적의 공정성 전부가 이 그림에 걸려 있다.**
 *
 * 늪지기의 위협은 잠복이고, 잠복은 그 자체로 부당해질 수 있는 설계다. 그래서
 * 잠복과 도약 사이에 20프레임짜리 `surface` 를 넣었다 — 위치를 미리 알려 주고
 * 이 동안은 아무도 다치지 않는 구간이다.
 *
 * 그런데 이 프레임이 없으면 그 20프레임이 **완전히 솟은 `default`** 로 그려진다.
 * 다 나온 그림과 나오는 중인 그림이 같으면 "예고"가 아니라 "이미 도약 중"으로
 * 읽히고, 그러면 예고를 넣은 의미가 통째로 사라진다.
 *
 * 그래서 `BOGMAN_SUBMERGED`(눈만)와 `BOGMAN_A`(전신)의 **정확히 중간**이다:
 * 눈이 캔버스 위쪽 절반까지 올라왔고, 어깨는 아직 수면(m) 아래에 있다.
 * → docs/05-enemies-bosses.md 5.1 원칙 2 · entities/enemies/bogman.ts
 */
const BOGMAN_SURFACE: Matrix = [
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '..............',
  '....000000....',
  '...0MMMMMM0...',
  '..0MLLMMLLM0..',
  '..0ML0MM0LM0..',
  '..0MMMMMMMM0..',
  '..0MmMMMMmM0..',
  '...0MMMMMM0...',
  '..00MMMMMM00..',
  '.0MmMMMMMMmM0.',
  '.0MmMMMMMMmM0.',
  '.0mmMMMMMMmm0.',
  '.0mmmmmmmmmm0.',
  '.0mmmmmmmmmm0.',
  '.000000000000.',
]

/** 포자충 12×16 — 작고 약하다. 위협은 죽은 뒤에 온다. */
const SPORE_A: Matrix = [
  '....0000....',
  '...0MMMM0...',
  '..0MLLLLM0..',
  '.0MLM00MLM0.',
  '.0MMMMMMMM0.',
  '.0MmMMMMmM0.',
  '..0MMMMMM0..',
  '..0MMMMMM0..',
  '..0MmMMmM0..',
  '..0MMMMMM0..',
  '...0MMMM0...',
  '...0M00M0...',
  '..0m0..0m0..',
  '..0m0..0m0..',
  '..000..000..',
  '............',
]

const SPORE_B: Matrix = [
  '....0000....',
  '...0MMMM0...',
  '..0MLLLLM0..',
  '.0MLM00MLM0.',
  '.0MMMMMMMM0.',
  '.0MmMMMMmM0.',
  '..0MMMMMM0..',
  '..0MMMMMM0..',
  '..0MmMMmM0..',
  '..0MMMMMM0..',
  '...0MMMM0...',
  '...0M00M0...',
  '..0m0..0m0..',
  '.0m0....0m0.',
  '.000....000.',
  '............',
]

/** 간수 14×24 — 사슬 채찍을 든 키 큰 그림자. 등불(Y)이 유일한 고채도 색. */
const GAOLER_A: Matrix = [
  '.....0000.....',
  '....0SSSS0....',
  '...0SLLLLS0...',
  '...0SL0LLS0...',
  '...0SLLLLS0...',
  '....0SYYS0....',
  '.....0SS0.....',
  '...00SSSS00...',
  '..0SsSSSSsS0..',
  '.0SsSSSSSSsS0.',
  '.0SsSSSSSSsS0.',
  '.0SsSSSSSSsS0.',
  '..0SSSSSSSS0..',
  '..0SsSSSSsS0..',
  '..0SSSSSSSS0..',
  '..0SSS00SSS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0Ss0..0sS0..',
  '..0SS0..0SS0..',
  '.0SSS0..0SSS0.',
  '.0SSS0..0SSS0.',
  '.00000..00000.',
]

const GAOLER_B: Matrix = [
  '.....0000.....',
  '....0SSSS0....',
  '...0SLLLLS0...',
  '...0SL0LLS0...',
  '...0SLLLLS0...',
  '....0SYYS0....',
  '.....0SS0.....',
  '...00SSSS00...',
  '..0sSSSSSSs0..',
  '.0sSSSSSSSSs0.',
  '.0sSSSSSSSSs0.',
  '.0sSSSSSSSSs0.',
  '..0SSSSSSSS0..',
  '..0sSSSSSSs0..',
  '..0SSSSSSSS0..',
  '..0SSS00SSS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0Ss0..0sS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '.0SSS0..0SSS0.',
  '.0SSS0..0SSS0.',
  '.00000..00000.',
]

/**
 * 채찍 예고 — 사슬을 뒤로 크게 당긴다.
 *
 * 리치가 85px 로 길기 때문에 예고 자세가 평소와 확실히 달라야 한다.
 * 24프레임 예고(docs/05 5.2 명시)를 눈으로 읽을 수 있어야 공정하다.
 */
const GAOLER_WINDUP: Matrix = [
  '.....0000.....',
  '....0SSSS0....',
  '...0SLLLLS0...',
  '...0SL0LLS0...',
  '0L.0SLLLLS0...',
  '0L..0SYYS0....',
  '0L...0SS0.....',
  '0L.00SSSS00...',
  '.0LSsSSSSsS0..',
  '..0SSSSSSSsS0.',
  '.0SsSSSSSSsS0.',
  '.0SsSSSSSSsS0.',
  '..0SSSSSSSS0..',
  '..0SsSSSSsS0..',
  '..0SSSSSSSS0..',
  '..0SSS00SSS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0Ss0..0sS0..',
  '..0SS0..0SS0..',
  '.0SSS0..0SSS0.',
  '.0SSS0..0SSS0.',
  '.00000..00000.',
]

/**
 * 휘두르는 순간 — 사슬이 앞으로 곧게 뻗어 화면 밖까지 나간다.
 *
 * 예고(`GAOLER_WINDUP`)는 사슬을 **뒤로** 당긴 그림이고 이쪽은 **앞으로** 뻗은
 * 그림이다. 방향 하나로 "아직 안 온다"와 "지금 온다"가 갈린다.
 *
 * 사슬을 허리 높이에 가로로 곧게 그린 것은 판정을 따라간 것이다 — 판정은 가로
 * 85px, 세로 8px 로 납작하다. 위로 휘는 그림을 그리면 보이는 것과 맞는 곳이
 * 달라져, 머리 위는 안전하다는 사실이 그림에서 거짓말이 된다.
 * → docs/02-core-mechanics.md 2.1 · docs/05 5.1 원칙 2 · entities/enemies/gaoler.ts
 */
const GAOLER_WHIP: Matrix = [
  '.....0000.....',
  '....0SSSS0....',
  '...0SLLLLS0...',
  '...0SL0LLS0...',
  '...0SLLLLS0...',
  '....0SYYS0....',
  '.....0SS0.....',
  '...00SSSS00...',
  '..0SsSSSSsS0..',
  '..0SsSSSSs0000',
  '..0SsSSSSsSLLL',
  '..0SsSSSSs0000',
  '..0SSSSSSSS0..',
  '..0SsSSSSsS0..',
  '..0SSSSSSSS0..',
  '..0SSS00SSS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0SS0..0SS0..',
  '..0Ss0..0sS0..',
  '..0SS0..0SS0..',
  '.0SSS0..0SSS0.',
  '.0SSS0..0SSS0.',
  '.00000..00000.',
]

/**
 * 번개령 10×12 — 실체화(real)와 유령(ghost)이 색으로 갈린다.
 *
 * 실체일 때만 흰 심지가 켜진다. **때릴 수 있는 순간을 색 하나로 말한다** —
 * 무적인지 아닌지를 매번 시험해서 알아내야 한다면 그건 불공정이다.
 */
const WISP_REAL_A: Matrix = [
  '...0000...',
  '..0BBBB0..',
  '.0BWWWWB0.',
  '0BWWYYWWB0',
  '0BWWYYWWB0',
  '0BbWWWWbB0',
  '.0BWWWWB0.',
  '..0BWWB0..',
  '..0BbbB0..',
  '...0BB0...',
  '....00....',
  '..........',
]

const WISP_REAL_B: Matrix = [
  '..........',
  '...0000...',
  '..0BBBB0..',
  '.0BWWWWB0.',
  '0BWYYYYWB0',
  '0BWYYYYWB0',
  '0BbWWWWbB0',
  '.0BWWWWB0.',
  '..0BbbB0..',
  '..0BbbB0..',
  '...0BB0...',
  '....00....',
]

/** 유령 — 심지가 꺼져 파랗기만 하다. 이때는 때릴 수도, 맞을 수도 없다. */
const WISP_GHOST: Matrix = [
  '...0000...',
  '..0bbbb0..',
  '.0bBBBBb0.',
  '0bBBbbBBb0',
  '0bBBbbBBb0',
  '0bbBBBBbb0',
  '.0bBBBBb0.',
  '..0bBBb0..',
  '..0bbbb0..',
  '...0bb0...',
  '....00....',
  '..........',
]

export interface EnemySprite {
  readonly palette: Palette
  readonly width: number
  readonly height: number
  /** 상태별 프레임. 없는 상태는 `default` 로 떨어진다 */
  readonly clips: Readonly<Record<string, readonly Matrix[]>>
  /** 한 프레임을 몇 틱 보여줄 것인가 */
  readonly frameTicks: number
}

/**
 * 잡몹 도트 로스터. **키는 `EnemyKind` 로 잠근다 — `string` 이 아니다.**
 *
 * 느슨하게 두면 도트 없는 적을 추가해도 컴파일러가 통과시키고, 그 적은 화면에
 * 아무것도 안 보이는 채로 접촉 피해만 주는 적이 된다 — "왜 죽었는지 모름"의
 * 가장 나쁜 형태다. 로스터에 적을 추가하는 순간 도트가 없으면 빌드가 깨져야 한다.
 * → prompts/m1-gate.md 진단표 · docs/12-sprites.md
 */
export const ENEMY_SPRITES: Readonly<Record<EnemyKind, EnemySprite>> = {
  ghoul: {
    palette: PAL_GHOUL,
    width: 12,
    height: 22,
    frameTicks: 14,
    clips: {
      spawn: [GHOUL_RISE],
      default: [GHOUL_WALK_A, GHOUL_WALK_B],
    },
  },
  grimm: {
    palette: PAL_GRIMM,
    width: 14,
    height: 16,
    frameTicks: 8,
    clips: {
      dormant: [GRIMM_DORMANT],
      default: [GRIMM_FLY_A, GRIMM_FLY_B],
    },
  },
  corvid: {
    palette: PAL_CORVID,
    width: 12,
    height: 10,
    frameTicks: 6,
    clips: {
      windup: [CORVID_WINDUP],
      default: [CORVID_UP, CORVID_DOWN],
    },
  },
  levin: {
    palette: PAL_LEVIN,
    width: 14,
    height: 10,
    frameTicks: 8,
    clips: {
      windup: [LEVIN_WINDUP_A, LEVIN_WINDUP_B],
      strike: [LEVIN_STRIKE],
      default: [LEVIN_FLOAT_A, LEVIN_FLOAT_B],
    },
  },

  // --- S2 불타는 마령촌 ---
  ember: {
    palette: PAL_FLAME,
    width: 12,
    height: 20,
    frameTicks: 10,
    clips: {
      // 3연발의 유일한 경고다. 평소 자세와 실루엣이 확실히 다르다.
      windup: [EMBER_WINDUP],
      // 쥐고 있는 그림(windup)과 떠난 그림(fire)이 갈려야 던진 순간이 읽힌다.
      fire: [EMBER_FIRE],
      default: [EMBER_A, EMBER_B],
    },
  },
  pyre: {
    palette: PAL_FLAME,
    width: 14,
    height: 24,
    frameTicks: 16,
    clips: {
      // 멈추는 것만으로는 부족하다 — 재충전도 멈춘 그림이라 뜻이 정반대인 둘이 겹친다.
      windup: [PYRE_WINDUP],
      breathe: [PYRE_BREATHE],
      // 불빛이 없다 = 뿜을 것이 없다. 60프레임짜리 유일한 반격 창이다.
      cooldown: [PYRE_COOLDOWN],
      default: [PYRE_A, PYRE_B],
    },
  },

  // --- S3 얼어붙은 종루 ---
  frostfang: {
    palette: PAL_FROST,
    width: 18,
    height: 14,
    frameTicks: 8,
    clips: {
      windup: [FROSTFANG_WINDUP],
      lunge: [FROSTFANG_LUNGE],
      // 다리가 사라진 실루엣 하나가 "지금이다"를 말한다.
      recover: [FROSTFANG_RECOVER],
      default: [FROSTFANG_A, FROSTFANG_B],
    },
  },
  ringer: {
    palette: PAL_FROST,
    width: 12,
    height: 22,
    frameTicks: 12,
    clips: {
      // 침묵 90프레임과 예고 18프레임이 갈려야 "먼저 잡는다"가 성립한다.
      windup: [RINGER_WINDUP],
      ring: [RINGER_RING],
      default: [RINGER_A, RINGER_B],
    },
  },

  // --- S4 속삭이는 늪 ---
  bogman: {
    palette: PAL_MIRE,
    width: 14,
    height: 20,
    frameTicks: 12,
    clips: {
      submerged: [BOGMAN_SUBMERGED],
      // 잠복과 전신 사이의 중간 단계. 이 프레임이 예고 그 자체다.
      surface: [BOGMAN_SURFACE],
      default: [BOGMAN_A, BOGMAN_B],
    },
  },
  spore: {
    palette: PAL_MIRE,
    width: 12,
    height: 16,
    frameTicks: 10,
    clips: {
      default: [SPORE_A, SPORE_B],
    },
  },

  // --- S5 눈먼 갱도 ---
  gaoler: {
    palette: PAL_ADIT,
    width: 14,
    height: 24,
    frameTicks: 14,
    clips: {
      windup: [GAOLER_WINDUP],
      // 뒤로 당긴 사슬(windup)과 앞으로 뻗은 사슬(whip). 방향이 곧 타이밍이다.
      whip: [GAOLER_WHIP],
      default: [GAOLER_A, GAOLER_B],
    },
  },
  wisp: {
    palette: PAL_WISP,
    width: 10,
    height: 12,
    frameTicks: 10,
    clips: {
      // 색 하나가 "지금 때릴 수 있다"를 말한다.
      ghost: [WISP_GHOST],
      default: [WISP_REAL_A, WISP_REAL_B],
    },
  },
}

validateAll('ghoul', { walkA: GHOUL_WALK_A, walkB: GHOUL_WALK_B, rise: GHOUL_RISE })
validateAll('grimm', { flyA: GRIMM_FLY_A, flyB: GRIMM_FLY_B, dormant: GRIMM_DORMANT })
validateAll('corvid', { up: CORVID_UP, down: CORVID_DOWN, windup: CORVID_WINDUP })
validateAll('levin', {
  floatA: LEVIN_FLOAT_A, floatB: LEVIN_FLOAT_B,
  windupA: LEVIN_WINDUP_A, windupB: LEVIN_WINDUP_B, strike: LEVIN_STRIKE,
})
validateAll('ember', { a: EMBER_A, b: EMBER_B, windup: EMBER_WINDUP, fire: EMBER_FIRE })
validateAll('pyre', {
  a: PYRE_A, b: PYRE_B,
  windup: PYRE_WINDUP, breathe: PYRE_BREATHE, cooldown: PYRE_COOLDOWN,
})
validateAll('frostfang', {
  a: FROSTFANG_A, b: FROSTFANG_B,
  windup: FROSTFANG_WINDUP, lunge: FROSTFANG_LUNGE, recover: FROSTFANG_RECOVER,
})
validateAll('ringer', { a: RINGER_A, b: RINGER_B, windup: RINGER_WINDUP, ring: RINGER_RING })
validateAll('bogman', {
  a: BOGMAN_A, b: BOGMAN_B,
  submerged: BOGMAN_SUBMERGED, surface: BOGMAN_SURFACE,
})
validateAll('spore', { a: SPORE_A, b: SPORE_B })
validateAll('gaoler', { a: GAOLER_A, b: GAOLER_B, windup: GAOLER_WINDUP, whip: GAOLER_WHIP })
validateAll('wisp', { realA: WISP_REAL_A, realB: WISP_REAL_B, ghost: WISP_GHOST })

/** 상태에 맞는 프레임. 상태별 클립이 없으면 기본 클립을 쓴다. */
export function enemyFrame(sprite: EnemySprite, state: string, tick: number): Matrix {
  const frames = sprite.clips[state] ?? sprite.clips['default'] ?? []
  if (frames.length === 0) throw new Error('프레임이 없는 스프라이트다')
  const index = Math.floor(tick / sprite.frameTicks) % frames.length
  return frames[index] as Matrix
}
