---
title: "Coding Standards"
role: "coder"
status: active
---

# Coding Standards

> Vault-wide code style for projects owned by the Coder role.

## Python

- PEP 8 with 4-space indent; max line length 100.
- Type hints on every public function and dataclass.
- Module docstring at the top.
- pytest for tests; one test file per source module.
- Run `ruff check` and `mypy --strict` before committing.

## JavaScript / TypeScript

- 4-space indent; semicolons; ES modules.
- TypeScript: strict mode; no `any` unless wrapped in `// eslint-disable-next-line`.
- Vitest or Jest for tests.

## DataviewJS / Templater

- 4-space indent; no trailing semicolons (not required by Dataview).
- Use `dv.pages()` and `dv.table()` for queries; never raw regex on file contents.

## Dependencies

- Pin every version (`package>=1.0,<2.0`).
- Add to `pyproject.toml` (preferred) or `requirements.txt`.
- No transitive-only deps; every dependency must be imported somewhere.

## Tests

- One test file per source module under `tests/`.
- Use fixtures from `tests/fixtures/`; never inline test data.
- All tests must run in <5s; otherwise mark with `@pytest.mark.slow`.

## See Also

- `2.0CODER/SKILLS/MCP Implementation.md` — MCP-specific coding rules.
- `2.0CODER/SKILLS/DataviewJS Patterns.md` — DataviewJS-specific patterns.
