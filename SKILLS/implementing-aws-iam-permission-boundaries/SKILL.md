---
name: implementing-aws-iam-permission-boundaries
description: "AWS IAM permission boundary management agent using boto3. Use when the user asks to implement aws iam permission boundaries."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-aws-iam-permission-boundaries
---

# Implementing AWS IAM Permission Boundaries

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, boto3 IAM Methods Used

## When to use

- The user wants to **implement** aws iam permission boundaries.
- Capability: AWS IAM permission boundary management agent using boto3.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, permission, boundaries`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create IAM client with optional profile
2. Create a permission boundary policy restricting services and regions
3. Attach permission boundary to an IAM role
4. Find IAM roles that lack a permission boundary
5. Audit effective permissions for a role with boundary
6. Generate permission boundary compliance report

## Key concepts

- SEC02-BP02: Use temporary credentials (permission boundaries enforce this)
- SEC02-BP05: Audit and rotate credentials regularly
- SEC02-BP06: Employ user groups and attributes for fine-grained access
- SEC03-BP01: Define access requirements (boundary defines maximum)
- SEC03-BP02: Grant least privilege access
- SEC03-BP06: Manage access based on lifecycle
- SEC03-BP07: Analyze public and cross-account access
- AC-2: Account Management (boundary controls role creation)

## Tools & resources

- AWS
- boto3 IAM Methods Used

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

- `get_iam_client` — Create IAM client with optional profile.
- `create_permission_boundary` — Create a permission boundary policy restricting services and regions.
- `attach_boundary_to_role` — Attach permission boundary to an IAM role.
- `audit_roles_without_boundary` — Find IAM roles that lack a permission boundary.
- `audit_boundary_effectiveness` — Audit effective permissions for a role with boundary.
- `generate_report` — Generate permission boundary compliance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aws-iam-permission-boundaries`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
