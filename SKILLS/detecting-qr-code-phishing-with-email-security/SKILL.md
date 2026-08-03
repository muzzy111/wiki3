---
name: detecting-qr-code-phishing-with-email-security
description: "Agent for detecting QR code phishing (quishing) in email attachments and bodies. Use when the user asks to detect qr code phishing with email security."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - email
source: detecting-qr-code-phishing-with-email-security
---

# Detecting Qr Code Phishing with Email Security

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** pyzbar, Python email Module, URL Analysis Indicators, VirusTotal URL Scan API, Common Quishing Themes, Detection Technologies

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** qr code phishing with email security.
- Capability: Agent for detecting QR code phishing (quishing) in email attachments and bodies.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, code, phishing, email, security`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Extract image attachments and inline images from an .eml file
2. Decode QR codes from raw image bytes
3. Score a URL for phishing risk indicators
4. Full QR phishing analysis of an email file
5. Scan a directory for .eml files and analyze each

## Key concepts

- Quishing incidents grew from 46,000 to 250,000 between Aug-Nov 2025 (Kaspersky)
- Only 36% of quishing incidents accurately identified by recipients
- T1566.001: Phishing: Spearphishing Attachment (QR in PDF/image)
- T1566.002: Phishing: Spearphishing Link (QR-encoded URL)
- T1204.001: User Execution: Malicious Link (user scans QR)
- T1598.003: Phishing for Information: Spearphishing Link
- MFA enrollment/reset requiring QR scan
- Document signing via QR code

## Tools & resources

- pyzbar
- Python email Module
- URL Analysis Indicators
- VirusTotal URL Scan API
- Common Quishing Themes
- Detection Technologies

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

- `extract_images_from_eml` — Extract image attachments and inline images from an .eml file.
- `decode_qr_from_bytes` — Decode QR codes from raw image bytes.
- `analyze_url` — Score a URL for phishing risk indicators.
- `analyze_email` — Full QR phishing analysis of an email file.
- `scan_directory` — Scan a directory for .eml files and analyze each.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-qr-code-phishing-with-email-security`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
