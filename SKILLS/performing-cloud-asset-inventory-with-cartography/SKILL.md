---
name: performing-cloud-asset-inventory-with-cartography
description: "Cartography cloud asset inventory agent. Wraps the Cartography tool to enumerate and inventory cloud assets across AWS accounts, then queries the resulting Neo4j graph database to identify security-relevant.... Use when the user asks to perform cloud asset inventory with cartography."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-cloud-asset-inventory-with-cartography
---

# Performing Cloud Asset Inventory with Cartography

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Cartography Node Types, CIS Controls v8, NIST 800-53

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cloud asset inventory with cartography.
- Capability: Cartography cloud asset inventory agent. Wraps the Cartography tool to enumerate and inventory cloud assets across AWS accounts, then queries the resulting Neo4j graph database to identify security-relevant relationships, exposed resources, and misconfigured assets.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cloud, asset, inventory, cartography`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute Cartography to populate the Neo4j graph
2. Execute a Cypher query against the Neo4j graph
3. Query EC2 instances from the graph
4. Query S3 buckets from the graph
5. Find publicly accessible resources
6. Find unencrypted storage resources
7. Print inventory summary

## Key concepts

- Control 1: Inventory and Control of Enterprise Assets
- Control 2: Inventory and Control of Software Assets
- Control 3: Data Protection
- Control 6: Access Control Management
- CM-8: System Component Inventory
- PM-5: System Inventory
- RA-2: Security Categorization
- CCM AIS-01: Application and Interface Security

## Tools & resources

- Cartography Node Types
- CIS Controls v8
- NIST 800-53

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

- `run_cartography` — Execute Cartography to populate the Neo4j graph.
- `query_neo4j` — Execute a Cypher query against the Neo4j graph.
- `inventory_ec2_instances` — Query EC2 instances from the graph.
- `inventory_s3_buckets` — Query S3 buckets from the graph.
- `find_public_resources` — Find publicly accessible resources.
- `find_unencrypted_resources` — Find unencrypted storage resources.
- `format_summary` — Print inventory summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cloud-asset-inventory-with-cartography`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
