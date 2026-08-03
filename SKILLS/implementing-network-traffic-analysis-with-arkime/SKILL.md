---
name: implementing-network-traffic-analysis-with-arkime
description: "Arkime Network Traffic Analysis Agent - Queries Arkime API for session analysis and anomaly detection. Use when the user asks to implement network traffic analysis with arkime."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-traffic-analysis-with-arkime
---

# Implementing Network Traffic Analysis with Arkime

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Arkime, Session Search, PCAP Download, Session Fields, Search Expressions, Beaconing Detection Logic

## When to use

- The user wants to **implement** network traffic analysis with arkime.
- Capability: Arkime Network Traffic Analysis Agent - Queries Arkime API for session analysis and anomaly detection.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, traffic, analysis, arkime`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Make an authenticated request to Arkime API v3
2. Search Arkime sessions with an expression filter
3. Get connection graph data from Arkime
4. Get SPI view field statistics from Arkime
5. Detect C2 beaconing by analyzing connection intervals
6. Detect DNS tunneling via abnormally long DNS queries
7. Detect unusually large data transfers
8. Detect TLS certificate anomalies (self-signed, expired, unusual issuers)

## Tools & resources

- Arkime
- Session Search
- PCAP Download
- Session Fields
- Search Expressions
- Beaconing Detection Logic

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

- `arkime_request` — Make an authenticated request to Arkime API v3.
- `search_sessions` — Search Arkime sessions with an expression filter.
- `get_connections` — Get connection graph data from Arkime.
- `get_spi_view` — Get SPI view field statistics from Arkime.
- `detect_beaconing` — Detect C2 beaconing by analyzing connection intervals.
- `detect_dns_tunneling` — Detect DNS tunneling via abnormally long DNS queries.
- `detect_large_transfers` — Detect unusually large data transfers.
- `detect_tls_anomalies` — Detect TLS certificate anomalies (self-signed, expired, unusual issuers).
- `generate_report` — Generate network traffic analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-traffic-analysis-with-arkime`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
