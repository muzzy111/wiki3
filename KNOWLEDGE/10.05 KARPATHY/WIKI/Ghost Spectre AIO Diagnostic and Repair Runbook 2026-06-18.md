---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Ghost Spectre AIO Diagnostic and Repair Runbook

This is the user-side companion to the hermes [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
`software-development/windows-os-triage`. That [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is the canonical
reference for the diagnostic sweep and the in-place repair flow; this
note exists for two reasons only:

1. To record the 2026-06-18 findings against THIS machine so they
   are searchable in the wiki.
2. To provide a durable pointer to the hermes [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] so future
   "this Ghost Spectre box is broken again" sessions start with the
   right tool loaded.

## This session's fingerprint

Host: DESKTOP-43J59E9 / Admin. Win11 Home SL build 26100 (24H2),
AIO Ghost Spectre v5. Eight services were restored to Running on
2026-06-18 21:07 EDT (SENS, wuauserv, WaaSMedicSvc, BITS, ClipSVC,
msiserver, AppXSvc, StateRepository). Component store was healthy
(DISM CheckHealth + SFC scannow both clean). Damage was runtime
configuration only. The boot cascade — l1vhlwf Intel NIC driver
fail every boot with `ERROR_HV_FEATURE_UNAVAILABLE` → igfxCUIService
7001 (depends on SENS) → Kernel-Power 41 → reboot — was identified.
Root cause for the NIC failure: Secure Boot off in UEFI (TPM-WMI
1796 firing on every boot). User took on the BIOS fix and the
Revo Registry Cleaner uninstall; post-reboot DCOM 10016 DACL
repair is queued for the next session.

## Canonical reference

Load `windows-os-triage` (skill_view name='windows-os-triage') and
follow its 3-phase workflow:

- Phase 1 — 60-second quick smoke (identity, services, DISM
  CheckHealth).
- Phase 2 — structured sweep using `templates/windows_triage_sweep.ps1`.
- Phase 3 — repair playbook (Fix #1 WUA, #2 SENS, #3 NIC/BIOS,
  #4 DCOM, #5 hive leak, #6 image-level reinstall).

The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]'s `scripts/repair_runbook.ps1` is what was run on this
host; the `references/ghost-spectre-fingerprint.md` is the recorded
fingerprint with [[[[event]]]]-log excerpts.

## This session's unique artifacts

These are kept on disk because they document THIS host, not the
general pattern:

- `C:\Users\Admin\Desktop\ghost_diag_20260618_204451\` — 22/22
  diagnostic reports (the complete sweep output).
- `C:\Users\Admin\Desktop\ghost_diag_20260618_204122\` — 18/22
  reports from the first attempt that got stuck on SFC; kept for
  reference.
- `C:\Users\Admin\Desktop\ghost_repair_<ts>.log` — full repair
  run log.
- `C:\Users\Admin\Desktop\ghost_repair_regbackup_<ts>.<svc>.reg` —
  per-service registry backups (one per touched service). Roll back
  with `reg.exe import <file>` if a service change causes problems.

## Post-reboot work

See `WIKI/[[Secure Boot and DCOM Post-Reboot Checklist 2026-06-18]].md`
for the BIOS re-enable flow and the DCOM 10016 DACL repair procedure
that must wait until after the user reboots with Secure Boot on.

## Why this note is short

The 2026-06-18 [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] `windows-os-triage` already encodes everything
diagnostic-side. The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is hermes-side; this note is user-side.
They are intentionally not duplicates — the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is the play book,
this note is the play log.
