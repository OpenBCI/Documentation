---
id: CytonGS
title: Cyton Getting Started Guide
---

This guide will walk you through setting up your computer to use the Cyton and USB Dongle, using the OpenBCI_GUI Application, and how to get EEG/EMG/EKG from your own body! Please review this guide in its entirety before starting and consult the [Cyton Biosensing Tutorial Video](https://youtu.be/D5RCu41msT4) for extra guidance. Have fun!

## I. What You Need

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/Contents8bit.png?raw=true" width="70%">

 1. OpenBCI Cyton Board
 2. OpenBCI Dongle
 3. OpenBCI Gold Cup Electrodes and Ten20 Paste
 4. 6V AA battery pack & (x4) AA batteries (batteries not included)
 5. (x4) plastic feet for board stabilization

### 1. Your Board

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/8.jpg?raw=true" width="70%">

This tutorial can be followed if you are working with any Cyton board (8-bit, Cyton, or Cyton with Daisy). I'll be working with the 8-bit board.

### 2. Your OpenBCI USB Dongle

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/dongle.png?raw=true" width="70%">

The OpenBCI USB Dongle has an integrated RFDuino that communicates with the RFDuino on the Cyton board. The dongle establishes a serial connection with your computer's on-board FTDI chip. The serial port is called /dev/tty\* (if you're using Linux or Mac) or COM\* (if you're using Windows). You'll be connecting to this serial port from the OpenBCI GUI or whatever other software you want to end up using to interface your Cyton board.

### 3. OpenBCI Gold Cup Electrodes and Electrode Paste

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/electrodeStarterKit.png?raw=true" width="70%">

If you ordered an OpenBCI Gold Cup Electrodes and Ten20 Paste you should have:

 * 10 passive, gold cup electrodes on a color-coded ribbon cable
 * 3 2oz Jars of Ten20 conductive electrode paste

If you plan to work with your own electrodes, the [touch-proof adapter](https://shop.openbci.com/products/touch-proof-electrode-cable-adapter) may come in handy:

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/touch_proof.jpg?raw=true" width="70%">

It will convert any electrode that terminates in the industry-standard touch-proof design to an electrode that can be plugged into any OpenBCI Board!

### 4. Your 6V AA Battery Pack & 4 AA Batteries

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/batteryConnection.png?raw=true" width="70%">

Cyton boards have specific input voltage ranges. These input voltage ranges can be found on the back-side of the board, next to the power supply. **BE VERY CAREFUL** to not supply your board with voltages above these ranges, or else you will damage your board's power supply. For this reason, we recommend that you always use the battery pack that came with your OpenBCI kit.

### 5. (x4) Plastic Feet

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/8bitboard_wPlasticFeet.png?raw=true" width="70%">

Your Cyton kit comes with 4 plastic feet that can be snapped into the holes of your board to provide extra stability while working.

## II. Download/Install/Run the OpenBCI GUI

Please [follow the step by step guide](http://docs.openbci.com/OpenBCI%20Software/01-OpenBCI_GUI) to install the OpenBCI_GUI as a standalone application. Keep an eye out for specific Cyton requirements such as installing the FTDI VCP driver.

Come back to this guide when your GUI is running!

## III. Prepare your OpenBCI Hardware

### 1. Plug in your OpenBCI USB Dongle

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/dongleConnection.png?raw=true" width="70%">

Plug this in (facing upwards!) and you should see a blue LED light up.

**Note:** make sure your USB Dongle is switched to GPIO 6 and not RESET. The switch should be set closer to your computer as seen in the picture to the right.

### 2. Plug in your 6V AA battery pack (with batteries)

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/batteryConnection.png?raw=true" width="70%">

Cyton boards have specific input voltage ranges. These input voltage ranges can be found on the back-side of the board, next to the power supply. **BE VERY CAREFUL** to not supply your board with voltages above these ranges, or else you will damage your board's power supply. For this reason, we recommend that you always use the battery pack that came with your OpenBCI kit. There's a good reason we put this notice in here twice!

### 3. Switch your Cyton board to PC (not OFF or BLE)

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/PowerUpBoard.JPG?raw=true" width="70%">

Make sure to move the small switch on the right side of the board from "OFF" to "PC". As soon as you do, you should see a blue LED turn on. If you don't, press the reset (RST) button just to the left of the switch. If the LED still does not turn on, make sure you have full battery. If you're sure your batteries are fully charged, consult the [hardware section](http://openbci.com/index.php/forum/#/categories/hardware) of our Forum.

**Note:** it's important to plug in your Dongle before you turn on your Cyton board. Sometimes, if the data stream seems broken, you may need to unplug your USB Dongle and power down your Cyton board. Make sure to plug your USB Dongle in first, then power up your board afterwards.


## IV. Connect to your Cyton board from the GUI

### 1. Select LIVE (from Cyton)

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/serial_cyton_select_cyton.png?raw=true" width="50%">

In order to connect to your Cyton, you must specify the data source to be `LIVE (from Cyton)` in the first section of the System Control Panel. Before hitting the `START SYSTEM` button, you need to configure your Cyton board (follow the steps below).

### 2. Select Serial Transfer Protocol

Next select `Serial (from Dongle)`. If you want to use the WiFi Shield, please see the [WiFi Getting Started Guide](http://docs.openbci.com/Tutorials/03-Wifi_Getting_Started_Guide#wifi-getting-started-guide-overview)

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/serial_cyton_select_serial.png?raw=true" width="50%">

### 3. Find your USB Dongle's Serial/COM port

In the first section of the LIVE (from Cyton) sub-panel, find your Dongle's Serial/COM port name. If you're using a Mac or Linux, its name will be in the following format:

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/serial_cyton_select_serial_port.png?raw=true" width="50%">

**/dev/tty***

If you're using Windows, it will appear as:

**COM#**

Your USB Dongle's port name will likely be at the top of the list. If you don't see it:

1. Make sure your dongle is plugged in and switched to GPIO 6 (not RESET)
2. Click the REFRESH LIST button in the SERIAL/COM PORT section of the sub-panel

If you're still having trouble finding your USB Dongle's port name, refer to the [Forum](http://openbci.com/index.php/forum/) about debugging your hardware connection.

### 4. Select your channel count (8 or 16)

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/channelCount.png?raw=true" width="50%">

The CHANNEL COUNT setting is defaulted to 8. If you are working with an OpenBCI Daisy Module and Cyton board (16-channel) system, be sure to click the 16 CHANNELS button before starting your system.

### 5. Optional Settings

<details><summary>If you're comfortable using the GUI, use the optional settings in this dropdown section. Otherwise, skip to step 7!</summary><br>

#### Check Status or Change Radio Channel

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/serial_cyton_open_radio_config.png?raw=true" width="50%">

There is a Radio Configuration tab that you can use to check the status of your Cyton system and change the radio channel. Click on the `>` arrow to open up the options panel. Here you will find tools for configuring your Cyton Radio connection. Let's walk through the functions of each button.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_radio-status.png?raw=true" width="50%">

Click on the `STATUS` button to check the status of your Cyton system. This may take a few seconds to report, as it reaches out to your Dongle and Cyton board to verify that they are talking to each other. If they are, you will see the message `Success: System is Up`. If not, you will see `Failure: System is Down`.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_radio-get-channel.png?raw=true" width="50%">

Click the `GET CHANNEL` button to know the channel that your Cyton system is communicating on. If the system is up, you will get the message `Success: Host and Device on Channel number: X`. If the system is down, you will get the message `Failure: Host on Channel number: X`.  
**NOTE** the Host radio is on the Dongle, and the Device radio is on the Cyton board.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_change-channel.png?raw=true" width="50%">

Click on the `CHANGE CHANNEL` button to change the channel that your Cyton system is communicating on. This can be really useful if you have multiple Cyton systems in the same space. When you click the button, a menu will open up with the channels. When you click on the channel you want, it will take just a second, and you should get the message `Success: Host and Device on Channel number: X`.  
**IMPORTANT** Make sure that there are not other Cytons active in the neighborhood when you change the channel!

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_override-dongle.png?raw=true" width="50%">

Click on the `OVERRIDE DONGLE` button to change the channel of the OpenBCI Dongle only. When you click the button, a menu will open up with the channels. For the purpose of this Tutorial, go ahead and change the Dongle channel to Channel `15`. When you click on the channel number, it will take just a second, and you should get the message `Success: Host override - Channel number: 15`

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_status-failure.png?raw=true" width="50%">
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_get-channel-failure.png?raw=true" width="50%">

Since you have just changed the channel of the Dongle only, When you click on the `STATUS` button, you will get a failure message. Similarly, when you press the `GET CHANNEL` button you will also get a failure message. But don't worry! We can use the Autoscan function to get your Cyton Board and Dongle back on the same track!

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cyton_autoscan-success.png?raw=true" width="50%">

Now, click the `AUTOSCAN` button. It may take a few seconds for the Dongle to scan through every channel until it connects to your Cyton, but it will, and you will get the message `Success: System is Up` Autoscan!

#### Edit the Playback file name


![File Name](assets/GettingStartedImages/ble112_ganglion_fileName.png)


In the DATA LOG FIlE section of the LIVE (from Cyton) sub-panel you can specify the name of your playback file. This file name is automatically defaulted to:

**\Documents\OpenBCI_GUI\OpenBCI-RAW- + date/time**

You can edit the the name of this file by clicking in the "File Name" text field.

**Playback files and user data are stored in */Documents/OpenBCI_GUI/* on all OS.** OpenBCI Playback Files use [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) formatting and plain text.

After creating a Playback file, it can be replayed by running Playback File data source mode. As a result, you can easily share recorded OpenBCI Playback files with your friends and colleagues.

#### Select your SD setting


![WRITE TO SD](assets/GettingStartedImages/writeToSD.png)


If you want to log data to a MicroSD inserted into the Cyton Board, in the WRITE TO SD (Y/N)? sub-panel section you can select the maximum recording time of the file. This setting is defaulted to "Do not write to SD…" and will automatically switch to this if you do not have a MicroSD card properly inserted into your Cyton board.

**Note:** be sure to select a file size that is larger than your planned recording time. The Cyton writes to the local SD in a way that enables us to write lots of data very quickly. As a result, however, we must specify how large the file will be before we begin. The technique is known as block writing.

</details>

### 7. Press "START SYSTEM"

![START SYSTEM](assets/GettingStartedImages/serial_cyton_start_system.png)

Now you're ready to start the system! Press the START SYSTEM button and wait for the OpenBCI GUI to establish a connection with your Cyton board. This usually takes ~5 seconds.

![Initializing](assets/GettingStartedImages/serial_cyton_initializing_gui.png)

During this time, the help line at the bottom of the OpenBCI GUI should be blinking the words: "Attempting to establish a connection with your OpenBCI Board..."

**TROUBLESHOOTING**

If the initialization fails, try the following steps in order:

1. Making sure you've selected the correct serial/COM port
2. Power down your Cyton board and unplug your USB Dongle. Then, plug back in your USB Dongle and power up your Cyton board in that order. Then try restarting the system, but pressing the START SYSTEM button again.
3. If this does not work, try relaunching the OpenBCI GUI application and redo step 2 above. Then reconfigure the SYSTEM CONTROL PANEL settings, and retry START SYSTEM.
4. Make sure that your batteries are fully charged and then retry the steps above.
5. If the channel number is not being displayed, select "AUTOSCAN" from the RADIO CONFIGURATION settings.
6. If you are still having troubles connecting to your Cyton board, refer to the [Forum](http://openbci.com/index.php/forum) for extra troubleshooting advice.

### 8. Your Cyton is now live!

Now that the OpenBCI_GUI is connected to your Cyton you may press `Start Data Stream` in the upper left hand corner.

![cyton serial data stream start](assets/GettingStartedImages/serial_cyton_data_stream_start.png)

You should see data streaming into the GUI, try running your fingers along the electrode pins at the top of your board.

![Touch](assets/GettingStartedImages/touch.JPG)

You should see the 8 (or 16 if you're using a Daisy module) channels on the _Time Series_ widget behave chaotically in response to you touching the pins and all the traces of the FFT graph on the upper right should instantly shift upwards.

![cyton serial chaos](assets/GettingStartedImages/serial_cyton_chaos.png)

If this is the case, congratulations; you are now connected to your Cyton board. It's time to see some brain waves!

## V. Connect yourself to OpenBCI
To learn how to connect yourself to OpenBCI using your newly set up board, see the following tutorials:
* [EEG Setup](01GettingStarted/02-Biosensing-Setups/01-EEG-Setup.md)
* [EMG Setup](01GettingStarted/02-Biosensing-Setups/02-EMG-Setup.md)
* [ECG Setup](01GettingStarted/02-Biosensing-Setups/03-ECG-Setup.md)
