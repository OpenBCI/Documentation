---
id: CytonExternal
title: External Trigger on OpenBCI Cyton Board
---

In a lot of EEG experiments, there is a requirement for precise timing between external stimuli and the data stream. For example, with in an experiment collecting P300 data, it is necessary to know the exact time that the signal was presented to the subject in order to look for the recorded EEG signal that occurs about 300ms after the stimulus.

This tutorial will cover a couple of ways to add an external trigger to the OpenBCI data stream on othe Cyton and Cyton+Daisy boards. Normally, the Cyton reads from the Accelerometer at 25 Hz. When the "Digital Read" or "Analog Read" widgets in the GUI and opened and enabled, signals are read from the GPIO pins at same rate as the NxP input headers. This is what allows for the precise timing required for external triggers.

## Verify if the Digital Read Widget is Working

Launch the OpenBCI GUI for your operating system following the tutorial for the [OpenBCI GUI](../Software/OpenBCISoftware/01-OpenBCI_GUI.md#running-the-openbci_gui).

Once the GUI has launched, follow the guide to [connect to the Cyton board from the OpenBCI GUI](../GettingStarted/Boards/01-Cyton_Getting_Started_Guide.md#iv-connect-to-your-cyton-board-from-the-gui).

After connecting the board to the GUI, open and enable the "Digital Read" for one of your widgets. Then select start digital read mode button in the top left of the newly populated widget. This will activate and send the proper commands to your Cyton. Note that the accelerometer will no long be turned on because the trigger data is now sent instead.

You can verify the digital read widget is working by pressing the "PROG" button which is hooked up to the D17 pin.

When you use a Cyton dongle, you get up to 5 digital IO pins to read from: D11, D12, D13, D17 and D18! If there appears to be a delay between when you press the button and when the digital read widget in the GUI shows the button pressed, then you may want to lower your serial port latency. Checkout the guides for lowering serial port latency [Windows](Troubleshooting/04-FTDI_Fix_Windows.md) and [macOS](Troubleshooting/05-FTDI_Driver_Fix_Mac.md), and [Linux](Troubleshooting/03-FTDI_Fix_Linux.md)!

### External Triggering on The Cyton Board

### Utilize the on device push button

The OpenBCI 32bit Board comes with a user accessible pushbutton switch already on the board, wired right to the PIC32 microcontroller. This is the PROG button, and it is used to put the PIC into bootloader mode when uploading new firmware when pressed with the RST button. When it's not doing that it's attached to pin D17 with a 470K pulldown resistor, so when you press the PROG button, D17 goes from LOW to HIGH. The PROG pushbutton is a great way to get user acknowledgement of a stimulus (for example) into the data stream. You will likely want to note the rising edge (pushed state) of the button press, so that's the example code that we'll work with.

First thing is to establish the variables we need to read the pushbutton switch, and a flag to let the rest of the program know we got new data. The OpenBCI library already has a variable array for auxiliary data, called auxData, which we will use for logging. I've also added a flag for writing data to an SD card (if you like that kind of thing) and a boolean to toggle the on-board blue LED for user feedback, which is always nice.

In the setup function, we set the pin direction and prime the button variables. The startFromScratch() function resets the board peripheral devices and does some general housekeeping, along with making initial serial contact with any controlling program. the useAccel and useAux variables are inside the OpenBCI_32_Daisy library (hence the **OBCI.**) and it's important to decide and select which kind of data you want to log. It is possible to do both, but you will need to manually operate the useAux or useAcel variables (tutorial on that coming sooooon).


Then, in the loop, we want to check for the rising edge of the button press, make note of it in the auxData array, and set the write-to-SD flag (if you like). Finally, we want to get the button press event into the data stream. (Reference the [OpenBCI Data Format Doc](03-Cyton_Data_Format.md) for data packet anatomy) There are 6 bytes available in each data packet, and the default format is to read them as three 16bit integers (aka 'words' or 'shorts'). You can decide to add your flags into the auxData array any way you choose. In this example, we are setting each short to the value 0x6620. That's because our [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_Processing) converts these variables to Gs (the GUI is expecting accelerometer data) and 0x6620 converts to PI (3.14). Our sample rate of 250SPS gives us a 4mS resolution on external trigger events like the rising edge of the PROG button press.

You can do the button feeling at any point in the loop() function. In our sample code linked above, I'm putting it outside of the if(is-running) conditional so that I can see the LED toggle even when the board is not streaming data. That's a nice way to know that you've got everything set up and working before starting a data logging session.

Here's an example of what the data looks like after it's been logged by our GUI.

```

217, -18.08, -23.04, -21.59, -29.86, -23.76, -19.65, -28.79, -19.47, 0.00, 0.00, 0.00
218, -18.17, -22.82, -21.59, -29.93, -23.85, -19.65, -28.72, -19.16, 0.00, 0.00, 0.00
219, -17.97, -23.04, -21.39, -29.97, -23.92, -19.56, -28.74, -19.24, 0.00, 0.00, 0.00
220, -17.99, -23.07, -21.61, -30.00, -23.72, -19.71, -28.52, -19.16, 0.00, 0.00, 0.00
221, -17.90, -23.04, -21.48, -30.09, -23.85, -19.54, -28.43, -19.18, 3.14, 3.14, 3.14
222, -17.90, -22.96, -21.48, -30.20, -23.72, -19.38, -28.57, -18.95, 0.00, 0.00, 0.00
223, -17.93, -22.89, -21.26, -29.97, -23.96, -19.65, -28.54, -18.95, 0.00, 0.00, 0.00

```

And here's an example of what the data looks like after it's been logged to the SD card.

```

D9,FFFCD7,FFFBF9,FFFC3A,FFFAC8,FFFBD9,FFFC91,FFFAF8,FFFC99
DA,FFFCD3,FFFC03,FFFC3A,FFFAC5,FFFBD5,FFFC91,FFFAFB,FFFCA7
DB,FFFCDC,FFFBF9,FFFC43,FFFAC3,FFFBD2,FFFC95,FFFAFA,FFFCA3
DC,FFFCDB,FFFBF8,FFFC39,FFFAC2,FFFBDB,FFFC8E,FFFB04,FFFCA7
DD,FFFCDF,FFFBF9,FFFC3F,FFFABE,FFFBD5,FFFC96,FFFB08,FFFCA6,6220,6220,6220
DE,FFFCDF,FFFBFD,FFFC3F,FFFAB9,FFFBDB,FFFC9D,FFFB02,FFFCB0
DF,FFFCDE,FFFC00,FFFC49,FFFAC3,FFFBD0,FFFC91,FFFB03,FFFCB0

```

### External Triggering The Harder Way (Firmware 1.x.x)

Sometimes a situation may arise where you need to interface OpenBCI with an existing system, for example an audio or visual event-related potential (ERP). In such a case, it is most desirable to have the onset of the signal tightly bound, temporally, with the EEG data. It is possible to interface the OpenBCI 32bit Board with the external signal generating system using a few low-cost components.
Our goal with the OpenBCI board is to make biosensing safe and fun. The biggest part of the safety part is making sure that you can't plug yourself accidentally into the mains electrical supply (yikes!). If you are interfacing an external trigger that is **NOT** operating under a battery supply, we recommend thinking twice about incorporating it into your system/protocol. If you have thought through it twice, here's how we do it when we need to.

### Optoisolation

![Optoisolator Schematic](../assets/CytonImages/ExternalTriggerCNY17.jpg)
![Breadboard CNY17](../assets/CytonImages/CNY17_Breadboard.jpg)

The simplest trick is to isolate the OpenBCI circuit from the trigger signal generating circuit. For this purpose, we picked an Optoisolator with 5000 Volts isolation between the input and the output. [CNY17](http://www.mouser.ee/ProductDetail/Vishay-Semiconductors/CNY17F-2X006/?qs=sGAEpiMZZMteimceiIVCB7Uit3aMEvQQFLjPtOr%2f870%3d) family from Vishay is a great example of a low-cost high isolation optoisolator. It's usually available, and costs under a dollar (USD) in singles. In the circuit to the right, when an external trigger of 3.3V to 5V is applied to the Anode of the input (pin 1), the output (pin 5) will go from HIGH to LOW.

The code to read this trigger input is quite similar to the previous button code. In this case, we need to use a different pin (pin 18) and watch for the **falling** edge of the trigger.

As always, help can be found at support@openbci.com and [openbci.com/forum](https://www.openbci.com/forum).
