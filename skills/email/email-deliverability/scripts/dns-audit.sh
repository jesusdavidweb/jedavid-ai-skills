#!/usr/bin/env bash
set -euo pipefail
DOMAIN="${1:?usage: dns-audit.sh domain [sending-ip]}"; IP="${2:-}"
command -v dig >/dev/null || { echo 'dig not found' >&2; exit 2; }
echo '== MX =='; dig +short MX "$DOMAIN"
echo '== SPF/TXT =='; dig +short TXT "$DOMAIN"
echo '== DMARC =='; dig +short TXT "_dmarc.$DOMAIN"
if [[ -n "$IP" ]]; then echo '== PTR =='; dig +short -x "$IP"; fi
