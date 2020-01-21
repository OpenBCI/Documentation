---
id: EMGSetup
title: Setting up for EMG
---

This document will show you how to read EMG data (electrical signals from muscles) using OpenBCI hardware and GUI.

## Materials Needed

1. OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/ganglion-board)
2. [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395)
3. [EMG/ECG Snap Electrodes](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) or [Gold Cup Electrodes](https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163)
4. OpenBCI [GUI](../../06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

To determine the number of electrodes you will need, add up:
- Two electrodes for each muscle group you are streaming data from
- One electrode to serve as the universal ground

The electrode pairs for each muscle group will serve as the positive and negative terminals across which a potential difference can be detected.

## 1. Connecting Electrodes to the OpenBCI Board

Connect each electrode pair (for each muscle group) to the top and bottom pins of each row N(x)P, where x is any of the numbers corresponding to a GUI channel. *Note: On the Cyton board, there are 8 channels available.*

Additionally, connect the ground electrode pin to the Cyton bottom AGND pin.

**If using the _Ganglion_, please check your set-up with these following steps, noting that on the Ganglion board there are 4 channels available.**

A) The four switches on the Ganglion should be in the default **UP** position.

B) Your ground electrode should be connected to the bottom D_G pin (Driven Ground).

C) Each muscle should have two electrodes - one connected to the top pin, the other to the bottom pin. You can connect up to four muscles to the input channels 1 through 4. Thus, nine cables, including the ground electrode in step B, are needed to use all four channels of the Ganglion board to obtain EMG.


<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true" width="50%">

In the image above, note how the positive and negative terminals (yellow and green) are connected to the top and bottom N1P pins. When you are running the GUI, data from N1P pins will be displayed on Channel 1 within the [Time Series Widget](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#time-series).

After making these pin connections, connect the sticky electrodes to the snap electrodes **prior to applying to the skin.** If you are using gold cup electrodes, ensure that the cups are properly adhered to the skin with conductive paste.

## 2. Electrode-Muscle Connection

Choose muscle groups that can be flexed and relaxed easily. Place one electrode at the base of the muscle, and the other electrode at the tip of the muscle. The order of these doesn’t matter, as long as they are both linked to the same channel number. Place the ground electrode on a bony part of the body with as few muscles as possible (e.g. elbow, kneecap).

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/EMG_Electrode_Placement.jpg?raw=true" width="50%">

## 3. Streaming EMG Data with the OpenBCI GUI

Once you have the GUI open, turn off any channels that you have not connected to muscle sensors. Then, go to hardware settings and turn off SRB2 for all of the channels that you are streaming data from.

*Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having muscles reference themselves, so we do not want it to look at this pin.*

When you are happy with your GUI Time Series and Hardware settings, press "BEGIN DATA STREAM."

Here is an example of what your data stream should look like as you flex and relax your muscle:

![EMGGIF](https://media.giphy.com/media/VbVRPTNTb4QAuUiwyb/giphy.gif)

## 4. Using OpenBCI's EMG GUI Widget
The OpenBCI GUI also has a widget for visualizing EMG data. To view it, click on the drop down menu under “FFT Plot”, and select “EMG” instead:
<insert image>
Each circle and box represents a channel. The circle and box fill up as the intensity of the signal on that channel increases.

Check out the <media> gif above to see how this widget behaves when flexing and relaxing your muscle, and see the [GUI widget guide](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#emg) for more information.

## Improving Signal Quality

For help minimizing noise and improving the quality of your EMG signals, check out [this document](10Troubleshooting/01-MinimizingNoise.md)
