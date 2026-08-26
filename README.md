# 🎮 민찬 게임랜드

**https://changame.vercel.app**

정적 사이트다. 빌드 단계가 없고, `main` 에 푸시하면 Vercel 이 그대로 올린다.
루트 [`index.html`](index.html) 의 `GAMES` 배열이 곧 카드 목록이다 —
**새 게임은 맨 앞에 추가한다** (최근 것이 위).

## 게임

| 폴더 | 게임 |
|---|---|
| [`mkv/`](mkv/) | 마령촌 — 2D 액션. **키보드 전용** |
| [`minchan_rpg/`](minchan_rpg/) | Block RPG — 3D, 온라인 8인 |
| [`minchan_5/`](minchan_5/) | 동물 길건너 리메이크 |
| [`minchan_4_online/`](minchan_4_online/) | 테이블 카드 대전 온라인 |
| [`minchan_4/`](minchan_4/) | 테이블 카드 대전 |
| [`minchan_3/`](minchan_3/) | 대장장이의 검 |
| [`minchan_2/`](minchan_2/) | 꼬꼬 대전쟁 × 파슬리 유니버스 |
| [`minchan_1/`](minchan_1/) | 동물 길건너 |

## 마령촌만 다르다

다른 게임은 폴더가 곧 소스지만, 마령촌은 TypeScript + PixiJS 라 빌드가 필요하다.

| 위치 | |
|---|---|
| `mkv/` | **배포되는 빌드.** 런처가 여는 곳 (소스맵 제외, 656K) |
| `mkv-src/` | 소스. `.vercelignore` 에 있어 배포엔 안 올라간다 |

소스를 고쳤으면 **반드시** 이걸 돌린다. 안 돌리면 사이트는 예전 빌드 그대로다.

```bash
./build-mkv.sh
```

`mkv-src/` 에서는 그 프로젝트의 규칙을 따른다 — 푸시 전에 `npm run build` 와
`npm test` 를 둘 다 돌린다. 자세한 것은 [`mkv-src/CLAUDE.md`](mkv-src/CLAUDE.md).

## 배포되지 않는 것

`.vercelignore` — `party`(PartyKit 서버), `minchan_5/tools`, `mkv-src`.
