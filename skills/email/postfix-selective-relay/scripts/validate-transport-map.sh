#!/usr/bin/env bash
set -euo pipefail
MAP="${1:?usage: validate-transport-map.sh /path/to/transport [domain]}"
DOMAIN="${2:-}"
[[ -r "$MAP" ]] || { echo "Cannot read $MAP" >&2; exit 2; }
echo "Non-comment entries:"
grep -Ev '^\s*(#|$)' "$MAP" || true
if [[ -n "$DOMAIN" ]]; then
  command -v postmap >/dev/null || { echo 'postmap required for lookup' >&2; exit 2; }
  echo "Lookup for $DOMAIN:"
  postmap -q "$DOMAIN" "hash:$MAP" || true
fi
