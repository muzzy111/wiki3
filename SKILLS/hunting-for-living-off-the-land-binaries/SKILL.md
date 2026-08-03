---
name: hunting-for-living-off-the-land-binaries
description: "Agent for hunting Living-off-the-Land Binaries (LOLBins) execution patterns. Use when the user asks to hunt for living off the land binaries."
version: 1.0.0
tags:
  - hunting
source: hunting-for-living-off-the-land-binaries
---

# Hunting for Living Off The Land Binaries

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** LOLBins Covered, LOLBAS Project Reference, Threat Intelligence References, Detection Data Sources

## When to use

- The user wants to **hunt for** living off the land binaries.
- Capability: Agent for hunting Living-off-the-Land Binaries (LOLBins) execution patterns.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, living, land, binaries`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Form a threat hypothesis grounded in TTPs or intel
2. Select data sources and time range for for living off the land binaries
3. Execute hunt queries and pivot on anomalies
4. Triage hits into benign, suspicious, or confirmed malicious
5. Capture IOCs, lessons learned, and detection opportunities

## Key concepts

- T1218 - Signed Binary Proxy Execution: Use of trusted binaries to proxy execution of malicious payloads
- T1218.001 - Compiled HTML File
- T1218.002 - Control Panel
- T1218.004 - InstallUtil
- T1218.009 - Regsvcs/Regasm
- T1218.013 - Mavinject
- T1197 - BITS Jobs: Abuse of Background Intelligent Transfer Service
- T1140 - Deobfuscate/Decode Files or Information: certutil decode operations

## Tools & resources

- LOLBins Covered
- LOLBAS Project Reference
- Threat Intelligence References
- Detection Data Sources

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

- `hunt_lolbins_elastic` — Query Elasticsearch for LOLBin execution with suspicious arguments.
- `scan_sysmon_log` — Parse Sysmon EVTX for LOLBin process creation (Event ID 1).

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-living-off-the-land-binaries`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
