#!/usr/bin/env bash
# post-tool-vault-db-dml.sh
# PostToolUse hook (matcher: Bash)
# Detects sqlite3 DML writes to vault.db and writes a signal file so hermes
# knows to run curate-memory-index (regenerating MEMORY/Index.md).
#
# DML detected: INSERT INTO, UPDATE, DELETE FROM, REPLACE INTO, UPSERT
#
# Signal file: .claude/signals/vault-db-dml.signal
# Hermes should poll this file or check it during its curate-memory-index run.
#
# Hook contract:
#   stdin : JSON { "tool_name":"Bash", "tool_input":{"command":"..."}, ... }
#   exit 0 always (PostToolUse hooks should not block after the fact)
#   NEVER use set -e.

set -uo pipefail

INPUT=$(cat)

# Only inspect Bash tool completions
TOOL_NAME=$(printf '%s' "$INPUT" | \
  sed -n 's/.*"tool_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
[ "$TOOL_NAME" != "Bash" ] && exit 0

# Extract command
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

# Check for DML patterns
if printf '%s' "$COMMAND" | grep -qiE \
  'INSERT[[:space:]]+INTO|UPDATE[[:space:]]|DELETE[[:space:]]+FROM|REPLACE[[:space:]]+INTO|UPSERT'; then
  # Write signal file for hermes
  SIGNAL_DIR="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}/.claude/signals"
  mkdir -p "$SIGNAL_DIR" 2>/dev/null || true
  TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null || date +"%Y-%m-%dT%H:%M:%SZ")
  printf '%s vault.db DML detected — MEMORY/Index.md regeneration needed\n' "$TIMESTAMP" \
    > "$SIGNAL_DIR/vault-db-dml.signal"
fi

exit 0
