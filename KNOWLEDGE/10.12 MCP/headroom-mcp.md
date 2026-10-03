---
title: "Headroom MCP Integration"
type: dashboard
cssclasses: [cards]
tags:
  - mcp-server
  - corpus/github
  - status/active
created: 2026-07-05
modified: 2026-07-05
---

# Headroom MCP [[Integration]]

> [!info] MCP Server Profile
> **Type:** python
> **Framework:** MCP [[integration]] helpers (library)
> **Source:** `C:/Users/Admin/Documents/GitHub/headroom - Copy/headroom/integrations/mcp`
> **Repo:** https://github.com/headroomlabs-ai/headroom

## Description

Compression helpers for MCP tool outputs. Not a standalone server — provides compressor + client wrapper + proxy config for hosts that wrap their own MCP servers.

## Quick reference

| Field | Value |
|-------|-------|
| Type | python |
| Framework | MCP [[integration]] helpers (library) |
| Source path | `C:/Users/Admin/Documents/GitHub/headroom - Copy/headroom/integrations/mcp` |
| Repo | https://github.com/headroomlabs-ai/headroom |
| Tools detected | 0 |

## Source files

### `C:/Users/Admin/Documents/GitHub/headroom - Copy/headroom/integrations/mcp/server.py`

```python
"""Headroom MCP integration helpers for compressing tool outputs.

This module currently provides these MCP integration surfaces:

1. HeadroomMCPCompressor - core compression logic for MCP tool results
2. compress_tool_result() - standalone helper for host applications
3. HeadroomMCPClientWrapper - client wrapper that compresses tool outputs
4. create_headroom_mcp_proxy() - configuration helper for custom proxy setups

The key insight: MCP tool outputs are the PERFECT use case for Headroom.
They're often large (100s-1000s of items), structured (JSON), and contain
mostly low-relevance data with a few critical items (errors, matches).

Example - Custom proxy configuration:
    ```python
    # Build config for your own MCP proxy/server wrapper
    proxy_config = create_headroom_mcp_proxy(
        upstream_servers=[
            ("slack", slack_server),
            ("database", db_server),
            ("github", github_server),
        ],
        config=HeadroomConfig(),
    )
    ```

Example - Standalone Function:
    ```python
    # In your MCP host application
    result = await mcp_client.call_tool("search_logs", {"service": "api"})

    # Compress before adding to context
    compressed = compress_tool_result(
        content=result,
        tool_name="search_logs",
        tool_args={"service": "api"},
        user_query="find errors in api service",
    )
    ```

Example - Middleware (for MCP client libraries):
    ```python
    # Wrap your MCP client's transport
    middleware = HeadroomMCPMiddleware(config)
    client = MCPClient(transport=middleware.wrap(base_transport))
    ```
"""

from __future__ import annotations

import json
import re
from collections.abc import Callable
from dataclasses import dataclass, field
from typing import Any

from headroom.config import HeadroomConfig, SmartCrusherConfig
from headroom.providers.openai import OpenAIProvider
from headroom.transforms.smart_crusher import SmartCrusher


@dataclass
class MCPCompressionResult:
    """Result of compressing an MCP tool output."""

    original_content: str
    compressed_content: str
    original_tokens: int
    compressed_tokens: int
    tokens_saved: int
    compression_ratio: float
    items_before: int | None
    items_after: int | None
    errors_preserved: int
    was_compressed: bool
    tool_name: str
    context_used: str


@dataclass
class MCPToolProfile:
    """Configuration profile for a specific MCP tool.

    Different tools may need different compression strategies:
    - Slack search: High error preservation, relevance to query
    - Database query: Schema detection, anomaly preservation
    - File listing: Minimal compression (paths are important)
    """

    tool_name_pattern: str  # Regex pattern to match tool names
    enabled: bool = True
    max_items: int = 20
    min_tokens_to_compress: int = 500
    preserve_error_keywords: set[str] = field(
        default_factory=lambda: {"error", "failed", "exception", "critical", "fatal"}
    )
    always_keep_fields: set[str] = field(default_factory=set)  # Fields to never drop


# Default profiles for common MCP servers
DEFAULT_MCP_PROFILES: list[MCPToolProfile] = [
    # Slack - preserve errors and messages matching query
    MCPToolProfile(
        tool_name_pattern=r".*slack.*",
        max_items=25,
        preserve_error_keywords={"error", "failed", "exception", "bug", "issue", "broken"},
    ),
    # Database - preserve errors and anomalies
    MCPToolProfile(
        tool_name_pattern=r".*database.*|.*sql.*|.*query.*",
        max_items=30,
        preserve_error_keywords={"error", "null", "failed", "exception", "violation"},
    ),
    # GitHub - preserve errors and high-priority issues
    MCPToolProfile(
        tool_name_pattern=r".*github.*|.*git.*",
        max_items=20,
        preserve_error_keywords={"error", "bug", "critical", "urgent", "blocker"},
    ),
    # Logs - preserve ALL errors
    MCPToolProfile(
        tool_name_pattern=r".*log.*|.*trace.*",
        max_items=40,  # Keep more for logs
        preserve_error_keywords={"error", "fatal", "critical", "exception", "failed", "panic"},
    ),
    # File system - minimal compression (paths matter)
    MCPToolProfile(
        tool_name_pattern=r".*file.*|.*fs.*|.*directory.*",
        max_items=50,
        min_tokens_to_compress=1000,  # Higher threshold
    ),
    # Generic fallback
    MCPToolProfile(
        tool_name_pattern=r".*",
        max_items=20,
    ),
]


class HeadroomMCPCompressor:
    """Core compression logic for MCP tool outputs.

    This class handles the actual compression of MCP tool results.
    It's used by both the proxy server and standalone functions.
    """

    def __init__(
        self,
        config: HeadroomConfig | None = None,
        profiles: list[MCPToolProfile] | None = None,
        token_counter: Callable[[str], int] | None = None,
    ):
        """Initialize MCP compressor.

        Args:
            config: Headroom configuration.
            profiles: Tool-specific compression profiles.
            token_counter: Function to count tokens. Uses tiktoken if None.
        """
        self.config = config or HeadroomConfig()
        self.profiles = profiles or DEFAULT_MCP_PROFILES

        # Initialize token counter
        if token_counter:
            self._count_tokens = token_counter
        else:
            provider = OpenAIProvider()
            counter = provider.get_token_counter("gpt-4o")
            self._count_tokens = counter.count_text

    def get_profile(self, tool_name: str) -> MCPToolProfile:
        """Get the compression profile for a tool."""
        for profile in self.profiles:
            if re.match(profile.tool_name_pattern, tool_name, re.IGNORECASE):
                return profile
        # Return last profile (generic fallback)
        return self.profiles[-1]

    def compress(
        self,
        content: str,
        tool_name: str,
        tool_args: dict[str, Any] | None = None,
        user_query: str = "",
    ) -> MCPCompressionResult:
        """Compress MCP tool output.

        Args:
            content: Raw tool output (usually JSON string).
            tool_name: Name of the MCP tool (e.g., "mcp__slack__search").
            tool_args: Arguments passed to the tool (used for context).
            user_query: User's original query (for relevance scoring).

        Returns:
            MCPCompressionResult with compressed content and metrics.
        """
        profile = self.get_profile(tool_name)
        original_tokens = self._count_tokens(content)

        # Build context for relevance scoring
        context_parts = []
        if user_query:
            context_parts.append(user_query)
        if tool_args:
            context_parts.append(json.dumps(tool_args))
        context = " ".join(context_parts)

        # Check if compression is needed
        if not profile.enabled or original_tokens < profile.min_tokens_to_compress:
            return MCPCompressionResult(
                original_content=content,
                compressed_content=content,
                original_tokens=original_tokens,
                compressed_tokens=original_tokens,
                tokens_saved=0,
                compression_ratio=0.0,
                items_before=None,
                items_after=None,
                errors_preserved=0,
                was_compressed=False,
                tool_name=tool_name,
                context_used=context,
            )

        # Try to parse as JSON
        try:
            json.loads(content)
        except json.JSONDecodeError:
            # Not JSON, return as-is
            return MCPCompressionResult(
                original_content=content,
                compressed_content=content,
                original_tokens=original_tokens,
                compressed_tokens=original_tokens,
                tokens_saved=0,
                compression_ratio=0.0,
                items_before=None,
                items_after=None,
                errors_preserved=0,
                was_compressed=False,
                tool_name=tool_name,
                context_used=context,
            )

        # Find arrays to compress
        items_before = 0
        items_after = 0
        errors_preserved = 0

        # Create SmartCrusher with profile settings.
        #
        # The MCP integration emits JSON-shaped output that downstream
        # tool consumers parse and iterate. The PR4 lossless path
        # substitutes a CSV+schema STRING in place of arrays — great
        # for LLM prompts but wire-format-incompatible with consumers
        # that expect JSON arrays. So we keep the runtime MCP wrapper
        # on the lossy + CCR-Dropped path: the LLM sees row-level
        # subsets inline, with the full payload retrievable via CCR
        # cache. (Same retention semantics as Python's pre-PR4
        # SmartCrusher behavior.)
        smart_config = SmartCrusherConfig(
            enabled=True,
            min_tokens_to_crush=profile.min_tokens_to_compress,
            max_items_after_crush=profile.max_items,
        )
        crusher = SmartCrusher(config=smart_config, with_compaction=False)  # type: ignore[arg-type]

        # Build messages for SmartCrusher (it expects conversation format)
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": context or f"Process {tool_name} results"},
            {
                "role": "assistant",
                "content": None,
                "tool_calls": [
                    {
                        "id": "call_1",
                        "function": {"name": tool_name, "arguments": json.dumps(tool_args or {})},
                    }
                ],
            },
            {"role": "tool", "content": content, "tool_call_id": "call_1"},
        ]

        # Create tokenizer wrapper
        class TokenizerWrapper:
            def __init__(self, count_fn: Any) -> None:
                self._count = count_fn

            def count_text(self, text: str) -> int:
                result = self._count(text)
                return int(result) if result is not None else 0

            def count_messages(self, messages: list[dict[str, Any]]) -> int:
                total = 0
                for msg in messages:
                    if msg.get("content"):
                        total += self._count(str(msg["content"]))
                return total

        tokenizer = TokenizerWrapper(self._count_tokens)

        # Apply SmartCrusher
        result = crusher.apply(messages, tokenizer=tokenizer)  # type: ignore[arg-type]
        compressed_content = result.messages[-1]["content"]

        # Remove any Headroom markers for clean output
        compressed_content = re.sub(r"\n<headroom:[^>]+>", "", compressed_content)

        # Count items and errors
        try:
            original_data = json.loads(content)
            compressed_data = json.loads(compressed_content)

            # Find the array in original
            for _key, value in original_data.items():
                if isinstance(value, list):
                    items_before = len(value)
                    break

            # Find the array in compressed
            for _key, value in compressed_data.items():
                if isinstance(value, list):
                    items_after = len(value)
                    # Count errors preserved
                    for item in value:
                        item_str = str(item).lower()
                        if any(kw in item_str for kw in profile.preserve_error_keywords):
                            errors_preserved += 1
                    break
        except (json.JSONDecodeError, AttributeError):
            pass

        compressed_tokens = self._count_tokens(compressed_content)
        tokens_saved = original_tokens - compressed_tokens
        compression_ratio = tokens_saved / original_tokens if original_tokens > 0 else 0.0

        return MCPCompressionResult(
            original_content=content,
            compressed_content=compressed_content,
            original_tokens=original_tokens,
            compressed_tokens=compressed_tokens,
            tokens_saved=tokens_saved,
            compression_ratio=compression_ratio,
            items_before=items_before,
            items_after=items_after,
            errors_preserved=errors_preserved,
            was_compressed=True,
            tool_name=tool_name,
            context_used=context,
        )


def compress_tool_result(
    content: str,
    tool_name: str,
    tool_args: dict[str, Any] | None = None,
    user_query: str = "",
    config: HeadroomConfig | None = None,
) -> str:
    """Compress an MCP tool result (standalone function).

    This is the simplest way to use Headroom with MCP in your host application.

    Args:
        content: Raw tool output.
        tool_name: Name of the MCP tool.
        tool_args: Arguments passed to the tool.
        user_query: User's query for relevance scoring.
        config: Optional Headroom configuration.

    Returns:
        Compressed content string.

    Example:
        ```python
        # In your MCP host application
        result = await client.call_tool("search_logs", {"service": "api"})

        compressed = compress_tool_result(
            content=result,
            tool_name="search_logs",
            tool_args={"service": "api"},
            user_query="find errors",
        )

        messages.append({"role": "tool", "content": compressed})
        ```
    """
    compressor = HeadroomMCPCompressor(config=config)
    result = compressor.compress(
        content=content,
        tool_name=tool_name,
        tool_args=tool_args,
        user_query=user_query,
    )
    return result.compressed_content


def compress_tool_result_with_metrics(
    content: str,
    tool_name: str,
    tool_args: dict[str, Any] | None = None,
    user_query: str = "",
    config: HeadroomConfig | None = None,
) -> MCPCompressionResult:
    """Compress an MCP tool result and return full metrics.

    Same as compress_tool_result but returns detailed metrics.

    Returns:
        MCPCompressionResult with all compression metrics.
    """
    compressor = HeadroomMCPCompressor(config=config)
    return compressor.compress(
        content=content,
        tool_name=tool_name,
        tool_args=tool_args,
        user_query=user_query,
    )


class HeadroomMCPClientWrapper:
    """Wrapper for MCP clients that automatically compresses tool results.

    This wraps an MCP client to transparently compress all tool outputs.

    Example:
        ```python
        from mcp import Client
        from headroom.integrations.mcp import HeadroomMCPClientWrapper

        # Wrap your MCP client
        base_client = Client(transport)
        client = HeadroomMCPClientWrapper(base_client)

        # Use normally - compression is automatic
        result 

