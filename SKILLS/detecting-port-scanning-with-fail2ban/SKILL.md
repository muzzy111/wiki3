---
name: detecting-port-scanning-with-fail2ban
description: "Fail2ban port scan detection and management. Use when the user asks to detect port scanning with fail2ban."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-port-scanning-with-fail2ban
---

# Detecting Port Scanning with Fail2ban

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** fail2ban-client CLI, Ban Actions

## When to use

- The user wants to **detect** port scanning with fail2ban.
- Capability: Fail2ban port scan detection and management agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, port, scanning, fail2ban`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check Fail2ban service status and active jails
2. Get detailed status of a specific jail
3. Manually ban an IP address in a specific jail
4. Unban an IP address from a specific jail
5. Parse Fail2ban log for ban/unban statistics
6. Parse auth.log for SSH brute force patterns
7. Detect port scanning patterns from system logs
8. Generate comprehensive Fail2ban security report

## Tools & resources

- fail2ban-client CLI
- Ban Actions

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

- `check_fail2ban_status` — Check Fail2ban service status and active jails.
- `get_jail_status` — Get detailed status of a specific jail.
- `ban_ip` — Manually ban an IP address in a specific jail.
- `unban_ip` — Unban an IP address from a specific jail.
- `parse_fail2ban_log` — Parse Fail2ban log for ban/unban statistics.
- `parse_auth_log_ssh` — Parse auth.log for SSH brute force patterns.
- `detect_port_scan_from_logs` — Detect port scanning patterns from system logs.
- `generate_report` — Generate comprehensive Fail2ban security report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-port-scanning-with-fail2ban`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
