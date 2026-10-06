# pre-tool-vault-db-ddl.ps1
# PreToolUse hook (matcher: Bash) — PowerShell equivalent of .sh version
# Blocks DDL operations on vault.db (CREATE/ALTER/DROP TABLE, INDEX, etc.).
#
# Exit 2 = block; Exit 0 = allow

$raw = [Console]::In.ReadToEnd()

try {
    $data = $raw | ConvertFrom-Json -ErrorAction Stop
} catch {
    exit 0
}

# Only apply to Bash tool calls
if ($data.tool_name -ne 'Bash') { exit 0 }

$command = $data.tool_input.command
if (-not $command) { exit 0 }

# Quick check: must reference vault.db
if ($command -notmatch 'vault\.db') { exit 0 }

# Block if DDL pattern detected
$ddlPattern = '(?i)(CREATE\s+(TABLE|INDEX|TRIGGER|VIEW)|ALTER\s+TABLE|DROP\s+(TABLE|INDEX|TRIGGER|VIEW))'
if ($command -match $ddlPattern) {
    [Console]::Error.WriteLine("HITL_GATE: vault.db DDL blocked — schema change requires human-in-the-loop approval.")
    [Console]::Error.WriteLine("  Detected DDL pattern in sqlite3 command targeting MEMORY/vault.db.")
    [Console]::Error.WriteLine("  DDL blocked : CREATE/ALTER/DROP TABLE, INDEX, TRIGGER, VIEW")
    [Console]::Error.WriteLine("  Remedy      : Route via HITL gate (route-dispatch SKILL, Pre-Step-4).")
    exit 2
}

exit 0
