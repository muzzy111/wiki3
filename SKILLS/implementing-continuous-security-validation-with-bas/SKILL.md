---
name: implementing-continuous-security-validation-with-bas
description: "Breach and Attack Simulation (BAS) agent for continuous security validation using MITRE ATT&CK. Use when the user asks to implement continuous security validation with bas."
version: 1.0.0
tags:
  - implementing
source: implementing-continuous-security-validation-with-bas
---

# Implementing Continuous Security Validation with Bas

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** BAS Platforms, Industry Standards, Key Metrics

## When to use

- The user wants to **implement** continuous security validation with bas.
- Capability: Breach and Attack Simulation (BAS) agent for continuous security validation using MITRE ATT&CK.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, continuous, security, validation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Simulate a single ATT&CK technique and record detection status
2. Check if SIEM generated an alert for the simulated technique
3. Compute detection coverage across tested techniques
4. Run BAS simulation campaign and generate detection gap report

## Key concepts

- Gartner BAS Market Guide: Breach and Attack Simulation Tools
- NIST CSF 2.0 DE.CM: Security Continuous Monitoring
- CIS Controls v8.1 Control 18: Penetration Testing
- Picus Security: 2024 Customers' Choice for BAS Tools
- Category evolution: BAS -> Adversarial Exposure Validation (2025)

## Tools & resources

- BAS Platforms
- Industry Standards
- Key Metrics

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

- `simulate_technique` — Simulate a single ATT&CK technique and record detection status.
- `check_siem_detection` — Check if SIEM generated an alert for the simulated technique.
- `compute_detection_coverage` — Compute detection coverage across tested techniques.
- `generate_report` — Run BAS simulation campaign and generate detection gap report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-continuous-security-validation-with-bas`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
