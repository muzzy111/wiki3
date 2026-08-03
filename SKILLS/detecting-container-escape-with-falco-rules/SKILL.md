---
name: detecting-container-escape-with-falco-rules
description: "Falco-based container escape detection agent. Manages Falco rules, parses Falco alert output, and generates escape detection reports from Falco JSON event streams. Use when the user asks to detect container escape with falco rules."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-container-escape-with-falco-rules
---

# Detecting Container Escape with Falco Rules

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Falco, Helm Deployment, Industry Standards, Known Container Escape CVEs, Compliance Mappings

## When to use

- The user wants to **detect** container escape with falco rules.
- Capability: Falco-based container escape detection agent. Manages Falco rules, parses Falco alert output, and generates escape detection reports from Falco JSON event streams.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, container, escape, falco, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Update Falco rules weekly: `falcoctl artifact install falco-rules`
2. Review new maturity_stable rules after each Falco release
3. Correlate Falco alerts with Kubernetes audit logs
4. Run escape simulation exercises monthly

## Key concepts

- Section 4.3: Container Runtime - Monitor containers for anomalous behavior at runtime
- Section 5.4: Container Runtime Security - Implement runtime monitoring and alerting
- Recommends syscall-level monitoring for escape detection
- Section 5: Audit Logging and Threat Detection
- Enable runtime security monitoring
- Detect anomalous container behavior in real-time
- Monitor for privilege escalation attempts
- Requirement 10.6.1: Review logs for anomalies at least daily

## Tools & resources

- Falco
- Helm Deployment
- Industry Standards
- Known Container Escape CVEs
- Compliance Mappings

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

- `check_falco_status`
- `validate_rules_file`
- `parse_falco_alerts`
- `generate_escape_rules_yaml`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-container-escape-with-falco-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
