"""Tests for the filesystem MCP server.

Path-traversal protection is the most important invariant.
"""
from pathlib import Path
import os
import sys
import pytest

sys.path.insert(0, str(Path(__file__).parent.parent / "src"))
# Configure the vault before importing the server module.
os.environ.setdefault("LOOP_VAULT_ROOT", str(Path(__file__).parent))

from filesystem_server import _safe_path, read_file, write_file, list_directory, search_files


@pytest.fixture
def vault_root(tmp_path):
    """Set up a tiny vault for testing."""
    (tmp_path / "a.md").write_text("hello", encoding="utf-8")
    (tmp_path / "sub").mkdir()
    (tmp_path / "sub" / "b.md").write_text("world", encoding="utf-8")
    os.environ["LOOP_VAULT_ROOT"] = str(tmp_path)
    # re-import module to pick up new env var? In practice FastMCP reads at call time.
    # Force re-bind:
    import filesystem_server as fs_mod
    fs_mod.VAULT_ROOT = tmp_path.resolve()
    return tmp_path


def test_safe_path_inside_vault(vault_root):
    p = _safe_path("a.md")
    assert p == vault_root / "a.md"


def test_safe_path_blocks_traversal(vault_root):
    with pytest.raises(ValueError, match="traversal"):
        _safe_path("../../etc/passwd")


def test_safe_path_blocks_absolute_outside(vault_root):
    with pytest.raises(ValueError, match="traversal"):
        _safe_path("/etc/passwd")


def test_read_file_happy(vault_root):
    assert read_file("a.md") == "hello"


def test_read_file_missing_raises(vault_root):
    with pytest.raises(FileNotFoundError):
        read_file("not-real.md")


def test_write_then_read_roundtrip(vault_root):
    write_file("c.md", "test content")
    assert read_file("c.md") == "test content"


def test_list_directory(vault_root):
    items = list_directory(".")
    assert "a.md" in items
    assert "sub" in items


def test_search_files(vault_root):
    results = search_files(r"\.md$", ".")
    assert any("a.md" in r for r in results)
