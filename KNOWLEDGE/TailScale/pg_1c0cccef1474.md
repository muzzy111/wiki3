# Deployment checklist

Last validated Jan 5, 2026

There are a number of topics to consider for a successful and scalable Tailscale deployment beyond configuration of individual devices and [access controls][kb-access-control]. This topic details some of the less obvious, but still important, concerns for using and deploying Tailscale at scale. You can use this topic as your Tailscale deployment checklist.

## Support

* **Internal support**—provide documentation to your users on how to get internal support within your organization. Refer to [end-user client configuration][ar-end-user-client-configuration] for ways to customize the Tailscale client to help with this.
* **Tailscale support**—document how and when to [contact Tailscale support][co-contact-support] in internal documentation. Also include relevant departments (for example, IT help desk or production operations teams) and instructions to ask end-users to generate a [bug report][kb-bug-report] when reporting issues internally and share the bug report identifier when contacting Tailscale support.

## Stay up-to-date on Tailscale news

* Subscribe to the Tailscale [newsletter][xt-newsletter] and [blog][bl-blog-newsletter] to stay up-to-date on general Tailscale news. Use email addresses that go to a group of users rather than a single individual.
* Subscribe to the Tailscale [changelog][co-changelog] RSS feed to stay up-to-date on client and service changes.
* Subscribe to the Tailscale [security bulletins][co-security-bulletins] RSS feed to stay up-to-date on security notifications.

### Organization notifications

