---
name: configuring-host-based-intrusion-detection
description: "Host-based intrusion detection agent using OSSEC/Wazuh API and osquery. Use when the user asks to configure host based intrusion detection."
version: 1.0.0
tags:
  - configuring
  - threat-intel
source: configuring-host-based-intrusion-detection
---

# Configuring Host Based Intrusion Detection

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** OSSEC Rule IDs, External References, Primary Standards, Compliance Mappings, Supporting References

## When to use

- The user wants to **configure** host based intrusion detection.
- Capability: Host-based intrusion detection agent using OSSEC/Wazuh API and osquery.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, host, intrusion, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute osquery for host inspection
2. Check file integrity for key system files
3. Execute HIDS audit

## Key concepts

- Scope: Architecture, deployment, and management of IDPS including host-based systems
- Requirement: Deploy FIM to alert on unauthorized modification of critical files
- Scope: System files, configuration files, content files on in-scope systems
- Relevance: Sub-control 3.14 requires monitoring for unauthorized changes to sensitive data

## Tools & resources

- OSSEC Rule IDs
- External References
- Primary Standards
- Compliance Mappings
- Supporting References

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

- `run_osquery_check` — Execute osquery for host inspection.
- `check_file_integrity` — Check file integrity for key system files.
- `run_audit` — Execute HIDS audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-host-based-intrusion-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
