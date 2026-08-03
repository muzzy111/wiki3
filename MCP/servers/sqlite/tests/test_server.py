"""Tests for the sqlite MCP server stub."""
import subprocess
import sys
from pathlib import Path


def test_stub_exits_nonzero():
    """Running the stub from a shell must exit non-zero and emit a draft notice."""
    py = sys.executable
    server = Path(__file__).parent.parent / "src" / "sqlite_server.py"
    r = subprocess.run([py, str(server)], capture_output=True, text=True, timeout=10)
    assert r.returncode != 0
    assert "draft" in (r.stderr + r.stdout).lower()
