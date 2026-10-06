# pre-tool-protected-paths.ps1
# PreToolUse hook (matcher: Write|Edit) — PowerShell equivalent of .sh version
# Blocks writes to SYSTEM/ and MCP/servers/byok-gateway/ (HITL required).
#
# Exit 2 = block; Exit 0 = allow

$raw = [Console]::In.ReadToEnd()

try {
    $data = $raw | ConvertFrom-Json -ErrorAction Stop
} catch {
    exit 0
}

$filePath = $data.tool_input.file_path
if (-not $filePath) { exit 0 }

# Normalize separators and strip vault prefix
$norm = $filePath -replace '\\', '/' -replace '//+', '/'
$rel  = $norm -replace '^[Cc]:/[Vv]aults/wiki3/', '' `
              -replace '^/[Cc]/[Vv]aults/wiki3/', ''

if ($rel -match '^SYSTEM/' -or $rel -match '^MCP/servers/byok-gateway/') {
    [Console]::Error.WriteLine("HITL_GATE: Write blocked — path is in a protected zone.")
    [Console]::Error.WriteLine("  Path   : $rel")
    [Console]::Error.WriteLine("  Zones  : SYSTEM/ (includes LOCK/, agents.yaml), MCP/servers/byok-gateway/")
    [Console]::Error.WriteLine("  Remedy : Obtain HITL approval via route-dispatch SKILL (Pre-Step-4 gate),")
    [Console]::Error.WriteLine("           then unlock via SYSTEM/LOCK/ protocol before retrying.")
    exit 2
}

exit 0
