"""Filesystem MCP server (active).

Exposes four filesystem tools over a single vault root:
    read_file, write_file, list_directory, search_files.

Path-traversal protection: every path is resolved against vault_root and any
attempt to escape (via "../" or absolute paths) is rejected.
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:
    sys.stderr.write("mcp not installed; run pip install -e .\n")
    sys.exit(2)


VAULT_ROOT = Path(os.environ.get("LOOP_VAULT_ROOT", ".")).resolve()
mcp = FastMCP("loop-filesystem")


def _safe_path(rel: str) -> Path:
    """Resolve a relative path against the vault root; reject escape attempts."""
    if not rel or rel.startswith("\\0") or "\\0" in rel:
        raise ValueError("invalid path: empty or null-byte")
    p = (VAULT_ROOT / rel).resolve()
    if VAULT_ROOT not in p.parents and p != VAULT_ROOT:
        raise ValueError(f"path traversal blocked: {rel!r}")
    return p


@mcp.tool()
def read_file(path: str) -> str:
    """Read the contents of `path` (relative to vault root). Returns text."""
    p = _safe_path(path)
    if not p.is_file():
        raise FileNotFoundError(f"not a file: {path}")
    return p.read_text(encoding="utf-8")


@mcp.tool()
def write_file(path: str, content: str) -> str:
    """Write `content` to `path` (relative to vault root). Returns the absolute path."""
    p = _safe_path(path)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")
    return str(p)


@mcp.tool()
def list_directory(path: str = ".") -> list[str]:
    """List entries under `path` (relative to vault root). Returns absolute paths."""
    p = _safe_path(path)
    if not p.is_dir():
        raise NotADirectoryError(f"not a directory: {path}")
    return [str(x.relative_to(VAULT_ROOT)) for x in sorted(p.iterdir())]


@mcp.tool()
def search_files(pattern: str, path: str = ".") -> list[str]:
    """Search filenames matching the regex `pattern` under `path`."""
    p = _safe_path(path)
    if not p.is_dir():
        raise NotADirectoryError(f"not a directory: {path}")
    rx = re.compile(pattern)
    return [str(x.relative_to(VAULT_ROOT)) for x in p.rglob("*") if rx.search(x.name)]


if __name__ == "__main__":
    mcp.run(transport="stdio")
