---
id: FTDI_Fix_Linux
title: FTDI Buffer Fix on Linux
---
### Summary

This tutorial has been verified to work with the following Linux versions:

-   Ubuntu 18.04

### Step 1: Make sure FTDI driver is installed

Make sure that the FTDI driver has been installed and you can connect to the Cyton.

### Step 2: Open latency_timer file

Using file manager, open the `latency_timer` file. Found at:

```

/sys/bus/usb-serial/devices/ttyUSB0/latency_timer

```

where `ttyUSB0` is the serial port name for the OpenBCI dongle.

### Step 3: Change 16 to 1

The `latency_timer` should contain `16` by default. Change this to `1`, and you're done!

### Step 4: Test OpenBCI GUI or BrainFlow

Run the OpenBCI GUI or a BrainFlow binding, and you should see smoother data.
