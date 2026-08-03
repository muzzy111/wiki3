---
name: auditing-gcp-iam-permissions
description: "Agent for auditing GCP IAM permissions using google-cloud libraries. Use when the user asks to audit gcp iam permissions."
version: 1.0.0
tags:
  - auditing
  - cloud
source: auditing-gcp-iam-permissions
---

# Auditing GCP IAM Permissions

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** GCP, google-cloud-asset, google-cloud-resource-manager

## When to use

- The user wants to **audit** gcp iam permissions.
- Capability: Agent for auditing GCP IAM permissions using google-cloud libraries.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, permissions`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Search IAM policies across the GCP organization
2. Find all IAM bindings using primitive roles (Owner, Editor)
3. Find resources accessible to allUsers or allAuthenticatedUsers
4. List all service accounts in a project with key info
5. Get IAM policy for a specific project
6. Analyze what resources an identity can access
7. Classify risk for IAM bindings

## Tools & resources

- GCP
- google-cloud-asset
- google-cloud-resource-manager

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

- `search_iam_policies` — Search IAM policies across the GCP organization.
- `find_primitive_roles` — Find all IAM bindings using primitive roles (Owner, Editor).
- `find_public_bindings` — Find resources accessible to allUsers or allAuthenticatedUsers.
- `list_service_accounts` — List all service accounts in a project with key info.
- `get_project_iam_policy` — Get IAM policy for a specific project.
- `analyze_permissions` — Analyze what resources an identity can access.
- `classify_risk` — Classify risk for IAM bindings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-gcp-iam-permissions`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
