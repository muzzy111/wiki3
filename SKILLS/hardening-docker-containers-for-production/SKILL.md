---
name: hardening-docker-containers-for-production
description: "Agent for auditing Docker container security and applying CIS hardening. Use when the user asks to hardening docker containers for production."
version: 1.0.0
tags:
  - hardening
  - cloud
  - threat-intel
source: hardening-docker-containers-for-production
---

# Hardening Docker Containers for Production

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Docker, Seccomp and AppArmor, NIST SP 800-190

## When to use

- The user wants to **harde** docker containers for production.
- Capability: Agent for auditing Docker container security and applying CIS hardening.
- Goal: complete the task.
- Trigger keywords: `hardening, docker, containers, production`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List running Docker containers with details
2. Get detailed container configuration
3. Audit a container against CIS Docker Benchmark checks

## Key concepts

- Use container-specific host OS (CoreOS, Flatcar, Bottlerocket)
- Segment container networks by sensitivity level
- Use container runtime with minimal attack surface
- Implement image signing and verification
- Harden container registries with access controls
- Monitor container runtime behavior for anomalies

## Tools & resources

- Docker
- Seccomp and AppArmor
- NIST SP 800-190

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

- `get_running_containers` — List running Docker containers with details.
- `inspect_container` — Get detailed container configuration.
- `audit_container` — Audit a container against CIS Docker Benchmark checks.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hardening-docker-containers-for-production`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
