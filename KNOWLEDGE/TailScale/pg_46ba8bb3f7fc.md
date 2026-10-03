# Inviting users vs sharing a device

Last validated Jan 5, 2026

Tailscale offers two ways to share access to devices and services:

* [Invite someone to your Tailscale network (known as a tailnet)][ar-inviting-a-user].
* [Give someone in another tailnet access to a device within your tailnet][ar-sharing-a-device].

Both options have pros and cons, and each works best for certain scenarios. Review the following sections to understand each option.

## Inviting a user

You can share access to the devices and resources in your tailnet by [inviting another user][kb-invite-any-user]. An invited user can access any device or service in your tailnet by default. You can control what they can access using [access controls][kb-access-control]. For example, you could invite a user and restrict their access to a few devices.

When inviting someone, you must choose their [role][kb-user-roles]. The role you choose determines what they can and cannot do within your tailnet. For example, you could make them a [Member][kb-user-roles-members] and allow them to access devices and services (as specified by access controls) but not the admin console.

Inviting a user is best when you're sharing more than few devices, especially if the user needs to have access to new devices as they get added to your tailnet. Inviting a user also lets you change what they have access to over time without having to share and revoke access to individual devices each time.

The following table lists the pros and cons of inviting a user (instead of sharing a device).

| **Pros**                                                             | **Cons**                                  |
| -------------------------------------------------------------------- | ----------------------------------------- |
| User can access the entire tailnet (limited by access controls).     | Increases the user count of your tailnet. |
| You can configure access control policies for the user.              |                                           |
| You can select the user's role.                                      |                                           |
| User can access devices behind [subnet routers][kb-subnets].         |                                           |
| User can use Tailscale features like (like [Taildrop][kb-taildrop]). |                                           |
| User can add devices to the tailnet.                                 |                                           |

## Sharing a device

You can [share a device][kb-sharing] with people outside your tailnet without exposing it to the public internet. After you share a device with another Tailscale user, the device appears in their tailnet like any other device, including in the [Machines](https://login.tailscale.com/admin/machines) page of the admin console. Only the people you shared the device with will be able to access it, even if they are in the same tailnet.

Note that both your tailnet and theirs must have [access controls][kb-access-control] that allow connections to the shared device. The default tailnet policy file permits this, but if either tailnet has a custom [policy file][kb-terminology-policy-file], you must ensure it grants access to the shared device.

Sharing a device is best when you're sharing a fixed number of devices and the user doesn't need access to all Tailscale's functionality.

The following table lists the pros and cons of sharing a device (instead of inviting a user).

| **Pros**                                                           | **Cons**                                                          |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| User can access one or a small fixed number of devices.            | Can't access devices behind [subnet routers][kb-subnets].         |
| User can access the device while connected to a different tailnet. | Can't use Tailscale features like (like [Taildrop][kb-taildrop]). |
| Doesn't increase the user count of your tailnet.                   | Can't add new devices.                                            |
|                                                                    | Can't create access control policies for the user.                |

[ar-inviting-a-user]: #inviting-a-user

[ar-sharing-a-device]: #sharing-a-device

[kb-access-control]: /docs/features/access-control

[kb-invite-any-user]: /docs/features/sharing/how-to/invite-any-user

[kb-sharing]: /docs/features/sharing

[kb-subnets]: /docs/features/subnet-routers

[kb-taildrop]: /docs/features/taildrop

[kb-terminology-policy-file]: /docs/reference/glossary#tailnet-policy-file

[kb-user-roles-members]: /docs/reference/user-roles#member

[kb-user-roles]: /docs/reference/user-roles
