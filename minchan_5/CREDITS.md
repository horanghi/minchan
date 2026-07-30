# 에셋 출처와 가공 기록

## 3D 모델 — 전부 CC0 1.0 (퍼블릭 도메인)

제작: **Quaternius** (https://quaternius.com) · 배포: https://poly.pizza/u/Quaternius

| 팩 | 사용 모델 |
|---|---|
| [Animated Animal Pack](https://poly.pizza/bundle/Animated-Animal-Pack-ILAPXeUYiS) | 소·황소·당나귀·사슴·알파카·여우·시바견·수사슴·허스키·늑대·말·백마 (12종) |
| [Farm Animal Pack](https://poly.pizza/bundle/Farm-Animal-Pack-1kUvRTPLzT) | 얼룩말·돼지·양·라마·퍼그 (5종) |
| 단품 | Snake, Chicken (플레이어) |

**한 작가의 같은 스타일 계열만 쓴다.** 두 팩 모두 텍스처 없이 머티리얼 색만으로
칠해져 있고(`metallic 0.4 / roughness 0.415`, FBX2glTF v0.9.7 출력) 조형 어법이
같다. 다른 작가의 팩을 섞으면 룩이 즉시 무너진다.

같은 검색에서 나온 Cat / Chick / ChickenA 는 **텍스처 아틀라스 계열**(`roughness 0.272`)
이라 제외했다.

## 가공 (오프라인 1회, 결과물만 커밋)

배포는 빌드 스텝 없는 순수 정적이다. 아래는 `models/*.glb` 를 만든 일회성 절차이며,
런타임에는 아무것도 실행되지 않는다.

```
원본 다운로드 → 12.95 MB (19종)
  1) 안 쓰는 클립 제거 — 개체당 24~26개 중 실제 재생하는 2~5개만 남김
     · 애니팩은 모든 클립이 두 벌씩(`Walk` 와 `AnimalArmature|Walk`) 들어 있었다
     · Animation.dispose() 만으로는 샘플러가 고아로 남아 prune() 이 살아 있다고
       판단한다 → 채널·샘플러를 먼저 명시적으로 dispose 해야 실제로 줄어든다
       (이 한 가지로 9.16 MB → 3.14 MB)
  2) resample / dedup / prune / weld
  3) KHR_mesh_quantization (position 14, normal 10, weight 8)
결과 → 3.14 MB (76% 절감)
```

양자화는 three.js 가 확장 없이 그대로 읽는다. Draco·meshopt 를 쓰지 않은 이유가
이것이다 — 둘 다 CDN 에서 디코더 스크립트를 따로 받아야 해서 "빌드 없는 순수 정적"
이라는 제약과 어긋난다. 텍스처가 0장이라 KTX2 도 필요 없다.

## 라이브러리

- [three.js](https://threejs.org) r166 — MIT. CDN(jsDelivr)에서 importmap 으로 로드.

물리 엔진(cannon-es)은 쓰지 않는다. 원본에서 실제로 쓰이던 기능은 점프 포물선과
AABB 겹침 둘뿐이라 각각 수식(`src/jump.js`)과 직접 판정(`src/collision.js`)으로
대체했다. 결과는 원본과 수치적으로 동일하면서 프레임레이트와 무관하게 결정론적이다.
