---
id: MarkIV
title: Ultracortex Mark IV
---

*Development Period: January 2016 Through the Present*

![image](assets/HeadwareImages/UCM4-Product-2.JPG)


#### Complete Ultracortex Mark 4 kits are [available for sale](http://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv) in the OpenBCI Online Store!

The Ultracortex is an open-source, 3D-printable headset designed to work with the [OpenBCI system](http://openbci.com/). It is a tool for recording research-grade brain activity (EEG). The Ultracortex is under constant iteration. If you print/assemble your own Ultracortex, we would love to hear your feedback. Send us an email at [contact@openbci.com](mailto:contact@openbci.com) or Tweet at us ([@Ultracortex](https://twitter.com/Ultracortex) & [@OpenBCI](https://twitter.com/OpenBCI))!

[Step-by-step Assembly Tutorial Video](https://youtu.be/S87FV-Q59F8)

Designers & Engineers:

* [Aaron Lehr (aka Tangible NYC)](https://www.3dhubs.com/service/tangiblenyc)
* [Aaron Trocola (aka Threeform)](http://threeformfashion.com/)
* [Conor Russomanno](https://twitter.com/russomanno15)
* [Joel Murphy (aka SafeForRobots)](https://twitter.com/safeforrobots)

For those who want to modify the headset design and need CAD files, go to the [Ultracortex Mark IV Dev Kit](https://github.com/OpenBCI/Ultracortex/tree/master/Mark_IV/DevKit).

## THE COMPLETE ULTRACORTEX

**Note:** the part quantities listed below assume you are making an electrode holder for all 35 nodes of the Ultracortex Mark 4. In reality, you will likely have only 8 or 16 electrodes, depending on whether you are working with the [OpenBCI Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel) (8 channels) or the [OpenBCI CytonDaisy Board](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel) (16 channels). In general, more electrodes will distribute the downward scalp pressure, increasing comfort.

### 3D-printed Parts:
The following parts are included in the Unassembled version of the Mark IV:

* [FRAME](https://github.com/OpenBCI/Docs/tree/master/assets/MarkIV/STL_Directory) (head circumference: small = 42-50cm, medium = 48-58cm, large = 58-65cm)
	* FRAME_FRONT (**x1**) — .STLs ([small](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Small_Front.stl) / [medium](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Medium_Front.stl) / [large](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Large_Front.stl))
	* FRAME_BACK (**x1**) — .STLs ([small](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Small_Back.stl) / [medium](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Medium_Back.stl) / [large](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Large_Back.stl))
	* You can also print the frame in quarters or print the full frame. The .stl files are found [here](https://github.com/OpenBCI/Docs/tree/master/assets/MarkIV/STL_Directory/Mark_IV_Frame).
* MECH_PARTS
	* INSERT (**x35**) — .STLs ([tight](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Hardware_insert_105dot5_percent.STL) / [loose](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Hardware_insert_106_percent.STL)) (Choose one configuration and modify accordingly)
* [BOARD_MOUNT](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4%20Board_Mount.stl) (**x1**) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4%20Board_Mount.stl)
* BOARD_COVER (**x1**)
	* [BOARD COVER](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4%20Board_Cover.stl) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4%20Board_Cover.stl)
* WIRE_CLIPS (**x30**)
	* [WIRE CLIPS](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4_Wire_Clip.stl) (lips will be used to hold wire in place) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Wire_Clip.stl)

### Non-printed Parts:

**Note that unlike the Mark III, the electrodes and the electrode holders of the Mark IV are not designed to be 3D printed. The Spikey, Flat, and Comfort Units are all custom made and injection molded and can be purchased at the [OpenBCI shop](shop.openbci.com). If you need thse files for prototyping you can find them [here](https://github.com/OpenBCI/Docs/tree/master/assets/MarkIV/STL_Directory/Injection_Molded_Parts).**

The following parts are included in the Unassembled and the Print it Yourself versions of the Mark IV:

* (**2x**)* [No.4 Screws for Brittle Plastic](https://www.mcmaster.com/#97349A100)
* Cables (**x3**)
	* We strip apart the Cables in your kit (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/Cables.JPG)
* Spikey units
	* (**6x or 14x**) Depending on a 8 or 16 channel heas set dry (spikey) electrodes to be installed in Ultracortex nodes with hair: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/SpikeyUnits8chan.JPG)
* Flat units
	* (**2x**) Dry (non-spikey) electrodes to be installed in Ultracortex nodes without hair (forehead, for instance): (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/FlatUnits.JPG)
* Comfort units
	* (**5x**) Comfort units used for relieving weight reuse of headset: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/ComfortUnits.JPG)
* Ear Clips
	* (**2x**) Ear Clip electrode: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/EarClips.JPG)

The following parts are not included with the purchase of any configuration of the Mark IV and should be purchased separately:

* (**1x**) An [OpenBCI Cyton 8-channel Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel) or an [OpenBCI CytonDaisy 16-channel Board](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel)
* (**1x**) Lithium Ion Rechargeable Battery Pack (~500mAh) — [Sparkfun](https://www.sparkfun.com/products/10718) or [Adafruit](http://www.adafruit.com/products/1578)
* (**1x**) [A charger for your battery pack](https://www.adafruit.com/products/1304)
* (**1x**) [Velcro One Wrap](https://www.industrialwebbing.com/velcro-brand-one-wrap-tape-1-x-25-yard-roll/) - The Ultracortex            Mark IV has horizontal bars designed to hold straps. The addition of DIY chin straps improves stability and                    therefore quality of the signal. We recommend 25 yard rolls of 1" Velcro One Wrap. which has hooks on one side and            loops on the other.

## THE COMPLETE ULTRACORTEX (w/ PICTURES)

### 3D-printed Parts:

#### (1x) FRAME

The Ultracortex Mark IV frame is designed to be printed one half at a time (front and back halves), with the flat side on the 3-D printer's build plate. [Prusa](https://www.prusa3d.com/) and [Lulzbot](https://www.lulzbot.com/) make 3-D printers that are suitable for printing the Mark IV frame in halves or quarters. Because printing requires margin for support material, we recommend a printer like [Prusa i3](https://shop.prusa3d.com/en/3d-printers/59-original-prusa-i3-mk2-kit.html), with build area of at least 200 mm square.

* FRAME (head circumference: small = 42-50cm, medium = 48-58cm, large = 58-65cm)
	* FRAME_FRONT (**x1**) — .STLs ([small](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Small_Front.stl) / [medium](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Medium_Front.stl) / [large](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Large_Front.stl) )
	* FRAME_BACK (**x1**) — .STLs ([small](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Small_Back.stl) / [medium](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Medium_Back.stl) / [large](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Large_Back.stl))
	* You can also print the frame in quarters or print the full frame. The .stl files are found [here](https://github.com/OpenBCI/Docs/tree/master/assets/MarkIV/STL_Directory/Mark_IV_Frame).

The image below shows the correct 3-D printing orientation of the Ultracortex Mark IV frame halves. Please note how the flat sides (halved nodes) sit on the light gray build plate. The halved nodes are completely flat on the edge, so they are properly supported when in contact with the build plate.
The model must be positioned correctly in the 3D print preparation software. The flat side of the model should face downward, on the platform. If it does not fit, view it from below and move/rotate the model. The model must be printed with support and a brim or raft. The headset is designed to be printed using FDM extrusion.

![image](assets/HeadwareImages/M4_Orientation_render.png)

#### (21x) MECH_PARTS

* [MECH_PARTS](https://github.com/OpenBCI/Ultracortex/tree/master/Mark_IV/M4_Released/STL's/Mech_Parts/M4_Hardware_insert.STL)
	* [INSERTS](https://github.com/OpenBCI/Ultracortex/tree/master/Mark_IV/M4_Released/STL's/Mech_Parts/M4_Hardware_insert.STL) (**x35**) — .STLs ([tight](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Hardware_insert_105dot5_percent.STL) / [loose](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Hardware_insert_106_percent.STL)) (Choose one configuration and modify accordingly)

#### (1x) BOARD_HOLDER

* [BOARD_MOUNT](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4%20Board_Mount.stl) (**x1**) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4%20Board_Mount.stl)


![image](assets/HeadwareImages/Board_Mount.JPG)

#### (1x) BOARD_COVER

* [BOARD COVER](**x1**)
	* [BOARD COVER](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4%20Board_Cover.stl) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4%20Board_Cover.stl)

![image](assets/HeadwareImages/Board_Cover.JPG)

![image](assets/HeadwareImages/3D_printed_Parts3.JPG)

* [WIRE CLIPS](https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/STL_Directory/M4_Wire_Clip.stl) (lips will be used to hold wire in place) — [.STL download link](https://github.com/OpenBCI/Docs/raw/master/assets/MarkIV/STL_Directory/M4_Wire_Clip.stl)

### Non-printed Parts:

**Note that unlike the Mark III, the electrodes and the electrode holders of the Mark IV are not designed to be 3D printed. The Spikey, Flat, and Comfort Units are all custom made and injection molded and can be purchased at the [OpenBCI shop](shop.openbci.com). If you need thse files for prototyping you can find them [here](https://github.com/OpenBCI/Docs/tree/master/assets/MarkIV/STL_Directory/Injection_Molded_Parts).**

#### Suggested screws for fastening BOARD_MOUNT & OpenBCI Board

* (**2x**)* [#4 Screws for Brittle Plastic](https://www.mcmaster.com/#97349A100)

![image](assets/HeadwareImages/Screw.JPG)

* Cables (**x3**)
	* We strip apart the Cables in your kit (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/Cables.JPG)

![image](assets/HeadwareImages/Cables.JPG)

* Spikey units
	* (**6x or 14x**) Depending on a 8 or 16 channel heas set dry (spikey) electrodes to be installed in Ultracortex nodes with hair: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/SpikeyUnits8chan.JPG)

![image](assets/HeadwareImages/SpikeyUnits8chan.JPG)

* Flat units
	* (**2x**) Dry (non-spikey) electrodes to be installed in Ultracortex nodes without hair (forehead, for instance): (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/FlatUnits.JPG)

![image](assets/HeadwareImages/FlatUnits.JPG)

* Comfort units
	* (**5x**) Comfort units used for relieving weight reuse of headset: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/ComfortUnits.JPG)

![image](assets/HeadwareImages/ComfortUnits.JPG)

* Ear Clips
	* (**2x**) Ear Clip electrode: (https://github.com/OpenBCI/Docs/blob/master/assets/MarkIV/Photos/Earclips.JPG)

![image](assets/HeadwareImages/EarClips.JPG)

#### (1x) An [OpenBCI Cyton Board](https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel) (8 electrode channels) or an [OpenBCI CytonDaisy Board](https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel) (16 electrode channels)

![image](assets/HeadwareImages/OPENBCIs.jpg)

#### (**1x**) ~500mAh lithium ion rechargeable battery pack ([Sparkfun](https://www.sparkfun.com/products/10718) or [Adafruit](http://www.adafruit.com/products/1578)) & (**1x**) [A charger for your battery pack](https://www.adafruit.com/products/1304)

![image](assets/HeadwareImages/BATTERY.jpg)



## SUGGESTED PRINT SETTINGS

If you're 3D-printing your Mark IV yourself, here are the print settings we recommend:
#### FRAME_FRONT & FRAME_BACK
	- Material: PLA
	- Supports: YES
	- Raft: hopefully NO (but if supports aren't sticking, try the raft)
	- Infill: 20%
	- Layer Height: 0.2mm
	- Number of Shells: 3
	- Speed while extruding: 50-70% (slow it down if possible; these parts are detailed)
#### MECH_PARTS (INSERT)
	- Material: PLA
	- Supports: NO
	- Raft: NO
	- Infill: 20%
	- Layer Height: 0.2mm
	- Number of Shells: 3
	- Speed while extruding: 50-70% (slow it down if possible; these parts are detailed)
#### BOARD_MOUNT, BOARD_COVER
	- Material: PLA
	- Supports: NO
	- Raft: NO
	- Infill: 20%
	- Layer Height: 0.2mm
	- Number of Shells: 3
	- Speed while extruding: 50-70% (slow it down if possible; these parts are detailed)


## RECOMMENDED ASSEMBLY TOOLS

1. [Loctite Super Glue w/ Cyanoacrylate](http://www.amazon.com/Loctite-1365882-20-Gram-Bottle-Professional/dp/B004Y960MU/ref=sr_1_1?s=automotive&ie=UTF8&qid=1440204266&sr=1-1&keywords=loctite+cyanoacrylate&pebp=1440204267936&perid=0HJQ0FB9G4J9SEBQBVGA)
2. coarse flat & circular files (for removing support artifacts)
3. medium sand paper
4. exacto blade
5. philips head screw driver
6. wire cutters
7. needle-nose pliers
8. snippers

![image](assets/HeadwareImages/TOOLS.jpg)


## ASSEMBLY INSTRUCTIONS

### Remove residual support material & print flaws

Use sand paper, a file, and snippers to clean your FRAME and other 3D-printed parts. The most important part of this process is that you thoroughly clean out the frames nodes where you will place your INSERTS pieces.

![image](assets/HeadwareImages/Assembly_Clean2.JPG)
![image](assets/HeadwareImages/Assembly_Clean4.JPG)

### Glue the FRAME together

Carefully, glue the FRONT FRAME and BACK FRAME together with your Cyanoacrylate super glue. The best way to do this is to place both halves of the frame on a level surface and carefully bring them together. Be sure to be precise; it's VERY difficult to pull the pieces apart once you've put them together.

![image](assets/HeadwareImages/Assembly_Glue.JPG)

### Mount the OpenBCI BOARD_MOUNT

Use two screws to mount the Mark IV Board_Mount to the back (the more rounded half) of the Frame. Make sure that the orientation of the BOARD_HOLDER matches that of the pictures below:

![image](assets/HeadwareImages/Assembly_Board_Mount.JPG)

### Insert INSERTS pieces (x35) into frame

Before glueing the INSERTS into the frame, ensure that they fit properly into the frame without glue. INSERTs should be inserted from the inside of the frame outwards, so that they lie flush with the frame.

![image](assets/HeadwareImages/Assembly_Insert.JPG)

For each INSERT, line the inner rim of the frame with glue. Then insert the INSERT so that it is flush with the frame.

![image](assets/HeadwareImages/Assembly_Insert2.JPG)

Screw 5 COMFORT UNITS into the frame as shown below. Your Ultracortex should now look like this:

![image](assets/HeadwareImages/Assembly_Comfort.JPG)

### Embed OpenBCI into the Ultracortex

Connect your ~500 mAh lithium ion rechargeable batter to the back of your Cyton OpenBCI Board:

![image](assets/HeadwareImages/embed_OpenBCI.jpg)

Fold the battery and its wires neatly behind the board before inserting the board into the BOARD_MOUNT:

![image](assets/HeadwareImages/MarkIV_cyton_cover_1.jpeg)

Snap your Cyton board onto the four pegs on the outside of the BOARD_MOUNT:

![image](assets/HeadwareImages/MarkIV_cyton_cover_2.jpeg)

You can then secure the OpenBCI Board to the BOARD_MOUNT by clipping BOARD_COVER over top.

![image](assets/HeadwareImages/MarkIV_cyton_cover_3.jpeg)

The pins and female headers should fit neatly into the BOARD_COVER holes as shown.

Only have a black battery pack with AA batteries? Tape the pack to your Mark IV in the location shown. As long as you use an 8-channel setup, the battery pack won't overlap with any of the electrode locations. Thread the battery pack wire through the hole in the BOARD_MOUNT as shown.

![image](assets/HeadwareImages/MarkIV_battery_pack_1.jpeg)

Connect your OpenBCI board to the battery pack, place it on the BOARD_MOUNT and snap the BOARD_COVER into place. Your Mark IV should look like the image below.

![image](assets/HeadwareImages/MarkIV_battery_pack_2.jpeg)



### Electrode location overview

Before creating your electrode mounts, it's a good idea to think about where you may want to place the electrodes on the Ultracortex FRAME. The placement of the electrode may affect how long you make the wire between the electrode and where the OpenBCI is mounted, at the back of the frame.

The Ultracortex node locations are based on the [10-20 system](https://goo.gl/gSwYw), which is the internationally accepted standard for electrode placement in the context of EEG.

The images below indicates the default 10-20 electrode locations that the OpenBCI Graphical User Interface expects. This application is great for viewing/recording your EEG and can be found in our [OpenBCI_Processing](http://) repo. The blue nodes indicate the 8 default 10-20 locations (channels 1-8) of the Cyton Board. The red nodes indicate the default 10-20 locations of channels 9-16 when using the OpenBCI 16-channel R&D Kit.

For the remainder of this tutorial, the blue nodes on the 10-20 system diagram (channels 1-8 of the OpenBCI default settings) will be used. The channel to 10-20 system correlations are as follows:

* Channel 1(N1P) - Fp1
* Channel 2(N2P) - Fp2
* Channel 3(N3P) - C3
* Channel 4(N4P) - C4
* Channel 5(N5P) - P7
* Channel 6(N6P) - P8
* Channel 7(N7P) - O1
* Channel 8(N8P) - O2

![image](assets/HeadwareImages/1020.jpg)

### Placement of electrodes

First screw your two FLAT ELECTRODE UNITS in the front two nodes of the frame.

![image](assets/HeadwareImages/Assembly_Flat2.JPG)
<!-- ![image](../assets//MarkIV/Photos/Assembly_Comfort_Flat.JPG) -->

Then screw 6 SPIKEY ELECTRODE UNITS in the following nodes of the frame.

![image](assets/HeadwareImages/Assembly_CFS.JPG)
<!-- ![image](../assets/images/MarkIV/MarkIV_spiky_units.JPG) -->

### Connect wiring to OpenBCI

It's time to connect the electrodes to your OpenBCI Cyton board with jumper cables. You will find 3 ribbon cables in your kit as seen below.

![image](assets/HeadwareImages/Cables.JPG)

Peel off the GRAY and PURPLE from the 12" set and the BLUE, GREEN, ORANGE and YELLOW from the 8" set and the RED and BROWN from the 4" Set as seen below.

![image](assets/HeadwareImages/Assembly_8Chan_Cables.JPG)

Now connect the jumper cables to the electrodes. The map below assigns names to all the electrodes by their location. To follow along with this tutorial, attach each electrode to the wire color listed in the table below.

![image](assets/HeadwareImages/MarkIV_electrode_map.png)

| Electrode | Wire Color |
|---|---|
| FP2 | Grey |
| FP1 | Purple |
| C4 | Blue |
| C3 | Green |
| P8 | Yellow |
| P7 | Orange |
| O2 | Brown |
| O1 | Red |

To connect wires to electrodes, plug the male end in to the header cable on the NODES as shown:

![image](assets/HeadwareImages/Assembly_Node_Plug.JPG)

After connecting wires to electrodes, run wires along the frame to the top of the OpenBCI BOARD_MOUNT. Use the included plastic clips to hold wires on the frame, like shown:

![image](assets/HeadwareImages/Assembly_Wire_Clip.JPG)
![image](assets/HeadwareImages/Assembly_Wire_Clip2.JPG)

#### Ear Clips

To use your Mark IV headset, you'll also need two ear clip electrodes, which come with your headset kit. These ear clip electrodes serve as the reference and bias (ground with common-mode noise rejection) for your EEG system. You will connect them to your OpenBCI board along with the electrodes in the next step.

#### Cyton Board Setup

Connect an OpenBCI Cyton board to the Mark IV as shown below:

![image](assets/HeadwareImages/cyton_wired_nocover_FIXED.jpg)

Here's a table with the correct electrode, wire color, and Cyton board pin pairings. By bottom pin, we mean the pin CLOSEST to the OpenBCI board:

| Electrode | Wire Color | Cyton Board Pin |
|---|---|---|
| Ear Clip | Black | Bottom SRB pin (SRB2) |
| FP1 | Purple | Bottom N1P pin |
| FP2 | Grey | Bottom N2P pin |
| C3 | Green | Bottom N3P pin |
| C4 | Blue | Bottom N4P pin |
| P7 | Orange | Bottom N5P pin |
| P8 | Yellow | Bottom N6P pin |
| O1 | Red | Bottom N7P pin |
| O2 | Brown | Bottom N8P pin |
| Ear Clip | Black | Bottom BIAS pin |

The electrodes (FP1 through O2) can be connected to any N1P, N2P, etc, channel. The ear clips must always be connected to the bottom SRB pin and either of the BIAS pins.

Replace the cover, as shown below:

![image](assets/HeadwareImages/cyton_wired_cover_FIXED.jpg)

Your Cyton board is ready to use with your Mark IV headset!


#### Ganglion Board Setup

Connect an OpenBCI Ganglion board to the Mark IV as shown below (with cover removed for clarity). We placed 8 electrodes on our Mark IV headset, but the Ganglion board can only take 4 inputs. So, we can only connect 4 of our electrodes to the board - we chose FP1, FP2,O1, and O2 for this tutorial.

![image](assets/HeadwareImages/MarkIV_ganglion_connects.JPG)

Here's a table with the correct electrode, wire color, and Ganglion board pin pairings:

| Electrode | Wire Color | Cyton Board Pin |
|---|---|---|
| FP2 | Grey | +4 (Top 4 pin) |
| FP1 | Purple | +3 (Top 3 pin) |
| O2 | Brown | +2 (Top 2 pin) |
| O1 | Red | +1 (Top 1 pin) |
| Ear Clip | Black | Top D_G pin |
| Ear Clip | Black | Top REF pin |

Next, make sure the switches on your Ganglion board are in the bottom configuration as shown below:

![Switches DOWN](assets/HeadwareImages/ganglion_SW_DOWN.png)

Replace the cover, like below:

![image](assets/HeadwareImages/MarkIV_ganglion_connects_cover.JPG)

Your Ganglion board is now ready to use with your Mark IV headset!

### Completed 8 Channel Mark IV Setup

Your 8 channel headset is finished! To expand to a 16 channel headset (for use with Cyton Daisy), see the next section.

![image](assets/HeadwareImages/Assembly_8Chan_Finished.JPG)
![image](assets/HeadwareImages/Assembly_8Chan_Finished2.JPG)
![image](assets/HeadwareImages/Assembly_8Chan_Finished3.JPG)


## 16 Channel Add-Ons

If you have a Cyton Daisy extension, you can expand your headset from 8 electrodes to 16 electrodes. Each electrode provides one "channel" of data, so we call this a 16 channel setup.

### Adding extra electrodes

From the front of the frame remove the following two Comfort Nodes.

![image](assets/HeadwareImages/Assembly_16Chan_Remove_Node.JPG)

Replace the old Comfort Nodes with spiky electrodes:

![image](assets/HeadwareImages/Assembly_16Chan_Replace_Node2.JPG)

Add 6 more spiky electrode units in the locations shown below:.

![image](assets/HeadwareImages/Assembly_16Chan_Node_Placment.JPG)

### Wiring Electrodes

Take out your rest of your Ribbon Cables and separate the GRAY and PURPLE 8" & 4" cables, the BLUE, GREEN, ORANGE and YELLOW 8", and the RED & BROWN 4" cables.

![image](assets/HeadwareImages/Assembly_16Chan_Cables.JPG)

Plug the male end of the 8" GRAY and PURPLE to the 4" GRAY and PURPLE. These two extra-long wires will help you reach all the electrodes.

![image](assets/HeadwareImages/Assembly_16Chan_Cables2.JPG)

As shown below, connect one female end of the white Y-Splitter Cable to the bottom SRB pin of the Cyton. Connect the male end of the white Y-Splitter Cable to the female end of one black ear clip electrode. The other black ear clip electrode should be connected to the bottom BIAS pin of the Cyton. Bottom pins N1P through N8P of the Cyton should be connected to colored wires in the order shown below. Then, attach the Daisy extension to the outside of the Cyton board as shown below. You will plug all of the new electrodes into the Daisy board pins in the next step.

![image](assets/HeadwareImages/Cyton_Daisy_unconnected.JPG)

Connect each of the new electrodes to corresponding Daisy pins as shown below. You may have to use a different color scheme, depending on what wires you have available. Just make sure to keep track of which electrodes are connected to which Daisy pins.

![image](assets/HeadwareImages/MarkIV_16_channel_map.png)

The electrode and Daisy pin pairings are below:

| Electrode | Wire Color | Daisy Pin |
|---|---|---|
| F7 | Purple | Bottom N1P pin |
| F8 | Grey | Bottom N2P pin |
| F3 | White | Bottom N3P pin |
| F4 | Green | Bottom N4P pin |
| T7 | Brown | Bottom N5P pin |
| T8 | Red | Bottom N6P pin |
| P3 | Yellow | Bottom N7P pin |
| P4 | Orange | Bottom N8P pin |

The other female end of the white Y-Splitter Cable should be connected to the bottom SRB pin of the Daisy. The pins connected to the Daisy board should look like this:

![image](assets/HeadwareImages/Cyton_Daisy_Setup.JPG)

Like for the first 8 electrodes, use the plastic clips to secure wires in place:

![image](assets/HeadwareImages/Assembly_Wire_Clip.JPG)

Your Mark IV is now ready to use 16 channels! It should look like the images below.

![image](assets/HeadwareImages/Assembly_16Chan_Finished.JPG)
![image](assets/HeadwareImages/Assembly_16Chan_Finished2.JPG)


### Adjust the Ultracortex for your head

Put the Ultracortex Mark IV onto your head and gradually tighten the electrode units until the electrodes are snugly (but comfortably) against your scalp. Tighten the electrodes and comfort units by turning them clockwise, and loosen them by turning counterclockwise.

**Be careful** not to strain the electrode wires when twisting the electrode units, or you may separate the wire from the electrode itself. You **must** disconnect a blue electrode mount from its colored wire before turning it.


### Examine your brain waves!

Place your UltraCortex on your head so that the back center node is roughly the same distance above your inion (bump on the back of your skull) as the front center node is above the bridge of your nose. As you place the UltraCortex on your head, the springs should adjust to the shape and size of your head.

Now that you have your Ultracortex assembled and comfortably adjusted to your head size and shape, it's brain wave time!

![image](assets/HeadwareImages/UCM4-Product-2.JPG)

Check out the [Getting Started w/ OpenBCI tutorial](06Software/01-OpenBCISoftware/01-OpenBCI_GUI.md) to get up-and-running with the [OpenBCI GUI](https://github.com/OpenBCI/OpenBCI_GUI).

Below is a screenshot of what the GUI looks like when you've got your OpenBCI + Ultracortex (w/ 8 channels) hooked up! You can see a nice alpha (~11 hz) spike on the FFT Plot.

![image](assets/HeadwareImages/MarkIV_screenshot.png)

The OpenBCI GUI has a widget for visualizing signal strength at each electrode. To view it, click on the "FFT Plot" drop-down menu in the top right corner. Select "Head Plot".

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/MarkIV/head_plot_menu.png?raw=true" width="50%">

You should now see a visual map of signal strength in the top right corner.

![image](assets/HeadwareImages/MarkIV_head_plot.png)


### Give Us Feedback!

If you have questions, comments, or suggestions regarding the printing and/or assembly of the Ultracortex, we'd love to hear from you. Please submit issues to this repository or email us at [contact@openbci.com](mailto:contact@openbci.com). Or take some pictures of yourself wearing the Ultracortex and Tweet at us ([@OpenBCI](https://twitter.com/OpenBCI) & [@Ultracortex](https://twitter.com/Ultracortex))!
