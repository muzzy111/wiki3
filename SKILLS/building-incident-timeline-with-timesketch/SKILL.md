---
name: building-incident-timeline-with-timesketch
description: "Incident Timeline Builder Agent - Creates forensic timelines using Timesketch API. Use when the user asks to build incident timeline with timesketch."
version: 1.0.0
tags:
  - building
  - incident-response
source: building-incident-timeline-with-timesketch
---

# Building Incident Timeline with Timesketch

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Timesketch, Timeline Upload, Analyzers, Python Client, NIST SP 800-86, SANS FOR508

## When to use

- The user wants to **build** incident timeline with timesketch.
- Capability: Incident Timeline Builder Agent - Creates forensic timelines using Timesketch API.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, incident, timeline, timesketch`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Authenticate to Timesketch and return session
2. List all sketches
3. Create a new sketch
4. Upload a Plaso/CSV/JSONL timeline to a sketch
5. Search events in a sketch using OpenSearch query string
6. Analyze events to build timeline summary with key milestones
7. Tag events for annotation
8. Generate incident timeline report

## Key concepts

- Provides guidelines for collecting, examining, and analyzing digital evidence
- Emphasizes importance of timeline reconstruction in incident investigation
- Defines evidence handling procedures for forensic analysis
- Super timeline creation methodology
- Evidence source prioritization for timeline building
- Plaso/log2timeline artifact parsing techniques
- Timeline analysis for APT detection
- Standard format for representing dates and times in timelines

## Tools & resources

- Timesketch
- Timeline Upload
- Analyzers
- Python Client
- NIST SP 800-86
- SANS FOR508
- Plaso/log2timeline Documentation
- Sigma Detection Standard

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

- `get_session` — Authenticate to Timesketch and return session.
- `list_sketches` — List all sketches.
- `create_sketch` — Create a new sketch.
- `upload_timeline` — Upload a Plaso/CSV/JSONL timeline to a sketch.
- `search_events` — Search events in a sketch using OpenSearch query string.
- `build_timeline_summary` — Analyze events to build timeline summary with key milestones.
- `tag_events` — Tag events for annotation.
- `generate_report` — Generate incident timeline report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-incident-timeline-with-timesketch`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
