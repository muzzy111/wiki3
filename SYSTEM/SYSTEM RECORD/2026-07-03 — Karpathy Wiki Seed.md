---
title: "Karpathy Wiki Seed"
type: system-record
status: resolved
created: 2026-07-03
---

# Karpathy Wiki Seed

> Decision record: 15 evergreen Karpathy wiki entries seeded as part of the 5-role migration.

## Decision

Adopt a 15-entry seed of evergreen notes covering all 5 role domains:
3 entries per domain. Each entry derives from the role's existing AGENT.md,
Persona, RULES, and SKILLS files (not new research findings).

## Distribution

| Role domain | Entry count | Titles |
|---|---|---|
| Coordinator | 3 | User Channel Protocol; Routing Matrix; INBOX-OUTBOX Asymmetry |
| Coder | 3 | DataviewJS Patterns; Templater Hooks; MCP Server Implementation |
| Researcher | 3 | Sourcing Discipline; Research Brief Anatomy; Karpathy Wiki Pipeline |
| Tools | 3 | Docker Compose for MCP; Local Server Bridge; Backup Verification |
| Memory | 3 | Review Verdict Format; Frontmatter Schema; Audit Categories |
| **Total** | **15** | |

Each entry has at least 2 outgoing wikilinks and a `source: [[RAW/2026-07-03 — wiki-seed]]` reference.

## Schema Files

Four schema files at `MEMORY/KARPATHY/schema/`:

- `Master Index.md` — alphabetical table of all 15 entries
- `By Topic.md` — grouped by role domain
- `Catalog.md` — per-entry detail blocks
- `Gaps.md` — known gaps; promote when topic recurs 2+ times

## Risks and Mitigations

- **Risk:** these entries are distilling existing docs, not new research. If a role's docs change, the wiki entries need to be re-distilled. The Memory Curator runs a wiki-distill pass during the weekly audit.
- **Risk:** 15 entries may feel sparse; gaps file tracks what's missing.

## Related

- `SYSTEM/STYTEM RECORD/2026-07-03 — 5-Role Migration.md`
- `5.0MEMORY/SKILLS/Karpathy Wiki Curation.md`
