---
name: integrating-sast-into-github-actions-pipeline
description: "Agent for running Semgrep SAST scans and generating SARIF for GitHub Advanced Security. Use when the user asks to integrating sast into github actions pipeline."
version: 1.0.0
tags:
  - integrating
  - threat-intel
source: integrating-sast-into-github-actions-pipeline
---

# Integrating Sast Into Github Actions Pipeline

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Semgrep CLI, OWASP SAMM

## When to use

- The user wants to **integrat** sast into github actions pipeline.
- Capability: Agent for running Semgrep SAST scans and generating SARIF for GitHub Advanced Security.
- Goal: complete the task.
- Trigger keywords: `integrating, sast, into, github, actions, pipeline`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run Semgrep SAST scan on a code directory
2. Parse Semgrep findings into structured format
3. Convert Semgrep findings to SARIF 2.1.0 format
4. Apply quality gate based on severity threshold
5. Generate a GitHub Actions SAST workflow YAML

## Key concepts

- Perform automated SAST scanning with default rulesets on all application code
- Results are visible to development teams through IDE or CI/CD integration
- Customize SAST rules to reduce false positives below 20%
- Track and triage all findings with defined SLAs per severity
- Integrate SAST results into a centralized vulnerability management system
- Correlate SAST findings with DAST and SCA results for comprehensive coverage
- Measure and improve detection accuracy through benchmarking against known vulnerabilities
- Custom rules cover organization-specific vulnerability patterns and deprecated APIs

## Tools & resources

- Semgrep CLI
- OWASP SAMM

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

- `run_semgrep_scan` — Run Semgrep SAST scan on a code directory.
- `parse_semgrep_results` — Parse Semgrep findings into structured format.
- `generate_sarif` — Convert Semgrep findings to SARIF 2.1.0 format.
- `apply_quality_gate` — Apply quality gate based on severity threshold.
- `generate_github_actions_workflow` — Generate a GitHub Actions SAST workflow YAML.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `integrating-sast-into-github-actions-pipeline`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
