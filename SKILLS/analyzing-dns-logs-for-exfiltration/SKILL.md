---
name: analyzing-dns-logs-for-exfiltration
description: "DNS exfiltration detection agent using entropy analysis and query pattern detection. Use when the user asks to analyze dns logs for exfiltration."
version: 1.0.0
tags:
  - analyzing
  - network
source: analyzing-dns-logs-for-exfiltration
---

# Analyzing DNS Logs for Exfiltration

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Passive DNS Lookup APIs

## When to use

- The user wants to **analyze** dns logs for exfiltration.
- Capability: DNS exfiltration detection agent using entropy analysis and query pattern detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, logs, exfiltration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of a string
2. Extract the subdomain portion from a fully qualified domain name
3. Extract the registered domain (SLD + TLD) from an FQDN
4. Detect DNS tunneling based on subdomain length anomalies
5. Detect Domain Generation Algorithm queries using entropy scoring
6. Detect hosts with anomalously high DNS query volumes
7. Detect excessive TXT record queries (common tunneling method)
8. Estimate data volume encoded in DNS queries to a specific domain

## Tools & resources

- Passive DNS Lookup APIs

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

- `shannon_entropy` — Calculate Shannon entropy of a string.
- `extract_subdomain` — Extract the subdomain portion from a fully qualified domain name.
- `extract_registered_domain` — Extract the registered domain (SLD + TLD) from an FQDN.
- `detect_tunneling` — Detect DNS tunneling based on subdomain length anomalies.
- `detect_dga` — Detect Domain Generation Algorithm queries using entropy scoring.
- `detect_volume_anomaly` — Detect hosts with anomalously high DNS query volumes.
- `detect_txt_abuse` — Detect excessive TXT record queries (common tunneling method).
- `estimate_exfil_volume` — Estimate data volume encoded in DNS queries to a specific domain.
- `parse_zeek_dns_log` — Parse a Zeek dns.log file into structured records.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-dns-logs-for-exfiltration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
