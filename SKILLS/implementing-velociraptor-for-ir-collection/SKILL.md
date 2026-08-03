---
name: implementing-velociraptor-for-ir-collection
description: "Velociraptor incident response collection agent. Interfaces with the Velociraptor DFIR platform API to schedule artifact collections on endpoints, retrieve results, and generate IR reports. Supports common forensic.... Use when the user asks to implement velociraptor for ir collection."
version: 1.0.0
tags:
  - implementing
  - threat-intel
  - incident-response
source: implementing-velociraptor-for-ir-collection
---

# Implementing Velociraptor for IR Collection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Velociraptor, gRPC API, Key VQL Functions, Built-in Artifact Categories, NIST SP 800-86, ForensicArtifacts Standard

## When to use

- The user wants to **implement** velociraptor for ir collection.
- Capability: Velociraptor incident response collection agent. Interfaces with the Velociraptor DFIR platform API to schedule artifact collections on endpoints, retrieve results, and generate IR reports. Supports common forensic artifacts including process listings, network connections, autoruns, event logs, and file system evidence.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, velociraptor, collection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return Velociraptor API configuration
2. Make an authenticated API call to Velociraptor
3. Search for Velociraptor clients by hostname, label, or client ID
4. Schedule an artifact collection on a specific client
5. Check the status of a collection flow
6. Poll until a collection flow completes
7. Retrieve collected artifact results
8. Print collection summary

## Key concepts

- Evidence collection procedures for digital investigations
- Chain of custody requirements for forensic data
- Volatile and non-volatile evidence prioritization
- Cross-platform artifact repository
- Community-contributed artifact definitions
- FOR500: Windows Forensic Analysis artifact prioritization
- FOR508: Advanced Incident Response collection methodology
- Evidence acquisition order of volatility

## Tools & resources

- Velociraptor
- gRPC API
- Key VQL Functions
- Built-in Artifact Categories
- NIST SP 800-86
- ForensicArtifacts Standard
- SANS DFIR Collection Standards
- Sigma Detection Standard

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

- `get_velo_config` — Return Velociraptor API configuration.
- `velo_api_call` — Make an authenticated API call to Velociraptor.
- `search_clients` — Search for Velociraptor clients by hostname, label, or client ID.
- `collect_artifact` — Schedule an artifact collection on a specific client.
- `get_flow_status` — Check the status of a collection flow.
- `wait_for_collection` — Poll until a collection flow completes.
- `get_flow_results` — Retrieve collected artifact results.
- `format_summary` — Print collection summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-velociraptor-for-ir-collection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
