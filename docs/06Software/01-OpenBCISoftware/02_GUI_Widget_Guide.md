---
id: GUIWidgets
title: GUI Widget Guide
---
## What is a GUI Widget?
GUI widgets are the mini tools that fit into the OpenBCI GUI’s interface panes. Examples of GUI widgets include the Time Series, the FFT widget, the Networking widget, and so on. In the upper left-hand corner of every widget, there is a dropdown menu that lists all of the available widgets. If you click the dropdown and select a new widget from the dropdown, it will replace the current widget in that window. You can rearrange the layout of the widgets by clicking the “Layout” button in the upper right-hand side of the GUI.


## Time Series
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_TimeSeries.jpg?raw=true" width="50%">

The time series is the main widget for displaying biosensing data. It processes and displays the electrophysiological signal in real-time, with each graph representing the voltage detected at one point in time by an electrode.

It measures the absolute amplitude of the signal in voltage, in units of μVrms (microvolts, root mean squared).

Each Ultracortex comes with wires that are color-coded to match the GUI, which can be a useful way of keeping track of which electrode maps to which channel.

#### Hardware Settings

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_HardwareSettings.png?raw=true" width="50%">

For Cyton users, clicking the Hardware Settings button opens a menu that allows you to fine-tune the PGA Gain, Bias, and other hardware settings for each channel.

#### Other Settings

**Channel Buttons**: These buttons represent each connected electrode channel. You can toggle them on/off to control whether or not you want to collect data from that electrode.

**View Settings**:

*Vertical Scale* — Controls the range of μV displayed in the time series.
Note: Set to auto to avoid chopping off data and showing good peaks and troughs. Fine-tune as necessary.

*Window* — Controls the amount of time that is shown in the series.

**Railed/Near Railed Warnings**:
These warnings show that there is no or poor signal and that you need to check the electrodes to ensure that they are making good contact with your body.

**Impedance Check**:
Sends a test current down the pin to check impedance. Information is given in kΩ.
Note: Data will stop streaming automatically for the duration of the check.

## FFT Plot
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_FTT.jpg?raw=true" width="50%">

This is a standard data visualization feature of biosensing tools. The x-axis displays various frequencies, and the y-axis shows each frequency’s respective amplitudes in μV. These amplitudes are displayed logarithmically by default — a recommended setting — but you can alter this in the log/ln dropdown.

*Note: Each color in the FFT Plot is color-coded to match the channels in the time series.*

## Accelerometer
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Accel.jpg?raw=true" width="50%">

Each OpenBCI board is fitted with a three-axis accelerometer, the data from which is streamed to this widget. This accelerometer measures the acceleration of the board itself on an XYZ-axis.

**Axis Graph**: Displays relative XYZ-acceleration at the current moment visually on a graph

**Timeline**: Displays relative XYZ accelerations over time, color-coded by axis.

## Head Plot
The head plot displays which regions of the head are experiencing the most activity. The deeper the red in a region, the more brain activity there is occurring in that region. Contour lines are also shown to connect various regions of similar activity levels.

Each number on the diagram corresponds to an electrode channel displayed in the time series widget. These numbers correspond with the suggested assembly for the Ultracortex Mark IV. However, each can be dragged to different locations for custom configurations.

### Default Node Placement
Based off of 10-20 model

| # | 10-20 Node |
|---|------------|
| 1 | Fp1        |
| 2 | Fp2        |
| 3 | C3         |
| 4 | C4         |
| 5 | P7/T5*     |
| 6 | P8/T6*     |
| 7 | O1         |
| 8 | O2         |


\* P7 and P8 are the new terminologies for nodes T5 and T6

### Polarity
When compared to a reference, the pin inputs can produce a positive or negative value. Choosing "+/-" will display the true value as measured from the reference. So if the voltage is measured as lower than the reference, your value will appear negative (or blue), and if the voltage is measured to be higher the value will be positive.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Headplot_both.jpg?raw=true" width="50%">

Alternatively, "+" will display only an absolute value, without regard to whether the signal was positive or negative.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Headplot_pos.jpg?raw=true" width="50%">

## Focus Widget (Temporarily Deprecated)
**Starting with GUI v5.0.0, this feature is temporarily deprecated until a more reliable and research-based Focus algorithm is implemented. If you would still like to use this widget, you can download and run [GUI v4.2.0](https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0).**

The widget recognizes a focused mental state by looking at alpha and beta wave levels on channels 1 & 2. It is based on research supporting focused states aligning with alpha levels between 0.7-2.0 μV, and the beta levels between 0.0-0.7 μV. If your data is outside of this ratio, the algorithm states that you are not focused.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Focus.jpg?raw=true" width="50%">

*For best results, try setting smooth to 0.98 in the FFT plot.

