---
name: detecting-beaconing-patterns-with-zeek
description: "Agent for detecting C2 beaconing patterns in Zeek conn.log data. Use when the user asks to detect beaconing patterns with zeek."
version: 1.0.0
tags:
  - detecting
  - malware
  - network
  - threat-intel
source: detecting-beaconing-patterns-with-zeek
---

# Detecting Beaconing Patterns with ZEEK

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Zeek, Beaconing Detection Math

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** beaconing patterns with zeek.
- Capability: Agent for detecting C2 beaconing patterns in Zeek conn.log data.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, beaconing, patterns, zeek`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load Zeek conn.log into a Pandas DataFrame using ZAT
2. Calculate a beacon score based on interval regularity
3. Detect beaconing by analyzing connection interval regularity
4. Detect beaconing with expected interval and jitter tolerance
5. Analyze Zeek dns.log for DNS-based beaconing patterns
6. Remove known-good destinations from beacon results

## Tools & resources

- Zeek
- Beaconing Detection Math

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

- `load_conn_log` — Load Zeek conn.log into a Pandas DataFrame using ZAT.
- `calculate_beacon_score` — Calculate a beacon score based on interval regularity.
- `detect_beaconing` — Detect beaconing by analyzing connection interval regularity.
- `detect_jitter_beaconing` — Detect beaconing with expected interval and jitter tolerance.
- `analyze_dns_beaconing` — Analyze Zeek dns.log for DNS-based beaconing patterns.
- `filter_whitelisted` — Remove known-good destinations from beacon results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-beaconing-patterns-with-zeek`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
