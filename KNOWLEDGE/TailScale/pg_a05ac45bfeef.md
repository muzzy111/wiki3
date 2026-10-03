# Permissions and RBAC for the Tailscale Kubernetes Operator

Last validated Jun 5, 2026

Permissions for the Tailscale Kubernetes Operator come from two sources. The tailnet identity and access policies that govern traffic to and from the cluster, and Kubernetes role-based access control (RBAC) and pod security settings that govern what the operator and its proxies can do inside the cluster.

## Ingress

Tailnet access to cluster workloads exposed through high-availability `ProxyGroup` proxies is controlled by Tailscale tags and the tailnet policy file.

By default, the `ProxyGroup` proxies are [tagged][kb-tags] with the tag `tag:k8s`. You can configure tags using the `.tags` field in the [`ProxyGroup` spec][xt-gh-tailscale-k8s-proxygroup]. You must ensure that the tag by which you tagged the [operator's OAuth client credentials][kb-kubernetes-operator-setup] is a [`tagOwner`][kb-tag-owners] of the `ProxyGroup` device tags.

> **Note:**
>
> Unlike with non-HA proxies, the proxy tags are not used to grant access to the cluster apps exposed using the proxies.

For each HA `Service` or `Ingress` exposed on a `ProxyGroup`, the Kubernetes operator creates a Tailscale Service. Each `ProxyGroup` proxy advertises the Tailscale Service, by configuring itself as a backend for the tailnet traffic for the Tailscale Service. The Tailscale IP address and DNS name given to the `Ingress` or `Service` are the IP addresses and DNS name of the Tailscale Service.

You can [tag][kb-tags] a Tailscale Service and use the tag to configure which tailnet devices can advertise the Service and which tailnet identities can access it. By default, the Kubernetes operator tags all Tailscale Services with the tag `tag:k8s`. You can configure Tailscale Service tags using the `tailscale.com/tags` annotation on the `Service` or `Ingress` resource.

### Ensure that `ProxyGroup` devices can advertise the Tailscale Service

To permit `ProxyGroup` devices to advertise a Tailscale Service, use the [`autoApprovers`][kb-auto-approvers] section of the tailnet policy file.

For example, to let `ProxyGroup` devices with the tag `tag:eu-cluster` advertise Tailscale Services with the tag `tag:monitoring`, add the following to your tailnet policy file:

```json
"autoApprovers": {
  "services": {
    "tag:monitoring": ["tag:eu-cluster"],
  },
}
```

### Configure access

You can use Tailscale Service tags to control which tailnet identities can reach a given Service.

For example, to let the user group `group:eng` access Tailscale Services with the tag `tag:monitoring` exposed on a `ProxyGroup` with the tag `tag:eu-cluster`, add the following to your tailnet policy file:

```json
"grants": [
  {
    "src": ["group:eng"],
    "dst": ["tag:monitoring"],
    "ip":  ["*"],
  },
  {
    "src": ["group:eng"],
    "dst": ["tag:eu-cluster:*"],
    "ip":  ["icmp:*"],
  },
]
```

> **Note:**
>
> The requirement to permit access to the `ProxyGroup` devices to access Tailscale Services is a temporary limitation.

## Customization

You can customize the Kubernetes security context of the proxy pods that the operator creates, including reducing their default privileges.

Pods for proxies created for [cluster ingress using `Service`][kb-operator-cluster-ingress-service], [cluster egress][kb-operator-cluster-egress], [`Connector`][kb-operator-connector], and [`ProxyGroup`][kb-proxy-group] contain a main `tailscale` container and an `init` container.

In Tailscale v1.78 and later, both containers run as [privileged containers][xt-kubernetes-security-context]. The main `tailscale` container requires privileged permissions to create a `/dev/net/tun` device. As an alternative, you can restrict the main container's permissions and delegate the device creation to a [Kubernetes device plugin][xt-kubernetes-device-plugin]:

1. Install the [generic device plugin][xt-gh-generic-device-plugin] to your cluster. Pass a `--device` flag that configures the plugin to create `/dev/net/tun` devices:

   ```shell
   --device='{"name": "tun", "groups": [{"paths": [{"path": "/dev/net/tun"}]}, "count": 1000]}'
   ```

2. Apply a `ProxyClass` that restricts the `tailscale` container's permissions to `NET_ADMIN` and `NET_RAW` capabilities, and tells the device plugin to create a `/dev/net/tun` device:

   ```yaml
   apiVersion: tailscale.com/v1alpha1
   kind: ProxyClass
   metadata:
     name: tailscale-tun
   spec:
     statefulSet:
       pod:
         tailscaleContainer:
           resources:
             limits:
               squat.ai/tun: "1"
           securityContext:
             allowPrivilegeEscalation: false
             capabilities:
               drop:
                 - ALL
               add:
                 - NET_ADMIN
                 - NET_RAW
   ```

3. Ensure that the `ProxyClass` is applied to all proxies created for [Tailscale ingress `Service`s][kb-operator-cluster-ingress-service], [Tailscale egress `Service`s][kb-operator-cluster-egress], [`Connector`s][kb-operator-connector], and [`ProxyGroup`s][kb-proxy-group].

For detailed instructions and discussion, refer to [the device plugin proposal on GitHub][xt-gh-device-plugin-discussion].

[kb-auto-approvers]: /docs/reference/syntax/policy-file#auto-approvers

[kb-kubernetes-operator-setup]: /docs/kubernetes-operator/install-operator#configure-tags-and-oauth-credentials

[kb-operator-cluster-egress]: /docs/kubernetes-operator/egress

[kb-operator-cluster-ingress-service]: /docs/kubernetes-operator/ingress#standalone-layer-3-ingress-for-tcpudp

[kb-operator-connector]: /docs/kubernetes-operator/connector

[kb-proxy-group]: /docs/kubernetes-operator/concepts/proxygroup

[kb-tag-owners]: /docs/reference/syntax/policy-file#tag-owners

[kb-tags]: /docs/features/tags

[xt-gh-device-plugin-discussion]: https://github.com/tailscale/tailscale/issues/10814

[xt-gh-generic-device-plugin]: https://github.com/squat/generic-device-plugin

[xt-gh-tailscale-k8s-proxygroup]: https://github.com/tailscale/tailscale/blob/main/cmd/k8s-operator/deploy/crds/tailscale.com_proxygroups.yaml

[xt-kubernetes-device-plugin]: https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/

[xt-kubernetes-security-context]: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
