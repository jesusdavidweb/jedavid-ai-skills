#!/usr/bin/env bash
set -euo pipefail
command -v wp >/dev/null || { echo 'wp not found' >&2; exit 2; }
echo '== WordPress =='; wp core version; wp cli info
echo '== Plugins =='; wp plugin list --fields=name,status,version,update --format=table
echo '== Themes =='; wp theme list --fields=name,status,version,update --format=table
echo '== Cron =='; wp cron event list --fields=hook,next_run_gmt,next_run_relative,recurrence --format=table | head -n 80 || true
if wp plugin is-active woocommerce 2>/dev/null; then echo '== WooCommerce =='; wp wc --info 2>/dev/null || true; wp wc hpos status 2>/dev/null || true; fi
