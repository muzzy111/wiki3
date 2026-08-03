---
name: building-red-team-c2-infrastructure-with-havoc
description: "Havoc C2 Infrastructure Builder Agent - Manages Havoc C2 framework deployment and listener setup. # For authorized penetration testing and lab environments only. Use when the user asks to build red team c2 infrastructure with havoc."
version: 1.0.0
tags:
  - building
source: building-red-team-c2-infrastructure-with-havoc
---

# Building Red Team C2 Infrastructure with Havoc

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Havoc, HTTPS Listener Config, SMB Listener Config, Payload Generation, Agent Properties, NIST References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** red team c2 infrastructure with havoc.
- Capability: Havoc C2 Infrastructure Builder Agent - Manages Havoc C2 framework deployment and listener setup. # For authorized penetration testing and lab environments only.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, team, infrastructure, havoc`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Make authenticated request to Havoc teamserver API
2. List active listeners on the teamserver
3. Create an HTTPS listener
4. Create an SMB named pipe listener for pivoting
5. List connected agents (demons)
6. Generate a Havoc demon payload
7. Assess C2 infrastructure health and coverage
8. Generate C2 infrastructure report

## Key concepts

- T1583.003** - Acquire Infrastructure: Virtual Private Server
- T1583.006** - Acquire Infrastructure: Web Services
- T1587.003** - Develop Capabilities: Digital Certificates
- T1608.001** - Stage Capabilities: Upload Malware
- T1071.001** - Application Layer Protocol: Web Protocols (HTTP/HTTPS)
- T1573.001** - Encrypted Channel: Symmetric Cryptography
- T1573.002** - Encrypted Channel: Asymmetric Cryptography
- T1090.001** - Proxy: Internal Proxy

## Tools & resources

- Havoc
- HTTPS Listener Config
- SMB Listener Config
- Payload Generation
- Agent Properties
- NIST References
- Compliance Context

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

- `havoc_api_request` — Make authenticated request to Havoc teamserver API.
- `list_listeners` — List active listeners on the teamserver.
- `create_https_listener` — Create an HTTPS listener.
- `create_smb_listener` — Create an SMB named pipe listener for pivoting.
- `list_agents` — List connected agents (demons).
- `generate_payload` — Generate a Havoc demon payload.
- `assess_infrastructure` — Assess C2 infrastructure health and coverage.
- `generate_report` — Generate C2 infrastructure report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-red-team-c2-infrastructure-with-havoc`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
