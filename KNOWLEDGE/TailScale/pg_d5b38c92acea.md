# Set up high availability

Last validated Oct 3, 2025

When using [subnet routers][kb-subnets] or [app connectors][kb-app-connectors] in large networks, you may want to set up high availability to ensure users of your network can continue to access resources if one routing device goes offline, or to increase performance across a global workforce. Tailscale offers two methods of building redundancy into a network.

## Failover

> **Note:** Failover is available for [all plans](/pricing).

Failover lets customers deploy *overlapping connectors* (that is, app connectors that advertise the same apps, or subnet routers that advertise the same routes). In a failover scheme, one connector is used at a time by all clients. If it goes offline another connector is used.

Connector selection occurs in the order of the dates when you added the connectors to the tailnet. The oldest connector is the "primary", and failover occurs in oldest-first order.

When using [`tailscale down`][kb-tailscale-cli-down], failover can take up to \~15 seconds after a primary connector goes offline. In scenarios where there is a network partition or the network interface is taken down through other methods, the failover will take longer.

Failover is the default behavior: overlapping connectors will automatically exhibit this behavior, which is available on all plans.

## Regional routing

> **Note:** Regional routing is available for [the Premium and Enterprise plans](/pricing).

Regional routing lets customers deploy a global fleet of *overlapping connectors* (that is, app connectors that advertise the same apps, or subnet routers that advertise the same routes). Overlapping connectors are grouped into regions that map to Tailscale's [DERP regions][kb-derp-servers].

Upon connecting to Tailscale, client devices identify which regional routing group is closest to them by finding the closest DERP server. This works by having clients report their latencies to the nearest active DERP servers, after which clients are assigned a regional routing group. Each client is then instructed to send traffic bound to a given applicable destination directly to the closest connector. The client re-evaluates its choice of regional routing group periodically. If a region no longer has available connectors, another region is used, giving the network global high availability and improved performance for a global workforce.

If multiple overlapping connectors exist within a region, the specific connector used within that region depends on one of two behaviors:

### In-region load balancing (default)

Within a [DERP region][kb-derp-servers], if multiple overlapping connectors exist, then load is spread evenly across the connectors on a best-effort basis. The algorithm is as follows: each client has a stable pseudorandom order of routing preference for the set of nodes in a region. If the top preferred node is unavailable the client is directed to the next most preferred node. As a side effect, this behavior creates a "stickiness": clients will be routed to a specific connector within a region, unless that connector is unavailable.

### In-region failover

An admin can request to disable in-region load balancing and instead opt for in-region failover when regional routing is enabled. To disable in-region load balancing while regional routing is enabled, [contact support][co-contact-support] and request in-region failover when using regional routing. Failover exhibits the behavior described in [Failover][ar-failover], limited to the scope of a single DERP region.

### Enabling regional routing for your tailnet

