---
name: conducting-internal-reconnaissance-with-bloodhound-ce
description: "BloodHound CE reconnaissance agent using bloodhound Python ingestor and Neo4j. Use when the user asks to conduct internal reconnaissance with bloodhound ce."
version: 1.0.0
tags:
  - conducting
  - threat-intel
  - active-directory
source: conducting-internal-reconnaissance-with-bloodhound-ce
---

# Conducting Internal Reconnaissance with BloodHound Ce

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** BloodHound, Key neo4j Driver Methods, External References, Official Resources, Key Research

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** internal reconnaissance with bloodhound ce.
- Capability: BloodHound CE reconnaissance agent using bloodhound Python ingestor and Neo4j.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, internal, reconnaissance, bloodhound`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run BloodHound Python ingestor to collect AD data
2. Find shortest path to Domain Admins
3. Find kerberoastable user accounts
4. Find computers with unconstrained delegation
5. Find AS-REP roastable accounts (no pre-auth required)
6. Run BloodHound reconnaissance queries

## Key concepts

- SpecterOps: An Ace in the Hole - Stealthy Data Collection with BloodHound
- Compass Security: BloodHound Community Edition Custom Queries (2025)
- SpecterOps: Introducing the BloodHound Query Library (2025)

## Tools & resources

- BloodHound
- Key neo4j Driver Methods
- External References
- Official Resources
- Key Research

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

- `collect_bloodhound_data` — Run BloodHound Python ingestor to collect AD data.
- `query_shortest_path_to_da` — Find shortest path to Domain Admins.
- `query_kerberoastable_users` — Find kerberoastable user accounts.
- `query_unconstrained_delegation` — Find computers with unconstrained delegation.
- `query_as_rep_roastable` — Find AS-REP roastable accounts (no pre-auth required).
- `run_recon` — Run BloodHound reconnaissance queries.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-internal-reconnaissance-with-bloodhound-ce`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
