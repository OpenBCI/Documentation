---
id: DeprecatedDongleProgramming
title: Dongle Programming Tutorial - FW 1.X.X
---

:::note
**THIS FIRMWARE VERSION HAS BEEN DEPRECATED AND IS NO LONGER IN PRODUCTION.**
:::

The latest firmware can be found in the [Dongle Firmware GitHub](https://github.com/OpenBCI/OpenBCI_Radios/releases). If you purchased a Dongle before 2016, we recommend you buy a new one at our [Shop](https://shop.openbci.com/products/dongle)!

## Using Radio Firmware Version 1.x.x (2014 - Fall 2016)

The following is for working with our original radio firmware. Please refer to the images above when following these instructions.

### Getting Radio Firmware Version 1.x.x (2014 - Fall 2016)

Download the [OpenBCI_Radios](https://github.com/OpenBCI/OpenBCI_Radios/tree/maint/1.0.0) repo from our github, and place it in the proper location depending upon your OS.

Put the RFduino folder and everything it contains in one of the following folders:

```

On Mac: /Applications/Arduino.app/Contents/Resources/Java/hardware/arduino

On Windows: C:\Program Files (x86)\Arduino-1.5.x\hardware\arduino
```

**_Note_**: To upload code to the Cyton board, you need Arduino v1.8.0 or later, while you need Arduino v1.5.8 to upload code to the dongle. If you have already installed Arduino v1.8.0, you may see an error message while installing 1.5.8 saying that you need to uninstall v1.8.0. Instead of doing that, simply move the existing "Arduino" program folder (which should be 1.8.0) in your Program Files to another folder (such as "Documents"). Go to your program manager (called "Change or Remove Program" in Windows), press Uninstall Arduino 1.8.0, and confirm if told that there was an error in uninstalling 1.8.0. Then, install 1.5.8. Rename the new "Arduino" program folder (which should now be 1.5.8) to "Arduino 1.5.8", and rename the Arduino folder that you moved to "Arduino 1.8.0". Move this folder back to your Program Files where "Arduino 1.5.8" is located, allowing you to keep both versions.

**Note for Windows users:** While installing 1.5.8, if the installer instructs you to uninstall 1.8.0, move the Arduino folder from `Program Files (x86)` to your downloads folder. Rename this folder to `Arduino_1.8.0`. Open the `Change or remove program` app in Control Panel and uninstall the Arduino application. There will be a popup indicating that the files do not exist and asking if you want to remove the program from the files list; select yes. Then install 1.5.8 as normal. Navigate back to your `Program Files (x86)` folder and locate the Arduino folder. Rename this folder to `Arduino_1.5.8`. Now drag and drop the `Arduino_1.8.0` folder back into the `Program Files (x86)` folder.

The files contained in the RFduino folder are custom builds for OpenBCI by our good friends over at RFdigital. Those guys are great! They helped us to squeeze all of the speed we could get out of the RFduinoGZLL library, and also gave us access to 25 discrete channels for OpenBCI boards to work on. ROCK!

### Upload DEVICE Radio Firmware Version 1.x.x (2014 - Fall 2016)

For 32bit boards, you will want to upload: [`OpenBCI_32bit_Device.ino`](https://github.com/OpenBCI/OpenBCI_Radios/blob/maint/1.0.0/OpenBCI_32bit_Device/OpenBCI_32bit_Device.ino)

For 8bit boards, you will want to upload:
[`OpenBCI_8bit_Device.ino`](https://github.com/OpenBCI/OpenBCI_Radios/blob/maint/1.0.0/OpenBCI_8bit_Device/OpenBCI_8bit_Device.ino)

### Upload Pass Thru Radio Firmware Version 1.x.x (2014 - Fall 2016)

We provide an Arduino sketch called OpenBCI_Dongle_PassThru.ino which makes this possible. After uploading, make sure to move the switch back over to the GPIO6 side!

Now hit the upload button, it's the button to the right of the check mark in the top left of the IDE. Don't worry! You can re-load the Host code easily after programming the Device. After uploading, make sure to move the switch back over to the GPIO6 side!

### Upload HOST Firmware Version 1.x.x (2014 - Fall 2016)

If you want to modify the firmware that the OpenBCI Dongle came with, or roll your own, make sure that you are setting the RFduino up as a HOST, and that the channel is selected correctly. The channel your boards were shipped with is noted on the anti-static baggie that it came in.

```

    // place this above the setup()
    #include <RFduinoGZLL.h>  // using the Gazelle Stack
    device_t role = HOST;  // This is the HOST

    void setup(){
         RFduinoGZLL.channel = 6;  // use channels 2-25. 1 is same as 0 and 0-8 in normal GZLL library
         RFduinoGZLL.begin(role);  // start the GZLL stack
         // more stuff here
    }

```

Also, make sure that you use the code that is specific to your board. There are important differences between the way the 8-bit and Cyton code functions! Both the 8-bit Host and Cyton Host code are downloaded with the RFduino libraries above.
