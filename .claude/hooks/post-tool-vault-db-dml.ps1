# post-tool-vault-db-dml.ps1
# PostToolUse hook (matcher: Bash) — PowerShell equivalent of .sh version
# Detects sqlite3 DML writes to vault.db and writes a signal file for hermes.
# Signal: .claude/signals/vault-db-dml.signal
#
# Always exits 0 (PostToolUse hooks do not block after the fact).

$raw = [Console]::In.ReadToEnd()

try {
    $data = $raw | ConvertFrom-Json -ErrorAction Stop
} catch {
    exit 0
}

if ($data.tool_name -ne 'Bash') { exit 0 }

$command = $data.tool_input.command
if (-not $command) { exit 0 }

# Must reference vault.db
if ($command -notmatch 'vault\.db') { exit 0 }

# Check for DML
$dmlPattern = '(?i)(INSERT\s+INTO|UPDATE\s|DELETE\s+FROM|REPLACE\s+INTO|UPSERT)'
if ($command -match $dmlPattern) {
    $vaultRoot  = $env:CLAUDE_PROJECT_DIR
    if (-not $vaultRoot) { $vaultRoot = 'C:/Vaults/wiki3' }
    $signalDir  = Join-Path $vaultRoot '.claude/signals'
    $null = New-Item -ItemType Directory -Force -Path $signalDir -ErrorAction SilentlyContinue

    $ts = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
    "$ts vault.db DML detected — MEMORY/Index.md regeneration needed" |
        Set-Content -Path (Join-Path $signalDir 'vault-db-dml.signal') -Encoding UTF8
}

exit 0
