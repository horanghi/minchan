#!/usr/bin/env bash
# 마령촌 소스를 빌드해 배포되는 자리(mkv/)로 옮긴다.
#
# mkv-src/ 는 .vercelignore 에 있어 배포에 올라가지 않는다. 런처가 여는 것은
# 여기서 만들어지는 mkv/index.html 이므로, 소스를 고쳤으면 이걸 돌려야 한다.
#
# 안 돌리면 사이트는 예전 빌드를 그대로 서비스한다 — 화면에 아무 표시도
# 없이. `./check-mkv-fresh.sh` 가 그걸 잡는다.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$HERE/mkv-hash.sh"

npm --prefix "$HERE/mkv-src" install
npm --prefix "$HERE/mkv-src" run build

# 소스맵은 개발 산출물이라 뺀다 (3.3MB → 0.65MB)
rsync -a --delete --exclude '*.map' "$HERE/mkv-src/dist/" "$HERE/mkv/"

# 어느 소스에서 나온 빌드인지 남긴다. 이게 있어야 낡았는지 알 수 있다.
mkv_source_hash > "$HERE/mkv/SOURCE"
echo "mkv/ 갱신 완료 — $(du -sh "$HERE/mkv" | cut -f1), 소스 $(cat "$HERE/mkv/SOURCE")"
