---
name: managing-intelligence-lifecycle
description: "Cyber Threat Intelligence Lifecycle Management Agent Manages the CTI lifecycle from requirements gathering through dissemination, tracking PIRs, collection sources, and intelligence product metrics. Use when the user asks to managing intelligence lifecycle."
version: 1.0.0
tags:
  - managing
source: managing-intelligence-lifecycle
---

# Managing Intelligence Lifecycle

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Recorded Future API, MISP REST API, OpenCTI GraphQL API

## When to use

- The user wants to **mana** intelligence lifecycle.
- Capability: Cyber Threat Intelligence Lifecycle Management Agent Manages the CTI lifecycle from requirements gathering through dissemination, tracking PIRs, collection sources, and intelligence product metrics.
- Goal: complete the task.
- Trigger keywords: `managing, intelligence, lifecycle`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load Priority Intelligence Requirements (PIRs) from config
2. Evaluate intelligence collection source coverage and quality
3. Assess how well collection sources cover PIRs
4. Track intelligence products and dissemination metrics
5. Assess CTI program maturity using simplified FIRST CTI-SIG model
6. Generate CTI lifecycle management report

## Tools & resources

- Recorded Future API
- MISP REST API
- OpenCTI GraphQL API

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

- `load_intelligence_requirements` — Load Priority Intelligence Requirements (PIRs) from config.
- `evaluate_collection_sources` — Evaluate intelligence collection source coverage and quality.
- `assess_pir_coverage` — Assess how well collection sources cover PIRs.
- `track_intelligence_products` — Track intelligence products and dissemination metrics.
- `assess_maturity` — Assess CTI program maturity using simplified FIRST CTI-SIG model.
- `generate_report` — Generate CTI lifecycle management report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `managing-intelligence-lifecycle`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
