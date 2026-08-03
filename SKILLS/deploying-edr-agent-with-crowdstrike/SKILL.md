---
name: deploying-edr-agent-with-crowdstrike
description: "CrowdStrike EDR deployment and monitoring agent using FalconPy. Use when the user asks to deploy edr agent with crowdstrike."
version: 1.0.0
tags:
  - deploying
source: deploying-edr-agent-with-crowdstrike
---

# Deploying EDR Agent with Crowdstrike

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** CrowdStrike, Key FalconPy Service Classes, Key Methods, FQL Filter Examples, External References, Primary Standards

## When to use

- The user wants to **deploy** edr agent with crowdstrike.
- Capability: CrowdStrike EDR deployment and monitoring agent using FalconPy.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, agent, crowdstrike`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List managed hosts with sensor details
2. Retrieve recent detections
3. Audit sensor version compliance across fleet
4. Execute CrowdStrike EDR audit

## Key concepts

- Publisher: MITRE Corporation
- Relevance: CrowdStrike Falcon maps detections to ATT&CK techniques; understanding ATT&CK is essential for tuning detectio
- Key tactics for EDR: Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Lateral Movement
- Relevance: Defines endpoint protection architecture including EDR placement and malware prevention controls
- Publisher: Center for Internet Security
- Relevance: CIS Controls v8 Control 10 mandates deploying anti-malware with centralized management and automated updates
- Scope: Official deployment procedures for Windows, macOS, Linux sensors
- Key sections: Silent install parameters, proxy configuration, sensor grouping tags

## Tools & resources

- CrowdStrike
- Key FalconPy Service Classes
- Key Methods
- FQL Filter Examples
- External References
- Primary Standards
- Compliance Mappings
- Industry Benchmarks

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

- `list_hosts` — List managed hosts with sensor details.
- `get_detections` — Retrieve recent detections.
- `check_sensor_versions` — Audit sensor version compliance across fleet.
- `run_audit` — Execute CrowdStrike EDR audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-edr-agent-with-crowdstrike`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
