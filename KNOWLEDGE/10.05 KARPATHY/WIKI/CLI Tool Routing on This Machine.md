---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# CLI Tool Routing on This Machine

Routing policy for the four CLI tools Hermes can delegate to on this Windows host, established 2026-06-16. Each tool has a different invocation model, a different cost profile, and a different failure mode — pick the right one for the task.

## The Four Tools

| Tool | Path | Version | Purpose | Cost / Quota |
|---|---|---|---|---|
| `agy` (Antigravity IDE CLI) | `C:\Users\Admin\AppData\Local\agy\bin\agy.exe` | 1.0.8 | Web research, multi-turn reasoning, planning | Google AI Pro, 2 AI [[credits]] remaining as of 2026-06-16 |
| `opencode` | Chocolatey install on PATH | 1.16.0 | Autonomous coding: implement, fix, refactor, [[review]] | Per-token, model-dependent |
| `notebooklm-mcp.exe` | `C:\Users\Admin\.local\bin\notebooklm-mcp.exe` | 3.3.1 | Query the user's private NotebookLM library | Free (scrapes notebooklm.google.com via Chrome) |
| `docker` (CLI) | Docker Desktop bundled | 29.5.3 | Container lifecycle on this host | n/a |

## Decision Tree

- **Web research, current events, citations, multi-source synthesis** → `agy` via the `agy-research` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]. Default for any `web_search`-shaped question.
- **Multi-turn planning, brainstorming, "let agy think about X"** → `agy` via the `agy-run` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].
- **User's private sources, NotebookLM-grounded answers, "what does my notebook say"** → `notebooklm-mcp.exe` directly. Bypass agy entirely — agy has no notebooklm plugin and `agy mcp` hangs non-interactively.
- **Code edits in a real repo, file changes, git operations, PR drafting** → `opencode` via the `opencode-run` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]. `opencode run` is genuinely non-interactive; subagents can drive it without PTY tricks.
- **Quick local shell/file question** → `terminal` / `read_file` / `search_files` directly. Don't delegate.
- **Container lifecycle on this host** → `docker` CLI directly. No [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] needed for the common cases (start/stop/run/exec).

## Critical Invariants

- `agy --print` is **broken** (exit 0, empty stdout). Verified 2026-06-16. Do not use it.
- `agy mcp` **hangs** in non-interactive shells. Do not script agy MCP registration.
- agy's persistent Chrome profile (for notebooklm-mcp) lives at `C:\Users\Admin\.notebooklm-mcp-cli\chrome-profiles`. **Treat this directory as sacred** — it holds the user's logged-in Google session. Never wipe it.
- **Do not kill leftover `agy.exe` or `Antigravity.exe` processes mid-flight.** They leak, and each new launch triggers a fresh OAuth flow that takes 2-3 minutes. Reap them only between sessions.
- The `agy_harness.py` library at `C:\Users\Admin\AppData\Local\hermes\scripts\` is the only way to drive agy from a subagent. Do not roll a new harness; import this one.

## [[Skills]] in This Vault

| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | What it loads |
|---|---|
| `agy-research` | Default web research via agy; includes the harness code as Option B |
| `agy-run` | Generic agy delegation (multi-turn work) |
| `notebooklm-mcp` | Direct JSON-RPC bridge to the user's NotebookLM library |
| `opencode-run` | `opencode run "<prompt>"` delegation |

## Quota & Latency Notes (as of 2026-06-16)

- agy: ~3 minutes per call on 2 AI [[credits]]. Token output appears to be rate-limited or throttled by Google's quota manager. End-to-end reply capture from the harness is currently blocked by this; the input path works.
- opencode: responsive, no observed quota issues in this session.
- notebooklm-mcp: ~5-15s first-call latency (Chrome session attach), then fast. Auth via existing Chrome profile, no re-login needed.

## Related

- [[Agy TUI Driver Harness]] — the only working automation path for agy
- [[NotebookLM MCP Bridge]] — private-source research pipeline
- [[n8n Container Setup on Docker Desktop]] — the n8n service is one of the host's long-running containers
