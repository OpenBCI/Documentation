---
id: EEGMotorControl
title: Control a Stepper Motor with EEG, MATLAB, and Arduino
---

:::note Attribution
This tutorial is based on the work of **Shanuj Bansal**, who presents the video series below, and **Aleksandar Haber**, who published the code repository: [Low-Cost Brain Computer Interface by Using OpenBCI Cyton Board, MATLAB, and Arduino](https://github.com/AleksandarHaber/Low-Cost-Brain-Computer-Interface-by-Using-OpenBCI-Cython-Board-MATLAB-and-Arduino). All code referenced here belongs to its authors. Please see the original repository and the four-part video series below for the full walkthrough:

- [Part 1](https://www.youtube.com/watch?v=h5Lu9OcZ8x0)
- [Part 2](https://www.youtube.com/watch?v=BOithxp_fEc)
- [Part 3](https://www.youtube.com/watch?v=Piksll8J_1s)
- [Part 4](https://www.youtube.com/watch?v=RUSvc0OKhL8)
:::

This tutorial shows how to build a low-cost bio-signal interface that turns **eye blinks** into motor movement. The [Cyton board](Cyton/02-Cyton.md) streams data from a single electrode to MATLAB over serial, MATLAB detects blinks in the signal and produces an on/off control value, and an Arduino uses that value to reverse the direction of a stepper motor.

Eye blinks appear as large, easy-to-detect peaks in a frontal electrode's signal. Strictly speaking they are an ocular artifact rather than brain activity, which makes them a reliable first control signal for a BCI project.

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: '1.5rem'}}>
  <iframe
    src="https://www.youtube-nocookie.com/embed/h5Lu9OcZ8x0"
    title="Part 1: Low-Cost Brain-Computer Interface by Using OpenBCI Headset"
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

_Video: Part 1 of the series, which introduces the headset and shows blink detection in the OpenBCI GUI._

## What do I need?

- An OpenBCI [Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel) and its USB dongle
- A way to wear the electrodes. The author uses the [Ultracortex Mark IV](https://shop.openbci.com/products/ultracortex-mark-iv) headset, with one active electrode on Cyton channel 2 and reference electrodes clipped to the ears. Any setup that holds one electrode and a reference in place will work.
- [MATLAB](https://www.mathworks.com/products/matlab.html)
- An [Arduino](https://www.arduino.cc/) board and the [Arduino IDE](https://www.arduino.cc/en/software)
- A stepper motor, a stepper motor driver, a power supply for the motor, and a breadboard
- A potentiometer _(optional, used in the video to set motor speed)_

## Helpful Background Skills

- Basic MATLAB scripting
- Arduino or C-based programming
- Familiarity with the [Cyton Data Format](Cyton/03-Cyton_Data_Format.md)

## How it works

1. **Acquire** - MATLAB opens the Cyton dongle's serial port directly, with no OpenBCI GUI involved. It sends `v` to soft-reset the board, then `b` to start the binary data stream (and `s` to stop it). See the [Cyton SDK](Cyton/04-OpenBCI_Cyton_SDK.md) for the full command list.
2. **Process** - MATLAB reads packets, decodes the 24-bit value for channel 2 (see the [Cyton Data Format](Cyton/03-Cyton_Data_Format.md)), and converts counts to volts using the default gain of 24x. Each loop it averages a batch of packets, removes the linear trend (`detrend`), smooths with a 2-sample moving mean (`movmean`), and runs a 2-sample moving variance (`movvar`). A blink shows up as a sharp variance peak; otherwise the variance stays near zero.
3. **Decide** - The variance is compared to a threshold chosen by eye, producing a 0 (no blink) or 1 (blink).
4. **Actuate** - MATLAB sends the value to the Arduino over a second serial port, and the Arduino reverses the stepper motor's direction.

## Step 1 - Get the code

Download or clone the [author's repository](https://github.com/AleksandarHaber/Low-Cost-Brain-Computer-Interface-by-Using-OpenBCI-Cython-Board-MATLAB-and-Arduino). It contains:

| File | Purpose |
|---|---|
| `conn_ard.m` | Tests the MATLAB-to-Arduino link by sending a motor command |
| `matlab_cython.m` | Streams and plots EEG from the Cyton, with no motor control |
| `final_project.m` | The complete loop: EEG in, motor command out |
| `sketch_nov26a.ino` | Arduino sketch that receives commands and drives the motor |

## Step 2 - Upload the Arduino sketch

Open the sketch in the Arduino IDE, select your board and port under **Tools**, and upload it.

In the video, the sketch listens on the serial port at 9600 baud for short text commands ending in `>`, for example `1123>`:

- The first character is the direction flag: `1` reverses the motor and `0` leaves it unchanged.
- The next three characters are meant for a step count, but the author notes this isn't implemented yet. The final project fills them with the placeholder `123`.
- `>` marks the end of the command.

On the Arduino side, the video wires the motor driver's pulse input to pin 7 and its direction input to pin 6, with an optional potentiometer on `A0` setting the pulse delay (and so the speed). Check these against the sketch in the repository and your own driver's wiring before powering the motor.

## Step 3 - Set your serial ports

The example scripts use macOS-style port names. Replace them with your own:

- **Arduino port** - the one shown in the Arduino IDE under **Tools > Port** (for example `COM3` on Windows or `/dev/cu.usbmodem101` on macOS). The scripts use 9600 baud.
- **Cyton port** - the Cyton dongle's port (see [Cyton Getting Started](Cyton/02-Cyton.md)). The scripts use 115200 baud.

## Step 4 - Test each half separately

1. Run `conn_ard.m` and confirm the motor responds.
2. Run `matlab_cython.m` and confirm you see the raw, detrended, and filtered EEG plots.

## Step 5 - Run the full loop

Place your electrode and ear references, then run `final_project.m`. Each blink reverses the motor's direction.

:::caution
The threshold in `final_project.m` is a fixed value the author picked by eye from the variance plot for their own setup. Expect to adjust it for your electrode placement, skin contact, and environment. Run `matlab_cython.m` first and look at the variance plot while blinking to choose a value.
:::

:::tip
The author recommends running the final script section by section from the MATLAB editor, so the Arduino serial connection isn't closed before you're finished.
:::

## Video Tutorials

The author's four-part series explains the code line by line:

- [Part 1](https://www.youtube.com/watch?v=h5Lu9OcZ8x0)
- [Part 2](https://www.youtube.com/watch?v=BOithxp_fEc)
- [Part 3](https://www.youtube.com/watch?v=Piksll8J_1s)
- [Part 4](https://www.youtube.com/watch?v=RUSvc0OKhL8)

## Troubleshooting

- **Port errors in MATLAB** - Close any other program using the port (including the OpenBCI GUI) and run `instrfindall` to find and close stale connections.
- **No EEG data** - Check the dongle's switch position and that the Cyton is powered on. See [Troubleshooting](Troubleshooting/00-TroubleshootingLanding.md).
- **Motor does not move** - Run `conn_ard.m` on its own to isolate the Arduino side.
