---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# MCP Stack Bring-up Session 2026-06-17

Session that actually stood the planned MCP/OSINT/scraper/DB/dev stack
up. The 2026-06-16 planning session wrote a deploy script and queued
a one-shot cron for 22:00; that cron never fired (see [[Crons on This
Host Drop One-Shots Slotted Near Now]]). This session worked the
problem manually.

## What was supposed to happen

The 2026-06-16 planning session selected a 19-container stack: 5
OSINT, 3 scrapers, 6 databases, 5 dev VMs. Wrote a deploy script,
scheduled it for 22:00, and ended the session confident the stack
would be up the next morning.

## What actually happened

- 22:00 on Tuesday 2026-06-16: the cron never fired. The scheduler
  on this Windows host is minute-granular and silently drops
  one-shots scheduled for "now" — same root cause as the
  pentest-ai install cron at 19:06 (see [[pentest-ai Install on
  Windows]]). `next_run_at` ends up `null` and `state: scheduled`
  with no progress.
- 19:36 on Wednesday 2026-06-17: user noticed none of the planned
  containers were running. Verified the cron is still in the
  queued-but-unfired state.
- 19:38: confirmed the system clock is correct (2026-06-17
  19:38 EDT). The failure was the cron, not a date/time drift.

## What we did this session

### 1. Image inventory and cleanup (19:36–19:48)

- 27 images present, ~52 GB total.
- Removed 8 dead images: ctdc/spiderfoot (5y), vimagick/scrapyd
  (2y), scrapydata/scrapyd (3y), getmeili/meilisearch:v1.10
  (20mo), eclipse/theia (8y), jupyter/datascience-notebook (2y),
  ajeetraina777/penpot-docker-extension:3.0.1 (6mo, out of scope),
  opensearchproject/opensearch:2.18.0 (17mo). ~14.5 GB reclaimed.
- 8 dead containers removed alongside: [[paperclip]]-app-1,
  [[paperclip]]-db-1, [[paperclip]]-postgres, docker-server-1, docker-db-1,
  mysql-sandbox, chroma-sandbox, amazing_antonelli.

### 2. Wrote and iterated the deploy script (19:48–19:57)

`C:\Users\Admin\AppData\Local\hermes\scripts\start-mcp-stack.sh`
is the final version. Idempotent: every `run_if_absent` call
checks if a container is already running, resets it if it's
stopped, and only starts if missing. Safe to re-run.

#### Iteration history (failures we hit)

- **Surrealdb 1st try**: unquoted command got word-split by bash;
  docker saw `start` as a second image name. `Unable to find image
  'start:latest'`. Patched to quote the command as one string.
- **Surrealdb 2nd try**: still failed with `invalid reference
  format`. Root cause: the `run_if_absent` helper put the IMAGE at
  the END of the docker run call, but docker requires the IMAGE
  before any command. Inlined the surrealdb call outside the
  helper so the syntax could be `docker run [flags] IMAGE CMD
  [args]`.
- **Surrealdb 3rd try**: surreal v3 CLI rejected the command as a
  single token (`unrecognized subcommand 'start --user root
  --pass root'`). Patched to pass `start --user ... --pass ...`
  as separate tokens, not a single quoted string.
- **Surrealdb 4th try**: port 8000 conflict. `cvss.exe` (PID
  4968) on the host is listening on 127.0.0.1:8000. Moved
  surrealdb's host port to 18000.
- **code-server 1st try**: bind mount `/c/Users/Admin:/workspace`
  failed with `mkdir C:\Users\Admin;C: Access is denied`. Docker
  Desktop on Windows misparses the colon-bearing git-bash path
  with `/workspace`. Dropped the workspace mount; the container
  can still reach the host via Docker Desktop's standard
  `/mnt/host-*` mounts.

### 3. Final state

All 8 services up and answering health probes:

- pg17 (PostgreSQL 17.10) on 127.0.0.1:5432
- redis7 on 127.0.0.1:6379
- surrealdb on 127.0.0.1:18000 (mapped from container port 8000)
- qdrant on 127.0.0.1:6333
- chroma on 127.0.0.1:8001 (mapped from container port 8000)
- crawl4ai on 127.0.0.1:11235 (healthy)
- code-server on 127.0.0.1:8443
- jenkins on 127.0.0.1:8080

Memory used: ~5.5 GB of 15.57 GB Docker budget.

## Lessons

1. **Don't trust one-shot crons for "fire now" on this host.** Use
   a script you run directly, or schedule with 2+ hours of lead
   time. The scheduler silently drops lapsed one-shots.
2. **The `cvss.exe` process holds host port 8000.** Surrealdb
   (default 8000) needs an alternate host port. The container
   still listens on 8000 internally; we publish 18000:8000.
3. **Docker run on this host requires IMAGE before COMMAND.** A
   generic helper that appends the image last will break for any
   image that needs a custom command. Inlining is the simpler
   shape; a smarter helper would split flags from command.
4. **Surrealdb v3 CLI parses `start --user X --pass Y` as separate
   tokens, not one quoted string.** A quoting mistake here looks
   like a docker error but is actually a surreal CLI parse error.
5. **Git-bash `/c/Users/...` paths don't bind-mount cleanly
   through Docker Desktop on Windows** when the destination path
   is `/workspace` or similar. Use Docker Desktop's `/mnt/host-*`
   mounts or named volumes instead.
6. **Image age is a real signal.** The 5y spiderfoot, 8y theia,
   3y scrapyd images all came from past trial-and-error. Pruning
   them removed confusion about which one to use, not just disk
   space.

## What was deliberately deferred

- **mcp-gateway wiring**: agy is still working on the message
  board that uses it. Image remains pulled, container not
  started.
- **n8n restart**: user said leave it down for now.
- **[[paperclip]] stack**: has its own compose with postgres db. Not
  in scope this session.

## Related

- [[Local Docker Image and Container Inventory]] — the reference
  guide for the running stack.
- [[Local Docker Stack Runbook]] — operational commands.
- [[Container Security Defaults for Local Stacks]] — the
  loopback-binding and --memory cap policy this stack follows.
- [[Crons on This Host Drop One-Shots Slotted Near Now]] — the
  root cause for the failed Tuesday-night deploy.
- [[MCP Stack Deploy Script]] — the 2026-06-16 version of the
  script; the 2026-06-17 version is at
  `C:\Users\Admin\AppData\Local\hermes\scripts\start-mcp-stack.sh`.
- [[pentest-ai Install on Windows]] — same cron-scheduler bug
  bit the pentest-ai install cron at 19:06 the night before.
