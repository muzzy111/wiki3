---
name: detecting-cryptomining-in-cloud
description: "Cloud cryptomining detection agent with multi-signal analysis. Use when the user asks to detect cryptomining in cloud."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-cryptomining-in-cloud
---

# Detecting Cryptomining in Cloud

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Detection Signal Categories, GuardDuty Crypto Findings, CloudWatch CPU Alarm, AWS Cost Anomaly Detection, Known Mining Pool Domains, Instance Remediation

## When to use

- The user wants to **detect** cryptomining in cloud.
- Capability: Cloud cryptomining detection agent with multi-signal analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, cryptomining, cloud`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute AWS CLI command and return parsed JSON
2. Retrieve GuardDuty cryptocurrency-related findings
3. Find EC2 instances with sustained high CPU utilization
4. Create AWS Cost Anomaly Detection monitor for EC2 spikes
5. Check CloudTrail for unusual instance launch patterns
6. Query VPC Flow Logs for traffic to mining pool ports
7. Isolate a mining instance by modifying its security group
8. Generate comprehensive cryptomining detection report

## Tools & resources

- Detection Signal Categories
- GuardDuty Crypto Findings
- CloudWatch CPU Alarm
- AWS Cost Anomaly Detection
- Known Mining Pool Domains
- Instance Remediation

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

- `aws_cli` — Execute AWS CLI command and return parsed JSON.
- `get_guardduty_crypto_findings` — Retrieve GuardDuty cryptocurrency-related findings.
- `check_high_cpu_instances` — Find EC2 instances with sustained high CPU utilization.
- `create_cost_anomaly_monitor` — Create AWS Cost Anomaly Detection monitor for EC2 spikes.
- `check_cloudtrail_instance_launches` — Check CloudTrail for unusual instance launch patterns.
- `query_vpc_flow_logs_mining` — Query VPC Flow Logs for traffic to mining pool ports.
- `isolate_mining_instance` — Isolate a mining instance by modifying its security group.
- `generate_report` — Generate comprehensive cryptomining detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-cryptomining-in-cloud`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
