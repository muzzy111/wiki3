---
name: hunting-for-ntlm-relay-attacks
description: "Detect NTLM relay attacks via Windows Event 4624 analysis, IP-hostname correlation, and SMB signing audit. Use when the user asks to hunt for ntlm relay attacks."
version: 1.0.0
tags:
  - hunting
  - active-directory
source: hunting-for-ntlm-relay-attacks
---

# Hunting for NTLM Relay Attacks

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** PowerShell Detection, SMB Signing Enforcement, Response Checklist

## When to use

- The user wants to **hunt for** ntlm relay attacks.
- Capability: Detect NTLM relay attacks via Windows Event 4624 analysis, IP-hostname correlation, and SMB signing audit.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, ntlm, relay, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query Windows Security event log for specific event ID using wevtutil
2. Parse Event 4624 logon events from XML output
3. Parse Event 5145 network share access events for named pipe monitoring
4. Detect when WorkstationName IP doesn't match source IpAddress
5. Detect machine accounts authenticating from unexpected IPs
6. Detect rapid multi-host authentication from a single account
7. Detect logon events with NULL SID and missing LogonGUID — relay indicator
8. Check SMB signing status on specified hosts using PowerShell

## Tools & resources

- PowerShell Detection
- SMB Signing Enforcement
- Response Checklist

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

- `query_security_log` — Query Windows Security event log for specific event ID using wevtutil.
- `parse_4624_events` — Parse Event 4624 logon events from XML output.
- `parse_5145_events` — Parse Event 5145 network share access events for named pipe monitoring.
- `detect_ip_hostname_mismatch` — Detect when WorkstationName IP doesn't match source IpAddress.
- `detect_machine_account_relay` — Detect machine accounts authenticating from unexpected IPs.
- `detect_rapid_authentication` — Detect rapid multi-host authentication from a single account.
- `detect_null_sid_logons` — Detect logon events with NULL SID and missing LogonGUID — relay indicator.
- `check_smb_signing` — Check SMB signing status on specified hosts using PowerShell.
- `run_hunt` — Run full NTLM relay detection hunt.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-ntlm-relay-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
