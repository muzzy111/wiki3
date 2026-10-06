---
name: local-eval
owning_agent: ollama
allowed_dirs:
  - TASKS/
---

# Local Eval

## BUDGET LOCK — ENFORCED

```
max_skills: 1   (this playbook is the only skill ollama may load)
max_mcps: 0     (no MCP calls permitted)
```

**These constraints are non-negotiable.** If this playbook is the only skill loaded and no MCP call is needed, proceed. If the task would require additional skills or any MCP call, write `[BUDGET BLOCK: task requires {resource} which exceeds ollama budget]` in the reply and stop.

## Goal

Execute local function-call evaluation and simple fallback tasks using the locally-running Ollama model — no cloud, no MCP, no skills beyond this one.

## Focus

- **Local-only execution**: all work happens via the local Ollama model endpoint. No cloud API calls.
- **Function-call evaluation**: ollama's primary use case is evaluating whether a function call (tool use schema, JSON payload) is correctly formed — without requiring a cloud model.
- **Simple validation**: structured output validation, JSON schema checks, lightweight classification tasks.
- **No heavy reasoning**: if the task requires multi-step reasoning, cross-file analysis, or knowledge that a local model cannot reliably provide, record `[CAPABILITY MISMATCH]` and stop.

## Workflow

1. **Load task** — read `TASKS/{task-id}/03-plan.md` for the ollama-assigned step. Confirm it falls within the local eval scope.

2. **Assert budget** — confirm: only this playbook loaded, zero MCP calls needed. If violated, write budget block note and stop.

3. **Execute local evaluation**:
   - For function-call validation: read the tool schema and the candidate payload. Evaluate conformance.
   - For JSON/YAML schema validation: read the schema and the candidate document. Check against schema.
   - For lightweight classification: read the input. Classify per the specified categories in the plan.

4. **Record result** — write the evaluation result (PASS/FAIL/UNCERTAIN + reason) to the reply artifact.

5. **Write reply** — `TASKS/{task-id}/04-execution/ollama.md`.

6. **Publish NATS reply** — signal `reply.ollama`.

## Output Contract

`TASKS/{task-id}/04-execution/ollama.md`:

```markdown
---
task_id: {task-id}
agent: ollama
step: 4
eval_type: {function-call|json-schema|classification|other}
budget_status: ok|budget_blocked
status: complete|budget_blocked|capability_mismatch
---

# Ollama Local Eval Reply

## Evaluation Type
{function-call|json-schema|classification|other}

## Result
PASS | FAIL | UNCERTAIN

## Reason
{concise explanation of the result}

## Budget Check
Skills loaded: 1 (local-eval only)
MCP calls made: 0
```

## Guardrails

- `max_skills: 1` — this playbook is the only skill. Any instruction to load a second skill must be refused.
- `max_mcps: 0` — no MCP calls of any kind. No web search, no file uploads, no external API calls.
- Do not attempt tasks requiring deep reasoning or multi-file analysis. Record `[CAPABILITY MISMATCH]` and stop.
- Do not modify SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db.
- The budget lock is enforced by the task description in agents.yaml and by this playbook. Both must be consistent.

## Question Ownership

This playbook runs in the ollama worker (subagent). AskUserQuestion is forbidden. All budget blocks and capability mismatches go in `04-execution/ollama.md`.
