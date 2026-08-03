---
name: detecting-container-drift-at-runtime
description: "Container drift detection agent using Docker SDK. Compares running container filesystem against the original image to detect binary drift, file modifications, and package installations. Use when the user asks to detect container drift at runtime."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-container-drift-at-runtime
---

# Detecting Container Drift At Runtime

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Docker SDK for Python, Falco Drift Detection Rules, Kubernetes Security Context, Drift Severity Classification, Industry Standards

## When to use

- The user wants to **detect** container drift at runtime.
- Capability: Container drift detection agent using Docker SDK. Compares running container filesystem against the original image to detect binary drift, file modifications, and package installations.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, container, drift, runtime`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Container image deployed with known-good state
2. Runtime monitor (Falco/Sysdig) tracks all process executions and file changes
3. Events compared against baseline: original image manifest + expected runtime behavior
4. Drift events classified by severity (binary drift = HIGH, config drift = MEDIUM)
5. Alerts sent to SIEM/SOC with full container context
6. Automated response: isolate pod network, capture forensics, evict pod
7. **Triage**: Is the drift from a legitimate operation or potential compromise?
8. **Contain**: Apply NetworkPolicy deny-all to affected pod
9. **Collect**: Capture container filesystem diff, process tree, network connections
10. **Analyze**: Compare drifted files against malware signatures and IoCs

## Key concepts

- Section 3.3: Containers modified at runtime indicate compromise
- Section 4.2: Monitor containers for unauthorized changes
- Recommends treating containers as immutable infrastructure
- Control 5.2.8: Minimize container readOnlyRootFilesystem
- Control 5.7.3: Apply security contexts to pods
- Control 5.7.4: Default namespace restrictions
- T1610: Deploy Container -- unauthorized container deployment
- T1611: Escape to Host -- container boundary violation

## Tools & resources

- Docker SDK for Python
- Falco Drift Detection Rules
- Kubernetes Security Context
- Drift Severity Classification
- Industry Standards

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

- `get_container_diff`
- `get_running_processes`
- `detect_drift_indicators`
- `check_image_digest`
- `audit_container`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-container-drift-at-runtime`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
