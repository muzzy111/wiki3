---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# n8n Container [[Setup]] on Docker Desktop

End-to-end recipe for running n8n on the user's Windows + Docker Desktop [[setup]], with persistent storage and US Eastern timezone. Derived from a 2026-06-16 Hermes session that rehydrated an existing container, added persistence, and set timezone.

## The Working Container

```bash
docker run -d --name n8n \
  --restart unless-stopped \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e GENERIC_TIMEZONE=America/New_York \
  -e TZ=America/New_York \
  n8nio/n8n
```

Verified reachable at `http://localhost:5678` (HTTP 200) within ~8 seconds of `docker run`. Title served: "n8n.io - Workflow Automation".

## Required Components

| Component | Value | Why |
|---|---|---|
| Image | `n8nio/n8n` | Official, latest stable |
| Port | `5678:5678` | n8n web UI default |
| Volume | `n8n_data -> /home/node/.n8n` | [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], credentials, encryption key survive container recreation |
| Restart | `unless-stopped` | Survives Docker daemon restarts |
| Timezone env | `GENERIC_TIMEZONE=America/New_York` | Controls Cron / scheduled trigger interpretation |
| Timezone env | `TZ=America/New_York` | Controls system clock inside container (logs, `date` command) |

## Why Both TZ Variables

`TZ` is the standard Unix environment variable that affects the process's libc timezone. `GENERIC_TIMEZONE` is a n8n-specific setting that controls how the workflow engine interprets time fields and Cron expressions. Setting only `TZ` leaves Cron triggers running in UTC, which is a common silent-failure mode. Both are required.

DST caveat: n8n's Cron expressions evaluate against `GENERIC_TIMEZONE` and do not auto-adjust for daylight savings transitions. When the clock falls back in early November, scheduled triggers may run at the "old" wall-clock time on the first transition. Audit scheduled [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] after the time change.

## Rehydration Sequence (When Container Already Exists)

The user had an `Exited (0) 6 days ago` container from `n8nio/n8n` with port 5678 exposed but no volume and no custom env. Rehydration steps:

1. `docker start n8n` — preserved the old image and config, brought container up in ~8s.
2. For persistence: `docker stop n8n && docker rm n8n && docker volume create n8n_data` (note: this destroys any in-container data; only do it on a fresh [[setup]] or after backing up).
3. Recreate with the full command above.

## Initial Owner [[Setup]]

Because the recreate wipes in-container state, the user must walk through n8n's initial owner-account [[setup]] on first visit. After that, the `n8n_data` volume holds the encryption key, so credentials survive restarts.

## Related

- [[CLI Tool Routing on This Machine]] — n8n is one of the long-running services on this host
- See the journal for the full [[[[event]]]] sequence
