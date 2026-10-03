---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Local Docker Image and Container Inventory

Reference for the Docker Desktop install on this machine. As of
2026-06-17, after the bring-up session that finally stood the planned
stack up. Updated whenever an image is pulled, a container is added,
or a port mapping changes.

## Host specs

- Docker Desktop 29.5.3
- Architecture: x86_64
- Total memory budget: 15.57 GiB
- Storage root: `/var/lib/docker` (Docker Desktop-managed)
- Backup target for named volumes: `C:\Users\Admin\docker-volumes\` (top-level parent)
- Script that manages the stack: `C:\Users\Admin\AppData\Local\hermes\scripts\start-mcp-stack.sh`
- Credentials: `C:\Users\Admin\AppData\Local\hermes\scripts\.mcp-stack.env` (loopback-only, dev creds)

## Currently running containers

| Name | Image | Port (host → container) | Memory cap | Volume root | Health probe | Auth |
|------|-------|------------------------|------------|-------------|--------------|------|
| `pg17` | `postgres:17-alpine` | 127.0.0.1:5432 → 5432 | 512 MB | `C:\Users\Admin\docker-volumes\postgres-17\data` | `psql -U localdev -d localdev -c "select 1"` | user `localdev` / pass from `.mcp-stack.env` |
| `redis7` | `redis:7-alpine` | 127.0.0.1:6379 → 6379 | 256 MB | `C:\Users\Admin\docker-volumes\redis-7\data` | `redis-cli ping` → `PONG` | none (loopback) |
| `surrealdb` | `surrealdb/surrealdb:latest` | 127.0.0.1:18000 → 8000 | 512 MB | `C:\Users\Admin\docker-volumes\surrealdb\data` | `GET http://127.0.0.1:18000/health` | user `root` / pass `root` |
| `qdrant` | `qdrant/qdrant:latest` | 127.0.0.1:6333 → 6333 | 768 MB | `C:\Users\Admin\docker-volumes\qdrant\data` | `GET http://127.0.0.1:6333/healthz` | none |
| `chroma` | `chromadb/chroma:latest` | 127.0.0.1:8001 → 8000 | 512 MB | `C:\Users\Admin\docker-volumes\chroma\data` | `GET http://127.0.0.1:8001/api/v1/heartbeat` (returns 410; service is up, endpoint deprecated) | none |
| `crawl4ai` | `unclecode/crawl4ai:latest` | 127.0.0.1:11235 → 11235 | 1 GB | `C:\Users\Admin\docker-volumes\crawl4ai\data` | `GET http://127.0.0.1:11235/health` | none |
| `code-server` | `lscr.io/linuxserver/code-server:latest` | 127.0.0.1:8443 → 8443 | 1 GB | `C:\Users\Admin\docker-volumes\code-server\config` | `GET http://127.0.0.1:8443/healthz` | first-run password is set on the container's first boot; check logs |
| `jenkins` | `jenkins/jenkins:latest` | 127.0.0.1:8080 → 8080 | 1 GB | `C:\Users\Admin\docker-volumes\jenkins\data` | `GET http://127.0.0.1:8080/login` | initial admin password in `jenkins_home/secrets/initialAdminPassword` |
| `matrix_conduit` | `matrixconduit/matrix-conduit:latest` | 0.0.0.0:6167 → 6167 | none set | (pre-existing, not part of the stack) | n/a | n/a |

Total memory cap of the stack: ~5.5 GB out of 15.57 GB Docker budget.
Headroom for the gateway when it lands.

## Why surrealdb is on 18000, not 8000

The host's port 8000 is held by `cvss.exe` (PID 4968, listening on
127.0.0.1:8000). cvss is a pre-existing Chromium-related process on
this machine, not part of our stack. Surrealdb's default port 8000
inside the container maps to 18000 on the host. Documented here so
the next person doesn't try to "fix" it back to 8000.

## All images present (after 2026-06-17 cleanup)

