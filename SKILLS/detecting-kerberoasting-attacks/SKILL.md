---
name: detecting-kerberoasting-attacks
description: "Kerberoasting Detection Agent - Detects Kerberoasting via Event 4769 TGS-REQ analysis. Use when the user asks to detect kerberoasting attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-kerberoasting-attacks
---

# Detecting Kerberoasting Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** python-evtx Library, Encryption Type Values, Detection Logic, Detection Data Sources

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** kerberoasting attacks.
- Capability: Kerberoasting Detection Agent - Detects Kerberoasting via Event 4769 TGS-REQ analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, kerberoasting, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse Event ID 4769 (Kerberos TGS requests) from Security EVTX
2. Detect TGS requests using weak RC4-HMAC encryption (Kerberoasting indicator)
3. Detect high-volume TGS requests from a single source (spray pattern)
4. Detect TGS requests for unusual or sensitive SPNs
5. Correlate suspicious TGS sources with logon events (4624) for attribution
6. Generate Kerberoasting detection report

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- python-evtx Library
- Encryption Type Values
- Detection Logic
- Detection Data Sources

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

- `parse_tgs_events` — Parse Event ID 4769 (Kerberos TGS requests) from Security EVTX.
- `detect_rc4_tgs_requests` — Detect TGS requests using weak RC4-HMAC encryption (Kerberoasting indicator).
- `detect_high_volume_tgs` — Detect high-volume TGS requests from a single source (spray pattern).
- `detect_anomalous_spn_requests` — Detect TGS requests for unusual or sensitive SPNs.
- `correlate_with_logon_events` — Correlate suspicious TGS sources with logon events (4624) for attribution.
- `generate_report` — Generate Kerberoasting detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-kerberoasting-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
