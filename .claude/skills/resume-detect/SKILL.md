---
name: resume-detect
description: Detects interrupted or in-progress tasks from TASKS/STATUS/ and vault.db task_progress, presents the user with a resume/restart choice, and restores the correct pipeline entry point. Trigger at session start when open tasks exist, on /resume-detect, or when the user says "resume", "continue", or "where were we".
user-invocable: true
allowed_dirs:
  - TASKS/STATUS/
---

# Resume Detect

## Goal

At session start or on user request, identify any interrupted task and offer a clear resume-or-restart decision — never silently drop work in progress.

## Focus

- **Status scan**: read all `TASKS/STATUS/*.yaml` files to find tasks with status not in `{complete, stopped}`.
- **Integrity check**: for each open task, cross-reference the filesystem artifacts against `MEMORY/vault.db task_progress` SHA-256 records to detect corruption or conflict.
- **Resume surface**: present the user with a human-readable summary of the interrupted task, the last completed step, and the next pending step.
- **Entry-point restore**: on resume approval, set the pipeline cursor to the correct step and invoke route-dispatch.
- **Restart path**: on restart choice, archive the old task directory to `ARCHIVE/tasks/{task-id}/` and create a fresh intake.

## Workflow

1. **Scan `TASKS/STATUS/`** — list all `.yaml` files. Load each and filter for `status NOT IN (complete, stopped)`. If none found, output "No interrupted tasks found." and exit.

2. **For each open task, verify integrity**:
   - Read each artifact referenced by `current_step` in `TASKS/{task-id}/`.
   - Query `MEMORY/vault.db` for `SELECT artifact_path, sha256 FROM task_progress WHERE task_id = ?`.
   - Compute SHA-256 of the artifact on disk.
   - If SHA mismatch: mark task as `status: conflict`. Record mismatch details in status file.
   - If artifact missing on disk but DB row exists: mark `status: conflict`.
   - If consistent: mark integrity as `ok`.

3. **Present summary to user** — for each open task, display:
   - Task ID, grade, normalized goal.
   - Last completed step (N) and next pending step (N+1).
   - Integrity: `ok` or `conflict` with conflict details.
   - Options: `[R] Resume from step N+1` / `[X] Restart (archive and re-intake)` / `[S] Skip (mark stopped)`.

4. **Wait for user choice** — call AskUserQuestion with the summary and options list. This is a mandatory HITL pause.

5. **On Resume**:
   - Update `TASKS/STATUS/{task-id}.yaml` to `status: resuming`.
   - If conflict was detected: AskUserQuestion again with the specific SHA mismatch details before resuming.
   - Call the route-dispatch skill with the task-id and entry step = `current_step + 1` (or `current_step` if the step was partially done).

6. **On Restart**:
   - Move `TASKS/{task-id}/` to `ARCHIVE/tasks/{task-id}/`.
   - Update `TASKS/STATUS/{task-id}.yaml` to `status: archived`.
   - Create fresh intake: guide user through the intake skill.

7. **On Skip**:
   - Set `status: stopped` in `TASKS/STATUS/{task-id}.yaml`.
   - Log stop reason as `user_skip_at_resume`.

## Output Contract

Updated `TASKS/STATUS/{task-id}.yaml` after each action:

```yaml
task_id: {task-id}
grade: {S|M|L}
status: {resuming|conflict|archived|stopped}
current_step: {N}
integrity: {ok|conflict}
conflict_details: {blank or "artifact X: disk sha=Y db sha=Z"}
resume_decision: {resume|restart|skip}
resume_at: YYYY-MM-DD HH:MM
```

User-facing summary format (presented via AskUserQuestion):

```
Open task found: {task-id}
Goal: {normalized goal}
Grade: {S|M|L}
Last step completed: {N} — {step name}
Next step: {N+1} — {step name}
Integrity: {ok / CONFLICT — see details}

Choose: R = Resume | X = Restart | S = Skip
```

## Guardrails

- Never resume a conflict-status task without a second HITL confirmation showing the specific conflict details.
- Never silently discard in-progress work. Always present the user with a choice.
- Never create a new task-id for a resumed task. The original task-id must be preserved for vault.db integrity.
- The SHA conflict check is mandatory — do not skip it even if it requires a DB query.
- On conflict, never auto-resolve in favor of either filesystem or DB without user confirmation.

## Question Ownership

This skill runs as the main session (D-1 router). AskUserQuestion is permitted — this skill contains two mandatory HITL pauses (resume choice and conflict confirmation). These are the only AskUserQuestion calls in this skill.
