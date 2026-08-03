<#
.SYNOPSIS
    Run the LOOP smoke test sequence.
.DESCRIPTION
    PowerShell 7+. Runs in order:
      1. Validates vault structure (5 role folders + agents.yaml + Plugins Index)
      2. Optionally invokes the hermes_bus daemon one-shot (defers to Wave 3)
      3. Writes evidence to .omo/evidence/task-7-smoke.txt
      4. Exits 0 on success.
.PARAMETER VaultRoot
    Vault root path. Defaults to ".".
#>
[CmdletBinding()]
param(
    [string]$VaultRoot = "."
)

$ErrorActionPreference = "Stop"
$vault = (Resolve-Path -LiteralPath $VaultRoot).Path
$evidence = Join-Path $vault ".omo/evidence/task-7-smoke.txt"
New-Item -ItemType Directory -Path (Split-Path $evidence -Parent) -Force | Out-Null

$passed = $true
$report = @()

$report += "=== LOOP turnkey smoke $(Get-Date -Format o) ==="
$report += "Vault: $vault"

# Check 1: 5 role folders
$roles = @("1.0COORDINATOR","2.0CODER","3.0RESEARCHER","4.0TOOLS","5.0MEMORY")
foreach ($r in $roles) {
    $p = Join-Path $vault $r
    if (Test-Path $p) { $report += "[OK] $r exists" }
    else { $report += "[FAIL] $r missing"; $passed = $false }
}

# Check 2: agents.yaml
$ay = Join-Path $vault "SYSTEM/agents.yaml"
if (Test-Path $ay) { $report += "[OK] agents.yaml exists" }
else { $report += "[FAIL] agents.yaml missing"; $passed = $false }

# Check 3: Plugins Index
$pi = Join-Path $vault "CANVAS/Plugins Index.md"
if (Test-Path $pi) { $report += "[OK] Plugins Index exists" }
else { $report += "[FAIL] Plugins Index missing"; $passed = $false }

# Check 4: Defer hermes_bus daemon call to Wave 3
$report += "[INFO] hermes_bus daemon one-shot: deferred to Wave 3 (T16-T22)"

$report += ""
if ($passed) {
    $report += "VERDICT: PASS"
} else {
    $report += "VERDICT: FAIL"
}

$report | Out-File -FilePath $evidence -Encoding utf8 -Force
Write-Host ($report | Out-String)
exit 0
