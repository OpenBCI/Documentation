---
id: HowProductsGoTogether
title: How OpenBCI products go together?
---
![image](../assets/GettingStartedImages/How_products_go_together.png)

## What products should I get?

If you are new to OpenBCI or you are just curious about our products don’t fret! Watch our tutorial of [How OpenBCI Products Go Together](https://youtu.be/QIWswAOFp8w) to get a crash course on your first set-up! 

<br> If you have any questions after reviewing this guide, email support@openbci.com. We can help you find the right hardware combination!

## The type of OpenBCI equipment you will need for your project mainly depends on the following 5 factors: 
(Click through the drop-down menus below)
<details>
<summary>Data type requirements</summary>
<ul><li>Are you looking to sample <a href="https://docs.openbci.com/GettingStarted/Biosensing-Setups/EEGSetup/">EEG (brain)</a>, <a href="https://docs.openbci.com/GettingStarted/Biosensing-Setups/ECGSetup/">ECG (heart)</a>, <a href="https://docs.openbci.com/GettingStarted/Biosensing-Setups/EMGSetup/">EMG (muscle)</a>, EDA (Electrodermal activity), movement, etc? </li>
</details>

<details>
<summary>Location of sensors needed</summary>
<ul><li>This factor is directly related to the <b>data type</b> you are collecting. For example, you would not purchase a cap/headset if you are looking to gather EMG (muscle) data from the legs. </li>
<li>For a more specific example, if you want sensor locations on the midline (top of the head) to measure brain data (EEG), then a good product option would be an EEG cap or the Ultracortex EEG Headset. </li></ul>
</details>

<details>
<summary>Number of channels needed</summary>
<ul><li>i.e. number of sensor locations. OpenBCI hardware offers up to 16 channels / sensors. 
  <br> These include the Ganglion (4-channels), Cyton (8-channels), Cyton + Daisy (16-channels)</li>
<li>For some research there is a minimum channel count needed. We recommend a minimum of 8 channels for SSVEP, P300, and motor imagery. In the <a href="https://docs.google.com/spreadsheets/d/1WvolD2-QJ5aUJy5o0Dq5wdFQtLMkMtppZT8s_ihYyA4/edit?usp=sharing">OpenBCI research collection</a>, the Cyton 8-channel and CytonDaisy 16-channel boards are most commonly used. For QEEG / ERP / P300 / VEP, the 16-channel gel electrode cap will perform the best.</li>
<li><a href="https://mentalab.com/number-of-eeg-channels/#soler-ref">Why more EEG channels is not always better</a></li>
<li><a href="https://www.mdpi.com/1424-8220/22/23/9156">14-channel EEG shown to be comparable to 32 channels</a></li>
<li><a href="https://openbci.com/forum/index.php?p=/discussion/3104/are-large-numbers-of-channels-superior-to-smaller-numbers-resolved">Why as few as 4 channels is sufficient for neurofeedback</a></li></ul>
</details>

<details>
<summary>Budgetary restrictions</summary>
<ul><li>If budget is a significant consideration, I would recommend the gold cup electrodes or the Ag-AgCl snap electrodes as they both offer excellent signal quality for the lowest price and can be used for EEG, ECG, EMG, EOG, and EGG.</li>
</details>

<details>
<summary>Sampling rate requirements</summary>
<ul><li>Ganglion: 200 hz</li>
<li>Cyton: 250 hz</li>
<li>Cyton + daisy: 125 hz</li></ul>
</details>
<br>

Here is a detailed explanation of what you need to get started:

The first component you would need is one of our 3 Biosensing Boards. You will select a board depending on how many electrodes you want to analyze data from. In general, with additional channels, you have additional spatial resolution that enables more diverse types of research. We offer three different boards, the [Ganglion Board](https://shop.openbci.com/collections/frontpage/products/ganglion-board) (4 channels at a sample rate of 200Hz), the [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542) (8 channels at a sample rate of 250Hz), and the [Cyton + Daisy Boards](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel?variant=38959256526) (16 channels at a sample rate of 125Hz). Each channel lets you plug one electrode into them, so the more channels you have the more electrodes you can play with. If you are purchasing the Ganglion board you will need the [Ganglion Dongle](https://shop.openbci.com/collections/frontpage/products/ganglion-dongle?variant=15473352605768). 

The boards sample rate is limited by the bluetooth bandwidth. 

Now that you have the board, the second thing you need to get started is a set of electrodes (or a headset, we’ll talk about it after). Our Boards have male header connectors, so you would need to get electrodes that are compatible. If you are interested in mainly doing EMG or ECG, we recommend you use our [EMG/ECG Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958) with [EMG/ECG Foam Solid Gel Electrodes](https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395) (30/pack), these electrodes are a ready to go solution and plug in directly into our Biosensing boards. If you want to be able to do EEG as well as EMG and ECG, we recommend you get our [Gold Cup Electrodes](https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163) with [Ten 20 Paste](https://shop.openbci.com/collections/frontpage/products/ten20-conductive-paste-2oz-jars?variant=31373533198). You can affix these electrodes (almost) everywhere with some medical tape, which allows you to measure EEG, EMG, and ECG. If you already have your own electrodes, or have an electrode cap with touch proof connectors, you can still use them with our Biosensing Boards, by purchasing our [Header Pin to Touch Proof Electrode Adapter](https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter?variant=31007211715).

Another way to go is to purchase the [Mark IV headset](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv). At its core the Mark IV is a frame with dry electrodes, that allows you to affix the dry electrodes to the scalp without having to use any paste. If you are mainly interested in EEG and do not want to have to go through the hassle of using EEG Paste on your hair, this is the way to go. You can purchase the Mark IV with either 8 electrodes or 16 electrodes (you don’t need to purchase extra electrodes). The Mark IV comes in 3 configurations, Print it Yourself, Unassembled, and Pro-Assembled. The Print it Yourself version is great if you have a 3D printer and you are able to print some of the parts yourself. The Print it Yourself version includes all of the electrodes, cables, and all of the other parts that aren’t 3D printable. The Unassembled version comes with all the necessary materials to build the headset, sort of like a puzzle but easier. You can check the [assembly guide](AddOns/Headwear/01-Ultracortex-Mark-IV.md) for instructions. If you don’t want to bother with assembly or 3D printing parts, you can buy an already assembled headset, our Pro-Assembled Mark IV. Note that neither headset comes with a Biosensing board.

We recommend that if you are getting the 8 Channel Mark IV you pair it with the Cyton board, and if you are getting the 16 Channel Mark IV you pair it with the Cyton + Daisy Boards. Nevertheless you can use all of our boards with the Mark IV.

In addition to OpenBCI products, we also sell compatible products like the [Myoware Muscle sensor](https://shop.openbci.com/collections/frontpage/products/myoware-muscle-sensor?variant=29472011267) and the [Pulse Sensor](https://shop.openbci.com/collections/frontpage/products/pulse-sensor?variant=22543672899). Both can be connected to the Cyton and Ganglion Boards to add more capabilities, they are also both compatible with the OpenBCI GUI.

## What about Software?

You can use both the Cyton and the Ganglion with the OpenBCI GUI to get started with reading your brainwaves. Here is the [tutorial](Software/OpenBCISoftware/01-OpenBCI_GUI.md) on installing the OpenBCI GUI.

Regarding third party software, the Cyton board is compatible with:

-   [OpenViBE](http://openvibe.inria.fr/drivers-openbci/)
-   [neuromore studio](https://doc.neuromore.com/?cat=0&page=2) (Bio-data acquisition, processing and visualization software)
-   [BrainBay](http://www.shifz.org/brainbay/) (Open-source neurofeedback application, OpenBCI tutorial [here](https://sites.google.com/site/biofeedbackpages/brainbay-openbci) and another [here](http://www.autodidacts.io/use-openbci-with-brainbay-on-ubuntu-linux-and-wine/))
-   [BioEra](http://www.proatech.com/be/manual.html#_OpenBCI) (Visual designer useful for analyzing signals in real time)

The Ganglion board is currently compatible with:

-   [BioEra](http://www.proatech.com/be/manual.html#_Toc477624700)
-   [BrainBay](http://www.shifz.org/brainbay/) (Open-source neurofeedback application)

Currently new drivers are being developed to add OpenBCI compatibility to Bioexplorer (tbd), BCI2000 (tbd), etc.

In addition, if you are really comfortable with programming you can use [MatLab](Software/CompatibleThirdPartySoftware/01-Matlab.md) or Python tools to analyze the raw data of your OpenBCI boards. For more info, head over to the [For Developers Section](ForDevelopers/00-ForDevelopersLanding.md).
