---
name: hunting-for-command-and-control-beaconing
description: "Agent for hunting C2 beaconing across multiple data sources. Use when the user asks to hunt for command and control beaconing."
version: 1.0.0
tags:
  - hunting
  - malware
source: hunting-for-command-and-control-beaconing
---

# Hunting for Command and Control Beaconing

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Zeek Log Files, C2 Framework Signatures, DNS Tunneling Indicators, JA3/JA3S TLS Fingerprinting, Threat Intelligence Feeds, RITA Beacon Analysis

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** command and control beaconing.
- Capability: Agent for hunting C2 beaconing across multiple data sources.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, command, control, beaconing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze DNS query logs for C2 indicators
2. Analyze HTTP logs for C2-like traffic patterns
3. Detect persistent long-duration connections typical of C2

## Tools & resources

- Zeek Log Files
- C2 Framework Signatures
- DNS Tunneling Indicators
- JA3/JA3S TLS Fingerprinting
- Threat Intelligence Feeds
- RITA Beacon Analysis
- Beaconing Detection Thresholds
- Data Sources

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

- `analyze_dns_queries` — Analyze DNS query logs for C2 indicators.
- `analyze_http_logs` — Analyze HTTP logs for C2-like traffic patterns.
- `analyze_connection_patterns` — Detect persistent long-duration connections typical of C2.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-command-and-control-beaconing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
