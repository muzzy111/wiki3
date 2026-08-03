---
name: validating-backup-integrity-for-recovery
description: "Agent for validating backup integrity for disaster recovery. Computes cryptographic hashes, compares manifests, detects corruption, scans for ransomware artifacts, measures file entropy, and validates backup.... Use when the user asks to validating backup integrity for recovery."
version: 1.0.0
tags:
  - validating
source: validating-backup-integrity-for-recovery
---

# Validating Backup Integrity for Recovery

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Hash Algorithms Supported, Entropy Scan Output, Entropy Reference Values, Ransomware Scan Output, Known Ransomware Extensions Detected

## When to use

- The user wants to **validat** backup integrity for recovery.
- Capability: Agent for validating backup integrity for disaster recovery. Computes cryptographic hashes, compares manifests, detects corruption, scans for ransomware artifacts, measures file entropy, and validates backup recoverability.
- Goal: complete the task.
- Trigger keywords: `validating, backup, integrity, recovery`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute cryptographic hash of a single file
2. Generate hash manifest for all files in a directory
3. Compare two manifest files to detect integrity issues
4. Calculate Shannon entropy of a file (0-8 bits per byte)
5. Scan directory for files with suspiciously high entropy (possible encryption)
6. Scan restored backup for ransomware indicators
7. Run full backup validation suite

## Tools & resources

- Hash Algorithms Supported
- Entropy Scan Output
- Entropy Reference Values
- Ransomware Scan Output
- Known Ransomware Extensions Detected

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

- `compute_file_hash` — Compute cryptographic hash of a single file.
- `generate_manifest` — Generate hash manifest for all files in a directory.
- `compare_manifests` — Compare two manifest files to detect integrity issues.
- `calculate_entropy` — Calculate Shannon entropy of a file (0-8 bits per byte).
- `entropy_scan` — Scan directory for files with suspiciously high entropy (possible encryption).
- `scan_ransomware_artifacts` — Scan restored backup for ransomware indicators.
- `validate_backup` — Run full backup validation suite.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `validating-backup-integrity-for-recovery`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
