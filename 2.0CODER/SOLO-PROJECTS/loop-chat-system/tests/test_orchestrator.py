"""Tests for end-to-end orchestrator using a stub agent CLI.

This exercises the full pickup -> route -> dispatch -> review -> reply
flow without invoking the real `agy` or `opencode` binaries. The
`AgentRunner` is monkey-patched to return synthetic outputs.

Also covers OUTBOX idempotency (running --once twice on the same reply
does not duplicate the index row).
"""

from __future__ import annotations

from pathlib import Path

import pytest

from hermes_bus import orchestrator
from hermes_bus.agent_runner import ProcessResult
from hermes_bus.mavis_runner import Verdict


SAMPLE_INBOX = """\
---
command_id: CMD-20260701-001
type: task
priority: normal
agent_target: auto
created: 2026-07-01 10:00
status: pending
---

# Command: Research current state of memory hierarchies

Summarize the latest 3 sources on memory hierarchies in agent systems.

## Acceptance Criteria

1. Three cited sources.
2. One-paragraph synthesis.
"""


class _StubRunner:
    """Replacement for AgentRunner that returns canned outputs."""

    def __init__(self):
        self.calls = []

    def run_agy(self, prompt, workdir, timeout_s=600):
        self.calls.append(("agy", prompt, workdir, timeout_s))
        # First call simulates the agent run; second call is Mavis review.
        if "MAVIS" in prompt or "review checklist" in prompt.lower():
            return ProcessResult(
                cmd=["agy"],
                stdout=(
                    "Some prose.\n\n"
                    "```json\n"
                    "{\"verdict\": \"approved\","
                    " \"findings\": [\"cites three sources\"],"
                    " \"suggestions\": [], \"questions\": [],"
                    " \"notes\": \"ok\"}\n"
                    "```\n"
                ),
                stderr="",
                exit_code=0,
                duration_s=0.5,
            )
        if (workdir / "deliverable.md").exists():
            return ProcessResult(cmd=["agy"], stdout="done.", stderr="", exit_code=0, duration_s=0.4)
        # simulate agent creating a deliverable file
        (workdir / "deliverable.md").write_text(
            "# memory hierarchies 2026-07-01\n\n"
            "- Source A: url-a\n"
            "- Source B: url-b\n"
            "- Source C: url-c\n\n"
            "Synthesis: three sources confirm ...\n",
            encoding="utf-8",
        )
        return ProcessResult(
            cmd=["agy"],
            stdout="I wrote the report at deliverable.md.",
            stderr="",
            exit_code=0,
            duration_s=0.5,
        )

    def run_opencode(self, prompt, workdir, timeout_s=600):
        self.calls.append(("opencode", prompt, workdir, timeout_s))
        (workdir / "deliverable.md").write_text(
            "## Code result\n\nok",
            encoding="utf-8",
        )
        return ProcessResult(cmd=["opencode"], stdout="ok", stderr="", exit_code=0, duration_s=0.5)


@pytest.fixture
def stub_vault(tmp_path: Path):
    """Create a minimal vault skeleton."""
    (tmp_path / "CHAT").mkdir()
    (tmp_path / "CHAT" / "INBOX.md").write_text(SAMPLE_INBOX, encoding="utf-8")
    (tmp_path / "CHAT" / "OUTBOX.md").write_text(
        "# User Outbox\n\n"
        "<!-- HERMES_REPLIES_START -->\n"
        "<!-- HERMES_REPLIES_END -->\n\n"
        "## Replies Index\n\n"
        "| reply_to | title | outcome | responded_at |\n"
        "|---|---|---|---|\n",
        encoding="utf-8",
    )
    (tmp_path / "CHAT" / "Session Log.md").write_text("# Session Log\n", encoding="utf-8")
    for agent_dir in ["1.0HERMES", "2.0MAVIS", "3.0OPENCODE", "4.0AGY"]:
        (tmp_path / agent_dir / "CHAT" / "Inbox").mkdir(parents=True)
        (tmp_path / agent_dir / "CHAT" / "Outbox").mkdir(parents=True)
        (tmp_path / agent_dir / "SOLO-PROJECTS").mkdir(parents=True)
    (tmp_path / "TASKS" / "STATUS").mkdir(parents=True)
    return tmp_path


