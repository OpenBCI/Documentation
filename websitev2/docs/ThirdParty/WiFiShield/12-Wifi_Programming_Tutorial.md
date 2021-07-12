---
id: WiFiProgam
title: Wifi Shield Programming Tutorial
---
## Overview

The easiest way to update your OpenBCI Wifi Shield Firmware is Over-The-Air (OTA). You can also update firmware through a direct connection to the serial port on the WiFi Shield itself. For the wired programming, you can use the USB dongle that comes with the Cyton as a pass through or you can use a standard [FTDI UART to USB Breakout board](#program-openbci-wifi-with-ftdi-boards).

## Program WiFi Shield Over The Air

### Use Any Web Browser

Pick your default web browser
![default browser](../../assets/ThirdPartyImages/wifi_firmware_update_default_browser.png)

### Download the WiFi Shield Firmware

First, download the file called `DefaultWifiShield.bin` from the latest release [OpenBCI_WiFi Github repository](https://github.com/OpenBCI/OpenBCI_WIFI/releases/latest).

Save to your downloads folder.
![download the latest binary](../../assets/ThirdPartyImages/wifi_firmware_update_download.png)

### Isolate and Power WiFi Shield

Next **remove your wifi shield from the Cyton or Ganglion** if it's not already.

Plug a battery into the WiFi Shield and power the Shield by turning the power switch to the `ON` position.

### Get WiFi Shield on Your Wireless Network

Then [get your WiFi Shield on your local wireless network](GettingStarted/Boards/03-Wifi_Getting_Started_Guide.md#get-the-wifi-shield-on-your-wireless-network) if it's not already.

### Get Address of WiFi Shield

Find the IP Address of your WiFi Shield by clicking the `>` button in the WiFi section of the Control Panel, and then clicking the IP Address button, as shown in the image below:

![image](../../assets/ThirdPartyImages/IPfind.png)

If you're having issues with that step, here's a more in-depth tutorial on using the OpenBCI_GUI to get [your shields ip address](GettingStarted/Boards/03-Wifi_Getting_Started_Guide.md#get-wifi-shield-ip-address).

### Go to /update Page of WiFi Shield

Navigate to `http://192.168.0.XXX/update` where `192.168.0.XXX` is the IP Address of your WiFi Shield found in the step above.

![navigate to update page](../../assets/ThirdPartyImages/wifi_firmware_update_ip_address.png)

On mac, you may use your shields unique name instead of the ip address; i.e.  where `2F0E` is your devices unique identifier. Either option works on Mac.

![use unique id on mac](../../assets/ThirdPartyImages/wifi_firmware_update_mac_using_mdns.png)

### Select Binary File to Upload

Now select the `Choose File` button and from the drop down selected the `DefaultWifiShield.bin` which you downloaded earlier
![select choose file](../../assets/ThirdPartyImages/wifi_firmware_update_select_binary.png)

### Update the Firmware

Then select `Update` to start the update process
![selecting update](../../assets/ThirdPartyImages/wifi_firmware_update_select_update.png)

The page will hang for about 10-15 seconds, this the firmware being uploaded.
![firmware uploading](../../assets/ThirdPartyImages/wifi_firmware_update_first_wait_page.png)

Then you will see a success message appear, your WiFi Shield is now rebooting, please continue to wait for about 30 seconds.

**Note:** on some browsers, the page will not automatically refresh. If you've waited more than 30 seconds for the success message to appear, skip to the next step and see if it works. If it doesn't try the above step again.

![success message](../../assets/ThirdPartyImages/wifi_firmware_update_success_rebooting.png)

### Verify New Version Number

Once your web browser refreshes itself and the update page is displayed again, you may navigate to the version page and verify your wifi firmware version matches the version you downloaded. If the version is not correct, then be sure you removed your WiFi Shield from a Cyton or Ganglion and try again.

![verify firmware version number](../../assets/ThirdPartyImages/wifi_firmware_update_version.png)

## Hardware for Wired upload

### Program OpenBCI Wifi with FTDI Boards

There are many, many FTDI chip breakouts and cables out there that you can use. Here are a couple examples of popular devices.

### FTDI Friend

![FTDI Friend](../../assets/ThirdPartyImages/FTDI_Friend.jpg)
![FTDI Friend Back](../../assets/ThirdPartyImages/FTDI_FriendBack.jpg)

Another example would be the [FTDI Friend](http://www.adafruit.com/products/284) from Adafruit. I cut the trace on the RTS and 5V pads as well. These are the correct settings for uploading to ESP8266 using FTDI Friend. These breakouts are awesome and how the board was developed.

### FTDI Basic Breakout

![FTDI BasicFront](../../assets/ThirdPartyImages/FTDI_BASICfront.jpg)
![FTDI BasicBack](../../assets/ThirdPartyImages/FTDI_BASICback.jpg)

Sparkfun makes an FTDI breakout as well, and they come in a couple of flavors. 5V and 3V. By now, you know that you want the [3V Version](https://www.sparkfun.com/products/9873). [pic coming soon] Also, if you have a version of this board with a voltage selection on the back, make sure that it has the 3.3V pads connected and the 5V pads cut!  

### OpenBCI Cyton Dongle

The OpenBCI Dongle can be used to upload firmware to ESP8266. [See the section](Cyton/06-Cyton_Radios_Programming_Tutorial.md#upload-pass-thru-radio-firmware-version-2xx-fall-2016) on how to [pass through the code](Cyton/06-Cyton_Radios_Programming_Tutorial.md#program-device-radio-with-openbci-dongle) in the [Cyton Radio Programming Guide](Cyton/06-Cyton_Radios_Programming_Tutorial.md).

## Download Compiled Binary for Upload

### Install Python Dependency

You will need [either Python 2.7 or Python 3.4 or newer](https://www.python.org/downloads/) installed on your system.

### Download and Install esptool

The latest stable `esptool.py` release can be installed from [pypi](http://pypi.python.org/pypi/esptool) via pip:

```

$ pip install esptool

```

With some Python installations this may not work and you'll receive an error, try `python -m pip install esptool` or `pip2 install esptool`.

After installing, you will have `esptool.py` installed into the default Python executables directory and you should be able to run it with the command `esptool.py`.

In Windows, we use Command Prompt.

### Download the WiFi Shield Firmware

First, download the file called `DefaultWifiShield.bin` from the latest release [OpenBCI_WiFi Github repository](https://github.com/OpenBCI/OpenBCI_WIFI/releases/latest).

Save to your downloads folder.
![download the latest binary](../../assets/ThirdPartyImages/wifi_firmware_update_really_done.png)

### Get the Serial Port of Programmer

The correct serial port for your OpenBCI Dongle or FTDI friend will be

```

* On Macs, this will be named **/dev/tty.usbserial-DN00nnnn** where the nnnn is a combination of numbers and letters specific to your programmer of choice.

* On Windows, the serial port will be listed as a numbered COM port.

* On Linux, it will be different.

```

### Connect WiFi Shield to Programmer

Hook up the FTDI friend, OpenBCI Dongle, or other UART-USB programmer to the Wifi Shield. **Don't power the Wifi shield through the FTDI friend.**

| FTDI_Friend | Wifi Shield |
| ----------- | ----------- |
| GND         | GND         |
| RX          | TX          |
| TX          | RX          |

![Wifi to FTDI friend](../../assets/ThirdPartyImages/wifi_programming_ftdi_friend_hooked_up.jpg)

### Isolate and Power WiFi Shield

Next, **remove your wifi shield from the Cyton or Ganglion** if it's not already.

Remove your Wifi Shield from the Cyton/Ganglion board. **Always use a spudger to remove your WiFi Shield from a Cyton or Ganglion.**

![Wifi alone](../../assets/ThirdPartyImages/wifi_programming_alone.jpg)

Plug a battery into the WiFi Shield and power the Shield by turning the power switch to the `ON` position.

Plug in battery to the WiFi Shield.

![Battery to wifi shield](../../assets/ThirdPartyImages/wifi_programming_power.jpg)

Next, power the Wifi shield.

![Battery to wifi shield](../../assets/ThirdPartyImages/wifi_programming_power_in.JPG)

### Put WiFi Shield in Bootloader Mode

Press and hold the `PROG` button.

![Wifi programming hold prog](../../assets/ThirdPartyImages/wifi_programming_hold_prog.jpg)

Press and release the `RESET` button while holding `PROG`.

![Wifi programming hold reset](../../assets/ThirdPartyImages/wifi_programming_hold_reset.jpg)

![Wifi programming release reset](../../assets/ThirdPartyImages/wifi_programming_release_reset.jpg)

Finally, release the `PROG` button.

![Wifi programming release reset](../../assets/ThirdPartyImages/wifi_programming_release_prog.jpg)

You should see no lights on the WiFi Shield if it is in bootloading mode.

### Upload Code

#### On Mac/Linux

From terminal you installed `esptool.py` to earlier, substitute your serial port name for `YOURPORT` in the command below.

```

$ esptool.py --port /dev/tty.usbserial-YOURPORT write_flash 0x000000 ~/Downloads/DefaultWifiShield.bin

```

#### On Windows

From Command Prompt you installed `esptool.py` to earlier, substitute your serial port name for `COM4` in the command below.

```

$ esptool.py --port COM4 write_flash 0x000000 Downloads\DefaultWifiShield.bin

```

## Compile Source Code to build binary

### Prerequisites to Compile Source Code

**You will need:**

-   Computer (Windows or Mac or Other)
-   [Arduino IDE Version 1.8.3](http://www.arduino.cc/en/main/software)
-   OpenBCI WiFi Shield

**You will need:**

-   Computer running [Arduino v1.8.0](https://www.arduino.cc/en/Main/Software) or later
-   [ESP8266 libraries with SPISlave](https://github.com/esp8266/Arduino)
-   OpenBCI Dongle or FTDI USB to UART (friend) connected to USB port
-   OpenBCI WiFi Shield with battery power
-   OpenBCI WiFi Firmware (follow guide below to download)
-   Various other WiFi Dependencies
-   OpenBCI Cyton SD Firmware (follow guide below to download)
-   OpenBCI WiFi Master Firmware (follow guide below to download)

### Download Latest Arduino

-   If your computer does not have Arduino v1.8.0 (or later), install the latest Arduino IDE which can be found here: 

### Install Firmware From Arduino Library Manager (easiest!)

Don't know what the _Library Manager_ is? Skim over the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc3).

Open the _Library Manager_ and then

1.  Search for _OpenBCI_ and install the latest version for `OpenBCI_Wifi`.

2.  Search for _WiFiManager_ and install the latest version for `WiFiManager`.

3.  Search for _ArduinoJson_ and install the latest version for `ArduinoJson`.

4.  Search for _PubSubClient_ and install the latest version for `PubSubClient`.

5.  Search for _Time_ and install the latest version for `Time` `v1.5.0` by Michael Margolis, you will need to scroll down to the `T` section.

6.  Search for _ntp_ and install the latest version for `NtpClientLib` (**NOT** `NtpClient`).

7.  Use the _Library Manager_ to search for and install:

### Manual Installation of Ganglion Firmware (harder)

1.  Download the latest zips for the following libraries:

    -   [OpenBCI_Wifi](http://www.arduinolibraries.info/libraries/open-bci_wifi)
    -   [WiFiManager](http://www.arduinolibraries.info/libraries/wi-fi-manager)
    -   [ArduinoJson](http://www.arduinolibraries.info/libraries/arduino-json)
    -   [PubSubClient](http://www.arduinolibraries.info/libraries/pub-sub-client)
    -   [Time](http://www.arduinolibraries.info/libraries/time)
    -   [NtpClientLib](http://www.arduinolibraries.info/libraries/ntp-client-lib)

2.  Unzip the folders and change the names to:

```
- OpenBCI_Wifi
- WiFiManager
- ArduinoJson
- PubSubClient
- Time
- NtpClientLib
```

3.  Move all folders to:

```
On Mac: /Documents/Arduino/libraries
On Windows: C:\Users\username\Documents\Arduino\libraries
```

If you don't have a `libraries` folder there, go ahead and make one.  

If you're have trouble or want to learn more checkout the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc5) for manual installation.

### Clone The Repo From Github

Developers looking to contribute or write custom firmware can clone the firmware repositories directly to your `libraries` folder.

```

On Mac: `/Documents/Arduino/libraries`  
On Windows: `C:\Users\username\Documents\Arduino\libraries`

```

-   [OpenBCI_Wifi](https://github.com/OpenBCI/OpenBCI_Wifi)
-   [WifiManager](https://github.com/tzapu/WiFiManager)
-   [ArduinoJSON](https://bblanchon.github.io/ArduinoJson/)
-   [PubSubClient](https://pubsubclient.knolleary.net)
-   [Time](https://github.com/PaulStoffregen/Time)
-   [NtpClient](https://github.com/arduino-libraries/NTPClient)

### Install ESP8266 Core Firmware

Follow the instructions for downloading the [Arduino ESP8266 core from Boards Manager](https://github.com/esp8266/Arduino). The `SPISlave.h` is newly added to the official SDK. **NOTE: Per a comment in the forums: "the GUI only works if the binary is compiled using Arduino ESP library version 2.5.0".**

### Select 'Adafruit Huzzah ESP8266 as Board

If you followed the process in the previous link, and you will be able to from `Tools->Board` select `Adafruit Huzzah ESP8266` from the `ESP8266 Modules` subsection. Then, select from `Tools->Flash Size`, `4M (1M SPIFFS)`.

![board_dropdown](../../assets/ThirdPartyImages/OBCI32_Board_Dropdown.png)

### Select DefaultWifiShield.ino from Examples

In the Arduino IDE go to `Files-->Examples-->OpenBCI_Wifi-->DefaultWifiShield` which will launch the default Wifi Shield firmware. **NOTE You must upload ONLY the `DefaultWifiShield` Sketch!**

### Compile Source Code with Arduino

Restart your Arduino if you just installed all of the dependencies. Select `Verify` from the menu bar `Sketch-->Verify/Compile`.

### Compile Source Code with make

While developing this firmware, we found it much better to use [makeESPArduino](https://github.com/plerup/makeEspArduino) which is a command line tool for building and compiling the firmware without having to use the Arduino IDE! Use the `makeESPWifiDefault.mk` file in the [WiFi's github repo](https://github.com/OpenBCI/OpenBCI_WIFI).

### Get the Serial Port of Programmer

The correct serial port for your OpenBCI Dongle or FTDI friend will be

```

* On Macs, this will be named **/dev/tty.usbserial-DN00nnnn** where the nnnn is a combination of numbers and letters specific to your programmer of choice.

* On Windows, the serial port will be listed as a numbered COM port.

* On Linux, it will be different.

```

### Connect WiFi Shield to Programmer

Hook up the FTDI friend, OpenBCI Dongle, or other UART-USB programmer to the Wifi Shield. **Don't power the Wifi shield through the FTDI friend.**

| FTDI_Friend | Wifi Shield |
| ----------- | ----------- |
| GND         | GND         |
| RX          | TX          |
| TX          | RX          |

![Wifi to FTDI friend](../../assets/ThirdPartyImages/wifi_programming_ftdi_friend_hooked_up.jpg)

### Isolate and Power WiFi Shield

Next **remove your wifi shield from the Cyton or Ganglion** if it's not already.

Remove your Wifi Shield from the Cyton/Ganglion board. **Always use a spudger to remove your WiFi Shield from a Cyton or Ganglion.**

![Wifi alone](../../assets/ThirdPartyImages/wifi_programming_alone.jpg)

Plug a battery into the WiFi Shield and power the Shield by turning the power switch to the `ON` position.

Plug in battery to the wifi shield

![Battery to wifi shield](../../assets/ThirdPartyImages/wifi_programming_power.jpg)

Second power the Wifi shield

![Battery to wifi shield](../../assets/ThirdPartyImages/wifi_programming_power_in.JPG)

### Put WiFi Shield in Bootloader Mode

Press and hold the `PROG` button.

![Wifi programming hold prog](../../assets/ThirdPartyImages/wifi_programming_hold_prog.jpg)

Press and release the `RESET` button while holding `PROG`.

![Wifi programming hold reset](../../assets/ThirdPartyImages/wifi_programming_hold_reset.jpg)

![Wifi programming release reset](../../assets/ThirdPartyImages/wifi_programming_release_reset.jpg)

Finally, release the `PROG` button.

![Wifi programming release reset](../../assets/ThirdPartyImages/wifi_programming_release_prog.jpg)

You should see no lights on the WiFi Shield if it is in bootloading mode.

### Upload the code

Now press upload in the Arduino IDE or execute the `make -f makeESPDefault.mk flash` to upload to the shield.
