---
name: correlating-threat-campaigns
description: "Threat campaign correlation agent using MISP and STIX. Use when the user asks to correlating threat campaigns."
version: 1.0.0
tags:
  - correlating
  - threat-intel
source: correlating-threat-campaigns
---

# Correlating Threat Campaigns

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** MISP REST API, MISP Correlation Engine, OpenCTI GraphQL API, STIX 2.1 Campaign Object, STIX Relationship Types

## When to use

- The user wants to **correlat** threat campaigns.
- Capability: Threat campaign correlation agent using MISP and STIX.
- Goal: complete the task.
- Trigger keywords: `correlating, threat, campaigns`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate campaign attribution confidence from correlated events
2. Extract shared IOCs across correlated events for blocking
3. Build a structured campaign intelligence report

## Tools & resources

- MISP REST API
- MISP Correlation Engine
- OpenCTI GraphQL API
- STIX 2.1 Campaign Object
- STIX Relationship Types

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

- `calculate_campaign_confidence` — Calculate campaign attribution confidence from correlated events.
- `extract_campaign_iocs` — Extract shared IOCs across correlated events for blocking.
- `build_campaign_report` — Build a structured campaign intelligence report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `correlating-threat-campaigns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
