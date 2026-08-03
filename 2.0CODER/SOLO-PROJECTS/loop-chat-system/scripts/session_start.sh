#!/usr/bin/env bash
# Run one full Hermes session-start tick (user channel + inter-agent).
#
# Same as start_hermes_daemon.sh --once but ALSO runs the inter-agent
# inbox sweep, which the daemon's --once path would skip unless the
# daemon entry point itself delegates to session_start.
#
# Usage:
#     ./scripts/session_start.sh [VAULT_PATH]
#     # equivalent to:
#     PYTHONPATH=src python -m hermes_bus.session_start --vault <vault>

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
VAULT_DEFAULT="$(cd "${PROJECT_DIR}/../../../.." && pwd)"
VAULT="${1:-${VAULT_DEFAULT}}"

# Pick a sensible python.
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

exec "${PYTHON}" -m hermes_bus.session_start --vault "${VAULT}" "$@"
