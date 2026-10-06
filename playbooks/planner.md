---
name: planner
owning_agent: claude
allowed_dirs:
  - TASKS/
---

# Planner

## Goal

Produce both `02-research.md` AND `03-plan.md` in a single invocation for M-grade tasks — the merged research+plan contract.

## CRITICAL CONTRACT — M-GRADE ONLY

**This playbook applies to M-grade tasks only.**

- Write BOTH `TASKS/{task-id}/02-research.md` AND `TASKS/{task-id}/03-plan.md` in **one invocation**.
- Do NOT write only one file and return. Do NOT call claude twice (once for research, once for plan).
- The Advisor Dim 12 will BLOCK a split invocation. If you cannot complete both files in one run, write what you have and annotate with `# TODO:` markers; do not exit with only one file.
- L-grade tasks use the full six-step pipeline. This playbook does NOT apply to L-grade.

## Focus

- **Research synthesis (02-research.md)**: gather context from vault memory, existing files, and the intake artifact. Synthesize enough context to support the plan decisions. No live web search in this playbook (that is grok's role on L-grade). Use `vault-memory-retrieve` pattern: read `MEMORY/Index.md`, read relevant `MEMORY/Karpathy/wiki/` notes, read target file paths listed in intake.
- **Plan authoring (03-plan.md)**: produce a concrete, executable plan with numbered steps, named agents for each step, file paths to be written, and success criteria.
- **Scope discipline**: M-grade means 5–15 files changed, 1–2 design decisions, no SYSTEM-touching requiring HITL. Reject scope creep silently — note it in the plan's escalations instead.

## Workflow

1. **Load intake** — read `TASKS/{task-id}/01-intake.md`. Extract: normalized goal, grade (must be M), target paths, constraints.

2. **Assert M-grade** — if grade is not M, stop and write `[BLOCKING] Planner received non-M-grade task. Grade={actual grade}. Route to correct pipeline.` in `TASKS/STATUS/{task-id}.yaml`.

3. **Research phase** — collect context:
   - Read `MEMORY/Index.md` for recent task history and Karpathy additions.
   - Read each target file path listed in intake (if files already exist).
   - Read relevant `MEMORY/Karpathy/wiki/` pages that match the task domain.
   - Identify: what already exists, what must change, what constraints apply.

4. **Write `TASKS/{task-id}/02-research.md`** — see output contract below. Write this file NOW, before moving to planning.

5. **Planning phase** — based on the research:
   - List every file that will be created or modified.
   - For each file, state: agent responsible, write operation (create/edit/delete), content summary.
   - Sequence the steps (which must be serial, which can be parallel).
   - Identify success criteria for each step.
   - Note any HITL triggers (SYSTEM-touch, vault.db schema, BYOK).

6. **Write `TASKS/{task-id}/03-plan.md`** — see output contract below. This file must be written in the same invocation as step 4.

7. **Update status** — write `TASKS/STATUS/{task-id}.yaml` `status: planned`, `current_step: 3`.

## Output Contract

`TASKS/{task-id}/02-research.md`:

```markdown
---
task_id: {task-id}
grade: M
source: planner (merged invocation)
---

# Research: {goal}

## Context
{what already exists relevant to this task}

## Target File Inventory
{list of files to be touched and their current state}

## Constraints
{user-stated constraints + vault rules applicable to this task}

## Karpathy References
{relevant wiki notes cited, or "none"}
```

`TASKS/{task-id}/03-plan.md`:

```markdown
---
task_id: {task-id}
grade: M
hitl_required: {true|false}
hitl_reason: {blank or reason}
---

# Plan: {goal}

## Steps

### Step 1 — {step name}
- Agent: {agent name}
- Files: {list}
- Operation: {create|edit|delete}
- Success criteria: {how to verify done}

### Step 2 — ...

## Escalations
{HITL triggers or "none"}

## Rollback Notes
{how to undo if something goes wrong}
```

## Guardrails

- Both files must be written in one invocation. Do not exit with only one.
- Do not invoke live web search. Vault context only.
- Do not include SYSTEM-touching steps without marking `hitl_required: true`.
- Do not plan more than 15 files changed. If scope exceeds M-grade, annotate `[NOTE: Scope may require L-grade upgrade]` and continue with the M plan bounded at 15 files.
- Do not duplicate the pipeline orchestration protocol (NATS subjects, review gates) in the plan. The plan describes what to do; routing is hermes's responsibility.

## Question Ownership

This playbook runs in the claude worker (subagent). AskUserQuestion is forbidden. All escalations go in `03-plan.md` under `## Escalations` and in `TASKS/STATUS/{task-id}.yaml`.
