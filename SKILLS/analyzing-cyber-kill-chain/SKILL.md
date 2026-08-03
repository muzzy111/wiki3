---
name: analyzing-cyber-kill-chain
description: "Cyber Kill Chain analysis agent for mapping incidents to Lockheed Martin kill chain phases. Use when the user asks to analyze cyber kill chain."
version: 1.0.0
tags:
  - analyzing
source: analyzing-cyber-kill-chain
---

# Analyzing Cyber Kill Chain

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Elastic Security EQL, MISP

## When to use

- The user wants to **analyze** cyber kill chain.
- Capability: Cyber Kill Chain analysis agent for mapping incidents to Lockheed Martin kill chain phases.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, cyber, kill, chain`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Map an incident event description to the most likely kill chain phase
2. Analyze a list of incident events and map to kill chain phases
3. Generate a kill chain analysis report

## Tools & resources

- Elastic Security EQL
- MISP

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |

## Automation entry points

- `map_event_to_phase` — Map an incident event description to the most likely kill chain phase.
- `analyze_incident` — Analyze a list of incident events and map to kill chain phases.
- `generate_report` — Generate a kill chain analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-cyber-kill-chain`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
