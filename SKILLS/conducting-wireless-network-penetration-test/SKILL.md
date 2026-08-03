---
name: conducting-wireless-network-penetration-test
description: "Wireless Network Penetration Testing Agent - Tests WiFi security using Scapy and aircrack-ng. Use when the user asks to conduct wireless network penetration test."
version: 1.0.0
tags:
  - conducting
  - network
  - threat-intel
  - incident-response
source: conducting-wireless-network-penetration-test
---

# Conducting Wireless Network Penetration Test

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, Scapy 802.11 Layers Used, External Tools Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** wireless network penetration test.
- Capability: Wireless Network Penetration Testing Agent - Tests WiFi security using Scapy and aircrack-ng.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, wireless, network, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan for WiFi access points by capturing beacon frames
2. Detect rogue access points by comparing against known infrastructure
3. Identify access points using weak or no encryption
4. Capture WPA2 4-way handshake using airodump-ng
5. Send deauthentication frames to force client reconnection for handshake capture
6. Attempt to crack WPA2 handshake using aircrack-ng
7. Capture probe requests to identify client-side vulnerabilities
8. Check if WPS is enabled on target AP using wash

## Tools & resources

- Key Functions
- Scapy 802.11 Layers Used
- External Tools Used

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

- `scan_access_points` — Scan for WiFi access points by capturing beacon frames.
- `detect_rogue_aps` — Detect rogue access points by comparing against known infrastructure.
- `detect_weak_encryption` — Identify access points using weak or no encryption.
- `capture_handshake` — Capture WPA2 4-way handshake using airodump-ng.
- `send_deauth` — Send deauthentication frames to force client reconnection for handshake capture.
- `crack_handshake` — Attempt to crack WPA2 handshake using aircrack-ng.
- `detect_client_probes` — Capture probe requests to identify client-side vulnerabilities.
- `check_wps_enabled` — Check if WPS is enabled on target AP using wash.
- `generate_report` — Generate wireless penetration test report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-wireless-network-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
