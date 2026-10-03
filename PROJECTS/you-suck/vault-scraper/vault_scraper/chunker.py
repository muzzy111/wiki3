"""
Size-aware chunking for inbox drops.

The backend has a 500 KB hard cap. We chunk at 490 KB to leave 10 KB headroom
for frontmatter. Splits happen at paragraph boundaries (double newline) and
NEVER mid-sentence.
"""
from __future__ import annotations

import logging
from dataclasses import dataclass
from typing import List

logger = logging.getLogger(__name__)


@dataclass
class Chunk:
    text: str
    index: int  # 1-based
    total: int  # total chunk count


def chunk_text(body: str, *, max_bytes: int = 490_000) -> List[Chunk]:
    """
    Split `body` into chunks of <= max_bytes UTF-8 bytes. Splits at
    paragraph boundaries (\\n\\n). Returns a single-element list if the body
    fits in one chunk.
    """
    encoded = body.encode("utf-8")
    if len(encoded) <= max_bytes:
        return [Chunk(text=body, index=1, total=1)]

    # First pass: split into paragraphs (preserving order).
    paragraphs = _split_paragraphs(body)
    if not paragraphs:
        # Body is one huge line — split on single newlines as a fallback.
        paragraphs = body.split("\n")

    chunks_text: List[str] = []
    current = ""

    for para in paragraphs:
        candidate = (current + "\n\n" + para) if current else para
        if len(candidate.encode("utf-8")) <= max_bytes:
            current = candidate
            continue
        # current is full, candidate doesn't fit.
        if current:
            chunks_text.append(current)
            current = ""
        # If even a single paragraph exceeds max_bytes, split it on sentences.
        if len(para.encode("utf-8")) > max_bytes:
            for piece in _split_long_paragraph(para, max_bytes):
                chunks_text.append(piece)
        else:
            current = para

    if current:
        chunks_text.append(current)

    if not chunks_text:
        # Empty body — single empty chunk.
        chunks_text = [""]

    total = len(chunks_text)
    return [Chunk(text=c, index=i + 1, total=total) for i, c in enumerate(chunks_text)]


def _split_paragraphs(body: str) -> List[str]:
    """Split on double newline, preserving paragraph order."""
    if not body:
        return []
    # Normalize CRLF -> LF for the split.
    normalized = body.replace("\r\n", "\n")
    # Filter empty strings only at the ends; preserve inner blank-line gaps
    # as separators.
    parts = normalized.split("\n\n")
    return [p for p in parts]


def _split_long_paragraph(para: str, max_bytes: int) -> List[str]:
    """Split an oversized paragraph on sentence boundaries (. ! ? followed by
    space) without going mid-sentence."""
    if len(para.encode("utf-8")) <= max_bytes:
        return [para]

    pieces: List[str] = []
    # Sentence delimiters we recognize: . ! ? followed by space or end-of-string.
    import re
    sentence_re = re.compile(r"(?<=[.!?])\s+")
    sentences = sentence_re.split(para)
    if len(sentences) == 1:
        # No sentence boundaries found — split on whitespace (last resort).
        sentences = para.split(" ")

    current = ""
    for sent in sentences:
        sep = " " if current else ""
        candidate = current + sep + sent
        if len(candidate.encode("utf-8")) <= max_bytes:
            current = candidate
        else:
            if current:
                pieces.append(current)
            # If a single sentence is still over the limit, hard-split on whitespace.
            if len(sent.encode("utf-8")) > max_bytes:
                pieces.extend(_hard_split(sent, max_bytes))
                current = ""
            else:
                current = sent

    if current:
        pieces.append(current)
    return pieces


def _hard_split(text: str, max_bytes: int) -> List[str]:
    """Hard-split a string on whitespace tokens so each piece is <= max_bytes."""
    pieces: List[str] = []
    current = ""
    for token in text.split(" "):
        sep = " " if current else ""
        candidate = current + sep + token
        if len(candidate.encode("utf-8")) <= max_bytes:
            current = candidate
        else:
            if current:
                pieces.append(current)
            # Single token too long — byte-split (last resort, breaks word).
            if len(token.encode("utf-8")) > max_bytes:
                pieces.extend(_byte_split(token, max_bytes))
                current = ""
            else:
                current = token
    if current:
        pieces.append(current)
    return pieces


def _byte_split(text: str, max_bytes: int) -> List[str]:
    """Last-resort split that may break a single token at byte boundaries."""
    encoded = text.encode("utf-8")
    pieces: List[str] = []
    for i in range(0, len(encoded), max_bytes):
        chunk_bytes = encoded[i:i + max_bytes]
        pieces.append(chunk_bytes.decode("utf-8", errors="ignore"))
    return pieces