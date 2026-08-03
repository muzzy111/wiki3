---
name: performing-container-escape-detection
description: "Agent for detecting container escape vectors in Kubernetes. Use when the user asks to perform container escape detection."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-container-escape-detection
---

# Performing Container Escape Detection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** kubernetes Python Client, Container Escape Vectors, Dangerous Linux Capabilities

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** container escape detection.
- Capability: Agent for detecting container escape vectors in Kubernetes.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, container, escape, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load Kubernetes configuration
2. Find pods running privileged containers
3. Find containers with dangerous Linux capabilities
4. Find pods sharing host PID, network, or IPC namespaces
5. Find pods with dangerous hostPath volume mounts
6. Specifically detect Docker/CRI socket mounts
7. Find containers running as root

## Tools & resources

- kubernetes Python Client
- Container Escape Vectors
- Dangerous Linux Capabilities

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
- `check_privileged_containers` — Find pods running privileged containers.
- `check_dangerous_capabilities` — Find containers with dangerous Linux capabilities.
- `check_host_namespaces` — Find pods sharing host PID, network, or IPC namespaces.
- `check_dangerous_mounts` — Find pods with dangerous hostPath volume mounts.
- `check_docker_socket` — Specifically detect Docker/CRI socket mounts.
- `check_root_containers` — Find containers running as root.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-container-escape-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
