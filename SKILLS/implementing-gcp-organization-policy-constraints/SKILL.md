---
name: implementing-gcp-organization-policy-constraints
description: "Agent for auditing and managing GCP Organization Policy constraints. Use when the user asks to implement gcp organization policy constraints."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-gcp-organization-policy-constraints
---

# Implementing GCP Organization Policy Constraints

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** GCP, Baseline Security Constraints, Terraform Resource

## When to use

- The user wants to **implement** gcp organization policy constraints.
- Capability: Agent for auditing and managing GCP Organization Policy constraints.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, organization, policy, constraints`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run a gcloud command and return parsed JSON
2. List all active organization policies
3. Get details of a specific org policy constraint
4. Audit organization against security baseline constraints
5. Audit organization policies effective on a specific project
6. Check if resource location constraint is configured
7. Generate Terraform HCL for baseline org policies
8. Generate a compliance summary from audit findings

## Key concepts

- AC-3: Access Enforcement
- AC-6: Least Privilege
- CM-7: Least Functionality
- SC-7: Boundary Protection
- SC-12: Cryptographic Key Establishment
- Principle of least privilege for organization policies
- Hierarchical policy inheritance model
- Dry-run testing before enforcement

## Tools & resources

- GCP
- Baseline Security Constraints
- Terraform Resource

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

- `run_gcloud` — Run a gcloud command and return parsed JSON.
- `list_org_policies` — List all active organization policies.
- `describe_policy` — Get details of a specific org policy constraint.
- `audit_baseline_compliance` — Audit organization against security baseline constraints.
- `audit_project_policies` — Audit organization policies effective on a specific project.
- `check_resource_location_constraint` — Check if resource location constraint is configured.
- `generate_terraform_policies` — Generate Terraform HCL for baseline org policies.
- `generate_compliance_report` — Generate a compliance summary from audit findings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-gcp-organization-policy-constraints`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
