---
name: "Multi-Agent Orchestration Patterns"
description: "Consolidated patterns for multi-agent systems — topologies, handoffs, frameworks, and failure modes."
type: technique-prompt
tags: [multi-agent, orchestration, patterns, consolidated]
status: active
source: consolidated
---

# Multi-Agent Orchestration Patterns

Use this as a design brief when building multi-agent systems. Prefer the simplest topology that works.

## Core topologies

| Pattern | When to use | Failure mode |
|---|---|---|
| **Single agent + tools** | Most tasks; clear tool set | Over-tools, no plan |
| **Router / triage** | Many domains, one entry | Mis-route loops |
| **Supervisor + workers** | Parallel specialties, shared goal | Supervisor bottleneck |
| **Handoff chain** | Sequential ownership (research → write → review) | Lost context at boundary |
| **Peer swarm** | Brainstorm / debate | Infinite chatter |
| **Planner → Executor → Evaluator** | Code / high-stakes output | Eval rubber-stamping |

## Framework quick pick

| Need | Prefer |
|---|---|
| Explicit graphs, cycles, human-in-loop | **LangGraph** |
| Role crews, task lists, quick demos | **CrewAI** |
| Multi-agent chat / research prototypes | **AutoGen / Magentic** |
| Lightweight handoffs, OpenAI stack | **OpenAI Agents SDK** |
| Full control, minimal deps | **Custom loop** |

Rule of thumb: start single-agent; add agents only when a clear ownership boundary appears.

## Handoff contract (required)

Every agent-to-agent handoff must include:

1. **Goal** — what done looks like
2. **Context** — facts, constraints, prior decisions
3. **Artifacts** — files, IDs, partial outputs
4. **Ownership** — who decides next
5. **Stop condition** — when to return / escalate

## Quality gates

- No phase advance without an explicit pass/fail check
- Max retries (typically 2–3) then escalate to human
- Circuit breaker on total steps / token budget
- Prefer evidence (tests, citations, tool output) over self-claims

## Prompt skeleton — supervisor

```text
You are the Supervisor for [PROJECT].
Workers: [list roles + one-line scope].
You may call workers or tools. You never implement worker work yourself.

Loop:
1. Assess state vs goal
2. Choose one next action (worker call | tool | ask user | finish)
3. On worker return: validate against acceptance criteria
4. If retries exceeded for a task → escalate with summary

Stop when: [definition of done]
Never: invent worker results; skip validation; reassign without context package
```

## Prompt skeleton — specialist worker

```text
You are [ROLE]. Scope: [boundary]. Out of scope: [list].
Input package: goal, constraints, artifacts, success criteria.
Output: [format]. Include confidence + unknowns.
If blocked: return BLOCKED with reason and what you need — do not guess.
```

## Anti-patterns

- Agents that can talk forever with no step/token cap
- Shared mutable state with no owner
- Overlapping roles (two agents own the same decision)
- Framework hopping before a single agent works