---
id: GanglionProgram
title: Ganglion Programming Tutorial
---

This guide will walk you through how to update your Ganglion firmware. Downloading the latest binary and Over The Air programming (OTA) makes updating the Ganglion a breeze with a mobile device. If you want to compile the code in Arduino continue to the [Building From Source](#ganglion-programming-tutorial-building-from-source) portion of the guide.

To program the Ganglion over the air, keep reading. To program using hardware, scroll all the way down to the [last section.](#ganglion-programming-tutorial-setting-up-to-program-ganglion-using-hardware)

**Please note, you do NOT need to program the Ganglion in order to use it. All OpenBCI boards ship ready to use out of the box. This guide is for users who want to upload their own firmware to the Ganglion or modify existing firmware.**


## Download The Latest Firmware Build

[v2.0.0 Direct Download](https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/download/v2.0.0/DefaultGanglion.ino.Simblee.zip)

You can read the release notes and more at the [on Github](https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/latest) or jump down to [setup your mobile device for OTA programming](#ganglion-programming-tutorial-setup-mobile-device-for-ota-programming) to continue

## Building From source

The Simblee (website discontinued) radio module that is at the heart of the Ganglion board offers the ability to reprogram Over The Air `OTA`. The method for doing this in a nutshell is:  

1. Create new Ganglion firmware, or modify existing code in Arduino IDE
2. Generate a compiled HEX file in the Arduino IDE
3. Compress it into a ZIP with some other important files
4. Transfer the ZIP file to your phone or tablet
5. Connect your phone or tablet to the Ganglion
6. Upload new code Over The Air

The following tutorials will get your computer and the Arduino IDE set up to create the correct ZIP file, and also show how to use your phone or tablet to upload new code to the Ganglion. This guide will also teach you how to upload code to your ganglion for the first time.

***IMPORTANT: Ganglions shipped prior to February 27, 2017 will NOT program Over The Air for the first time! If you purchased your Ganglion prior to 2/27/17, Please follow the instructions below up till How to create an OTA File and read the instructions the bottom of this page to program your Ganglion for the first time.***

### What You Need

* Arduino IDE v1.8.0 Or Newer
* Simblee Board Files
* Ganglion Library Firmware
* Wifi Master Library Firmware
* Compiler Tools (for OTA)

![Download Arduino Mac](assets/GanglionImages/ganglion_download-arduino-mac.png)

If you don't already have the Arduino IDE software on your computer, go [here](https://www.arduino.cc/en/Main/Software) to download the latest version for macOS.

Here is a [temporary link to the Simblee board files](https://drive.google.com/file/d/1aZijlZ081pie5su9li1vdSes1nh_IMtv/view?usp=sharing).

Deprecated: Then, follow the instructions in the Simblee Quick Start Guide(website deprecated) to install the Simblee board files in Arduino for macOS.  

### Modify The Simblee Board Files

![Open Arduino Contents](assets/GanglionImages/ganglion_variant-file-mod.png)

In order to program the Simblee to communicate and control the Ganglion, we need to make a quick change to the `variants.h` file in the Simblee folder that you just loaded into Arduino. Naviage to the folder   `/Applications/Arduino.app/Contents/Java/portable/packages`  
`/Simblee/hardware/Simblee/1.1.0/variants/Simblee`,  
and you will find the file called `variant.h`. Open this file up in the editor of your choice, and change the pin defines as shown.  
**NOTE** To access the application contents, right click on the application [or `control` + left click] and select `Show Package Contents`.

| define  | DEFAULT  | Change To |
|:----- |:------:| :-------:|
| PIN_SPI_SS     | 6u | 26u |
| PIN_SPI_MOSI   | 5u | 18u |
| PIN_SPI_MISO   | 3u | 15u |
| PIN_SPI_SCK    | 4u | 16u |   

Make sure to **save** and close the file.  
**IMPORTANT NOTE:** If you don't do this, your Ganglion will not work after you reprogram it!

### Install Firmware From Arduino Library Manager (easiest!)

Don't know what the _Library Manager_ is? Skim over the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc3).

Open the _Library Manager_ and search for _OpenBCI_ and install the latest version for `OpenBCI_Ganglion_Library` and `OpenBCI_Wifi_Master`.

### Manual Installation of Ganglion Firmware

 1. Download the latest [OpenBCI_Ganglion_Library](http://www.arduinolibraries.info/libraries/open-bci_ganglion_library), it's the top most zip file.
 2. Unzip the folder and change the name to `OpenBCI_Ganglion_Library`
 3. Move `OpenBCI_Ganglion_Library` to:

  On Mac: `/Documents/Arduino/libraries`  
  On Windows: `C:\Users\username\Documents\Arduino\libraries`

If you don't have a `libraries` folder there, go ahead and make one.  

If you're have trouble or want to learn more checkout the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc5) for manual installation.

### Manual Installation of WiFi Master Firmware

 1. Download the latest [WiFi Master Library](http://www.arduinolibraries.info/libraries/open-bci_wifi_master), it's the top most zip file.
 2. Unzip the folder and change the name to `OpenBCI_Wifi_Master`
 3. Move `OpenBCI_Wifi_Master` to:

  On Mac: `/Documents/Arduino/libraries`  
  On Windows: `C:\Users\username\Documents\Arduino\libraries`

If you're have trouble or want to learn more checkout the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc5) for manual installation.

### Clone The Repos From Github

Developers looking to contribute or write custom firmware can clone the firmware repositories directly to your `libraries` folder

	On Mac: `/Documents/Arduino/libraries`  
	On Windows: `C:\Users\username\Documents\Arduino\libraries`

* [OpenBCI_Ganglion_Library](https://github.com/OpenBCI/OpenBCI_Ganglion_Library)
* [OpenBCI_Wifi_Master_Library](https://github.com/OpenBCI/OpenBCI_Wifi_Master_Library)

### Select 'Simblee' as Board

If you followed the process in the previous link, and you will be able to select the _Simblee_ board from the Tools >> Board >> dropdown menu!

### Select DefaultGanglion.ino from Examples

* In the Arduino IDE go to `File-->Examples-->OpenBCI_Ganglion_Library-->DefaultGanglion` which will launch the Ganglion firmware. **NOTE You must upload ONLY the `DefaultGanglion` Sketch!** If you can't see `OpenBCI_Ganglion_Library` then verify `Simblee` is selected as board type.

## How to Create OTA File

![Rename platform file](assets/GanglionImages/ganglion_platform-rename.png)

In order to create a zip file with the appropriate components to do OTA, we need to further modify the Simblee board files in your `Arduino/Contents/Java/portable` folder. Navigate to the folder  
`/Arduino.app/Contents/Java/portable/packages`  
`/Simblee/hardware/Simblee/1.1.0`  
Then change the name of the file `platform.txt` to `platform_NORMAL.txt`.  
We're doing this in case you ever want to revert to the original.  

![Modified 1.1.0 Folder](assets/GanglionImages/ganglion_add-ota-tools.png)

Next, download the necessary files [here](https://github.com/biomurph/Ganglion_OTA_Tools). They are:  

* mkdfuzip
* nrfutil_macosx
* platform.txt

Move the files called `mkdfuzip`, `nrfutil_macosx`, and `platform.txt` into your `Simblee/1.1.0` folder. **Restart or launch Arduino**.

![Create OTA File](../assets/GanglionImages/ganglion_export-compiled-binary.png)
<br>
![OTA File Created](assets/GanglionImages/ganglion_ota-zip-created.png)
<br><br>
![Change Zip Name](assets/GanglionImages/ganglion_ota-zip-nameChange.png)
<br>
Now you're ready to create custom Ganglion firmware that is packaged correctly for OTA programming! This walk through will use example code as an example.  
**IMPORTANT NOTE:** Whenever you want to create or modify Ganglion firmware, You must **xAlways** put the line  
`#include <OpenBCI_Ganglion_Library.h>`  
at the top of your code!  
To create the OTA files, simply select `Export compiled Binary` from the `Sketch` menu. The Arduino IDE will take a few moments, and the tools you just installed will create the `.zip` file you need for OTA ***right in the sketch folder*** right beside your sketch! Cool! Go ahead and change the name of the file to remove the `.ino.Simblee` and you are good to go.

## Setting Up for OTA Programming On A Windows
### Coming Sooooon!

## Setup Mobile Device For OTA Programming

The Simblee is designed around a Nordic Semiconductor [nRF51822](http://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822), and so we need to use the Nordic nRF apps to do the actual Over-The-Air stuff. Here's what you will need for this tutorial:

### iPhone Setup: What You Need

* iPhone
* nRF Toolbox App
* Lightblue Explorer App

![nRF Toolbox appStore](assets/GanglionImages/ganglion_iphone-get-toolbox.png)
![Lightblue Explorer AppStore](assets/GanglionImages/ganglion_iphone-get-lightblue.png)

### Install apps

Install the nRF Toolbox and Lightblue Explorer apps onto you device.

### Verify Ganglion Version

![Lightblue Scan](assets/GanglionImages/ganglion_iphone-select-simblee-lightblue.png)

Turn on your Ganglion, and turn on your phone's bluetooth Then open the Lightblue app. The app will open and show you what Bluetooth Peripherals are nearby. The Ganglion will be listed as `Simblee`. Tap that peripheral, and Lightblue will connect to and interrogate it.  
**NOTE: the Ganglion may also show up as DfuTarg**

![Simblee Interrogation](assets/GanglionImages/ganglion_iphone-software-revision.png)

In the Device Information, you will find the following:

* Manufacturer Name String
* Model Number String
* Hardware Revision String
* Firmware Revision String
* Software Revision String

You should see `openbci.com` as the Manufacturer, `Gagnlion` as the Model Number, and `1.1.1` as the **Software Revision String**. The Hardware and Firmware versions are generated by the Simblee itself.  
**IMPORTANT NOTE: If the Software Revision String is earlier than 1.1.1 you *cannot do OTA* until you follow the Hardware Upload Tutorial at the bottom of this page.**  

### Android Setup: What You Need

* Android Device
* nRF Toolbox App
* nRF Connect App

![nRF Toolbox PlayStore](assets/GanglionImages/ganglion_android-get-toolbox.png)
![nRF Connect PlayStore](assets/GanglionImages/ganglion_android-get-connect.png)

### Install apps

Install the nRF Toolbox and nRF Connect Apps onto you device.

### Verify Ganglion Version

![nRF Connect Scan](assets/GanglionImages/ganglion_android-connect-to-ganglion.png)

Turn on your Ganglion, and turn on your device's bluetooth then open the nRF Connect App. The app will open and show you what Bluetooth Peripherals are nearby. The Ganglion will be listed as `Ganglion-XXXX` where `XXXX` is the 4 character code specific to your Ganglion. Tap that peripheral, and nRF Connect will connect to and interrogate it.  

![Ganglion Interrogation](assets/GanglionImages/ganglion_android-device-information.png)
![Device Information](assets/GanglionImages/ganglion_android-software-revision.png)

Tap the `Device Information` service, and it will open up to show you the following information.  
**NOTE:** You may need to tap the screen to read this data.

* Manufacturer Name String
* Model Number String
* Hardware Revision String
* Firmware Revision String
* Software Revision String

You should see `openbci.com` as the Manufacturer, `Ganglion` as the Model Number, and `1.1.1` as the **Software Revision String**. The Hardware and Firmware versions are generated by the Simblee itself.  
**IMPORTANT NOTE: If the Software Revision String is earlier than 1.1.1 you *cannot do OTA* until you follow the Hardware Upload Tutorial at the bottom of this page.**  


## Using Your Mobile Device To Do OTA Programming

![Sharing Options](assets/GanglionImages/ganglion_iphone-share-download.png)
![Import with nRF Toolbox](assets/GanglionImages/ganglion_iphone-import-download.png)

Now we need to get the `.zip` file from your Arduino Sketch folder to your iPhone. In this example, I'm going to use email. Email the `.zip` file to yourself, and then open and download it on your iPhone. Tap the sharing options in the lower left corner and select the `Import with nRF Toolbox` option. Since you have already installed nRF Toolbox, the `DFU` tool will open with the downloaded file already selected.

![DFU Tool](assets/GanglionImages/ganglion_iphone-select-dfu.png)
![DFU Select File](assets/GanglionImages/ganglion_iphone-select-file-button.png)
![DFU Select User Files](assets/GanglionImages/ganglion_iphone-select-user-files.png)
![DFU Select Inbox](assets/GanglionImages/ganglion_iphone-select-inbox.png)
![DFU Inbox](assets/GanglionImages/ganglion_iphone-select-file.png)

If you ever want to re-upload a program that you already have on your phone, select the `DFU` tool after launching the nRF Toolbox app. Tap the `Select File` button, and on the next screen at the bottom you will see an option for `User Files`. Select that, and then `Inbox` on the next screen to choose from all of your nRF Imported files.


## Setting up to Program Ganglion Using Hardware

Older Ganglions (pre-2017) could only be programmed using hardware first, then over the air. Newer Ganglions can be programmed OTA or using hardware.

### What You Need

* FTDI Breakout or OpenBCI Cyton Dongle
* 0.1uF Capacitor
* Jumper Wires
* Arduino IDE v

![FTDI Breakout](assets/ThirdPartyImages/FTDI_Friend.jpg)
![Capacitor](assets/GanglionImages/caps.jpg)
![Ganglion Pins Connection](assets/GanglionImages/ganglion_ftdi-connection.jpeg)


For this tutorial, I will use the [Adafruit FTDI Friend](https://www.adafruit.com/products/284). You can use any FTDI breakout, as long as it uses **only 3V for logic levels**. If you go to Adafruit to purchase one, you can also pick up some [jumper wires](https://www.adafruit.com/products/758), and [0.1uF Capacitors](https://www.adafruit.com/products/753) as well.  
**IMPORTANT NOTE: THE GANGLION IS A 3V DEVICE! YOU MUST NEVER CONNECT ANY HIGHER VOLTAGE SOURCE TO ANY OF THE PINS!**  
The 0.1uF capacitor needs to be in between the `RESET` pin of the Ganglion and the `RTS` pin of the FTDI breakout.

### Set Up Arduino to Program Your Ganglion

Follow the guide at the top of this page called _Build From Source_ all the way down till _How To Create an OTA File_, then come back here.

### 'Simblee' selected and 'DefaultGanglion' open

Select Simblee from menu bar `Tools > Board` and open the `DefaultGanglion` example from `File > Examples > OpenBCI_Ganglion_Library > DefaultGanglion`.

### Plug in Dongle or FTDI Friend and Select Serial Port

Now is a good time to plug your Dongle in and power up the Ganglion.

![serial_port](assets/GanglionImages/PortSelect.png)

* Select the correct serial port from the `Tools > Port` menu for your OpenBCI Dongle or FTDI friend.

	* On Macs, this will be named **/dev/tty.usbserial-DN00nnnn** where the nnnn is a combination of numbers and letters specific to your OpenBCI Dongle.

	* On Windows, the serial port will be listed as a numbered COM port.

	* On Linux, it will be different.

### Verify Wire Connections and Press Upload

With your wires all connected correctly, you should be able to click the `Upload` button and successfully re-program the Ganglion. Now you're ready to do OTA Programming!
