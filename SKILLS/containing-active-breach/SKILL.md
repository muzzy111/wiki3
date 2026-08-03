---
name: containing-active-breach
description: "Active breach containment agent for incident response operations. Use when the user asks to containing active breach."
version: 1.0.0
tags:
  - containing
  - threat-intel
source: containing-active-breach
---

# Containing Active Breach

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** CrowdStrike Falcon, Microsoft Defender for Endpoint, Active Directory, Network Containment - iptables, DNS Sinkholing, Evidence Collection

## When to use

- The user wants to **conta** active breach.
- Capability: Active breach containment agent for incident response operations.
- Goal: complete the task.
- Trigger keywords: `containing, active, breach`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Block a C2 or malicious IP address using iptables
2. Disable a compromised Active Directory account via PowerShell
3. Force password reset for a compromised AD account
4. Isolate a compromised host by blocking all traffic except management
5. Block SMB (port 445) between server VLANs to prevent lateral movement
6. Add DNS sinkhole entry for a C2 domain
7. Collect volatile system data from a compromised host for forensics
8. Generate a structured containment status report

## Tools & resources

- CrowdStrike Falcon
- Microsoft Defender for Endpoint
- Active Directory
- Network Containment - iptables
- DNS Sinkholing
- Evidence Collection

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

- `block_ip_at_firewall` — Block a C2 or malicious IP address using iptables.
- `disable_ad_account` — Disable a compromised Active Directory account via PowerShell.
- `reset_ad_password` — Force password reset for a compromised AD account.
- `isolate_host_firewall` — Isolate a compromised host by blocking all traffic except management.
- `block_smb_lateral_movement` — Block SMB (port 445) between server VLANs to prevent lateral movement.
- `sinkhole_domain` — Add DNS sinkhole entry for a C2 domain.
- `collect_volatile_evidence` — Collect volatile system data from a compromised host for forensics.
- `generate_containment_report` — Generate a structured containment status report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `containing-active-breach`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
