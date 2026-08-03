---
name: performing-subdomain-enumeration-with-subfinder
description: "Agent for subdomain enumeration using subfinder and httpx. Runs ProjectDiscovery subfinder for passive subdomain discovery, validates live hosts with httpx, resolves DNS, and generates an attack surface report. Use when the user asks to perform subdomain enumeration with subfinder."
version: 1.0.0
tags:
  - performing
source: performing-subdomain-enumeration-with-subfinder
---

# Performing Subdomain Enumeration with Subfinder

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Passive Sources, Industry Standards, Tool References, API Provider Documentation, Regulatory Considerations

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** subdomain enumeration with subfinder.
- Capability: Agent for subdomain enumeration using subfinder and httpx. Runs ProjectDiscovery subfinder for passive subdomain discovery, validates live hosts with httpx, resolves DNS, and generates an attack surface report.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, subdomain, enumeration, subfinder`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Configure API keys in provider-config.yaml for maximum source coverage
2. Run subfinder with `-all` flag against target domain(s)
3. Deduplicate results and remove out-of-scope entries
4. Validate live hosts with httpx including status codes and technologies
5. Resolve DNS records with dnsx to map IP infrastructure
6. Screenshot live hosts with gowitness for visual review
7. Feed live hosts into vulnerability scanner (nuclei) for automated checks
8. Schedule subfinder runs via cron (daily or weekly)
9. Compare new results against baseline subdomain list
10. Alert on newly discovered subdomains via webhook or email

## Key concepts

- OWASP Testing Guide v4.2** — OTG-INFO-004: Enumerate applications on web server through subdomain discovery
- Passive subdomain enumeration does not involve active scanning and is generally legal
- Always verify scope and authorization before proceeding to active enumeration
- Bug bounty programs define specific scope for subdomain testing
- GDPR may apply when collecting data that reveals organizational structure

## Tools & resources

- Passive Sources
- Industry Standards
- Tool References
- API Provider Documentation
- Regulatory Considerations

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-subdomain-enumeration-with-subfinder`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
