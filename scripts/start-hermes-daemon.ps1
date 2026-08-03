<#
.SYNOPSIS
    Launch the hermes_bus daemon in long-running mode.
.NOTES
    Wave 3 placeholder. Prints informational message and exits 0.
    Once Wave 3 T16-T22 land, this script will:
      pwsh -NoProfile -Command "Set-Location $VaultRoot; py -3.14 -m hermes_bus.daemon --vault $VaultRoot --loop"
#>
[CmdletBinding()]
param([string]$VaultRoot = ".")
Write-Host "[INFO] hermes_bus daemon long-runner (deferred to Wave 3)."
Write-Host "[INFO] VaultRoot: $VaultRoot"
exit 0
