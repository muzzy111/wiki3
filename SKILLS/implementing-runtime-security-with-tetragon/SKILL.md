---
name: implementing-runtime-security-with-tetragon
description: "Agent for auditing Cilium Tetragon runtime security configuration. Use when the user asks to implement runtime security with tetragon."
version: 1.0.0
tags:
  - implementing
source: implementing-runtime-security-with-tetragon
---

# Implementing Runtime Security with Tetragon

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** TracingPolicy CRD, Industry Standards, CNCF Landscape Positioning

## When to use

- The user wants to **implement** runtime security with tetragon.
- Capability: Agent for auditing Cilium Tetragon runtime security configuration.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, runtime, security, tetragon`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check if Tetragon is deployed in the cluster
2. Check TracingPolicy custom resources
3. Check tetra CLI availability and events

## Key concepts

- Section 4.2: Runtime monitoring and anomaly detection for containers
- Section 4.4: Container-level network monitoring requirements
- Recommends kernel-level security monitoring for container environments
- Control 5.7.1: Create administrative boundaries between resources using namespaces
- Control 5.7.3: Apply Security Context to pods and containers
- Control 5.7.4: The default namespace should not be used
- T1611: Escape to Host -- Tetragon detects namespace manipulation attempts
- T1059.004: Command and Scripting Interpreter: Unix Shell -- process execution monitoring

## Tools & resources

- TracingPolicy CRD
- Industry Standards
- CNCF Landscape Positioning

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

- `check_tetragon_deployment` — Check if Tetragon is deployed in the cluster.
- `check_tracing_policies` — Check TracingPolicy custom resources.
- `check_tetragon_cli` — Check tetra CLI availability and events.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-runtime-security-with-tetragon`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
