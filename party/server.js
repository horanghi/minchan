// ===== 테이블 카드 대전 — 온라인 서버 (Cloudflare Workers + partyserver) =====
// 방 하나 = Durable Object 인스턴스 하나. 게임 상태를 서버가 소유(authoritative)하고,
// 각 플레이어에게는 자기 손패만 실물로, 남의 손패는 장수만 전달(redact)한다.
//
// 원본(minchan_4/index.html)의 게임 로직을 그대로 이식하되,
// 렌더/타이머(setTimeout)/pass 오버레이/CPU 로직은 제거했다.
//
// PartyKit 관리형 호스팅이 중단되어, Cloudflare 무료 계정에 직접 배포하도록 partyserver로 이식.
import { Server, routePartykitRequest } from "partyserver";

// ===== 카드 정의 (원본과 동일) =====
export const CARDS = {
  bow:       {name:'중세 활',      art:'🏹', cls:'atk',  dmg:2, desc:'2 데미지'},
  sword:     {name:'중세 검',      art:'🗡️', cls:'atk',  dmg:2, desc:'2 데미지'},
  axe:       {name:'돌깨는 도끼',  art:'🪓', cls:'atk',  dmg:3, desc:'3 데미지'},
  greatsword:{name:'중세 대검',    art:'⚔️', cls:'atk',  dmg:5, rest:true, desc:'5뎀·다음턴 쉬기'},
  shotgun:   {name:'샷건',         art:'💥', cls:'atk',  dmg:3, desc:'3 데미지'},
  fireball:  {name:'파이어볼',     art:'🔥', cls:'atk',  dmg:4, desc:'4 데미지'},
  lightning: {name:'번개 마법',    art:'⚡', cls:'atk',  dmg:3, pierce:true, desc:'3뎀·방패무시'},
  poison:    {name:'독 물약',      art:'☠️', cls:'atk',  poison:3, desc:'3턴 독'},
  freeze:    {name:'얼음 마법',    art:'❄️', cls:'atk',  freeze:true, desc:'1턴 얼리기'},
  vampire:   {name:'흡혈 박쥐',    art:'🦇', cls:'atk',  dmg:2, lifesteal:2, desc:'2뎀+2회복'},
  bomb:      {name:'폭탄',         art:'💣', cls:'atk',  dmg:4, selfdmg:1, desc:'4뎀·내체력-1'},
  meteor:    {name:'메테오',       art:'☄️', cls:'atk',  all:2, desc:'모두에게 2뎀'},
  parsley:   {name:'파슬리 인형',  art:'🐸', cls:'heal', dmg:1, heal:1, desc:'1회복+1뎀'},
  shield:    {name:'방패',         art:'🛡️', cls:'buff', shield:true, desc:'공격 막기'},
  star:      {name:'슈퍼 별',      art:'⭐', cls:'buff', star:true, desc:'1턴 무적'},
  meat:      {name:'만화 고기',    art:'🍗', cls:'heal', heal:2, desc:'2 회복'},
  beer:      {name:'생맥주',       art:'🍺', cls:'heal', heal:1, desc:'1 회복'},
  cake:      {name:'케이크',       art:'🎂', cls:'heal', heal:4, desc:'4 회복'},
  snack:     {name:'스낵',         art:'🍟', cls:'heal', heal:2, desc:'2 회복'},
  elixir:    {name:'생명의 물',    art:'💧', cls:'heal', fullheal:true, desc:'가득 회복'},
  potion:    {name:'회복 포션',    art:'🧪', cls:'buff', maxhp:1, desc:'최대체력 +1'},
  scroll:    {name:'마법 두루마리',art:'📜', cls:'buff', drawcards:2, desc:'2장 뽑기·턴유지'},
  reroll:    {name:'리롤',         art:'🔄', cls:'buff', reroll:true, desc:'손패 새로·턴유지'},
  reverse:   {name:'리버스',       art:'🔃', cls:'buff', reverse:true, desc:'진행 방향 반대로!'},
  dev:       {name:'개발자의 권능',art:'🌞', cls:'buff', steal:true, desc:'카드 뺏기·턴유지'},
};
export const DECK_RECIPE = {
  bow:4, sword:4, axe:3, greatsword:1, shotgun:2,
  fireball:2, lightning:2, poison:2, freeze:2, vampire:2, bomb:1, meteor:1,
  parsley:2, shield:3, star:1,
  meat:3, beer:3, cake:1, snack:2, elixir:1,
  potion:2, scroll:2, reroll:2, reverse:3, dev:1
};
const ICONS = ['🟢','🔵','🔴'];
const MAX_PLAYERS = 3;
const LOG_CAP = 80;
const START_HP = 10; // 시작 체력(=최대 체력). 회복 포션으로 최대치가 더 올라갈 수 있다.

