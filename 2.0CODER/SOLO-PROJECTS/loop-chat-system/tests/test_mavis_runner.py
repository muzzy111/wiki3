"""Tests for hermes_bus.mavis_runner (verdict parsing)."""

from hermes_bus import mavis_runner


def test_parse_structured_json():
    text = """\
Some preamble.

```json
{
  "verdict": "approved",
  "findings": ["Looks good"],
  "suggestions": ["Add a type hint"],
  "questions": ["Any tests?"],
  "notes": "no blockers"
}
```

Trailing prose.
"""
    v = mavis_runner.MavisRunner(runner=None).parse_verdict(text, raw=text)
    assert v.verdict == "approved"
    assert v.findings == ["Looks good"]
    assert v.suggestions == ["Add a type hint"]
    assert v.questions == ["Any tests?"]
    assert v.notes == "no blockers"


def test_parse_unknown_verdict_falls_back_to_approved_with_notes():
    text = "```json\n{\"verdict\": \"sure-why-not\"}\n```"
    v = mavis_runner.MavisRunner(runner=None).parse_verdict(text)
    assert v.verdict == "approved-with-notes"


def test_parse_bare_text_verdict_word():
    text = "After reading the deliverable I find this changes required."
    v = mavis_runner.MavisRunner(runner=None).parse_verdict(text)
    assert v.verdict == "changes-required"


def test_parse_total_mess_returns_safe_default():
    v = mavis_runner.MavisRunner(runner=None).parse_verdict("just rambling prose")
    assert v.verdict == "approved-with-notes"
    assert "unparsed" in v.notes.lower()


def test_verdict_to_markdown_contains_sections():
    v = mavis_runner.Verdict(
        verdict="approved-with-notes",
        findings=["f1", "f2"],
        suggestions=["s1"],
        questions=["q1"],
        notes="",
        raw="raw",
    )
    md = mavis_runner.verdict_to_markdown(v)
    assert "approved-with-notes" in md
    assert "### Findings" in md
    assert "f1" in md
    assert "### Suggestions" in md
    assert "### Questions" in md
