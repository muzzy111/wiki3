---
name: analyzing-uefi-bootkit-persistence
description: "UEFI bootkit persistence analysis agent for detecting firmware implants, ESP modifications, Secure Boot bypasses, and UEFI variable manipulation. Use when the user asks to analyze uefi bootkit persistence."
version: 1.0.0
tags:
  - analyzing
  - malware
source: analyzing-uefi-bootkit-persistence
---

# Analyzing UEFI Bootkit Persistence

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** chipsec, UEFITool / UEFIExtract, Secure Boot Variable GUIDs, flashrom, sigcheck, bcdedit

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** uefi bootkit persistence.
- Capability: UEFI bootkit persistence analysis agent for detecting firmware implants, ESP modifications, Secure Boot bypasses, and UEFI variable manipulation.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, uefi, bootkit, persistence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan a mounted EFI System Partition for bootkit indicators
2. Compute SHA-256 hash of a file
3. Scan a raw firmware dump for EFI firmware volumes and PE/COFF executables
4. Format 16 raw GUID bytes into standard XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX form
5. Check Secure Boot status on the local system (Linux)
6. Run a chipsec module via subprocess and return output
7. Dump SPI flash contents via chipsec
8. Run a comprehensive set of chipsec security modules

## Tools & resources

- chipsec
- UEFITool / UEFIExtract
- Secure Boot Variable GUIDs
- flashrom
- sigcheck
- bcdedit
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

- `scan_esp_partition` — Scan a mounted EFI System Partition for bootkit indicators.
- `hash_file` — Compute SHA-256 hash of a file.
- `scan_firmware_dump` — Scan a raw firmware dump for EFI firmware volumes and PE/COFF executables.
- `format_guid` — Format 16 raw GUID bytes into standard XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX form.
- `check_secure_boot_status` — Check Secure Boot status on the local system (Linux).
- `run_chipsec_module` — Run a chipsec module via subprocess and return output.
- `run_chipsec_spi_dump` — Dump SPI flash contents via chipsec.
- `run_firmware_security_audit` — Run a comprehensive set of chipsec security modules.
- `firmware_entropy_map` — Generate block-level entropy map to detect encrypted/compressed firmware regions.
- `analyze_uefi_bootkit` — Perform UEFI bootkit persistence analysis on a firmware dump or ESP mount point.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-uefi-bootkit-persistence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
