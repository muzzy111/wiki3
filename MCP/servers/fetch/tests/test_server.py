"""Tests for the fetch MCP server (URL parsing and link extraction)."""
import sys
from pathlib import Path
import pytest

sys.path.insert(0, str(Path(__file__).parent.parent / "src"))
from fetch_server import extract_text, extract_links


def test_extract_text_strips_html():
    html = "<html><body><h1>Title</h1><p>Hello <b>world</b></p></body></html>"
    out = extract_text(html)
    assert "Title" in out and "Hello" in out and "world" in out
    assert "<" not in out and ">" not in out


def test_extract_links_finds_anchors():
    html = "<a href='https://example.com'>ex</a><a href='/foo'>foo</a>"
    out = extract_links(html)
    assert "https://example.com" in out
    assert "/foo" in out


def test_extract_links_empty_when_no_anchors():
    assert extract_links("<p>just text</p>") == []


def test_extract_links_ignores_other_attrs():
    html = "<div class='a' id='b'>just text</div>"
    assert extract_links(html) == []


def test_extract_text_empty_input():
    assert extract_text("") == ""
