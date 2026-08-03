---
title: Coding Standards
tags: [agent, opencode, rules, coding-standards]
created: 2026-07-01
type: coding-standards
status: active
---

# Coding Standards

> The engineering standards OpenCode follows for every piece of code. Reviewed and enforced by Mavis.

## Universal Rules (All Languages)

1. **Correctness.** The code does what the brief says it does. Edge cases handled. Errors caught and surfaced.
2. **Security.** No hardcoded secrets. No `eval`, `exec`, `pickle.loads`, `yaml.load` without SafeLoader. No shell injection vectors. No path traversal. Dependencies from trusted sources.
3. **Testing.** Non-trivial code includes tests. Trivial code includes a brief justification for not testing.
4. **Documentation.** Every project has a README. Every public function has a docstring or comment explaining intent, inputs, outputs, and error behavior.
5. **Versioning.** Dependencies pinned to exact versions (e.g., `==1.2.3` in pip, exact version in package.json). Lockfiles committed.
6. **Style.** Linter passes. Formatter passes. Conventions match this document.
7. **Frontmatter.** README and key source files have frontmatter where appropriate (e.g., a Templater script's docstring).
8. **Backwards compatibility.** Breaking changes bump the major version and update the CHANGELOG.

## Naming Conventions

- **Files.** Lowercase, hyphen-separated for cross-language consistency (`wikilink-checker.py`, `audit-helper.ts`). Underscores acceptable in Python where conventional (`test_wikilink.py`).
- **Functions.** Verb-noun. `parse_wikilink`, `fetch_drive_file`, `audit_vault`.
- **Variables.** Noun or noun-phrase. `link_target`, `vault_root`, `audit_results`.
- **Constants.** SCREAMING_SNAKE_CASE.
- **Classes.** PascalCase. Singular noun.
- **Modules.** Short, lowercase, no abbreviations unless standard.

## Python

- Python 3.11+ unless the environment restricts it.
- Type hints on all public functions.
- `pyproject.toml` for project config; `requirements.txt` is acceptable for one-off scripts.
- Tests with `pytest`. Tests live in `tests/`. Test files named `test_<module>.py`.
- Linting with `ruff`. Formatting with `ruff format` or `black`.
- No wildcard imports.
- No `from X import *`.
- Use `pathlib.Path` for filesystem paths, not `os.path` strings.
- Use `logging` module, not `print`, for anything beyond quick diagnostics.
- Exceptions: catch specific exceptions, not bare `except`. Never silently swallow.
- Docstrings in Google or NumPy style. Consistent within a project.

### Example

```python
"""Module for scanning the vault for broken wikilinks."""

from pathlib import Path
import re
from dataclasses import dataclass

WIKILINK_PATTERN = re.compile(r"\[\[([^\]\|]+)(?:\|[^\]]+)?\]\]")


@dataclass(frozen=True)
class BrokenLink:
    source: Path
    target: str
    line: int


def scan_vault(vault_root: Path) -> list[BrokenLink]:
    """Scan a vault directory for wikilinks that do not resolve to existing notes.

    Args:
        vault_root: Path to the vault root directory.

    Returns:
        A list of BrokenLink entries, one per unresolved reference.

    Raises:
        ValueError: If vault_root is not a directory.
    """
    if not vault_root.is_dir():
        raise ValueError(f"{vault_root} is not a directory")

    broken: list[BrokenLink] = []
    for md_file in vault_root.rglob("*.md"):
        for lineno, line in enumerate(md_file.read_text(encoding="utf-8").splitlines(), start=1):
            for match in WIKILINK_PATTERN.finditer(line):
                target = match.group(1).strip()
                if not (vault_root / f"{target}.md").exists():
                    broken.append(BrokenLink(source=md_file, target=target, line=lineno))
    return broken
```

## TypeScript / Node

- TypeScript strict mode. No `any` unless justified with comment.
- `package.json` for project config. Lockfile (`package-lock.json` or `pnpm-lock.yaml`) committed.
- Tests with `vitest` or `jest`.
- Linting with `eslint`. Formatting with `prettier`.
- Async code uses `async/await`, not raw promises.
- Errors typed. No `throw "string"`.
- Imports organized: external first, internal second, types last.

## JavaScript (DataviewJS)

- DataviewJS blocks live inside ` ```dataviewjs ` fenced code blocks in notes.
- Use the `dv.*` API. Avoid direct DOM manipulation unless necessary.
- Minimize block size — extract complex logic into a Templater or a script.
- One block per logical view.
- Document inputs in a comment at the top of the block.

### Example

```dataviewjs
// Render a table of recent task cards, grouped by status.
const tasks = dv.pages('"TASKS/STATUS"').where(p => p.status === "in-progress");
dv.table(
  ["Task", "Priority", "Started"],
  tasks.map(p => [p.file.link, p.priority, p.created])
);
```

## bash

- POSIX-compliant unless explicitly macOS-only.
- `set -euo pipefail` at the top of every script.
- Variables quoted. `"$var"`, not `$var`.
- Use `[[ ]]` for tests in bash. Use `[ ]` only for POSIX sh.
- Functions for repeated logic.
- Comments explain *why*, not *what*.

## PowerShell

- PowerShell Core (pwsh) unless Windows-specific.
- Approved verbs for function names (`Get-`, `Set-`, `Test-`, etc.).
- `param()` blocks for parameters. Type-annotated.
- No `Invoke-Expression`. No string-built command lines.
- Errors propagated with `-ErrorAction Stop` or explicit handling.
- Comments explain *why*, not *what*.

## SQL

- Parameterized queries only. No string interpolation of user input.
- Schema names explicit.
- `EXPLAIN` reviewed for any non-trivial query.
- Transactions where multiple writes must be atomic.

## CSS (Obsidian)

- Use Obsidian CSS variables (`--color-*`, `--font-*`, `--size-*`, `--radius-*`, `--spacing-*`) for theme integration.
- Scope to specific selectors (`.workspace-leaf`, `.markdown-preview-view`, etc.).
- Dark mode first; light mode as variant with `.theme-light` overrides.
- Document selector intent at the top of the snippet.
- Snippets under 200 lines. Larger styling systems get a dedicated CSS file in `SKILLS/`.

## YAML / Frontmatter

- YAML in vault notes follows the documentation standards in `../../2.0MAVIS/RULES/Documentation Standards`.
- YAML in config files (Docker Compose, GitHub Actions) uses 2-space indentation, no tabs.

## JSON

- 2-space indentation.
- No trailing commas.
- Schema validated where possible (Pydantic, Zod).

## Markdown

- Vault markdown follows `../../2.0MAVIS/RULES/Documentation Standards`.
- No emojis. No icons.

## Error Handling Patterns

- **Fail fast.** Detect bad input early and raise with a clear message.
- **Fail loud.** Never silently swallow exceptions. If you must catch and continue, log loudly.
- **Fail safe.** On error, do not leave the system in an inconsistent state. Use try/finally or context managers.
- **Specific exceptions.** Catch specific exceptions, not `Exception` or `BaseException`.

## Logging Patterns

- Use `logging` (Python), `console` (Node), or equivalent.
- Log levels: `DEBUG` for verbose, `INFO` for normal flow, `WARNING` for recoverable issues, `ERROR` for failures, `CRITICAL` for unrecoverable.
- Never log secrets.
- Logs go to stdout/stderr by default. File logging opt-in.

## Version Control

- Git is the version control system. Obsidian Git plugin automates commits.
- Commit messages reference the task-id: `CMD-20260701-001: add wikilink checker`.
- One logical change per commit. No "wip" or "fix typo" stacked with substantive changes.
- Branch for non-trivial work; merge to main when Mavis approves.

## Pre-Submission Checklist

Before submitting for review, OpenCode confirms:

- [ ] Code matches the brief.
- [ ] Acceptance criteria met (or partially met with explanation).
- [ ] Tests written and passing.
- [ ] README updated.
- [ ] CHANGELOG updated.
- [ ] No secrets in code.
- [ ] Dependencies pinned.
- [ ] Linter passes.
- [ ] No commented-out code, no debug prints, no TODOs without tracking.
- [ ] Errors handled explicitly.

## See Also

- OpenCode's role: [[../AGENT]]
- Coding brief protocol: [[../CHAT/Coding Brief Protocol]]
- Review checklist: [[../../2.0MAVIS/RULES/Review Checklist]]
- Documentation standards: [[../../2.0MAVIS/RULES/Documentation Standards]]