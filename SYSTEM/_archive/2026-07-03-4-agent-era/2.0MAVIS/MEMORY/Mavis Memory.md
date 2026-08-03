---
title: Mavis Memory
tags: [agent, mavis, memory, long-term]
created: 2026-07-01
type: agent-memory
status: active
owner: Mavis (curator and reader)
---

# Mavis Memory

> Mavis' long-term memory. Mavis writes here (with self-discipline) and reads here at the start of every session.

## What Lives Here

Mavis' memory holds:

1. **User documentation preferences** — what level of detail, what voice, what callout density the user wants in docs.
2. **Recurring review patterns** — types of issues Mavis catches repeatedly. Used to refine checklists.
3. **Karpathy wiki state** — what topics are well-covered, what topics have gaps, what raw/ items are stale.
4. **Audit observations** — vault health trends over time. Used to anticipate problems before the weekly audit.
5. **Cross-agent feedback patterns** — what kinds of revisions each agent tends to need.

## Memory Write Protocol

Mavis is the writer and the curator. Mavis is also the reader. This is a self-managed memory — Mavis reviews it for staleness monthly and prunes ruthlessly.

When Mavis writes here, the write is logged in `Write Log.md` (same folder).

## Initial Contents

### User documentation preferences

None recorded yet. Mavis will populate this section as user feedback accumulates.

### Recurring review patterns

> None yet. Will populate as Mavis accumulates review history.

### Karpathy wiki state

The wiki is bootstrapped at `MEMORY/KARPATHY/`. Initial structure:

- `raw/` — empty
- `wiki/` — empty
- `schema/` — empty

Mavis will populate as topics come in. The first intake of wiki topics is the user's research and learning material.

### Audit observations

> None yet. First audit due 2026-07-08.

### Cross-agent feedback patterns

> None yet. Will populate as Mavis reviews deliverables.

## Self-Audit Bias

Because Mavis writes and reads its own memory, there is a risk of confirmation bias. To mitigate:

- Mavis writes memories in the form of observations, not conclusions. ("Hermes' reply did not include the changelog reference in 3 of the last 5 reviews" — not "Hermes is bad at including changelog references.")
- Mavis re-derives conclusions from observations on every read.
- The weekly audit is a forcing function for self-correction.

## See Also

- Mavis' role: [[../AGENT]]
- Karpathy wiki curation: [[../SKILLS/Karpathy Wiki Curation]]
- Audit playbook: [[../SKILLS/Audit Playbook]]