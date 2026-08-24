#!/usr/bin/env bash
set -euo pipefail
echo '== Project files =='
for f in wrangler.json wrangler.jsonc wrangler.toml package.json; do [[ -f "$f" ]] && echo "$f"; done
echo '== Wrangler =='
if command -v npx >/dev/null && [[ -f package.json || -f wrangler.toml || -f wrangler.json || -f wrangler.jsonc ]]; then npx --yes wrangler --version 2>/dev/null || true; fi
echo '== Binding/config hints =='
grep -RniE 'd1_databases|kv_namespaces|r2_buckets|durable_objects|queues|hyperdrive|workflows|compatibility_date' --include='wrangler.*' . 2>/dev/null || true
