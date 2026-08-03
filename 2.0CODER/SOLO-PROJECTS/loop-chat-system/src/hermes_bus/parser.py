"""Parse user commands from CHAT/INBOX.md.

A command is a fenced block: lines starting with `---` (open), then
frontmatter lines, then a line `---` (close), then a body.

Format (matches CHAT/Command Template.md):

    ---
    command_id: CMD-YYYYMMDD-NNN
    type: task | question | status | system | note
    priority: low | normal | high | urgent
    agent_target: auto | hermes | opencode | agy | mavis
    created: YYYY-MM-DD HH:MM
    status: pending
    ---

    # Command: <title>

    <body>

    ## Acceptance Criteria
    1. ...
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterator

from . import frontmatter


@dataclass
class Command:
    command_id: str
    type: str
    priority: str
    agent_target: str
    created: str
    status: str
    title: str
    body: str
    raw: str = ""
    accepted_criteria: list[str] = field(default_factory=list)

    @property
    def is_pending(self) -> bool:
        return self.status == "pending"


_FENCE = re.compile(r"^---\s*$", re.MULTILINE)


_FRONTMATTER_HINT = re.compile(r"^\s*command_id:\s*CMD-", re.MULTILINE)


def iter_commands(text: str) -> Iterator[Command]:
    """Yield every Command parsed from the text.

    Algorithm:
      1. Find every `---` fence.
      2. A fence is "open" if the text immediately after it contains
         a `command_id:` line (i.e. it's about to introduce a frontmatter block).
      3. For each pair of consecutive open fences (or EOF), the region
         between them is a complete command: frontmatter block (between
         the open and its matching close fence) + body block (between
         the close fence and the next open fence or EOF).
      4. The CLOSE fence of each command is the next fence whose text
         after does NOT contain a `command_id:` line — i.e. the separator
         between the frontmatter block and the body block (or end of file).
    """
    fences = list(_FENCE.finditer(text))
    if not fences:
        return

    # Pre-compute is_open for every fence position.
    is_open: list[bool] = []
    for i, m in enumerate(fences):
        next_pos = fences[i + 1].start() if i + 1 < len(fences) else len(text)
        between = text[m.end():next_pos]
        is_open.append(bool(_FRONTMATTER_HINT.search(between)))

    # Pair each open fence with the next open fence (or EOF).
    # The block between two consecutive open fences (start of open i, start
    # of open k) is one complete command: its frontmatter (between fence i
    # and the closest non-open fence) plus its body.
    opens = [i for i, v in enumerate(is_open) if v]
    pairings: list[tuple[int, int]] = []
    for idx, i in enumerate(opens):
        start = fences[i].end()
        if idx + 1 < len(opens):
            end = fences[opens[idx + 1]].start()
        else:
            end = len(text)
        pairings.append((start, end))

    for start, end in pairings:
        block = text[start:end]
        try:
            cmd = parse_fenced_block(block)
        except ValueError:
            continue
        if cmd is None:
            continue
        yield cmd


def parse_fenced_block(block: str) -> Command | None:
    """Parse a single fence-delimited command block.

    The block argument is everything BETWEEN two `---` markers (excluding
    the markers themselves). Inside the block, expect:

        command_id: ...
        type: ...
        ...
        status: ...
        <blank line>
        # Command: <title>
        <body>
    """
    if "Replace with Your First Command" in block:
        return None

    # Skip placeholder/template commands: command_id matching CMD-YYYYMMDD-NNN
    # where every digit is literal (the template uses literally 'YYYYMMDD').
    import re as _re_placeholder

    if _re_placeholder.search(r"command_id:\s*CMD-YYYYMMDD-\d+", block):
        return None

    # Skip obviously empty bodies with the literal <short title> placeholder
    if "<short title>" in block or "Replace with" in block:
        return None

    # Split the frontmatter (k:v lines) from the body at the first blank line.
    # Strip any leading whitespace before scanning so a leading newline from the
    # outer split doesn't get treated as the body delimiter.
    raw_lines = block.splitlines()
    lines = [ln for ln in raw_lines if ln.strip() != ""]
    if not lines:
        return None
    fm_lines: list[str] = []
    body_lines: list[str] = []
    in_body = False
    for idx, ln in enumerate(raw_lines):
        # skip leading blanks before any frontmatter
        if not in_body and ln.strip() == "" and not fm_lines:
            continue
        if not in_body and ln.strip() == "":
            in_body = True
            continue
        if in_body:
            body_lines.append(ln)
        else:
            fm_lines.append(ln)

    fm_text = "\n".join(fm_lines)
    fm = frontmatter.parse_block(fm_text) if fm_text.strip() else {}

    cid = str(fm.get("command_id", "")).strip()
    if not cid.startswith("CMD-"):
        return None

    body = "\n".join(body_lines).strip()
    title = ""
    if body.startswith("# "):
        first_line = body.splitlines()[0]
        title = first_line[2:].strip()

    accepted: list[str] = []
    if "## Acceptance Criteria" in body:
        section = body.split("## Acceptance Criteria", 1)[1]
        for line in section.splitlines():
            m = re.match(r"\s*\d+\.\s+(.*)", line)
            if m:
                accepted.append(m.group(1).strip())

    return Command(
        command_id=cid,
        type=str(fm.get("type", "task")).strip(),
        priority=str(fm.get("priority", "normal")).strip(),
        agent_target=str(fm.get("agent_target", "auto")).strip(),
        created=str(fm.get("created", "")).strip(),
        status=str(fm.get("status", "pending")).strip(),
        title=title or cid,
        body=body,
        raw=block,
        accepted_criteria=accepted,
    )


# Backward-compat alias (older code referenced this name)
parse_block = parse_fenced_block


def find_pending(text: str, seen_ids: set[str]) -> list[Command]:
    """Return all pending commands not already processed (by command_id)."""
    out: list[Command] = []
    for cmd in iter_commands(text):
        if cmd.command_id in seen_ids:
            continue
        if cmd.is_pending:
            out.append(cmd)
    return out


def read_inbox(path: Path) -> str:
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8")


def make_brief_block(command: Command, task_id: str, agent_name: str, role: str) -> str:
    """Render a brief to be written into <agent>/CHAT/Inbox/<task-id>.md."""
    fm_lines = [
        "---",
        f"date: {command.created or ''}",
        f"type: {role}",
        "status: pending",
        f"task_id: {task_id}",
        f"command_id: {command.command_id}",
        f"agent_target: {command.agent_target}",
        f"priority: {command.priority}",
        "---",
        "",
    ]
    sections = [
        f"# Brief for {agent_name}: {command.title or command.command_id}",
        "",
        "## Origin",
        f"- Command: `{command.command_id}`",
        f"- Priority: {command.priority}",
        f"- Type: {command.type}",
        f"- Target: {command.agent_target}",
        "",
        "## Body",
        "",
        command.body.strip(),
        "",
    ]
    if command.accepted_criteria:
        sections.append("## Acceptance Criteria")
        sections.append("")
        for i, c in enumerate(command.accepted_criteria, 1):
            sections.append(f"{i}. {c}")
        sections.append("")
    sections.append("## Process")
    sections.append("")
    sections.append(
        "- Update status in this file under `## STATUS @ HH:MM` as you progress."
    )
    sections.append(
        "- Deliverable lives in your `SOLO-PROJECTS/<task-id>/` folder."
    )
    sections.append(
        "- When ready for review, set status `review-ready` and notify Hermes."
    )
    sections.append("")
    sections.append("## Status Updates")
    sections.append("")
    sections.append("<!-- Append new sections here: -->")
    sections.append("")
    return "\n".join(fm_lines + sections)
