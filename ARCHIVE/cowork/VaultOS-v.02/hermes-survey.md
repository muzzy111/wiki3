AGENT: Hermes
PHASE: Survey
STATUS: Complete
TIMESTAMP: 2026-06-29T09:48:00-04:00

---

# Vault OS Repo Survey — Hermes (Orchestrator)

## Scope
- Base: `C:\Users\Admin\Documents\GitHub\`
- Excluded: Hermes\, OpenCode\, Antigravity\, Chat\
- 60 directories in manifest. After excluding empty (`Build`, `Source`), deprecated (`DocketScraperAPI`), and broken-zip (`Instagram-Hashtag-Scraper`), ~57 projects in scope.

## Method
Read repo-manifest.md (52K file paths, 3.2 MB). Sampled READMEs and source trees of the 20 highest-potential projects. Verified two corrections against the other agents' surveys by reading actual code/README rather than trusting second-hand summaries.

## Corrections to other agents' surveys

**1. headroom is NOT "knowledge retention".** Both surveys put it in Tier 2 as a small knowledge tool. The README says it is "the context compression layer for AI agents" — 60-95% token reduction, with library/proxy/MCP/wrap modes, cross-agent memory, and `headroom learn` that mines failed sessions. This is a *force multiplier* on every other project, not a standalone tool. Re-classify as **Tier 1, high-reuse**.

**2. A-Defection\ECC is a 37-skill ecosystem, not a stub.** Antigravity flagged it as a "wild card." The directory has 37 production skills (`agent-introspection-debugging`, `deep-research`, `eval-harness`, `everything-claude-code`, `mcp-server-patterns`, `continuous-learning-v2`, `market-research`, `manim-video`, `openclaw-persona-forge`, …), a Python dashboard (`ecc_dashboard.py`), integrations (`integrations/aura/`), and ~20 Python scripts. This is a **fully-built agent skill marketplace**, trapped inside a game directory because the parent repo is the narrative-blockchain project.

## Tier 1 — Production-grade foundations

### 1. OmniRoute  (`OmniRoute/`, 369 MB, 6,791 source files)
- **Purpose**: LLM gateway routing 231 providers, 50+ free tiers, RTK+Caveman compression (15-95% savings), 17 routing strategies.
- **Verified**: README directly claims 1.6B documented free tokens/month, Docker + Electron + CLI + MCP + OpenCode plugin + MTProxy.
- **Stack**: TypeScript/Node.js primary, Go (MTProxy), Rust native, Docker.
- **Missing**: Nothing blocking deployment.
- **Reuse**: Drop-in LLM gateway for Vault OS. Token compression alone makes every other project cheaper.

### 2. headroom  (`headroom/`, Apache 2.0, library+proxy+MCP)
- **Purpose**: Context compression layer for AI agents — 60-95% token reduction on tool outputs, logs, RAG chunks, files.
- **Verified by README**: 5 surface APIs (`compress()` library, `headroom proxy`, `headroom wrap`, MCP server, cross-agent memory store). `headroom learn` mines failed sessions into CLAUDE.md/AGENTS.md corrections. PyPI + npm + HF model published.
- **Stack**: Python + TypeScript, with `kompress-v2-base` on HuggingFace.
- **Missing**: Nothing critical.
- **Reuse**: Wrap every LLM call site in Vault OS. Pairs directly with OmniRoute.

### 3. crawlee-python  (`crawlee-python/`, 88 MB, 824 source files, v1.7.4)
- **Purpose**: Apify's production web scraping library — BeautifulSoupCrawler, PlaywrightCrawler, HTTP crawler, dataset/key-value stores, proxy rotation.
- **Stack**: Python 3.10+, Playwright, httpx, Pydantic v2, asyncio.
- **Missing**: Nothing — `pip install 'crawlee[all]'`.
- **Reuse**: Web data ingestion layer. Router pattern is the blueprint for Vault OS request handling.

### 4. fingerprint-suite  (`fingerprint-suite/`, Apify, v2.1.83 npm + v0.13.0 PyPI)
- **Purpose**: Stealth browser fingerprinting — generator + injector + Bayesian network, 6 packages.
- **Stack**: TypeScript, Python, Playwright, Puppeteer.
- **Reuse**: `newInjectedContext()` is one-call stealth. Pairs with crawlee-python for anti-bot scraping.

### 5. langfuse  (`langfuse/`, 136 MB, 3,067 source files, v3.201.1)
- **Purpose**: LLM engineering platform — tracing, prompt management, evaluation, datasets. 16k+ GitHub stars.
- **Stack**: TS/Next.js + Python SDK, Postgres + ClickHouse, pnpm monorepo, Helm.
- **Reuse**: `@observe()` decorator on every LLM call. Table-stakes observability.

### 6. AgentCPM  (`AgentCPM/`, THUNLP/ModelBest)
- **Purpose**: Open-source LLM agents — Explore (4B, SOTA on 8 benchmarks), Report (8B, rivals Gemini-2.5-pro). AgentDock tool sandbox, AgentRL training, UltraRAG low-code RAG.
- **Stack**: Python, Docker, vLLM, Milvus.
- **Reuse**: AgentDock as unified tool sandbox; UltraRAG for the retrieval half of any RAG pipeline.

### 7. ponytail  (`ponytail/`, 4.3 MB)
- **Purpose**: Lazy senior dev mode for AI agents — 54% less code, 27% faster, 14 agent integrations.
- **Stack**: Markdown skill files + TypeScript MCP server.
- **Reuse**: Drop into CLAUDE.md/AGENTS.md. Zero infrastructure cost. Already active in this session.

### 8. supermemory  (`supermemory/`, 274 MB, 532 source files)
- **Purpose**: Memory + context engine for AI — #1 on LongMemEval, LoCoMo, ConvoMem.
- **Stack**: TS/Next.js + Python SDK + memory-graph engine + browser extension + Raycast + AI SDK.
- **Reuse**: Long-term memory layer for agents.

## Tier 2 — Buildable with effort

### 9. AgentLoop  (`AgentLoop/`, 286 KB, 21 source files, MIT)
- **Purpose**: Closed-loop LLM decision agent — `decide() → execute() → observe() → update_state()`. 5 fixed actions (search_web, read_url, run_code, write_file, finish).
- **Verified by README**: PyPI as `autonomous-agentloop`. Pydantic v2 schemas. Streamlit demo.
- **Stack**: Python 3.11+, Pydantic, OpenAI SDK.
- **Reuse**: Cleanest decision-loop pattern in the repo. Use as the kernel for Vault OS agents.

### 10. LLM_MapReduce  (`LLM_MapReduce/`, MIT, PyPI: `llm_mapreduce`)
- **Purpose**: Process long documents with any LLM via 3-stage Map→Collapse→Reduce. Training-free, model-agnostic, with structured information protocol + in-context confidence calibration.
- **Verified by README**: Drop-in for OpenAI/HF/custom wrappers. Context-window multiplier.
- **Stack**: Python.
- **Reuse**: Required for any agent that ingests long docs (legal dockets, large codebases, scraped dumps). Antigravity's wild-card pick.

### 11. A-Defection\ECC  (`A-Defection/ECC/`, ~37 skills + Python scripts + integrations)
- **Purpose**: Production skill marketplace — auto-generated SKILL.md from upstream repos, plus hand-written skills (`deep-research`, `eval-harness`, `continuous-learning-v2`, `mcp-server-patterns`, `everything-claude-code`).
- **Verified**: 37 skills in `.agents/skills/`, ~20 Python scripts, `ecc_dashboard.py`, `integrations/aura/`. Antigravity flagged it; it's real and substantial.
- **Stack**: Python + Markdown skills + YAML frontmatter + Makefile generation.
- **Reuse**: Vault OS *could* ship with a curated subset of these skills already installed. The skill generator itself is reusable.

### 12. agentfs  (`agentfs/`, Turso, beta)
- **Purpose**: Filesystem for AI agents — SQLite-backed, audit trails, snapshots, POSIX/FUSE/NFS, multi-language SDKs.
- **Stack**: Rust (CLI, SDK) + TypeScript + Python + SQLite/Turso.
- **Reuse**: Persistent state + audit trail for Vault OS agents. Caveat: Windows-native support is incomplete.

### 13. agent-file  (`agent-file/`, Next.js 16 + React 19 + Letta SDK)
- **Purpose**: Open `.af` standard for serializing stateful agents.
- **Reuse**: Agent portability format. Avoid building a custom serialization scheme.

### 14. suna  (`suna/`, Kortix, v0.9.5, source-available, 8 apps)
- **Purpose**: Multi-agent workforce platform — agents write code, open PRs in isolated sandboxes, 3,000+ MCP integrations.
- **Stack**: TS + Bun + Next.js + Postgres/Supabase + Docker.
- **Reuse**: Sandbox isolation + PR workflow + MCP broker. Complex to deploy; cherry-pick the broker.

### 15. multilogin-automation  (`multilogin-automation/`, v1.9.0, MIT)
- **Purpose**: Python SDK + 120 demo scripts for Multilogin X antidetect browser.
- **Reuse**: `mlx/browser.py` Playwright-CDP context, `mlx/farm.py` bulk orchestration, cookie roundtrip.

### 16. hermes-agent  (`hermes-agent/`)
- **Purpose**: Modular Python agent with domain skills (finance DCF reference).
- **Stack**: Python.
- **Reuse**: Skill plugin architecture pattern.

### 17. agents (Plugin Marketplace)  (`agents/`, 84 plugins / 192 agents / 156 skills / 102 commands)
- **Purpose**: Production plugin marketplace with quality eval framework.
- **Stack**: Makefile-driven generation from Markdown, Python eval.
- **Reuse**: 84 plugin patterns + `plugin-eval/` quality framework.

## Tier 3 — Skills / Prompt libraries (reusable patterns, not standalone projects)
agency-agents, agent-prompts, agentic-system-prompts, awesome-claude-corporate-skills, n8n-skills, openclaw-skills-Lawliet, oh-my-hermes-for-legal-researcher, claude-for-legal-tutorial, claude-legal-skill, opencode-antigravity-multi-auth, last30days-skill, loop-library, ralph-playbook, dotagents, getsentry-dotagents, gstack, agentic-ai-engineering, jcode.

## Tier 4 — Not buildable
- **Build**, **Source**: empty directories.
- **cowork.stuff**: prompt fragments and identity docs only.
- **PROMPTS.md**: 413-line guide on CLAUDE.md/MEMORY.md conventions — reference material, not a project.
- **DocketScraperAPI**: deprecated, redirects to django-docketsearch.
- **Instagram-Hashtag-Scraper**: code is in a `.zip` file in-repo, not in version control; broken README.
- **A-Defection** (parent only, ignoring ECC subdir): narrative/blockchain game — architecture fully documented, implementation is skeleton/stub React + stub AI + template contracts. ECC subdir is the salvageable asset.

## Stack distribution
- Python: ~22 projects (crawlee, AgentCPM, AgentLoop, hermes-agent, headroom, LLM_MapReduce, MASFactory, kameleo, multilogin-automation, A-Defection/ECC, autoresearch, …)
- TypeScript/Node: ~17 (OmniRoute, agent-file, autoresearch, orca, jcode, omniwire, suna, dotagents, open-multi-agent, gstack, ponytail, supermemory, fingerprint-suite, langfuse, …)
- Rust: ~3 (agentfs, OmniRoute native, ponytail MCP)
- Solidity: 1 (A-Defection contracts)
- Go: 1 (OmniRoute MTProxy)

## Theme (independent of other agents)
Two agents agree there's a unified-context gap. My read is sharper: **the gap is not "no unified memory" — it's "no Vault OS loop."** The repo has all the pieces but they don't compose:
- OmniRoute routes LLM calls but doesn't drive an agent loop.
- AgentLoop runs a loop but has no persistent memory and no LLM routing.
- headroom compresses context but isn't wired into either.
- crawlee+fingerprint scrape but aren't tied to a research pipeline.
- ECC has 37 skills but no kernel to load them into.

The opportunity is **composition**, not greenfield build. Pick three composition targets that:
1. Already have working code on disk.
2. Each close a different gap in the loop (gateway / decision / context / data).
3. Are independently shippable in days, not weeks.

## Hermes top-5 candidates (with rationale)

1. **AgentLoop kernel + headroom wrap + OmniRoute gateway** — the smallest viable Vault OS loop. Each piece ships in hours. The missing piece is a thin integration layer (~50 lines) that wires OmniRoute → AgentLoop → headroom on every LLM call.

2. **LLM_MapReduce ingestion pipeline** — drop-in for long-doc agents. Pairs with crawlee-python: scrape → chunk → MapReduce → answer. Independently useful, low integration cost.

3. **ECC skill marketplace extraction** — pull 5-10 of the 37 A-Defection/ECC skills (`deep-research`, `eval-harness`, `continuous-learning-v2`, `mcp-server-patterns`, `agent-introspection-debugging`) into a standalone `vault-skills` package. Saves months of skill authoring.

4. **crawlee-python + fingerprint-suite adapter** — OpenCode's #3. Smaller scope than #1 but standalone-shippable.

5. **headroom standalone deploy** — wrap it as a local MCP server (`headroom proxy`) and add to Vault OS's tool surface. Zero-friction cost-saver.

## What I'd defer
- **suna** — too much multi-service surface for a 3-project budget.
- **A-Defection (parent)** — too much missing code; only worth salvaging `ai/news/newsAnalyzer.js` and `blockchain/contracts/PredictionMarket.sol` if a blockchain/narrative project ever comes up.
- **agentfs** — Turso/FUSE/NFS story doesn't land on Windows.
- **supermemory** — heavy monorepo; defer until we know Vault OS needs long-term memory.

## Reuse candidates (file-level)
- `OmniRoute/src/` provider router + RTK/Caveman compression
- `headroom/headroom/compress.py` + `headroom/proxy/server.py` + MCP server
- `AgentLoop/src/agentloop/core/agent.py` decision loop
- `AgentLoop/src/agentloop/core/schemas.py` Pydantic enforcement
- `crawlee-python/src/crawlee/crawlers/` router pattern
- `fingerprint-suite/packages/fingerprint-injector/` stealth context
- `langfuse/` `@observe()` decorator pattern
- `LLM_MapReduce/src/llm_mapreduce/mapreduce.py` Map→Collapse→Reduce
- `A-Defection/ECC/.agents/skills/` 37 skills (curate subset)
- `multilogin-automation/mlx/browser.py` CDP context manager
- `ponytail/` skill philosophy

## Key conclusions
1. **OmniRoute + headroom + AgentLoop** is the smallest viable Vault OS loop. All three ship independently, all three are production-ready, the integration is ~50 lines.
2. **LLM_MapReduce + crawlee-python** is the data ingestion half of the same loop — independently shippable.
3. **A-Defection\ECC** is a hidden skill marketplace worth extracting. Salvageable without touching the broken parent project.
4. The repo has **no integrated loop** — every "agent" project is a piece. The win is composition, not greenfield.
5. Two corrections to other agents' surveys are material: headroom is more than they credited; A-Defection\ECC is more than they credited.