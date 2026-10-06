#!/usr/bin/env bash
# pre-tool-protected-paths.sh
# PreToolUse hook (matcher: Write|Edit)
# Blocks writes to protected vault paths that require HITL approval:
#   - SYSTEM/ (all files, including SYSTEM/LOCK/ and SYSTEM/agents.yaml)
#   - MCP/servers/byok-gateway/
#
# Hook contract:
#   stdin : JSON { "tool_name":"...", "tool_input":{"file_path":"..."}, "agent_type":"..." }
#   exit 0  = allow
#   exit 2  = block (stderr message is forwarded to Claude)
#   NEVER use set -e; exit 1 is NOT a block signal.

set -uo pipefail

INPUT=$(cat)

# Parse file_path — prefer Python3 for correct Windows JSON decoding
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
  # Fallback: sed extraction (may contain JSON-escaped backslashes)
  FILE_PATH=$(printf '%s' "$INPUT" | \
    sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
fi

[ -z "$FILE_PATH" ] && exit 0

# Normalize: backslashes -> forward slashes, collapse doubles
FILE_PATH_NORM=$(printf '%s' "$FILE_PATH" | tr '\\' '/' | sed 's|//|/|g')

# Strip vault root prefix (handles both Git-Bash and Windows forms)
FILE_PATH_REL=$(printf '%s' "$FILE_PATH_NORM" | \
  sed 's|^[Cc]:/[Vv]aults/wiki3/||; s|^/[Cc]/[Vv]aults/wiki3/||')

# Check protected path prefixes
if printf '%s' "$FILE_PATH_REL" | grep -qE '^SYSTEM/|^MCP/servers/byok-gateway/'; then
  echo "HITL_GATE: Write blocked — path is in a protected zone." >&2
  echo "  Path   : $FILE_PATH_REL" >&2
  echo "  Zones  : SYSTEM/ (includes LOCK/, agents.yaml), MCP/servers/byok-gateway/" >&2
  echo "  Remedy : Obtain HITL approval via the route-dispatch SKILL (Pre-Step-4 gate)," >&2
  echo "           then unlock via SYSTEM/LOCK/ protocol before retrying." >&2
  exit 2
fi

exit 0
