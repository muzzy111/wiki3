---
name: detecting-command-and-control-over-dns
description: "DNS C2 Detection Agent Comprehensive detection pipeline for command-and-control communications over DNS. Combines Shannon entropy analysis, DNS beaconing detection, DGA classification, TXT record payload inspection,.... Use when the user asks to detect command and control over dns."
version: 1.0.0
tags:
  - detecting
  - network
  - threat-intel
source: detecting-command-and-control-over-dns
---

# Detecting Command and Control Over DNS

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Known Tunneling Tool Signatures, DGA Feature Extraction, Beaconing Detection Parameters, Zeek DNS Log Fields, Suricata EVE DNS Fields, Python API

## When to use

- The user wants to **detect** command and control over dns.
- Capability: DNS C2 Detection Agent Comprehensive detection pipeline for command-and-control communications over DNS. Combines Shannon entropy analysis, DNS beaconing detection, DGA classification, TXT record payload inspection, and known tool signature matching. Usage: python agent.py --dns-log /path/to/dns.log --format zeek python agent.py --dns-log /path/to/eve.json --format suricata python agent.py --dns-log /path/to/queries.csv --format csv python agent.py --mode train-dga --legit-domains legit.txt --dga-domains dga.txt python agent.py --mode entropy --dns-log dns.log --format zeek Requirements: pip install numpy scikit-learn tldextract
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, command, control, over`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of a string in bits per character
2. Extract subdomain and base domain from FQDN
3. Check if domain matches a known-legitimate pattern
4. Parse various timestamp formats
5. Parse Zeek dns.log (tab-separated format)
6. Parse Suricata EVE JSON log for DNS events
7. Parse CSV DNS log with columns: timestamp, src_ip, query, qtype, answers
8. Load DNS queries from log file

## Tools & resources

- Known Tunneling Tool Signatures
- DGA Feature Extraction
- Beaconing Detection Parameters
- Zeek DNS Log Fields
- Suricata EVE DNS Fields
- Python API

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

- `shannon_entropy` — Calculate Shannon entropy of a string in bits per character.
- `extract_subdomain` — Extract subdomain and base domain from FQDN.
- `is_whitelisted` — Check if domain matches a known-legitimate pattern.
- `parse_timestamp` — Parse various timestamp formats.
- `parse_zeek_dns_log` — Parse Zeek dns.log (tab-separated format).
- `parse_suricata_eve` — Parse Suricata EVE JSON log for DNS events.
- `parse_csv_dns` — Parse CSV DNS log with columns: timestamp, src_ip, query, qtype, answers.
- `load_dns_queries` — Load DNS queries from log file.
- `analyze_entropy` — Analyze DNS queries for tunneling indicators via entropy and subdomain length.
- `detect_beaconing` — Detect periodic DNS beaconing patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-command-and-control-over-dns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
