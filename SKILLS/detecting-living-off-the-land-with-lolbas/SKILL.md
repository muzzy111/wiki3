---
name: detecting-living-off-the-land-with-lolbas
description: "Detect Living Off the Land Binaries (LOLBAS) abuse via process telemetry and Sigma rules. Use when the user asks to detect living off the land with lolbas."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-living-off-the-land-with-lolbas
---

# Detecting Living Off The Land with Lolbas

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Key LOLBin Signatures, LOLBAS Project API

## When to use

- The user wants to **detect** living off the land with lolbas.
- Capability: Detect Living Off the Land Binaries (LOLBAS) abuse via process telemetry and Sigma rules.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, living, land, lolbas`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Sysmon or Windows 4688 process creation events from JSON log
2. Detect LOLBin abuse from process creation events
3. Generate a Sigma detection rule for a specific LOLBin
4. Build structured detection report

## Tools & resources

- Key LOLBin Signatures
- LOLBAS Project API

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

- `parse_process_events` — Parse Sysmon or Windows 4688 process creation events from JSON log.
- `detect_lolbin_abuse` — Detect LOLBin abuse from process creation events.
- `generate_sigma_rule` — Generate a Sigma detection rule for a specific LOLBin.
- `build_report` — Build structured detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-living-off-the-land-with-lolbas`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
