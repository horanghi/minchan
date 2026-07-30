import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BOARD_HALF, CAM_OFFSET, GEN_AHEAD, MAX_FOG_FAR, ROWS_PER_BIOME,
} from '../src/constants.js';
import { biomeAt, biomeIndexAt, blendAt, lerpColor, moodAt, speedScaleAt } from '../src/biomes.js';
import { BIOMES, SPECIES, requiredFiles } from '../src/roster.js';
import { WRAP_X, isBlocked, planRow } from '../src/rowplan.js';

const SEED = 12345;

test('같은 줄은 언제 만들어도 같은 내용이다', () => {
  for (const row of [1, 7, 23, 24, 51, 200, 999]) {
    const a = planRow(SEED, row);
    const b = planRow(SEED, row);
    assert.deepEqual(a, b, `${row}번 줄이 재생성 시 달라졌다`);
  }
});

test('시드가 다르면 맵이 달라진다', () => {
  const a = Array.from({ length: 60 }, (_, i) => planRow(1, i + 1).type);
  const b = Array.from({ length: 60 }, (_, i) => planRow(2, i + 1).type);
  assert.notDeepEqual(a, b);
});

test('시작 지점은 항상 안전한 빈 잔디다', () => {
  for (const row of [-4, -1, 0]) {
    const plan = planRow(SEED, row);
    assert.equal(plan.type, 'grass');
    assert.deepEqual(plan.trees, []);
    assert.deepEqual(plan.animals, []);
  }
});

test('바이오미가 줄 번호대로 순환한다', () => {
  assert.equal(biomeAt(0).id, 'farm');
  assert.equal(biomeAt(ROWS_PER_BIOME - 1).id, 'farm');
  assert.equal(biomeAt(ROWS_PER_BIOME).id, 'forest');
  assert.equal(biomeAt(ROWS_PER_BIOME * 2).id, 'savanna');
  assert.equal(biomeAt(ROWS_PER_BIOME * 3).id, 'farm', '세 구간 뒤 순환');
  assert.equal(biomeIndexAt(-5), 0, '음수 줄은 첫 바이오미');
});

test('동물은 자기 바이오미 명단에서만 나온다', () => {
  const seen = new Map();
  for (let row = 1; row < ROWS_PER_BIOME * 3; row++) {
    const plan = planRow(SEED, row);
    const biome = BIOMES.find(b => b.id === plan.biomeId);
    for (const a of plan.animals) {
      assert.ok(biome.animals.includes(a.species),
        `${plan.biomeId} 줄 ${row} 에 명단 밖 ${a.species} 가 나왔다`);
      seen.set(plan.biomeId, (seen.get(plan.biomeId) ?? 0) + 1);
    }
  }
  // 세 바이오미 모두 실제로 동물을 배치했는지
  for (const b of BIOMES) assert.ok(seen.get(b.id) > 0, `${b.id} 에 동물이 없다`);
});

test('한 줄의 동물은 종·방향·속도가 통일된다', () => {
  let checked = 0;
  for (let row = 1; row < 400; row++) {
    const { animals } = planRow(SEED, row);
    if (animals.length < 2) continue;
    const [first] = animals;
    for (const a of animals) {
      assert.equal(a.species, first.species);
      assert.equal(a.dir, first.dir);
      assert.equal(a.speed, first.speed);
    }
    checked++;
  }
  assert.ok(checked > 20, `여러 마리인 줄 표본이 부족하다 (${checked})`);
});

test('동물 속도가 바이오미 범위 안이다 (거리·종별 배율 포함)', () => {
  for (let row = 1; row < 400; row++) {
    const plan = planRow(SEED, row);
    const biome = BIOMES.find(b => b.id === plan.biomeId);
    const scale = speedScaleAt(row);
    for (const a of plan.animals) {
      const mul = SPECIES[a.species].speedMul ?? 1;
      const lo = biome.speed[0] * scale * mul;
      const hi = biome.speed[1] * scale * mul;
      assert.ok(a.speed >= lo - 1e-9 && a.speed <= hi + 1e-9,
        `줄 ${row} ${a.species} 속도 ${a.speed} 가 [${lo}, ${hi}] 밖`);
      assert.ok(a.dir === 1 || a.dir === -1);
      assert.ok(Math.abs(a.x) <= WRAP_X, `줄 ${row} 스폰 x ${a.x} 가 랩 범위 밖`);
    }
  }
});

