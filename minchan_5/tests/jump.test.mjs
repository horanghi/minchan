import assert from 'node:assert/strict';
import test from 'node:test';

import { GRAVITY, JUMP_H, JUMP_TIME, JUMP_VEL } from '../src/constants.js';
import { hopDone, hopHeight, hopPosition, hopProgress, hopSquash } from '../src/jump.js';

// 원본(minchan_1)이 cannon-es 로 만들던 포물선을 수식으로 옮긴 것이므로,
// 상수와 궤적이 원본과 수치적으로 같아야 한다.
test('점프 상수가 원본 수식과 일치한다', () => {
  assert.equal(JUMP_VEL, Math.sqrt(2 * 22 * 0.5));
  assert.equal(JUMP_TIME, (2 * Math.sqrt(2 * 22 * 0.5)) / 22);
  // 원본 index.html 116-118행의 값
  assert.ok(Math.abs(JUMP_VEL - 4.69041575982343) < 1e-12);
  assert.ok(Math.abs(JUMP_TIME - 0.4264014327112209) < 1e-12);
});

test('포물선 정점이 정확히 JUMP_H 이고 시점은 중간이다', () => {
  const peak = hopHeight(JUMP_TIME / 2);
  assert.ok(Math.abs(peak - JUMP_H) < 1e-12, `정점 ${peak}`);

  // 정점보다 높은 지점은 없다.
  for (let i = 0; i <= 200; i++) {
    const t = (JUMP_TIME * i) / 200;
    assert.ok(hopHeight(t) <= peak + 1e-12);
  }
});

test('시작과 착지 순간의 높이는 정확히 0 이다', () => {
  assert.equal(hopHeight(0), 0);
  assert.equal(hopHeight(JUMP_TIME), 0);
  assert.equal(hopHeight(JUMP_TIME + 0.1), 0);
  assert.equal(hopHeight(-0.1), 0);
});

test('궤적이 뉴턴 운동방정식과 일치한다', () => {
  for (let i = 1; i < 40; i++) {
    const t = (JUMP_TIME * i) / 40;
    const expected = JUMP_VEL * t - 0.5 * GRAVITY * t * t;
    assert.ok(Math.abs(hopHeight(t) - expected) < 1e-15);
  }
});

test('수평 이동은 선형이고 착지 시 목표 칸에 정확히 놓인다', () => {
  const from = { x: 0, z: 0 };
  const to = { x: 0, z: -1 };

  const mid = hopPosition(from, to, JUMP_TIME / 2);
  assert.ok(Math.abs(mid.z - (-0.5)) < 1e-12);
  assert.ok(Math.abs(mid.y - JUMP_H) < 1e-12);

  const land = hopPosition(from, to, JUMP_TIME);
  assert.equal(land.x, 0);
  assert.equal(land.z, -1);   // 격자에서 어긋나면 안 된다
  assert.equal(land.y, 0);
});

test('진행률과 착지 판정', () => {
  assert.equal(hopProgress(0), 0);
  assert.equal(hopProgress(JUMP_TIME), 1);
  assert.equal(hopProgress(JUMP_TIME * 2), 1);
  assert.equal(hopDone(JUMP_TIME - 1e-9), false);
  assert.equal(hopDone(JUMP_TIME), true);
});

test('스쿼시&스트레치는 시작·끝에서 1 로 돌아온다', () => {
  for (const t of [0, JUMP_TIME, JUMP_TIME + 1]) {
    const s = hopSquash(t);
    assert.equal(s.xz, 1);
    assert.equal(s.y, 1);
  }
  // 체공 정점에서는 세로로 늘어난다.
  const peak = hopSquash(JUMP_TIME / 2);
  assert.ok(peak.y > 1, `정점 y배율 ${peak.y}`);
  assert.ok(peak.xz < 1, `정점 xz배율 ${peak.xz}`);
});
