#!/usr/bin/env bash
set -euo pipefail
date -u
uname -a || true
php -v 2>/dev/null | head -n 2 || true
wp --info 2>/dev/null || true
wp core version 2>/dev/null || true
wp plugin status 2>/dev/null || true
wp theme status 2>/dev/null || true
wp cron event list --fields=hook,next_run_gmt,recurrence --format=table 2>/dev/null | head -n 80 || true
wp db check 2>/dev/null || true
df -h 2>/dev/null || true
free -h 2>/dev/null || true
echo 'Read-only collection complete.'
