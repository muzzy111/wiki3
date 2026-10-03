"""
The agentic synthesis engine.

Responsibilities:
  1. Read raw text from an inbox file.
  2. Send it to OpenRouter with a strict system prompt and JSON response format.
  3. Parse the LLM's structured response into a typed `SynthesisResult`.
  4. Inject vault wiki-links for any extracted concepts that match existing notes.
  5. Hand the resulting markdown to vault.atomic_write() so Obsidian never
     observes a half-written note.
"""
from __future__ import annotations

import json
import logging
import re
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import httpx

from .config import Settings
from .linking import VaultIndex, inject_links_into_body
from .vault import atomic_write, build_frontmatter, safe_filename, utc_now_iso

logger = logging.getLogger(__name__)


SYSTEM_PROMPT = """You are an expert knowledge-management analyst working inside an Obsidian vault.

Your job: read a raw, unstructured piece of text (a note, transcript, article, log, or
rambling inbox dump) and produce a HIGHLY STRUCTURED atomic note that an Obsidian user
can drop directly into their vault.

Rules you MUST follow:
1. Output ONLY valid JSON matching the schema described below. No prose, no markdown fences.
2. Title must be a short, descriptive noun phrase (3-9 words). Not the input filename.
3. Tags are lowercase, hyphenated, no '#' prefix. 3-8 tags.
4. Concepts are reusable atomic ideas (people, tools, theories, places, methods). 5-12 items.
5. Action items use checkbox markdown: '- [ ] ...'. Only include real, concrete tasks.
6. The body is clean Markdown with these sections in this order:
     ## Summary
     ## Key Points
     ## Action Items
     ## References
   Summary: 2-4 sentences. Key Points: 3-7 bullets. References: 1-5 items.
7. Whenever you mention a concept inside the body, wrap it in [[double brackets]] so it
   becomes an Obsidian wiki-link. Do not bracket every word — bracket only meaningful concepts.
8. Never invent facts. If something is missing, omit the field or write 'Not specified'.
9. The 'source_file' field MUST be exactly the value of the user-provided source filename.

JSON schema:
{
  "title": string,
  "tags": string[],
  "concepts": string[],
  "action_items": string[],
  "body": string
}
"""


USER_PROMPT_TEMPLATE = """Source filename: {source_name}

--- BEGIN RAW INBOX CONTENT ---
{raw_text}
--- END RAW INBOX CONTENT ---

Return only the JSON object described in the system prompt.
"""


@dataclass
class SynthesisResult:
    title: str
    tags: list[str] = field(default_factory=list)
    concepts: list[str] = field(default_factory=list)
    action_items: list[str] = field(default_factory=list)
    body: str = ""
    source_file: str = ""
    note_path: Path | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "title": self.title,
            "tags": self.tags,
            "concepts": self.concepts,
            "action_items": self.action_items,
            "body": self.body,
            "source_file": self.source_file,
        }


class SynthesizerError(Exception):
    """Raised when synthesis fails for any reason (network, parse, schema)."""


