---
name: detecting-insider-threat-with-ueba
description: "UEBA Insider Threat Agent - builds behavioral baselines and scores anomalies using Elasticsearch. Use when the user asks to detect insider threat with ueba."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-insider-threat-with-ueba
---

# Detecting Insider Threat with Ueba

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Insider Threat Indicators, Elasticsearch Python Client

## When to use

- The user wants to **detect** insider threat with ueba.
- Capability: UEBA Insider Threat Agent - builds behavioral baselines and scores anomalies using Elasticsearch.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, insider, threat, ueba`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Connect to Elasticsearch cluster
2. Build 30-day behavioral baseline per user using ES aggregations
3. Score current activity against baselines to find anomalies
4. Compare user activity against peer group averages

## Tools & resources

- Insider Threat Indicators
- Elasticsearch Python Client

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

- `connect_es` — Connect to Elasticsearch cluster.
- `build_user_baseline` — Build 30-day behavioral baseline per user using ES aggregations.
- `score_current_activity` — Score current activity against baselines to find anomalies.
- `peer_group_analysis` — Compare user activity against peer group averages.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-insider-threat-with-ueba`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