test('뱀은 같은 바이오미의 다른 동물보다 확실히 빠르다', () => {
  const forest = BIOMES.find(b => b.id === 'forest');
  const snakeMin = forest.speed[0] * SPECIES.snake.speedMul;
  // 뱀의 최저 속도가 다른 숲 동물의 평균 속도보다 빨라야 위협이 된다.
  const othersAvg = (forest.speed[0] + forest.speed[1]) / 2;
  assert.ok(snakeMin > othersAvg,
    `뱀 최저 ${snakeMin} 가 숲 평균 ${othersAvg} 보다 느리다`);
});

test('동물끼리 처음부터 겹쳐 스폰되지 않는다', () => {
  for (let row = 1; row < 400; row++) {
    const { animals } = planRow(SEED, row);
    const xs = animals.map(a => a.x).sort((p, q) => p - q);
    for (let i = 1; i < xs.length; i++) {
      assert.ok(xs[i] - xs[i - 1] > 0.9,
        `줄 ${row} 에서 간격 ${(xs[i] - xs[i - 1]).toFixed(2)} 로 겹침`);
    }
  }
});

test('나무가 한 줄을 완전히 막지 않는다', () => {
  const lanes = BOARD_HALF * 2 + 1;
  for (let row = 1; row < 600; row++) {
    const plan = planRow(SEED, row);
    if (plan.type !== 'grass') continue;
    const open = [];
    for (let x = -BOARD_HALF; x <= BOARD_HALF; x++) {
      if (!isBlocked(plan, x)) open.push(x);
    }
    assert.ok(open.length > 0, `줄 ${row} 이 완전히 막혔다`);
    assert.ok(plan.trees.length < lanes);
    for (const x of plan.trees) {
      assert.ok(Number.isInteger(x) && Math.abs(x) <= BOARD_HALF,
        `줄 ${row} 나무 x=${x} 가 판 밖`);
    }
  }
});

test('플레이어 바로 앞 첫 줄 중앙은 비어 있다', () => {
  for (let seed = 0; seed < 200; seed++) {
    assert.equal(isBlocked(planRow(seed, 1), 0), false, `시드 ${seed}`);
  }
});

test('난이도 배율은 단조 증가하고 상한이 있다', () => {
  let prev = 0;
  for (let row = 0; row < 5000; row += 10) {
    const s = speedScaleAt(row);
    assert.ok(s >= prev, '배율이 내려갔다');
    assert.ok(s <= 1.6, `상한 초과 ${s}`);
    prev = s;
  }
  assert.equal(speedScaleAt(0), 1);
  assert.equal(speedScaleAt(5000), 1.6);
});

test('바이오미 전환은 구간 끝에서만 섞인다', () => {
  assert.equal(blendAt(0), 0);
  assert.equal(blendAt(ROWS_PER_BIOME - 1), 1, '경계 직전은 완전히 다음 색');
  assert.ok(blendAt(ROWS_PER_BIOME - 3) > 0);
  assert.ok(blendAt(ROWS_PER_BIOME - 3) < 1);
  assert.equal(blendAt(ROWS_PER_BIOME), 0, '새 구간 시작은 다시 0');
});

test('색 보간이 양 끝에서 원래 색을 보존한다', () => {
  assert.equal(lerpColor(0x000000, 0xffffff, 0), 0x000000);
  assert.equal(lerpColor(0x000000, 0xffffff, 1), 0xffffff);
  assert.equal(lerpColor(0x000000, 0xffffff, 0.5), 0x808080);
  assert.equal(lerpColor(0x102040, 0x102040, 0.37), 0x102040);
});

