"""
Vault index and wiki-link injection.

The vault is the set of *.md files already produced in /data/notes/. We build a
small in-memory index of note titles so we can detect when an extracted concept
matches an existing note, and inject a [[wikilink]] in the new note's body.

Two link sources combine in the final note:
  1. Links the LLM already wrote inline in the markdown body.
  2. Auto-injected links derived from the concepts list and the vault index.
"""
from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

WIKILINK_RE = re.compile(r"\[\[([^\[\]\|\n]+?)\]\]")
HEADING_RE = re.compile(r"^#{1,6}\s+(.+?)\s*$", re.MULTILINE)
FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.DOTALL)


def extract_existing_wikilinks(text: str) -> set[str]:
    """Return the set of wiki-link targets already present in a markdown body."""
    return {m.group(1).strip() for m in WIKILINK_RE.finditer(text) if m.group(1).strip()}


def slug_to_title(stem: str) -> str:
    """Turn a filename stem into a human title.

    'rfc-7519-json-web-token' -> 'Rfc 7519 Json Web Token'
    """
    cleaned = stem.replace("_", " ").replace("-", " ").strip()
    if not cleaned:
        return stem
    return " ".join(part.capitalize() for part in cleaned.split())


@dataclass(frozen=True)
class VaultIndex:
    """A lightweight, periodically-refreshed index of the notes vault."""

    titles_by_key: dict[str, str]   # lowercase canonical key -> note title
    titles_list: list[str]          # sorted list of titles (for substring matching)

    @classmethod
    def build(cls, notes_dir: Path) -> "VaultIndex":
        titles_by_key: dict[str, str] = {}
        titles_list: list[str] = []
        if notes_dir.exists():
            for path in notes_dir.glob("*.md"):
                title = path.stem
                titles_by_key[title.lower()] = title
                titles_list.append(title)
        titles_list.sort(key=len, reverse=True)  # longest first — match greedily
        return cls(titles_by_key=titles_by_key, titles_list=titles_list)

    def find_matches(self, concept: str) -> str | None:
        """Return a vault note title that matches the concept (case-insensitive),
        preferring an exact title match over a substring match."""
        if not concept:
            return None
        key = concept.strip().lower()
        if key in self.titles_by_key:
            return self.titles_by_key[key]
        for title in self.titles_list:
            if title.lower() in key or key in title.lower():
                return title
        return None


def inject_links_into_body(
    body: str,
    concepts: list[str],
    vault: VaultIndex,
    *,
    max_new_links: int = 8,
) -> str:
    """For each extracted concept, attempt to add a [[wikilink]] to an existing
    vault note. Returns the (possibly modified) markdown body.

    Links are injected once on the line immediately after the frontmatter block
    in a 'Related' section, so we don't sprinkle wiki-links throughout prose.
    """
    if vault.titles_list is None or not concepts:
        return body

    existing = extract_existing_wikilinks(body)
    new_links: list[str] = []
    seen: set[str] = set()

    for concept in concepts:
        if len(concept.strip()) < 3:
            continue
        match = vault.find_matches(concept)
        if not match:
            continue
        if match in existing or match in seen:
            continue
        new_links.append(match)
        seen.add(match)
        if len(new_links) >= max_new_links:
            break

    if not new_links:
        return body

    related_section = "\n## Related\n\n" + "\n".join(f"- [[{title}]]" for title in new_links) + "\n"
    # Insert *before* the first H1/H2 if present, else append at end.
    if FRONTMATTER_RE.match(body):
        body = FRONTMATTER_RE.sub(lambda m: m.group(0) + related_section + "\n", body, count=1)
    else:
        # No frontmatter — drop it at the top under a heading.
        body = related_section + "\n" + body

    return body