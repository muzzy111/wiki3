# Device posture management

Last validated Jun 24, 2026

Device posture is a mechanism to measure how secure or trustworthy a device is. With Tailscale you can collect device attributes and use them as part of connectivity rules within your Tailscale network (known as a tailnet). You can use these rules to limit access for devices in your tailnet that do not meet security requirements.

Device attributes include pre-populated host information such as operating system version, as well as custom attributes from endpoint detection and response tools.

Benefits of device posture include:

* **Enhanced security**—reduce risks from compromised or non-compliant devices by verifying the device security state and configuration before granting tailnet access.
* **Context-aware access controls**—limit access to critical applications and tailnet resources based on the state of a device; providing elevated access for high-compliance devices or completely blocking access for non-compliant devices.
* **Continuous verification**—ongoing assessment of device health and compliance enables adaptive access controls.

## Usage by plan

Your Tailscale pricing plan determines which device posture configurations you are entitled to use.

| **Attribute types**                              | **Plan**                      |
| ------------------------------------------------ | ----------------------------- |
| Default                                          | All plans                     |
| Third-party integration attributes (MDM and EDR) | Standard, Premium, Enterprise |
| Geolocation                                      | Standard, Premium, Enterprise |
| Custom                                           | Premium, Enterprise           |

For more information, refer to our [Pricing][co-pricing] page.

## Use cases

* **Remote work security**—ensure employees' devices meet security standards before accessing company resources.
* **Bring your own device (BYOD)**—safely enable BYOD with tiered access to applications and tailnet resources for un-managed and managed devices with device state incorporated.
* **Move toward Zero Trust**—help your organization achieve [Zero Trust][kb-zero-trust] with micro-segmentation, least-privileged access, continuous verification, and adaptive policy.

## How it works

### Authorize device API

If you have an endpoint device posture solution, you may already know which machines in your tailnet do and do not meet your device posture requirements.

One approach to ensuring devices on your network comply with your device posture policy is to use the [Authorize device API][co-api-authorize-device]. This lets you only authorize devices that meet your requirements, de-authorize devices that do not meet your requirements, by temporarily disabling tailnet access until you determine that their posture has been resolved, at which point you can re-authorize the devices.

## Device posture attributes

Device posture attributes are key-value pairs of data attached to devices that you can either read and write for your own use, or use in posture access rules. These attributes are in namespaces. For example, the attribute key `node:os` is in the `node` namespace, and the key `custom:myAttribute` is in the `custom` namespace. Attribute values can be one of three different types: strings, numbers, or Boolean values.

Posture attributes bring together data from several different sources all in one place:

* Host information reported by devices, such as OS version and Tailscale version in the `node` namespace.
* Information about client devices that is collected by Tailscale control plane, such as geolocation data for the public IP of a device in the `ip` namespace.
* Custom posture attributes set by you, or software you have integrated with our API, in the `custom` namespace. Custom attributes can also be assigned automatically when a device is provisioned through [device provisioning with OAuth apps][kb-device-provisioning].
* Attributes set by device posture integrations like [CrowdStrike Falcon][kb-crowdstrike] and [others][ar-edr-mdm-integrations].

> **Note:**
>
> Posture attributes are distinct from `nodeAttrs`. The existing `nodeAttrs` are set as flags only, not as key-value pairs.

The following posture attributes are currently available by default, for use in access rule postures, and using the node attribute API:

| **Attribute key**       | **Description**                                                                       | **Allowed values**                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `node:os`               | The operating system the device is running                                            | `macos`, `windows`, `linux`, `ios`, `android`, `freebsd`, `openbsd`, `illumos`, `js` |
| `node:osVersion`        | The version of the operating system                                                   | A version as a quoted string                                                         |
| `node:tsAutoUpdate`     | Whether the Tailscale client is configured for [auto-updates][kb-update-auto-updates] | `true`, `false`                                                                      |
| `node:tsReleaseTrack`   | The release track of the Tailscale client                                             | `stable`, `unstable`                                                                 |
| `node:tsStateEncrypted` | Whether the Tailscale client state is encrypted at rest                               | `true`, `false`                                                                      |
| `node:tsVersion`        | The version of Tailscale the client is running                                        | A version as a quoted string                                                         |

