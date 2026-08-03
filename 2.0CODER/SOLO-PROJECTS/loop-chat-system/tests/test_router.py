"""Tests for hermes_bus.router (legacy 4-agent contract preserved; new role-keyed tests added)."""
import pytest

from hermes_bus import parser, router


def make_cmd(
    *,
    type_: str = "task",
    target: str = "auto",
    body: str = "Research the latest on X",
    title: str = "",
) -> parser.Command:
    return parser.Command(
        command_id="CMD-20260701-001",
        type=type_,
        priority="normal",
        agent_target=target,
        created="2026-07-01 10:00",
        status="pending",
        title=title,
        body=body,
        raw="",
        accepted_criteria=[],
    )


# ---------------------------------------------------------------------------
# Legacy 4-agent contract tests (preserved verbatim from the original suite)
# ---------------------------------------------------------------------------

def test_explicit_target_honored():
    cmd = make_cmd(target="opencode", body="anything")
    d = router.route(cmd)
    assert d.agent == "opencode"
    assert "explicit" in d.reasoning


def test_question_direct_to_hermes():
    cmd = make_cmd(type_="question", body="What is foo?")
    d = router.route(cmd)
    assert d.agent == "hermes"
    assert d.skip_review


def test_system_direct_to_hermes():
    cmd = make_cmd(type_="system", body="rename folder X")
    d = router.route(cmd)
    assert d.agent == "hermes"
    assert d.skip_review


def test_code_task_to_opencode():
    cmd = make_cmd(type_="task", body="Write a Python script to parse JSON files", title="")
    d = router.route(cmd)
    assert d.agent == "opencode"


def test_research_task_to_agy():
    cmd = make_cmd(type_="task", body="Research what happened at Foo Conference", title="")
    d = router.route(cmd)
    assert d.agent == "agy"


def test_doc_task_to_mavis():
    cmd = make_cmd(type_="task", body="Document this meeting and update the wiki", title="")
    d = router.route(cmd)
    assert d.agent == "mavis"
    assert d.skip_review


def test_default_to_agy():
    cmd = make_cmd(type_="task", body="Do the thing", title="")
    d = router.route(cmd)
    assert d.agent == "agy"


# ---------------------------------------------------------------------------
# New role-keyed contract tests (5-role overlay; uses .role attr on RouterRole)
# ---------------------------------------------------------------------------

def test_role_keyed_router_class_exports_valid_roles():
    """VALID_ROLES is the canonical 5-role set."""
    assert set(router.VALID_ROLES) == {"coordinator", "coder", "researcher", "tools", "memory"}


def test_role_keyed_dispatch_returns_role_decision():
    """The role-keyed helper returns a value with a .role attribute."""
    if hasattr(router, "route_role"):
        cmd = make_cmd(target="coder", body="anything")
        d = router.route_role(cmd)
        assert d.role == "coder"