... [truncated at 15,000 bytes; full source at C:/Users/Admin/Documents/GitHub/headroom - Copy/headroom/integrations/mcp/server.py]
```

### `C:/Users/Admin/Documents/GitHub/headroom - Copy/headroom/memory/mcp_server.py`

```python
"""Headroom Memory MCP Server.

A stdio MCP server that exposes headroom's memory backend as tools
that Codex (or any MCP-compatible client) can call natively.

Tools:
    memory_search  — semantic search across stored memories
    memory_save    — persist a new fact/decision/convention

Design:
    - Embedder is pre-loaded at startup (no cold-start on first query)
    - On startup, any memories missing vector [[embeddings]] are re-indexed
      (fixes interop gap when memories were saved via a different path)
    - Save always generates [[embeddings]] inline

Usage:
    # Standalone (for testing):
    python -m headroom.memory.mcp_server --db /path/to/.headroom/memory.db

    # Registered in Codex config.toml (done by `headroom wrap codex --memory`):
    [mcp_servers.headroom_memory]
    command = "python"
    args = ["-m", "headroom.memory.mcp_server", "--db", ".headroom/memory.db"]
"""

from __future__ import annotations

import argparse
import asyncio
import logging
import os
import sys
from pathlib import Path
from typing import Any

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import TextContent, Tool

