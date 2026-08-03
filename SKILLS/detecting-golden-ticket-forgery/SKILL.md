---
name: detecting-golden-ticket-forgery
description: "Detect Kerberos Golden Ticket forgery via Windows Security event log analysis. Use when the user asks to detect golden ticket forgery."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-golden-ticket-forgery
---

# Detecting Golden Ticket Forgery

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Detection Indicators, Elastic KQL

## When to use

- The user wants to **detect** golden ticket forgery.
- Capability: Detect Kerberos Golden Ticket forgery via Windows Security event log analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, golden, ticket, forgery`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse exported Windows Security event log XML for Kerberos events 4768/4769
2. Detect RC4 encryption (0x17) in TGS requests where AES should be enforced
3. Detect TGS requests (4769) without preceding TGT request (4768) from same user
4. Detect tickets with lifetime exceeding domain policy (default MaxTicketAge=10h)
5. Detect TGS requests targeting the krbtgt service (unusual and suspicious)
6. Return Splunk SPL queries for Golden Ticket detection

## Tools & resources

- Detection Indicators
- Elastic KQL

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

- `parse_security_events` — Parse exported Windows Security event log XML for Kerberos events 4768/4769.
- `detect_rc4_in_aes_environment` — Detect RC4 encryption (0x17) in TGS requests where AES should be enforced.
- `detect_orphaned_tgs` — Detect TGS requests (4769) without preceding TGT request (4768) from same user.
- `detect_abnormal_ticket_lifetime` — Detect tickets with lifetime exceeding domain policy (default MaxTicketAge=10h).
- `detect_krbtgt_service_anomaly` — Detect TGS requests targeting the krbtgt service (unusual and suspicious).
- `generate_splunk_queries` — Return Splunk SPL queries for Golden Ticket detection.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-golden-ticket-forgery`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
