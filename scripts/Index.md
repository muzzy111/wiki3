---
title: "LOOP Scripts Index"
type: scripts-index
status: active
---

# LOOP Scripts

> Bootstrap, smoke, and daemon launcher scripts for the LOOP vault.

## Scripts

| Script | Purpose | Status |
|---|---|---|
| `turnkey-bootstrap.ps1` | First-run bootstrap. Verifies Python, plugins, agents.yaml, role folders. Idempotent. | active |
| `turnkey-smoke.ps1` | Smoke test: vault structure + agents.yaml + Plugins Index. Exits 0. | active |
| `start-hermes-daemon.ps1` | Long-running daemon launcher. Currently a Wave-3 placeholder. | deferred |
| `start-hermes-daemon.sh` | Bash variant of the above. | deferred |
| `session-start.ps1` | One-shot sweep; mirrors turnkey-smoke.ps1 minus daemon call. | active |
| `session-start.sh` | Bash variant of session-start. | active |

## Usage

```powershell
# Bootstrap (one-time)
pwsh -NoProfile -File scripts/turnkey-bootstrap.ps1 -VaultRoot .

# Smoke (any time)
pwsh -NoProfile -File scripts/turnkey-smoke.ps1 -VaultRoot .

# Daemon (Wave 3)
pwsh -NoProfile -File scripts/start-hermes-daemon.ps1 -VaultRoot .
```

## See Also

- `.omo/evidence/` for captured smoke output.
- `SYSTEM/agents.yaml` for the registry these scripts reference.
