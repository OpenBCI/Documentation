# GUI Widget Guide
## What is a GUI Widget
GUI widgets are the mini tools that fit into the OpenBCI GUI’s interface panes. Examples of GUI widgets include the Time Series, the FFT widget, the Networking widget, and so on. In the upper left hand corner of every widget there is a dropdown menu that lists all of the available widgets. If you click the dropdown and select a new widget from the dropdown, it will replace the current widget in that window. You can rearrange the layout of the widgets by clicking the “Layout” button in the upper right-hand side of the GUI.


## Time Series
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_TimeSeries.jpg?raw=true" width="50%">

The time series is the most basic widget to record biosensing data. It processes and displays the electrophysiological signal in real time, with each line representing the voltage detected at one point in time by an electrode.

It measures the absolute amplitude of the signal in voltage, in units of μVrms (microvolts, root mean squared).

Each ultracortex comes with wires that are color coded to match the GUI, which can be a useful way of keeping track of which electrode maps to which channel.

### Hardware Settings: 

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_HardwareSettings.png?raw=true" width="50%">

The Time Series widget opens a menu that allows you to fine tune the PGA Gain, Bias, and other hardware settings for each channel.

### Other Settings:

**Channel Buttons**: These buttons represent each connected electrode channel. You can toggle them on/off to control whether or not you want to collect data from that electrode.

**View Settings**:

*Vertical Scale* — Controls the range of μV displayed in the time series. 
Note: Set to auto to avoid chopping off data and showing good peaks and troughs. Fine tune as necessary.

*Window* — Shows the amount of time that is shown in the series.

**Railed/Near Railed Warnings**:
These warnings show that there is no or poor signal, and that you need to check the electrodes to ensure that they are making good contact with your body.

**Impedance Check**
Sends a test current down the pin to check impedance. Information is given in kΩ.
Note: Data will stop streaming automatically for the duration of the check.

## FFT Plot
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_FTT.jpg?raw=true" width="50%">

This is a standard data visualization feature of biosensing tools. The x axis displays various frequencies, and the y-axis shows each frequency’s respective amplitudes in μV.  These amplitudes are displayed logarithmically by default — a reccommended setting — but you can alter this in the log/ln dropdown.

*Note: Each color in the FFT Plot is color coded to match the channels in the time series.*

## Accelerometer
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_Accel.jpg?raw=true" width="50%">

Each OpenBCI board is fitted with a three-axis accelerometer, the data from which is streamed to this widget. This accelerometer measures the acceleration of the board itself on an xyz-axis.

**Axis Graph**: Displays relative xyz-acceleration at the current moment visually on a graph

**Timeline**: Displays relative xyz accelerations over time, color coded by axis.

## Head Plot
The head plot displays which regions of the head are experiencing the most activity. The deeper the red in a region, the more brain activity there is occuring in that region.  Contour lines are also shown in order to connect various regions of similar activity levels.

Each number on the digram corresponds to an electrode channel displayed in the time series widget. These numbers  correspond with the suggested assembly for the Ultracortex Mark IV, however each can be dragged to different locations for custom configurations.

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


\* P7 and P8 are the new terminology for nodes T5 and T6

### Polarity
When compared to a reference, the pin inputs can produce a positive or negative value. Choosing "+/-" will display the true value as measured from the reference. So if the voltage is measured as lower than the reference, your value will appear negative (or blue), and if the voltage is measured to be higher the value will be positive. 

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_Headplot_both.jpg?raw=true" width="50%">

Alterntively, "+" will display only an absolute value, without regard to whether the signal was positive or negative.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_Headplot_pos.jpg?raw=true" width="50%">

## Focus Widget
The widget recognizes a focused mental state by looking at alpha and beta wave levels on channel 1 & 2. It is based on research supporting focused states aligning with alpha levels between 0.7-2.0 μV, and the beta levels between 0.0-0.7 μV. If your data is outside of this ratio, the algorithm states that you are not focused.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_Focus.jpg?raw=true" width="50%">

*For best results, try setting smooth to 0.98 in the FFT plot.

**Key Press**: When KeyPress is on, you can perform tasks and whenever you are focused, either your UP arrow or SPACE key will be pressed. Otherwise, it will be released.

**W_Focus Folder**: This folder contains the original data the focus widget was based on, and materials (including an example and instructions) regarding Arduino output.

## Band Power
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_BandPower.jpg?raw=true" width="50%">

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
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_EMG.jpg?raw=true" width="50%">

