---
id: WiFiSDK
title: OpenBCI Wifi SDK
---

The purpose of this doc is to describe what's required to interface another micro-controller with the WiFi Shield.

## Prerequisites

Please have the [latest Arduino](https://www.arduino.cc/en/Main/Software) version downloaded and installed.

## Install OpenBCI Wifi Master

There are many options for downloading the OpenBCI Wifi Master.

### From Arduino Library Manager (easiest!)

Simply search for _OpenBCI Wifi Master_ in the Arduino Library Manager. For help using the Library manager please checkout the well maintained [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc3).

### Manual Installation

 1. Download the latest (or version of choice) from [arduinolibraries.info](http://www.arduinolibraries.info/libraries/open-bci_wifi_master).
 2. Unzip the folder and change the name to `OpenBCI_Wifi_Master`
 3. Move `OpenBCI_Wifi_Master` to:

  On Mac: `/Documents/Arduino/libraries`  
  On Windows: `C:\Users\username\Documents\Arduino\libraries`

If you're have trouble or want to learn more checkout the [Official Arduino Guide](https://www.arduino.cc/en/Guide/Libraries#toc5) for manual installation.

### Clone From Github

Use a git client to clone the official repository for the [OpenBCI_Wifi_Master_Library](https://github.com/OpenBCI/OpenBCI_Wifi_Master_Library) into your `libraries` folder.

## Sending Data to WiFi Shield

### Overview

The WiFi Shield acts a SPI slave device to the Cyton or Ganglion. The max speed the ESP8266 can seem to handle is 10MHz. A [SPISlave example](https://github.com/esp8266/Arduino/blob/master/libraries/SPISlave/examples/SPISlave_Test/SPISlave_Test.ino) we based our [Wifi](https://github.com/OpenBCI/OpenBCI_WIFI/blob/master/examples/DefaultBoard/DefaultBoard.ino) code on. To interact with this SPI slave library, (you wanted to use this WiFi Shield for some other reason...) you should look at the [SPI Master example](https://github.com/esp8266/Arduino/blob/master/libraries/SPISlave/examples/SPISlave_Master/SPISlave_Master.ino) because the commands to get data vs read a status register are strictly defined and must be followed. The first constraint the Arduino ESP8266 SPI slave places on us is to always send 32 bytes per message. This library says that each packet must be 32 bytes, so that's where we begin....

### Byte Stream Format
The first byte to send is the control byte. For streaming data, that goes on the TCP socket, send `0xCX` (where `X` is `0-F` in hex) as the control byte. In the `OpenBCI_32bit_Library` code base:

~~~
/*  
 * @description Writes channel data and axisData array to serial port in
 *  the correct stream packet format.
 */
void OpenBCI_32bit_Library::sendChannelDataWifi(void)  {

    wifiStoreByte(OPENBCI_EOP_STND_ACCEL); // 0xC0 1 byte

    wifiStoreByte(sampleCounter); // 1 byte

    ADS_writeChannelDataWifi(); // 24 bytes

    accelWriteAxisDataWifi(); // 6 bytes

    wifiFlushBuffer(); // Flushes the buffer to the SPISlave ESP8266 device!

    sampleCounter++;

}
~~~  

This code writes 32 bytes of data in the correct format and therefore as soon as it arrives at the WiFi Shield. The WiFi Shield will convert the 32 byte packet to the standard 33 byte [binary format](02Cyton/03-Cyton_Data_Format.md#binary-format) by moving the control byte `0xCn`, where `n` is `0-F` (hex), to the stop position and add add `0xA0` to the start position. This allows for a seamless integration with the tried and tested parsing systems already built for the Cyton.
**Important** if you want to only send `20` bytes of data per packet, you still must send this `32` bytes with the proper start and stop bytes.
