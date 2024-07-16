---
id: GUI_Troubleshooting
title: GUI Troubleshooting
---
## The GUI Console Log

-   Want to know what's happening "under the hood" in the GUI?
    -   Click the Console Log button in the top right (pictured below).
    -   ![gui console log button](../assets/SoftwareImages/OpenBCISoftware/gui_troubleshooting_consoleLogButton.png)<br />
-   Need even more information to debug a problem?
    -   [Run GUI from Processing IDE](Software/OpenBCISoftware/01-OpenBCI_GUI.md#running-the-openbci-gui-from-the-processing-ide) or [Visual Studio Code (Preferred)](https://github.com/OpenBCI/OpenBCI_GUI/wiki/Developer-Setup).
    -   Go to Debugging.pde and change `boolean isVerbose = false;` to `boolean isVerbose = true;`.
-   You can share the Console Log as text or a file on the Forums or GitHub. This is typically a requirement for new issues on GitHub.
-   You can use keyboard shortcuts within the Console Window to Open Log as Text(`f`), Copy Full Log Text(`c`), Copy Last Line (`l`), Jump to Last Line(`j`), Scroll Down(`Down Key`), and Scroll Up(`Up Key`).

![gui troubleshooting console window](../assets/SoftwareImages/OpenBCISoftware/gui_troubleshooting_consoleLogWindow.png)<br />

## Issues Connecting & Starting Session

1.  If you receive an error in red at the bottom of the GUI while trying to connect to an OpenBCI board, try turning the board Off and back On.
2.  Also, unplug and plug the USB dongle for Cyton or BLED112 for Ganglion.
3.  Try to start a session again.
    -   Cyton: If you still can't connect, try pressing the "AUTOSCAN" button again, or selecting channel 20 within the "OVERRIDE DONGLE" dropdown. 
    -   Cyton+WiFi: Go through the [WiFi Getting Started Guide](GettingStarted/Boards/03-Wifi_Getting_Started_Guide.md). If this doesn't help, check the Forums or [GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues) and make a new issue if one doesn't already exist. There are a number of issues that are currently being worked on.
    -   Ganglion: The Ganglion board usually has fewer issues. If you can't get the Ganglion to connect to the GUI after trying the previous steps, you can email us at [support@openbci.com](mailto:support@openbci.com) or check [GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues).
4.  If your Cyton firmware is older than v3.0.0, you will need to [update the firmware as outlined here](Cyton/05-Cyton_Board_Programming_Tutorial.md#overview). The latest Cyton firmware as of 2019 is v3.1.2.
5.  If nothing in the Docs, GitHub, or Forums are helpful, it's a good idea to email [support@openbci.com](mailto:support@openbci.com) or make a [new issue on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues/new/choose).

## Cyton Board *RAILED* error in GUI Time Series

To fix 100% 'RAIL' error, select a smaller gain on Cyton channels. Access the gain settings through Hardware Settings, in the OpenBCI GUI software:

1. Open the GUI and hit ‘Start Session’
2. Before streaming data, open Hardware settings
3. set Gain to 8x, 12x, or 16x, then hit ‘send’

By default, it's set to 24. Select a lower gain that suits your use and you can see better data from the Time Series and FFT widgets.
The default gain 24x may be too high for most. The optimal gain will vary depending on the individual user’s skin impedance. 


## Something Doesn't Look Right...

1.  Take a screenshot using tools provided by your operating system. Alternatively, you can turn on Expert Mode in the GUI and take a screenshot by pressing 'm' on your keyboard.
2.  Restart the GUI. If the same problem happens again, please make a [new issue on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues/new/choose).

## High DPI Scaling

-   [On Windows](Software/OpenBCISoftware/01-OpenBCI_GUI.md#install-openbci_gui-on-windows)
-   [On Linux](Software/OpenBCISoftware/01-OpenBCI_GUI.md#install-openbci_gui-on-linux)

## Data on all channels without electrodes connected
 
When electrodes/ground/reference electrodes are not attached to the Ganglion, Cyton, or CytonDaisy board, the device essentially acts as an un-tuned radio, picking up any/all background electromagnetic frequency (EMF).
 
Turn off un-used channels by toggling the channel number icon in the GUI Time Series widget (to the left of each channel). Un-connected pins should be toggled off so that they don't influence the BIAS pin (noise-cancelling pin) of the Cyton/CytonDaisy board or the REF pin of the Ganglion board.
For noise when electrodes ARE connected, see [Noise Reduction Guide](../Troubleshooting/01-MinimizingNoise.md).


## Troubleshooting Packet Loss

### Cyton

 Please, be advised that packet loss can occur in noisy environments, especially in university lab environments with multiple Cytons running. If you think you are experiencing packet loss, you can open the [Console Log Window](#the-gui-console-log) to confirm or deny packet loss and assess severity. Also, boards with low battery power may show packet loss and excessive noise.

 To fix this:

-   Use a USB extension cable or hub to make sure Cyton and Dongle are closer together.

-   Go to Manual Radio Configuration and try `CHANGE CHAN.` or `AUTOSCAN` as shown in the picture below. You can hover over these buttons with your mouse for a brief description. The Auto Connect button is disabled when using Manual Radio Config.

-   The current GUI now features packet loss interpolation. This makes filtered data much smoother and minimizes artefacts that would appear.

    ![GUI Cyton Manual Radio Configuration](../assets/SoftwareImages/OpenBCISoftware/gui_cyton_manual_radioconfig.png)

### Ganglion

 Ganglion connections using the [BLED 112 Dongle](https://shop.openbci.com/collections/frontpage/products/ganglion-dongle?variant=15473352605768) are usually very stable with low noise. If you experience packet loss, there may be an excess of BLE devices in the immediate area. Otherwise, try moving the Ganglion and Dongle closer together with a USB extension cable.

## Further troubleshooting

If you're still having problems, search through the [OpenBCI Technical Forum](openbci.com/forum), [issues on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues) or [make a new issue](https://github.com/OpenBCI/OpenBCI_GUI/issues/new/choose).
