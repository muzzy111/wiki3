---
title: "Agent Inventory (authoritative)"
type: inventory
created: 2026-08-03
last_updated: 2026-08-03
---

# Agent Inventory (authoritative)

> Authoritative detection of which agents are installed. Verified on this machine; this is the ground truth for the 72h plan.

## Detection script

```bash
for a in hermes claude cline grok opencode mavis antigravity agy copilot openwork ollama; do
  if where.exe "$a" >/dev/null 2>&1; then
    printf "OK    %-14s %s\n" "$a" "$(where.exe "$a")"
  else
    if [ -d "$HOME/.${a}" ] || [ -d "$HOME/.${a}-ide" ]; then
      printf "INST  %-14s (off-PATH; needs wrapper)\n" "$a"
    else
      printf "MISS  %-14s\n" "$a"
    fi
  fi
done
```

## Snapshot (2026-08-03)

| Agent | Status | Path / Source | Wrapper needed |
|---|---|---|---|
| Hermes | OK on PATH | `C:\Users\Admin\AppData\Local\hermes\hermes-agent\venv\Scripts\hermes.exe` | none |
| Claude Code | OK on PATH | `C:\Users\Admin\.local\bin\claude.exe` | none |
| Cline CLI | OK on PATH | `C:\Users\Admin\AppData\Roaming\npm\cline` | none |
| Grok CLI | OK on PATH | `C:\Users\Admin\.grok\bin\grok.exe` (grok 0.2.118 / grok-super-heavy) | none |
| OpenCode | OK on PATH | `C:\Users\Admin\AppData\Roaming\npm\opencode` (opencode-ai 1.18.4) | none |
| Ollama (native) | OK on PATH | `C:\Users\Admin\AppData\Local\Programs\Ollama\ollama.exe` | none |
| Antigravity (agy) | INST, off-PATH | `C:\Users\Admin\AppData\Local\agy\bin\agy.exe` | `antigravity.cmd` wrapper |
| Mavis | INST, off-PATH | `C:\Users\Admin\.mavis\bin\` (mavis-trash.js; config.yaml present) | `mavis.cmd` wrapper |
| GitHub Copilot | INST, off-PATH config | `C:\Users\Admin\.copilot\` (168 files; `gh copilot` extension may be installed) | `copilot.cmd` wrapper |
| OpenWork | INST, off-PATH | `C:\Users\Admin\.openwork\openwork-server\` (HTTP server; not on PATH) | `openwork.cmd` wrapper |

**Result: 10/10 agents present. 5 on PATH, 5 need wrappers.**

## Ollama local models (live `ollama list`)

```
NAME                                           ID              SIZE      MODIFIED
huihui-lfm2.5-8b-a1b-abliterated:q8_0          a2f564d9f268    9.0 GB    6 days ago
llama3.2-3b-instruct-abliterated:q8_0          c0936cf62f81    3.8 GB    6 days ago
qwen2.5-coder-1.5b-instruct-abliterated:f16    51ec2faf157a    3.6 GB    6 days ago
```

3 models available. Use cases:
- `qwen2.5-coder-1.5b-abliterated:f16` — mini fast coder for tool calls
- `llama3.2-3b-instruct-abliterated:q8_0` — mini general purpose
- `huihui-lfm2.5-8b-a1b-abliterated:q8_0` — larger function-calling model

## Docker state (verified)

- Docker Desktop v29.6.1, Compose v5.3.0
- Container pool is live; can host NATS, Prometheus, Grafana, Rocket.Chat (if introduced later), cAdvisor

## Process snapshot (verified)

Running agent-related processes:
- `Hermes.exe` × 5 (multi-instance from prior sessions)
- `docker-agent.exe`, `Docker Desktop.exe` × 6, `com.docker.backend.exe` × 2
- `grafana.exe` (port 3000)
- `ollama.exe`, `ollama app.exe`
- `python.exe` × 5 (loopd predecessors, watchers)

**Note:** NATS was NOT visible in the process tree. Phase 1.5 will verify whether it's running on port 4222, and if not, start it via Docker Compose.

## Mavis config (live)

`C:\Users\Admin\.mavis\config.yaml` shows:
- Provider: `minimax` (MiniMax)
- Default model: `minimax/MiniMax-M3` (400K context, 128K output, supports tool calls, reasoning, attachments)
- Permission mode: `bypassPermissions`
- Built-in skills: `.builtin-skills/`
- Agents dir: `agents/`
- Memory dir: `memory/`
- Bin: `mavis-trash.cmd` (40 bytes) + `mavis-trash.js` (16215 bytes)

## Notes

- `agy.exe` from Antigravity IDE — confirmed install root `C:\Users\Admin\AppData\Local\agy\bin\agy.exe`.
- `C:\Users\Admin\AppData\Local\Programs\Antigravity IDE\bin\` contains `antigravity-ide.cmd` (IDE launcher only). The CLI binary is in `agy/`.
- `mavis-trash.js` is the only executable in mavis/bin/. Mavis is primarily a peer service of Hermes, not a CLI. We treat it as an agent by wrapping the existing invocation.
- Openwork has only `openwork-server/` and `audit/` directories. The actual server binary is in `openwork-server/` and is HTTP-only — the wrapper shells out to it via HTTP.
- Copilot's `.copilot/` config dir is 168 files; the `gh copilot` extension may or may not be installed. The wrapper probes both.
- NATS status unconfirmed — must be probed in Phase 1.5.
