#!/usr/bin/env bash
set -euo pipefail
uname -a || true
uptime || true
ss -lntup 2>/dev/null || true
systemctl --type=service --state=running --no-pager 2>/dev/null | head -n 100 || true
(ufw status 2>/dev/null || nft list ruleset 2>/dev/null | head -n 120 || true)
nginx -T 2>&1 | head -n 200 || true
docker ps 2>/dev/null || true
df -h || true
free -h 2>/dev/null || true
