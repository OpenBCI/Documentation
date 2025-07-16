---
id: Pulse_Sensor_Landing
title: Pulse Sensor Guide
---

The Pulse Sensor can be connected to the [Cyton](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel) or any Arduino board to easily obtain your heart rate using a [photoplethysmogram (PPG)](https://en.wikipedia.org/wiki/Photoplethysmogram).

The basic principles are the same no matter what board you're connecting the Pulse Sensor to.
The Pulse Sensor has three leads, as shown below.

![pulse_sensor](../../assets/ThirdPartyImages/pulse_sensor.png)

RED wire (+) = +3V to +5V
BLACK wire (-) = GND
PURPLE wire (S) = Signal in milli- or microvolts

The Pulse Sensor takes power from the board via the red wire.

The OpenBCI GUI app has a built-in Pulse Sensor widget. You can download the latest GUI [here](https://github.com/OpenBCI/OpenBCI_GUI/releases).

## Cyton Pulse Sensor

Set up your Cyton according to its [Getting Started Guide](../../GettingStarted/Boards/01-Cyton_Getting_Started_Guide.md).
You only need the GUI, Pulse Sensor kit, Cyton, Cyton dongle, and battery pack.

![pulse sensor cyton](../../assets/ThirdPartyImages/Pulse_sensor_cyton.jpg)

The connections are circled above.
The red Pulse Sensor cable goes to the DVDD header on the Cyton, black to GND (right next to DVDD), and purple to D11.
This D11 is read as analog pin A5 and sent in the first Aux data slot. The Pulse Sensor data will be pre-processed in the [Pulse Sensor widget](../../Software/OpenBCISoftware/02_GUI_Widget_Guide.md#pulse-widget). When you download the OpenBCI GUI, the Pulse Sensor widget is pre-packaged in it.

The connections are circled above.

| Pulse Sensor Wire Color | Cyton Board Header | Function              |
| ----------------------- | ------------------ | --------------------- |
| red                     | DVDD               | power                 |
| black                   | GND                | ground                |
| purple                  | D11                | Analog input (signal) |

Red pulse sensor cable goes to DVDD header on the Cyton, black to GND (right next to DVDD), and purple to D11.

After you have set up your hardware and software using the above steps, secure the Pulse Sensor to your finger using the Velcro strap and Velcro dots, or secure it to your earlobe using the included ear clip.
PPG data can be obtained from the finger or the earlobe (due to good blood flow and thin skin, respectively).

When running the GUI, select the Pulse Sensor widget option from the dropdown menu, then hit 'Analog Read On.' Then go to another pane of the GUI and select 'Analog Read' from the dropdown menu. The Pulse Sensor widget will display your pulse data, and the Analog Read widget displays data from analog input A5, A6, and A7. Since you connected the purple wire of the Pulse Sensor to the D11 header, the data will show up in the A5 channel of the Analog Read Widget.

<!--
## Ganglion Pulse Sensor

Read the Ganglion [Getting Started Guide](../../GettingStarted/Boards/02-Ganglion_Getting_Started_Guide.md)
You need the GUI, pulse sensor kit, Ganglion, Ganglion dongle, and battery pack.

![pulse sensor ganglion](../../assets/ThirdPartyImages/Pulse_sensor_ganglion.jpg)

The connections are circled above.

| Pulse Sensor Wire Color | Ganglion Board Header | Function       |
| ----------------------- | --------------------- | -------------- |
| red                     | DVDD                  | power          |
| black                   | GNDA                  | ground         |
| purple                  | pin 1,2,3, or 4       | input (signal) |

Red pulse sensor cable goes to DVDD on the Ganglion, black to GNDA (right next to DVDD), and purple to any single pin 1,2,3, or 4. The single-channel data will show up in the GUI's Time Series Widget.
//

Any unused / unconnected channels should be turned OFF in the GUI. Press the colored channel button in the Time Series to toggle on/off status.

After you have set up your hardware and software using the above steps,
Please scroll through the [general guide](https://www.generationrobots.com/media/DetecteurDePoulsAmplifie/PulseSensorAmpedGettingStartedGuide.pdf) to learn how to secure the pulse sensor to your finger.

- When running the GUI, select the pulse sensor widget option from the dropdown menu, then hit 'Analog Read On, then go to another pane of the GUI and select 'Analog Read' from the dropdown menu. The pulse sensor widget will display your pulse data, and the Analog Read widget displays data from analog inputs A3, A4, and A6. Since you connected the purple wire of the pulse sensor to the A3 header, the data will show up in the A3 channel of the Analog Read Widget.-
-->

## Troubleshooting

Running into trouble? Consult the OpenBCI Tech support [Forum](https://openbci.com/forum).

For cyton-pulse sensor posts: [here](https://openbci.com/forum/index.php?p=/discussion/1527/pulse-sensor-with-cyton-daisy).

You can find all relevant posts by using our site-specific [Google Search Function](https://www.google.com/advanced_search?q=site:openbci.com).
