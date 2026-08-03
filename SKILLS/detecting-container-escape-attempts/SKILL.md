---
name: detecting-container-escape-attempts
description: "Container escape detection agent using Falco output parsing and audit log analysis. Monitors for container escape indicators by parsing Falco JSON alerts, auditd logs, and Docker inspect data for.... Use when the user asks to detect container escape attempts."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-container-escape-attempts
---

# Detecting Container Escape Attempts

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Docker CLI Inspection, Dangerous Linux Capabilities, Known Container Escape CVEs, NIST SP 800-190

## When to use

- The user wants to **detect** container escape attempts.
- Capability: Container escape detection agent using Falco output parsing and audit log analysis. Monitors for container escape indicators by parsing Falco JSON alerts, auditd logs, and Docker inspect data for privileged/vulnerable containers.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, container, escape, attempts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to container escape attempts
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Key concepts

- Tactic: Privilege Escalation
- Description: Adversaries may escape container isolation and gain access to the host
- Sub-techniques: Privileged container, nsenter, cgroup escape, kernel exploit
- Detection: Monitor for namespace manipulation, sensitive path access, privilege changes
- Description: Deploy a new container using Docker socket access from within a container
- Description: Exploit kernel vulnerabilities for container escape (Dirty Pipe, runc CVEs)
- Sub-technique: T1548.004 - Elevated Execution with Prompt
- Description: Abuse Linux capabilities like CAP_SYS_ADMIN for escape

## Tools & resources

- Docker CLI Inspection
- Dangerous Linux Capabilities
- Known Container Escape CVEs
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

- `parse_falco_json`
- `parse_auditd_escape_events`
- `check_privileged_containers`
- `check_dangerous_capabilities`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-container-escape-attempts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
