---
id: minimizingNoise
title: Minimizing Noise
---

Are you getting "noisy" data from your device? There are several possible reasons for this. Let's go through some simple troubleshooting steps that resolve most issues.

#### Get rid of AC noise

Get rid of 60 Hz (or 50 Hz if you're in Europe or any country that operates on a 50 Hz power grid). The OpenBCI has a built-in notch filter that does a decent job at eliminating 60 Hz noise. You can adjust the notch filter to 50 Hz by clicking the "Notch 60 Hz" button. Additionally, if your Cyton board is on a table with any power cords or devices that are plugged into a wall outlet, move it to a location away from any electronic devices plugged into the wall. This will drastically reduce the alternating current (AC) influence on your signal.

![Notch Filter](../assets/GettingStartedImages/notch_bar.png)

#### Stabilize your electrodes

Make sure your electrode cables are steady. If you shake the electrodes that are dangling from your head/body, you'll notice that it severely affects the signals. This movement noise is something that could be greatly improved with "active" electrodes. When using the "passive" electrodes that come with the OpenBCI electrode starter kit, you have to be very careful to remain steady while using the system to produce the best signal. As a quick fix, binding all of the electrode cables together with a piece of electric tape secures them and minimizes cable movement. If you do this, don't worry about including the blue and green electrodes in the bundle, since movement noise doesn't affect the EMG/EKG signal as significantly.

![Stabilize Your Cables w/ Tape](../assets/GettingStartedImages/secureCables.JPG)

#### Ensure that your electrodes are securely connected

Ensure that your electrodes are connected securely (especially your reference)!

#### Make sure your OpenBCI hardware is streaming data properly

Every so often, an error will occur with the wireless communication between your OpenBCI Dongle and board. If you've followed all of the steps above, and the data that you are seeing in the GUI interface is still illegible, try the following:

1. Power down your Cyton board and unplug your USB Dongle.
2. Then, plug back in your USB Dongle and power up your Cyton board in that order. 
3. Last, try restarting the system by pressing the `START SYSTEM` button again.

#### Check Cyton - GUI connection
1. Open the GUI application and select Cyton
2. Select the 'manual' option
3. Unplug your dongle and select 'refresh' on the port selection
4. Re-plug the dongle and select 'refresh' once again
5. Select the serial port number (so that it's highlighted green)
6. Hit 'AUTO-SCAN'
 
#### General tips for reducing noise (Cyton and Ganglion boards):
* Plugging the dongle into a hub rather than directly into the computer’s USB port
* Toggling on the filters built into the GUI (above the Time Series widget)
* Using the feet that came with the board
* Using a fully charged battery
* Sitting slightly away from the computer
* Using the FTDI fix for [Windows](https://docs.openbci.com/Troubleshooting/FTDI_Fix_Windows/) or [Mac](https://docs.openbci.com/Troubleshooting/FTDI_Fix_Mac/)

:::caution Additional Sources of Noise
Metal desks or other large metal objects nearby; LED or CFL or fluorescent lighting, which contains switching power supplies; his LED helmet power supply; other power supplies on the walls, floors; AC power or extension cables on the floor, conduits inside walls or floors or ceilings; nearby wifi or cellular equipment some of these mounted on rooftops; laptop and desktop computers that have certain 'ground loop' or AC noise characteristics; setting the OpenBCI circuit board near any such noise sources.
:::


#### Further troubleshooting

If you are still having issues, refer to the [Forum](https://openbci.com/forum/) for further troubleshooting techniques.
