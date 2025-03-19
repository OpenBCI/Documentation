---
id: GanglionProgram
title: Ganglion Programming Tutorial
---

import FTDIBreakout from '../assets/CytonImages/FTDI_Friend.jpg';
import Capacitor from '../assets/GanglionImages/caps.jpg';
import GanglionPinsConnection from '../assets/GanglionImages/ganglion_ftdi-connection.jpeg';

:::tip
**You do NOT need to program the Ganglion in order to use it. All OpenBCI boards ship ready to use out of the box. This guide is for users who want to upload their own firmware to the Ganglion or modify existing firmware.**
:::

This guide will walk you through how to update your Ganglion firmware. Downloading the latest binary and programming Over The Air (OTA) makes updating the Ganglion a breeze with a mobile device.

## Download The Latest Builds

- [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_GUI/releases)
- [Ganglion Firmware](https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases)

## Ganglion OTA Firmware Programming

The Simblee is designed around a Nordic Semiconductor [nRF51822](http://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822). We use several apps that support the nRF51822 to perform the OTA update.

:::important
Ganglions shipped prior to February 27, 2017 will NOT program Over The Air (OTA) for the first time! If you purchased your Ganglion prior to this date, please follow the instructions in the [Ganglion Hardware Programming](#ganglion-hardware-programming) section to program your Ganglion for the first time.
:::

### Install Applications

Install both of the applications listed below for your mobile device's operating system.

#### iOS

- [Lightblue Explorer App](https://apps.apple.com/us/app/lightblue/id557428110)
- [nRF Connect App](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

#### Android

- [nRF Toolbox App](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox)
- [nRF Connect App](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)

### Verify Ganglion Version

Turn on your Ganglion and turn on your phone's Bluetooth. Next, open the Lightblue (iOS) / nRF Connect (Android) app. The app will show you what Bluetooth peripherals are nearby. Your Ganglion may show up as either `Ganglion`, `Simblee`, or `DfuTarg` depending on your OS and firmware version. Tap the Ganglion peripheral, and the app will connect to and interrogate it.

In the Device Information, you will find the following:

- Manufacturer Name String
- Model Number String
- Hardware Revision String
- Firmware Revision String
- Software Revision String

You should see `openbci.com` as the Manufacturer, `Ganglion` as the Model Number, and `x.x.x` as the **Software Revision String**.

:::important
If the Software Revision String is earlier than `1.1.1`, then you cannot perform OTA updates until you follow the instructions in the [Ganglion Hardware Programming](#ganglion-hardware-programming) section.
:::

### Uploading the Firmware

Before completing this step, you should either download the [precompiled binaries](https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/download/v3.0.1/DefaultGanglion3.0.1.zip) or compile the firmware from source as described in the [Building from Source](#building-from-source) section.

Transfer this `.zip` file to your phone (e.g. via email, Dropbox, or Google Drive).

#### iOS

1. Open the nRF Connect app and connect to the Ganglion. Use the name identified [above](#verify-ganglion-version).
2. After connecting, select `DFU` from the list of tabs at the top of the screen.
3. Click the `Open Document Picker` button at the bottom of the screen.
4. Select the `.zip` file you moved to your iOS device.
5. After loading the `.zip` archive, press the `Start`` button to upload the firmware.

#### Android

1. Start the nRF Toolbox app and select the `Device Firmware Update` tool.
2. Tap the `Select` button, and select the file `.zip` file you moved to your Android device.
3. Select the Ganglion device identified [above](#verify-ganglion-version).
4. Start the upload.

:::danger
Do not turn off your device while the firmware upload is in progress.
:::

## Ganglion Hardware Programming

Older Ganglions (pre-2017) must be programmed using hardware before OTA updates can be performed. Newer Ganglions can be programmed either OTA or using hardware.

### What You Need

- FTDI Breakout or OpenBCI Cyton Dongle
- 0.1uF Capacitor
- Jumper Wires

<img src={FTDIBreakout} height="200"/>&emsp;
<img src={Capacitor} height="200"/>
<br/><br/>

In this example, we use the [Adafruit FTDI Friend](https://www.adafruit.com/products/284). You can use any FTDI breakout, as long as it uses **only 3V for logic levels**. If you go to Adafruit to purchase one, you can also pick up some [jumper wires](https://www.adafruit.com/products/758), and [0.1uF Capacitors](https://www.adafruit.com/products/753) as well.

### Wiring

The 0.1uF capacitor needs to be in between the `RESET` pin of the Ganglion and the `RTS` pin of the FTDI breakout. See the image below for a description of the required pin connections.

<img src={GanglionPinsConnection} height="400"/>

:::danger
The Ganglion is a 3V device! You must never connect a voltage source higher than 3V to any of the pins.
:::

## Building From Source

The following instructions will get your computer and the Arduino IDE set up to create the a firmware `.zip` archive for updating OTA to your Ganglion device.

### What You Need

- [Arduino IDE v1.8.x](https://www.arduino.cc/en/software)
- [Ganglion Library Firmware](https://github.com/OpenBCI/OpenBCI_Ganglion_Library)
- [Wifi Master Library Firmware](https://github.com/OpenBCI/OpenBCI_Wifi_Master_Library)

:::info
Be sure to clone the repositories directly to your [Arduino libraries folder](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries#manual-installation). Alternatively, add the zipped libraries by navigating to `Sketch -> Include Library -> Add .ZIP Library...` and selecting the downloaded archives.
:::

### Add the Ganglion via Board Manager

1. Navigate to `Preferences`
2. Paste the following URL into the `Additional Boards Manager URLs` field

```
https://openbci-simblee.s3.amazonaws.com/package_simblee_index.json
```

3. Navigate to `Tools -> Board -> Boards Manager...`
4. Search for `Ganglion` and install it
5. Select `Simblee Boards -> Ganglion` from the `Tools -> Board` menu

### Select DefaultGanglion.ino from Examples

In the Arduino IDE go to `File -> Examples -> OpenBCI_Ganglion_Library -> DefaultGanglion`. This will open the Ganglion firmware source code sketch. If you can't see `OpenBCI_Ganglion_Library` then verify `Ganglion` is selected as board type.

### Upload to Ganglion OTA Deployment

If you are using MacOS or Linux, you will need to make the `nrfutil` tool used by the Arduino buildchain executable.

On MacOS, open a terminal and paste in:

```
chmod u+x /Users/$USER/Library/Arduino15/packages/OpenBCI/hardware/Simblee/1.1.4/nrfutil_macosx
```

On Linux, open a terminal and paste in:

```
chmod u+x ~/.arduino15/packages/OpenBCI/hardware/Simblee/1.1.4/nrfutil_linux
```

To create the OTA files, first ensure your sketch is saved. Arduino may notify you that your sketch is read-only in which case you will need to select a new location to save it. Next, select `Sketch -> Export compiled Binary`. The Arduino IDE will take a few moments, and the IDE will create the `.zip` file you need for OTA in the sketch folder right beside where you saved your sketch.

If you are programming your Ganglion OTA, this file can be uploaded to your Ganglion using the instructions provided in the [Ganglion OTA Firmware Programming](#ganglion-ota-firmware-programming) section.

### Upload to Ganglion Using Hardware

1. Ensure you have completed steps in the [Ganglion Hardware Programming](#ganglion-hardware-programming) section.
2. Plug your dongle or FTDI Friend in and power up the Ganglion.
3. Select the correct serial port from the `Tools > Port` menu for your OpenBCI Dongle or FTDI friend. If you don't know which port is correct, try unplugging the device and noting which port disappears from the menu. Plugging the device back in should cause the port to reappear.
4. With your wires all connected correctly, you should be able to click the `Upload` button and successfully re-program the Ganglion. Now you're ready to [upload to Ganglion using OTA deployment](#upload-to-ganglion-ota-deployment)!
