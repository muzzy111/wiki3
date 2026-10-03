---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault OS Core Loop Architecture

The vault-core project wires three existing production-grade projects into a single LLM proxy chain: [[AgentLoop]] → headroom (compression) → [[OmniRoute]] (gateway) → free LLM providers. ~50 lines of glue over three external projects. This is the architectural [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] for the rest of Vault OS — composition over greenfield build.

## The chain

```
┌─────────────────────────────────────────┐
│  AgentLoop (decision loop)              │
│  Source\AgentLoop - Copy\               │
│  modified: DecisionEngine accepts       │
│  base_url, falls back to env var        │
│  VAULT_HEADROOM_URL                     │
└────────────────┬────────────────────────┘
                 │ OpenAI-compatible chat completions
                 │ OPENAI_BASE_URL=http://localhost:8787/v1
                 ▼
┌─────────────────────────────────────────┐
│  headroom proxy                         │
│  port 8787                              │
│  Source\headroom\                       │
│  upstream: OmniRoute (configured by     │
│  --openai-api-url at startup)           │
│  compression: passthrough (Rust absent) │
│  token savings deferred                 │
└────────────────┬────────────────────────┘
                 │ OpenAI-compatible chat completions
                 │ OPENAI_TARGET_API_URL=http://localhost:20128/v1
                 ▼
┌─────────────────────────────────────────┐
│  OmniRoute gateway                      │
│  port 20128                             │
│  Source\OmniRoute - Copy\               │
│  231 providers, 50+ free tiers          │
│  RTK + Caveman compression              │
│  (its own second compression layer)     │
└────────────────┬────────────────────────┘
                 │ provider-specific API calls
                 ▼
        Free LLM providers
        (OpenRouter, Groq, Gemini, etc.)
```

## Why this composition wins

The repo (`C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\` — moved from `C:\Users\Admin\Documents\GitHub\` at session close 2026-06-29) has 60+ projects. Three of them are production-grade with active maintainers:

| Project | Role | [[Status]] |
|---------|------|--------|
| [[OmniRoute]] | LLM gateway, 231 providers | Docker Compose deploys cleanly (verified 13-min build) |
| headroom | Token compression proxy | Python 3.11 venv install, needs Rust for full features |
| [[AgentLoop]] | Decision loop agent | Pure Python, easy to extend |

Each piece does one job well. The vault-core glue is just `OPENAI_BASE_URL` redirection through three OpenAI-compatible endpoints. **No protocol conversion, no custom serialization, no custom auth.**

## Implementation locations

```
Source\
├── AgentLoop - Copy\src\agentloop\llm\decision_engine.py    (modified → Build/04)
├── headroom\headroom\proxy\server.py                        (used as-is)
└── OmniRoute - Copy\docker-compose.yml                      (base profile, used as-is)

Build\vault-core\
├── 03-bridge\vault_llm.py                  # thin chat() wrapper
├── 04-loop-integration\decision_engine.py  # vault-core aware variant
└── 05-cli\
    ├── docker-compose.yml                  # 3-service compose
    ├── vault-core                          # bash wrapper
    └── vault-core.ps1                      # PowerShell wrapper
```

## The 2 compression layers

[[OmniRoute]] has its own RTK + Caveman compression (15-95% token savings at the gateway level). headroom would add 60-95% additional compression at the proxy level. **Two compression layers stacked** would yield multiplicative savings — but this requires Rust for headroom's pipeline. With headroom in passthrough mode, only [[OmniRoute]]'s compression is active.

## Key technical decisions

- **`base_url` over custom transport**: the OpenAI Python SDK already supports `base_url` for OpenAI-compatible upstreams. No need for a custom HTTP client.
- **Env var over hardcoded URLs**: `VAULT_HEADROOM_URL` and `VAULT_OMNIROUTE_URL` allow the same code to run in different deployments (local Docker, Kubernetes, cloud).
- **Bridge module separately importable**: `vault_llm.py` exposes `chat()` for ad-hoc use. The [[AgentLoop]] [[integration]] uses inline `OpenAI(base_url=...)` for tighter coupling.
- **Source unmodified**: vault-core lives in `Build\`, not `Source\`. [[AgentLoop]] users who don't want vault-core keep their pristine Source tree.

## Honest limitations

1. **End-to-end runtime not exercised** during the build session. User paused Docker compose-up operations after the [[OmniRoute]] build verification. Each task has individual verification; the chain is correct but unexercised.
2. **headroom compression is passthrough** (Rust toolchain missing on build host). 60-95% token savings deferred.
3. **Source [[AgentLoop]] doesn't auto-pick up `VAULT_HEADROOM_URL`**: the docker-compose's `agent` service doesn't wire the env into DecisionEngine. The CLI wrappers (`vault-core run <goal>`) do this inline. v2 should auto-wire via volume mount or PYTHONPATH injection.

## Reference

- `Chat\hermes-final-decision.md` — the plan that selected this architecture
- `Chat\build-complete.md` — final [[integration]] [[[[report]]]]
- `Build\vault-core\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` — top-level [[integration]] guide
- Source projects: `Source\[[AgentLoop]] - Copy\`, `Source\headroom\`, `Source\[[OmniRoute]] - Copy\` (all now under `C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\Source\` after the session-close move)
- Related: [[Headroom Proxy Upstream Configuration]] — the gotcha this architecture depends on

## Related

- [[Multi-Agent Orchestrator Identity File Pattern]] — coordination pattern used to build this
- [[Agent Delegation Fallback When Primary Session Goes Idle]] — recovery pattern used during the build
- [[Headroom Proxy Upstream Configuration]] — non-obvious config detail
- [[RAW/2026-06-29 vault-os-build session]] — full session journal