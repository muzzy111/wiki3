# Pipeline Review Gate

This rule governs the review ladder in the LOOP Agent OS multi-agent pipeline.
It defines BLOCK handling, HITL gate positions, and reviewer write-scope enforcement.

## Review Ladder

The pipeline includes three adversarial review gates, each with an assigned redteam agent:

| Step | Input file | Reviewer | Output file |
|---|---|---|---|
| Step 2 — Research | `TASKS/*/02-research.md` | `research-redteam` | `TASKS/*/02-research-review.md` |
| Step 3 — Plan | `TASKS/*/03-plan.md` | `plan-redteam` | `TASKS/*/03-plan-review.md` |
| Step 6 — Content | `TASKS/*/06-deliverable.md` | `content-redteam` | `TASKS/*/06-content-review.md` |

Each reviewer returns a verdict: `APPROVE`, `APPROVE-WITH-NOTES`, or `BLOCK`.

## BLOCK Handling

- **First BLOCK**: hermes surfaces the finding to the main session. The producing agent revises and resubmits.
- **Second BLOCK on the same step**: HITL gate activates. Hermes halts the pipeline and asks the user for explicit direction before proceeding. Do not continue automatically after a second BLOCK.

## HITL Gate Positions

The following conditions pause the pipeline and require explicit user approval:

1. **Pre-Step-4**: The pipeline plan touches any protected path or operation:
   - `SYSTEM/`, `SYSTEM/LOCK/`, `SYSTEM/agents.yaml`
   - `MEMORY/vault.db` schema change (DDL)
   - `MCP/servers/byok-gateway/`
   - Destructive memory operations (bulk delete/overwrite in `MEMORY/`)
2. **Review ladder 2nd BLOCK**: As described above.
3. **Session-recovery SHA conflict**: When `resume-detect` finds a SHA mismatch, the user chooses: resume, restart, or skip.

The `pre-tool-protected-paths` and `pre-tool-vault-db-ddl` PreToolUse hooks enforce positions 1 at the tool level. Positions 2 and 3 are orchestrator-level responsibilities (hermes / main session).

## Reviewer Write-Scope Enforcement

Each redteam reviewer may write ONLY its single designated output file. This is enforced by the `pre-tool-reviewer-ownership` PreToolUse hook at the Claude Code tool level.

| Agent | Allowed write path |
|---|---|
| `research-redteam` | `TASKS/*/02-research-review.md` |
| `plan-redteam` | `TASKS/*/03-plan-review.md` |
| `content-redteam` | `TASKS/*/06-content-review.md` |

Any write attempt outside this scope is blocked with exit 2 (OWNERSHIP_GUARD error).

### Identity source

The hook uses `agent_type` from the PreToolUse stdin JSON. This field is injected by the Claude Code runtime for subagent calls only and cannot be forged via prompt injection. When `agent_type` is absent, the call is from the main session (orchestrator), which is always permitted to proceed.

### openwork read access to MEMORY/

`vault-memory-retrieve` (openwork) has read access to `MEMORY/` for SELECT queries to `vault.db` and Karpathy wiki reads. The ownership guard applies only to Write and Edit tool calls — read operations are not restricted by these hooks. Hermes retains exclusive write rights to `MEMORY/vault.db`, `MEMORY/Index.md`, and `MONITOR/`.

## Signal Files

PostToolUse hooks write signal files to `.claude/signals/` for async coordination:

| Signal file | Trigger | Consumer |
|---|---|---|
| `vault-db-dml.signal` | sqlite3 DML on vault.db | hermes (curate-memory-index) |
| `karpathy-write.signal` | Write to `MEMORY/Karpathy/` | content-redteam (review gate) |

Hermes and content-redteam should check these files at the start of relevant playbook runs.
