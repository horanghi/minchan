#!/usr/bin/env bash
# 마령촌 소스 트리의 지문. 빌드 산출물·의존성은 빼고 실제 소스만 센다.
#
# **경로가 아니라 내용만 센다.** shasum 은 파일 경로까지 찍으므로 절대 경로로
# 훑으면 같은 소스라도 체크아웃 위치마다 값이 달라진다. git worktree 에서
# check-mkv-fresh.sh 가 늘 "낡았다"고 하던 원인이 이것이었다.
mkv_source_hash() {
  local here
  here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  (
    cd "$here/mkv-src" || return 1
    find . -type f \
      ! -path './node_modules/*' ! -path './dist/*' ! -path './.omc/*' \
      ! -path './coverage/*' ! -name '.DS_Store' \
      -print0 | sort -z | xargs -0 shasum
  ) | shasum | cut -c1-12
}
