#!/usr/bin/env bash
set -euo pipefail
DOMAIN="${1:?usage: smtp-connectivity-check.sh domain}"
TIMEOUT="${SMTP_TIMEOUT:-8}"
command -v dig >/dev/null || { echo 'dig required' >&2; exit 2; }
mapfile -t MX < <(dig +short MX "$DOMAIN" | sort -n | awk '{print $2}' | sed 's/\.$//')
((${#MX[@]})) || { echo "No MX records for $DOMAIN"; exit 1; }
for host in "${MX[@]}"; do
  echo "== $host =="
  dig +short A "$host" | sed 's/^/A /'
  dig +short AAAA "$host" | sed 's/^/AAAA /'
  if command -v nc >/dev/null; then
    nc -vz -w "$TIMEOUT" "$host" 25 </dev/null || true
  else
    echo "nc unavailable; DNS only"
  fi
done
