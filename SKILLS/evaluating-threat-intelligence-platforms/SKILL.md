---
name: evaluating-threat-intelligence-platforms
description: "Threat Intelligence Platform evaluation agent for MISP, OpenCTI, and ThreatConnect. Use when the user asks to evaluating threat intelligence platforms."
version: 1.0.0
tags:
  - evaluating
  - threat-intel
source: evaluating-threat-intelligence-platforms
---

# Evaluating Threat Intelligence Platforms

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** MISP REST API, OpenCTI GraphQL API, ThreatConnect REST API, TAXII 2.1 API, TIP Evaluation Criteria Weights, Platform Comparison Matrix

## When to use

- The user wants to **evaluat** threat intelligence platforms.
- Capability: Threat Intelligence Platform evaluation agent for MISP, OpenCTI, and ThreatConnect.
- Goal: complete the task.
- Trigger keywords: `evaluating, threat, intelligence, platforms`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test MISP API connectivity and basic operations
2. Test OpenCTI GraphQL API connectivity
3. Generate an evaluation scoring template for a TIP assessment
4. Generate a sample comparison report for common TIP platforms

## Tools & resources

- MISP REST API
- OpenCTI GraphQL API
- ThreatConnect REST API
- TAXII 2.1 API
- TIP Evaluation Criteria Weights
- Platform Comparison Matrix

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

- `test_misp_api` — Test MISP API connectivity and basic operations.
- `test_opencti_api` — Test OpenCTI GraphQL API connectivity.
- `generate_evaluation_template` — Generate an evaluation scoring template for a TIP assessment.
- `generate_comparison_report` — Generate a sample comparison report for common TIP platforms.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `evaluating-threat-intelligence-platforms`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
