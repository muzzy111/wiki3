---
name: implementing-cloud-trail-log-analysis
description: "CloudTrail log analysis agent for security monitoring and threat detection. Use when the user asks to implement cloud trail log analysis."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-cloud-trail-log-analysis
---

# Implementing Cloud Trail Log Analysis

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Lookup Attributes, CloudWatch Logs Insights, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** cloud trail log analysis.
- Capability: CloudTrail log analysis agent for security monitoring and threat detection.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cloud, trail, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create CloudTrail client
2. Look up CloudTrail events with optional filtering
3. Scan CloudTrail for suspicious API calls
4. Detect failed authentication attempts
5. Detect API calls from unauthorized AWS regions
6. Analyze all activity for a specific user
7. Run comprehensive CloudTrail security analysis

## Tools & resources

- Lookup Attributes
- CloudWatch Logs Insights
- External References

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

- `get_cloudtrail_client` — Create CloudTrail client.
- `lookup_events` — Look up CloudTrail events with optional filtering.
- `detect_suspicious_activity` — Scan CloudTrail for suspicious API calls.
- `detect_failed_auth` — Detect failed authentication attempts.
- `detect_unauthorized_regions` — Detect API calls from unauthorized AWS regions.
- `analyze_user_activity` — Analyze all activity for a specific user.
- `run_cloudtrail_analysis` — Run comprehensive CloudTrail security analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cloud-trail-log-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
