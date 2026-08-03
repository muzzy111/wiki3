---
name: implementing-anti-phishing-training-program
description: "Agent for managing and analyzing anti-phishing training program metrics. Use when the user asks to implement anti phishing training program."
version: 1.0.0
tags:
  - implementing
  - email
source: implementing-anti-phishing-training-program
---

# Implementing Anti Phishing Training Program

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** KnowBe4 API, Key Metrics, pandas Simulation Analysis, SANS Maturity Model Levels, NIST Guidelines, Regulatory Requirements

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** anti phishing training program.
- Capability: Agent for managing and analyzing anti-phishing training program metrics.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, anti, phishing, training, program`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load phishing simulation results CSV
2. Calculate phishing susceptibility metrics per department
3. Analyze phishing simulation trends over time
4. Identify users who repeatedly click phishing links
5. Calculate training module completion rates
6. Generate overall organization risk score based on phishing metrics
7. Generate training recommendations based on metrics

## Key concepts

- NIST SP 800-50: Building an Information Technology Security Awareness and Training Program
- NIST SP 800-16: Information Technology Security Training Requirements
- NIST SP 800-53 Rev.5: AT-1 through AT-6 - Awareness and Training family
- PCI DSS 4.0: Requirement 12.6 - Security awareness training for all personnel
- HIPAA: 45 CFR 164.308(a)(5) - Security awareness and training
- SOX: Section 404 - Internal controls requiring security awareness
- GDPR: Article 39(1)(b) - Data protection awareness training
- CMMC 2.0: AT.L2-3.2.1/2/3 - Awareness and training practices

## Tools & resources

- KnowBe4 API
- Key Metrics
- pandas Simulation Analysis
- SANS Maturity Model Levels
- NIST Guidelines
- Regulatory Requirements
- Industry Frameworks
- Training Content Categories

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

- `load_simulation_results` — Load phishing simulation results CSV.
- `calculate_department_metrics` — Calculate phishing susceptibility metrics per department.
- `analyze_trend` — Analyze phishing simulation trends over time.
- `identify_repeat_clickers` — Identify users who repeatedly click phishing links.
- `calculate_training_completion` — Calculate training module completion rates.
- `generate_risk_score` — Generate overall organization risk score based on phishing metrics.
- `recommend_training` — Generate training recommendations based on metrics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-anti-phishing-training-program`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
