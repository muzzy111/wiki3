"""Tests for hermes_bus.session_start.

session_start is a thin CLI layer that calls:
    vault_init.ensure(...)
    orchestrator.run_once(...)
    inter_agent.poll_all_inboxes(...)
We verify the entry point composes those correctly and reports outcomes.
"""

from __future__ import annotations

import io
import json
import sys
from pathlib import Path

import pytest

from hermes_bus import inter_agent, orchestrator, session_start


@pytest.fixture
def stub_runner(monkeypatch):
    """Patch the AgentRunner so we never spawn a real subprocess."""
    from hermes_bus.agent_runner import ProcessResult

    class _Runner:
        def __init__(self):
            self.calls = []

        def run_opencode(self, prompt, workdir, timeout_s=600):
            self.calls.append(("opencode", prompt))
            (workdir / "deliverable.md").write_text("# ok\n", encoding="utf-8")
            return ProcessResult(cmd=["opencode"], stdout="done", stderr="", exit_code=0, duration_s=0.1)

        def run_agy(self, prompt, workdir, timeout_s=600):
            self.calls.append(("agy", prompt))
            if "MAVIS" in prompt or "review checklist" in prompt.lower():
                return ProcessResult(
                    cmd=["agy"],
                    stdout='```json\n{"verdict":"approved","findings":[],"suggestions":[],"questions":[],"notes":"ok"}\n```\n',
                    stderr="",
                    exit_code=0,
                    duration_s=0.1,
                )
            (workdir / "deliverable.md").write_text("# ok\n", encoding="utf-8")
            return ProcessResult(cmd=["agy"], stdout="done", stderr="", exit_code=0, duration_s=0.1)

    stub = _Runner()
    monkeypatch.setattr(session_start, "AgentRunner", lambda env=None: stub)
    monkeypatch.setattr(orchestrator, "AgentRunner", lambda env=None: stub)
    return stub


@pytest.fixture
def vault(tmp_path: Path) -> Path:
    """Minimal LOOP-shaped vault."""
    for name in (
        "CHAT",
        "TASKS/STATUS",
        "1.0HERMES/CHAT/Inbox",
        "1.0HERMES/CHAT/Outbox",
        "2.0MAVIS/CHAT/Inbox",
        "2.0MAVIS/CHAT/Outbox",
        "3.0OPENCODE/CHAT/Inbox",
        "3.0OPENCODE/CHAT/Outbox",
        "4.0AGY/CHAT/Inbox",
        "4.0AGY/CHAT/Outbox",
    ):
        (tmp_path / name).mkdir(parents=True, exist_ok=True)
    (tmp_path / "CHAT" / "INBOX.md").write_text(
        "# User Inbox\n\n<!-- USER_COMMANDS_START -->\n<!-- USER_COMMANDS_END -->\n",
        encoding="utf-8",
    )
    (tmp_path / "CHAT" / "OUTBOX.md").write_text(
        "# User Outbox\n\n"
        "<!-- HERMES_REPLIES_START -->\n"
        "<!-- HERMES_REPLIES_END -->\n\n"
        "## Replies Index\n\n| reply_to | title | outcome | responded_at |\n|---|---|---|---|\n",
        encoding="utf-8",
    )
    return tmp_path


def test_session_start_does_initial_setup_and_runs_both_sweeps(vault, stub_runner, monkeypatch, capsys):
    """A pending command + a pending inter-agent message both flow through."""
    inbox_text = vault / "CHAT" / "INBOX.md"
    text = inbox_text.read_text(encoding="utf-8")
    new_cmd = """

---

command_id: CMD-20260701-SS-001
type: question
priority: low
agent_target: hermes
created: 2026-07-01 16:00
status: pending
---

# Command: SS smoke

Just a record-only command.
"""
    text = text.replace("<!-- USER_COMMANDS_END -->", f"{new_cmd}\n<!-- USER_COMMANDS_END -->", 1)
    inbox_text.write_text(text, encoding="utf-8")

    # Place an inter-agent completion
    parent_card = vault / "TASKS" / "STATUS" / "20260701-1700-ia-test.md"
    parent_card.write_text(
        "---\ntitle: parent\ntype: task-card\nstatus: open\ntask_id: 20260701-1700-ia-test\n---\n\n# parent\n",
        encoding="utf-8",
    )
    completion = vault / "1.0HERMES" / "CHAT" / "Inbox" / "20260701-1700-ia-test — completion.md"
    completion.write_text(
        "---\n"
        "date: 2026-07-01 17:00\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-1700-ia-test\n"
        "from: opencode\n"
        "to: hermes\n"
        "---\n\n"
        "# completion\n",
        encoding="utf-8",
    )

    # Patch argv so the script uses our vault path
    monkeypatch.setattr(sys, "argv", ["session_start", "--vault", str(vault)])

    rc = session_start.main()
    assert rc == 0

    out = capsys.readouterr().out
    assert "user-channel sweep" in out
    assert "inter-agent sweep" in out
    assert "CMD-20260701-SS-001" in out
    assert "completion" in out


def test_session_start_succeeds_with_empty_vault(vault, stub_runner, monkeypatch, capsys):
    """A vault with nothing queued exits cleanly (no work, no errors)."""
    monkeypatch.setattr(sys, "argv", ["session_start", "--vault", str(vault)])
    rc = session_start.main()
    assert rc == 0
    out = capsys.readouterr().out
    assert "0 command(s) processed" in out
    assert "0 handled" in out or "inter-agent sweep" in out


def test_session_start_idempotent_when_run_twice(vault, stub_runner, monkeypatch, capsys):
    """A second session_start run with no new commands is a no-op."""
    monkeypatch.setattr(sys, "argv", ["session_start", "--vault", str(vault)])
    rc1 = session_start.main()
    rc2 = session_start.main()
    assert rc1 == 0
    assert rc2 == 0
