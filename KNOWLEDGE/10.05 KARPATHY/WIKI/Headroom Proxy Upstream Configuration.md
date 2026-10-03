---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Headroom Proxy Upstream Configuration

The headroom-ai proxy uses `OPENAI_TARGET_API_URL` (env var) or `--openai-api-url` (CLI flag) for its upstream — NOT `OPENAI_BASE_URL`, which is what the OpenAI Python SDK uses. This is a non-obvious gotcha that [[costs]] time to discover.

## The gotcha

If you set `OPENAI_BASE_URL` and start `python -m headroom.proxy.server`, the proxy forwards to `https://api.openai.com` (the hardcoded default). Setting `OPENAI_BASE_URL` does nothing for headroom.

```bash
# WRONG — OpenAI SDK convention, but ignored by headroom
export OPENAI_BASE_URL=http://localhost:20128/v1
python -m headroom.proxy.server --port 8787
# → forwards to api.openai.com, fails with "you didn't provide an API key"

# RIGHT — headroom's own config
export OPENAI_TARGET_API_URL=http://localhost:20128/v1
python -m headroom.proxy.server --port 8787
# → forwards to localhost:20128

# ALSO RIGHT — explicit CLI flag
python -m headroom.proxy.server --port 8787 --openai-api-url http://localhost:20128/v1
```

## Why two env vars?

The two env vars serve different layers:
- `OPENAI_BASE_URL` — read by the **OpenAI Python SDK client** when it constructs requests. This is what your application code uses.
- `OPENAI_TARGET_API_URL` — read by **headroom itself** as the upstream to forward to after compression.

In a two-hop chain like vault-core ([[AgentLoop]] → headroom → [[OmniRoute]]), you set both:
- [[AgentLoop]]'s OpenAI client: `OPENAI_BASE_URL=http://localhost:8787/v1` (points at headroom)
- headroom's server: `--openai-api-url http://localhost:20128/v1` (points at [[OmniRoute]])

## How to discover the right env var

For any proxy server, read the source for `os.environ.get(...)` patterns and grep for "api_url" or "target_url". Or check the `--help` output:

```bash
python -m headroom.proxy.server --help
# ...
#   --openai-api-url OPENAI_API_URL
#                         Custom OpenAI API URL (default:
#                         https://api.openai.com)
```

The CLI flag is documented; the env var is not (per `Source\headroom\headroom\cli\wrap.py:413`).

## Related headroom gotchas

1. **Rust extension not built by default.** `headroom-ai>=0.21.0` requires Rust to build `headroom._core`. Fallback: pin to `headroom-ai==0.20.15` (pure Python wheel) + set `HEADROOM_REQUIRE_RUST_CORE=false`. Compression is then passthrough.
2. **Python 3.14 + pip bug.** `pip install headroom-ai` on Python 3.14 fails with `ValueError: Unable to find resource t64.exe` (a pip/distlib compat issue). Workaround: use Python 3.11 + `uv pip install headroom-ai==0.20.15`.
3. **Passthrough failure is silent.** When the upstream is down, headroom returns `{"type":"server_error","code":"proxy_error"}` to the client. The proxy server log may show only a runpy warning. Check the upstream independently.

## Reference

- Source: `Source\headroom\headroom\cli\wrap.py:413` — sets `OPENAI_TARGET_API_URL` from CLI arg
- Source: `Source\headroom\headroom\proxy\models.py` — has `openai_api_url` field on ProxyConfig
- Source: `Source\headroom\headroom\proxy\server.py` — CLI flag definition
- Discovery moment: `[[2026-06-29 vault-os-build session]].md`, [[[[event]]]] `[11:26]`

## Related

- [[Vault OS Core Loop Architecture]] — the chain that exercises this gotcha
- [[RAW/2026-06-29 vault-os-build session]] — discovery context