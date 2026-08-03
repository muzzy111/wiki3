---
title: "MCP Servers Catalog"
type: catalog
status: active
---

# MCP Servers Catalog

> Catalog of MCP servers available to the LOOP cowork vault. Per-server detail lives at `MCP/servers/<id>/`.

## Servers

| ID | Name | State | Tools | Owned By |
|---|---|---|---|---|
| `filesystem` | Filesystem | active | read_file, write_file, list_directory, search_files | 4.0TOOLS |
| `memory` | Memory (knowledge graph) | active | create_entities, create_relations, add_observations, search_nodes, open_nodes, read_graph | 5.0MEMORY |
| `fetch` | Fetch | active | fetch_url, extract_text, extract_links | 3.0RESEARCHER |
| `sqlite` | SQLite | draft | query, execute, list_tables (planned) | 4.0TOOLS |
| `n8n` | n8n workflow automation | draft | list_workflows, execute_workflow, create_workflow (planned) | 4.0TOOLS |

## How to Add a New Server

1. Spec it in the relevant role (Coordinator authors `MCP/servers/<id>/server-spec.md`).
2. Hand off to Coder for the implementation (`src/<id>_server.py`).
3. Hand off to Tools for wiring (Docker, smoke call, deployment record).
4. Update this README and `MCP/servers/Servers Index.md`.

## Archive

- `MCP/archive/n8n-pre-migration.md` — pre-migration reference for n8n (folded into `MCP/servers/n8n/README.md`).
