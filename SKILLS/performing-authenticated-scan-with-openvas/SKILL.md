---
name: performing-authenticated-scan-with-openvas
description: "OpenVAS/GVM authenticated vulnerability scan orchestration. Use when the user asks to perform authenticated scan with openvas."
version: 1.0.0
tags:
  - performing
source: performing-authenticated-scan-with-openvas
---

# Performing Authenticated Scan with Openvas

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Key GMP Methods, Scan Configuration IDs, Credential Types, External References, Primary Standards, OpenVAS/GVM Technical References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** authenticated scan with openvas.
- Capability: OpenVAS/GVM authenticated vulnerability scan orchestration agent.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, authenticated, scan, openvas`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Connect to GVM daemon via Unix socket
2. List available scan configurations
3. List configured scan credentials
4. Create SSH credential for authenticated Linux scans
5. Create scan target with optional credentials
6. Create and start a scan task
7. Check scan task progress and status
8. Fetch vulnerability results from a completed scan report

## Key concepts

- Title: Technical Guide to Information Security Testing and Assessment
- Relevance: Defines vulnerability scanning methodologies including credentialed vs non-credentialed approaches
- Title: Vulnerability Monitoring and Scanning
- Requirement: Organizations must scan for vulnerabilities in information systems and hosted applications with both authentic
- Title: Continuous Vulnerability Management
- Title: External and Internal Vulnerabilities Are Regularly Identified, Prioritized, and Addressed
- Requirement: Internal vulnerability scans must be performed at least quarterly and after any significant change; authentica
- Components: gvmd (manager), openvas-scanner, gsad (web UI), ospd-openvas

## Tools & resources

- Key GMP Methods
- Scan Configuration IDs
- Credential Types
- External References
- Primary Standards
- OpenVAS/GVM Technical References

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

- `connect_gvm` — Connect to GVM daemon via Unix socket.
- `list_scan_configs` — List available scan configurations.
- `list_credentials` — List configured scan credentials.
- `create_ssh_credential` — Create SSH credential for authenticated Linux scans.
- `create_target` — Create scan target with optional credentials.
- `create_and_start_task` — Create and start a scan task.
- `get_task_status` — Check scan task progress and status.
- `get_report_results` — Fetch vulnerability results from a completed scan report.
- `parse_openvas_xml_report` — Parse an exported OpenVAS XML report file.
- `run_audit` — Execute OpenVAS scan audit and analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-authenticated-scan-with-openvas`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
