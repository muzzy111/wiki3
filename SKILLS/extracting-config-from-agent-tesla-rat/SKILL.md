---
name: extracting-config-from-agent-tesla-rat
description: "Agent for extracting configuration from Agent Tesla RAT samples (malware analysis). Use when the user asks to extracting config from agent tesla rat."
version: 1.0.0
tags:
  - extracting
  - threat-intel
source: extracting-config-from-agent-tesla-rat
---

# Extracting Config from Agent Tesla Rat

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Agent Tesla Overview, String Extraction, Configuration Indicators, YARA Rule, File Hashing, VirusTotal API

## When to use

- The user wants to **extract** config from agent tesla rat.
- Capability: Agent for extracting configuration from Agent Tesla RAT samples (malware analysis).
- Goal: complete the task.
- Trigger keywords: `extracting, config, agent, tesla`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Compute MD5, SHA1, SHA256 of a file
2. Extract ASCII and wide strings from binary
3. Extract SMTP configuration from string artifacts
4. Extract FTP exfiltration configuration
5. Extract Telegram bot exfiltration config
6. Try to decode base64-encoded configuration strings
7. Full analysis of suspected Agent Tesla sample

## Key concepts

- MITRE ATT&CK Framework
- NIST SP 800-83 Guide to Malware Incident Prevention
- NIST SP 800-86 Guide to Integrating Forensic Techniques

## Tools & resources

- Agent Tesla Overview
- String Extraction
- Configuration Indicators
- YARA Rule
- File Hashing
- VirusTotal API
- Sandbox Analysis
- Applicable Standards

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

- `compute_file_hashes` — Compute MD5, SHA1, SHA256 of a file.
- `extract_strings` — Extract ASCII and wide strings from binary.
- `find_smtp_config` — Extract SMTP configuration from string artifacts.
- `find_ftp_config` — Extract FTP exfiltration configuration.
- `find_telegram_config` — Extract Telegram bot exfiltration config.
- `decode_base64_strings` — Try to decode base64-encoded configuration strings.
- `analyze_sample` — Full analysis of suspected Agent Tesla sample.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `extracting-config-from-agent-tesla-rat`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
