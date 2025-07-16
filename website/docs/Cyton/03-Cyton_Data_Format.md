---
id: CytonDataFormat
title: Cyton Data Format
---

This discussion of the OpenBCI data format applies only to OpenBCI `v1` (2014-2016) and `v2.0.0` (Fall 2016). For OpenBCI Cyton, the board contains either a ChipKIT or ATmega microcontroller, both of which can be programmed through the Arduino IDE. The Cyton board has an onboard RFDuino radio module acting as a "Device." The Cyton system includes a USB dongle for the PC, which acts as the RFDuino "Host." The format of the OpenBCI data as seen on the PC is defined by a combination of the Arduino code on the Cyton board and the RFDuino code running on the Host. So, if you don't like the data format defined here, feel free to change it! For more info on the v2 firmware, see these [Notes On Updating and Using v2.0.0 Cyton Firmware](Cyton/05-Cyton_Board_Programming_Tutorial.md). There is also further information on controlling the OpenBCI Cyton on our [OpenBCI Cyton SDK page](Cyton/04-OpenBCI_Cyton_SDK.md).

## Proprietary ("RFDuino") vs Standard Bluetooth

OpenBCI Cyton uses RFDuino modules for its Bluetooth wireless connection. To achieve the highest data rates, OpenBCI supplies an RFDuino USB dongle that connects to the computer. When using this USB dongle, higher data rates can be achieved compared to using a standard Bluetooth 4.n BLE connection.

If you prefer to use a standard Bluetooth connection (to a mobile phone, for instance), that software and data format have not yet been defined.

## Serial Setup

The RFDuino USB dongle (the RFDuino "Host") is connected to an FTDI USB&lt;&gt;Serial converter configured to appear to the computer as if it is a standard serial port running at a rate of 115200 baud using the typical 8-N-1 configuration. It is possible to run at a faster baud rate (FT231XQ-R on dongle tested up to 1Mbaud), but 115200 is required if you want to upload code to the target microcontroller (uC).

## Startup

### **Cyton Board**

The chipKIT on our 32-bit Board does not go through a reset cycle when its serial port is opened. Because of this, it's possible to connect to the 32-bit board and not know its state. In this case, the terminal or application should write a **v** to the serial port, which causes the system to reset its state to default values.

### **8bit Board (deprecated)**

When the serial port for the dongle is opened by your PC, it will reset an 8-bit Board. That's because the DTR signal from FTDI is being sent over the air, and the ATmega is configured as an Arduino UNO. You will see the familiar blink of the pin 13 LED. After a second or so, you will see the OpenBCI board generate a few lines of ASCII text displaying the device IDs of the ADS1299 and Accelerometer, ending in $$$. If you are writing client software for the PC, your software must expect an ASCII string on startup and look for the $$$ to know it is ready to receive commands.

## Initiating Binary Transfer

Once the OpenBCI has initialized itself and sent the $$$, it waits for commands. In other words, it sends no data until it is told to start sending data. To begin data transfer, transmit a single ASCII **b**. Once the **b** is received, continuous transfer of data in binary format will begin. To stop the data stream, send an **s**.

#### Firmware Version 1.0.0 (2014 to Fall 2016)

Both the Host and Device radios recognize the **b** and **s** commands and enter or exit streaming mode accordingly. That's right, the radio modules on both the OpenBCI board and the Dongle have two states:

- **!streamingData**
  - The radios appear to be a transparent UART between the PC and target uC
  - [Command characters](Cyton/04-OpenBCI_Cyton_SDK.md) need some delay before and after sending to pass from PC to target uC
- **streamingData**
  - Device radio expects to receive 31 bytes in each data packet from the uC
  - After 1 second of no transmission, or not receiving 31 bytes in time, Device and Host will revert to **!streamingData** mode
  - Command characters can be sent from the PC following the timing protocol above

#### Firmware Version 2.0.0 (Fall 2016 to Now)

There are no states in the new Device and Host radio code. However, we had to introduce a packet format that **must** be followed when trying to send samples at 250Hz! You must send a one-byte header `0x41`, then 31 bytes of data (your choice), followed by `0xCX` where X is 0-F in hex. This X is carried through to the PC/Driver and is described towards the end of the next section.

