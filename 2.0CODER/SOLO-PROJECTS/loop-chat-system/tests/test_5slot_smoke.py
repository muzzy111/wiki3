"""5-slot dispatch smoke test (Task 21).

Loads the Registry from a tmp_path vault and dispatches a stub command to each
of the 5 roles in turn. Asserts each role's inbox gets a brief and each
role's outbox gets a completion.
"""
from pathlib import Path

from hermes_bus.config import load_registry
from hermes_bus.inter_agent import InterAgentHandler


def _make_minimal_vault(vault_path: Path) -> Path:
    vault_path.mkdir(parents=True, exist_ok=True)
    sys_yaml = vault_path / "SYSTEM" / "agents.yaml"
    sys_yaml.parent.mkdir(parents=True, exist_ok=True)
    sys_yaml.write_text(
        """schema_version: 1
agents:
  - {role: coordinator, folder: 1.0COORDINATOR, agent_md: 1.0COORDINATOR/AGENT.md,
     persona: 1.0COORDINATOR/P.md, inbox: 1.0COORDINATOR/CHAT/Inbox,
     outbox: 1.0COORDINATOR/CHAT/Outbox, cli: "", reviewer: memory, description: ""}
  - {role: coder, folder: 2.0CODER, agent_md: 2.0CODER/AGENT.md,
     persona: 2.0CODER/P.md, inbox: 2.0CODER/CHAT/Inbox,
     outbox: 2.0CODER/CHAT/Outbox, cli: "", reviewer: memory, description: ""}
  - {role: researcher, folder: 3.0RESEARCHER, agent_md: 3.0RESEARCHER/AGENT.md,
     persona: 3.0RESEARCHER/P.md, inbox: 3.0RESEARCHER/CHAT/Inbox,
     outbox: 3.0RESEARCHER/CHAT/Outbox, cli: "", reviewer: memory, description: ""}
  - {role: tools, folder: 4.0TOOLS, agent_md: 4.0TOOLS/AGENT.md,
     persona: 4.0TOOLS/P.md, inbox: 4.0TOOLS/CHAT/Inbox,
     outbox: 4.0TOOLS/CHAT/Outbox, cli: "", reviewer: memory, description: ""}
  - {role: memory, folder: 5.0MEMORY, agent_md: 5.0MEMORY/AGENT.md,
     persona: 5.0MEMORY/P.md, inbox: 5.0MEMORY/CHAT/Inbox,
     outbox: 5.0MEMORY/CHAT/Outbox, cli: "", reviewer: memory, description: ""}
""",
        encoding="utf-8",
    )
    return vault_path


def test_5slot_dispatch_smoke(tmp_path: Path):
    vault = _make_minimal_vault(tmp_path)
    r = load_registry(vault)
    handler = InterAgentHandler(r)

    for role_key in sorted(r.roles):
        brief = handler.dispatch("coordinator", role_key, f"5-slot smoke for {role_key}")
        assert brief.is_file()
        assert role_key in [r.roles[k].role for k in r.roles] or role_key == "coordinator"
        completion = handler.complete(role_key, brief.stem, f"done {role_key}")
        assert completion.is_file()
        completion.unlink()  # tidy
        brief.unlink()


def test_5slot_idempotent(tmp_path: Path):
    """Dispatching twice produces separate entries (no overwrites)."""
    import time
    vault = _make_minimal_vault(tmp_path)
    r = load_registry(vault)
    handler = InterAgentHandler(r)
    b1 = handler.dispatch("coordinator", "coder", "first pass")
    time.sleep(1.05)  # ensure minute timestamp differs
    b2 = handler.dispatch("coordinator", "coder", "second pass")
    assert b1 != b2
    assert b1.is_file() and b2.is_file()
    # Tidy
    b1.unlink(missing_ok=True)
    b2.unlink(missing_ok=True)
