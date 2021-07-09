---
id: HardFAQ
title: Hardware & Software
---
## What do I need to get started?

To get started, all you need is an [OpenBCI Board](http://shop.openbci.com/collections/frontpage/boards) (Ganglion or Cyton), some electrodes, and a computer! Note that you do not need an Ultracortex. In fact, you can use any standard EEG electrode cap with the OpenBCI Boards.

## Can I use OpenBCI with other hardware & software?

Yes! OpenBCI is designed to be easily interfaced by other hardware and software. The OpenBCI hardware is software agnostic, meaning it works with OpenBCI-specific software, as well as any other 3rd-Party Software that has an OpenBCI driver. Check out the [Tutorials Section](GettingStarted/00-GettingStartedLanding.md) to find guides that detail connecting OpenBCI to other tools.

## What is the difference between the [Ganglion](03Ganglion/01-GanglionBoard.md), the [Cyton Board](02Cyton/01-CytonBoard.md), and the [Cyton + Daisy Boards](GettingStarted/01-Boards/011-Daisy_Getting_Started_Guide.md)?

The Cyton Board is an 8 channel bio-sensing amplifier that can measure ECG, EMG, and EEG. It connects to your computer wirelessly with an included USB Dongle. Data is sampled at 250Hz.
The Cyton + Daisy is the same as the Cyton Board, but it also includes an expansion module to increase the channel count to 16. Data is sampled at 125Hz.
The Ganglion is a 4 channel bio-sensing amplifier that can measure ECG, EMG, and EEG. It connects to your computer via BLE. Data is sampled at 200Hz.

The boards sample rate is limited by the bluetooth bandwidth. In order to increase the sample rate, you can purchase the [WiFi Shield](https://shop.openbci.com/collections/frontpage/products/wifi-shield?variant=44534009550). The WiFi Shield increases the sample rate by transmitting the data via WiFi as opposed to Bluetooth. The WiFi Shield can be controlled through HTTP requests and can send JSON objects with data in nano volts.

With the WiFi Shield connected:

-   The Cyton can stream data at 50Hz, 500Hz, 1000Hz, 2000Hz.
-   The Cyton + Daisy can to stream data at 250Hz, 500Hz, 1000Hz.
-   The Ganglion can stream data at 200Hz, 400Hz, 800Hz, 1600Hz.

## How do I choose between 4, 8, or 16 channels for my research?

With additional channels, you have additional spatial resolution. The Ganglion (the 4-channel board) is great for low-cost research and education. The Cyton (8-16 channels) provides additional spatial resolution, enabling more diverse types of research requiring higher channel counts.

## Where do I download the OpenBCI software?

You can go to our [downloads page](http://openbci.com/donation)!
