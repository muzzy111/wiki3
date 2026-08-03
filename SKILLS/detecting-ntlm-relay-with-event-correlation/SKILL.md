---
name: detecting-ntlm-relay-with-event-correlation
description: "NTLM Relay Detection Agent - Detects NTLM relay via Event 4624 correlation and signing audit. Use when the user asks to detect ntlm relay with event correlation."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - active-directory
source: detecting-ntlm-relay-with-event-correlation
---

# Detecting NTLM Relay with Event Correlation

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** SMB Signing Registry Keys, NTLM Configuration Registry Keys, Network Indicators, Coercion Methods, python-evtx

## When to use

- The user wants to **detect** ntlm relay with event correlation.
- Capability: NTLM Relay Detection Agent - Detects NTLM relay via Event 4624 correlation and signing audit.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, ntlm, relay, event, correlation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Windows Security EVTX for Event 4624/4625/4776
2. Load hostname-to-IP inventory from CSV (columns: hostname, ip_address)
3. Detect NTLM relay via IP-hostname mismatch in Event 4624 LogonType 3
4. Detect rapid NTLM authentication to multiple targets (relay spraying)
5. Detect NTLMv1 authentication events indicating downgrade attack
6. Detect machine account NTLM relay (PetitPotam, DFSCoerce, PrinterBug)
7. Audit local SMB signing configuration (Windows only)
8. Generate JSON detection report

## Tools & resources

- SMB Signing Registry Keys
- NTLM Configuration Registry Keys
- Network Indicators
- Coercion Methods
- python-evtx

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

- `parse_security_evtx` — Parse Windows Security EVTX for Event 4624/4625/4776.
- `load_inventory` — Load hostname-to-IP inventory from CSV (columns: hostname, ip_address).
- `detect_ip_hostname_mismatch` — Detect NTLM relay via IP-hostname mismatch in Event 4624 LogonType 3.
- `detect_rapid_auth` — Detect rapid NTLM authentication to multiple targets (relay spraying).
- `detect_ntlmv1_downgrade` — Detect NTLMv1 authentication events indicating downgrade attack.
- `detect_machine_relay` — Detect machine account NTLM relay (PetitPotam, DFSCoerce, PrinterBug).
- `audit_smb_signing_local` — Audit local SMB signing configuration (Windows only).
- `generate_report` — Generate JSON detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-ntlm-relay-with-event-correlation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
