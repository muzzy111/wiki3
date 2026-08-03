---
name: hunting-for-beaconing-with-frequency-analysis
description: "Agent for detecting C2 beaconing through network traffic frequency analysis. Use when the user asks to hunt for beaconing with frequency analysis."
version: 1.0.0
tags:
  - hunting
  - malware
source: hunting-for-beaconing-with-frequency-analysis
---

# Hunting for Beaconing with Frequency Analysis

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Beaconing Characteristics, Jitter Calculation, Splunk SPL, Elastic SIEM, Common C2 Beacon Intervals, Beaconing Detection Thresholds

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** beaconing with frequency analysis.
- Capability: Agent for detecting C2 beaconing through network traffic frequency analysis.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, beaconing, frequency, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse Zeek conn.log and extract connection timestamps per src-dst pair
2. Calculate jitter (standard deviation of intervals)
3. Detect beaconing patterns based on interval regularity
4. Parse generic CSV log with timestamp, src, dst, port columns

## Key concepts

- Timestamp score: Regularity of connection intervals
- Data size score: Consistency of bytes transferred
- Connection count: Volume of connections in analysis window
- Duration: How long the beaconing pattern has persisted

## Tools & resources

- Beaconing Characteristics
- Jitter Calculation
- Splunk SPL
- Elastic SIEM
- Common C2 Beacon Intervals
- Beaconing Detection Thresholds
- RITA Beacon Scoring Algorithm

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

- `parse_zeek_conn_log` — Parse Zeek conn.log and extract connection timestamps per src-dst pair.
- `calculate_jitter` — Calculate jitter (standard deviation of intervals).
- `detect_beaconing` — Detect beaconing patterns based on interval regularity.
- `parse_csv_log` — Parse generic CSV log with timestamp, src, dst, port columns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-beaconing-with-frequency-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