**Key Press**: When KeyPress is on, you can perform tasks and whenever you are focused, either your UP arrow or SPACE key will be pressed. Otherwise, it will be released.

**W_Focus Folder**: This folder contains the original data the focus widget was based on and materials (including an example and instructions) regarding Arduino output.

## Band Power
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_BandPower.jpg?raw=true" width="50%">

The band power widget shows the relative voltages of the various brain wave categories. Each type of brain wave represents a subset of frequencies, which represent different states of activity. The widget is a great "at-a-glance" look into your brain’s activity.

### Types of Waves
| Wave | Frequency (Hz)| Description |
|:------:|:--------------:| ------------|
| Gamma |  32-100 |Signifies heightened perception, learning and problem solving tasks, as well as alertness. It occurs when there is simueltaneous information processing from multiple parts of the brain.  |
| Beta | 13-32 | Signfies normal alert consciousness and active thinking. It occurs when one is focusing on work, solving a problem, learning a new concept, or engaging in active conversation.|
| Alpha |  8-13 |Signifies physical and mental relaxation. They occur when your eyes are closed, when one is being artistic, and during yoga. |
| Theta |  4-8      |Signifies deep relaxation, creativity, insight, reduced consciousness. They are picked up during day dreaming and deep meditation. |
| Delta | 0.5-4     |Signifies sleep, dreaming. Occurs when we enjoy restorative, deep, dreamless sleep.

## EMG
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_EMG.jpg?raw=true" width="50%">

In a nutshell, we are trying to map the current flex of a muscle into the “comfortable flex range” of said muscle, and then represent that as a decimal between 0 and 1. In theory, if you relax, the value will be 0, and if you flex, the value will go to 1.

The current EMG strength is a collection of raw voltage values averaged (or smoothed) over a known window of time. The bigger the window you are averaging over, the smoother the data. We establish an upper threshold (the outer dark blue circle of the circular visualizer) and a lower threshold (the inner dark blue circle) for the constantly updating “comfortable EMG range.” Then we’re mapping the current EMG (the filled circle that matches the color of the channel) value between the upper and lower thresholds.

This pseudo-analog mapped value is represented more clearly in the bar graph off to the right of each channel’s circular visualizer. The upper threshold is constantly creeping downwards and the lower threshold is constantly creeping upwards until they get the Min ΔμV away from one another. This ensures that the overall system never creates an upper/lower flex range that is too big to influence with a muscle flex.

### Options
The drop-downs of the widget are designed to allow you to tweak the various parameters of this relationship. There are 4 dropdowns used to control certain parameters:

**Smooth**: This is the size of the window. If we set this value at the smallest setting of 0.01 seconds (ie., lowering the smooth value), our data will be very jittery but responsive. Alternatively, if we increase the smooth and set our window to 2.0 seconds, the output will be very smooth but much less responsive.

**μV Limit**: This is a cutoff point for an allowable μV value in any individual data block. Any μV values above this number will be chopped off and set to this upper μV limit. This is to prevent erratic blips in the data from substantially distorting the average. Sometimes dropped packets and rapid body movements can create large spikes that don’t correlate to muscle activity. This helps account for those issues.

**Creep**: This value indicates how quickly the upper μV limit creeps downward and how quickly the lower limit creeps upward. Notice that by adjusting this value, the upper threshold and lower threshold rings will approach each other more quickly. We generally recommend this to be slow. If this is too fast and we wait too long between muscle activations, the upper threshold will have crept closer to the lower threshold and the system will be hypersensitive.

**Min ΔμV**: This value sets the minimum voltage range between the upper threshold and the lower threshold. The upper threshold and lower threshold cannot get any closer than this. By making this value bigger, you will have to flex harder to go from 0 to 100% flex, after the thresholds have crept as close as they will get to one another (aka Min ΔμV).

## Networking
The networking widget allows the streaming of data to other apps. Keep scrolling for an explanation of the four data types: Serial, UDP, OSC, and LSL. To see how it can be used with our different apps, check out our [Software page](06Software/00-SoftwareLanding.md).

