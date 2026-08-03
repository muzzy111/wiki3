---
name: implementing-cisa-zero-trust-maturity-model
description: "CISA Zero Trust Maturity Model assessment agent for organizational ZT posture evaluation. Use when the user asks to implement cisa zero trust maturity model."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-cisa-zero-trust-maturity-model
---

# Implementing Cisa Zero Trust Maturity Model

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CISA ZT Pillars, Primary Standards, Supporting Standards

## When to use

- The user wants to **implement** cisa zero trust maturity model.
- Capability: CISA Zero Trust Maturity Model assessment agent for organizational ZT posture evaluation.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cisa, zero, trust, maturity, model`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Assess a single control's implementation status and maturity
2. Assess a single CISA ZT pillar based on control responses
3. Load assessment responses from JSON file
4. Compute overall zero trust maturity from pillar assessments
5. Generate prioritized recommendations based on assessment gaps
6. Generate CISA Zero Trust Maturity assessment report

## Key concepts

- Source: Cybersecurity and Infrastructure Security Agency
- Scope: Federal agencies and organizations implementing zero trust
- Five Pillars: Identity, Devices, Networks, Applications & Workloads, Data
- Four Maturity Stages: Traditional, Initial, Advanced, Optimal
- Cross-Cutting: Visibility & Analytics, Automation & Orchestration, Governance
- Tenets: Never trust, always verify; assume breach; least privilege access
- Deployment Models: Device agent/gateway, enclave, resource portal
- Key Requirement: Policy decision point (PDP) and policy enforcement point (PEP)

## Tools & resources

- CISA ZT Pillars
- Primary Standards
- Supporting Standards

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

- `assess_control` — Assess a single control's implementation status and maturity.
- `assess_pillar` — Assess a single CISA ZT pillar based on control responses.
- `load_assessment_data` — Load assessment responses from JSON file.
- `compute_overall_maturity` — Compute overall zero trust maturity from pillar assessments.
- `generate_recommendations` — Generate prioritized recommendations based on assessment gaps.
- `generate_report` — Generate CISA Zero Trust Maturity assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cisa-zero-trust-maturity-model`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
