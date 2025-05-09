---
id: DaisyGS
title: Daisy Getting Started Guide
---

This guide will walk you through getting 16-channel input on your Cyton+Daisy Module

## I. SET UP YOUR CYTON BOARD

Refer to the Cyton Tutorial page:
[Cyton Getting Started Guide](../Boards/01-Cyton_Getting_Started_Guide.md).

Follow the guide through the end of Step V. CONNECT YOURSELF TO OPENBCI

## II. WHAT YOU NEED

1.  OpenBCI Daisy Module
2.  Y-Splitter Cable
3.  Electrode cables with female header termination on one end

#### 1. [OpenBCI Daisy Module](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel?variant=38959256526)

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/Daisy%20Front%20Image.jpg" width="60%" />

#### 2. Y-Splitter Cable

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/Daisy%20Y-Splitter%20Image.jpg" width="60%" />

#### 3. Electrode Cables with female header termination on one end

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/Daisy%20Female%20Header%20Termination%20Image.jpg" width="60%" />

## III. ASSEMBLY

### 1) Attaching the Daisy

#### Add the Daisy extension directly onto the Cyton Board

Carefully stack the Daisy module on top of the Cyton Board, as shown below.

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/Cyton%2BDaisy%20Front%20Image.JPG" width="60%" />

### 2) Connect Y-Splitter Cable

<img src="https://raw.githubusercontent.com/OpenBCI/Documentation/master/website/docs/assets/GettingStartedImages/cytonDaisy_ySplitter_on_SRBpins.jpg" width="60%" />

The Y-Splitter connects the bottom `SRB` pin of the Daisy Board to the bottom `SRB` pin of the Cyton Board. The single end of the Y-Splitter connects to a reference point i.e. the earlobe or mastoid bone.

### 3) Connect the bottom `BIAS` pin of the Cyton to a second reference point

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/Cyton_Daisy_BIAS.jpg" width="60%" />

**Usually, the earlobe or mastoid is used as the reference point, because it has no muscle or neurons and therefore low electrical signals.**

### 4) Connect Cyton bottom pins `N1P-N8P` and Daisy bottom pins `N1P-N8P` to leads

<img src="https://raw.githubusercontent.com/openbci-archive/Docs/master/assets/images/MarkIV/Cyton_Daisy_Setup.JPG" width="80%" />

Use the 16 of the color coded cables that came with your Ultracortex MarkIV headset. Alternatively, you can use 16 of our [Gold Cup Electrodes](https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163), [Snap Electrode Cables](https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958), or [Header Pin to Touch Proof Electrode Adapter](https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter?variant=31007211715).

Connect Cyton bottom pins `N1P` through `N8P` to the cables, shown above. Then, connect the remaining 8 cables to Daisy bottom pins `N1P` through `N8P`. the cable colors should be in this order: gray, purple, blue, green, yellow, orange, red, and brown.
For best results, when plugging female header pins onto the OpenBCI board, orient the sides with the 'silver latch bit' facing toward you since that side is a tiny bit wider than 0.1".

Refer to the Ultracortex Mark IV [tutorial](../../AddOns/Headwear/01-Ultracortex-Mark-IV.md) to learn how to connect the male terminations of the color coded cables to the electrodes on the headset.
