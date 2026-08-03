---
name: correlating-security-events-in-qradar
description: "IBM QRadar SIEM correlation and offense management. Use when the user asks to correlating security events in qradar."
version: 1.0.0
tags:
  - correlating
source: correlating-security-events-in-qradar
---

# Correlating Security Events in Qradar

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** QRadar, Offense Management API, Reference Data API, AQL Functions

## When to use

- The user wants to **correlat** security events in qradar.
- Capability: IBM QRadar SIEM correlation and offense management agent.
- Goal: complete the task.
- Trigger keywords: `correlating, security, events, qradar`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. AQL query to detect brute force followed by success
2. AQL query to detect lateral movement patterns
3. Generate a QRadar offense summary report

## Tools & resources

- QRadar
- Offense Management API
- Reference Data API
- AQL Functions

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

- `brute_force_aql` — AQL query to detect brute force followed by success.
- `lateral_movement_aql` — AQL query to detect lateral movement patterns.
- `generate_report` — Generate a QRadar offense summary report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `correlating-security-events-in-qradar`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
