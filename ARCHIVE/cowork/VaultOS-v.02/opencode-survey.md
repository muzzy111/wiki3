AGENT: OpenCode
PHASE: Survey
STATUS: Complete
TIMESTAMP: 2026-06-29 09:30:00

---

# Vault OS Repo Survey

## Scope
- **Base**: `C:\Users\Admin\Documents\GitHub\`
- **Excluded**: `Hermes\`, `OpenCode\`, `Antigravity\`, `Chat\`
- **Total projects surveyed**: 56 (plus 4 excluded)

---

## Tier 1 — Buildable / Production-Ready

These projects have coherent code structure, package files, and functional code.

### 1. OmniRoute
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | AI gateway routing 231 providers (50+ free), token compression (15-95%), auto-fallback |
| **Maturity** | **Near-complete** — 1.6B documented free tokens/mo, 17 routing strategies, active community |
| **Architecture** | **Structured** — monorepo with CLI, MTProxy, Electron app, SDK, MCP servers, OpenCode plugin |
| **Stack** | TypeScript/Node.js, Go (tproxy), Electron, Rust (native), Docker, 25+ languages i18n |
| **Missing** | Nothing critical — deploy via `docker compose up` |
| **Reusable** | Provider routing engine, RTK/Caveman compression, 50+ free tier aggregator |
| **Package files** | `package.json` (multiple), Go modules |

### 2. crawlee-python (Apify)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Production web scraping & browser automation library |
| **Maturity** | **Complete** — v1.7.4, Apache 2.0, PyPI, full test suite, CI/CD |
| **Architecture** | **Structured** — clean package with multiple crawler types, proxy rotation, session management |
| **Stack** | Python 3.10+, Playwright, BeautifulSoup, httpx, Pydantic v2, asyncio |
| **Missing** | Nothing — `pip install 'crawlee[all]'` and run |
| **Reusable** | Router pattern, request handling, proxy rotation, dataset/key-value storage abstractions |
| **Package files** | `pyproject.toml` |

### 3. AgentCPM (THUNLP/ModelBest)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Open-source LLM agents — Explore (4B, SOTA on 8 benchmarks) and Report (8B, rivals Gemini-2.5-pro) |
| **Maturity** | **Complete** — trained models, full training/inference code, Docker Compose |
| **Architecture** | **Structured** — separate subprojects, AgentDock tool sandbox, AgentRL, UltraRAG |
| **Stack** | Python, Docker, vLLM, Milvus vector DB, MiniCPM models |
| **Missing** | Nothing critical — Docker-ready |
| **Reusable** | AgentDock tool sandbox, AgentToLeap evaluation framework, UltraRAG low-code RAG |
| **Package files** | `pyproject.toml` (multiple) |

### 4. langfuse
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Open-source LLM engineering platform — tracing, prompt management, evaluation, datasets |
| **Maturity** | **Complete** — v3.201.1, 16k+ GitHub stars, production-grade |
| **Architecture** | **Structured monorepo** — web/worker/shared/ee, Postgres + ClickHouse, Kubernetes Helm |
| **Stack** | TypeScript/Next.js (web), Python (SDK+worker), Node.js 24, Postgres, ClickHouse, Docker |
| **Missing** | `docker compose up`, .env with credentials |
| **Reusable** | LLM tracing decorator, prompt management UI patterns, evaluation framework |
| **Package files** | `package.json` (pnpm monorepo) |

### 5. fingerprint-suite (Apify)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Browser fingerprint generation/injection — 4 npm packages |
| **Maturity** | **Complete** — v2.1.83 npm, v0.13.0 PyPI, Apache 2.0, turbo build |
| **Architecture** | **Structured monorepo** — 6 packages, TypeScript strict, ESLint, vitest |
| **Stack** | TypeScript, Python, pnpm, Playwright, Puppeteer, vitest |
| **Missing** | `pnpm install && pnpm build` |
| **Reusable** | Fingerprint generator, injector `newInjectedContext()`, Bayesian network |
| **Package files** | `package.json`, `pyproject.toml` |

### 6. kameleo
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Commercial anti-detect browser platform — SDKs for Python/JS/C# |
| **Maturity** | **Complete** — v5.0.0 SDKs, production software, free tier available |
| **Architecture** | **Structured** — SDK per language, masking reports, examples, docs |
| **Stack** | Python 3.8+ (Poetry), TypeScript 16+, C#, Selenium/Puppeteer/Playwright |
| **Missing** | Requires Kameleo client installation (local or Docker) |
| **Reusable** | Multi-language SDK patterns, CDP browser attachment, profile management |
| **Package files** | `pyproject.toml`, `package.json` |

### 7. ponytail
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Lazy senior dev mode for AI agents — ~54% less code, ~27% faster |
| **Maturity** | **Complete** — v1.0, 14 agent integrations, benchmark suite |
| **Architecture** | **Structured** — skill files, MCP server, benchmarks, examples |
| **Stack** | Markdown skill definitions, TypeScript MCP server, Python benchmarks |
| **Missing** | Nothing — skill-based, activated via CLAUDE.md |
| **Reusable** | The entire ponytail philosophy/skill — 54% code reduction pattern |
| **Package files** | None (skill-based) |

### 8. supermemory
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | State-of-the-art memory and context engine for AI — #1 on LongMemEval, LoCoMo, ConvoMem |
| **Maturity** | **Near-complete** — v0.x, multiple packages, active development |
| **Architecture** | **Structured monorepo** — web app, MCP server, browser extension, Raycast, AI SDK, Python SDK, memory graph |
| **Stack** | TypeScript/Next.js, Python, OpenAI SDK, memory-graph engine |
| **Missing** | Requires API keys, multi-service local dev |
| **Reusable** | Memory graph engine, AI SDK integration patterns, MCP server |
| **Package files** | `package.json` (×7), `pyproject.toml`, `requirements.txt` |

---

## Tier 2 — Buildable with Effort

These projects have real code and structure but need work to be production-ready.

### 9. A-Defection
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Interactive narrative platform connecting stories to real-world events with blockchain predictions |
| **Maturity** | **Partial** — architecture fully documented but implementation is skeleton/stub code |
| **Architecture** | **Structured** — MVC pattern, service layer, clear separation (server/ai/blockchain/client) |
| **Stack** | Node.js/Express, MongoDB/Mongoose, React, Solidity, OpenAI API |
| **Missing** | Working React client, real AI integration, news pipeline, blockchain deployment |
| **Reusable** | `ai/news/newsAnalyzer.js` (TF-IDF, entity extraction), Solidity contracts, server service layer |
| **Package files** | `package.json` |

### 10. AgentLoop
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Autonomous agent with LLM-driven closed-loop decision-making |
| **Maturity** | **Partial** — working prototype, 5 fixed actions, limited scope |
| **Architecture** | **Structured** — clear separation: core/actions/llm, Pydantic schemas |
| **Stack** | Python 3.11+, Pydantic v2, OpenAI SDK |
| **Missing** | More tool actions, multi-agent coordination, broader LLM provider support |
| **Reusable** | Decision loop pattern (`core/agent.py`), Pydantic schema enforcement for LLM output |
| **Package files** | `pyproject.toml` |

### 11. hermes-agent
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Modular Python agent with domain skills (finance DCF, etc.) |
| **Maturity** | **Early** — v0.x, functional with extensible skill system |
| **Architecture** | **Modular** — skill-based plugin architecture |
| **Stack** | Python, pyproject.toml |
| **Missing** | Broader skill library, production hardening |
| **Reusable** | Skill plugin architecture, finance DCF model |
| **Package files** | `pyproject.toml`, `requirements.txt` |

### 12. headroom
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Agentic knowledge management and retention engine |
| **Maturity** | **Early** — v0.x, promising concept |
| **Architecture** | **Modular** — memory integration patterns |
| **Stack** | Python |
| **Missing** | Production data persistence, broader integrations |
| **Reusable** | Retention engine patterns, knowledge management workflows |
| **Package files** | `pyproject.toml` |

### 13. LLM_MapReduce
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Distributed LLM processing via MapReduce orchestration |
| **Maturity** | **Early** — v0.x, working prototype |
| **Architecture** | **Structured** — MapReduce pattern adapted for LLM calls |
| **Stack** | Python |
| **Missing** | Production scaling, error handling for LLM failures |
| **Reusable** | Parallel LLM task execution pattern, MapReduce abstraction |
| **Package files** | `pyproject.toml`, `requirements.txt` |

### 14. MASFactory
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Multi-agent system factory with LLM discussion and clawcanvas backend |
| **Maturity** | **Early** — v0.x, sparse reproduction |
| **Architecture** | **Mixed** — multiple agent orchestration approaches |
| **Stack** | Python |
| **Missing** | Unified architecture, production deployment |
| **Reusable** | Agent discussion protocols, clawcanvas backend patterns |
| **Package files** | `requirements.txt` (×5) |

### 15. agentfs (Turso)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Filesystem for AI agents — SQLite-based storage with audit trails, snapshots, POSIX interface |
| **Maturity** | **Near-complete** — Beta with multi-language SDKs (Rust/TS/Python), FUSE/NFS |
| **Architecture** | **Structured** — CLI, SDK (3 languages), sandbox, examples |
| **Stack** | Rust (CLI, SDK), TypeScript, Python, SQLite/Turso |
| **Missing** | Windows-native support (FUSE on Linux, NFS on macOS) |
| **Reusable** | Agent state audit trail (SQLite), copy-on-write filesystem isolation |
| **Package files** | `Cargo.toml` (×3), `package.json` (×8) |

### 16. agent-file
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Open standard file format (`.af`) for serializing stateful AI agents |
| **Maturity** | **Near-complete** — established spec, functional Next.js web app |
| **Architecture** | **Structured** — Next.js 16 app, Letta SDK integration |
| **Stack** | Next.js 16, React 19, Tailwind CSS, Radix UI, Zod |
| **Missing** | Nothing critical — functional for agent browsing |
| **Reusable** | `.af` schema design for agent portability, Letta server integration |
| **Package files** | `package.json` |

### 17. agents (Plugin Marketplace)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Production plugin marketplace — 84 plugins, 192 agents, 156 skills, 102 commands |
| **Maturity** | **Near-complete** — active marketplace with quality eval framework |
| **Architecture** | **Structured** — plugin-based with multi-harness adapters |
| **Stack** | Makefile-driven generation from Markdown, Python (eval) |
| **Missing** | Depends on external harness (Claude Code, OpenCode, etc.) |
| **Reusable** | 84 plugin patterns, multi-harness adaptation layer, `plugin-eval/` quality framework |
| **Package files** | None (Makefile-driven) |

### 18. multilogin-automation
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Open-source Python SDK + 120 demo scripts for Multilogin X antidetect browser automation |
| **Maturity** | **Near-complete** — v1.9.0, MIT, 120 demo scripts, CLI, pytest |
| **Architecture** | **Structured** — SDK (20 modules), demos, examples, CLI |
| **Stack** | Python 3.10+, Playwright, requests, python-dotenv, ruff |
| **Missing** | Multilogin X account + subscription, Playwright browser binaries |
| **Reusable** | `mlx/browser.py` (Playwright CDP context), `mlx/farm.py` (bulk orchestration), cookie roundtrip |
| **Package files** | `pyproject.toml` |

### 19. suna (Kortix)
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | AI command center — multi-agent workforce platform, agents write code/open PRs in isolated sandboxes |
| **Maturity** | **Near-complete** — v0.9.5, source-available, active development |
| **Architecture** | **Structured monorepo** — 8 apps (web/api/cli/desktop/mobile/sandbox/llm-gateway/kortix-sandbox-agent-server) |
| **Stack** | TypeScript, Bun, Next.js, Postgres (Supabase), Docker, 3,000+ MCP integrations |
| **Missing** | Complex multi-service local dev, decryption key for dotenvx, Supabase credentials |
| **Reusable** | Agent sandbox isolation, PR workflow for agent output, connector/MCP broker |
| **Package files** | `package.json` |

### 20. autoresearch
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Full-stack auto-research agent system |
| **Maturity** | **Early** — v0.x, TypeScript |
| **Architecture** | **Structured** — standard agent research workflow |
| **Stack** | TypeScript |
| **Missing** | Production research pipeline, result quality validation |
| **Reusable** | Research workflow orchestration patterns |
| **Package files** | `package.json` |

### 21. orca
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Agent system with multiple packages |
| **Maturity** | **Early** — v0.x, TypeScript monorepo |
| **Architecture** | **Moderate** — multi-package structure |
| **Stack** | TypeScript |
| **Missing** | Documentation, tests |
| **Reusable** | Agent orchestration package layout |
| **Package files** | `package.json` (×3) |

### 22. omniwire
| Attribute | Assessment |
|-----------|------------|
| **Purpose** | Agent system with multiple packages |
| **Maturity** | **Early** — v0.x, TypeScript |
| **Architecture** | **Moderate** — multi-package |
| **Stack** | TypeScript |
| **Missing** | Clear documentation |
| **Reusable** | Integration wiring patterns |
| **Package files** | `package.json` (×3) |

---

## Tier 3 — Skills / Prompt Libraries / Documentation

These are not buildable as standalone projects but contain valuable reusable patterns.

### Prompt & Agent Definition Libraries

| Project | Content | Reusable Value |
|---------|---------|----------------|
| **agency-agents** | 200+ agent personas across 12 divisions | Prompt engineering patterns, multi-agent coordination templates |
| **agent-prompts** | LLM-generated prompts for PoC engineering, research, language engineering | 6-phase delegation pattern, multi-agent orchestration |
| **agentic-system-prompts** | System prompts from 7 production agents (Claude Code, Gemini CLI, Cline, Aider, Roo Code, Zed, Codex CLI) | Production prompt patterns, tool definition schemas |
| **awesome-claude-corporate-skills** | Corporate skill patterns for Claude Code | DCF model, MCP builder scripts |
| **n8n-skills** | n8n workflow automation skills | Workflow automation patterns |
| **openclaw-skills-Lawliet** | Legal domain skill overlays | Legal research workflows |
| **oh-my-hermes-for-legal-researcher** | Legal research agent prompts | Legal domain agent patterns |
| **claude-for-legal-tutorial** | Legal tutorial content | Legal domain reference |
| **claude-legal-skill** | Legal skill definitions | Legal domain skill patterns |
| **open-code-antigravity-multi-auth** | Auth skill overlay | Multi-auth patterns |

### Developer Skills & Libraries

| Project | Content | Reusable Value |
|---------|---------|----------------|
| **ponytail** | Lazy senior dev mode — 54% less code | Entire skill philosophy, MCP server |
| **last30days-skill** | Time-bounded research skill | Time-filtered research patterns |
| **loop-library** | Agent loop library | Loop implementation reference |
| **ralph-playbook** | Ralph development playbook | Development workflow patterns |
| **dotagents** / **getsentry-dotagents** | Agent dotfiles / Sentry-specific fork | Agent configuration conventions |
| **gstack** | Agent stack setup | Minimal agent stack template |
| **agentic-ai-engineering** | Educational tutorials (6 modules) | Agent loop, tool use, RAG patterns |
| **jcode** | Code execution agent | Code sandbox patterns |

### Other Utilities

| Project | Content | Notes |
|---------|---------|-------|
| **Understand-Anything** | Analysis tool | Undetermined scope |
| **markdowner** | Markdown conversion | Minimal content |
| **supermemory** | Memory engine | Already in Tier 1 |
| **superpowers** | Agent capabilities | Undetermined scope |
| **headroom** | Knowledge retention | Already in Tier 2 |

---

## Tier 4 — Not Buildable Projects

These are empty, deprecated, or not real projects.

| Project | Reason |
|---------|--------|
| **Build** | Empty directory |
| **Source** | Empty directory |
| **cowork.stuff** | Prompt fragments and identity docs only — not a project |
| **PROMPTS.md** | Conceptual guide directory — 413-line guide on CLAUDE.md/MEMORY.md conventions |
| **DocketScraperAPI** | Deprecated — redirects to `django-docketsearch` |
| **Instagram-Hashtag-Scraper** | Code is a `.zip` file, not in repo — broken README |

---

## Cross-Project Integration Opportunities

### Immediate (requires minimal adaptation)

| Integration | Value |
|-------------|-------|
| **ponytail** into any agent project | 54% less code generation, 27% faster execution |
| **langfuse** tracing into A-Defection AI calls | Full LLM observability for narrative generation |
| **fingerprint-suite** into crawlee-python | Stealth browser automation for anti-bot scraping |
| **agentfs** state management into any agent loop | Persistent agent state with audit trails |
| **agent-file** `.af` format for agent portability | Standardized agent serialization across projects |

### Medium-term (requires some adaptation)

| Integration | Value |
|-------------|-------|
| **OmniRoute** as LLM gateway for all agent projects | 231 providers, auto-fallback, 15-95% token savings |
| **AgentCPM** AgentDock as unified tool sandbox | Shared tool execution environment across agents |
| **supermemory** memory graph into Vault OS knowledge layer | State-of-the-art AI memory on 3 benchmarks |
| **kameleo** + **multilogin-automation** unified abstraction | Single API over both anti-detect platforms |
| **MASFactory** agent spawning patterns | Dynamic agent creation and lifecycle management |

### High-effort (significant adaptation needed)

| Integration | Value |
|-------------|-------|
| **A-Defection** narrative engine + **AgentCPM** deep research | AI-generated narrative from real-time news analysis |
| **suna** sandbox isolation + **crawlee-python** scraping | Secure, isolated web scraping execution |
| **agents** marketplace + **OmniRoute** provider routing | Plugin discovery through unified gateway |

---

## Buildability Priority Ranking (for Vault OS)

| Rank | Project | Why | Effort to Ship |
|------|---------|-----|----------------|
| 1 | **ponytail** | Skill only, immediate value, 0 infrastructure | 0 (already active) |
| 2 | **crawlee-python** | pip install, runs immediately | Hours |
| 3 | **fingerprint-suite** | pnpm install + build | Hours |
| 4 | **langfuse** | Docker Compose up | Hours-Day |
| 5 | **kameleo** | pip/npm install + client | Hours-Day |
| 6 | **AgentLoop** | pip install, lightweight | Day |
| 7 | **hermes-agent** | pip install, modular | Day |
| 8 | **OmniRoute** | Docker Compose, config-heavy | Day |
| 9 | **multilogin-automation** | pip install + subscription | Day |
| 10 | **AgentCPM** | Docker, model weights, GPU | Days |
| 11 | **headroom** | pip install, needs data | Days |
| 12 | **LLM_MapReduce** | pip install, needs LLM infra | Days |
| 13 | **supermemory** | pnpm install, multi-service | Days-Week |
| 14 | **suna** | Complex multi-service setup | Week |
| 15 | **A-Defection** | Needs substantial frontend + AI work | Weeks |
| 16 | **MASFactory** | Unclear architecture, sparse | Weeks |

---

## Top Reuse Candidates (code to extract)

| File/Module | Source Project | Why Extract |
|-------------|----------------|-------------|
| `ai/news/newsAnalyzer.js` | A-Defection | TF-IDF clustering, entity extraction, sentiment analysis |
| `blockchain/contracts/PredictionMarket.sol` | A-Defection | ERC20 staking, role-based access, oracle resolution |
| `fingerprint-injector` `newInjectedContext()` | fingerprint-suite | One-call stealth browser context |
| `mlx/browser.py` | multilogin-automation | Playwright CDP profile browser context manager |
| `core/agent.py` | AgentLoop | Decision loop pattern — LLM decides → executes → loops |
| AgentDock sandbox | AgentCPM | Unified MCP tool sandbox management |
| Memory graph engine | supermemory | State-of-the-art AI memory (LongMemEval #1) |
| `.af` schema | agent-file | Standardized agent serialization format |
| RTK/Caveman compression | OmniRoute | 15-95% token savings on LLM calls |
| `@observe()` decorator | langfuse | LLM call instrumentation pattern |

---

## Stack Distribution Summary

| Stack | Project Count |
|-------|---------------|
| Python | ~20 (crawlee, AgentCPM, AgentLoop, hermes-agent, headroom, LLM_MapReduce, MASFactory, kameleo, multilogin-automation, etc.) |
| TypeScript/Node.js | ~15 (OmniRoute, agent-file, autoresearch, orca, jcode, omniwire, suna, dotagents, open-multi-agent, gstack, etc.) |
| Markdown/Prompt-only | ~10 (agency-agents, agent-prompts, agentic-system-prompts, awesome-claude-corporate-skills, n8n-skills, etc.) |
| Rust | ~3 (agentfs, OmniRoute native, ponytail MCP) |
| Solidity | ~1 (A-Defection) |
| Go | ~1 (OmniRoute MTProxy) |
| Empty/Deprecated | ~6 |

---

## Key Conclusions

1. **Most mature projects**: OmniRoute (AI gateway), crawlee-python (scraping), langfuse (observability), fingerprint-suite (stealth), kameleo (anti-detect)
2. **Best foundations for Vault OS core**: AgentLoop (decision loop), hermes-agent (modular skills), headroom (knowledge retention), LLM_MapReduce (parallel processing)
3. **Biggest gap**: No integrated project combining agent execution + memory + tool sandbox + LLM routing — that's Vault OS's opportunity
4. **Largest wasted effort**: A-Defection has excellent architecture docs but skeleton code — needs significant frontend + AI work
5. **Highest-value skill**: ponytail — already active, proven 54% code reduction, zero infrastructure
