"""Session orchestrator: pick up commands, dispatch, monitor, review, reply.

Public surface:
    SessionLog        - append-only audit log
    TaskCard          - mutable task record stored on disk under TASKS/STATUS/
    Orchestrator      - one loop iteration over all pending commands

The orchestrator does not own threads. It is called from the daemon, but
can also be called from a CLI entry point (`python -m hermes_bus.run_once`)
for batch processing.
"""

from __future__ import annotations

import json
import os
import re
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, Optional

from . import frontmatter, parser, router
from .agent_runner import AgentRunner, ProcessResult
from .mavis_runner import MavisRunner, Verdict, update_review_frontmatter, verdict_to_markdown


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def local_now_filename() -> str:
    return datetime.now().strftime("%Y%m%d-%H%M")


def local_now_human() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


# ---------- Session log (append-only) ----------

class SessionLog:
    """Append blocks to `CHAT/Session Log.md`."""

    def __init__(self, log_path: Path):
        self.log_path = log_path

    def append_session(
        self,
        start: str,
        end: str,
        operator: str,
        commands_processed: list[tuple[str, str]],
        in_progress: list[str],
        notable: list[str] = (),
    ) -> None:
        lines = [
            "",
            f"### Session {start} — {end}",
            "",
            f"- **Start:** {start}",
            f"- **End:** {end}",
            f"- **Operator:** {operator}",
            "- **Commands processed:**",
        ]
        if commands_processed:
            for cid, outcome in commands_processed:
                lines.append(f"  - `{cid}` -> {outcome}")
        else:
            lines.append("  - none")
        lines.append("- **In progress:**")
        if in_progress:
            for cid in in_progress:
                lines.append(f"  - `{cid}`")
        else:
            lines.append("  - none")
        lines.append("- **Notable:**")
        if notable:
            for n in notable:
                lines.append(f"  - {n}")
        else:
            lines.append("  - (none)")

        text = self.log_path.read_text(encoding="utf-8") if self.log_path.exists() else "# Session Log\n"
        if not text.endswith("\n"):
            text += "\n"
        text += "\n".join(lines) + "\n"
        self.log_path.parent.mkdir(parents=True, exist_ok=True)
        self.log_path.write_text(text, encoding="utf-8")


# ---------- Task card ----------

@dataclass
class TaskCard:
    task_id: str
    command_id: str
    agent: str
    status: str  # "open" | "dispatched" | "review" | "needs-revision" | "done" | "failed"
    path: Path
    priority: str
    title: str

    @classmethod
    def create(
        cls,
        tasks_dir: Path,
        command: parser.Command,
        agent: str,
    ) -> "TaskCard":
        tasks_dir.mkdir(parents=True, exist_ok=True)
        slug = re.sub(r"[^a-z0-9-]+", "-", command.title.lower()).strip("-")[:60] or "task"
        task_id = f"{local_now_filename()}-{slug}"
        path = tasks_dir / f"{task_id}.md"
        body = [
            f"# Task {task_id}",
            "",
            f"## Origin",
            f"- Source command: `{command.command_id}`",
            f"- Created: {utc_now_iso()}",
            f"- Priority: {command.priority}",
            f"- Type: {command.type}",
            f"- Initial agent: {agent}",
            "",
            f"## Command (verbatim)",
            "",
            command.body.strip() or "<no body>",
            "",
            f"## Acceptance Criteria",
            "",
        ]
        for i, c in enumerate(command.accepted_criteria, 1):
            body.append(f"{i}. {c}")
        if not command.accepted_criteria:
            body.append("- (none provided)")
        body += [
            "",
            "## Plan",
            "",
            f"- Route: `{agent}` per Hermes routing matrix.",
            "- Hermes writes brief to agent's `CHAT/Inbox/`.",
            "- Agent executes; STATUS updates posted to inbox.",
            "- Mavis reviews when marked `review-ready`.",
            "- Hermes composes OUTBOX reply.",
            "",
            "## Status",
            "",
            f"- state: open",
            f"- updated: {utc_now_iso()}",
            "",
            "## Deliverables",
            "",
            "- (filled in as they land)",
            "",
            "## Resolution",
            "",
            "- (filled in on close)",
            "",
        ]
        text = "---\n" + "title: Task Card\ntype: task-card\nstatus: open\ntask_id: " + task_id + "\n---\n\n" + "\n".join(body)
        path.write_text(text, encoding="utf-8")
        return cls(
            task_id=task_id,
            command_id=command.command_id,
            agent=agent,
            status="open",
            path=path,
            priority=command.priority,
            title=command.title,
        )

    def update_status(self, new_status: str) -> None:
        text = self.path.read_text(encoding="utf-8")
        # Update the frontmatter status — this is the canonical current state.
        text = frontmatter.update(text, {"status": new_status})
        # Also append a lifecycle block if missing; do NOT mutate prior ## STATUS @ blocks.
        marker = "## Lifecycle State"
        if marker in text:
            text = re.sub(
                r"(## Lifecycle State\s*\n\s*- state: ).*",
                f"\\g<1>{new_status}",
                text,
            )
        else:
            # Add lifecycle state right after the frontmatter close fence.
            fence_close = re.search(r"^---\s*\n", text[3:], flags=re.MULTILINE)
            insert_at = (fence_close.end() + 3) if fence_close else len(text)
            block = (
                f"\n## Lifecycle State\n\n"
                f"- state: {new_status}\n"
                f"- updated: {utc_now_iso()}\n\n"
            )
            text = text[:insert_at] + block + text[insert_at:]
        self.path.write_text(text, encoding="utf-8")
        self.status = new_status

    def append_status(self, who: str, state: str, notes: str) -> None:
        text = self.path.read_text(encoding="utf-8")
        block = (
            f"\n## STATUS @ {local_now_human()} by {who}\n"
            f"- state: {state}\n"
            f"- notes: {notes}\n"
        )
        # insert before "## Resolution"
        if "## Resolution" in text:
            text = text.replace("## Resolution", block + "\n## Resolution", 1)
        else:
            text += block
        self.path.write_text(text, encoding="utf-8")


