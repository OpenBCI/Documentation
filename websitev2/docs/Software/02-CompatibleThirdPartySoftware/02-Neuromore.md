---
id: Neuromore
title: Neuromore
---
Neuromore is an EEG streaming and processing studio. Like BrainBay and BioEra, it provides a visual designer that can be used to process signals real-time.

## Setting Up Your Environment

**Windows**: Neuromore Studio is available for Windows (but only as a 64-bit application).

**OS X**: Neuromore Studio is available for MacOS, but see the [FTDI OS X fix](10Troubleshooting/05-FTDI_Driver_Fix_Mac.md) before using it.

**Linux**: If you have Linux, you can use Neuromore through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial [here!](06Software/02-CompatibleThirdPartySoftware/07-VirtualBox.md) See [FTDI Linux Fix](10Troubleshooting/03-FTDI_Fix_Linux.md).

## Installation

Download the latest verison of Neuromore Studio for your operating system from their [website](http://neuromore.com/). After installation, the application will be in the folder neuromore -&gt; Studio.

## Getting Started

Open the Neuromore Studio application. A demo will begin playing that displays example EEG data.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/Neruomore_opening_screen.png?raw=true" width="80%" />

## Livestream from OpenBCI to Neuromore

First, connect your OpenBCI board to your computer. Make sure to take the following steps:

**Windows**: Make sure your board is recognized as a COM port and that its latency is set to 1 ms. To troubleshoot, read our [OpenBCI on Windows tutorial](10Troubleshooting/04-FTDI_Fix_Windows.md).

**OS X**: Make sure your board is connected and visible as a device. To check you can type `ls /dev/tty.*` on your terminal. An example connected OBCI board should like like this:

```

Rodrigos-MacBook-Pro:~ rodrigo$ ls /dev/tty.*
		/dev/tty.OpenBCI-DN00959R

```

Now, to connect to your OpenBCI board from within Neuromore, click the magnifying glass under "Devices" in the top right corner. This will prompt Neuromore to search for new devices. You should see an OpenBCI logo pop up, and data from your board will start streaming in the top of the Neuromore window.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_openBCI_connected.png?raw=true" width="80%" />

#### Troubleshooting

Neuromore is pretty awesome in terms of board connectivity. If you open up the studio and connect your board, 9 out of 10 times it'll automatically connect.

If it doesn't, try the following:

1.  Reset OBCI Board (Press Reset Button).
2.  Turn OBCI Board OFF, disconnect dongle, reconnect dongle, turn board back ON.
3.  Close neuromore and disconnect board and dongle. Connect Dongle and Board again and then open neuromore Studio.

NOTE: If your board is connected properly, neuromore should have no trouble connecting to it.

## Getting Started

To get started with Neuromore, open the "Getting Started" classifier in the OpenBCI folder of the "Back-End File System" pane:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/obci_gs_loc.png?raw=true" width="50%" />

An example of Neuromore's visual programming language will appear. Click the wrench-and-screwdriver icon to hide the Node Palette pane if necessary.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_getting_started.png?raw=true" width="80%" />

Neuromore calls these graphs of interconnected processing units "Classifiers". The basic structure of a classifer consists of a input device (such as OpenBCI V3) connected to processing nodes that end in some sort of output node.

Some of the output nodes produce visual output, like graphs in the time or frequency domain. However, the default Neuromore Studio layout doesn't have windows open for those outputs. To add a window for time-domain outputs, click on the View tab of the toolbar, then Add -&gt; Signal View.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_adding_signal_view.png?raw=true" width="50%" />

A new window will appear. Click and drag the window to a convenient place in the Neuromore Studio Layout - it should snap into place, like below.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_signal_view.png?raw=true" width="80%" />

If you look at the Classifier window, you will notice there are three "output" nodes (nodes with an eye symbol): Filtered Raw, Filtered FFT, and Viewer. The Filtered Raw and View symbols are time-domain, and are the two symbols in the Signal View.

To add a window for frequency-domain outputs, click on View -&gt; Add -&gt; Spectrum View. Reposition the new window to a convenient place. You should see one signal, the Filtered FFT node.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_spectrum_view.png?raw=true" width="80%" />

Want to double-check which signal corresponds to which output? Double click on one of the output nodes in the Classifier window. This should expand the Node Palette window. Display the Attributes tab and select "Custom Color". Double click on the block of color that appears to choose the color of your signal.

In the example below, I selected the "Filtered Raw" node, and set the color to bright green. The corresponding signal is now bright green in the Signal View window.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_color_coded_signals.png?raw=true" width="80%" />

Now you're able to view the signals from your output nodes in your Classifier!

This sort of graphical programming (or [visual programming](https://en.wikipedia.org/wiki/Visual_programming_language)) also appears in very popular programs like [PureData](https://puredata.info/) and [MAX](https://en.wikipedia.org/wiki/Max_(software)/) for more general purposes and [OpenViBE](06Software/02-CompatibleThirdPartySoftware/03-OpenViBE.md) and of course neuromore for EEG specific processing.

The basic idea is that a stream of data that originates at the input device can then be mapped, processed and transformed into outputs that are useful, informative or just plain cool.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/alpha-detect-gs.png?raw=true" width="100%" />

The getting started example for OpenBCI in the neuromore Studio explores these areas and how to properly use the graphical programming interface.

The best example within the classifier is perhaps the dynamic alpha detector.

This alpha detector maintains a 30 sec average of the ratio between the alpha (8-12 Hz) and the background signal intensity. The detector itself reports an alpha reward that is dynamically changed by the average alpha/background ratio. This system is adaptive to lower or high alpha environments and makes alpha rewards harder when the average alpha ratio is high and vice-versa.

By changing the "sensibility" parameter node you can then manually tune the relative "difficulty" that is necesary to attain an alpha detection.

This system is flexible to different electrodes and electrode placement as it adjusts dynamically its expectations of what alpha "looks like".

From this example we can see the power of statistics and simple logic that can easily be incorporated through visual programming into a complex and robust system.

## Documentation and Resources

-   [neuromore.com](http://www.neuromore.com/)
-   [Video tutorials](https://www.youtube.com/channel/UCAOU6SsvwCwC30hJaFLhWgw)
-   [Graphical Programming](http://c2.com/cgi/wiki?GraphicalProgrammingLanguage)

Did you use Neuromore and OpenBCI to build something new? Post about it on our [forum!](https://openbci.com/forum/)
