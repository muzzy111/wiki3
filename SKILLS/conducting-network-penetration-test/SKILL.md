---
name: conducting-network-penetration-test
description: "Network Penetration Testing Agent - Automates host discovery, port scanning, and vuln assessment. Use when the user asks to conduct network penetration test."
version: 1.0.0
tags:
  - conducting
  - network
  - threat-intel
source: conducting-network-penetration-test
---

# Conducting Network Penetration Test

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, Nmap Scan Types Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** network penetration test.
- Capability: Network Penetration Testing Agent - Automates host discovery, port scanning, and vuln assessment.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, network, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover live hosts on the network using ARP ping and ICMP
2. Perform TCP SYN scan with service version detection
3. Run Nmap vulnerability scripts against target
4. Enumerate SMB shares and users via Nmap scripts
5. Audit SSL/TLS configuration using Nmap ssl-enum-ciphers
6. Perform DNS enumeration via Nmap dns-brute
7. Classify and prioritize all findings by severity
8. Generate network penetration test report

## Tools & resources

- Key Functions
- Nmap Scan Types Used

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

- `host_discovery` — Discover live hosts on the network using ARP ping and ICMP.
- `port_scan` — Perform TCP SYN scan with service version detection.
- `vulnerability_scan` — Run Nmap vulnerability scripts against target.
- `smb_enumeration` — Enumerate SMB shares and users via Nmap scripts.
- `ssl_audit` — Audit SSL/TLS configuration using Nmap ssl-enum-ciphers.
- `dns_enumeration` — Perform DNS enumeration via Nmap dns-brute.
- `classify_findings` — Classify and prioritize all findings by severity.
- `generate_report` — Generate network penetration test report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-network-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
