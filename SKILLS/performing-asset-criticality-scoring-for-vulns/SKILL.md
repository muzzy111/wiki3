---
name: performing-asset-criticality-scoring-for-vulns
description: "Asset criticality scoring agent for vulnerability prioritization. Use when the user asks to perform asset criticality scoring for vulns."
version: 1.0.0
tags:
  - performing
source: performing-asset-criticality-scoring-for-vulns
---

# Performing Asset Criticality Scoring for Vulns

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Criticality Scoring Factors, Data Sensitivity Levels, Criticality Tiers, Risk-Adjusted Priority Formula, External References, Industry Standards

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** asset criticality scoring for vulns.
- Capability: Asset criticality scoring agent for vulnerability prioritization.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, asset, criticality, scoring, vulns`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load asset inventory from CSV file
2. Calculate weighted criticality score for a single asset
3. Combine CVSS score with asset criticality for risk-adjusted priority
4. Generate remediation SLA based on asset criticality tier
5. Execute asset criticality scoring audit

## Key concepts

- NIST SP 800-30 Rev 1: Guide for Conducting Risk Assessments
- NIST CSF 2.0 ID.AM: Asset Management
- CIS Controls v8.1 Control 1: Inventory and Control of Enterprise Assets
- ISO 27001: 2022 A.5.9**: Inventory of information and other associated assets
- FAIR Framework: Factor Analysis of Information Risk
- NIST CMDB Best Practices
- ITIL Asset Management Framework
- CIS RAM (Risk Assessment Method)

## Tools & resources

- Criticality Scoring Factors
- Data Sensitivity Levels
- Criticality Tiers
- Risk-Adjusted Priority Formula
- External References
- Industry Standards
- Scoring References

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

- `load_asset_inventory` — Load asset inventory from CSV file.
- `calculate_criticality_score` — Calculate weighted criticality score for a single asset.
- `calculate_risk_adjusted_priority` — Combine CVSS score with asset criticality for risk-adjusted priority.
- `generate_sla_matrix` — Generate remediation SLA based on asset criticality tier.
- `run_audit` — Execute asset criticality scoring audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-asset-criticality-scoring-for-vulns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
