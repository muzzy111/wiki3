---
name: hunting-for-webshell-activity
description: "Agent for hunting web shell activity on web servers via process tree and log analysis. Use when the user asks to hunt for webshell activity."
version: 1.0.0
tags:
  - hunting
  - threat-intel
  - appsec
source: hunting-for-webshell-activity
---

# Hunting for Webshell Activity

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Process Tree Detection, Splunk SPL, KQL, Sigma Rule, Detection Data Sources

## When to use

- The user wants to **hunt for** webshell activity.
- Capability: Agent for hunting web shell activity on web servers via process tree and log analysis.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, webshell, activity`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load process creation logs (JSON lines)
2. Detect shell processes spawned by web server processes
3. Analyze web access logs for webshell indicators
4. Detect new script files created in web server directories
5. Detect reconnaissance commands typically run through webshells

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Process Tree Detection
- Splunk SPL
- KQL
- Sigma Rule
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

- `load_process_logs` — Load process creation logs (JSON lines).
- `detect_webserver_child_shells` — Detect shell processes spawned by web server processes.
- `analyze_web_access_logs` — Analyze web access logs for webshell indicators.
- `detect_file_creation_in_webroot` — Detect new script files created in web server directories.
- `detect_post_exploitation` — Detect reconnaissance commands typically run through webshells.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-webshell-activity`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
