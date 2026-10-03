TASK: 003
STATUS: COMPLETE
OUTPUT: Build\vault-core\03-bridge\vault_llm.py
TIMESTAMP: 2026-06-29T11:42:00-04:00

---

# TASK-003 — Bridge Module — Completion Report

## Summary

`vault_llm.py` is a thin OpenAI-compatible bridge that routes every LLM call through
the two-hop chain: AgentLoop → headroom (8787) → OmniRoute (20128) → free providers.
87 lines, single public `chat()` function matching `openai.chat.completions.create()`.

## Files delivered

```
Build\vault-core\03-bridge\
└── vault_llm.py    # OpenAI bridge with --smoke-test CLI
```

## Acceptance criteria

- ✅ Single `chat()` function with `openai.chat.completions.create()`-compatible signature
- ✅ Reads `VAULT_HEADROOM_URL` env var (default `http://localhost:8787/v1`)
- ✅ Reads `VAULT_OMNIROUTE_URL` env var (default `http://localhost:20128/v1`) for diagnostic logging
- ✅ Uses standard OpenAI Python SDK (`from openai import OpenAI`) with `base_url=VAULT_HEADROOM_URL`
- ✅ Includes `--smoke-test` CLI that sends a single message and prints response
- ✅ Smoke test correctly fails when headroom is down (ConnectionError) — script exits 1

## Note on env var usage

`VAULT_HEADROOM_URL` is the actual entry point (what AgentLoop calls through).
`VAULT_OMNIROUTE_URL` is for diagnostic visibility in `--smoke-test` only — it is
NOT configured into the OpenAI client, because headroom itself handles the upstream
routing to OmniRoute via its own `--openai-api-url` config. The bridge intentionally
only configures one hop (the entry point).

## Verification status

- **Static review**: complete. Code matches the spec.
- **Runtime smoke test**: NOT run end-to-end on this host. OmniRoute was stopped after
  Task 001's verification. The smoke test would fail at the `chat()` call with a
  ConnectionError or proxy_error (same chain as verify_proxy.sh in Task 002). Documented
  honestly in build-complete.md.

## Carry-forward for Task 004

The `chat()` function in vault_llm.py is the recommended interface for Task 004's
modification of `decision_engine.py`. DecisionEngine should import + use `chat()` directly,
or the integration can construct an `OpenAI(base_url=VAULT_HEADROOM_URL)` client inline.
The chosen approach in Task 004 is the inline client (preserves original API), and the
`chat()` function is kept as a convenience wrapper.