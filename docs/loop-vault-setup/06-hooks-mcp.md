---
phase: 7-8
completed: true
status: ok
advisor_status: manual_override
---

# 06 — Hooks and MCP

## Summary

Phase 7-8 (Hooks + MCP) complete for LOOP Vault — LOOP Agent OS.

Five hook scripts were written (each with a PowerShell `.ps1` equivalent for Windows fallback) and registered in `.claude/settings.json`. All hooks follow the stdin-JSON contract: input is parsed via Python3 with sed fallback; blocking exits use `exit 2` only; `set -e` is absent to prevent silent failures. Timeout is 5 seconds on every hook to prevent CPU accumulation.

**PreToolUse hooks (3):**
- `pre-tool-protected-paths` — HITL gate blocking all writes to `SYSTEM/` and `MCP/servers/byok-gateway/`.
- `pre-tool-vault-db-ddl` — Blocks DDL operations (CREATE/ALTER/DROP TABLE, INDEX, TRIGGER, VIEW) in sqlite3 Bash commands targeting `vault.db`.
- `pre-tool-reviewer-ownership` — Enforces single-file write scope for the three redteam agents (`research-redteam`, `plan-redteam`, `content-redteam`). Identity source: `agent_type` runtime field only; main session is always passed.

**PostToolUse hooks (2):**
- `post-tool-vault-db-dml` — Writes `.claude/signals/vault-db-dml.signal` after sqlite3 DML on `vault.db`, signalling hermes to regenerate `MEMORY/Index.md`.
- `post-tool-karpathy-signal` — Writes `.claude/signals/karpathy-write.signal` after any write to `MEMORY/Karpathy/`, activating the content-redteam review gate.

**Karpathy path casing confirmed**: `MEMORY/Karpathy/` is canonical. All hooks accept `MEMORY/KARPATHY/` as a backward-compatible alias. Playbooks that reference the old casing should be updated to `MEMORY/Karpathy/` in a follow-up pass.

**MCP**: Exa MCP is already connected (web search covered). SQLite MCP recommended for vault.db access; no NATS or X/Twitter MCP identified via official channels. Full recommendation details and install snippets are in the `## MCP Servers` section.

---

## Hooks Installed

| Hook file | Event | Matcher | Purpose |
|---|---|---|---|
| `pre-tool-protected-paths.sh` | PreToolUse | `Write\|Edit` | HITL gate — block writes to `SYSTEM/`, `MCP/servers/byok-gateway/` |
| `pre-tool-vault-db-ddl.sh` | PreToolUse | `Bash` | Block DDL patterns in sqlite3 commands targeting `vault.db` |
| `pre-tool-reviewer-ownership.sh` | PreToolUse | `Write\|Edit` | Ownership guard — redteam agents restricted to single review file |
| `post-tool-vault-db-dml.sh` | PostToolUse | `Bash` | Write `vault-db-dml.signal` after DML on `vault.db` |
| `post-tool-karpathy-signal.sh` | PostToolUse | `Write\|Edit` | Write `karpathy-write.signal` after writes to `MEMORY/Karpathy/` |

PowerShell equivalents (`.ps1`) written for each hook — not registered in `settings.json` (which uses `"shell": "bash"`). Available as fallback if Git Bash becomes unavailable.

All hooks: `set -uo pipefail` (not `set -e`), `timeout: 5`, `shell: "bash"`.

---

## MCP Servers

### 1. SQLite MCP — vault.db query access

- **Name**: `sqlite`
- **Purpose**: Direct SQL query access to `MEMORY/vault.db` for hermes (curate-memory-index, index reads) and openwork (vault-memory-retrieve read queries). Replaces raw `sqlite3` CLI calls with a structured MCP interface.
- **Primary source**: https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite
- **npm namespace**: `@modelcontextprotocol/server-sqlite` (official modelcontextprotocol org — trusted namespace)
- **Recommended scope**: `project` — vault.db is project-specific; all LOOP agents on this project benefit.

