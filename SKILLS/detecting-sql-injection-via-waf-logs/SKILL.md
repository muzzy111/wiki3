---
name: detecting-sql-injection-via-waf-logs
description: "SQL Injection WAF Log Analysis Agent - Detects SQLi attacks from ModSecurity and WAF logs. Use when the user asks to detect sql injection via waf logs."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - appsec
source: detecting-sql-injection-via-waf-logs
---

# Detecting SQL Injection via WAF Logs

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** ModSecurity Audit Log Sections, SQL Injection Types, Campaign Detection Logic

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** sql injection via waf logs.
- Capability: SQL Injection WAF Log Analysis Agent - Detects SQLi attacks from ModSecurity and WAF logs.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, injection, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse ModSecurity audit log format
2. Parse JSON-formatted WAF logs (AWS WAF, Cloudflare)
3. Classify SQL injection type and severity from payload string
4. Analyze parsed ModSecurity entries for SQLi attacks
5. Analyze JSON WAF log entries for SQLi patterns
6. Identify SQLi attack campaigns by source IP clustering
7. Generate SQLi detection report

## Tools & resources

- ModSecurity Audit Log Sections
- SQL Injection Types
- Campaign Detection Logic

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

- `parse_modsecurity_audit_log` — Parse ModSecurity audit log format.
- `parse_json_waf_log` — Parse JSON-formatted WAF logs (AWS WAF, Cloudflare).
- `classify_sqli` — Classify SQL injection type and severity from payload string.
- `analyze_modsecurity_entries` — Analyze parsed ModSecurity entries for SQLi attacks.
- `analyze_json_waf_entries` — Analyze JSON WAF log entries for SQLi patterns.
- `correlate_campaigns` — Identify SQLi attack campaigns by source IP clustering.
- `generate_report` — Generate SQLi detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-sql-injection-via-waf-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
