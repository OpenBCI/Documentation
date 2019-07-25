# Ganglion Data Format

This discussion of the OpenBCI data format only applies to the OpenBCI Ganglion. The Ganglion contains a Simblee microcontroller that can both be programmed through the Arduino IDE or over-the-air (OTA). The Simblee has an on-board radio module. The format of the Ganglion data as seen on the PC is defined by a combination of the Arduino code on the Ganglion board and software on your computer. So, if you don't like the data format defined here, feel free to change it! In general, and believe us, we tried, you can't send more then 100 BLE packets per second. For more info on the byte stream parsing on the computer side, or for a working example, see the [NodeJS Ganglion Driver](https://github.com/OpenBCI/OpenBCI_NodeJS_Ganglion).

## Standard Bluetooth 4.n BLE Setup

OpenBCI Ganglion uses a standard Bluetooth 4.n (BLE) connection. Allowing connection to any BLE compatible device!

All BLE devices have specific _Service_, _Receive_, _Send_, and _Disconnect_, the ones for Simblee are:  

Service | Value
-----------|-----------
**Service** | `fe84` 
**Receive** | `2d30c082f39f4ce6923f3484ea480596`
**Send** | `2d30c083f39f4ce6923f3484ea480596`
**Disconnect** | `2d30c084f39f4ce6923f3484ea480596`

## Startup
### **Ganglion Board**

The Ganglion does go through a reset cycle when its BLE connection is opened. Because of this, it's *NOT* possible to connect/disconnect from the Ganglion mid stream.

## Initiating Binary Transfer

Once the Ganglion has initialized itself with a BLE connection it waits for commands. It sends no data until it is told to start sending data. To begin data transfer, transmit a single ASCII `b`. Once the `b` is received, continuous transfer of data in binary format will ensue. To turn off the fire hose, send an `s`.

## Binary Format

Each packet contains a Byte ID followed by 19-bytes of data for a grand total of 20-bytes. The Byte ID determines how the receiving software or driver should parse the followin 19-bytes of data. The Ganglion board samples biosignals at 200Hz. Because of the BLE 100Hz packet transmission restriction, we introduced a delta compression protocol. Grab a notebook, and get ready to have some fun! Here are details on the format.

Once you've established a connection to the Simblee on your Ganglion using the Simblee characteristics, it's time to get the data!

The Ganglion data samples are 24-bit signed (2's complement), MSB first. If we did not compress the data, we could only fit one sample on each BLE packet because 24-bits is 3-bytes times 4 samples for each channel comes to 12-bytes, which would lead to a max sample rate of 100Hz, remember upper limit of consistent BLE transmission is somewhere around 100 packets per second. Therefore we aimed to get two samples per packet, which gives a real time 200Hz streaming sample rate! Pretty cool, here is how we did it:

### 19bit Compression

![19bit Packet Map](../assets/images/ganglion_19bit-packet-map.png)
  
By default we use a 19-bit delta compression. See below for the story about 18bit delta compression description. It's easiest to grok this compression scheme if we step through the process. Assume that the Ganglion is connected to a computer, and the user wants to start streaming data. The user (or controlling software) sends a `b`, and when the Ganglion receives the `b`, it turns on the data acquisition hardware, starts taking samples, and sending data in 20 byte packets. The very first byte of each sample is the `Packet ID`, and the very first packet sent starts with an ID of `0x00`. The value `0x00` indicates to the controlling software that the packet contains **Uncompressed Data**, that is, there are 4 24bit values taking up the 12 bytes following the packet ID associated with channel 1-4 respectively. These values are legit Ganglion data, and are used to seed the decompression algorithm on the comptuer. The Ganglion stores the values in an array called `lastChannelData[]`.  
**NOTE:** You can find all of this code in our [Ganglion Library](https://github.com/OpenBCI/OpenBCI_Ganglion_Library) repository.

```
void OpenBCI_Ganglion::compressData19() {
      int deltas[4];
      int even = sampleCounter % 2;
      for (int i = 0; i < 4; i++) {
        deltas[i] = lastChannelData[i] - channelData[i];  // subtract new from old
        lastChannelData[i] = channelData[i];  // keep track of the previous value
        bitWrite(deltas[i], 0, (bitRead(deltas[i], 31))); // store the sign bit in bit0
      }
      if (even == 1) { // pack odd samples first
        compression_ring[ringBufferLevel][0] = ((deltas[0] & 0x0007F800) >> 11);
        compression_ring[ringBufferLevel][1] = ((deltas[0] & 0x000007F8) >> 3);
        compression_ring[ringBufferLevel][2] = ((deltas[0] & 0x00000007) << 5);
        compression_ring[ringBufferLevel][2] |= ((deltas[1] & 0x0007C000) >> 14);
        compression_ring[ringBufferLevel][3] = ((deltas[1] & 0x00003FC0) >> 6);
        compression_ring[ringBufferLevel][4] = ((deltas[1] & 0x0000003F) << 2);
        compression_ring[ringBufferLevel][4] |= ((deltas[2] & 0x00060000) >> 17);
        compression_ring[ringBufferLevel][5] = ((deltas[2] & 0x0001FE00) >> 9);
        compression_ring[ringBufferLevel][6] = ((deltas[2] & 0x000001FE) >> 1);
        compression_ring[ringBufferLevel][7] = ((deltas[2] & 00000001) << 7);
        compression_ring[ringBufferLevel][7] |= ((deltas[3] & 0x0007F000) >> 12);
        compression_ring[ringBufferLevel][8] = ((deltas[3] & 0x00000FF0) >> 4);
        compression_ring[ringBufferLevel][9] = ((deltas[3] & 0x0000000F) << 4);
      } else {       // pack even samples second
        compression_ring[ringBufferLevel][9] |= ((deltas[0] & 0x00078000) >> 15);
        compression_ring[ringBufferLevel][10] = ((deltas[0] & 0x00007F80) >> 7);
        compression_ring[ringBufferLevel][11] = ((deltas[0] & 0x0000007F) << 1);
        compression_ring[ringBufferLevel][11] |= ((deltas[1] & 0x00040000) >> 18);
        compression_ring[ringBufferLevel][12] = ((deltas[1] & 0x0003FC00) >> 10);
        compression_ring[ringBufferLevel][13] = ((deltas[1] & 0x000003FC) >> 2);
        compression_ring[ringBufferLevel][14] = ((deltas[1] & 0x00000003) << 6);
        compression_ring[ringBufferLevel][14] |= ((deltas[2] & 0x0007E000) >> 13);
        compression_ring[ringBufferLevel][15] = ((deltas[2] & 0x00001FE0) >> 5);
        compression_ring[ringBufferLevel][16] = ((deltas[2] & 0x0000001F) << 3);
        compression_ring[ringBufferLevel][16] |= ((deltas[3] & 0x00070000) >> 16);
        compression_ring[ringBufferLevel][17] = ((deltas[3] & 0x0000FF00) >> 8);
        compression_ring[ringBufferLevel][18] = (deltas[3] & 0x000000FF);

        sendCompressedPacket19(); // send on the even packet
      }
    }
```

5mS later, the Ganglion will acquire another set of 4 data samples. Since the previous sample was sample `0`, this one is sample `1`. In this compression scheme, odd samples are not sent. What we do instead is we subract these new channel values from the values contained in the `lastChannelData[]` array. The result is the `delta` that we want to send. In this case, we can't send all 24 bits, so instead we only send the 19 LSBs of each `delta`. One thing we have to keep track of when we do this, is the sign of the number (is it a negative, or positive going difference). We do this by moving the sign bit from subtraction result into the `bit 0` position. Yes, that means that we lose one bit of resolution! The deltas are shoved into the next 9.5 bytes of the BLE packet, as shown in the code to the right. The next sample acquired is sample `2`, and the same process of deriving deltas, retaining the sign bit, and shoving the resulting 19bit values ensues, but this time after we finish packing the deltas, we send the complete packet to the BLE radio. The code to the right shows how we pack each delta into the BLE packet. Each packet sent with 19bit compression uses a `Packet ID` in the range of 101 to 200. Then, the Ganglion sends an uncompressed packet with the `Packet ID` of `0x00`. That means that once per second, the Ganglion will send a raw, or uncompressed data packet. If for some reason a packet gets dropped or there is some other issue with maintianing data integrity, a brand new fresh 100% real uncompressed data packet is less than a second away!

**NOTE:** All delta compressions start with a raw uncompressed packet with Byte Id of `0x00`, that's 12 bytes of uncompressed 24-bit signed integer samples. The Ganglion uses a 2D buffer called `compression-ring` to hold the BLE packets. This buffer is 101 packets big, meaning that it can hold up to the last minute of data. We hope to add the future feature of being able to recall dropped packets.

**IMPORTANT!** 18-bit and 19-bit compression store the signed bit in the `bit 0` or LSB position! Negative numbers always have a `1` in the LSB and positive numbers always have `0` in the LSB. If we kept the signed bit in the MSB, we would lose half of our dynamic range (bad), by placing it in the LSB, we lose a nominal rounding error. 

### 18bit Compression

![18bit Packet Map](../assets/images/ganglion_18bit-packet-map.png)

19bit compression does not leave any room for additional data. If we want to send the on-board accelerometer data, we need to squeeze our compressor abit more. In the case of the 18bit compressor, we also use the `Packet ID` of `0x00` to send the raw uncompressed data. Each following packet uses `Packet ID` 1 to 100. This way, the controlling software that is running the decompression algorithm can decompress each packet without having to 'know' what state the system is in. 

```
void OpenBCI_Ganglion::compressData18() {
      int deltas[4];
      int even = sampleCounter % 2;
      for (int i = 0; i < 4; i++) {
        deltas[i] = lastChannelData[i] - channelData[i];  // subtract new from old
        lastChannelData[i] = channelData[i];  // keep track of the previous value
        bitWrite(deltas[i], 0, (bitRead(deltas[i], 31))); // store the sign bit in bit0
      }
      if (even == 1) { // pack odd samples first
        compression_ring[ringBufferLevel][0] = ((deltas[0] &  0x0003FC00) >> 10);
        compression_ring[ringBufferLevel][1] = ((deltas[0] &  0x000003FC) >> 2);
        compression_ring[ringBufferLevel][2] = ((deltas[0] &  0x00000003) << 6);
        compression_ring[ringBufferLevel][2] |= ((deltas[1] & 0x0003F000) >> 12);
        compression_ring[ringBufferLevel][3] = ((deltas[1] &  0x00000FF0) >> 4);
        compression_ring[ringBufferLevel][4] = ((deltas[1] &  0x0000000F) << 4);
        compression_ring[ringBufferLevel][4] |= ((deltas[2] & 0x0003C000) >> 14);
        compression_ring[ringBufferLevel][5] = ((deltas[2] &  0x00003FC0) >> 6);
        compression_ring[ringBufferLevel][6] = ((deltas[2] &  0x0000003F) << 2);
        compression_ring[ringBufferLevel][6] |= ((deltas[3] & 0x00030000) >> 16);
        compression_ring[ringBufferLevel][7] = ((deltas[3] &  0x0000FF00) >> 8);
        compression_ring[ringBufferLevel][8] = (deltas[3] &   0x000000FF);
      } else {       // pack even samples second
        compression_ring[ringBufferLevel][9] = ((deltas[0] &   0x0003FC00) >> 10);
        compression_ring[ringBufferLevel][10] = ((deltas[0] &  0x000003FC) >> 2);
        compression_ring[ringBufferLevel][11] = ((deltas[0] &  0x00000003) << 6);
        compression_ring[ringBufferLevel][11] |= ((deltas[1] & 0x0003F000) >> 12);
        compression_ring[ringBufferLevel][12] = ((deltas[1] &  0x00000FF0) >> 4);
        compression_ring[ringBufferLevel][13] = ((deltas[1] &  0x0000000F) << 4);
        compression_ring[ringBufferLevel][13] |= ((deltas[2] & 0x0003C000) >> 14);
        compression_ring[ringBufferLevel][14] = ((deltas[2] &  0x00003FC0) >> 6);
        compression_ring[ringBufferLevel][15] = ((deltas[2] &  0x0000003F) << 2);
        compression_ring[ringBufferLevel][15] |= ((deltas[3] & 0x00030000) >> 16);
        compression_ring[ringBufferLevel][16] = ((deltas[3] &  0x0000FF00) >> 8);
        compression_ring[ringBufferLevel][17] = (deltas[3] &   0x000000FF);

        sendCompressedPacket18(); // send on the even packet
      }
    }
```  
When the accelerometer is running, the default accelerometer sample rate is 10Hz. The Ganglion will acquire the accelerometer data whenever it is ready, but it will only send the values on with specific `Packet ID` header.  

```
void OpenBCI_Ganglion::sendCompressedPacket18() {
      radioBuffer[0] = ringBufferLevel;
      for (int i = 0; i < 18; i++) {
        radioBuffer[i+1] = compression_ring[ringBufferLevel][i];
      }
      if(useAccel){
        if(ringBufferLevel%10 == 1){ radioBuffer[19] = axisData[0]; }  // x axis
        if(ringBufferLevel%10 == 2){ radioBuffer[19] = axisData[1]; }  // y axis
        if(ringBufferLevel%10 == 3){ radioBuffer[19] = axisData[2]; }  // z axis
      } else if(useAux){
        if(ringBufferLevel%10 == 1){ radioBuffer[19] = auxData[0]; }
        if(ringBufferLevel%10 == 2){ radioBuffer[19] = auxData[1]; }
        if(ringBufferLevel%10 == 3){ radioBuffer[19] = auxData[2]; }
      }
      ringBufferLevel++;
      if (BLEconnected) {
        SimbleeBLE.send(radioBuffer, 20);
      }
    }
```
We use the number associated with the `compression_ring` buffer position to tell when to send the `x`, `y` and `z` axis values. When sending 18bit compressed packets, the accelerometer data can be found in `Packet ID` numbers ending it `1`, `2`, and `3`.  
**NOTE** that the Ganglion also has the capacity to send user defined `auxData` in the place of accelerometer data.  
**NOTE** An `n` ASCII command is used to turn on the Ganglion accelerometer. Use an `N` to turn off the accelerometer.

## Impedance Testing
The Ganglion has hardware in place that allows for testing the impedance of the electrode/skin contact. In order to do this, the controlling software uses the ASCII control bytes `z` to start impedance test and `Z` to stop impedance test. During impedance testing, the data stream is turned off. The Ganglion will send impdance values of all the channels, 1 to 4, and the `REF` input in series over and over until it receives a `Z`. The `Packet ID` values are listed in the chart below. The impedance data is sent as an ASCII string representing the measured value in ohms. 

## Verbose Prints
The Ganglion will sometimes send verbose data over the BLE connection. In this case, Ganglion can send from 1 to many packets of verbose ASCII data. The `Packet ID` for ASCII messaging will inform the computer if the message is not doen and it should expect another packet `206` or `0xCE`. When Ganglion is sending the last ASCII message packet, the `Packet ID` will be `207` or `0xCF`. 

## Packet ID Cheat Sheet

Byte ID Decimal | Byte ID HEX | Data Type | Description
--------|--------|--------|--------
`0` | `00` | `24bit` | Raw uncompressed
`1`-`100` | `0x01`-`0x64` | `18bit` | 18-bit compression with Accelerometer 
`101`-`200` | `0x65`-`0xC8` | `19bit` | 19-bit compression without Accelerometer
`201` | `0xC9` | `impedance` | Impedance Channel 1
`202` | `0xCA` | `impedance` | Impedance Channel 2
`203` | `0xCB` | `impedance` | Impedance Channel 3
`204` | `0xCC` | `impedance` | Impedance Channel 4
`205` | `0xCD` | `impedance` | Impedance Channel Reference
`206` | `0xCE` | `multi` | Part of ASCII message
`207` | `0xCF` | `multiStop` | End of ASCII message

## Example Interpreting Ganglion Data

**24bit**

Raw uncompressed is always saved. If you get a Byte ID of `0`, you're going to want to save that.

**18bit**

Let's take a practical example by looking at the automated test used in the [Ganglion NodeJS driver](https://github.com/OpenBCI/OpenBCI_NodeJS_Ganglion/blob/master/test/openBCIGanglionSample-test.js) to approach explaining 18-bit delta compression strategy. 

    let buffer = new Buffer(
    [
      0b00000001, // 0
      0b00000000, // 1
      0b00000000, // 2
      0b00000000, // 3
      0b00000000, // 4
      0b00100000, // 5
      0b00000000, // 6
      0b00101000, // 7
      0b00000000, // 8
      0b00000100, // 9
      0b10000000, // 10
      0b00000000, // 11
      0b10111100, // 12
      0b00000000, // 13
      0b00000111, // 14
      0b00000000, // 15
      0b00101000, // 16
      0b11000000, // 17
      0b00001010, // 18
      0b00001110  // 19
    ]);
    let expectedValue = [[0, 2, 10, 4], [131074, 245760, 114698, 49162]];

The first compressed channel in sample one would be derived from the first two bytes plus the first two bits of the third byte:
Channel 1 - Sample 1 - `0b000000000000000000` - or `0` in decimal.

The second compressed channel in sample one would be derived from the last six bits of byte three, all of byte four, and the first four bits of byte five:
Channel 2 - Sample 1 - `0b000000000000000010` - or `2` in decimal.

The third compressed sample in sample two would be derived from the last four bits of byte 14, all of byte 15, and the first six bits of byte 16:
Channel 3 - Sample 2 - `0b011100000000001010` - or `114698` in decimal.

To get 10Hz 8-bit accelerometer data out of 18-bit packets you must modulus 10 the Byte ID: 
If (Byte ID % 10) is 1, 2, and 3 then pull the last byte to get X, Y, and Z, respectably.

In our example above, byte 19, the last byte, has a value of `14` or `0x0E` which would be stored as the X axis for this accelerometer sample.

The sample number for Sample 1 is `1` and the sample number for Sample 2 is `2`. If the Byte Id was `47`, Sample 1's sample number is `93` and Sample 2's sample number is `94`.

Now let's look at some negative values!

    let buffer = new Buffer(
    [
      0b00000001, // 0
      0b11111111, // 1
      0b11111111, // 2
      0b01111111, // 3
      0b11111111, // 4
      0b10111111, // 5
      0b11111111, // 6
      0b11100111, // 7
      0b11111111, // 8
      0b11110101, // 9
      0b00000000, // 10
      0b00000001, // 11
      0b01001111, // 12
      0b10001110, // 13
      0b00110000, // 14
      0b00000000, // 15
      0b00011111, // 16
      0b11110000, // 17
      0b00000001  // 18
    ]);
    let expectedValue = [[-3, -5, -7, -11], [-262139, -198429, -262137, -4095]];
    
Keep in mind we look to the LSB for the sign of the 18-bit number!
    
The first compressed channel in sample one would be derived from the first two bytes plus the first **two** bits of the third byte for a total of 19-bits:
Channel 1 - Sample 1 - `0b111111111111111101` - or `-3` in decimal.  

The second compressed channel in sample two would be derived from the last six bits of byte 12, all of byte 13 and first four bits from byte 14:
Channel 2 - Sample 2 - `0b001111100011100011` - or `-198429` in decimal. **The MSB is `0`, yet this is a negative number because of the `1` in the LSB**
 
**19Bit**

Once again, let's take a practical example by looking at the automated test used in the [Ganglion NodeJS driver](https://github.com/OpenBCI/OpenBCI_NodeJS_Ganglion/blob/master/test/openBCIGanglionSample-test.js) to approach explaining 19-bit delta compression strategy. 

    let buffer = new Buffer(
    [
      0b01100101, // 0
      0b00000000, // 1
      0b00000000, // 2
      0b00000000, // 3
      0b00000000, // 4
      0b00001000, // 5
      0b00000000, // 6
      0b00000101, // 7
      0b00000000, // 8
      0b00000000, // 9
      0b01001000, // 10
      0b00000000, // 11
      0b00001001, // 12
      0b11110000, // 13
      0b00000001, // 14
      0b10110000, // 15
      0b00000000, // 16
      0b00110000, // 17
      0b00000000, // 18
      0b00001000  // 19
    ]);
    let expectedValue = [[0, 2, 10, 4], [262148, 507910, 393222, 8]];

The first compressed channel in sample one would be derived from the first two bytes plus the first **three** bits of the third byte for a total of 19-bits:
Channel 1 - Sample 1 - `0b0000000000000000000` - or `0` in decimal.

The second compressed channel in sample two would be derived from the last bit in byte 12, all of bytes 13 and 14, and only the first two bits of byte 15:
Channel 2 - Sample 2 - `0b1111100000000000110` - or `507910` in decimal. **Note: the MSB is a `1` but this number is even because the LSB is `0`**

The sample number for Sample 1 is `1` and the sample number for Sample 2 is `2`. If the Byte Id was `104`, Sample 1's sample number is `7` and Sample 2's sample number is `8`.

Now let's look at some negative values!

    let buffer = new Buffer(
    [
      0b01100101, // 0
      0b11111111, // 1
      0b11111111, // 2
      0b10111111, // 3
      0b11111111, // 4
      0b11101111, // 5
      0b11111111, // 6
      0b11111100, // 7
      0b11111111, // 8
      0b11111111, // 9
      0b01011000, // 10
      0b00000000, // 11
      0b00001011, // 12
      0b00111110, // 13
      0b00111000, // 14
      0b11100000, // 15
      0b00000000, // 16
      0b00111111, // 17
      0b11110000, // 18
      0b00000001  // 19
    ]);
    let expectedValue = [[-3, -5, -7, -11], [-262139, -198429, -262137, -4095]];
    
Keep in mind we look to the LSB for the sign of the 19-bit number!
    
The first compressed channel in sample one would be derived from the first two bytes plus the first **three** bits of the third byte:
Channel 1 - Sample 1 - `0b1111111111111111101` - or `-3` in decimal.  

The forth compressed channel in sample two would be derived from the last three bits of byte 17 and all of bytes 18 and 19:
Channel 4 - Sample 2 - `0b001111100011100011` - or `-198429` in decimal. **The MSB is `0`, yet this is a negative number because of the `1` in the LSB**

**impedance**

Impedance values are sent with Byte IDs and are in ASCII format ending with a `Z`. Parse from byte 1 till you hit the `Z`. 

## 18-Bit Signed Data Values

For the compressed EEG data values, you will note that we are transferring the data as a 18-bit signed integer, which is a bit unusual. We are using this number format because it is the native format used by the A/D chip that is at the core of the Ganglion board. To convert this unusual number format into a more standard 32-bit signed integer, you can steal some ideas from the example NodeJS (aka, JavaScript) code:

    /**
     * Converts a special ganglion 18 bit compressed number
     *  The compressions uses the LSB, bit 1, as the signed bit, instead of using
     *  the MSB. Therefore you must not look to the MSB for a sign extension, one
     *  must look to the LSB, and the same rules applies, if it's a 1, then it's a
     *  negative and if it's 0 then it's a positive number.
     * @param threeByteBuffer {Buffer}
     *  A 3-byte buffer with only 18 bits of actual data.
     * @return {number} A signed integer.
     */
    function convert18bitAsInt32 (threeByteBuffer) {
      let prefix = 0;
    
      if (threeByteBuffer[2] & 0x01 > 0) {
        // console.log('\t\tNegative number')
        prefix = 0b11111111111111;
      }
    
      return (prefix << 18) | (threeByteBuffer[0] << 16) | (threeByteBuffer[1] << 8) | threeByteBuffer[2];
    }

## 19-Bit Signed Data Values

For the compressed EEG data values, you will note that we are transferring the data as a 19-bit signed integer, which is a bit unusual. We are using this number format because it is the native format used by the A/D chip that is at the core of the Ganglion board. To convert this unusual number format into a more standard 32-bit signed integer, you can steal some ideas from the example NodeJS (aka, JavaScript) code:

    /**
     * Converts a special ganglion 19 bit compressed number
     *  The compressions uses the LSB, bit 1, as the signed bit, instead of using
     *  the MSB. Therefore you must not look to the MSB for a sign extension, one
     *  must look to the LSB, and the same rules applies, if it's a 1, then it's a
     *  negative and if it's 0 then it's a positive number.
     * @param threeByteBuffer {Buffer}
     *  A 3-byte buffer with only 19 bits of actual data.
     * @return {number} A signed integer.
     */
    function convert19bitAsInt32 (threeByteBuffer) {
      let prefix = 0;
    
      if (threeByteBuffer[2] & 0x01 > 0) {
        // console.log('\t\tNegative number')
        prefix = 0b1111111111111;
      }
    
      return (prefix << 19) | (threeByteBuffer[0] << 16) | (threeByteBuffer[1] << 8) | threeByteBuffer[2];
    }

## Interpreting the EEG Data

Once you receive and parse and decompress the data packets, it is important to know how to interpret the data so that the EEG values are useful in a quantitative way. The critical piece of information is the scale factor.

For the scale factor, this is the multiplier that you use to convert the EEG values from “counts” (the int32 number that you parse from the binary stream) into scientific units like “volts”. Scale factor is set and baked into the hardware, therefore use a scale factor of:


	Scale Factor (Volts/count) = 1.2 Volts * 8388607.0 * 1.5 * 51.0;

This equation is from the MCP3912 data sheet, specifically it is from the text surrounding Table 7. This scale factor has also been confirmed experimentally using known calibration signals.

Accelerometer data must also be scaled before it can be correctly interpreted. The equation used to scale Accelerometer data is as follows (We assume 4Gs, so 2mG per digit):


	Accelerometer Scale Factor = 0.032;
