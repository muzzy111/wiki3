"""Minimal frontmatter parser/serializer. YAML is overkill for LOOP notes.

Supports:
    key: value
    key: "quoted value"
    key:
      - item
      - item
    key:
        sub-key: value
        other: value
    tags: [a, b, c]   # inline list

Limited intentionally. If a note grows past these patterns, Mavis should
promote it to a Dataview field or a richer schema.
"""

from __future__ import annotations

from typing import Any
import re


_FENCE = re.compile(r"^---\s*$", re.MULTILINE)


def parse(text: str) -> tuple[dict[str, Any], str]:
    """Return (frontmatter_dict, body_without_frontmatter)."""
    if not text.startswith("---"):
        return {}, text
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return {}, text
    fm_text = "\n".join(lines[1:end])
    body = "\n".join(lines[end + 1 :])
    return _parse_block(fm_text), body


def _parse_block(block: str) -> dict[str, Any]:
    lines = [ln for ln in block.splitlines() if not _is_blank_comment(ln)]
    root: dict[str, Any] = {}
    stack: list[tuple[int, Any]] = [(-1, root)]

    def parse_scalar(s: str) -> Any:
        s = s.strip()
        if not s:
            return ""
        if (s.startswith('"') and s.endswith('"')) or (
            s.startswith("'") and s.endswith("'")
        ):
            return s[1:-1]
        if s in ("true", "True"):
            return True
        if s in ("false", "False"):
            return False
        if s in ("null", "None", "~"):
            return None
        if re.fullmatch(r"-?\d+", s):
            return int(s)
        if re.fullmatch(r"-?\d+\.\d+", s):
            return float(s)
        # inline list: [a, b, c]
        if s.startswith("[") and s.endswith("]"):
            inner = s[1:-1].strip()
            if not inner:
                return []
            return [parse_scalar(part) for part in _split_top_level_commas(inner)]
        return s

    i = 0
    while i < len(lines):
        line = lines[i]
        indent = len(line) - len(line.lstrip())
        content = line.strip()

        # pop stack to current indent
        while stack and stack[-1][0] >= indent:
            stack.pop()

        if content.endswith(":"):
            key = content[:-1].strip()
            # peek next non-blank line
            j = i + 1
            while j < len(lines) and _is_blank_comment(lines[j]):
                j += 1
            parent = stack[-1][1]
            if j < len(lines):
                next_indent = len(lines[j]) - len(lines[j].lstrip())
                next_content = lines[j].strip()
            else:
                next_indent = indent
                next_content = ""

            if isinstance(parent, list):
                # parent list contains this dict as its body — make it a dict
                d: dict[str, Any] = {}
                parent.append(d)
                stack.append((indent, d))
                stack.append((indent, d))
            else:
                if j < len(lines) and next_indent > indent and next_content.startswith("- "):
                    new_list: list[Any] = []
                    parent[key] = new_list
                    stack.append((indent, new_list))
                elif j < len(lines) and next_indent > indent:
                    new_dict: dict[str, Any] = {}
                    parent[key] = new_dict
                    stack.append((indent, new_dict))
                else:
                    parent[key] = None
            i += 1
            continue

        # list item
        if content.startswith("- "):
            item_text = content[2:]
            parent = stack[-1][1]
            if not isinstance(parent, list):
                # shouldn't happen given parsing order, but treat as adding to a synthetic list
                pass
            # if next line is a nested dict under same/dash indent, handle as sub-dict
            j = i + 1
            while j < len(lines) and _is_blank_comment(lines[j]):
                j += 1
            if (
                j < len(lines)
                and not lines[j].strip().startswith("- ")
                and ":" in lines[j]
            ):
                # could be sub-dict under the list element
                next_indent = len(lines[j]) - len(lines[j].lstrip())
                if next_indent > indent:
                    # sub-dict
                    sub: dict[str, Any] = {}
                    parent.append(sub)
                    stack.append((indent + 2, sub))
                    i += 1
                    continue
            parent.append(parse_scalar(item_text))
            i += 1
            continue

        # inline scalar key: value
        if ":" in content:
            key, _, val = content.partition(":")
            key = key.strip()
            val = val.strip()
            parent = stack[-1][1]
            if isinstance(parent, dict):
                parent[key] = parse_scalar(val)
            i += 1
            continue

        i += 1

    return root


def _is_blank_comment(line: str) -> bool:
    s = line.strip()
    return not s or s.startswith("#")


def _split_top_level_commas(s: str) -> list[str]:
    out: list[str] = []
    depth = 0
    cur = []
    for ch in s:
        if ch in "[(":
            depth += 1
        elif ch in "])":
            depth -= 1
        if ch == "," and depth == 0:
            out.append("".join(cur))
            cur = []
            continue
        cur.append(ch)
    if cur:
        out.append("".join(cur))
    return out


def update(text: str, updates: dict[str, Any]) -> str:
    """Parse frontmatter, apply updates, return full text. New keys appended."""
    if not text.startswith("---"):
        return "---" + "\n" + _serialize(updates).split("---\n", 1)[1] + text
    fm, body = parse(text)
    fm.update(updates)
    return _serialize(fm) + "\n" + body.lstrip("\n")


def _serialize(fm: dict[str, Any]) -> str:
    out = ["---"]
    for k, v in fm.items():
        _emit(out, k, v, 0)
    out.append("---")
    return "\n".join(out)


def _emit(out: list[str], key: str, value: Any, indent: int) -> None:
    pad = " " * indent
    if isinstance(value, dict):
        out.append(f"{pad}{key}:")
        for k, v in value.items():
            _emit(out, k, v, indent + 2)
        return
    if isinstance(value, list):
        if not value:
            out.append(f"{pad}{key}: []")
            return
        out.append(f"{pad}{key}:")
        for item in value:
            if isinstance(item, dict):
                first = True
                sub_keys = list(item.keys())
                for k, v in item.items():
                    prefix = f"{pad}  - " if first else f"{pad}    "
                    first = False
                    out.append(f"{prefix}{k}: {_render_inline(v)}")
                _ = sub_keys
            else:
                out.append(f"{pad}  - {_render_inline(item)}")
        return
    out.append(f"{pad}{key}: {_render_inline(value)}")


def _render_inline(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    s = str(value)
    if s == "":
        return '""'
    if any(c in s for c in [":", "#", '"', "'"]) or s.startswith("-") or s.startswith("["):
        return f'"{s}"'
    return s


# Re-export parse, update, parse_block for backward compatibility
parse_block = _parse_block
