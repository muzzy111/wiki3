# Setting up a server on your Tailscale network

Last validated Dec 4, 2025

If you're setting up servers on Tailscale, we recommend you use an [auth key][kb-auth-keys] to provision the server, and a [tag][kb-tags] to restrict its access. You can also set up [Tailscale SSH][kb-tailscale-ssh] to access your servers.

Here's how to set up a server in Tailscale:

1. Create a new [tag][kb-tags] in your tailnet for the type of shared resource you are managing. For example, you can use the tag `server` for your servers, `prod` or `test` for your environments, and `front-end` for grouping of other resources that you maintain.

   To create a tag, modify the [tailnet policy file][kb-acls] to specify the owner of the tag, which is the team or user who can use that tag. You can use an existing tag for all servers. If you're also setting up Tailscale SSH, we recommend using a new tag.

   ```json
   {
     "tagOwners": {
       "tag:server": ["alice@example.com"]
     }
   }
   ```

   \[Missing snippet: visual\_policy\_editor.mdx]

2. Write [access rules][kb-policy-syntax-acls] in the tailnet policy file which:

   * Allow the desired sources to reach the tagged resources
   * If you're also setting up Tailscale SSH, allow the desired sources to reach the tagged resources using Tailscale SSH

   ```json
   {
     "grants": [
       {
         "src": ["group:sre"],
         "dst": ["tag:server"],
         "ip": ["*"]
       }
     ],
     "ssh": [
       {
         "action": "accept",
         "src": ["group:sre"],
         "dst": ["tag:server"],
         "users": ["ubuntu", "root"]
       }
     ]
   }
   ```

   \[Missing snippet: visual\_policy\_editor.mdx]

3. Generate an [authentication key][kb-auth-keys] to automatically connect servers to your network. Select the tag or tags you wish to use for your servers as part of this auth key.

   * If you're authenticating more than one server, use a reusable auth key. Or, for long-lived auth keys, set up an [OAuth client with the scope `auth_keys`][kb-oauth-clients-generate-long].
   * If you're authenticating ephemeral workloads like containers or functions, use an ephemeral key.
   * If your tailnet has [device approval][kb-device-approval] enabled, and you only intend to use that to approve end-user devices, use a pre-authorized auth key.

   ![Tailscale's auth key generation page](how-to/set-up-servers/generate-auth-key.png)

> **Note:**

> **Note:**
>
> Currently, if your client node is provisioned with an [authentication key][kb-auth-keys], you cannot use [check mode][kb-tailscale-ssh-check-mode] when
> establishing a Tailscale SSH connection using the node as a source.

4. When you provision a new server, [install][co-download] and connect to Tailscale manually or as part of your automation tooling. Make sure to specify the auth key including the tags you want, and to enable Tailscale SSH.

   ```shell
   tailscale up --auth-key=$TS_AUTHKEY
   ```

   If you want to specify a particular machine name for your server to use with [MagicDNS][kb-magicdns], then also specify `--hostname`:

   ```shell
   tailscale up --auth-key=$TS_AUTHKEY --hostname=$TS_HOSTNAME
   ```

   If the auth key was not generated with tags, then also specify `--advertise-tags`:

   ```shell
   tailscale up --auth-key=$TS_AUTHKEY --advertise-tags=<tags>
   ```

   If you want to enable Tailscale SSH, then also specify `--ssh`:

   ```shell
   tailscale up --auth-key=$TS_AUTHKEY --ssh
   ```

5. To access your servers over Tailscale, you can connect to them like any other device in your tailnet.

   If you have Tailscale SSH set up, you can connect to your severs using [Tailscale SSH][kb-tailscale-ssh] or [Tailscale SSH Console][kb-tailscale-ssh-console].

[co-download]: /download

[kb-policy-syntax-acls]: /docs/reference/syntax/policy-file#acls

[kb-tags]: /docs/features/tags

[kb-acls]: /docs/features/access-control/acls

[kb-auth-keys]: /docs/features/access-control/auth-keys

[kb-device-approval]: /docs/features/access-control/device-management/device-approval

[kb-magicdns]: /docs/features/magicdns

[kb-oauth-clients-generate-long]: /docs/features/oauth-clients#generating-long-lived-auth-keys

[kb-tailscale-ssh-check-mode]: /docs/features/tailscale-ssh#check-mode

[kb-tailscale-ssh-console]: /docs/features/tailscale-ssh/tailscale-ssh-console

[kb-tailscale-ssh]: /docs/features/tailscale-ssh
