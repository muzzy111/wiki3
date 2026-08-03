---
name: implementing-rbac-hardening-for-kubernetes
description: "Kubernetes RBAC hardening audit agent. Audits Kubernetes Role-Based Access Control configuration for security weaknesses including overly permissive ClusterRoles, wildcard permissions, privilege escalation paths, and.... Use when the user asks to implement rbac hardening for kubernetes."
version: 1.0.0
tags:
  - implementing
  - cloud
  - identity
source: implementing-rbac-hardening-for-kubernetes
---

# Implementing RBAC Hardening for Kubernetes

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Kubernetes, RBAC API Methods, Core Audit Operations, kubectl Equivalents, NIST SP 800-190

## When to use

- The user wants to **implement** rbac hardening for kubernetes.
- Capability: Kubernetes RBAC hardening audit agent. Audits Kubernetes Role-Based Access Control configuration for security weaknesses including overly permissive ClusterRoles, wildcard permissions, privilege escalation paths, and service account misconfigurations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, rbac, hardening, kubernetes`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute kubectl and return parsed JSON
2. Audit ClusterRoles for dangerous permissions
3. Audit ClusterRoleBindings for overly broad subject assignments
4. Audit service accounts for misconfigurations
5. Print RBAC audit summary

## Key concepts

- Section 3.4: Orchestrator security -- access control hardening
- Section 4.4: Countermeasures for orchestrator vulnerabilities
- T1078.004: Valid Accounts: Cloud Accounts -- compromised service accounts
- T1098: Account Manipulation -- RBAC escalation
- T1069: Permission Groups Discovery -- enumerating RBAC bindings

## Tools & resources

- Kubernetes
- RBAC API Methods
- Core Audit Operations
- kubectl Equivalents
- NIST SP 800-190

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

- `run_kubectl` — Execute kubectl and return parsed JSON.
- `audit_cluster_roles` — Audit ClusterRoles for dangerous permissions.
- `audit_cluster_role_bindings` — Audit ClusterRoleBindings for overly broad subject assignments.
- `audit_service_accounts` — Audit service accounts for misconfigurations.
- `format_summary` — Print RBAC audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-rbac-hardening-for-kubernetes`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
