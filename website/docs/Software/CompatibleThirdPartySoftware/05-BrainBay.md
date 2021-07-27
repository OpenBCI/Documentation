---
id: BrainBay
title: BrainBay
---
From their OpenBCI tutorials page: BrainBay is an open-source visual programming language (VPL) for rapid prototyping of EEG digital signal processing steps (or data flows.)

They recently added an OpenBCI driver to their software, making it easy to use BrainBay with OpenBCI products!

## Setting Up Your Environment

**Windows:** BrainBay only works with the Windows operating system.

**MacOS and Linux:** If you have Mac OS or Linux, you can use BrainBay through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial [here!](Software/CompatibleThirdPartySoftware/07-VirtualBox.md)

## Installation

Click on the download link for the lastest version of BrainBay here: (http:). If you're using a virtual machine, be sure to download and set up BrainBay from within the VM environment.

Click **Setup_BrainBay_v2.1.exe**, or the equivalent .exe for the latest version, and follow the prompts to run the program. When you're finished, a BrainBay icon should appear on your desktop.

## Getting Started

Double-clicking the BrainBay icon will open a demo screen. To learn more about BrainBay's capabilities, click on one of the demo options.



To begin using BrainBay yourself, click on Design -&gt; New from the toolbar at the top of the screen.



You're now ready to use BrainBay for EEG streaming and analysis!

## Importing data from OpenBCI to BrainBay

BrainBay does have an "import data from file" option, but it is only compatible with archive (.arc) files. The OpenBCI GUI saves data as comma-delineated .txt files. So, unless you have another application that saves data from your OpenBCI board as .arc files, you need to stream data live to use BrainBay.

## Live Stream from OpenBCI to BrainBay

To stream data live from your OpenBCI board within a BrainBay design, select Insert Element -&gt; Source -&gt; Biosignal/EEG Amplifier and one of the OpenBCI devices. I'm using a Cyton board (without the Daisy extension), so I selected "OpenBCI 8 Channels".



After selecting your device, an EEG window will appear. Select your device's COM port. If you're using VirtualBox, our [VirtualBox tutorial](Software/CompatibleThirdPartySoftware/07-VirtualBox.md) has a section on finding the COM port of a connected hardware device.



Click "Connect/Disconnect". A checkmark should appear in the "connected:" box.



Exit out of the device configuration window. A icon corresponding to your OpenBCI board should have appeared in your design window, like below. Re-open the configuration window at any time by right-clicking on the icon.



You're now streaming data from your board! In the next section, we'll show a simple example of how to use and display your OpenBCI data using BrainBay tools.

## Quick Project: Using the Oscilloscope Tool

BrainBay has a wide variety of useful tools for streaming EEG data. To get familiar with BrainBay's interface, and to double-check our board is streaming data, we'll show how to use the oscilloscope tool. An oscilloscope is a tool that displays changes in signal voltage vs. time (just like the main display of the OpenBCI GUI).

Select Insert Element -&gt; Target -&gt; Oscilloscope from the toolbar.



A icon representing the oscilloscope will appear in the "Design" window. Drag it off the icon representing your OpenBCI board if necessary.

A second window will pop up behind your design window. This window will display the oscilloscope output. Reposition the Design and Oscilloscope windows so both are visible.



Click on the "Design" window. Click on the icon for the Cyton board, so that it's outlined in yellow. Decide which input channel (or which Cyton board pin) you want to display on the oscilloscope. Click and hold on the orange circle next to that channel. Drag the cursor to the yellow "chan1" circle on the oscilloscope icon. A red line should now connect the two circles.



Press the "Play (F7)" button at the bottom of the BrainBay screen. A red LED on your Dongle should turn on. This means your board is streaming live data to your computer!

Tap on the pins of your OpenBCI Cyton board. You should see a signal response in the oscilloscope window.



You are now using BrainBay to view data streamed from your OpenBCI board! Feel free to connect one of the other OpenBCI channels to "chan2" on the oscilloscope icon to view signals from multiple pins at once. Once you're comfortable with the oscilloscope tool, explore BrainBay's other target and processing tools!

Want to learn more about BrainBay's capabilities with OpenBCI hardware? Check out their [BrainBay & OpenBCI tutorials](https://sites.google.com/site/biofeedbackpages/brainbay-openbci) page.

## Documentation

Documentation for the BrainBay software can be found here: ()

Did you use BrainBay and OpenBCI to build something new? Post about it on our [community page!](http://openbci.com/community/)