from headroom.memory.backends.local import LocalBackend, LocalBackendConfig

logger = logging.getLogger("headroom.memory.mcp")

# ---------------------------------------------------------------------------
# Tool definitions
# ---------------------------------------------------------------------------

_TOOLS = [
    Tool(
        name="memory_search",
        description=(
            "Search persistent memory for relevant knowledge from prior sessions. "
            "Use this for questions about architecture, conventions, prior decisions, "
            "project context, user preferences, org info, codenames, debugging history, "
            "or anything that might have been discussed before."
        ),
        inputSchema={
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Natural-language search query.",
                },
                "top_k": {
                    "type": "integer",
                    "description": "Max results to return (default 10).",
                    "default": 10,
                },
            },
            "required": ["query"],
        },
    ),
    Tool(
        name="memory_save",
        description=(
            "Save information to persistent memory for future sessions. "
            "Use this for decisions, conventions, architecture context, "
            "user preferences, project facts, or anything worth remembering.\n\n"
            "IMPORTANT: Break information into atomic facts — one fact per "
            "entry in the 'facts' array. Each fact should be a single, "
            "self-contained statement that answers one question. "
            "Do NOT combine multiple facts into one string.\n\n"
            "Good:  facts: ['Repo owner is Tejas C.', 'User prefers dark mode']\n"
            "Bad:   facts: ['Repo owner is Tejas C. Prefers dark mode.']"
        ),
        inputSchema={
            "type": "object",
            "properties": {
                "facts": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": (
                        "Array of atomic facts to save. Each entry should be "
                        "one self-contained fact. The system stores and indexes "
                        "each fact separately for precise retrieval."
                    ),
                },
                "importance": {
                    "type": "number",
                    "description": "0.0 (low) to 1.0 (critical). Default 0.7.",
                    "default": 0.7,
                },
            },
            "required": [],
        },
    ),
]


