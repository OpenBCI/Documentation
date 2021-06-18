---
id: minimizingNoise
title: Minimizing Noise
---
If your current setup isn't getting you clean data, there are a number of possible reasons for this. We'll go through troubleshooting them here.

![Notch Filter](assets/GettingStartedImages/notch_bar.png)

#### Get rid of AC noise

Get rid of 60 Hz (or 50 Hz if you're in Europe or any country that operates on a 50 Hz power grid). The OpenBCI has a built-in notch filter that does a decent job at eliminating 60 Hz noise. You can adjust the notch filter to 50 Hz by clicking the "Notch 60 Hz" button. Additionally, if your Cyton board is on a table with any power cords or devices that are plugged into a wall outlet, move it to a location away from any electronic devices plugged into the wall. This will drastically reduce the alternating current (AC) influence on your signal.

![Stabilize Your Cables w/ Tape](assets/GettingStartedImages/secureCables.JPG)

#### Stabilize your electrodes

Make sure your electrode cables are steady. If you shake the electrodes that are dangling from your head/body, you'll notice that it severely affects the signals. This movement noise is something that could be greatly improved with "active" electrodes, but when using the "passive" electrodes that come with the OpenBCI electrode starter kit, you have to be very careful to remain steady while using the system, in order to produce the best signal. As a quick fix, binding all of the electrode cables together with a piece of electric tape secures them and minimizes cable movement. If you do this, don't worry about including the blue and green electrodes in the bundle, since movement noise doesn't affect the EMG/EKG signal as significantly.

#### Ensure that your electrodes are securely connected

Ensure that your electrodes are connected securely (especially your reference)!

#### Make sure your OpenBCI hardware is streaming data properly

Every so often, an error will occur with the wireless communication between your OpenBCI Dongle and board. If you've followed all of the steps above, and the data that you are seeing in the GUI interface is still illegible, try the following:

Power down your Cyton board and unplug your USB Dongle. Then, plug back in your USB Dongle and power up your Cyton board in that order. Then try restarting the system, but pressing the START SYSTEM button again.

#### Further troubleshooting

If you're still having issues, refer to the [Forum](https://openbci.com/forum/) for further troubleshooting techniques.
