---
name: analyzing-bootkit-and-rootkit-samples
description: "Bootkit and rootkit analysis agent for MBR/VBR/UEFI inspection and rootkit detection. Use when the user asks to analyze bootkit and rootkit samples."
version: 1.0.0
tags:
  - analyzing
  - malware
source: analyzing-bootkit-and-rootkit-samples
---

# Analyzing Bootkit and Rootkit Samples

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** dd, ndisasm, UEFITool, chipsec, Volatility 3, flashrom

## When to use

- The user wants to **analyze** bootkit and rootkit samples.
- Capability: Bootkit and rootkit analysis agent for MBR/VBR/UEFI inspection and rootkit detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, bootkit, rootkit, samples`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Read and parse the first 512 bytes (MBR) from a disk image or device
2. Check the MBR boot signature at bytes 510-511 (should be 0x55AA)
3. Parse the four 16-byte partition table entries starting at offset 446
4. Scan boot sector data against known bootkit signatures
5. Calculate Shannon entropy of binary data
6. Read the first track (typically 63 sectors) for extended bootkit code
7. Analyze MBR bootstrap code (bytes 0-445) for suspicious patterns
8. Run a Volatility 3 plugin for rootkit detection via subprocess

## Tools & resources

- dd
- ndisasm
- UEFITool
- chipsec
- Volatility 3
- flashrom
- YARA

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

- `read_mbr` — Read and parse the first 512 bytes (MBR) from a disk image or device.
- `validate_mbr_signature` — Check the MBR boot signature at bytes 510-511 (should be 0x55AA).
- `parse_partition_table` — Parse the four 16-byte partition table entries starting at offset 446.
- `scan_bootkit_signatures` — Scan boot sector data against known bootkit signatures.
- `calculate_entropy` — Calculate Shannon entropy of binary data.
- `read_first_track` — Read the first track (typically 63 sectors) for extended bootkit code.
- `analyze_boot_code` — Analyze MBR bootstrap code (bytes 0-445) for suspicious patterns.
- `run_volatility_rootkit_scan` — Run a Volatility 3 plugin for rootkit detection via subprocess.
- `detect_kernel_rootkit` — Run multiple Volatility plugins to detect kernel-level rootkit artifacts.
- `compare_process_lists` — Compare pslist and psscan output to find hidden processes (DKOM).

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-bootkit-and-rootkit-samples`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
