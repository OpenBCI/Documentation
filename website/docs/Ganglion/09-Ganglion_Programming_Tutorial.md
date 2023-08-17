---
id: GanglionProgram
title: Ganglion Programming Tutorial
---
**Please note, you do NOT need to program the Ganglion in order to use it. All OpenBCI boards ship ready to use out of the box. This guide is for users who want to upload their own firmware to the Ganglion or modify existing firmware.**

This guide will walk you through how to update your Ganglion firmware. Downloading the latest binary and Over The Air programming (OTA) makes updating the Ganglion a breeze with a mobile device. If you want to compile the code in Arduino continue to the [Building From Source](#ganglion-programming-tutorial-building-from-source) portion of the guide.

To program the Ganglion over the air, keep reading. To program using hardware, refer to the [last section.](#ganglion-programming-tutorial-setting-up-to-program-ganglion-using-hardware)

## Download The Latest Builds

- [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_GUI/releases)  
- [Ganglion Firmware v3.0.0](https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/download/v3.0.0/DefaultGanglion3.0.1.zip)

If you prefer to use the precompiled binaries, jump down to [setup your mobile device for OTA programming](#setup-mobile-device-for-ota-programming) to continue.

## Building From Source

The Simblee (website discontinued) radio module that is at the heart of the Ganglion board offers the ability to reprogram Over The Air `OTA`. The method for doing this in a nutshell is:  

1.  Create new Ganglion firmware, or modify existing code in Arduino IDE
2.  Generate a compiled HEX file in the Arduino IDE
3.  Compress it into a ZIP with some other important files
4.  Transfer the ZIP file to your phone or tablet
5.  Connect your phone or tablet to the Ganglion
6.  Upload new code Over The Air

The following tutorials will get your computer and the Arduino IDE set up to create the correct ZIP file, and also show how to use your phone or tablet to upload new code to the Ganglion. This guide will also teach you how to upload code to your ganglion for the first time.

**_IMPORTANT: Ganglions shipped prior to February 27, 2017 will NOT program Over The Air for the first time! If you purchased your Ganglion prior to 2/27/17, Please follow the instructions below up till How to create an OTA File and read the instructions the bottom of this page to program your Ganglion for the first time._**

### What You Need

-   [Arduino IDE v1.8.19](https://www.arduino.cc/en/software) or newer
-   [Ganglion Library Firmware](https://github.com/OpenBCI/OpenBCI_Ganglion_Library)
-   [Wifi Master Library Firmware](https://github.com/OpenBCI/OpenBCI_Wifi_Master_Library)

**IMPORTANT** Be sure to clone the repositories directly to your [Arduino libraries folder](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries#manual-installation).

### Add the Ganglion via Board Manager

1. Navigate to `File -> Preferences`
2. Paste the following URL into the `Additional Boards Manager URLs` field

```
https://openbci-simblee.s3.amazonaws.com/package_simblee_index.json
```

3. Navigate to `Tools -> Board -> Boards Manager...`
4. Search for `Ganglion` and install it
5. Select `Simblee Boards -> Ganglion` from the `Tools -> Board` menu

### Select DefaultGanglion.ino from Examples

In the Arduino IDE go to `File -> Examples -> OpenBCI_Ganglion_Library -> DefaultGanglion` which will open the Ganglion firmware source code. If you can't see `OpenBCI_Ganglion_Library` then verify `Ganglion` is selected as board type.

**NOTE - You must upload ONLY the `DefaultGanglion` Sketch!**

### Create OTA File

To create the OTA files, simply select `Export compiled Binary` from the `Sketch` menu. The Arduino IDE will take a few moments, and the IDE will create the `.zip` file you need for OTA **_in the sketch folder_** right beside your sketch.

## Setup Mobile Device For OTA Programming

The Simblee is designed around a Nordic Semiconductor [nRF51822](http://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822), and so we need to use the Nordic nRF apps to do the actual Over-The-Air stuff. Here's what you will need for this tutorial:

### Install Applications

#### iPhone

-   [nRF Toolbox App](https://apps.apple.com/us/app/nrf-toolbox/id820906058)
-   [Lightblue Explorer App](https://apps.apple.com/us/app/lightblue/id557428110)

#### Android

-   [nRF Toolbox App](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox)
-   [nRF Connect App](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)

### Verify Ganglion Version

Turn on your Ganglion, and turn on your phone's bluetooth Then open the Lightblue / nRF Connect app. The app will open and show you what Bluetooth Peripherals are nearby. The device may either show up as `Ganglion`, `Simblee`, or `DfuTarg` depending on your OS and Ganglion firmware version. Tap the Ganglion peripheral, and the app will connect to and interrogate it.  

In the Device Information, you will find the following:

-   Manufacturer Name String
-   Model Number String
-   Hardware Revision String
-   Firmware Revision String
-   Software Revision String

You should see `openbci.com` as the Manufacturer, `Ganglion` as the Model Number, and `x.x.x` as the **Software Revision String**. The Hardware and Firmware versions are generated by the Simblee itself.  

**IMPORTANT - If the Software Revision String is earlier than 1.1.1 you _cannot do OTA_ until you follow the Hardware Upload Tutorial at the bottom of this page.**  

### Uploading the Firmware

1. Transfer the `.zip` file from your Arduino Sketch folder to your phone (e.g. via email, Dropbox, Google Drive, ...)
2. Start the nRF Toolbox app and select the `Device Firmware Update` tool. Tap the `Select` button, and select the file `.zip` file you moved to your phone.
3. Select the device identified [above](#verify-ganglion-version).
4. Start the upload.

**IMPORTANT - Do not turn off your device while the firmware upload is in progress.**

## Setting up to Program Ganglion Using Hardware

Older Ganglions (pre-2017) could only be programmed using hardware first, then over the air. Newer Ganglions can be programmed OTA or using hardware.

### What You Need

-   FTDI Breakout or OpenBCI Cyton Dongle
-   0.1uF Capacitor
-   Jumper Wires
-   [Arduino IDE v1.8.19](https://www.arduino.cc/en/software) or newer

![FTDI Breakout](../assets/ThirdPartyImages/FTDI_Friend.jpg)
![Capacitor](../assets/GanglionImages/caps.jpg)
![Ganglion Pins Connection](../assets/GanglionImages/ganglion_ftdi-connection.jpeg)

For this tutorial, I will use the [Adafruit FTDI Friend](https://www.adafruit.com/products/284). You can use any FTDI breakout, as long as it uses **only 3V for logic levels**. If you go to Adafruit to purchase one, you can also pick up some [jumper wires](https://www.adafruit.com/products/758), and [0.1uF Capacitors](https://www.adafruit.com/products/753) as well.  

**IMPORTANT NOTE: THE GANGLION IS A 3V DEVICE! YOU MUST NEVER CONNECT ANY HIGHER VOLTAGE SOURCE TO ANY OF THE PINS!**  

The 0.1uF capacitor needs to be in between the `RESET` pin of the Ganglion and the `RTS` pin of the FTDI breakout.

### Set Up Arduino to Program Your Ganglion

Follow the guide at the top of this page from [Building From Source](#building-from-source) all the way down till [Create an OTA File](#create-ota-file), then come back here.

### Plug in Dongle or FTDI Friend and Select Serial Port

Now is a good time to plug your Dongle in and power up the Ganglion.

Select the correct serial port from the `Tools > Port` menu for your OpenBCI Dongle or FTDI friend. If you don't know which port is correct, try unplugging the device and noting which port disappears from the menu. Plugging the device back in should cause the port to reappear.

### Verify Wire Connections and Press Upload

With your wires all connected correctly, you should be able to click the `Upload` button and successfully re-program the Ganglion. Now you're ready to do OTA Programming!