**`.mcp.json` snippet** (add to project root `.mcp.json`, merging into existing `mcpServers` object if present):

```json
{
  "mcpServers": {
    "sqlite": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "MEMORY/vault.db"],
      "env": {}
    }
  }
}
```

**Authentication**: None required. The server reads the local SQLite file directly. The `vault.db` path argument is relative to the project root; adjust if the server requires an absolute path.

**Verification after install**: `claude mcp list` should show `sqlite: Connected`. Then test with a SELECT query via a Claude Code session.

---

### 2. Web Search — Exa (already connected)

- **Name**: `exa` (via `claude.ai Exa`)
- **Status**: Already connected — `claude mcp list` shows `claude.ai Exa: Connected`.
- **Purpose**: Live web search for grok's `live-search` playbook. No additional installation required.
- **Note**: This MCP covers grok's `live-search.md` playbook use case. The `x-search.md` playbook (X/Twitter signal search) cannot be served by Exa alone; see X/Twitter entry below.

No installation needed. Confirm via `claude mcp list` that the Exa server remains connected before routing tasks to grok's live-search skill.

---

### 3. X/Twitter MCP — grok x-search (not available via official channels)

- **Status**: No official MCP server from `@modelcontextprotocol/` or `@anthropic-ai/` found for X/Twitter API access.
- **Fallback**: Grok's `x-search.md` playbook should fall back to Exa web search (`site:x.com` or `site:twitter.com` query patterns) when no X MCP is registered. The playbook documents this fallback already.
- **If an X/Twitter MCP becomes available**: register it at `local` scope (personal API credentials) once a trusted package is identified. Community packages exist but have not been verified against an official 1st-party source; do not install without confirming the namespace and source URL.

**Escalation**: `[ASK]` raised below — user should confirm whether to research community X/Twitter MCP options or rely on Exa fallback.

---

### 4. NATS MCP — inter-agent messaging

- **Status**: No official MCP server for NATS from `@modelcontextprotocol/` found. Hermes communicates via loopd CLI (NATS pub/sub is built into the LOOP Agent OS runtime, not routed through MCP tools). No NATS MCP is required for current architecture.
- **Note**: If hermes needs to inspect the NATS JetStream management API (`http://localhost:8222`) directly, a custom HTTP MCP or CLI-based approach is the path forward. No standard package available.

---

> **Installation verification**: After applying the `.mcp.json` snippet above, run `claude mcp list` to confirm the added server shows a Connected status. The SQLite server requires no API key; ensure `MEMORY/vault.db` exists at the path specified before starting.

---

## Settings.json Changes

### Hooks (settings.json)

A `"hooks"` section was appended to `.claude/settings.json`. The existing `"permissions"` block was not modified.

**Added hooks structure summary:**

```
PreToolUse
  matcher: Write|Edit
    -> pre-tool-protected-paths.sh  (timeout: 5s)
    -> pre-tool-reviewer-ownership.sh  (timeout: 5s)
  matcher: Bash
    -> pre-tool-vault-db-ddl.sh  (timeout: 5s)

PostToolUse
  matcher: Bash
    -> post-tool-vault-db-dml.sh  (timeout: 5s)
  matcher: Write|Edit
    -> post-tool-karpathy-signal.sh  (timeout: 5s)
```

All entries use `"shell": "bash"` and `"timeout": 5`. Commands reference the hooks by path relative to project root (`.claude/hooks/*.sh`).

### MCP (user application guide)

MCP configuration is NOT written to `settings.json`. The following is the user's manual application guide.

**SQLite MCP — project scope (`.mcp.json` at project root)**:

Create or edit `C:\Vaults\wiki3\.mcp.json` and add the `sqlite` entry from the `## MCP Servers` section above.

```
# No claude mcp add command for project-scope MCP — use .mcp.json directly.
```

**Exa MCP — already registered** (no action required).

**X/Twitter MCP — pending user decision** (see Escalations).

**NATS MCP — not required** for current architecture.

---

## Verification Targets

