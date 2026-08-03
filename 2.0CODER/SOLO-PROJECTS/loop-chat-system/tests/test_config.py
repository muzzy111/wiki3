"""Tests for hermes_bus.config (Registry + role-keyed dispatch)."""
from pathlib import Path

import pytest

from hermes_bus.config import (
    Registry,
    RegistryError,
    Role,
    VALID_ROLES,
    load_registry,
)


# Path to the fixtures directory
FIXTURES = Path(__file__).parent / "fixtures"


# ---------------------------------------------------------------------------
# Test fixtures (created via tmp_path by the tests)
# ---------------------------------------------------------------------------


def _write_minimal_yaml(path: Path) -> Path:
    """Write a minimal valid SYSTEM/agents.yaml to path/.yaml."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        """schema_version: 1
agents:
  - role: coordinator
    folder: 1.0COORDINATOR
    agent_md: 1.0COORDINATOR/AGENT.md
    persona: 1.0COORDINATOR/PROMPTS/Coordinator Persona.md
    inbox: 1.0COORDINATOR/CHAT/Inbox
    outbox: 1.0COORDINATOR/CHAT/Outbox
    cli: ""
    reviewer: memory
    description: chat director
  - role: coder
    folder: 2.0CODER
    agent_md: 2.0CODER/AGENT.md
    persona: 2.0CODER/PROMPTS/Coder Persona.md
    inbox: 2.0CODER/CHAT/Inbox
    outbox: 2.0CODER/CHAT/Outbox
    cli: ""
    reviewer: memory
    description: code
  - role: researcher
    folder: 3.0RESEARCHER
    agent_md: 3.0RESEARCHER/AGENT.md
    persona: 3.0RESEARCHER/PROMPTS/Researcher Persona.md
    inbox: 3.0RESEARCHER/CHAT/Inbox
    outbox: 3.0RESEARCHER/CHAT/Outbox
    cli: ""
    reviewer: memory
    description: research
  - role: tools
    folder: 4.0TOOLS
    agent_md: 4.0TOOLS/AGENT.md
    persona: 4.0TOOLS/PROMPTS/Tools Persona.md
    inbox: 4.0TOOLS/CHAT/Inbox
    outbox: 4.0TOOLS/CHAT/Outbox
    cli: ""
    reviewer: memory
    description: tools
  - role: memory
    folder: 5.0MEMORY
    agent_md: 5.0MEMORY/AGENT.md
    persona: 5.0MEMORY/PROMPTS/Memory Curator Persona.md
    inbox: 5.0MEMORY/CHAT/Inbox
    outbox: 5.0MEMORY/CHAT/Outbox
    cli: ""
    reviewer: memory
    description: memory
routing_defaults:
  question: coordinator
  task_general: coordinator
""",
        encoding="utf-8",
    )
    return path


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------


def test_load_registry_parses_5_roles(tmp_path):
    """Loads a minimal valid agents.yaml with all 5 roles."""
    yaml_path = _write_minimal_yaml(tmp_path / "SYSTEM" / "agents.yaml")
    r = load_registry(tmp_path)
    assert isinstance(r, Registry)
    assert len(r.roles) == 5
    assert set(r.roles) == VALID_ROLES


def test_load_registry_rejects_missing_file(tmp_path):
    """Raises RegistryError when agents.yaml is absent."""
    with pytest.raises(RegistryError, match="not found"):
        load_registry(tmp_path)


def test_load_registry_rejects_malformed_yaml(tmp_path):
    """Raises RegistryError on bad YAML."""
    yaml_path = tmp_path / "SYSTEM" / "agents.yaml"
    yaml_path.parent.mkdir(parents=True, exist_ok=True)
    yaml_path.write_text("schema_version: 1\nagents:\n  - role: !!python/name:os.system \"\" :\n    bad: ]unmatched\nkey without value\n", encoding="utf-8")
    with pytest.raises(RegistryError, match="malformed"):
        load_registry(tmp_path)


def test_load_registry_rejects_missing_schema_field(tmp_path):
    """Raises RegistryError when a required field is missing."""
    yaml_path = tmp_path / "SYSTEM" / "agents.yaml"
    yaml_path.parent.mkdir(parents=True, exist_ok=True)
    # Missing "reviewer" field on coordinator entry
    yaml_path.write_text(
        """schema_version: 1
