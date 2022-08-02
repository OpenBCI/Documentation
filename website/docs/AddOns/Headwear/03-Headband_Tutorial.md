---
id: HeadBand
title: OpenBCI EEG Headband Kit Guide
---

##### Now [available](https://shop.openbci.com/collections/frontpage/products/openbci-eeg-headband-kit?variant=8120393760782) in our shop!

When combined with our [Ganglion](https://shop.openbci.com/collections/frontpage/products/ganglion-board), [Cyton](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542), or [CytonDaisy boards](https://shop.openbci.com/products/cyton-daisy-biosensing-boards-16-channel), the OpenBCI EEG Headband Kit is a low-cost, easy-to-use device for obtaining research-grade EEG data.

This tutorial will guide you through setting up your headband kit! Please read this tutorial in its entirety before setting up the system.

#### Each kit includes:

<img src="https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/headband-images/headband_kit_full.png?raw=true" width="30%" />

1.  Pair of Ear-clip electrodes
2.  Dry comb snap silver-silver chloride coated EEG electrodes
3.  Dry flat snap silver-silver chloride coated EEG electrodes
4.  Pack of snap electrode cables 
5.  One adjustable headband strap

The comb and flat snap electrodes snap in and out of the cables easily. No tools needed. 

All electrode wires end in a female header termination compatible with OpenBCI biosensing boards (Ganglion, Cyton, and CytonDaisy).

#### 10-20 Internationally Accepted EEG Node Placement

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/10-20%20Placement.jpg?raw=true" width="30%" />

The flat snap electrodes facilitate multiple frontal cortex measurements (F7, AF7, Fp1, Fpz, Fp2, AF8, F8). The comb snap electrodes will allow measurement at the FT7/FT8, T7/T8, TP7/TP8, P7/P8, PO7/PO8, O1/O2, and Oz nodes, depending where on the adjustable strap you place the electrodes. This kit is intended to provide up to eight channels of EEG data when paired with the Cyton 8-channel board. If you want 16-channels, purchase two headband kits and pair them with the CytonDaisy 16-channel board.

## Headband-Ganglion Tutorial

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Headband_Ganglion_Front.JPG?raw=true" width="30%" />

The Ganglion board supports four channels of EEG/EMG/EEG input and can stream data over [bluetooth](Ganglion/08-Ganglion_Data_Format.md) or [wifi](../../GettingStarted/Boards/03-Wifi_Getting_Started_Guide.md). In this tutorial we will show you how to obtain two frontal lobe measurements and two temporal lobe measurements using the four channels of the Ganglion and stream the data over bluetooth!

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Ganglion.JPG?raw=true" width="30%" />

#### Battery

All OpenBCI boards ship with a free 2-pin standard JST compatible 4-AA battery holder. For the best user experience, we recommend purchasing the LiPo battery and charger linked below.

1.  [Lithium ion battery](https://www.adafruit.com/product/1578) and
2.  [USB charger](https://www.adafruit.com/product/1304)

We recommend this battery for its long battery life, compact size, and compatibility with all OpenBCI boards.

#### Hardware

Your Ganglion may have shipped with orange protective cellophane over switches sw1 - sw4. After you've peeled the protective layer off, and flipped the switches to **down** position, they will look like the image below. Please do not skip this step.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Ganglion_Switch.JPG?raw=true" width="30%" />

See the [Ganglion Hardware page](Ganglion/02-Ganglion.md#inverting-input-select-switches) for a detailed explanation of why we flip the four channel switches to **down**.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Ganglion_Headband_Pins.JPG?raw=true" width="30%" />

**Steps**

1.  Connect one earclip electrode to the top D_G (driven ground) pin, as shown above.
2.  Connect the second earclip electrode to the top REF pin, as shown above.
3.  Connect the female terminations of the two flat snap electrodes and two comb electrodes to top pins 1-4, shown above. (The order of pin connections is up to user preference.)
4.  Place the velcro headband between the snap end of a cable and a snap electrode, making sure to align with the hole in the headband, then press the electrode into place.

| GUI Channel | Electrode | Ganglion Board Pin | Electrode Type |
| ----------- | --------- | ------------------ | -------------- |
| 1           | Fp1       | Top +1 pin         | Flat snap      |
| 2           | Fp2       | Top +2 pin         | Flat snap      |
| 3           | TP7       | Top +3 pin         | Comb Snap      |
| 4           | TP8       | Top +4 pin         | Comb Snap      |
| -           | A1        | Top D_G pin        | Ear clip       |
| -           | A2        | Top REF pin        | Ear clip       |

**Assembling the Headband**

The placement of nodes on the headband is best represented in the following image:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/EEG%20Nodes_Updated_Ganglion.png?raw=true" width="30%" />

In this diagram, the red circles represent areas where flat electrodes can be placed, and the blue circles represent areas where comb electrodes can be placed. This placement is ultimately up to you, and the areas that you wish to record. However, a general suggestion for standard electrode placement is outlined in yellow.

To attach the electrodes to the headband:

1.  Place the cable head on the rough side of the velcro
2.  Place the electrode on the soft side of the velcro
3.  Snap the two pieces together, with the velcro in between, to secure them.

#### OpenBCI Software

Now that you've finished with the hardware set-up, the next step is to set up the GUI! Follow the GUI [tutorial](GettingStarted/Boards/02-Ganglion_Getting_Started_Guide.md#download-install-run-the-openbci-gui) to prepare your computer to communicate with your Ganglion.

Once you've downloaded the GUI zip file per tutorial instructions, fire up the GUI [as shown in this YouTube video!](http://www.youtube.com/watch?v=NAM6eOA4a8Y)

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/headband_gui_ganglion.jpeg?raw=true" width="30%" />

Notice the sharp peak-trough-peak wave behavior in the upper left time series window of the GUI. The first peak corresponds with the initiation of an eye blink, the trough immediately after shows a dip in alpha brain waves that syncs to the eye's closing for a fraction of a second! The peak immediately **after** the trough corresponds to the brain signals to the eyelid to reopen, thus concluding the blink cycle.

The band power window in the lower right of the GUI shows the relative strengths of the user's alpha, beta, gamma, delta, and theta brain waves. The GUI and Ganglion work together to separate and categorize brain waves based on characteristics like frequency and amplitude.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/GUI_Ganglion.png?raw=true" width="30%" />

In the picture above, you can see the Ganglion Signal window in the lower left of the GUI. This widget helps users establish a quality connection for each electrode. For most bioelectrical measurements, you want the skin-electrode contact surface impedance to be low. Two of the four channels show lower impedance (these happen to be the flat snap electrodes that are touching the skin over the frontal cortex). This connection must be good, hence the green light to the left of the impedance value. If the impedance light in the GUI is red, you can improve the connection by making sure the electrodes are secured against the skin and making good contact. You may find it helpful to add a little [electrode paste](https://shop.openbci.com/collections/frontpage/products/ten20-conductive-paste-2oz-jars?variant=31373533198) to boost conductivity of the Ag-AgCl coating on the electrodes.

Another widget shown in the picture above is the Focus widget. When the alpha waves are (relatively) high and beta waves are low, the GUI translates this to a focused state. **Download the latest [GUI 5.x.x](https://github.com/OpenBCI/OpenBCI_GUI/releases) with updated Focus Widget.**

## Headband-Cyton Tutorial

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Headband_Cyton_Front.JPG?raw=true" width="30%" />

The Cyton board supports eight channels of EEG/EMG/EEG input and can stream data over [bluetooth](Cyton/03-Cyton_Data_Format.md) or [wifi](../../GettingStarted/Boards/03-Wifi_Getting_Started_Guide.md). In this tutorial we will show you how to obtain three frontal lobe measurements and five temporal lobe measurements and stream the data over bluetooth!

#### Battery

All OpenBCI boards ship with a free 2-pin standard JST compatible 4-AA battery holder. For the best user experience, we recommend purchasing the LiPo battery and charger linked below.

1.  [Lithium ion battery](https://www.adafruit.com/product/1578) and
2.  [USB charger](https://www.adafruit.com/product/1304)

#### Hardware

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/Cyton_Headband_Pins.JPG?raw=true" width="30%" />

As shown above:

1.  Connect one earclip electrode to the bottom BIAS pin
2.  Connect the second earclip electrode to the bottom SRB pin
3.  Connect the female terminations of the three flat snap electrodes to bottom pins 1-3 (labeled N1P, N2P, and N3P). (The order of pin connections is up to user preference.)
4.  Connect the female terminations of up to five comb electrodes to bottom pins 4-8 (labeled N4P through N8P). (The order of pin connections is up to user preference.)
5.  Place the velcro headband between the snap end of a cable and a snap electrode, making sure to align with the hole in the headband, then press the electrode into place.

| GUI Channel | Electrode | Cyton Board Pin | Electrode Type |
| ----------- | --------- | --------------- | -------------- |
| 1           | Fp1       | Bottom N1P pin  | Flat snap      |
| 2           | Fp2       | Bottom N2P pin  | Flat snap      |
| 3           | Fpz       | Bottom N3P pin  | Flat snap      |
| 4           | TP7       | Bottom N4P pin  | Comb Snap      |
| 5           | TP8       | Bottom N5P pin  | Comb Snap      |
| 6           | P7        | Bottom N6P pin  | Comb Snap      |
| 7           | P8        | Bottom N7P pin  | Comb Snap      |
| 8           | Oz        | Bottom N8P pin  | Comb Snap      |
| -           | A1        | Bottom SRB pin  | Ear clip       |
| -           | A2        | Bottom BIAS pin | Ear clip       |

**Assembling the Headband**

The placement of nodes on the headband is best represented in the following image:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/EEG%20Nodes_Updated_Cyton.png?raw=true" width="30%" />

In this diagram, the red circles represent areas where flat electrodes can be placed, and the blue circles represent areas where comb electrodes can be placed. This placement is ultimately up to you, and the areas that you wish to record. However, a general suggestion for standard electrode placement is outlined in yellow.

To attach the electrodes to the headband:

1.  Place the cable head on the rough side of the velcro
2.  Place the electrode on the soft side of the velcro
3.  Snap the two pieces together, with the velcro in between, to secure them.

#### OpenBCI Software

Now that you've finished with the hardware set-up, the next step is to set up the GUI! Follow the GUI [tutorial](Software/OpenBCISoftware/01-OpenBCI_GUI.md) to prepare your computer to communicate with your Cyton.

Once you've installed the GUI by following the tutorial, fire it up [as shown in this YouTube video!](http://www.youtube.com/watch?v=XktF8OhHH4A)

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/headband_gui_cyton.jpeg?raw=true" width="30%" />

Play around with the vertical scale, filter, frequency range to see the effect on the raw data. The following screenshot shows an example of what your live-streamed brain data might look like.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/headband-images/GUI_Cyton_B.png?raw=true" width="50%" />

For more details on the various GUI functions, scroll up to the OpenBCI Software section of the Headband-Ganglion Tutorial above.

For cool project ideas, head over to the [**Example Projects**](https://docs.openbci.com/Examples/ExamplesLanding) Directory!

**Use Cases for OpenBCI GUI**

-   OpenBCI device owners want to visualize their brainwaves!
-   Many of the researchers, hackers and students alike who purchase OpenBCI devices want to use them to acquire data as soon as their device arrives.
-   Users use macOS, Windows and Linux to acquire data
-   Users want to filter incoming data in real time
-   Users want to make their own experiments to test their awesome theories or duplicate state of the art research at home!
-   Users struggle to get prerequisites properly installed to get data on their own from OpenBCI Cyton and Ganglion.
-   Users want to stream data into their own custom applications such as MATLAB.

**What You Can Do with OpenBCI GUI and Software Stack**

-   Visualize data from every OpenBCI device: Ganglion, Cyton, Cyton with Daisy, and the WiFi Shield
-   Playback files using GUI
-   Run as a native application on macOS, Windows, and Linux.
-   Apply filters and other data processing tools to quickly clean raw data in real time
-   Use the GUI as a networking system to move data out of GUI into other apps over UDP, OSC, LSL, and Serial.
-   Send data to [MATLAB](Software/CompatibleThirdPartySoftware/01-Matlab.md), Neuropype (using LSL), and other [third-party softwares.](Software/SoftwareLanding.md)
-   Analyze data with [Python and Brainflow](ForDevelopers/01-SoftwareDevelopment.md#brainflow---python)
-   [Create a widget framework](Software/OpenBCISoftware/02_GUI_Widget_Guide.md#custom-widget) that allows users to create their own experiments.
-   Output data into a saved file for later offline processing.
-   [Customize the layout](Software/OpenBCISoftware/01-OpenBCI_GUI.md#customize-your-layout), change the gain, toggle on/off, check impedance of individual channels of the CytonDaisy board (or any connected OpenBCI board) directly in the GUI!
-   Access built-in widgets such as Focus Widget, Band Power, Accelerometer, EEG Head Plot, and MUCH more

As always, don't hesitate to email us at [support@openbci.com](mailto:support@openbci.com) for assistance!

## Headband Tips and Signal Troubleshooting

-   Moisten	a	Q-Tip	in	rubbing	alcohol,	and	scrub	the	surface	of	the	head	directly	underneath	the	contact	point	for	each	electrode.	This	will	remove	oil/debris	from	the	skin,	resulting	in	a	better	signal.		Then	place	the	headband	on	the	head,	with	the	center	electrode in	the	center	of	the	forehead.	
-   *Optional* - The flat and snap electrodes can be used with [electrode gel](https://shop.openbci.com/collections/frontpage/products/electrodegel). Inject electrode gel into the contact area using any standard small syringe. This will improve signal quality by lowering the skin-electrode impedance.
-   We recommend using a thin, flat tool to remove the flat snap electrodes. Un-snap it with the help of a thin screwdriver.
