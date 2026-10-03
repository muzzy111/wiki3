---
name: "Agent Loop Guardrails"
description: "Two-tier and structural guardrails to stop infinite agent loops, chatter, and runaway tool calls."
type: technique-prompt
tags: [agent-loop, guardrails, safety, consolidated]
status: active
source: consolidated
---

# Agent Loop Guardrails

Infinite loops come from missing stop conditions, peer chatter, and retry-without-learning. Fix structure first; prompts second.

## Tier 1 — Hard limits (code, not prompts)

| Control | Typical value |
|---|---|
| Max steps / iterations | 15–50 depending on task |
| Max wall-clock | 2–10 minutes |
| Max tokens / cost | budget per run |
| Max identical tool call | 2 then fail |
| Max agent-to-agent messages | 8–12 then force synthesize |
| Retry per task | 3 then escalate |

Implement as counters in the runtime. Do not rely on the model to remember limits.

## Tier 2 — Soft limits (prompt + state)

```text
LOOP CONTROL
- You have at most N actions this turn/session. State remaining budget each step.
- If the last 2 actions did not change state, STOP and report stuck.
- Prefer finish over another exploratory tool call when criteria are met.
- On repeated failure: change strategy once, then escalate — never repeat the same call.
```

## Detect loops

- Same tool + same args hash twice
- Message fingerprint similarity high across turns
- No new artifact / state key for K steps
- Oscillating A→B→A handoffs

## Escalation template

```text
ESCALATE
reason: [loop | budget | blocked | quality]
attempted: [brief]
state: [what works / what does not]
ask: [single decision needed from human]
```

## Do not

- Let peer agents discuss without a synthesizer deadline
- Reset counters on handoff without a global budget
- Use only "please be concise" as a loop fix