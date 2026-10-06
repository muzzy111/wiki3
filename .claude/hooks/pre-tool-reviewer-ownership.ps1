# pre-tool-reviewer-ownership.ps1
# PreToolUse hook (matcher: Write|Edit) — PowerShell equivalent of .sh version
# Enforces single-file write scope for adversarial redteam agents.
#
#   research-redteam  -> TASKS/*/02-research-review.md only
#   plan-redteam      -> TASKS/*/03-plan-review.md       only
#   content-redteam   -> TASKS/*/06-content-review.md   only
#
# Exit 2 = block; Exit 0 = allow

$raw = [Console]::In.ReadToEnd()

try {
    $data = $raw | ConvertFrom-Json -ErrorAction Stop
} catch {
    exit 0
}

$agentType = $data.agent_type
# Absent agent_type = orchestrator/main session = pass
if (-not $agentType) { exit 0 }

# Only apply to the three redteam agents
$reviewers = @('research-redteam', 'plan-redteam', 'content-redteam')
if ($agentType -notin $reviewers) { exit 0 }

$filePath = $data.tool_input.file_path
if (-not $filePath) { exit 0 }

# Normalize and strip vault prefix
$norm = $filePath -replace '\\', '/' -replace '//+', '/'
$rel  = $norm -replace '^[Cc]:/[Vv]aults/wiki3/', '' `
              -replace '^/[Cc]/[Vv]aults/wiki3/', ''

# Map agent to its allowed file pattern
switch ($agentType) {
    'research-redteam' { $pattern = '^TASKS/[^/]+/02-research-review\.md$' }
    'plan-redteam'     { $pattern = '^TASKS/[^/]+/03-plan-review\.md$'     }
    'content-redteam'  { $pattern = '^TASKS/[^/]+/06-content-review\.md$'  }
}

if ($rel -match $pattern) { exit 0 }

# Violation
[Console]::Error.WriteLine("OWNERSHIP_GUARD: Write blocked — '$agentType' scope violation.")
[Console]::Error.WriteLine("  Attempted : $rel")
switch ($agentType) {
    'research-redteam' { [Console]::Error.WriteLine("  Permitted : TASKS/*/02-research-review.md") }
    'plan-redteam'     { [Console]::Error.WriteLine("  Permitted : TASKS/*/03-plan-review.md")     }
    'content-redteam'  { [Console]::Error.WriteLine("  Permitted : TASKS/*/06-content-review.md")  }
}
[Console]::Error.WriteLine("  Note      : Reviewer agents may ONLY write their single designated review file.")
exit 2
