---
name: implementing-cloud-workload-protection
description: "Agent for cloud workload protection on AWS EC2 instances. Use when the user asks to implement cloud workload protection."
version: 1.0.0
tags:
  - implementing
  - cloud
  - threat-intel
source: implementing-cloud-workload-protection
---

# Implementing Cloud Workload Protection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CloudWatch CPU Monitoring

## When to use

- The user wants to **implement** cloud workload protection.
- Capability: Agent for cloud workload protection on AWS EC2 instances.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cloud, workload, protection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. List all running EC2 instances
2. Execute commands on instances via SSM Run Command
3. Detect cryptomining processes on instances
4. Detect potential reverse shell connections
5. Check integrity of critical system files
6. Detect CPU usage anomalies via CloudWatch

## Tools & resources

- CloudWatch CPU Monitoring

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

- `get_running_instances` — List all running EC2 instances.
- `run_ssm_command` — Execute commands on instances via SSM Run Command.
- `scan_for_cryptominers` — Detect cryptomining processes on instances.
- `scan_for_reverse_shells` — Detect potential reverse shell connections.
- `check_file_integrity` — Check integrity of critical system files.
- `check_cpu_anomaly` — Detect CPU usage anomalies via CloudWatch.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cloud-workload-protection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