// 새 로비 게임 상태
function freshLobby() {
  return {
    phase: 'lobby',      // 'lobby' | 'playing' | 'over'
    deck: [],
    pile: [],            // {seq, key, by, tilt}
    dir: 1,              // 1=시계, -1=반시계
    cur: 0,
    winnerSeat: null,
    seq: 0,              // pile 카드 등장 애니메이션용 단조 증가 번호
    logs: [],            // {who, txt}  who: seat 번호 또는 'sys'
    players: [],
  };
}

function displayName(nick, seat) {
  return ICONS[seat] + ' ' + nick;
}

// ===== Durable Object = 방 하나 =====
export class MinchanCard extends Server {
  // hibernate는 기본 OFF — 활성 중 메모리 유지(this.game·연결 안정). 유휴 시 evict되면 클라가 재접속.
  game = null;

  // DO (재)기동 시 저장된 상태 복원 — 재접속의 기반
  async onStart() {
    const saved = await this.ctx.storage.get('game');
    if (saved) {
      this.game = saved;
      // 실제 살아있는 연결과 대조: 복원 시점에 붙어 있는 연결만 connected 유지
      const liveIds = new Set([...this.getConnections()].map(c => c.id));
      this.game.players.forEach(p => {
        p.connected = p.connId != null && liveIds.has(p.connId);
        if (!p.connected) p.connId = null;
      });
    }
  }

  onConnect(conn) {
    conn.send(JSON.stringify({ type: 'hello', phase: this.game?.phase ?? 'lobby' }));
    // 로비 참가자 목록을 볼 수 있게 현재 상태도 보낸다(아직 join 전이라 손패는 없음)
    if (this.game) conn.send(JSON.stringify(this.viewFor(null)));
  }

  // partyserver: onMessage(connection, message) — 인자 순서 주의
  onMessage(sender, raw) {
    let msg;
    try { msg = JSON.parse(raw); } catch { return this.err(sender, '잘못된 메시지'); }
    switch (msg && msg.type) {
      case 'join':    return this.handleJoin(sender, msg);
      case 'start':   return this.handleStart(sender);
      case 'play':    return this.handlePlay(sender, msg);
      case 'reroll':  return this.handleReroll(sender);
      case 'restart': return this.handleRestart(sender);
      default:        return this.err(sender, '알 수 없는 요청');
    }
  }

  onClose(conn) { this.markDisconnected(conn.id); }
  onError(conn) { this.markDisconnected(conn.id); }

  // ===== 연결/좌석 헬퍼 =====
  getConn(id) {
    for (const c of this.getConnections()) { if (c.id === id) return c; }
    return null;
  }
  seatOf(connId) {
    if (!this.game) return null;
    const p = this.game.players.find(pp => pp.connId === connId);
    return p ? p.seat : null;
  }
  err(conn, msg) { conn.send(JSON.stringify({ type: 'error', msg })); }

  reassignSeats() {
    // 로비에서 인원이 바뀌면 좌석 0..n 재배열 + 표시 이름 갱신
    this.game.players.forEach((p, i) => { p.seat = i; p.name = displayName(p.nick, i); });
  }

  // ===== 입장 / 재접속 =====
  handleJoin(sender, msg) {
    const nick = (typeof msg.name === 'string' ? msg.name : '').trim().slice(0, 10) || '플레이어';

    // 1) 토큰 재접속
    if (msg.token && this.game) {
      const p = this.game.players.find(pp => pp.token === msg.token);
      if (p) {
        // 같은 토큰의 기존 연결이 살아있으면 정리(단일화)
        if (p.connId && p.connId !== sender.id) {
          const old = this.getConn(p.connId);
          if (old) { try { old.close(); } catch {} }
        }
        p.connId = sender.id;
        p.connected = true;
        sender.send(JSON.stringify({ type: 'joined', seat: p.seat, token: p.token }));
        this.broadcastState();
        return;
      }
      // 토큰이 있는데 매칭 실패 + 이미 시작된 게임이면 난입 불가
      if (this.game.phase !== 'lobby') return this.err(sender, '진행 중인 게임의 자리를 찾을 수 없어요');
    }

    // 2) 신규 입장 — 로비에서만
    if (!this.game) this.game = freshLobby();
    if (this.game.phase !== 'lobby') return this.err(sender, '이미 시작된 게임이에요');
    if (this.game.players.length >= MAX_PLAYERS) return this.err(sender, '방이 가득 찼어요 (최대 3명)');

    const seat = this.game.players.length;
    const token = crypto.randomUUID();
    this.game.players.push({
      seat, nick, name: displayName(nick, seat), token,
      connId: sender.id, connected: true,
      hp: START_HP, max: START_HP, hand: [], shield: false, star: false, skip: false, poison: 0, dead: false,
    });
    sender.send(JSON.stringify({ type: 'joined', seat, token }));
    this.log('sys', `${displayName(nick, seat)} 입장!`);
    this.broadcastState();
  }

