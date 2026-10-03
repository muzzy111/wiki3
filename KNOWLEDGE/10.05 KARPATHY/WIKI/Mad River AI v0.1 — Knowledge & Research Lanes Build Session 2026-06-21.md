---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# [[Mad River AI]] v0.1 — Knowledge & Research Lanes Build Session 2026-06-21

Derived from [[RAW/2026-06-21 hermes session journal]]. Atomic, reviewable
note capturing what landed, what was deferred, and where the receipts live.

## What happened in one sentence

Built and pushed v0.1 of `osint-framework` — a 4-tool, 2-agent Python
framework for Knowledge & Research work (OSINT as a sub-lane) — to
`github.com/Mad-River-AI/osint-framework` on branch `v0.1-knowledge-research`,
after a self-[[review]] and an OpenCode (nemotron-3-ultra-free) second-pass
plan [[review]] that caught 15 issues before any code was written.

## The shipped artifact

**Branch:** `v0.1-knowledge-research` at
https://github.com/Mad-River-AI/osint-framework/tree/v0.1-knowledge-research

**12 commits** on top of the empty seed repo. **41 tests** in 12 files,
all green in 2.9s.

### What's in the package

- **Runtime (Layer 0-3)**: `Finding` dataclass (typed: sources, cost,
  legal, confidence), `LegalRegistry` + `require_legal_note` decorator
  (refusal-to-construct when the legal note is missing), `Task` protocol,
  `Pipeline` engine with wall-clock + call budget enforcement, `Agent`
  base with `AgentMemory` (deep-copy on `add` to defend against caller
  mutation) and `CircuitBreakerError` subclass.
- **Tools (Layer 1)** — 4 ships:
  - `web_search` — DuckDuckGo HTML backend + fixture mode; legal gate;
    graceful network failures.
  - `web_fetch` — httpx + BeautifulSoup; **SSRF guard via `allowed_hosts`**
    (N3 patch — called out as a v0.1 design requirement); drops
    `soup.body` fallback so it's strictly for articles.
  - `paper_lookup` — arXiv public API + Atom parser; skips entries
    with missing required fields + warns.
  - `whois` — system `whois` subprocess + fixture mode; restores the
    OSINT sub-lane at v0.1 (R3 patch).
- **Tasks (Layer 2)** — 1 ships: `SearchPapersTask` (wraps
  `PaperLookupTool`, adds naive token-overlap relevance scoring).
- **Pipelines (Layer 3)** — declarative; linear-sequence in v0.1; full
  DAG resolution + YAML loader planned for v0.2.
- **[[Agents]] (Layer 4)** — 2 ship:
  - `LiteratureResearchAgent` — academic K&R lane. arxiv query →
    scored papers → extractive synthesis. Circuit breaker at
    `max_results > 50`.
  - `DomainReconAgent` — OSINT sub-lane. WHOIS + web search →
    structured dossier. Sources merged from both tools.
- **Storage**: `SqliteFindingStore` with two APIs:
  - `create_finding_from(finding)` — preferred, takes a Finding object.
  - `create_finding(**kwargs)` — legacy, takes dicts.
- **CLI**: `mad-river agent <name>`, `mad-river run <yaml>` (stub),
  `mad-river inspect <id>`. CircuitBreakerError caught and reported
  with a clean one-line message + exit code 3.

## How the plan was reviewed

Two passes, both fail-closed JSON. 15 issues found and folded into the
plan as a "Plan Patches" section before any code was written.

| pass | reviewer | findings | severity breakdown |
|---|---|---|---|
| 1 | hermes (self) | 5 | 2 must-fix (R1 legal wiring, R2 wall-clock budget), 3 should-fix |
| 2 | OpenCode `nemotron-3-ultra-free` (Sisyphus persona) | 10 | 2 critical (N1 test fixture, N2 web_fetch test would fail), 4 substantive, 4 suggestion |

