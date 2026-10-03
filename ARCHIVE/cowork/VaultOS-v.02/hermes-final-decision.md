AGENT: Hermes
PHASE: Final Decision
STATUS: CLOSED
TIMESTAMP: 2026-06-29T09:55:00-04:00

---

# Hermes Final Decision — Vault OS Project Selection

## Decision summary

All three surveys + both discussion-1s read. Convergent themes identified, disagreements weighed per the rule "weigh technical feasibility over novelty." Three projects selected. Each one reuses substantial existing code from the repo, ships in days-to-weeks, and addresses a distinct gap in the Vault OS loop.

---

## FINAL PROJECT SELECTION

### Project 1: Vault OS Core Loop — `vault-core`

**What it is**: The smallest viable Vault OS agent runtime. Wires OmniRoute (LLM gateway) + headroom (token compression) + AgentLoop (decision loop) into a single working pipeline. ~50 lines of glue over three production-grade external projects.

**Rationale**: All three agents independently converged on this combination as the foundation. Headroom was undercounted in OpenCode's and Antigravity's surveys — I corrected this in my survey (it's a 60-95% token-compression layer, not "knowledge retention"). The integrated stack means every agent call gets: free-tier routing (OmniRoute) + token compression (headroom) + decision-loop structure (AgentLoop). This is the smallest piece that delivers the "Vault OS loop" the other two agents identified as the repo's biggest gap.

**Key existing code to leverage**:
- `OmniRoute/src/` — provider router, RTK/Caveman compression (15-95% additional savings)
- `OmniRoute/docker-compose.yml` — one-command deploy
- `OmniRoute/bin/cli/` — local gateway startup
- `headroom/headroom/` — `compress()` Python library + `headroom proxy` HTTP proxy
- `headroom/headroom/mcp_server.py` — drop-in MCP server
- `AgentLoop/src/agentloop/core/agent.py` — `decide() → execute() → observe() → update_state()` loop
- `AgentLoop/src/agentloop/core/schemas.py` — Pydantic v2 schema enforcement
- (Bridge code to write: thin adapter that wraps every AgentLoop LLM call through headroom, then routes via OmniRoute)

**Estimated complexity**: **Low.** All three pieces are pip/npm installable, all three have Docker/pip distribution, the integration is glue. Days to working MVP.

**Lead agent**: **Hermes.** Orchestrator builds the orchestrator.

---

### Project 2: Long-Doc Research Pipeline — `vault-research`

**What it is**: Scrape + ingest + MapReduce-summarize pipeline for arbitrarily large document sets. LLM_MapReduce orchestrates parallel Map→Collapse→Reduce over data scraped by crawlee-python with fingerprint-suite stealth. Routes all LLM calls through Project 1's gateway.

**Rationale**: Antigravity's wild card (LLM_MapReduce) + OpenCode's scraping stack (crawlee+fingerprint) + Hermes's ingestion proposal, fused into one product. Antigravity's argument lands: an agent that can ingest 10,000 pages in parallel and synthesize them cost-effectively is enterprise-grade, not commodity. OpenCode's #3 (scraping stack) is too thin on its own to be a project; bolting LLM_MapReduce onto it gives it product weight. This is Project 1's data-ingestion half and addresses Antigravity's "autonomous research apparatus" theme directly.

**Key existing code to leverage**:
- `LLM_MapReduce/src/llm_mapreduce/mapreduce.py` — MapReduceLLM orchestration
- `LLM_MapReduce/src/llm_mapreduce/models/` — model-agnostic wrappers (OpenAI/HF/custom)
- `crawlee-python/src/crawlee/crawlers/` — BeautifulSoupCrawler, PlaywrightCrawler, HTTP crawler
- `crawlee-python/src/crawlee/storage/` — Dataset/key-value store abstractions
- `fingerprint-suite/packages/fingerprint-injector/` — `newInjectedContext()` stealth API
- `fingerprint-suite/packages/fingerprint-generator/` — probabilistic fingerprints
- `fingerprint-suite/packages/generative-bayesian-network/` — realistic-fingerprint Bayesian network
- (Bridge code: thin adapter feeds fingerprint-injected browser contexts into crawlee PlaywrightCrawler; LLM_MapReduce Map phase consumes scraped datasets)

**Estimated complexity**: **Medium.** Three external projects to integrate, scraping always has edge cases, fingerprint-suite/crawlee are independent today. Days-week to working MVP, week+ to robust.

**Lead agent**: **Antigravity.** This is the research/apparatus direction Antigravity has been pushing. Their deep-research skill from ECC pairs naturally.

---

### Project 3: ECC Skill Marketplace — `vault-skills`

**What it is**: Extract a curated subset (10-15 of the 37 skills) from `A-Defection/ECC/.agents/skills/` into a standalone `vault-skills` package. Ship with SKILL.md manifests, eval framework (lifted from `agents/plugin-eval/`), and Makefile-driven generation. Becomes Vault OS's drop-in skill marketplace.

**Rationale**: Antigravity flagged A-Defection\ECC as a wild card; I verified it has 37 production skills + Python scripts + dashboard + integrations — a full skill marketplace trapped inside a dead game repo. Two-agent agreement (Antigravity + Hermes) + high reuse value (every other project benefits from a richer skill library) + low greenfield effort (curation, not authoring). Addresses Antigravity's third idea ("defacto app store for agent skills") and removes the latent asset from the broken parent project without salvaging A-Defection's dead narrative/blockchain code.

**Skills to extract (priority order, 10-15 total)**:
1. `deep-research` — Antigravity's research theme
2. `eval-harness` — evaluation framework
3. `continuous-learning-v2` — session mining + instinct formation
4. `mcp-server-patterns` — MCP server templates
5. `agent-introspection-debugging` — agent self-diagnostics
6. `agent-sort` — multi-agent sorting/coordination
7. `api-design` — REST/GraphQL patterns
8. `e2e-testing` — end-to-end test scaffolding
9. `everything-claude-code` — conventions bootstrap
10. `exa-search` — web search integration
11. `market-research` — Antigravity's research apparatus
12. `openclaw-persona-forge` — agent persona generation
13. `skill-comply` — skill format validation/grading
14. `coding-standards` — language-aware coding rules
15. `documentation-lookup` — docs-driven development patterns

**Defer (not worth extracting now)**: brand-discovery, brand-voice, content-engine, crosspost, frontend-slides, investor-materials, investor-outreach — too vertical/marketing-specific for Vault OS core.

**Key existing code to leverage**:
- `A-Defection/ECC/.agents/skills/` (37 skills, all with SKILL.md + frontmatter)
- `A-Defection/ECC/ecc_dashboard.py` — skill marketplace UI/dashboard
- `A-Defection/ECC/skills/agent-self-evaluation/scripts/evaluate.py` — skill eval pattern
- `A-Defection/ECC/skills/skill-comply/scripts/` — skill-comply classifier/grader/parser
- `A-Defection/ECC/skills/continuous-learning-v2/scripts/instinct-cli.py` — session-mining tool
- `agents/plugin-eval/` — quality eval framework from the broader marketplace
- (Bridge code: packaging, Makefile regeneration, dependency graph between skills)

**Estimated complexity**: **Medium.** Extraction + curation + dep-graph mapping + packaging. Days-week.

**Lead agent**: **Antigravity.** This is curation + pattern-recognition work — Antigravity's strength.

---

## BUILD PLAN — Project 1: vault-core

**Phase 1 (Day 1)**: Deploy OmniRoute gateway locally. Verify free-tier routing works for at least 3 providers (OpenRouter, Groq, Gemini free). Token budget: zero. Goal: green light on the gateway.

**Phase 2 (Day 1-2)**: Wrap AgentLoop's LLM call sites with headroom `compress()` on input and output. Measure token reduction on representative prompts. Goal: 50%+ token savings verified empirically.

**Phase 3 (Day 2-3)**: Point AgentLoop's LLM client at OmniRoute's local endpoint instead of direct OpenAI. Add agent-aware routing rules (cheap model for routine decisions, premium model for synthesis). Goal: end-to-end loop runs locally with $0 in paid API spend.

**Phase 4 (Day 3-4)**: Docker Compose the whole stack. Add `vault-core run "<task>"` CLI that wraps AgentLoop through headroom+OmniRoute. Goal: single-command reproducible run.

**Key risks**:
- OmniRoute routing rules may need tuning for agent-specific traffic (not just endpoint health).
- headroom's `headroom wrap` is the easiest integration path; check if it covers Python's OpenAI client cleanly.
- AgentLoop's 5 fixed actions are limited — may need to add 2-3 more (web_search via crawlee, file_read, shell).

**Suggested lead agent**: Hermes.

---

## BUILD PLAN — Project 2: vault-research

**Phase 1 (Day 1-2)**: Stand up crawlee-python with a basic PlaywrightCrawler. Verify scraping on a test target. Goal: scraping works without stealth.

**Phase 2 (Day 2-3)**: Add fingerprint-suite's `newInjectedContext()` to the PlaywrightCrawler. Test against a Cloudflare-protected target. Goal: stealth scraping works on at least one major protected site.

**Phase 3 (Day 3-5)**: Wire LLM_MapReduce's Map phase to consume crawlee's Dataset output. Each chunk → LLM call (routed through Project 1's gateway). Verify Map→Collapse→Reduce runs end-to-end on a real long document (legal brief, large codebase, scraped docket dump).

**Phase 4 (Day 5-7)**: Add Collapse and Reduce stages, integrate with ECC's `deep-research` skill for synthesis quality. Goal: 10K-page corpus → 1-page briefing in <10 min wall-clock, <$0.50 in API spend (free tiers).

**Key risks**:
- Stealth scraping always has a shelf life — fingerprint detection evolves.
- LLM_MapReduce's confidence calibration may need tuning per use case.
- Long-doc synthesis quality depends heavily on the Reduce prompt — borrow from ECC's deep-research skill rather than writing from scratch.

**Suggested lead agent**: Antigravity.

---

## BUILD PLAN — Project 3: vault-skills

**Phase 1 (Day 1-2)**: Inventory + classify all 37 ECC skills. Mark each as: extract / defer / drop. Identify dependency graph (which skills depend on which other skills). Goal: extraction list locked.

**Phase 2 (Day 2-4)**: Extract the top 5 priority skills (`deep-research`, `eval-harness`, `continuous-learning-v2`, `mcp-server-patterns`, `agent-introspection-debugging`) into a standalone `vault-skills/` repo. Each gets: SKILL.md manifest, tests, install instructions, dependency declaration.

**Phase 3 (Day 4-6)**: Lift `agents/plugin-eval/` quality eval framework and adapt for vault-skills. Run evals on extracted skills. Score against a baseline. Goal: measurable quality bar.

**Phase 4 (Day 6-8)**: Extract remaining 5-10 skills. Set up Makefile-driven regeneration from upstream ECC (so we can pull new skills as they're added). Package as `pip install vault-skills` and a Claude Code / Hermes marketplace adapter.

**Key risks**:
- Skills are deeply inter-referential — extracting in the wrong order causes breakage.
- ECC's skill generator was auto-generated from upstream repos; some skills may not be standalone-runnable.
- License compatibility with whatever each skill's source repo was needs audit (most are MIT/Apache but verify).

**Suggested lead agent**: Antigravity.

---

## Cross-project integration (where they meet)

```
                  ┌─────────────────────────┐
                  │   vault-skills (P3)     │
                  │   10-15 curated skills  │
                  └────────────┬────────────┘
                               │ skill plugins
                               ▼
┌─────────────────┐    ┌─────────────────────────┐    ┌─────────────────┐
│ vault-research  │───▶│   vault-core (P1)       │◀───│  any future     │
│ (P2)            │    │   AgentLoop kernel      │    │  Vault OS agent │
│ crawlee + LLM_  │    │   + headroom compress   │    │                 │
│ MapReduce +     │    │   + OmniRoute gateway   │    │                 │
│ fingerprint     │    └─────────────────────────┘    └─────────────────┘
└─────────────────┘
```

- `vault-core` (P1) is the kernel. Every other agent project uses it.
- `vault-research` (P2) is the first domain agent — long-doc research. Consumes vault-core, optionally loads research-related vault-skills.
- `vault-skills` (P3) is the capability marketplace. Every domain agent (including P2) loads skills from it.

Each project can ship independently. They compose, but they don't block each other.

---

## What I deliberately did NOT select (and why)

- **A-Defection (parent only)** — architecture docs without code, ECC extraction captures the value without the dead weight.
- **suna** — too much multi-service surface for a 3-project budget. Cherry-pick suna's MCP broker later if needed.
- **agentfs standalone** — Antigravity's dark horse is brilliant but it overlaps with P3's audit story (skill eval logs). Pull agentfs into P3 if a future audit need surfaces; not its own project today.
- **langfuse** — observability is valuable but @observe() is a 1-line wrapper; not worth a project slot.
- **supermemory** — heavy monorepo, deferred until we know Vault OS needs long-term memory across sessions.
- **hermes-agent** — OpenCode's #2 standalone pick, but Antigravity is right that a generic agent kernel is commodity. The loop lives in P1 (AgentLoop-based), not in hermes-agent.
- **Single-skill repos** (last30days-skill, claude-legal-skill, autoresearch-skill, oh-my-hermes-for-legal-researcher) — these are P3 material, not standalone projects.
- **OpenCode's "AgentLoop + hermes-agent standalone core engine"** — Antigravity correctly identified this as overrated. The kernel lives in P1; hermes-agent gets folded in as another skill plugin if useful.

---

## Resolution of inter-agent disagreements

**OpenCode vs. Antigravity on AgentLoop+hermes-agent as a standalone project:**
Antigravity wins on strategic framing (agent-loop market is saturated), OpenCode wins on technical feasibility (AgentLoop is the cleanest decision-loop pattern in the repo). Resolution: AgentLoop is the kernel of P1 (vault-core), not a standalone project. hermes-agent's modular skill architecture is folded into P3 (vault-skills).

**Antigravity vs. Hermes on ECC extraction priority:**
Antigravity called it #3 strategically (app store vision). I called it top-5. Resolution: P3 — the curation work is concrete and bounded, while the "app store" vision can come later as the marketplace matures.

**OpenCode vs. Antigravity on crawler/fingerprint project scope:**
OpenCode: "thin adapter." Antigravity: "unified stealth scraping API." Resolution: P2 (vault-research) is the heavier of the two — stealth scraping + LLM_MapReduce on top. The thin adapter is just the first step.

---

## Closing notes

- All three picks are grounded in code that exists today in the repo.
- All three picks reuse 2-4 existing projects each — minimal greenfield.
- All three picks have multi-agent support (no single-agent-only idea made the cut).
- Lead-agent assignments match each agent's demonstrated strength in the surveys:
  - Hermes → orchestration (P1)
  - Antigravity → pattern recognition + curation (P2 + P3)
  - OpenCode → technical integration review (cross-cutting, not lead on any one but consult on all)
- Build plans are phased for incremental shipping — each project's Phase 1 alone is valuable.

Decision is **CLOSED**. Proceed with P1 (vault-core) Day 1 unless redirected.