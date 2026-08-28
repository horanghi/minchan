// ===== 스틱맨 전투 디펜스 — 1v1 중계 서버 (Cloudflare Workers + partyserver) =====
//
// **이 서버는 게임을 계산하지 않는다.** 자리를 나눠 주고 메시지를 건네주기만 한다.
//
// 판정은 먼저 들어온 쪽(호스트)이 한다. 호스트가 자기 화면에서 시뮬레이션을
// 돌리고 그 결과를 스냅샷으로 보내면, 게스트는 그걸 그리고 자기 주문만 올린다.
// 서버가 계산하면 가장 공정하지만 시뮬 500줄을 여기로 옮기고 60fps 를 워커에서
// 돌려야 한다 — 친구끼리 방 코드로 하는 판에 그만한 값을 치를 이유가 없다.
//
// 카드 게임 워커(minchan-card)와 **따로 배포한다.** 한 워커에 얹으면 이쪽을
// 고칠 때마다 이미 돌아가는 카드 게임이 같이 위험해진다.
import { Server, routePartykitRequest } from "partyserver";

/** 자리 둘. 먼저 온 쪽이 호스트다. */
const SEATS = ["a", "b"];

/** 방 목록을 들고 있는 전역 등록소 하나. */
const LOBBY_KEY = "global";
/** 방 DO 가 갑자기 사라지면 목록에 유령이 남는다. 이 시간 넘으면 지운다. */
const ROOM_TTL_MS = 90_000;

export class StickmanRoom extends Server {
  // 연결 id → 자리
  seats = new Map();
  // 등록소에 마지막으로 알린 인원. 같은 값을 되풀이해 보내지 않는다.
  lastReported = -1;

  /** 지금 앉아 있는 자리들. */
  taken() {
    return new Set(this.seats.values());
  }

  freeSeat() {
    const t = this.taken();
    return SEATS.find((s) => !t.has(s)) || null;
  }

  onConnect(conn) {
    const seat = this.freeSeat();
    if (!seat) {
      // 셋째부터는 돌려보낸다. 관전을 열어 두면 스냅샷을 그만큼 더 보내야 한다.
      conn.send(JSON.stringify({ type: "full" }));
      conn.close();
      return;
    }
    this.seats.set(conn.id, seat);
    conn.send(JSON.stringify({ type: "seat", seat, host: seat === "a" }));
    this.announce();
  }

  onClose(conn) {
    this.seats.delete(conn.id);
    this.announce();
  }
  onError(conn) {
    this.onClose(conn);
  }

  /** 지금 몇 명인지 모두에게 알린다. 둘이 차면 대전 시작이다. */
  announce() {
    const n = this.seats.size;
    this.broadcast(JSON.stringify({ type: "room", players: n, ready: n === 2 }));
    this.reportToLobby(n);
  }

  /**
   * 등록소에 지금 인원을 알린다.
   *
   * **등록소가 죽어도 대전은 계속돼야 한다.** 목록은 편의일 뿐이라, 여기서
   * 던지는 예외가 판을 끊으면 안 된다.
   */
  reportToLobby(players) {
    if (players === this.lastReported) return;
    this.lastReported = players;
    try {
      const stub = this.env.Lobby.get(this.env.Lobby.idFromName(LOBBY_KEY));
      this.ctx.waitUntil(
        stub.updateRoom({ code: String(this.name || "").toUpperCase(), players }),
      );
    } catch {
      /* 등록소 장애는 무시한다 */
    }
  }

  onMessage(sender, raw) {
    let m;
    try {
      m = JSON.parse(raw);
    } catch {
      return;
    }
    const seat = this.seats.get(sender.id);
    if (!seat) return;

    // 스냅샷은 호스트만 낸다. 게스트가 보내면 무시한다 — 안 그러면
    // 게스트가 자기 유리한 상태를 밀어 넣을 수 있다.
    if (m.type === "snap") {
      if (seat !== "a") return;
      this.relay(sender, raw);
      return;
    }

    // 주문은 게스트만 올린다. 호스트는 자기 화면에서 바로 처리한다.
    if (m.type === "cmd") {
      if (seat !== "b") return;
      this.relay(sender, raw);
      return;
    }

    // 그 외(인사·재시작 요청 등)는 그대로 건넨다.
    this.relay(sender, raw);
  }

  /** 보낸 사람 빼고 전달. */
  relay(sender, raw) {
    for (const conn of this.getConnections()) {
      if (conn.id !== sender.id) conn.send(raw);
    }
  }
}

/**
 * 방 등록소 — 지금 열려 있는 방 목록.
 *
 * 코드를 받아 적지 않아도 첫 화면에서 눌러 들어갈 수 있게 하려는 것뿐이다.
 * 여기가 죽어도 코드를 아는 사람끼리는 그대로 붙는다.
 */
export class Lobby extends Server {
  rooms = null;

  async load() {
    if (!this.rooms) this.rooms = (await this.ctx.storage.get("rooms")) || {};
    return this.rooms;
  }
  async onStart() {
    await this.load();
  }

  async onConnect(conn) {
    await this.load();
    conn.send(JSON.stringify({ type: "rooms", rooms: this.publicList() }));
  }

  async onMessage(sender, raw) {
    let m;
    try {
      m = JSON.parse(raw);
    } catch {
      return;
    }
    if (m && m.type === "list") {
      await this.load();
      sender.send(JSON.stringify({ type: "rooms", rooms: this.publicList() }));
    }
  }

  /** 방 DO 가 RPC 로 부른다. DO 직접 호출이라 onStart 가 안 돌 수 있어 load() 로 막는다. */
  async updateRoom(info) {
    await this.load();
    const code = info && info.code;
    if (!code) return;
    if (info.players > 0) {
      this.rooms[code] = { code, players: info.players, updatedAt: Date.now() };
    } else {
      delete this.rooms[code];
    }
    this.prune();
    await this.ctx.storage.put("rooms", this.rooms);
    this.broadcastList();
  }

  /** 방 DO 가 갑자기 사라져 남은 유령 항목을 걷어낸다. */
  prune() {
    const cutoff = Date.now() - ROOM_TTL_MS;
    for (const [code, r] of Object.entries(this.rooms)) {
      if (!r || !r.players || r.updatedAt < cutoff) delete this.rooms[code];
    }
  }

  /**
   * 보여줄 목록.
   *
   * **한 명 기다리는 방만 낸다.** 둘이 찬 방을 목록에 두면 눌러도 "이미
   * 둘이다" 로 튕긴다 — 눌러서 안 되는 버튼은 없는 것만 못하다.
   */
  publicList() {
    return Object.values(this.rooms || {})
      .filter((r) => r && r.players === 1)
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .slice(0, 20)
      .map((r) => ({ code: r.code, players: r.players }));
  }

  broadcastList() {
    const msg = JSON.stringify({ type: "rooms", rooms: this.publicList() });
    for (const c of this.getConnections()) c.send(msg);
  }
}

export default {
  async fetch(request, env) {
    return (
      (await routePartykitRequest(request, env)) ||
      new Response("Not Found", { status: 404 })
    );
  },
};
