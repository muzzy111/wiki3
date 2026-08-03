# Scheduler registration helper for the inbox sweep.
# Usage: pwsh -File scheduler.ps1 -Action register
[CmdletBinding()]
param([ValidateSet("register","unregister")][string]$Action = "register")

$taskName = "LOOP-InboxSweep"
$taskXml = Join-Path $PSScriptRoot "scheduler-task.xml"

switch ($Action) {
    "register" {
        Register-ScheduledTask -TaskName $taskName -Xml (Get-Content $taskXml -Raw) -Force
        Write-Host "Registered $taskName"
    }
    "unregister" {
        Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue
        Write-Host "Unregistered $taskName (if present)"
    }
}