* Set [contact preferences](https://login.tailscale.com/admin/settings/contact-preferences) to receive email notifications regarding account, configuration, and security updates. Use email addresses that go to a group of users rather than a single individual.

## Production best practices

* Understand how Tailscale and customers [share security responsibilities][kb-shared-responsibility].
* Implement [production best practices][kb-production-best-practices] related to [security][kb-security-hardening], [performance][kb-performance-best-practices], and specific providers.
* Understand [direct vs relayed connections][kb-connection-types] and which [firewall ports to open][kb-firewall-ports], if any, to get the best performance from in your environment.

## Tailnet management

The following sections detail how to manage your Tailscale network (known as a tailnet) at scale.

### General settings

* Configure [tailnet](https://login.tailscale.com/admin/settings/general), [user management](https://login.tailscale.com/admin/settings/user-management), and [device management](https://login.tailscale.com/admin/settings/device-management) settings per your organization's needs and security policies.
* Manage your tailnet settings (such as device approval and key duration, DNS settings, log streaming and posture integrations, and more) with [infrastructure-as-code][kb-infrastructure-as-code] and [GitOps][kb-gitops-acls] to have an audit trail of changes to Tailscale access controls and configuration in your version control system with peer review of changes.

### Tailnet policy file management

* Manage your tailnet policy file (which includes access control policies, tags, and other settings) with [infrastructure-as-code][kb-infrastructure-as-code] and [GitOps][kb-gitops-acls]. This provides an audit trail of changes to Tailscale access controls and configuration in your version control system with peer review of changes.
* Review [common patterns for tag names][kb-tags-common-tag-names] and implement consistent tags that represent access patterns and network segments for your devices.

## User management

The following sections detail how to manage users in your tailnet at scale, including user provisioning, role assignments, and authentication requirements.

### User and group provisioning

* Configure [System for Cross-domain Identity Management (SCIM)][ln-what-is-scim] with a supported provider to enable automatic [user and group provisioning][kb-user-group-provisioning].

### Tailscale-specific roles

* Transfer organization [ownership][kb-user-roles-owner] to an appropriate team member. Oftentimes, the person that created the tailnet is not who should be the owner long-term.
* Assign appropriate [Tailscale-specific roles][kb-user-roles] to team members based on their job function and responsibilities. Network admin, IT admin, and billing admin are common roles to assign.

## Device management

* Set a [custom authentication period][kb-key-expiry-custom-auth-period] to require users to re-authenticate with your identity provider per your company's security policies.
* Enable [device identity collection][kb-device-identity] to accurately identify devices in your tailnet.
* Set [default source posture rules][kb-device-posture-default-source-posture] to require minimum operating system and Tailscale client versions.

### EDR and MDM integrations

* Configure Tailscale with your [EDR and MDM tool][kb-device-posture-edr-and-mdm-integrations].
* Define [device posture conditions][kb-device-posture-conditions] based on the node attributes available from your EDR and MDM tools.

### End-user client configuration

* Deploy Tailscale client applications to end-users using a [mobile device management (MDM)][kb-mdm] solution.
* Enable [automatic client updates][kb-update-auto-updates] for end-user devices to ensure employee devices stay up-to-date.
* Configure end-user client applications using [system policies][kb-mdm-keys] through your MDM solution. Review the full list of system policies to determine which options are important to your organization. Some common system policies include:
  * Force client behavior end-users will depend on:
    * [`UseTailscaleDNSSettings`][kb-mdm-keys-use-tailscale-dns] to always or never apply Tailscale DNS configuration when the tunnel is connected.
    * [`UseTailscaleSubnets`][kb-mdm-keys-use-tailscale-subnets] to always or never accept subnets advertised by other devices in your tailnet.
    * [`PostureChecking`][kb-mdm-keys-posture-checking] to always or never gather device posture data.
  * Hide unused capabilities in the client menu such as:
    * [`AdminConsole`][kb-mdm-keys-hide-menu-item] to show or hide the Tailscale admin console menu.
    * [`HiddenNetworkDevices`][kb-mdm-keys-hide-network-devices] to show or hide one or more categories of devices in the **Network Devices** menu.
    * [`ManageTailnetLock`][kb-mdm-keys-tailnet-lock-settings] to show or hide the **Manage Tailnet Lock** menu.
    * [`RunExitNode`][kb-mdm-keys-exit-node-picker] to show or hide the **Run as Exit Node** menu.
  * Provide information for how to get support from Tailscale administrators or your IT team:
    * [`ManagedByCaption`][kb-mdm-keys-info-message] to specify a caption to be displayed in the **Managed By** section.
    * [`ManagedByOrganizationName`][kb-mdm-keys-org-name] to specify the name of the organization managing Tailscale, for instance "XYZ Corp IT."
    * [`ManagedByURL`][kb-mdm-keys-support-url] to specify a URL pointing to a help desk webpage or Slack channel.

### Server configuration

* Automate server deployments using [infrastructure-as-code][kb-infrastructure-as-code] to provision devices in a repeatable manner less susceptible to human error.

## Monitoring

### Client metrics

* Collect [client metrics][kb-client-metriccs] for use with your monitoring system from your subnet routers, exit nodes, app connectors, and other important devices.

### Monitor tailnet changes

* Configure [webhooks][kb-webhooks] to receive important notifications to your central monitoring and alerting system—for example, your monitoring service or Slack. In particular, we recommend notifications for the following [event types][kb-webhooks-events]:
  * Device misconfiguration: `exitNodeIPForwardingNotEnabled`
  * Device misconfiguration: `subnetIPForwardingNotEnabled`
  * Tailnet management: `nodeNeedsApproval`
  * Tailnet management: `userNeedsApproval`
  * Tailnet management: `userRoleUpdated`
  * Webhook management: `webhookUpdated`
  * Webhook management: `webhookDeleted`

### Log streaming

* Configure [log streaming][kb-log-streaming] to stream configuration and network flow logs to your [Security Information and Event Management (SIEM)][ln-siem] system.
* Configure data retention of logs in your SIEM per your company's security policies.
* Configure alerts in your SIEM to notify you of noteworthy events. In particular, we recommend alerts for events related to settings changed through the Tailscale admin console:

  ```json
  // Other fields omitted for brevity
  {
    "action": "CREATE",
    "origin": "ADMIN_CONSOLE",
    // ...
  },
  {
    "action": "UPDATE",
    "origin": "ADMIN_CONSOLE",
    // ...
  },
  {
    "action": "DELETE",
    "origin": "ADMIN_CONSOLE",
    // ...
  },
  ```

  \[Missing snippet: visual\_policy\_editor.mdx]

[ar-end-user-client-configuration]: #end-user-client-configuration

[bl-blog-newsletter]: /blog#blog-newsletter

[co-changelog]: /changelog

[co-contact-support]: /contact/support

[co-security-bulletins]: /security-bulletins

[kb-access-control]: /docs/features/access-control

[kb-bug-report]: /docs/account/bug-report

[kb-client-metriccs]: /docs/reference/tailscale-client-metrics

[kb-connection-types]: /docs/reference/connection-types

[kb-device-identity]: /docs/features/access-control/device-management/how-to/manage-identity

[kb-device-posture-conditions]: /docs/features/device-posture#device-posture-conditions

[kb-device-posture-default-source-posture]: /docs/features/device-posture#default-source-posture

[kb-device-posture-edr-and-mdm-integrations]: /docs/features/device-posture#edr-and-mdm-integrations

[kb-firewall-ports]: /docs/reference/faq/firewall-ports

[kb-gitops-acls]: /docs/gitops

[kb-infrastructure-as-code]: /docs/integration-infrastructure-as-code

[kb-key-expiry-custom-auth-period]: /docs/features/access-control/key-expiry#setting-a-custom-authentication-period

[kb-log-streaming]: /docs/features/logging/log-streaming

[kb-mdm-keys-exit-node-picker]: /docs/features/tailscale-system-policies#hide-the-exit-node-picker

[kb-mdm-keys-hide-menu-item]: /docs/features/tailscale-system-policies#hide-the-admin-console-menu-item

[kb-mdm-keys-hide-network-devices]: /docs/features/tailscale-system-policies#hide-network-devices

[kb-mdm-keys-info-message]: /docs/features/tailscale-system-policies#set-an-info-message

[kb-mdm-keys-org-name]: /docs/features/tailscale-system-policies#set-your-organization-name

[kb-mdm-keys-posture-checking]: /docs/features/tailscale-system-policies#enable-gathering-device-posture-data

[kb-mdm-keys-support-url]: /docs/features/tailscale-system-policies#set-a-support-url

[kb-mdm-keys-tailnet-lock-settings]: /docs/features/tailscale-system-policies#hide-the-tailnet-lock-settings

[kb-mdm-keys-use-tailscale-dns]: /docs/features/tailscale-system-policies#set-whether-the-device-uses-tailscale-dns-settings

[kb-mdm-keys-use-tailscale-subnets]: /docs/features/tailscale-system-policies#set-whether-the-device-accepts-tailscale-subnets

[kb-mdm-keys]: /docs/features/tailscale-system-policies

[kb-mdm]: /docs/mdm

[kb-performance-best-practices]: /docs/reference/best-practices/performance

[kb-production-best-practices]: /docs/reference/best-practices/production

[kb-security-hardening]: /docs/reference/best-practices/security

[kb-shared-responsibility]: /docs/concepts/shared-responsibility

[kb-tags-common-tag-names]: /docs/features/tags#common-patterns-for-tag-names

[kb-update-auto-updates]: /docs/features/client/update#auto-updates

[kb-user-group-provisioning]: /docs/features/user-group-provisioning

[kb-user-roles-owner]: /docs/reference/user-roles#owner

[kb-user-roles]: /docs/reference/user-roles

[kb-webhooks-events]: /docs/features/webhooks#events

[kb-webhooks]: /docs/features/webhooks

[ln-siem]: /learn/security-information-and-event-management

[ln-what-is-scim]: /learn/what-is-scim

[xt-newsletter]: https://info.tailscale.com/tailscale-newsletter-sign-up
