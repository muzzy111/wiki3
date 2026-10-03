---
title: "009 — Karpathy wiki question: multi-agent writes"
type: todo
status: open
priority: low
created: 2026-06-18
modified: 2026-06-18
tags:
  - wiki
  - agent
  - karpathy
  - agents
---

# 009 — Karpathy wiki question: multi-agent writes

User asked: would it hurt to have the other [[agents]] (Hermes,
OpenCode, Minimax, AntiGravity, plus the Sisyphus bots) add
entries to the karpathy wiki more often? They envision it as
collective memory + work history. Or is it better to keep
individual agent wikis?

## Hermes's answer

Keep the karpathy wiki as the primary. Have [[agents]] write to it
freely, with these guardrails:

### Why it works

The 3-folder pipeline (RAW → WIKI → SCHEMA) was designed for this.
Append-only RAW can absorb anything. WIKI notes require a
`source:` back to RAW. SCHEMA is the abstraction layer above.

### The risks (and fixes)

 1. **Drowning in noise.** 50 notes a day = no signal.
    Fix: [[agents]] write to RAW (cheap, append-only). A
    "send it" checkpoint promotes the day's batch to WIKI
    notes. We already have this workflow.
 2. **Attribution drift.** Who said what blurs.
    Fix: every RAW entry is agent-attributed. Every WIKI note
    has `source: [[RAW/...]]` with provenance. If two [[agents]]
    wrote the same thing, you can see both threads.
 3. **Inconsistency.** Two [[agents]] describe the same thing
    differently.
    Fix: SCHEMA is where patterns get agreed on. Multiple
    WIKI notes can reference the same SCHEMA pattern, and
    the pattern acts as a glossary.

### Recommended structure if you go multi-agent

- **Primary wiki:** `[[10.05 KARPATHY]]/` — what we have now.
  Any agent can write here.
- **Secondary collective wiki:** new folder like
  `10.08 COLLECTIVE/` or `00.06 SHARED-MEMORY/`. Owned by
  the agent collaboration, less human curation. Lower
  signal-to-noise but the raw thought stream.
- **Per-agent wikis:** `[[00.01 Antigravity]]/`, `00.02 MiniMaxx/`,
  `[[00.03 Hermes]]/`, `[[00.04 Opencode]]/` (already exist). For
  agent-specific decisions, internal monologue, anything
  that's not collective.

### Open decision

The user (you) makes the call. My recommendation: do both.
Primary karpathy for curated, a secondary for raw. Keep the
3-folder rule intact either way.

## Related

- [[00.04 Opencode/KARPATHY-SYSTEM-RULES]] — the pipeline rules.
- [[Multi-Agent Chatroom User Guide]] — where
  the collective-memory idea might get implemented first.
