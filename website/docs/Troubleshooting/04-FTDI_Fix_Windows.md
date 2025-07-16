---
id: FTDI_Fix_Windows
title: FTDI Buffer Fix on Windows
---
Tested on:

-   Windows 7
-   Windows XP
-   Windows 10

### I. Connecting the Board

![Device Manager](../assets/DepImages/device-man.jpg)

Connect the OpenBCI dongle to the computer and power ON the OpenBCI board.

#### 1. Drivers

1.  **If using Virtual Box**: Enable **FTDI FT231X USB UART** on virtual box through
    **Devices &gt; USB Devices**.
2.  Allow windows to try to install usb drivers.
3.  Open **Device Manager** from the start menu (or **Control Panel &gt; Hardware &gt; Device Manager**) and try to identify the OBCI board. It should be listed as either a COM port or an unidentified USB device.

#### 2. Unidentified device

If the board is labeled as "Unidentified", follow the troubleshoot below:

```

- Download [FTDI drivers](http://www.ftdichip.com/Drivers/VCP.htm).
- Right click on Unidentified USB Device from the **Device Manager** tab and select **Update Driver Software**.
- Select the "**Browse my Computer for Driver**" option and navigate to the FTDI download folder. Click on the folder and then click OK.
- Your board should now be recognized as a COM port.

```

#### 3. Finish

If everything went well, your OpenBCI Board should be showing up with a COM port number. If the number is not displayed next to the port name it should be visible in the properties of the port.

To check if it is, in fact, the OBCI board, connecting and disconnecting the Dongle should connect and disconnect the COM port.

### II. Latency Settings Fix

![Latency Fix](../assets/DepImages/latency.jpg)

The default FTDI latency is too large for EEG applications, making the incoming signal "choppy" and seem as if it's accumulating packets for about a full second before releasing them all at the same time into the serial stream.

The fix is easy. Simply right-click the USB Serial Port of the OBCI board and go to **Properties &gt; Port Settings &gt; Advanced** and change the **Latency Timer** from the default 16 ms to 1 ms.

Fixing this issue should make the incoming signal much more consistent in terms of packet time intervals.

## Available tools on Windows

-   [OpenViBE](Software/CompatibleThirdPartySoftware/03-OpenViBE.md)

-   [Neuromore](Software/CompatibleThirdPartySoftware/02-Neuromore.md)
