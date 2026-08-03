---
name: implementing-scim-provisioning-with-okta
description: "Okta SCIM provisioning audit agent. Audits Okta SCIM provisioning configuration by querying the Okta API for provisioned applications, user assignments, group memberships, and deprovisioning status. Identifies.... Use when the user asks to implement scim provisioning with okta."
version: 1.0.0
tags:
  - implementing
source: implementing-scim-provisioning-with-okta
---

# Implementing Scim Provisioning with Okta

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Okta, Core Operations, Protocol Standards, Compliance Standards

## When to use

- The user wants to **implement** scim provisioning with okta.
- Capability: Okta SCIM provisioning audit agent. Audits Okta SCIM provisioning configuration by querying the Okta API for provisioned applications, user assignments, group memberships, and deprovisioning status. Identifies orphaned accounts, mismatched assignments, and provisioning failures.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, scim, provisioning, okta`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return Okta org URL and API token
2. Make authenticated Okta API call with pagination
3. List applications with SCIM provisioning enabled
4. Audit user assignments for a provisioning app
5. Audit group-based provisioning assignments
6. Check for deactivated Okta users that still have active app assignments
7. Print audit summary

## Key concepts

- Defines the RESTful API for managing identity resources
- Specifies HTTP methods, headers, and response formats
- Mandates JSON as the data interchange format
- Requires TLS for all communications
- Defines User, Group, and EnterpriseUser schemas
- Specifies attribute types: string, boolean, decimal, integer, dateTime, reference, complex, binary
- Defines mutability: readOnly, readWrite, immutable, writeOnly
- Specifies attribute uniqueness: none, server, global

## Tools & resources

- Okta
- Core Operations
- Protocol Standards
- Compliance Standards

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

- `get_okta_config` — Return Okta org URL and API token.
- `okta_api` — Make authenticated Okta API call with pagination.
- `list_provisioning_apps` — List applications with SCIM provisioning enabled.
- `audit_app_assignments` — Audit user assignments for a provisioning app.
- `audit_group_assignments` — Audit group-based provisioning assignments.
- `check_deprovisioning` — Check for deactivated Okta users that still have active app assignments.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-scim-provisioning-with-okta`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
