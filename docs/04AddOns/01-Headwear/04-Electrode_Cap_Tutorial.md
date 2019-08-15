---
id: ElectrodeCap
title: Electrode Cap Getting Started Guide
---


This guide will walk you through setting up your OpenBCI Electrode Cap. Please consult the [Electrode Cap](https://shop.openbci.com/products/openbci-eeg-electrocap)
Product Page and review this guide in its entirety before starting.
The Electrode Cap allows up to 21 channels of EEG data to be obtained using wet electrodes.
You can pair the the Electrode Cap with the OpenBCI [CytonDaisy 16-channel Biosensing Board,](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel)
or a bioamplifier of your choice.

The placement of these electrodes is as shown in the image below:
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/electrode%20cap%20nodes_1.png?raw=true" width="50%">

These electrodes map to labels on the electrodes. Please note that the cap uses older labelling, and that *T3, T4, T5, and T6* were updated to be *T7, T8, P7, and P8*, respectively. These placements are interchangeable, and while the labels on the cap use older naming, they correspond to nodes on the diagram.

The Electrode Cap comes in two variants:

* 21-channel electrode cap with Ag/AgCl coated electrodes
* Premium 21-channel electrode cap with patented, sintered Ag/AgCl electrodes

The set up is the same between the two cap variants. You can follow this tutorial for either one.
## Electrode Cap With CytonDaisy Tutorial

When combined with the OpenBCI [CytonDaisy 16-channel Biosensing Board,](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel),
the Electrode Cap is a low-cost, research-grade tool for obtaining 16 channels of EEG data.

### What You'll Need
1. [CytonDaisy 16-channel Biosensing Board,](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel)
2. [Header Pin to Touchproof Adapter](https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter) (HPTA) x2
3. [Electrode Gel](https://shop.openbci.com/collections/frontpage/products/electrodegel)
4. [Electrode Cap](https://shop.openbci.com/products/openbci-eeg-electrocap)

### Connecting the Electrode Cap to the CytonDaisy

Use the y-splitter cable that came with your CytonDaisy to "gang" together the bottom SRB pins on the Cyton and the Daisy module, as shown below. This will be the reference electrode for the other electrodes on the subject's head.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/Cyton%2BDaisy%2BY-Splitter.JPG?raw=true" width="50%">

Connect a HPTA cable to the single end of the y-splitter cable, then connect the its blue termination to the REF electrode of the cap, shown below.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cap_ref_pin.png?raw=true" width="50%">


Connect bottom pins N1P through N8P on the Cyton to a set of HPTA cables, shown below. These pins will be channels 1-8 on the OpenBCI GUI.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cap_cyton_pins.png?raw=true" width="50%">

Connect bottom pins N1P through N8P on the Daisy module to another set of HPTA cables, shown below. These pins will be channels 9-16.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cap_cytondaisy_pins.png?raw=true" width="50%">

Connect a leftover HPTA cable to the bottom BIAS pin of the Cyton. The BIAS pin is used for noise cancelling. It is similar to a GROUND pin, which establishes a common ground between the Cyton board and your body, but it has some extra destructive interference noise cancelling techniques built in! Connect the blue termination of this HPTA cable to the GND cap electrode, shown below.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/cap_GND_pin.png?raw=true" width="50%">

For WHY these connections are recommended, see the [EEG explanation](../../01GettingStarted/02-Biosensing-Setups/01-EEG-Setup.md)page.

After the cables are all connected as shown above, place the cap on the subject's head and inject a small amount of electrode gel using the included syringe. After each data recording session, be sure to clean the gel off the cap!

### Software


<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI-V4-Screenshot.jpg?raw=true" width="50%">

Head over to the OpenBCI GUI [tutorial](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md) to set up your free live-streaming software!

### Use Cases for OpenBCI GUI
* OpenBCI device owners want to visualize their brainwaves!
* Many of the researchers, hackers and students alike who purchase OpenBCI devices want to use them to acquire data as soon as their device arrives.
* Users use macOS, Windows and Linux to acquire data
* Users want to filter incoming data in real time
* Users want to make their own experiments to test their awesome theories or duplicate state of the art research at home!
* Users struggle to get prerequisites properly installed to get data on their own from OpenBCI Cyton and Ganglion.
* Users want to stream data into their own custom applications such as MATLAB.

### What You Can Do with OpenBCI GUI and Software Stack
* Visualize data from every OpenBCI device: Ganglion, Cyton, Cyton with Daisy, and the WiFi Shield
* Playback files using GUI
* Run as a native application on macOS, Windows, and Linux.
* Apply filters and other data processing tools to quickly clean raw data in real time
* Use the GUI as a networking system to move data out of GUI into other apps over UDP, OSC, [LSL](https://github.com/OpenBCI/OpenBCI_LSL), and Serial.
* Send data to [MATLAB](06Software/02-CompatibleThirdPartySoftware/01-Matlab), Neuropype (using LSL), and other [third-party softwares.](06Software/00-SoftwareLanding.md#compatible-third-party-software)
* Analyze data with Python. Links [HERE](https://github.com/OpenBCI/OpenBCI_Python) and [HERE.](https://github.com/OpenBCI/pyOpenBCI)
* [Create a widget framework](06Software/01-OpenBCISoftware/02_GUI_Widget_Guide.md#custom-widget) that allows users to create their own experiments.
* Output data into a saved file for later offline processing.
* [Customize the layout](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#customize-your-layout), change the gain, toggle on/off, check impedance of individual channels of the CytonDaisy board (or any connected OpenBCI board) directly in the GUI!
* Access built-in widgets such as Focus Widget, Band Power, Accelerometer, EEG Head Plot, and MUCH more

 **If you just want to visualize EEG, EMG, ECG data (and do some basic analysis) and save the data to start with, download the standalone OpenBCI [GUI](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md) and connect it to an OpenBCI Cyton, CytonDaisy, or Ganglion!**


## Electrode Cap With Third-Party Bioamplifier Tutorial
 The Electrode Cap comes with industry-standard touchproof terminations that can be plugged directly into most bioamplifers. The 10-20 locations are marked on the electrodes on the cap.

### What You'll Need

1. [Electrode Gel](https://shop.openbci.com/collections/frontpage/products/electrodegel)
2. [Electrode Cap](https://shop.openbci.com/products/openbci-eeg-electrocap)
3. Your own bioamplifier

### The set-up
1. Place the Electrode Cap on the subject's head and apply electrode gel with the included syringe.
2. Connect the Electrode Cap to your bioamplifier using the marked guides on the cap. The electrodes on the cap are labeled "GND", "REF", "C3", etc.
3. Follow the manufacturer's instructions for your bioamplifier

If you're using a third-party bioamplifier, you'll need the software that is compatible with that particular bioamplifier. The OpenBCI GUI is intended to be used with OpenBCI biosensing boards (Cyton, CytonDaisy, and Ganglion), not third-party bioamplifiers such as g.tec devices.

Find it all overwhelming? Don't know where to start? Questions, comments, suggestions? Email support@openbci.com
