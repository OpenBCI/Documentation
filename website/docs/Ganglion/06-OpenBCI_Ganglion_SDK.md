---
id: GanglionSDK
title: Ganglion SDK
---

The OpenBCI boards communicate using a byte string (mostly ASCII) command protocol. This Doc covers command use for the OpenBCI Ganglion. Further this Doc covers the commands needed in order to alter the radio system. There have been several iterations of the firmware. Please send reset commands to your board to see what firmware you have if you're unsure.

## Ganglion Command Protocol Overview

Ganglion boards have a powerful micro-controller on board that comes pre-programmed with the firmware. The Simblee radio link uses the Nordic Gazelle stack and library along with a BLE stack. The micro-controller has been programmed with firmware that interfaces between the MCP (Analog Front End) and LIS3DH (Accelerometer). The user, or application, controls the board by sending commands over a wireless serial connection.

On startup, the OpenBCI Ganglion board sends the following text over the radio:

```

OpenBCI Ganglion v2.0.0
LIS2DH ID: 0x33
MCP3912 CONFIG_1: 0xXX

```

## Command Set

### Turn Channels OFF

**1 2 3 4**  
These ASCII characters turn the respective channels [1-4] off. The channel will read 0.00 when off during streamData mode. These commands work in and out of streamData mode.

### Turn Channels ON

**! @ # $**  
These ASCII characters turn the respective channels [1-4] on. The channel will read ADC output values during streamData mode. These commands work in and out of streamData mode.

### Synthetic Square Wave ON

**\[**  
Turn on and generate a fake square wave signal.

### Synthetic Square Wave OFF

**]**  
Turn off and generate a fake square wave signal.

### LeadOff Impedance

**z**  
Start an impedance test, will send back impedance packets!

**Z**  
Stop an impedance test.

### Accelerometer

**n**  
Start accelerometer which results in 18-bit delta compression of channel data.

**N**  
Stop accelerometer which results in 19-bit delta compression of channel data.

### Stream Data Commands

**b**  
Start streaming data

**s**  
Stop Streaming data

### Miscellaneous

**?**  
Query register settings  
Read and report all register settings for the MCP and the LIS3DH. Expect to get a verbose serial output from the OpenBCI Board.

**v**
Soft reset for the Board peripherals.

## Firmware v2.x.x New Commands

Supporting all v1.0.0, the v2.0.0 firmware extends the OpenBCI Ganglion system to allow for a variable sample rate.

### Sample Rate

**~(COMMAND)**  
This works similar to the Channel Settings commands, however, there is no latching character. Power cycling the OpenBCI Ganglion board will cause the sample rate to reset back to default of 200Hz.

:::important
**The Ganglion cannot stream data over 200Hz.** These commands were created with anticipation for future capabilities, but due to Bluetooth restrictions, they cannot currently be utilized.
:::

**COMMAND**

- 0 = 25600 Hz
- 1 = 12800 Hz
- 2 = 6400 Hz
- 3 = 3200 Hz
- 4 = 1600 Hz
- 5 = 800 Hz
- 6 = 400 Hz
- 7 = 200 Hz
- ~ = Get current sample rate

**EXAMPLE**

First, user sends **\~~**

**returns** `Sample rate is 200Hz`

Then, user sends **~5**

**returns** `Sample rate set to 800Hz$$$`

### Wifi Shield Commands

## Unused ASCII Characters

These are currently unused (and user available) characters in the OpenBCI Ganglion platform:

**a A B c C d D e E f F g G h H i I j J k K l L m M o O p P q Q r R S t T u U V w W x X y Y \` 5 6 7 8 9 0 % ^ & \* ( ) - \_ {"{"} {"}"} [ ] ; : ' " , . / \\ | (space)**
