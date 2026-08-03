---
name: analyzing-usb-device-connection-history
description: "Agent for analyzing USB device connection history from Windows registry hives. Use when the user asks to analyze usb device connection history."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-usb-device-connection-history
---

# Analyzing USB Device Connection History

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** python, SetupAPI Log Parsing, USB Forensic Registry Keys

## When to use

- The user wants to **analyze** usb device connection history.
- Capability: Agent for analyzing USB device connection history from Windows registry hives.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, device, connection, history`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse USBSTOR registry key to enumerate USB storage devices
2. Parse MountedDevices to map drive letters to USB devices
3. Parse MountPoints2 from NTUSER.DAT to find user-accessed volumes
4. Parse setupapi.dev.log for USB first-install timestamps
5. Build a unified USB activity timeline
6. Export timeline to CSV

## Tools & resources

- python
- SetupAPI Log Parsing
- USB Forensic Registry Keys

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

- `parse_usbstor` — Parse USBSTOR registry key to enumerate USB storage devices.
- `parse_mounted_devices` — Parse MountedDevices to map drive letters to USB devices.
- `parse_mountpoints2` — Parse MountPoints2 from NTUSER.DAT to find user-accessed volumes.
- `parse_setupapi_log` — Parse setupapi.dev.log for USB first-install timestamps.
- `build_timeline` — Build a unified USB activity timeline.
- `export_timeline_csv` — Export timeline to CSV.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-usb-device-connection-history`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
