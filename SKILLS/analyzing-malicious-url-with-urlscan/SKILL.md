---
name: analyzing-malicious-url-with-urlscan
description: "URLScan.io Malicious URL Analysis Agent - Submits and analyzes URLs via the urlscan.io API. Use when the user asks to analyze malicious url with urlscan."
version: 1.0.0
tags:
  - analyzing
source: analyzing-malicious-url-with-urlscan
---

# Analyzing Malicious URL with urlscan.io

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** urlscan.io, Base URL, Submit Scan, Get Result, Search, Result Structure

## When to use

- The user wants to **analyze** malicious url with urlscan.
- Capability: URLScan.io Malicious URL Analysis Agent - Submits and analyzes URLs via the urlscan.io API.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, malicious, urlscan`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Submit a URL to urlscan.io for scanning
2. Poll for scan results until complete
3. Search urlscan.io for existing scans
4. Analyze urlscan.io scan result for malicious indicators
5. Submit and analyze multiple URLs
6. Generate URL analysis report

## Key concepts

- T1566.002: Phishing: Spearphishing Link
- T1204.001: User Execution: Malicious Link
- T1608.005: Stage Capabilities: Link Target
- T1071.001: Application Layer Protocol: Web Protocols
- T1102: Web Service (for C2 via web)
- NIST SP 800-83: Guide to Malware Incident Prevention and Handling
- NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response
- RFC 3986: Uniform Resource Identifier (URI) syntax

## Tools & resources

- urlscan.io
- Base URL
- Submit Scan
- Get Result
- Search
- Result Structure
- Screenshot
- DOM Snapshot

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

- `submit_url` — Submit a URL to urlscan.io for scanning.
- `get_scan_result` — Poll for scan results until complete.
- `search_urlscan` — Search urlscan.io for existing scans.
- `analyze_result` — Analyze urlscan.io scan result for malicious indicators.
- `bulk_analyze` — Submit and analyze multiple URLs.
- `generate_report` — Generate URL analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-malicious-url-with-urlscan`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