Phase 9 should verify the following files for structure, correctness, and security:

| File | Check |
|---|---|
| `C:\Vaults\wiki3\.claude\hooks\pre-tool-protected-paths.sh` | exit 2 on SYSTEM/ path; exit 0 on non-protected |
| `C:\Vaults\wiki3\.claude\hooks\pre-tool-vault-db-ddl.sh` | exit 2 on DDL pattern; exit 0 on DML or non-vault.db |
| `C:\Vaults\wiki3\.claude\hooks\pre-tool-reviewer-ownership.sh` | exit 2 on scope violation; exit 0 on correct reviewer path; exit 0 on absent agent_type |
| `C:\Vaults\wiki3\.claude\hooks\post-tool-vault-db-dml.sh` | writes signal file on DML; no exit 2 |
| `C:\Vaults\wiki3\.claude\hooks\post-tool-karpathy-signal.sh` | writes signal file on Karpathy write; no exit 2 |
| `C:\Vaults\wiki3\.claude\settings.json` | hooks section present; permissions block intact; no secrets |
| `C:\Vaults\wiki3\.claude\rules\pipeline-review-gate.md` | HITL positions, reviewer table, signal file reference present |
| `C:\Vaults\wiki3\docs\loop-vault-setup\06-hooks-mcp.md` | this file — frontmatter valid, all required sections present |

MCP servers are not Phase-9 verifiable (not registered in this Phase — user applies manually).

---

## Context for Next Phase

### Phase 9 (Final Validation) — key inputs

**Hook files installed:**

```
C:\Vaults\wiki3\.claude\hooks\pre-tool-protected-paths.sh
C:\Vaults\wiki3\.claude\hooks\pre-tool-protected-paths.ps1
C:\Vaults\wiki3\.claude\hooks\pre-tool-vault-db-ddl.sh
C:\Vaults\wiki3\.claude\hooks\pre-tool-vault-db-ddl.ps1
C:\Vaults\wiki3\.claude\hooks\pre-tool-reviewer-ownership.sh
C:\Vaults\wiki3\.claude\hooks\pre-tool-reviewer-ownership.ps1
C:\Vaults\wiki3\.claude\hooks\post-tool-vault-db-dml.sh
C:\Vaults\wiki3\.claude\hooks\post-tool-vault-db-dml.ps1
C:\Vaults\wiki3\.claude\hooks\post-tool-karpathy-signal.sh
C:\Vaults\wiki3\.claude\hooks\post-tool-karpathy-signal.ps1
```

Note: `.sh` files are the registered hooks. `.ps1` files are fallback equivalents, not registered. Executable permission (`chmod +x`) not applied — on Windows Git Bash this is not required for `bash script.sh` invocation style.

