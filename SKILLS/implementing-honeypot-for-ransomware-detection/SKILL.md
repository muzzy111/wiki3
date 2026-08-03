---
name: implementing-honeypot-for-ransomware-detection
description: "Agent for deploying and monitoring ransomware honeypot canary files. Use when the user asks to implement honeypot for ransomware detection."
version: 1.0.0
tags:
  - implementing
  - malware
  - threat-intel
  - ransomware
source: implementing-honeypot-for-ransomware-detection
---

# Implementing Honeypot for Ransomware Detection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Thinkst Canary, Canarytokens, OpenCanary, FSRM, Elastic Ransomware Protection

## When to use

- The user wants to **implement** honeypot for ransomware detection.
- Capability: Agent for deploying and monitoring ransomware honeypot canary files.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, honeypot, ransomware, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create canary files in strategic locations for ransomware detection
2. Save canary file manifest for integrity monitoring
3. Check canary files against manifest to detect tampering/encryption
4. Detect rapid file modifications indicative of ransomware
5. Generate SMB honeypot share configuration
6. Analyze honeypot access logs for suspicious activity

## Key concepts

- T1486: Data Encrypted for Impact (detection via canary file modification)
- T1021.002: SMB/Windows Admin Shares (detection via honeypot share access)
- T1083: File and Directory Discovery (detection via honeypot folder browsing)
- SI-4: System Monitoring (honeypots as monitoring component)
- AU-6: Audit Record Review, Analysis, and Reporting (canary file audit logging)
- Control 13.1: Centralize security event alerting (integrate honeypot alerts into SIEM)
- Control 13.8: Deploy intrusion detection/prevention systems

## Tools & resources

- Thinkst Canary
- Canarytokens
- OpenCanary
- FSRM
- Elastic Ransomware Protection

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

- `create_canary_files` — Create canary files in strategic locations for ransomware detection.
- `generate_canary_manifest` — Save canary file manifest for integrity monitoring.
- `check_canary_integrity` — Check canary files against manifest to detect tampering/encryption.
- `detect_ransomware_indicators` — Detect rapid file modifications indicative of ransomware.
- `generate_honeypot_share_config` — Generate SMB honeypot share configuration.
- `analyze_honeypot_logs` — Analyze honeypot access logs for suspicious activity.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-honeypot-for-ransomware-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
