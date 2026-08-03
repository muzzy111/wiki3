"""hermes_bus: the operational bus that makes LOOP vault's agent chat topology run.

Modules:
    frontmatter   - YAML-ish frontmatter parser (stdlib only)
    parser        - parse user commands from CHAT/INBOX.md
    router        - routing matrix (command -> agent)
    agent_runner  - spawn opencode / agy CLIs as subprocesses
    mavis_runner  - invoke notebooklm-mcp for Mavis' review
    inbox_watcher - watchdog listener for INBOX.md changes
    orchestrator  - session loop: pickup, dispatch, monitor, reply
    daemon        - long-running entry point
"""

__version__ = "0.1.0"

# Re-export Registry at package level so callers can do:
#     from hermes_bus import load_registry, Registry
try:
    from .config import Registry, RegistryError, Role, load_registry, VALID_ROLES
    __all__ = ["Registry", "RegistryError", "Role", "load_registry", "VALID_ROLES"]
except ImportError:
    # PyYAML may not be installed at import time in all contexts.
    pass
