---
name: performing-adversary-in-the-middle-phishing-detection
description: "Adversary-in-the-Middle (AiTM) Phishing Detection agent - analyzes sign-in logs and inbox rules to detect AiTM phishing campaigns that bypass MFA by proxying authentication sessions. Use when the user asks to perform adversary in the middle phishing detection."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - email
source: performing-adversary-in-the-middle-phishing-detection
---

# Performing Adversary in The Middle Phishing Detection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AiTM Attack Overview, Detection Methods, Haversine Formula, Detection Rule Categories, Phishing-Resistant MFA Standards

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** adversary in the middle phishing detection.
- Capability: Adversary-in-the-Middle (AiTM) Phishing Detection agent - analyzes sign-in logs and inbox rules to detect AiTM phishing campaigns that bypass MFA by proxying authentication sessions.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, adversary, middle, phishing, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Calculate great-circle distance between two points
2. Load Azure AD / Entra ID sign-in logs in JSON format
3. Detect impossible travel - logins from distant locations in short time
4. Detect inbox rules commonly created by AiTM attackers
5. Detect potential session token replay from new device/location
6. Run all detection checks and build consolidated report

## Key concepts

- T1557: Adversary-in-the-Middle
- T1539: Steal Web Session Cookie
- T1550.004: Use Alternate Authentication Material: Web Session Cookie
- T1566.002: Phishing: Spearphishing Link
- T1114.003: Email Collection: Email Forwarding Rule
- T1098.005: Account Manipulation: Device Registration
- Over 1 million PhaaS attacks detected in Jan-Feb 2025 (Barracuda)
- Tycoon 2FA most prevalent followed by EvilProxy and Evilginx

## Tools & resources

- AiTM Attack Overview
- Detection Methods
- Haversine Formula
- Detection Rule Categories
- Phishing-Resistant MFA Standards

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

- `haversine_km` — Calculate great-circle distance between two points.
- `load_sign_in_logs` — Load Azure AD / Entra ID sign-in logs in JSON format.
- `detect_impossible_travel` — Detect impossible travel - logins from distant locations in short time.
- `detect_suspicious_inbox_rules` — Detect inbox rules commonly created by AiTM attackers.
- `detect_token_replay` — Detect potential session token replay from new device/location.
- `generate_report` — Run all detection checks and build consolidated report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-adversary-in-the-middle-phishing-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
