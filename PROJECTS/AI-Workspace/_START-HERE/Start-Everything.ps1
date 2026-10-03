<#
.SYNOPSIS
    One-shot bring-up for the whole AI-Workspace fleet: Docker Desktop, the
    AI-Workspace container stack, the hermes-memory ("chat") stack, all five
    agent pollers (hermes/mavis/cline/antigravity/opencode), and the fleet
    watchdog.

.NOTES
    Idempotent -- safe to run repeatedly. Everything it calls already
    refuses to double-start (docker compose no-ops on running containers;
    each poller launcher checks its own PID file and leaves a live poller
    alone).

    Requires admin (Start-Services.ps1 touches Docker network/volumes on
    most Windows setups). If not already elevated, this script relaunches
    itself in an elevated window and exits the original one.
#>

$ErrorActionPreference = 'Stop'
$Workspace = "C:\AI-Workspace"

# -- Self-elevate if needed -------------------------------------------------
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Not running elevated -- relaunching this script as Administrator..."
    Start-Process pwsh -Verb RunAs -ArgumentList @('-NoExit', '-File', $PSCommandPath)
    exit 0
}

. "$Workspace\scripts\_Common.ps1"
Initialize-Log -ScriptName "Start-Everything" | Out-Null
$anyFailed = $false

# -- 1. Docker Desktop -------------------------------------------------------
Invoke-Checked -StepName "Docker Desktop running" -Action {
    $null = docker info 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Log "Docker daemon not responding -- starting Docker Desktop" "WARN"
        $dockerExe = "C:\Program Files\Docker\Docker\Docker Desktop.exe"
        if (-not (Test-Path $dockerExe)) { throw "Docker Desktop.exe not found at $dockerExe -- start it manually" }
        Start-Process -FilePath $dockerExe | Out-Null
        $sw = [System.Diagnostics.Stopwatch]::StartNew()
        while ($sw.Elapsed.TotalSeconds -lt 90) {
            Start-Sleep -Seconds 3
            $null = docker info 2>$null
            if ($LASTEXITCODE -eq 0) { return }
        }
        throw "Docker daemon did not come up within 90s"
    }
} | Out-Null

# -- 2. AI-Workspace container stack (network/volumes -> task bus -> MCP -> observability) --
$ok = Invoke-Checked -StepName "AI-Workspace container stack (Start-Services.ps1)" -Action {
    & "$Workspace\scripts\Start-Services.ps1"
    if ($LASTEXITCODE -ne 0) { throw "Start-Services.ps1 exited with code $LASTEXITCODE" }
}
if (-not $ok) { $anyFailed = $true }

# -- 3. hermes-memory ("chat") stack -----------------------------------------
$hermesMemoryDir = "C:\Users\Admin\hermes-memory"
Invoke-Checked -StepName "hermes-memory (chat) stack" -Action {
    if (-not (Test-Path (Join-Path $hermesMemoryDir "docker-compose.yml"))) {
        throw "no docker-compose.yml at $hermesMemoryDir -- skipping (not found on this machine)"
    }
    Push-Location $hermesMemoryDir
    try {
        docker compose up -d
        if ($LASTEXITCODE -ne 0) { throw "docker compose up failed for hermes-memory" }
    } finally {
        Pop-Location
    }
} | Out-Null

# -- 4. Brief settle before pollers connect ----------------------------------
Start-Sleep -Seconds 3

# -- 5. Agent pollers ---------------------------------------------------------
$pollers = @(
    @{ Name = "hermes";      Cmd = { & "$Workspace\scripts\hermes-poller.ps1" } },
    @{ Name = "mavis";       Cmd = { & "$Workspace\mavis-poller.ps1" -Action start } },
    @{ Name = "cline";       Cmd = { & "$Workspace\scripts\cline-poller.ps1" } },
    @{ Name = "antigravity"; Cmd = { & "$Workspace\antigravity-poller.ps1" -Action start } },
    @{ Name = "opencode";    Cmd = { & "$Workspace\scripts\opencode-poller.ps1" } }
)
foreach ($p in $pollers) {
    Invoke-Checked -StepName "Poller: $($p.Name)" -Action $p.Cmd | Out-Null
}

# -- 6. Fleet watchdog ----------------------------------------------------------
Invoke-Checked -StepName "Fleet watchdog" -Action {
    $pidFile = Join-Path $Workspace "bus.watchdog.pid"
    $alreadyRunning = $false
    if (Test-Path $pidFile) {
        $rawPid = Get-Content $pidFile -ErrorAction SilentlyContinue | Select-Object -First 1
        $oldPid = 0
        if ($rawPid -and [int]::TryParse($rawPid.Trim(), [ref]$oldPid) -and $oldPid -gt 0) {
            $proc = Get-Process -Id $oldPid -ErrorAction SilentlyContinue
            if ($proc -and $proc.ProcessName -match "python") { $alreadyRunning = $true }
        }
    }
    if ($alreadyRunning) {
        Write-Log "watchdog already running -- leaving it alone" "INFO"
        return
    }
    $py = (Get-Command pythonw.exe -ErrorAction SilentlyContinue).Source
    if (-not $py) { $py = (Get-Command python.exe -ErrorAction SilentlyContinue).Source }
    if (-not $py) { throw "no python/pythonw interpreter found on PATH" }
    Start-Process -FilePath $py `
        -ArgumentList @((Join-Path $Workspace "watchdog.py")) `
        -WorkingDirectory $Workspace `
        -WindowStyle Hidden `
        -RedirectStandardOutput (Join-Path $Workspace "logs\watchdog.out") `
        -RedirectStandardError  (Join-Path $Workspace "logs\watchdog.err") `
        -PassThru | Out-Null
    Write-Log "watchdog launched" "INFO"
} | Out-Null

# -- 7. Summary -----------------------------------------------------------------
Write-Log "==== Status summary ====" "INFO"
docker ps --format "table {{.Names}}\t{{.Status}}" | ForEach-Object { Write-Log $_ "INFO" }
foreach ($name in @("hermes", "mavis", "cline", "antigravity", "opencode")) {
    $pidFile = Join-Path $Workspace "bus.$name.poller.pid"
    if (Test-Path $pidFile) {
        $p = Get-Content $pidFile -ErrorAction SilentlyContinue
        $alive = Get-Process -Id $p -ErrorAction SilentlyContinue
        Write-Log "$name poller : $(if ($alive) { "UP (pid $p)" } else { "DOWN (stale pid $p)" })" "INFO"
    } else {
        Write-Log "$name poller : DOWN (no pid file)" "WARN"
    }
}

if ($anyFailed) { Complete-Log -ExitCode 1 } else { Complete-Log -ExitCode 0 }
