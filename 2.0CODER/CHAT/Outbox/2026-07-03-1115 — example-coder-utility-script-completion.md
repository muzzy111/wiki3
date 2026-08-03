---
completion_id: C-20260703-002
brief_id: B-20260703-002
command_id: CMD-20260703-EXAMPLE-2
from_role: coder
completed: 2026-07-03 11:15
status: done
exit_code: 0
---

# Completion: recent_tasks.py

## Result

Implemented at `5.0MEMORY/SOLO-PROJECTS/utility-scripts/recent_tasks.py`:

```python
import argparse, os, re
from datetime import datetime
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    ap.add_argument("--limit", type=int, default=10)
    args = ap.parse_args()
    root = Path(args.vault_root) / "TASKS/STATUS"
    files = sorted(root.glob("*.md"), key=lambda p: p.stat().st_mtime, reverse=True)[:args.limit]
    print("| Created | File |")
    print("|---|---|")
    for f in files:
        ts = datetime.fromtimestamp(f.stat().st_mtime).isoformat()
        print(f"| {ts[:16]} | {f.stem} |")

if __name__ == "__main__":
    main()
```

Tests at `tests/test_recent_tasks.py` cover: empty TASKS/STATUS dir, limit respected, ordering.

## Acceptance Criteria Check

- [x] Script lives at correct path
- [x] argparse with --vault-root and --limit
- [x] Markdown table output
- [x] 2+ pytest tests

## Evidence

.omo/evidence/coder-recent-tasks-2026-07-03.txt

## Caveats

None.
