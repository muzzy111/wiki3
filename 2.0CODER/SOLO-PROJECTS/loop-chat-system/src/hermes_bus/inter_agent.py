"""Inter-agent message handlers for hermes_bus.

Implements the protocol defined in
`1.0HERMES/CHAT/Inter-Agent Protocol.md`:

- handle_completion()         agent -> Hermes; integrates the deliverable.
- handle_self_submission()    agent -> Mavis; triggers Mavis verdict.
- handle_handoff()            OpenCode -> Hermes -> AGY brokered request.
- poll_all_inboxes()          scan every CHAT/Inbox/ for actionable items.

State management rules:

- Hermes is the only agent that writes to multiple inboxes.
- Mavis is the only agent that reads review submissions and writes
  verdicts.
- OpenCode and AGY do not read each other's inboxes. Cross-agent
  handoffs go through Hermes.
- All writes are append-only where possible. Status updates are added
  under `## STATUS @ HH:MM` sections; the original frontmatter `status`
  is also advanced.
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, Optional

from . import frontmatter
from .agent_runner import AgentRunner
from .mavis_runner import MavisRunner, Verdict, verdict_to_markdown, update_review_frontmatter


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def local_human() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


# ---- agent dirs (same map as orchestrator.py) ----

AGENT_DIRS = {
    "opencode": "3.0OPENCODE",
    "agy": "4.0AGY",
    "mavis": "2.0MAVIS",
    "hermes": "1.0HERMES",
}


def agent_dir(vault: Path, agent: str) -> Path:
    return vault / AGENT_DIRS[agent]


def inbox_dir(vault: Path, agent: str) -> Path:
    return agent_dir(vault, agent) / "CHAT" / "Inbox"


def outbox_dir(vault: Path, agent: str) -> Path:
    return agent_dir(vault, agent) / "CHAT" / "Outbox"


# ---- filename parsing ----

_FN = re.compile(r"^(?P<task_id>.+?)\s+—\s+(?P<kind>[A-Za-z][\w-]+)\.md$")


def parse_filename(name: str) -> tuple[Optional[str], Optional[str]]:
    """Return (task_id, kind) from a chat filename, or (None, None) on miss."""
    m = _FN.match(name)
    if not m:
        return None, None
    return m.group("task_id"), m.group("kind")


def find_inbox_files(vault: Path, agent: str) -> list[Path]:
    """All inbox files for an agent, sorted by mtime (oldest first)."""
    d = inbox_dir(vault, agent)
    if not d.exists():
        return []
    return sorted(d.iterdir(), key=lambda p: p.stat().st_mtime)


def task_card_path(vault: Path, task_id: str) -> Path:
    return vault / "TASKS" / "STATUS" / f"{task_id}.md"


def load_task_card(vault: Path, task_id: str) -> Optional[dict]:
    """Return the parsed frontmatter of a task card, or None if missing."""
    p = task_card_path(vault, task_id)
    if not p.exists():
        return None
    fm, _ = frontmatter.parse(p.read_text(encoding="utf-8"))
    return fm


def read_task_card(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_task_card(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8")


def advance_status(path: Path, new_status: str, who: str, notes: str) -> None:
    """Append a STATUS @ block and bump the frontmatter status field."""
    text = read_task_card(path)
    text = frontmatter.update(text, {"status": new_status})
    block = f"\n## STATUS @ {local_human()} by {who}\n- state: {new_status}\n- notes: {notes}\n"
    if "## Resolution" in text:
        text = text.replace("## Resolution", block + "\n## Resolution", 1)
    else:
        text += block
    write_task_card(path, text)


# ---- handler: completion (agent -> Hermes) ----

def handle_completion(
    vault: Path,
    inbox_file: Path,
    *,
    runner: AgentRunner | None = None,
) -> tuple[bool, str]:
    """Process a `*-completion.md` file written by OpenCode or AGY.

    Returns (handled, summary). Reads the file, finds the parent task
    card, advances its status, and writes a Hermes-side STATUS block.
    The deliverable already lives under <agent>/SOLO-PROJECTS/<task-id>/
    so this handler does NOT move files; it only updates audit state.

    It is the orchestrator's job (not this handler's) to compose the
    final user reply; this handler just records that the completion
    arrived and updates the ledger.
    """
    text = inbox_file.read_text(encoding="utf-8")
    fm, body = frontmatter.parse(text)
    task_id = str(fm.get("task_id", "")).strip()
    src = str(fm.get("from", "")).strip()
    status = str(fm.get("status", "")).strip()
    if not task_id or not src:
        return False, f"missing task_id/from in {inbox_file.name}"
    if status and status != "posted":
        # already acknowledged/integrated; skip silently
        return False, f"status={status}; nothing to do"

    tc = task_card_path(vault, task_id)
    if not tc.exists():
        # Orphan completion: log to system record, do not error.
        _orphan_completion(vault, inbox_file, task_id)
        return False, f"orphan completion for {task_id}"

    advance_status(tc, "completion-received", "Hermes", f"{src} posted completion at {inbox_file.name}")
    # advance inbox file status
    new_text = frontmatter.update(text, {"status": "acknowledged"})
    new_text = _append_status(new_text, "hermes", "acknowledged", "Hermes integrated completion into task card")
    inbox_file.write_text(new_text, encoding="utf-8")
    return True, f"acknowledged completion of {task_id} from {src}"


def _append_status(text: str, who: str, state: str, notes: str) -> str:
    block = f"\n## STATUS @ {local_human()} by {who}\n- state: {state}\n- notes: {notes}\n"
    if "## Status Updates" in text:
        # Insert AFTER the Status Updates marker.
        idx = text.index("## Status Updates")
        # find end of line for that heading
        nl = text.find("\n", idx)
        return text[:nl + 1] + block + text[nl + 1:]
    return text + block


def _orphan_completion(vault: Path, inbox_file: Path, task_id: str) -> None:
    """Log an orphan completion to SYSTEM/STYTEM RECORD/ when no task card exists."""
    target = vault / "SYSTEM" / "STYTEM RECORD" / "Orphan Completions.md"
    target.parent.mkdir(parents=True, exist_ok=True)
    header = "---\ntitle: Orphan Completions\ntype: audit\nstatus: active\n---\n\n# Orphan Completions\n\n"
    if not target.exists():
        target.write_text(header, encoding="utf-8")
    with target.open("a", encoding="utf-8") as f:
        f.write(f"\n- {utc_now_iso()} — {task_id} from {inbox_file.name}\n")


# ---- handler: self-submission (agent -> Mavis) ----

def handle_self_submission(
    vault: Path,
    submission_file: Path,
    *,
    runner: AgentRunner,
    timeout_s: int = 300,
) -> tuple[bool, str]:
    """Process a `*-Review.md` file written by OpenCode or AGY to Mavis.

    Mirrors the orchestrator's review-request flow but with the
    SUBMITTING AGENT (not Hermes) driving the action — the agent is
    self-submitting because the brief's `review: required` flag was set
    in the dispatch.

    Mavis returns a Verdict via MavisRunner.run_agy; the verdict is
    written into the review file under `## VERDICT` and the verdict
    state is mirrored to the parent task card. The verdict file is also
    copied to `<Hermes>/CHAT/Inbox/` so Hermes' pickup loop sees it.
    """
    text = submission_file.read_text(encoding="utf-8")
    fm, body = frontmatter.parse(text)
    task_id = str(fm.get("task_id", "")).strip()
    deliverable_agent = str(fm.get("deliverable_agent", "")).strip()
    status = str(fm.get("status", "")).strip()
    if not task_id or not deliverable_agent:
        return False, f"missing task_id/deliverable_agent in {submission_file.name}"
    if status and status != "pending":
        return False, f"status={status}; nothing to do"

    # Mark the submission acknowledged.
    new_text = frontmatter.update(text, {"status": "acknowledged"})
    new_text = _append_status(new_text, "mavis", "acknowledged", "Mavis opened the submission")
    submission_file.write_text(new_text, encoding="utf-8")

    tc = task_card_path(vault, task_id)
    if tc.exists():
        advance_status(tc, "in-review", "Mavis", f"{deliverable_agent} submitted; Mavis reviewing {submission_file.name}")

    # Gather deliverable paths from the submission's deliverable_paths frontmatter.
    paths_field = fm.get("deliverable_paths") or []
    if isinstance(paths_field, str):
        paths_field = [paths_field]
    deliverable_paths = [vault / p for p in paths_field if p]

    mavis = MavisRunner(runner)
    verdict = mavis.review(
        deliverable_paths=deliverable_paths,
        brief_excerpt=str(fm.get("brief_excerpt", body[:4000])),
        workdir=submission_file.parent.parent / "SOLO-PROJECTS" / task_id,
        timeout_s=timeout_s,
    )

    # Write verdict into the submission file.
    with submission_file.open("a", encoding="utf-8") as f:
        f.write("\n\n" + verdict_to_markdown(verdict))
    update_review_frontmatter(submission_file, verdict.verdict)

    # Mirror verdict to Hermes' inbox so the orchestrator picks it up.
    mirror_path = inbox_dir(vault, "hermes") / f"{task_id} — verdict.md"
    mirror_path.parent.mkdir(parents=True, exist_ok=True)
    mirror_text = _render_verdict_mirror(task_id, deliverable_agent, verdict)
    mirror_path.write_text(mirror_text, encoding="utf-8")

    if tc.exists():
        advance_status(
            tc,
            f"verdict-{verdict.verdict}",
            "Mavis",
            f"verdict={verdict.verdict}; findings={len(verdict.findings)}",
        )

    return True, f"verdict={verdict.verdict} for {task_id} from {deliverable_agent}"


def _render_verdict_mirror(task_id: str, deliverable_agent: str, v: Verdict) -> str:
    fm_block = (
        "---\n"
        f"date: {utc_now_iso()}\n"
        "type: verdict\n"
        "status: posted\n"
        f"task_id: {task_id}\n"
        f"from: mavis\n"
        "to: hermes\n"
        "priority: normal\n"
        f"correlation_id: {task_id}\n"
        "---\n\n"
        f"# Verdict on {task_id}\n\n"
        f"**Reviewer:** Mavis\n"
        f"**Deliverable agent:** {deliverable_agent}\n"
        f"**Verdict:** {v.verdict}\n\n"
    )
    body_parts: list[str] = []
    if v.findings:
        body_parts.append("## Findings\n\n")
        for i, f in enumerate(v.findings, 1):
            body_parts.append(f"{i}. {f}\n")
        body_parts.append("\n")
    if v.suggestions:
        body_parts.append("## Suggestions\n\n")
        for i, s in enumerate(v.suggestions, 1):
            body_parts.append(f"{i}. {s}\n")
        body_parts.append("\n")
    if v.questions:
        body_parts.append("## Questions\n\n")
        for i, q in enumerate(v.questions, 1):
            body_parts.append(f"{i}. {q}\n")
        body_parts.append("\n")
    if v.notes:
        body_parts.append(f"## Notes\n\n{v.notes}\n\n")
    body_parts.append("## Raw Agent Output\n\n")
    body_parts.append("<details>\n\n")
    body_parts.append(v.raw[:50_000])
    body_parts.append("\n\n</details>\n")
    return fm_block + "".join(body_parts)


# ---- handler: handoff (OpenCode -> Hermes -> AGY) ----

def handle_handoff(
    vault: Path,
    handoff_request_file: Path,
) -> tuple[bool, str]:
    """Process a `*-handoff-request.md` written by OpenCode to Hermes' inbox.

    Validates the request, then brokers it: writes a `*-handoff.md`
    brief into AGY's inbox. The `-H1` suffix on the task-id keeps
    handoffs distinct from the parent task.

    Hermes-mediated handoff protocol:
        1. OpenCode writes `1.0HERMES/CHAT/Inbox/<task-id> — handoff-request.md`.
        2. This handler reads it, validates, picks a handoff h-id
           (default H1), and writes `4.0AGY/CHAT/Inbox/<task-id>-H1 — handoff.md`.
        3. AGY completes and writes back to Hermes.
        4. Hermes writes `3.0OPENCODE/CHAT/Inbox/<task-id>-H1 — handoff-reply.md`.

    AGY's response pickup is part of `poll_all_inboxes` (step 5/6 are
    outside this handler's scope).
    """
    text = handoff_request_file.read_text(encoding="utf-8")
    fm, body = frontmatter.parse(text)
    task_id = str(fm.get("task_id", "")).strip()
    requester = str(fm.get("from", "")).strip()
    recipient = str(fm.get("recipient", "agy")).strip()
    status = str(fm.get("status", "")).strip()
    if not task_id or not requester:
        return False, f"missing task_id/from in {handoff_request_file.name}"
    if requester not in ("opencode", "agy"):
        return False, f"only opencode/agy may request handoffs (got {requester})"
    if recipient not in ("opencode", "agy"):
        return False, f"recipient must be opencode or agy (got {recipient})"
    if requester == recipient:
        return False, "handoff to self rejected"
    if status and status != "posted":
        return False, f"status={status}; nothing to do"

    # Hermes-mediated means: only ONE other agent is allowed to be the
    # recipient, and that recipient is NOT the requester.
    if recipient != "agy" and recipient != "opencode":
        return False, f"unsupported recipient {recipient}; hermes only brokers agy<->opencode"

    handoff_id = str(fm.get("handoff_id", "H1")).strip() or "H1"
    sibling_task = f"{task_id}-{handoff_id}"

    # Build the brief to the recipient.
    brief = (
        f"---\n"
        f"date: {utc_now_iso()}\n"
        "type: handoff\n"
        "status: pending\n"
        f"task_id: {sibling_task}\n"
        f"parent_task_id: {task_id}\n"
        f"from: hermes\n"
        f"to: {recipient}\n"
        "priority: normal\n"
        f"correlation_id: {handoff_request_file.name}\n"
        "---\n\n"
        f"# Handoff {sibling_task}\n\n"
        f"Brief of the parent task ({task_id}) is summarized below. "
        f"This handoff is brokered by Hermes per system rules "
        f"(no direct {requester}<->{recipient} comms).\n\n"
        "## Parent Task Brief\n\n"
        f"{body.strip()[:4000]}\n\n"
        "## Acceptance Criteria\n\n"
        "1. Recipient completes the requested work and writes "
        f"`{sibling_task} — completion.md` into Hermes' inbox.\n"
        "2. If user-facing, recipient also writes `*-Review.md` to Mavis.\n\n"
        "## Status Updates\n\n"
        "<!-- Hermes / recipient appends ## STATUS @ HH:MM here -->\n"
    )

    out = inbox_dir(vault, recipient) / f"{sibling_task} — handoff.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(brief, encoding="utf-8")

    # Advance the request status.
    new_text = frontmatter.update(text, {"status": "brokered", "handoff_id": handoff_id, "sibling_task_id": sibling_task})
    new_text = _append_status(new_text, "hermes", "brokered", f"wrote {out.name} into {recipient} inbox")
    handoff_request_file.write_text(new_text, encoding="utf-8")

    # Mirror the brokered handoff into the requester's outbox for their own audit log.
    mirror_target = outbox_dir(vault, requester) / f"{sibling_task} — handoff-brokered.md"
    mirror_target.parent.mkdir(parents=True, exist_ok=True)
    mirror_target.write_text(
        f"---\ndate: {utc_now_iso()}\n"
        "type: handoff-brokered\n"
        f"task_id: {sibling_task}\n"
        f"parent_task_id: {task_id}\n"
        f"from: hermes\n"
        f"to: {requester}\n"
        "---\n\n"
        f"# Hermes brokered your handoff request ({task_id})\n\n"
        f"Hermes wrote `{out.name}` into {recipient}'s inbox.\n"
        f"AGY completion (or opencode reply, depending on recipient) will land "
        f"in `{inbox_dir(vault, requester) / f'{sibling_task} — handoff-reply.md'}`.\n",
        encoding="utf-8",
    )

    return True, f"brokered handoff to {recipient}: sibling={sibling_task}"


# ---- handler: handoff-reply (agent -> OpenCode via Hermes) ----

def handle_handoff_reply(
    vault: Path,
    completion_file: Path,
) -> tuple[bool, str]:
    """When AGY completes a handoff, mirror the response into OpenCode's inbox.

    Sibling task-ids (-H1, -H2, ...) don't have their own task card; the
    bookkeeping is against the parent task. We:

      1. Advance the parent task card with a sibling-completion status.
      2. Mark the completion file acknowledged.
      3. Mirror the completion into the parent-task's-agent inbox as a
         `*-handoff-reply.md`.
    """
    text = completion_file.read_text(encoding="utf-8")
    fm, _ = frontmatter.parse(text)
    task_id = str(fm.get("task_id", "")).strip()
    # Sibling task ids look like "<parent>-H1"; detect that.
    match = re.match(r"^(?P<parent>.+)-H\d+$", task_id)
    if not match:
        return False, f"{task_id} is not a sibling task; using standard completion path"
    parent_task_id = match.group("parent")

    # Advance the parent task card (NOT a sibling card; siblings have no card).
    tc = task_card_path(vault, parent_task_id)
    if tc.exists():
        advance_status(tc, "handoff-received", "Hermes", f"sibling {task_id} completed; ready to relay to originating agent")
    else:
        _orphan_completion(vault, completion_file, task_id)
        return False, f"orphan handoff completion; parent card {parent_task_id} missing"

    # Mark the inbox file acknowledged.
    new_text = frontmatter.update(text, {"status": "acknowledged"})
    new_text = _append_status(new_text, "hermes", "acknowledged", f"Hermes relayed sibling {task_id} to originating agent")
    completion_file.write_text(new_text, encoding="utf-8")

    # Determine who to mirror back to. Look at the parent task card.
    parent_card = task_card_path(vault, parent_task_id)
    if not parent_card.exists():
        return True, f"sibling {task_id} acknowledged; parent card missing; reply not relayed"
    parent_fm = load_task_card(vault, parent_task_id)
    parent_agent = str(parent_fm.get("agent", parent_fm.get("initial_agent", ""))).strip().lower()
    if not parent_agent or parent_agent not in AGENT_DIRS:
        return True, f"sibling {task_id} acknowledged; parent agent unknown; reply not relayed"

    # Mirror the completion to the parent's agent inbox.
    src = completion_file.read_text(encoding="utf-8")
    target = inbox_dir(vault, parent_agent) / f"{task_id} — handoff-reply.md"
    target.parent.mkdir(parents=True, exist_ok=True)
    fm_block = (
        "---\n"
        f"date: {utc_now_iso()}\n"
        "type: handoff-reply\n"
        "status: posted\n"
        f"task_id: {task_id}\n"
        f"parent_task_id: {parent_task_id}\n"
        "from: hermes\n"
        f"to: {parent_agent}\n"
        "priority: normal\n"
        f"correlation_id: {task_id}\n"
        "---\n\n"
        f"# Handoff reply for {parent_task_id}\n\n"
        "The dependency you requested via Hermes has completed.\n\n"
        "## Reply Body\n\n"
        f"{src}\n"
    )
    target.write_text(fm_block, encoding="utf-8")

    return True, f"sibling {task_id} acknowledged; relayed to {parent_agent}"


# ---- top-level scan ----

@dataclass
class InboxScanResult:
    handled: list[tuple[str, str]]  # (kind, summary)
    skipped: list[tuple[str, str]]  # (kind, summary)

    def __str__(self) -> str:
        lines = ["InboxScanResult"]
        for k, s in self.handled:
            lines.append(f"  handled: {k}: {s}")
        for k, s in self.skipped:
            lines.append(f"  skipped: {k}: {s}")
        return "\n".join(lines)


def poll_all_inboxes(
    vault: Path,
    *,
    runner: AgentRunner,
    seen: Optional[set[str]] = None,
    timeout_s: int = 300,
) -> InboxScanResult:
    """Scan every agent's Inbox/ for actionable inter-agent messages.

    Order:
      1. Hermes' Inbox — completions, handoff-requests, handoff-replies.
      2. AGY's Inbox — handoff-replies (rarely; AGY's main inbox is briefs).
      3. OpenCode's Inbox — handoff-replies and revisions.
      4. Mavis' Inbox — review submissions (self-submits from agents).

    The `seen` set tracks (path, mtime) pairs to allow idempotent re-runs.
    """
    seen = seen if seen is not None else set()
    result = InboxScanResult(handled=[], skipped=[])

    # Hermes' Inbox: completions + handoff-requests (NOT verdicts; orchestrator handles those).
    for path in find_inbox_files(vault, "hermes"):
        _, kind = parse_filename(path.name)
        if kind is None:
            continue
        sig = (str(path), path.stat().st_mtime)
        if sig in seen:
            continue
        seen.add(sig)
        if kind == "completion":
            ok, summary = handle_completion(vault, path)
            (result.handled if ok else result.skipped).append(("completion", summary))
        elif kind == "handoff-request":
            ok, summary = handle_handoff(vault, path)
            (result.handled if ok else result.skipped).append(("handoff-request", summary))
        elif kind == "handoff-reply":
            # Re-delivered by another agent; treat as a completion for the parent task.
            ok, summary = handle_handoff_reply(vault, path)
            (result.handled if ok else result.skipped).append(("handoff-reply", summary))

    # AGY's Inbox: handoff briefs (-> spawn AGY if not yet completed).
    # We don't spawn AGY here; the daemon's main loop also watches AGY's
    # inbox for handoffs. The watcher emits a STATUS update to acknowledge.
    for path in find_inbox_files(vault, "agy"):
        _, kind = parse_filename(path.name)
        if kind is None or kind != "handoff":
            continue
        sig = (str(path), path.stat().st_mtime)
        if sig in seen:
            continue
        seen.add(sig)
        # mark acknowledged
        text = path.read_text(encoding="utf-8")
        new_text = frontmatter.update(text, {"status": "acknowledged"})
        new_text = _append_status(new_text, "hermes", "acknowledged", "Hermes acknowledged handoff in AGY inbox")
        path.write_text(new_text, encoding="utf-8")
        result.handled.append(("handoff-agy", f"acknowledged {path.name}"))

    # OpenCode's Inbox: handoff replies + revisions.
    for path in find_inbox_files(vault, "opencode"):
        _, kind = parse_filename(path.name)
        if kind is None:
            continue
        sig = (str(path), path.stat().st_mtime)
        if sig in seen:
            continue
        seen.add(sig)
        if kind in ("handoff-reply", "revisions"):
            # revisions are written by Mavis; treat as a status update, no spawning.
            text = path.read_text(encoding="utf-8")
            status = str(frontmatter.parse(text)[0].get("status", "")).strip()
            if status == "posted":
                new_text = frontmatter.update(text, {"status": "acknowledged"})
                new_text = _append_status(new_text, "hermes", "acknowledged", f"Hermes acknowledged {kind} in OpenCode inbox")
                path.write_text(new_text, encoding="utf-8")
                result.handled.append((f"opencode-{kind}", f"acknowledged {path.name}"))
            else:
                result.skipped.append((f"opencode-{kind}", f"status={status}"))

    # Mavis' Inbox: review submissions (delegated to the agent).
    for path in find_inbox_files(vault, "mavis"):
        _, kind = parse_filename(path.name)
        if kind is None or kind != "Review":
            continue
        sig = (str(path), path.stat().st_mtime)
        if sig in seen:
            continue
        seen.add(sig)
        ok, summary = handle_self_submission(vault, path, runner=runner, timeout_s=timeout_s)
        (result.handled if ok else result.skipped).append(("self-submission", summary))

    return result



# ---------------------------------------------------------------------------
# Role-keyed overlay (5-role topology; added 2026-07-03 migration)
# ---------------------------------------------------------------------------

from typing import Optional
from datetime import datetime
from pathlib import Path

# Optional import so this module loads even without the Registry dep
try:
    from .config import Registry as _Registry
except ImportError:
    _Registry = None


VALID_ROLES = ("coordinator", "coder", "researcher", "tools", "memory")


class InterAgentHandler:
    """Role-keyed inbox/outbox handler using the Registry.

    Additive; does not change the legacy `AGENT_DIRS` /
    `handle_completion` / `handle_handoff` surface above.
    """

    def __init__(self, registry):
        if _Registry is not None and not isinstance(registry, _Registry):
            # accept duck-typed registry for tests
            pass
        self.registry = registry

    def dispatch(self, from_role: str, to_role: str, brief: str, workdir=None) -> Path:
        from_r = self.registry.get_role(from_role)
        to_r = self.registry.get_role(to_role)
        if workdir is None:
            workdir = self.registry.vault_root
        inbox_dir_p = workdir / to_r.inbox
        inbox_dir_p.mkdir(parents=True, exist_ok=True)
        ts = datetime.now().strftime("%Y-%m-%d-%H%M")
        slug = brief.lower().replace(" ", "-")[:40]
        target = inbox_dir_p / f"{ts} -- {slug}.md"
        target.write_text(
            f"---\nbrief_id: B-{ts.replace('-', '')}\n"
            f"from_role: {from_role}\n"
            f"to_role: {to_role}\n"
            f"created: {datetime.now().isoformat()}\n"
            f"status: pending\n---\n\n"
            f"# Brief: {brief}\n\n"
            f"Auto-dispatched from `{from_r.folder}` -> `{to_r.folder}`.\n",
            encoding="utf-8",
        )
        return target

    def complete(self, from_role: str, brief_id: str, result: str, workdir=None) -> Path:
        from_r = self.registry.get_role(from_role)
        if workdir is None:
            workdir = self.registry.vault_root
        outbox_dir_p = workdir / from_r.outbox
        outbox_dir_p.mkdir(parents=True, exist_ok=True)
        ts = datetime.now().strftime("%Y-%m-%d-%H%M")
        target = outbox_dir_p / f"{ts} -- completion.md"
        target.write_text(
            f"---\ncompletion_id: C-{ts.replace('-', '')}\n"
            f"brief_id: {brief_id}\n"
            f"from_role: {from_role}\n"
            f"completed: {datetime.now().isoformat()}\n"
            f"status: done\n"
            f"exit_code: 0\n---\n\n"
            f"# Completion: {brief_id}\n\n{result}\n",
            encoding="utf-8",
        )
        return target
