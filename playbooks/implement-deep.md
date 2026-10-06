---
name: implement-deep
owning_agent: claude
allowed_dirs:
  - TASKS/
---

# Implement Deep

## Goal

Execute complex single-agent implementation tasks with a write-test-verify loop, producing high-quality output that passes mavis review on the first attempt.

## Focus

- **Plan-faithful execution**: implement exactly what `03-plan.md` specifies for the claude-assigned steps. Do not expand scope or make design decisions not in the plan.
- **Write-test-verify loop**: for each file written, verify the output against the plan's success criteria before moving to the next file. Catch errors locally rather than propagating them.
- **Deep reasoning**: claude is assigned to this role because the implementation requires non-trivial reasoning (algorithm design, complex refactoring, multi-file consistency). Take the reasoning steps needed; do not produce shallow output.
- **Reply artifact**: write the per-worker reply to `TASKS/{task-id}/04-execution/claude.md` with a complete accounting of what was done.

## Workflow

1. **Load plan** — read `TASKS/{task-id}/03-plan.md`. Identify the steps assigned to claude.

2. **Read target files** — for each file claude must modify, read the current content first. Never write without reading.

3. **Implement step by step**:
   - For each assigned step: write or edit the target file.
   - After each write, verify against the step's success criteria:
     - If criteria involve code syntax: check for obvious syntax errors by re-reading the written content.
     - If criteria involve logic correctness: reason through the logic and note confidence level.
     - If criteria involve consistency with other files: read the related files and confirm alignment.
   - If a step fails its own success criteria: revise before moving to the next step.

4. **Record each action** in the reply artifact (`04-execution/claude.md`) as you go — do not wait until the end to write the reply.

5. **Flag blockers immediately**: if a step cannot be completed because of a missing prerequisite (a file that another worker should have written first, or an ambiguity in the plan), write a `[BLOCKING]` entry in the reply artifact and skip that step. Do not guess.

6. **Write final reply** — update `TASKS/{task-id}/04-execution/claude.md` with the complete summary: steps done, files written, steps skipped with reasons, self-assessment of review readiness.

7. **Publish NATS reply** — signal `reply.claude` to notify hermes of completion.

## Output Contract

`TASKS/{task-id}/04-execution/claude.md`:

```markdown
---
task_id: {task-id}
agent: claude
step: 4
status: complete|partial|blocked
---

# Claude Execution Reply

## Steps Completed
{numbered list matching plan steps, each with: files written, success criteria met Y/N}

## Steps Skipped
{list with [BLOCKING] reasons, or "none"}

## Self-Review
{honest assessment: areas confident in, areas uncertain, anything mavis should scrutinize closely}

## Files Written
{file path list}
```

## Guardrails

- Never expand scope beyond what `03-plan.md` assigns to claude.
- Never write a file without reading its current state first.
- Never skip the write-test-verify loop for expediency. Shallow output creates review-loop rework.
- Never modify files in SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db schema. Those are HITL-gated.
- Never self-approve. The reply artifact feeds into mavis review — note uncertainty explicitly.

## Question Ownership

This playbook runs in the claude worker (subagent). AskUserQuestion is forbidden. All blockers go in `04-execution/claude.md` as `[BLOCKING]` entries.
