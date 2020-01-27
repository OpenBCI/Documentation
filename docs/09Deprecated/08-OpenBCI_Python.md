---
id: Python
title: Python and OpenBCI
---


**THIS DOCUMENT HAS BEEN DEPRECATED. PLEASE REFER TO ["FOR DEVELOPERS"](11ForDevelopers/01-SoftwareDevelopment.md) SECTION FOR INFORMATION ON [BRAINFLOW-PYTHON](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#python).**


OpenBCI has a Python software library designed to work with OpenBCI hardware. To use it, download our OpenBCI Python github repository: https://github.com/OpenBCI/pyOpenBCI. This Python code is meant to be used by people familiar with Python and programming in general. Its purpose is to allow for programmers to interface with OpenBCI technology directly, both to acquire data and to write programs that can use that data in a live setting, using Python.The OpenBCI-Python repo is still live but it is not longer being mantained by OpenBCI.

Please direct any questions, suggestions and bug reports to the [github repo](https://github.com/OpenBCI/pyOpenBCI) as well.

# pyOpenBCI

This repo has been designed to be a more beginner friendly version of the [OpenBCI-Python](https://github.com/OpenBCI/OpenBCI_Python) repo. If there is anything you think we should add please open an issue.

Using this repo provides a building block for developing with Python. The goal for the Python library is to ***provide a stable Python driver for all OpenBCI Biosensors***, that:

* Allows Python users to install one module and use any board they choose
* Provides examples of using Python to port data to other apps like lab streaming layer
* Performs the heavy lifting when extracting and transforming raw binary byte streams
* Provides a base for the beginner users to use Python to process their OpenBCI data

## To Do
* Add Ganglion Aux Data

## Requirements

* Python 2.7 or 3.4+
* Currently the Cyton works on Windows, Linux, and MacOS.
* Ganglion works on Linux only (Linux VM with enabled Bluetooth works as well).
* The WiFi shield is known to have reliability issues across different computer configurations. Using it effectively requires advanced technical skills and programming knowledge. Note that the code avaiable here has not been tested accross all platforms.

## Installation
First, make sure you have the necessary dependencies.

```python
pip install numpy pyserial bitstring xmltodict requests
```

Linux users may need `bluepy` also.

Then you can use pip to install the OpenBCI module.

```python
pip install pyOpenBCI
```

Once installed, try running the examples provided to make sure you can connect to your OpenBCI board.

## Important notes

Currently the Ganglion board can only be used with a Linux OS. The WiFi shield is known to have reliability issues across different computer configurations. Using it effectively requires advanced technical skills and programming knowledge. Note that the code avaiable here has not been tested accross all platforms.

### Getting Started

First you need to initialize your board with one of the following commands:

#### For Cyton board:

```python
# For Windows replace '*' with the port number
board = OpenBCICyton(port='COM*')

# For MacOS and Linux replace '*' with the port number
board = OpenBCICyton(port='/dev/ttyUSB*')
```

To find the COM port you are connected to you can use the OpenBCI GUI. Otherwise you can leave the port number as None, and the function find_port() will run and connect to the first Cyton Dongle it finds.

#### For Cyton + Daisy:

```python
# For Windows replace '*' with the port number
board = OpenBCICyton(port='COM*', daisy=True)

# For MacOS and Linux replace '*' with the port number
board = OpenBCICyton(port='/dev/ttyUSB*', daisy=True)
```

To find the COM port you are connected to you can use the OpenBCI GUI. Otherwise you can leave the port number as None, and the function find_port() will run and connect to the first Cyton Dongle it finds.

#### For Ganglion:

```python
# For Linux replace '*' with the mac address.
board = OpenBCIGanglion(mac='*')
```
If you need to find the Ganglion mac address you can use an app like [nRF connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) to find the ganglion. Otherwise you can leave the mac address as None, and the function find_mac() will run (NOTE: You will need to run the script with sudo for this function to work).

#### For Wifi Shield:

```python
board = OpenBCIWifi(shield_name='OpenBCI-2254', sample_rate=200)
```

### Sending commands

Once you initialize the board you can use the commands on the OpenBCI SDKs ([Ganglion](03Ganglion/06-OpenBCI_Ganglion_SDK.md), [Cyton](02Cyton/04-OpenBCI_Cyton_SDK.md), [Wifi Shield](05ThirdParty/03-WiFiShield/08-OpenBCI_Wifi_SDK.md)) to send commands to the board using python (make sure your commands are strings).

```python
# Write commands to the board
board.write_command(command)
```

Here is a table of the most common ones:

|                               | Ganglion SDK | Cyton SDK       | Cyton & Daisy SDK (Additional Commands) | Wifi Shield SDK (Additional Commands)                                                                                                                                    |
|-------------------------------|--------------|-----------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Turn Channels OFF             | 1 2 3 4      | 1 2 3 4 5 6 7 8 | q w e r t y u i                         |                                                                                                                                                                          |
| Turn Channels ON              |              | ! @ # $ % ^ & * | Q W E R T Y U I                         |                                                                                                                                                                          |
| Connect to internal GND       |              | 0               |                                         |                                                                                                                                                                          |
| Enable Synthetic Square Wave  | [            | [               |                                         |                                                                                                                                                                          |
| Disable Synthetic Square Wave | ]            | ]               |                                         |                                                                                                                                                                          |
| Connect to DC Signal          |              | p               |                                         |                                                                                                                                                                          |
| Set Channels to Default       |              | d               |                                         |                                                                                                                                                                          |
| Start Streaming Data          | b            | b               |                                         |                                                                                                                                                                          |
| Stop Streaming Data           | s            | s               |                                         |                                                                                                                                                                          |
| Soft Reset                    | v            | v               |                                         | ;                                                                                                                                                                        |
| Enable Accelerometer          | n            |                 |                                         |                                                                                                                                                                          |
| Disable Accelerometer         | N            |                 |                                         |                                                                                                                                                                          |


### Initializing Stream

To start your stream you can use the following command with a callback function. You can look at the examples folder for some pre-written callback functions.

```python
# Start stream
board.start_stream(callback)
```
The output of the start_stream function is the OpenBCISample on the callback function. The OpenBCISample object has the following attributes:

* packet_id = The ID of the incomming packet.
* channels_data = The raw EEG data of each channel. 4 for the Ganglion, 8 for the Cyton, and 16 for the Cyton + Daisy.
* aux_data = Accelerometer data.

Because the channels_data and aux_data is the raw data in counts read by the board, we need to multiply the data by a scale factor. There is a specific scale factor for each board:

#### For the Cyton and Cyton + Daisy boards:

Multiply uVolts_per_count to convert the channels_data to uVolts.

```python
uVolts_per_count = (4500000)/24/(2**23-1) #uV/count
```
Multiply accel_G_per_count to convert the aux_data to G.

```python
accel_G_per_count = 0.002 / (2**4) #G/count
```
#### For the Ganglion Board

Multiply Volts_per_count to convert the channels_data to Volts.

```python
Volts_per_count = 1.2 * 8388607.0 * 1.5 * 51.0 #V/count
```
Multiply accel_G_per_count to convert the aux_data to G.

```python
accel_G_per_count = 0.032 #G/count
```

#### For the Wifi Shield

The Wifi Shield already outputs the data in Volts and the aux data in G.

### Example (Print Raw Data)

To test this example, use `py Examples\print_raw_example.py` or `python Examples\print_raw_example.py`.

```python
from pyOpenBCI import OpenBCICyton

def print_raw(sample):
    print(sample.channels_data)

board = OpenBCICyton(port='COM5', daisy=False)

board.start_stream(print_raw)

```

### Example (Simple LSL Streamer)

To run this example, use `py Examples\lsl_example.py` or `python Examples\lsl_example.py`.

```python

from pyOpenBCI import OpenBCICyton
from pylsl import StreamInfo, StreamOutlet
import numpy as np

SCALE_FACTOR_EEG = (4500000)/24/(2**23-1) #uV/count
SCALE_FACTOR_AUX = 0.002 / (2**4)


print("Creating LSL stream for EEG. \nName: OpenBCIEEG\nID: OpenBCItestEEG\n")

info_eeg = StreamInfo('OpenBCIEEG', 'EEG', 8, 250, 'float32', 'OpenBCItestEEG')

print("Creating LSL stream for AUX. \nName: OpenBCIAUX\nID: OpenBCItestEEG\n")

info_aux = StreamInfo('OpenBCIAUX', 'AUX', 3, 250, 'float32', 'OpenBCItestAUX')

outlet_eeg = StreamOutlet(info_eeg)
outlet_aux = StreamOutlet(info_aux)

def lsl_streamers(sample):
    outlet_eeg.push_sample(np.array(sample.channels_data)*SCALE_FACTOR_EEG)
    outlet_aux.push_sample(np.array(sample.aux_data)*SCALE_FACTOR_AUX)

board = OpenBCICyton(port='COM5', daisy=False)

board.start_stream(lsl_streamers)

```
### Who are we?

The founder of the OpenBCI Python repository is Jermey Frey. The Python driver is one of the most popular repositories and has the most contributors!

The contributors to these repos are people using Python mainly for their data acquisition and analytics.

### Contact us

If you want to report a problem or suggest an enhancement we'd love for you to [open an issue](../../issues) at this github repository because then we can get right on it.


### Glossary

OpenBCI boards are commonly referred to as _biosensors_. A biosensor converts biological data into digital data.

The [Ganglion][link_shop_ganglion] has 4 channels, meaning the Ganglion can take four simultaneous voltage readings.

The [Cyton][link_shop_cyton] has 8 channels and [Cyton with Daisy][link_shop_cyton_daisy] has 16 channels.

Generally speaking, the Cyton records at a high quality with less noise. Noise is anything that is not signal.

### Thank you

Thank you so much (Danke schön! Merci beaucoup!) for visiting the project and we do hope that you'll join us on this amazing journey to make programming with OpenBCI fun and easy.

### License

MIT

[link_shop_wifi_shield]: https://shop.openbci.com/collections/frontpage/products/wifi-shield?variant=44534009550
[link_shop_ganglion]: https://shop.openbci.com/collections/frontpage/products/ganglion-board
[link_shop_cyton]: https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel
[link_shop_cyton_daisy]: https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel
[link_nodejs_cyton]: https://github.com/openbci/openbci_nodejs_cyton
[link_nodejs_ganglion]: https://github.com/openbci/openbci_nodejs_ganglion
[link_nodejs_wifi]: https://github.com/openbci/openbci_nodejs_wifi
[link_javascript_utilities]: https://github.com/OpenBCI/OpenBCI_JavaScript_Utilities
[link_openbci]: http://www.openbci.com
