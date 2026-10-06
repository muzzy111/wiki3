---
name: curate-memory-index
owning_agent: hermes
allowed_dirs:
  - MEMORY/
  - MONITOR/
---

# Curate Memory Index

## Goal

After a task completes, update `MEMORY/vault.db`, regenerate `MEMORY/Index.md` from the DB, and sync `MONITOR/Agents.md` — keeping the vault's shared memory current and under size budget.

## Focus

- **vault.db row management**: upsert task completion rows by composite key `(task_id, step_n, artifact_sha256)`. All writes are idempotent; no destructive deletes without HITL.
- **Index regeneration**: `MEMORY/Index.md` is always derived from vault.db. Never hand-edit it.
- **MONITOR sync**: `MONITOR/Agents.md` shows current agent status. Keep it under 10KB. Migrate overflow to `MONITOR/history/{yyyy-mm}.md`.
- **Schema protection**: DDL changes to vault.db require HITL — hermes may only perform DML (INSERT / UPDATE / SELECT).

## Workflow

1. **Verify Step 5 approval** — check `TASKS/{task-id}/05-review.md` for `APPROVE` verdict. Do not proceed if status is BLOCK or absent.

2. **Upsert task rows** — for each step artifact from the completed task, upsert into `task_progress`:
   ```sql
   INSERT OR REPLACE INTO task_progress
     (task_id, step_n, artifact_path, artifact_sha256, agent_name, completed_at, status)
   VALUES (?, ?, ?, ?, ?, ?, 'complete');
   ```

3. **Upsert task summary** — upsert into the `tasks` table (if schema has one; fallback: upsert a summary row into `task_progress` with `step_n = 0`):
   ```sql
   INSERT OR REPLACE INTO tasks
     (task_id, grade, goal, status, completed_at)
   VALUES (?, ?, ?, 'complete', ?);
   ```

4. **Regenerate `MEMORY/Index.md`**:
   - Query vault.db for the last 50 completed tasks.
   - Query for active agents and their last-seen timestamp.
   - Write `MEMORY/Index.md` from the query results. Format: date-descending task list + agent roster + recent Karpathy additions.

5. **Update `MONITOR/Agents.md`**:
   - Append the task completion entry.
   - Check file size. If > 10KB: move the oldest N entries to `MONITOR/history/{yyyy-mm}.md` (append-only) until `Agents.md` is under budget.

6. **Mark task complete** — set `TASKS/STATUS/{task-id}.yaml` `status: complete`.

## Output Contract

`MEMORY/Index.md` structure:

```markdown
# MEMORY Index

_Regenerated: YYYY-MM-DD HH:MM from vault.db_

## Recent Tasks (last 50)

| Date | Task ID | Grade | Goal |
|---|---|---|---|
| ... | ... | ... | ... |

## Agent Roster

| Agent | Last Seen | Status |
|---|---|---|
| ... | ... | ... |

## Recent Karpathy Additions

- [[MEMORY/Karpathy/wiki/...]] — YYYY-MM-DD
```

`MONITOR/Agents.md` append format:

```
{ISO timestamp} | {task-id} | {grade} | {goal excerpt} | COMPLETE
```

## Guardrails

- DDL changes to vault.db are HITL-gated. Hermes only runs DML.
- `MEMORY/Index.md` must always be derived from vault.db, never manually edited.
- `MONITOR/Agents.md` must stay under 10KB. Overflow to `MONITOR/history/` is mandatory, not optional.
- Do not curate memory if `05-review.md` does not contain an `APPROVE` verdict.
- Idempotency is required: running curate-memory-index twice on the same task-id must produce the same vault.db state.

## Question Ownership

This playbook runs in the hermes worker (subagent). AskUserQuestion is forbidden. DDL change requests must be recorded as `[BLOCKING]` in `TASKS/STATUS/{task-id}.yaml` for main-session HITL handling.
