"""Tests for the n8n MCP server stub."""
import subprocess, sys
from pathlib import Path


def test_stub_exits_nonzero():
    py = sys.executable
    server = Path(__file__).parent.parent / "src" / "n8n_server.py"
    r = subprocess.run([py, str(server)], capture_output=True, text=True, timeout=10)
    assert r.returncode != 0
    assert "draft" in (r.stderr + r.stdout).lower()
