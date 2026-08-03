# Start the Hermes bus daemon for the LOOP cowork vault (Windows).
#
# Usage:
#     .\scripts\start_hermes_daemon.ps1 [VAULT_PATH] [--once] [PYTHON_OPTS...]
#
# Default VAULT_PATH is the sibling ../../.. of this project.
# Pass --once for a single sweep (good for scheduled-task integration).

[CmdletBinding()]
param(
    [string]$Vault = "",
    [string[]]$ExtraArgs = @()
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectDir = Split-Path -Parent $ScriptDir

if (-not $Vault) {
    $Vault = (Resolve-Path (Join-Path $ProjectDir "..\..\..\..\..")).Path
}

# Pick a python.
$Python = $null
$Candidates = @(
    (Join-Path $ProjectDir ".venv\Scripts\python.exe"),
    (Join-Path $ProjectDir ".venv\Scripts\python3.exe"),
    "C:\Python314\python.exe",
    "python.exe"
)
foreach ($c in $Candidates) {
    if (Test-Path $c) { $Python = $c; break }
}
if (-not $Python) {
    foreach ($c in @("python", "python3")) {
        $found = (Get-Command $c -ErrorAction SilentlyContinue)
        if ($found) { $Python = $found.Source; break }
    }
}
if (-not $Python) {
    throw "Could not locate a python executable."
}

$env:PYTHONPATH = $ProjectDir + "\src" + ($(if ($env:PYTHONPATH) { ";" + $env:PYTHONPATH } else { "" }))

Write-Host "[hermes-bus] VAULT  = $Vault"
Write-Host "[hermes-bus] PYTHON = $Python"
Write-Host "[hermes-bus] PYTHONPATH = $env:PYTHONPATH"

$allArgs = @("--vault", $Vault) + $ExtraArgs
& $Python -m hermes_bus.daemon @allArgs
