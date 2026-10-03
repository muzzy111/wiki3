# Grants

Last validated May 29, 2025

Grants are Tailscale's enhanced [access control][kb-access-control] system that combines [network layer][ar-network-capabilities] and [application layer][ar-application-capabilities] permissions into a unified framework. Grants let you precisely define what resources each user or device can access and which actions they can perform after connecting. They follow Tailscale's deny-by-default approach, aligned with [zero trust][kb-zero-trust] and [least privilege][ln-principle-of-least-privilege] principles.

> **Note:**
>
> Grants can do everything ACLs can, plus they facilitate application-level permissions and route filtering. Refer to [grants vs. ACLs][kb-grants-vs-acls].

Ready to get started? Check out the [get started guide][kb-start] or, if you've been using ACLs, the [migration guide][kb-grants-migration].

## Benefits and use cases

Grants offer significant advantages over traditional access control methods by unifying network and application permissions in a single system. This consolidated approach reduces complexity and provides a more consistent security model across your entire tailnet. With grants, you can:

* Define the hosts a device can connect to and the permissions it holds with applications running on the hosts after it connects.
* Implement fine-grained permissions based on [user roles][kb-user-roles], [device posture][kb-device-posture], and other contextual factors.
* Extend access control policies by using [routing awareness with `via`][kb-via].

Explore the collection of [example grants][kb-grant-samples] for common use cases.

## Implementation basics

Grants operate on a principle of explicitly defining which users or devices (sources) have access to which resources (destinations) along with what capabilities they have after connecting. Each grant consists of three core components:

* Source: The users or devices requesting access.
* Destination: The resources being accessed.
* Capabilities: The permissions granted to the source when accessing the destination. These are grouped by [network capabilities][ar-network-capabilities] (the `ip` field) and [application capabilities][ar-application-capabilities] (the `app` field).

When working with grants, you'll operate at two distinct layers: the network layer and the application layer. The network layer refers to IP addresses, ports, and protocols for connections between devices. The application layer refers to capabilities within applications themselves, such as which specific features or data sources a user can access. This dual-layer approach enables more comprehensive access control than network-only permissions.

Each grant uses the [`grant` syntax][kb-grants-syntax] with a source (`src`), a destination (`dst`), and at least one type of permissions: network permissions (`ip`) or application permissions (`app`). You can extend this basic structure with additional options including [device posture][kb-device-posture] checks (`srcPosture`) and routing specifications (`via`).

## Sources and destinations

Sources (`src`) and destinations (`dst`) define who can access what in your tailnet. Both fields accept a wide range of selectors that identify users, devices, groups, or IP address ranges.

You can specify sources using selectors like:

* Specific email addresses (`name@example.com`) for individual users.
* [Groups][kb-targets-groups] (`group:engineering`) for user groups.
* [Tags][kb-tags] (`tag:database`) for device groups.
* Roles (`autogroup:admin`) for administrative users.

Similarly, you can define destinations using the same types of [selectors][kb-targets], plus special selectors like `autogroup:internet` and `svc:web-server` (for [Tailscale Services][kb-tailscale-services]).

Refer to the [grants syntax reference][kb-grants-syntax] for more information.

## Network capabilities

[Network capabilities][ar-network-capabilities] control basic connectivity between devices in your tailnet. These permissions define whether devices can establish connections and what protocols and ports they can use.

The `ip` field in a grant specifies network layer capabilities, allowing you to define access at the protocol and port level. You can grant access to specific ports, port ranges, or entire protocols. For example, `"ip": ["tcp:443", "udp:53"]` grants access to TCP port `443` (HTTPS) and UDP port `53` (DNS) on the destination.

Refer to the [grants syntax reference][kb-grants-syntax] for more information.

## Application capabilities

[Application layer capabilities][ar-application-capabilities] go beyond basic connectivity to define what actions you permit after a device establishes a connection. Applications running on the destination device can read these capabilities from requests made over the tailnet to authenticate and authorize the requester. These capabilities allow for fine-grained control over feature access within applications, similar to role-based access control systems.

The `app` field specifies application layer capabilities in the format `"domainName/capabilityName"`. For example, `"tailscale.com/cap/tailsql"` identifies capabilities for the [TailSQL][xt-gh-tailsql] application. Each capability can include parameters that define specific permissions, such as which data sources the device can access or what operations to permit. This approach extends [zero trust principles][kb-zero-trust] to the application layer, enforcing the principle of least privilege for connected applications.

Refer to the [grants syntax reference][kb-grants-syntax] for more information.

## Limitations and considerations

While grants provide powerful access control capabilities, there are some important considerations to keep in mind:

* [Application layer capabilities][kb-grants-app-capabilities] are defined by the applications themselves, not by Tailscale. Each application is responsible for documenting its own capabilities and parameters, and for implementing the logic to react to application capabilities defined in grants
* The Tailscale policy engine treats application capability parameters as opaque JSON objects. It only validates that the application capability object is valid JSON and does not do any validation on the parameter content itself.
* [Device posture][kb-device-posture] checks only apply to the source (`src`) of a grant, not to the destination (`dst`).
* Grants and [legacy ACLs][kb-acls] can coexist in the same tailnet policy file. The recommended best practice is to favor grants for most use cases.

For more information, refer to [grants limitations and considerations][kb-grants-app-capabilities].

## Next steps

Not sure what to do next? Consider the following possibilities:

* Review your current access control model and identify opportunities to [migrate to more fine-grained permissions with grants][kb-grants-migration].
* Experiment with [creating a grant][kb-grants-syntax].
* Explore the collection of [example grants][kb-grant-samples].
* Refer to the [tailnet policy file documentation][kb-tailnet-policy-file] to understand integrating grants with other policy components.
* Explore integrating grants with [device posture][kb-device-posture] checking for context-aware access policies or adding routing awareness with [`via`][kb-via].
* Consider implementing [GitOps workflows][kb-gitops] for managing your tailnet policy file.

[ar-application-capabilities]: #application-capabilities

[ar-network-capabilities]: #network-capabilities

[kb-access-control]: /docs/features/access-control

[kb-acls]: /docs/features/access-control/acls

[kb-device-posture]: /docs/features/device-posture

[kb-gitops]: /docs/gitops

[kb-grant-samples]: /docs/reference/examples/grants

[kb-grants-app-capabilities]: /docs/features/access-control/grants/grants-app-capabilities

[kb-grants-migration]: /docs/reference/migrate-acls-grants

[kb-grants-syntax]: /docs/reference/syntax/grants

[kb-grants-vs-acls]: /docs/reference/grants-vs-acls

[kb-start]: /docs/how-to/quickstart

[kb-tags]: /docs/features/tags

[kb-tailnet-policy-file]: /docs/features/tailnet-policy-file

[kb-tailscale-services]: /docs/features/tailscale-services

[kb-targets]: /docs/reference/targets-and-selectors

[kb-targets-groups]: /docs/reference/targets-and-selectors#groups

[kb-user-roles]: /docs/reference/user-roles

[kb-via]: /docs/features/access-control/grants/grants-via

[kb-zero-trust]: /docs/concepts/zero-trust

[ln-principle-of-least-privilege]: /learn/principle-of-least-privilege

[xt-gh-tailsql]: https://github.com/tailscale/tailsql
