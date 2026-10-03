---
title: "Windows App Load Failure Triage Recipe"
type: wiki-note
domain: systems/windows-triage
source: "[[RAW/2026-07-05 windows triage session]]"
tags:
  - domain/systems
  - type/wiki-note
  - status/active
  - pattern/recipe
created: 2026-07-05
modified: 2026-07-05
status: active
---

# Windows App Load Failure Triage Recipe

When the user reports "apps wont load" on Windows, run this checklist. Each step is <60s and produces evidence, not speculation.

## Step 1: Classify the failure scope

- One specific app: app's own [[[[event]]]] log. STOP.
- Multiple unrelated apps: likely Windows-side. CONTINUE.
- Shell sluggish/frozen: windows-os-triage Phase 2 sweep. CONTINUE.

## Step 2: 60-second elevated smoke

PowerShell as admin. All of these are read-only:

```
Get-Service wuauserv,BITS,WaaSMedicSvc,ClipSVC,msiserver,SENS,WinDefend,MpsSvc -EA SilentlyContinue
cmd /c 'DISM /Online /Cleanup-Image /CheckHealth'
Get-WinEvent -FilterHashtable @{LogName='Application','System'; Level=1,2,3; StartTime=(Get-Date).AddDays(-7)} -MaxEvents 5000 | Group-Object ProviderName,Id | Sort-Object Count -Descending | Select -First 25
```

Read the output in this order:
1. **Auto-but-stopped services** (the smoking gun list)
2. **Top 25 events by count** (the fingerprint)
3. **WindowsUpdateClient 20 with 0x8024200B** (Defender-sig-fail indicator)
4. **DISM CheckHealth** ("No component store corruption detected" rules out WinSxS rot)

## Step 3: Match the fingerprint to a known pattern

| Fingerprint | Pattern | First fix |
|---|---|---|
| WinDefend Stopped + 7023 with 0x80070002 + dam 7026 + WU 0x8024200B + 3 unrelated apps wont load | WinDefend binary tamper | [[WIKI/WinDefend Failure Cascade Fingerprint]] |
| Capabilities hang > 60s + "Class not registered" + WU broken | WUA COM stack unregistered | Restart wuauserv + WaaSMedicSvc + BITS |
| ClipSVC/apps hang + igfxCUIService 7001 + Kernel-Power 37 bursts | SENS disabled | `sc config SENS start= auto && net start SENS` |
| 20+ DCOM 10016 over 7 days | debloat-stripped DACLs | dcomperm batch fixes (not app-blocking) |
| 7000 for l1vhlwf + Secure Boot True | Nested Network Virt, not Secure Boot | `sc config l1vhlwf start= disabled` |
| User Profile 1512 + registry hive unload failures | scheduled task running as user account | Find the offender task, switch to LOCAL SYSTEM |

## Step 4: Apply the targeted fix

Each pattern has a specific 2-3 command recovery. Don't run `DISM /RestoreHealth` preemptively — it wastes time when the issue isn't WinSxS rot. Verify the fix landed by re-running the check that originally returned the error.

## Step 5: Defer, don't ignore

If you see noise that ISN'T blocking the user's reported symptom (DCOM 10016, e1dexpress, User Profile churn), note it but don't fix it in the same pass. The user came in for "apps wont load" — fix that, log the rest, keep moving.

## Step 6: When in-place repair is the only path

Document it cleanly:
- What it fixes (e.g. missing Defender binaries)
- Why no lighter path works (e.g. WinSxS source intact = DISM/SFC can't help)
- Time cost (~30-45 min, 2 reboots)
- Data cost ("Keep personal files and apps" preserves user data)

Then ask the user whether they want to schedule it or want a workaround now.

## See also

- [[WIKI/WinDefend Failure Cascade Fingerprint]]
- [[WIKI/WinDefend Binary Tamper on M4800 — Cascade Diagnosis 2026-07-05]]
- [[WIKI/Ghost Spectre AIO Diagnostic and Repair Runbook 2026-06-18]] for the deeper 22-section sweep that catches things this recipe misses
- [[WIKI/Secure Boot and DCOM Post-Reboot Checklist 2026-06-18]] for the post-reboot verification steps
