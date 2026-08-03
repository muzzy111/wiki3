---
name: detecting-ransomware-encryption-behavior
description: "Ransomware encryption behavior detection agent. Detects ransomware activity using entropy analysis, file system I/O monitoring, and behavioral heuristics. Monitors file modifications for entropy spikes and mass.... Use when the user asks to detect ransomware encryption behavior."
version: 1.0.0
tags:
  - detecting
  - malware
  - threat-intel
  - ransomware
source: detecting-ransomware-encryption-behavior
---

# Detecting Ransomware Encryption Behavior

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** psutil Process IO Monitoring, Windows ETW Providers, Behavioral Scoring, Shadow Copy Deletion, watchdog Library, Double Extension Detection

## When to use

- The user wants to **detect** ransomware encryption behavior.
- Capability: Ransomware encryption behavior detection agent. Detects ransomware activity using entropy analysis, file system I/O monitoring, and behavioral heuristics. Monitors file modifications for entropy spikes and mass rename patterns characteristic of ransomware encryption.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, ransomware, encryption, behavior`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of byte data (0.0 to 8.0)
2. Analyze entropy of a file and its segments
3. Scan directory for files with high entropy indicating encryption
4. Detect multiple ransomware indicators in a directory tree
5. Take a baseline snapshot of directory for differential analysis
6. Compare two directory snapshots to detect bulk encryption

## Tools & resources

- psutil Process IO Monitoring
- Windows ETW Providers
- Behavioral Scoring
- Shadow Copy Deletion
- watchdog Library
- Double Extension Detection

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

- `shannon_entropy` — Calculate Shannon entropy of byte data (0.0 to 8.0).
- `analyze_file_entropy` — Analyze entropy of a file and its segments.
- `scan_directory_entropy` — Scan directory for files with high entropy indicating encryption.
- `detect_ransomware_indicators` — Detect multiple ransomware indicators in a directory tree.
- `snapshot_directory_state` — Take a baseline snapshot of directory for differential analysis.
- `compare_snapshots` — Compare two directory snapshots to detect bulk encryption.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-ransomware-encryption-behavior`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