# ---------------------------------------------------------------------------
# Startup: pre-load embedder + re-index unembedded memories
# ---------------------------------------------------------------------------


async def _warm_up_backend(backend: LocalBackend, user_id: str) -> None:
    """Pre-load the embedder and re-index memories that lack [[embeddings]].

    Memories saved via other paths (e.g. Claude Code proxy direct SQL)
    may exist in the store but have no vector [[embeddings]].  This scans
    for those and re-indexes them so vector search works across [[agents]].
    """
    await backend._ensure_initialized()
    hm = backend._hierarchical_memory
    if hm is None:
        return

    # Force-load the embedder now (not lazily on first search)
    _dummy = await hm._embedder.embed("warmup")
    logger.info("Memory MCP: embedder pre-loaded")

    # Ensure ALL memories are in the vector index.
    # Memories saved via other [[agents]] (Claude Code proxy, direct SQL) may
    # exist in the store but not be indexed — re-embed and index them all.
    all_memories = await backend.get_user_memories(user_id, limit=500)
    if not all_memories:
        return

    memories_missing_embeddings = [mem for mem in all_memories if mem.embedding is None]
    if memories_missing_embeddings:
        [[embeddings]] = await hm._embedder.embed_batch(
            [mem.content for mem in memories_missing_embeddings]
        )
        for mem, embedding in zip(memories_missing_embeddings, [[embeddings]]):
            mem.embedding = embedding
        await hm._store.save_batch(memories_missing_embeddings)

    indexed = await hm._vector_index.index_batch(all_memories)
    logger.info(f"Memory MCP: indexed {indexed} memories into vector store")


