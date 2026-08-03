---
name: conducting-domain-persistence-with-dcsync
description: "DCSync attack detection and analysis agent using impacket and ldap3. Use when the user asks to conduct domain persistence with dcsync."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-domain-persistence-with-dcsync
---

# Conducting Domain Persistence with Dcsync

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key ldap3 Methods, External References, Key Research, Threat Actor Usage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** domain persistence with dcsync.
- Capability: DCSync attack detection and analysis agent using impacket and ldap3.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, domain, persistence, dcsync`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check which accounts have DCSync-capable permissions (Replicating Directory Changes)
2. Parse Windows Security event logs for DCSync indicators (Event IDs 4662, 4624)
3. Generate Sigma detection rule for DCSync activity
4. Run DCSync persistence audit

## Key concepts

- Netwrix: DCSync Attack Using Mimikatz Detection
- JumpCloud: What Is DCSync? Critical AD Attack Explained
- The Hacker Recipes: DCSync technique documentation
- Atomic Red Team T1003.006 test procedures
- APT28 (Fancy Bear) - DCSync for credential harvesting
- APT29 (Cozy Bear) - SolarWinds campaign used DCSync
- FIN6 - Financial cybercrime group
- Wizard Spider - Ryuk ransomware campaigns

## Tools & resources

- Key ldap3 Methods
- External References
- Key Research
- Threat Actor Usage

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

- `check_dcsync_permissions` — Check which accounts have DCSync-capable permissions (Replicating Directory Changes).
- `detect_dcsync_events` — Parse Windows Security event logs for DCSync indicators (Event IDs 4662, 4624).
- `generate_sigma_rule` — Generate Sigma detection rule for DCSync activity.
- `run_audit` — Run DCSync persistence audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-domain-persistence-with-dcsync`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
