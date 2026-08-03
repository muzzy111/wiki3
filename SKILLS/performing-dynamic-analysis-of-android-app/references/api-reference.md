---
name: Document design
description: This skill should be used when the user asks to "create a proposal", "design a report", "make a one-pager", "build a PDF", "create a newsletter", "design slides", "make event materials", "design a flyer", or needs help with print-ready HTML documents. Provides brand configuration, CSS patterns for print layout, and document design best practices.
version: 1.0.0
tags:
  - brand
  - content
  - footer
  - config
---

# API Reference — Performing Dynamic Analysis of Android App

## [[Libraries]] Used
- **frida**: Dynamic instrumentation for runtime hooking and SSL pinning detection
- **subprocess**: [[ADB commands]] for package management, traffic capture, component analysis

## CLI Interface

```
python agent.py [--device <id>] packages
python agent.py [--device <id>] ssl --package <pkg>
python agent.py [--device <id>] components --package <pkg>
python agent.py [--device <id>] storage --package <pkg>
python agent.py [--device <id>] network [--duration 30]
```

## Core Functions

### `check_ssl_pinning(package_name, device_id)`
Uses Frida to hook TrustManagerImpl and OkHostnameVerifier to detect SSL pinning.

### `analyze_exported_components(package_name, device_id)`
Runs `dumpsys package` to enumerate exported activities, services, receivers, providers.

### `check_data_storage(package_name, device_id)`
Checks shared_prefs and world-readable files via `run-as` for insecure storage.

### `capture_network_traffic(device_id, duration, output)`
Runs `tcpdump` on device and pulls pcap via ADB.

## Frida API Calls
- `frida.get_usb_device()` — Connect to USB device
- `device.spawn([package])` — Launch app
- `session.create_script(js)` — Inject JavaScript
- `script.on("message", callback)` — Receive hook results

## Dependencies
```
pip install frida frida-tools
# ADB must be installed and device connected
```
