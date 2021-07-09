---
id: EMG_Chrome_Dino_Game
title: EMG Chrome Dino Game
---
In this tutorial we will show you how to play the Google Chrome Dinosaur Game without touching your laptop. To do that, we will read EMG data from your arm muscles and find the peaks which correspond to flexing, using them to trigger a jump of the dinosaur.

Check out an example video of this tutorial being put into action!

![EMGdinogif](https://media.giphy.com/media/Iyxb0WAiUUvffbg3mV/giphy.gif)

The following instructions have been written for use with Linux 16.04.

## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) or [IDUN Dryodes](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit)
3.  [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958)
4.  Computer with downloaded OpenBCI [GUI](../../Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly.

Follow the EMG Getting Started [tutorial](../../GettingStarted/02-Biosensing-Setups/02-EMG-Setup.md) on this link to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI. For this tutorial, you will need to connect one of your arms to Channel 1 and Ground.

## Step 2: Software Setup.

Install Python version 2 or 3. [Here](https://www.geeksforgeeks.org/how-to-download-and-install-python-latest-version-on-linux/) is a useful tutorial to find out if Python is already installed on your computer and to install it. To use this program, you need the following Python packages installed:

-   **pylsl** : use `pip install pylsl` from the command line to install it.
-   **pyautogui** : use `pip install pyautogui` to install it.
-   **brainflow**: use `pip install brainflow`.
-   **numpy**: use `pip install numpy`.

## Step 3: Download and Run the Script.

The Python script will set up the Cyton board, read data from it, and analyze it to detect any spikes that correspond to muscle flexing. If a flex is detected and 100 milliseconds have passed since the last one, it will press the space bar, which will make the dinosaur jump. The threshold for the time between flexes can be modified as needed to avoid debouncing.

In this tutorial, we provide two alternative ways of processing the data to detect the peaks and encourage you to think of your own ways to do it. Get either the `chrome_dino_v1.py` or the `chrome_dino_v2.py` Python script from [here](https://github.com/evaesteban/brainflow/tree/games/games) by cloning the repository or copying the individual code file to a .py script. Once your board is connected, open a terminal and launch the script by running `python <script name> --serial-port /dev/ttyUSB0 --board-id 0` from the folder its stored in.

**Important:** If you are using a serial port other than /dev/ttyUSB0, replace it in the above command.

Once the script has launched, follow the instructions on the terminal. The script `chrome_dino_v1.py` removes the noise from the signal, squares it, and sets a threshold to detect the peaks. The script `chrome_dino_v2.py` denoises the signal and then uses a rolling window with normalization to detect the peaks.

**Important**: If you are using `chrome_dino_v1.py` and the mean value printed out is negative, swap the N and P electrode cables and repeat calibration to get a positive mean.

Next, disable your internet and open a Google Chrome tab. Start the game by pressing the spacebar or flexing your arm. Every time you flex, the dinosaur will jump. Since we’re processing raw signals, the threshold might need to be adjusted. If the jump is not getting triggered, play with the value of `flex_thres` by modifying the variable directly in `chrome_dino_v2.py` or the percentage multiplier set to 0.5 in `chrome_dino_v1.py`. You can also modify the time between flexes by changing the parameter `time_thres`.

To learn more about brainflow visit its [GitHub repository](https://github.com/brainflow-dev/brainflow) and its [Documentation](https://brainflow.readthedocs.io/en/stable/).

This is a great example to get started with brainflow. Try it out and send us a video of how you modify this prototype!

**Note**: This tutorial is based on Brainflow 2020. If you experience any issues with the latest versions email us at [contact@openbci.com](mailto:contact@openbci.com).
