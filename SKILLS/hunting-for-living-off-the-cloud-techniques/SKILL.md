---
name: hunting-for-living-off-the-cloud-techniques
description: "Agent for hunting living-off-the-cloud (LOTC) techniques using cloud service logs. Use when the user asks to hunt for living off the cloud techniques."
version: 1.0.0
tags:
  - hunting
  - cloud
source: hunting-for-living-off-the-cloud-techniques
---

# Hunting for Living Off The Cloud Techniques

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Elasticsearch API Calls, Detection Data Sources

## When to use

- The user wants to **hunt for** living off the cloud techniques.
- Capability: Agent for hunting living-off-the-cloud (LOTC) techniques using cloud service logs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, living, cloud, techniques`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Form a threat hypothesis grounded in TTPs or intel
2. Select data sources and time range for for living off the cloud techniques
3. Execute hunt queries and pivot on anomalies
4. Triage hits into benign, suspicious, or confirmed malicious
5. Capture IOCs, lessons learned, and detection opportunities

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Elasticsearch API Calls
- Detection Data Sources

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

- `hunt_lotc_elastic` — Run LOTC hunting queries against Elasticsearch/Elastic SIEM.
- `analyze_dns_logs` — Analyze DNS query logs for cloud C2 domain patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-living-off-the-cloud-techniques`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
