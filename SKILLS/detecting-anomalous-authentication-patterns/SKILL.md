---
name: detecting-anomalous-authentication-patterns
description: "Authentication anomaly detection agent using UEBA analytics. Use when the user asks to detect anomalous authentication patterns."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-anomalous-authentication-patterns
---

# Detecting Anomalous Authentication Patterns

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Azure AD Sign, Okta System Log API

## When to use

- The user wants to **detect** anomalous authentication patterns.
- Capability: Authentication anomaly detection agent using UEBA analytics.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, anomalous, authentication, patterns`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate great-circle distance between two coordinates in km
2. Load authentication logs from CSV with columns: timestamp,user,source_ip,result,lat,lon,city,country,app,device
3. Detect logins from locations requiring travel speed above threshold
4. Detect brute force: many failures for same user in time window
5. Detect password spray: many users targeted from same IP
6. Build behavioral baseline for a user from historical events
7. Calculate composite risk score from detected anomalies
8. Run all detection modules on an auth log CSV file

## Tools & resources

- Azure AD Sign
- Okta System Log API

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

- `haversine_km` — Calculate great-circle distance between two coordinates in km.
- `load_auth_logs` — Load authentication logs from CSV with columns: timestamp,user,source_ip,result,lat,lon,city,country,app,device
- `detect_impossible_travel` — Detect logins from locations requiring travel speed above threshold.
- `detect_brute_force` — Detect brute force: many failures for same user in time window.
- `detect_password_spray` — Detect password spray: many users targeted from same IP.
- `build_user_baseline` — Build behavioral baseline for a user from historical events.
- `calculate_risk_score` — Calculate composite risk score from detected anomalies.
- `run_full_analysis` — Run all detection modules on an auth log CSV file.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-anomalous-authentication-patterns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