test('분위기 값이 전 구간에서 유효한 범위 안이다', () => {
  for (let row = 0; row < ROWS_PER_BIOME * 3; row++) {
    const m = moodAt(row);
    for (const key of ['sky', 'grass', 'road', 'tree', 'sunColor']) {
      assert.ok(Number.isInteger(m[key]) && m[key] >= 0 && m[key] <= 0xffffff,
        `줄 ${row} ${key}=${m[key]}`);
    }
    assert.ok(m.fogNear < m.fogFar, `줄 ${row} 안개 근/원 역전`);
    assert.ok(m.exposure > 0 && m.sunIntensity > 0 && m.ambient > 0);
  }
});

test('생성 거리가 모든 바이오미의 안개 거리를 덮는다', () => {
  // 원본의 결함은 "안개보다 멀리 생성"(낭비)이었고, 그 반대인
  // "안개보다 가까이 생성"은 월드 끝이 드러나는 더 눈에 띄는 문제가 된다.
  for (const b of BIOMES) {
    assert.ok(b.fog[1] <= MAX_FOG_FAR,
      `${b.id} 안개 far ${b.fog[1]} 가 상한 ${MAX_FOG_FAR} 초과`);
    assert.ok(GEN_AHEAD + CAM_OFFSET.z >= b.fog[1],
      `${b.id}: 생성 거리 ${GEN_AHEAD}(+카메라 ${CAM_OFFSET.z}) 가 안개 ${b.fog[1]} 에 못 미쳐 월드 끝이 보인다`);
    assert.ok(b.fog[0] < b.fog[1], `${b.id} 안개 근/원 역전`);
  }
});

test('로스터가 바이오미 명단과 어긋나지 않는다', () => {
  for (const biome of BIOMES) {
    for (const id of biome.animals) {
      assert.ok(SPECIES[id], `${biome.id} 의 ${id} 가 로스터에 없다`);
    }
  }
  // 로스터의 모든 종이 어느 바이오미엔가 등장해야 한다 — 로드만 하고
  // 쓰지 않는 모델은 순수 낭비다.
  const used = new Set(BIOMES.flatMap(b => b.animals));
  for (const id of Object.keys(SPECIES)) {
    assert.ok(used.has(id), `${id} 가 어느 바이오미에도 없다`);
  }
});

test('로드할 파일 목록에 중복이 없다', () => {
  const files = requiredFiles();
  assert.equal(files.length, new Set(files).size);
  assert.equal(files.length, Object.keys(SPECIES).length + 1, '동물 + 플레이어');
});

test('모든 종에 이동·대기 클립 이름이 있다', () => {
  for (const [id, s] of Object.entries(SPECIES)) {
    assert.ok(s.clips.walk, `${id} 이동 클립 없음`);
    assert.ok(s.clips.run, `${id} 질주 클립 없음`);
    assert.ok(s.clips.idle, `${id} 대기 클립 없음`);
    assert.ok(s.height > 0, `${id} 목표 키 없음`);
    assert.ok(s.hit > 0 && s.hit <= 1, `${id} 히트박스 배율 ${s.hit}`);
  }
});

test('뱀은 진행축으로 길게 늘여 놓는다', () => {
  // 모델이 고개를 든 코브라 자세라 손대지 않으면 진행축 0.32 짜리 세로
  // 조각이 된다 — 모든 동물 중 가장 짧아서 "초고속 위험" 역할이 뒤집힌다.
  // stretch 를 지우거나 1 로 되돌리면 이 테스트가 잡는다.
  assert.ok(SPECIES.snake.stretch >= 2.5,
    `뱀 stretch ${SPECIES.snake.stretch} 로는 진행축이 충분히 길지 않다`);
  assert.ok(SPECIES.snake.height < 0.6,
    '뱀은 낮게 깔려야 길어 보인다');
});
