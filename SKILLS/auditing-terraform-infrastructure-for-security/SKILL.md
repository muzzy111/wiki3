---
name: auditing-terraform-infrastructure-for-security
description: "Agent for auditing Terraform infrastructure for security misconfigurations. Use when the user asks to audit terraform infrastructure for security."
version: 1.0.0
tags:
  - auditing
source: auditing-terraform-infrastructure-for-security
---

# Auditing Terraform Infrastructure for Security

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** Terraform, Checkov CLI, tfsec CLI, Checkov Python API, Common CKV Check IDs, OPA/Conftest

## When to use

- The user wants to **audit** terraform infrastructure for security.
- Capability: Agent for auditing Terraform infrastructure for security misconfigurations.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, terraform, infrastructure, security`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Checkov static analysis on Terraform code
2. Run Checkov on a Terraform plan JSON file for accurate analysis
3. Run tfsec Terraform security scanner
4. Parse Checkov output and extract failed checks with details
5. Parse tfsec output and extract findings
6. Directly scan a Terraform plan JSON for common security issues
7. Generate combined audit report

## Tools & resources

- Terraform
- Checkov CLI
- tfsec CLI
- Checkov Python API
- Common CKV Check IDs
- OPA/Conftest

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

## Automation entry points

- `run_checkov` — Run Checkov static analysis on Terraform code.
- `run_checkov_on_plan` — Run Checkov on a Terraform plan JSON file for accurate analysis.
- `run_tfsec` — Run tfsec Terraform security scanner.
- `parse_checkov_results` — Parse Checkov output and extract failed checks with details.
- `parse_tfsec_results` — Parse tfsec output and extract findings.
- `scan_tf_plan_for_issues` — Directly scan a Terraform plan JSON for common security issues.
- `generate_report` — Generate combined audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-terraform-infrastructure-for-security`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
