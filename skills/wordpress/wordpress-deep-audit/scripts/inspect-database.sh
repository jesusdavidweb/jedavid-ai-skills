#!/usr/bin/env bash
set -euo pipefail
command -v wp >/dev/null || { echo 'wp not found' >&2; exit 2; }
prefix="$(wp db prefix)"
echo '== Largest tables (MB) =='
wp db query "SELECT table_name, ROUND((data_length+index_length)/1024/1024,2) mb FROM information_schema.tables WHERE table_schema=DATABASE() ORDER BY data_length+index_length DESC LIMIT 25;" --skip-column-names
echo '== Autoloaded option bytes =='
wp db query "SELECT COUNT(*), COALESCE(SUM(LENGTH(option_value)),0) FROM ${prefix}options WHERE autoload IN ('yes','on','auto-on','auto');" --skip-column-names
