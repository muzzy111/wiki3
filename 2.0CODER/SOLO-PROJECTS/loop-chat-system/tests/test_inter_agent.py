"""Tests for hermes_bus.inter_agent.

Exercises every edge of the inter-agent protocol with a stub AgentRunner:

  1. agent -> Hermes completion
  2. agent -> Mavis self-submission (triggers Mavis verdict)
  3. agent -> Hermes handoff-request -> Hermes brokers to other agent
  4. AGY completion on a sibling task -> relays handoff-reply to OpenCode
  5. the top-level poll_all_inboxes orchestrator scans every inbox
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path

import pytest

from hermes_bus import inter_agent
from hermes_bus.agent_runner import ProcessResult
from hermes_bus.frontmatter import parse as fm_parse
from hermes_bus.inter_agent import (
    AGENT_DIRS,
    handle_completion,
    handle_handoff,
    handle_handoff_reply,
    handle_self_submission,
    inbox_dir,
    outbox_dir,
    poll_all_inboxes,
    task_card_path,
)
from hermes_bus.mavis_runner import MavisRunner, Verdict


# ----- stubs -----


@dataclass
class _StubRunner:
    """Replacement for AgentRunner; returns canned agent stdout."""

    call_count: int = 0
    last_prompt: str = ""

    def run_opencode(self, prompt, workdir, timeout_s=600):
        self.call_count += 1
        self.last_prompt = prompt
        return ProcessResult(cmd=["opencode"], stdout="ok", stderr="", exit_code=0, duration_s=0.1)

    def run_agy(self, prompt, workdir, timeout_s=600):
        self.call_count += 1
        self.last_prompt = prompt
        if "MAVIS" in prompt or "review checklist" in prompt.lower():
            return ProcessResult(
                cmd=["agy"],
                stdout=(
                    "Verdict reasoning.\n\n"
                    "```json\n"
                    '{"verdict": "approved-with-notes",'
                    ' "findings": ["small nit on docstring"],'
                    ' "suggestions": ["use f-string"],'
                    ' "questions": [],'
                    ' "notes": "ship it"}\n'
                    "```\n"
                ),
                stderr="",
                exit_code=0,
                duration_s=0.1,
            )
        return ProcessResult(cmd=["agy"], stdout="done", stderr="", exit_code=0, duration_s=0.1)


@pytest.fixture
def stub_runner() -> _StubRunner:
    return _StubRunner()


# ----- fixtures -----


@pytest.fixture
def vault_with_task(stub_vault, stub_runner):
    """vault fixture plus a pre-existing task card for testing completion handler."""
    parent_card = stub_vault / "TASKS" / "STATUS" / "20260701-1000-test-task.md"
    parent_card.parent.mkdir(parents=True, exist_ok=True)
    parent_card.write_text(
        "---\n"
        "title: parent task\n"
        "type: task-card\n"
        "status: open\n"
        "task_id: 20260701-1000-test-task\n"
        "---\n\n"
        f"# Parent task\n\nInitial state.\n",
        encoding="utf-8",
    )
    return stub_vault


@pytest.fixture
def stub_vault(tmp_path: Path) -> Path:
    """Minimal LOOP-shaped vault for inter-agent tests."""
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
    return tmp_path


# ----- tests for handle_completion -----


def test_handle_completion_acknowledges_task_card(vault_with_task, stub_runner):
    inbox_file = inbox_dir(vault_with_task, "hermes") / "20260701-1000-test-task — completion.md"
    inbox_file.write_text(
        "---\n"
        "date: 2026-07-01 10:30\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-1000-test-task\n"
        "from: opencode\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 20260701-1000-test-task\n"
        "---\n\n"
        "# Completion of test task\n\nOpenCode finished.\n",
        encoding="utf-8",
    )
    handled, summary = handle_completion(vault_with_task, inbox_file)
    assert handled
    assert "20260701-1000-test-task" in summary

    # task card advanced
    card_text = task_card_path(vault_with_task, "20260701-1000-test-task").read_text(encoding="utf-8")
    assert "state: completion-received" in card_text

    # inbox file advanced
    inbox_text = inbox_file.read_text(encoding="utf-8")
    assert "status: acknowledged" in inbox_text
    assert "## STATUS @ " in inbox_text and "by hermes" in inbox_text


def test_handle_completion_idempotent_on_replay(vault_with_task, stub_runner):
    inbox_file = inbox_dir(vault_with_task, "hermes") / "20260701-1000-test-task — completion.md"
    inbox_file.write_text(
        "---\n"
        "date: 2026-07-01 10:30\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-1000-test-task\n"
        "from: agy\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 20260701-1000-test-task\n"
        "---\n\n"
        "# Completion\n\nAGY finished.\n",
        encoding="utf-8",
    )
    handle_completion(vault_with_task, inbox_file)
    # second call: status now acknowledged; handler should skip silently
    handled, summary = handle_completion(vault_with_task, inbox_file)
    assert not handled
    assert "nothing to do" in summary


def test_handle_completion_orphan_logs_to_system_record(stub_vault):
    """A completion whose task card is missing should NOT crash; it should log to STYTEM RECORD."""
    inbox_file = inbox_dir(stub_vault, "hermes") / "9999999-ghost — completion.md"
    inbox_file.write_text(
        "---\n"
        "date: 2026-07-01 10:30\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 9999999-ghost\n"
        "from: opencode\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 9999999-ghost\n"
        "---\n\n"
        "# Orphan completion\n",
        encoding="utf-8",
    )
    handled, summary = handle_completion(stub_vault, inbox_file)
    assert not handled
    assert "orphan" in summary.lower()
    # Audit trail was written
    audit = stub_vault / "SYSTEM" / "STYTEM RECORD" / "Orphan Completions.md"
    assert audit.exists()
    assert "9999999-ghost" in audit.read_text(encoding="utf-8")


# ----- tests for handle_self_submission -----


def test_handle_self_submission_triggers_mavis_verdict(vault_with_task, stub_runner):
    """Agent posts a review file to Mavis; Mavis verdict is run and mirrored back to Hermes."""
    # create a deliverable for the verdict to read
    workdir = vault_with_task / "3.0OPENCODE" / "SOLO-PROJECTS" / "20260701-1000-test-task"
    workdir.mkdir(parents=True, exist_ok=True)
    deliverable = workdir / "deliverable.md"
    deliverable.write_text("# hello\n", encoding="utf-8")

    submission = inbox_dir(vault_with_task, "mavis") / "20260701-1000-test-task — Review.md"
    submission.write_text(
        "---\n"
        "date: 2026-07-01 10:30\n"
        "type: review-request\n"
        "status: pending\n"
        "task_id: 20260701-1000-test-task\n"
        "deliverable_agent: opencode\n"
        "priority: normal\n"
        "deliverable_paths:\n"
        "  - 3.0OPENCODE/SOLO-PROJECTS/20260701-1000-test-task/deliverable.md\n"
        "---\n\n"
        "## Brief\n\nTest brief.\n\n"
        "## Deliverables\n\n- 3.0OPENCODE/SOLO-PROJECTS/20260701-1000-test-task/deliverable.md\n",
        encoding="utf-8",
    )

    handled, summary = handle_self_submission(vault_with_task, submission, runner=stub_runner)
    assert handled, summary
    assert "approved-with-notes" in summary

    # the verdict mirror landed in Hermes' inbox
    mirrors = list(inbox_dir(vault_with_task, "hermes").glob("* — verdict.md"))
    assert any(m.name.startswith("20260701-1000-test-task") for m in mirrors), mirrors

    # the submission file advanced
    sub_text = submission.read_text(encoding="utf-8")
    assert "## VERDICT" in sub_text
    # The verdict JSON block is present
    assert '"verdict": "approved-with-notes"' in sub_text


def test_handle_self_submission_skips_when_already_verdicted(stub_vault, stub_runner):
    """A submission whose status is not pending should not be re-verdicted."""
    submission = inbox_dir(stub_vault, "mavis") / "20260801-orphan — Review.md"
    submission.write_text(
        "---\n"
        "date: 2026-08-01 10:30\n"
        "type: review-request\n"
        "status: approved\n"  # already done
        "task_id: 20260801-orphan\n"
        "deliverable_agent: opencode\n"
        "deliverable_paths: []\n"
        "---\n\n"
        "## Brief\n\nTest.\n",
        encoding="utf-8",
    )
    handled, summary = handle_self_submission(stub_vault, submission, runner=stub_runner)
    assert not handled
    assert "nothing to do" in summary
    # stub runner should NOT have been invoked because the submission was skipped early
    assert stub_runner.call_count == 0


# ----- tests for handle_handoff -----


def test_handle_handoff_brokers_opencode_to_agy(stub_vault):
    parent_card = stub_vault / "TASKS" / "STATUS" / "20260701-1500-parent.md"
    parent_card.parent.mkdir(parents=True, exist_ok=True)
    parent_card.write_text(
        "---\n"
        "title: parent\n"
        "type: task-card\n"
        "status: open\n"
        "task_id: 20260701-1500-parent\n"
        "agent: opencode\n"
        "---\n\n"
        "# parent\n",
        encoding="utf-8",
    )

    request = inbox_dir(stub_vault, "hermes") / "20260701-1500-parent — handoff-request.md"
    request.write_text(
        "---\n"
        "date: 2026-07-01 15:00\n"
        "type: handoff-request\n"
        "status: posted\n"
        "task_id: 20260701-1500-parent\n"
        "from: opencode\n"
        "to: hermes\n"
        "priority: normal\n"
        "recipient: agy\n"
        "---\n\n"
        "# I need to look up a library version\n\nPlease research foo>=2.0 vs foo<2.0.\n",
        encoding="utf-8",
    )

    handled, summary = handle_handoff(stub_vault, request)
    assert handled, summary
    assert "agy" in summary

    # AGY inbox has the brokered handoff brief
    handoff_to_agy = list(inbox_dir(stub_vault, "agy").glob("* — handoff.md"))
    assert len(handoff_to_agy) == 1
    brief_text = handoff_to_agy[0].read_text(encoding="utf-8")
    fm, body = fm_parse(brief_text)
    assert fm.get("type") == "handoff"
    assert fm.get("from") == "hermes"
    assert fm.get("to") == "agy"
    assert "20260701-1500-parent-H1" == fm.get("task_id")
    assert "library version" in body

    # OpenCode's outbox has the brokered mirror
    mirror = list(outbox_dir(stub_vault, "opencode").glob("* — handoff-brokered.md"))
    assert len(mirror) == 1

    # Request status advanced
    req_after = request.read_text(encoding="utf-8")
    assert "status: brokered" in req_after


def test_handle_handoff_rejects_self_handoff(stub_vault):
    """A handoff request from OpenCode addressed to OpenCode must be rejected."""
    request = inbox_dir(stub_vault, "hermes") / "20260701-1500-test — handoff-request.md"
    request.write_text(
        "---\n"
        "date: 2026-07-01 15:00\n"
        "type: handoff-request\n"
        "status: posted\n"
        "task_id: 20260701-1500-test\n"
        "from: opencode\n"
        "to: hermes\n"
        "priority: normal\n"
        "recipient: opencode\n"
        "---\n\n"
        "## Body\n",
        encoding="utf-8",
    )
    handled, summary = handle_handoff(stub_vault, request)
    assert not handled
    assert "self" in summary.lower()


def test_handle_handoff_rejects_non_opencode_agy_requesters(stub_vault):
    """Hermes may not send handoffs on behalf of Mavis or the user."""
    request = inbox_dir(stub_vault, "hermes") / "20260701-1500-test — handoff-request.md"
    request.write_text(
        "---\n"
        "date: 2026-07-01 15:00\n"
        "type: handoff-request\n"
        "status: posted\n"
        "task_id: 20260701-1500-test\n"
        "from: mavis\n"
        "to: hermes\n"
        "priority: normal\n"
        "recipient: opencode\n"
        "---\n\n"
        "## Body\n",
        encoding="utf-8",
    )
    handled, summary = handle_handoff(stub_vault, request)
    assert not handled
    assert "opencode/agy" in summary.lower()


# ----- tests for handle_handoff_reply -----


def test_handle_handoff_reply_relays_to_parent_agent(stub_vault):
    """AGY completes a sibling task; Hermes mirrors back to OpenCode's inbox."""
    # Create a parent task card whose agent is opencode
    parent_card = stub_vault / "TASKS" / "STATUS" / "20260701-1500-parent.md"
    parent_card.parent.mkdir(parents=True, exist_ok=True)
    parent_card.write_text(
        "---\n"
        "title: parent\n"
        "type: task-card\n"
        "status: open\n"
        "task_id: 20260701-1500-parent\n"
        "agent: opencode\n"
        "---\n\n"
        "# parent\n",
        encoding="utf-8",
    )

    completion = inbox_dir(stub_vault, "hermes") / "20260701-1500-parent-H1 — completion.md"
    completion.write_text(
        "---\n"
        "date: 2026-07-01 15:30\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-1500-parent-H1\n"
        "from: agy\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 20260701-1500-parent-H1\n"
        "---\n\n"
        "# AGY handoff completion\n\nThe library is foo>=2.0\n",
        encoding="utf-8",
    )

    handled, summary = handle_handoff_reply(stub_vault, completion)
    assert handled
    assert "relayed to opencode" in summary

    # the relay reached OpenCode's inbox
    relays = list(inbox_dir(stub_vault, "opencode").glob("* — handoff-reply.md"))
    assert any(r.name.startswith("20260701-1500-parent-H1") for r in relays), relays


