#!/usr/bin/env bash
# pre-tool-vault-db-ddl.sh
# PreToolUse hook (matcher: Bash)
# Blocks DDL operations on vault.db executed via sqlite3 Bash commands.
# DDL patterns blocked: CREATE TABLE/INDEX/TRIGGER/VIEW, ALTER TABLE, DROP TABLE/INDEX/TRIGGER/VIEW
# These require HITL approval (Pre-Step-4 gate in route-dispatch SKILL).
#
# Hook contract:
#   stdin : JSON { "tool_name":"Bash", "tool_input":{"command":"..."}, ... }
#   exit 0  = allow
#   exit 2  = block (stderr message forwarded to Claude)
#   NEVER use set -e; exit 1 is NOT a block signal.

set -uo pipefail

INPUT=$(cat)

# Only apply to Bash tool calls
TOOL_NAME=$(printf '%s' "$INPUT" | \
  sed -n 's/.*"tool_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
[ "$TOOL_NAME" != "Bash" ] && exit 0

# Extract command string
if command -v python3 >/dev/null 2>&1; then
  COMMAND=$(printf '%s' "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('command', ''))
except Exception:
    pass
" 2>/dev/null)
else
  COMMAND=$(printf '%s' "$INPUT" | \
    sed -n 's/.*"command"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
fi

[ -z "$COMMAND" ] && exit 0

# Quick exit: command must reference vault.db
printf '%s' "$COMMAND" | grep -qi 'vault\.db' || exit 0

# Block if DDL pattern detected (case-insensitive)
if printf '%s' "$COMMAND" | grep -qiE \
  'CREATE[[:space:]]+(TABLE|INDEX|TRIGGER|VIEW)|ALTER[[:space:]]+TABLE|DROP[[:space:]]+(TABLE|INDEX|TRIGGER|VIEW)'; then
  echo "HITL_GATE: vault.db DDL blocked — schema change requires human-in-the-loop approval." >&2
  echo "  Detected DDL pattern in sqlite3 command targeting MEMORY/vault.db." >&2
  echo "  DDL blocked : CREATE/ALTER/DROP TABLE, INDEX, TRIGGER, VIEW" >&2
  echo "  Remedy      : Route via HITL gate (route-dispatch SKILL, Pre-Step-4) and obtain" >&2
  echo "                user approval before executing schema changes." >&2
  exit 2
fi

exit 0
