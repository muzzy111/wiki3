---
name: implementing-stix-taxii-feed-integration
description: "STIX/TAXII threat intelligence feed integration agent. Connects to TAXII 2.0/2.1 servers to discover and consume threat intelligence feeds in STIX format. Extracts indicators of compromise (IOCs), threat actors,.... Use when the user asks to implement stix taxii feed integration."
version: 1.0.0
tags:
  - implementing
source: implementing-stix-taxii-feed-integration
---

# Implementing STIX Taxii Feed Integration

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Operations, Public TAXII Feeds

## When to use

- The user wants to **implement** stix taxii feed integration.
- Capability: STIX/TAXII threat intelligence feed integration agent. Connects to TAXII 2.0/2.1 servers to discover and consume threat intelligence feeds in STIX format. Extracts indicators of compromise (IOCs), threat actors, malware families, and attack patterns from STIX bundles.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, stix, taxii, feed, integration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Connect to a TAXII server and return Server object
2. Discover available collections on the TAXII server
3. Fetch STIX objects from a TAXII collection
4. Extract indicators of compromise from STIX objects
5. Extract threat actor information from STIX objects
6. Extract malware family info from STIX objects
7. Extract MITRE ATT&CK patterns from STIX objects
8. Group and count STIX objects by type

## Key concepts

- STIX Bundle: Top-level container for STIX objects (type: "bundle")
- STIX ID Format: `type--uuid` (e.g., `indicator--a1b2c3d4-...`)
- Versioning: Objects use `modified` timestamp for version tracking
- Confidence: 0-100 scale for reliability assessment
- Content-Type: `application/stix+json;version=2.1`
- Accept: `application/taxii+json;version=2.1`

## Tools & resources

- Core Operations
- Public TAXII Feeds

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

- `connect_taxii_server` — Connect to a TAXII server and return Server object.
- `discover_collections` — Discover available collections on the TAXII server.
- `fetch_collection_objects` — Fetch STIX objects from a TAXII collection.
- `extract_indicators` — Extract indicators of compromise from STIX objects.
- `extract_threat_actors` — Extract threat actor information from STIX objects.
- `extract_malware` — Extract malware family info from STIX objects.
- `extract_attack_patterns` — Extract MITRE ATT&CK patterns from STIX objects.
- `summarize_stix_objects` — Group and count STIX objects by type.
- `format_summary` — Print human-readable summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-stix-taxii-feed-integration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
