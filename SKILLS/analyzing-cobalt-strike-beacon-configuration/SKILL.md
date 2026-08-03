---
name: analyzing-cobalt-strike-beacon-configuration
description: "Cobalt Strike beacon configuration extraction and analysis agent. Extracts C2 configuration from beacon payloads including server addresses, communication settings, malleable C2 profile details, and watermark values. Use when the user asks to analyze cobalt strike beacon configuration."
version: 1.0.0
tags:
  - analyzing
  - malware
source: analyzing-cobalt-strike-beacon-configuration
---

# Analyzing Cobalt Strike Beacon Configuration

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Cobalt Strike, JARM Fingerprinting, Known Watermark Values, Detection Signatures, Malleable C2 Profile Elements, Malleable C2 Profile Structure

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** cobalt strike beacon configuration.
- Capability: Cobalt Strike beacon configuration extraction and analysis agent. Extracts C2 configuration from beacon payloads including server addresses, communication settings, malleable C2 profile details, and watermark values.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, cobalt, strike, beacon, configuration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Compute SHA-256 hash of file
2. Find the beacon configuration blob in PE data or shellcode
3. XOR decode data with single byte key
4. Parse a single TLV config field
5. Extract and parse Cobalt Strike beacon configuration
6. Extract C2 indicators from parsed config for threat intelligence
7. Assess operator OPSEC based on beacon configuration

## Key concepts

- Cobalt Strike 3.x: XOR key = 0x69
- Cobalt Strike 4.x: XOR key = 0x2e
- Configuration blob size: 4096 bytes (typical)
- Encoding: Single-byte XOR across entire config blob
- PE with beacon code in .data section
- Configuration embedded after beacon code
- Reflective DLL loader prepended to beacon

## Tools & resources

- Cobalt Strike
- JARM Fingerprinting
- Known Watermark Values
- Detection Signatures
- Malleable C2 Profile Elements
- Malleable C2 Profile Structure

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

- `compute_hash` — Compute SHA-256 hash of file.
- `find_config_offset` — Find the beacon configuration blob in PE data or shellcode.
- `xor_decode` — XOR decode data with single byte key.
- `parse_config_field` — Parse a single TLV config field.
- `extract_beacon_config` — Extract and parse Cobalt Strike beacon configuration.
- `extract_c2_indicators` — Extract C2 indicators from parsed config for threat intelligence.
- `assess_operator_opsec` — Assess operator OPSEC based on beacon configuration.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-cobalt-strike-beacon-configuration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
