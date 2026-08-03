#!/usr/bin/env bash
# Start the Hermes bus daemon for the LOOP cowork vault.
#
# Usage:
#     ./scripts/start_hermes_daemon.sh [VAULT_PATH] [--once] [PYTHON_OPTS...]
#
# Default VAULT_PATH is the sibling ../../ of this project (the vault root).
# Pass --once to run a single tick and exit (good for cron-triggered sweeps).
# Pass PYTHON_OPTS to forward flags like --poll-interval 5.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
VAULT_DEFAULT="$(cd "${PROJECT_DIR}/../../../.." && pwd)"

VAULT="${1:-${VAULT_DEFAULT}}"
shift || true

# Pick a sensible python: prefer the project venv, then a system python3,
# then the OS-managed python.
if [[ -x "${PROJECT_DIR}/.venv/bin/python" ]]; then
  PYTHON="${PROJECT_DIR}/.venv/bin/python"
elif command -v python3.14 >/dev/null 2>&1; then
  PYTHON=python3.14
elif command -v python3 >/dev/null 2>&1; then
  PYTHON=python3
else
  PYTHON=python
fi

export PYTHONPATH="${PROJECT_DIR}/src${PYTHONPATH:+:${PYTHONPATH}}"

echo "[hermes-bus] VAULT  = ${VAULT}"
echo "[hermes-bus] PYTHON = ${PYTHON}"
echo "[hermes-bus] PYTHONPATH = ${PYTHONPATH}"

exec "${PYTHON}" -m hermes_bus.daemon --vault "${VAULT}" "$@"
