---
name: hunting-for-dns-based-persistence
description: "DNS Persistence Hunting Agent - detects DNS hijacking, dangling CNAMEs, and unauthorized zone changes. Use when the user asks to hunt for dns based persistence."
version: 1.0.0
tags:
  - hunting
  - network
source: hunting-for-dns-based-persistence
---

# Hunting for DNS Based Persistence

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** SecurityTrails API

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** dns based persistence.
- Capability: DNS Persistence Hunting Agent - detects DNS hijacking, dangling CNAMEs, and unauthorized zone changes.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, persistence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query SecurityTrails API for passive DNS history
2. Enumerate subdomains via SecurityTrails API
3. Resolve DNS record using dig command
4. Detect CNAME records pointing to decommissioned services (subdomain takeover risk)
5. Check for wildcard DNS records that resolve all subdomains
6. Verify NS records haven't been modified to point to unauthorized servers
7. Analyze historical DNS changes for signs of hijacking

## Tools & resources

- SecurityTrails API

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

- `query_securitytrails` — Query SecurityTrails API for passive DNS history.
- `get_subdomains` — Enumerate subdomains via SecurityTrails API.
- `resolve_record` — Resolve DNS record using dig command.
- `detect_dangling_cnames` — Detect CNAME records pointing to decommissioned services (subdomain takeover risk).
- `detect_wildcard_abuse` — Check for wildcard DNS records that resolve all subdomains.
- `check_ns_delegation` — Verify NS records haven't been modified to point to unauthorized servers.
- `analyze_dns_history` — Analyze historical DNS changes for signs of hijacking.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-dns-based-persistence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
