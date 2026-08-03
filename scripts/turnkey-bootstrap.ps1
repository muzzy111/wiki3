<#
.SYNOPSIS
    Bootstrap the LOOP vault for first-run.
.DESCRIPTION
    PowerShell 7+ script. Verifies Python, plugins, agents.yaml, role folders, and inbox/outbox
    directories. Idempotent. Exits 0 on success, 1 on failure.
.PARAMETER VaultRoot
    Absolute or relative path to the LOOP vault root. Defaults to "."
.EXAMPLE
    pwsh -NoProfile -File turnkey-bootstrap.ps1 -VaultRoot .
#>

[CmdletBinding()]
param(
    [Parameter()]
    [string]$VaultRoot = "."
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Step($n, $label) {
    Write-Host "[$n] $label" -ForegroundColor Cyan
}

try {
    Step 1 "Resolve vault root"
    $vault = (Resolve-Path -LiteralPath $VaultRoot).Path
    Write-Host "    Vault: $vault"

    Step 2 "Check Python on PATH"
    $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
    if (-not $pythonCmd) {
        Write-Warning "    python not found on PATH. Continuing (hermes_bus scripts may not run)."
    } else {
        $ver = & $pythonCmd.Source --version 2>&1
        Write-Host "    Python: $ver"
    }

    Step 3 "Validate .obsidian/community-plugins.json"
    $pluginsJson = Join-Path $vault ".obsidian/community-plugins.json"
    if (-not (Test-Path $pluginsJson)) {
        Write-Warning "    $pluginsJson missing"
    } else {
        try {
            $plugins = Get-Content $pluginsJson -Raw | ConvertFrom-Json
            Write-Host "    Plugins: $($plugins.Count) enabled"
        } catch {
            Write-Warning "    .obsidian/community-plugins.json is not valid JSON: $_"
        }
    }

    Step 4 "Validate SYSTEM/agents.yaml (5 roles)"
    $agentsYaml = Join-Path $vault "SYSTEM/agents.yaml"
    if (-not (Test-Path $agentsYaml)) {
        throw "Missing SYSTEM/agents.yaml. Run Wave 1 first."
    }
    if ($pythonCmd) {
        $yamlCount = & $pythonCmd.Source -c "import yaml; d=yaml.safe_load(open(r'$agentsYaml'.encode('string-escape').decode(),'r',encoding='utf-8')); print(len(d['agents']))" 2>&1
        Write-Host "    agents.yaml: $yamlCount roles"
        if ($yamlCount -ne 5) {
            throw "agents.yaml must declare exactly 5 roles; got $yamlCount"
        }
    } else {
        Write-Warning "    Skipping YAML validation; python unavailable."
    }

    Step 5 "Ensure 5 role folders exist with Inbox/Outbox"
    $roles = @("1.0COORDINATOR","2.0CODER","3.0RESEARCHER","4.0TOOLS","5.0MEMORY")
    foreach ($r in $roles) {
        $rolePath = Join-Path $vault $r
        if (-not (Test-Path $rolePath)) {
            New-Item -ItemType Directory -Path $rolePath -Force | Out-Null
            Write-Host "    Created $r/"
        }
        $inbox = Join-Path $rolePath "CHAT/Inbox"
        $outbox = Join-Path $rolePath "CHAT/Outbox"
        if (-not (Test-Path $inbox)) {
            New-Item -ItemType Directory -Path $inbox -Force | Out-Null
        }
        if (-not (Test-Path $outbox)) {
            New-Item -ItemType Directory -Path $outbox -Force | Out-Null
        }
        Write-Host "    $r CHAT/Inbox + CHAT/Outbox ensured"
    }

    Write-Host ""
    Write-Host "Bootstrap complete." -ForegroundColor Green
    Write-Host "Vault: $vault"
    Write-Host "Roles: 5 (coordinator, coder, researcher, tools, memory)"
    Write-Host "Next: run scripts/turnkey-smoke.ps1 for a full smoke test."
    exit 0
} catch {
    Write-Error "Bootstrap failed: $_"
    exit 1
}
