---
id: MacOSGanglionBLEWorkaround
title: MacOS Ganglion BLE Workaround
---

In later versions of MacOS (generally MacOS 11+) there is an issue where Bluetooth permissions are not requested by the application. This prevents the embedded native BLE library from accessing the Bluetooth adapter and therefore Ganglion boards (and other Bluetooth devices) cannot be found. This issue appears to be related to [application hardening requirements](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution) introduced in MacOS 10.14.5. Most importantly, the JDK 8 version that ships with Processing 3.5.4 and earlier is [not notarized](https://github.com/adoptium/temurin-build/issues/1130) and therefore cannot request permissions from the OS.

A workaround to the issue is updating the JDK in Processing to the latest version of JDK 8. This can be done with the following:

```
curl -O -L --insecure https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u352-b08/OpenJDK8U-jdk_x64_mac_hotspot_8u352b08.tar.gz
tar -xf OpenJDK8U-jdk_x64_mac_hotspot_8u352b08.tar.gz
mv jdk8u352-b08 /Applications/Processing.app/Content/PlugIns/jdk1.8.0_202.jdk
```

Then follow the instructions for [running from the IDE](../../Software/OpenBCISoftware/GUIDocs/#running-the-openbci-gui-from-the-processing-ide).

:::note
Applications exported from Processing 3.5.4 do not appear to ask for Bluetooth permissions even if the JDK is updated before exporting. Processing 3.5.4 is no longer maintained so downstream fixes may exist in Processing 4.
:::
