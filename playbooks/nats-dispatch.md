---
name: nats-dispatch
owning_agent: hermes
allowed_dirs:
  - TASKS/
  - TASKS/STATUS/
---

# NATS Dispatch

## Goal

Publish work items to the correct NATS subjects and confirm delivery receipts — hermes is the sole NATS publisher for the vault pipeline.

## Focus

- **Subject selection**: map each agent to its canonical NATS subject (`work.{agent}` for direct sends; `broadcast.coders`, `broadcast.researchers`, `broadcast.tools` for role-axis fan-out).
- **Message contract**: every NATS publish includes the `task_id`, `step`, `artifact_path`, and `reply_subject` so workers can complete their reply loop.
- **Timeout tracking**: start a per-worker timer at publish time. Default timeouts: researchers 90s, planners 60s, coders 120s.
- **Retry logic**: on timeout, retry the same worker once. After 2nd timeout, apply the role-sibling swap rule and log to `TASKS/{task-id}/04-execution/_dispatch.log`.
- **Broadcast fan-out**: for Step 4, determine which role axes are needed per the plan, then publish to each broadcast subject once.

## NATS Subject Map

| Agent | Direct subject | Broadcast subject |
|---|---|---|
| hermes | `work.hermes` | — |
| claude | `work.claude` | `broadcast.coders` |
| cline | `work.cline` | `broadcast.coders` |
| opencode | `work.opencode` | `broadcast.coders` |
| mavis | `work.mavis` | `broadcast.coders` |
| antigravity | `work.antigravity` | `broadcast.coders` |
| grok | `work.grok` | `broadcast.researchers` |
| openwork | `work.openwork` | `broadcast.researchers` |
| copilot | `work.copilot` | `broadcast.tools` |
| ollama | `work.ollama` | `broadcast.tools` |
| research-redteam | `work.research-redteam` | — (ephemeral, no broadcast) |
| plan-redteam | `work.plan-redteam` | — (ephemeral, no broadcast) |
| content-redteam | `work.content-redteam` | — (ephemeral, no broadcast) |

## Workflow

1. **Read plan** — open `TASKS/{task-id}/03-plan.md`. Identify which agents are activated for each step in this task.

2. **Build dispatch list** — for each activated agent, determine whether to use direct subject or broadcast. Prefer direct when only one agent on that role axis is needed; use broadcast when all agents on the axis should receive the work.

3. **Compose message** — for each target:
   ```
   {
     "task_id": "{task-id}",
     "step": {N},
     "artifact_path": "TASKS/{task-id}/{artifact}",
     "reply_subject": "reply.{agent}",
     "timeout_sec": {60|90|120}
   }
   ```

4. **Publish** — send to the selected NATS subject. Record publish timestamp in `_dispatch.log`.

5. **Wait for reply** — monitor `reply.{agent}` for confirmation. On receipt, record completion timestamp.

6. **Timeout handling**:
   - On first timeout: republish to same agent. Increment retry counter.
   - On second timeout: log swap decision to `_dispatch.log`. Apply role-sibling map:
     - `claude` ↔ `cline` (coders)
     - `grok` ↔ `openwork` (researchers)
     - `copilot` ↔ `ollama` (tools, last resort)
   - After 2nd timeout on sibling too: STOP that worker's task branch; escalate.

7. **Update status** — write completion/failure to `TASKS/STATUS/{task-id}.yaml` after all dispatches for a step resolve.

## Output Contract

`TASKS/{task-id}/04-execution/_dispatch.log`:

```
{ISO timestamp} PUBLISH work.{agent} step={N} task={task-id}
{ISO timestamp} REPLY   work.{agent} step={N} task={task-id} status=ok|timeout
{ISO timestamp} RETRY   work.{agent} step={N} task={task-id} attempt=2
{ISO timestamp} SWAP    work.{agent} → work.{sibling} step={N} task={task-id} reason=timeout_x2
```

## Guardrails

- Hermes is the only agent that publishes to NATS subjects. No worker self-dispatches.
- Never publish to a broadcast subject for a reviewer agent (research-redteam, plan-redteam, content-redteam). They receive only direct `work.*` messages.
- Never exceed max_retries = 2 without escalating.
- Log every publish and reply in `_dispatch.log` — this is the audit trail for session recovery.
- Never publish Step 4 until the HITL gate (if triggered) has been cleared by the main session.

## Question Ownership

This playbook runs in the hermes worker (subagent). AskUserQuestion is forbidden. Escalations go in `TASKS/{task-id}/04-execution/_dispatch.log` and `TASKS/STATUS/{task-id}.yaml`.
