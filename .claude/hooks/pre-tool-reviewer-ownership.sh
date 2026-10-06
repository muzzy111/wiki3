#!/usr/bin/env bash
# pre-tool-reviewer-ownership.sh
# PreToolUse hook (matcher: Write|Edit)
# Enforces single-file write scope for the three adversarial redteam agents.
#
#   research-redteam  -> TASKS/*/02-research-review.md  (only)
#   plan-redteam      -> TASKS/*/03-plan-review.md       (only)
#   content-redteam   -> TASKS/*/06-content-review.md   (only)
#
# Identity source: agent_type field in stdin JSON.
# This field is injected by the Claude Code runtime for subagent calls and
# cannot be forged via prompting. Absent = main session / orchestrator = pass.
#
# Hook contract:
#   stdin : JSON { "tool_name":"...", "tool_input":{"file_path":"..."}, "agent_type":"..." }
#   exit 0  = allow
#   exit 2  = block (stderr message forwarded to Claude)
#   NEVER use set -e; exit 1 is NOT a block signal.

set -uo pipefail

INPUT=$(cat)

# Extract agent_type — absent means main session (orchestrator); always pass
AGENT_TYPE=$(printf '%s' "$INPUT" | \
  sed -n 's/.*"agent_type"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
[ -z "$AGENT_TYPE" ] && exit 0

# Only apply to the three redteam reviewer agents
case "$AGENT_TYPE" in
  research-redteam|plan-redteam|content-redteam) ;;
  *) exit 0 ;;
esac

# Extract file_path
if command -v python3 >/dev/null 2>&1; then
  FILE_PATH=$(printf '%s' "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except Exception:
    pass
" 2>/dev/null)
else
  FILE_PATH=$(printf '%s' "$INPUT" | \
    sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
fi

[ -z "$FILE_PATH" ] && exit 0

# Normalize path
FILE_PATH_NORM=$(printf '%s' "$FILE_PATH" | tr '\\' '/' | sed 's|//|/|g')
FILE_PATH_REL=$(printf '%s' "$FILE_PATH_NORM" | \
  sed 's|^[Cc]:/[Vv]aults/wiki3/||; s|^/[Cc]/[Vv]aults/wiki3/||')

# Map agent to its single allowed output file pattern
ALLOWED_PATTERN=""
case "$AGENT_TYPE" in
  research-redteam) ALLOWED_PATTERN='TASKS/[^/]*/02-research-review\.md$' ;;
  plan-redteam)     ALLOWED_PATTERN='TASKS/[^/]*/03-plan-review\.md$'     ;;
  content-redteam)  ALLOWED_PATTERN='TASKS/[^/]*/06-content-review\.md$'  ;;
esac

if printf '%s' "$FILE_PATH_REL" | grep -qE "$ALLOWED_PATTERN"; then
  exit 0
fi

# Violation: write is outside the permitted single-file scope
echo "OWNERSHIP_GUARD: Write blocked — '$AGENT_TYPE' scope violation." >&2
echo "  Attempted : $FILE_PATH_REL" >&2
case "$AGENT_TYPE" in
  research-redteam) echo "  Permitted : TASKS/*/02-research-review.md" >&2 ;;
  plan-redteam)     echo "  Permitted : TASKS/*/03-plan-review.md"     >&2 ;;
  content-redteam)  echo "  Permitted : TASKS/*/06-content-review.md"  >&2 ;;
esac
echo "  Note      : Reviewer agents may ONLY write their single designated review file." >&2
exit 2
