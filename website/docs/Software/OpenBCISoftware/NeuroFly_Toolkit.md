---
id: NeuroFly_Toolkit
title: NeuroFly Toolkit
---

This tutorial will show you how to control a joystick using EMG data with the OpenBCI GUI. You can then use this customizable, muscle-activated joystick for any purpose of your choosing! OpenBCI used this to control a drone in the 2023 OpenBCI TED Talk.

:::note
Register for updates [here](https://docs.google.com/forms/d/e/1FAIpQLSdGGPw1uSoAlo3YcjYWDd_b4Ye1TcYSy_RzmJ4ppr-RucE6KA/viewform) 
More information coming soon!
:::

## Materials Required

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) or [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit)
3.  [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958)
4.  Computer with downloaded [OpenBCI GUI](Software/OpenBCISoftware/01-OpenBCI_GUI.md)

## Step 1: Hardware Assembly

Follow the [EMG Getting Started tutorial](GettingStarted/Biosensing-Setups/02-EMG-Setup.md) to connect the electrodes to your body and the Cyton board. We will read data from the Cyton using the OpenBCI GUI. For this tutorial, you will need to connect up to four channels. The number of channels depends on how many degrees of freedom are needed. Four channels will enable control of both positive and negative X/Y directions of the joystick. Only one ground is needed.

Here is a mapping of channel numbers to X/Y joystick directions:

| Channel | Direction   |
| ------- | ----------- |
| 1       | - X (left)  |
| 2       | + X (right) |
| 3       | + Y (up)    |
| 4       | - Y (down)  |

:::tip
The most complex part of this tutorial will be finding the right placement for each pair of electrodes. It is important to find the muscle locations that are the easiest for the user to precisely control. You may need to play around with different locations before finding your optimal electrode setup.
:::

## Step 2: GUI Setup

Start by streaming data using the GUI. Follow this [getting started tutorial](../../Software/OpenBCISoftware/01-OpenBCI_GUI.md/#using-the-openbci-gui) to get the board streaming. You will need to open the EMG Joystick and EMG Settings widgets.

### EMG Settings

This widget contains the tuneable parameters used for the threshold algorithm that determines how active each channel is. The output value is a normalized value, from 0 to 1, mapped between the lower threshold and upper threshold.

![EMG Settings Screenshot](../../assets/TutorialImages/EMG_settings.png)

| Parameter | Definition                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------ |
| Smooth    | Controls how many seconds of data to average over. This reduces the effect of outliers in the dataset. |
| uV Limit  | Upper limit for the EMG signal.                                                                        |
| Creep+    | Adjustment speed for upper threshold. How fast it should decrease if not triggered.                    |
| Creep-    | Adjustment speed for lower threshold. How fast it should increase if not triggered.                    |
| Min ΔuV   | Minimum difference allowed between upper and lower thresholds.                                         |
| Low Limit | Minimum lower threshold allowed.                                                                       |

A further description of these parameters can be found on the [GUI Widgets options](../../Software/OpenBCISoftware/02_GUI_Widget_Guide.md/#options) page.

### EMG Joystick Widget

This widget has an indicator that moves in the direction of the activated EMG channels. This visualization should be used in combination with the EMG settings to find your ideal EMG joystick setup.

![EMG Joystick Screenshot](../../assets/TutorialImages/EMG_joystick.png)

## Step 3: Stream Data Using Networking Widget

Follow the [Networking Tutorial](../../Software/OpenBCISoftware/02_GUI_Widget_Guide.md/#networking) to learn how to stream data using UDP from the GUI. For this project, you will need to stream the EMG channel data from the Networking Widget. Your Networking settings should look as follows:

![UDP Networking Widget Screenshot](../../assets/TutorialImages/UDP_drone.png)

Once your UDP stream is running, you will be able to use this EMG joystick for any use case! We are excited to see how our global Community uses this widget to create awesome projects and research!
