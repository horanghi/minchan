#!/usr/bin/env bash
# 배포되는 mkv/ 가 지금 소스에서 나온 것인가.
#
# 두 곳이 갈리면 사이트는 예전 게임을 서비스하는데 아무 표시도 나지 않는다.
# 플레이테스트 중이라면 더 나쁘다 — 어느 빌드에서 잰 숫자인지 모르게 된다.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$HERE/mkv-hash.sh"

now="$(mkv_source_hash)"
was="$(cat "$HERE/mkv/SOURCE" 2>/dev/null || echo '없음')"

if [ "$now" = "$was" ]; then
  echo "mkv/ 가 최신이다 (소스 $now)"
  exit 0
fi

echo "mkv/ 가 낡았다 — 배포본은 소스 $was, 지금 소스는 $now" >&2
echo "./build-mkv.sh 를 돌려야 사이트에 반영된다." >&2
exit 1