**The second pass paid for itself.** Nemotron caught two real
test-fixture bugs the self-[[review]] missed (N1: pipeline test expected
`42` but fixture returned `1`; N2: web_fetch test would have failed
because `soup.body` always exists in valid HTML). It also correctly
flagged that the v0.1 prose's "explicit allowlist" design constraint
makes SSRF/host allowlist a v0.1 requirement, not v0.2 as the self-[[review]]
thought.

**Cost of self-[[review]] bias:** real. The same agent that wrote the plan
cannot reliably catch its own test-fixture mistakes. A second-pass
[[review]] by a different model is non-negotiable for plans of this size.

## Decisions made (and where they live)

- **Scope reframing** — OSINT-only → Knowledge & Research lanes (OSINT
  is a sub-lane). Accepted 2026-06-21.
  - ADR: [[../Mad River AI/03-decisions/0001-pivot-to-knowledge-and-research-lanes|ADR 0001]]
  - Updated arch doc: [[../Mad River AI/01-architecture/osint-framework-v0.1|osint-framework-v0.1]]
- **Repo name kept** — `osint-framework` even with the broader scope.
  Renaming the GitHub org is a redirect-pain decision; deferred.
- **Pipeline shape** — linear sequence in v0.1; full DAG in v0.2.
  Honors "declarative" without overcommitting on parallelism.
- **Synthesis method** — deterministic extractive summarization with
  a regex sentence splitter. v0.1 limitation: breaks on abbreviations
  ("e.g.", "Fig. 1"). v0.2 swap to NLTK or smarter.
- **LLM synthesis** — **deferred to v0.2**. v0.1 ships deterministic
  synthesis so tests are offline-reproducible and the framework
  works without API keys. Local-first default: Ollama.
- **Dep swap** — `ulid-py 1.1.0` had a C-extension bug under Python
  3.11.15 (MemoryView error). Swapped to `python-ulid 3.1.0` (same
  `from ulid import ULID` import surface, working binary).

## What's deferred to v0.2 (deferred items, not bugs)

- Pipeline YAML loader (`mad-river run` is currently a stub).
- Full DAG resolution (parallel branches, fan-in).
- `parent_id` linking on Findings for complete provenance chain
  (R5 — intermediate findings are not persisted at v0.1).
- LLM-based synthesis (Ollama default).
- Richer WHOIS via `python-whois` (currently a thin text parser).
- `make smoke` target hitting live APIs.
- Coverage target (`--cov-fail-under=80`).
- `ALLOWED_HOSTS` set as required config (currently opt-in).
- Per-agent config files (CLI flags are getting long).

## Open questions for Muzzy (carried forward)

1. Open the PR against `main`, or [[review]] the branch in GitHub first?
2. Pick a real-LLM provider for v0.2 synthesis (Ollama / OpenRouter / direct).
3. `web_search` and `web_fetch` could share a `_http.py` helper (N7
   patch made the duplication explicit). Worth a v0.2 refactor.

## Receipts / pointers

- Implementation plan: `~/.hermes/plans/2026-06-21_0111-[[osint-framework-v0.1]]-knowledge-research.md`
- Org repo: https://github.com/Mad-River-AI/osint-framework
- Branch: https://github.com/Mad-River-AI/osint-framework/tree/v0.1-knowledge-research
- Live smoke test (executed during this session):
  `mad-river agent literature_research --question "..." --paper-fixture ...`
  printed a 2-line synthesis; `mad-river inspect <id>` returned the
  full JSON including `task`, `output.synthesis`, `sources[]`,
  `cited_paper_count`.
- Karpathy RAW journal: `RAW/[[2026-06-21 hermes session journal]].md`
- Karpathy [[[[LEDGER]]]]: `RAW/[[[[LEDGER]]]].md` row flipped to `processed` at this send-it.

## Honest retrospective

The plan was ~60KB. The execution was ~2 hours wall time. The
test-fixture bugs that the self-[[review]] missed are exactly the kind
that waste time during execution — Nemotron caught them in 6 tool
calls. The pattern is clear: **a different model, even a small one,
reviewing the plan is cheaper than fixing bugs in flight**.

The framework is real and runnable. v0.1 hits the target date
(end of July 2026) with two months to spare for v0.2 work.
