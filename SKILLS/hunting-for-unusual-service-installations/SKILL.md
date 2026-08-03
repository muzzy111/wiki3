---
name: hunting-for-unusual-service-installations
description: "Agent for hunting suspicious Windows service installations (T1543.003) via Event ID 7045. Use when the user asks to hunt for unusual service installations."
version: 1.0.0
tags:
  - hunting
source: hunting-for-unusual-service-installations
---

# Hunting for Unusual Service Installations

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Legitimate Service Path Prefixes

## When to use

- The user wants to **hunt for** unusual service installations.
- Capability: Agent for hunting suspicious Windows service installations (T1543.003) via Event ID 7045.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, unusual, service, installations`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse System.evtx and extract Event ID 7045 records
2. Analyze a service binary path for suspicious indicators
3. Main hunting function: parse events and analyze each service
4. Generate summary statistics from hunting results
5. Run comprehensive service installation threat hunt

## Tools & resources

- Legitimate Service Path Prefixes

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

- `parse_evtx_events` — Parse System.evtx and extract Event ID 7045 records.
- `analyze_service_path` — Analyze a service binary path for suspicious indicators.
- `hunt_suspicious_services` — Main hunting function: parse events and analyze each service.
- `generate_statistics` — Generate summary statistics from hunting results.
- `full_hunt` — Run comprehensive service installation threat hunt.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-unusual-service-installations`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
