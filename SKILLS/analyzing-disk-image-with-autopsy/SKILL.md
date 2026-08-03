---
name: analyzing-disk-image-with-autopsy
description: "Forensic disk image analysis agent using The Sleuth Kit (TSK) command-line tools. Use when the user asks to analyze disk image with autopsy."
version: 1.0.0
tags:
  - analyzing
  - forensics
source: analyzing-disk-image-with-autopsy
---

# Analyzing Disk Image with Autopsy

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Autopsy, mmls, fls, icat, istat, mactime

## When to use

- The user wants to **analyze** disk image with autopsy.
- Capability: Forensic disk image analysis agent using The Sleuth Kit (TSK) command-line tools.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, disk, image, autopsy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Retrieve disk image metadata using img_stat
2. List partition layout using mmls
3. List files in a partition using fls
4. List only deleted files using fls -rd
5. Recover a file by inode using icat
6. Get detailed file metadata using istat
7. Generate a TSK bodyfile for timeline creation
8. Generate a timeline from a bodyfile using mactime

## Tools & resources

- Autopsy
- mmls
- fls
- icat
- istat
- mactime
- sigfind
- srch_strings

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

- `get_image_info` — Retrieve disk image metadata using img_stat.
- `list_partitions` — List partition layout using mmls.
- `list_files` — List files in a partition using fls.
- `list_deleted_files` — List only deleted files using fls -rd.
- `recover_file` — Recover a file by inode using icat.
- `get_file_metadata` — Get detailed file metadata using istat.
- `create_bodyfile` — Generate a TSK bodyfile for timeline creation.
- `generate_timeline` — Generate a timeline from a bodyfile using mactime.
- `search_keywords` — Search for keyword strings in the disk image.
- `find_file_signature` — Find file signatures at the sector level using sigfind.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-disk-image-with-autopsy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
