---
title: Google Drive Sync
tags: [agent, agy, skill, google-drive, backup]
created: 2026-07-01
type: skill
status: active
---

# Google Drive Sync

> How AGY operates the Google Drive sync for the vault backup.

## Authentication

AGY authenticates to Google Drive via OAuth 2.0:

- **Token storage.** The token lives in the user's `.env` or in the agent runtime's secret store. Never in vault notes.
- **Refresh.** AGY refreshes the token on 401 errors. If refresh fails, AGY stops sync and notifies Hermes.
- **Scopes.** `https://www.googleapis.com/auth/drive.file` — limited to files AGY creates. AGY does not request full Drive access.

## Configuration

AGY reads sync config from environment variables:

| Variable | Default | Purpose |
|---|---|---|
| `AGY_DRIVE_FOLDER_ID` | (required) | The Drive folder ID to mirror into |
| `AGY_SYNC_INTERVAL_MINUTES` | 15 | Sync interval |
| `AGY_VERSIONS_TO_KEEP` | 30 | Versioned backups per file |
| `AGY_EXCLUDE_PATTERNS` | (empty) | Comma-separated glob patterns to exclude |
| `AGY_VERIFY_AT` | 03:00 | Daily verification time (24h) |

AGY's sync script lives at `4.0AGY/SOLO-PROJECTS/google-drive-sync/` once implemented.

## Sync Algorithm

```
sync(local_vault, drive_folder):
    local_files = enumerate(local_vault, exclude=excludes)
    remote_files = enumerate(drive_folder, exclude=excludes)

    # Build maps
    local_map = {f.path: f for f in local_files}
    remote_map = {f.path: f for f in remote_files}

    # Compute deltas
    to_upload = []
    to_check = []

    for path, local in local_map.items():
        if path not in remote_map:
            to_upload.append(local)  # new file
        elif local.mtime > remote_map[path].mtime:
            to_upload.append(local)  # modified

    # Remote-only files (do not auto-delete; flag for review)
    remote_only = [path for path in remote_map if path not in local_map]

    # Transfer
    for file in to_upload:
        upload_versioned(file, versions_to_keep=VERSIONS_TO_KEEP)

    # Flag
    if remote_only:
        log(f"Remote-only files detected: {remote_only}")

    # Verify counts
    return summary
```

## Versioning

Each upload writes a new version of the file. AGY labels versions by timestamp. The oldest versions beyond `VERSIONS_TO_KEEP` are pruned.

## Conflict Resolution

Local always wins. If the remote was modified externally (which should not happen because sync is one-way), AGY overwrites with the local version on next sync and logs the conflict.

## Verification

Daily verification:

- Compare MD5 of each local file with the MD5 of the latest remote version.
- Report mismatches.
- If local is correct, force re-upload.

## Error Handling

| Error | Action |
|---|---|
| 401 Unauthorized | Refresh token. If refresh fails, stop sync, notify Hermes. |
| 403 Forbidden / Quota Exceeded | Stop sync, notify Hermes with the error message. |
| 429 Rate Limited | Back off. Resume on next interval. |
| 5xx Server Error | Back off with exponential delay. Max 5 retries per file. |
| Network error | Back off. Resume on next interval. |

After persistent failure (max retries across an hour), AGY writes a critical entry to `Backup Log.md` and notifies Hermes.

## Logging

Every sync run appends one row to `4.0AGY/MEMORY/Backup Log.md`:

```
| 2026-07-01T14:30:00 | incremental | 12 | 245678 | 0 | 8.4 |
```

Sync start and end also written to the script's stdout (captured by the agent runtime).

## Restore Procedure

```
restore(drive_folder, target_dir, point_in_time):
    # Verify target is not the live vault
    if target_dir is live_vault:
        raise ValueError("Cannot restore into live vault")

    # Confirm with user
    confirm = await user.confirm(...)
    if not confirm:
        return

    # List versions closest to point_in_time
    versions = list_versions(drive_folder, before=point_in_time)

    # Download and assemble
    for path, version in versions:
        download(path, version, target_dir / path)

    # Verify
    verify_restore(target_dir, drive_folder, point_in_time)
```

## Testing the Sync

AGY tests the sync:

- **After implementation.** Run a full sync to a sandbox folder. Verify counts and checksums.
- **Weekly.** Run a verify-only cycle. Report results to Backup Log.
- **After any config change.** Run a verify cycle.

## Implementation Notes

AGY uses:

- Python with `google-api-python-client` and `google-auth`.
- The script lives at `4.0AGY/SOLO-PROJECTS/google-drive-sync/sync.py`.
- Tests live at `4.0AGY/SOLO-PROJECTS/google-drive-sync/tests/`.
- Mavis reviews the script before first run.

## See Also

- AGY's role: [[../AGENT]]
- Backup protocol: [[../RULES/Backup Protocol]]
- Backup log: [[../MEMORY/Backup Log]]
- AGY memory: [[../MEMORY/AGY Memory]]