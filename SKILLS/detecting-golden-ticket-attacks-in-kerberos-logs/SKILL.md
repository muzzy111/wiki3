---
name: detecting-golden-ticket-attacks-in-kerberos-logs
description: "Golden Ticket attack detection agent for Kerberos log analysis. Parses Windows Security Event IDs 4768, 4769, 4771 to detect forged TGTs with anomalous encryption types, impossible lifetimes, and non-existent accounts. Use when the user asks to detect golden ticket attacks in kerberos logs."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - active-directory
source: detecting-golden-ticket-attacks-in-kerberos-logs
---

# Detecting Golden Ticket Attacks in Kerberos Logs

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Kerberos Encryption Types, python-evtx Usage, Splunk SPL Detection, Mimikatz Golden Ticket Command

## When to use

- The user wants to **detect** golden ticket attacks in kerberos logs.
- Capability: Golden Ticket attack detection agent for Kerberos log analysis. Parses Windows Security Event IDs 4768, 4769, 4771 to detect forged TGTs with anomalous encryption types, impossible lifetimes, and non-existent accounts.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, golden, ticket, attacks, kerberos, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to golden ticket attacks in kerberos logs
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- Kerberos Encryption Types
- python-evtx Usage
- Splunk SPL Detection
- Mimikatz Golden Ticket Command

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

- `parse_kerberos_events`
- `generate_sigma_rule`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-golden-ticket-attacks-in-kerberos-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
