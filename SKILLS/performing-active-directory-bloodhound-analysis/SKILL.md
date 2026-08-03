---
name: performing-active-directory-bloodhound-analysis
description: "BloodHound Attack Path Analysis Agent - Queries Neo4j for AD attack paths to Domain Admin. Use when the user asks to perform active directory bloodhound analysis."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - active-directory
  - incident-response
source: performing-active-directory-bloodhound-analysis
---

# Performing Active Directory BloodHound Analysis

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** BloodHound, neo4j Python Driver, NIST References, CIS Benchmarks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** active directory bloodhound analysis.
- Capability: BloodHound Attack Path Analysis Agent - Queries Neo4j for AD attack paths to Domain Admin.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, active, directory, bloodhound, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Connect to Neo4j database containing BloodHound data
2. Find all members of the Domain Admins group
3. Find shortest attack paths from owned users to Domain Admin
4. Find users with SPNs set (Kerberoastable) that have paths to high-value targets
5. Find users with Kerberos pre-auth disabled (AS-REP Roastable)
6. Find computers with unconstrained delegation enabled
7. Find users with local admin rights on a target computer
8. Find GPO-based attack paths that could lead to privilege escalation

## Key concepts

- T1087.002** - Account Discovery: Domain Account
- T1069.001** - Permission Groups Discovery: Local Groups
- T1069.002** - Permission Groups Discovery: Domain Groups
- T1550.002** - Use Alternate Authentication Material: Pass the Hash
- T1550.003** - Use Alternate Authentication Material: Pass the Ticket
- T1021.002** - Remote Services: SMB/Windows Admin Shares
- T1021.001** - Remote Services: Remote Desktop Protocol
- T1021.006** - Remote Services: Windows Remote Management

## Tools & resources

- BloodHound
- neo4j Python Driver
- NIST References
- CIS Benchmarks

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

- `connect_neo4j` — Connect to Neo4j database containing BloodHound data.
- `find_domain_admins` — Find all members of the Domain Admins group.
- `find_shortest_paths_to_da` — Find shortest attack paths from owned users to Domain Admin.
- `find_kerberoastable_users` — Find users with SPNs set (Kerberoastable) that have paths to high-value targets.
- `find_asrep_roastable` — Find users with Kerberos pre-auth disabled (AS-REP Roastable).
- `find_unconstrained_delegation` — Find computers with unconstrained delegation enabled.
- `find_local_admin_paths` — Find users with local admin rights on a target computer.
- `find_gpo_attack_paths` — Find GPO-based attack paths that could lead to privilege escalation.
- `assess_ad_risk` — Calculate overall AD security risk score.
- `generate_report` — Generate BloodHound analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-active-directory-bloodhound-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
