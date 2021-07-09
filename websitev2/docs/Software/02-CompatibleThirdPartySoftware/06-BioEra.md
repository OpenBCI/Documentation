---
id: BioEra
title: BioEra
---
From the BioEra homepage: BioEra is a visual designer useful for analyzing signals in real time. It can be used with any device with ability to stream data to a computer.

BioEra is used to create a design visually. A design represents data flow from input (e.g. biofeedback device) to output (e.g. visual or sound feedback). The flow can be customized with hundreds built-in objects (elements). For example an amplitude of alpha brainwaves can be filtered from input EEG signal, it can then trigger a MIDI, video or a computer task at a certain threshold level.

## Setting Up Your Environment

**Windows:** BioEra only works with Windows and Android systems.

**MacOS and Linux:** If you have Mac OS or Linux, you can use BioEra through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial [here!](06Software/02-CompatibleThirdPartySoftware/07-VirtualBox.md)

## Installation

Click on the download link for the trial version of BioEra here: (http:). If you're using a virtual machine, be sure to download and set up BioEra from within the VM environment.

Click **BioEra Trial 4.027 for Windows - full**, or the equivalent link for the latest version, and follow the prompts to run the program.

During installation, you may get an error that your computer or virtual machine has the incorrect processor for the program; just disregard the warning and continue with the installation.

## Getting Started

Once installation is complete, navigate to the new "BioEraTrial" folder and double-click the "bioera" executable file. This will run BioEra.

A PacMan demo will pop up automatically. Play around with the demo, or take a look at the [BioEra website](http://www.bioera.net/index.shtml), to learn more about the software's capabilites.

## Streaming from OpenBCI within BioEra

This section will show how to stream data live from your OpenBCI board within BioEra. We'll also show how to use the oscilloscope tool, as an introduction to BioEra's interface, as well as a way to verify your board is streaming data to BioEra.

Start BioEra. To start a new project, select System -&gt; New Design from the toolbar of one of the windows.



Two new windows will appear - one with a light gray background (the "design" window) and one with a dark gray background (the "output" window). In the design window, select Element -&gt; New.



In the New Element window, find the "FTDI Serial Port" object. Select it and click "OK".



An FTDI icon should now be visible in the design window.



Navigate to Element -&gt; New again from the toolbar. Find the "OpenBCI" object. Select it and click "OK". An OpenBCI icon should now be visible in the design window.



Connect the output of the FTDI object with the input of the OpenBCI object, as shown. To connect the two objects, click on the output of the FTDI object, the click on the input of the OpenBCI object.



You're ready to stream live data from your OpenBCI board! In the next section, we'll give an example for how to use and display your OpenBCI data using BioEra tools.

## Quick Project: Using the Oscilloscoope Tool

BioEra has a wide variety of useful tools for streaming EEG data. To get familiar with BioEra’s interface, and to double-check our board is streaming data, we’ll show how to use the oscilloscope tool. An oscilloscope is a tool that displays changes in signal voltage vs. time (just like the main display of the OpenBCI GUI).

Select an oscilloscope object the same way you selected the FTDI and OpenBCI objects. In addition to the oscilloscope icon in the design window, an oscilloscope display will appear in the dark grey window, like below. Connect one of the OpenBCI channels to the oscilloscope icon input.



Select the "View" button at the top of the design window. The oscilloscope screen should look like below.



Press the "play" button at the top of the design window. Data will start streaming from your board into BioEra (BioEra should automatically identify your board's serial port). A red light should appear on the OpenBCI Dongle; this means data is streaming from your OpenBCI board to your computer.

Tap on the pins of your OpenBCI board. You should see the oscilloscope signal react accordingly.



You are now streaming live data from your OpenBCI board into BioEra! Check out the rest of BioEra's tools for EEG streaming and processing.

## Documentation

To learn more about BioEra, look through their [manual](http://www.proatech.com/be/manual.html) or [forum](http://www.bioera.net/support/forum.jsp).

Build something new using BioEra and OpenBCI hardware? Post about it on our [community page!](http://openbci.com/community/)
