#!/usr/bin/env bash
# 마령촌 소스를 빌드해 배포되는 자리(mkv/)로 옮긴다.
#
# mkv-src/ 는 .vercelignore 에 있어 배포에 올라가지 않는다. 런처가 여는 것은
# 여기서 만들어지는 mkv/index.html 이므로, 소스를 고쳤으면 이걸 돌려야 한다.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

npm --prefix "$HERE/mkv-src" install
npm --prefix "$HERE/mkv-src" run build

# 소스맵은 개발 산출물이라 뺀다 (3.3MB → 0.65MB)
rsync -a --delete --exclude '*.map' "$HERE/mkv-src/dist/" "$HERE/mkv/"
echo "mkv/ 갱신 완료 — $(du -sh "$HERE/mkv" | cut -f1)"
