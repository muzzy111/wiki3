#!/usr/bin/env bash
# One-shot sweep (bash equivalent).
set -e
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec pwsh -NoProfile -File "$HERE/turnkey-smoke.ps1" -VaultRoot "${VAULT_ROOT:-.}"
