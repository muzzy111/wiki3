---
name: detecting-dcsync-attack-in-active-directory
description: "DCSync attack detection agent for Active Directory environments. Parses Windows Security Event ID 4662 logs to detect non-domain-controller accounts requesting directory replication (DCSync technique T1003.006). Use when the user asks to detect dcsync attack in active directory."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - active-directory
  - incident-response
source: detecting-dcsync-attack-in-active-directory
---

# Detecting Dcsync Attack in Active Directory

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** DCSync Replication GUIDs, python-evtx Usage, PowerShell, Attack Tools Reference, Critical Replication GUIDs, Legitimate Replication Sources

## When to use

- The user wants to **detect** dcsync attack in active directory.
- Capability: DCSync attack detection agent for Active Directory environments. Parses Windows Security Event ID 4662 logs to detect non-domain-controller accounts requesting directory replication (DCSync technique T1003.006).
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, dcsync, attack, active, directory`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Disable compromised account immediately
2. Rotate KRBTGT password (twice, 12 hours apart)
3. Reset all service account passwords
4. Block source IP at network level
5. Isolate source machine for forensics
6. Remove unauthorized replication rights
7. Review all accounts with DCSync-capable permissions
8. Implement tiered administration model
9. Enable Microsoft Defender for Identity DCSync alerts
10. Deploy Protected Users security group for admin accounts

## Tools & resources

- DCSync Replication GUIDs
- python-evtx Usage
- PowerShell
- Attack Tools Reference
- Critical Replication GUIDs
- Legitimate Replication Sources

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `load_dc_accounts`
- `parse_4662_events`
- `check_replication_permissions_powershell`
- `generate_sigma_rule`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-dcsync-attack-in-active-directory`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
