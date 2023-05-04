---
id: GUIDocs
title: The OpenBCI GUI
---

![image](../../assets/SoftwareImages/OpenBCISoftware/GUI-V4-Screenshot.jpg)

The OpenBCI GUI is OpenBCI's powerful software tool for visualizing, recording, and streaming data from the OpenBCI Boards. Data can be displayed in live-time, played back, saved to your computer in .txt format, as well as streamed in live-time to third-party software such as MATLAB.
It can be launched as a standalone application or as a sketch from Processing (a Java-based programming language). In this guide, we will cover both scenarios.

## Hardware/Driver Setup for OpenBCI_GUI

Shown below are the three OpenBCI Boards that can be used with the OpenBCI GUI.

![image](../../assets/SoftwareImages/OpenBCISoftware/labelledBoards.jpg)

### Cyton and Cyton+Daisy Drivers

If it’s your first time working with OpenBCI and you own the Cyton or Cyton+Daisy, [make sure to install the latest FTDI driver](https://www.ftdichip.com/Drivers/VCP.htm) for your operating system.

:::important
**The FTDI driver is only necessary for Windows 8, Windows 10, and Mac OS X 10.9 through 10.15. If you are running a Mac that is mid 2015 or newer, you do not need to install the FTDI driver!**
:::

### Ganglion on macOS/Windows/Linux

**The OpenBCI Ganglion uses Bluetooth LE (aka Bluetooth Smart, Bluetooth 4.0). In order to use the Ganglion, you need a [small USB Dongle](https://shop.openbci.com/products/ganglion-dongle).**

_Note: The [CSR Dongle](https://github.com/openbci-archive/Docs/blob/master/Deprecated%20Docs/Setup_CSR_Dongle.md) is no longer supported._ We recommend using the [newer Ganglion Dongle](https://shop.openbci.com/products/ganglion-dongle).

### WiFi Shield

There are no prerequisites for running the WiFi Shield with Cyton or Ganglion on macOS/Windows/Linux, move on to the installation section below.

### Linux Users: Serial Port Permissions

<p /><details><summary><b><i>Attention Linux Users: Expand this dropdown for important details. This fix affects all communications between Ganglion/Cyton and your computer via serial ports.</i></b></summary><br />

Before trying to connect to any OpenBCI boards on Linux, you need to make sure you have permission to access the serial ports on your machine. Otherwise, you will get the error `Failed to connect using /dev/ttyUSB0` or similar. This can be fixed by adding the user to the `dialout` group in Ubuntu. Here is a [full explanation and fix](https://websistent.com/fix-serial-port-permission-denied-errors-linux/). Here is the short version:<br /><br />

1.  First, verify if the user does belong to the "dialout" group using the “id” command.<br />
        - Type `id -Gn <username>` in terminal and check if it prints `dialout` as one of the options.<br />
        - Replace username with your Linux username. Example: `id -Gn susieQ`
2.  Next, add the user to the “dialout” supplementary group.
        - Type `sudo usermod -a -G dialout <username>` in terminal.
        - Example: `sudo usermod -a -G dialout susieQ`
3.  Restart Ubuntu
4.  Try "id" command again - Repeat step one

</details><p />

## Installing the OpenBCI GUI as a "Standalone" Application

### Download the Appropriate Application For Your OS

The fastest way is to download the standalone .exe/.app for your machine and operating system. To do this, head to the [Downloads](http://openbci.com/donation) page of the OpenBCI website, and click the download link that correlates to your OS and machine.

![image](../../assets/SoftwareImages/OpenBCISoftware/DownloadsUpdated.png)

### Install OpenBCI_GUI On macOS

Drag and drop the `OpenBCI_GUI` application to you `Applications` folder.

![Drag and drop application](../../assets/SoftwareImages/OpenBCISoftware/gui_drag_and_drop.png)

### Install OpenBCI_GUI On Windows

Move the `OpenBCI_GUI` directory anywhere you like.

<details><summary><i>Windows Users: How to run the GUI with High DPI Screens</i></summary>

<br />If you have a high DPI screen and are running Windows 10, you may notice that the GUI is hard to see, and nothing seems to scale correctly.<br />

1.  First, close the GUI if it is open.<br />

2.  Next, right click on `OpenBCI_GUI.exe` and select `Properties`. The following window should pop up:<br />

![gui windows properties menu](../../assets/SoftwareImages/OpenBCISoftware/GUI-WindowsProperties.png)<br />

3.  Select the `Compatibility` tab at the top of this window, and then click `Change high DPI settings`.<br />

![gui windows properties compatibility](../../assets/SoftwareImages/OpenBCISoftware/GUI_WindowsProperties_Compatibility.png)<br />

4.  In the section labeled `High DPI scaling override`, check the box `Override high DPI scaling behavior` and change from `Application` to `System (Enhanced)`.<br />

![gui windows override high dpi scaling](../../assets/SoftwareImages/OpenBCISoftware/GUI_Windows_OverrideHighDPI.png)<br />

5.  That's it! Once the settings have been changed, restart the GUI!

</details>

### Install OpenBCI_GUI On Linux

<p>Unzip the downloaded application and place in desired location.</p><br />

<p /><details><summary><i>Linux Users: How to run the GUI with High DPI Screens</i></summary>

On Linux, there is no way to force scaling. However, here is a <a href="https://github.com/kaueraal/run_scaled">link to a script that should work</a>.

</details><p />

## Running the OpenBCI_GUI

**Important Notes:**

- In some cases, there may be issues with the way your machine handles the BLE application that enables communication with the Ganglion Board.
- If you run into additional issues, please visit the [OpenBCI_GUI Section](https://openbci.com/forum/index.php?p=/categories/openbci_gui) of our Forum

### Running on macOS

Navigate to your `Applications` folder and double click the `OpenBCI_GUI` You may see a message pop up asking you if you're sure you want to open it. Click Open and the app will launch.

![allow GUI to run](../../assets/SoftwareImages/OpenBCISoftware/ganglion_permissions.png)

### Running on Windows

Navigate to your `OpenBCI_GUI` directory, double click `OpenBCI_GUI.exe`.

### Running on Linux

Open a terminal application and navigate to the directory (with `cd`) of the unzipped application.

Then, launch the Application from terminal with the command:

```

$ ./OpenBCI_GUI

```

or

```

$ sudo ./OpenBCI_GUI

```

This will launch the OpenBCI_GUI. **If you experience issues, try running with or without `sudo`.**

## Using the OpenBCI GUI

### BrainFlow Java Library

**Starting with GUI v5, simply run the GUI and connect to all OpenBCI hardware!** In the background, we are using the included [BrainFlow Java library](http://docs.openbci.com/docs/ForDevelopers/SoftwareDevelopment#brainflow---java) to handle communications with the boards.

### Tutorial

![use gui](../../assets/SoftwareImages/OpenBCISoftware/USE-GUI.jpg)

Check out this [Youtube video](https://www.youtube.com/watch?v=agV1B2l-QLw) on how to use the OpenBCI GUI. Note: Uses an older version of the GUI.

### Access Recorded Data

OpenBCI users always have free access to live and recorded data! Recorded data is saved to your local computer to respect privacy and freedom of use. Also, you have the option to save data as a CSV text file or BDF+ format.

![Session Data Control Panel Screenshot](../../assets/SoftwareImages/OpenBCISoftware/OpenBCI_GUI-SessionDataControlPanel_Screenshot.png)

:::info Where do I find my Data?
By default, **the GUI stores all user data and raw EEG recordings in `[USER]/Documents/OpenBCI_GUI`** and names each session with an autogenerated timestamp. Saved data does not have filters applied. This gives you the freedom to change and experiment with other filters during playback.
:::

Starting with GUI 5.1.0, you can save data simultaneously to the BrainFlow CSV format, which [can be used directly in BrainFlow](../../ForDevelopers/01-SoftwareDevelopment.md) for offline processing, training, and experimentation.

![BrainFlow Streamer Control Panel - Save to File](../../assets/SoftwareImages/OpenBCISoftware/OpenBCI_GUI-BrainFlowStreamerCP_Screenshot.png)

Cyton users can save data to an SD card. To playback these files using the GUI, copy the files to your computer from the SD card. This works better than reading files from the SD card. With GUI v5, it is no longer necessary to convert SD files for playback in the GUI. A few users may still want to [convert large SD file recordings](#converting-large-sd-card-recordings).

### Customize Your Layout

The OpenBCI GUI displays up to six customizable windows in twelve layouts! You can choose what each window displays by clicking the dropdown menu at the upper left of each window. The bottom row of layouts work best on higher resolution monitors.

![GUI Layout Dropdown Screenshot](../../assets/SoftwareImages/OpenBCISoftware/GUIv5_LayoutSelector_Highlighted.png)

### Impedance Testing

The impedance widget is a valuable tool for evaluating electrode contact before data acquisition.
Press `Test` to start impedance test on an individual channel.

The impedance value is in colored font as a visual guide to the pre-set thresholds. A red impedance value means you should adjust your electrodes, part your hair, add gel, use paste, or such measures as appropriate for the electrode you’re using. Experienced users can also adjust these thresholds in the bracket-field beneath the table.

:::info
During the impedance test, the board sends a small current through the selected channel to obtain the impedance value.
**For this reason, you won't be able to stream data on a channel and obtain the impedance value simultaneously from the channel.**
:::

The screengrab below shows the GUI Impedance Widget for Cyton:
![GUI Impedance Widget Screenshot](../../assets/SoftwareImages/OpenBCISoftware/GUI_5.1.0_cyton_impedance.png)

To test impedance for Ganglion, use the Ganglion Signal Widget.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/ganglion_signal_widget-impedance_check.png?raw=true" width="50%" />

### Decrease Setup Time by Saving/Loading Settings

Starting with GUI V3, you can save and load a snapshot of nearly every setting in the GUI (ex. Layout, Time Series Channel Settings, Networking Settings, etc.) by using a dropdown menu (pictured below) or keyboard shortcuts. If you change anything during a session, save your settings or click "Stop System" before exiting. **Save with lowercase 'n'** and **Load with capital 'N'** on your keyboard to and from _/Documents/OpenBCI_GUI/Settings/_.

![Config Button](../../assets/SoftwareImages/OpenBCISoftware/GUI_Config_Button_ScreenshotRev3.png)

Start the system first. Then, arrange the GUI to suit your needs and **click "Settings"-->"Save"**. A dialog box will open to confirm file name and path _(e.g. GanglionUserSettings.json)_. After, you will see a message saying "Settings Saved!" When you click "Stop System", all settings will be auto-saved.

The GUI automatically loads settings from _/Documents/OpenBCI_GUI/Settings/_ when the system starts!

To load settings, just **click "Settings"-->"Load"**. Select a settings file from the dialog box that opens. If the settings are incompatible (ex. loading 16 channels while using 8), the GUI will display an error at the bottom or "Default Settings Loaded". If all is well, the GUI will display "Settings Loaded!" as the GUI snaps directly to your desired settings.

**Click "Settings"-->"Default" to revert the GUI to default settings.**

For all data modes, the GUI will load all GUI-related settings automatically. After starting a session, hardware settings (channel on/off, gain, etc.) will need to be set by the user manually.

### BrainFlow Streaming Board Feature

#### External Process to GUI

This feature allows more advanced users to connect to OpenBCI boards using an external process (such as a Python script) and simultaneously send unfiltered data to the OpenBCI GUI. **Users may find this necessary for developing apps while wanting to use the GUI to visualize data.** Make sure to specify the same IP address and port mentioned in the primary process. Here is the [official BrainFlow Documentation for Streaming Board](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html?highlight=streaming%20board#streaming-board).

![BrainFlow Streaming Board Screenshot](../../assets/SoftwareImages/OpenBCISoftware/OpenBCI_GUI-StreamingBoardCP_Screenshot.png)

#### GUI to External Process

Similarly, you can reverse this process by using the BrainFlow Streamer set to "Network" and specifying the IP address and port there. The data sent out from the GUI is unfiltered. Here is the [official BrainFlow Documentation for Streaming Board](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html?highlight=streaming%20board#streaming-board).

:::tip Recommendation
This method can be more reliable and quicker to implement than sending Time Series data out from the Networking Widget over UDP, LSL, or OSC!
:::

![BrainFlow Streamer over Network Option](../../assets/SoftwareImages/OpenBCISoftware/OpenBCI_GUI-BrainFlowStreamerNetworkSetting_Screenshot.png)

### GUI Keyboard Shortcuts

**Use the spacebar to start or stop the data stream!**

#### Expert Mode

**To enable all keyboard shortcuts, set "Expert Mode On" in the settings dropdown.** This mode is off by default to prevent accidentally sending a command to the board.

![Expert Mode Button](../../assets/SoftwareImages/OpenBCISoftware/expertModeToggleHelpText.png)

Expert Mode Keyboard Shortcuts:

- Other than spacebar, you can press 's' to stop data stream, and 'b' to begin, or start the data stream.

- You can _use lowercase 'k' to set "Bias Don't Include"_ on all channels, or _lowercase 'l' to set "Bias Include"_ on all channels.

- **Press lowercase 'd' to set all channels settings to default.**

- Using an _English keyboard_, you can deactivate channels 1-16 using:

  - 1,2,3,4,5,6,7,8
  - q,w,e,r,t,y,u,i

- Similarly, activate channels 1-16 using:

  - !, @, #, $, %, ^, &, \*
  - Q,W,E,R,T,Y,U,I

- **Take a screenshot of the GUI using lowercase 'm'!** It will be saved to _/Documents/OpenBCI_GUI/Settings/_.

- **Enter presentation mode using Enter (Win), or Return (Mac).**

- To change to the alternate color scheme, use '{"{"}'.

## Running the OpenBCI GUI from the Processing IDE

**Most users should start by [running the standalone OpenBCI GUI](#running-the-openbci_gui). The Processing IDE is for adding features, modifying existing code, or testing development versions.**

The OpenBCI GUI was built using [Processing](https://processing.org/), a popular, Java-based creative coding framework. If you are interested in adding features or modifying the existing code, it is really easy to do so if you are familiar with Java. If you're not familiar with Java, don't fret! Processing is one of the easiest software packages to pick up as a beginner coder.

The things you will need to run the OpenBCI GUI in Processing are:

- [Processing App](https://processing.org/download/?processing)
- [OpenBCI GUI Sketch](https://github.com/OpenBCI/OpenBCI_GUI)

First, go to processing.org and download the latest version of Processing. [Here is a walkthrough on how to install Processing on Ubuntu Linux.](http://www.artsnova.com/processing/installing-processing-ubuntu-linux-tutorial.html)

Go ahead and move it to your `Applications` folder, and launch the application. If this is the first time that you are running Processing, it will create what it calls it's `Sketch` folder in the following locations:

On a Mac `Users/<user-name>/Documents/Processing`  
 On Windows `C:\Users\<user-name>\Documents\Processing`  
 On Linux `/home/<user-name>/sketchbook`

![GUI repo](../../assets/SoftwareImages/OpenBCISoftware/ganglion_GUI-repo.png)

The OpenBCI GUI code repository is located on github [here](https://github.com/OpenBCI/OpenBCI_GUI). click on the `Clone or download` button in green on the right, and select `Download ZIP`. If you are a advanced GitHub user, go ahead and clone it, or fork it if you like.

If you downloaded the repository as a zip, please unzip it and you can change the folder name from `OpenBCI_GUI-master` to `OpenBCI_GUI`, if you prefer. You can then place this folder wherever you like (Mac Example: `Users/<user-name>/Documents/GitHub/OpenBCI_GUI`).

:::info Copy 3rd Party Libraries
Inside the `OpenBCI_GUI` folder, there is a folder called `libraries`. Theses are the 3rd party libraries that the OpenBCI GUI uses to work it's magic. You need to **copy** all of these folders into:

On a Mac `Users/<user-name>/Documents/Processing/libraries`  
On Windows `C:\Users\Username\Documents\Processing\libraries`  
On Linux `/home/<user-name>/sketchbook/libraries`

If there is no folder called `libraries` in that location, go ahead and make one. Once you have done that, close the Processing app and reopen it. If you get an error saying "Duplicate Packages", you may need to remove the `jna` package from the `Processing\libraries` folder.
:::

### Open The OpenBCI GUI Project in Processing & Launch It!

:::note
If you are on Windows, please set Processing to `Run this program as an administrator`.
:::

When you get Processing running again, you will see a window open up. This is the Processing IDE (Integrated Development Environment). Select `File > Open` and open the `OpenBCI_GUI.pde` file from where you saved your fork or clone of the repository.

![GUI Folder structure screenshot](../../assets/SoftwareImages/OpenBCISoftware/OpenBCI_GUI_processing_windows_folder_structure.PNG)
![GUI code window](../../assets/SoftwareImages/OpenBCISoftware/GUI_code_window.PNG)

If you don't know anything about coding, don't edit these files. If you like to dig in to the meat of what makes things work, by all means. have at it. You are looking at the program code that makes the OpenBCI GUI work it's magic. Now, it's time to run it!

![Processing RUN](../../assets/SoftwareImages/OpenBCISoftware/ganglion_processing-RUN.png)

Press the `play` button on the upper left of the IDE, and the sketch will try to launch!

If you are encountering issues launching the GUI at this point, please head to the [OpenBCI_GUI section](https://openbci.com/forum/index.php?p=/categories/openbci_gui) of our Forum and look for help or post a question.

## Converting Large SD Card Recordings

**Note: This can only be done with GUI v4.2.0 or earlier.** In order to convert large SD card recordings made using Cyton or Cyton+Daisy, you will need to run the GUI from Processing, but we need to change one crucial setting in Processing's Preferences. As mentioned in the screenshot below, open Processing preferences and increase max available memory to at least 9GB to convert a 12 hour SD recording. Click OK to save these preferences, restart Processing to make sure the changes take effect, and re-launch the GUI.

![GUI Screenshot convert large SD recording](../../assets/SoftwareImages/OpenBCISoftware/gui_convert_large_SD_recordings_scrnshot.png)

## Exported Data

Data from the board will be recorded into a **Brainflow-RAW_date_time** CSV file and **OpenBCI-RAW_date_time** CSV file in txt format. All data saved to these files are unfiltered. These recordings are stored in ```User/Documents/OpenBCI_GUI/Recordings```. Each GUI session will have its own directory titled **OpenBCISession_date_time**. Every time you start and stop a session creates a new Brainflow-RAW and OpenBCI-RAW file within that session folder. The picture below shows three started and stopped recordings within one GUI session.

![GUI data files](../../assets/SoftwareImages/OpenBCISoftware/GUI_data_files.png)

### Cyton

Here is a table of the column headers and descriptions for the Cyton.

| Column | Name                    | Description |
| ------ | ----------------------- | ------------- |
| 1      | Sample Index            | The index of the sample per second (0-250) |
| 2      | EXG Channel 0           | EEG/EMG/ECG channel connected to pin labeled N1P         |
| 3      | EXG Channel 1           | EEG/EMG/ECG channel connected to pin labeled N2P         |
| 4      | EXG Channel 2           | EEG/EMG/ECG channel connected to pin labeled N3P         |
| 5      | EXG Channel 3           | EEG/EMG/ECG channel connected to pin labeled N4P         |
| 6      | EXG Channel 4           | EEG/EMG/ECG channel connected to pin labeled N5P         |
| 7      | EXG Channel 5           | EEG/EMG/ECG channel connected to pin labeled N6P         |
| 8      | EXG Channel 6           | EEG/EMG/ECG channel connected to pin labeled N7P         |
| 9      | EXG Channel 7           | EEG/EMG/ECG channel connected to pin labeled N8P         |
| 10     | Accel Channel 0         | Accelerometer channel 0 (X)                              |
| 11     | Accel Channel 1         | Accelerometer channel 1 (Y)                              |
| 12     | Accel Channel 2         | Accelerometer channel 2 (Z)                              |
| 13     | Other                   | See below                                                |
| 14     | Other                   | See below                                                |
| 15     | Other                   | See below                                                |
| 16     | Other                   | See below                                                |
| 17     | Other                   | See below                                                |
| 18     | Other                   | See below                                                |
| 19     | Other                   | See below                                                |
| 20     | Analog Channel 0        | Analog channel 0                                         |
| 21     | Analog Channel 1        | Analog channel 1                                         |
| 22     | Analog Channel 2        | Analog channel 2                                         |
| 23     | Timestamp               | Unix timestamp                                           |
| 24     | Marker Channel          | Channel for adding manual markers to data                |
| 25     | Timestamp (Formatted)   | Year-Month-Day Hour:Minute:Second (Not in Brainflow csv) |

:::info Cyton Other Channels
When recording using Cyton, the GUI will output a data file which contains 7 channels with the header "Other". These channels are user defined based on the [board mode](../../Cyton/04-OpenBCI_Cyton_SDK.md/#board-mode). Refer to the [aux data footer section](../../Cyton/03-Cyton_Data_Format.md/#firmware-version-200-fall-2016-to-now-1) of the Cyton data format documentation for further information.

In digital read mode the 5th "Other" channel is connected to the D17 pin by default. This pin can be triggered by pressing the "PROG" button. This is useful for adding manual timestamps to your data.
:::

### Ganglion

Here is a table of the column headers and descriptions for the Ganglion.

| Column | OpenBCI-RAW             | Description |
| ------ | ----------------------- | ------------- |
| 1      | Sample Index            | The index of the sample per second (0-250)               |
| 2      | EXG Channel 0           | EEG/EMG/ECG channel connected to pin labeled N1P         |
| 3      | EXG Channel 1           | EEG/EMG/ECG channel connected to pin labeled N2P         |
| 4      | EXG Channel 2           | EEG/EMG/ECG channel connected to pin labeled N3P         |
| 5      | EXG Channel 3           | EEG/EMG/ECG channel connected to pin labeled N4P         |
| 6      | Accel Channel 0         | Accelerometer channel 0 (X)                              |
| 7      | Accel Channel 1         | Accelerometer channel 1 (Y)                              |
| 8      | Accel Channel 2         | Accelerometer channel 2 (Z)                              |
| 9      | Resistance Channel 0    | Impedence measurement for channel 0                      |
| 10     | Resistance Channel 1    | Impedence measurement for channel 1                      |
| 11     | Resistance Channel 2    | Impedence measurement for channel 2                      |
| 12     | Resistance Channel 3    | Impedence measurement for channel 3                      |
| 13     | Resistance Channel 4    | Impedence measurement for reference channel              |
| 14     | Timestamp               | Unix timestamp                                           |
| 15     | Marker Channel          | Channel for adding manual markers to data                |
| 16     | Timestamp (Formatted)   | Year-Month-Day Hour:Minute:Second (Not in Brainflow csv) |