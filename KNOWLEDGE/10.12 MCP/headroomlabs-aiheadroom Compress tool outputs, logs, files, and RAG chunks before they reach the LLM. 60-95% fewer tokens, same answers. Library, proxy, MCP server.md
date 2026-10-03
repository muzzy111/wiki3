---
type: dashboard
cssclasses: [cards]
tags:
  - android
  - sector
  - abstract
  - overview
---
             
     
            
            
          
                  
                  The context compression layer for AI [[agents]]

**60–95% fewer tokens · library · proxy · MCP · 6 algorithms · local-first · reversible**

[![CI](https://github.com/chopratejas/headroom/actions/workflows/ci.yml/badge.svg)](https://github.com/chopratejas/headroom/actions/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/ci.yml) [![codecov](https://camo.githubusercontent.com/7257b87b27bdff62ac7e3c7c35f04359dc702b002f28a60640f319b3d8e41699/68747470733a2f2f636f6465636f762e696f2f67682f63686f70726174656a61732f68656164726f6f6d2f67726170682f62616467652e737667)](https://app.codecov.io/gh/chopratejas/headroom) [![PyPI](https://camo.githubusercontent.com/2226c60bf29b6bf91ed156666fee04cede5dfccfe9de0789092a1b803f3541a1/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f68656164726f6f6d2d61692e737667)](https://pypi.org/project/headroom-ai/) [![npm](https://camo.githubusercontent.com/4c5e73454242efe20d0f65b79e69e8c1d28e58fe2cec6ae1952b0447f2e8bada/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f68656164726f6f6d2d61692e737667)](https://www.npmjs.com/package/headroom-ai) [![Model: Kompress-v2-base](https://camo.githubusercontent.com/2a3a93d81cd3e4beafb051b8337da772aabd82f0962faae51a9cc6c8f5630ab9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d6f64656c2d4b6f6d70726573732d2d76322d2d626173652d79656c6c6f772e737667)](https://huggingface.co/chopratejas/kompress-v2-base) [![License: Apache 2.0](https://camo.githubusercontent.com/b29de0acdfd19013f1f02689b15c933e4a6c145be9efa718288f88ba3280b1c5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d417061636865253230322e302d626c75652e737667)](/headroomlabs-ai/headroom/blob/main/LICENSE) [![Docs](https://camo.githubusercontent.com/5b71c5998edb2f63cb60d78c7fa31f7bafe770d91f82a392043e4141899264e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f63732d6f6e6c696e652d626c75652e737667)](https://headroom-docs.vercel.app/docs)

[Docs](https://headroom-docs.vercel.app/docs) · [Install](#get-started-60-seconds) · [Proof](#proof) · [Agents](#agent-compatibility-matrix) · [Discord](https://discord.gg/yRmaUNpsPJ) · [llms.txt](/headroomlabs-ai/headroom/blob/main/llms.txt) · [Enterprise](/headroomlabs-ai/headroom/blob/main/ENTERPRISE.md)

<sub><b>AI [[agents]] / LLMs:</b> read <a href="/headroomlabs-ai/headroom/blob/main/llms.txt"><code>/llms.txt</code></a> here, or fetch <a href="https://headroom-docs.vercel.app/llms.txt" rel="nofollow">the live index</a> / <a href="https://headroom-docs.vercel.app/llms-full.txt" rel="nofollow">full docs blob</a>.</sub>

---

[![chopratejas%2Fheadroom | Trendshift](https://camo.githubusercontent.com/ebe0ecd0a90398bfa279e3af3e40d10e0e505175616861ff6c266be4e32ecf2d/68747470733a2f2f7472656e6473686966742e696f2f6170692f62616467652f7265706f7369746f726965732f3230383831)](https://trendshift.io/repositories/20881)

Headroom compresses everything your AI agent reads — tool outputs, logs, RAG chunks, files, and conversation history — before it reaches the LLM. Same answers, fraction of the tokens.

 [![Headroom in action](/headroomlabs-ai/headroom/raw/main/HeadroomDemo-Fast.gif)](/headroomlabs-ai/headroom/blob/main/HeadroomDemo-Fast.gif) ![Headroom in action](https://github.com/headroomlabs-ai/headroom/raw/main/HeadroomDemo-Fast.gif)  
<sub>Live: 10,144 → 1,260 tokens — same FATAL found.</sub>

## What it does- **Library** — `compress(messages)` in Python or TypeScript, inline in any app
- **Proxy** — `headroom proxy --port 8787`, zero code changes, any language
- **Agent wrap** — `headroom wrap claude|codex|cursor|aider|copilot` in one command
- **MCP server** — `headroom_compress`, `headroom_retrieve`, `headroom_stats` for any MCP client
- **Cross-agent memory** — shared store across Claude, Codex, Gemini, auto-dedup
- **`headroom learn`** — mines failed sessions, writes corrections to `CLAUDE.md` / `[[AGENTS]].md`
- **Output token reduction** — trims what the model *writes back* (not just what you send): drops ceremony/restated code and skips deep "thinking" on routine steps. See [Output token reduction](#output-token-reduction-cut-what-the-model-writes-back).
- **Reversible (CCR)** — originals are cached for retrieval on demand

## How it works (30 seconds)```
Your agent / app
   (Claude Code, Cursor, Codex, LangChain, Agno, Strands, your own code…)
           prompts · tool outputs · logs · RAG results · files
        
    
      Headroom   (runs locally — your data stays here)  
        
      CacheAligner  →  ContentRouter  →  CCR            
                         SmartCrusher   (JSON)        
                         CodeCompressor (AST)         
                         Kompress-base  (text, HF)    
                                                        
      Cross-agent memory  ·  headroom learn  ·  MCP     
    
           compressed prompt  +  retrieval tool
        
 LLM provider  (Anthropic · OpenAI · Bedrock · …)
```

- **ContentRouter** — detects content type, selects the right compressor
- **SmartCrusher / CodeCompressor / Kompress-base** — compress JSON, AST, or prose
- **CacheAligner** — stabilizes prefixes so provider KV caches actually hit
- **CCR** — stores originals locally; LLM calls `headroom_retrieve` if it needs them

→ [Architecture](https://headroom-docs.vercel.app/docs/architecture) · [CCR reversible compression](https://headroom-docs.vercel.app/docs/ccr) · [Kompress-v2-base model card](https://huggingface.co/chopratejas/kompress-v2-base)

## Get started (60 seconds)# 1 — Install
pip install "headroom-ai\[all\]"          # Python
npm install headroom-ai                 # Node / TypeScript

# 2 — Pick your mode
headroom wrap claude                    # wrap a coding agent
headroom proxy --port 8787              # drop-in proxy, zero code changes
# or: from headroom import compress      # inline library

# 3 — See the savings
headroom perf

Granular extras: `[proxy]`, `[mcp]`, `[ml]`, `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU memory-embedder offload — set `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps`). Requires **Python 3.10+**.

## Proof**Savings on real agent workloads:**

| Workload | Before | After | Savings |
| --- | --- | --- | --- |
| Code search (100 results) | 17,765 | 1,408 | **92%** |
| SRE incident debugging | 65,694 | 5,118 | **92%** |
| GitHub issue triage | 54,174 | 14,761 | **73%** |
| Codebase exploration | 78,502 | 41,254 | **47%** |

**Accuracy preserved on standard benchmarks:**

| Benchmark | Category | N | Baseline | Headroom | Delta |
| --- | --- | --- | --- | --- | --- |
| GSM8K | Math | 100 | 0.870 | 0.870 | **±0.000** |
| TruthfulQA | Factual | 100 | 0.530 | 0.560 | **+0.030** |
| SQuAD v2 | QA | 100 | — | **97%** | 19% compression |
| BFCL | Tools | 100 | — | **97%** | 32% compression |

Reproduce: `python -m headroom.evals suite --tier 1` · [Full benchmarks & methodology](https://headroom-docs.vercel.app/docs/benchmarks)

## Output token reduction (cut what the model writes back)Everything above shrinks the prompt you **send**. But you also pay for every token the model **writes back** — and on Opus-class models output [[costs]] 5× input. A lot of that output is waste: "Great, let me…" preambles, re-printing code you just showed it, and deep "thinking" on routine steps like reading a file.

Headroom can trim that too, from the proxy, without you changing any code:

- **Verbosity steering** — appends a short "be terse, don't restate context" note to the end of the system prompt (so your prompt cache still hits).
- **Effort routing** — when a turn is just the model resuming after a tool result (a file read, a passing test), it dials the model's thinking effort down. New questions and errors keep full effort.

Turn it on:

export HEADROOM\_OUTPUT\_SHAPER=1     # off by default
headroom proxy --port 8787

> **Already running a proxy?** These switches are read *live* on every request, so a proxy that `headroom wrap` **reused** (rather than started) would not see a value you export afterwards — its environment was snapshotted at launch. `headroom wrap` now hot-syncs your current settings to the running proxy via a loopback `POST /admin/runtime-env`, so they take effect immediately with **no restart** (no cold start, no dropped requests, no lost caches). Set them before you `wrap`. On a shared proxy these overrides are global — the last explicit setting wins.

**Learn the right terseness for you.** People don't *say* how terse they want answers — they *show* it (they interrupt long replies, or move on before they could have read them). `headroom learn --verbosity` reads your past sessions and picks the level automatically:

headroom learn --verbosity            # [[preview]] what it found (dry run)
headroom learn --verbosity --apply    # save it; the proxy uses it from now on

**See how many output tokens you saved.** Output savings are *counterfactual* — we never see what the model *would* have written — so Headroom reports an honest **estimate with a confidence range**, never a made-up number:

headroom output-savings
# Reduction: 31.7%  (95% CI 27.7% … 35.7%)   \[estimated\]

Want a *measured* number instead of an estimate? Leave 10% of conversations unshaped as a control group: `export HEADROOM_OUTPUT_HOLDOUT=0.1`. The dashboard shows an **Output Tokens Saved** card next to input compression, labelled `measured` or `estimated` with the confidence band.

→ Full write-up incl. the measurement methodology: [`docs/proposals/output-token-reduction.md`](/headroomlabs-ai/headroom/blob/main/docs/proposals/output-token-reduction.md)

[![Star History Chart](https://camo.githubusercontent.com/e83259a0fca8b5647541d133961066e5c519c60cc1bec9327c1764ee5a61cfaf/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f63686172743f7265706f733d63686f70726174656a61732f68656164726f6f6d26747970653d64617465266c6567656e643d746f702d6c656674)](https://www.star-history.com/?repos=chopratejas%2Fheadroom&type=date&legend=top-left)

## Agent compatibility matrix| Agent | `headroom wrap` | Notes |
| --- | --- | --- |
| Claude Code |  | `--memory` · `--code-graph` |
| Codex |  | shares memory with Claude |
| Cursor |  | prints config — paste once |
| Aider |  | starts proxy + launches |
| Copilot CLI |  | starts proxy + launches |
| OpenClaw |  | installs as ContextEngine plugin |
| Cortex Code |  | 60–65% savings · library mode |

Any OpenAI-compatible client works via `headroom proxy`. MCP-native: `headroom mcp install`.

### GitHub Copilot CLI subscription modeHeadroom can route GitHub Copilot CLI subscription traffic through the local proxy:

headroom copilot-auth login
headroom wrap copilot --subscription -- --model gpt-4o

This lets Headroom intercept OpenAI-compatible Copilot CLI requests and apply the same proxy compression pipeline before forwarding to GitHub Copilot's hosted API. The wrapper exchanges Headroom's reusable GitHub OAuth token for Copilot's short-lived API token and prints the upstream endpoint as `COPILOT_PROVIDER_API_URL=...` during launch.

`headroom copilot-auth login` stores a Headroom-specific Copilot OAuth token. This avoids relying on generic GitHub or Copilot CLI tokens that can read Copilot account metadata but may still be rejected by Copilot's token-exchange endpoint.

For GitHub Enterprise Server or custom-domain Copilot deployments, set the deployment domain before launching:

export GITHUB\_COPILOT\_ENTERPRISE\_DOMAIN=ghe.example.com

For GitHub.com Enterprise Cloud URLs such as `github.com/enterprises/your-enterprise`, do not set an enterprise-domain override. Headroom uses GitHub's normal token-exchange endpoint and the Copilot API endpoint advertised for the signed-in account.

Platform support note: macOS auth reuse via Copilot CLI Keychain storage has been smoke-tested. Windows Credential Manager, Linux Secret Service / `secret-tool`, and Docker/CI token-injection paths are implemented or planned as auth-discovery paths, but still need real OS validation before they should be considered fully vetted. For Docker and CI, prefer passing an explicit `GITHUB_COPILOT_TOKEN` or `GITHUB_COPILOT_GITHUB_TOKEN` rather than relying on host keychain access.

## When to use · When to skip**Great fit if you…**

- run AI coding [[agents]] daily and want savings without changing your code
- work across multiple [[agents]] and want shared memory
- need reversible compression — originals are retrievable via CCR within the configured TTL

**Skip it if you…**

- only use a single provider's native compaction and don't need cross-agent memory
- work in a sandboxed environment where local processes can't run
**Integrations — drop Headroom into any stack**

| Your [[setup]] | Hook in with |
| --- | --- |
| Any Python app | `compress(messages, model=…)` |
| Any TypeScript app | `await compress(messages, { model })` |
| Anthropic / OpenAI SDK | `withHeadroom(new Anthropic())` · `withHeadroom(new OpenAI())` |
| Vercel AI SDK | `wrapLanguageModel({ model, middleware: headroomMiddleware() })` |
| LiteLLM | `litellm.callbacks = [HeadroomCallback()]` |
| LangChain | `HeadroomChatModel(your_llm)` |
| Agno | `HeadroomAgnoModel(your_model)` |
| Strands | [Strands guide](https://headroom-docs.vercel.app/docs/strands) |
| ASGI apps | `app.add_middleware(CompressionMiddleware)` |
| Multi-agent | `SharedContext().put / .get` |
| MCP clients | `headroom mcp install` |

**What's inside**
- **SmartCrusher** — universal JSON: arrays of dicts, nested objects, mixed types.
- **CodeCompressor** — AST-aware for Python, JS, Go, Rust, Java, C++.
- **Kompress-base** — our HuggingFace model, trained on agentic traces.
- **Image compression** — 40–90% reduction via trained ML router.
- **CacheAligner** — stabilizes prefixes so Anthropic/OpenAI KV caches actually hit.
- **IntelligentContext** — score-based context fitting with learned importance.
- **CCR** — reversible compression; LLM retrieves originals on demand.
- **Cross-agent memory** — shared store, agent provenance, auto-dedup.
- **SharedContext** — compressed context passing across multi-agent [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].
- **`headroom learn`** — plugin-based failure mining for Claude, Codex, Gemini.
**Pipeline internals**

Headroom exposes one stable request lifecycle across `compress()`, the SDK, and the proxy:

`[[Setup]]` → `Pre-Start` → `Post-Start` → `Input Received` → `Input Cached` → `Input Routed` → `Input Compressed` → `Input Remembered` → `Pre-Send` → `Post-Send` → `Response Received`

- **Transforms** do the work: CacheAligner, ContentRouter, SmartCrusher, CodeCompressor, Kompress-base, IntelligentContext / RollingWindow.
- **Pipeline extensions** observe or customize lifecycle stages via `on_pipeline_event(...)`.
- **Compression hooks** sit alongside the canonical lifecycle as an additional extension seam.
- **Proxy extensions** remain the server/app [[integration]] seam for ASGI middleware, routes, and startup policy.

Provider and tool-specific behavior lives under `headroom/providers/` so core orchestration stays focused on lifecycle, sequencing, and policy.

- **CLI/tool slices**: `headroom/providers/claude`, `copilot`, `codex`, `openclaw`
- **Provider runtime slices**: `headroom/providers/claude`, `gemini`, plus shared backend/runtime dispatch in `headroom/providers/registry.py`
- **Core files stay orchestration-first**: `wrap.py`, `client.py`, `cli/proxy.py`, and `proxy/server.py` delegate provider-specific env shaping, API target normalization, backend selection, and transport dispatch.

## Installpip install "headroom-ai\[all\]"          # Python, everything
npm install headroom-ai                 # TypeScript / Node
docker pull ghcr.io/chopratejas/headroom:latest

Granular extras: `[proxy]`, `[mcp]`, `[ml]` (Kompress-base), `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU memory-embedder offload — set `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps`). Requires **Python 3.10+**.

Using `pipx`? Choose a supported interpreter explicitly:

pipx install --python python3.13 "headroom-ai\[all\]"

→ [Installation guide](https://headroom-docs.vercel.app/docs/installation) — Docker tags, persistent service, PowerShell, devcontainers.

### Updatingheadroom [[update]]          # detects pip / pipx / uv tool and upgrades in place
headroom [[update]] --check  # [[[[report]]]] the latest release without upgrading
headroom [[update]] --pre    # include pre-releases

`headroom [[update]]` figures out how Headroom was installed (pip/venv, `pip --user`, pipx, uv tool) and runs the matching upgrade across macOS, Linux, and Windows. For git checkouts, editable installs, Docker images, and externally-managed system Pythons (PEP 668) it prints the correct manual step instead of guessing.

The proxy also shows a one-line "[[update]] available" notice on startup. It checks PyPI at most once a day, in the background, and never blocks. Opt out with `HEADROOM_UPDATE_CHECK=off` (also skipped in `--stateless` mode and CI).

### Corporate / SSL-inspection environmentsIf `pip install "headroom-ai[all]"` fails with `CERTIFICATE_VERIFY_FAILED` (`unable to get local issuer certificate`), your network uses **SSL inspection** — a MITM proxy presenting a company-issued CA. The build backend (`maturin`) downloads `rustup` over a connection your TLS stack doesn't trust. **Install Rust first** so the build doesn't fetch it:

# macOS / Linux
curl --proto '\=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && rustup default stable
# Windows
winget install Rustlang.Rustup && rustup default stable

Restart your shell, then `pip install "headroom-ai[all]"`. A prebuilt wheel avoids the Rust build entirely where available: `pip install --only-binary headroom-ai headroom-ai`.

Two runtime assets are fetched over TLS; if they are blocked, trust your corporate CA via `REQUESTS_CA_BUNDLE` / `SSL_CERT_FILE` / `CURL_CA_BUNDLE`:

- **`cdn.pyke.io`** — the ONNX Runtime for the Rust core. Alternatively pre-provide it with `ORT_STRATEGY=system` and `ORT_LIB_LOCATION=/path/to/onnxruntime`.
- **`huggingface.co`** — the `kompress-base` compression model. Pre-download it and run with `HF_HUB_OFFLINE=1`, or set `HF_ENDPOINT` to a trusted mirror.

Running with compression disabled (pure gateway) requires neither asset.

## headroom learn [![headroom learn in action](/headroomlabs-ai/headroom/raw/main/headroom_learn.gif)](/headroomlabs-ai/headroom/blob/main/headroom_learn.gif) ![headroom learn in action](https://github.com/headroomlabs-ai/headroom/raw/main/headroom_learn.gif)`headroom learn` — mines failed sessions, writes corrections to `CLAUDE.md` / `[[AGENTS]].md` / `GEMINI.md`.

## Documentation| Start here | Go deeper |
| --- | --- |
| [Quickstart](https://headroom-docs.vercel.app/docs/quickstart) | [Architecture](https://headroom-docs.vercel.app/docs/architecture) |
| [Proxy](https://headroom-docs.vercel.app/docs/proxy) | [How compression works](https://headroom-docs.vercel.app/docs/how-compression-works) |
| [MCP tools](https://headroom-docs.vercel.app/docs/mcp) | [CCR — reversible compression](https://headroom-docs.vercel.app/docs/ccr) |
| [Memory](https://headroom-docs.vercel.app/docs/memory) | [Cache optimization](https://headroom-docs.vercel.app/docs/cache-optimization) |
| [Failure learning](https://headroom-docs.vercel.app/docs/failure-learning) | [Benchmarks](https://headroom-docs.vercel.app/docs/benchmarks) |
| [Configuration](https://headroom-docs.vercel.app/docs/configuration) | [Limitations](https://headroom-docs.vercel.app/docs/limitations) |

## Compared toHeadroom runs **locally**, covers **every** content type, works with every major framework, and is **reversible**.

|  | Scope | Deploy | Local | Reversible |
| --- | --- | --- | --- | --- |
| **Headroom** | All context — tools, RAG, logs, files, history | Proxy · library · middleware · MCP | Yes | Yes |
| [RTK](https://github.com/rtk-ai/rtk) | CLI command outputs | CLI wrapper | Yes | No |
| [lean-ctx](https://github.com/yvgude/lean-ctx) | CLI commands, MCP tools, editor rules | CLI wrapper · MCP | Yes | No |
| [Compresr](https://compresr.ai), [Token Co.](https://thetokencompany.ai) | Text sent to their API | Hosted API call | No | No |
| OpenAI Compaction | Conversation history | Provider-native | No | No |

> **Attribution.** Headroom ships with the excellent [RTK](https://github.com/rtk-ai/rtk) binary for shell-output rewriting — `git show --short`, scoped `ls`, summarized installers. Huge thanks to the RTK team; their tool is a first-class part of our stack, and Headroom compresses everything downstream of it. Headroom can also use [lean-ctx](https://github.com/yvgude/lean-ctx) as the selected CLI context tool; set `HEADROOM_CONTEXT_TOOL=lean-ctx` before running `headroom wrap ...`.

## Contributinggit clone https://github.com/chopratejas/headroom.git && cd headroom
uv sync --extra dev && uv run pytest

Devcontainers in `.devcontainer/` (default + `memory-stack` with Qdrant & Neo4j). See [CONTRIBUTING.md](/headroomlabs-ai/headroom/blob/main/CONTRIBUTING.md).

## Community- **[Discord](https://discord.gg/yRmaUNpsPJ)** — questions, feedback, war stories.
- **[Kompress-v2-base on HuggingFace](https://huggingface.co/chopratejas/kompress-v2-base)** — the model behind our text compression.

## License