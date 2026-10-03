---
type: dashboard
cssclasses: [cards]
tags:
  - android
  - sector
  - abstract
  - overview
---
![Open Multi-Agent](https://raw.githubusercontent.com/open-multi-agent/open-multi-agent/main/.github/brand/logo-mark-light.svg)

  

# Open Multi-Agent**From a goal to a task DAG, automatically.**  
TypeScript-native multi-agent orchestration.

[![npm version](https://camo.githubusercontent.com/fc1a24f4ec14068b64da236ec3375ec3ce08400e52931f3b175d6bfde128cea9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406f70656e2d6d756c74692d6167656e742f636f7265)](https://www.npmjs.com/package/@open-multi-agent/core) [![CI](https://github.com/open-multi-agent/open-multi-agent/actions/workflows/ci.yml/badge.svg)](https://github.com/open-multi-agent/open-multi-agent/actions/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/ci.yml) [![MIT License](https://camo.githubusercontent.com/f8df3091bbe1149f398a5369b2c39e896766f9f6efba3477c63e9b4aa940ef14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e)](/open-multi-agent/open-multi-agent/blob/main/LICENSE) [![TypeScript](https://camo.githubusercontent.com/dabb131dac521406a33ecd07ce0d80766f347eb67a80ce2a4f115fafbbbbda4d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d352e362d626c7565)](https://www.typescriptlang.org/) [![codecov](https://camo.githubusercontent.com/7bcfee47b0fffd2ff7fdbcaa3dc2cc35fd5e2969bddcfd0634cf36a92cd02243/68747470733a2f2f636f6465636f762e696f2f67682f6f70656e2d6d756c74692d6167656e742f6f70656e2d6d756c74692d6167656e742f67726170682f62616467652e737667)](https://codecov.io/gh/open-multi-agent/open-multi-agent) [![GitHub stars](https://camo.githubusercontent.com/defd37ead0ca1b3145d6680cd2fa92ec53a655bdde8bf6600c5c60521b243a9f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f70656e2d6d756c74692d6167656e742f6f70656e2d6d756c74692d6167656e74)](https://github.com/open-multi-agent/open-multi-agent/stargazers) [![GitHub forks](https://camo.githubusercontent.com/562c9d77ff9d5e512f5a3091aa74ed6416c878e599ac76be20b194d1afbba305/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f666f726b732f6f70656e2d6d756c74692d6167656e742f6f70656e2d6d756c74692d6167656e74)](https://github.com/open-multi-agent/open-multi-agent/network/members)

 [![Post-run dashboard replaying a completed team run: task DAG with per-node assignee, status, token breakdown, and agent output log](https://raw.githubusercontent.com/open-multi-agent/open-multi-agent/main/.github/brand/demo-dashboard-hero.gif)](https://raw.githubusercontent.com/open-multi-agent/open-multi-agent/main/.github/brand/demo-[[dashboard]]-hero.gif) ![Post-run dashboard replaying a completed team run: task DAG with per-node assignee, status, token breakdown, and agent output log](https://raw.githubusercontent.com/open-multi-agent/open-multi-agent/main/.github/brand/demo-dashboard-hero.gif)  

**English** · [](/open-multi-agent/open-multi-agent/blob/main/README_zh.md)

  

`open-multi-agent` is a multi-agent orchestration framework for TypeScript backends. Give it a goal; a coordinator agent decomposes it into a task DAG, parallelizes independents, and synthesizes the result. Drops into any Node.js backend.

> **Your engineers describe the goal, not the graph.**

Graph-first frameworks make you enumerate every node and edge up front. Here the task DAG is built at runtime, so it adapts to the goal instead of being hand-wired for one.

`@open-multi-agent/core` keeps a lightweight core. The orchestration engine plus the mainstream model providers (Anthropic, OpenAI, and any OpenAI-compatible endpoint) work out of the box; additional providers (Gemini, Bedrock), MCP, and the Vercel AI SDK bridge are opt-in peer dependencies you install only when you use them.

## Get startedOne command scaffolds a project and starts a multi-agent DAG:

npm create oma-app@latest

Answer one prompt; the first run shows the coordinator turn one goal into a multi-agent DAG and opens a [[dashboard]] of the run (OpenAI or any OpenAI-compatible provider). To add the library to your own project:

npm install @open-multi-agent/core

The full [[quickstart]], the three ways to run, provider [[setup]], the production checklist, and the complete API reference live on the package page:

**→ [`packages/core/README.md`](/open-multi-agent/open-multi-agent/blob/main/packages/core/README.md)**

Other ways to run: clone the repo and run any [example](/open-multi-agent/open-multi-agent/blob/main/packages/core/examples) with `npx tsx packages/core/examples/basics/team-collaboration.ts`, or embed OMA in a real backend with the [Express](/open-multi-agent/open-multi-agent/blob/main/packages/core/examples/integrations/express-customer-support) and [Next.js](/open-multi-agent/open-multi-agent/blob/main/packages/core/examples/integrations/with-vercel-ai-sdk) apps. To skip local [[setup]], the [Next.js starter](https://github.com/open-multi-agent/oma-nextjs-starter) deploys to Vercel in one click; local models via [Ollama](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/providers.md) need no API key.

## How is this different from X?Most TypeScript teams picking a multi-agent layer are really choosing between OMA, LangGraph JS, and Mastra. The mechanism is what differs.

**vs. LangGraph JS.** LangGraph has you design a declarative graph (nodes, edges, conditional routing) up front, then compiles it into an invokable; OMA's Coordinator decomposes the goal into a task DAG at runtime and auto-parallelizes independents. Both checkpoint and resume, though LangGraph's persistence ecosystem runs deeper. Reach for OMA when the plan should adapt to the goal instead of being wired ahead of time.

**vs. Mastra.** Both are TypeScript-native; the difference is who drives orchestration. Mastra has you wire the workflow by hand. OMA is goal-driven: hand its Coordinator a goal and it builds the task DAG at runtime. `runTeam(team, goal)` in one call.

**vs. CrewAI.** CrewAI is the established multi-agent option in Python. OMA brings goal-driven decomposition to TypeScript backends with a lean runtime (three core dependencies, plus opt-in peers you install only when you use them) and direct Node.js embedding, with no separate Python service to stand up alongside your stack.

**vs. Vercel AI SDK.** AI SDK is the LLM-call layer (provider abstraction, streaming, tool calls, and structured outputs), not a multi-agent orchestrator. Use it alone for single-agent calls; reach for OMA the moment you need a coordinated team. OMA even ships an optional AI SDK bridge.

## Ecosystem`open-multi-agent` launched 2026-04-01 under MIT. Known users and integrations to date:

**Built with OMA**

- **[temodar-agent](https://github.com/xeloxa/temodar-agent)** (~60 stars). WordPress security analysis platform by [Ali Sünbül](https://github.com/xeloxa). Uses our built-in tools (`bash`, `file_*`, `grep`) directly inside a Docker runtime. Confirmed production use.
- **[PR-Copilot](https://github.com/kidoom/PR-Copilot)**. AI pull-request [[review]] assistant by [kidoom](https://github.com/kidoom). Runs an OMA [[review]] team (coordinator + scoped reviewer [[agents]]), defines repo-context tools with `defineTool`, and adds a custom `ContextStrategy` for token-aware PR-diff compression. Public code on `@open-multi-agent/core`.
- **[StuFlow](https://github.com/znc15/StuFlow)** by [znc15](https://github.com/znc15). Terminal AI coding assistant on OMA's orchestration core: builds a team and drives it through `runAgent` / `runTasks` / `runTeam` with a custom `RunTeamOptions` coordinator, paired with DeepSeek. Public code on `@open-multi-agent/core`.

**Integrations**

- **[Engram](https://www.engram-memory.com)** — "Git for AI memory." Syncs knowledge across [[agents]] instantly and flags conflicts. ([repo](https://github.com/Agentscreator/engram-memory))
- **[@agentsonar/oma](https://github.com/agentsonar/agentsonar-oma)** — Sidecar detecting cross-run delegation cycles, repetition, and rate bursts.
- **[CodingScaffold](https://github.com/JRS1986/CodingScaffold)** — Agentic-coding scaffold that lists OMA as an optional orchestration backend, with a `runTeam` workflow [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].

**Provider community offers** — limited-time, not paid endorsements.

- **[MiniMax](https://platform.minimax.io/subscribe/coding-plan?code=6ZoOY13DDV&source=link)** — Use MiniMax M3 in OMA's TypeScript multi-agent [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]. OMA users get 12% off the MiniMax Token Plan until 2026-06-30. See the [MiniMax setup guide](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/providers/minimax.md).

Using `open-multi-agent` in production or a side project? [Open a discussion](https://github.com/open-multi-agent/open-multi-agent/discussions) and we will list it here. For a deep [[integration]], see the [Featured partner program](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/featured-partner.md).

## RepositoryThis is a monorepo. The published package is **`@open-multi-agent/core`**, and it lives in [`packages/core/`](/open-multi-agent/open-multi-agent/blob/main/packages/core) — the source of truth for the library, its tests, examples, and the npm package page.

```
open-multi-agent/
 packages/
    core/          # @open-multi-agent/core — the published library
        src/       # framework source
        tests/     # vitest suite
        examples/  # runnable examples (npx tsx packages/core/examples/<path>.ts)
 docs/              # subsystem documentation
```

Build, lint, and test orchestrate across the workspace from the repo root:

npm install            # install all workspaces
npm run build          # compile packages/core
npm run lint           # type-check
npm test               # run the test suite

## Documentation- [Providers](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/providers.md) — env vars, model examples, local tool-calling, timeouts, troubleshooting.
- [Tool configuration](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/tool-configuration.md) — tool presets, custom tools, the filesystem sandbox, and MCP.
- [Observability](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/observability.md) — `onProgress` events, `onTrace` spans, and the post-run [[dashboard]].
- [Shared memory](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/shared-memory.md) — the default store and custom `MemoryStore` backends.
- [Checkpoint & resume](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/checkpoint.md) — opt-in per-run snapshot/resume over any `MemoryStore`; survive crashes and restarts.
- [Context management](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/context-management.md) — sliding window, summarization, compaction, and custom compressors.
- [CLI](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/cli.md) — the JSON-first `oma` binary for shell and CI.
- [Consensus](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/consensus.md) — the `runConsensus` proposer→judge primitive, the per-task `verify` hook, and the budget invariant.
- [Model routing](https://github.com/open-multi-agent/open-multi-agent/blob/main/docs/model-routing.md) — the opt-in `modelRouting` policy: match by phase / agent / role / priority / leaf, first match wins.