# ---------------------------------------------------------------------------
# MCP Server
# ---------------------------------------------------------------------------


def create_memory_server(db_path: str, user_id: str = "default") -> Server:
    """Create an MCP server backed by headroom's local memory."""

    server = Server("headroom-memory")
    _backend: LocalBackend | None = None
    _init_task: asyncio.Task | None = None

    async def _init_backend() -> LocalBackend:
        """Initialize backend with ONNX embedder (fast, no PyTorch)."""
        nonlocal _backend
        config = LocalBackendConfig(db_path=db_path, embedder_backend="onnx")
        _backend = LocalBackend(config)
        await _warm_up_backend(_backend, user_id)
        logger.info(f"Memory MCP: ready (db={db_path}, user={user_id})")
        return _backend

    async def _get_backend() -> LocalBackend:
        nonlocal _backend, _init_task
        if _backend is not None:
            return _backend
        # Wait for background [[init]] if it's running
        if _init_task is not None:
            await _init_task
            return _backend  # type: ignore[return-value]
        # Fallback: [[init]] inline (shouldn't normally happen)
        return await _init_backend()

    @server.list_tools()
    async def list_tools() -> list[Tool]:
        # Kick off background [[init]] on first list_tools (called at MCP handshake)
        nonlocal _init_task
        if _backend is None and _init_task is None:
            _init_task = asyncio.create_task(_init_backend())
        return _TOOLS

    @server.call_tool()
    async def call_tool(name: str, arguments: dict) -> list[TextContent]:
        backend = await _get_backend()

        if name == "memory_search":
            return await _handle_search(backend, arguments, user_id)
        elif name == "memory_save":
            return await _handle_save(backend, arguments, user_id)

        return [TextContent(type="text", text=f"Unknown tool: {name}")]

    return server


async def _handle_search(
    backend: LocalBackend, arguments: dict[str, Any], user_id: str
) -> list[TextContent]:
    query = arguments.get("query", "")
    top_k = arguments.get("top_k", 10)

    if not query:
        return [TextContent(type="text", text="Error: query is required")]

    try:
        # Over-fetch to compensate for filtering out superseded memories
        results = await backend.search_memories(
            query=query,
            user_id=user_id,
            top_k=top_k * 3,
            include_related=True,
        )

        if not results:
            return [TextContent(type="text", text="No memories found.")]

        # Filter out superseded memories — only return current/active ones.
        # Re-check the store because in-memory HNSW metadata may be stale.
        active_results = []
        for r in results:
            if getattr(r.memory, "superseded_by", None):
                continue
            # Double-check against the store for recently superseded memories
            try:
                stored = await backend.get_memory(r.memory.id)
                if stored and getattr(stored, "superseded_by", None):
                    continue
            except Exception:
                pass
            active_results.append(r)

        if not active_results:
            return [TextContent(type="text", text="No memories found.")]

        # Trim to requested top_k
        active_results = active_results[:top_k]

        lines = []
        for i, r in enumerate(active_results, 1):
            score = f"{r.score:.2f}" if hasattr(r, "score") else "?"
            lines.append(f"{i}. [relevance={score}] {r.memory.content}")
            if hasattr(r, "related_entities") and r.related_entities:
                lines.append(f"   Related: {', '.join(r.related_entities[:3])}")

        return [TextContent(type="text", text="\n".join(lines))]
    except Exception as e:
        logger.error(f"memory_search failed: {e}")
        return [TextContent(type="text", text=f"Search error: {e}")]


