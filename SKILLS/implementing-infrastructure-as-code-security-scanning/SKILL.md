---
name: implementing-infrastructure-as-code-security-scanning
description: "Agent for scanning Infrastructure as Code templates for security misconfigurations. Use when the user asks to implement infrastructure as code security scanning."
version: 1.0.0
tags:
  - implementing
source: implementing-infrastructure-as-code-security-scanning
---

# Implementing Infrastructure As Code Security Scanning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Checkov CLI, tfsec CLI, Common IaC Security Checks, CIS Cloud Benchmarks, OWASP SAMM

## When to use

- The user wants to **implement** infrastructure as code security scanning.
- Capability: Agent for scanning Infrastructure as Code templates for security misconfigurations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, infrastructure, code, security, scanning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run Checkov IaC security scanner
2. Run tfsec Terraform security scanner
3. Analyze Checkov scan results and categorize findings
4. Scan Terraform files for common security misconfigurations
5. Generate CI/CD pipeline config for IaC scanning

## Key concepts

- Maps directly to Checkov CKV_AWS_* checks
- Covers IAM, logging, monitoring, networking, and storage security
- Automated scanning validates 100+ benchmark controls
- Maps to Checkov CKV_AZURE_* checks
- Covers identity, security center, storage, database, and network controls
- Maps to Checkov CKV_GCP_* checks
- Covers IAM, logging, networking, VM, storage, and database controls
- Validate infrastructure configurations against security standards before deployment

## Tools & resources

- Checkov CLI
- tfsec CLI
- Common IaC Security Checks
- CIS Cloud Benchmarks
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

- `run_checkov` — Run Checkov IaC security scanner.
- `run_tfsec` — Run tfsec Terraform security scanner.
- `analyze_checkov_results` — Analyze Checkov scan results and categorize findings.
- `scan_terraform_files` — Scan Terraform files for common security misconfigurations.
- `generate_ci_config` — Generate CI/CD pipeline config for IaC scanning.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-infrastructure-as-code-security-scanning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
