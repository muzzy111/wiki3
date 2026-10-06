---
name: route-dispatch
description: Inspects the current task grade and pipeline state in TASKS/STATUS/, selects the correct agent or NATS subject, and dispatches the task to the appropriate next step. Trigger when a graded intake artifact exists and work has not yet been dispatched, or when a step completes and the next step must be queued.
user-invocable: true
allowed_dirs:
  - TASKS/STATUS/
---

# Route Dispatch

## Goal

Read pipeline state and send each task to the right agent at the right time — no missed steps, no double-dispatch.

## Focus

- **State inspection**: read `TASKS/STATUS/{task-id}.yaml` and `TASKS/{task-id}/01-intake.md` to determine the current pipeline position.
- **Grade-aware routing**: S-grade never leaves the main session. M-grade goes to the planner (claude). L-grade goes to hermes for full fan-out.
- **NATS / shared-file dispatch**: for M/L, trigger hermes by writing the dispatch record to `TASKS/{task-id}/` and signaling via the agreed handoff surface.
- **HITL gate check**: before dispatching Step 4 on L-grade, check whether the plan in `03-plan.md` requires HITL approval (SYSTEM/ / LOCK / agents.yaml / vault.db schema / MCP/byok). If it does, call AskUserQuestion before continuing.
- **Status sync**: update `TASKS/STATUS/{task-id}.yaml` at every dispatch boundary.

## Dispatch Decision Table

| Grade | Current step | Next action |
|---|---|---|
| S | 1 (intake) | Main session acts inline; no dispatch. |
| M | 1 (intake) | Dispatch to claude worker with `planner` playbook (merged research+plan). |
| M | 3 (plan done) | Dispatch to implementer (claude or mavis as appropriate). |
| M | 4 (execute done) | Dispatch to mavis for standards review. |
| M | 5 (review approved) | Dispatch to openwork for deliverable; done. |
| L | 1 (intake) | Dispatch to hermes; hermes runs Steps 2–6. |
| Any | HITL gate triggered | AskUserQuestion; wait; resume dispatch on approval. |
| Any | BLOCK ≤ 2 | Loop back to failed step's agent. |
| Any | BLOCK 3rd time | STOP; escalate to user. |

## Workflow

1. **Read state** — open `TASKS/STATUS/{task-id}.yaml`. Identify `grade`, `status`, and `current_step`.

2. **Check HITL conditions** — if grade is L and current_step is transitioning into step 4, read `TASKS/{task-id}/03-plan.md` for HITL trigger keywords (`SYSTEM/`, `SYSTEM/LOCK/`, `SYSTEM/agents.yaml`, `MEMORY/vault.db` schema, `MCP/servers/byok-gateway/`, destructive memory op). If found, call AskUserQuestion with the specific plan excerpt. Do not dispatch until user approves.

3. **Select target** — use the dispatch table above.

4. **Write dispatch trigger** — for M/L grades, write or update `TASKS/{task-id}/01-intake.md` `## Routing` field with the target agent name and step number.

5. **Signal hermes (L-grade)** — hermes monitors for new `01-intake.md` records with grade=L and status=intake. Update `TASKS/STATUS/{task-id}.yaml` to `status: dispatched` to signal hermes.

6. **Signal planner directly (M-grade step 1)** — update status to `status: planning`. Claude worker reads `01-intake.md` via its planner playbook.

7. **Update status** — always write the new `status` and `current_step` to `TASKS/STATUS/{task-id}.yaml` after each dispatch action.

## Output Contract

Updated `TASKS/STATUS/{task-id}.yaml` at every step boundary:

```yaml
task_id: {task-id}
grade: {S|M|L}
status: {intake|dispatched|planning|executing|reviewing|curating|complete|blocked|stopped}
current_step: {1-6}
last_action: {description}
last_updated: YYYY-MM-DD HH:MM
hitl_pending: {false|true}
hitl_reason: {blank or reason string}
```

## Guardrails

- Never dispatch Step 4 on an L-grade SYSTEM-touching plan without HITL approval.
- Never loop back more than 2 times per review gate. Third BLOCK = STOP.
- Never dispatch to an agent whose allowed_dirs do not cover the artifacts the step will write. If mismatch detected, escalate as `[BLOCKING]` in the status file.
- Never skip writing `TASKS/STATUS/{task-id}.yaml` updates — this is the session-recovery anchor.
- S-grade tasks must not be dispatched to hermes or any worker.

## Question Ownership

This skill runs as the main session (D-1 router). AskUserQuestion is permitted for HITL gates only. All other uncertainties go in `TASKS/STATUS/{task-id}.yaml` as `hitl_reason` and are surfaced to the user via AskUserQuestion.
