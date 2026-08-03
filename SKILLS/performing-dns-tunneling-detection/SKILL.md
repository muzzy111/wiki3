---
name: performing-dns-tunneling-detection
description: "Agent for detecting DNS tunneling via entropy and statistical analysis. Use when the user asks to perform dns tunneling detection."
version: 1.0.0
tags:
  - performing
  - network
  - threat-intel
source: performing-dns-tunneling-detection
---

# Performing DNS Tunneling Detection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** DNS Tunneling Indicators, Common DNS Tunnel Tools

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** dns tunneling detection.
- Capability: Agent for detecting DNS tunneling via entropy and statistical analysis.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, tunneling, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of a string
2. Extract DNS queries from a PCAP file using scapy
3. Flag queries with high Shannon entropy in subdomain labels
4. Detect queries with unusually long domain names
5. Detect high volume of TXT record queries to single domains
6. Detect domains with high unique subdomain count (tunneling indicator)
7. Detect non-standard character frequency in query labels

## Tools & resources

- DNS Tunneling Indicators
- Common DNS Tunnel Tools

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
- `extract_dns_queries` — Extract DNS queries from a PCAP file using scapy.
- `analyze_entropy` — Flag queries with high Shannon entropy in subdomain labels.
- `analyze_query_lengths` — Detect queries with unusually long domain names.
- `analyze_txt_records` — Detect high volume of TXT record queries to single domains.
- `analyze_subdomain_cardinality` — Detect domains with high unique subdomain count (tunneling indicator).
- `analyze_character_distribution` — Detect non-standard character frequency in query labels.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-dns-tunneling-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