## Binary Format

Each packet contains a header, followed by a sample counter, then 8 ADS channel data, the three axes values of the accelerometer, and finally a footer. The accelerometer data are optional and don't need to be sent with every packet. If unused, the bytes will read 0. This allows for user-defined auxiliary data to be sent in the last six bytes before the footer. Also, there may be room for compressing more samples. Here are details on the format.

**Header**

- Byte 1: 0xA0
- Byte 2: Sample Number

**EEG Data**  
Note: values are 24-bit signed, MSB first

- Bytes 3-5: Data value for EEG channel 1
- Bytes 6-8: Data value for EEG channel 2
- Bytes 9-11: Data value for EEG channel 3
- Bytes 12-14: Data value for EEG channel 4
- Bytes 15-17: Data value for EEG channel 5
- Bytes 18-20: Data value for EEG channel 6
- Bytes 21-23: Data value for EEG channel 7
- Bytes 24-26: Data value for EEG channel 8

**Aux Data**

- Bytes 27-32: 6 bytes of data defined and parsed based on the **Footer** below

**Footer**

- Byte 33: 0xCX where X is 0-F in hex

#### Firmware Version 1.0.0 (2014 to Fall 2016)

The following table is sorted by `Stop Byte`. Drivers should use the `Stop Byte` to determine how to parse the six `AUX` bytes.

| Stop Byte | Byte 27 | Byte 28 | Byte 29 | Byte 30 | Byte 31 | Byte 32 |
| --------- | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| 0xC0      |   AX1   |   AX0   |   AY1   |   AY0   |   AZ1   |   AZ0   |

AX1-AX0: Data value for accelerometer channel X
AY1-AY0: Data value for accelerometer channel Y
AZ1-AZ0: Data value for accelerometer channel Z

#### Firmware Version 2.0.0 (Fall 2016 to Now)

The following table is sorted by `Stop Byte`. Drivers should use the `Stop Byte` to determine how to parse the six `AUX` bytes.

| Stop Byte | Byte 27 | Byte 28 | Byte 29 | Byte 30 | Byte 31 | Byte 32 | Name                              |
| :-------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | --------------------------------- |
|   0xC0    |   AX1   |   AX0   |   AY1   |   AY0   |   AZ1   |   AZ0   | Standard with accel               |
|   0xC1    |   UDF   |   UDF   |   UDF   |   UDF   |   UDF   |   UDF   | Standard with raw aux             |
|   0xC2    |   UDF   |   UDF   |   UDF   |   UDF   |   UDF   |   UDF   | User defined                      |
|   0xC3    |   AC    |   AV    |   T3    |   T2    |   T1    |   T0    | Time stamped **set** with accel   |
|   0xC4    |   AC    |   AV    |   T3    |   T2    |   T1    |   T0    | Time stamped with accel           |
|   0xC5    |   UDF   |   UDF   |   T3    |   T2    |   T1    |   T0    | Time stamped **set** with raw aux |
|   0xC6    |   UDF   |   UDF   |   T3    |   T2    |   T1    |   T0    | Time stamped with raw aux         |

AX1-AX0: Data value for accelerometer channel X
AY1-AY0: Data value for accelerometer channel Y
AZ1-AZ0: Data value for accelerometer channel Z

We can still fit a 25Hz accelerometer in with time stamps due to some interlacing and timing constraints. Since we stream channel data at 250Hz and accelerometer at 25Hz; we have essentially 10 samples to send the accelerometer data in. When a `0xC3` or `0xC4` you should parse _Byte 27_ to indicate what _Byte 28_ is:

| Byte 27 | Byte 28 |
| :-----: | :-----: |
|   'X'   |   AX1   |
|   'x'   |   AX0   |
|   'Y'   |   AY1   |
|   'y'   |   AY0   |
|   'Z'   |   AZ1   |
|   'z'   |   AZ0   |

