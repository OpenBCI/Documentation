---
id: EMGslideshow
title: EMG-controlled Slideshow
---
In this tutorial, we will show you how to scroll through a presentation using your eyes. To do that, we will read EMG data from the muscles around your eyes and find the peaks which correspond to blinking, using them as a trigger to scroll to the next slide. Even though we are using eye blinks in this example, any EMG signals such as those produced by your jaw when you clench it or your arms when you move them can be used.

 Check out an example video of this tutorial being put into action!

  ![EMGslideshowgif](https://media.giphy.com/media/ZdgAlXPlhKSMCYgKQU/giphy.gif)

 The following instructions have been written for use with Windows 10.

## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [EEG Headband Kit](https://shop.openbci.com/collections/frontpage/products/openbci-eeg-headband-kit)
3.  Computer with downloaded OpenBCI [GUI](../../Software/OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly

 Follow the [tutorial](https://docs.openbci.com/docs/AddOns/Headwear/HeadBand) to assemble the EEG Headband Kit, connect it to the Cyton Board, and read data from it using the OpenBCI GUI.

 **Important**: For this project, using a single channel is enough. When following the tutorials in the link above, you only need to connect the electrode on top of the eye you will be blinking (any eye if you will blink both) to Channel 1.

## Step 2: Software Setup

 Download and install [Python](https://www.python.org/downloads/) (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:

-   **pylsl**: use `python -m pip install pylsl` from the Python folder in the command line to install it.
-   **pyautogui** : use `python -m pip install pyautogui` to install.

    ## Step 3: Stream data using the OpenBCI GUI

    Follow the networking [tutorial](https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets#networking) on this link to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data from Channel 1 using the Networking Widget. Your Networking settings should look as follows:

 <img src="https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/EMG_Slideshow_GUI.png?raw=true" width="70%" />

 **Important**: Make sure your EMG widget is open before you start streaming.

## Step 4: Using a Python Script to Read the Data

 The Python script will search for an EMG data stream. Once it finds the stream it will read it and detect any spikes that correspond to eye blinks. If an eye blink is detected and 2 seconds have passed since the last eye blink, it will press the space bar, which will make the presentation go to the next slide. The threshold for the time between blinks can be modified as needed to avoid debouncing.

 Get the Python script from [here](https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/EMG_Controlled_Slideshow) by clicking on ‘Raw’ and copying it to a .py file in your Python folder. Once you’re streaming data from the GUI, go to the Python folder from your command line by using the cd command, and run it using `python.exe <script_name>.py`

 Open your slideshow in Presentation mode. Every time you blink, it will go to the next slide. By modifying the time_thres and blink_thres parameters in the code you can adjust the time to wait between binks and the blink strength to your needs.

 Try it out and send us a video of your final prototype!