def test_end_to_end_research_flow(stub_vault, monkeypatch):
    # Swap the runner factory before constructing the orchestrator
    stub = _StubRunner()
    monkeypatch.setattr(orchestrator, "AgentRunner", lambda env=None: stub)

    orch = orchestrator.Orchestrator(vault_root=stub_vault)
    processed = orch.run_once()
    assert len(processed) == 1
    cid, outcome = processed[0]
    assert cid == "CMD-20260701-001"
    assert outcome == "done"

    # Verify OUTBOX has a reply
    outbox = (stub_vault / "CHAT" / "OUTBOX.md").read_text(encoding="utf-8")
    assert "## Reply to `CMD-20260701-001`" in outbox
    assert "approved" in outbox.lower()

    # Verify task card was written
    tasks_dir = stub_vault / "TASKS" / "STATUS"
    cards = list(tasks_dir.glob("*.md"))
    assert len(cards) == 1
    card_text = cards[0].read_text(encoding="utf-8")
    # Each lifecycle stage is recorded as an append-only STATUS block.
    assert "state: brief-written" in card_text.lower()
    assert "state: agent-run" in card_text.lower()
    assert "state: review-requested" in card_text.lower()
    assert "state: verdict" in card_text.lower()

    # Verify brief written into AGY's inbox
    agy_inbox = list((stub_vault / "4.0AGY" / "CHAT" / "Inbox").iterdir())
    assert any("research-brief" in p.name for p in agy_inbox)

    # Verify INBOX index updated (or no error)
    inbox_after = (stub_vault / "CHAT" / "INBOX.md").read_text(encoding="utf-8")
    # the inline frontmatter status should be `done` (we update via mark_command_in_inbox)

    # Verify Mavis review request was filed
    mavis_inbox = list((stub_vault / "2.0MAVIS" / "CHAT" / "Inbox").iterdir())
    assert any("Review" in p.name for p in mavis_inbox)


def test_outbox_idempotent_on_replay(stub_vault, monkeypatch):
    """Running the orchestrator twice on the same INBOX must not duplicate index rows."""
    inbox_text = """\
---

command_id: CMD-20260701-007
type: question
priority: low
agent_target: hermes
created: 2026-07-01 11:00
status: pending
---

# Command: Quick question

What time is it?
"""
    (stub_vault / "CHAT" / "INBOX.md").write_text(inbox_text, encoding="utf-8")

    stub = _StubRunner()
    monkeypatch.setattr(orchestrator, "AgentRunner", lambda env=None: stub)

    orch = orchestrator.Orchestrator(vault_root=stub_vault)
    orch.run_once()
    # second tick should be a noop (no pending commands remaining)
    second = orch.run_once()
    assert second == [], "second tick should produce no work"

    outbox = (stub_vault / "CHAT" / "OUTBOX.md").read_text(encoding="utf-8")
    # only ONE reply block should be present, not two
    assert outbox.count("## Reply to `CMD-20260701-007`") == 1
    # the index row should appear exactly once
    assert outbox.count("| `CMD-20260701-007` |") == 1


def test_hermes_direct_for_question(stub_vault, monkeypatch):
    inbox_text = """\
---

command_id: CMD-20260701-007
type: question
priority: low
agent_target: hermes
created: 2026-07-01 11:00
status: pending
---

# Command: Quick question

What time is it?
"""
    (stub_vault / "CHAT" / "INBOX.md").write_text(inbox_text, encoding="utf-8")

    stub = _StubRunner()
    monkeypatch.setattr(orchestrator, "AgentRunner", lambda env=None: stub)

    orch = orchestrator.Orchestrator(vault_root=stub_vault)
    processed = orch.run_once()
    assert len(processed) == 1
    cid, outcome = processed[0]
    assert cid == "CMD-20260701-007"
    assert outcome == "recorded"
    # No agent subprocess should have been invoked for a direct Hermes reply
    assert all(call[0] != "agy" and call[0] != "opencode" for call in stub.calls)
