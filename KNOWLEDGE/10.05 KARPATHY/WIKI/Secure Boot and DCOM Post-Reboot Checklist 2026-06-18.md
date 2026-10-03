---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Secure Boot and DCOM Post-Reboot Checklist

The two remaining items after the 2026-06-18 Ghost Spectre repair run
that cannot be automated from PowerShell. Keep this checklist handy
until the host has been stable for 7 days.

## A. Re-enable Secure Boot in UEFI/BIOS

Required when l1vhlwf or any Intel NIC service has been failing every
boot with `ERROR_HV_FEATURE_UNAVAILABLE` and the [[[[event]]]] log shows
TPM-WMI 1796.

### A.1 Pre-flight (from inside Windows)

```powershell
# Confirm the current Secure Boot state
Confirm-SecureBootUEFI

# If cmdlet missing, install first:
# Install-Module -Name SecureBoot -RequiredVersion 2.2.0 -Force
```

Expected failure mode on a Ghost Spectre AIO:
`Cmdlet not supported on this platform` or `False`.

### A.2 UEFI steps

These vary by motherboard manufacturer. The general flow:

1. Restart.
2. Mash the BIOS hotkey during POST (DEL, F2, F10, F12 — depends on
   board; consult the splash screen).
3. Find the Security / Boot / [[Authentication]] tab.
4. Set Secure Boot = Enabled.
5. While there, also set:
   - Intel VT-x / AMD-V = Enabled
   - Intel VT-d / AMD IOMMU = Enabled
   - Hyper-V / VBS = Enabled (if listed)
6. Save and exit.

### A.3 Post-boot validation

```powershell
Confirm-SecureBootUEFI          # must return True
Get-SecureBootUEFI              # shows SetupMode, SecureBoot, etc.
```

[[[[Event]]]] log must stop showing TPM-WMI 1796 within 1-2 boots.

```powershell
Get-WinEvent -FilterHashtable @{LogName='System';Id=1796;ProviderName='Microsoft-Windows-TPM-WMI'} -MaxEvents 5 |
    Measure-Object | Select-Object Count
```

Target: 0 (or only the historical events that happened before the
BIOS change).

### A.4 If the NIC driver still 7000s after Secure Boot is on

The l1vhlwf.sys file on the host might be the wrong version for the
enabled VBS state. Two options:

- [[Update]] the Intel Ethernet driver from the OEM site (matches this
  hardware's exact NIC).
- Disable VBS but keep Secure Boot on. The l1vhlwf driver then loads
  without the hypervisor call and your apps still get Secure Boot
  protection. Tradeoff: you lose Credential Guard / HVCI.

## B. DCOM 10016 DACL repair (post-reboot)

Ghost Spectre strips default DACLs from COM components. The warnings
look like:

```
DCOM was unable to communicate with the computer <name> using any of
the configured protocols; requested by the CLSID
{<guid>} AppID <{guid}>.
```

(Exact wording varies. The diagnostic captures them under
`08_events.txt` as `Microsoft-Windows-DistributedCOM, 10016`.)

### B.1 Re-attempt extraction

The first pwsh extraction on the 2026-06-18 host returned empty
messages because the DistributedCOM channel manifest was broken.
After a reboot it usually reloads. Run:

```powershell
pwsh -File scripts/dcom_audit.ps1
```

Expected output (post-reboot):

```
DCOM 10016 unique CLSIDs and counts (last 100 occurrences):

CLSID                                  Count
------                                  -----
{D63B10C5-BB46-4990-A94F-E40B9D520...}  12
...
```

If `Count` column is empty or the script errors out, the channel
manifest is still broken. Try:

```powershell
# Force the channel manifest to refresh
wevtutil sl Microsoft-Windows-DistributedCOM/e:true
# then re-run
```

If still empty: the channel is damaged. Recovery is
`wevtutil ms /q:` style rebuild, or just live with the warnings —
they don't break functionality, they just spam the [[[[event]]]] log.

### B.2 Apply DACL fix per CLSID

For each CLSID:

1. Open `regedit` as Administrator.
2. Navigate to `HKEY_CLASSES_ROOT\CLSID\{<guid>}`.
3. Right-click → Permissions → Advanced.
4. Add the principal named in the warning (usually
   `NT AUTHORITY\SYSTEM`, `BUILTIN\Administrators`, or a service
   account).
5. Grant at minimum: Read, and for the principal that the warning
   identifies as missing: Local Launch + Local Activation.
6. Repeat for the AppID branch if it exists
   (`HKEY_CLASSES_ROOT\AppID\{<guid>}`).
7. Reboot.

Alternative: use `dcomperm` from the Windows resource kit:

```cmd
dcomperm -al {CLSID} set "INTERACTIVE" permit
dcomperm -ll {CLSID} set "INTERACTIVE" permit
```

### B.3 Validate

```powershell
# Count should drop to 0 (or near-0) within 24h of fixes
Get-WinEvent -FilterHashtable @{LogName='System';Id=10016} -MaxEvents 100 |
    Group-Object Id | Sort-Object Count -Descending
```

## C. 7-day stability check

Watch these counters. They should all trend to zero.

```powershell
$since = (Get-Date).AddDays(-7)
$logs = @{
    'System/7000,7001,7009'   = @{LogName='System';Id=7000,7001,7009}
    'System/1512'             = @{LogName='Application';Id=1512}
    'System/41 (KernelPower)' = @{LogName='System';Id=41;ProviderName='Microsoft-Windows-Kernel-Power'}
    'System/1796 (SecureBoot)'= @{LogName='System';Id=1796;ProviderName='Microsoft-Windows-TPM-WMI'}
    'System/10016 (DCOM)'     = @{LogName='System';Id=10016}
}
foreach ($label in $logs.Keys) {
    $n = (Get-WinEvent -FilterHashtable $logs[$label] -MaxEvents 1000 -ErrorAction SilentlyContinue |
        Where-Object { $_.TimeCreated -ge $since } | Measure-Object).Count
    "{0,-30} {1,6}" -f $label, $n
}
```

Targets after 7 days:

- 7000/7001/7009: 0
- 1512: 0
- 41: 0
- 1796: 0
- 10016: 0 or close to 0 (some Microsoft-internal CLISDs are fine to
  ignore)

## D. If counters are not trending to zero

Re-run the full diag (Step 0 of the runbook). Compare the new
`08_events.txt` against the 2026-06-18 one. If a new failure
category appears that wasn't there before, append a new runbook
section and treat this as a regression.
