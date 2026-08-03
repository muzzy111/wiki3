<#
.SYNOPSIS
    Inbox sweep
.DESCRIPTION
    Invokes hermes_bus daemon one-shot to process role inboxes.
.PARAMETER VaultRoot
    Vault root path. Defaults to ".".
#>
[CmdletBinding()]
param([string]$VaultRoot = ".")
$ErrorActionPreference = "Stop"
$vault = (Resolve-Path -LiteralPath $VaultRoot).Path

$evidence = Join-Path $vault ".omo/evidence/task-29-inbox-sweep.txt"
New-Item -ItemType Directory -Path (Split-Path $evidence -Parent) -Force | Out-Null

$logFile = Join-Path $vault "4.0TOOLS/MEMORY/Inbox Sweep Log.md"
New-Item -ItemType Directory -Path (Split-Path $logFile -Parent) -Force | Out-Null

$ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$entry = "## Inbox sweep $ts`n- vault: $vault`n- trigger: scheduled`n- daemon one-shot: "

Write-Host "=== INBOX-SWEEP $ts ==="
Write-Host "Vault: $vault"

# Try invoking the daemon. Use the full path to python.
$daemonDir = "$vault/2.0CODER/SOLO-PROJECTS/loop-chat-system"
$py = "C:\Python314\python.exe"

if (Test-Path "$daemonDir/src/hermes_bus") {
    Write-Host "Running daemon one-shot..."
    try {
        & $py -m hermes_bus.daemon --vault $vault --once 2>&1 | Out-Null
        $entry += "OK`n"
        Write-Host "Daemon one-shot completed."
    } catch {
        $entry += "FAIL: $($_.Exception.Message)`n"
        Write-Host "Daemon one-shot failed: $_"
    }
} else {
    $entry += "SKIPPED (daemon not yet present)`n"
    Write-Host "[INFO] hermes_bus daemon not yet present at $daemonDir."
}

Add-Content -Path $logFile -Value $entry
$entry | Out-File -FilePath $evidence -Encoding utf8 -Force
exit 0
