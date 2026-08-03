---
name: performing-nist-csf-maturity-assessment
description: "Agent for performing NIST Cybersecurity Framework (CSF) maturity assessment. Use when the user asks to perform nist csf maturity assessment."
version: 1.0.0
tags:
  - performing
source: performing-nist-csf-maturity-assessment
---

# Performing Nist Csf Maturity Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Maturity Levels, Primary Standard, CSF 2.0 Core Structure, Implementation Tiers Detail, Related NIST Publications

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** nist csf maturity assessment.
- Capability: Agent for performing NIST Cybersecurity Framework (CSF) maturity assessment.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, nist, maturity, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load assessment responses from CSV and calculate maturity scores
2. Generate detailed gap analysis with prioritized recommendations
3. Create a blank NIST CSF assessment CSV template
4. Generate executive-level maturity summary

## Key concepts

- Published: February 26, 2024
- Publisher: National Institute of Standards and Technology (NIST)
- Document: NIST CSWP 29
- Scope: Applicable to all organizations regardless of size, sector, or maturity
- Key Change: Added Govern function as central pillar; expanded from 5 to 6 functions
- GV.OC-01 to GV.OC-05: Organizational context understood
- GV.RM-01 to GV.RM-07: Risk management strategy established
- GV.RR-01 to GV.RR-04: Roles, responsibilities, and authorities

## Tools & resources

- Maturity Levels
- Primary Standard
- CSF 2.0 Core Structure
- Implementation Tiers Detail
- Related NIST Publications

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

- `assess_from_csv` — Load assessment responses from CSV and calculate maturity scores.
- `generate_gap_analysis` — Generate detailed gap analysis with prioritized recommendations.
- `create_assessment_template` — Create a blank NIST CSF assessment CSV template.
- `generate_executive_summary` — Generate executive-level maturity summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-nist-csf-maturity-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