Where _AC_ stands for accelerometer code and is an ASCII character. An uppercase letter signifies that _Byte 28_ is the upper 8 bits of the 16-bit signed integer, while a lowercase character represents the lower 8 bits of the 16-bit signed integer. You combine both bytes to form one number. For example, let's say a sample comes in with _AC_ equal to 'X'; we would then store the value in _AV_ to a temporary variable. The next sample comes in with 'x' for its _AC_ byte; we would then combine this sample's _Byte 28_ with the previous sample's _Byte 28_ and then convert as described in the section below called _16-Bit Signed Data Values_.

T3-T0: 32 bit unsigned integer OpenBCI board time representing time since the board was started in ms. Simply store as an unsigned integer.

`0xC3` and `0xC5` are special in that they contain the exact same data as their counterparts `0xC4` and `0xC6`. However, `0xC3` and `0xC5` are only sent after the timestamp/sync (**&lt;**) command is issued from the PC/Driver to the Board. When the Board parses a **&lt;**, it sets a flag high to send on the next sample a different end byte to allow for the PC/Driver to calculate a round-trip response time.

UDF stands for User Defined, and from a general driver perspective, should be left alone and sent up to the user.

## 24-Bit Signed Data Values

For the EEG data values, you will note that we are transferring the data as a 24-bit signed integer, which is a bit unusual. We use this number format because it is the native format used by the ADS1299 chip at the core of the Cyton board. To convert this unusual number format into a more standard 32-bit signed integer, you can use ideas from the example Processing (aka, Java) code below:

```

int interpret24bitAsInt32(byte[] byteArray) {
    int newInt = (
     ((0xFF & byteArray[0]) << 16) |
     ((0xFF & byteArray[1]) << 8) |
     (0xFF & byteArray[2])
    );
    if ((newInt & 0x00800000) > 0) {
      newInt |= 0xFF000000;
    } else {
      newInt &= 0x00FFFFFF;
    }
    return newInt;
}

```

## 16-Bit Signed Data Values

The accelerometer data, if used, is sent as a 16-bit signed value. We're using a similar scheme to convert these values into 32-bit integers in Processing.

```

int interpret16bitAsInt32(byte[] byteArray) {
  int newInt = (
    ((0xFF & byteArray[0]) << 8) |
    (0xFF & byteArray[1])
    );
  if ((newInt & 0x00008000) > 0) {
      newInt |= 0xFFFF0000;
  } else {
      newInt &= 0x0000FFFF;
  }
  return newInt;

```

    {"}"}

## 32-Bit Unsigned Time Stamp

To time stamp data, if used, is sent as a 32 bit unsigned integer representing time since the board was started in ms. We are using a different scheme to convert these values into 32 bit integers in Processing.

## Interpreting the EEG Data

Once you receive and parse the data packets, it is important to know how to interpret the data so that the EEG values are useful in a quantitative way. The two critical pieces of information are (1) the sample rate and (2) the scale factor.

For the sample rate, we set the default rate to 250 Hz. Faster rates are supported by the ADS1299, but the RFDuino wireless link and the serial limits might not be able to keep up with faster sample rates. If you give it a try, let us know how it works!

For the scale factor, this is the multiplier that you use to convert the EEG values from “counts” (the int32 number that you parse from the binary stream) into scientific units like “volts.” By default, our Arduino sketch running on the OpenBCI board sets the ADS1299 chip to its maximum gain (24x), which results in a scale factor of 0.02235 microvolts per count. Because the gain is user-configurable (24x, 12x, 8x, 6x, 4x, 2x, 1x), the scale factor will be different. If the gain is changed, the equation that you should use for determining the scale factor is:

```

Scale Factor (Volts/count) = 4.5 Volts / gain / (2^23 - 1);

```

Note that 2^23 might be an unexpected term in this equation considering that the ADS1299 is a 24-bit device. That's because the 24-bit raw count value is in 2's complement format. This equation is from the ADS1299 data sheet, specifically from the text surrounding Table 7. This scale factor has also been confirmed experimentally using known calibration signals.

Accelerometer data must also be scaled before it can be correctly interpreted. The equation used to scale accelerometer data is as follows (we assume 4Gs, so 2mG per digit):

