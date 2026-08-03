---
name: securing-kubernetes-on-cloud
description: "Agent for auditing Kubernetes cluster security posture on managed cloud platforms. Use when the user asks to secure kubernetes on cloud."
version: 1.0.0
tags:
  - securing
  - cloud
source: securing-kubernetes-on-cloud
---

# Securing Kubernetes on Cloud

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Kubernetes

## When to use

- The user wants to **secure** kubernetes on cloud.
- Capability: Agent for auditing Kubernetes cluster security posture on managed cloud platforms.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, kubernetes, cloud`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load kubeconfig for cluster access
2. Audit namespaces for Pod Security Standards enforcement labels
3. Audit ClusterRoleBindings for overly permissive access
4. Find pods with auto-mounted service account tokens
5. Find pods running with privileged security context
6. Check if namespaces have network policies applied
7. Audit images to ensure they come from approved registries
8. Run a complete Kubernetes security audit

## Tools & resources

- Kubernetes

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

- `load_kube_config` — Load kubeconfig for cluster access.
- `check_pod_security_standards` — Audit namespaces for Pod Security Standards enforcement labels.
- `check_rbac_clusterroles` — Audit ClusterRoleBindings for overly permissive access.
- `check_service_account_tokens` — Find pods with auto-mounted service account tokens.
- `check_privileged_pods` — Find pods running with privileged security context.
- `check_network_policies` — Check if namespaces have network policies applied.
- `check_image_registries` — Audit images to ensure they come from approved registries.
- `full_audit` — Run a complete Kubernetes security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-kubernetes-on-cloud`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
