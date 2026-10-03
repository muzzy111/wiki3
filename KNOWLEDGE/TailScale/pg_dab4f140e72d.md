# Tailscale on Heroku

Last validated Dec 4, 2025

Heroku is a popular cloud-hosting platform for running applications without managing servers yourself. However, it can be difficult to use Tailscale on Heroku, since it doesn't provide a /dev/net/tun device that Tailscale needs.

You can use Tailscale's [userspace networking mode][kb-userspace-networking] to connect your apps to your Tailscale network.

## Step 1: Generate an auth key to authenticate your Heroku apps

First, we'll generate an [auth key][kb-auth-keys] to allow Heroku to authenticate our app to join our network.

Go to [Keys](https://login.tailscale.com/admin/settings/keys) of the admin console and create an auth key. We recommend using an [ephemeral key][kb-ephemeral-nodes] for this purpose, since it will automatically clean up devices after they shut down.

![Tailscale's auth key generation page](install/cloud/heroku/ephemeral-keys.png)

> **Note:**

Next, go to your [Heroku app's settings][xt-heroku-apps] and then the configuration variables section. From here, add a new configuration variable named `TAILSCALE_AUTHKEY`, with the `tskey-<key>` value you just created.

![Heroku's configuration variables interface](install/cloud/heroku/heroku-config-vars.png)

## Step 2: Configure your Dockerfile to install Tailscale

We recommend using a [multistage Dockerfile][xt-docker-multi-stage-builds] where the first stage builds your application, and the second stage pulls application code and Tailscale into the final image to be uploaded to Heroku.

Create a `Dockerfile` at the root of your app. In that `Dockerfile` add something like:

```docker
FROM golang:1.16.2-alpine3.13 as builder
WORKDIR /app
COPY . ./
# This is where one could build the application code as well.

# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM alpine:latest
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

# Copy binary to production image.
COPY --from=builder /app/start.sh /app/start.sh

# Copy Tailscale binaries from the tailscale image on Docker Hub.
COPY --from=docker.io/tailscale/tailscale:stable /usr/local/bin/tailscaled /app/tailscaled
COPY --from=docker.io/tailscale/tailscale:stable /usr/local/bin/tailscale /app/tailscale
RUN mkdir -p /var/run/tailscale /var/cache/tailscale /var/lib/tailscale

# Run on container startup.
CMD ["/app/start.sh"]
```

The Dockerfile specifies `/app/start.sh` as the initial process to run. This script needs to bring Tailscale up and then start the application binary. This is where we can use the `TAILSCALE_AUTHKEY` variable we defined earlier.

Then, create a file named `start.sh` at the root of your app:

```shell
#!/bin/sh

/app/tailscaled --tun=userspace-networking --socks5-server=localhost:1055 &
/app/tailscale up --auth-key=${TAILSCALE_AUTHKEY} --hostname=heroku-app
echo Tailscale started
ALL_PROXY=socks5://localhost:1055/ /app/my-app
```

The next time your Heroku app deploys, it will be able to connect to your private Tailscale network.

## Remove ephemeral nodes from a tailnet

When an ephemeral node goes offline, it is automatically removed from your tailnet. You can also control ephemeral node removal using the [`tailscale logout`][kb-cli-logout] command to either manually force the removal or incorporate the command into the [`tailscaled`][kb-tailscaled] Tailscale daemon. For more information, refer to [Ephemeral nodes][kb-ephemeral-nodes-faq].

[kb-auth-keys]: /docs/features/access-control/auth-keys

[kb-cli-logout]: /docs/reference/tailscale-cli#logout

[kb-ephemeral-nodes-faq]: /docs/features/ephemeral-nodes#faq

[kb-ephemeral-nodes]: /docs/features/ephemeral-nodes

[kb-tailscaled]: /docs/reference/tailscaled

[kb-userspace-networking]: /docs/concepts/userspace-networking

[xt-docker-multi-stage-builds]: https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds

[xt-heroku-apps]: https://dashboard.heroku.com/apps
