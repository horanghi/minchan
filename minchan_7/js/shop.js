import { MAX_MINERS, onEdge } from './world.js';
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
  else {
    // **내가 낀 전선에만 보낸다.** 화면에는 남의 싸움도 보이는데, 거기에
    // 병사를 넣으면 남의 성문 앞에 내 병사가 솟아난다. 지불 전에 막는다.
    if (!E || !G.live.includes(E.id) || !onEdge(E, who)) { P.gold += T.cost; return false; }
    spawn(k, who, E);
  }
  return true;
}
