---
name: extracting-browser-history-artifacts
description: "Browser history artifact extraction agent using sqlite3 for Chrome/Firefox/Edge forensics. Use when the user asks to extracting browser history artifacts."
version: 1.0.0
tags:
  - extracting
  - threat-intel
source: extracting-browser-history-artifacts
---

# Extracting Browser History Artifacts

**Role:** Security workflow  
**Audience:** security practitioners  

## When to use

- The user wants to **extract** browser history artifacts.
- Capability: Browser history artifact extraction agent using sqlite3 for Chrome/Firefox/Edge forensics.
- Goal: complete the task.
- Trigger keywords: `extracting, browser, history, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Convert Chrome/WebKit timestamp (microseconds since 1601-01-01) to ISO UTC
2. Convert Firefox timestamp (microseconds since Unix epoch) to ISO UTC
3. Extract browsing history from Chrome/Edge History database
4. Extract downloads from Chrome/Edge History database
5. Extract cookies from Chrome Cookies database
6. Extract browsing history from Firefox places.sqlite
7. Extract cookies from Firefox cookies.sqlite
8. Export extracted data to CSV

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

- `chrome_time_to_utc` — Convert Chrome/WebKit timestamp (microseconds since 1601-01-01) to ISO UTC.
- `firefox_time_to_utc` — Convert Firefox timestamp (microseconds since Unix epoch) to ISO UTC.
- `extract_chrome_history` — Extract browsing history from Chrome/Edge History database.
- `extract_chrome_downloads` — Extract downloads from Chrome/Edge History database.
- `extract_chrome_cookies` — Extract cookies from Chrome Cookies database.
- `extract_firefox_history` — Extract browsing history from Firefox places.sqlite.
- `extract_firefox_cookies` — Extract cookies from Firefox cookies.sqlite.
- `export_to_csv` — Export extracted data to CSV.
- `generate_report` — Generate comprehensive browser forensics report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `extracting-browser-history-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
