---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Multi-Agent Orchestrator Identity File Pattern

A pattern for coordinating multiple AI [[agents]] on a shared task using only filesystem artifacts and IDENTITY files — no live chat, no message bus, no orchestrator daemon. Established 2026-06-29 in the Vault OS survey→decision→build session.

## The pattern

Each agent has its own subfolder containing an `IDENTITY You are <Name>, <role>.txt` file that defines:

1. **Working directory**: where it operates.
2. **Communication channel**: a shared folder all [[agents]] read/write.
3. **Mission**: the high-level goal.
4. **Phases**: ordered, gated steps with explicit inputs and outputs.
5. **Rules**: hard constraints (e.g. "you do NOT write code", "exactly 3 calls").
6. **Output naming conventions**: e.g. `ticket-[NNN]-complete.md` for ticket lifecycle.

[[Agents]] coordinate by writing files to the shared channel. No agent waits for another in real time; each polls the channel on its own schedule.

## Why it works

- **Stateless coordination**: any agent can be restarted without losing state — the channel IS the state.
- **Parallelism**: independent [[agents]] work concurrently without lock-step waiting.
- **Auditability**: every decision leaves a file artifact. No "I thought you were going to..." ambiguity.
- **Crash recovery**: if an agent's session dies mid-task, another agent can read the channel and pick up.
- **Cross-tool**: works across CLI [[agents]] (Hermes, OpenCode, Antigravity, AGY) and across models (any LLM with file tools).

## The 3-agent shape used in Vault OS

| Folder | Agent | Role | Identity file pattern |
|--------|-------|------|----------------------|
| `Hermes/` | Hermes | Orchestrator | Mission + final-decision authority + integrate-only rule |
| `OpenCode/` | OpenCode | Implementer | Polls `ticket-*.md`, writes `*-complete.md` artifacts to `Build/` |
| `Antigravity/` | Antigravity | Reviewer | Read-only, 3-call budget, writes `checkpoint-N-response.md` |

Shared channel: `C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\Chat\`

The orchestrator owns the phase gating — it doesn't poll for completion; it issues tickets and accepts outputs when they appear.

## Phases that scale

```
PHASE 1: SURVEY  → PHASE 2: DISCUSSION → PHASE 3: DECISION →
PHASE 4: DECOMPOSE → PHASE 5: ISSUE TICKETS → PHASE 6: CHECKPOINT → PHASE 7: CLOSE
```

Each phase has explicit inputs (other [[agents]]' output files), explicit outputs (one file from this agent), and a hard gate (don't proceed without all inputs).

## Failure modes and recoveries

- **Primary agent session goes idle mid-task** → dispatch via CLI (`opencode run --model <name>`) with focused prompt. See [[Agent Delegation Fallback When Primary Session Goes Idle]].
- **Antigravity (reviewer) times out on large file batches** → orchestrator proxies the [[review]] with explicit disclosure in the response file. The disclosure is critical — silent substitution of orchestrator-as-reviewer erodes trust.
- **Completion [[[[report]]]] written to wrong location** (Build/ vs Chat/) → orchestrator accepts the artifact but writes the protocol-correct file to Chat/ retroactively. The artifact exists; the audit trail just needs completing.
- **Agent builds ahead of tickets** (scope creep) → check artifacts against the plan. If they match, accept and write retroactive completion reports. If they drift, write revision tickets.

## Related

- [[RAW/2026-06-29 vault-os-build session]] — first use of this pattern for a full build cycle
- [[Vault OS Core Loop Architecture]] — the project this pattern was used to build
- [[Agent Delegation Fallback When Primary Session Goes Idle]] — recovery pattern for crashed agent sessions
- `Chat\hermes-final-decision.md` — example of the orchestrator's decision output file
- `Hermes\IDENTITY You are Hermes, build orch.txt` — example identity file