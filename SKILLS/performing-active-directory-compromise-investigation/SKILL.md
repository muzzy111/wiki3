---
name: performing-active-directory-compromise-investigation
description: "Active Directory Compromise Investigation agent - analyzes Windows Security event logs for indicators of AD compromise including DCSync, Golden Ticket, Kerberoasting, and lateral movement. Use when the user asks to perform active directory compromise investigation."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - active-directory
  - incident-response
source: performing-active-directory-compromise-investigation
---

# Performing Active Directory Compromise Investigation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** DCSync Detection, Kerberoasting Detection, Golden Ticket Detection, Lateral Movement Detection, CISA Alert, Microsoft Security Best Practices

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** active directory compromise investigation.
- Capability: Active Directory Compromise Investigation agent - analyzes Windows Security event logs for indicators of AD compromise including DCSync, Golden Ticket, Kerberoasting, and lateral movement.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, active, directory, compromise, investigation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse Windows event logs exported as JSON
2. Detect DCSync attacks via Event ID 4662 with replication GUIDs
3. Detect Kerberoasting via Event ID 4769 with RC4 encryption
4. Detect Golden Ticket indicators via Event ID 4768 anomalies
5. Detect lateral movement via Type 3 logons and explicit credential use
6. Detect persistence mechanisms via account creation and group changes
7. Run all detection checks and produce consolidated report

## Key concepts

- Provides incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication & Recovery, Post-Incident Activity
- AD compromise investigations follow all four phases with emphasis on scoping the identity compromise
- Published guidance on AD-specific threats and detection methods
- Covers DCSync, Golden Ticket, Silver Ticket, and Kerberoasting attacks
- Recommends tiered administration, Protected Users group, and credential hygiene
- T1003.006: OS Credential Dumping - DCSync
- T1558.001: Steal or Forge Kerberos Tickets - Golden Ticket
- T1558.002: Steal or Forge Kerberos Tickets - Silver Ticket

## Tools & resources

- DCSync Detection
- Kerberoasting Detection
- Golden Ticket Detection
- Lateral Movement Detection
- CISA Alert
- Microsoft Security Best Practices
- SANS FOR500

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

- `parse_evtx_json` — Parse Windows event logs exported as JSON.
- `detect_dcsync` — Detect DCSync attacks via Event ID 4662 with replication GUIDs.
- `detect_kerberoasting` — Detect Kerberoasting via Event ID 4769 with RC4 encryption.
- `detect_golden_ticket` — Detect Golden Ticket indicators via Event ID 4768 anomalies.
- `detect_lateral_movement` — Detect lateral movement via Type 3 logons and explicit credential use.
- `detect_persistence` — Detect persistence mechanisms via account creation and group changes.
- `generate_report` — Run all detection checks and produce consolidated report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-active-directory-compromise-investigation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
