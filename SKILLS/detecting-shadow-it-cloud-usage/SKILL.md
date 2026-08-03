---
name: detecting-shadow-it-cloud-usage
description: "Agent for detecting shadow IT cloud usage via proxy logs, DNS queries, and netflow. Use when the user asks to detect shadow it cloud usage."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-shadow-it-cloud-usage
---

# Detecting Shadow It Cloud Usage

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** shadow it cloud usage.
- Capability: Agent for detecting shadow IT cloud usage via proxy logs, DNS queries, and netflow.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, shadow, cloud, usage`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load approved SaaS domain list from a text file
2. Extract registered domain from URL or hostname
3. Parse proxy access log (Squid/common format) into structured records
4. Parse DNS query log (named/bind query log format)
5. Parse generic CSV log with columns: timestamp, src_ip, dst_domain, bytes_out, bytes_in
6. Classify a domain against known SaaS categories
7. Aggregate traffic by domain using pandas and classify
8. Run full shadow IT discovery audit

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

- `load_approved_list` — Load approved SaaS domain list from a text file.
- `extract_domain` — Extract registered domain from URL or hostname.
- `parse_proxy_log` — Parse proxy access log (Squid/common format) into structured records.
- `parse_dns_log` — Parse DNS query log (named/bind query log format).
- `parse_csv_log` — Parse generic CSV log with columns: timestamp, src_ip, dst_domain, bytes_out, bytes_in.
- `classify_domain` — Classify a domain against known SaaS categories.
- `analyze_traffic` — Aggregate traffic by domain using pandas and classify.
- `full_audit` — Run full shadow IT discovery audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-shadow-it-cloud-usage`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
