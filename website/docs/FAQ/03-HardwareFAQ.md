---
id: HardFAQ
title: Hardware & Software
---

## What do I need to get started?

To get started, all you need is an [OpenBCI Board](http://shop.openbci.com/collections/frontpage/boards) (Ganglion or Cyton), some electrodes, and a computer! Note that you do not need an Ultracortex. In fact, you can use any standard EEG electrode cap with the OpenBCI Boards.

## Can I use OpenBCI with other hardware & software?

Yes! OpenBCI is designed to be easily interfaced by other hardware and software. The OpenBCI hardware is software agnostic, meaning it works with OpenBCI-specific software, as well as any other 3rd-Party Software that has an OpenBCI driver. Check out the [Tutorials Section](GettingStarted/00-GettingStartedLanding.md) to find guides that detail connecting OpenBCI to other tools.

## What is the difference between the [Ganglion](Ganglion/01-GanglionBoard.md), the [Cyton Board](Cyton/01-CytonBoard.md), and the [Cyton + Daisy Boards](GettingStarted/Boards/011-Daisy_Getting_Started_Guide.md)?

The Cyton Board is an 8 channel bio-sensing amplifier that can measure ECG, EMG, and EEG. It connects to your computer wirelessly with an included USB Dongle. Data is sampled at 250Hz.
The Cyton + Daisy is the same as the Cyton Board, but it also includes an expansion module to increase the channel count to 16. Data is sampled at 125Hz.
The Ganglion is a 4 channel bio-sensing amplifier that can measure ECG, EMG, and EEG. It connects to your computer via BLE. Data is sampled at 200Hz.

The boards sample rate is limited by the bluetooth bandwidth.

## How do I choose between 4, 8, or 16 channels for my research?

With additional channels, you have greater spatial resolution. The Ganglion (the 4-channel board) is great for low-cost research and education. The Cyton (8-16 channels) provides additional spatial resolution, enabling more diverse types of research requiring higher channel counts.

## Where do I download the OpenBCI software?

You can go to our [downloads page](http://openbci.com/donation)!