  markDisconnected(connId) {
    if (!this.game) return;
    const p = this.game.players.find(pp => pp.connId === connId);
    if (!p) return;
    p.connected = false;
    p.connId = null;
    // 로비 단계면 목록에서 제거하고 좌석 재배열(시작 전이라 안전)
    if (this.game.phase === 'lobby') {
      this.game.players = this.game.players.filter(pp => pp !== p);
      this.reassignSeats();
    }
    this.broadcastState();
  }

  // ===== 게임 시작 / 재시작 =====
  handleStart(sender) {
    const seat = this.seatOf(sender.id);
    if (!this.game || this.game.phase !== 'lobby') return this.err(sender, '지금은 시작할 수 없어요');
    if (seat !== 0) return this.err(sender, '방장(첫 번째 사람)만 시작할 수 있어요');
    if (this.game.players.length < 2) return this.err(sender, '2명 이상 필요해요');
    this.startGame();
    this.broadcastState();
  }

  handleRestart(sender) {
    const seat = this.seatOf(sender.id);
    if (!this.game || this.game.phase !== 'over') return this.err(sender, '아직 게임이 끝나지 않았어요');
    if (seat !== 0) return this.err(sender, '방장만 다시 시작할 수 있어요');
    this.startGame();
    this.broadcastState();
  }

  startGame() {
    const g = this.game;
    g.deck = this.buildDeck();
    g.pile = [];
    g.dir = 1;
    g.cur = 0;
    g.winnerSeat = null;
    g.seq = 0;
    g.logs = [];
    g.players.forEach(p => {
      p.hp = START_HP; p.max = START_HP; p.hand = this.draw(3);
      p.shield = false; p.star = false; p.skip = false; p.poison = 0; p.dead = false;
    });
    g.phase = 'playing';
    this.log('sys', `${g.players.length}명 대전 시작!`);
    this.beginTurn();
  }

  // ===== 덱 =====
  buildDeck() {
    const d = [];
    for (const k in DECK_RECIPE) { for (let i = 0; i < DECK_RECIPE[k]; i++) d.push(k); }
    for (let i = d.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [d[i], d[j]] = [d[j], d[i]]; }
    return d;
  }
  draw(n = 1) {
    const out = [];
    for (let i = 0; i < n; i++) { if (this.game.deck.length === 0) this.game.deck = this.buildDeck(); out.push(this.game.deck.pop()); }
    return out;
  }

  // ===== 로그 =====
  log(who, txt) {
    this.game.logs.push({ who, txt });
    if (this.game.logs.length > LOG_CAP) this.game.logs.splice(0, this.game.logs.length - LOG_CAP);
  }

  // ===== 생존자 헬퍼 =====
  alivePlayers() { return this.game.players.filter(p => !p.dead); }
  enemiesOf(p) { return this.game.players.filter(x => !x.dead && x.seat !== p.seat); }

  // ===== 턴 진행 =====
  beginTurn() {
    const g = this.game;
    if (g.phase !== 'playing') return;
    const p = g.players[g.cur];
    if (p.dead) { this.nextTurn(); return; }

    if (p.poison > 0) {
      p.hp = Math.max(0, p.hp - 1); p.poison--;
      this.log(p.seat, `${p.name} ☠️ 독 데미지 1! (남은 ${p.poison}턴)`);
      if (this.checkDead(p)) { if (this.checkEnd()) return; this.nextTurn(); return; }
    }
    if (p.skip) {
      p.skip = false;
      this.log(p.seat, `${p.name}은(는) 이번 턴을 쉬어요 💤`);
      this.nextTurn(); return;
    }
    // 사람 플레이어 — 여기서 멈추고 play 메시지를 기다린다
  }

