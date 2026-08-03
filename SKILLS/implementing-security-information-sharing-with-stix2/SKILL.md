---
name: implementing-security-information-sharing-with-stix2
description: "STIX 2.1 threat intelligence sharing agent. Creates, validates, and exports STIX 2.1 objects including indicators, malware, campaigns, and relationships using the stix2 Python library. Use when the user asks to implement security information sharing with stix2."
version: 1.0.0
tags:
  - implementing
source: implementing-security-information-sharing-with-stix2
---

# Implementing Security Information Sharing with Stix2

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** stix2 Python Library, STIX 2.1 Object Types, TAXII 2.1 Publishing, TLP Marking Definitions

## When to use

- The user wants to **implement** security information sharing with stix2.
- Capability: STIX 2.1 threat intelligence sharing agent. Creates, validates, and exports STIX 2.1 objects including indicators, malware, campaigns, and relationships using the stix2 Python library.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, information, sharing, stix2`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create a STIX 2.1 Indicator object
2. Create a STIX 2.1 Malware object
3. Create a STIX 2.1 Campaign object
4. Create a STIX 2.1 Relationship
5. Build a STIX 2.1 Bundle with all objects and relationships
6. Publish STIX bundle to TAXII 2.1 collection
7. Validate a STIX 2.1 bundle

## Tools & resources

- stix2 Python Library
- STIX 2.1 Object Types
- TAXII 2.1 Publishing
- TLP Marking Definitions

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

## Automation entry points

- `create_indicator` — Create a STIX 2.1 Indicator object.
- `create_malware` — Create a STIX 2.1 Malware object.
- `create_campaign` — Create a STIX 2.1 Campaign object.
- `create_relationship` — Create a STIX 2.1 Relationship.
- `build_threat_report` — Build a STIX 2.1 Bundle with all objects and relationships.
- `publish_to_taxii` — Publish STIX bundle to TAXII 2.1 collection.
- `validate_bundle` — Validate a STIX 2.1 bundle.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-security-information-sharing-with-stix2`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
