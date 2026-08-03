---
name: implementing-pod-security-admission-controller
description: "Kubernetes Pod Security Admission audit agent. Audits Kubernetes namespaces and workloads for Pod Security Standards (PSS) compliance using kubectl. Checks namespace labels for enforce/audit/warn modes, analyzes pod.... Use when the user asks to implement pod security admission controller."
version: 1.0.0
tags:
  - implementing
source: implementing-pod-security-admission-controller
---

# Implementing Pod Security Admission Controller

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Operations, kubectl Equivalents, Kubernetes Pod Security Standards, CIS Kubernetes Benchmark v1.8, NIST SP 800-190, Compliance Mappings

## When to use

- The user wants to **implement** pod security admission controller.
- Capability: Kubernetes Pod Security Admission audit agent. Audits Kubernetes namespaces and workloads for Pod Security Standards (PSS) compliance using kubectl. Checks namespace labels for enforce/audit/warn modes, analyzes pod specs against Baseline and Restricted profiles, and reports violations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, admission, controller`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute a kubectl command and return parsed JSON output
2. Get all namespaces with their PSA labels
3. Audit PSA label configuration across namespaces
4. Audit pods for security spec violations against PSS profiles
5. Print audit summary

## Key concepts

- Section 4.3: Container runtime security
- Section 5.4: Admission control enforcement
- Section 1: Pod Security - Use Pod Security Standards
- PCI DSS v4.0 Req 2.2: Configuration standards
- SOC 2 CC6.1: Logical access controls
- HIPAA 164.312(a)(1): Access controls

## Tools & resources

- Core Operations
- kubectl Equivalents
- Kubernetes Pod Security Standards
- CIS Kubernetes Benchmark v1.8
- NIST SP 800-190
- Compliance Mappings

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

- `run_kubectl` — Execute a kubectl command and return parsed JSON output.
- `get_namespaces` — Get all namespaces with their PSA labels.
- `audit_namespace_psa` — Audit PSA label configuration across namespaces.
- `audit_pod_security` — Audit pods for security spec violations against PSS profiles.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-pod-security-admission-controller`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
