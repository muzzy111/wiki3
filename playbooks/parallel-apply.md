---
name: parallel-apply
owning_agent: cline
allowed_dirs:
  - TASKS/
---

# Parallel Apply

## Goal

Apply a patch or transformation pattern concurrently across many files, ensuring consistency and recording every change for hermes's merge and mavis's review.

## Focus

- **Pattern uniformity**: a parallel apply task involves applying the same (or a templated) transformation to many files. Every file must receive the same treatment as specified — no per-file creative variation.
- **Concurrency accounting**: even if cline processes files sequentially (tool limitation), the output record must show each file's before/after state clearly so hermes can confirm uniformity.
- **Idempotency**: applying the patch twice must produce the same result as applying it once. Verify this property when the plan specifies it.
- **Rollback readiness**: record enough pre-change state in the reply artifact that a rollback can be executed without the original files.

## Workflow

1. **Load plan** — read the parallel-apply specification in `03-plan.md`. Identify: the pattern/patch to apply, the file glob or explicit file list, and any exclusion rules.

2. **Enumerate target files** — expand the glob or file list. Record count. If count > 50 files, note this in the reply artifact as a large-batch flag.

3. **For each target file**:
   - Read current content.
   - Record a before-snippet (first 20 lines or the specific lines that will change) in the reply artifact.
   - Apply the transformation.
   - Write the updated file.
   - Record the after-snippet and SHA-256 in the reply artifact.

4. **Consistency check** — after processing all files, spot-check 3 random files (or all files if count ≤ 10) to verify the pattern was applied uniformly. Note result in reply.

5. **Write final reply** — `TASKS/{task-id}/04-execution/cline.md` (append to or replace per task context).

6. **Publish NATS reply** — signal `reply.cline` to hermes.

## Output Contract

`TASKS/{task-id}/04-execution/cline.md`:

```markdown
---
task_id: {task-id}
agent: cline
playbook: parallel-apply
step: 4
files_targeted: {N}
files_succeeded: {M}
files_failed: {K}
---

# Parallel Apply Reply

## Pattern Applied
{exact transformation specification from plan}

## File Changes
| File | Before SHA | After SHA | Status |
|---|---|---|---|
| {path} | {sha} | {sha} | ok|skipped|failed |

## Consistency Spot-Check
{files checked and result: uniform|deviation-detected}

## Deviations
{list of files where pattern could not be applied uniformly, with reason}
```

## Guardrails

- Do not vary the pattern per file. Parallel apply is mechanical, not interpretive.
- Do not apply to files outside the specified glob/list. No scope expansion.
- If a file cannot receive the pattern (e.g., binary file, locked file, unexpected format), record it as `skipped` with reason. Never silently ignore.
- Hard stop: do not apply to SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db without explicit HITL approval recorded in the plan.
- The before-snippet recording is mandatory. It enables rollback without external tooling.

## Question Ownership

This playbook runs in the cline worker (subagent). AskUserQuestion is forbidden. All failures and deviations are recorded in the reply artifact.
