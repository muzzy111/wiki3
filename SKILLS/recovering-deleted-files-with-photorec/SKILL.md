---
name: recovering-deleted-files-with-photorec
description: "Deleted file recovery agent using PhotoRec subprocess wrapper. Use when the user asks to recovering deleted files with photorec."
version: 1.0.0
tags:
  - recovering
source: recovering-deleted-files-with-photorec
---

# Recovering Deleted Files with Photorec

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** External Tools Required, File Categories

## When to use

- The user wants to **recover** deleted files with photorec.
- Capability: Deleted file recovery agent using PhotoRec subprocess wrapper.
- Goal: complete the task.
- Trigger keywords: `recovering, deleted, files, photorec`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check that PhotoRec is installed and available
2. Get forensic image information
3. Run PhotoRec for file recovery using command-line interface
4. Catalog all recovered files by type, size, and hash
5. Generate SHA-256 hashes for recovered files for evidence integrity
6. Sort recovered files into categorized directories
7. Run complete file recovery pipeline

## Tools & resources

- External Tools Required
- File Categories

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

- `verify_photorec` — Check that PhotoRec is installed and available.
- `get_image_info` — Get forensic image information.
- `run_photorec` — Run PhotoRec for file recovery using command-line interface.
- `catalog_recovered_files` — Catalog all recovered files by type, size, and hash.
- `hash_recovered_files` — Generate SHA-256 hashes for recovered files for evidence integrity.
- `sort_recovered_files` — Sort recovered files into categorized directories.
- `full_recovery_pipeline` — Run complete file recovery pipeline.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `recovering-deleted-files-with-photorec`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
