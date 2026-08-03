---
name: analyzing-browser-forensics-with-hindsight
description: "Browser forensics analysis agent using Hindsight concepts. Parses Chromium-based browser artifacts (Chrome, Edge, Brave) including history, downloads, cookies, autofill, and extensions from SQLite databases. Use when the user asks to analyze browser forensics with hindsight."
version: 1.0.0
tags:
  - analyzing
  - forensics
source: analyzing-browser-forensics-with-hindsight
---

# Analyzing Browser Forensics with Hindsight

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Hindsight, DB Browser for SQLite, ChromeCacheView (NirSoft)

## When to use

- The user wants to **analyze** browser forensics with hindsight.
- Capability: Browser forensics analysis agent using Hindsight concepts. Parses Chromium-based browser artifacts (Chrome, Edge, Brave) including history, downloads, cookies, autofill, and extensions from SQLite databases.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, browser, forensics, hindsight`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Convert Chrome timestamp (microseconds since 1601-01-01) to datetime
2. Locate Chromium-based browser profile directories
3. Parse browsing history from History SQLite database
4. Parse download history from History database
5. Parse cookies from Cookies database
6. Parse autofill data from Web Data database
7. Parse installed browser extensions
8. Flag suspicious browsing and download patterns

## Key concepts

- DB Browser for SQLite: Chrome database inspection
- ChromeCacheView (NirSoft): Cache analysis
- History: URL visits, downloads, keyword searches
- Web Data: Autofill, credit cards
- Login Data: Saved credentials (encrypted)
- Bookmarks: JSON bookmark tree
- Chrome/WebKit: microseconds since 1601-01-01 UTC
- Firefox/Mozilla: microseconds since Unix epoch

## Tools & resources

- Hindsight
- DB Browser for SQLite
- ChromeCacheView (NirSoft)

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

- `chrome_time_to_datetime` — Convert Chrome timestamp (microseconds since 1601-01-01) to datetime.
- `find_browser_profiles` — Locate Chromium-based browser profile directories.
- `parse_history` — Parse browsing history from History SQLite database.
- `parse_downloads` — Parse download history from History database.
- `parse_cookies` — Parse cookies from Cookies database.
- `parse_autofill` — Parse autofill data from Web Data database.
- `parse_extensions` — Parse installed browser extensions.
- `detect_suspicious_activity` — Flag suspicious browsing and download patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-browser-forensics-with-hindsight`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
