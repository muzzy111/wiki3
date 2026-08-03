---
name: detecting-email-account-compromise
description: "Email Account Compromise Detection agent - analyzes inbox rules, sign-in logs, and OAuth grants to detect O365/Google Workspace account compromise. Use when the user asks to detect email account compromise."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - email
source: detecting-email-account-compromise
---

# Detecting Email Account Compromise

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Inbox Rule Compromise Indicators, Sign-In Risk Indicators, Required API Permissions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** email account compromise.
- Capability: Email Account Compromise Detection agent - analyzes inbox rules, sign-in logs, and OAuth grants to detect O365/Google Workspace account compromise
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, email, account, compromise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Detect malicious inbox rules: external forwarding, deletion rules, keyword-based filters
2. Detect impossible travel, suspicious user agents, and risky sign-in patterns
3. Detect suspicious OAuth application consent grants

## Tools & resources

- Inbox Rule Compromise Indicators
- Sign-In Risk Indicators
- Required API Permissions

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

- `load_data`
- `haversine_km`
- `analyze_inbox_rules` — Detect malicious inbox rules: external forwarding, deletion rules, keyword-based filters.
- `analyze_sign_ins` — Detect impossible travel, suspicious user agents, and risky sign-in patterns.
- `analyze_oauth_grants` — Detect suspicious OAuth application consent grants.
- `analyze`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-email-account-compromise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
