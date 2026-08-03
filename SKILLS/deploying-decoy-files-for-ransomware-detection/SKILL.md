---
name: deploying-decoy-files-for-ransomware-detection
description: "Decoy file (canary) deployment agent for ransomware detection. Deploys canary files across file systems and monitors them for modifications that indicate ransomware encryption activity. Provides real-time alerting.... Use when the user asks to deploy decoy files for ransomware detection."
version: 1.0.0
tags:
  - deploying
  - malware
  - threat-intel
  - ransomware
source: deploying-decoy-files-for-ransomware-detection
---

# Deploying Decoy Files for Ransomware Detection

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** Windows ReadDirectoryChangesW API, Linux inotify Events, OSSEC/Wazuh File Integrity Monitoring, Sysmon File Monitoring, Common Ransomware File Extensions

## When to use

- The user wants to **deploy** decoy files for ransomware detection.
- Capability: Decoy file (canary) deployment agent for ransomware detection. Deploys canary files across file systems and monitors them for modifications that indicate ransomware encryption activity. Provides real-time alerting when decoy files are modified, renamed, or deleted.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, decoy, files, ransomware, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute SHA-256 hash of a file
2. Generate realistic content for canary files
3. Deploy canary files to target directories
4. Check all canary files for modifications, deletions, or renames
5. Continuously monitor canary files at specified interval

## Tools & resources

- Windows ReadDirectoryChangesW API
- Linux inotify Events
- OSSEC/Wazuh File Integrity Monitoring
- Sysmon File Monitoring
- Common Ransomware File Extensions

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

- `compute_file_hash` — Compute SHA-256 hash of a file.
- `generate_canary_content` — Generate realistic content for canary files.
- `deploy_canaries` — Deploy canary files to target directories.
- `check_canary_integrity` — Check all canary files for modifications, deletions, or renames.
- `monitor_loop` — Continuously monitor canary files at specified interval.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-decoy-files-for-ransomware-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
