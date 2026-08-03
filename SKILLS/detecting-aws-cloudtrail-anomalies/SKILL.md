---
name: detecting-aws-cloudtrail-anomalies
description: "Agent for detecting anomalies in AWS CloudTrail logs. Queries CloudTrail events via boto3, builds behavioral baselines, and detects unusual API patterns indicating credential compromise, privilege escalation, or.... Use when the user asks to detect aws cloudtrail anomalies."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-aws-cloudtrail-anomalies
---

# Detecting AWS Cloudtrail Anomalies

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** AWS, boto3 CloudTrail API, Rate Limits

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** aws cloudtrail anomalies.
- Capability: Agent for detecting anomalies in AWS CloudTrail logs. Queries CloudTrail events via boto3, builds behavioral baselines, and detects unusual API patterns indicating credential compromise, privilege escalation, or unauthorized access.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, cloudtrail, anomalies`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to aws cloudtrail anomalies
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- AWS
- boto3 CloudTrail API
- Rate Limits

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-aws-cloudtrail-anomalies`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
