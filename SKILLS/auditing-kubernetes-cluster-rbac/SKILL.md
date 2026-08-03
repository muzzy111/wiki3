---
name: auditing-kubernetes-cluster-rbac
description: "Agent for auditing Kubernetes cluster RBAC configurations. Use when the user asks to audit kubernetes cluster rbac."
version: 1.0.0
tags:
  - auditing
  - cloud
  - identity
source: auditing-kubernetes-cluster-rbac
---

# Auditing Kubernetes Cluster RBAC

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** Kubernetes, Key RBAC Resources

## When to use

- The user wants to **audit** kubernetes cluster rbac.
- Capability: Agent for auditing Kubernetes cluster RBAC configurations.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, kubernetes, cluster, rbac`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load Kubernetes configuration
2. Find ClusterRoles with wildcard verb or resource permissions
3. Find ClusterRoles that can read secrets
4. Find all ClusterRoleBindings that grant cluster-admin
5. Find bindings granting access to system:authenticated or system:unauthenticated
6. Find pods with automounted service account tokens
7. Find containers running as privileged or root

## Tools & resources

- Kubernetes
- Key RBAC Resources

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

- `load_kube_config` — Load Kubernetes configuration.
- `list_cluster_roles_with_wildcards` — Find ClusterRoles with wildcard verb or resource permissions.
- `list_secret_access_roles` — Find ClusterRoles that can read secrets.
- `list_cluster_admin_bindings` — Find all ClusterRoleBindings that grant cluster-admin.
- `find_dangerous_bindings` — Find bindings granting access to system:authenticated or system:unauthenticated.
- `audit_service_account_tokens` — Find pods with automounted service account tokens.
- `find_privileged_containers` — Find containers running as privileged or root.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-kubernetes-cluster-rbac`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
