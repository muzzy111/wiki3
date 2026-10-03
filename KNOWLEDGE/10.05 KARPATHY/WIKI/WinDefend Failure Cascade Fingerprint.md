---
title: "WinDefend Failure Cascade Fingerprint"
type: wiki-note
domain: systems/windows-triage
source: "[[RAW/2026-07-05 windows triage session]]"
tags:
  - domain/systems
  - type/wiki-note
  - status/active
  - pattern/windefend-cascade
created: 2026-07-05
modified: 2026-07-05
status: active
---

# WinDefend Failure Cascade Fingerprint

## The pattern

When `WinDefend` is dead for any reason (tampered binaries, missing DLL, broken SDDL, registry damage), the failure surfaces in apps you wouldn't expect. Three observable signatures give it away before you even look at the services:

1. **Three unrelated apps "wont load"** — especially Chromium-stack (Chrome, Electron apps like Claude/Slack/Discord, anything using Network Service or AppContainer + WinHTTP). Why: real-time protection service chains feed into AppContainer network isolation policies and COM activation for certain network classes. When the chain is broken, the apps either fail to start or hang on first network call.
2. **Defender signature updates fail with 0x8024200B** (KB2267602) in `Microsoft-Windows-WindowsUpdateClient/Operational` [[[[event]]]] 20. Why: the engine can't [[init]], so signature rollout is refused.
3. **Cascading SCM noise**: 7023 (WinDefend), 7026 (dam/MpKsl.sys boot-start fail), 7000/7001/7009 chains, sometimes DCOM 10016 surges of 50+ events as DACL permissions lost-against-broken-service-SDDLs.

## Distinguishing rot vs tamper

Use this 2-step probe when you see the cascade:

```
Get-ChildItem 'C:\Program Files\Windows Defender\' | Select-Object Name
Get-ChildItem 'C:\Windows\WinSxS' -Recurse -File -Filter MpSensor.dll
```

- **All Defender binaries present in Program Files, missing in WinSxS only** = ROT. Run `DISM /RestoreHealth` + `sfc /scannow`. Will likely fix.
- **MpSensor.dll or MpKsl.sys (or any Defender binary) missing from BOTH locations** = TAMPER. DISM/SFC will not help. Skip directly to in-place repair install or MS Store Defender app workaround.

## Why tamper is faster to diagnose than you think

The "all Defender binaries present but version is from a previous Windows build" subcase (copy-replace tamper) is rarer; if a binary is just gone, the cause is almost always a debloat/anti-Defender tool that did `del` rather than registry editing. Treat the absent files as authoritative evidence of manual intervention.

## Don't preemptively run `DISM /RestoreHealth`

It's a 1+ GB download, takes 5-15 min, climbs TiWorker to 100s of CPU. If the fingerprint matches tamper, that time is wasted. Read the file-existence check first.

## Don't trust `DISM /RestoreHealth` success message

Even when it completes "successfully" against tamper, the missing files stay missing. Verify the fix by re-listing the binary directory AFTER the operation, not by trusting the exit code. The 2026-07-05 case saw this firsthand.

## In-place repair install is the only permanent fix

`[[setup]].exe /InstallFrom <Win11_24H2_ISO>` with "Keep personal files and apps" is the only path that re-sources all Defender binaries without breaking the rest of the install. MS Store Defender app restores real-time AV but does NOT fix the system WinDefend service.

## See also

- [[WIKI/WinDefend Binary Tamper on M4800 — Cascade Diagnosis 2026-07-05]] — specific 2026-07-05 case on M4800
- [[WIKI/Ghost Spectre AIO Diagnostic and Repair Runbook 2026-06-18]] — 2026-06-18 rot case on the same host (different fix path)
- [[WIKI/Secure Boot and DCOM Post-Reboot Checklist 2026-06-18]] — the debloat-style DCOM damage pattern that compounds on top of Defender failures
