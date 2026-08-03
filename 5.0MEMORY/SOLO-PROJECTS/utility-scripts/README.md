---
title: "Utility Scripts"
type: utility-index
status: active
---

# Utility Scripts

> 10 vault utility scripts owned by the Memory Curator.

| Script | Purpose | Usage |
|---|---|---|
| `vault_init.py` | bootstrap a fresh vault clone | `python vault_init.py --vault-root .` |
| `wikilink_checker.py` | scan for broken wikilinks | `python wikilink_checker.py --vault-root .` |
| `frontmatter_audit.py` | check frontmatter on every operational note | `python frontmatter_audit.py --vault-root .` |
| `secret_scanner.py` | grep for API-key patterns | `python secret_scanner.py --vault-root .` |
| `backup_verifier.py` | check backup-log freshness | `python backup_verifier.py --vault-root .` |
| `inbox_parser.py` | parse CHAT/INBOX.md into Command dicts | `python inbox_parser.py --vault-root .` |
| `dataview_consistency.py` | lint Dataview blocks | `python dataview_consistency.py --vault-root .` |
| `agent_skill_loader.py` | list every role's skills (coverage report) | `python agent_skill_loader.py --vault-root .` |
| `performance_rollup.py` | weekly per-role metrics | `python performance_rollup.py --vault-root .` |
| `agent_drift_detector.py` | compare recent completions against personas | `python agent_drift_detector.py --vault-root .` |

Each script supports `--vault-root <path>` and runs from any CWD.

## Tests

`tests/` contains pytest tests for the core utilities (see `pytest tests/ -q`).