[kb-update-auto-updates]: /docs/features/client/update#auto-updates

> **Note:**
>
> The `node:tsAutoUpdate` attribute is only set to `true` when Tailscale's built-in [auto-update][kb-update-auto-updates] is enabled. It is set to `false` when Tailscale is updated using an external mechanism, such as the Apple App Store or Google Play Store.

The Tailscale control plane also provides device posture attributes with geolocation data.

| **Attribute key**  | **Description**                                                              | **Allowed values**                                                    |
| ------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `ip:country`       | Country associated with the node's public IP address                         | Uppercase two-letter country code defined in [ISO 3166-1][xt-iso3166] |
| `ip:publicAddress` | Public IP address used by the node to connect to the Tailscale control plane | IP address in IPv4 or IPv6 format                                     |

[xt-iso3166]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

> **Note:** The \`ip:publicAddress\` device posture attribute is currently in beta.

> **Note:**
>
> The `ip:publicAddress` device posture attribute can be used with the `IN`, `NOT IN`, `==`, and `!=` operators. Allowed values for comparison are a single IPv4 or IPv6 address, IP subnets (CIDRs), or an [IP set][kb-ip-set].

A machine's attributes and respective values are visible in the **Machine Details** page for each device in your tailnet.

![Attributes for each device are visible in the Machine Details page.](features/device-posture/machine-details-attrs.png)

### Examples

The following examples demonstrate the formatting to use for each type of attribute key.

| **Attribute key**     | **Example**                              |
| --------------------- | ---------------------------------------- |
| `ip:country`          | `ip:country IN ['CA', 'US', 'GB', 'NL']` |
| `ip:publicAddress`    | `ip:publicAddress IN ['203.0.113.0/24']` |
| `node:os`             | `node:os IN ['macos', 'linux']`          |
| `node:osVersion`      | `node:osVersion == '13.4.0'`             |
| `node:tsAutoUpdate`   | `node:tsAutoUpdate == true`              |
| `node:tsReleaseTrack` | `node:tsReleaseTrack == 'stable'`        |
| `node:tsVersion`      | `node:tsVersion >= '1.42.2'`             |
| `custom:attr`         | `custom:attr IS SET`                     |

## Device posture conditions

Postures and posture conditions let you create automated network [access control rules][kb-access-control] based on device posture.

A posture is a set of assertions based on device posture attributes. For example, you might specify that the operating system needs to be newer than a particular version.

Posture conditions are a feature for [access rules][kb-policy-syntax-acls], allowing you to make them conditional on device posture in addition to source, destination, and protocol. This lets you write flexible and fine-grained access controls for your tailnet.

You can use posture conditions to create basic rules, such as denying all access to devices that don't meet your posture requirements, or you can control access with far more granularity. For example, you can require devices to meet stricter security requirements to connect to production. Or you can disallow access to most of your corporate network for devices that don't meet your posture requirements, but still allow them to reach the IT help desk.

### Postures

A posture is a set of assertions made about posture attributes and only apply to devices initiating the connection. Each posture must start with `posture:` followed by a name, and a set of posture attributes and their values, given as a list of strings.

```json
"postures": {
  "posture:latestMac": [
    "node:os IN ['macos', 'linux']",
    "node:tsReleaseTrack == 'stable'",
    "node:tsVersion >= '1.40'",
  ],
},
```

\[Missing snippet: visual\_policy\_editor.mdx]

Currently supported operators:

* `==`
* `!=`
* `IN`
* `NOT IN`
* `IS SET`
* `NOT SET`
* `<`, `<=`, `>=`, `>` (only for numbers and version attributes: `node:osVersion` and `node:tsVersion`)

Versions are compared using [a compare function][xt-gh-tailscale-cmpver] which will take into account versions with both numeric and non-numeric fields.

For a posture to match a device, all posture attribute values must be met. In the above example:

* The operating system must be macOS or Linux
* The devices must use the stable release version of the Tailscale client
* Tailscale client version must be 1.40 or later

Posture conditions can be made against any posture attributes, default and custom.

If an attribute defined in the posture is unset for a particular device, the posture will not match that device, irrespective of the operator used. For example, a device that does not have the `custom:tier` attribute assigned to it, will not match a posture that includes an attribute `custom:tier`, even if that condition is negative (for example, `custom:tier != 'prod'`).

You can create multiple postures in one policy file:

```json
"postures": {
  "posture:latestMac": [
    "node:os == 'macos'",
    "node:osVersion == '13.4.0'",
    "node:tsReleaseTrack == 'stable'",
  ],
  "posture:anyMac": [
    "node:os == 'macos'",
    "node:tsReleaseTrack == 'stable'",
  ],
},
```

\[Missing snippet: visual\_policy\_editor.mdx]

### Posture conditions

A posture condition is an extension to the existing tailnet policy file syntax, allowing you to define access rules dependent on device posture:

```json
"grants": [
  {
    // Only requirement to access development servers is Mac + stable Tailscale
    "src": ["autogroup:member"],
    "dst": ["tag:development"],
    "ip": ["*"],
    "srcPosture": ["posture:anyMac"]
  },
  {
    // Only devs can access production
    // and production access requires macOS is also up to date
    "src": ["group:dev"],
    "dst": ["tag:production"],
    "ip": ["*"],
    "srcPosture": ["posture:latestMac"]
  }
]
```

\[Missing snippet: visual\_policy\_editor.mdx]

Access rules can require that any of a list of postures is required for access to be permitted:

```json
"grants": [
  {
    "src": ["group:dev"],
    "dst": ["tag:production"],
    "ip": ["*"],
    "srcPosture": ["posture:approvedMacs", "posture:approvedWindows", "posture:approvedLinux"]
  }
]
```

\[Missing snippet: visual\_policy\_editor.mdx]

In this example, access is permitted to production if the connecting device meets any of the three specified postures.

> **Warning:**
>
> `srcPosture` conditions only apply to traffic originating from Tailscale nodes within the same network, since only those devices have attribute values that can be evaluated against a defined posture. Shared nodes and devices behind [subnet routers][kb-subnets] will not have their traffic restricted based on postures, and will be permitted access if they match IP-based conditions (`src`, `dst`, `proto`).

### Default source posture

If you want to apply a baseline posture that applies to all of your access rules, you can set a default source posture:

```json
"defaultSrcPosture": [
  "posture:basicWindows",
  "posture:basicMac",
  "posture:basicLinux",
],
```

\[Missing snippet: visual\_policy\_editor.mdx]

As with `srcPosture` in access rules, this permits access if any of the supplied postures are met.

If a default source posture is set, it will apply to any access rules that do not have a posture condition. Note that it is not additive, meaning if an access rule specifies a posture condition, only that condition will apply, and the default source posture condition will no longer apply. This can be used to create an access rule that is more permissive than the default:

```json
"grants": [
  {
    // defaultSrcPosture applies to this rule
    "src": ["autogroup:member"],
    "dst": ["tag:intranet"],
    "ip": ["*"]
  },
  {
    "src": ["group:dev", "group:sre"],
    "dst": ["tag:production"],
    "ip": ["*"],
    // This posture condition is instead of, not in addition to, the default source posture
    "srcPosture": ["posture:prodWin", "posture:prodMac"]
  }
]
```

\[Missing snippet: visual\_policy\_editor.mdx]

> **Warning:**
>
> `defaultSrcPosture` conditions only apply to traffic originating from Tailscale nodes within the same network, since only those devices have attribute values that can be evaluated against a defined posture. Shared nodes and devices behind [subnet routers][kb-subnets] will not have their traffic restricted based on postures, and will be permitted access if they match IP-based conditions (`src`, `dst`, `proto`).

### Tailscale SSH and Posture Conditions

Connections created with the [Tailscale SSH Console][kb-tailscale-ssh-console] are also subject to posture condition restrictions. To allow these connections, you can allow the posture condition `node:os == 'js'`.

### Shared Nodes and Posture Conditions

Posture conditions specified with `srcPosture` and `defaultSrcPosture` are only applied to `src` devices within your tailnet. If you use Tailscale's [node sharing][kb-sharing] to grant access to a device to a user outside of your tailnet, that user's device can connect regardless of their posture.

If you want your posture conditions to apply to external users, consider [inviting them to your tailnet][kb-invite-any-user].

## Check device posture status

Within the Tailscale admin console, you can check the device posture status for any machine in your network.

To check the device posture status:

1. Open the [Machines](https://login.tailscale.com/admin/machines) page of the admin console.
2. Find the machine whose certificate status you want to check. You can use the [search bar][kb-filter-devices-search-bar] or [filters][kb-filter-devices] to find a machine.
3. Select the machine.
4. Check the device posture status in the **postures** section of the machine page.

If a machine is not passing a posture, hover over the shield icon to check which posture assertions it is failing.

## EDR and MDM integrations

Integrate your endpoint detection and response (EDR) and mobile device management (MDM) tools with Tailscale's device posture management capabilities:

* [CrowdStrike Falcon][kb-edr-crowdstrike-falcon]
* [SentinelOne][kb-edr-sentinelone]
* [1Password XAM][kb-edr-1password-xam]
* [Fleet][kb-mdm-fleet]
* [Huntress][kb-mdm-huntress]
* [Iru][kb-mdm-kandji] (formerly Kandji)
* [Jamf Pro][kb-mdm-jamf-pro]
* [Microsoft Intune][kb-mdm-microsoft-intune]

[kb-edr-1password-xam]: /docs/integrations/kolide

[kb-edr-crowdstrike-falcon]: /docs/integrations/crowdstrike-zta

[kb-edr-sentinelone]: /docs/integrations/sentinelone

[kb-mdm-fleet]: /docs/integrations/fleet

[kb-mdm-huntress]: /docs/integrations/huntress

[kb-mdm-jamf-pro]: /docs/integrations/jamf-pro

[kb-mdm-kandji]: /docs/integrations/iru

[kb-mdm-microsoft-intune]: /docs/integrations/mdm/intune

## Posture attributes API

Information about device posture attributes API is available in our [API documentation][co-api-get-device-posture-attrs].

## Audit log events

The following [audit log events][kb-audit-logging-events] are added for device posture.

| **Target** | **Action**            | **Description**                                   |
| ---------- | --------------------- | ------------------------------------------------- |
| Node       | Update node attribute | Device posture attributes for a node were changed |

> **Note:**
>
> Changes to built-in attributes (the ones in `node` and `ip` namespaces) are only logged if an attribute is referenced by any of the postures used in the policy file. Changes to custom attributes and third-party attributes from device posture integrations are always logged.

[ar-edr-mdm-integrations]: #edr-and-mdm-integrations

[co-api-authorize-device]: /api#tag/devices/POST/device/%7BdeviceId%7D/authorized

[co-api-get-device-posture-attrs]: /api#tag/devices/GET/device/%7BdeviceId%7D/attributes

[co-pricing]: /pricing

[kb-access-control]: /docs/features/access-control

[kb-audit-logging-events]: /docs/features/logging/audit-logging#events

[kb-crowdstrike]: /docs/integrations/crowdstrike-zta

[kb-device-provisioning]: /docs/features/oauth-apps/device-provisioning

[kb-filter-devices-search-bar]: /docs/features/access-control/device-management/how-to/filter#filter-with-the-search-bar

[kb-filter-devices]: /docs/features/access-control/device-management/how-to/filter

[kb-invite-any-user]: /docs/features/sharing/how-to/invite-any-user

[kb-ip-set]: /docs/features/tailnet-policy-file/ip-sets

[kb-policy-syntax-acls]: /docs/reference/syntax/policy-file#acls

[kb-sharing]: /docs/features/sharing

[kb-subnets]: /docs/features/subnet-routers

[kb-tailscale-ssh-console]: /docs/features/tailscale-ssh/tailscale-ssh-console

[kb-update-auto-updates]: /docs/features/client/update#auto-updates

[kb-zero-trust]: /docs/concepts/zero-trust

[xt-gh-tailscale-cmpver]: https://github.com/tailscale/tailscale/blob/main/util/cmpver/version.go
