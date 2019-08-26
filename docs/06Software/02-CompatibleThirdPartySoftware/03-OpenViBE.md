---
id: OpenVibe
title: OpenViBE
---

## Overview

There are two primary methods of connecting from OpenBCI tech to OpenVibe.

1. You can connect the Cyton and Cyton+Daisy using an OpenVibe driver. This method is described below.

2. Connect any OpenBCI Board to the OpenBCI GUI, then use the Networking Widget to stream data using LSL protocol to OpenVibe Acquisition Server. Start streaming from the GUI first. Select LSL in OpenVibe Acquisition Server. You should see an option in Driver Properties to select the data stream from the GUI, its typically auto-detected.

## Setting Up Your Environment

**Windows**: Follow [OBCI on Windows](09Deprecated/08-OpenBCI_on_Windows.md) tutorial to properly connect your OBCI board on Windows. Then, continue this tutorial.

**OS X**: Visit the [Win7 Virtual Box installation tutorial](09Deprecated/10-VirtualBox.md) first, then follow these instructions. Note: you may have difficulty streaming live from your OpenBCI board to OpenViBE within a VM.

**Linux**: [Linux builds](http://openvibe.inria.fr/downloads/) of OpenViBE also work. Some linux users might find this guide useful but keep in mind it is meant primarily for mac + win7.

## Installation

Make sure you have a running Windows 7 Machine (be it either a VM or native).
Download the latest OpenViBE software from their [website](http://openvibe.inria.fr/downloads/).

## Getting Started

Connect your OpenBCI board and make sure it is recognized as a COM port and its latency is set to 1 ms. To troubleshoot, read our [OpenBCI on Windows tutorial.](09Deprecated/08-OpenBCI_on_Windows.md)

Start the OpenViBE Signal Acquisition Server (SAS). **C: > Program Files > openvibe > openvibe-acquisition-server** (normally shows up when searching “openvibe” in start menu).

![COM Selection](assets/SoftwareImages/Compatible Third Party Software Images/com-select.jpg)

1. In the SAS select the OpenBCI (unstable means not throughly tested) option from the drop down list.
1. Then open **Driver Properties**. In the Device option, select the COM port number your OBCI board was connected to.
1. In the SAS Preference menu, change the drift tolerance from 2ms (default) to 10ms.
1. Press Connect. If error, troubleshoot:
	- Look at the terminal window that the SAS opens up. It has a verbose report on the SAS's condition.
	- Often, pressing the restart button on the OBCI board, or Disconnecting/Conneting the Dongle will fix any connection issues.
	- If the error reports that it cannot open the selected port, make sure the COM port selected in the driver options is the same as your board.

## Streaming from OpenBCI to OpenViBE

Open the OpenViBE designer GUI. A blank page should open like below:

![image](../../assets/SoftwareImages/CompatibleThirdPartySoftwareImages/OpenViBE_designer.JPG)

In the toolbar on the right, expand the "Acquisition and IO" folder and select "Acquisition client." This object represents the input stream from the OpenBCI board. Click and drag the Acquisition client into the design space.

![image](../../assets/SoftwareImages/CompatibleThirdPartySoftwareImages/OpenViBE_acquision_client.JPG)

From the same toolbar, expand the "Visualization" folder, then the "Basic" folder, and select "Signal display." Click and drag the Signal display box into the design space. Connect the similarly-colored triangles of the two boxes.

![image](../../assets/SoftwareImages/CompatibleThirdPartySoftwareImages/OpenViBE_signal_display.JPG)

You're ready to stream data from your board! Return to the OpenViBE Acquisition Server GUI and select "Play."

Return to the OpenViBE designer GUI. Click the play button from the top toolbar. A signal display window should pop up, displaying data as it streams from your OpenBCI board.

![image](../../assets/SoftwareImages/CompatibleThirdPartySoftwareImages/OpenViBE_signal_live.JPG)

You're now streaming data from your OpenBCI board to OpenViBE! Feel free to explore the other tools OpenViBE has to offer.

**Enjoy OpenBCI in OpenViBE!**

## Documentation and Resources
For more advanced tutorials using OpenBCI and OpenViBE, check out [Jeremy Frey's blog](http://blog.jfrey.info/). He has done both a [P300 Speller](http://blog.jfrey.info/2015/02/04/openbci-p300-coadapt/) and a [Motor Imagery Classifier](http://blog.jfrey.info/2015/03/03/openbci-motor-imagery/).

For an example of a more advanced OpenViBE setup with OpenBCI, open the attached [xml file](https://github.com/OpenBCI/Docs/blob/master/assets/files/Start_OBCI_Cyton.xml) in the OpenViBE designer GUI. This file is a pre-made graph that will display both the EEG channels and the AUX channels. For the V3 board, the AUX channels correspond to accelerometer values in the three cardinal directions.

To learn more about OpenViBE, take a look at their documentation [here.](http://openvibe.inria.fr/documentation-index/)

Build something new with OpenBCI and OpenViBE? Post about it on our [community page!](http://openbci.com/community/)