agents:
  - role: coordinator
    folder: 1.0COORDINATOR
    agent_md: 1.0COORDINATOR/AGENT.md
    persona: 1.0COORDINATOR/PROMPTS/Coordinator Persona.md
    inbox: 1.0COORDINATOR/CHAT/Inbox
    outbox: 1.0COORDINATOR/CHAT/Outbox
    cli: ""
    description: x
""",
        encoding="utf-8",
    )
    with pytest.raises(RegistryError, match="missing fields"):
        load_registry(tmp_path)


def test_load_registry_rejects_duplicate_roles(tmp_path):
    """Raises RegistryError on duplicate role keys."""
    yaml_path = tmp_path / "SYSTEM" / "agents.yaml"
    yaml_path.parent.mkdir(parents=True, exist_ok=True)
    yaml_path.write_text(
        """schema_version: 1
agents:
  - role: coordinator
    folder: a
    agent_md: a/AGENT.md
    persona: a/P.md
    inbox: a/Inbox
    outbox: a/Outbox
    cli: ""
    reviewer: memory
    description: x
  - role: coordinator
    folder: b
    agent_md: b/AGENT.md
    persona: b/P.md
    inbox: b/Inbox
    outbox: b/Outbox
    cli: ""
    reviewer: memory
    description: x
""",
        encoding="utf-8",
    )
    with pytest.raises(RegistryError, match="duplicate"):
        load_registry(tmp_path)


def test_load_registry_rejects_unknown_role_key(tmp_path):
    """Raises RegistryError on role key not in VALID_ROLES."""
    yaml_path = tmp_path / "SYSTEM" / "agents.yaml"
    yaml_path.parent.mkdir(parents=True, exist_ok=True)
    yaml_path.write_text(
        """schema_version: 1
agents:
  - role: hermes
    folder: 1.0HERMES
    agent_md: 1.0HERMES/AGENT.md
    persona: 1.0HERMES/P.md
    inbox: 1.0HERMES/Inbox
    outbox: 1.0HERMES/Outbox
    cli: ""
    reviewer: memory
    description: legacy
""",
        encoding="utf-8",
    )
    with pytest.raises(RegistryError, match="invalid role key"):
        load_registry(tmp_path)


def test_registry_get_role(tmp_path):
    """get_role returns the matching Role; missing raises."""
    _write_minimal_yaml(tmp_path / "SYSTEM" / "agents.yaml")
    r = load_registry(tmp_path)
    coord = r.get_role("coordinator")
    assert isinstance(coord, Role)
    assert coord.folder == "1.0COORDINATOR"
    with pytest.raises(RegistryError, match="unknown role"):
        r.get_role("nope")


def test_registry_reviewer_of(tmp_path):
    """reviewer_of returns the reviewing role."""
    _write_minimal_yaml(tmp_path / "SYSTEM" / "agents.yaml")
    r = load_registry(tmp_path)
    assert r.reviewer_of("coder").role == "memory"


def test_registry_default_route_for(tmp_path):
    """Default routing_defaults lookup."""
    _write_minimal_yaml(tmp_path / "SYSTEM" / "agents.yaml")
    r = load_registry(tmp_path)
    assert r.default_route_for("question") == "coordinator"
    assert r.default_route_for("task_general") == "coordinator"


def test_registry_inbox_outbox_paths(tmp_path):
    """inbox_path / outbox_path are absolute and joined to vault_root."""
    _write_minimal_yaml(tmp_path / "SYSTEM" / "agents.yaml")
    r = load_registry(tmp_path)
    assert r.inbox_path("coordinator") == tmp_path / "1.0COORDINATOR" / "CHAT" / "Inbox"
    assert r.outbox_path("memory") == tmp_path / "5.0MEMORY" / "CHAT" / "Outbox"
