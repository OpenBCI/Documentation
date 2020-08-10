---
id: EMGSetup
title: Setting up for EMG
---

This document will show you how to read EMG data (electrical signals from muscles) using OpenBCI hardware and GUI.

## Materials Needed

1. OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/ganglion-board)
2. [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) or [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit)
3. [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958)
4. Computer with downloaded OpenBCI [GUI](../../06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

To determine the number of electrodes you will need, add up:
- Two electrodes for each muscle group you are streaming data from
- One electrode to serve as the universal ground

The electrode pairs for each muscle group will serve as the positive and negative terminals across which a potential difference can be detected.

## Obtain EMG Data with OpenBCI Cyton Board

**1. Hardware Connections**

Connect one electrode cable to top pin N1P and one electrode cable to bottom pin N1P.  *Note: On the Cyton board, there are 8 analog input pins labelled N1P through N8P, corresponding to channels 1-8 on the OpenBCI GUI.*

To obtain additional EMG channels, connect electrode cables to pins N2P, N3P, N4P, and so on and so forth, in the same way as you did for N1P, until you have the desired number of channels. Remember, one channel per muscle.

After you have done this, connect one electrode cable to the Cyton bottom AGND pin.

*for reference, "bottom" pins means the row of pins closer to the table when the board is laid flat.*

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true" width="70%">

In the image above, note how the positive and negative terminals (yellow and green) are connected to the top and bottom N1P pins. When you are running the GUI, data from N1P pins will be displayed on Channel 1 within the [Time Series Widget](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#time-series).


After making these pin connections, snap the sticky electrodes (or the [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit) if you are using that) into the electrode cable *prior to applying the electrodes to the skin.*


**2. Electrode-Muscle Connection**

Choose muscle groups that can be flexed and relaxed easily. Place one electrode at the base of the muscle, and the other electrode at the opposite end of the muscle. The order of these doesn’t matter, as long as they are both linked to the same channel number. For example below, top N1P pin on the Cyton is connected to the yellow electrode cable, and the bottom N2P pin to the green electrode cable.
Place the ground electrode on a bony part of the body with as few muscles as possible (elbow, shown below).

| Electrode Wire Color | Cyton Board Pin | Body Location | Purpose |
|---|---|---|---|
| black | bottom AGND pin | elbow | reference |
| yellow | top N1P pin | muscle | measuring potential difference for channel 1 |
| green | bottom N1P pin | muscle | measuring potential difference for channel 1 |

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Electrode_Placement.jpg?raw=true" width="70%">

<br>

**3. Streaming EMG Data with the OpenBCI GUI**

Once you have the GUI open, turn off any channels that you have not connected to muscle sensors. Then, go to hardware settings and turn off SRB2 for all of the channels that you are streaming data from.

*Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having muscles reference themselves, so we do not want it to look at this pin.*

When you are happy with your software and hardware settings, press "BEGIN DATA STREAM."

Here is an example of what your data stream should look like as you flex and relax your muscle:

![EMGGIF](https://media.giphy.com/media/VbVRPTNTb4QAuUiwyb/giphy.gif)

**4. Using OpenBCI's EMG GUI Widget**

The OpenBCI GUI also has a widget for visualizing EMG data. To view it, click on the drop down menu under “FFT Plot”, and select “EMG”
Each circle and box represents a channel. The circle and box fill up as the amplitude of the signal on that channel increases (unit in voltage).

Check out the gif above to see how this widget behaves when flexing and relaxing your muscle, and see the [GUI widget guide](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#emg) for more information on this and all other GUI widgets.

## Obtain EMG Data with OpenBCI Ganglion Board

**1. Hardware Connections**

If using the Ganglion, please check your set-up with these following steps, noting that on the Ganglion board there are 4 channels available.

Before starting, check that the four switches on the Ganglion are in the default *UP* position.

Connect one snap electrode cable to the +1 pin and one snap electrode cable to the -1 pin.

To obtain multiple EMG channels, connect snap electrode cables to pins 2 through 4 in the same way as you did for pin 1, until you have the desired number of channels. Remember, one channel per muscle, up to four channels.

After you have done this, connect one snap electrode cable to the bottom D_G pin (Driven Ground). This will be the universal reference point.

*for reference, "bottom" pins means the row of pins closer to the table when the board is laid flat.*

After making these pin connections, connect one sticky electrode (or the [IDUN Dryode](https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit) if you are using that) to each snap electrode cable *prior to applying the electrodes to the skin.*

**2. Electrode-Muscle Connection**

Choose muscle groups that can be flexed and relaxed easily. Place one sticky electrode or (IDUN Dryode) at the base of the muscle, and the other electrode at the opposite end of the muscle. The order of these doesn’t matter, as long as they are both linked to the same channel number. Place the reference electrode on a bony part of the body with as few muscles as possible (e.g. elbow, kneecap).

Each muscle should have two electrodes - one electrode connected to the Ganglion top pin, one electrode to the Ganglion bottom pin. You can connect up to four muscles to the analog input channels 1 through 4. Thus, nine cables, including the reference electrode, are needed to get 4 channels of EMG data with the Ganglion Board.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Electrode_Placement.jpg?raw=true" width="70%">

| Electrode Wire Color | Ganglion Board Pin | Body Location | Purpose |
|---|---|---|---|
| black | bottom D_G pin| elbow | reference |
| yellow | top pin 1 | muscle | measuring potential difference for channel 1 |
| green | bottom pin 1 | muscle | measuring potential difference for channel 1 |

if you are sampling EMG from a leg muscle, use the kneecap as a reference instead.



**3. Streaming EMG Data with the OpenBCI GUI**

Once you have the GUI open, turn off any channels that you have not connected to muscle sensors, toggling the number next to the channel, in the Time Series widget.

When you are running the GUI, data from top/bottom pin 1 will be displayed on Channel 1 within the [Time Series Widget](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#time-series). Data from top/bottom pin 2 will be displayed on Channel 2, and so on and so forth.

Once you are happy with your software and hardware settings, press "BEGIN DATA STREAM."
Here is an example of what your data stream should look like as you flex and relax your muscle:

![EMGGIF](https://media.giphy.com/media/VbVRPTNTb4QAuUiwyb/giphy.gif)

**4. Using OpenBCI's Built-in EMG GUI Widget**

The OpenBCI GUI also has a widget for visualizing EMG data. To view it, click on the drop down menu under “FFT Plot”, and select “EMG”
Each circle and box represents a channel. The circle and box fill up as the amplitude of the signal on that channel increases (unit in voltage).

Check out the gif above to see how this widget behaves when flexing and relaxing your muscle, and see the [GUI widget guide](../../06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#emg) for more information on this and all other GUI widgets.


## Improving Signal Quality

For help minimizing noise and improving the quality of your EMG signals, check out [this document](10Troubleshooting/01-MinimizingNoise.md)

For troubleshooting or technical support, please visit the [OpenBCI Technical Forum.](https://www.openbci.com/forum)

## Additional Tutorials

Ready for more advanced eye, facial, and body EMG set-ups that will allow you to scroll, control music and lights, and much more? Head to [Example Projects!](../../07Examples/00-ExamplesLanding.md)
