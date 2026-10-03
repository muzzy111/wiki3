<#
.SYNOPSIS
    Companion to Start-Everything.ps1 -- stops all five agent pollers, the
    fleet watchdog, and the Docker stacks (containers stopped, not removed;
    volumes/networks preserved).
#>

$ErrorActionPreference = 'Stop'
$Workspace = "C:\AI-Workspace"

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Not running elevated -- relaunching this script as Administrator..."
    Start-Process pwsh -Verb RunAs -ArgumentList @('-NoExit', '-File', $PSCommandPath)
    exit 0
}

. "$Workspace\scripts\_Common.ps1"
Initialize-Log -ScriptName "Stop-Everything" | Out-Null

function Stop-PidFile {
    param([string]$Name, [string]$PidFile)
    if (-not (Test-Path $PidFile)) { Write-Log "$Name : no pid file, nothing to do" "INFO"; return }
    $rawPid = Get-Content $PidFile -ErrorAction SilentlyContinue | Select-Object -First 1
    $procId = 0
    if (-not ($rawPid -and [int]::TryParse($rawPid.Trim(), [ref]$procId) -and $procId -gt 0)) {
        Write-Log "$Name : pid file unreadable, removing" "WARN"
        Remove-Item $PidFile -Force -ErrorAction SilentlyContinue
        return
    }
    $proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
    if (-not $proc) {
        Write-Log "$Name : not running (stale pid $procId), removing pid file" "INFO"
        Remove-Item $PidFile -Force -ErrorAction SilentlyContinue
        return
    }
    Write-Log "$Name : stopping pid $procId" "INFO"
    taskkill /PID $procId /T /F 2>&1 | Out-Null
    Remove-Item $PidFile -Force -ErrorAction SilentlyContinue
}

foreach ($name in @("hermes", "mavis", "cline", "antigravity", "opencode")) {
    Stop-PidFile -Name "$name poller" -PidFile (Join-Path $Workspace "bus.$name.poller.pid")
}
Stop-PidFile -Name "watchdog" -PidFile (Join-Path $Workspace "bus.watchdog.pid")

Invoke-Checked -StepName "AI-Workspace container stack (Stop-Services.ps1)" -Action {
    & "$Workspace\scripts\Stop-Services.ps1"
    if ($LASTEXITCODE -ne 0) { throw "Stop-Services.ps1 exited with code $LASTEXITCODE" }
} | Out-Null

$hermesMemoryDir = "C:\Users\Admin\hermes-memory"
Invoke-Checked -StepName "hermes-memory (chat) stack" -Action {
    if (-not (Test-Path (Join-Path $hermesMemoryDir "docker-compose.yml"))) {
        throw "no docker-compose.yml at $hermesMemoryDir -- skipping"
    }
    Push-Location $hermesMemoryDir
    try {
        docker compose stop
        if ($LASTEXITCODE -ne 0) { throw "docker compose stop failed for hermes-memory" }
    } finally {
        Pop-Location
    }
} | Out-Null

Complete-Log -ExitCode 0
