---
name: analyzing-web-server-logs-for-intrusion
description: "Web Server Log Intrusion Analyzer - Detects SQLi, LFI, XSS, and scanner activity in access logs. Use when the user asks to analyze web server logs for intrusion."
version: 1.0.0
tags:
  - analyzing
  - appsec
source: analyzing-web-server-logs-for-intrusion
---

# Analyzing Web Server Logs for Intrusion

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Python re Module, GeoIP2 Python Library, Attack Signature Categories, Scanner User-Agent Signatures

## When to use

- The user wants to **analyze** web server logs for intrusion.
- Capability: Web Server Log Intrusion Analyzer - Detects SQLi, LFI, XSS, and scanner activity in access logs.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, server, logs, intrusion`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse a single Combined Log Format line
2. Parse all entries from a web server access log
3. Scan log entries for attack signatures
4. Detect brute-force login attempts by IP frequency
5. Enrich findings with GeoIP location data
6. Aggregate findings by source IP for attacker profiling
7. Generate web intrusion detection report

## Tools & resources

- Python re Module
- GeoIP2 Python Library
- Attack Signature Categories
- Scanner User-Agent Signatures

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

- `parse_log_line` — Parse a single Combined Log Format line.
- `parse_log_file` — Parse all entries from a web server access log.
- `detect_attacks` — Scan log entries for attack signatures.
- `detect_brute_force` — Detect brute-force login attempts by IP frequency.
- `enrich_with_geoip` — Enrich findings with GeoIP location data.
- `summarize_attackers` — Aggregate findings by source IP for attacker profiling.
- `generate_report` — Generate web intrusion detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-web-server-logs-for-intrusion`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
