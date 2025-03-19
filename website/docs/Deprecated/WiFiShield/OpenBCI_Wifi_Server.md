---
id: WiFiAPI
title: OpenBCI WiFi Shield API
---

The OpenBCI Wifi Shield seeks to offer a plug and play Wifi solution for the OpenBCI Cyton and Ganglion.

## Overview

One of the coolest parts of the WiFi Shield is its HTTP web server. For developers looking to get data from OpenBCI with a WiFi Shield, these HTTP commands will allow you to stream data to your applications over TCP or MQTT.

## Prerequisites

Follow the [WiFi Getting Started Guide](Wifi_Getting_Started_Guide.md) to get your WiFi Shield on your Wireless Network.

## Get Wifi Shield on Local Wireless Network

Be sure that your WiFi Shield is on your local network.

The steps for connecting to the Wifi Shield and streaming over TCP:

1.  Get IP Address of the Wifi Shield
2.  Open a TCP Socket on Host Computer
3.  Send `POST` `/tcp` http request with open socket IP/Port number, can include options (i.e. output format of JSON or RAW output, use delimiters between packets, adjust latency)
4.  Send `GET` `/stream/start` or `GET` `/stream/stop`

The steps for connecting to the Wifi Shield and streaming over MQTT:

1.  Find IP Address of Wifi Shield
2.  Set up MQTT broker
3.  Send `POST` `/mqtt` http request with broker address with optional username and password
4.  Send `GET` `/stream/start` or `GET` `/stream/stop`

## Get IP Address of Wifi Shield

To programmatically discover WiFi Shields on your local network use [Simple Service Discovery Protocol](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol) (SSDP) to find the device on your local network.

[Node.js OpenBCI WiFi Driver](https://github.com/aj-ptw/OpenBCI_NodeJS/blob/wifi/examples/getStreamingWifi/getStreamingWifi.js) will implement SSDP for you.

Use the [OpenBCI WiFi GUI](Wifi_Getting_Started_Guide.md#get-wifi-shield-ip-address) which will use the [OpenBCI Electron Hub](Deprecated/OpenBCI_Hub.md#scan) to find WiFi Shields IP Address. **THE OPENBCI_HUB HAS BEEN DEPRECATED, TO ACCESS THIS FEATURE USE [GUI V4.2.0](https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0).** You can also get the IP address in GUI v5 by selecting the WiFi shield from the list. Depending on your network configuration, it may not show automatically.

Use a graphical user interface [Mac - Lan Scan](https://itunes.apple.com/us/app/lanscan/id472226235?mt=12)

We are still hashing out the best ways to discover the Wifi shield on the networks (home vs. enterprise and beyond) so [please contribute ides if you have any on this github issue](https://github.com/OpenBCI/OpenBCI_WIFI/issues/8) and we can add it in! [Wifi Direct Feature Request (researcher frequently requested feature)](https://github.com/OpenBCI/OpenBCI_WIFI/issues/9)

## Open a TCP Socket on Host Computer

In order to get low latency high-reliability wireless data transmission we will open a TCP socket on your host Computer. The Wifi Shield will stream data to this socket.

### Raw Output Mode

In `raw` output mode the data format follows the OpenBCI [33byte Binary Data Format](Cyton/03-Cyton_Data_Format.md#binary-format). Even the Ganglion over WiFi Shield will send in the 33byte with the first four channels containing data and the upper four channels are all zeros.

### JSON Output Mode

In `json` output mode, the WiFi Shield will convert raw data into nano volts. As of `v3.0.0` firmware for Cyton and `v2.0.0` firmware for Ganglion, the gain for each channel will be sent to the WiFi Shield once at the first connection between devices, and once each time the Ganglion or Cyton receives a start of streaming command. The WiFi Shield will connect to an NTP server to get the time once, and the WiFi Shield will then send the data in JSON.

The JSON Adheres to the popular LSL stream format by default

```

{
  "chunk": [
    {"data": [<float>, ..., <float>],  "timestamp": <float> },
    ...
    {"data": [<float>, ..., <float>],  "timestamp": <float> }
  ]
}

```

#### Examples

Buffer of 5 samples. Each sample has 4 channels:

```

[
  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774194733},
  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774195230},
  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774195735},
  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774196209},
  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774196715}
]

```

## OpenBCI WiFi Shield HTTP Rest Server

### Send `/tcp` http request for TCP configuration

Refer to [http server description](https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0) swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. There are many options such as `output` mode for JSON or raw output, latency, delimiters and many more awesome options to help you easily process data in a driver.

### Send `/mqtt` http request for MQTT configuration

Refer to [http server description](https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0) swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. There are many options such as `output` mode for JSON or raw output, latency, delimiters and many more awesome options to help you easily process data in a driver.

### Send `/command` http requests for control

Refer to [http server description](https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0) swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. To change the sample rate of the Cyton, please use the `~` command as defined in the Cyton SDK docs.

### Send `/latency` http requests for tuning

Refer to [http server description](https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0) swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server.

The time in micro seconds (us) between packet sends. The higher the OpenBCI sample rate, the higher the latency needed. Default is 1000us, minimum stable is 50us. For upper limit sample rates such as 4kHz/8kHz/16kHz, latency around 20ms seems to really stabilize the system.

## Parsing Data from Wifi Shield

Data can be sent from the Wifi shield in two different formats: `raw` and `JSON`.

### `raw` Byte Stream Format

The first byte to send is the control byte. For streaming data, that goes on the TCP socket, send `0xCX` (where `X` is `0-F` in hex) as the control byte. In the `OpenBCI_32bit_Library` code base:

```

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

```

This code writes 32 bytes of data in the correct format and therefore as soon as it arrives at the Wifi shield. The Wifi shield will convert the 32 byte packet to the standard 33 byte [binary format](Cyton/03-Cyton_Data_Format.md#binary-format) by moving the control byte `0xCn`, where `n` is `0-F` (hex), to the stop position and add add `0xA0` to the start position. This allows for a seamless integration with the tried and tested parsing systems already built for the Cyton.
**Important** if you want to only send `20` bytes of data per packet, you still must send this `32` bytes with the proper start and stop bytes.

### JSON format

Suggested options for `POST` /tcp or `POST` /mqtt

```

{
  "port": ..., // Enter your local server port
  "ip": ..., // Enter your local ip address of server
  "delimiter": true, // will place `\r\n` at end of each chunk
  "latency": 20000, // Time to wait between packet sends in micro seconds.. i.e. latency here is 20ms
  "sample_numbers": false, // Don't include sampleNumber in each sample
  "timestamps": true // Include timestamps in each sample
}

Now when you start streaming data, you can simply look for `\r\n` in the incoming stream of data and each time you find it, you know you just got then end of packet and can parse everything before that `\r\n` as JSON.


```
