"""Review-runner for the Memory Curator role.

Dispatches a Memory Curator review request to the role's CLI per the
Registry. The Memory Curator's persona is read from
`5.0MEMORY/PROMPTS/Memory Curator Persona.md`.

Legacy name `mavis_runner` is preserved as an alias module for backward
compatibility; new code should import `review_runner`.
"""
from __future__ import annotations

from pathlib import Path
from typing import Optional

from .agent_runner import AgentRunner, ProcessResult
from .config import Registry


class ReviewRunner(AgentRunner):
    """Specialized AgentRunner for the memory role.

    Same semantics as AgentRunner.run_role, but the default target role is
    "memory".
    """

    def run_review(self, prompt: str, workdir: Path, timeout_s: int = 600) -> ProcessResult:
        return self.run_role("memory", prompt, workdir, timeout_s)
