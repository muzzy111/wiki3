"""
HTML → clean text extraction.

Pipeline:
  1. trafilatura with favor_recall=True, include_comments=False
  2. If None or result < 200 chars: BeautifulSoup fallback (get_text with
     newline separator, stripped)
"""
from __future__ import annotations

import logging
from typing import Optional

from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)


def extract_text(html: str) -> str:
    """
    Extract readable text from raw HTML.

    Returns a non-empty string. Tries trafilatura first, falls back to
    BeautifulSoup if trafilatura returns nothing useful (< 200 chars).
    """
    if not html:
        return ""

    text = _try_trafilatura(html)
    if text and len(text.strip()) >= 200:
        return _clean_text(text)

    fallback = _try_beautifulsoup(html)
    if len(fallback.strip()) >= len(text.strip()):
        text = fallback

    return _clean_text(text)


def _try_trafilatura(html: str) -> str:
    try:
        import trafilatura
        result: Optional[str] = trafilatura.extract(
            html,
            favor_recall=True,
            include_comments=False,
            include_tables=False,
            no_fallback=False,
        )
        return result or ""
    except Exception as exc:
        logger.debug("trafilatura raised: %s", exc)
        return ""


def _try_beautifulsoup(html: str) -> str:
    try:
        soup = BeautifulSoup(html, "lxml")
        # Drop script/style/nav/etc. before extracting text.
        for tag in soup(["script", "style", "noscript", "iframe"]):
            tag.decompose()
        return soup.get_text(separator="\n", strip=True)
    except Exception as exc:
        logger.debug("BeautifulSoup raised: %s", exc)
        # Last-ditch fallback: plain html.parser
        try:
            soup = BeautifulSoup(html, "html.parser")
            for tag in soup(["script", "style", "noscript", "iframe"]):
                tag.decompose()
            return soup.get_text(separator="\n", strip=True)
        except Exception:
            return ""


def _clean_text(text: str) -> str:
    """Strip null bytes, surrogate characters, and non-printable control chars
    (except \\n and \\t). Normalize line endings."""
    if not text:
        return ""

    cleaned_chars = []
    for ch in text:
        code = ord(ch)
        if ch in ("\n", "\t"):
            cleaned_chars.append(ch)
        elif code == 0:               # null byte
            continue
        elif 0xD800 <= code <= 0xDFFF:  # surrogate (shouldn't appear in Python str but defensive)
            continue
        elif code < 0x20 and ch not in ("\n", "\t"):  # other C0 control chars
            continue
        elif code == 0x7F:             # DEL
            continue
        else:
            cleaned_chars.append(ch)
    return "".join(cleaned_chars)