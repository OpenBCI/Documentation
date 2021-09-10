---
id: EMG_Tetris
title: EMG-controlled Tetris
---
In this tutorial, we will show you how to make your own muscle-controlled Tetris game. You can now play Tetris on your computer without pressing any keys!

To do that, we will be using the Cyton's built-in accelerometer to track head movement and EMG signals produced when you blink to rotate the pieces. 

Check out an example video of this tutorial being put into action!

[![Tetris Demo Video](https://img.youtube.com/vi/VpeLf-K2Iro/0.jpg)](https://www.youtube.com/watch?v=VpeLf-K2Iro)


## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  OpenBCI [Ultracortex Mark IV](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv)
3.  Computer with downloaded OpenBCI [GUI](Software/OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly.

Follow the Ultracortex Mark IV Getting Started [tutorial](https://docs.openbci.com/AddOns/Headwear/MarkIV/) on this link to connect assemble and properly connect the channels on your headset. The linked tutorial will also show you how to connect the Cyton board and stream data to the OpenBCI GUI.

## Step 2: Software Setup.

Download and install Python (preferrably version 3). Python might already be installed on your computer. Type `python --version` to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed: pyautogui, socket, sys, time, argparse, signal, json.

## Step 3: Data Stream using the GUI.

For this project, you will be streaming data using UDP through the GUI from the Networking Widget. Open up the Accelerometer, EMG, and Networking widgets and configure the networking widget to look like below:

<img src="https://github.com/sonikavuyyuru/EEG-Tetris/blob/main/Screen%20Shot%202021-09-06%20at%203.01.58%20PM.png?raw=true" width="100%" />

Mainly, change the protocol from Serial to UDP and set the Data Type of Stream 1 and 2 as Accel/Aux and EMG respectively. Furthermore, change the Port of both Stream 1 and 2 to “12345”. Before continuing, ensure the electrodes are making good contact with the scalp by examining the noise in the timeseries widget. Proper data is essential for clean readings and control of the Tetris game.

:::info
**Important**: Make sure your EMG and Accelerometer widgets are open before you start streaming.
:::

## Step 4: Using a Python Script to Read the Data and Scroll.

The Python script will search for the EMG and Accelerometer data streams. Once it finds them, it will read them and detect any spikes that correspond to blinks as well as movements of the head.

:::info
Download the Python script from [here](https://github.com/sonikavuyyuru/EEG-Tetris/blob/main/tetris.py).
:::

Run the Python script in your preferred IDE or through your command line using "python tetris.py" in the directory where you have it saved. Once you run the script, you can start the data stream and start the UDP stream from the GUI data.

Keep your head still for the less than 10 second calibration period. Once the calibration period is complete (indicated by the "Calibration done. You may now begin Tetris!" message), go ahead and navigate to your favorite online Tetris website with arrow and space controls (these controls can be modified using the variables at the start of the code). We recommend using https://jstris.jezevec10.com. 

Try it out and send us a video of your final prototype!
