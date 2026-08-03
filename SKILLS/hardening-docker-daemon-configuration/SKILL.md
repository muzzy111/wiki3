---
name: hardening-docker-daemon-configuration
description: "Agent for auditing and hardening Docker daemon configuration. Use when the user asks to hardening docker daemon configuration."
version: 1.0.0
tags:
  - hardening
  - cloud
source: hardening-docker-daemon-configuration
---

# Hardening Docker Daemon Configuration

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Docker, daemon.json Location, Recommended daemon.json, File Permission Checks, NIST SP 800-190, Compliance Mappings

## When to use

- The user wants to **harde** docker daemon configuration.
- Capability: Agent for auditing and hardening Docker daemon configuration.
- Goal: complete the task.
- Trigger keywords: `hardening, docker, daemon, configuration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Read Docker daemon.json configuration
2. Audit daemon.json against CIS benchmarks
3. Check Docker socket permissions
4. Audit Docker configuration file permissions

## Key concepts

- Section 4.1.4: Configuration defects in container images
- Section 5.1: Image security - Content trust enforcement
- Section 5.3: Daemon hardening recommendations
- Rule 0: Keep host and Docker up to date
- Rule 1: Do not expose the Docker daemon socket
- Rule 3: Limit capabilities
- Rule 4: Add no-new-privileges flag
- Rule 5: Disable inter-container communication

## Tools & resources

- Docker
- daemon.json Location
- Recommended daemon.json
- File Permission Checks
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

- `read_daemon_config` — Read Docker daemon.json configuration.
- `audit_daemon_config` — Audit daemon.json against CIS benchmarks.
- `check_docker_socket` — Check Docker socket permissions.
- `check_docker_files` — Audit Docker configuration file permissions.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hardening-docker-daemon-configuration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
