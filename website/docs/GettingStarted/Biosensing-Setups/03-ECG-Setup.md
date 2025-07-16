---
id: ECGSetup
title: Setting up for ECG
---
This document will show you how to read ECG data (electrical signals from the heart) using OpenBCI hardware and the GUI.

## 3-Lead ECG with Cyton or Ganglion Boards

This step-by-step guide for 3-Lead ECG will show you how to get one channel of live ECG data.

### Materials Needed

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) or [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/ganglion-board)
2.  [Gel-based snap electrodes](https://shop.openbci.com/products/kendall-emg-ecg-foam-solid-gel-electrodes-30-pack)
3.  Three [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) — one ground and two sensors.
4.  [OpenBCI GUI](../../Software/OpenBCISoftware/01-OpenBCI_GUI.md)

### Connect Electrodes to the OpenBCI Board

1.  Connect two snap electrode cables to the top and bottom N1P pins of the Cyton.
2.  Connect a third snap electrode cable to the bottom BIAS pin of the Cyton.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true" width="60%" />

If using the **Ganglion board**, please refer to the following steps A to C. The Ganglion board has up to 4 channels available, but in this 3-Lead ECG tutorial we will show you how to use one channel (to start off with!).

A) The four switches on the Ganglion should be in the default UP position.

B) One snap electrode cable should be connected to the bottom D_G pin (Driven Ground) of the Ganglion board. The bottom row of pins is closer to the flat surface on which your Ganglion is placed.

C) To get one channel of data, connect one electrode cable to the top pin 1 of the Ganglion, and one electrode cable to the bottom pin 1 of the Ganglion. FYI, for future reference, you can use pins 1-4 for up to four channels of data. Nine cables, including the ground electrode in step B, are needed if you want to use all four channels of the Ganglion board.

After making these connections, snap the sticky electrodes into the snap electrode cable. Then, remove the backing tape and apply the electrode to the skin. **For safety reasons, make sure to snap the sticky electrode onto its cable before applying the sticky electrode to your skin.**

### Connect the electrodes to your body

The standard placement of leads for a 3-lead ECG is shown below:

![3 Lead ECG Setup](../../assets/TutorialImages/3-lead-ecg-placement.jpg)

<br />
| Diagram | Body      |
| ------- | --------- |
| LA      | Left Arm  |
| RA      | Right Arm |
| LL      | Left Leg  |
<br />

1.  Connect the BIAS (if using the Ganglion then the D_G) electrode to the LL position as shown in the diagram. The LL electrode needs to stick to a bony part of your body so the sternum can also be used as an LL position.
2.  Connect top and bottom N1P pin on the Cyton (if using Ganglion, connect +1 and -1 pins) to the LA and RA position as shown in the diagram.

By doing this, we are instructing the data to measure the electric potential difference across your chest, which will in turn display your heart signals.

### Streaming ECG Data with the OpenBCI GUI

Once you have the GUI open, use the Time Series widget to turn off any channels that are not connected to electrodes by toggling their numbers. If you are using the Cyton board, also open the hardware settings and set SRB2 **OFF** for every channel you are streaming data from.

_Note: This is because ordinarily SRB2 is the reference point from which potentials are measured. However, we are now having cardiac locations reference themselves, so we do not want it to look at this pin._

Once all of your settings have been adjusted, press 'Begin Data Stream.'

In the Cyton image above, note how the positive and negative terminals (yellow and green) are connected to the top and bottom N1P pins. When you are running the GUI, raw data from N1P pin will be displayed on Channel 1 within the Time Series Widget. If you are using the Ganglion, Channel 1 will show raw data from Pin 1 on the Ganglion.

## 5-Lead ECG with Cyton Board

This step by step 5-Lead ECG guide will show you how to get 3 channels of live ECG data.
It builds on the above guide to 3-Lead ECG and adds only a few additional steps, so be sure to review the above sections in their entirety before getting started on the 5-Lead ECG.

## Materials Needed

1.  OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542)
2.  [Gel snap electrodes](https://shop.openbci.com/products/kendall-emg-ecg-foam-solid-gel-electrodes-30-pack)
3.  [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) — 4 individual cables
4.  [OpenBCI GUI](../../Software/OpenBCISoftware/01-OpenBCI_GUI.md)

### Connect the Electrodes to the OpenBCI Board and to your Body

The standard placement of leads for a 5-lead ECG is shown below:

![5_Lead_ECG](../../assets/TutorialImages/5-lead-electrode-ECG.png)

<br />

| Diagram | Body      |
| ------- | --------- |
| LA      | Left Arm  |
| RA      | Right Arm |
| LL      | Left Leg  |
| RL      | Right Leg |

<br /><br />
For a 5-Lead ECG with the Cyton board, you will need 4 Sticky Electrodes with one Snap Electrode Cable each. You'll also need to make 3 Y-cables. These cables will have 2 female header connectors spliced to 1 male header connector. The wire length can be short just a couple inches. These ribbon packages can be separated and cut, then spliced and wrapped with tape or shrink tube. An example of the jumper wires to use can be found [here](https://www.adafruit.com/product/1954).

Follow the diagram below to connect the first 3 Sticky Electrodes. On the diagram, the ‘P’ means the top row of Cyton pins, and the ‘N’ the bottom row of pins. The lines on the diagram indicate the Y-cables that each bridge two pins. Once the Y-cables have been connected to the board, connect the electrodes to your body following the same diagram. For example, IN1P LA means you connect that Y-cable to the Left Arm location shown on chest diagram above. The V electrode is generally not used.

![5_Leads](../../assets/TutorialImages/5_lead_ECG_Cyton.png)

The last electrode cable connects the bottom BIAS pin on the Cyton to RL.

<br /><br />

![ECG_Cyton_No_V](../../assets/TutorialImages/ECG_Cyton_No_V.jpg)

**Connections for 5-lead ECG, shown above**

### Streaming and Visualizing ECG Data with the GUI

Once you have the GUI open, turn off all channels that are not connected to electrodes by toggling the numbered channels in the Time Series widget. Then, go to hardware settings (located above the Time Series widget) and turn SRB2 **OFF** for Channels 1, 2 and 3. Turn OFF every other channel.

Once your settings have been adjusted, press 'Start Data Stream'. You should see graphs similar to the ones below.

![ECG_GUI_No_V](../../assets/TutorialImages/ECG_GUI_No_V.jpg)

**Data streaming, shown above**

## Improving Signal Quality

For help minimizing noise and improving ECG signal quality, check out [this document](../../Troubleshooting/01-MinimizingNoise.md) and head to the OpenBCI Technical [Forum](https://openbci.com/forum) if you have questions.

Concerned about the signal quality? Read [this paper](https://www.sciencedirect.com/science/article/pii/S2405844021012512)
to learn more about the reliability of OpenBCI ECG quality.
