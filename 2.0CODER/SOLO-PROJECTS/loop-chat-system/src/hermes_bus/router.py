"""Routing logic for the LOOP chat orchestrator.

The default matrix mirrors `1.0HERMES/RULES/Routing Rules.md`. When a command
supplies `agent_target: auto`, we use this matrix to pick an agent. When
explicit, we honor it (and Hermes notes overrides via a needs-user reply).

Two-key decision input:
    command.type    - "task", "question", "status", "system", "note"
    command.body    - free-form text we can sniff for keyword hints

We keep the matrix conservative: when in doubt, send to AGY (research) and
let Mavis triage. Mavis ALWAYS reviews anything user-facing, so a wrong
initial dispatch does not lose fidelity — it just costs a round-trip.
"""

from __future__ import annotations

from dataclasses import dataclass

from .parser import Command


@dataclass
class RouteDecision:
    agent: str  # "opencode" | "agy" | "mavis" | "hermes"
    reasoning: str
    skip_review: bool = False


def route(command: Command) -> RouteDecision:
    """Return the agent this command should go to.

    Returns `RouteDecision(agent="hermes", ...)` for trivial questions Hermes
    handles directly without dispatch.
    """
    explicit = command.agent_target.strip().lower()
    if explicit in ("opencode", "agy", "mavis"):
        return RouteDecision(
            agent=explicit,
            reasoning=f"explicit agent_target={explicit} on {command.command_id}",
        )
    if explicit == "hermes":
        return RouteDecision(
            agent="hermes",
            reasoning=f"explicit agent_target=hermes on {command.command_id}",
            skip_review=True,
        )

    ctype = command.type.lower()
    body = (command.title + " " + command.body).lower()

    # system commands handled by Hermes (rename, lock, audit)
    if ctype == "system":
        return RouteDecision(
            agent="hermes",
            reasoning="type=system -> Hermes runs system commands directly",
            skip_review=True,
        )

    # question / note / status -> Hermes answers directly (no dispatch needed)
    if ctype in ("question", "note", "status"):
        return RouteDecision(
            agent="hermes",
            reasoning=f"type={ctype} -> Hermes answers directly without dispatch",
            skip_review=True,
        )

    # tasks: classify by body
    code_hints = (
        "code", "script", "function", "class", "module", "python", "node",
        "typescript", "bash", "powershell", "dataviewjs", "templater",
        "regex", "refactor", "implement", "build a", "write a", "implement",
        "plugin", "mcp server", "endpoint", "api call", "compile",
    )
    if any(h in body for h in code_hints):
        return RouteDecision(
            agent="opencode",
            reasoning=f"task with code-like keywords -> OpenCode",
        )

    research_hints = (
        "research", "search", "find sources", "what is", "look up",
        "investigate", "compare", "review the literature", "summarize",
        "documentation for", "scrap ", "cite", "explain", "how does",
        "why does", "stats", "statistics", "math", "compute", "derive",
        "back up", "backup", "google drive", "plugin install",
    )
    if any(h in body for h in research_hints):
        return RouteDecision(
            agent="agy",
            reasoning=f"task with research/operator keywords -> AGY",
        )

    doc_hints = (
        "document this", "summarize notes", "update wiki", "audit",
        "review meeting", "write meeting", "record decision",
    )
    if any(h in body for h in doc_hints):
        return RouteDecision(
            agent="mavis",
            reasoning=f"task with documentation keywords -> Mavis (reviewer)",
            skip_review=True,
        )

    # default: research (most user tasks are knowledge work)
    return RouteDecision(
        agent="agy",
        reasoning="no strong keyword match; defaulting to AGY research (Mavis reviews anyway)",
    )



# ---------------------------------------------------------------------------
# Role-keyed overlay (added 2026-07-03 migration; does not change legacy API)
# ---------------------------------------------------------------------------

VALID_ROLES = ("coordinator", "coder", "researcher", "tools", "memory")
