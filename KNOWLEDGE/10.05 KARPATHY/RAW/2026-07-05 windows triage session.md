---
title: "2026-07-05 Windows Triage Session"
type: session-journal
agent: Hermes CLI (lumpy meatpuppet)
host: Dell Precision M4800 / Win11 Home 24H2 Build 26100
created: 2026-07-05
modified: 2026-07-05
status: processed
processed: 2026-07-05
tags:
  - domain/systems
  - type/session-journal
  - host/m4800
---

# 2026-07-05 Windows Triage Session

[12:15] request :: user asked for triage, three apps wont load: chrome, google drive, claude
[12:15] clarification :: asked which apps/symptom pattern; user picked multiple-unrelated-apps-thats-likely-Windows
[12:16] decision :: run windows-os-triage Phase-1 60s smoke sweep, elevated pwsh via Start-Process -Verb RunAs
[12:17] note :: wrote smoke.ps1 to %TEMP%/windows_smoke.ps1, launched elevated; first run actually returned "Elevated: True" after the Verb-RunAs path finally executed (the failed prior call was UAC-no-window)
[12:18] note :: identity confirmed: M4800 / Win11 Home 24H2 build 26100 (no UBR shown — possibly corrupt), elevated admin yes
[12:18] result :: smoking-gun services: WinDefend + WaaSMedicSvc both auto-but-stopped; WinDefend WIN32_EXIT_CODE 0x80070002
[12:19] result :: 7-day [[[[event]]]] fingerprint landed the diagnosis immediately: 67× DCOM 10016, 54× e1dexpress 27, 54× WLAN-AutoConfig 10002, 34× Application Error 1000, 29× WindowsUpdateClient 20, 15× SCM 7023, 13× Kernel-PnP 219, 8× SCM 7009, 8× SCM 7000
[12:19] result :: WU failing every defender signature [[update]] with 0x8024200B (engine can't [[init]])
[12:20] diagnosis :: recognized the exact pattern: WinDefend binary tamper (MpSensor.dll + MpKsl.sys missing — not rot, not WUA, not policy). Same fingerprint documented 2026-07-05 in memory from the earlier validated case on this exact host
[12:20] decision :: DISM /RestoreHealth explicitly rejected — WinSxS source intact, repair wouldn't replace program-files-side tampered binaries (validated gotcha; trying it = 5-15 min wasted)
[12:21] clarification :: gave user A/B/C menu with [[costs]]: A in-place repair install (30-45 min, 2 reboots), B MS Store Defender app (10 min, doesn't fix system svc), C disable WinDefend for now (instant, AV off — fine since user has MBAM)
[12:22] note :: user picked C and explained: "i have a 3rd party antivirus" (confirmed by MBAM driver install [[[[event]]]] at 19:00 in the SCM 7045 [[[[event]]]] log)
[12:23] action :: sc config WinDefend start= disabled — SUCCESS, [[status]] now Stopped + start=disabled
[12:24] action :: sc config dam start= disabled — SUCCESS, silences the boot-start 7026 [[[[event]]]] for MpKsl.sys kernel driver
[12:24] action :: net start WaaSMedicSvc — SUCCESS, started and Running (PID 17252); helps WU self-heal
[12:25] verify :: user asked to log it
[12:25] action :: this journal created + [[[[LEDGER]]]] row + WIKI derivation

## Decisions Made

- **Refused `DISM /RestoreHealth` preemptively** — would have wasted 15 min on something that's not WinSxS-rot. The fingerprint matches Fix #8 in the windows-os-triage [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] exactly, and the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] calls this out as a known false-positive path.
- **Picked Option C over A/B** — user has MBAM as real-time AV, so the disabled-WinDefend tradeoff doesn't sacrifice protection (well, except for Defender's specific behavior classes — but that's the user's call given MBAM).
- **Disabled `dam` kernel driver alongside `WinDefend`** — `dam` is MpKsl.sys, the kernel-stream listener. Disabling the user-mode service without disabling the driver leaves the SCM 7026 boot-start error firing every boot. Cleanest to do both.

## Unresolved (Deferred)

- 67× DCOM 10016 events — debloat-stripped DACLs, not blocking app launches, can be addressed later via dcomperm batch fixes (not in scope of "apps wont load").
- DistributedCOM channel manifest broken — empty Messages returned via pwsh. Persists despite `wevtutil sl` refresh. Not blocking anything; just makes the CLSID extraction harder.
- 54× e1dexpress 27 — Intel I217-LM firmware/driver events, separate issue. Not blocking app loads.
- User Profile 1531/1532 churn — looks like restart-loop pattern, will quiet down once Defender stops crashing and the cascade stops.
- SFC + DISM CheckHealth not yet run (image is clean per DISM: "No component store corruption detected"). SFC could be baseline-run after apps are confirmed working.

## Source Artifacts

- `C:\Users\Admin\AppData\Local\Temp\windows_smoke_output.txt` — full 60s smoke result (9.4 KB)
- `C:\Users\Admin\AppData\Local\Temp\verify_def.txt` — Defender binary listing + sc queryex (proof of tamper)
- `C:\Users\Admin\AppData\Local\Temp\disable_windefend_result.txt` — before/after sc config + service state
- `C:\Users\Admin\AppData\Local\Temp\disable_dam_result.txt` — dam disable + WaaSMedicSvc start
- `C:\Users\Admin\AppData\Local\Temp\windows_smoke.ps1` / `verify_def.ps1` / `disable_windefend.ps1` / `disable_dam.ps1` — the ps1 scripts themselves

## SESSION SUMMARY

Three atomic WIKI notes derived from this journal:

- [[WIKI/WinDefend Binary Tamper on M4800 — Cascade Diagnosis 2026-07-05]] — the M4800-specific case with full file-existence evidence, recovery commands, undo steps
- [[WIKI/WinDefend Failure Cascade Fingerprint]] — host-agnostic pattern (the 3-app-wont-load + 0x8024200B + 7023 cluster), 2-step rot-vs-tamper probe, why DISM fails silently on tamper
- [[WIKI/Windows App Load Failure Triage Recipe]] — 6-step recipe: scope classify, 60s smoke, fingerprint match (with table), targeted fix, defer noise, in-place repair when forced

Linked outbound to:
- [[WIKI/Ghost Spectre AIO Diagnostic and Repair Runbook 2026-06-18]] (sibling: 2026-06-18 rot case on same host)
- [[WIKI/Secure Boot and DCOM Post-Reboot Checklist 2026-06-18]] (the debloat-style DCOM damage context)

Not derived (deliberately):
- Updated memory entry: existing memory already covered this pattern with the 2026-07-05 WinDefend Fix #8 reference; no new memory needed
- Updated [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]: the `windows-os-triage` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] already documents this pattern at Fix #8 verbatim; the 2026-07-05 validation is referenced there in the pitfall section


