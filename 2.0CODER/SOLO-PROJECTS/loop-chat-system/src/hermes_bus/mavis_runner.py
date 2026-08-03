"""Mavis review runner.

Mavis is the LOOP team's reviewer. The vault owns two paths to run her:

1. Live CLI path (default when available): invoke `agy --print` with the
   Mavis persona prompt + the deliverable to review. AGY runs as Mavis in
   this conversation context.
2. NotebookLM path (when configured): send the deliverable to a private
   NotebookLM notebook `MAVIS-private` via the `notebooklm-mcp` MCP server
   for grounding against the user's curated reference set, then synthesize
   the verdict through AGY.

Both paths return a structured Verdict:

    Verdict(verdict=approved|approved-with-notes|changes-required|escalate,
            findings=[...], suggestions=[...], questions=[...], notes=...)

The orchestrator parses the structured verdict out of the agent's response
markdown. If parsing fails, the orchestrator treats that as
`approved-with-notes` so the user still gets a reply (Mavis flags the parse
issue in the reply).
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from pathlib import Path

from . import frontmatter
from .agent_runner import AgentRunner, ProcessResult


# Subset of agent_runner.py imports to avoid circular deps: copy dataclass ref
VerdictStatus = (
    "approved",
    "approved-with-notes",
    "changes-required",
    "escalate",
)


@dataclass
class Verdict:
    verdict: str
    findings: list[str] = field(default_factory=list)
    suggestions: list[str] = field(default_factory=list)
    questions: list[str] = field(default_factory=list)
    notes: str = ""
    raw: str = ""


# Order matters: most specific verdict words first so re.search picks the
# right one when an agent's reply mentions multiple in passing. The regex
# also accepts the prose form ("changes required", "approved with notes")
# with a single space variant — the connector words in hyphenated values.
_VERDICT_OPTIONS = (
    "changes-required",
    "changes required",
    "approved-with-notes",
    "approved with notes",
    "approved",
    "escalate",
)

_VERDICT_HEAD = re.compile(
    r"\b(" + "|".join(re.escape(opt) for opt in _VERDICT_OPTIONS) + r")\b",
    re.IGNORECASE,
)


class MavisRunner:
    """Run Mavis' review verdict."""

    MAVIS_PERSONA_NOTE = (
        "You are MAVIS, the documentarian and reviewer for the LOOP cowork team. "
        "Apply the review checklist in 2.0MAVIS/RULES/Review Checklist.md."
    )

    def __init__(self, runner: AgentRunner):
        self.runner = runner

    def review(
        self,
        deliverable_paths: list[Path],
        brief_excerpt: str,
        workdir: Path,
        timeout_s: int = 300,
    ) -> Verdict:
        """Run a single review and return the parsed Verdict.

        Concatenates deliverable contents into the prompt so Mavis sees the
        full text. For long deliverables the orchestrator should pre-truncate
        and provide a link.
        """
        deliverable_text = []
        for p in deliverable_paths:
            if p.exists() and p.is_file():
                try:
                    deliverable_text.append(
                        f"\n\n## Deliverable: {p.relative_to(workdir.parent.parent)}\n\n"
                        + p.read_text(encoding="utf-8", errors="replace")[:40_000]
                    )
                except Exception as e:  # noqa: BLE001
                    deliverable_text.append(f"\n\n## Deliverable: {p}\n\n(read error: {e})")
        deliverables_blob = "".join(deliverable_text) or "<no deliverable files found>"

        prompt = (
            f"{self.MAVIS_PERSONA_NOTE}\n\n"
            f"## Review brief\n\n{brief_excerpt[:4000]}\n\n"
            f"## Deliverables\n\n{deliverables_blob}\n\n"
            "## Output format (REQUIRED — Hermes parses this)\n\n"
            "Reply with EXACTLY one JSON object on a single fenced block:\n\n"
            "```json\n"
            "{\n"
            '  "verdict": "approved" | "approved-with-notes" | "changes-required" | "escalate",\n'
            '  "findings": ["..."],\n'
            '  "suggestions": ["..."],\n'
            '  "questions": ["..."],\n'
            '  "notes": "..."\n'
            "}\n"
            "```\n"
            "After the JSON block you may include prose, but the JSON block is required."
        )

        result: ProcessResult = self.runner.run_agy(
            prompt=prompt,
            workdir=workdir,
            timeout_s=timeout_s,
        )
        return self.parse_verdict(result.stdout + "\n" + result.stderr, raw=result.stdout)

    def parse_verdict(self, text: str, raw: str = "") -> Verdict:
        """Extract a Verdict from agent output. Tolerant of prose wrappers."""
        m = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", text, re.DOTALL)
        if m:
            blob = m.group(1)
            try:
                data = json.loads(blob)
                v = str(data.get("verdict", "approved-with-notes")).lower()
                if v not in VerdictStatus:
                    v = "approved-with-notes"
                return Verdict(
                    verdict=v,
                    findings=list(data.get("findings") or []),
                    suggestions=list(data.get("suggestions") or []),
                    questions=list(data.get("questions") or []),
                    notes=str(data.get("notes") or ""),
                    raw=raw or text,
                )
            except (ValueError, json.JSONDecodeError):
                pass
        # fallback: look for the verdict word directly
        head = _VERDICT_HEAD.search(text)
        if head:
            v = head.group(1).lower().replace(" ", "-")
            if v in VerdictStatus:
                return Verdict(verdict=v, raw=raw or text, notes="verdict parsed by heuristic (no JSON block)")
        # last resort
        return Verdict(verdict="approved-with-notes", raw=raw or text, notes="verdict unparsed; defaulting to approved-with-notes")


def verdict_to_markdown(v: Verdict) -> str:
    """Render a Verdict as a markdown block for posting into the review inbox file."""
    out = [
        "## VERDICT",
        "",
        f"**Verdict:** {v.verdict}",
        "",
        f"**Reviewed by:** Mavis",
        "**Reviewed at:** (orchestrator timestamp)",
        "",
    ]
    if v.findings:
        out += ["### Findings", ""]
        for i, f in enumerate(v.findings, 1):
            out.append(f"{i}. {f}")
        out.append("")
    if v.suggestions:
        out += ["### Suggestions", ""]
        for i, s in enumerate(v.suggestions, 1):
            out.append(f"{i}. {s}")
        out.append("")
    if v.questions:
        out += ["### Questions", ""]
        for i, q in enumerate(v.questions, 1):
            out.append(f"{i}. {q}")
        out.append("")
    if v.notes:
        out += ["### Notes", "", v.notes, ""]
    out.append("---")
    out.append("")
    out.append(f"<!-- raw agent output preserved below for audit -->")
    out.append("")
    out.append("<details>")
    out.append("")
    out.append(v.raw[:50_000])
    out.append("")
    out.append("</details>")
    return "\n".join(out)


def update_review_frontmatter(review_path: Path, verdict: str) -> None:
    """Set `status` in the review request frontmatter to the verdict-lower form."""
    status_map = {
        "approved": "approved",
        "approved-with-notes": "approved-with-notes",
        "changes-required": "changes-required",
        "escalate": "escalated",
    }
    new_status = status_map.get(verdict, "approved-with-notes")
    text = review_path.read_text(encoding="utf-8")
    updated = frontmatter.update(text, {"status": new_status})
    review_path.write_text(updated, encoding="utf-8")
