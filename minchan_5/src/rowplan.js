// 한 줄(row)에 무엇이 있는지 결정하는 순수 로직.
//
// three.js 를 전혀 모르는 계층이다. world.js 가 이 계획을 받아 메쉬로 만든다.
// 덕분에 "바이오미 배분이 맞는가", "같은 줄은 항상 같은가"를 브라우저 없이
// 테스트할 수 있다.

import { BOARD_HALF } from './constants.js';
import { biomeAt, speedScaleAt } from './biomes.js';
import { SPECIES } from './roster.js';
import { intRange, range, rowRandom } from './rng.js';

export const WRAP_X = 8;        // 이 x 를 넘으면 반대편으로 되돌린다
export const SAFE_ROWS = 0;     // 0번 줄 이하는 시작 안전지대

/**
 * @typedef {{species:string, x:number, dir:1|-1, speed:number}} PlannedAnimal
 * @typedef {{row:number, type:'grass'|'road', biomeId:string,
 *            trees:number[], animals:PlannedAnimal[]}} RowPlan
 */

/**
 * 줄 계획을 만든다. 같은 (seed, row) 면 항상 같은 결과가 나온다.
 * @returns {RowPlan}
 */
export function planRow(seed, row) {
  const biome = biomeAt(row);
  const base = { row, biomeId: biome.id, trees: [], animals: [] };

  // 시작 지점 주변은 무조건 빈 잔디 — 시작하자마자 죽는 상황을 막는다.
  if (row <= SAFE_ROWS) return { ...base, type: 'grass' };

  const rand = rowRandom(seed, row);
  const isRoad = rand() < biome.roadChance;

  if (!isRoad) return { ...base, type: 'grass', trees: planTrees(rand, biome, row) };

  return { ...base, type: 'road', animals: planAnimals(rand, biome, row) };
}

/** 잔디 줄의 나무 위치(격자 x). 플레이어 진행을 완전히 막지 않도록 제한한다. */
function planTrees(rand, biome, row) {
  if (rand() >= biome.treeChance) return [];

  const count = intRange(rand, 1, biome.treeMax);
  const trees = [];
  for (let i = 0; i < count; i++) {
    const x = intRange(rand, -BOARD_HALF, BOARD_HALF);
    // 첫 줄 정중앙은 비워둔다 — 플레이어 바로 앞이 막히면 안 된다.
    if (row === 1 && x === 0) continue;
    if (!trees.includes(x)) trees.push(x);
  }
  // 한 줄을 통째로 막으면 진행이 불가능해진다.
  return trees.length >= BOARD_HALF * 2 + 1 ? trees.slice(0, 1) : trees;
}

/** 도로 줄의 동물 배치. 한 줄은 한 종·한 방향으로 통일한다. */
function planAnimals(rand, biome, row) {
  const species = biome.animals[Math.floor(rand() * biome.animals.length)];
  const dir = rand() < 0.5 ? 1 : -1;
  // 종별 배율 — 같은 바이오미 안에서도 뱀처럼 유독 빠른 놈을 만든다.
  const speedMul = SPECIES[species]?.speedMul ?? 1;
  const speed = range(rand, biome.speed[0], biome.speed[1]) * speedScaleAt(row) * speedMul;
  const count = intRange(rand, biome.lanesPerRow[0], biome.lanesPerRow[1]);

  // 균등 간격 + 지터. 원본처럼 완전 무작위로 두면 서로 겹쳐 한 덩어리가 된다.
  const span = WRAP_X * 2;
  const slot = span / count;
  const animals = [];
  for (let i = 0; i < count; i++) {
    const jitter = range(rand, -slot * 0.28, slot * 0.28);
    animals.push({
      species,
      x: -WRAP_X + slot * (i + 0.5) + jitter,
      dir,
      speed,
    });
  }
  return animals;
}

/** 나무가 막고 있는 칸인지. 플레이어 이동 판정에 쓴다. */
export function isBlocked(plan, x) {
  return plan.type === 'grass' && plan.trees.includes(x);
}
