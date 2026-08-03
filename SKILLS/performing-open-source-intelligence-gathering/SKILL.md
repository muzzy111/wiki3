---
name: performing-open-source-intelligence-gathering
description: "Agent for performing open source intelligence (OSINT) gathering. Use when the user asks to perform open source intelligence gathering."
version: 1.0.0
tags:
  - performing
source: performing-open-source-intelligence-gathering
---

# Performing Open Source Intelligence Gathering

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Security Headers Checked, PTES

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** open source intelligence gathering.
- Capability: Agent for performing open source intelligence (OSINT) gathering.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, open, source, intelligence, gathering`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Perform WHOIS lookup for domain registration info
2. Enumerate DNS records for intelligence gathering
3. Search for email addresses associated with a domain
4. Fingerprint web technologies from HTTP response headers
5. Generate social media profile URLs for a target name

## Key concepts

- Search engine queries
- Social media analysis
- Public records review
- Website analysis and spidering
- Metadata extraction from documents
- Technology stack identification
- Web application fingerprinting
- Active subdomain brute-forcing

## Tools & resources

- Security Headers Checked
- PTES

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

- `whois_lookup` — Perform WHOIS lookup for domain registration info.
- `dns_enumeration` — Enumerate DNS records for intelligence gathering.
- `email_harvest` — Search for email addresses associated with a domain.
- `technology_fingerprint` — Fingerprint web technologies from HTTP response headers.
- `social_media_search` — Generate social media profile URLs for a target name.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-open-source-intelligence-gathering`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
