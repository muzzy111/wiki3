#!/usr/bin/env bash
# post-tool-karpathy-signal.sh
# PostToolUse hook (matcher: Write|Edit)
# Detects writes to MEMORY/Karpathy/ (canonical casing) and writes a signal
# file activating the content-redteam wiki review gate.
#
# Canonical Karpathy path: MEMORY/Karpathy/  (Phase 7-8 confirmed casing)
# Also accepts MEMORY/KARPATHY/ for backward compatibility (Phase 6 note).
#
# Signal file: .claude/signals/karpathy-write.signal
# The content-redteam agent should poll or check this signal before performing
# its review gate activation.
#
# Hook contract:
#   stdin : JSON { "tool_name":"Write|Edit", "tool_input":{"file_path":"..."}, ... }
#   exit 0 always (PostToolUse hooks should not block after the fact)
#   NEVER use set -e.

set -uo pipefail

INPUT=$(cat)

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

# Match MEMORY/Karpathy/ or MEMORY/KARPATHY/ (case-insensitive on the folder name)
if printf '%s' "$FILE_PATH_REL" | grep -qiE '^MEMORY/[Kk][Aa][Rr][Pp][Aa][Tt][Hh][Yy]/'; then
  SIGNAL_DIR="${CLAUDE_PROJECT_DIR:-C:/Vaults/wiki3}/.claude/signals"
  mkdir -p "$SIGNAL_DIR" 2>/dev/null || true
  TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null || date +"%Y-%m-%dT%H:%M:%SZ")
  printf '%s Karpathy write: %s — content-redteam review gate activated\n' \
    "$TIMESTAMP" "$FILE_PATH_REL" > "$SIGNAL_DIR/karpathy-write.signal"
fi

exit 0
