---
name: implementing-kubernetes-pod-security-standards
description: "Agent for auditing Kubernetes Pod Security Standards enforcement. Use when the user asks to implement kubernetes pod security standards."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-kubernetes-pod-security-standards
---

# Implementing Kubernetes Pod Security Standards

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Kubernetes, Pod Security Standard Levels, PSA Modes, Baseline Violations

## When to use

- The user wants to **implement** kubernetes pod security standards.
- Capability: Agent for auditing Kubernetes Pod Security Standards enforcement.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, kubernetes, security, standards`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run kubectl and return JSON
2. Audit PSA labels on all namespaces
3. Audit pods against Pod Security Standards
4. Generate PSA label patch for a namespace
5. Generate PSS compliance summary

## Key concepts

- No restrictions applied
- Used for: kube-system, monitoring agents, CNI plugins, storage drivers
- Use PSA in enforce mode for production namespaces
- Set restricted profile as default for all non-system namespaces
- Require seccomp profiles on all pods
- Prevent privileged containers in all workload namespaces
- Require non-root user for all containers
- Drop all capabilities and only add NET_BIND_SERVICE if needed

## Tools & resources

- Kubernetes
- Pod Security Standard Levels
- PSA Modes
- Baseline Violations

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

- `kubectl_json` — Run kubectl and return JSON.
- `audit_namespace_labels` — Audit PSA labels on all namespaces.
- `audit_pod_security` — Audit pods against Pod Security Standards.
- `generate_namespace_labels` — Generate PSA label patch for a namespace.
- `generate_compliance_report` — Generate PSS compliance summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-kubernetes-pod-security-standards`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
