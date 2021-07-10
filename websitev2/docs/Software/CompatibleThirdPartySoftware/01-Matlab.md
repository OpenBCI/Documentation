---
id: Matlab
title: MATLAB
---
[MATLAB](https://en.wikipedia.org/wiki/MATLAB) is a powerful numerical computing language and environment that is widely used in a wide variety of academic, research, and industry applications.

A few Matlab toolboxes have been created specifically for working with EEG and BCI. [EEGLAB](http://sccn.ucsd.edu/eeglab/), [BCILAB](http://sccn.ucsd.edu/wiki/BCILAB), [ERPLAB](http://erpinfo.org/erplab), and [FieldTrip](http://www.fieldtriptoolbox.org/) are a few toolboxes that have helped OpenBCI users work in MATLAB.

This tutorial will walk through setting up your Matlab environment for use with OpenBCI hardware, as well as some basic uses and functionalities that Matlab offers for working with brain-computer interfaces.

## Installation

Go to the [MathWorks website](http://www.mathworks.com/help/install/ug/install-mathworks-software.html) for MATLAB installation instructions.

_Please note that MATLAB is commercial software. Licenses must either be purchased or acquired through academic or professional institutions._

Several useful MATLAB toolkits (EEGLAB, BCILAB, FieldTrip, etc) have been created for collecting and analyzing EEG data, so this tutorial will focus on using MATLAB through these toolkits.

## Loading OpenBCI Data

There are two main ways to get your OpenBCI data from the boards into MATLAB for analysis. The first is to import a CSV file from a recorded session, and the second is to use the Lab Streaming Layer (LSL) to stream the board data into MATLAB. We will go over both methods.

### Method 1: Import CSV file from the OpenBCI GUI

To get started, use your OpenBCI board (like the Cyton or Ganglion board) and the OpenBCI GUI to stream some data. Whenever you stream data to the GUI, it's also automatically saved in .csv format on your computer. GUI data and recordings are saved to _/Documents/OpenBCI_GUI/Settings/_ on all operating systems.

The OpenBCI Processing GUI saves data in text (txt) or comma separated value (csv) files. Import the CSV file into MATLAB as a matrix by using the "Import Data" wizard:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/matlab_tutorial/matlab_import_data.png?raw=true" width="80%" />

Select a saved OpenBCI data file. Once the data import screen is open, select the "Numeric Matrix" import option. Deselect all of the header rows. Also deselect the final column, the timestamp values, since the import wizard can only parse numeric values. Feel free to give your matrix a conveneint name, like "eeg_data":

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/matlab_tutorial/matlab_import_screen.png?raw=true" width="80%" />

Click "Import Selection". Your matrix should now appear as an object in your workspace! Keep reading to learn more about processing your data with MATLAB toolboxes.

### Method 2: Stream OpenBCI data via LSL

#### Stream the OpenBCI Data from the OpenBCI GUI

You can also stream live OpenBCI data into MATLAB using the Lab Streaming Layer either from the OpenBCI GUI or from Python. Here, we will go over how to import data from the OpenBCI GUI.

Open the OpenBCI GUI and "Start System" with your setup as you would do. On the widget dropdown menu select "Networking". At the right upper corner of the Networking widget there is another dropdown menu, select LSL.

<img src="https://media.giphy.com/media/Rkol8EcqWbtNEeBrH9/giphy.gif" width="80%" />

Now you can select the OpenBCI Data you want to send, the Name of the LSL stream, the data advertised by the LSL and the number of channels you will be sending. Once you select your parameters make sure to turn on your LSL stream at the bottom of the widget. Then click start and you are ready to go.

#### Import the LSL stream into MATLAB

There are two ways to import an LSL using the liblsl-Matlab library to stream into MATLAB or using the BCILAB toolbox.

##### liblsl-Matlab

Follow the instalation instructions on the [liblsb-Matlab GitHub Repo](https://github.com/labstreaminglayer/liblsl-Matlab). Once you successfully added the correct directories and files you can use the following script to stream the OpenBCI data from your LSL stream.

```Matlab

%% instantiate the library
disp('Loading the library...');
lib = lsl_loadlib();

% resolve a stream...
disp('Resolving an EEG stream...');
result = {};
while isempty(result)
    result = lsl_resolve_byprop(lib,'type','EEG'); end

% create a new inlet
disp('Opening an inlet...');
inlet = lsl_inlet(result{1});

disp('Now receiving data...');
while true
    % get data from the inlet
    [vec,ts] = inlet.pull_sample();
    % and display it
    fprintf('%.2f\t',vec);
    fprintf('%.5f\n',ts);
end

```

##### BCILAB

From the [BCILAB wiki](http://sccn.ucsd.edu/wiki/BCILAB): "BCILAB is a MATLAB toolbox and EEGLAB plugin for the design, prototyping, testing, experimentation with, and evaluation of Brain-Computer Interfaces (BCIs), and other systems in the same computational framework."

BCILAB provides a GUI from which you can control the plugin, but batch scripting can be used for those well-versed in MATLAB programming.

###### Installation

To install BCILAB, download the [development version of BCILAB](https://github.com/sccn/BCILAB/tree/devel) and extract it to any directory that is not your EEGLAB folder. Note: I found that the non-developer version (found [here](https://sccn.ucsd.edu/wiki/BCILAB#Quick_Start_Guide)) had bugs that were fixed by using the BCILAB-devel version instead.

Open up MATLAB, and set your current MATLAB directory to the unzipped BCILAB file:

```

&gt; cd your/path/to/bcilab;--&gt;

```

Once you're in the file, just type the command:

```

&gt; bcilab--&gt;

```

###### Import LSL

To start running BCILAB. After some console output, you should see the text "Welcome to the BCILAB toolbox!" and then a new GUI with the BCILAB menu should appear.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/Matlab/bcilab_menu.png?raw=true" width="80%" />

Once a stream has been started on your computer, open BCILAB within MATLAB (&gt;&gt; cd your/path/to/bcilab; bcilab) and from the menu, select **Online Analysis &gt; Read input from... &gt; Lab streaming layer...**

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/Matlab/bcilab_lsl.png?raw=true" width="80%" />

## Analyzing OpenBCI data

There are many ways in which you can use MATLAB to analyze the data from the OpenBCI board, we will go over a few common ones to get started.

### EEGLAB

From the EEGLAB wiki: "EEGLAB is an interactive Matlab toolbox for processing continuous and event-related EEG, MEG and other electrophysiological data using independent component analysis (ICA), time/frequency analysis, and other methods including artifact rejection."

#### Setup

Go to the [EEGLAB downloads page](http://sccn.ucsd.edu/eeglab/downloadtoolbox.html) and follow the instructions for your operating system.

Download the zip file of the most current version of EEGLAB and extract it into a directory on your system. Then, make this toolbox accessible from Matlab by adding a path to this directory (the steps to do this vary by OS - see the "EEGLAB downloads page" link above).

To check if EEGLAB is correctly set up, go to the Matlab prompt and type:

&gt; \&gt;&gt; eeglab

If the toolkit is not yet correctly implemented, the console should output:
"Undefined function or variable 'eeglab'."

If it is set up correctly, a pop-up window should appear with the EEGLAB GUI.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/Matlab/eeglab_gui.jpg?raw=true" width="70%" />

#### Preparing OpenBCI Datasets for EEGLAB Use

OpenBCI saves data in the opposite orientation from what EEGLAB needs. So, after importing your OpenBCI data to MATLAB as described above, perform a simple matrix transposition:

```

eeg_data = eeg_data'

```

Your data matrix is now ready to use with EEGLAB.

#### Using EEGLAB

If EEGLAB isn't already running, enter "eeglab" into the Matlab command line to start the program. Import your matrix into EEGLAB using the EEGLAB GUI: File -&gt; Import Data -&gt; Using EEGLAB functions and plugins -&gt; From ASCII/float file or Matlab array

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/Matlab/eeglab_dataimport.png?raw=true" width="80%" />

In the pop-up window that appears, enter information about the data set. Select "Matlab variable", and enter the name of the variable where your matrix is stored. Enter the Data Sampling rate (it should be commented in at the top of the txt file - usually 250 Hz by default in the OpenBCI GUI). The other fields can be left at default, and EEGLAB will automatically fill in the information from the data set.

Channel locations are useful for plotting EEG scalp maps in 2-D or 3-D format. OpenBCI uses the standard 10-20 format for the 8 and 16 channel models, which can be found within these sfp files: [8 channel](../../assets/Matlab/electrode_positions_8channel.sfp) and [16 channel](../../assets/Matlab/electrode_positions_16channel.sfp). You can then import channel data by click "Browse" next to "Channel location file or info" and locating the OpenBCI sfp file you downloaded.

The data is now imported into EEGLAB and ready to use!

#### Plotting Data in EEGLAB

To double check your data is imported correctly, and to get familiar with EEGLAB's interface, try plotting your data. Select Plot -&gt; Channel data (scroll) from the EEGLAB pop-up window.

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/matlab_tutorial/EEGLAB_plot.png?raw=true" width="50%" />

Your data should appear in a window like the image below:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/images/matlab_tutorial/EEGLAB_plot_image.png?raw=true" width="80%" />

Check out the links in the Further Reading section to learn more about processing data with EEGLAB!

#### Streaming into EEGLAB

From what we can tell, EEGLAB seems to work primarily with datasets and recorded data.

### ERPLAB

From the [ERPLAB homepage](http://erpinfo.org/erplab): "ERPLAB Toolbox is a free, open-source Matlab package for analyzing ERP data.  It is tightly integrated with EEGLAB Toolbox, extending EEGLAB’s capabilities to provide robust, industrial-strength tools for ERP processing, visualization, and analysis.  A graphical user interface makes it easy for beginners to learn, and Matlab scripting provides enormous power for intermediate and advanced users."

#### Setup

[Download](https://github.com/lucklab/erplab/releases) and extract the latest ERPLAB release to the "plugins" folder of your EEGLAB directory (if you have an old release of EEGLAB, you will also have to enter the path to this directory in MATLAB by _File &gt; Set Path_)

Next time your launch EEGLAB, the ERPLAB menu should appear in the EEGLAB GUI:

<img src="https://github.com/openbci-archive/Docs/blob/master/assets/Matlab/erplab.png?raw=true" width="70%" />

#### Analyzing EEG Data Sets

To use ERPLAB for analyzing EEG datasets, import your data set as seen in the [Using EEGLAB Section]\(#Using EEGLAB). After the EEG data is imported into EEGLAB, you can then use ERPLAB functions to analyze your data. [Read more on using ERPLAB on their website](http://erpinfo.org/erplab/erplab-documentation/manual_4/)

### FieldTrip

From the [FieldTrip homepage](http://www.fieldtriptoolbox.org/development/realtime): "The toolbox offers advanced analysis methods of MEG, EEG, and invasive electrophysiological data, such as time-frequency analysis, source reconstruction using dipoles, distributed sources and beamformers and non-parametric statistical testing."

#### Setup

[Download](http://www.fieldtriptoolbox.org/download) the latest version of FieldTrip from the download page (you will have to provide an email address and descriptiption of research).

Add the FieldTrip directory to your MATLAB path and check out FieldTrip's [getting started guide](http://www.fieldtriptoolbox.org/getting_started).

## Further Reading

[EEGLAB Wiki](http://sccn.ucsd.edu/wiki/EEGLAB)

[BCILAB Wiki](http://sccn.ucsd.edu/wiki/BCILAB)

[ERPLAB Homepage](http://erpinfo.org/erplab) and [ERPLAB Original Publication](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00213/full) in Frontiers in Human Neuroscience.

[FieldTrip Homepage](http://www.fieldtriptoolbox.org/)
