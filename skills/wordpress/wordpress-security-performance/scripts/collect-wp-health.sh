#!/usr/bin/env bash
set -euo pipefail
wp core version 2>/dev/null || true
wp plugin list --fields=name,status,version,update --format=table 2>/dev/null || true
wp theme list --fields=name,status,version,update --format=table 2>/dev/null || true
wp option list --autoload=on --fields=option_name,size_bytes --format=csv 2>/dev/null | head -n 100 || true
wp cron event list --fields=hook,next_run_gmt,recurrence --format=table 2>/dev/null | head -n 100 || true
wp db size --tables --human-readable 2>/dev/null || true