  nextTurn() {
    const g = this.game;
    if (this.checkEnd()) return;
    do { g.cur = (g.cur + g.dir + g.players.length) % g.players.length; } while (g.players[g.cur].dead);
    this.beginTurn();
  }

  // ===== 카드 내기 =====
  handlePlay(sender, msg) {
    const g = this.game;
    const seat = this.seatOf(sender.id);
    if (!g || g.phase !== 'playing') return this.err(sender, '게임 중이 아니에요');
    if (seat == null) return this.err(sender, '이 방의 플레이어가 아니에요');
    if (g.cur !== seat) return this.err(sender, '지금은 당신 차례가 아니에요');

    const actor = g.players[seat];
    if (actor.dead) return this.err(sender, '이미 탈락했어요');

    const idx = msg.cardIdx;
    if (!Number.isInteger(idx) || idx < 0 || idx >= actor.hand.length) return this.err(sender, '잘못된 카드예요');

    const c = CARDS[actor.hand[idx]];
    const needTarget = (c.dmg || c.poison || c.freeze || c.steal) && !c.all;
    let targetSeat = null;
    if (needTarget) {
      const foes = this.enemiesOf(actor);
      if (foes.length === 1) {
        targetSeat = foes[0].seat;
      } else if (foes.length > 1) {
        targetSeat = msg.targetSeat;
        const t = g.players.find(x => x.seat === targetSeat);
        if (targetSeat == null || !t || t.dead || t.seat === seat) return this.err(sender, '공격할 상대를 골라주세요');
      }
      // foes.length===0 이면 이미 게임이 끝났어야 함 — targetSeat null로 진행
    }

    this.execute(seat, idx, targetSeat);
    this.broadcastState();
  }

  handleReroll(sender) {
    const g = this.game;
    const seat = this.seatOf(sender.id);
    if (!g || g.phase !== 'playing') return this.err(sender, '게임 중이 아니에요');
    if (g.cur !== seat) return this.err(sender, '지금은 당신 차례가 아니에요');
    const p = g.players[seat];
    p.hand = this.draw(3);
    this.log(seat, `${p.name} ▶ 🔄 리롤!`);
    this.broadcastState(); // 턴 유지
  }

  execute(actorSeat, idx, targetSeat) {
    const g = this.game;
    const actor = g.players[actorSeat];
    const target = targetSeat != null ? g.players[targetSeat] : null;
    const key = actor.hand.splice(idx, 1)[0];
    const c = CARDS[key];
    g.pile.push({
      seq: ++g.seq, key,
      by: actor.name + (target ? ' → ' + target.name : ''),
      tilt: (Math.random() * 24 - 12) | 0,
    });
    if (g.pile.length > 8) g.pile.splice(0, g.pile.length - 8);
    this.log(actorSeat, `${actor.name} ▶ ${c.name}${target ? ` → ${target.name}` : ''}`);
    const ends = this.resolve(actor, target, key);
    while (actor.hand.length < 3) actor.hand.push(...this.draw(1));
    if (this.checkEnd()) return;
    if (ends) this.nextTurn();
    // ends===false 면 같은 사람이 한 번 더 (턴 유지)
  }

  applyAttack(target, dmg, whoSeat, pierce) {
    if (target.star) { this.log(whoSeat, `${target.name} 무적! ⭐ 튕겨나감`); target.star = false; return; }
    if (target.shield && !pierce) { this.log(whoSeat, `${target.name} 🛡️ 방패로 막음!`); target.shield = false; return; }
    if (target.shield && pierce) { this.log(whoSeat, `⚡ 방패 무시!`); }
    target.hp = Math.max(0, target.hp - dmg);
    this.log(whoSeat, `💥 ${target.name}에게 ${dmg} 데미지!`);
    this.checkDead(target);
  }

