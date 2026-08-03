<#
.SYNOPSIS
    One-shot sweep: verify vault structure, write evidence, exit.
.DESCRIPTION
    Same checks as turnkey-smoke.ps1 minus the deferred daemon call.
#>
[CmdletBinding()]
param([string]$VaultRoot = ".")
& (Join-Path (Split-Path $PSCommandPath -Parent) "turnkey-smoke.ps1") -VaultRoot $VaultRoot
exit 0
