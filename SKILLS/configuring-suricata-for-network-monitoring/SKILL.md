---
name: configuring-suricata-for-network-monitoring
description: "Suricata IDS/IPS monitoring and EVE JSON log analysis. Use when the user asks to configure suricata for network monitoring."
version: 1.0.0
tags:
  - configuring
  - network
source: configuring-suricata-for-network-monitoring
---

# Configuring Suricata for Network Monitoring

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Suricata

## When to use

- The user wants to **configure** suricata for network monitoring.
- Capability: Suricata IDS/IPS monitoring and EVE JSON log analysis agent.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, suricata, network, monitoring`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check Suricata installation and running status
2. Validate Suricata configuration
3. Parse EVE JSON log for alert events and produce statistics
4. Analyze DNS queries from EVE log for threat hunting
5. Extract JA3 fingerprints and TLS metadata from EVE log
6. Run suricata-update to fetch latest rulesets
7. Count active Suricata rules
8. Generate full Suricata deployment report

## Tools & resources

- Suricata

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

- `check_suricata_status` — Check Suricata installation and running status.
- `validate_config` — Validate Suricata configuration.
- `parse_eve_alerts` — Parse EVE JSON log for alert events and produce statistics.
- `parse_eve_dns` — Analyze DNS queries from EVE log for threat hunting.
- `parse_eve_tls` — Extract JA3 fingerprints and TLS metadata from EVE log.
- `update_rules` — Run suricata-update to fetch latest rulesets.
- `count_rules` — Count active Suricata rules.
- `generate_report` — Generate full Suricata deployment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-suricata-for-network-monitoring`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
