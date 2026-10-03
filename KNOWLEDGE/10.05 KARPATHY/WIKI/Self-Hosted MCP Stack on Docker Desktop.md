---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Self-Hosted MCP Stack on Docker Desktop

End-to-end personal OSINT + scraping + coding workstation stack the user
asked for on 2026-06-16. Deployed automatically at 22:00 PT by the
[[MCP Stack Deploy Cron Job]]. Selection rules, container-by-container
picks, and the rationale for what got rejected.

## The Stack (19 containers on `mcp-net`)

All containers share a user-defined bridge network `mcp-net`, run with
`--restart unless-stopped`, and are bound to `127.0.0.1` only — never
exposed on the LAN. Memory-capped per container. Managed by
[[MCP Stack Deploy Script]].

| Cat | Container | Image | Port | RAM | Notes |
|---|---|---|---|---|---|
| OSINT | mcp-firecrawl | mcp/firecrawl:latest | 3002→3000 | 512m | MCP-native scrape+crawl |
| OSINT | mcp-playwright | mcp/playwright:latest | 3003→8931 | 1024m | MCP browser automation |
| OSINT | mcp-gateway | docker/mcp-gateway:latest | 3100→3100 | 256m | MCP aggregator |
| OSINT | mcp-maigret | soxoj/maigret:latest | 3004→8000 | 512m | Username OSINT, 3000+ sites |
| OSINT | mcp-spiderfoot | ctdc/spiderfoot:latest | 5001→5001 | 512m | OSINT framework UI |
| SCRAPER | mcp-crawl4ai | unclecode/crawl4ai:latest | 11235→11235 | 1024m | LLM-friendly crawler |
| SCRAPER | mcp-scrapyd | scrapydata/scrapyd:latest | 6801→6800 | 256m | Scrapy spider host |
| DB | mcp-redis | redis:7-alpine | 6379→6379 | 256m | Cache, KV, queues |
| DB | mcp-meilisearch | getmeili/meilisearch:v1.10 | 7700→7700 | 512m | Typo-tolerant FTS |
| DB | mcp-qdrant | qdrant/qdrant:latest | 6333→6333 | 512m | Vector [[embeddings]] |
| DB | mcp-surrealdb | surrealdb/surrealdb:latest | 8000→8000 | 256m | Graph + doc + KV |
| DB | mcp-opensearch | opensearchproject/opensearch:2.18.0 | 9200→9200 | 1024m | Logs + analytics |
| DB | mcp-postgres-aux | postgres:16-alpine | 5433→5432 | 256m | Auxiliary DB (main pg16 runs separately) |
| DEV | mcp-code-server | lscr.io/linuxserver/code-server:latest | 8443→8443 | 1024m | VS Code in browser |
| DEV | mcp-theia | eclipse/theia:latest | 3000→3000 | 1024m | MS-telemetry-free alt IDE |
| DEV | mcp-jupyter | jupyter/datascience-notebook:latest | 8888→8888 | 1024m | Python+R+Julia notebook |
| DEV | mcp-ubuntu-base | ubuntu:22.04 | (none) | 128m | Raw ubuntu for ad-hoc hosting |

Aider was originally listed in the subagent's [[[[report]]]] but the official
`paulgauthier/aider:latest` image was too unstable to recommend as a
24/7 service. Drop it from the initial 10pm deploy; install it ad-hoc
on `mcp-ubuntu-base` when needed.

## What Was Rejected (and Why)

- **Maltego commercial / OSINT-Industries API** — license-locked or
  paywalled. No public container image.
- **OSINTgram** — no official Docker image; the unofficial ones are
  abandoned and auth-gated to Instagram.
- **SpiderFoot `smicallef/spiderfoot`** — does not exist on Docker Hub.
  `ctdc/spiderfoot` is the only viable SpiderFoot image (stale 2020,
  260k pulls, still works).
- **Weaviate** — duplicate vector store; we already have `chromadb`.
- **ChromaDB** — already running.
- **mysql:8.0** — already running, not in this stack.
- **postgres:17-alpine** — kept the 16-alpine for the aux DB since
  user already has 16 running.
- **OpenHands / browser-use (ghcr.io)** — verified but skipped from
  the initial 10pm deploy to keep the surface area small. Add later
  via `docker run` when needed.
- **theHarvester / holehe** — verified images exist but stale (2020,
  2023). SpiderFoot + maigret covers the same use cases more cleanly.
  Don't bother unless the user specifically asks.
- **Kasm forensic-OSINT / BlackArch / Athena OS** — full GUI
  distros, too heavy for the 15.5 GB host. Wrong category anyway.

## Memory Budget

| Active containers | Approx total RAM |
|---|---|
| 5 OSINT (max) | ~2.7 GB |
| 2 Scrapers | ~1.3 GB |
| 6 Databases (incl. opensearch JVM) | ~2.5 GB |
| 3 IDEs + ubuntu base | ~2.3 GB |
| **Always-on total** | **~8.8 GB** |

Host has 15.5 GB total. Leaves ~3 GB for Windows + Docker Desktop
overhead, ~3.7 GB for OSINT bursts and scraper jobs. Tight but
workable. If it OOMs, the first thing to drop is `mcp-opensearch` — its
JVM heap is the biggest single consumer.

## Sources

- [[RAW/2026-06-16 hermes session journal]] (16:42-16:59 entries)
- Subagent research [[[[report]]]] on disk: `/tmp/osint-stack-[[[[report]]]].md`
- All 18 candidate images verified against Docker Hub / GHCR registry
  APIs by the subagent before deploy

## Related

- [[MCP Stack Deploy Script]]
- [[MCP Stack Deploy Cron Job]]
- [[Container Security Defaults for Local Stacks]]
- [[n8n Container Setup on Docker Desktop]]
