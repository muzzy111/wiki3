---
name: collecting-open-source-intelligence
description: "OSINT Collection Agent - Gathers open-source intelligence on targets using Shodan and crt.sh. Use when the user asks to collecting open source intelligence."
version: 1.0.0
tags:
  - collecting
  - threat-intel
source: collecting-open-source-intelligence
---

# Collecting Open Source Intelligence

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Key Functions, External APIs Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **collect** open source intelligence.
- Capability: OSINT Collection Agent - Gathers open-source intelligence on targets using Shodan and crt.sh.
- Goal: complete the task.
- Trigger keywords: `collecting, open, source, intelligence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Search Shodan for hosts matching a query
2. Lookup a specific host on Shodan for detailed information
3. Query certificate transparency logs via crt.sh for subdomain discovery
4. Perform WHOIS lookup via RDAP (Registration Data Access Protocol)
5. Query SecurityTrails API for DNS history
6. Search GitHub for exposed credentials or sensitive data
7. Generate a consolidated OSINT report

## Tools & resources

- Key Functions
- External APIs Used

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

- `search_shodan` — Search Shodan for hosts matching a query.
- `shodan_host_lookup` — Lookup a specific host on Shodan for detailed information.
- `query_crtsh` — Query certificate transparency logs via crt.sh for subdomain discovery.
- `whois_lookup` — Perform WHOIS lookup via RDAP (Registration Data Access Protocol).
- `query_securitytrails` — Query SecurityTrails API for DNS history.
- `search_github_exposure` — Search GitHub for exposed credentials or sensitive data.
- `generate_osint_report` — Generate a consolidated OSINT report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `collecting-open-source-intelligence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
