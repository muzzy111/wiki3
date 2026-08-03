---
name: implementing-endpoint-dlp-controls
description: "Agent for implementing and monitoring endpoint DLP controls. Use when the user asks to implement endpoint dlp controls."
version: 1.0.0
tags:
  - implementing
source: implementing-endpoint-dlp-controls
---

# Implementing Endpoint Dlp Controls

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** DLP Channels, Microsoft Purview DLP API, CrowdStrike Falcon DLP, File Scanning

## When to use

- The user wants to **implement** endpoint dlp controls.
- Capability: Agent for implementing and monitoring endpoint DLP controls.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, endpoint, controls`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Scan a single file for sensitive data patterns
2. Scan a directory for files containing sensitive data
3. Monitor file transfers to USB/removable devices
4. Monitor file uploads to cloud storage services
5. Generate endpoint DLP policy recommendations

## Key concepts

- NIST SP 800-53 SC-7: Boundary Protection - DLP enforces data boundaries
- PCI DSS 4.0 Req 3: Protect stored account data
- GDPR Article 32: Security of processing - preventing unauthorized data transfer
- HIPAA 164.312(e)(1): Transmission security for ePHI

## Tools & resources

- DLP Channels
- Microsoft Purview DLP API
- CrowdStrike Falcon DLP
- File Scanning

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

- `scan_file_for_sensitive_data` — Scan a single file for sensitive data patterns.
- `scan_directory` — Scan a directory for files containing sensitive data.
- `monitor_usb_transfers` — Monitor file transfers to USB/removable devices.
- `monitor_cloud_uploads` — Monitor file uploads to cloud storage services.
- `generate_dlp_policy` — Generate endpoint DLP policy recommendations.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-endpoint-dlp-controls`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
