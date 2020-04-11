---
id: ECGSetup
title: Setting up for ECG
---

This document will show you how to read ECG data (electrical signals from  the heart) using OpenBCI hardware and GUI.

## Materials Needed
1. OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/ganglion-board)
2. [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395)
3. Three [EMG/ECG Snap Electrodes](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) — one ground and two sensors.
4. [OpenBCI GUI](../../06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

## 1. Connecting Electrodes to the OpenBCI Board
1. Connect two snap electrodes to the top and bottom N1P pins.
2. Connect the final pin to the AGND pin.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true" width="60%">

If using the **Ganglion board**, please check your set-up with these following steps, noting that on the Ganglion board there are 4 channels available.

A) The four switches on the Ganglion should be in the default UP position.

B) Your ground electrode should be connected to the bottom D_G pin (Driven Ground). The bottom row of pins is closer to the flat surface on which your Ganglion is placed.

C) Each channel needs two electrodes - one connected to the top pin, the other to the bottom pin. You can connect up to four sampling locations on the chest to the input channels 1 through 4. Thus, nine cables, including the ground electrode in step B, are needed to use all four channels of the Ganglion board to obtain ECG.

After making these connections, snap the Skintact sticky electrodes into the snap electrode. Then, remove the backing tape and apply the electrode to the skin. **For safety reasons, make sure to attach the electrode to the cable before applying to the skin.**

## 2. Connect the electrodes to your body

1. Connect the ground electrode to a bony part of the chest, such as the sternum.
2. Connect top and bottom N1P pin on the Cyton (+1 and -1 pins on the Ganglion) to opposite sides of your chest.

By doing this, we are instructing the data to measure the electric potential difference across your chest, which will in turn display your heart signals.

The Cyton board has pins N1P through N8P, which allows up to 8 channels of data. 

## 3. Streaming ECG Data with the OpenBCI GUI

Once you have the GUI open, turn off all channels that are not connected to electrodes. Then, go to hardware settings and turn SRB2 **OFF** for all of the channels that you are streaming data from.

*Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having cardiac locations reference themselves, so we do not want it to look at this pin.*

Once all of your settings have been adjusted, press 'begin data stream.'

In the Cyton image above, note how the positive and negative terminals (yellow and green) are connected to the top and bottom N1P pins. When you are running the GUI, data from N1P pins will be displayed on Channel 1 within the Time Series Widget. If you are using the Ganglion, channels 1-4 on the GUI Time Series widget will correspond to pins 1-4 on the Ganglion.

## Improving Signal Quality

For help minimizing noise and improving ECG signal quality, check out [this document](10Troubleshooting/01-MinimizingNoise.md)
