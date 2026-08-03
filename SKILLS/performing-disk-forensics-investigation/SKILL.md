---
name: performing-disk-forensics-investigation
description: "Disk Forensics Investigation Agent Performs disk forensics analysis including image verification, file system parsing, deleted file recovery, and timeline generation using pytsk3 and hashlib for evidence integrity. Use when the user asks to perform disk forensics investigation."
version: 1.0.0
tags:
  - performing
  - forensics
source: performing-disk-forensics-investigation
---

# Performing Disk Forensics Investigation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** File Metadata Fields, NTFS MFT Structure

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** disk forensics investigation.
- Capability: Disk Forensics Investigation Agent Performs disk forensics analysis including image verification, file system parsing, deleted file recovery, and timeline generation using pytsk3 and hashlib for evidence integrity.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, disk, forensics, investigation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate and verify hash of forensic disk image
2. Parse file system from disk image using pytsk3
3. List files in a directory within the disk image
4. Search for deleted files in the disk image
5. Parse MFT entries from an exported $MFT file for NTFS analysis
6. Build a timeline of file system activity from file metadata
7. Generate disk forensics investigation report

## Tools & resources

- File Metadata Fields
- NTFS MFT Structure

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

- `verify_image_integrity` — Calculate and verify hash of forensic disk image.
- `parse_filesystem_pytsk3` — Parse file system from disk image using pytsk3.
- `list_files_pytsk3` — List files in a directory within the disk image.
- `find_deleted_files` — Search for deleted files in the disk image.
- `parse_mft_entries` — Parse MFT entries from an exported $MFT file for NTFS analysis.
- `build_timeline` — Build a timeline of file system activity from file metadata.
- `generate_report` — Generate disk forensics investigation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-disk-forensics-investigation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
