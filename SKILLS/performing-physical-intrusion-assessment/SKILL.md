---
name: performing-physical-intrusion-assessment
description: "Agent for performing physical intrusion assessment — checklist management and finding documentation. Use when the user asks to perform physical intrusion assessment."
version: 1.0.0
tags:
  - performing
source: performing-physical-intrusion-assessment
---

# Performing Physical Intrusion Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Risk Classification, NIST References, Industry Standards

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** physical intrusion assessment.
- Capability: Agent for performing physical intrusion assessment — checklist management and finding documentation.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, physical, intrusion, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate physical security assessment checklist
2. Score a completed physical security assessment
3. Generate executive physical security assessment report

## Key concepts

- NIST SP 800-53 Rev. 5** - PE-1 through PE-20: Physical and Environmental Protection
- NIST SP 800-53 Rev. 5** - PE-3: Physical Access Control
- NIST SP 800-53 Rev. 5** - PE-6: Monitoring Physical Access
- ISO 27001: 2022** - A.7: Physical controls
- PCI DSS 4.0** - Requirement 9: Restrict physical access to cardholder data

## Tools & resources

- Risk Classification
- NIST References
- Industry Standards

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

- `generate_checklist` — Generate physical security assessment checklist.
- `score_assessment` — Score a completed physical security assessment.
- `generate_report` — Generate executive physical security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-physical-intrusion-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
