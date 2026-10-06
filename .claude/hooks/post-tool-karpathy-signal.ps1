# post-tool-karpathy-signal.ps1
# PostToolUse hook (matcher: Write|Edit) — PowerShell equivalent of .sh version
# Detects writes to MEMORY/Karpathy/ and signals the content-redteam review gate.
# Signal: .claude/signals/karpathy-write.signal
#
# Canonical path: MEMORY/Karpathy/ — also accepts MEMORY/KARPATHY/ for compat.
# Always exits 0 (PostToolUse hooks do not block after the fact).

$raw = [Console]::In.ReadToEnd()

try {
    $data = $raw | ConvertFrom-Json -ErrorAction Stop
} catch {
    exit 0
}

$filePath = $data.tool_input.file_path
if (-not $filePath) { exit 0 }

# Normalize and strip vault prefix
$norm = $filePath -replace '\\', '/' -replace '//+', '/'
$rel  = $norm -replace '^[Cc]:/[Vv]aults/wiki3/', '' `
              -replace '^/[Cc]/[Vv]aults/wiki3/', ''

# Match MEMORY/Karpathy/ or MEMORY/KARPATHY/ (case-insensitive on folder name)
if ($rel -match '(?i)^MEMORY/Karpathy/') {
    $vaultRoot = $env:CLAUDE_PROJECT_DIR
    if (-not $vaultRoot) { $vaultRoot = 'C:/Vaults/wiki3' }
    $signalDir = Join-Path $vaultRoot '.claude/signals'
    $null = New-Item -ItemType Directory -Force -Path $signalDir -ErrorAction SilentlyContinue

    $ts = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
    "$ts Karpathy write: $rel — content-redteam review gate activated" |
        Set-Content -Path (Join-Path $signalDir 'karpathy-write.signal') -Encoding UTF8
}

exit 0
