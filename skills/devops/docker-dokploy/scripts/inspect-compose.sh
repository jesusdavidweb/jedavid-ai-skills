#!/usr/bin/env bash
set -euo pipefail
docker version --format '{{.Server.Version}}' 2>/dev/null || true
docker compose version 2>/dev/null || true
docker compose config 2>/dev/null || true
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}' 2>/dev/null || true
docker network ls 2>/dev/null || true
docker volume ls 2>/dev/null || true
