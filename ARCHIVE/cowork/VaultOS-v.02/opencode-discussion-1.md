AGENT: OpenCode
PHASE: Discussion Round 1
STATUS: Complete

---

# OpenCode Discussion — Vault OS Project Analysis

> Note: `hermes-discussion-1.md` was not available during this session. The analysis below covers OpenCode's assessment from the survey data. Hermes's follow-up questions will be addressed when the discussion file becomes available.

---

## Top 3 Strongest Project Ideas (Technical Buildability)

### 1. OmniRoute-Powered Agent Gateway

**Why it's strongest**: OmniRoute is near-complete with 231 providers, 50+ free tiers, Docker Compose deployment, and 17 routing strategies. It's the most mature codebase in the repo with active community, Electron app, MTProxy, and OpenCode plugin.

**Existing code making it viable**:
- `OmniRoute/` — Full provider routing engine, token compression (RTK/Caveman: 15-95% savings)
- `OmniRoute/@omniroute/opencode-provider/` — Direct OpenCode plugin integration
- `OmniRoute/bin/cli/` — CLI for quick setup
- Docker Compose infrastructure for one-command deployment

**Critical missing piece**: Integration with Vault OS agent orchestration logic. OmniRoute is currently a standalone gateway — it needs an agent dispatch layer that selects providers based on task type, cost, and latency requirements, plus auto-fallback logic tied to agent needs rather than just endpoint health.

**Effort to ship**: Day 1 deploy OmniRoute; Week 1 add agent-aware routing middleware.

---

### 2. AgentLoop + hermes-agent Core Engine

**Why it's strongest**: AgentLoop provides a clean decision-loop pattern (LLM decides → executes → loops) with Pydantic schema enforcement. hermes-agent adds modular skill plugins. Together they form a lightweight, composable agent foundation with Python's minimal dependency footprint.

**Existing code making it viable**:
- `AgentLoop/src/agentloop/core/agent.py` — Decision loop: `decide() → execute() → update_state()`
- `AgentLoop/src/agentloop/core/schemas.py` — Pydantic schema enforcement for LLM outputs
- `hermes-agent/` — Skill plugin architecture, finance DCF skill as reference
- `agentic-ai-engineering/05-agent-loop/` — Educational but runnable implementation

**Critical missing piece**: Unified memory layer. AgentLoop has no persistent state (in-memory only) and hermes-agent's skills are domain-specific (finance). Need an integration with headroom (knowledge retention) or supermemory (memory graph) to make agents remember across sessions.

**Effort to ship**: 2-3 days for core agent loop; Week 1-2 for memory integration.

---

### 3. crawlee-python + fingerprint-suite Stealth Scraping Stack

**Why it's strongest**: Both from Apify, both production-grade (v1.7.4 / v2.1.83), both structured monorepos with full test suites. Together they provide end-to-end web scraping with undetectable browser fingerprinting — a common need across virtually any agent system.

**Existing code making it viable**:
- `crawlee-python/src/crawlee/crawlers/` — Router pattern, BeautifulSoupCrawler, PlaywrightCrawler
- `crawlee-python/src/crawlee/storage/` — Dataset/key-value store abstractions
- `fingerprint-suite/packages/fingerprint-injector/` — `newInjectedContext()` API
- `fingerprint-suite/packages/fingerprint-generator/` — Probabilistic fingerprint generation
- `fingerprint-suite/packages/generative-bayesian-network/` — Bayesian network for realistic fingerprints

**Critical missing piece**: Integration bridge. The two projects are independent packages. Need a thin adapter that feeds fingerprint-suite's injected browser contexts into crawlee's PlaywrightCrawler, plus session management that preserves fingerprints across page navigations.

**Effort to ship**: Day 1 install both via pip; Day 2-3 write integration adapter.

---

## Projects That Would Be a Waste of Effort

### Waste: A-Defection (as-is)
**Why**: Has 30+ architecture docs and 7 well-structured markdown files describing the system, but the actual implementation is skeleton/stub code. The React client is empty (only `public/`), AI services are stubs, blockchain contracts are templates. Shipping this would require rebuilding 80% of the code from scratch. The architecture docs are valuable as reference, but the codebase itself is not a viable starting point.

**Exception**: The `ai/news/newsAnalyzer.js` (TF-IDF clustering, entity extraction) and the Solidity contracts are salvageable as standalone modules.

### Waste: Instagram-Hashtag-Scraper
**Why**: The actual code is in a `.zip` file inside the repo, not in version control. The README links are broken. Instagram's anti-bot measures make this class of scraper high-maintenance. Selenium-based scraping of Instagram has a shelf life of weeks, not months. Would need constant updates.

### Waste: DocketScraperAPI
**Why**: Marked DEPRECATED with a redirect to `django-docketsearch`. Even the original maintainer abandoned it. Court website scrapers are fragile — PA courts change their site structure regularly.

### Waste: cowork.stuff / Build / Source / PROMPTS.md
**Why**: Not projects at all. Empty directories or prompt fragment collections. No code exists to build on.

### Waste: Any single-skill repo as a standalone project
**Why**: `last30days-skill`, `claude-legal-skill`, `claude-for-legal-tutorial`, `oh-my-hermes-for-legal-researcher`, `autoresearch-skill` — these are skill overlays, not applications. Building a product around any single one would be under-scoped. Their value is as plugins within a larger platform, not as independent projects.

---

## Additional Technical Observations

### Most Overlooked Reusable Asset
**OmniRoute's token compression (RTK + Caveman)** saves 15-95% on LLM tokens. This alone could cut operational costs by 2-10x for any Vault OS agent that makes frequent LLM calls. It's a force multiplier, not just a gateway.

### Biggest Integration Win
**langfuse tracing + any agent project**. One `@observe()` decorator on every LLM call gives full observability — prompt versioning, latency tracking, cost attribution, evaluation datasets. This is table stakes for production and langfuse has it ready with Docker Compose.

### Best "Steal This Pattern" Candidate
**agent-file `.af` schema**. A standardized format for serializing agent state (personality, memory, tools, conversation history). If Vault OS agents need portability or session persistence, adopting the `.af` format avoids designing yet another serialization scheme.

### Highest-ROI Skill Injection
**ponytail**. Already active in this session. Proven 54% code reduction across feature tasks, 27% faster execution. Zero infrastructure cost — it's a prompt-level intervention. Every agent project in Vault OS should run with ponytail from day one.

---

## Proposed Architecture Synthesis

Based on the survey, the most efficient path to a working Vault OS:

```
OmniRoute (LLM gateway)
    ↓ routes to best provider
AgentLoop (decision loop)
    ↓ with skill plugins from hermes-agent
headroom / supermemory (memory layer)
    ↓ persists across sessions
crawlee-python (web data when needed)
    ↓ via fingerprint-suite (stealth)
langfuse (observability everywhere)
    ↓
ponytail (lazy mode on all agents)
```

This stack reuses 7 existing projects, requires zero greenfield infrastructure, and can ship incrementally starting with OmniRoute (Day 1) + AgentLoop (Week 1) + memory (Week 2).
