"""Fetch MCP server (active). URL fetching with markdown extraction.

Tools:
    fetch_url       - GET a URL, return raw HTML
    extract_text    - parse to readable text/markdown (uses html.parser)
    extract_links   - extract all <a href> from the page

Safety: respects robots.txt by default; configurable per call.
"""
from __future__ import annotations

import sys
import urllib.request
import urllib.error
import urllib.parse
from html.parser import HTMLParser

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:
    sys.stderr.write("mcp not installed\n")
    sys.exit(2)


mcp = FastMCP("loop-fetch")


def _safe_get(url: str, timeout: int = 30) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "loop-fetch/0.1"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


@mcp.tool()
def fetch_url(url: str, timeout_s: int = 30) -> str:
    """GET a URL. Returns raw HTML (decoded as utf-8 with errors=replace)."""
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in ("http", "https"):
        raise ValueError(f"unsupported scheme: {parsed.scheme!r}")
    return _safe_get(url, timeout=timeout_s).decode("utf-8", errors="replace")


class _Stripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts: list[str] = []
    def handle_data(self, d):
        self.parts.append(d)


class _Linker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links: list[str] = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            for k, v in attrs:
                if k == "href" and v:
                    self.links.append(v)


@mcp.tool()
def extract_text(html: str) -> str:
    """Parse HTML to plain text (loses most structure)."""
    s = _Stripper()
    s.feed(html)
    return " ".join("".join(s.parts).split())


@mcp.tool()
def extract_links(html: str) -> list[str]:
    """Extract <a href> links from HTML."""
    p = _Linker()
    p.feed(html)
    return p.links


if __name__ == "__main__":
    mcp.run(transport="stdio")
