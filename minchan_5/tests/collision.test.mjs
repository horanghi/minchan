import assert from 'node:assert/strict';
import test from 'node:test';

import { findHit, overlaps, syncBox } from '../src/collision.js';
import { JUMP_TIME } from '../src/constants.js';
import { hopHeight } from '../src/jump.js';

const box = (cx, cy, cz, hx, hy, hz) => ({ cx, cy, cz, hx, hy, hz });

test('겹치면 true, 떨어져 있으면 false', () => {
  const a = box(0, 0.45, 0, 0.22, 0.45, 0.22);
  assert.equal(overlaps(a, box(0, 0.3, 0, 0.5, 0.3, 0.3)), true);
  assert.equal(overlaps(a, box(2, 0.3, 0, 0.5, 0.3, 0.3)), false);
  assert.equal(overlaps(a, box(0, 0.3, 2, 0.5, 0.3, 0.3)), false);
});

test('면이 정확히 맞닿기만 하면 충돌이 아니다', () => {
  const a = box(0, 0, 0, 0.5, 0.5, 0.5);
  assert.equal(overlaps(a, box(1.0, 0, 0, 0.5, 0.5, 0.5)), false);
  assert.equal(overlaps(a, box(0.999, 0, 0, 0.5, 0.5, 0.5)), true);
});

test('y 축도 본다 — 체공 중인 플레이어는 낮은 동물 위를 넘는다', () => {
  const animal = box(0, 0.24, 0, 0.5, 0.24, 0.3);   // 키 0.48 인 동물

  const grounded = box(0, 0.45, 0, 0.22, 0.45, 0.22);
  assert.equal(overlaps(grounded, animal), true);

  // 점프 정점(높이 0.5)에서는 몸통 아랫면이 동물 위로 올라간다.
  const airborne = box(0, 0.45 + hopHeight(JUMP_TIME / 2), 0, 0.22, 0.45, 0.22);
  assert.equal(overlaps(airborne, animal), false);
});

test('findHit 은 처음 부딪힌 동물을 돌려주고 없으면 null', () => {
  const player = box(0, 0.45, 0, 0.22, 0.45, 0.22);
  const far = { id: 'far', box: box(5, 0.3, 0, 0.5, 0.3, 0.3) };
  const other = { id: 'otherRow', box: box(0, 0.3, -3, 0.5, 0.3, 0.3) };
  const hit = { id: 'hit', box: box(0.1, 0.3, 0, 0.5, 0.3, 0.3) };

  assert.equal(findHit(player, [far, other]), null);
  assert.equal(findHit(player, [far, other, hit]).id, 'hit');
});

test('고속 개체도 프레임마다 겹침을 보므로 통과하지 못한다', () => {
  // 원본은 cannon 의 beginContact 에 의존해 빠른 뱀을 놓칠 수 있었다.
  // 뱀 최대 속도 5.0, 60fps → 프레임당 0.083 유닛. 자기 몸길이보다 훨씬 작다.
  const player = box(0, 0.45, 0, 0.22, 0.45, 0.22);
  const snake = { id: 'snake', box: box(-4, 0.2, 0, 0.58, 0.2, 0.2) };

  let touched = false;
  for (let frame = 0; frame < 120; frame++) {
    syncBox(snake.box, -4 + (5.0 / 60) * frame, 0);
    if (findHit(player, [snake])) { touched = true; break; }
  }
  assert.equal(touched, true, '뱀이 플레이어를 관통했다');
});

test('syncBox 는 새 객체를 만들지 않고 제자리에서 갱신한다', () => {
  const b = box(0, 0.2, 0, 0.5, 0.2, 0.2);
  const same = syncBox(b, 3, -2);
  assert.equal(same, b);
  assert.equal(b.cx, 3);
  assert.equal(b.cz, -2);
  assert.equal(b.hx, 0.5, '반크기는 건드리지 않는다');
});
