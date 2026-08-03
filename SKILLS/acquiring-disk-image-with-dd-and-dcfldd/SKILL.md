---
name: acquiring-disk-image-with-dd-and-dcfldd
description: "Forensic disk image acquisition agent using dd and dcfldd with hash verification. Use when the user asks to acquire disk image with dd and dcfldd."
version: 1.0.0
tags:
  - acquiring
  - forensics
  - incident-response
source: acquiring-disk-image-with-dd-and-dcfldd
---

# Acquiring Disk Image with dd and dcfldd

**Role:** Forensic acquisition  
**Audience:** DFIR analysts and incident responders  
**Primary tools:** dcfldd, dd / dcfldd, sha256sum, blockdev, lsblk, hdparm

## When to use

- The user wants to **acquire** disk image with dd and dcfldd.
- Capability: Forensic disk image acquisition agent using dd and dcfldd with hash verification.
- Goal: collect evidence in a forensically sound manner with integrity verification.
- Trigger keywords: `acquiring, disk, image, dcfldd`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Enumerate connected block devices
2. Verify a device is set to read-only mode
3. Enable software write-blocking on the target device
4. Compute the SHA-256 or MD5 hash of a file or device
5. Acquire a forensic image using dd with error handling
6. Acquire a forensic image using dcfldd with built-in hashing
7. Verify image integrity by comparing hashes of source and acquired image
8. Generate a forensic acquisition report

## Tools & resources

- dcfldd
- dd / dcfldd
- sha256sum
- blockdev
- lsblk
- hdparm

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

- `list_block_devices` — Enumerate connected block devices.
- `check_write_protection` — Verify a device is set to read-only mode.
- `enable_write_protection` — Enable software write-blocking on the target device.
- `compute_hash` — Compute the SHA-256 or MD5 hash of a file or device.
- `acquire_with_dd` — Acquire a forensic image using dd with error handling.
- `acquire_with_dcfldd` — Acquire a forensic image using dcfldd with built-in hashing.
- `verify_image` — Verify image integrity by comparing hashes of source and acquired image.
- `generate_report` — Generate a forensic acquisition report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `acquiring-disk-image-with-dd-and-dcfldd`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
