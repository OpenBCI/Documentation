---
id: FocusArduino
title: Send Focus Data from GUI to Arduino
---
**Starting with GUI v5.0.0, this feature is temporarily deprecated until a more reliable and research-based Focus algorithm is implemented. If you would still like to use this widget, you can download and run [GUI v4.2.0](https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0).**

This tutorial shows you how to get started streaming data from the OpenBCI_GUI's Focus Widget via Serial connection to an [Arduino UNO Rev3](https://store.arduino.cc/usa/arduino-uno-rev3).
Head [**HERE**](https://www.instructables.com/id/Send-Focus-Data-From-OpenBCI-GUI-to-Arduino/) to find the OpenBCI/Arduino Focus Data tutorial in the updated Instructable format!

## What do I need?

-   The [OpenBCI_GUI](https://github.com/OpenBCI/OpenBCI_GUI/releases/latest) standalone app or Processing sketch
-   An [Arduino UNO](https://store.arduino.cc/usa/arduino-uno-rev3), or other similar device
-   An [OpenBCI Board](https://shop.openbci.com/collections/frontpage) _(Optional)_

## Helpful Background Skills

-   [Arduino Basics](https://www.arduino.cc/en/Guide/HomePage)
-   Knowledge of [Arduino](https://www.arduino.cc/reference/en/) or C-based programming
-   Experience running the OpenBCI GUI [from the Processing IDE](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md) _(Optional)_

### Step 1 - Load the Example in the Arduino IDE

The [OpenBCI_GUI-FocusArduino.ino](https://github.com/OpenBCI/Documentation/blob/master/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino) file is designed to serve as a simple starting point for creating your own Arduino project using data from the GUI over serial.

You can copy/paste the code from Github into the Arduino IDE or [download the Docs](https://github.com/OpenBCI/Documentation/archive/master.zip) and navigate to the example `/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino`.

### Step 2 - Upload the Arduino sketch

![Upload Arduino Sketch](../../assets/ExamplesImages/gui_arduino_uploadArduinoSketchIDE.png)

After uploading the sketch, you can close or minimize the Arduino IDE, but keep the Arduino connected to the computer. The sketch we just uploaded is running!

### Step 3 - Open OpenBCI_GUI in Synthetic Mode

![Open GUI Synthetic Mode](../../assets/ExamplesImages/gui_arduino_selectSyntheticMode.png)

### Step 4 - Start Streaming

#### Open and Setup the Networking Widget

![Setup Networking Widget](../../assets/ExamplesImages/gui_arduino_setupNetworkingWidgetSerial.png)

#### Open the Focus Widget. Then, click "Start Data Stream" and then "Start" in the Networking Widget

![OpenBCI Serial Not Focused](../../assets/ExamplesImages/gui_arduino_serial_notFocused.png)

#### Next, turn off channel one to simulate Focused state.

![OpenBCI Serial Focused](../../assets/ExamplesImages/gui_arduino_serial_Focused.png)

The Arduino's built-in LED should blink when the Focus Widget reads "focused!"

How does the Focus Widget work? [Check out this community post!](https://openbci.com/community/focus-visualization-widget/)

How can this be used to _make_ something? [Here's an example!](https://openbci.com/community/using-openbci-guis-focus-widget-to-harness-alpha-and-beta-waves/)

### Step 5 - Learn! Create! Share!

From here, you can add more to your new Arduino project to react to Focus data from the OpenBCI_GUI:

-   Use Live Data from a [Cyton](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion](https://shop.openbci.com/collections/frontpage/products/ganglion-board)

-   Try controlling even more LEDs using the Arduino

-   Try controlling a motor or group of motors

-   Make a second copy of your project and make it a two player game!

-   [Share what you've made in a community post!](https://openbci.com/community/)
