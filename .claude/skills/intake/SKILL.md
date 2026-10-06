---
name: intake
description: Receives a user's raw task request, normalizes it into a structured intake record, classifies complexity (S/M/L), and routes it to the hermes orchestrator via NATS or handles S-grade tasks inline. Trigger on any new task request, /intake slash command, or when the user states a goal that requires vault work.
user-invocable: true
allowed_dirs:
  - TASKS/
  - TASKS/STATUS/
---

# Intake

## Goal

Normalize every user request into a graded intake artifact and route it to the right execution path without losing intent.

## Focus

- **Intent normalization**: restate the user's goal in a single sentence that an agent with no context can act on. Remove ambiguity; preserve scope constraints.
- **Complexity grading**: classify S / M / L using the criteria below. Default to M on ambiguity; default to L when cross-role fan-out or SYSTEM-touching is detected.
- **Artifact creation**: reserve `TASKS/{task-id}/` and write `01-intake.md` with all required fields before any dispatch.
- **S-grade inline path**: for S-grade tasks, the main session acts directly without NATS dispatch. Write the output files, tag commit `[S-grade]`, done.
- **M/L dispatch path**: after writing `01-intake.md`, signal hermes via the established NATS or shared-file handoff to begin the pipeline.

## Complexity Grading Rules

| Grade | Criteria |
|---|---|
| S | Files changed ≤ 3; no SYSTEM/LOCK/agents.yaml/vault.db schema touch; no new memory nodes; no user-facing content; no redteam needed. Examples: typo in a role AGENT.md, tiny MEMORY/Index.md edit, single Karpathy paragraph correction, MONITOR status tweak. |
| M | Files 5–15; 1–2 design decisions; no SYSTEM-touch requiring user approval; content review needed but no full execution fan-out. Triggers merged research+plan in single planner invocation. |
| L | New feature, new agent in agents.yaml, cross-role fan-out, SYSTEM-touching change, new Karpathy wiki entry, policy/rule change. Full six-step pipeline. |

Default on ambiguity: **M**. Very ambiguous: **L**. Downgrades require explicit user instruction.

## Workflow

1. **Receive request** — read the user's raw message. Run the Phase 2 `intent-clarifier` gate if the request is ambiguous or multi-goal. If the intent-clarifier raises HITL, call AskUserQuestion and wait before proceeding.

2. **Normalize intent** — write a one-sentence task goal. Identify: target files or paths (if stated), expected output type (code / doc / memory update / config), and any constraints the user stated.

3. **Generate task-id** — format: `YYYY-MM-DD-NNN` (e.g., `2026-10-06-001`). Increment `NNN` by scanning `TASKS/STATUS/`. Reserve `TASKS/{task-id}/` directory.

4. **Grade complexity** — apply the grading table. Record grade and reason.

5. **Write `TASKS/{task-id}/01-intake.md`** — required fields (see Output Contract).

6. **Write `TASKS/STATUS/{task-id}.yaml`** — initial status record.

7. **Route**:
   - **S-grade**: execute inline. Write output. Tag commit `[S-grade]`. Done.
   - **M/L-grade**: hand off to hermes. Write intake artifact first, then signal dispatch.

## Output Contract

`TASKS/{task-id}/01-intake.md` must contain:

```markdown
---
task_id: {task-id}
grade: S|M|L
created: YYYY-MM-DD HH:MM
status: intake
---

# Task: {one-sentence normalized goal}

## Original Request
{user's raw text, verbatim}

## Normalized Goal
{one sentence}

## Grade
{S|M|L} — {reason}

## Scope
- Target paths: {list or "TBD"}
- Output type: {code|doc|memory-update|config|mixed}
- Constraints: {any user-stated constraints or "none"}

## Routing
{S: inline / M: planner+implementer / L: full pipeline via hermes}
```

`TASKS/STATUS/{task-id}.yaml`:

```yaml
task_id: {task-id}
grade: {S|M|L}
status: intake
current_step: 1
started: YYYY-MM-DD HH:MM
```

## Guardrails

- Never skip the intent-clarifier gate for ambiguous requests. An unclear goal creates downstream rework.
- Never dispatch to hermes until `01-intake.md` is fully written and validated.
- Never downgrade a grade without explicit user instruction.
- S-grade tasks must not touch SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db schema. If the user's S-grade request touches any of these, upgrade to M and note the forced upgrade in intake.
- Never reuse a task-id from a prior request. Each new user request gets a new id.

## Question Ownership

This skill runs as the main session (D-1 router). AskUserQuestion is permitted here — it is the designated HITL surface for ambiguous intake. All other escalations go in the `Escalations` section of `01-intake.md`.