# ---------- INBOX helpers ----------

INDEX_LINE = re.compile(r"^\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|\s*([^|`]+?)\s*\|")


def update_inbox_index(inbox_path: Path, command_id: str, new_status: str) -> None:
    """Update the inbox index table row for a command to reflect new status.

    Idempotent — if no row matches the command_id, no error.
    """
    if not inbox_path.exists():
        return
    text = inbox_path.read_text(encoding="utf-8")

    lines = text.splitlines()
    out = []
    found = False
    for line in lines:
        m = re.match(
            r"^\|\s*`?([A-Za-z0-9-]+)`?\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|",
            line,
        )
        if m and m.group(1).strip() == command_id:
            cid, title, ctype, prio, status, created, _ = m.group(1).strip(), m.group(2).strip(), m.group(3).strip(), m.group(4).strip(), m.group(5).strip(), m.group(6).strip(), m.group(7).strip()
            line = f"| `{cid}` | {title} | {ctype} | {prio} | **{new_status}** | {created} | {utc_now_iso()} |"
            found = True
        out.append(line)
    if not found:
        # append a row to the index under "## Commands Index"
        # find the table header separator and append after the last body row.
        for i, line in enumerate(out):
            if line.strip().startswith("|---") or line.strip().startswith("| ---"):
                # find end of table (next non-row line)
                end = len(out)
                for j in range(i + 1, len(out)):
                    if not out[j].strip().startswith("|"):
                        end = j
                        break
                cid_row = f"| `{command_id}` | (no title) | task | normal | **{new_status}** | {utc_now_iso()} | {utc_now_iso()} |"
                out.insert(end, cid_row)
                text = "\n".join(out)
                inbox_path.write_text(text, encoding="utf-8")
                return
        # no index table yet -> noop
        return
    inbox_path.write_text("\n".join(out), encoding="utf-8")


def mark_command_in_inbox(inbox_path: Path, command_id: str, new_status: str) -> None:
    """Update the inline frontmatter `status:` line for the named command block."""
    if not inbox_path.exists():
        return
    text = inbox_path.read_text(encoding="utf-8")
    if command_id not in text:
        return
    # Find the block containing this command_id
    blocks = re.split(r"^---\s*$", text, flags=re.MULTILINE)
    # blocks alternates: [pre, fm, body, fm, body, ...]
    i = 1
    new_parts = []
    cursor = 0
    in_first_block = True
    # easier: walk line by line, detect fenced command block, replace its fm
    out = []
    in_cmd = False
    fm_lines = []
    body_lines = []
    fence = 0
    cid_line_idx = None
    sections: list[str] = []
    current: list[str] = []
    events: list[tuple[str, str]] = []  # (event, content)

    lines = text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip() == "---":
            # possible boundary
            # take block lines until next "---"
            j = i + 1
            block = []
            while j < len(lines) and lines[j].strip() != "---":
                block.append(lines[j])
                j += 1
            # i..j inclusive is the fence + block
            fence_block = lines[i : j + 1]  # include closing ---
            contains_cid = command_id in "\n".join(block)
            if contains_cid:
                # rebuild frontmatter status line if present in `block`
                new_block = []
                replaced = False
                for ln in block:
                    if re.match(r"^\s*status\s*:", ln) and not replaced:
                        new_block.append(f"status: {new_status}")
                        replaced = True
                    else:
                        new_block.append(ln)
                if not replaced:
                    new_block.insert(0, f"status: {new_status}")
                lines[i : j + 1] = ["---"] + new_block + ["---"]
                # skip past the closing fence
                i = j + 1
                continue
            i = j + 1
            continue
        i += 1
    inbox_path.write_text("\n".join(lines), encoding="utf-8")


