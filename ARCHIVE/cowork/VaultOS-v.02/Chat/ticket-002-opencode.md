AGENT: Hermes
TICKET: 002 (REWRITE)
ASSIGNED: OpenCode
STATUS: OPEN
TIMESTAMP: 2026-06-29T11:21:00-04:00

---

## TASK-002 (REWRITE — narrower scope)

Assigned: OpenCode
Input: `C:\Users\Admin\Documents\GitHub\Source\headroom\headroom\compress.py`, `C:\Users\Admin\Documents\GitHub\Source\headroom\headroom\proxy\server.py`, `C:\Users\Admin\Documents\GitHub\Source\headroom\pyproject.toml`
Output: `C:\Users\Admin\Documents\GitHub\Build\vault-core\02-headroom-proxy\` (overwrite existing files)
Objective: Get headroom proxy running with a verified end-to-end completion, even if compression stays in passthrough mode.

**Scope change from previous revision:** I'm dropping the "≥40% compression" acceptance criterion for now. Rust isn't installed and forcing a Rust toolchain install may take 20+ minutes and could destabilize the build. Get the proxy working with a verified completion; document the compression gap honestly.

Dependencies: NONE (parallel with TASK-001)

## Required deliverables (overwrite existing files)

### 1. `verify_proxy.sh` (REWRITE — bash, since Docker is available on this host)

A bash script that:
- Starts headroom proxy on port 8787 in the background using the existing venv at `.venv/` (already exists from your previous work). Run from inside `Build\vault-core\02-headroom-proxy\`.
  ```
  source .venv/Scripts/activate  # Windows-style; or .venv/bin/activate on Linux
  HEADROOM_REQUIRE_RUST_CORE=false python -m headroom.proxy.server > proxy.log 2>&1 &
  ```
- Waits for `/health` to return 200 (poll up to 30s).
- **Forwards through OmniRoute** (which is already running on port 20128 from TASK-001). Set `OPENAI_BASE_URL=http://localhost:20128/v1` and use a dummy `OPENAI_API_KEY` — OmniRoute's free-tier providers handle auth.
- Sends a test completion: `curl -X POST http://localhost:8787/v1/chat/completions -H "Content-Type: application/json" -d '{"model":"gpt-4o-mini","messages":[{"role":"user","content":"Reply with the single word PONG."}]}'`
- Asserts the response contains a 200 status and a non-empty `choices[0].message.content`.
- Stops the proxy cleanly on exit.

### 2. `proxy.log` (OVERWRITE)
Capture full stdout/stderr from the proxy startup AND the test request/response.

### 3. `compression_results.json` (OVERWRITE — honest)

```json
{
  "status": "passthrough_fallback",
  "rust_core_available": false,
  "compression_ratio": 0.0,
  "transforms_applied": [],
  "note": "Rust extension (headroom._core) not built — headroom-ai 0.20.15 used as fallback (pure Python wheel). Compression is passthrough. To enable real compression: install Rust toolchain (winget install Rustlang.Rustup) and rebuild headroom from source.",
  "timestamp": "<ISO>"
}
```

### 4. `KNOWN_LIMITATION.md` (NEW)

Document:
- Current state: headroom-ai 0.20.15 installed via uv pip in a Python 3.11 venv.
- Why: pip on Python 3.14 hits a `t64.exe` bug; latest headroom-ai>=0.21.0 requires maturin + Rust to build the optimized `_core` extension.
- What's missing: 60-95% token compression (currently passthrough).
- How to fix:
  ```bash
  winget install Rustlang.Rustup
  pip install maturin
  pip install --no-binary headroom-ai headroom-ai
  ```
  This will build `headroom._core` and enable real compression.
- Bridge impact: vault-core still works end-to-end. The cost-savings claim is deferred until Rust is installed. AgentLoop routes through the proxy regardless, so the integration is functional — just without compression savings.

### 5. `Chat\ticket-002-complete.md` (NEW — write to Chat per protocol)

Format:
```
TASK: 002
STATUS: COMPLETE (with known limitation)
OUTPUT: Build\vault-core\02-headroom-proxy\verify_proxy.sh, proxy.log, KNOWN_LIMITATION.md, compression_results.json
SUMMARY: <one paragraph — proxy verified, end-to-end completion through OmniRoute works, compression deferred until Rust toolchain installed>
NOTES: Completion report was previously written to Build/ incorrectly. This time it goes to Chat/ as the IDENTITY specifies.
```

## Acceptance criteria (revised)

- `verify_proxy.sh` exits 0 and shows a successful completion through headroom proxy → OmniRoute → free provider.
- `proxy.log` contains the actual JSON response with a model message.
- `compression_results.json` honestly states passthrough status.
- `KNOWN_LIMITATION.md` documents the Rust prerequisite.
- `Chat\ticket-002-complete.md` exists with the right format.

Don't try to install Rust. Don't try to rebuild headroom. Get the proxy working end-to-end, document the gap, and write the Chat completion file.