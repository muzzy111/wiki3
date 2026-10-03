---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# NotebookLM MCP Bridge

The working path from Hermes to the user's private Google NotebookLM library. The MCP server binary lives on the host, uses a persistent Chrome profile to drive the real NotebookLM web UI, and exposes its tools over JSON-RPC on stdio (or HTTP). Verified end-to-end on 2026-06-16.

## Verified Facts

- **Binary:** `C:\Users\Admin\.local\bin\notebooklm-mcp.exe` (also on PATH as `notebooklm-mcp`)
- **Version:** 3.3.1
- **Default transport:** stdio (callable from any subprocess with JSON-RPC frames)
- **HTTP transport:** `notebooklm-mcp --transport http --port <N>` exposes MCP at `http://127.0.0.1:<N>/mcp`
- **Chrome profile:** `C:\Users\Admin\.notebooklm-mcp-cli\chrome-profiles` (persistent, holds the logged-in Google session)
- **Auth:** Headless re-auth runs automatically from the saved profile. No interactive login required once the profile is established.

## How to Call It

The server speaks MCP (Model Context Protocol) over stdio. The cleanest harness is a leaf subagent with `toolsets=["terminal", "file"]` that spawns the binary, performs the MCP `initialize` handshake, then issues `tools/call` requests.

Minimal stdio invocation:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"hermes","version":"0.1"}}}' | notebooklm-mcp
```

Full pattern (initialize → notifications/initialized → tools/list → tools/call) is captured in the working code. Use threaded `readline` for reading responses — **do not use `select.select` on Windows pipes**, it errors with `WinError 10093: WSAStartup not called`.

## Discovered Tools (partial)

The server's `tools/list` exposes (as of 2026-06-16):

- `notebook_list` — enumerate the user's notebooks
- `notebook_query` — ask a question grounded in a specific notebook's sources
- `source_list` — list sources inside a notebook
- `notebook_get` / `notebook_info` — metadata for one notebook
- `refresh_auth` — reload auth tokens, useful after `nlm login`
- `save_auth_tokens` — fallback cookie-injection method
- `batch` — multi-tool requests in one call

Always read `tools/list` at runtime — the server updates its tool surface between versions. Do not hardcode tool names.

## Verified User Library (2026-06-16)

The user's `notebook_list` returned (all `ownership: owned`):

| Title | Sources | Last modified |
|---|---|---|
| Hermes Agent Masterclass | 34 | 2026-06-16 |
| opencove | 23 | 2026-06-16 |
| The Network Strategy: CPN, Business Credit, and Funding Masterclass | 212 | 2026-06-14 |
| Derek Boone | 100 | 2026-06-14 |
| DARK MIND | 47 | 2026-06-14 |
| OSINT | 155 | 2026-06-13 |
| `@drb1963able` | 300 | 2026-06-13 |
| AI and OSINT Investigation Tools Navigation Index | 25 | (truncated) |

## Hard Rules

1. **Never wipe the Chrome profile.** It holds the user's logged-in Google session. `rm -rf` on `C:\Users\Admin\.notebooklm-mcp-cli\chrome-profiles` will force a full re-auth, which requires browser interaction.
2. **Do not register this server through `agy mcp`.** `agy mcp help` hangs in non-interactive shells, and the server is the wrong kind of plugin for agy anyway. Call the binary directly.
3. **Cold-start latency is 5-15 seconds** while Chrome attaches. Budget for it in any subagent that issues a `notebook_query` immediately after spawn. Set generous `--query-timeout` on HTTP transport calls.
4. **NotebookLM rate-limits.** If a `notebook_query` times out, back off and try once more; do not loop.

## When to Use This vs `agy-research`

- **Private sources, "what does my notebook say about X"** → NotebookLM MCP. The answer is grounded in the user's uploaded PDFs/Docs/URLs.
- **Open-web research, current events** → agy-research. Default for general questions.
- **Both** (e.g. "what does my notebook say, and what does the web say now") → Query NotebookLM first, then agy for the open-web layer. Sequence matters: grounding first, then synthesis.

## Related

- [[CLI Tool Routing on This Machine]] — routing policy and quota notes
- See the journal for the verification transcript
