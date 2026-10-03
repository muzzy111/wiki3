AGENT: Hermes
PHASE: Build Decomposition (Project 1 — vault-core)
TIMESTAMP: 2026-06-29T10:30:00-04:00

---

# Build Task List — Project 1: vault-core

Reference plan: `Chat\hermes-final-decision.md` (Project 1 section, lines 18-36 and Build Plan lines 130-149).

## Architecture summary

```
AgentLoop (decision loop, Python OpenAI SDK)
    │
    │  uses OPENAI_BASE_URL=http://localhost:8787
    ▼
headroom proxy  (port 8787, OpenAI-compatible, token compression 60-95%)
    │
    │  uses OPENAI_BASE_URL=http://localhost:20128/v1
    ▼
OmniRoute gateway  (port 20128, 231 providers, free-tier routing)
    │
    ▼
Free LLM providers (OpenRouter free, Groq, Gemini, etc.)
```

The bridge is **two `OPENAI_BASE_URL` env vars** in AgentLoop. No protocol conversion needed because all three are OpenAI-API-compatible.

## Source-code map (verified)

- **AgentLoop**: `Source\AgentLoop - Copy\`
  - Decision engine (LLM call site): `src/agentloop/llm/decision_engine.py` — uses `from openai import OpenAI` at line 11, `self.client = OpenAI(api_key=...)` at line 34. Does **not** currently pass `base_url` — that's task-004 work.
  - Entry point: `src/agentloop/main.py`, `main.py` (root).
  - Schemas: `src/agentloop/core/schemas.py` (Pydantic v2).
  - Actions: `src/agentloop/actions/executor.py` (5 fixed actions).

- **headroom**: `Source\headroom\`
  - Python lib entry: `headroom/cli.py` → `headroom.cli.main`.
  - Proxy server: `headroom/proxy/server.py` — `python -m headroom.proxy.server` listens on **port 8787** by default.
  - Compress function: `headroom/compress.py`.
  - Docker Compose: `Source\headroom\docker-compose.yml` (optional; proxy can run via Python).
  - pyproject: `Source\headroom\pyproject.toml`.

- **OmniRoute**: `Source\OmniRoute - Copy\`
  - Docker Compose: `docker-compose.yml` — `docker compose --profile base up -d` starts the gateway on **port 20128** (dashboard) / **20129** (API).
  - `.env.example`: copy to `.env`, set `JWT_SECRET` + `API_KEY_SECRET` + `INITIAL_PASSWORD`.
  - CLI: `bin/cli/` — provider config commands.
  - MCP server: `bin/mcp-server.mjs` (not needed for vault-core).

## Tasks (5 total)

### TASK-001 — Stand up OmniRoute gateway locally
Verify OmniRoute runs in Docker, completes first-run setup, exposes its OpenAI-compatible API, and successfully proxies a test completion to at least one free provider.

- **Output**: `Build\vault-core\01-omniroute-deploy\`
  - `.env` (copy of `.env.example` with secrets generated)
  - `docker-compose.override.yml` (pin to `base` profile, port 20128)
  - `README.md` (run instructions + verification commands)
  - `verify.log` (captured output of a successful test completion through the gateway)
- **Dependencies**: NONE
- **Acceptance**: A test `curl` to `http://localhost:20128/v1/chat/completions` returns a non-error response. The `verify.log` proves it.

### TASK-002 — Stand up headroom proxy and verify token compression
Install headroom Python package, run the proxy server on port 8787, and verify it compresses a multi-turn conversation measurably (≥40% token reduction on a representative sample).

- **Output**: `Build\vault-core\02-headroom-proxy\`
  - `verify_compress.py` (runs `compress()` on a sample conversation, prints before/after token counts)
  - `verify_proxy.sh` (starts `python -m headroom.proxy.server`, runs a test completion through `http://localhost:8787`, captures output)
  - `compression_results.json` (before/after token counts + reduction %)
  - `proxy.log` (proxy server output during verification)
- **Dependencies**: NONE (can run in parallel with TASK-001)
- **Acceptance**: `compression_results.json` shows ≥40% token reduction on the sample. `proxy.log` shows a successful test completion.

### TASK-003 — Build the LLM bridge module
Write `vault_llm.py`, a thin Python module that wraps any OpenAI-compatible call so it transparently routes through headroom (compression) and then OmniRoute (provider routing). Exposes a single `chat()` function with the same signature as `openai.chat.completions.create()`.