class Synthesizer:
    """Stateless, thread-safe synthesizer. Reuse one instance across the app."""

    def __init__(self, settings: Settings, *, vault_index: VaultIndex | None = None) -> None:
        self.settings = settings
        self.vault_index = vault_index or VaultIndex.build(settings.notes_dir)
        self._client = httpx.Client(
            base_url=settings.openrouter_base_url,
            timeout=settings.request_timeout,
            headers={
                "Authorization": f"Bearer {settings.openrouter_api_key}",
                "HTTP-Referer": settings.openrouter_site_url,
                "X-Title": settings.openrouter_app_name,
                "Content-Type": "application/json",
            },
        )

    def close(self) -> None:
        self._client.close()

    def __enter__(self) -> "Synthesizer":
        return self

    def __exit__(self, *_exc: object) -> None:
        self.close()

    # ── Public API ───────────────────────────────────────────────────────────

    def synthesize_file(self, inbox_path: Path) -> SynthesisResult:
        """End-to-end: read → LLM → link → write. Returns the saved result."""
        try:
            raw_text = inbox_path.read_text(encoding="utf-8", errors="replace")
        except OSError as exc:
            raise SynthesizerError(f"cannot read {inbox_path}: {exc}") from exc

        if not raw_text.strip():
            raise SynthesizerError(f"{inbox_path} is empty")

        # Truncate absurdly long inputs to fit context, with a clear marker.
        truncated = False
        if len(raw_text) > 80_000:
            logger.warning("Truncating %s from %d chars to 80000", inbox_path, len(raw_text))
            raw_text = raw_text[:80_000] + "\n\n[…truncated…]"
            truncated = True

        raw_data = self._call_llm(raw_text, source_name=inbox_path.name)
        result = self._build_result(raw_data, source_file=inbox_path.name)

        if self.settings.inject_vault_links:
            result.body = inject_links_into_body(
                result.body,
                result.concepts,
                self.vault_index,
                max_new_links=self.settings.max_injected_links_per_note,
            )

        note_path = self._write_note(result)
        result.note_path = note_path
        return result

    # ── LLM call ─────────────────────────────────────────────────────────────

    def _call_llm(self, raw_text: str, *, source_name: str) -> dict[str, Any]:
        payload = {
            "model": self.settings.openrouter_model,
            "temperature": self.settings.temperature,
            "max_tokens": self.settings.max_tokens,
            "response_format": {"type": "json_object"},
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": USER_PROMPT_TEMPLATE.format(
                    source_name=source_name, raw_text=raw_text,
                )},
            ],
        }

        last_exc: Exception | None = None
        for attempt in range(1, self.settings.max_retries + 1):
            try:
                resp = self._client.post("/chat/completions", json=payload)
                if resp.status_code == 429 or resp.status_code >= 500:
                    raise httpx.HTTPStatusError(
                        f"transient {resp.status_code}", request=resp.request, response=resp,
                    )
                resp.raise_for_status()
                data = resp.json()
                return self._extract_json(data)
            except (httpx.TransportError, httpx.HTTPStatusError, json.JSONDecodeError) as exc:
                last_exc = exc
                sleep_for = min(2 ** attempt, 30)
                logger.warning(
                    "OpenRouter call failed (attempt %d/%d): %s — retrying in %.1fs",
                    attempt, self.settings.max_retries, exc, sleep_for,
                )
                time.sleep(sleep_for)

        raise SynthesizerError(
            f"OpenRouter gave up after {self.settings.max_retries} attempts: {last_exc}"
        )

    @staticmethod
    def _extract_json(payload: dict[str, Any]) -> dict[str, Any]:
        try:
            content = payload["choices"][0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as exc:
            raise SynthesizerError(f"malformed OpenRouter response: {exc}") from exc

        if not isinstance(content, str):
            raise SynthesizerError(f"OpenRouter returned non-string content: {type(content)!r}")

        # Be permissive: some models wrap the JSON in ``` fences despite json_object mode.
        fenced = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", content, re.DOTALL)
        text = fenced.group(1) if fenced else content
        try:
            return json.loads(text)
        except json.JSONDecodeError as exc:
            raise SynthesizerError(f"could not parse JSON from LLM: {exc}\n{text[:500]}") from exc

    # ── Result assembly ──────────────────────────────────────────────────────

    def _build_result(self, data: dict[str, Any], *, source_file: str) -> SynthesisResult:
        title = str(data.get("title") or "").strip()
        if not title:
            title = safe_filename(Path(source_file).stem).replace("-", " ").title()

        tags = [str(t).strip().lower().replace(" ", "-") for t in (data.get("tags") or []) if str(t).strip()]
        concepts = [str(c).strip() for c in (data.get("concepts") or []) if str(c).strip()]
        action_items = [str(a).strip() for a in (data.get("action_items") or []) if str(a).strip()]
        body = str(data.get("body") or "").strip()

        # Normalize action items so every line is a checkbox.
        action_items = [
            line if line.startswith(("- [ ]", "- [x]", "- [X]")) else f"- [ ] {line.lstrip('- ').strip()}"
            for line in action_items
        ]

        return SynthesisResult(
            title=title,
            tags=tags,
            concepts=concepts,
            action_items=action_items,
            body=body,
            source_file=source_file,
        )

    # ── File write ───────────────────────────────────────────────────────────

    def _write_note(self, result: SynthesisResult) -> Path:
        filename = safe_filename(result.title) + ".md"
        note_path = self.settings.notes_dir / filename

        # Disambiguate on collision (don't clobber a previously generated note).
        counter = 2
        while note_path.exists():
            note_path = self.settings.notes_dir / f"{safe_filename(result.title)}-{counter}.md"
            counter += 1

        frontmatter = build_frontmatter({
            "title": result.title,
            "tags": result.tags,
            "concepts": result.concepts,
            "source_file": result.source_file,
            "generated_at": utc_now_iso(),
            "generator": "agentic-knowledge-engine",
            "model": self.settings.openrouter_model,
        })

        body_sections = [result.body]
        if result.action_items:
            body_sections.append("## Action Items\n\n" + "\n".join(result.action_items))
        full_body = "\n\n".join(s for s in body_sections if s).rstrip() + "\n"

        atomic_write(note_path, frontmatter + full_body)
        return note_path