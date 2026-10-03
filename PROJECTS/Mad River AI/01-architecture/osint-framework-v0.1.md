---
aliases: []
tags:
  - available
  - madriverai
  - unreachable
  - domain
---

# OSINT Framework v0.1 — Knowledge & Research Lanes

> **[[Status]]:** v0.1 in design. Working doc. Source-of-truth for the repo
> `Mad-River-AI/osint-framework`. Will be copy-edited and PR'd into the
> repo's `docs/` once stable.
> **Scope reframed 2026-06-21** — see [[../03-decisions/0001-pivot-to-knowledge-and-research-lanes|ADR 0001]].

## Why this exists

[[Mad River AI]]'s business is **automating knowledge & research work that a
careful human investigator would do — but faster, repeatable, and with
provenance baked in.** "Knowledge & Research" is the broad lane; OSINT,
academic literature [[review]], market intelligence, due-diligence, and similar
investigative work are sub-lanes within it. The framework is the open-source
core. The "interesting bits" (proprietary data sources, paid APIs,
customer-facing UX) live in private repos. The framework is the foundation
others can build on, audit, and improve.

## Design constraints (from the framework [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]])

1. **Local-first.** No data leaves your machine unless told to.
2. **Human-in-the-loop.** Every agent pausable + overridable.
3. **Provenance.** Every data point tagged with source + timestamp.
4. **Composable.** Tasks small. Pipelines explicit. [[Agents]] = pipelines + memory.
5. **Legal by design.** Every tool ships a `legal_notes.md` AND the
   runtime refuses to load a tool whose note is missing.

## The four layers

```
+--------------------------------------------------------------+
|  L4  AGENTS        |  goal-driven loops. pipelines + memory. |
+--------------------------------------------------------------+
|  L3  PIPELINES     |  declared DAGs of tasks. versioned.     |
+--------------------------------------------------------------+
|  L2  TASKS         |  atomic units: one input, one output,   |
|                    |  one tool, one side effect (or none).   |
+--------------------------------------------------------------+
|  L1  TOOLS         |  thin wrappers over data sources.       |
+--------------------------------------------------------------+
```

**L1 — Tools.** One file per data source. Idempotent, stateless. v0.1 ships:
- `web_search` (DuckDuckGo HTML, with fixture mode for tests)
- `web_fetch` (httpx + BeautifulSoup main-text extraction)
- `paper_lookup` (arXiv public API + Atom parser)
- `whois` (python-whois with fixture mode) — **OSINT sub-lane**

L2-L4 stay as originally specified; see source repo for the data model
(`Finding` dataclass) and runtime concerns.

## Lane coverage at v0.1

| lane | coverage in v0.1 | notes |
|---|---|---|
| academic / literature | `paper_lookup` tool + `literature_research` agent | primary ship |
| general web research | `web_search`, `web_fetch` tools | both shipped |
| OSINT — domain | `whois` tool + `domain_recon` agent | ships, sub-lane of K&R |
| OSINT — company | `company_investigator` agent | planned, v0.2 |
| OSINT — person | `person_trace` agent | planned, v0.2 |
| breach / leak | `leak_triage` agent | planned, v0.2 |
| meta | `meta_agent` | research, no ship date |

**v0.1 ships 4 tools, 2 [[agents]], runtime, CLI, storage.** First shipped
agent is `literature_research`; `domain_recon` is a close second so the
OSINT sub-lane is covered at v0.1.

## v0.1 deliverable (what we're building first)

A single Python package, `mad_river`, with:

- `mad_river.core` — task runner, pipeline engine, agent loop, legal registry
- `mad_river.tools` — 4 tools: `web_search`, `web_fetch`, `paper_lookup`, `whois`
- `mad_river.tasks` — 1 task: `search_papers`
- `mad_river.[[agents]]` — 2 [[agents]]: `literature_research`, `domain_recon`
- `mad_river.storage` — sqlite-backed finding store (`.mad_river/findings.db`)
- `mad_river.cli` — `mad-river run`, `agent`, `inspect`
- `mad_river.legal` — registry + auto-load of legal notes
- `tests/` — TDD on every code-producing slice
- `docs/` — this doc, the threat model, the legal posture, ADRs

Target: **v0.1 by end of July 2026.** A usable framework, not a polished one.

## Threat model (sketch)

**Adversaries (in order of likelihood):**

1. The data sources themselves (lie to us, rate-limit us, change formats)
2. The targets (notice scraping, change behavior, sue)
3. Casual users of the framework (run it on people they shouldn't)
4. State-level actors (subpoena logs, compromise the box)

**Mitigations:**

- Every data source has a versioned parser, so format breaks are detected
- All requests are rate-limited + respectful
- Each tool ships a `legal_notes.md` AND the runtime refuses to load it if missing
- The runtime logs everything; the operator can prove provenance
- Default config: no outbound traffic except to declared tools; explicit allowlist

## Legal posture

- **Public-source only by default.** No tool that requires [[authentication]]
  against a third-party service is in the open-source core.
- **No doxxing. No stalking. No harassment.** Tools that could enable
  these are excluded by design and called out in their `legal_notes.md`.
- **Operator is responsible.** The framework is a tool. The user is the
  principal. [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] has a "you are responsible" section.
- **No "magic" data sources.** If a tool needs access to data the operator
  doesn't already have the right to access, it's a paid plugin, not open source.

## Open questions for Muzzy

1. **Python vs. polyglot.** Do we keep this Python-only, or is the agent
   loop worth doing in TypeScript / Rust? My instinct: Python for v0.1,
   revisit after.
2. **Local LLM vs. cloud.** For synthesis, default to local Ollama,
   fall back to cloud if quality demands it. v0.1 ships deterministic
   extractive synthesis so tests are offline-reproducible.
3. **Public roadmap.** Do we publish a `ROADMAP.md` in the repo, or keep
   it in this vault? My instinct: short public roadmap (3 milestones),
   detailed internal roadmap in vault.
4. **Hosting for "hosted services" tier.** When we get there:
   Hetzner / OVH / Hostinger / Cloudflare Workers? My instinct:
   Hetzner for compute, Cloudflare for edge.
5. **The [[Mad River AI]] "product."** Is the first customer-facing thing a
   single-purpose web app (e.g. "type a question, get a sourced synthesis"),
   or an API, or both? My instinct: API first, simple web UI later.

---

*Original draft [[2026-06-12]]. Reframed 2026-06-21 to "Knowledge & Research
lanes" with OSINT as a sub-lane. Reviews welcome — annotate inline, or
push to `osint-framework/docs/architecture-v0.1.md` once the repo is
ready for docs.*
