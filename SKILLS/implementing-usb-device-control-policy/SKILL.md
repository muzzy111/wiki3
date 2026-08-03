---
name: implementing-usb-device-control-policy
description: "USB device control policy audit agent. Audits USB device control policies on Linux and Windows systems by checking udev rules, USBGuard configuration, Windows Group Policy settings, and connected device history..... Use when the user asks to implement usb device control policy."
version: 1.0.0
tags:
  - implementing
source: implementing-usb-device-control-policy
---

# Implementing USB Device Control Policy

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Windows USB Device Audit, Linux USB Device Audit, Device Whitelist Management, Primary Standards, Supporting References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** usb device control policy.
- Capability: USB device control policy audit agent. Audits USB device control policies on Linux and Windows systems by checking udev rules, USBGuard configuration, Windows Group Policy settings, and connected device history. Reports unauthorized or unwhitelisted USB devices.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, device, control, policy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Audit USBGuard configuration and rules on Linux
2. Check for USB-related udev rules on Linux
3. List currently connected USB devices
4. Print audit summary

## Key concepts

- NIST SP 800-53 MP-7: Media Use - restricting removable media types and usage
- PCI DSS 4.0 Req 3.4.2: Restrict removable electronic media for cardholder data
- CIS Control 10.4: Configure device control to prevent removable media autorun
- ISO 27001 A.8.3.1: Management of removable media
- CrowdStrike Device Control: Falcon Console documentation

## Tools & resources

- Windows USB Device Audit
- Linux USB Device Audit
- Device Whitelist Management
- Primary Standards
- Supporting References

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

- `audit_linux_usbguard` — Audit USBGuard configuration and rules on Linux.
- `audit_linux_udev` — Check for USB-related udev rules on Linux.
- `list_connected_usb_devices` — List currently connected USB devices.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-usb-device-control-policy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