| Image | Size | Age | Used by | [[Status]] |
|-------|------|-----|---------|--------|
| `soxoj/maigret:latest` | 1.14 GB | 29 h | CLI tool, on-demand | available |
| `lscr.io/linuxserver/code-server:latest` | 1.04 GB | 36 h | `code-server` | running |
| `ghcr.io/paperclipai/[[paperclip]]:latest` | 4.95 GB | 4 d | (reserved) | available, not started |
| `docker/mcp-gateway:latest` | 144 MB | 5 d | gateway (agy owns this project) | available, not started |
| `docker-server:latest` | 4.95 GB | 6 d | (legacy MCP catalog) | available, not started, considered for removal |
| `surrealdb/surrealdb:latest` | 216 MB | 7 d | `surrealdb` | running |
| `unclecode/crawl4ai:latest` | 5.62 GB | 13 d | `crawl4ai` | running |
| `qdrant/qdrant:latest` | 270 MB | 2 w | `qdrant` | running |
| `jenkins/jenkins:latest` | 801 MB | 2 w | `jenkins` | running |
| `n8nio/n8n:latest` | 2.44 GB | 3 w | (intentionally down) | available, container Exited |
| `mcp/firecrawl:latest` | 532 MB | 3 w | stdio MCP server | available, not started (on-demand) |
| `postgres:17-alpine` | 400 MB | 4 w | `pg17` | running |
| `postgres:16-alpine` | 396 MB | 4 w | (unused — kept as fallback) | available, no container |
| `mcp/playwright:latest` | 1.44 GB | 5 w | stdio MCP server | available, not started (on-demand) |
| `ubuntu:22.04` | 119 MB | 5 w | base image for ad-hoc dev VMs | available, no container |
| `redis:7-alpine` | 57.8 MB | 5 w | `redis7` | running |
| `chromadb/chroma:latest` | 826 MB | 6 w | `chroma` | running |
| `mysql:8.0` | 1.1 GB | 6 w | (unused — kept as fallback) | available, no container |
| `alpine:3.20` | 12.2 MB | 2 mo | base image for ad-hoc containers | available |
| `paulgauthier/aider:latest` | 5.45 GB | 4 mo | CLI coding agent | available, run-on-demand |
| `n8nio/n8n:latest` | 2.44 GB | 3 w | (intentionally down per user 2026-06-17) | available, container Exited |

## Deleted in the 2026-06-17 cleanup

Eight images were removed (~14.5 GB reclaimed):

- `ctdc/spiderfoot` (5 y old, 287 MB)
- `vimagick/scrapyd` (2 y old, 756 MB)
- `scrapydata/scrapyd` (3 y old, 2.33 GB)
- `getmeili/meilisearch:v1.10` (20 mo old, 232 MB — no newer in inventory)
- `eclipse/theia` (8 y old, 1.17 GB)
- `jupyter/datascience-notebook` (2 y old, 8.31 GB)
- `ajeetraina777/penpot-docker-extension:3.0.1` (6 mo old, 164 MB, out of scope)
- `opensearchproject/opensearch:2.18.0` (17 mo old, 2.38 GB)

## Deliberately not started

These are available on the local Docker daemon but are NOT running as
background services. They are spawned on demand by an MCP host (agy,
claude-code, opencode) or wired up by a later phase.

- **`mcp/playwright`** — stdio MCP server for browser automation.
  Spawned by an MCP host with `docker run -i --rm mcp/playwright`. The
  image stays pulled so the spawn is instant.
- **`mcp/firecrawl`** — stdio MCP server wrapping firecrawl. Same
  pattern as playwright.
- **`docker/mcp-gateway`** — the gateway. The user (2026-06-17) said
  agy is still working on the message-board project that uses the
  gateway; do not touch.
- **`docker-server`** — looks like a legacy MCP catalog server. The
  newer `docker/mcp-gateway` supersedes it. Candidate for removal
  after the gateway phase is done.
- **`[[paperclip]]`** — full agent runtime. Has its own compose stack
  (db + app). Not started. Out of scope for the 2026-06-17 bring-up.
- **`aider`** — AI pair-programming CLI in a container. Run on demand
  with `docker run --rm -it -v $(pwd):/app paulgauthier/aider`.
- **`maigret`** — username hunter. Run on demand with
  `docker run --rm -it soxoj/maigret <username>`.
- **`n8n`** — workflow automation. The container `n8n` exists and is
  in Exited state. User said leave it down for now.
- **`ubuntu:22.04`** / **`alpine:3.20`** — base images, not started.

## Operational commands

Start the whole stack (idempotent):

```bash
bash /c/Users/Admin/AppData/Local/hermes/scripts/start-mcp-stack.sh
```

Stop the whole stack (in reverse dependency order):

```bash
docker stop code-server jenkins crawl4ai chroma qdrant surrealdb redis7 pg17
```

[[Status]] check:

```bash
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

Health check (all 8 services):

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

## Backup procedure

The stack's persistent state lives under
`C:\Users\Admin\docker-volumes\`. To back up, stop the stack (so
Postgres is consistent) and tar the directory:

```bash
docker stop code-server jenkins crawl4ai chroma qdrant surrealdb redis7 pg17
cd /c/Users/Admin
tar -czf docker-volumes-$(date +%Y%m%d).tar.gz docker-volumes/
docker start pg17 redis7 surrealdb qdrant chroma crawl4ai code-server jenkins
```

The script `start-mcp-stack.sh` will detect the already-running
containers and skip them, so it's safe to re-run after a backup.

## Related

- [[MCP Stack Bring-up Session 2026-06-17]] — the session that built
  this guide (what failed, what we learned).
- [[Container Security Defaults for Local Stacks]] — loopback
  binding, --memory caps, threat model, bulk cleanup (written
  2026-06-16 from the planning session).
- [[MCP Stack Deploy Script]] — the script itself, with design notes.
- [[pentest-ai Install on Windows]] — orthogonal Python tool, not a
  container.
- [[Karpathy 3-Folder Wiki Capture Workflow]] — the pipeline that
  produced this note.
