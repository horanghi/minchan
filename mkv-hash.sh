#!/usr/bin/env bash
# 마령촌 소스 트리의 지문. 빌드 산출물·의존성은 빼고 실제 소스만 센다.
mkv_source_hash() {
  local here
  here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  find "$here/mkv-src" -type f \
    ! -path '*/node_modules/*' ! -path '*/dist/*' ! -path '*/.omc/*' \
    ! -path '*/coverage/*' ! -name '.DS_Store' \
    -print0 | sort -z | xargs -0 shasum | shasum | cut -c1-12
}
