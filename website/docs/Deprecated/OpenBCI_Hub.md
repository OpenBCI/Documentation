---
id: Hub
title: OpenBCI Hub
---
**THIS SOFTWARE HAS BEEN DEPRECATED AND IS NO LONGER IN ACTIVE DEVELOPMENT.**

Middleware software used to communicate with OpenBCI boards through the TCP/IP command protocol. This doc covers the OpenBCI Hub for Cyton, Ganglion, and WiFi Shield.

Last used with GUI v4.2.0 from January 2020.

## Version

Version `v2.1.0` last used January 2020.

Version `v2.0.0` released September 2018.

Version `v1.0.0` released January 3rd, 2017.

## OpenBCI Electron Hub Overview

The OpenBCI Electron Hub (or just "Hub") is a TCP/IP server that listens for clients on port `10996` on `localhost` (aka `127.0.0.1`). Broadcast/multicast is never used for transmitting information to clients. Outgoing data is only transmitted to the requesting client. We use [semantic versioning](http://www.semver.org); the protocol is always listed first and foremost in all documentation. Please follow the rules of [semantic versioning](http://www.semver.org) to avoid breaking changes.

The hub is designed for two use cases:

1.  An owning application, such as OpenBCI's processing app, starts and stops the Hub.
2.  The Hub runs continuously and third-party applications can simply connect as clients, use OpenBCI boards, disconnect, and go on their way without closing the Hub.

A unique port, `10996`, is critical because applications must be able to hit a known port number on a local machine. This Specification shall [be available here](https://github.com/OpenBCI/OpenBCI_Ganglion_Electron/blob/master/ganglion-api-spec.yaml) in the [source code of the Hub](https://github.com/OpenBCI/OpenBCI_Ganglion_Electron).

## Hub Command Protocol Overview

As of v2.0.0, the Hub uses JSON to pass messages send and receive messages over TCP. Each JSON string should end in a `\n`. Parse for `\n` and then strip the beginning of the string down to the character before `\n` and use your languages built in JSON parser. The contents of the buffer can be now be considered a Message. The buffer can be flushed and the Message can be processed. There will always be a 'command' key which will aid in parsing the rest of message. The rest of the Message will then be translated based on the protocol for that command described in the Specification below. All commands sent to the client will be replied to asynchronously.

### Example:

If a client sends `{"type":"scan", "action":"start"}\n` to the Hub on `127.0.0.1:10996`, the Hub will respond with either `{"type":"scan", "action":"start", "code":200}\n` if the scan was started or an error message if unable to start such as `{"type":"scan","code":412,"message":"unable to start scan"}\n`.

## Command Set

Commands are sent from the client to the Hub. Each command gets an asynchronous response with a meaningful code. When able, errors are sent with string error messages.

### Accelerometer

**type: `accelerometer`**

Stop or start accelerometer.

#### `action` - `start`

Description:
Start accelerometer. Only useful for Ganglion.

Availability:
As of `v1.0.0`

Example:
`{"type":"accelerometer", "action": "start"}`

Response: on success
`{"type":"accelerometer", "action": "start", "code": 200}`

Response: on failure
`{"type":"accelerometer", "action": "start", "code": 416, "message": "string error message"}`

#### `action` - `stop`

Description:
Stop accelerometer. Only useful for Ganglion.

Availability:
As of `v1.0.0`

Example:
`{"type":"accelerometer", "action": "stop"}`

Response: on success
`{"type":"accelerometer", "action": "stop", "code": 200}`

Response: on failure
`{"type":"accelerometer", "action": "stop", "code": 417, "message": "string error message"}`

### Board Type

**type: `boardType`**

Attempts to set the board type to user requested board type, such as when a user requests 16 channel Cyton. This command is only useful for Cyton because of Daisy.

#### `boardType` - `cyton`

Description:
Force set to 8 channel Cyton board.

Availability:
As of `v2.0.0`

Example:
`{"type":"boardType", "boardType": "cyton"}`

Response: on success
`{"type":"boardType", "boardType": "cyton", "code": 200}`

Response: on failure
`{"type":"boardType", "boardType": "cyton", "code": 421, "message": "string error message"}`

#### `boardType` - `daisy`

Description:
Force set to 16 channel Cyton board.

Availability:
As of `v2.0.0`

Example:
`{"type":"boardType", "boardType": "daisy"}`

Response: on success
`{"type":"boardType", "boardType": "daisy", "code": 200}`

Response: on failure
`{"type":"boardType", "boardType": "daisy", "code": 421, "message": "string error message"}`

### Channel Settings

**type: `channelSettings`**

For setting the channel settings on a Cyton board with either WiFi or Serial protocols set.

Availability: as of `v2.0.0`

#### `action` - `start`

Description:
Used to start a channel setting sync. This will emit channel settings on success.

Availability:
As of `v2.0.0`

Example:
`{"type":"channelSettings", "action": "start"}`

Response: on success
`{"type":"channelSettings", "action": "start", "code": 200}`

Response: on failure when channel setting sync is already in progress
`{"type":"channelSettings", "action": "start", "code": 422, "message": "Sync in progress"}`

Response: on success for each channel, see the Response Set below for _Channel Settings_.

#### `action` - `set`

Description:
Used to set a channel for cyton over wifi or ganglion.

**channelNumber**

Channel number as zero indexed i.e. 0-7 or 0-15 for Cyton and Cyton with Daisy respectively.

**powerDown**

Will be either `true` if channel is powered down and `false` if channel is powered up like normal.

**gain**
The integer version of the gain. i.e. 1, 2, 4, 6, 8, 12, 24

**inputType**

Selects the ADC channel input source. It's a 'String' that **MUST** be one of the following: "normal", "shorted", "biasMethod" , "mvdd" , "temp" , "testsig", "biasDrp", "biasDrn".

**bias**

Selects if the channel shall include the channel input in bias generation. It's a number where `true` includes the channel in bias (default) or `false` for channel removed from bias.

**srb2**

Select to connect `true` this channel's P input to the SRB2 pin. This closes a switch between P input and SRB2 for the given channel, and allows the P input to also remain connected to the ADC. It's an integer where `true` connects this input to SRB2 (default) or `false` which disconnect this input from SRB2.

**srb1**

Select to connect `true` all channels' N inputs to SRB1. This effects all pins, and disconnects all N inputs from the ADC. It's an integer where `true` connects all N inputs to SRB1 and `false` disconnects all N inputs from SRB1 (default).

Availability:
As of `v2.0.0`

Example:

```

{
  "action": "set",
  "type": "channelSettings",
  "channelNumber": 3,
  "powerDown": false,
  "gain": 24,
  "inputType": "normal",
  "bias": true,
  "srb2": true,
  "srb1": false
}

```

Response: on success
`{"type":"channelSettings", "action": "set", "code": 200}`

Response: on failure to set command
`{"type":"channelSettings", "action": "set", "code": 424, "message": "verbose error message here"}`

Response: on failure to parse input commands properly. This means comma separated string input did not contain the correct positioned items. Verify with example.
`{"type":"channelSettings", "action": "set", "code": 425, "message": "more verbose error message"}`

### Command

**type: `command`**

Passes through a `COMMAND`, either one char or a string, to a connected device.

Availability: as of `v2.0.0`

#### `command` - `*`

Description:
Single or multi char to get passed through the module to the connected board. Multi char limited to 30 on WiFi and 19 on BLE.

Availability:
As of `v2.0.0`

Example:
`{"type":"command", "command": "1"}`

Response: on success
`{"type":"command", "command": "start", "code": 200}`

Response: on failure unable to write to connected device
`{"type":"command", "command": "start", "code": 406, "message": "verbose error message"}`

Response: on failure when protocol of current device is not selected
`{"type":"command", "command": "start", "code": 420, "message": "verbose error message"}`

### Connect

**type: `connect`**

Connect to any device a local name or IP address.

Availability: as of `v2.0.0`

**name**

The local string name of a Cyton USB Dongle, Ganglion peripheral, or WiFi Shield unique name to connect to.

**burst** _optional_

True to use burst mode, only applies when UDP is set for protocol. Either `true` and `false`.

**sampleRate** _optional_

A number that is the requested sample rate to set the attached Ganglion or Cyton to. Ganglion must have v2.0.0 firmware or later and Cyton must have v3.0.0 firmware available. Value is in Hz and must be a valid sample rate for the board of choice.

**latency** _optional_

A number that is the latency for the inter-packet sending on the WiFi Shield. The time is in micro-seconds.

**protocol** _optional_

The type of internet protocol to use, either 'udp' or 'tcp'.

**ipAdderss** _optional_

The ip

Availability:
As of `v2.0.0`

Example for Ganglion and Cyton:
`{"type": "connect", "name": "Ganglion-XXXX"}`

Example for WiFi with name over tcp:

```

{
  "type": "connect",
  "name": "OpenBCI-XXXX",
  "latency": 1000,
  "sampleRate": 500,
  "protocol": "tcp"
}

```

Example for WiFi with IP Address over UDP with burst mode:

```

{
  "type": "connect",
  "ipAddress": "192.168.4.1",
  "latency": 1000,
  "sampleRate": 500,
  "protocol": "udp",
  "burst": true
}

```

Response: on success
`{"type":"connect", "firmware": "v2.0.0", "code": 200}`

Response: on failure to connect
`{"type":"connect", "code": 402, "message": "verbose error message"}`

Response: on failure already connected
`{"type":"connect", "code": 408}`

### Disconnect

**type: `disconnect`**

Disconnect from a connected device.

Availability:
As of `v1.0.0`

Example:
`{"type":"disconnect"}`

Response: on success
`{"type":"disconnect", "code": 200}`

Response: on failure unable to disconnect to connected device
`{"type":"disconnect", "code": 401, "message": "verbose error message"}`

### Examine

**type: `examine`**

Examine a WiFi shield.

Availability:
As of `v2.0.0`

Example with shield name:
`{"type":"examine", "shieldName": "OpenBCI-XXXX"}`

Example with ipAddress:
`{"type":"examine", "ipAddress": "192.168.4.1"}`

If was searching for WiFi Shield prior to start, expect response on a
`{"type":"scan", "action": "stop", "code": 200}`

Response: on success
`{"type":"examine", "code": 200}`

Response: on failure to connect to device
`{"type":"examine", "code": 402, "message": "verbose error message"}`

Response: on failure if already connected to device
`{"type":"examine", "code": 408, "message": "verbose error message"}`

Response: on failure to stop scan
`{"type":"examine", "code": 411, "message": "could not stop error"}`

### Impedance

**type: `impedance`**

Stop or start impedance testing for Ganglion or send a impedance setting for the cyton.

#### `action` - `set`

Description:
Used to set impedance registers for Cyton.

Availability:
As of `v2.0.0`

**channelNumber**

Channel number as zero indexed i.e. 0-7 or 0-15 for Cyton and Cyton with Daisy respectively.

**pInputApplied**

Should the impedance signal be routed to the P input `channelNumber`

**nInputApplied**

Should the impedance signal be routed to the N input `channelNumber`

Example:

```

{
  "action": "set",
  "type": "impedance",
  "channelNumber": 3,
  "pInputApplied": false,
  "nInputApplied": true
}

```

Response: on success
`{"type":"impedance", "action": "set", "code": 200}`

Response: on failure to set impedance
`{"type":"impedance", "action": "set", "code": 424, "message": "verbose error message here"}`

Response: on failure to parse input commands properly.
`{"type":"impedance", "action": "set", "code": 431, "message": "more verbose error message"}`

#### `action` - `start`

Description:
Used to start impedance testing for Ganglion

Availability:
As of `v1.0.0`

Example:
`{"type":"impedance", "action": "start"}`

Response: on success
`{"type":"impedance", "action": "start", "code": 200}`

Response: on failure to start
`{"type":"impedance", "action": "start", "code": 414, "message": "Error message"}`

#### `action` - `stop`

Description:
Used to stop impedance testing for Ganglion

Availability:
As of `v1.0.0`

Example:
`{"type":"impedance", "action": "stop"}`

Response: on success
`{"type":"impedance", "action": "stop", "code": 200}`

Response: on failure to stop
`{"type":"impedance", "action": "stop", "code": 415, "message": "Error message"}`

### Protocol

**type: `protocol`**

Protocol should also be started prior to each session. It will cleanly start a session. The currently supported protocols are `ble`, `bled112`, `serial`, and `wifi`.

Availability: as of `v2.0.0`

#### `action` - `start`

Description:
Start a protocol. Stop all other protocols before starting this new one.

Availability:
As of `v2.0.0`

**protocol**

The currently supported protocols are `ble`, `bled112`, `serial`, and `wifi`.

Only the Ganglion uses the `ble` and `bled112` as of today. Paired, with `start`, the `ble` will start a ble attempt to start the bluetooth low energy drivers. When using CSR Dongle on Windows, it's very important for you to use Zadig tool as described in the [deprecated tutorial](https://github.com/openbci-archive/Docs/blob/master/Deprecated%20Docs/Setup_CSR_Dongle.md).

Example of `ble` or `bled112` for Ganglion:
`{"type":"protocol", "action": "start", "protocol": "ble"}`

Response: on success for Ganglion:
`{"type":"protocol", "action": "start", "protocol": "ble", "code": 200}`

Response: on failure to start ganglion ble driver
`{"type":"impedance", "action": "start", "code": 419, "message": "failed to start driver"}`

Only the Ganglion uses the `ble` and `bled112` as of today. Paired, with `start`, the `ble` will start a ble attempt to start the bluetooth low energy drivers. When using CSR Dongle on Windows, it's very important for you to use Zadig tool as described in the [deprecated tutorial](https://github.com/openbci-archive/Docs/blob/master/Deprecated%20Docs/Setup_CSR_Dongle.md). This is not necessary for the BLED112 dongle.

Example of `serial` for Cyton:
`{"type":"protocol", "action": "start", "protocol": "serial"}`

Response: on success for `serial` Cyton:
`{"type":"protocol", "action": "start", "protocol": "serial", "code": 200}`

Example of `wifi` for Cyton:
`{"type":"protocol", "action": "start", "protocol": "wifi"}`

Response: on success for `wifi` for Cyton:
`{"type":"protocol", "action": "start", "protocol": "wifi", "code": 200}`

#### `action` - `status`

Description:
Check the to see if a protocol has been started and is set as the current protocol.

Availability:
As of `v1.0.0`

Example on `ble` or `bled112`:
`{"type":"protocol", "action": "status", "protocol": "ble"}`

Response: on on ganglion was started successfully and running
`{"type":"protocol", "action": "status", "code": 200}`

Response: on protocol is stopped
`{"type":"protocol", "action": "status", "code": 501}`

Example on `serial` or `wifi`:
`{"type":"protocol", "action": "status"}`

Response: on protocol is started
`{"type":"protocol", "action": "status", "code": 304}`

Response: on protocol is stopped
`{"type":"protocol", "action": "status", "code": 305}`

#### `action` - `stop`

Description:
Check the to see if a protocol has been started and is set as the current protocol.

Availability:
As of `v1.0.0`

Example for `ble`, `bled112`, `serial`, and `wifi`:
`{"type":"protocol", "action": "stop", "protocol": "ble"}`

Response: on stop for `ble`, `bled112`, `serial`, and `wifi`:
`{"type":"protocol", "action": "stop", "protocol": "ble", "code": 200}`

### Scan

**type: `scan`**

Scan for devices for the protocol set previously and when found, send their local names to requesting client.

#### `action` - `start`

Description:
Start a scan. Stop a scan if one in progress before starting the newly requested scan.

Availability:
As of `v1.0.0`

Example:
`{"type":"scan", "action": "start"}`

Response: on success
`{"type":"scan", "action": "start", "code": 200}`

Response: on failure to start scan
`{"type":"scan", "action": "start", "code": 412, "message": "Error message"}`

Response: on failure to stop scan in progress
`{"type":"scan", "action": "start", "code": 411, "message": "Error message"}`

#### `action` - `status`

Description:
Is a scan in progress

Availability:
As of `v1.0.0`

Example:
`{"type":"scan", "action": "status"}`

Response: a scan is in progress for ganglion over ble and bled112
`{"type":"scan", "action": "status", "code": 302}`

Response: a scan is not in progress for ganglion over ble and bled112
`{"type":"scan", "action": "status", "code": 303}`

Response: a scan is in progress for wifi shields
`{"type":"scan", "action": "status", "code": 304}`

Response: a scan is not in progress for wifi shields
`{"type":"scan", "action": "status", "code": 305}`

#### `action` - `stop`

Description:
Stop a scan in progress

Availability:
As of `v1.0.0`

Example:
`{"type":"scan", "action": "stop"}`

Response: on success
`{"type":"scan", "action": "stop", "code": 200}`

Response: on failure because there is no scan in progress to stop
`{"type":"scan", "action": "stop", "code": 410, "message": "Error message"}`

Response: on failure because unable to stop scan
`{"type":"scan", "action": "stop", "code": 411, "message": "Error message"}`

### SD Card

**type: `sd`**

The SD Card is only working on the Cyton. So you can only use it for protocols `wifi`, and `serial`.

Availability: as of `v1.0.0`

#### `action` - `start`

Description:
Start and SD card recording with a human readable command.

Availability:
As of `v1.0.0`

**command**

The currently supported protocols are `serial`, and `wifi`.

The duration you want to log SD information for. Opens a new SD file to write into. Limited to:

-   `14sec` - 14 seconds
-   `5min` - 5 minutes
-   `15min` - 15 minutes
-   `30min` - 30 minutes
-   `1hour` - 1 hour
-   `2hour` - 2 hour
-   `4hour` - 4 hour
-   `12hour` - 12 hour
-   `24hour` - 24 hour

Example:
`{"type":"sd", "action": "start", "command": "5min"}`

Response: on success
`{"type":"sd", "action": "start", "code": 200}`

Response: on failure because there is no SD card or some other failure
`{"type":"scan", "action": "start", "code": 499, "message": "Error message"}`

#### `action` - `stop`

Description:
Stop an SD card recording. Does not have DURATION property.

Availability:
As of `v1.0.0`

Example:
`{"type":"sd", "action": "stop"}`

Response: on success
`{"type":"sd", "action": "stop", "code": 200}`

Response: on failure
`{"type":"scan", "action": "stop", "code": 499, "message": "Error message"}`

### Status

**type: `status`**

Get the status of a Hub. If the TCO server in the Hub is working, this will always respond true.

Availability:
As of `v1.0.0`

Example:
`{"type":"status"}`

Response: on success
`{"type":"status", "code": 200}`

### WiFi

**type: `wifi`**

Used to get information on an attached WiFi Shield.

Availability: as of `v1.0.0`

#### `action` - `eraseCredentials`

Description:
Erase credentials on the WiFi shield. Your WiFi shield must have no board attached. You should use the _Examine_ command to connect to the WiFi Shield with no Ganglion or Cyton attached. The process will take about 6 seconds. WiFi Shield will become a hotspot again.

Availability:
As of `v2.0.0`

Example:
`{"type":"wifi", "action": "eraseCredentials"}`

Response: on success
`{"type":"wifi", "action": "eraseCredentials", "code": 200, "command": eraseCredentials, "message": "Rebooting wifi shield in 5 seconds"}`

Response: on failure because no wifi shield attached
`{"type":"wifi", "code": 426}`

Response: on failure when failure to erase credentials command fails
`{"type":"wifi", "code": 428, "command": eraseCredentials, "message": "Error message"}`

#### `action` - `getFirmwareVersion`

Description:
Get the firmware version of the attached WiFi Shield.

Availability:
As of `v2.0.0`

Example:
`{"type":"wifi", "action": "getFirmwareVersion"}`

Response: on success
`{"type":"wifi", "command": "getFirmwareVersion", "code": 200, "message": "v3.1.1"}`

Response: on failure because no wifi shield attached
`{"type":"wifi", "code": 426}`

#### `action` - `getIpAddress`

Description:
Get the IP Address of the attached WiFi Shield.

Availability:
As of `v2.0.0`

Example:
`{"type":"wifi", "action": "getFirmwareVersion"}`

Response: on success
`{"type":"wifi", "command": "getFirmwareVersion", "code": 200, "message": "192.168.4.1"}`

Response: on failure because no wifi shield attached
`{"type":"wifi", "code": 426}`

#### `action` - `getMacAddress`

Description:
Get the MAC Address of the attached WiFi Shield.

Availability:
As of `v2.0.0`

Example:
`{"type":"wifi", "action": "getMacAddress"}`

Response: on success
`{"type":"wifi", "action": "getMacAddress", "code": 200, "message": "AA:12:AB:23:11:CD"}`

Response: on failure because no wifi shield attached
`{"type":"wifi", "code": 426}`

#### `action` - `getTypeOfAttachedBoard`

Description:
If the WiFi Shield is connected to a board, return the type of board. Potential board types are _none_, _cyton_, _daisy_, or _ganglion_

Availability:
As of `v2.0.0`

Example:
`{"type":"wifi", "action": "getTypeOfAttachedBoard"}`

Response: on success
`{"type":"wifi", "command": "getTypeOfAttachedBoard", "code": 200, "message": "cyton"}`

Response: on failure because no wifi shield attached
`{"type":"wifi", "code": 426}`

## Response Set

As soon as a client has established itself to the Hub as a requester of information, messages will asynchronously be sent to the client.

### Accelerometer

**type: accelerometer**

Description:
Accelerometer data from the Ganglion.

Availability:
As of `v1.0.0`

**accelDataCounts**

An array of integers with three indexs: [AXIS_X,AXIS_Y,AXIS_Z]

Where:

**AXIS_X**
The X axis in raw integer counts.

**AXIS_Y**
The Y axis in raw integer counts.

**AXIS_Z**
The Z axis in raw integer counts.

Example:
`{"type": "accelerometer", "code": 202, "accelDataCounts": [50, 0, 30]}`

### Channel settings

**type: channelSettings**

Description:
Used to give registers of cyton

**channelNumber**

Channel number as zero indexed i.e. 0-7 or 0-15 for Cyton and Cyton with Daisy respectively.

**powerDown**

Will be either `true` if channel is powered down and `false` if channel is powered up like normal.

**gain**
The integer version of the gain. i.e. 1, 2, 4, 6, 8, 12, 24

**inputType**

Selects the ADC channel input source. It's a 'String' that **MUST** be one of the following: "normal", "shorted", "biasMethod" , "mvdd" , "temp" , "testsig", "biasDrp", "biasDrn".

**bias**

Selects if the channel shall include the channel input in bias generation. It's a number where `true` includes the channel in bias (default) or `false` for channel removed from bias.

**srb2**

Select to connect `true` this channel's P input to the SRB2 pin. This closes a switch between P input and SRB2 for the given channel, and allows the P input to also remain connected to the ADC. It's an integer where `true` connects this input to SRB2 (default) or `false` which disconnect this input from SRB2.

**srb1**

Select to connect `true` all channels' N inputs to SRB1. This effects all pins, and disconnects all N inputs from the ADC. It's an integer where `true` connects all N inputs to SRB1 and `false` disconnects all N inputs from SRB1 (default).

Availability:
As of `v1.0.0`

Example:

```

{
  "code": 207
  "type": "channelSettings",
  "channelNumber": 3,
  "powerDown": false,
  "gain": 24,
  "inputType": "normal",
  "bias": true,
  "srb2": true,
  "srb1": false
}

```

### Impedance

**type: impedance**

Description:
Impedance data from the Ganglion.

Availability:
As of `v1.0.0`

**channel**

Channel number as zero indexed i.e. 1,2,3,4 or 0 for the reference channel.

**value**

The impedance value in ohms for `CHANNEL`.

Example:

```

{
  "code": 203
  "type": "impedance",
  "channel": 3,
  "value": 300
}

```

### Message

**type: message**

Description:
Message from the boards.

Availability:
As of `v1.0.0`

**message**

The string message from the Ganglion.

Example:

```

{
  "code": 200
  "type": "message",
  "message": "Hello, world!",
  "value": 300
}

```

### Samples

**type: data**

Description:
Sample from the boards.

Availability:
As of `v1.0.0`

**startByte**

Number should be 0xA0

**sampleNumber**

a Number between 0-255

**channelData**

channel data indexed at 0 filled with floating point Numbers in Volts) if sendCounts is false

**channelDataCounts**

channel data indexed at 0 filled with un scaled integer Numbers in raw ADS counts) if sendCounts is true

