---
name: integrating-dast-with-owasp-zap-in-pipeline
description: "Agent for running OWASP ZAP DAST scans and parsing results for CI/CD integration. Use when the user asks to integrating dast with owasp zap in pipeline."
version: 1.0.0
tags:
  - integrating
source: integrating-dast-with-owasp-zap-in-pipeline
---

# Integrating Dast with Owasp Zap in Pipeline

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** ZAP Docker Scan Scripts, OWASP Top 10, OWASP SAMM, PCI DSS v4.0

## When to use

- The user wants to **integrat** dast with owasp zap in pipeline.
- Capability: Agent for running OWASP ZAP DAST scans and parsing results for CI/CD integration.
- Goal: complete the task.
- Trigger keywords: `integrating, dast, owasp, pipeline`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run ZAP baseline scan (passive only, fast)
2. Run ZAP full scan (active + passive, slower)
3. Run ZAP API scan against an OpenAPI/Swagger spec
4. Parse ZAP JSON report and extract findings by risk level
5. Apply quality gate: fail if findings at or above threshold
6. Convert ZAP findings to SARIF format for GitHub Advanced Security

## Key concepts

- Automated DAST scanning in CI/CD pipelines
- Baseline scans on every deployment, full scans weekly
- Findings tracked and triaged with defined SLAs
- Authenticated scanning with session management
- API-specific scanning with OpenAPI specifications
- Custom scan policies tuned for application-specific risks
- PW.8.1: Test executable code using dynamic analysis
- DAST validates running application behavior against security requirements

## Tools & resources

- ZAP Docker Scan Scripts
- OWASP Top 10
- OWASP SAMM
- PCI DSS v4.0

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

- `run_baseline_scan` — Run ZAP baseline scan (passive only, fast).
- `run_full_scan` — Run ZAP full scan (active + passive, slower).
- `run_api_scan` — Run ZAP API scan against an OpenAPI/Swagger spec.
- `parse_zap_report` — Parse ZAP JSON report and extract findings by risk level.
- `apply_quality_gate` — Apply quality gate: fail if findings at or above threshold.
- `generate_sarif` — Convert ZAP findings to SARIF format for GitHub Advanced Security.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `integrating-dast-with-owasp-zap-in-pipeline`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