- **Output**: `Build\vault-core\03-bridge\vault_llm.py`
  - Module with `chat(messages, model=None, temperature=0.7, ...)` function.
  - Reads `VAULT_HEADROOM_URL` (default `http://localhost:8787/v1`) and `VAULT_OMNIROUTE_URL` (default `http://localhost:20128/v1`) from env.
  - Uses `OPENAI_SDK_COMPAT` mode: imports `openai` SDK, constructs `OpenAI(base_url=VAULT_HEADROOM_URL, api_key="vault-bridge")`.
  - Includes docstring explaining the two-hop chain.
  - Includes a `__main__` block with a `--smoke-test` flag that sends one message through and prints the response.
- **Dependencies**: TASK-001 (needs OmniRoute running), TASK-002 (needs headroom running)
- **Acceptance**: `python vault_llm.py --smoke-test` exits 0 and prints a model response. The response actually transits headroom → OmniRoute → provider (verifiable via headroom proxy logs showing the request).

### TASK-004 — Integrate bridge into AgentLoop
Modify `Source\AgentLoop - Copy\src\agentloop\llm\decision_engine.py` to use the vault-core bridge instead of constructing its own `OpenAI()` client. Goal: zero API-key setup needed for vault-core users — just point AgentLoop at the local gateway.

- **Output**: `Build\vault-core\04-loop-integration\`
  - `decision_engine.py` — modified copy with vault-core bridge wired in. Should read `VAULT_HEADROOM_URL` and `VAULT_OMNIROUTE_URL` (or fall back to direct OpenAI if env vars are absent, preserving original behavior).
  - `verify_loop.py` — runs an end-to-end AgentLoop task (e.g. "Calculate first 5 Fibonacci numbers and save to file") using the bridge, prints agent's actions and final result.
  - `run.log` — captured output of the end-to-end run.
- **Dependencies**: TASK-003
- **Acceptance**: `verify_loop.py` runs an AgentLoop task to completion via the bridge. `run.log` shows the agent executing actions and finishing. Token savings vs. direct-OpenAI baseline documented in the log header.

### TASK-005 — CLI wrapper and Docker Compose
Create a single-command entry point: `vault-core run "<task>"` that starts all three services if not running, then executes the AgentLoop task. Wrap everything in one `docker-compose.yml` at the vault-core project root.

- **Output**: `Build\vault-core\05-cli\`
  - `docker-compose.yml` — three services: `omniroute` (port 20128), `headroom` (port 8787), `agent` (the runner). The `agent` service has vault-core + AgentLoop + bridge mounted in.
  - `vault-core` (bash script, chmod +x) — `vault-core start | stop | run "<task>" | status` commands.
  - `vault-core.ps1` — Windows PowerShell equivalent (since we're on Windows).
  - `README.md` — quickstart for `vault-core run "..."` end-to-end.
- **Dependencies**: TASK-004
- **Acceptance**: From a clean clone, `vault-core run "List the files in the current directory"` produces a working agent run with all three services up.

## Sequencing rules

- Issue TASK-001 and TASK-002 together (no dependencies, parallelizable).
- Issue TASK-003 only after BOTH 001 and 002 complete.
- Issue TASK-004 after TASK-003.
- Issue TASK-005 after TASK-004.
- After TASK-003 completes, call Antigravity CHECKPOINT 1 (architecture review).
- After TASK-004 completes, call Antigravity CHECKPOINT 2 (integration review).
- After TASK-005 completes, call Antigravity CHECKPOINT 3 (full QA).

## Files referenced (absolute paths)

- `C:\Users\Admin\Documents\GitHub\Source\AgentLoop - Copy\src\agentloop\llm\decision_engine.py`
- `C:\Users\Admin\Documents\GitHub\Source\AgentLoop - Copy\src\agentloop\main.py`
- `C:\Users\Admin\Documents\GitHub\Source\AgentLoop - Copy\main.py`
- `C:\Users\Admin\Documents\GitHub\Source\headroom\headroom\cli.py`
- `C:\Users\Admin\Documents\GitHub\Source\headroom\headroom\proxy\server.py`
- `C:\Users\Admin\Documents\GitHub\Source\headroom\headroom\compress.py`
- `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\docker-compose.yml`
- `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\.env.example`
- `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\bin\omniroute.mjs`
- `C:\Users\Admin\Documents\GitHub\Chat\hermes-final-decision.md`