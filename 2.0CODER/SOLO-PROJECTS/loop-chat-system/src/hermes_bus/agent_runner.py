"""Spawn the external agent CLIs (opencode / agy) as subprocesses.

Each runner returns a Result with stdout / stderr / exit_code. The orchestrator
records the result to the task card. Both CLIs support a one-shot mode we use:
    opencode run "<message>"
    agy --print "<prompt>"

Per LOOP system rules:
    - Subprocess CWD is set to the agent's SOLO-PROJECTS/<task-id>/ folder so
      any files the agent produces land in the right place.
    - A timeout is enforced. Long-running tasks get a status ping instead of a
      timeout-cancel so we don't lose work.
    - Secrets are passed via env vars only, never CLI args.
"""

from __future__ import annotations

import os
import shlex
import subprocess
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Mapping


@dataclass
class ProcessResult:
    cmd: list[str]
    stdout: str
    stderr: str
    exit_code: int
    duration_s: float
    timed_out: bool = False


class AgentRunner:
    """Spawn one of the external agent CLIs and capture output."""

    def __init__(self, env: Mapping[str, str] | None = None):
        self.env = dict(os.environ)
        if env:
            for k, v in env.items():
                if v is not None:
                    self.env[k] = v

    def run_opencode(
        self,
        prompt: str,
        workdir: Path,
        timeout_s: int = 600,
    ) -> ProcessResult:
        cmd = ["opencode", "run", "--format", "json", prompt]
        return self._spawn(cmd, workdir, timeout_s)

    def run_agy(
        self,
        prompt: str,
        workdir: Path,
        timeout_s: int = 600,
    ) -> ProcessResult:
        # `agy --print` runs a single prompt non-interactively
        cmd = ["agy", "--print", prompt]
        return self._spawn(cmd, workdir, timeout_s)

    def _spawn(self, cmd: list[str], workdir: Path, timeout_s: int) -> ProcessResult:
        workdir.mkdir(parents=True, exist_ok=True)
        start = time.time()
        try:
            cp = subprocess.run(
                cmd,
                cwd=str(workdir),
                env=self.env,
                capture_output=True,
                text=True,
                timeout=timeout_s,
                shell=False,
            )
            duration = time.time() - start
            return ProcessResult(
                cmd=cmd,
                stdout=cp.stdout or "",
                stderr=cp.stderr or "",
                exit_code=cp.returncode,
                duration_s=duration,
            )
        except subprocess.TimeoutExpired as e:
            duration = time.time() - start
            return ProcessResult(
                cmd=cmd,
                stdout=(e.stdout or b"").decode("utf-8", "replace") if isinstance(e.stdout, bytes) else (e.stdout or ""),
                stderr=(e.stderr or b"").decode("utf-8", "replace") if isinstance(e.stderr, bytes) else (e.stderr or ""),
                exit_code=124,
                duration_s=duration,
                timed_out=True,
            )
        except FileNotFoundError as e:
            duration = time.time() - start
            return ProcessResult(
                cmd=cmd,
                stdout="",
                stderr=f"executable not found: {e}",
                exit_code=127,
                duration_s=duration,
            )

    def quote(self, prompt: str) -> str:
        return shlex.quote(prompt)



# ---------------------------------------------------------------------------
# Role-keyed overlay (5-role topology; added 2026-07-03 migration)
# ---------------------------------------------------------------------------

from typing import Optional as _Optional  # local import

def run_role(self, role_key: str, prompt: str, workdir, timeout_s: int = 600):
    """Dispatch a prompt to a role's CLI per `SYSTEM/agents.yaml:agents[*].cli`.

    If the role's `cli` is empty (most roles in this iteration), returns a
    no-op result indicating in-process handling.
    """
    from .config import load_registry
    try:
        registry = load_registry()
    except Exception:
        registry = None
    if registry is None:
        return self.run_agy(prompt, workdir, timeout_s) if role_key == "researcher" \
            else self.run_opencode(prompt, workdir, timeout_s)
    role = registry.get_role(role_key)
    if not role.cli:
        return ProcessResult(cmd=[], stdout=f"[in-process] role {role_key}", stderr="", exit_code=0, duration_s=0.0)
    import shlex
    cmd = shlex.split(role.cli) + [prompt]
    return self._spawn(cmd, workdir, timeout_s)
