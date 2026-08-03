---
name: performing-kubernetes-cis-benchmark-with-kube-bench
description: "Agent for performing Kubernetes CIS benchmark assessment with kube-bench. Use when the user asks to perform kubernetes cis benchmark with kube bench."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-kubernetes-cis-benchmark-with-kube-bench
---

# Performing Kubernetes CIS Benchmark with Kube Bench

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Kubernetes, Pod Security Issues Detected, Compliance Frameworks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** kubernetes cis benchmark with kube bench.
- Capability: Agent for performing Kubernetes CIS benchmark assessment with kube-bench.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, kubernetes, benchmark, kube, bench`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute kube-bench CIS benchmark scan
2. Check pod security settings via kubectl
3. Audit RBAC configuration for overly permissive roles
4. Verify network policies exist and cover pods

## Key concepts

- Section 1: Kubernetes Pod Security
- Section 2: Network Separation and Hardening
- Section 3: Authentication and Authorization
- Section 4: Audit Logging and Threat Detection
- Req 2.2: Develop configuration standards for all system components
- Req 6.3.2: Develop software securely
- CC6.1: Logical access security for system components
- CC8.1: Change management controls

## Tools & resources

- Kubernetes
- Pod Security Issues Detected
- Compliance Frameworks

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

- `run_kube_bench` — Execute kube-bench CIS benchmark scan.
- `check_pod_security` — Check pod security settings via kubectl.
- `check_rbac_config` — Audit RBAC configuration for overly permissive roles.
- `check_network_policies` — Verify network policies exist and cover pods.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-kubernetes-cis-benchmark-with-kube-bench`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
