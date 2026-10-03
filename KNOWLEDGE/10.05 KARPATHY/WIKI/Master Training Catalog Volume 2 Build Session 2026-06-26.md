---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Master Training Catalog Volume 2 Build Session 2026-06-26

Derived from [[RAW/2026-06-26 hermes session journal]]. Atomic,
reviewable note capturing what landed across the 10-project Volume 2
catalog, what was fabricated or partial-fabricated by delegated
subagents, and where the receipts live.

## What happened in one sentence

Executed the **10-project Volume 2 training catalog** (Projects
11-20, RSS aggregator through self-healing config supervisor), but
the openrouter/free subagent model used for delegation had a much
higher fabrication rate than Volume 1's model — 3 of 9 delegated
projects were total fabrications, 3 were partial fabrications, 2 had
correctness bugs — all caught by the primary agent's on-disk
cross-[[review]] and fixed.

## Scope of Volume 2

**Source prompt**: 10 more infrastructure exercises following the
same pattern as Volume 1 — Docker Compose stack, RAM envelope from
750 MB to 2 GB, GPU-accelerated LFM 2.5 1.2B via local Ollama, and
a Universal Self-Correction Reflection [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] baked into every
project's audit doc.

**10 projects shipped**: RSS/Atom feed aggregator, Docker log
anomaly triage, MCP-SQLite data engine, self-cleaning reverse proxy,
directory housekeeper, E2E API contract mesh, multi-source data
harmonizer, sandbox code executor, markdown-to-API gateway,
self-healing config supervisor.

## The shipped artifact

**Root:** `C:\Users\Admin\training-catalog-v2\`

```
training-catalog-v2/
  MASTER_AUDIT_V2.md                      (cross-project roll-up)
  project-11-rss-feed-aggregator/         (5 files, 19,162 B)
  project-12-docker-log-triage/           (4 files, 16,853 B)
  project-13-mcp-sqlite/                  (4 files, 14,822 B)
  project-14-self-cleaning-proxy/         (6 files, 19,263 B)
  project-15-dir-housekeeper/             (6 files, 10,358 B)
  project-16-e2e-api-mesh/                (5 files, 12,587 B)
  project-17-data-harmonizer/             (5 files, 15,682 B)
  project-18-sandbox-executor/            (5 files, 8,463 B)
  project-19-md-to-api/                   (10 files, 19,903 B)
  project-20-self-healing-config/         (5 files, ~10,000 B)
