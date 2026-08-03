"""Role-keyed registry loaded from SYSTEM/agents.yaml.

Single source of truth for the 5-role LOOP topology. Replaces the hard-coded
agent-name strings that used to live in hermes_bus.router and agent_runner.

The router and orchestrator call `load_registry(vault_root)` once per session
and consult `Registry.get_role(role_key)` for path resolution and dispatch.

Schema (see SYSTEM/agents.yaml):

    schema_version: 1
    agents:
      - role: <role key>          # coordinator | coder | researcher | tools | memory
        folder: <relative path>   # e.g. 1.0COORDINATOR
        agent_md: <relative path>
        persona: <relative path>
        inbox: <relative path>
        outbox: <relative path>
        cli: ""                   # reserved for future CLI invocation
        reviewer: <role key>
        description: <one-liner>
    routing_defaults:
      question: coordinator
      ...
"""
from __future__ import annotations

import os
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

# Optional: PyYAML is the only runtime dep beyond the project itself.
try:
    import yaml  # type: ignore
except ImportError:
    yaml = None  # type: ignore


VALID_ROLES = frozenset({"coordinator", "coder", "researcher", "tools", "memory"})


class RegistryError(RuntimeError):
    """Raised when agents.yaml is missing, malformed, or has invalid schema."""


@dataclass
class Role:
    """A single role entry from SYSTEM/agents.yaml."""

    role: str
    folder: str
    agent_md: str
    persona: str
    inbox: str
    outbox: str
    cli: str = ""
    reviewer: str = "memory"
    description: str = ""


@dataclass
class Registry:
    """In-memory view of the agent registry for the current vault."""

    schema_version: int
    roles: dict[str, Role] = field(default_factory=dict)
    routing_defaults: dict[str, str] = field(default_factory=dict)
    vault_root: Path | None = None

    def get_role(self, role_key: str) -> Role:
        """Return the Role for a role key. Raises RegistryError if unknown."""
        key = role_key.strip().lower()
        if key not in self.roles:
            raise RegistryError(f"unknown role: {role_key!r}; valid: {sorted(VALID_ROLES)}")
        return self.roles[key]

    def roles_list(self) -> list[Role]:
        """Return all roles in stable (sorted) order."""
        return [self.roles[k] for k in sorted(self.roles)]

    def reviewer_of(self, role_key: str) -> Role:
        """Return the Role that reviews for the given role."""
        r = self.get_role(role_key)
        return self.get_role(r.reviewer)

    def default_route_for(self, command_type: str) -> str:
        """Return the role key the routing_defaults map assigns for a command type."""
        ct = command_type.strip().lower()
        # support both "question" and "task_question" prefixes
        if ct in self.routing_defaults:
            return self.routing_defaults[ct]
        # task-like fallback
        if ct.startswith("task"):
            return self.routing_defaults.get("task_general", "coordinator")
        return self.routing_defaults.get(ct, "coordinator")

    def inbox_path(self, role_key: str) -> Path:
        """Return the absolute inbox path for a role."""
        return self.vault_root / self.get_role(role_key).inbox

    def outbox_path(self, role_key: str) -> Path:
        """Return the absolute outbox path for a role."""
        return self.vault_root / self.get_role(role_key).outbox


def _validate_role(role_dict: dict) -> None:
    """Ensure a role dict has all required fields and the role key is valid."""
    required = {"role", "folder", "agent_md", "persona", "inbox", "outbox", "cli", "reviewer", "description"}
    missing = required - set(role_dict.keys())
    if missing:
        raise RegistryError(f"role entry missing fields: {sorted(missing)}")
    if role_dict["role"] not in VALID_ROLES:
        raise RegistryError(
            f"invalid role key {role_dict['role']!r}; valid: {sorted(VALID_ROLES)}"
        )
    if role_dict["reviewer"] not in VALID_ROLES:
        raise RegistryError(
            f"invalid reviewer {role_dict['reviewer']!r} on role {role_dict['role']!r}"
        )


def load_registry(vault_root: str | os.PathLike | None = None) -> Registry:
    """Load the agent registry from SYSTEM/agents.yaml.

    Args:
        vault_root: Path to the vault root (defaults to env var LOOP_VAULT_ROOT or ".").

    Returns:
        A populated Registry instance.

    Raises:
        RegistryError: if the file is missing, malformed, or has invalid schema.
    """
    if yaml is None:
        raise RegistryError("PyYAML is required to load the registry")

    if vault_root is None:
        vault_root = os.environ.get("LOOP_VAULT_ROOT", ".")
    vault_path = Path(vault_root).resolve()
    yaml_path = vault_path / "SYSTEM" / "agents.yaml"
    if not yaml_path.is_file():
        raise RegistryError(f"agents.yaml not found at {yaml_path}")

    try:
        with yaml_path.open("r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
    except yaml.YAMLError as e:
        raise RegistryError(f"malformed YAML in {yaml_path}: {e}") from e

    if not isinstance(data, dict):
        raise RegistryError(f"top-level in {yaml_path} must be a mapping")

    schema_version = int(data.get("schema_version", 1))
    raw_agents = data.get("agents", [])
    if not isinstance(raw_agents, list):
        raise RegistryError("agents must be a list")

    roles: dict[str, Role] = {}
    seen: set[str] = set()
    for entry in raw_agents:
        _validate_role(entry)
        if entry["role"] in seen:
            raise RegistryError(f"duplicate role: {entry['role']!r}")
        seen.add(entry["role"])
        roles[entry["role"]] = Role(
            role=entry["role"],
            folder=entry["folder"],
            agent_md=entry["agent_md"],
            persona=entry["persona"],
            inbox=entry["inbox"],
            outbox=entry["outbox"],
            cli=entry.get("cli", ""),
            reviewer=entry["reviewer"],
            description=entry.get("description", ""),
        )

    if len(roles) != 5 or set(roles) != VALID_ROLES:
        raise RegistryError(
            f"registry must declare exactly 5 roles from {sorted(VALID_ROLES)}; got {sorted(roles)}"
        )

    routing_defaults = data.get("routing_defaults", {}) or {}
    if not isinstance(routing_defaults, dict):
        raise RegistryError("routing_defaults must be a mapping")

    return Registry(
        schema_version=schema_version,
        roles=roles,
        routing_defaults=routing_defaults,
        vault_root=vault_path,
    )
