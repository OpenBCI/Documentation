---
id: ResetButtonPress
title: Did you Press the Reset Button?
---

import NormalStateImg from "../assets/TroubleshootingImages/NormalStateSolidBlue.jpg";
import BlinkingBlueLED from "../assets/TroubleshootingImages/BlinkingBlueLED.mp4";
import Method1 from "../assets/TroubleshootingImages/Method1.mp4";
import Method2 from "../assets/TroubleshootingImages/Method2.mp4";
import Method3 from "../assets/TroubleshootingImages/Method3.mp4";

The Cyton has a Reset button labeled RST that is mainly used for the rare scenario of programming new firmware to the Cyton board. The Reset button does not cause the Cyton to power cycle or clear any errors. If you accidentally pressed the Reset button in this case, this guide will help restore the Cyton back to its normal state.

If the RST button is pressed when the Cyton board is OFF, this will not affect the board. The Cyton can be powered on and will work normally if the blue LED at D1 is a solid blue color.

<div style={{textAlign: 'center'}}>
    <img src={NormalStateImg} width="300"/>
</div>

The only time when the Cyton board will not connect to the Dongle and not stream data is when this LED is blinking blue.

<div style={{textAlign: 'center'}}>
    <video controls>
        <source src={BlinkingBlueLED}/>
    </video>
</div>

The blinking blue LED state means that the Cyton has been put into "programming mode" by pressing the PROG and RST buttons at the same time and then letting go of the RST button. To exit programming mode, you can try one of the following steps:

1. Press the RST button again when the board is ON. This will stop the LED from blinking and it will go back to a solid blue.

<div style={{textAlign: 'center'}}>
    <video controls>
        <source src={Method1}/>
    </video>
</div>

2. Power cycle the board by moving the switch to OFF and then back to PC.

<div style={{textAlign: 'center'}}>
    <video controls>
        <source src={Method2}/>
    </video>
</div>

3. Unplug and plug the battery back in. This is similar to a power cycle, except it is like a hard reset where the board is completely OFF and then turned ON again.

<div style={{textAlign: 'center'}}>
    <video controls>
        <source src={Method3}/>
    </video>
</div>

After trying any one of these methods, confirm that the board is operating normally by connecting to the Dongle (make sure the Dongle slide switch is set to GPIO_6) and streaming data to the GUI.

:::note

If you have tried all these methods and the Cyton board LED is still blinking blue or the LED on the Cyton does not light up, please email contact@openbci.com with:

- Order Number
- Console Log
- A video or picture of your hardware behavior for further clarification.

:::
