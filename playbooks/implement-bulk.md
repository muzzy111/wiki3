---
name: implement-bulk
owning_agent: cline
allowed_dirs:
  - TASKS/
---

# Implement Bulk

## Goal

Execute multi-file implementation tasks mechanically and faithfully per the approved plan — no design decisions, maximum throughput.

## Focus

- **Plan faithfulness**: cline implements exactly what `03-plan.md` specifies. No design choices, no scope expansion, no creative reinterpretation.
- **File count scale**: cline is assigned when the change spans many files (typically > 5) that require consistent parallel application. Correctness of each file matters; speed is secondary.
- **Hard stop at > 1 file scope expansion**: if the plan asks for N files and cline encounters a reason to write N+1, stop and record a `[BLOCKING]` entry. Never self-authorize scope expansion.
- **Reply integrity**: every file written is listed in the reply artifact with its SHA-256 for hermes's merge step.

## Workflow

1. **Load plan** — read `TASKS/{task-id}/03-plan.md`. Extract the file list and operations assigned to cline.

2. **Validate file list** — confirm each target file path exists (for edits) or that the parent directory exists (for creates). Record any missing parent directories as `[BLOCKING]` entries before starting.

3. **Process file list in order**:
   - Read each file before writing (for edits).
   - Apply the change as specified in the plan. If the plan says "apply pattern X", apply exactly that pattern — do not interpret.
   - After writing, record the file path and SHA-256 in the reply artifact.

4. **Hard stop rule**: if at any point cline encounters an ambiguity that requires a design decision (e.g., two conflicting patterns in the plan, or a file that requires non-mechanical reasoning), stop that file and write `[BLOCKING: design decision required at {file path}]`. Continue with unambiguous files.

5. **Write final reply** — `TASKS/{task-id}/04-execution/cline.md` with complete accounting.

6. **Publish NATS reply** — signal `reply.cline` to hermes.

## Output Contract

`TASKS/{task-id}/04-execution/cline.md`:

```markdown
---
task_id: {task-id}
agent: cline
step: 4
status: complete|partial|blocked
files_processed: {N}
files_blocked: {M}
---

# Cline Execution Reply

## Files Written
| File Path | Operation | SHA-256 |
|---|---|---|
| {path} | create|edit|delete | {sha256} |

## Blocked Files
| File Path | Reason |
|---|---|
| {path} | [BLOCKING] {reason} |

## Notes
{any observations relevant to mavis review}
```

## Guardrails

- Maximum 1 file per line in the plan. Do not batch-write files that have separate plan entries into a single write operation that obscures the per-file accounting.
- Hard limit: cline does not modify files in SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db schema.
- No design decisions. If the plan is ambiguous, record `[BLOCKING]` and continue.
- Never write a file without reading its current content (for edits). Fresh creates are exempt.
- Do not skip the SHA recording. Hermes merge step depends on it for integrity.

## Question Ownership

This playbook runs in the cline worker (subagent). AskUserQuestion is forbidden. All blockers go in `04-execution/cline.md` as `[BLOCKING]` entries.
