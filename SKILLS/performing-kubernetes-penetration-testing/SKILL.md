---
name: performing-kubernetes-penetration-testing
description: "Agent for performing Kubernetes penetration testing — authorized testing only. Use when the user asks to perform kubernetes penetration testing."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-kubernetes-penetration-testing
---

# Performing Kubernetes Penetration Testing

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Kubernetes

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** kubernetes penetration testing.
- Capability: Agent for performing Kubernetes penetration testing — authorized testing only.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, kubernetes, penetration, testing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Enumerate basic cluster information for reconnaissance
2. Test what the default service account can do
3. Check for exposed Kubernetes dashboards and management interfaces
4. Check for container escape vectors in running pods

## Key concepts

- Scan containers and pods for vulnerabilities
- Run containers as non-root users
- Use network policies to restrict traffic
- Encrypt secrets at rest
- Audit logging for all API calls
- Scan for misconfigurations regularly

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `enumerate_cluster_info` — Enumerate basic cluster information for reconnaissance.
- `test_service_account_permissions` — Test what the default service account can do.
- `scan_exposed_dashboards` — Check for exposed Kubernetes dashboards and management interfaces.
- `check_pod_escape_vectors` — Check for container escape vectors in running pods.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-kubernetes-penetration-testing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
