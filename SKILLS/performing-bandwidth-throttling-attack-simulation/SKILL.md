---
name: performing-bandwidth-throttling-attack-simulation
description: "Bandwidth Throttling Attack Simulation Agent — AUTHORIZED TESTING ONLY Simulates bandwidth degradation attacks using Scapy and tc (traffic control) to test QoS controls and network monitoring detection capabilities..... Use when the user asks to perform bandwidth throttling attack simulation."
version: 1.0.0
tags:
  - performing
source: performing-bandwidth-throttling-attack-simulation
---

# Performing Bandwidth Throttling Attack Simulation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Scapy Library, Safety Controls

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** bandwidth throttling attack simulation.
- Capability: Bandwidth Throttling Attack Simulation Agent — AUTHORIZED TESTING ONLY Simulates bandwidth degradation attacks using Scapy and tc (traffic control) to test QoS controls and network monitoring detection capabilities. WARNING: Only use with explicit written authorization on isolated test networks.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, bandwidth, throttling, attack, simulation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Configure tc (traffic control) to throttle bandwidth on an interface
2. Remove tc throttling rules from interface
3. Generate controlled bandwidth consumption traffic using Scapy
4. Measure baseline bandwidth using iperf3 client
5. Generate bandwidth throttling simulation report

## Tools & resources

- Scapy Library
- Safety Controls

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

- `setup_tc_throttle` — Configure tc (traffic control) to throttle bandwidth on an interface.
- `remove_tc_throttle` — Remove tc throttling rules from interface.
- `generate_bandwidth_flood` — Generate controlled bandwidth consumption traffic using Scapy.
- `measure_baseline` — Measure baseline bandwidth using iperf3 client.
- `generate_report` — Generate bandwidth throttling simulation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-bandwidth-throttling-attack-simulation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
