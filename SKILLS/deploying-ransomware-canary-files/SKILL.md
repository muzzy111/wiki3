---
name: deploying-ransomware-canary-files
description: "Ransomware canary file deployment and monitoring agent. Deploys decoy files across critical directories and monitors them using watchdog for real-time filesystem event detection. Any interaction with canary files.... Use when the user asks to deploy ransomware canary files."
version: 1.0.0
tags:
  - deploying
  - malware
  - ransomware
source: deploying-ransomware-canary-files
---

# Deploying Ransomware Canary Files

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** Canary File Deployment, Monitoring Functions, CanaryFileHandler Events, Alert Channels, Ransomware Extension Detection

## When to use

- The user wants to **deploy** ransomware canary files.
- Capability: Ransomware canary file deployment and monitoring agent. Deploys decoy files across critical directories and monitors them using watchdog for real-time filesystem event detection. Any interaction with canary files triggers alerts via email, Slack, and syslog.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, ransomware, canary, files`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute SHA-256 hash of a file
2. Calculate Shannon entropy of file content to detect encryption
3. Get information about processes that may have accessed canary files
4. Deploy canary files to specified directories
5. Send alert email via SMTP
6. Send alert to Slack via incoming webhook
7. Send alert to syslog server via UDP
8. Start real-time canary file monitoring

## Tools & resources

- Canary File Deployment
- Monitoring Functions
- CanaryFileHandler Events
- Alert Channels
- Ransomware Extension Detection

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

- `compute_sha256` — Compute SHA-256 hash of a file.
- `compute_entropy` — Calculate Shannon entropy of file content to detect encryption.
- `get_process_info` — Get information about processes that may have accessed canary files.
- `deploy_canary_files` — Deploy canary files to specified directories.
- `send_email_alert` — Send alert email via SMTP.
- `send_slack_alert` — Send alert to Slack via incoming webhook.
- `send_syslog_alert` — Send alert to syslog server via UDP.
- `start_monitoring` — Start real-time canary file monitoring.
- `verify_canary_integrity` — Verify all canary files match their original hashes.
- `simulate_ransomware_test` — Simulate ransomware activity against canary files for testing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-ransomware-canary-files`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