# Similarity threshold for auto-supersession: if a new memory is this
# similar to an existing one, it replaces (supersedes) the old one.
_SUPERSEDE_SIMILARITY = 0.70


async def _handle_save(
    backend: LocalBackend, arguments: dict[str, Any], user_id: str
) -> list[TextContent]:
    facts = arguments.get("facts", [])
    importance = arguments.get("importance", 0.7)

    # Backward compat: accept single "content" string too
    if not facts:
        content = arguments.get("content", "")
        if content:
            facts = [content]

    if not facts:
        return [TextContent(type="text", text="Error: facts array is required")]

    try:
        saved = 0
        superseded = 0
        results_lines: list[str] = []

        for fact in facts:
            fact = fact.strip()
            if not fact:
                continue

            # Check for semantically similar existing memory to auto-supersede
            superseded_id: str | None = None
            try:
                existing = await backend.search_memories(
                    query=fact,
                    user_id=user_id,
                    top_k=3,
                )
                for r in existing:
                    if getattr(r.memory, "superseded_by", None):
                        continue
                    if r.score >= _SUPERSEDE_SIMILARITY:
                        superseded_id = r.memory.id
                        logger.info(
                            f"Memory MCP: auto-superseding [{r.memory.id[:8]}] "
                            f"(similarity={r.score:.2f}): {r.memory.content[:60]}"
                        )
                        break
            except Exception:
                pass

            if superseded_id:
                memory = await backend.update_memory(
                    memory_id=superseded_id,
                    new_content=fact,
                )
                results_lines.append(
                    f"  updated [{superseded_id[:8]}->{memory.id[:8]}]: {fact[:60]}"
                )
                superseded += 1
            else:
                memory = await backend.save_memory(
                    content=fact,
                    user_id=user_id,
                    importance=importance,
                )
                results_lines.append(f"  saved [{memory.id[:8]}]: {fact[:60]}")
                saved += 1

        summary = f"Saved {saved} new, updated {superseded} existing ({saved + superseded} total)"
        return [TextContent(type="text", text=summary + "\n" + "\n".join(results_lines))]
    except Exception as e:
        logger.error(f"memory_save failed: {e}")
        return [TextContent(type="text", text=f"Save error: {e}")]


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------


async def _run(db_path: str, user_id: str) -> None:
    server = create_memory_server(db_path, user_id)
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())


def main() -> None:
    parser = argparse.ArgumentParser(description="Headroom Memory MCP Server")
    parser.add_argument(
        "--db",
        default=str(Path.cwd() / ".headroom" / "memory.db"),
        help="Path to memory SQLite database",
    )
    parser.add_argument(
        "--user",
        default=os.environ.get("USER", os.environ.get("USERNAME", "default")),
        help="User ID for memory scoping",
    )
    args = parser.parse_args()

    # Skip HuggingFace model freshness checks — use cached models only.
    # This eliminates 1-2s of HTTP HEAD requests on every startup.
    os.environ.setdefault("HF_HUB_OFFLINE", "1")
    os.environ.setdefault("TRANSFORMERS_OFFLINE", "1")

    # Log to stderr (MCP uses stdout for protocol)
    logging.basicConfig(
        level=logging.INFO,
        stream=sys.stderr,
        format="%(name)s: %(message)s",
    )

    asyncio.run(_run(args.db, args.user))


if __name__ == "__main__":
    main()

```


## See also

- [[10.12 MCP]] — sector index
- [[pentest-ai-mcp]]
- [[omniwire-mcp]]
- [[ponytail-mcp]]
- [[supermemory-mcp]]
- [[mcp-code-executor]]
