---
id: EMGmusic
title: "EMG controlled Music"
---
In this tutorial, we will show you how to pause and unpause your music without pressing any keys on your laptop keyboard. To do that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them as a trigger for pausing the music played via Youtube through your computer. Feel free to connect your laptop to a Bluetooth speaker to make the music louder!

Check out an example video of this tutorial being put into action!

![EMGmusicgif](https://media.giphy.com/media/RfdkPj7SjWbURyFlXC/giphy.gif)

The following instructions have been written for use with Windows 10.

## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) or [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit)
3.  [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958)
4.  Computer with downloaded OpenBCI [GUI](../../Software/OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly.

Follow the EMG Getting Started [Tutorial](https://docs.openbci.com/docs/GettingStarted/Biosensing-Setups/EMGSetup) to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI.

## Step 2: Software Setup.

Download and install [Python](https://www.python.org/downloads/) (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:

-   **pylsl**: use `python -m pip install pylsl` from the Python folder in the command line to install it.
-   **pyautogui** : use `python -m pip install pyautogui` to install.

## Step 3: Stream data using the OpenBCI GUI.

Follow the networking [tutorial](https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets#networking) on this link to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data from Channel 1 using the Networking Widget. Your Networking settings should look as follows:

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/TutorialImages/EMG_Music_GUI.png?raw=true" width="70%" />

**Important**: Make sure your EMG widget is open before you start streaming.

## Step 4: Using a Python Script to Read the Data and Execute EMG Command

The Python script will search for an EMG data stream. Once it finds the stream it will read it and detect any spikes that correspond to muscle flexing. If a flex is detected and 2 seconds have passed since the last one, it will press the space bar, which will make the music stop. The threshold for the time between flexes can be modified as needed to avoid debouncing.

Get the Python script from [here](https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/EMG_Controlled_Music) by clicking on ‘Raw’ and copying it to a .py file in your Python folder. Once you’re streaming data from the GUI, go to the folder that you stored the script in from your command line, and run it using `python.exe <script_name>.py`.

Open Youtube and play some music. Every time you flex your arm as shown in the example video, the music will pause or start playing if paused already. By modifying the time_thres and flex_thres parameters in the code you can adjust the time to wait between flexes and the flex strength to your needs.

Try it out and send us a video of your final prototype!
