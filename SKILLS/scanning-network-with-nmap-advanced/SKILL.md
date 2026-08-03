---
name: scanning-network-with-nmap-advanced
description: "Automated network scanning agent using python-nmap for authorized assessments. Use when the user asks to scan network with nmap advanced."
version: 1.0.0
tags:
  - scanning
  - network
source: scanning-network-with-nmap-advanced
---

# Scanning Network with Nmap Advanced

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Nmap

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **scan** network with nmap advanced.
- Capability: Automated network scanning agent using python-nmap for authorized assessments.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, network, nmap, advanced`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run host discovery using multiple probe techniques
2. Run SYN scan on discovered hosts for specified ports
3. Run aggressive service version detection on open ports
4. Run NSE vulnerability scripts against open ports
5. Generate JSON and CSV reports from scan results

## Tools & resources

- Nmap

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

- `discover_hosts` — Run host discovery using multiple probe techniques.
- `scan_ports` — Run SYN scan on discovered hosts for specified ports.
- `service_version_scan` — Run aggressive service version detection on open ports.
- `vuln_scan` — Run NSE vulnerability scripts against open ports.
- `generate_report` — Generate JSON and CSV reports from scan results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `scanning-network-with-nmap-advanced`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
