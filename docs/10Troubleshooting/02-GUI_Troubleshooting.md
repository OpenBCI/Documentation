---
id: GUI_Troubleshooting
title: GUI Troubleshooting
---

## The GUI Console Log
![gui troubleshooting console window](../assets/SoftwareImages/OpenBCISoftware/gui_troubleshooting_consoleLogWindow.png)<br>

- Want to know what's happening "under the hood" in the GUI?
    - Click the Console Log button in the top right (pictured below).
    ![gui console log button](../assets/SoftwareImages/OpenBCISoftware/gui_troubleshooting_consoleLogButton.png)<br>
- Need even more information to debug a problem?
    - [Run GUI from Processing IDE](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#running-the-openbci-gui-from-the-processing-ide) or [Visual Studio Code (Preferred)](https://github.com/OpenBCI/OpenBCI_GUI/wiki/Developer-Setup).
    - Go to Debugging.pde and change `boolean isVerbose = false;` to `boolean isVerbose = true;`.
- You can share the Console Log as text or a file on the Forums or GitHub. This is typically a requirement for new issues on GitHub.

## Issues Connecting & Starting Session
1. If you receive an error in red at the bottom of the GUI while trying to connect to an OpenBCI board, try turning the board Off and back On.
1. Also, unplug and plug the USB dongle for Cyton or BLED112 for Ganglion.
1. Try to start a session again.
    - Cyton: If you still can't connect, try pressing the "AUTOSCAN" button once or twice.
    - Cyton+WiFi: Go through the [WiFi Getting Started Guide](01GettingStarted/01-Boards/03-Wifi_Getting_Started_Guide.md). If this doesn't help, check the Forums or [GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues) and make a new issue if one doesn't already exist. There are a number of issues that are currently being worked on.
    - Ganglion: The Ganglion board usually has fewer issues. If you can't get the Ganglion to connect to the GUI after trying the previous steps, you can email us at support@openbci.com or check [GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues).
1. If your Cyton firmware is older than v3.0.0, you will need to [update the firmware as outlined here](02Cyton/05-Cyton_Board_Programming_Tutorial.md#overview). The latest Cyton firmware as of 2019 is v3.1.2.
1. If nothing in the Docs, GitHub, or Forums are helpful, it's a good idea to email support@openbci.com or make a [new issue on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues/new).

## Something Doesn't Look Right...
1. Take a screenshot using tools provided by your operating system. Alternatively, you can turn on Expert Mode in the GUI and take a screenshot by pressing 'm' on your keyboard.
1. Restart the GUI. If the same problem happens again, please make a [new issue on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues/new).

## High DPI Scaling
- [On Windows](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#install-openbci_gui-on-windows)
- [On Linux](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#install-openbci_gui-on-linux)


#### Further troubleshooting

If you're still having problems, search through the [issues on GitHub](https://github.com/OpenBCI/OpenBCI_GUI/issues) or [make a new issue](https://github.com/OpenBCI/OpenBCI_GUI/issues/new).
