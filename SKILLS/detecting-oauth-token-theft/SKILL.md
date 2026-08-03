---
name: detecting-oauth-token-theft
description: "OAuth token theft detection agent. Analyzes sign-in logs for impossible travel, new device sign-ins, token replay from unusual IPs, and anomalous scope requests. Use when the user asks to detect oauth token theft."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - identity
source: detecting-oauth-token-theft
---

# Detecting Oauth Token Theft

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Microsoft Graph Sign-In Logs, Okta System Log API, Detection Logic

## When to use

- The user wants to **detect** oauth token theft.
- Capability: OAuth token theft detection agent. Analyzes sign-in logs for impossible travel, new device sign-ins, token replay from unusual IPs, and anomalous scope requests.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, oauth, token, theft`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate great-circle distance between two points in km
2. Detect impossible travel based on geo and time between logins
3. Detect token replay from multiple IPs in short timeframe
4. Detect sign-ins from previously unseen devices
5. Detect OAuth requests with overly broad or sensitive scopes

## Tools & resources

- Microsoft Graph Sign-In Logs
- Okta System Log API
- Detection Logic

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

- `haversine` — Calculate great-circle distance between two points in km.
- `detect_impossible_travel` — Detect impossible travel based on geo and time between logins.
- `detect_token_replay` — Detect token replay from multiple IPs in short timeframe.
- `detect_new_device` — Detect sign-ins from previously unseen devices.
- `detect_suspicious_scopes` — Detect OAuth requests with overly broad or sensitive scopes.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-oauth-token-theft`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
