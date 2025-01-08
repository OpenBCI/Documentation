---
id: ThinkPulse
title: "ThinkPulse Getting Started Guide"
---

Available exclusively worldwide only on the [OpenBCI® store](https://shop.openbci.com/products/thinkpulse-active-electrode-kit).

## About Conscious Labs

Conscious Labs has been working since 2014 on taking neuroscience out of the lab and into the wild. They bring the technology, the team and the expertise to integrate EEG sensors into head wearables and hearables.

We are very excited to partner with Conscious Labs to offer this affordable, high-quality biosensing kit to our community. The ThinkPulse™ kit offers research-grade dry, active electrode EEG sensors at an unprecedented price point and comfort level.

ThinkPulse™ is a product of Conscious Labs (France). Patents issued and pending. Made in France.

The ThinkPulse™ system is an _add-on_ to the [Ultracortex EEG Headset](https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv) plus [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel)
This kit has been designed and its compatibility tested for the 8 and 16 channel Ultracortex with OpenBCI Cyton/CytonDaisy boards. For more compatibility and customization options as well as general product questions, please contact us [support@openbci.com.](mailto:support@openbci.com.).

<br />
<br />

## ThinkPulse Starter Kit Contents

<br />

![ThinkPulse contents](../../assets/ThirdPartyImages/ThinkPulse_starter_kit_contents.png)

<br />
<br />
<br />

## How to Use the ThinkPulse Starter Kit with the Ultracortex Headset

Below is the step-by-step tutorial by Conscious Labs on how to install the ThinkPulse Starter Kit on the Ultracortex. If you are doing this for the first time, allow yourself 20 minutes to put it together. You may briefly need a soldering iron and soldering wire at Step 3. If you do not have a soldering iron, you can still assemble the ThinkPulse! Keep reading for the solder-free option.

### Step 1: Prep Your Ultracortex Mark IV EEG Headset

[![Ultracortex prep](../../assets/ThirdPartyImages/ThinkPulse_assembly_step1.png)](https://youtu.be/cKDDvFaZy6s)

### Step 2: Install the ThinkPulse™ sensors on the Ultracortex

[![install sensors](../../assets/ThirdPartyImages/ThinkPulse_assembly_step2.png)](https://youtu.be/KNyI0c5DYu8)

### Step 3: Assemble the ThinkPulse™ Power Supply Board

[![assemble power supply](../../assets/ThirdPartyImages/ThinkPulse_assembly_step3.png)](https://youtu.be/SeceMtiUo40)

The assembly video shows how to install the power supply board to a post-2018 Cyton and a pre-2018 Cyton.

Some early ThinkPulse units have a hardware bug. The fix is a straightforward, quick solder job. The first minute of the video explains how to do it.
ThinkPulse kits that shipped post-January 2021 are fixed and do not require soldering.
If you need help or have any questions, email [support@openbci.com](mailto:support@openbci.com)

### Step 4: Connect and organize the cables

[![cable management](../../assets/ThirdPartyImages/ThinkPulse_assembly_step4.png)](https://youtu.be/GtcfUNvZlZ0)

<br />
<br />

### Step 5 (For 16-channel kit) Connect and organize the cables

[![cable management](../../assets/ThirdPartyImages/ThinkPulse_assembly_step5.png)](https://youtu.be/J2ZVDfayahs)

## Troubleshooting the ThinkPulse™ sensors with OpenBCI Cyton Board

The following information applies specifically to Cyton and Cyton+Daisy Boards. If you are seeing `RAILED` in the GUI, try the following tips:

1. Disconnect the BIAS earclip from the Cyton board.
2. Go to the Hardware Settings (button is found above Time Series widget) and turn BIAS and SRB1 to `NO` and `OFF`.
3. Keep SRB2 `ON`.
4. For every channel, set the GAIN to '8' or less.
5. Below, you will find a screenshot of what this should look like in the GUI Hardware Settings. If you are communicating directly with the Cyton, the command correlating to this picture would be `x1040010X`.
6. Pressing the `Save` button at the bottom of the Hardware Settings will allow you to store this configuration as a file.
7. Next time you want to use the Cyton with ThinkPulse Electrodes, open Hardware Settings to `Load` and then `Send` channel settings. If you are using BrainFlow outside of the GUI, simply send these commands after instantiating the Board.

![ThinkPulse and Cyton Channel Setting Example](../../assets/ThirdPartyImages/ThinkPulse_Cyton_HardwareChannelSetting.png)

## How to replace ThinkPulse™ electrode prongs

Removal: Insert a small flat screwdriver where the electrode prongs seat into the electrode body. Gently pull/twist until the prongs loosen.
<br />
Installation: To install replacement prongs, insert into the electrode body and twist until secure.

## Technical Specs and Data Sheet

**[Full Technical Information](https://drive.google.com/file/d/1Ri2UPmPH2SrTjYQ8Mj046ciWLGzRxCSl/view?usp=sharing)**

<br />

| Parameters                     | Specs              |
| ------------------------------ | ------------------ |
| Electrode Height               | 7 mm               |
| External Diameter              | 19 mm              |
| Bio-contact Area Diameter      | 15 mm              |
| Material                       | Conductive polymer |
| Polymer Dielectric Resistivity | 3.6 Ohm.cm         |
| Through Polymer Resistance     | &lt;70 Ohm         |
| Typical Consumption            | 5 mW               |
| Active amplification Gain      | 0 dB               |
| Electrode Noise                | &lt;10nV           |
| Bandwidth                      | >10KHz             |

<br />

## Additional Troubleshooting

When using the ThinkPulse Active Electrodes with Cyton, make sure to set the [correct channel settings](#troubleshooting-the-thinkpulse-sensors-with-openbci-cyton-board). This should resolve most issues. If you still have issues, you can reach out on the [OpenBCI Forum](https://openbci.com/forum) or send us an email at [contact@openbci.com](mailto:contact@openbci.com).

You can also refer to [this resolved troubleshooting thread](https://openbci.com/forum/index.php?p=/discussion/2869/thinkpulse-active-electrodes-q-a-resolved) in the OpenBCI Technical Forum.

## Non-medical Use Disclaimer

The ThinkPulse™ Starter Kit and the ThinkPulse™ Electrode Set are not medical devices and are not intended for medical diagnosis. These products are provided to you "as is." OpenBCI, Inc. provides the above product under the following conditions: This evaluation kit is intended for use for ENGINEERING DEVELOPMENT, DEMONSTRATION, OR EVALUATION PURPOSES ONLY.
