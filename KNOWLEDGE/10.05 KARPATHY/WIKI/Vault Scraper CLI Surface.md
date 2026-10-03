---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper CLI Surface

`vault_scraper/cli.py` is the user-facing entry point. Typer + Rich.
The CLI tree:

```
vault-scraper
  --inbox PATH        host-side path to /data/inbox
  --dry-run           extract + chunk but don't write
  --verbose / -v      DEBUG logging
  scrape
    urls              [url...] | --file urls.txt
    spider            <start-url> --depth N [--same-domain]
                                     [--include ...] [--exclude ...]
                                     [--concurrency N]
    search            <query>... [--searxng-url URL] [--results N]
                                   [--engines a,b,c] [--follow|--no-follow]
    feed              <feed-url>... [--max-items N] [--follow|--no-follow]
    social
      reddit          [--sub NAME]... [--url POSTURL]... [--sort hot]
                                  [--limit N] [--include-comments]
                                  [--comment-limit N]
      hn              --query "..." | --story ID
                                  [--results N] [--include-comments]
```

## Output conventions

Three color-coded line types, all printed via `rich.console.Console`:

- `[green][DROPPED][/green] {filename}  ({bytes:,} bytes, {N}/{M})`
  — on each successful inbox drop.
- `[yellow][SKIP-DUP][/yellow] {source-url}` — on dedup hit (when
  the source URL produces an already-seen hash).
- `[red][ERROR][/red] {source-url} — {message}` — on fetch/extract
  failure (printed to stderr).

A summary table at completion:

```
Dropped:            N files
Skipped (dup):      M
Errors:             K
Total URLs:         T
```

The `console` writes to stdout, `err_console` writes to stderr. This
lets downstream scripts pipe the stdout `[DROPPED]` lines into a
file while still seeing errors on stderr.

## Global flag plumbing

Every subcommand handler calls `_common_flags(inbox, dry_run, verbose)`:

```python
def _common_flags(inbox, dry_run, verbose):
    settings = get_settings()
    target = Path(inbox) if inbox else settings.scraper_inbox_path
    if not dry_run:
        target.mkdir(parents=True, exist_ok=True)
    configure_logging("DEBUG" if verbose else "INFO")
    return target, dry_run
```

CLI flags override env-var defaults. `--inbox` wins over
`SCRAPER_INBOX_PATH`. `--verbose` wins over the default INFO log
level.

## Per-subcommand concurrency

Every subcommand that takes `--concurrency` defaults to
`settings.scraper_default_concurrency` (env var
`SCRAPER_DEFAULT_CONCURRENCY`, default 8). The semaphore is created
inside the source module's runner, not in the CLI — the CLI just
forwards the value.

## Entry point

`pyproject.toml` declares:

```toml
[project.scripts]
vault-scraper = "vault_scraper.cli:app"
```

So `pip install -e .` exposes `[[vault-scraper]]` as a console command on
PATH. The `app` symbol is the Typer instance — Typer's `__call__`
makes it directly invokable.

For dev / CI runs without install: `python -m vault_scraper.cli`
works the same way (the module imports `app` and runs it via
`if __name__ == "__main__": app()`).

## Exit codes

- `0` — success (even if some URLs errored; the summary table tells you).
- `1` — bad CLI invocation (missing required arg, file not found, etc.).
- `2` — SearXNG misconfigured (HTML instead of JSON response).
- Non-zero from Python exceptions if something unexpected crashes
  (Typer's default behavior; not customized).

## What the CLI does NOT do

- No interactive [[[[prompts]]]]. No TUI. No progress bars (would require
  richer; output is line-oriented for piping).
- No config-file reading beyond `.env` (handled by pydantic-settings).
- No shell completion script generation by default; Typer supports it
  via `--install-completion` but it's opt-in.

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper Source Subcommands]]
- [[Vault Scraper Inbox Drop Protocol]]
- [[RAW/2026-06-29 hermes session journal]]