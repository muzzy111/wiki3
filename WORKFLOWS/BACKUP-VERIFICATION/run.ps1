<#
.SYNOPSIS
    Backup verification
.DESCRIPTION
    Reads Tools role's backup log and reports freshness.
.PARAMETER VaultRoot
    Vault root path. Defaults to ".".
#>
[CmdletBinding()]
param([string]$VaultRoot = ".")
$ErrorActionPreference = "Stop"
$vault = (Resolve-Path -LiteralPath $VaultRoot).Path


$evidence = Join-Path $vault ".omo/evidence/task-30-backup-verification.txt"
New-Item -ItemType Directory -Path (Split-Path $evidence -Parent) -Force | Out-Null

$logPath = Join-Path $vault "4.0TOOLS/MEMORY/Backup Log.md"
$ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

if (-not (Test-Path $logPath)) {
    $report = @(
        "=== BACKUP-VERIFICATION $ts ===",
        "Vault: $vault",
        "Status: MISSING",
        "$logPath not found. Run the Tools backup workflow first.",
        "VERDICT: FAIL (missing log)"
    )
    $report | Out-File -FilePath $evidence -Encoding utf8 -Force
    Write-Host ($report | Out-String)
    exit 1
}

$ageDays = (New-TimeSpan -End (Get-Date) -Start (Get-Item $logPath).LastWriteTime).TotalDays
$status = if ($ageDays -le 1) { "FRESH" } else { "STALE" }
$exit_code = if ($ageDays -le 1) { 0 } else { 2 }

$report = @(
    "=== BACKUP-VERIFICATION $ts ===",
    "Vault: $vault",
    "Backup log: $logPath",
    "Age (days): $ageDays",
    "Status: $status",
    "VERDICT: $status"
)
$report | Out-File -FilePath $evidence -Encoding utf8 -Force
Write-Host ($report | Out-String)
exit $exit_code
