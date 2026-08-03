#!/usr/bin/env bash
# Weekly audit (bash variant). Executes the PowerShell script on this host.
set -e
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec pwsh -NoProfile -File "$HERE/run.ps1" -VaultRoot "${VAULT_ROOT:-.}"
