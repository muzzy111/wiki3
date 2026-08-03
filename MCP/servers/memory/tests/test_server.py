"""Tests for the memory MCP server."""
import os, sys
from pathlib import Path
import pytest

sys.path.insert(0, str(Path(__file__).parent.parent / "src"))
import memory_server as ms


@pytest.fixture(autouse=True)
def reset_graph():
    ms.GRAPH.clear()
    yield
    ms.GRAPH.clear()


def test_create_entities_returns_created():
    out = ms.create_entities([{"name": "Alice", "type": "person", "observations": ["hello"]}])
    assert out[0]["name"] == "Alice"


def test_create_entities_dedup():
    ms.create_entities([{"name": "Alice", "type": "person"}])
    out = ms.create_entities([{"name": "Alice", "type": "person"}])
    assert out == []


def test_create_relations_creates_edge():
    ms.create_entities([{"name": "A"}, {"name": "B"}])
    out = ms.create_relations([{"from": "A", "to": "B", "type": "knows"}])
    assert len(out) == 1


def test_create_relations_skips_missing_nodes():
    out = ms.create_relations([{"from": "A", "to": "B"}])
    assert out == []


def test_add_observations_appends():
    ms.create_entities([{"name": "A", "observations": ["o1"]}])
    ms.add_observations("A", ["o2"])
    assert "o2" in ms.GRAPH["A"]["observations"]


def test_search_nodes_substring():
    ms.create_entities([{"name": "Alice", "observations": ["researcher"]}])
    hits = ms.search_nodes("alice")
    assert len(hits) == 1


def test_open_nodes_returns_existing_only():
    ms.create_entities([{"name": "A"}])
    out = ms.open_nodes(["A", "Missing"])
    assert len(out) == 1
    assert out[0]["name"] == "A"


def test_read_graph_is_dict():
    ms.create_entities([{"name": "A"}])
    g = ms.read_graph()
    assert "A" in g
