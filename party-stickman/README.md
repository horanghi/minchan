# 스틱맨 1v1 중계 서버

방 하나 = Durable Object 하나. **게임을 계산하지 않는다** — 자리를 나눠 주고
메시지를 건네주기만 한다. 판정은 먼저 들어온 쪽(호스트)이 자기 화면에서 한다.

카드 게임 워커(`../party`, `minchan-card`)와 **따로 배포한다.** 한 워커에 얹으면
이쪽을 고칠 때마다 이미 돌아가는 카드 게임이 같이 위험해진다.

## 배포

```bash
npm install
npx wrangler deploy
```

배포되면 주소가 `minchan-stickman.<계정 서브도메인>.workers.dev` 가 된다.
게임 클라이언트(`minchan_6/index.html`)는 `NET_HOST` 에서 이 주소를 찾는다 —
계정 서브도메인이 `changame` 가 아니면 그 상수를 고쳐야 한다.

## 로컬에서 해보기

```bash
npx wrangler dev --port 8788
```

클라이언트는 `localhost` 에서 열면 저절로 `localhost:8788` 을 본다.
탭 두 개로 방을 만들고 참가하면 그대로 대전이 된다.

## 주고받는 것

| 방향 | 메시지 | 뜻 |
|---|---|---|
| 서버 → | `{type:'seat', seat, host}` | 네 자리는 이것이다 |
| 서버 → | `{type:'room', players, ready}` | 지금 몇 명인가 |
| 서버 → | `{type:'full'}` | 그 방은 이미 둘이다 |
| 게스트 → | `{type:'cmd', what, k}` | 샀다 / 강화했다 / 화살비 |
| 호스트 → | `{type:'snap', ...}` | 지금 판이 이렇다 |

`snap` 은 호스트만, `cmd` 는 게스트만 보낼 수 있다. 서버가 자리로 막는다 —
게스트가 스냅샷을 밀어 넣으면 자기 유리한 상태를 만들 수 있다.
