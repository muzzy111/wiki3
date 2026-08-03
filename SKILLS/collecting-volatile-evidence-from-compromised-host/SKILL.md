---
name: collecting-volatile-evidence-from-compromised-host
description: "Volatile evidence collection agent for compromised hosts. Collects volatile forensic artifacts following RFC 3227 order of volatility: registers, memory, network state, running processes, disk, and logs. Uses.... Use when the user asks to collecting volatile evidence from compromised host."
version: 1.0.0
tags:
  - collecting
  - threat-intel
source: collecting-volatile-evidence-from-compromised-host
---

# Collecting Volatile Evidence from Compromised Host

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Memory Acquisition Tools, Evidence Integrity, RFC 3227, NIST SP 800-86, SANS DFIR, ISO/IEC 27037

## When to use

- The user wants to **collect** volatile evidence from compromised host.
- Capability: Volatile evidence collection agent for compromised hosts. Collects volatile forensic artifacts following RFC 3227 order of volatility: registers, memory, network state, running processes, disk, and logs. Uses platform-native tools for live response evidence gathering.
- Goal: complete the task.
- Trigger keywords: `collecting, volatile, evidence, compromised, host`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Connect forensic USB with memory acquisition tool
2. Run memory dump tool from USB (NOT from compromised disk)
3. Save memory image to external storage
4. Record start time, end time, and memory size
5. Generate SHA256 hash of memory image immediately
6. Document any errors during acquisition
7. Capture all active TCP/UDP connections with process IDs
8. Capture ARP cache (maps IP to MAC addresses)
9. Capture DNS resolver cache
10. Capture routing table

## Key concepts

- Defines the order of volatility for digital evidence:
- Key principles: minimize data alteration, document actions, use trusted tools
- Section 4: Using Data from Data Sources
- Forensic process: Collection, Examination, Analysis, Reporting
- Emphasis on preserving data integrity through proper acquisition
- RS.AN-03: Analysis to establish incident scope
- Evidence must be collected in a forensically sound manner
- Document all collection activities and maintain chain of custody

## Tools & resources

- Memory Acquisition Tools
- Evidence Integrity
- RFC 3227
- NIST SP 800-86
- SANS DFIR
- ISO/IEC 27037

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

- `collect_artifact` — Collect a single volatile artifact.
- `run_collection` — Run full volatile evidence collection.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `collecting-volatile-evidence-from-compromised-host`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
