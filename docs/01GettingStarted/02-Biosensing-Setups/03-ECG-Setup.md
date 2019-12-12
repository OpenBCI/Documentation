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

## 2. Connect the electrodes to your body

1. Connect the ground electrode to a bony part of the chest, such as the sternum.
2. Connect top and bottom N1P pin to opposite sides of your chest.

By doing this, we are instructing the data to measure the electric potential difference across your chest, which will in turn display your heart signals.

The Cyton board has pins N1P through N8P, which allows up to 8 channels of data. 

## 3. Streaming ECG Data with the OpenBCI GUI

Once you have the GUI open, turn off all channels that are not connected to electrodes. Then, go to hardware settings and turn SRB2 **OFF** for all of the channels that you are streaming data from.

*Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having muscles reference themselves, so we do not want it to look at this pin.*

Once all of your settings have been adjusted, press 'begin data stream.'

## Improving Signal Quality

For help minimizing noise and improving ECG signal quality, check out [this document](10Troubleshooting/01-MinimizingNoise.md)
