import { MAX_MINERS } from './world.js';
import { TYPES } from './types.js';
import { G, W, spawn, spawnMiner, minerCount } from './state.js';

/**
 * 병사를 산다.
 *
 * **값 확인과 지불이 여기 한 곳에만 있어야 한다.** 사람과 컴퓨터가 각자
 * 따로 계산하면 한쪽만 고쳐져 공짜로 사는 길이 생긴다.
 */
export function buy(k, who, E) {
  const P = W(who);
  if (!P || !P.alive || G.over) return false;
  const T = TYPES[k];
  if (!T) return false;
  if (k === 'miner' && minerCount(who) >= MAX_MINERS) return 'full';
  if (P.gold < T.cost) return false;
  P.gold -= T.cost;
  if (k === 'miner') spawnMiner(who);
  else { if (!E) { P.gold += T.cost; return false; } spawn(k, who, E); }
  return true;
}
