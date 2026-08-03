---
name: implementing-iso-27001-information-security-management
description: "Agent for assessing ISO 27001:2022 ISMS compliance. Use when the user asks to implement iso 27001 information security management."
version: 1.0.0
tags:
  - implementing
source: implementing-iso-27001-information-security-management
---

# Implementing Iso 27001 Information Security Management

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** ISO 27001, Risk Assessment Formula, Primary Standards, Certification Process, Accreditation Bodies

## When to use

- The user wants to **implement** iso 27001 information security management.
- Capability: Agent for assessing ISO 27001:2022 ISMS compliance.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, 27001, information, security, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Assess Statement of Applicability completeness
2. Check required ISMS documentation against inventory
3. Assess risk register for completeness and currency
4. Generate ISO 27001 gap analysis from current state assessment

## Key concepts

- Title: Information Security, Cybersecurity and Privacy Protection - Information Security Management Systems - Require
- Published: October 2022
- Scope: Specifies requirements for establishing, implementing, maintaining, and continually improving an ISMS
- Certification: Organizations can be certified against this standard by accredited certification bodies
- Annex A restructured from 14 domains to 4 themes (Organizational, People, Physical, Technological)
- Title expanded to include "Cybersecurity and Privacy Protection"
- Clause 6.3 added for planning changes to the ISMS
- Title: Information Security, Cybersecurity and Privacy Protection - Information Security Controls

## Tools & resources

- ISO 27001
- Risk Assessment Formula
- Primary Standards
- Certification Process
- Accreditation Bodies

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

- `assess_soa_completeness` — Assess Statement of Applicability completeness.
- `assess_documentation` — Check required ISMS documentation against inventory.
- `assess_risk_register` — Assess risk register for completeness and currency.
- `generate_gap_analysis` — Generate ISO 27001 gap analysis from current state assessment.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-iso-27001-information-security-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
