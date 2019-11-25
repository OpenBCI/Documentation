---
id: GanglionGS
title: Ganglion Getting Started Guide
---
### Overview

This guide will walk you through setting up your Ganglion, connecting it to your computer, and then connecting it to yourself. The first tutorial is for Mac users, the second is for Windows users. Please review this guide in its entirety before starting, and consult the [Ganglion Biosensing Tutorial Video](https://youtu.be/l13R_99h0qQ). Have fun!

**Note that the Ganglion is not set to be discoverable out of the box, you need the GUI or another app.**

## What You Need

![OpenBCI Contents](assets/GettingStartedImages/ganglion_what_you_need.png)

 1. OpenBCI Ganglion Board
 2. An [OpenBCI Ganglion Dongle](https://shop.openbci.com/products/ganglion-dongle)
 3. 6V AA battery pack & (x4) AA batteries (batteries not included)
 4. (x4) plastic feet for board stabilization
 5. OpenBCI [Gold Cup Electrodes](http://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163), or your own electrodes, and [Electrode Paste](http://shop.openbci.com/collections/frontpage/products/ten20-conductive-paste-2oz-jars)
 6. [Snap Electrode Cables](http://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) and [Snap Electrodes](http://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395)
 7. A computer connected to the internet

### 1. Your Ganglion

![OpenBCI 8-bit Top](assets/GettingStartedImages/ganglion_head_shot.jpg)

The battery connector on the back can accept 3V to 12V DC power input. The pushbutton is a reset button. Note the removable orange stickers on the four switches (SW1, SW2, SW3, SW4). For more information on the Ganglion Hardware, visit the [OpenBCI Ganglion](03Ganglion/01-GanglionBoard.md) page in the Hardware section.

### 2. OpenBCI Ganglion Dongle

![Ganglion Dongle](assets/GettingStartedImages/Ganglion_dongle.jpeg)

Plug the OpenBCI Ganglion Dongle into your computer before launching the GUI. Additional dongles can be found in the [OpenBCI Shop](https://shop.openbci.com/products/ganglion-dongle).

### 3. Your 6V AA Battery Pack & 4 AA Batteries

Install 4 AA batteries in your battery pack, plug in your Ganglion board and turn on the power switch. You should see the BLUE LED blink gently. Blinking means that the BLE radio is not connected or paired with any computer or phone/tablet. Once the Ganglion is connected, the LED stays steady on.

![Battery Connection](assets/GettingStartedImages/ganglion_batteryConnection.png)

**Important note**
If you are using a non-OpenBCI battery holder, please check the polarity (red +/black -) BEFORE powering up your OpenBCI board. A reversed polarity will burn out your board.

### 4. (x4) Plastic Feet

![Plastic Feet](assets/GettingStartedImages/ganglion_wPlasticFeet.png)

Your OpenBCI kit comes with 4 plastic feet that can be snapped into the holes of your board to provide extra stability while working.

### 5. Gold Cup Electrodes and Paste

![Electrode Starter Kit](assets/GettingStartedImages/electrodeStarterKit.png)

If you ordered OpenBCI [Gold Cup Electrodes](http://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163) and [Electrode Paste](http://shop.openbci.com/collections/frontpage/products/ten20-conductive-paste-2oz-jars), it should come with:

 * 10 passive, gold cup electrodes on a color-coded ribbon cable
 * 3 2oz Jars of Ten20 conductive electrode paste

![TouchProof Adapter](assets/GettingStartedImages/touch_proof.jpg)

If you plan to work with your own electrodes, the [Touch-Proof Adapter](http://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter?variant=31007211715) will come in handy. It will convert any electrode that terminates in the industry-standard touch-proof design to an electrode that can be plugged into any OpenBCI Board!

## Download/Install/Run the OpenBCI GUI

Please [follow the step by step guide](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#installing-the-openbci-gui-as-a-standalone-application) to install the OpenBCI_GUI as a standalone application.

Come back to this guide when your GUI is running!

## Start Using The OpenBCI GUI

### Connect the GUI to your Ganglion board

Make sure your computer's Bluetooth feature is turned on. **Select `LIVE (from Ganglion)` from the first drop down.**

![selecting ganglion from drop down](assets/GettingStartedImages/ble112_ganglion_select_ganglion.png)

**Select `Bluetooth (BLED112 Dongle)` as the transfer protocol.**

![selecting ganglion ble from the transfer protocol](assets/GettingStartedImages/ble112_ganglion_select.png)

The GUI will automatically start searching for Ganglion devices.

Each Ganglion has its own unique 4 character ID (in HEX), and you will see it listed in the `BLE DEVICES` window. If you don't see any Ganglions, check to make sure your Ganglion has a battery connected, is switched on, and the blue LED is blinking. If there are multiple Ganglions in the room, you can find yours by turning it off, clicking the `REFRESH LIST` button, then turn on your Ganglion again. Make a note of *your* Ganglion's 4 character ID.  

**Select the desired Ganglion device from the dropdown list.**

![selecting your ganglion ble shield](assets/GettingStartedImages/ble112_ganglion_select_peripheral.png)

The GUI will automatically generate a recording to a file. You have an option at this point to create your own file name, in the `DATA LOG FILE` window, should you choose to.

![File Name](assets/GettingStartedImages/ble112_ganglion_fileName.png)

**Press `START SYSTEM` when you're ready to begin streaming.**

![ble ganglion start system](assets/GettingStartedImages/ble112_ganglion_start_system.png)

### Navigating the GUI

When the GUI connects, it opens up to the default window layout. For a more in-depth guide to the GUI interface and functionality, check out the [OpenBCI GUI](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md) doc. For the purposes of this introductory tutorial, You should follow the following steps to setup the GUI.  

![Start Data Stream](assets/GettingStartedImages/ganglion_connected-idle-GUIv4.png)

**Click on the `Layout` dropdown menu, and select the one outlined in red.**

![select layout](assets/GettingStartedImages/ganglion_select-layout.png)

If the Accelerometer is off, turn on the Accelerometer by clicking the `Turn Accel. On` button.

![Accel ON!](assets/GettingStartedImages/ganglion_accel-ON.jpg)
![Accel ON!](assets/GettingStartedImages/ganglion_accel-ON.png)

**Then, click `Start Data Stream` to stream data from your Ganglion board.**

![Start Data Stream](assets/GettingStartedImages/ganglion_Start.png)
![First Live Ganglion Data](assets/GettingStartedImages/ganglion_first-data.jpg)  

You should see the `Time Series` window scrolling some data to the left, the `FFT Plot` container will show you the power level of the signals at different frequencies. The `Accelerometer` window will also scroll data.  

![Accel Moving](assets/GettingStartedImages/ganglion_moving-accelerometer.jpg)

Pick up your board, and move it around. You should see the data in the `Accelerometer` window also move around, and if you're touching the input pin header, you will see some noise in the other windows. Nice!  

**NOTE: If you're having trouble, check out the troubleshooting section at the bottom of this tutorial.**

Now that you've got your computer connected to the Ganglion, it's time to connect your *self!*


## Connect yourself to OpenBCI
To learn how to connect yourself to OpenBCI using your newly set up board, see the following tutorials:
* [EEG Setup](01GettingStarted/02-Biosensing-Setups/01-EEG-Setup.md)
* [EMG Setup](01GettingStarted/02-Biosensing-Setups/02-EMG-Setup.md)
* [ECG Setup](01GettingStarted/02-Biosensing-Setups/03-ECG-Setup.md)
