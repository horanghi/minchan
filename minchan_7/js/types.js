/**
 * 병종표. minchan_6 에서 그대로 가져왔다.
 *
 * 삼각전이라고 병사가 달라질 이유는 없다. 값과 능력치를 건드리면 1:1 에서
 * 오래 굴려 맞춘 균형이 통째로 날아간다.
 *
 * 적 전용(암흑기사·저격수·자폭병·사령술사·해골병·T맨·감염된 타이탄)은
 * 지금은 아무도 쓰지 않는다. 지웠다가 다시 만드는 것보다 남겨 두는 편이
 * 낫다 — 폐허에 중립 보스를 세우는 날 그대로 쓴다.
 */
export const TYPES = {
  miner : {nm:'광부',   cost:75,  hp:70,  dmg:0,  rng:0,   spd:70, atk:1,   size:47, gain:0,  worker:true},
  sword : {nm:'검사',   cost:60,  hp:130, dmg:15, rng:34,  spd:72, atk:.70, size:52, gain:20},
  archer: {nm:'궁수',   cost:95,  hp:70,  dmg:20, rng:235, spd:60, atk:1.05,size:50, gain:30, ranged:true},
  shield: {nm:'방패병', cost:140, hp:380, dmg:10, rng:36,  spd:48, atk:1.20,size:57, gain:42},
  giant : {nm:'거인',   cost:280, hp:760, dmg:48, rng:50,  spd:38, atk:1.55,size:84, gain:85},

  /* 아래 셋은 아군 전용이다. 적 스폰 표에는 넣지 않았다 — 배울 것과 상대할
     것을 한꺼번에 늘리면 무엇 때문에 졌는지 알 수 없게 된다. */

  // 창병 — 사거리 62. 검사(34)보다 길어 **방패병 뒤에서 찌른다.**
  // 앞쪽 사거리 안의 적을 한 번에 전부 꿴다. 겹쳐 싸우게 된 뒤로 적이
  // 뭉쳐 서므로, 줄을 꿰는 무기가 값을 한다.
  spear : {nm:'창병',   cost:110, hp:170, dmg:22, rng:62,  spd:64, atk:1.00,size:55, gain:34, pierce:true},

  // 의무병 — 때리지 않는다. 사거리 150 이라 전선에서 그만큼 떨어져 서고,
  // 그 자리에서 반경 안 아군을 계속 고친다. 겹쳐 싸우는 무리에 붙어야
  // 값을 하는 유닛이다.
  medic : {nm:'의무병', cost:130, hp:110, dmg:0,  rng:150, spd:66, atk:1.50,size:50, gain:38, medic:true, heal:9, healRng:150},

  // 폭탄병 — 느리게 던지지만 떨어진 자리 44px 안의 적을 전부 때린다.
  // 뭉친 적을 푸는 열쇠. 한 명한테는 궁수보다 못하다.
  bomber: {nm:'폭탄병', cost:200, hp:120, dmg:30, rng:180, spd:52, atk:2.20,size:54, gain:60, ranged:true, splash:44},

  /* ── 마법 ── */

  // 빙결술사 — 얼음 폭풍. 폭탄과 같은 광역이지만 피해가 낮은 대신
  // 맞은 적을 2.2초 동안 절반 속도로 만든다. 전선을 미는 쪽이 아니라
  // 붙잡아 두는 쪽이다.
  frost : {nm:'빙결술사', cost:180, hp:100, dmg:14, rng:190, spd:58, atk:2.40,size:52, gain:55, ranged:true, splash:52, slow:2.2},

  // 마법사 — 연쇄 번개. 겨눈 적에서 가까운 적으로 네 번까지 튄다.
  // 튈 때마다 피해가 20%씩 준다. 뭉친 줄을 한 번에 훑는 값비싼 한 방.
  mage  : {nm:'마법사',   cost:240, hp:90,  dmg:26, rng:210, spd:56, atk:1.90,size:53, gain:70, chain:4, chainRng:78},

  /* ── 큰 것들 ── */

  // 로마 기병 — 빠르다. **달려온 거리가 곧 첫 타의 무게**다.
  // 멈춰서 치고받기 시작하면 평범해진다. 뚫고 들어가는 데 쓰는 유닛이다.
  cavalry:{nm:'로마 기병',cost:175, hp:290, dmg:26, rng:44,  spd:132,atk:1.00,size:64, gain:58, charge:true},

  // 사제 — 가장 많이 다친 아군 하나를 크게 고친다. 의무병이 무리를 얕게
  // 훑는다면 이쪽은 한 명을 확실히 살린다. 전선 뒤에 스스로 자리를 잡는다.
  priest: {nm:'사제',     cost:155, hp:100, dmg:0,  rng:170, spd:62, atk:1.20,size:51, gain:48, healer:true, heal:22},

  // 용사 — 검기가 직선을 관통한다. 줄지어 선 적을 한 번에 가른다.
  hero  : {nm:'용사',     cost:560, hp:980, dmg:78, rng:135, spd:88, atk:.85, size:68, gain:230, beam:true, heavy:true},

  // 버서커 — 느리고 두껍다. 사거리 밖 118px 까지 내려찍는다(먼 쪽은 70%).
  berserk:{nm:'버서커',   cost:680, hp:2800,dmg:140,rng:80,  spd:26, atk:2.60,size:126,gain:280, slam:118, heavy:true},

  // 기관총 장갑차 — 사람이 아니라 **차량**이다. 사거리 300 에서 멈춰
  // 여섯 발을 0.075초 간격으로 뿌린다. 한 발은 22 로 가볍지만 **탄마다
  // 표적을 새로 고르기 때문에** 줄지어 선 무리를 훑는다. 뭉친 큰 것
  // 하나를 잡는 데는 버서커만 못하다. 대신 장갑이 두꺼워 오래 버틴다.
  apc   : {nm:'기관총 장갑차', cost:2500, hp:3400, dmg:32, rng:300, spd:46, atk:1.15,
           size:104, gain:520, vehicle:true, mg:8, mgGap:.075},

  // 타이탄 — 전진하지 않는다(stand 150). 세 동작을 돌아가며 쓴다:
  // 손목 레이저(520·0.75) → 대검 내려찍기(230·1.45) → 코어 빔(780·2.1).
  titan : {nm:'타이탄',   cost:4000,hp:9000,dmg:200,rng:520, spd:20, atk:2.10,size:252,gain:900, titan:true, stand:150},

  /* ── 적 전용. 3판에서 나온다 ── */

  // 암흑기사 — 준 피해의 45%를 회복한다. 오래 끌수록 이쪽이 손해다.
  dark  : {nm:'암흑기사', cost:0,   hp:1050,dmg:58, rng:42,  spd:64, atk:.90, size:68, gain:170, drain:.45, col:'#5b3fa0'},

  // 저격수 — 사거리 430. 우리 궁수(235)보다 훨씬 멀리서 때린다.
  sniper: {nm:'저격수',   cost:0,   hp:95,  dmg:95, rng:430, spd:44, atk:2.40,size:54, gain:150, ranged:true, col:'#2f6b5a'},

  // 자폭병 — 빠르게 파고들어 반경 130 을 터뜨리고 죽는다. 뭉쳐 있으면 재앙이다.
  kamikaze:{nm:'자폭병',  cost:0,   hp:150, dmg:190,rng:34,  spd:112,atk:.40, size:50, gain:120, suicide:130, col:'#c96a1a'},

  // 사령술사 — 해골병을 계속 불러낸다. **먼저 끊지 않으면 줄이 안 끊긴다.**
  necro : {nm:'사령술사', cost:0,   hp:200, dmg:0,  rng:220, spd:54, atk:2.80,size:57, gain:190, summon:true, col:'#7a2fa0'},

  // 해골병 — 소환물. 약하지만 끝이 없다.
  bone  : {nm:'해골병',   cost:0,   hp:65,  dmg:14, rng:32,  spd:80, atk:.75, size:45, gain:12,  col:'#6b7785'},

  // T맨 — 3판에서 **적 성을 처음 때리는 순간** 깨어난다. 타이탄보다
  // 1.5배 크다(378). 세 동작을 돌아가며 쓴다:
  //   건틀랫(300·2.0배) → 어깨 딱풀미사일(반경 130·3.2초 붙잡음)
  //   → 코어 빔(900·2.4배)
  // 붙어도 물러서도 각각 다른 것이 날아온다.
  tman  : {nm:'T맨', cost:0, hp:8000, dmg:85, rng:900, spd:18, atk:2.40, size:378,
           gain:2600, tman:true, heavy:true, stand:200, col:'#c2a24a'},

  // 감염된 타이탄 — 3판 보스로 버서커 대신 오기도 한다.
  // 우리 타이탄과 같은 3연 동작을 쓴다. 체력은 낮지만 보스 배율이 얹힌다.
  xtitan: {nm:'감염된 타이탄', cost:0, hp:6000, dmg:150, rng:520, spd:24, atk:2.30, size:230, gain:1200,
           titan:true, stand:170, infected:true, heavy:true, col:'#5fa04a'}
};
/**
 * 살 수 있는 병종. 다섯 칸 × 세 줄이다.
 *
 * 적 전용(암흑기사·저격수·자폭병·사령술사·해골병)은 여기 없다 — 표에는
 * 있지만 버튼이 없으니 살 수 없다.
 */
export const BUYABLE = ['miner','sword','archer','spear','shield',
                 'medic','priest','frost','bomber','mage',
                 'cavalry','hero','berserk','giant','apc','titan'];

/**
 * 버튼 차례는 **값싼 것부터**다.
 *
 * 손으로 적어 두면 값을 고칠 때마다 자리가 어긋난다. 표에서 직접 정렬해
 * 값과 자리가 갈라질 수 없게 한다.
 */
export const ORDER = [...BUYABLE].sort((a,b)=>TYPES[a].cost - TYPES[b].cost);
