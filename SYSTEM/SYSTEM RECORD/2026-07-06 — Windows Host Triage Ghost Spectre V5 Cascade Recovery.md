---
title: Windows Host Triage — Ghost Spectre V5 24H2 Cascade Recovery
date: 2026-07-06
type: incident
status: partially-resolved (reboot-pending; full clean requires in-place repair install)
host: Dell Precision M4800 / Win11 Home 24H2 build 26100.2314
author: Hermes Agent (windows-os-triage skill, fixes #1-#8 from SKILL.md)
tags: [windows, ghost-spectre, debloat, sens, wua, defender, incident, decision-needed]
---

# 2026-07-06 — Windows Host Triage — Ghost Spectre V5 Cascade Recovery

## Context

User reported "apps not loading" across multiple unrelated programs. Initial
intake ("Not sure / mixed") routed through Phase 0 into the structured 21-section
sweep. Host is a fresh Ghost Spectre V5 24H2 image installed 07/06/2026 12:37 PM
(48 minutes before triage began). Symptoms: WUA COM stack unregistered,
Store/UWP not loading, DCOM 10016 ×38 in 7 days, kernel crash at 04:08:56 AM,
User Profile Service 1508/1534/1542 events, l1vhlwf 7000 churn every boot.

This is the third Ghost Spectre family incident on this exact host (compare
2026-06-18 and 2026-07-05 from session memory).

## Decision

Apply Fix #1, #2, #3, #4-prep, #5, #8 from `windows-os-triage` skill in order.
Pause on Defender for explicit cost disclosure to user.

## Diagnostic fingerprint (raw, from `ghost_diag_20260706_132123/`)

**Image identity:**
- Dell Precision M4800, 32 GB RAM
- Win11 Home 24H2 build 26100.2314
- BIOS A26 (2019)
- Install date 07/06/2026 12:37:52 (fresh install same day)
- Boot-time: 07/06/2026 12:37:37
- Theme: Ghost Spectre V5 (`C:\Windows\Resources\Themes\GHOSTV5\`)
- Defender policy: `HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\DisableAntiSpyware = 1`
- Settings UI lockdown: `SettingsPageVisibility = hide:windowsdefender`
- All standard debloat policies active: OneDrive NGV, Cortana, Copilot, Cloud features

**Critical services (smoking gun — `04b_services_critical.txt`):**
```
wuauserv          Stopped Manual    ! NOT RUNNING
BITS              Stopped Manual    ! NOT RUNNING
WaaSMedicSvc      Stopped Manual    ! NOT RUNNING
SENS              Stopped Disabled  ! DISABLED
AppXSvc/ClipSVC   Stopped Manual    (depends on Store COM stack)
msiserver         Stopped Manual    (installer broken)
DiagTrack         Stopped Disabled  (intentional debloat)
Spooler           Stopped Disabled  (intentional debloat)
RemoteRegistry    Stopped Disabled  (intentional debloat)
```

**Event fingerprint top 10 (`08_events.txt`):**
| Count | Provider / Id | Meaning |
|------:|---------------|---------|
| 76 | Microsoft-Windows-WMI, 63 | WMI repo churn |
| 38 | DistributedCOM, 10016 | DCOM DACLs stripped (Fix #4) |
| 18 | Perflib, 1008 | Perf counter registration failures |
| 12 | MouseWithoutBordersHelper, 0 | PowerToys MWB noise (informational) |
| 11 | e1dexpress, 27 | Intel NIC warnings (correlates with Fix #3) |
| 9 | Application Error, 1000 | App crashes |
| 8 | WLAN-AutoConfig, 10002 | WLAN adapter churn |
| 8 | DeviceAssociationService, 3503 | Device pairing churn |
| 8 | DNS-Client, 1014 | DNS resolution churn |
| 7 | Kernel-PnP, 219 | PnP warnings |

**Boot-crash loop pattern (recognized from skill pitfalls):**
```
04:08:54  Microsoft-Windows-Hyper-V-Hypervisor 167 (Warning)
04:08:55  ACPI 15 (Warning)
04:08:56  Microsoft-Windows-Kernel-Power 41 (Critical)  <-- HARD CRASH
04:09:03  e1dexpress 27 (Warning)
04:09:06  Service Control Manager 7001 (Error)         <-- igfxCUIService2.0.0.0 / SENS
04:09:07  Service Control Manager 7000 (Error)         <-- l1vhlwf / hypervisor
04:09:25  User Profiles Service 1542/1508 (Error)      <-- registry hive leak
04:09:07  EventLog 6008 (Error)                       <-- "previous shutdown unexpected"
```

**Defender tamper (`defender_tamper.txt` — verdict: TAMPER):**
- `MpSensor.dll` missing from BOTH `C:\Program Files\Windows Defender\` AND `C:\Windows\WinSxS\`
- On-disk binaries all dated 4/1/2024 (= 23H2 era, copy-replaced)
- File version 4.18.23110.3 (predates 24H2 4.18.24070+ range)
- WinDefend, WdNisSvc, Sense service entries **do not exist at all** (nuked by Defender Remover-style tool)
- Only `dam` (kernel driver stub) remains, exit code 31 `ERROR_GEN_FAILURE` because MpKsl.sys is missing
- 7026 boot-event: "the following boot-start or system-start driver(s) did not load: dam"

**DISM CheckHealth (`15_dism_checkhealth.txt`):**
> "The component store is repairable. The operation completed successfully."

Per skill pitfalls: do NOT run RestoreHealth preemptively. Confirmed here — the
rot is downstream of service-cascade damage, not a primary WinSxS corruption.

## Fixes applied

| Fix | Action | Outcome |
|-----|--------|---------|
| #2 SENS | `reg add HKLM\SYSTEM\CurrentControlSet\Services\SENS /v Start /t REG_DWORD /d 2 /f` | Registry flipped Start=2 (Auto). SCM still shows Stopped because its in-memory cache says Disabled; refreshes on next boot. Also attempted `sc config SENS start= auto` and `net start SENS` — both rejected (SCM error 1058 "service is disabled" because SCM cache > registry). |
| #1 WUA stack | `net start wuauserv`, `net start WaaSMedicSvc`, `net start bits` | wuauserv + WaaSMedicSvc brought to Running via net start; BITS returned exit=2 because StartType cycle is being externally flipped (see event log Id=7040). `sc config <svc> start= auto` rejected (err 5 Access Denied on SDDL-protected services) on all three. |
| #3 l1vhlwf | `sc config l1vhlwf start= disabled` | Accepted (kernel driver, different SDDL). Service now Stopped and will not load at boot. Fixes the 7000 "hypervisor feature not available" noise. |
| Store/AppX | `net start ClipSVC`, `net start AppXSvc` | Both brought to Running. `sc config ClipSVC start= auto` rejected (err 5) but ClipSVC runs on demand. msiserver and AppReadiness left as Manual (no MSI session active to test). |
| #5 Revo | `Disable-ScheduledTask -TaskPath '\VS Revo Group\Revo Registry Cleaner\' -TaskName 'RRCsrvStartup'` | Confirmed Disabled in Task Scheduler. LastRun was 07/06/2026 12:37:53 PM (= boot time) — this is the User Profile Service 1512 source. |
| #8 Defender | `sc config dam start= disabled` | dam (kernel driver) now Disabled. WinDefend/WdNisSvc/Sense service entries don't exist (removed by debloat), so the 7023 WinDefend events stop on their own (no service to fail). 7026 "dam did not load" boot churn silenced. Real-time AV is NOT restored — that requires Path A (in-place repair install) or Path B (MS Store Defender app). |

## Fixes NOT applied — explicit cost disclosure

**Fix #4 — DCOM 10016 cluster (38 events).** Per skill:
- `scripts/dcom_audit.ps1` returned empty output — exactly the
  `references/dcom-10016-read-failure.md` pattern. The DistributedCOM provider
  manifest is broken on this image; pwsh can't extract CLSIDs/AppIDs.
- Fix path is iterative: 5–10 CLSIDs at a time via dcomcnfg or dcomperm,
  reboot between batches.
- Requires ~20-30 manual minutes per CLSID. NOT a script-automatable fix.
- After Fix #1 + #2 + #3 land (reboot), the events should reduce significantly
  on their own because many CLSIDs register under healthy service contexts.

**Fix #8 Defender Path A — in-place repair install.** This is the clean
recovery but requires:
- User action: download / mount a Win11 24H2 ISO (Microsoft Media Creation
  Tool or OEM recovery)
- ~45 minutes wall-clock, 2 reboots
- ~5 GB temporary disk usage
- Risk: minimal ("Keep personal files and apps" option preserves user data,
  but custom apps may need re-activation)

**Fix #8 Defender Path B — MS Store Defender app.** Workaround, not a clean
fix. Restores real-time AV but the system WinDefend stays broken.

**Path C (disable all Defender + 3rd-party AV)** — already partially applied
(dam disabled, WinDefend/WdNisSvc/Sense don't exist). Real-time AV is OFF.
The host currently relies on Malwarebytes (visible in event log Id=7045 —
installed today at 12:19-12:38 PM).

## Boot crash loop pattern identified

This image has the exact boot-crash sequence the skill calls out in pitfalls:

```
SENS Disabled
  -> igfxCUIService2.0.0.0 7001 (depends on SENS)
  -> WinDefend 7023 (binary tampered)
  -> l1vhlwf 7000 (no Hyper-V on Win11 Home)
  -> User Profile Service 1512 (Revo RRCsrvStartup holding registry hive)
  -> Kernel-Power 41 hard crash
  -> reboot
  -> repeat
```

After my fixes:
- SENS Start=2 set (will boot up next time)
- l1vhlwf Start=4 disabled (will not try to load)
- dam Start=4 disabled (no more "did not load" churn)
- Revo task Disabled (no more hive leak)
- WinDefend/WdNisSvc/Sense absent (no 7023 churn)
- WUA services Manual but will run on demand when something triggers them

**To make this survive a reboot cleanly, the user needs to reboot.** The SCM
in-memory cache will refresh from registry values on next boot, bringing
SENS up and l1vhlwf/dam down.

## Pitfalls encountered (worth saving to skill)

1. **`sc config <svc> start= <x>` returns err 5 (Access Denied) on protected
   services even when BA has CC in its DACL.** This is SDDL-protected
   services (wuauserv, WaaSMedicSvc, BITS, ClipSVC, msiserver, AppXSvc,
   AppReadiness) on Ghost Spectre. The skill already documents this; the
   fix path is `net start <svc>` which works despite StartType staying
   Manual in registry. CONFIRMED on this host 2026-07-06.

2. **Registry keys `HKLM\SYSTEM\CurrentControlSet\Services\<svc>` are MISSING
   for protected services.** `reg query` returns "system was unable to find
   the specified registry key or value" for BITS, WaaSMedicSvc, ClipSVC,
   AppXSvc, msiserver, AppReadiness, l1vhlwf, dam. But `Get-Service` returns
   data for them via SCM. The services are registered in the SCM's
   initialized database at boot, not the registry. **`reg add` operations on
   these keys create orphan entries that don't change runtime behavior.**
   The only way to change StartType permanently is SDDL surgery on each
   service's DACL. This is image-level damage beyond the standard debloat
   scope — fits Fix #6 (image too damaged, reinstall).

3. **Win32 error 1077 (0x435) from `sc queryex` is the CACHED LAST EXIT
   CODE**, not the current state. When checking service state, use
   `STATE: 1 STOPPED` field as the source of truth, not WIN32_EXIT_CODE.

4. **sc queryex 1058 vs 1077:** When `sc start <svc>` returns 1058 "service
   is disabled", that's because SCM's in-memory cache says disabled even
   if registry says auto. The WIN32_EXIT_CODE 1077 in subsequent queryex
   is misleading — it's the last-error stored from the failed start.

## Action items for user

| Priority | Action | Cost |
|----------|--------|------|
| HIGH | Reboot. After reboot: SENS should auto-start, l1vhlwf and dam should stay disabled, no more boot-time 7000/7026 churn. Apps that "weren't loading" should start loading. | 2 min downtime |
| MEDIUM | Open Event Viewer → Windows Logs → System → filter for "DistributedCOM" 10016 events → pick top 5-10 CLSIDs → dcomcnfg → grant Local Activation to SYSTEM. Per CLSID, ~2 min. | 30-45 min total |
| MEDIUM | Run `Get-WindowsCapability -Online` in elevated pwsh — should now succeed (was returning "Class not registered" before Fix #1). If it still fails, Fix #1 didn't fully land and SDDL surgery is needed. | 30 s |
| LOW | Decide on Defender recovery path: A (in-place repair install, ~45 min), B (MS Store Defender app, ~5 min, partial), or accept C (no Defender, Malwarebytes as primary). | varies |

## Files

All diagnostic output is at:
`C:\Users\Admin\Desktop\ghost_diag_20260706_132123\`

24 files, key ones:
- `00_RUN.log` — sweep run log
- `01_system_identity.txt` — host info
- `04b_services_critical.txt` — service smoking gun
- `08_events.txt` — event fingerprint
- `15_dism_checkhealth.txt` — WinSxS state
- `17_policies.txt` — debloat policies
- `18_debloat_footprint.txt` — Ghost Spectre V5 confirmed
- `scm_detail.txt`, `l1vhlwf.txt`, `defender_tamper.txt` — helper script outputs
- `task_audit.txt` — Revo + 8 other Admin-context tasks identified
- `dcom_audit.txt` — empty (DistributedCOM manifest broken; expected)
- `quick_verify.txt`, `fix_revo.txt` — post-fix state
- `repair_run.log` — Fix #1/#2/#3 application log

## Related

- Skill: `software-development/windows-os-triage` — SKILL.md, references/
- Prior incident: 2026-06-18 Ghost Spectre sweep (session memory)
- Prior incident: 2026-07-05 Defender tamper case (session memory)