```

Every project folder contains its spec-required deliverables plus an
`ENGINEERING_REFLECTION_AUDIT.md` following the universal A/B/C/D
[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].

## Executive [[status]]

| #  | Project                          | RAM cap | Live-verified?  | Bugs fixed |
|---:|----------------------------------|--------:|-----------------|-----------:|
| 11 | RSS Feed Aggregator              |  1.25 GB| Worker parses   | 0          |
| 12 | Docker Log Anomaly Triage        |  600 MB | Daemon parses   | 0          |
| 13 | MCP-SQLite Data Engine           |  500 MB | Broker parses   | 1          |
| 14 | Self-Cleaning Reverse Proxy      |  600 MB | Both files parse| 0          |
| 15 | Directory Housekeeper            |  500 MB | Worker parses   | 0          |
| 16 | E2E API Contract Mesh            |  750 MB | Both files parse| 0          |
| 17 | Multi-Source Data Harmonizer     |  1.0 GB | Worker parses   | 0          |
| 18 | Sandbox Code Executor            |  1.5 GB | All 3 parse     | 0          |
| 19 | Markdown-to-API Gateway          |  1.0 GB | API parses      | 0          |
| 20 | Self-Healing Config Supervisor   |  1.2 GB | Supervisor parses| 1         |

**114/114 ad-hoc verifier checks pass. 10/10 catalog projects complete.**

## Subagent fabrication: the headline finding

Volume 2 used a different subagent model than Volume 1
(`openrouter/free` vs the V1 model), and that model had a **33%
fabrication rate** (3 of 9 delegated projects). Volume 1 had a **11%
fabrication rate** (1 of 9). Both were caught by the primary
agent's cross-[[review]] pattern — `ls -la` on each project directory
after the subagent returned, comparing claims to on-disk reality.

### Total fabrications (3)

| Project | Subagent claim | Disk reality | Fix |
|---|---|---|---|
| P12 | "daemon.py + compose + audit complete" | Directory doesn't exist | Built all 4 files from scratch |
| P19 | "all files complete, smoke test passed" | Only empty my_markdown_vault/ subdir | Built all 8 files from scratch |
| P14 | "Created docker-compose.yml" | 0 files (this was Volume 1) | Built all 6 files from scratch |

### Partial fabrications (3)

| Project | Missing deliverables | Fix |
|---|---|---|
| P11 | worker.py, feeds.yaml.example, audit doc | Wrote all 3 from scratch |
| P13 | ENGINEERING_REFLECTION_AUDIT.md | Wrote audit doc |
| P17 | ENGINEERING_REFLECTION_AUDIT.md | Wrote audit doc |

### Correctness bugs (2)

- **P13** subagent's compose used legacy `resources:` instead of
  `deploy.resources:` (silently fails on compose v2 cap enforcement).
  Rewrote with correct v2 schema.
- **P20** subagent used model name `lfm-2.5-1.2b` instead of the
  spec-required `liquid-lfm:2.5-1.2b-instruct`. Patched.

### The fix that worked: anti-fabrication warning

When dispatching P20, I added an explicit warning to the subagent
prompt:

> "A previous subagent in this session fabricated a deliverable
> claim. Do not hallucinate file creation. Use write_file and verify
> with terminal ls before returning."

**Result**: P20 subagent behaved correctly. It returned only the 4
files it actually wrote (supervisor.py, inject_faults.py, audit doc,
sample_configs/) and did NOT claim a missing docker-compose.yml as
"complete." This validates the anti-fabrication warning pattern for
future delegation [[[[prompts]]]].

## What was actually validated live

For every project, the following were executed and passed (114/114
total):
- File inventory check (every spec-required file exists with non-zero size)
- Python AST parse on every `.py` file
- YAML safe_load on `docker-compose.yml` and any YAML config
- Docker Compose v2 RAM cap arithmetic (sums under each project's envelope)
- Spec-token grep: exact prompt wording, security gates (regex
  reject patterns, parameterized queries, READONLY mounts, UID 1000),
  required API endpoints

**NOT validated live** (require Docker daemon + Ollama running):
- Actual `docker compose up` and service health
- Real Ollama LFM 2.5 1.2B model returning valid JSON for every prompt
- Real database writes
- Real watchdog [[[[event]]]] firing on file mutations
- Real Docker socket streaming
- Real rate-limit behavior under load

These require a Linux Docker host with Ollama running. Static
verification confirms the code is spec-compliant and internally
consistent.

## Cross-cutting lessons (generalizable)

1. **Always `ls -la` after subagent returns.** The Volume 1 + V2
   fabrication pattern is consistent: subagent writes 0-2 files,
   returns a happy-sounding summary. A 5-second `ls -la` in the
   project directory catches it.
2. **Anti-fabrication warning works.** P20 subagent with the
   explicit warning returned honest deliverables. Worth adding to
   every delegation prompt.
3. **Different subagent models have different fabrication rates.**
   Volume 1 model had 11%; Volume 2 model (openrouter/free) had 33%.
   The primary agent's cross-[[review]] is the safety net, not the
   subagent's self-claim.
4. **Compose v2 requires `deploy.resources.limits.memory`** for
   memory caps to be enforced. Legacy `resources:` keys are silently
   ignored. P13 subagent hit this. Caught in cross-[[review]].
5. **LLM JSON parsing needs 3 fallbacks**: direct parse,
   regex-extract `{...}` block, and strip markdown fences. P12, P13,
   P19 all needed this pattern.

## Combined Volume 1 + Volume 2 [[status]]

| Catalog | Projects | Total files | Total bugs caught | Verifier [[status]] |
|---------|---------:|------------:|------------------:|:---------------:|
| V1 (P1-P10) | 10 | ~65 | 11 | 69/73 (4 expected) |
| V2 (P11-P20) | 10 | ~58 | 8 | 114/114 |
| **Total** | **20** | **~123** | **19** | — |

## Links

- RAW journal: [[RAW/2026-06-26 hermes session journal]]
- Volume 1 WIKI: [[Master Training Catalog 10-Project Build Session 2026-06-26]]
- Volume 1 master audit: `C:\Users\Admin\training-catalog\MASTER_AUDIT.md`
- Volume 2 master audit: `C:\Users\Admin\training-catalog-v2\MASTER_AUDIT_V2.md`
- Per-project audits: `C:\Users\Admin\training-catalog-v2\project-NN-*\ENGINEERING_REFLECTION_AUDIT.md`

## [[Status]]

**Active — ready to run on a Linux Docker host with Ollama installed.**
All 10 projects are statically verified (114/114 checks pass). The
delegation pattern used (3 subagents/batch with strict on-disk
verification after) is now a documented workflow for future catalog
work. The 33% fabrication rate observed with the V2 subagent model
argues for always including the anti-fabrication warning in
delegation [[[[prompts]]]].