---
id: EMGscrolling
title: EMG Scrolling
---
In this tutorial, we will show you how to scroll up and down on your computer screen without touching the keyboard. For that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them to scroll.

Check out an example video of this tutorial being put into action!

![EMGscrollgif](https://media.giphy.com/media/d88TSXA9BWMbKxwNQU/giphy.gif)

The following instructions have been written for use with Windows 10.

## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) or [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit)
3.  [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958)
4.  Computer with downloaded OpenBCI [GUI](../../06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly.

Follow the EMG Getting Started [tutorial](../../GettingStarted/02-Biosensing-Setups/02-EMG-Setup.md) on this link to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI. For this tutorial, you will need to connect both arms, one to Channel 1 and the other one to Channel 2. Only one ground is needed.

## Step 2: Software Setup.

Download and install [Python](https://www.python.org/downloads/) (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:

-   **pylsl** : use `python -m pip install pylsl` from the Python folder in the command line to install it.
-   **pyautogui** : use `python -m pip install pyautogui` to install it.

## Step 3: Data Stream using the GUI.

Follow the networking [tutorial](https://docs.openbci.com/docs/06Software/01-OpenBCISoftware/GUIWidgets#networking) to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data using the Networking Widget. Your Networking settings should look as follows:

<img src="https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/EMG_Scrolling_GUI.png?raw=true" width="70%" />

**Important:** Make sure your EMG widget is open before you start streaming.

## Step 4: Using a Python Script to Read the Data and Scroll.

The Python script will search for the EMG data streams. Once it finds them it will read the and detect any spikes that correspond to the muscle contractions. If a flex is detected and 10 milliseconds have passed since the last one, it will scroll up or down depending on which arm was flexed. The threshold for the time between flexes can be modified as needed to avoid debouncing.

Download the Python script from [here](https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/EMG_Scrolling) by clicking on ‘Raw’ and copying it to a .py file in your Python folder. Once you’re streaming data from the GUI, go to the folder that you stored the script in from your command line, and run it using `python.exe <script_name>.py`

Open one of your favourite websites in your browser and scroll through it flexing your arms. By modifying the time_thres and flex_thres parameters in the code, you can adjust the time to wait between flexes and the flex strength to your needs.

Try it out and send us a video of your final prototype!
