---
name: implementing-conduit-security-for-ot-remote-access
description: "OT remote access conduit security assessment agent for ICS/SCADA environments. Use when the user asks to implement conduit security for ot remote access."
version: 1.0.0
tags:
  - implementing
source: implementing-conduit-security-for-ot-remote-access
---

# Implementing Conduit Security for Ot Remote Access

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OT Protocols Scanned, IEC 62443 Controls Checked

## When to use

- The user wants to **implement** conduit security for ot remote access.
- Capability: OT remote access conduit security assessment agent for ICS/SCADA environments.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, conduit, security, remote, access`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan for exposed OT protocol ports on a target
2. Assess conduit security controls against IEC 62443 requirements
3. Compute conduit risk score based on controls and exposed ports
4. Generate OT conduit security assessment report

## Tools & resources

- OT Protocols Scanned
- IEC 62443 Controls Checked

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

- `scan_ot_ports` — Scan for exposed OT protocol ports on a target.
- `assess_conduit_controls` — Assess conduit security controls against IEC 62443 requirements.
- `compute_conduit_risk_score` — Compute conduit risk score based on controls and exposed ports.
- `generate_report` — Generate OT conduit security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-conduit-security-for-ot-remote-access`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
