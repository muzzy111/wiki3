---
name: executing-active-directory-attack-simulation
description: "Active Directory attack simulation agent using Impacket and ldap3. Use when the user asks to executing active directory attack simulation."
version: 1.0.0
tags:
  - executing
  - threat-intel
  - active-directory
  - incident-response
source: executing-active-directory-attack-simulation
---

# Executing Active Directory Attack Simulation

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Key Impacket Modules

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **execut** active directory attack simulation.
- Capability: Active Directory attack simulation agent using Impacket and ldap3.
- Goal: complete the task.
- Trigger keywords: `executing, active, directory, attack, simulation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Enumerate domain users via LDAP, returning accounts with SPNs and no preauth
2. Filter users with service principal names set (Kerberoastable)
3. Filter users with Kerberos pre-authentication disabled
4. Enumerate high-value group memberships via LDAP
5. Check if SMB signing is required on the target host
6. Compile AD assessment findings into a structured report

## Tools & resources

- Key Impacket Modules

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

- `ldap_enum_users` — Enumerate domain users via LDAP, returning accounts with SPNs and no preauth.
- `find_kerberoastable` — Filter users with service principal names set (Kerberoastable).
- `find_asrep_roastable` — Filter users with Kerberos pre-authentication disabled.
- `enum_groups` — Enumerate high-value group memberships via LDAP.
- `check_smb_signing` — Check if SMB signing is required on the target host.
- `generate_report` — Compile AD assessment findings into a structured report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `executing-active-directory-attack-simulation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
