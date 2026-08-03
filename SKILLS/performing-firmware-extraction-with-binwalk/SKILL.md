---
name: performing-firmware-extraction-with-binwalk
description: "Firmware extraction and analysis agent using binwalk for signature scanning, entropy analysis, filesystem extraction, and string-based credential discovery. Use when the user asks to perform firmware extraction with binwalk."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - incident-response
source: performing-firmware-extraction-with-binwalk
---

# Performing Firmware Extraction with Binwalk

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** binwalk, unsquashfs, jefferson, sasquatch, strings, dd

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** firmware extraction with binwalk.
- Capability: Firmware extraction and analysis agent using binwalk for signature scanning, entropy analysis, filesystem extraction, and string-based credential discovery.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, firmware, extraction, binwalk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of a byte sequence (0.0 = uniform, 8.0 = max random)
2. Generate a block-by-block entropy map of a firmware image
3. Classify an entropy value into a human-readable category
4. Identify contiguous regions of high or low entropy in a firmware image
5. Scan a firmware image for known magic byte signatures
6. Parse a U-Boot image header at the given offset
7. Extract printable ASCII strings and scan for sensitive patterns
8. Run binwalk signature scan via subprocess and return parsed output

## Tools & resources

- binwalk
- unsquashfs
- jefferson
- sasquatch
- strings
- dd

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

- `calculate_entropy` — Calculate Shannon entropy of a byte sequence (0.0 = uniform, 8.0 = max random).
- `entropy_map` — Generate a block-by-block entropy map of a firmware image.
- `classify_entropy` — Classify an entropy value into a human-readable category.
- `detect_entropy_regions` — Identify contiguous regions of high or low entropy in a firmware image.
- `scan_signatures` — Scan a firmware image for known magic byte signatures.
- `parse_uboot_header` — Parse a U-Boot image header at the given offset.
- `scan_strings` — Extract printable ASCII strings and scan for sensitive patterns.
- `run_binwalk_scan` — Run binwalk signature scan via subprocess and return parsed output.
- `run_binwalk_extract` — Run binwalk extraction via subprocess.
- `run_binwalk_entropy` — Run binwalk entropy analysis via subprocess.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-firmware-extraction-with-binwalk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