**Signal directory created**: `C:\Vaults\wiki3\.claude\signals\`

**Settings.json updated**: `C:\Vaults\wiki3\.claude\settings.json` — hooks section appended; permissions unchanged.

**Rules file written**: `C:\Vaults\wiki3\.claude\rules\pipeline-review-gate.md`

**MCP recommendations (not registered — user action required):**

| Server | Package | Source URL | Scope |
|---|---|---|---|
| sqlite | `@modelcontextprotocol/server-sqlite` | https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite | project |
| exa | (already connected) | claude.ai Exa | n/a |
| x-twitter | (pending — no official package found) | — | local (when found) |
| nats | (not required for current arch) | — | — |

**Karpathy path casing**: `MEMORY/Karpathy/` is canonical. Hooks accept `MEMORY/KARPATHY/` as alias. Playbook files referencing old casing should be updated in a post-Phase-9 pass.

**Open Escalations for Phase 9 validator**:
- `[ASK]` X/Twitter MCP: user decision pending.
- `[NOTE]` chmod not applied to .sh files; verify invocation style works on this system.

---

## Files Generated

### Hook scripts

- `C:\Vaults\wiki3\.claude\hooks\pre-tool-protected-paths.sh`
- `C:\Vaults\wiki3\.claude\hooks\pre-tool-protected-paths.ps1`
- `C:\Vaults\wiki3\.claude\hooks\pre-tool-vault-db-ddl.sh`
- `C:\Vaults\wiki3\.claude\hooks\pre-tool-vault-db-ddl.ps1`
- `C:\Vaults\wiki3\.claude\hooks\pre-tool-reviewer-ownership.sh`
- `C:\Vaults\wiki3\.claude\hooks\pre-tool-reviewer-ownership.ps1`
- `C:\Vaults\wiki3\.claude\hooks\post-tool-vault-db-dml.sh`
- `C:\Vaults\wiki3\.claude\hooks\post-tool-vault-db-dml.ps1`
- `C:\Vaults\wiki3\.claude\hooks\post-tool-karpathy-signal.sh`
- `C:\Vaults\wiki3\.claude\hooks\post-tool-karpathy-signal.ps1`

### Configuration

- `C:\Vaults\wiki3\.claude\settings.json` (updated — hooks section appended)

### Rules

- `C:\Vaults\wiki3\.claude\rules\pipeline-review-gate.md`

### Supporting directories created

- `C:\Vaults\wiki3\.claude\hooks\`
- `C:\Vaults\wiki3\.claude\signals\`

### Artifact

- `C:\Vaults\wiki3\docs\loop-vault-setup\06-hooks-mcp.md` (this file)

**Total new files: 12** (10 hook scripts + 1 rule + 1 artifact); 1 file updated (settings.json).

---

## Escalations

- [ASK] MCP server recommendations — 1 candidate identified for installation: `@modelcontextprotocol/server-sqlite` (source: https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite). User should evaluate and add to `.mcp.json` manually. Install or skip?

- [ASK] X/Twitter MCP — Grok's `x-search.md` playbook depends on X/Twitter search. No official MCP server from `@modelcontextprotocol/` was found. Options: (a) accept Exa fallback (`site:x.com` queries) as the permanent solution, (b) user researches a trusted community package, or (c) defer until an official package exists. Which path?

- [NOTE] Exa MCP is already connected (`claude.ai Exa: Connected`). Web search for grok's `live-search.md` playbook is fully covered. No additional web-search MCP installation needed.

- [NOTE] NATS MCP not required. Hermes communicates via loopd CLI's built-in NATS pub/sub. No MCP server for NATS was identified via official channels and none is needed for the current architecture.

- [NOTE] `chmod +x` not applied to `.sh` hook files. The hooks are registered as `bash .claude/hooks/*.sh`, which does not require execute permission on Windows Git Bash. Phase 9 should verify this invocation works in the actual runtime environment.

- [NOTE] Karpathy folder casing resolved: `MEMORY/Karpathy/` is canonical (per Phase 7-8 instruction). Both hooks and this artifact use this casing. Playbook files `karpathy-wiki-draft.md` that reference `MEMORY/KARPATHY/` should be updated in a follow-up pass (not a Phase 9 blocker).

- [NOTE] stdio MCP servers (including `@modelcontextprotocol/server-sqlite`) run with arbitrary code execution capability when registered. Users should verify the package source before installing.

- [NOTE] Signal files (`.claude/signals/`) are written by PostToolUse hooks but are not consumed automatically. Hermes and content-redteam playbooks must be updated to poll/check these signal files as part of their run logic. This is a playbook-level follow-up, not a blocker for Phase 9.

---

## Next Steps

Phase 9: `harness-architect:phase-validate` agent. Inputs:
1. Hook files at `C:\Vaults\wiki3\.claude\hooks\` — verify structure, exit codes, no secrets.
2. `C:\Vaults\wiki3\.claude\settings.json` — verify hooks section registered correctly.
3. `C:\Vaults\wiki3\.claude\rules\pipeline-review-gate.md` — verify content.
4. Full harness file inventory (agents, skills, playbooks, rules).

MCP action for user: after Phase 9 clears, apply the SQLite MCP `.mcp.json` snippet to project root, then run `claude mcp list` to confirm Connected status.
