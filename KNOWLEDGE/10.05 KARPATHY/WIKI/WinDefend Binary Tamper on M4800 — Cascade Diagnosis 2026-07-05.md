---
title: "WinDefend Binary Tamper on M4800 — Cascade Diagnosis 2026-07-05"
type: wiki-note
domain: systems/windows-triage
host: Dell Precision M4800
source: "[[RAW/2026-07-05 windows triage session]]"
tags:
  - domain/systems
  - type/wiki-note
  - status/active
  - host/m4800
  - pattern/windefend-tamper
created: 2026-07-05
modified: 2026-07-05
status: active
---

# WinDefend Binary Tamper on M4800 — Cascade Diagnosis 2026-07-05

## What broke

Three apps stopped loading on the M4800: Chrome, Google Drive, Claude (Electron). Single-app bugs ruled out by the unrelated mix. The 60s smoke sweep landed the diagnosis in one fingerprint:

- `WinDefend` Automatic, Stopped, WIN32_EXIT_CODE 0x80070002
- `dam` boot-start driver failed to load (SCM 7026) — `dam` is `MpKsl.sys`, the Defender kernel-stream listener
- 67 DCOM 10016, 15 SCM 7023, 8 SCM 7009, 8 SCM 7000 cascading
- WU failing every Defender signature [[update]] with 0x8024200B
- 34 Application Error 1000 for `WsaClient.exe` and `HidMonitorSvc.exe` (depend on Win32 services that depend on Defender)
- DISM CheckHealth: "No component store corruption detected"

## The actual cause

Missing Defender binaries. Validator script confirmed:

- `MpSensor.dll` missing from `C:\Program Files\Windows Defender\`
- `MpKsl.sys` missing from `C:\Program Files\Windows Defender\`
- Both also absent from `C:\Windows\WinSxS\` (zero matches)

This is **binary tamper**, not component-store rot. Something deleted the files in `Program Files` — likely an anti-Defender tool or aggressive debloater that ran against the live folder without updating WinSxS.

## Why DISM doesn't help

`DISM /Online /Cleanup-Image /RestoreHealth` completes successfully and reports 100% — but does NOT replace tampered files in `C:\Program Files\Windows Defender\`. The WinSxS source is still intact (the delete was on the live side), so the manifest has nothing to flag as drifted. `TiWorker` climbs 100s of CPU, the counter hits 100, the exit code is 0, and the missing file is still missing.

This is now a documented 2026-07-05 gotcha (Fix #8 in [[WIKI/Windows OS Triage Skill Reference]] / the loaded `windows-os-triage` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]).

## The cascade

1. WinDefend exit 0x80070002 every restart -> SCM 7023 every 30-60s
2. dam (MpKsl.sys) fails to load -> SCM 7026 every boot
3. WU Defender signature updates fail with 0x8024200B (29 events in 7 days)
4. AppContainer network isolation depends on Defender service chains -> Chromium-based apps (Chrome, Drive, Claude/Electron) can't establish network sessions cleanly -> "wont load"
5. DCOM DACLs from debloat -> 67 10016 events (already broken, just louder)
6. User Profile 1531/1532 churn (Profile Service start/stop events) tracks the restart loop

## Recovery applied

User has Malwarebytes (saw the `mbam.sys` + `mbae.sys` + `mwac.sys` driver install events from MBAM at 19:00). Option chosen:

```
sc config WinDefend start= disabled
sc config dam start= disabled
net start WaaSMedicSvc    # helps WU self-heal
```

After this:
- Chrome / Google Drive / Claude loaded without restart (cascade broken)
- SCM 7023 + 7026 events stop being written
- WinDefend stays broken until in-place repair install, but real-time AV is covered by MBAM

## How to undo (when user does the repair install)

```
sc config WinDefend start= auto
net start WinDefend
sc config dam start= boot
```

## Permanent fix when the user is ready

In-place repair install — mount Win11 24H2 ISO, run [[setup]].exe, choose "Keep personal files and apps", ~30-45 min, 2 reboots. Re-sources every system binary from install media including the missing Defender files. No data loss. This is the only path that actually restores the system WinDefend service; MS Store Defender app is a partial workaround that doesn't fix system state.

## Diagnostic fingerprint (how to recognize this fast)

When you see ALL of these in the 7-day [[[[event]]]] fingerprint:
- `WinDefend 7023` cycling (exit 0x80070002 / system cannot find the file specified)
- `dam 7026` boot-start fail
- WindowsUpdateClient 20 with 0x8024200B for KB2267602 (Defender sig)
- Application Error 1000 for at least one Chromium-stack process

...run the file-existence check immediately:

```
Get-ChildItem 'C:\Program Files\Windows Defender\' | Select Name
Get-ChildItem 'C:\Windows\WinSxS' -Recurse -File -Filter MpSensor.dll
```

If `MpSensor.dll`, `MpKsl.sys`, or any other Defender binary is missing from BOTH locations, you have tamper. Skip DISM.

See also: [[WIKI/Ghost Spectre AIO Diagnostic and Repair Runbook 2026-06-18]] for the 2026-06-18 rot case (WinSxS-corruption, different fix path).