```

Accelerometer Scale Factor = 0.002 / 2^4;

```

**As of January 2021, these constants and equations are included in BrainFlow for Cyton users!** This means users can pick any supported language and the data will already be scaled appropriately. These equations are still necessary if you plan to use data stored to SD card using a Cyton.

## 16 Channel Data with Cyton+Daisy

Our 16-channel system allows for control of individual settings for all 16 channels, and data is retrieved from both ADS1299 ICs at a rate of 250SPS. The current bandwidth limitations on our serial radio links limit the number of packets we can send. To solve this, we are sending data packets at the same rate of 250SPS, and alternating sample packets between the onboard ADS1299 and the Daisy ADS1299. The method takes an average of the current and most recent channel values before sending to the radio. The first sample sent will be invalid because there is no previous sample to average it with. After this, on **odd** sample numbers, the Board ADS1299 values are sent, and on **even** sample numbers, the Daisy ADS1299 samples are sent. When running the system with 16 channels, it is highly recommended that you use an SD card to store the raw (un-averaged) data for post-processing.

| sample# |     recorded      |          sent          |                   sent |
| ------: | :---------------: | :--------------------: | ---------------------: |
|       0 | board(0),daisy(0) |                        |      an invalid sample |
|       1 | board(1),daisy(1) | avg(board(0),board(1)) |                        |
|       2 | board(2),daisy(2) |                        | avg(daisy(1),daisy(2)) |
|       3 | board(3),daisy(3) | avg(board(2),board(3)) |                        |
|       4 | board(4),daisy(4) |                        | avg(daisy(3),daisy(4)) |
|       5 | board(5),daisy(5) | avg(board(4),board(5)) |                        |
|       6 | board(6),daisy(6) |                        | avg(daisy(5),daisy(6)) |

The received averages might be upsampled to 250SPS in the following simple manner:

|  received |           |    upsampled board data | upsampled daisy data    |
| --------: | :-------- | ----------------------: | :---------------------- |
| sample(3) |           | avg(sample(1),sample(3) | sample(2)               |
|           | sample(4) |               sample(3) | avg(sample(2),sample(4) |
| sample(5) |           | avg(sample(3),sample(5) | sample(4)               |
|           | sample(6) |               sample(5) | avg(sample(4),sample(6) |
| sample(7) |           | avg(sample(5),sample(7) | sample(6)               |
|           | sample(8) |               sample(7) | avg(sample(6),sample(8) |

The times of the upsampled values are delayed by 1 sample compared to the received values.

### Room For Improvement

**Change protocol to meet other standards.** The over-air data is sent in packets (or frames, depending on your preferred word). The maximum bytes allowed per packet is 32. We are reserving the first byte to use as a packet checksum in our protocol. So the available bytes per packet, as far as the uC is concerned, is 31. The over-air protocol that the Dongle/RFduino Host gets is:

- Byte 1: Packet Counter
- Byte 2: Sample Number
- Bytes 3-5: Data value for EEG channel 1
- Bytes 6-8: Data value for EEG channel 2
- Bytes 9-11: Data value for EEG channel 3
- Bytes 12-14: Data value for EEG channel 4
- Bytes 15-17: Data value for EEG channel 5
- Bytes 18-20: Data value for EEG channel 6
- Bytes 21-23: Data value for EEG channel 6
- Bytes 24-26: Data value for EEG channel 8
- Bytes 27-28: Data value for accelerometer channel X
- Bytes 29-30: Data value for accelerometer channel Y
- Bytes 31-32: Data value for accelerometer channel Z

Our Host code removes the Packet Counter and adds the header and footer. It could be modified to work natively with other protocol specs for other signal processing software....

**Data Compression.** In situations where an increase in the sample rate or higher channel counts are desired, a data compression scheme can be implemented. As noted above, when sending **only** the ADS1299 values for 8 channels, there are six unused bytes in the radio packet. It may be possible to, for example, increase the sample rate and compress two samples' worth of ADS data into a single radio packet, or fit all 16 channels of data into a single packet and avoid the averaging that is currently used.
