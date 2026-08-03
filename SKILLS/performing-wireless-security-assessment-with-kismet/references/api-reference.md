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

# API Reference: Wireless Security Assessment with Kismet

## Kismet REST API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/session/check_login` | POST | Authenticate with username/password |
| `/system/[[status]].json` | GET | Server [[status]] and statistics |
| `/devices/summary/devices.json` | POST | Query devices with field selection |
| `/devices/by-key/{key}/device.json` | GET | Get single device details |
| `/phy/phy80211/ssids/views/ssids.json` | GET | All detected SSIDs |
| `/alerts/all_alerts.json` | GET | All Kismet alerts |
| `/datasource/list_interfaces.json` | GET | Available capture interfaces |

## Device Fields

| Field | Description |
|-------|-------------|
| `kismet.device.base.macaddr` | Device MAC address |
| `kismet.device.base.name` | SSID or device name |
| `kismet.device.base.type` | `Wi-Fi AP`, `Wi-Fi Client`, etc. |
| `kismet.device.base.manuf` | Manufacturer (OUI lookup) |
| `kismet.device.base.channel` | Operating channel |
| `kismet.device.base.crypt` | Encryption type |
| `kismet.device.base.signal` | Signal strength data |
| `kismet.device.base.first_time` | First seen timestamp |
| `kismet.device.base.last_time` | Last seen timestamp |

## [[Authentication]]

| Method | Header/Cookie |
|--------|--------------|
| API Key | `Cookie: KISMET=<api_key>` |
| Login | POST `/session/check_login` with JSON `{username, password}` |

## Kismet CLI

| Command | Description |
|---------|-------------|
| `kismet -c wlan0` | Start Kismet with capture source |
| `kismet --override wardrive` | Use wardrive configuration |
| `kismet_cap_linux_wifi` | Linux Wi-Fi capture helper |

## Python [[Libraries]]

| Library | Version | Purpose |
|---------|---------|---------|
| `requests` | >=2.28 | Kismet REST API client |
| `json` | stdlib | Parse API responses |

## References

- Kismet Documentation: https://www.kismetwireless.net/docs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/intro/kismet/
- Kismet REST API: https://www.kismetwireless.net/docs/api/rest_api/
- Kismet GitHub: https://github.com/kismetwireless/kismet
