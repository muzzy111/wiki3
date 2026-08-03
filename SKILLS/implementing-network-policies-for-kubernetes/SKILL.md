---
name: implementing-network-policies-for-kubernetes
description: "Kubernetes Network Policy Agent - audits pod-to-pod communication and network policy coverage. Use when the user asks to implement network policies for kubernetes."
version: 1.0.0
tags:
  - implementing
  - cloud
  - network
source: implementing-network-policies-for-kubernetes
---

# Implementing Network Policies for Kubernetes

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Kubernetes

## When to use

- The user wants to **implement** network policies for kubernetes.
- Capability: Kubernetes Network Policy Agent - audits pod-to-pod communication and network policy coverage.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, policies, kubernetes`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute kubectl command and return JSON output
2. Determine which pods are covered by network policies
3. Find network policies that allow all traffic
4. Check which namespaces have default-deny policies

## Key concepts

- Implement network segmentation between namespaces
- Apply default-deny network policies
- Restrict pod-to-pod communication to required paths only
- Block access to cloud metadata endpoints

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

- `kubectl_json` — Execute kubectl command and return JSON output.
- `get_namespaces`
- `get_network_policies`
- `get_pods`
- `analyze_policy_coverage` — Determine which pods are covered by network policies.
- `detect_overly_permissive_policies` — Find network policies that allow all traffic.
- `analyze_namespace_isolation` — Check which namespaces have default-deny policies.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-policies-for-kubernetes`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
