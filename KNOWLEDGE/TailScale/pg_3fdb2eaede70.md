# Configure a subnet router

Last validated Jan 5, 2026

> **Note:**
>
> This topic is a quick guide for configuring subnet routers in a tailnet. For more detailed information, see [Subnet routers][kb-subnets].

To use a tailnet device as a subnet router, select your platform and complete the steps.

#### Linux

1. [Download and install][kb-install-linux] the Tailscale client.

2. Open a terminal session on the device and enable IP forwarding.

   \[Missing snippet: EnableIPForwarding.mdx]

3. In the terminal session, advertise subnet routes for the device. Replace the subnets in the example below with the subnets for your network.

   ```shell
   sudo tailscale set --advertise-routes=192.0.2.0/24,198.51.100.0/24
   ```

4. Go to the [Machines](https://login.tailscale.com/admin/machines) page of the admin console and locate the device in the list. It should display the **Subnets** badge.

5. Select the  menu, then select **Edit route settings**.

6. Check the IP range boxes that correspond to the subnet routes you want to advertise, then select **Save**.

#### macOS

1. [Download and install][kb-install-macos] the Tailscale client.

2. Open a terminal session and advertise subnet routes for the device. Replace the subnets in the example below with the subnets for your network.

   ```shell
   sudo tailscale set --advertise-routes=192.0.2.0/24,198.51.100.0/24
   ```

3. Go to the [Machines](https://login.tailscale.com/admin/machines) page of the admin console and locate the device in the list. It should display the **Subnets** badge.

4. Select the  menu, then select **Edit route settings**.

5. Check the IP range boxes that correspond to the subnet routes you want to advertise, then select **Save**.

#### Windows

1. [Download and install][kb-install-windows] the Tailscale client.

2. In a PowerShell session, advertise subnet routes for the device. Replace the subnets in the example below with the subnets for your network.

   ```powershell
   tailscale set --advertise-routes=192.0.2.0/24,198.51.100.0/24
   ```

3. Go to the [Machines](https://login.tailscale.com/admin/machines) page of the admin console and locate the device in the list. It should display the **Subnets** badge.

4. Select the  menu, then select **Edit route settings**.

5. Check the IP range boxes that correspond to the subnet routes you want to advertise, then select **Save**.

#### tvOS

1. [Download and install][kb-install-appletv] the Tailscale client.
2. Open the Tailscale app on your Apple TV, and select **Subnet Router**.
3. Select **Advertise New Route**. A placeholder combined IP address and subnet mask (CIDR) of `198.51.100.0/24` will display. Edit this entry to reflect your own IP address and subnet mask.
4. Go to the [Machines](https://login.tailscale.com/admin/machines) page of the admin console and locate the device in the list. It should display the **Subnets** badge.
5. Select the  menu, then select **Edit route settings**.
6. Check the IP range boxes that correspond to the subnet routes you want to advertise, then select **Save**.

#### Android

> **Warning:**
>
> Running a subnet router on a mobile phone will significantly impact battery life. This feature is primarily intended for Android TV devices or any Android device that is expected to remain connected to AC power.

1. [Download and install][kb-install-android] the Tailscale client.

2. Open the Tailscale app and select the avatar menu.

3. In **Settings**, select **Subnet routing**, then **Add route**.

4. Enter the combined IP address and subnet mask (CIDR) for your network. For example `192.168.1.0/24`.

5. Select **OK**.

6. In the **Exit Node** section of the app, set the **Allow LAN access** toggle according to your preference.

   * Android as a subnet router but not an exit node, set the toggle to off.
   * Android as a subnet router and an exit node, set the toggle to on.

7. Go to the [Machines](https://login.tailscale.com/admin/machines) page of the admin console and locate the device in the list. It should display the **Subnets** badge.

8. Select the  menu, then select **Edit route settings**.

9. Check the IP range boxes that correspond to the subnet routes you want to advertise, then select **Save**.

For more information about subnet router configuration with Tailscale, review [Subnet routers][kb-subnets].

[kb-install-android]: /docs/install/android

[kb-install-appletv]: /docs/install/appletv#install-tailscale-on-tvos

[kb-install-linux]: /docs/install/linux

[kb-install-macos]: /docs/install/mac

[kb-install-windows]: /docs/install/mac

[kb-subnets]: /docs/features/subnet-routers
