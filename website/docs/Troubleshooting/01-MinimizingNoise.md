---
id: minimizingNoise
title: Minimizing Noise
---

Are you getting "noisy" data from your device? There are several possible reasons for this. Let's go through some simple troubleshooting steps that resolve most issues.

#### Filter Out AC Noise

Use the OpenBCI GUI’s built-in notch filter to remove 60 Hz (or 50 Hz, depending on your country’s power grid) interference from your signal. Adjust the notch filter by clicking the **Filters** button next to **Start/Stop Data Stream** and selecting the appropriate option from the dropdown list. To further reduce AC noise, keep your board away from power cords or devices plugged into wall outlets, as these can introduce additional interference.

![Notch Filter](../assets/GettingStartedImages/filters_UI.PNG)

#### Stabilize your electrodes

Make sure your electrode cables are steady. If you shake the electrodes that are dangling from your head or body, you'll notice that it severely affects the signals. This movement noise can be greatly improved with active electrodes. When using the passive electrodes that come with the OpenBCI electrode starter kit, you have to be very careful to remain steady while using the system to produce the best signal. As a quick fix, binding all of the electrode cables together with a piece of electrical tape secures them and minimizes cable movement. It is not as important to include any EMG/ECG channels in the bundle, since movement noise doesn't affect their signal as significantly.

![Stabilize Your Cables w/ Tape](../assets/GettingStartedImages/secureCables.JPG)

#### Ensure that your electrodes are securely connected

Ensure that your electrodes are connected securely (especially your reference)!

#### Make sure your OpenBCI hardware is streaming data properly

Occasionally, an error will occur with the wireless communication between your OpenBCI Dongle and board. If you've followed all of the steps above and the data you are seeing in the GUI interface is still illegible, try the following:

1. Power down your board and unplug your USB Dongle.
2. Plug your USB Dongle back in and power up your board, in that order.
3. Restart the GUI and start a new session.

#### Check Cyton - GUI connection

1. Open the GUI application and select **Cyton**.
2. Select the **Manual** option.
3. Unplug your dongle and select **Refresh** on the port selection.
4. Plug the dongle back in and select **Refresh** once again.
5. Select the serial port number (so that it's highlighted green).
6. Select channel 20 within the "OVERRIDE DONGLE" dropdown.
7. Press "SYSTEM STATUS" and you should see "SUCCESS - HOST AND DEVICE ON CHANNEL 20".
8. Hit "START SESSION".

#### General tips for reducing noise (Cyton and Ganglion boards):

- Plug the dongle into a USB hub or USB extension cord, such this [model](https://a.co/d/dwsweYF). This limits radio interference caused by computers.
- Toggle on the filters in the OpenBCI GUI
- Use the feet that came with the board
- Use a fully charged battery
- Turn off bluetooth devices in the room
- Sit slightly away from the computer
- Use the FTDI fix for [Windows](https://docs.openbci.com/Troubleshooting/FTDI_Fix_Windows/) or [Mac](https://docs.openbci.com/Troubleshooting/FTDI_Fix_Mac/)

:::caution Additional Sources of Noise

- AC power or extension cables on the floor
- Conduits inside walls, floors or ceilings
- Nearby wifi or cellular equipment
- Laptop and desktop computers that have certain 'ground loop' or AC noise characteristics
- Metal desks or other large metal objects nearby
- LED, CFL or fluorescent lighting
  :::

#### Further troubleshooting

If you are still having issues, refer to the [Forum](https://openbci.com/forum/) for further troubleshooting techniques.