  resolve(actor, target, key) {
    const g = this.game;
    const c = CARDS[key]; const who = actor.seat;
    if (c.reroll) { actor.hand = this.draw(3); this.log(who, `🔄 손패를 새로 뽑았어요.`); return false; }
    if (c.reverse) {
      g.dir = -g.dir;
      this.log(who, `🔃 순서 반전! 이제 ${g.dir === 1 ? '↻ 시계방향' : '↺ 반시계방향'}으로 돌아요.`);
      if (this.alivePlayers().length === 2) {
        this.log(who, `(둘 뿐이라 ${actor.name}이(가) 한 번 더!)`);
        return false; // 2인일 땐 우노처럼 한 번 더
      }
      return true;
    }
    if (c.drawcards) { actor.hand.push(...this.draw(c.drawcards)); this.log(who, `📜 카드 ${c.drawcards}장!`); return false; }
    if (c.steal) {
      if (target && target.hand.length) {
        const i = Math.random() * target.hand.length | 0;
        const stolen = target.hand.splice(i, 1)[0];
        actor.hand.push(stolen);
        target.hand.push(...this.draw(1));
        this.log(who, `🌞 권능! ${target.name}의 "${CARDS[stolen].name}" 뺏음`);
      } else this.log(who, `🌞 권능! (뺏을 카드 없음)`);
      return false;
    }
    if (c.maxhp) { actor.max += c.maxhp; actor.hp += c.maxhp; this.log(who, `🧪 최대 체력 +${c.maxhp}! (${actor.max})`); }
    if (c.fullheal) { const b = actor.hp; actor.hp = actor.max; this.log(who, `💧 가득 회복! (+${actor.hp - b})`); }
    if (c.heal) { const b = actor.hp; actor.hp = Math.min(actor.max, actor.hp + c.heal); this.log(who, `💚 ${actor.hp - b} 회복`); }
    if (c.shield) { actor.shield = true; this.log(who, `🛡️ 방패!`); }
    if (c.star) { actor.star = true; this.log(who, `⭐ 1턴 무적!`); }
    if (c.all) { this.log(who, `☄️ 메테오 낙하!`); this.enemiesOf(actor).forEach(t => this.applyAttack(t, c.all, who, false)); }
    if (c.dmg && target) { this.applyAttack(target, c.dmg, who, c.pierce); }
    if (c.lifesteal) { const b = actor.hp; actor.hp = Math.min(actor.max, actor.hp + c.lifesteal); this.log(who, `🦇 ${actor.hp - b} 회복`); }
    if (c.poison && target && !target.dead) { target.poison += c.poison; this.log(who, `☠️ ${target.name}에게 독 (${c.poison}턴)`); }
    if (c.freeze && target && !target.dead) { target.skip = true; this.log(who, `❄️ ${target.name}을(를) 얼림!`); }
    if (c.selfdmg) { actor.hp = Math.max(0, actor.hp - c.selfdmg); this.log(who, `💣 반동 -${c.selfdmg}`); this.checkDead(actor); }
    if (c.rest) { actor.skip = true; this.log(who, `😮‍💨 다음 턴 쉬기`); }
    return true;
  }

  // ===== 승패 =====
  checkDead(p) {
    if (!p.dead && p.hp <= 0) {
      p.dead = true;
      this.log('sys', `💀 ${p.name} 탈락!`);
      return true;
    }
    return false;
  }
  checkEnd() {
    const alive = this.alivePlayers();
    if (alive.length <= 1) {
      this.game.phase = 'over';
      this.game.winnerSeat = alive[0] ? alive[0].seat : null;
      this.log('sys', alive[0] ? `🏆 ${alive[0].name} 승리!` : '무승부…');
      return true;
    }
    return false;
  }

  // ===== 상태 전송 (플레이어별 redact) =====
  viewFor(seat) {
    const g = this.game;
    if (!g) return { type: 'state', you: { seat: null, hand: [] }, view: null };
    const me = seat != null ? g.players.find(p => p.seat === seat) : null;
    return {
      type: 'state',
      you: { seat: me ? me.seat : null, hand: me ? [...me.hand] : [] },
      view: {
        phase: g.phase,
        cur: g.cur,
        dir: g.dir,
        deckCount: g.deck.length,
        winnerSeat: g.winnerSeat,
        pile: g.pile.slice(-3),
        players: g.players.map(p => ({
          seat: p.seat, name: p.name, connected: p.connected,
          hp: p.hp, max: p.max, handCount: p.hand.length,
          shield: p.shield, star: p.star, skip: p.skip, poison: p.poison, dead: p.dead,
        })),
        logs: g.logs.slice(-LOG_CAP),
      },
    };
  }

  broadcastState() {
    for (const conn of this.getConnections()) {
      const seat = this.seatOf(conn.id);
      conn.send(JSON.stringify(this.viewFor(seat)));
    }
    // 상태 백업 (재접속/DO eviction 대비) — 단일 지점
    this.ctx.storage.put('game', this.game);
  }
}

// ===== Worker 엔트리: /parties/main/<방코드> 를 위 Durable Object로 라우팅 =====
export default {
  async fetch(request, env) {
    return (await routePartykitRequest(request, env)) || new Response('Not Found', { status: 404 });
  },
};