1. Open the [General](https://login.tailscale.com/admin/settings/general) settings page of the admin console.
2. Enable the **Regional Routing** option.

The traffic for Tailscale clients will automatically be routed to the nearest region with an active overlapping connector. This is a global preference; all overlapping connectors will exhibit the same tailnet-wide settings.

### Example use cases for regional routing

#### On-ramping remote employees to transit backbones

You can use subnet routers in conjunction with regional routing to on-ramp remote employee traffic to transit gateways such as AWS Transit Gateway, Google Cloud Interconnect, Azure ExpressRoute, and other virtual private transit providers. By placing a subnet router in front of each network on-ramp point, regional routing will automatically route device traffic on to the transit provider as quickly as possible.

#### Connecting to a globally replicated application or VPC

You can use subnet routers in conjunction with regional routing to connect to applications or VPCs that are globally replicated across your cloud provider's regions, or across multiple cloud providers. By placing a subnet router in front of each application or VPC, regional routing will automatically route device traffic on to the nearest version of that application or VPC. When using this methodology, the application must be available from the same set of IP addresses within the same high availability subnet route. In this way, you can easily deploy and connect to a globally distributed application, with multi-cloud failover built right in.

#### Connecting to a SaaS app for a global workforce

You can use app connectors alongside regional routing to connect to SaaS apps from a globally distributed workforce to increase performance for your entire organization, while maintaining necessary [access controls][kb-access-control]. By placing an app connector near each office or branch, regional routing will automatically route device traffic on to the nearest app connector, and out to the target SaaS app. In this way you can deploy and connect to SaaS, with performance and reliability built right in.

## App connector high availability

### Step 1: Set up multiple app connectors

Follow [our guide to configure app connectors][kb-app-connectors], assigning all app connectors to the same [tag][kb-tags]. For example, to create multiple app connectors on the `tag:connector`, you'll want to run a command like this on 2+ machines.

```shell
sudo tailscale up --advertise-connector --advertise-tags="tag:connector"
```

### Step 2: Assign an app to the app connectors

Follow [our guide to configure app connectors][kb-app-connectors], assigning an app to multiple app connectors by using the same `tag:connector` [tag][kb-tags].

### Step 3: Done

Once you have 2+ app connectors exposing the same apps on the same network,
the Tailscale control server will automatically manage the failover between
the different connectors. In failover mode, if an app connector is disconnected from the
control plane for more than 15 seconds, traffic will be routed to another
app connector. In regional routing mode, if the connectors are in different regions, clients will be assigned to each based on their closest available DERP region.

## Subnet router high availability

### Step 1: Set up multiple subnet routers

Follow [our guide to configure subnet routers][kb-subnets], exposing the same routes on the same network on 2+ devices. For example, to expose `10.0.0.0/24,10.1.0.0/24`, you'll want to run a command like this on 2+ devices.

```shell
sudo tailscale set --advertise-routes=10.0.0.0/24,10.1.0.0/24
```

You can configure as many subnet routers as you want to act as a failover.

> **Warning:**
>
> Failover only works between subnet routers that advertise the exact same route prefix. A broader route does not serve as a fallback for a more-specific route.
>
> For example, if one subnet router advertises `10.0.0.0/24` and another advertises `10.0.0.0/16`, they are not failover candidates for each other. If the `/24` router goes offline, Tailscale drops traffic to `10.0.0.0/24` rather than falling back to the `/16` route.
>
> To configure failover correctly, have multiple subnet routers advertise the same routes:
>
> ```shell
> # Run on 2+ subnet routers to enable failover for both prefixes
> sudo tailscale set --advertise-routes=10.0.0.0/24,172.16.5.0/24
> ```
>
> If you need a broader route to also serve as a fallback for a more-specific prefix, configure the broader-route router to advertise both prefixes. For more information, refer to [overlapping subnet route failover][kb-troubleshooting-overlapping-route-failover].

\[Missing snippet: WarningAcceptRoutesHA.mdx]

### Step 2: Activate the subnet routers in the admin console

Open the [Machines](https://login.tailscale.com/admin/machines) page of the admin console, locate your subnet router and using the  menu at the end of the table, select **Review subnet routes**. This will open up the Subnet settings.

Select **Enable** on your routes so that Tailscale distributes the subnet routes to the rest of the nodes on your Tailscale network.

> **Note:**
>
> You may want to disable key expiry on your server to avoid having to periodically reauthenticate. Refer to [key expiry][kb-key-expiry] for more information about machine keys and how to disable their expiry.

### Step 3: Done

Once you have 2+ subnet routers exposing the same route on the same network,
the Tailscale control server will automatically manage the failover between
the different routers. In failover mode, if a subnet router is disconnected from the
control plane for more than 15 seconds, traffic will be routed to another
subnet router. In regional routing mode, if the subnet routers are in different regions, clients will be assigned to each based on their closest available DERP region.

## Limitations

* Regional routing does not use [custom DERP servers][kb-custom-derp-servers]. Refer to [issue #12993][xt-gh-tailscale-issue-12993] for updates.

[ar-failover]: #failover

[co-contact-support]: /contact/support

[kb-access-control]: /docs/features/access-control

[kb-app-connectors]: /docs/features/app-connectors

[kb-custom-derp-servers]: /docs/reference/derp-servers/custom-derp-servers

[kb-derp-servers]: /docs/reference/derp-servers

[kb-key-expiry]: /docs/features/access-control/key-expiry

[kb-subnets]: /docs/features/subnet-routers

[kb-tags]: /docs/features/tags

[kb-tailscale-cli-down]: /docs/reference/tailscale-cli#down

[kb-troubleshooting-overlapping-route-failover]: /docs/reference/troubleshooting/network-configuration/overlapping-subnet-route-failover

[xt-gh-tailscale-issue-12993]: https://github.com/tailscale/tailscale/issues/12993
