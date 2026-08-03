---
name: conducting-man-in-the-middle-attack-simulation
description: "MITM Attack Simulation Agent - Tests network defenses against ARP spoofing and traffic interception. Use when the user asks to conduct man in the middle attack simulation."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-man-in-the-middle-attack-simulation
---

# Conducting Man in The Middle Attack Simulation

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, Scapy Functions Used, Cleartext Protocols Detected

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** man in the middle attack simulation.
- Capability: MITM Attack Simulation Agent - Tests network defenses against ARP spoofing and traffic interception.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, middle, attack, simulation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Resolve MAC address for an IP using ARP request
2. Discover live hosts on the network via ARP scan
3. Send ARP spoofing packet to redirect traffic
4. Restore original ARP tables after test
5. Sniff traffic for cleartext protocol usage (HTTP, FTP, Telnet, SMTP)
6. Check if a target enforces HSTS headers
7. Evaluate if SSL stripping is feasible by checking HSTS preload status
8. Run a controlled MITM simulation with ARP spoofing and cleartext detection

## Tools & resources

- Key Functions
- Scapy Functions Used
- Cleartext Protocols Detected

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

- `get_mac` — Resolve MAC address for an IP using ARP request.
- `discover_hosts` — Discover live hosts on the network via ARP scan.
- `arp_spoof` — Send ARP spoofing packet to redirect traffic.
- `arp_restore` — Restore original ARP tables after test.
- `detect_cleartext_protocols` — Sniff traffic for cleartext protocol usage (HTTP, FTP, Telnet, SMTP).
- `check_hsts_enforcement` — Check if a target enforces HSTS headers.
- `test_ssl_stripping_potential` — Evaluate if SSL stripping is feasible by checking HSTS preload status.
- `run_mitm_simulation` — Run a controlled MITM simulation with ARP spoofing and cleartext detection.
- `generate_report` — Generate MITM assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-man-in-the-middle-attack-simulation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
