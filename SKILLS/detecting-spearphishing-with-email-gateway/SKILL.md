---
name: detecting-spearphishing-with-email-gateway
description: "Agent for detecting spearphishing emails using email gateway log analysis. Use when the user asks to detect spearphishing with email gateway."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - email
source: detecting-spearphishing-with-email-gateway
---

# Detecting Spearphishing with Email Gateway

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Python email Module, SPF Record Lookup, DKIM Verification, DMARC Record, Proofpoint TAP API, Mimecast API

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** spearphishing with email gateway.
- Capability: Agent for detecting spearphishing emails using email gateway log analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, spearphishing, email, gateway`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Extract security-relevant headers from an email
2. Verify SPF, DKIM, DMARC authentication results
3. Analyze email body for spearphishing content indicators
4. Full spearphishing analysis of a single email

## Key concepts

- T1566.001: Phishing: Spearphishing Attachment
- T1566.002: Phishing: Spearphishing Link
- T1566.003: Phishing: Spearphishing via Service
- T1598.002: Phishing for Information: Spearphishing Attachment
- T1598.003: Phishing for Information: Spearphishing Link
- T1534: Internal Spearphishing
- NIST SP 800-177 Rev.1: Trustworthy Email
- NIST SP 800-53 Rev.5: SI-8 Spam Protection, SI-3 Malicious Code Protection

## Tools & resources

- Python email Module
- SPF Record Lookup
- DKIM Verification
- DMARC Record
- Proofpoint TAP API
- Mimecast API
- NIST Guidelines
- CIS Controls v8

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

- `parse_email_headers` — Extract security-relevant headers from an email.
- `check_authentication` — Verify SPF, DKIM, DMARC authentication results.
- `check_content_indicators` — Analyze email body for spearphishing content indicators.
- `analyze_email` — Full spearphishing analysis of a single email.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-spearphishing-with-email-gateway`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
