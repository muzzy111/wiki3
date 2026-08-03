---
name: performing-hash-cracking-with-hashcat
description: "Agent for performing hash cracking with hashcat — hash identification, attack management, and result analysis. Use when the user asks to perform hash cracking with hashcat."
version: 1.0.0
tags:
  - performing
source: performing-hash-cracking-with-hashcat
---

# Performing Hash Cracking with Hashcat

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Hashcat Mask Charsets, Tools, Standards, Legal Framework

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** hash cracking with hashcat.
- Capability: Agent for performing hash cracking with hashcat — hash identification, attack management, and result analysis.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, hash, cracking, hashcat`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Identify hash type and return hashcat mode
2. Identify hash types from a file of hashes
3. Execute hashcat with specified attack mode
4. Parse hashcat potfile for cracked results
5. Generate hash of a plaintext string for testing

## Key concepts

- RockYou: Classic breach wordlist (14 million passwords)
- Description: Password requirements and memorized secret guidelines
- Computer Fraud and Abuse Act (CFAA) - US
- Computer Misuse Act 1990 - UK
- Always obtain written authorization before testing
- Follow penetration testing rules of engagement

## Tools & resources

- Hashcat Mask Charsets
- Tools
- Standards
- Legal Framework

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

- `identify_hash` — Identify hash type and return hashcat mode.
- `identify_hashes_file` — Identify hash types from a file of hashes.
- `run_hashcat` — Execute hashcat with specified attack mode.
- `parse_hashcat_status` — Parse hashcat potfile for cracked results.
- `generate_hash` — Generate hash of a plaintext string for testing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-hash-cracking-with-hashcat`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
