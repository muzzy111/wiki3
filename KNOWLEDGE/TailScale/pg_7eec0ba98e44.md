# Access your tailnet from code-server

Last validated Sep 18, 2025

[code-server][xt-gh-code-server] is a way to run Visual Studio Code anywhere and access it in through a browser.

Tailscale can be installed within a code-server VM to be able to access private resources securely,
such as databases or continuous integration nodes or servers in the dev/test environment.

## Integration

code-server is installed within a VM with [instructions for a number of hosting providers][xt-gh-code-server-install].

Tailscale can be [installed in VMs][kb-install-linux]
for many common hosting providers like
[AWS][kb-install-aws],
[Azure][kb-cloud-azure-linux],
[Google Cloud][kb-cloud-gce], and
[Hetzner][kb-cloud-hetzner].

## Authorization

The VM will need to be authorized to join the tailnet using either a browser to log in,
or a [one-time auth key][kb-auth-keys].

[kb-auth-keys]: /docs/features/access-control/auth-keys

[kb-cloud-azure-linux]: /docs/install/cloud/azure/linux

[kb-cloud-gce]: /docs/install/cloud/gce

[kb-cloud-hetzner]: /docs/install/cloud/hetzner

[kb-install-aws]: /docs/install/cloud/aws

[kb-install-linux]: /docs/install/linux

[xt-gh-code-server-install]: https://github.com/cdr/code-server/blob/main/docs/install.md

[xt-gh-code-server]: https://github.com/cdr/code-server
