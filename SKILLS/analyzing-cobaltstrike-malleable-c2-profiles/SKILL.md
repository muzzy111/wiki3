---
name: analyzing-cobaltstrike-malleable-c2-profiles
description: "CobaltStrike Malleable C2 Profile Analyzer - parses profiles to extract C2 indicators, detection signatures, and evasion techniques. Use when the user asks to analyze cobaltstrike malleable c2 profiles."
version: 1.0.0
tags:
  - analyzing
source: analyzing-cobaltstrike-malleable-c2-profiles
---

# Analyzing Cobalt Strike Malleable C2 Profiles

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Cobalt Strike, dissect.cobaltstrike API, pyMalleableC2 API, Key Profile Settings

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** cobaltstrike malleable c2 profiles.
- Capability: CobaltStrike Malleable C2 Profile Analyzer - parses profiles to extract C2 indicators, detection signatures, and evasion techniques
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, cobaltstrike, malleable, profiles`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse a .profile file using dissect.cobaltstrike C2Profile
2. Regex-based parser for malleable C2 profile when dissect is unavailable
3. Analyze parsed profile configuration for detection opportunities
4. Generate Suricata rules from extracted indicators

## Tools & resources

- Cobalt Strike
- dissect.cobaltstrike API
- pyMalleableC2 API
- Key Profile Settings

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

- `load_data`
- `parse_profile_with_dissect` — Parse a .profile file using dissect.cobaltstrike C2Profile.
- `parse_profile_regex` — Regex-based parser for malleable C2 profile when dissect is unavailable.
- `analyze_profile` — Analyze parsed profile configuration for detection opportunities.
- `generate_suricata_rules` — Generate Suricata rules from extracted indicators.
- `analyze`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-cobaltstrike-malleable-c2-profiles`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
