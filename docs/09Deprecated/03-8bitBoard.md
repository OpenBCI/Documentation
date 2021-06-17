---
id: 8bitBoardDep
title: OpenBCI 8bit Board (no longer in production)
---
### 8bit Board Specs:

-   Power with 6-12V DC Battery ONLY
-   ATmega328P Microcontroller with Arduino UNO bootloader
-   ADS1299 Analog Front End
-   LIS3DH 3 axis Accelerometer
-   RFduino BLE radio
-   Micro SD card slot
-   Voltage Regulation (5V, 3V, +2.5V, -2.5V)
-   SN74LVCC3245A Level Shifter
-   Board Dimensions 2.41" x 2.41" (octagon has 1" edges)
-   Mount holes are 1/16" ID, 0.8" x 2.166" on center

### Breakout pins:

-   ICSP pins on 5V side for bootloading ATmega
    -   MISO, MOSI, SCLK, 5V, MCLR, GND
-   Serial pins for programming RFduino
    -   RFTX, RFRX, RFRST, GND
-   SPI bus pins on the 3V side for Daisy Module expansion
    -   DVDD, GND, MISO, MOSI, SCK, CS, CLK, RST
-   Unused ATmega pins
    -   A0, A1, A2, A3, A4, A5, A6, A7

The SPI bus pins on 3V side include CLK, which is tied to the ADS1299 CLK pin for timing the Daisy Module, and a RST pin which is tied to the ADS1299 MCLR pin for hardware reset of the ADS. The A0 to A5 pins can be used as Analog inputs or Digital Input|Output just like on Arduino UNO. A6 and A7 are Analog input only.

### Push Button

Pushbutton switch is RESET for ATmega.

### Slide Switch

Slide switch is power for the board. The slide switch has three positions:

-   BLE activates a pull-up on RFduino pin 4
-   OFF disconnects the battery input
-   PC does NOT activate pull-up on RFduino pin 4

      **NOTE: BLE|PC selection is NOT implemented!**

Switching either BLE or PC will produce the same result. The option is available for future development...

### OpenBCI 8bit Board Circuit Schematic

![OpenBCI 8bit Schematic](assets/DepImages/OBCI_V3_8bit-Schematic.jpg)

### 8bit Board PCB Layer Images

![8bit PCB LayerTOP](assets/DepImages/OBCI_8bit_layerTop.jpg)
![8bit PCB Layer2](assets/DepImages/OBCI_8bit_layerTwo.jpg)
![8bit PCB Layer3](assets/DepImages/OBCI_8bit_layerThree.jpg)
![8bit PCB LayerBOTTOM](assets/DepImages/OBCI_8bit_layerBottom_noMirror.jpg)

### 8bit Board PCB Files

[OpenBCI 8bit gerber & BOM (568K zip)](http://ultracortex.com/downloads/hardware/OpenBCI_8bit.zip)
