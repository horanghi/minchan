// 동물 개체의 생성·이동·애니메이션.
//
// 원본은 동물 하나하나가 cannon 바디였고 속도를 매 프레임 다시 대입했다.
// 여기서는 물리 없이 x 를 직접 적분한다 — 어차피 등속 직선운동이다.

import { WRAP_X } from './rowplan.js';

// 이 거리를 넘어가면 AnimationMixer 를 돌리지 않는다. 안개 너머라 어차피
// 보이지 않는데 스키닝 행렬 계산은 개체당 40~50 뼈씩 들어간다.
const ANIMATE_DISTANCE = 26;

// 네발짐승이 걷기에서 질주로 넘어가는 속도.
const GALLOP_SPEED = 2.6;

/** 이동 클립 이름과 재생 배속을 정한다. */
export function gaitFor(spec, speed) {
  const clips = spec.clips;
  const name = spec.gait === 'quad' && speed >= GALLOP_SPEED ? clips.run : clips.walk;
  // 실제 속도 / 기준 속도. 너무 벗어나면 발이 미끄러지거나 경련하듯 보인다.
  const rate = Math.min(Math.max(speed / spec.moveRef, 0.55), 2.4);
  return { name, rate };
}

/**
 * 계획된 동물 하나를 풀에서 꺼내 배치한다.
 * @param {number} phase 0~1, 같은 줄의 개체가 한 몸처럼 움직이지 않게 하는 위상
 */
export function spawnAnimal(pool, planned, row, z, phase = 0) {
  const inst = pool.acquire(planned.species);
  const { spec } = inst.proto;

  inst.dir = planned.dir;
  inst.speed = planned.speed;
  inst.row = row;
  inst.x = planned.x;
  inst.z = z;

  // 모델은 전부 +Z 를 본다. ±X 로 달리게 Y 축으로 90° 돌린다.
  inst.group.rotation.y = planned.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
  inst.group.position.set(planned.x, 0, z);
  inst.box.cx = planned.x;
  inst.box.cz = z;

  const { name, rate } = gaitFor(spec, planned.speed);
  const action = pool.play(inst, name, rate);
  if (action) action.time = action.getClip().duration * phase;

  return inst;
}

/**
 * 모든 동물을 한 프레임 전진시킨다.
 * @param {number} playerZ 애니메이션 생략 판정 기준
 */
export function updateAnimals(animals, delta, playerZ) {
  for (const inst of animals) {
    inst.x += inst.dir * inst.speed * delta;

    // 화면 밖에서 반대편으로 되돌린다. 순간이동이라 접촉 이벤트 기반
    // 판정이었다면 놓칠 수 있는 지점 — 매 프레임 AABB 라 문제없다.
    if (inst.x > WRAP_X) inst.x -= WRAP_X * 2;
    else if (inst.x < -WRAP_X) inst.x += WRAP_X * 2;

    inst.group.position.x = inst.x;
    inst.box.cx = inst.x;

    if (Math.abs(inst.z - playerZ) <= ANIMATE_DISTANCE) {
      inst.mixer.update(delta);
    }
  }
}

/** 플레이어를 친 동물이 잠깐 멈칫하게 한다 — 사망 연출의 무게를 준다. */
export function stagger(pool, inst) {
  const idle = inst.proto.spec.clips.idle;
  if (idle) pool.play(inst, idle, 1);
  inst.speed = 0;
}