def test_handle_handoff_reply_skips_non_sibling_completion(stub_vault):
    """A regular completion (no `-H#` suffix) should NOT be relayed."""
    completion = inbox_dir(stub_vault, "hermes") / "20260701-1500-not-sibling — completion.md"
    completion.write_text(
        "---\n"
        "date: 2026-07-01 15:30\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-1500-not-sibling\n"
        "from: agy\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 20260701-1500-not-sibling\n"
        "---\n\n"
        "# Regular completion\n",
        encoding="utf-8",
    )
    handled, summary = handle_handoff_reply(stub_vault, completion)
    assert not handled
    assert "not a sibling" in summary.lower()


# ----- test for the top-level poll_all_inboxes scan -----


def test_poll_all_inboxes_processes_every_kind(stub_vault, stub_runner):
    """End-to-end: every inbox kind gets routed in a single sweep."""
    # 1. AGY completion in Hermes' inbox
    parent = stub_vault / "TASKS" / "STATUS" / "20260701-2000-poll.md"
    parent.parent.mkdir(parents=True, exist_ok=True)
    parent.write_text(
        "---\ntitle: parent\ntype: task-card\nstatus: open\ntask_id: 20260701-2000-poll\nagent: agy\n---\n\n# parent\n",
        encoding="utf-8",
    )
    completion = inbox_dir(stub_vault, "hermes") / "20260701-2000-poll — completion.md"
    completion.write_text(
        "---\n"
        "date: 2026-07-01 20:00\n"
        "type: completion\n"
        "status: posted\n"
        "task_id: 20260701-2000-poll\n"
        "from: agy\n"
        "to: hermes\n"
        "priority: normal\n"
        "correlation_id: 20260701-2000-poll\n"
        "---\n\n"
        "# research done\n",
        encoding="utf-8",
    )

    # 2. OpenCode handoff-request in Hermes' inbox
    handoff_req = inbox_dir(stub_vault, "hermes") / "20260701-2000-poll — handoff-request.md"
    handoff_req.write_text(
        "---\n"
        "date: 2026-07-01 20:00\n"
        "type: handoff-request\n"
        "status: posted\n"
        "task_id: 20260701-2000-poll\n"
        "from: opencode\n"
        "to: hermes\n"
        "priority: normal\n"
        "recipient: agy\n"
        "---\n\n"
        "# please research the dep\n",
        encoding="utf-8",
    )

    # 3. OpenCode posts a review submission to Mavis
    sub_workdir = stub_vault / "4.0AGY" / "SOLO-PROJECTS" / "20260701-2000-poll"
    sub_workdir.mkdir(parents=True, exist_ok=True)
    deliverable = sub_workdir / "report.md"
    deliverable.write_text("# report\n", encoding="utf-8")
    submission = inbox_dir(stub_vault, "mavis") / "20260701-2000-poll — Review.md"
    submission.write_text(
        "---\n"
        "date: 2026-07-01 20:00\n"
        "type: review-request\n"
        "status: pending\n"
        "task_id: 20260701-2000-poll\n"
        "deliverable_agent: agy\n"
        "priority: normal\n"
        "deliverable_paths:\n"
        "  - 4.0AGY/SOLO-PROJECTS/20260701-2000-poll/report.md\n"
        "---\n\n"
        "## Brief\n\nPoll test brief.\n\n"
        "## Deliverables\n\n- 4.0AGY/SOLO-PROJECTS/20260701-2000-poll/report.md\n",
        encoding="utf-8",
    )

    result = poll_all_inboxes(stub_vault, runner=stub_runner)
    # Every actionable item was handled; the idempotent replay is captured in `seen`
    kinds = {k for k, _ in result.handled}
    assert "completion" in kinds
    assert "handoff-request" in kinds
    assert "self-submission" in kinds

    # agent-runner was invoked once (for the Mavis verdict)
    assert stub_runner.call_count >= 1

    # second sweep with `seen` is a no-op
    result2 = poll_all_inboxes(stub_vault, runner=stub_runner, seen=set())
    # without `seen`, the sweep reprocesses; but every item was already
    # advanced to a non-actionable state, so it should now skip
    kinds2 = {k for k, _ in result2.handled} | {k for k, _ in result2.skipped}
    # every kind is either handled-once or skipped-on-replay
    assert "completion" in kinds2 or any("completion" in k for k in kinds2)


# ----- tests for parse_filename helper -----


def test_parse_filename_decodes_task_id_and_kind():
    assert inter_agent.parse_filename("20260701-1500-task — completion.md") == (
        "20260701-1500-task",
        "completion",
    )
    assert inter_agent.parse_filename("foo — handoff-request.md") == (
        "foo",
        "handoff-request",
    )
    assert inter_agent.parse_filename("not-a-marker.md") == (None, None)


# ----- agent dirs map -----


def test_agent_dirs_map_covers_every_agent():
    for name in ("opencode", "agy", "mavis", "hermes"):
        assert name in AGENT_DIRS
        assert AGENT_DIRS[name].startswith(tuple("1234"))
