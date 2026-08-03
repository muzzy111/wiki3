"""Tests for hermes_bus.frontmatter (minimal YAML subset)."""

from hermes_bus import frontmatter


def test_parse_simple():
    text = "---\ntitle: Hello\ntags: [a, b]\n---\nbody\n"
    fm, body = frontmatter.parse(text)
    assert fm["title"] == "Hello"
    assert fm["tags"] == ["a", "b"]
    assert body.strip() == "body"


def test_parse_quoted_value():
    text = '---\ntitle: "Quoted: value"\n---\n'
    fm, body = frontmatter.parse(text)
    assert fm["title"] == "Quoted: value"


def test_parse_block_bool_int():
    text = "---\nflag: true\nn: 42\n---\n"
    fm, _ = frontmatter.parse(text)
    assert fm["flag"] is True
    assert fm["n"] == 42


def test_parse_with_nested_dict():
    text = "---\ndeliverable_paths:\n  - one\n  - two\npriority: high\n---\n"
    fm, _ = frontmatter.parse(text)
    assert fm["deliverable_paths"] == ["one", "two"]
    assert fm["priority"] == "high"


def test_update_appends_keys():
    text = "---\ntitle: a\n---\nbody"
    new_text = frontmatter.update(text, {"status": "processing", "tags": ["x"]})
    fm, _ = frontmatter.parse(new_text)
    assert fm["title"] == "a"
    assert fm["status"] == "processing"
    assert fm["tags"] == ["x"]
    assert "body" in new_text


def test_no_frontmatter_returns_empty():
    text = "just a body\n"
    fm, body = frontmatter.parse(text)
    assert fm == {}
    assert body == text


def test_unterminated_frontmatter_returns_empty():
    text = "---\ntitle: x\nbody\n"
    fm, body = frontmatter.parse(text)
    assert fm == {}
    assert body == text
