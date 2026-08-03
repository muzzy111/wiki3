---
name: hunting-for-cobalt-strike-beacons
description: "Cobalt Strike Beacon Hunter - detects beacon signatures in network traffic and Zeek logs. Use when the user asks to hunt for cobalt strike beacons."
version: 1.0.0
tags:
  - hunting
  - malware
source: hunting-for-cobalt-strike-beacons
---

# Hunting for Cobalt Strike Beacons

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Cobalt Strike, RITA Beacon Analysis, Suricata Detection Rules, Default User-Agent Strings, Beacon Timing Analysis Formula, JARM Scanner CLI

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** cobalt strike beacons.
- Capability: Cobalt Strike Beacon Hunter - detects beacon signatures in network traffic and Zeek logs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, cobalt, strike, beacons`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Zeek ssl.log for default Cobalt Strike certificates
2. Analyze connection timing for beacon-like regular intervals
3. Detect known Cobalt Strike HTTP malleable C2 profile patterns

## Tools & resources

- Cobalt Strike
- RITA Beacon Analysis
- Suricata Detection Rules
- Default User-Agent Strings
- Beacon Timing Analysis Formula
- JARM Scanner CLI

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

- `parse_zeek_ssl_log` — Parse Zeek ssl.log for default Cobalt Strike certificates.
- `analyze_beacon_timing` — Analyze connection timing for beacon-like regular intervals.
- `check_http_profiles` — Detect known Cobalt Strike HTTP malleable C2 profile patterns.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-cobalt-strike-beacons`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
