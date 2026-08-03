---
name: monitoring-darkweb-sources
description: "Dark Web Source Monitoring Agent Monitors dark web forums, paste sites, and ransomware leak sites for organizational asset mentions using commercial APIs and OSINT tools. Use when the user asks to monitoring darkweb sources."
version: 1.0.0
tags:
  - monitoring
  - appsec
source: monitoring-darkweb-sources
---

# Monitoring Darkweb Sources

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Dehashed API, Ransomware.live API, Rate Limits

## When to use

- The user wants to **monitor** darkweb sources.
- Capability: Dark Web Source Monitoring Agent Monitors dark web forums, paste sites, and ransomware leak sites for organizational asset mentions using commercial APIs and OSINT tools.
- Goal: complete the task.
- Trigger keywords: `monitoring, darkweb, sources`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check Have I Been Pwned for domain breach exposure
2. Search paste site archives for organization mentions
3. Search Dehashed for exposed credentials matching domain
4. Check ransomware leak site intelligence feeds for organization mentions. Uses Ransomware.live API (public aggregator)
5. Generate dark web monitoring report

## Tools & resources

- Dehashed API
- Ransomware.live API
- Rate Limits

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

- `check_breach_exposure` — Check Have I Been Pwned for domain breach exposure.
- `search_paste_sites` — Search paste site archives for organization mentions.
- `check_credential_exposure` — Search Dehashed for exposed credentials matching domain.
- `monitor_ransomware_leak_sites` — Check ransomware leak site intelligence feeds for organization mentions. Uses Ransomware.live API (public aggregator).
- `generate_monitoring_report` — Generate dark web monitoring report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `monitoring-darkweb-sources`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
