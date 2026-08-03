"""Tests for hermes_bus.vault_init."""

from pathlib import Path

from hermes_bus import vault_init


def test_ensure_creates_missing_dirs(tmp_path: Path):
    res = vault_init.ensure(tmp_path)
    statuses = {Path(p).name: s for p, s in res}
    # every required leaf should now exist
    for p, _ in res:
        assert (tmp_path / p.split(str(tmp_path))[-1].lstrip("\\/")).exists() or Path(p).exists()
    # count: at least one 'created'
    assert any(s == "created" for _, s in res)


def test_ensure_idempotent(tmp_path: Path):
    vault_init.ensure(tmp_path)
    res = vault_init.ensure(tmp_path)
    # second call: every entry should be 'existed'
    for _, status in res:
        assert status == "existed"