In a nutshell, we are trying to map the current flex of a muscle into the “comfortable flex range” of said muscle, and then represent that as a decimal between 0 and 1. In theory, if you relax, the value will be 0, and if you flex, the value will go to 1. 

The current EMG strength is a collection of raw voltage values averaged (or smoothed) over a known window of time. The bigger the window your averaging over, the smoother the data. We establish an upper threshold (the outer dark blue circle of the circular visualizer) and a lower threshold (the inner dark blue circle) for the constantly updating “comfortable EMG range.” Then we’re mapping the current EMG (the filled circle that matches the color of the channel) value between the upper and lower thresholds. 

This pseudo-analog mapped value is represented more clearly in the bar graph off to the right of each channel’s circular visualizer. The upper threshold is constantly creeping downwards and lower threshold is constantly creeping upwards until they get the Min ΔμV away from one another. This ensures that the overall system never creates an upper/lower flex range that is too big to influence with a muscle flex. 

### Options
The drop-downs of the widget are designed to allow you to tweak the various parameters of this relationship. There are 4 drop-downs giving us control over 4 parameters:

**Smooth**: This is the size of the window. If we set this value at the smallest setting of 0.01 seconds (ie., lowering the smooth value), our data will be very jittery but responsive. Alternatively, if we increase the smooth and set our window to 2.0 seconds, the output will be very smooth but much less responsive. 

**μV Limit**: This is a cutoff point for an allowable μV value in any individual data block. Any μV values above this number will be chopped off, and set to this upper μV limit. This is to prevent erratic blips in the data from substantially distorting the average. Sometimes dropped packets and rapid body movements can create large spikes that don’t correlate to muscle activity. This helps account for those issues. 

**Creep**: This value indicates how quickly the upper μV limit creeps downward and how quickly the lower limit creeps upward. Notice that by adjusting this value, the upper threshold and lower threshold rings will approach each other more quickly. We generally recommend this to be slow. If this is too fast and we wait too long between muscle activations, the upper threshold will have crept very close to the lower threshold and the system will be hyper sensitive.

**Min ΔμV**: This value sets the minimum voltage range between the upper threshold and lower threshold. The upper threshold and lower threshold cannot get any closer than this. By making this value bigger, you will have to flex harder to go from 0 to 100% flex, after the thresholds have crept as close as they will get to one another (aka Min ΔμV).

## Networking
The networking widget allows the streaming of data to other apps. It offers four data types: Serial, UDP, OSC, and LSL. To see how it can be used with our different apps, check out our [Third Party Software page](https://docs.openbci.com/3rd%20Party%20Software/00-3rdPartySoftware).

### Serial

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_Serial.png?raw=true" width="70%">

Offers streaming of one data type. The data is sent sequentially, bit by bit, in consecutive packets. Serial is the main networking protocol that can be used when using OpenBCI with Arduino.

**Baud Rate**: The rate of data transfer in bits per second. This should correspond with the chosen baud rate for the receiving application.

**Port**: The port of the receiving device. For Arduino, for example, this will likely be "usbmodem" with a serial number attached.

### UDP

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_UDP.png?raw=true" width="70%">

User Datagram Protocol is used primarily for establishing low-latency and loss-tolerating connections between applications on the internet. The UDP protocol allows for up to three different data sets to be sent to three different applications.


### LSL

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_LSL.png?raw=true" width="70%">

Lab Streaming Layer is a system for synchronizing streaming data for live analysis or recording. LSL is a good way to send your OpenBCI stream to applications that can record or manipulate the data, such as [Matlab](https://docs.openbci.com/3rd%20Party%20Software/01-Matlab).

### OSC

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_OSC.png?raw=true" width="70%">

Open Sound Control is a protocol for networking sound synthesizers, computers, and other multimedia devices for purposes such as musical performance or show control. OSC's advantages include interoperability, accuracy, flexibility and enhanced organization and documentation.

OSC works with MaxMSP, PureData, and Resolume.

## Playback Widget
<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/GUI_PlaybackHistory.png
?raw=true" width="70%">

This Widget only appears when in playback mode. It allows you to select a different playback without having to “Stop System”. There is a button in the top right of the Widget that allows you to select any OpenBCI playback file (.txt or .csv). Selecting other types of files may cause an error.

## Custom Widget

If your project requires additional data manipulatrion, we have also made it possible for you to create your own personalized widgets for whatever purposes you may require! To learn how, see the custom widget tutorial [here](https://docs.openbci.com/Tutorials/16-Custom_Widgets).
