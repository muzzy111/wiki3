---
aliases: []
tags:
  - device
  - connected
  - shell
  - devices
---



1. adb devices - Lists all connected Android devices and emulators.
2. adb shell - Opens a remote shell on the connected device or emulator.
3. adb install <path_to_apk> - Installs an Android application package (.apk) on the connected device.
4. adb uninstall <package_name> - Uninstalls an application from the device using its package name.
5. adb push <local_file> <remote_location> - Copies a file from your computer to the connected device.
6. adb pull <remote_file> <local_location> - Copies a file from the connected device to your computer.
7. adb logcat - Displays the log messages from the device.
8. adb reboot - Restarts the device.
9. adb shell wm size <width>x<height> - Sets the screen size of the device.
 10. adb connect <ip_address> - Connects to a device over Wi-Fi using its IP address.

These are just a few examples of adb commands. There are many more commands available for different use cases.