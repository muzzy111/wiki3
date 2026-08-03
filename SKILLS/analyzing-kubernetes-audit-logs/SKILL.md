---
name: analyzing-kubernetes-audit-logs
description: "Agent for analyzing Kubernetes audit logs for security threats. Use when the user asks to analyze kubernetes audit logs."
version: 1.0.0
tags:
  - analyzing
  - cloud
source: analyzing-kubernetes-audit-logs
---

# Analyzing Kubernetes Audit Logs

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Kubernetes, Security-Critical Audit Events, Audit Policy Levels, Python Parsing

## When to use

- The user wants to **analyze** kubernetes audit logs.
- Capability: Agent for analyzing Kubernetes audit logs for security threats.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, kubernetes, audit, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Kubernetes audit log file (JSON lines format)
2. Detect kubectl exec and attach events (shell access to pods)
3. Detect access to Kubernetes secrets
4. Detect RBAC role and binding modifications
5. Detect creation of privileged pods
6. Detect API access by anonymous or unauthenticated users
7. Detect 403 surges indicating enumeration or brute force

## Tools & resources

- Kubernetes
- Security-Critical Audit Events
- Audit Policy Levels
- Python Parsing

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

- `parse_audit_log` — Parse Kubernetes audit log file (JSON lines format).
- `detect_pod_exec` — Detect kubectl exec and attach events (shell access to pods).
- `detect_secret_access` — Detect access to Kubernetes secrets.
- `detect_rbac_changes` — Detect RBAC role and binding modifications.
- `detect_privileged_pods` — Detect creation of privileged pods.
- `detect_anonymous_access` — Detect API access by anonymous or unauthenticated users.
- `detect_forbidden_surge` — Detect 403 surges indicating enumeration or brute force.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-kubernetes-audit-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
