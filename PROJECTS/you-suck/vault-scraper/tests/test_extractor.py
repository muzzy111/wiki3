"""Tests for the extractor — trafilatura + bs4 fallback chain."""
from __future__ import annotations

from unittest.mock import patch

from vault_scraper.extractor import extract_text


HTML_WITH_ARTICLE = """
<html>
<head><title>Test Page</title></head>
<body>
<nav>Navigation noise</nav>
<article>
<h1>Real Content</h1>
<p>This is the first paragraph of a real article. It contains enough text to be
useful and meaningful. The text continues here with more detail.</p>
<p>This is the second paragraph. It also has substantive content that the
extractor should preserve without losing important information.</p>
</article>
<footer>Footer noise</footer>
<script>alert('nope')</script>
</body>
</html>
"""


HTML_SMALL_TRAFILATURA_FAILS = """
<html><body><p>Tiny.</p></body></html>
"""


def test_extract_text_returns_substantive_text_from_real_html():
    text = extract_text(HTML_WITH_ARTICLE)
    assert isinstance(text, str)
    assert len(text.strip()) > 100
    # Either trafilatura or bs4 — both should mention the article content.
    assert "paragraph" in text.lower() or "article" in text.lower() or "real content" in text.lower()


def test_extract_text_falls_back_to_bs4_when_trafilatura_returns_none():
    with patch("trafilatura.extract", return_value=None) as mock_extract:
        text = extract_text(HTML_WITH_ARTICLE)
    # Mocked trafilatura returned None; bs4 should still produce non-empty text.
    assert mock_extract.called
    assert len(text.strip()) > 0
    # Verify bs4 actually ran (or at least contributed) — content words present.
    assert "navigation" in text.lower() or "footer" in text.lower() or "real content" in text.lower()


def test_extract_text_falls_back_when_trafilatura_returns_short_string():
    with patch("trafilatura.extract", return_value="too short"):
        text = extract_text(HTML_WITH_ARTICLE)
    # Result must exceed the 200-char trafilatura floor — so bs4 ran.
    assert len(text.strip()) > 200


def test_extract_text_strips_control_characters():
    html = "<html><body><p>Hello\x00world\x07\x08this\x0b is\x1b fine.</p></body></html>"
    text = extract_text(html)
    # No nulls, no other C0 control chars (except \n, \t).
    for ch in text:
        code = ord(ch)
        if ch in ("\n", "\t"):
            continue
        assert code >= 0x20, f"control char {code:#x} survived"


def test_extract_text_empty_html_returns_empty_string():
    assert extract_text("") == ""


def test_extract_text_handles_unicode():
    html = "<html><body><p>Naïve résumé café — über schön.</p></body></html>"
    text = extract_text(html)
    assert "Naïve" in text or "Naive" in text  # lxml may normalize
    assert "résumé" in text or "resume" in text