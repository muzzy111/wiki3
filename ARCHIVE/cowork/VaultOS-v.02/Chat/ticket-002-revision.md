AGENT: Hermes
TICKET: 002
STATUS: REVISION REQUESTED — Acceptance failed
TIMESTAMP: 2026-06-29T10:56:00-04:00

---

# Revision: TASK-002 — Headroom Proxy (CRITICAL)

Reviewed `Build\vault-core\02-headroom-proxy\task-complete.md`, `compression_results.json`, and the supporting files. **Acceptance criterion was not met.**

## What failed

The acceptance criterion was: **`compression_results.json` shows ≥40% token reduction on the sample.**

Actual result:
```json
{
  "tokens_before": 0,
  "tokens_after": 0,
  "compression_ratio": 0.0,
  "transforms_applied": []
}
```

Zero compression. Zero tokens counted. The Rust core isn't built, so headroom falls back to passthrough. Without compression, the entire vault-core integration is dead weight — the only reason to route through headroom is the 60-95% token savings.

Your task-complete.md correctly identified the root cause (`No module named 'headroom._core'`, Rust toolchain missing) and the workaround (`uv pip install headroom-ai==0.20.15` which provides a pure-Python wheel). That's good diagnosis, but we need a working result, not diagnosis.

## What to do (in priority order)

**Option A — Build the Rust core (preferred, gives real compression):**
1. Install Rust: `winget install Rustlang.Rustup` or download from rustup.rs
2. Reinstall headroom from source: `pip install --no-binary headroom-ai headroom-ai` (forces maturin build of `headroom._core`)
3. Run `verify_compress.py` again with the Rust core present
4. Confirm `compression_ratio > 0.0` and ideally ≥0.40 (40% reduction)

**Option B — Pin to a headroom-ai version that ships a real compression pipeline in pure Python:**
1. Research older `headroom-ai` versions on PyPI for ones with non-zero compression without the Rust extension
2. If found, install that version and re-verify
3. If not found, fall back to Option A

**Option C — If neither works in a reasonable time:**
Use headroom's `compress()` API in **degraded mode** but make the integration honest. Document that:
- The compression wrapper is a stub until the Rust core is built
- All other parts of the bridge still work
- Document the one-command Rust setup as a build prerequisite

If you go with C, the acceptance is: a `Build\vault-core\02-headroom-proxy\KNOWN_LIMITATION.md` documenting the deferral, plus a working proxy install verified via `proxy.log` showing the proxy accepting and forwarding at least one request (even if compression is passthrough).

## What's also wrong with the current deliverables

1. **`compression_results.json` has `tokens_before: 0` and `tokens_after: 0`** — the script didn't actually count tokens. Either use `tiktoken` (lightweight, pip-installable) or `len(text.split()) * 1.3` as a rough approximation. Verify before writing the file.
2. **`proxy.log` is 340 bytes** — likely just the startup banner, not a real request/response. The acceptance criterion for the proxy is "a successful test completion through the proxy." If headroom passthrough means the proxy accepts a request but fails to forward (no upstream API key), that's still not a successful completion. Configure a passthrough to OmniRoute's `/v1/chat/completions` instead (it has free-tier providers and doesn't need a key for many of them), OR use `HEADROOM_PASSTHROUGH_UPSTREAM` env var if it exists.
3. **Completion report in wrong place**: `task-complete.md` is in `Build\vault-core\02-headroom-proxy\`. The protocol expects `Chat\ticket-002-complete.md`. Move it.

## Required deliverables (revised)

After the fix:

1. **`Build\vault-core\02-headroom-proxy\compression_results.json`** — actual before/after token counts with `compression_ratio ≥ 0.40` (or honest zero + KNOWN_LIMITATION.md).
2. **`Build\vault-core\02-headroom-proxy\proxy.log`** — at least one real request/response through the proxy.
3. **`Build\vault-core\02-headroom-proxy\KNOWN_LIMITATION.md`** (only if Option C) — documents the Rust-core deferral and how to enable full compression.
4. **`Chat\ticket-002-complete.md`** — official completion report in the right location.

Don't stop until the compression actually works, or until you've documented Option C honestly. I need to know whether vault-core's value proposition (60-95% token savings) is real or aspirational.