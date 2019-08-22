---
id: ECGSetup
title: Setting up for ECG
---

This document will show you how to read ECG data (electrical signals from  the heart) using OpenBCI hardware and GUI.

## Materials Needed
1. OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/pre-order-ganglion-board?variant=13461804483)
2. [Skintact sticky electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395)
3. Three [EMG/ECG Snap Electrodes](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) — one ground and two sensors.
4. [OpenBCI GUI](../../06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)

## 1. Connecting Electrodes to the OpenBCI Board
1. Connect two snap electrodes to the top and bottom N1P pins.
2. Connect the final pin to the AGND pin.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true" width="60%">

After making these connections, connect the Skintact sticky electrodes to the snap electrodes **prior to applying to the skin**.

## 2. Connect the electrodes to your muscles

1. Connect the ground electrode to any bony part of your body, such as your elbow.
2. Connect each of the other electrodes to opposite sides of your body. For example, place them on either bicep.

By doing this, we are instructing the data to measure the electric potential difference across your chest, which will in turn display your heart signals.

## 3. Streaming EMG Data with the OpenBCI GUI

Once you have the GUI open, turn off all channels that are not connected to muscle sensors. Then, go to hardware settings and turn off SRB2 for all of the channels that you are streaming data from.

*Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having muscles reference themselves, so we do not want it to look at this pin.*

Once all of your settings have been altered, press begin data stream.

## Improving Signal Quality

For help minimizing noise and improving the quality of your ECG signals, check out [this document](10Troubleshooting/01-MinimizingNoise.md)
