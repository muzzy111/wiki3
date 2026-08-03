# System Architecture Request: Local Terminal Web-Bridge

**Context:** 
I am building a knowledge operating system inside Obsidian. Obsidian Canvas runs on a Chromium web view layer, which means native Win32 processes cannot be embedded directly. We are bypassing this limitation by using `ttyd` to serve local PowerShell instances over HTTP, which will then be embedded into the Obsidian Canvas as interactive iframe nodes.

**Task:**
Engineer an automated deployment and background service layer for a 4-node terminal bridge on Windows.

**Requirements:**
1. **Acquisition:** Write a PowerShell script that securely downloads the latest Windows release of `ttyd` (from its official GitHub repository) into a dedicated local binaries folder (e.g., `C:\LocalServices\ttyd`).
2. **Service Orchestration:** Create a robust launch script (`Start-TerminalBridge.ps1`) that spawns four isolated background processes of `ttyd`. 
3. **Port Mapping:** The script must bind these instances to four sequential ports (7681, 7682, 7683, 7684).
4. **Target Process:** Each `ttyd` instance must execute `powershell.exe`.
5. **Headless Execution:** The launch script must execute silently in the background without leaving hanging terminal windows on the desktop. Include a corresponding `Stop-TerminalBridge.ps1` to cleanly kill these specific processes when necessary.

Deliver the code required to deploy this architecture immediately.
