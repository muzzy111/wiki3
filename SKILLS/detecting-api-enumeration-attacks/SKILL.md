---
name: detecting-api-enumeration-attacks
description: "API enumeration attack detection. Use when the user asks to detect api enumeration attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-api-enumeration-attacks
---

# Detecting API Enumeration Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Detection Techniques, Common Enumeration Paths, WAF Rule Categories, External References

## When to use

- The user wants to **detect** api enumeration attacks.
- Capability: API enumeration attack detection agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, enumeration, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse NGINX/Apache combined log format for API requests
2. Detect sequential ID enumeration in API paths
3. Detect abnormal request rates per IP to API endpoints
4. Detect API path/endpoint enumeration patterns
5. Query WAF API for blocked enumeration attempts
6. Execute API enumeration detection audit

## Tools & resources

- Detection Techniques
- Common Enumeration Paths
- WAF Rule Categories
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

- `parse_access_log` — Parse NGINX/Apache combined log format for API requests.
- `detect_sequential_ids` — Detect sequential ID enumeration in API paths.
- `detect_rate_anomalies` — Detect abnormal request rates per IP to API endpoints.
- `detect_path_enumeration` — Detect API path/endpoint enumeration patterns.
- `query_waf_logs` — Query WAF API for blocked enumeration attempts.
- `run_audit` — Execute API enumeration detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-api-enumeration-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
