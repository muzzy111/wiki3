"""Tests for hermes_bus.parser (CHAT/INBOX.md parsing)."""

from hermes_bus import parser


SAMPLE_INBOX = """\
---
command_id: CMD-20260701-001
type: task
priority: normal
agent_target: auto
created: 2026-07-01 10:00
status: pending
---

# Command: Build a wikilink scanner

Write a Python script that scans the vault for broken wikilinks.

## Acceptance Criteria

1. Script lives at 3.0OPENCODE/SOLO-PROJECTS/wikilink-scan/.
2. Script outputs a markdown report.
3. Mavis reviews.

## Context

Background notes here.


---

command_id: CMD-20260701-002
type: question
priority: low
agent_target: hermes
created: 2026-07-01 10:15
status: pending
---

# Command: What's today's date?

One-paragraph answer.
"""


def test_iter_commands_returns_two():
    cmds = list(parser.iter_commands(SAMPLE_INBOX))
    assert len(cmds) == 2
    assert cmds[0].command_id == "CMD-20260701-001"
    assert cmds[1].command_id == "CMD-20260701-002"


def test_first_command_has_acceptance():
    cmds = list(parser.iter_commands(SAMPLE_INBOX))
    assert len(cmds[0].accepted_criteria) == 3
    assert "broken wikilinks" in cmds[0].body.lower()


def test_pending_filter():
    cmds = parser.find_pending(SAMPLE_INBOX, seen_ids=set())
    assert len(cmds) == 2
    assert all(c.is_pending for c in cmds)


def test_seen_ids_exclude():
    cmds = parser.find_pending(SAMPLE_INBOX, seen_ids={"CMD-20260701-001"})
    assert len(cmds) == 1
    assert cmds[0].command_id == "CMD-20260701-002"


def test_skip_example_template():
    inbox = """\
---

command_id: CMD-YYYYMMDD-001
type: task
priority: normal
agent_target: auto
created: 2026-07-01 09:00
status: pending
---

# Command: Example — Replace with Your First Command

stuff

---

command_id: CMD-20260701-005
type: task
priority: normal
created: 2026-07-01 09:30
status: pending
---

# Command: Real one

stuff
"""
    cmds = list(parser.iter_commands(inbox))
    assert len(cmds) == 1
    assert cmds[0].command_id == "CMD-20260701-005"


def test_skip_placeholder_command_id():
    """A block with a placeholder command_id (literal YYYYMMDD) is skipped."""
    inbox = """\
---

command_id: CMD-YYYYMMDD-001
type: task
priority: normal
agent_target: auto
created: 2026-07-01 09:00
status: pending
---

# Command: A real-looking body that would otherwise be processed

stuff

---

command_id: CMD-20260701-007
type: task
priority: normal
created: 2026-07-01 09:30
status: pending
---

# Command: Real one

other stuff
"""
    cmds = list(parser.iter_commands(inbox))
    assert len(cmds) == 1
    assert cmds[0].command_id == "CMD-20260701-007"


def test_skip_short_title_placeholder_body():
    """A block with literal `<short title>` in the body should be skipped."""
    inbox = """\
---

command_id: CMD-20260701-099
type: task
priority: normal
created: 2026-07-01 09:00
status: pending
---

# Command: <short title>

<your actual instruction to Hermes>

---

command_id: CMD-20260701-100
type: task
priority: normal
created: 2026-07-01 09:01
status: pending
---

# Command: A real one

actually do the thing
"""
    cmds = list(parser.iter_commands(inbox))
    assert len(cmds) == 1
    assert cmds[0].command_id == "CMD-20260701-100"


def test_make_brief_block():
    from hermes_bus.parser import Command

    cmd = Command(
        command_id="CMD-20260701-002",
        type="task",
        priority="high",
        agent_target="agy",
        created="2026-07-01 10:15",
        status="pending",
        title="Find sources on HTTP smuggling",
        body="# Command: Find sources\n\n<instructions>",
        raw="",
        accepted_criteria=["Three sources cited", "Summary under 500 words"],
    )
    brief = parser.make_brief_block(cmd, "task-001", "AGY", "research-brief")
    assert "AGY" in brief
    assert "research-brief" in brief
    assert "Three sources cited" in brief
    assert "CMD-20260701-002" in brief
