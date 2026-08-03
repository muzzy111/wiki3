---
name: implementing-diamond-model-analysis
description: "Diamond Model intrusion analysis agent for structuring threat intelligence events. Use when the user asks to implement diamond model analysis."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-diamond-model-analysis
---

# Implementing Diamond Model Analysis

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Applicable Standards, Industry Frameworks

## When to use

- The user wants to **implement** diamond model analysis.
- Capability: Diamond Model intrusion analysis agent for structuring threat intelligence events.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, diamond, model, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create a Diamond Model event from the four vertices
2. Load Diamond Model events from JSON file
3. Pivot analysis: find all events sharing a vertex value
4. Build an activity thread for an adversary across events
5. Cluster events by shared infrastructure to identify campaigns
6. Compute statistics across all Diamond Model vertices
7. Generate Diamond Model analysis report

## Key concepts

- STIX 2.1: Structured Threat Information eXpression for CTI data representation
- TAXII 2.1: Transport protocol for sharing CTI over HTTPS
- MITRE ATT&CK: Adversary tactics, techniques, and procedures taxonomy
- Diamond Model: Intrusion analysis framework (Adversary, Capability, Infrastructure, Victim)
- Traffic Light Protocol (TLP): Information sharing classification (CLEAR, GREEN, AMBER, RED)
- Technique mapping for threat actor behavior classification
- Data sources for detection capability assessment
- Mitigation strategies linked to specific techniques

## Tools & resources

- Applicable Standards
- Industry Frameworks

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `create_event` — Create a Diamond Model event from the four vertices.
- `load_events` — Load Diamond Model events from JSON file.
- `pivot_on_vertex` — Pivot analysis: find all events sharing a vertex value.
- `build_activity_thread` — Build an activity thread for an adversary across events.
- `cluster_by_infrastructure` — Cluster events by shared infrastructure to identify campaigns.
- `compute_vertex_statistics` — Compute statistics across all Diamond Model vertices.
- `generate_report` — Generate Diamond Model analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-diamond-model-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
