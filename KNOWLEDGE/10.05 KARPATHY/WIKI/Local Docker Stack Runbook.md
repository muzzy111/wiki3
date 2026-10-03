---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Local Docker Stack Runbook

Operational commands for the local MCP/OSINT/scraper/DB/dev stack
on this machine. Source of truth for "how do I start/stop/check
the stack". See [[Local Docker Image and Container Inventory]] for
the full reference (ports, volumes, auth).

## Start the stack

```bash
bash /c/Users/Admin/AppData/Local/hermes/scripts/start-mcp-stack.sh
```

Idempotent. Skips containers that are already running. Safe to
run after every reboot, or any time the docker daemon restarts.

## Stop the stack

Stop in reverse-dependency order so the gateway (when it lands)
doesn't lose its upstream tool servers mid-flight:

```bash
docker stop code-server jenkins crawl4ai chroma qdrant surrealdb redis7 pg17
```

Order: dev tools → scrapers → databases. Reverse of start order.
The script doesn't currently include a stop command; use the
above one-liner.

## [[Status]]

```bash
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

## Health check (all 8 services)

```bash
docker exec pg17 psql -U localdev -d localdev -c "SELECT 1"
docker exec redis7 redis-cli ping
curl -s -o /dev/null -w "surrealdb: %{http_code}\n" http://127.0.0.1:18000/health
curl -s -o /dev/null -w "qdrant:     %{http_code}\n" http://127.0.0.1:6333/healthz
curl -s -o /dev/null -w "chroma:     %{http_code}\n" http://127.0.0.1:8001/api/v1/heartbeat
curl -s -o /dev/null -w "crawl4ai:   %{http_code}\n" http://127.0.0.1:11235/health
curl -s -o /dev/null -w "code-srv:   %{http_code}\n" http://127.0.0.1:8443/healthz
curl -s -o /dev/null -w "jenkins:    %{http_code}\n" http://127.0.0.1:8080/login
```

## Quick service access

| Service | URL / command |
|---------|---------------|
| Postgres 17 | `psql -h 127.0.0.1 -U localdev -d localdev` (pass from `.mcp-stack.env`) |
| Redis | `redis-cli -h 127.0.0.1 -p 6379 ping` |
| Surrealdb | `curl http://127.0.0.1:18000/health` |
| Qdrant | `http://127.0.0.1:6333/[[dashboard]]` (built-in web UI) |
| Chroma | `http://127.0.0.1:8001/api/v1/heartbeat` (note: 410 on deprecated endpoint) |
| Crawl4ai | `http://127.0.0.1:11235/docs` (FastAPI Swagger) |
| code-server | `http://127.0.0.1:8443/` (browser; password from container logs on first run) |
| Jenkins | `http://127.0.0.1:8080/` (initial admin password at `jenkins_home/secrets/initialAdminPassword`) |

## Backup

Stop the stack so Postgres is consistent, tar the volumes
directory, then restart:

```bash
docker stop code-server jenkins crawl4ai chroma qdrant surrealdb redis7 pg17
cd /c/Users/Admin
tar -czf docker-volumes-$(date +%Y%m%d).tar.gz docker-volumes/
docker start pg17 redis7 surrealdb qdrant chroma crawl4ai code-server jenkins
```

The start script is idempotent, so `start-mcp-stack.sh` would
also work for the restart step (it'll skip the already-running
ones — but they aren't running, you just stopped them, so it'll
start them fresh).

## Restore

```bash
cd /c/Users/Admin
tar -xzf docker-volumes-YYYYMMDD.tar.gz
bash /c/Users/Admin/AppData/Local/hermes/scripts/start-mcp-stack.sh
```

## Common failure modes

- **Port 8000 conflict on surrealdb**: if you reconfigure
  surrealdb to use 8000:8000, the bind will fail because
  `cvss.exe` (PID 4968) holds host 8000. Keep 18000:8000 or
  kill cvss (don't, it's a host process).
- **Surrealdb "unrecognized subcommand"**: the script must
  pass `start --user ... --pass ...` as separate bash tokens,
  not a single quoted string. Surreal v3 CLI parses these
  individually.
- **Code-server workspace mount failing**: don't bind-mount
  `/c/Users/Admin` to `/workspace`. Docker Desktop on Windows
  misparses the path. Use named volumes or `/mnt/host-*`.
- **Cron for stack bring-up never fires**: see [[Crons on This
  Host Drop One-Shots Slotted Near Now]]. Don't use one-shot
  crons for "fire now".

## What to do when adding a new service

1. Pick a port not in the table above. Avoid 8000 (held by
   cvss.exe).
2. Add a `run_if_absent` block to `start-mcp-stack.sh`. If the
   image needs a custom command, inline it (the helper only
   handles the no-command case).
3. Add a named volume under `${VOL_ROOT}/<service>/data`.
4. Set a `--memory` cap. Sum of all caps should stay under
   80% of the 15.57 GB budget.
5. Add a row to [[Local Docker Image and Container Inventory]]
   and a health-check line to the "Health check" block above.
6. Run `bash -n` to syntax-check the script before running.
7. Run the script and verify with `docker ps` + the health
   probes.

## Related

- [[Local Docker Image and Container Inventory]] — the
  reference this runbook is paired with.
- [[MCP Stack Bring-up Session 2026-06-17]] — the session
  that built both this runbook and the inventory.
- [[Container Security Defaults for Local Stacks]] — the
  policy this runbook follows.
