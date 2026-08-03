---
name: detecting-pass-the-ticket-attacks
description: "Detect Kerberos Pass-the-Ticket attacks via Windows Event ID 4768/4769/4771 analysis. Use when the user asks to detect pass the ticket attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-pass-the-ticket-attacks
---

# Detecting Pass The Ticket Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  

## When to use

- The user wants to **detect** pass the ticket attacks.
- Capability: Detect Kerberos Pass-the-Ticket attacks via Windows Event ID 4768/4769/4771 analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, pass, ticket, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse exported Windows Security event log XML for Kerberos events
2. Detect RC4 encryption downgrade (TicketEncryptionType 0x17) in TGS requests
3. Detect same user TGS requests from multiple source IPs within short window
4. Detect users requesting abnormally high number of TGS tickets
5. Detect excessive Kerberos pre-authentication failures (Event ID 4771)
6. Return SPL queries for Splunk-based PtT detection

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

- `parse_evtx_xml` — Parse exported Windows Security event log XML for Kerberos events.
- `detect_rc4_downgrade` — Detect RC4 encryption downgrade (TicketEncryptionType 0x17) in TGS requests.
- `detect_cross_host_ticket_reuse` — Detect same user TGS requests from multiple source IPs within short window.
- `detect_anomalous_tgs_volume` — Detect users requesting abnormally high number of TGS tickets.
- `detect_preauth_failures` — Detect excessive Kerberos pre-authentication failures (Event ID 4771).
- `generate_splunk_queries` — Return SPL queries for Splunk-based PtT detection.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-pass-the-ticket-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
