---
title: "Local Server Bridge"
role: "tools"
status: active
---

# Local Server Bridge

> The ttyd-based Hermes terminal bridge. Originally described in `SYSTEM/Hermes-Terminal-Bridge-Prompt.md` (legacy). Operational status and configuration live here.

## Purpose

Provide a web-accessible terminal that proxies the Hermes TTY to the user's browser. Used for remote observability and for subagent handoffs.

## Stack

- ttyd binary on a known port (default 7681).
- Auth token in env var `TTYD_TOKEN`.

## Run

```powershell
$env:TTYD_TOKEN = "<random>"
ttyd --port 7681 --credential "$env:TTYD_TOKEN" powershell
```

## Health

`GET http://localhost:7681/` returns 200 when running; 401 with bad token.

## Related

- `SYSTEM/Hermes-Terminal-Bridge-Prompt.md` (original spec, legacy file)
