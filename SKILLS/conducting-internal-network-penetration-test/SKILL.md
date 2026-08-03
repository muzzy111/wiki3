---
name: conducting-internal-network-penetration-test
description: "Internal network penetration testing agent using nmap and impacket. Use when the user asks to conduct internal network penetration test."
version: 1.0.0
tags:
  - conducting
  - network
  - threat-intel
source: conducting-internal-network-penetration-test
---

# Conducting Internal Network Penetration Test

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Common Internal Vulnerabilities, External References, Frameworks, Compliance Requirements

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** internal network penetration test.
- Capability: Internal network penetration testing agent using nmap and impacket.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, internal, network, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run nmap network discovery and port scanning
2. Check if SMB signing is required on target hosts
3. Check for LLMNR/NBT-NS poisoning opportunities
4. Enumerate Active Directory information via LDAP
5. Check for common internal network vulnerabilities
6. Execute internal network penetration test

## Tools & resources

- Common Internal Vulnerabilities
- External References
- Frameworks
- Compliance Requirements

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

- `run_nmap_scan` — Run nmap network discovery and port scanning.
- `check_smb_signing` — Check if SMB signing is required on target hosts.
- `check_llmnr_nbns` — Check for LLMNR/NBT-NS poisoning opportunities.
- `enumerate_ad_info` — Enumerate Active Directory information via LDAP.
- `check_common_vulns` — Check for common internal network vulnerabilities.
- `run_pentest` — Execute internal network penetration test.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-internal-network-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
