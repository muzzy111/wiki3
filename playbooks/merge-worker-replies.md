---
name: merge-worker-replies
owning_agent: hermes
allowed_dirs:
  - TASKS/
---

# Merge Worker Replies

## Goal

Collect per-worker artifact files for a pipeline step and synthesize them into a single authoritative merged document without losing any worker's signal.

## Focus

- **Completeness check**: verify that all expected worker reply files exist before merging. Do not merge a partial set silently.
- **Synthesis quality**: the merged output is a narrative synthesis, not a concatenation. Contradictions between workers are surfaced explicitly.
- **SHA recording**: record the SHA-256 of the merged artifact in `MEMORY/vault.db task_progress` on completion.
- **Gap annotation**: if a worker's reply is missing due to timeout or role-sibling swap, note the gap in the merged document so downstream agents know the provenance.

## Workflow

1. **Enumerate expected workers** — from `TASKS/{task-id}/04-execution/_dispatch.log`, collect the set of workers dispatched for this step.

2. **Wait / poll** — confirm all reply files exist at `TASKS/{task-id}/04-execution/{agent}.md`. If any are absent:
   - Check `TASKS/STATUS/{task-id}.yaml` for `status: timeout_swap` on that worker.
   - If timeout swap recorded: proceed without that worker's file; annotate gap.
   - If file simply not yet written: wait up to timeout limit.

3. **Load all reply files** — read each `TASKS/{task-id}/04-execution/{agent}.md`.

4. **Synthesize**:
   - Start with the highest-confidence worker's output as the structural base.
   - For each other worker, identify: (a) new information not in the base, (b) contradictions with the base.
   - Weave new information in. Surface contradictions as `> [CONFLICT: agent-A says X; agent-B says Y]` blockquotes.
   - Annotate gaps: `> [GAP: {agent} reply missing — timeout/swap at step {N}]`.

5. **Write merged artifact** — write to `TASKS/{task-id}/04-execution/_merged.md` (for Step 4) or `TASKS/{task-id}/02-research.md` (for Step 2 research).

6. **Record SHA** — compute SHA-256 of the merged file. Insert or upsert row in `MEMORY/vault.db`:
   ```sql
   INSERT OR REPLACE INTO task_progress
     (task_id, step_n, artifact_path, artifact_sha256, completed_at)
   VALUES (?, ?, ?, ?, ?);
   ```

7. **Update status** — set `TASKS/STATUS/{task-id}.yaml` `status: merged` and `current_step: {N}`.

## Output Contract

`TASKS/{task-id}/04-execution/_merged.md` (Step 4) or `TASKS/{task-id}/02-research.md` (Step 2):

```markdown
---
task_id: {task-id}
step: {N}
workers: [list of worker names whose files were included]
gaps: [list of missing workers or "none"]
conflicts: [count of conflict annotations or 0]
merged_at: YYYY-MM-DD HH:MM
---

# Merged: {step name}

## Summary
{3–5 sentence synthesis}

## {Worker-1 section heading}
{content from worker 1}

## {Worker-2 section heading}
{content from worker 2}

## Conflicts
{conflict blockquotes or "none"}

## Gaps
{gap annotations or "none"}
```

## Guardrails

- Never merge a set where more than half the expected workers are missing without an explicit `[BLOCKING]` annotation in the status file.
- Never discard a conflict silently. Every contradiction must appear as a `[CONFLICT:]` blockquote.
- Never write the merged artifact until the SHA is computed and recorded in vault.db — the DB write is the integrity anchor.
- Concatenation without synthesis is not acceptable. The merged document must add organizational value beyond listing raw worker outputs.

## Question Ownership

This playbook runs in the hermes worker (subagent). AskUserQuestion is forbidden. Record all escalations in `TASKS/STATUS/{task-id}.yaml` under `escalations:` key.
