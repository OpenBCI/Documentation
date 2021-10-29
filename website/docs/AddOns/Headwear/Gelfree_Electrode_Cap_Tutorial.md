---
id: GelfreeElectrodeCap
title: Gelfree Electrode Cap Guide
---

This is a guide to setting up and cleaning your OpenBCI Gelfree Electrode Cap. Please consult the [Gelfree Electrode Cap](https://shop.openbci.com/collections/frontpage/products/gelfree-bci-cap-kit?variant=40785117249694)
Product Page and review this guide in its entirety before starting.

You can pair the the Gelfree Electrode Cap with the OpenBCI [CytonDaisy 16-channel Biosensing Board](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel)
or a standard bioamplifier of your choice. **No gel is required to use this cap!**

:::info
The [touchproof adapter cable](https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter?variant=31007211715) is necessary to pair this cap with the OpenBCI [CytonDaisy](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel).
:::

The 10-20 placement of these electrodes is as shown in the image below:

![image](../../assets/HeadwareImages/Gelfree_Electrode_Cap_10-20_locations.png)


## Electrode Cap With CytonDaisy Tutorial

When combined with the OpenBCI [CytonDaisy 16-channel Biosensing Board](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel),
the Gelfree Electrode Cap is a semi-dry, low-cost, research-grade tool for obtaining 16 channels of EEG data.

### What You'll Need

1.  [CytonDaisy 16-channel Biosensing Board,](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel)
2.  [Header Pin to Touchproof Adapter](https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter) (HPTA) x2
3.  [Gelfree Electrode Cap Kit](https://shop.openbci.com/collections/frontpage/products/gelfree-bci-cap-kit)
4.  Salt

### Connecting the Electrode Cap to the CytonDaisy

1. Use the [y-splitter cable](../../../GettingStarted/Boards/DaisyGS/#2-y-splitter-cable) that came with your CytonDaisy to "gang" together the bottom SRB pins on the Cyton and the Daisy module, as shown below. This will be the reference electrode for the other electrodes on the subject's head.

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/HeadwareImages/gelfree_electrode_cap_2.jpg?raw=true" width="50%" />

2. Connect a HPTA cable to the single end of the y-splitter cable, then connect the its blue termination to the gray cable, then to the REF location of the cap, shown below.

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/HeadwareImages/gelfree_electrode_cap_4and5and6.jpg?raw=true" width="100%" /> 

3. Connect bottom pins N1P through N8P on the Cyton to a set of HPTA cables, shown below. These pins will be channels 1-8 on the OpenBCI GUI.

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/HeadwareImages/gelfree_electrode_cap_1.jpg?raw=true" width="50%" />

Connect top pins N1P through N8P on the Daisy module to another set of HPTA cables, shown below. These pins will be channels 9-16.

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/HeadwareImages/gelfree_electrode_cap_3.jpg?raw=true" width="50%" />

4. Connect a HPTA cable to the bottom BIAS pin of the Cyton. The BIAS pin is used for noise cancelling. It is similar to a GROUND pin, which establishes a common ground between the Cyton board and your body, but it has some extra destructive interference noise cancelling techniques built in! Connect the blue termination of this HPTA cable to gray cable, then connect the gray cable to the GND location on the cap, shown below.

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/HeadwareImages/gelfree_electrode_cap_7and8and9.jpg?raw=true" width="100%" />

For WHY these connections are recommended, see the [EEG explanation](../../GettingStarted/Biosensing-Setups/01-EEG-Setup.md)page.

5. After the cables are all connected as described above, make the saline solution by dissolving 1 tea spoon of sodium chloride (~6 g) into about 200 mL tap water with the cup. Soak the Hydro-linkTM sponges in the saline solution for 5-10 min.

6. Insert the Hydro-linkTM into the electrode holder of the electrode lead wire.

7. Place the cap on the subject's head. Make sure the Cz is correctly located halfway on the midline of the head. 

### Troubleshooting

#### Seeing a lot of noise? Check your electrode connections -

These steps can be done in any order:

1. The bottom BIAS pin of the Cyton **board** goes to the GND location of the **cap**. **You would use the HPTA cable to connect them.**

2. The bottom SRB pins on the Cyton and the Daisy **boards** should be "ganged together" using the split end of the y-splitter cable. 
The single end of the y-splitter cable should go to the REF location of the **cap**. **You would use the HPTA cable to connect them.**

3. The rest of the cap electrodes are completely up to you how you want to connect them to the Cyton. For example, if you want data from Fp1 (of the cap) to show up on channel 1 of the OpenBCI GUI, then connect Fp1 cable to the bottom pin N1P of the Cyton. Use the HPTA cable to connect them.

If you want Fp1 data to show up on channel 9 of the OpenBCI GUI, then connect Fp1 to the bottom pin N1P of the CytonDaisy. You can pair any cap electrode (aside from GND and REF) with any pins N1P through N8P on the Cyton and Daisy boards

Channels 1-8 on the GUI correspond to bottom pins N1P through N8P on the Cyton
Channels 9-16 on the GUI correspond to bottoms pins N1P through N8P on the Daisy.

#### Seeing high impedance values?

If you see high impedance in the GUI [Impedance Check](https://docs.openbci.com/Software/OpenBCISoftware/GUIWidgets/#other-settings), check that the Hydro-link sponges are in good contact with the scalp and that there is enough saline solution.

After more than two hours, the saline solution should be replenished. Take the hydro-link sponges out and submerge in saline solution, then re-install in the cap.

### Software

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI-V4-Screenshot.jpg?raw=true" width="50%" />

Head over to the OpenBCI GUI [tutorial](Software/OpenBCISoftware/01-OpenBCI_GUI.md) to set up your free live-streaming software!

### Use Cases for OpenBCI GUI

-   OpenBCI device owners want to visualize their brainwaves!
-   Many of the researchers, hackers and students alike who purchase OpenBCI devices want to use them to acquire data as soon as their device arrives.
-   Users use macOS, Windows and Linux to acquire data
-   Users want to filter incoming data in real time
-   Users want to make their own experiments to test their awesome theories or duplicate state of the art research at home!
-   Users struggle to get prerequisites properly installed to get data on their own from OpenBCI Cyton and Ganglion.
-   Users want to stream data into their own custom applications such as MATLAB.

### What You Can Do with OpenBCI GUI and Software Stack

-   Visualize data from every OpenBCI device: Ganglion, Cyton, Cyton with Daisy, and the WiFi Shield
-   Playback files using GUI
-   Run as a native application on macOS, Windows, and Linux.
-   Apply filters and other data processing tools to quickly clean raw data in real time
-   Use the GUI as a networking system to move data out of GUI into other apps over UDP, OSC, LSL, and Serial.
-   Send data to [MATLAB](../../Software/CompatibleThirdPartySoftware/01-Matlab.md), Neuropype (using LSL), and other [third-party softwares.](../../Software/SoftwareLanding.md)
-   Analyze data with [Python and Brainflow](ForDevelopers/01-SoftwareDevelopment.md#brainflow---python)
-   [Create a widget framework](Software/OpenBCISoftware/02_GUI_Widget_Guide.md#custom-widget) that allows users to create their own experiments.
-   Output data into a saved file for later offline processing.
-   [Customize the layout](Software/OpenBCISoftware/01-OpenBCI_GUI.md#customize-your-layout), change the gain, toggle on/off, check impedance of individual channels of the CytonDaisy board (or any connected OpenBCI board) directly in the GUI!
-   Access [OpenBCI GUI's built-in widgets](https://docs.openbci.com/docs/06Software/01-OpenBCISoftware/GUIWidgets) such as Band Power, Spectrogram, Accelerometer, EEG Head Plot, and MUCH more

    **If you just want to visualize EEG, EMG, ECG data (and do some basic analysis) and save the data to start with, download the standalone [OpenBCI GUI](https://openbci.com/index.php/downloads) and connect it to an OpenBCI Cyton, CytonDaisy, or Ganglion!**


## Electrode Cap Care and Cleaning Guide

A routine schedule for cleaning and disinfecting the Electrode
Cap ensures accurate EEG signals and the reuse of
electrodes between different participants. Furthermore, you will
preserve the excellent characteristics of your electrodes and will
ensure a long product life.

#### Cleaning and Storage

After the measurement is finished, disconnect the electrode connectors from the CytonDaisy board. Remove the electrode holders out of the bases on the cap.
1) Take the Hydro-linkTM sponges out of the holders and wash the Hydro-linkTM with tap water for at least three times, while squeezing out the water in the Hydro-linkTM during washing. Then let the Hydro-linkTM dry in air.
2) Rinse the electrode holders and the Gelfree BCI cap with tap water.
3) Ensure that everything is dry before storing in a dry place away from sunlight

Cleaning frequency-after each use.

#### Disinfection:

Disinfection should be carried out only after the cleaning procedure and when it is necessary. Please consider hygienic measures recommended by your local authorities.
It is recommended to use very low concentration of disinfectant solution to disinfect the Gelfree BCI cap, electrodes and Hydro-linkTM. Please follow the instructions provided by the manufacturer of the selected disinfectant solution. Please only apply a minimum concentration and a minimum of soaking time required. Make sure that the substances to be disinfected is fully covered with a fairly diluted disinfectant. After disinfection, thoroughly rinse the substances with water and let it dry in air.
The recommended disinfectants are as follows: Perfektan TB (Dr. Schumacher GmbH), Envirocide (Metrex), Metricide (Metrex), Cavicide (Metrex), or just diluted household bleach. If you are unable to purchase the products mentioned above brands in your region, a disinfecting product with similar proportions and active ingredients would be recommended. 

## Technical Specifications

| Metric | Values |
| ------------------------------ | --------------------------- |
| AC Impedance | <2.5 kΩ·cm2 at 10 Hz |
| DC offset voltage | <30 mV |
| Potential Drift | <±5 mV/10min |
| Electrode-scalp impedance | < 20 kΩ (at 10 Hz) |


Questions, comments, suggestions? Email [support@openbci.com](mailto:support@openbci.com)