**accelData**

Array with X, Y, Z accelerometer values when new data available) if sendCounts is false

**accelDataCounts**

Array with X, Y, Z accelerometer values when new data available) Only present if sendCounts is true

**auxData**

Buffer filled with either 2 bytes (if time synced) or 6 bytes (not time synced)

**stopByte**

Number should be 0xCx where x is 0-15 in hex

**boardTime**

Number the raw board time

**timestamp**

Number the boardTime plus the NTP calculated offset

Example for gangliom:

```

{
  "code": 200,
  "type": "data",
  "channelDataCounts": [0, 1, 2, 3]
}

```

Example for Cyton with accel:

```

{
  "code": 200,
  "type": "data",
  "channelDataCounts": [0, 1, 2, 3, 4, 5, 6, 7],
  "accelDataCounts": [0, 1, 2],
  "stopByte": 192
}

```

Example for Cyton with Daisy in analog read mode:

```

{
  "auxData": {
    "lower": {
      "data": [ 1, 215, 1, 45, 3, 250],
      "type": "Buffer"
    },
    "upper": {
      "data": [ 1, 215, 1, 44, 3, 251],
      "type": "Buffer"
    }
  },
  "valid": true,
  "code": 204,
  "stopByte": 193,
  "_timestamps": {
    "lower": 1543879978994,
    "upper": 1543879978994
  },
  "channelDataCounts": [-7729993, -7649407, -7606327, -7571616, -7591709, -7687549, -7552756, -7590690, -7580998, -7556930, -7596914, -7549892, -7594576, -7658804, -7523426, -7662588],
  "type": "data",
  "sampleNumber": 52,
  "timestamp": 1543879978994
}

```