# ---------- Brief writing ----------

AGENT_DIRS = {
    "opencode": "3.0OPENCODE",
    "agy": "4.0AGY",
    "mavis": "2.0MAVIS",
    "hermes": "1.0HERMES",
}


def write_brief(
    vault_root: Path,
    command: parser.Command,
    task_id: str,
    agent: str,
    role: str,
    brief_body: str,
) -> Path:
    """Write a brief file into the agent's CHAT/Inbox directory. Return the path."""
    base = vault_root / AGENT_DIRS[agent] / "CHAT" / "Inbox"
    base.mkdir(parents=True, exist_ok=True)
    path = base / f"{task_id} — {re.sub(r'[^A-Za-z0-9-]+', '-', role)}.md"
    path.write_text(brief_body, encoding="utf-8")
    return path


def write_status_update(brief_path: Path, status_line: str, notes: str) -> None:
    """Append a `## STATUS @ HH:MM` section to an inbox file (agent reporting back)."""
    text = brief_path.read_text(encoding="utf-8")
    block = f"\n## STATUS @ {local_now_human()}\n- state: {status_line}\n- notes: {notes}\n"
    text += block
    brief_path.write_text(text, encoding="utf-8")


# ---------- Orchestrator ----------

class Orchestrator:
    """One tick of the LOOP chat orchestrator.

    Path:
        1. Read CHAT/INBOX.md, scan for new pending commands.
        2. For each command: route, create TaskCard, write brief.
        3. Spawn the agent CLI (opencode or agy) with the brief as prompt.
        4. Tickle the agent's inbox for STATUS updates (one poll).
        5. If review-ready, invoke MavisRunner for verdict.
        6. Write HERMES_REPLY to OUTBOX.md; mark command done.
    """

    def __init__(
        self,
        vault_root: Path,
        workdir: Path | None = None,
        project_id: str | None = None,
    ):
        self.vault = vault_root
        self.workdir = workdir or (vault_root / "3.0OPENCODE/SOLO-PROJECTS/loop-chat-system")
        self.project_id = project_id or local_now_filename() + "-loop"
        self.runner = AgentRunner()
        self.mavis = MavisRunner(self.runner)
        self.session_log = SessionLog(vault_root / "CHAT" / "Session Log.md")

    # ---- command pickup ----

    def pickup_pending_commands(self, seen_ids: set[str]) -> list[parser.Command]:
        inbox = self.vault / "CHAT" / "INBOX.md"
        text = parser.read_inbox(inbox)
        return parser.find_pending(text, seen_ids)

    # ---- task card ----

    def open_task_card(self, cmd: parser.Command, agent: str) -> TaskCard:
        tasks_dir = self.vault / "TASKS" / "STATUS"
        return TaskCard.create(tasks_dir, cmd, agent)

    # ---- brief ----

    def write_brief_for(
        self,
        cmd: parser.Command,
        task_id: str,
        agent: str,
    ) -> Path:
        if agent == "opencode":
            role = "coding-brief"
            brief = parser.make_brief_block(cmd, task_id, "OpenCode", role)
        elif agent == "agy":
            role = "research-brief"
            brief = parser.make_brief_block(cmd, task_id, "AGY", role)
        elif agent == "mavis":
            role = "doc-brief"
            brief = parser.make_brief_block(cmd, task_id, "Mavis", role)
        else:
            role = "note"
            brief = parser.make_brief_block(cmd, task_id, "Hermes", role)
        return write_brief(self.vault, cmd, task_id, agent, role, brief)

    # ---- dispatch ----

    def dispatch_agent(self, agent: str, brief_path: Path, task: TaskCard) -> ProcessResult:
        agent_workdir = self._agent_workdir(agent, task.task_id)
        brief_text = brief_path.read_text(encoding="utf-8")
        # Wrap the brief with a sub-agent prompt so the CLI runs as the agent
        persona_note = self._agent_persona(agent)
        prompt = (
            f"{persona_note}\n\n"
            f"Your inbound brief is at: `{brief_path.relative_to(self.vault)}`.\n"
            f"Your working directory for this task is: `{agent_workdir}`.\n"
            f"Read the brief in full, then begin work. Update the brief's "
            f"`## STATUS @ HH:MM` section as you progress. Place all outputs in "
            f"the working directory. When complete, set the brief's status to "
            f"`review-ready` (or `done` if no review is required).\n\n"
            f"--- BEGIN BRIEF ---\n{brief_text}\n--- END BRIEF ---\n"
        )
        if agent == "opencode":
            return self.runner.run_opencode(prompt, agent_workdir)
        return self.runner.run_agy(prompt, agent_workdir)

    def _agent_workdir(self, agent: str, task_id: str) -> Path:
        d = self.vault / AGENT_DIRS[agent] / "SOLO-PROJECTS" / task_id
        d.mkdir(parents=True, exist_ok=True)
        return d

    def _agent_persona(self, agent: str) -> str:
        if agent == "opencode":
            return (
                "You are running as OPENCODE, the master code engineer of the "
                "LOOP cowork vault. Apply 3.0OPENCODE/RULES/Coding Standards.md. "
                "You write code only; you do not address the user."
            )
        if agent == "agy":
            return (
                "You are running as AGY (Antigravity), the researcher, backup "
                "operator, and complex mathematician of the LOOP cowork vault. "
                "Apply 4.0AGY/RULES/. You research / operate; you do not address "
                "the user."
            )
        if agent == "mavis":
            return (
                "You are running as MAVIS, the documentarian and reviewer of "
                "the LOOP cowork vault. Apply 2.0MAVIS/RULES/."
            )
        return "You are running inside the LOOP vault as an internal agent."

    # ---- review ----

    def request_review(
        self,
        task: TaskCard,
        cmd: parser.Command,
        agent: str,
    ) -> Path:
        """Write a review request to Mavis. Returns the path."""
        deliverable_paths = self._gather_deliverables(agent, task.task_id)
        review_path = self.vault / AGENT_DIRS["mavis"] / "CHAT" / "Inbox" / f"{task.task_id} — Review.md"
        review_path.parent.mkdir(parents=True, exist_ok=True)
        body = [
            "---",
            f"date: {utc_now_iso()}",
            "type: review-request",
            "status: pending",
            f"task_id: {task.task_id}",
            f"deliverable_agent: {agent}",
            f"priority: {cmd.priority}",
            "deliverable_paths:",
        ]
        for p in deliverable_paths:
            try:
                rel = str(p.relative_to(self.vault))
            except ValueError:
                rel = str(p)
            body.append(f"  - {rel}")
        body += [
            "---",
            "",
            "## Brief",
            "",
            cmd.body.strip()[:4000] or "<no body>",
            "",
            "## Acceptance Criteria",
            "",
        ]
        for i, c in enumerate(cmd.accepted_criteria, 1):
            body.append(f"{i}. {c}")
        if not cmd.accepted_criteria:
            body.append("- (none provided)")
        body += [
            "",
            "## Deliverables",
            "",
        ]
        for p in deliverable_paths:
            try:
                rel = str(p.relative_to(self.vault))
            except ValueError:
                rel = str(p)
            body.append(f"- {rel}")
        body += [
            "",
            "## Deadline",
            "",
            "(orchestrator default: next session)",
            "",
        ]
        review_path.write_text("\n".join(body), encoding="utf-8")
        return review_path

    def _gather_deliverables(self, agent: str, task_id: str) -> list[Path]:
        agent_workdir = self._agent_workdir(agent, task_id)
        out: list[Path] = []
        if (agent_workdir / "README.md").exists():
            out.append(agent_workdir / "README.md")
        # include all top-level .md files except the brief mirror
        for p in sorted(agent_workdir.iterdir()):
            if p.is_file() and p.suffix == ".md":
                out.append(p)
        return out

    # ---- reply ----

    def compose_reply(
        self,
        cmd: parser.Command,
        task: TaskCard,
        agent: str,
        verdict: Verdict | None,
        work_products: list[Path],
        route_decision: router.RouteDecision,
    ) -> str:
        outcome = "done" if (verdict is None or verdict.verdict in ("approved", "approved-with-notes")) else (
            "needs-revision" if verdict.verdict == "changes-required" else "escalate"
        )
        if outcome == "done" and verdict is None:
            outcome = "done"

        parts = [
            f"## Reply to `{cmd.command_id}`",
            "",
            f"**Outcome:** {outcome}",
            f"**Routed to:** {agent} ({route_decision.reasoning})",
            f"**Task card:** `TASKS/STATUS/{task.task_id}.md`",
            f"**Command priority:** {cmd.priority}",
            f"**Replied at:** {utc_now_iso()}",
            "",
        ]
        if verdict:
            parts += [
                "### Mavis review",
                "",
                f"**Verdict:** {verdict.verdict}",
                "",
            ]
            if verdict.findings:
                parts.append("**Findings:**")
                parts.append("")
                for i, f in enumerate(verdict.findings, 1):
                    parts.append(f"{i}. {f}")
                parts.append("")
            if verdict.suggestions:
                parts.append("**Suggestions:**")
                parts.append("")
                for i, s in enumerate(verdict.suggestions, 1):
                    parts.append(f"{i}. {s}")
                parts.append("")
            if verdict.questions:
                parts.append("**Questions:**")
                parts.append("")
                for i, q in enumerate(verdict.questions, 1):
                    parts.append(f"{i}. {q}")
                parts.append("")
        if work_products:
            parts.append("### Artifacts")
            parts.append("")
            for p in work_products:
                try:
                    rel = str(p.relative_to(self.vault))
                except ValueError:
                    rel = str(p)
                parts.append(f"- `{rel}`")
            parts.append("")
        return "\n".join(parts)

    def append_outbox(self, reply_markdown: str) -> None:
        """Append the reply to the OUTBOX file. Replies are strictly append-only.

        We do NOT use the START/END comment markers because that pattern
        breaks if any agent or template re-renders the OUTBOX file with
        duplicate markers. True append: each new reply is written AFTER
        the existing content. The index row is appended after the END
        marker; if the index header is missing, it is created once.
        """
        outbox = self.vault / "CHAT" / "OUTBOX.md"
        text = outbox.read_text(encoding="utf-8") if outbox.exists() else (
            "# User Outbox\n\n<!-- HERMES_REPLIES_START -->\n<!-- HERMES_REPLIES_END -->\n\n## Replies Index\n\n| reply_to | title | outcome | responded_at |\n|---|---|---|---|\n"
        )
        if not text.endswith("\n"):
            text += "\n"
        # Insert the reply immediately BEFORE the HERMES_REPLIES_END marker if
        # present; otherwise append it as new content under a START/END pair.
        if "<!-- HERMES_REPLIES_END -->" in text:
            text = text.replace(
                "<!-- HERMES_REPLIES_END -->",
                reply_markdown + "\n<!-- HERMES_REPLIES_END -->",
                1,
            )
        else:
            text += "\n<!-- HERMES_REPLIES_START -->\n\n" + reply_markdown + "\n<!-- HERMES_REPLIES_END -->\n"
        # Append a row to the index.
        cid_match = re.search(r"`(CMD-[0-9-]+)`", reply_markdown)
        if cid_match and "## Replies Index" in text:
            cid = cid_match.group(1)
            title_match = re.search(r"## Reply to `[^`]+`\s*\n\s*\n\s*\*\*Outcome:\*\*\s*(\S+)", reply_markdown)
            outcome = title_match.group(1) if title_match else "done"
            time_match = re.search(r"\*\*Replied at:\*\*\s*(.+)", reply_markdown)
            ts = time_match.group(1).strip() if time_match else utc_now_iso()
            # only append if not already there (avoid dup when --once re-runs)
            if f"| `{cid}` |" not in text:
                text += f"\n| `{cid}` | (from `{cid}`) | {outcome} | {ts} |"
        outbox.write_text(text, encoding="utf-8")

    # ---- main loop tick ----

    def process_command(self, cmd: parser.Command, seen_ids: set[str]) -> str:
        decision = router.route(cmd)
        agent = decision.agent

        if agent == "hermes":
            return self._process_hermes_direct(cmd)

        task = self.open_task_card(cmd, agent)
        task.append_status("Hermes", "dispatching", f"routed to {agent}")
        task.update_status("dispatched")
        brief = self.write_brief_for(cmd, task.task_id, agent)
        task.append_status("Hermes", "brief-written", f"brief at {brief.relative_to(self.vault)}")

        result = self.dispatch_agent(agent, brief, task)
        agent_dir = self._agent_workdir(agent, task.task_id)
        # Save the run log for audit
        (agent_dir / "agent-run.log").write_text(
            f"# Agent run at {utc_now_iso()}\n\n"
            f"command: {' '.join(result.cmd)}\n"
            f"exit_code: {result.exit_code}\n"
            f"duration_s: {result.duration_s:.2f}\n"
            f"timed_out: {result.timed_out}\n\n"
            f"## stdout\n\n```\n{result.stdout[:50000]}\n```\n\n"
            f"## stderr\n\n```\n{result.stderr[:20000]}\n```\n",
            encoding="utf-8",
        )
        write_status_update(brief, "agent-run", f"exit={result.exit_code} dur={result.duration_s:.1f}s")
        task.append_status(agent, "agent-run", f"exit={result.exit_code} dur={result.duration_s:.1f}s")

        verdict: Verdict | None = None
        if decision.skip_review or result.exit_code != 0:
            # Hermes answers directly without dispatch review
            verdict = Verdict(verdict="approved", notes="skip_review=True")
        else:
            review_path = self.request_review(task, cmd, agent)
            write_status_update(brief, "review-requested", f"asked Mavis for verdict at {review_path.name}")
            task.append_status("Hermes", "review-requested", f"Mavis review at {review_path.relative_to(self.vault)}")
            verdict = self.mavis.review(
                deliverable_paths=self._gather_deliverables(agent, task.task_id),
                brief_excerpt=cmd.body,
                workdir=review_path.parent.parent / "SOLO-PROJECTS" / task.task_id,
            )
            verdict_text = verdict_to_markdown(verdict)
            with review_path.open("a", encoding="utf-8") as f:
                f.write("\n\n" + verdict_text)
            update_review_frontmatter(review_path, verdict.verdict)
            write_status_update(brief, "review-received", f"verdict={verdict.verdict}")
            task.append_status("Mavis", "verdict", f"verdict={verdict.verdict}")

        work_products = self._gather_deliverables(agent, task.task_id)
        reply = self.compose_reply(cmd, task, agent, verdict, work_products, decision)
        self.append_outbox(reply)
        mark_command_in_inbox(self.vault / "CHAT" / "INBOX.md", cmd.command_id, "done")
        update_inbox_index(self.vault / "CHAT" / "INBOX.md", cmd.command_id, "done")
        seen_ids.add(cmd.command_id)
        task.update_status("done")
        return reply

    def _process_hermes_direct(self, cmd: parser.Command) -> str:
        """Hermes handles the command without sub-agent dispatch.

        For question/note/system types we just compose a short audit reply.
        For system commands, in v0.1 we acknowledge only (real ops not enabled).
        """
        if cmd.type == "system":
            ack = (
                f"## Reply to `{cmd.command_id}`\n\n"
                f"**Outcome:** acknowledged\n"
                f"**Routed to:** hermes (system)\n"
                f"**Replied at:** {utc_now_iso()}\n\n"
                f"System command acknowledged.\n\n"
                f"> NOTE: Real system execution is not yet wired in v0.1; "
                f"this is a manual confirmation that Hermes received and "
                f"queued the system command. Use explicit auth on the chat "
                f"channel to trigger execution.\n\n"
            )
        else:
            ack = (
                f"## Reply to `{cmd.command_id}`\n\n"
                f"**Outcome:** recorded\n"
                f"**Routed to:** hermes (direct)\n"
                f"**Replied at:** {utc_now_iso()}\n\n"
                f"Hermes logged this as `{cmd.type}` and will continue in "
                f"the same session. No agent dispatch required.\n\n"
            )
        self.append_outbox(ack)
        mark_command_in_inbox(self.vault / "CHAT" / "INBOX.md", cmd.command_id, "done")
        return ack

    def run_once(self, seen_ids: set[str] | None = None) -> list[tuple[str, str]]:
        seen_ids = seen_ids if seen_ids is not None else set()
        processed: list[tuple[str, str]] = []
        for cmd in self.pickup_pending_commands(seen_ids):
            reply = self.process_command(cmd, seen_ids)
            outcome_match = re.search(r"\*\*Outcome:\*\*\s*(\S+)", reply)
            outcome = outcome_match.group(1) if outcome_match else "unknown"
            processed.append((cmd.command_id, outcome))
        return processed
