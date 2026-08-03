---
name: performing-ssl-stripping-attack
description: "SSL stripping assessment agent using subprocess wrappers for bettercap and curl. Use when the user asks to perform ssl stripping attack."
version: 1.0.0
tags:
  - performing
source: performing-ssl-stripping-attack
---

# Performing Ssl Stripping Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** External Tools Required, Risk Levels

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** ssl stripping attack.
- Capability: SSL stripping assessment agent using subprocess wrappers for bettercap and curl.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, stripping, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check HSTS header on a target URL using curl
2. Check if domain is in HSTS preload list via the hstspreload.org API
3. Follow HTTP redirects and check for HTTPS upgrade
4. Fetch page and check for HTTP resources on an HTTPS page
5. Check for key security headers that complement HSTS
6. Run full SSL stripping assessment against a list of target domains

## Tools & resources

- External Tools Required
- Risk Levels

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

- `check_hsts_header` — Check HSTS header on a target URL using curl.
- `check_hsts_preload` — Check if domain is in HSTS preload list via the hstspreload.org API.
- `check_redirect_chain` — Follow HTTP redirects and check for HTTPS upgrade.
- `check_mixed_content` — Fetch page and check for HTTP resources on an HTTPS page.
- `check_security_headers` — Check for key security headers that complement HSTS.
- `run_assessment` — Run full SSL stripping assessment against a list of target domains.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-ssl-stripping-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
