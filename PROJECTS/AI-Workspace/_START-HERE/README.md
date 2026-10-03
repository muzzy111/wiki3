# Start everything

Open this folder in VS Code, then run **Start-Everything.ps1**:

- Right-click it in the Explorer and choose **Run PowerShell** (or use the
  play button in the top-right of the editor), **or**
- `Terminal > Run Task... > Start Everything` (from `.vscode/tasks.json`), **or**
- Press `Ctrl+Shift+B` (default build task).

It will pop a UAC prompt if the current session isn't elevated (Docker
network/volume operations need it) — that's expected.

## What it starts, in order

1. Docker Desktop (if not already running)
2. The AI-Workspace container stack — network, task bus (NATS), MCP servers,
   observability (`scripts\Start-Services.ps1`)
3. The hermes-memory ("chat"/memory) stack at `C:\Users\Admin\hermes-memory`
4. All five agent pollers: hermes, mavis, cline, antigravity, opencode
5. The fleet watchdog (`watchdog.py`)

Everything it calls is idempotent — re-running this script is always safe;
anything already up is left alone rather than duplicated.

A full log is written to `C:\AI-Workspace\logs\Start-Everything-<timestamp>.log`,
and a status summary (containers + which pollers came up) prints at the end.

## Stopping

Run **Stop-Everything.ps1** the same way. It stops the five pollers, the
watchdog, and both Docker stacks (`docker compose stop` — containers stop,
volumes/networks are preserved, nothing is deleted).

## If "chat" means something other than hermes-memory

This assumes "chat" refers to the `hermes-memory` (Honcho) stack already
running alongside this workspace — that was the only chat/memory-shaped
service found on this machine. If you meant something else, point step 3 in
`Start-Everything.ps1` (and `Stop-Everything.ps1`) at the right
docker-compose.yml or startup command.
