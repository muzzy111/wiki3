---
name: analyzing-docker-container-forensics
description: "Docker container forensics agent for investigating compromised containers. Use when the user asks to analyze docker container forensics."
version: 1.0.0
tags:
  - analyzing
  - cloud
  - forensics
source: analyzing-docker-container-forensics
---

# Analyzing Docker Container Forensics

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Docker, dive, container-diff, Trivy

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** docker container forensics.
- Capability: Docker container forensics agent for investigating compromised containers.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, docker, container, forensics`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. List Docker containers with detailed information
2. Get detailed container inspection data
3. Analyze container security configuration for misconfigurations
4. Get filesystem changes between container and its image
5. Analyze filesystem changes for indicators of compromise
6. Export container filesystem as a tarball for offline analysis
7. Retrieve container logs with timestamps
8. Run Trivy vulnerability scan on a container image

## Tools & resources

- Docker
- dive
- container-diff
- Trivy

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

- `list_containers` — List Docker containers with detailed information.
- `inspect_container` — Get detailed container inspection data.
- `analyze_security_config` — Analyze container security configuration for misconfigurations.
- `get_filesystem_changes` — Get filesystem changes between container and its image.
- `detect_suspicious_files` — Analyze filesystem changes for indicators of compromise.
- `export_container` — Export container filesystem as a tarball for offline analysis.
- `get_container_logs` — Retrieve container logs with timestamps.
- `scan_image_vulnerabilities` — Run Trivy vulnerability scan on a container image.
- `generate_report` — Generate a forensic analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-docker-container-forensics`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
