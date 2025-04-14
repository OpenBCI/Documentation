---
id: ResetButtonPress
title: Did you Press the Reset Button?
---

The Cyton has a Reset button labelled RST that was mainly used for 

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