With the networking widget, you can send Time Series, FFT, EMG, Band Power, Accel/Aux, and Pulse data. The Accel/Aux option allows you to send Accelerometer, Analog Read, or Digital Read data. Make sure to have the corresponding widget open, depending on the data type you would like to stream. **Full details of all possible outputs can be found at the [GUI Networking Guide](https://docs.google.com/document/d/e/2PACX-1vR_4DXPTh1nuiOwWKwIZN3NkGP3kRwpP4Hu6fQmy3jRAOaydOuEI1jket6V4V6PG4yIG15H1N7oFfdV/pub).**

### Serial

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Serial.png?raw=true" width="70%">

Able to stream one data type. The data is sent sequentially, bit by bit, in consecutive packets. Serial is the main networking protocol that can be used when using OpenBCI with Arduino.

**Baud Rate**: The rate of data transfer in bits per second. This should correspond with the chosen baud rate for the receiving application.

**Port**: The port of the receiving device. For Arduino, for example, this will likely be a "USB modem" with a serial number attached.

### UDP

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_UDP.png?raw=true" width="70%">

User Datagram Protocol is used primarily for establishing low-latency and loss-tolerating connections between applications on the internet. The UDP protocol allows for up to three different data sets to be sent to three different applications.


### LSL

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_LSL.png?raw=true" width="70%">

Lab Streaming Layer is a system for synchronizing streaming data for live analysis or recording. LSL is a good way to send your OpenBCI stream to applications that can record or manipulate the data, such as [Matlab](06Software/02-CompatibleThirdPartySoftware/01-Matlab.md).

FFT data can now be sent over LSL, starting with [GUI v.4.1.5-beta.3.](https://github.com/OpenBCI/OpenBCI_GUI/releases)


For certain data types, it helps to change the `# Chan` to match the data type. Example: Focus is a single number output, so just set `# Chan` to 1. Here's a screenshot streaming 3 data types to Python:

![gui windows override high dpi scaling](../../assets/SoftwareImages/OpenBCISoftware/gui_lslStreaming_Example.png)<br>

You can find the [example Python script here](https://github.com/OpenBCI/OpenBCI_GUI/tree/master/Networking-Test-Kit). Note: You will need to do `pip install pylsl` if the dependency is not already installed.

### OSC
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_OSC.png?raw=true" width="70%">

Open Sound Control is a protocol for networking sound synthesizers, computers, and other multimedia devices for purposes such as musical performance or show control. OSC's advantages include interoperability, accuracy, flexibility, and enhanced organization and documentation.

OSC works with MaxMSP, PureData, and Resolume.

## Playback Widget
<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_PlaybackHistory.png?raw=true" width="70%">

This Widget only appears when in playback mode. It allows you to select a different playback without having to “Stop System”. There is a button in the top right of the Widget that allows you to select any OpenBCI playback file (.txt or .csv). Selecting other types of files may cause an error.

## Pulse Widget
This widget will only show for Cyton in Live mode. It uses the Analog Read mode to get data from the pin marked D11 on the Cyton. Using this data, the widget will calculate the Beats per minute (BPM) and the Interbeat Interval (IBI). When using the Networking widget, this data type will send BPM, Raw Signal, and IBI.

____

## Custom Widget

This tutorial shows you how to create custom widgets for the [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_GUI). In just a few easy steps, you can have your mini-applications added to the dropdown menus of the OpenBCI GUI for running specialized applications in real-time. These widgets can tap directly into the main data structure of the OpenBCI GUI, so you can experiment with brain waves and other biodata right in the GUI.

#### Helpful Background Skills

* Knowledge of [Processing](https://processing.org/) or Java-based programming
* Experience with [running the OpenBCI GUI from the Processing IDE](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md#running-the-openbci-gui-from-the-processing-ide)
* [Developer Setup using Visual Studio Code or Processing](https://github.com/OpenBCI/OpenBCI_GUI/wiki/Developer-Setup)
* Alternatively, you can edit using [Atom with Processing packages](https://atom.io)


### Step 1 - Duplicate the W_template.pde file & rename

The [W_template.pde](https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/W_Template.pde) file is designed to serve as a simple starting point for creating your widgets. You'll want to start by duplicating this file and renaming it to something like W_myNewWidget.pde, where "myNewWidget" is something relevant to the purpose of your new widget! Try to adhere to the naming convention and put **W_** in front to make sure that all of your widgets end up next to one another in your project directory.

You need to remember to rename the class to make sure that it is unique and not the same class as W_template.pde. The first uncommented line of your file should read:

```
class W_myNewWidget extends Widget {
```

### Step 2 - Add your new widget to the widgetManager.pde file

Before adding any fancy code that grabs ahold of local data structures, make sure you add your new widget to the [widgetManager.pde](https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/WidgetManager.pde) file. By doing this, you make sure your new widget is added to the dropdown menu of each widget. This is helpful because now you can see what you are doing as you add graphics to your widget as you continue to develop it.

Follow the protocol instantiating your widget globally by adding it here:

```
// MAKE YOUR WIDGET GLOBALLY
W_timeSeries w_timeSeries;
W_fft w_fft;
W_networking w_networking;
W_BandPower w_bandPower;
W_accelerometer w_accelerometer;
W_ganglionImpedance w_ganglionImpedance;
W_headPlot w_headPlot;
W_template w_template1;
W_emg w_emg;
W_openBionics w_openbionics;
W_Focus w_focus;
W_PulseSensor w_pulsesensor;
W_myNewWidget w_myNewWidget;
```

Then, make sure to "setup" your widget and add it to the array of all widgets by mimicking the setup code lines

```
  ...

  w_networking = new W_networking(_this);
  w_networking.setTitle("Networking");
  addWidget(w_networking, w);

  w_myNewWidget = new W_myNewWidget(_this);
  w_myNewWidget.setTitle("My New Widget");
  addWidget(w_myNewWidget, w);

  w_bandPower = new W_BandPower(_this);
  w_bandPower.setTitle("Band Power");
  addWidget(w_bandPower, w);

  ...
```

### Step 3 - Add dropdowns to control your widget, if needed

**Note:** Before you can compile the GUI, you'll need to rename the global functions at the bottom of your W_myNewWidget.pde file so that they are different from the global functions at the bottom of W_template.pde. While running the GUI, these functions are automatically activated when the corresponding dropdown is activated in the nav of your widget. Make sure that string (ex: "Dropdown1") in the `addDropdown()` function of the constructor is the same string as the name of your corresponding global function at the bottom of your .pde file. The index of the menu item selected is what is passed into the function (ie "int n").

```
//These functions need to be global! These functions are activated when an item from the corresponding dropdown is selected

void Dropdown1(int n){
  println("Item " + (n+1) + " selected from Dropdown 1");
  if(n==0){
    //do this
  } else if(n==1){
    //do this instead
  }

  closeAllDropdowns(); // do this at the end of all widget-activated functions to ensure proper widget interactivity ... we want to make sure a click makes the menu close
}

void Dropdown2(int n){
  println("Item " + (n+1) + " selected from Dropdown 2");
  closeAllDropdowns();
}

void Dropdown3(int n){
  println("Item " + (n+1) + " selected from Dropdown 3");
  closeAllDropdowns();
}
```

Run the GUI, and make sure you can see your new widget in the widget dropdown menu in the upper left corner of all widgets. If you don't see it, make sure you did the above steps properly.


### Step 4 - Design your custom widget

Explore how the existing widgets are accessing data structures internal to the GUI, and see if you can make something cool!

**Some cool things to know:**

* Every widget has `x, y, w, h` variables that correspond to the left edge of the widget (horizontal pixel location), the top edge of the widget (vertical pixel location), the # of pixels wide, and the # of pixels tall, respectively. These variables update automatically when the screen is resized or when the widgets are cycled through the layout containers. When adding graphics to your widget, do everything based on these variables to ensure responsiveness.
* Aside from setting up your widget in the widgetManager.pde file, all of your code can live inside of the W_myNewWidget.pde file (if done correctly).
* To see how to access global data structures like FFT data and Time Series data, check out how the [other widgets](https://github.com/OpenBCI/OpenBCI_GUI/tree/master/OpenBCI_GUI) are accessing data in their `update()` functions
* One way that we add features such as dropdowns and radio buttons to our widgets is the [ControlP5 Library](https://github.com/sojamo/controlp5).
* To learn more about how widgets work, look at the [widget.pde](https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/Widget.pde) file. That said, I don't recommend changing anything!

### Step 5 - Add any dropdown settings to SoftwareSettings.pde
As of GUI v4, the app attempts to auto-save and auto-load user settings. Otherwise, users would need to reconfigure the GUI every time! So, if you use dropdowns in your new widget, you need to include those settings in SoftwareSettings.pde in save() and load().

There are a few details at the top of SoftwareSettings.pde that should be helpful. Just follow the style that is already in place to save and load from [JSON](https://en.wikipedia.org/wiki/JSON). Skim through the code in save() or load(), you will see settings from some of your favorite widgets. Use this as your example!

### Step 6 - Initial Testing
*Debugging*
If you've added any `println()` or `verbosePrint()` in your widget, you can use the Console Log feature to see these messages, or just look at the console in your favorite IDE.

*Screen Resized*
Some objects may need to be resized or re-positioned when the user changes the GUI screen size. This is why the widget class has the `screenResized()` method. Something not displaying right after the GUI is resized? This is where you need to add code. Typically, object x, y, width, and height are declared when the widget is instantiated, and again in `screenResized()` using relative positioning.

*Settings*
To test that everything is working, you should see the data in a settings JSON file for each data mode in the `Documents/OpenBCI_GUI/Settings/` folder. JSON files can be viewed as text. Confirm that your new JSON object and data are being written to file. Finally, confirm that the settings work properly when configuring the widget, saving, and loading.

*GUI Crash*
One of the most common ways to crash the GUI with a new widget is drawing `null` data, or some other error related to `draw()`. Another common crash is an `Exception`, which will print to the console of Atom, VSCode, or Processing IDE.


### Step 7 - Share your custom widget with the world!

If you make a functional widget that you think others could benefit from, please share it with the world by submitting a pull request to the [OpenBCI_GUI repo](https://github.com/OpenBCI/OpenBCI_GUI)!
