#!/usr/bin/env bash
set -euo pipefail
HOST="${1:?usage: smtp-tls-check.sh host [port]}"; PORT="${2:-25}"
command -v openssl >/dev/null || { echo 'openssl not found' >&2; exit 2; }
printf 'QUIT\r\n' | timeout 15 openssl s_client -starttls smtp -connect "$HOST:$PORT" -servername "$HOST" -brief 2>&1
