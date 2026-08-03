"""Memory MCP server (active). Knowledge-graph style.

Tools:
    create_entities   - add entities with types/observations
    create_relations  - add directed relations between entities
    add_observations  - append observations to existing entities
    search_nodes      - simple substring search across all fields
    open_nodes        - fetch full records for a list of names
    read_graph        - dump entire graph

Storage: in-memory dict; reset on process restart. For persistence, replace
the dict with sqlite3 calls (deferred to the sqlite MCP server, state=draft).
"""
from __future__ import annotations

import os
import sys
from collections import defaultdict

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:
    sys.stderr.write("mcp not installed\n")
    sys.exit(2)


mcp = FastMCP("loop-memory")
GRAPH: dict[str, dict] = defaultdict(lambda: {"type": "", "observations": [], "relations": []})


@mcp.tool()
def create_entities(entities: list[dict]) -> list[dict]:
    """Create entities; ignores duplicates by name."""
    created = []
    for e in entities:
        name = e.get("name")
        if not name or name in GRAPH:
            continue
        GRAPH[name] = {
            "type": e.get("type", ""),
            "observations": list(e.get("observations", [])),
            "relations": [],
        }
        created.append({"name": name, "type": GRAPH[name]["type"]})
    return created


@mcp.tool()
def create_relations(relations: list[dict]) -> list[dict]:
    """Create directed edges (from, to, type). No-op if either node missing."""
    out = []
    for r in relations:
        a, b, t = r.get("from"), r.get("to"), r.get("type", "related_to")
        if a in GRAPH and b in GRAPH and not any(rel["to"] == b for rel in GRAPH[a]["relations"]):
            GRAPH[a]["relations"].append({"to": b, "type": t})
            out.append({"from": a, "to": b, "type": t})
    return out


@mcp.tool()
def add_observations(name: str, observations: list[str]) -> list[str]:
    """Append observations to an existing entity."""
    if name not in GRAPH:
        return []
    GRAPH[name]["observations"].extend(observations)
    return observations


@mcp.tool()
def search_nodes(query: str) -> list[dict]:
    """Substring search across names, types, and observations."""
    q = query.lower()
    out = []
    for name, rec in GRAPH.items():
        hay = (name + " " + rec["type"] + " " + " ".join(rec["observations"])).lower()
        if q in hay:
            out.append({"name": name, "type": rec["type"], "observations": rec["observations"]})
    return out


@mcp.tool()
def open_nodes(names: list[str]) -> list[dict]:
    """Return full records for the requested names."""
    return [{"name": n, **GRAPH[n]} for n in names if n in GRAPH]


@mcp.tool()
def read_graph() -> dict:
    """Dump entire graph."""
    return dict(GRAPH)


if __name__ == "__main__":
    mcp.run(transport="stdio")
