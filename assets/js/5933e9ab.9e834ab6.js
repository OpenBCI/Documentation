"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[232],{15680:(e,o,t)=>{t.d(o,{xA:()=>p,yg:()=>g});var a=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),s=function(e){var o=a.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},p=function(e){var o=s(e.components);return a.createElement(d.Provider,{value:o},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(t),m=n,g=h["".concat(d,".").concat(m)]||h[m]||u[m]||i;return t?a.createElement(g,r(r({ref:o},p),{},{components:t})):a.createElement(g,r({ref:o},p))}));function g(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l[h]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62310:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var a=t(58168),n=t(98587),i=(t(96540),t(15680)),r=["components"],l={id:"CytonRadios",title:"Cyton Radios Programming Tutorial"},d=void 0,s={unversionedId:"Cyton/CytonRadios",id:"Cyton/CytonRadios",title:"Cyton Radios Programming Tutorial",description:"Note, you do not need to do any board programming if you want to use the Cyton and Dongle out-of-the-box. All OpenBCI boards ship already programmed, i.e. with firmware uploaded. Email support@openbci.com before attempting to update or alter board firmware, or if you think there is an issue with your board. DO NOT attempt to upload firmware to your Cyton board or dongle unless specifically instructed to do so.",source:"@site/docs/Cyton/06-Cyton_Radios_Programming_Tutorial.md",sourceDirName:"Cyton",slug:"/Cyton/CytonRadios",permalink:"/Cyton/CytonRadios",draft:!1,editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Cyton/06-Cyton_Radios_Programming_Tutorial.md",tags:[],version:"current",lastUpdatedAt:1668816492,formattedLastUpdatedAt:"Nov 19, 2022",sidebarPosition:6,frontMatter:{id:"CytonRadios",title:"Cyton Radios Programming Tutorial"},sidebar:"docs",previous:{title:"Cyton Board Programming Tutorial",permalink:"/Cyton/CytonProgram"},next:{title:"External Trigger on OpenBCI Cyton Board",permalink:"/Cyton/CytonExternal"}},p={},h=[{value:"Overview",id:"overview",level:2},{value:"Setting up your system to program OpenBCI Radios",id:"setting-up-your-system-to-program-openbci-radios",level:2},{value:"Using Radio Firmware Version 2.x.x (Fall 2016)",id:"using-radio-firmware-version-2xx-fall-2016",level:2},{value:"Getting Radio Firmware Version 2.x.x (Fall 2016)",id:"getting-radio-firmware-version-2xx-fall-2016",level:3},{value:"Uploading Device Firmware to Cyton Board",id:"uploading-device-firmware-to-cyton-board",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Upload DEVICE Radio Firmware Version 2.x.x (Fall 2016)",id:"upload-device-radio-firmware-version-2xx-fall-2016",level:3},{value:"Program DEVICE Radio with OpenBCI Dongle",id:"program-device-radio-with-openbci-dongle",level:3},{value:"Upload Pass Thru Radio Firmware Version 2.x.x (Fall 2016)",id:"upload-pass-thru-radio-firmware-version-2xx-fall-2016",level:3},{value:"Program Device Radio with Other FTDI Boards",id:"program-device-radio-with-other-ftdi-boards",level:2},{value:"RFduino",id:"rfduino",level:3},{value:"FTDI Friend",id:"ftdi-friend",level:3},{value:"FTDI Basic Breakout",id:"ftdi-basic-breakout",level:3},{value:"Uploading Host Firmware to the OpenBCI Dongle",id:"uploading-host-firmware-to-the-openbci-dongle",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Upload HOST Firmware Version 2.x.x (Fall 2016)",id:"upload-host-firmware-version-2xx-fall-2016",level:3},{value:"Using Radio Firmware Version 1.x.x (2014 - Fall 2016)",id:"using-radio-firmware-version-1xx-2014---fall-2016",level:2},{value:"Getting Radio Firmware Version 1.x.x (2014 - Fall 2016)",id:"getting-radio-firmware-version-1xx-2014---fall-2016",level:3},{value:"Upload DEVICE Radio Firmware Version 1.x.x (2014 - Fall 2016)",id:"upload-device-radio-firmware-version-1xx-2014---fall-2016",level:3},{value:"Upload Pass Thru Radio Firmware Version 1.x.x (2014 - Fall 2016)",id:"upload-pass-thru-radio-firmware-version-1xx-2014---fall-2016",level:3},{value:"Upload HOST Firmware Version 1.x.x (2014 - Fall 2016)",id:"upload-host-firmware-version-1xx-2014---fall-2016",level:3}],u={toc:h},m="wrapper";function g(e){var o=e.components,l=(0,n.A)(e,r);return(0,i.yg)(m,(0,a.A)({},u,l,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Note, you do not need to do any board programming if you want to use the Cyton and Dongle out-of-the-box. All OpenBCI boards ship already programmed, i.e. with firmware uploaded. Email ",(0,i.yg)("a",{parentName:"p",href:"mailto:support@openbci.com"},"support@openbci.com")," before attempting to update or alter board firmware, or if you think there is an issue with your board. DO NOT attempt to upload firmware to your Cyton board or dongle unless specifically instructed to do so."),(0,i.yg)("p",{parentName:"admonition"},"If you're curious about how we do it, keep reading! If you want to start streaming EEG/EMG/ECG data right away, head over to Getting Started. Happy bio-sensing!")),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The OpenBCI Cyton Boards come with a USB dongle that allows for communication between the Board and your computer. There is a BLE radio module (actually an ",(0,i.yg)("a",{parentName:"p",href:"http://www.rfduino.com/product/rfd22301-rfduino-ble-smt/index.html"},"RFduino 22301"),") on the Dongle and Board that make the communication happen. Here's some terms that are important to note:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The radio module on the Dongle is called the ",(0,i.yg)("strong",{parentName:"li"},"HOST")),(0,i.yg)("li",{parentName:"ul"},"The radio module on the Cyton Board is called the ",(0,i.yg)("strong",{parentName:"li"},"DEVICE")),(0,i.yg)("li",{parentName:"ul"},"Host-Device pairs can be programmed to transmit on up to ",(0,i.yg)("strong",{parentName:"li"},"25")," discreet channels"),(0,i.yg)("li",{parentName:"ul"},"There are ",(0,i.yg)("em",{parentName:"li"},"important")," differences in the firmware for 8-bit and 32-bit systems")),(0,i.yg)("p",null,"This page covers how the radio link works, and how to upload new firmware to the Dongle radio and the Board radio."),(0,i.yg)("h2",{id:"setting-up-your-system-to-program-openbci-radios"},"Setting up your system to program OpenBCI Radios"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"You will need:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Computer (Windows or Mac or Other)"),(0,i.yg)("li",{parentName:"ul"},"Arduino IDE Version 1.5.8 BETA"),(0,i.yg)("li",{parentName:"ul"},"Custom ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_RFduino/archive/master.zip"},"RFduino libraries for OpenBCI")),(0,i.yg)("li",{parentName:"ul"},"A 0.1uF capacitor (see Device section below)")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Steps:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download and install the ",(0,i.yg)("a",{parentName:"p",href:"http://www.arduino.cc/en/Main/OldSoftwareReleases#1.5.x"},"Arduino IDE Version 1.5.8 BETA"),"."),(0,i.yg)("p",{parentName:"li"},"On Windows be sure to download the file marked ",(0,i.yg)("inlineCode",{parentName:"p"},"Windows Installer"),"."),(0,i.yg)("p",{parentName:"li"},"On Mac download the ",(0,i.yg)("inlineCode",{parentName:"p"},"MAC OS X")," version, unzip the app and move it into Applications folder, and then install Java 6 if prompted.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_RFduino/archive/master.zip"},"OpenBCI_RFduino")," repo from our github.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Unzip the folder.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Now move the folder called RFduino and everything it contains to:"),(0,i.yg)("p",{parentName:"li"},"On a Mac ",(0,i.yg)("inlineCode",{parentName:"p"},"/Applications/Arduino.app/Contents/Resources/Java/hardware/arduino")),(0,i.yg)("p",{parentName:"li"},"On a Windows ",(0,i.yg)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Arduino-1.5.8\\hardware\\arduino")),(0,i.yg)("p",{parentName:"li"},"On Linux, put the RFduino folder and everything it contains in ",(0,i.yg)("inlineCode",{parentName:"p"},"arduino-1.5.8/hardware/arduino")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE FOR LINUX USERS"),(0,i.yg)("br",{parentName:"p"}),"\n","Linux users will need to have the program ",(0,i.yg)("a",{parentName:"p",href:"https://www.winehq.org/"},"wine")," installed in order to continue. There is a dependency for the arduino code that requires the running ",(0,i.yg)("inlineCode",{parentName:"p"},"RFDLoader.exe")," to continue.\nIn order to run this .exe, do the following:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Navigate to the /hardware/arduino/RFduino folder"),(0,i.yg)("li",{parentName:"ol"},"Rename RFDLoader to RFDLoader.old (just in case)"),(0,i.yg)("li",{parentName:"ol"},"Replace RFDLoader with a script that uses wine to call RFDLoader.exe, forwarding the serial port."),(0,i.yg)("li",{parentName:"ol"},"Drag RFDLoader to the RFduino folder")),(0,i.yg)("p",null,"That's it! As long as ",(0,i.yg)("inlineCode",{parentName:"p"},"wine")," is installed normally the script should take care of any issues you may have when uploading."),(0,i.yg)("h2",{id:"using-radio-firmware-version-2xx-fall-2016"},"Using Radio Firmware Version 2.x.x (Fall 2016)"),(0,i.yg)("h3",{id:"getting-radio-firmware-version-2xx-fall-2016"},"Getting Radio Firmware Version 2.x.x (Fall 2016)"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/tree/master"},"OpenBCI_Radios Firmware")," repo from our github. You may also clone the repo into your libraries folder cited after step 6.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Unzip the folder, and if it is named OpenBCI_Radios-master, rename it to just OpenBCI_Radios.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Move the OpenBCI_Radios folder from your downloads into:"),(0,i.yg)("p",{parentName:"li"},"On Mac/Linux:\nDocuments/Arduino/libraries"),(0,i.yg)("p",{parentName:"li"},"On Windows:\nC:","\\","Users","\\","username","\\","Documents","\\","Arduino","\\","libraries"),(0,i.yg)("p",{parentName:"li"},"If there is no 'libraries' folder in the above folder, create one.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the Arduino IDE 1.5.8, restart the Arduino IDE if it was open."))),(0,i.yg)("p",null,"If you want to modify the firmware that the OpenBCI Dongle came with, or roll your own, make sure that you are setting the RFduino up as a DEVICE, and that channel is selected correctly."),(0,i.yg)("h2",{id:"uploading-device-firmware-to-cyton-board"},"Uploading Device Firmware to Cyton Board"),(0,i.yg)("h3",{id:"overview-1"},"Overview"),(0,i.yg)("p",null,"In order to upload code to the Cyton Board RFduino, you need to have a Serial connection to the computer. This is traditionally done with a FTDI cable breakout (SparkFun and Adafruit sell several). If you have an FTDI cable or breakout handy, make sure that it is a 3V device! ",(0,i.yg)("strong",{parentName:"p"},"Using a 5V FTDI device could damage the RFduino on-board OpenBCI!")," It is also possible to upload code to the Board mounted RFduino using the OpenBCI Dongle. This page will go over a few ways of uploading firmware to the OpenBCI Device radios."),(0,i.yg)("p",null,"Again, there is a small difference between the 8-bit and Cyton boards, explained below."),(0,i.yg)("h3",{id:"upload-device-radio-firmware-version-2xx-fall-2016"},"Upload DEVICE Radio Firmware Version 2.x.x (Fall 2016)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Steps:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"In the Arduino IDE 1.5.8 go ",(0,i.yg)("inlineCode",{parentName:"p"},"File--\x3eExamples--\x3eOpenBCI_Radios--\x3eRadioDevice32bit")," which will launch the Device firmware.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Then go to ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools--\x3eBoard")," and select ",(0,i.yg)("inlineCode",{parentName:"p"},"RFduino"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Follow one of the methods listed in the next section to connect the Device to your computer.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Now go ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools--\x3ePort")," and select the ",(0,i.yg)("inlineCode",{parentName:"p"},"COM")," port (Windows) or ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/tty.usbserial-*")," port (Mac/Linux) for your device or")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Verify" on the toolbar (checkmark icon) to verify everything is ready. If you see ',(0,i.yg)("inlineCode",{parentName:"p"},"Done Compiling")," then you are ready to go!")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Choose a channel number for your device. The channel number can be set in the code ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/blob/master/examples/RadioDevice32bit/RadioDevice32bit.ino#L22"},(0,i.yg)("inlineCode",{parentName:"a"},"radio.begin(OPENBCI_MODE_DEVICE,20);")),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Upload" on the toolbar (the icon to the right of the checkmark). Your code is now uploading to the OpenBCI Device!'))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Important!")," As of firmware version 2, you must first flash the board with the line ",(0,i.yg)("inlineCode",{parentName:"p"},"radio.flashNonVolatileMemory();")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"setup()")," function uncommented, then comment the line back out and program again. It is very important that you reprogram the board with the line commented out. We must do this because with firmware version two, the channel number is stored to non-volatile memory so we can change the channel number of the system from the PC/Driver, turn the system off and still remember the newly set channel. ",(0,i.yg)("em",{parentName:"p"},"If this is your first time uploading firmware version two (you bought your board prior to October 2016), you may ignore this message the first time you upload radio code.")),(0,i.yg)("h3",{id:"program-device-radio-with-openbci-dongle"},"Program DEVICE Radio with OpenBCI Dongle"),(0,i.yg)("p",null,"The idea here is to use the FTDI chip on the Dongle to bridge USB to Serial for the upload process. There is a bit of prep, and a special program for the Dongle radio so that it doesn't get in the way."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"dongleWithHeaders",src:t(54631).A,width:"500",height:"423"})),(0,i.yg)("p",null,"First, solder the headers that came with your OpenBCI Dongle. Then, move the switch to the RESET position, and upload some dummy code to the Dongle radio so that it doesn't interfere with the Serial upload process."),(0,i.yg)("h3",{id:"upload-pass-thru-radio-firmware-version-2xx-fall-2016"},"Upload Pass Thru Radio Firmware Version 2.x.x (Fall 2016)"),(0,i.yg)("p",null,"Go to the Arduino IDE 1.5.8 and do ",(0,i.yg)("inlineCode",{parentName:"p"},"File--\x3eExamples--\x3eOpenBCI_Radios--\x3eRadioPassThru32bit"),". Make sure to select ",(0,i.yg)("inlineCode",{parentName:"p"},"RFduino")," from ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools--\x3eBoard--\x3eRFDuino"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"0.1uF capacitors",src:t(75069).A,width:"750",height:"462"})),(0,i.yg)("p",null,"Next you need a breadboard, 8 jumpers and a 0.1uF capacitor. 0.1uF capacitors are small and lentil-shaped, and have the number 104 printed on one side. You can order them online from Amazon, eBay, or hobby electronics store. If you have blue buttons on your board you do not need the 0.1uF capacitor because it is already on the board. The 0.1uF capacitor needs to be in series between the Dongle GPIO6 pin and the OpenBCI Board RESET pin."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Dongle Lash Up",src:t(42642).A,width:"1558",height:"655"})),(0,i.yg)("p",null,"Here's a picture of the connections that you need to make. Power the OpenBCI board with the battery pack it came with, and so you only need these four connections to do the upload. You could also power the OpenBCI board with 3V from the Dongle, but that makes the next step a bit trickier. In any case, these are the basic pin connections that you need to make when powering the board with a battery pack:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"FTDI RX --\x3e RF TX"),(0,i.yg)("li",{parentName:"ul"},"FTDI TX --\x3e RF RX"),(0,i.yg)("li",{parentName:"ul"},"GPIO6 --\x3e 0.1uF Cap --\x3e RF RST"),(0,i.yg)("li",{parentName:"ul"},"GND --\x3e GND")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"8-bitDeviceConnection",src:t(60281).A,width:"750",height:"885"})),(0,i.yg)("p",null,"On The ",(0,i.yg)("strong",{parentName:"p"},"8-bit Board"),", the pins you need to connect to are accessed from the TOP of the board. Insert the jumpers into the holes in the correct position, and press them tightly against the sides of the holes to make a strong connection. Now, you can upload Device code to the RFduino on the OpenBCI 8-bit Board!"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Cyton Device Connection",src:t(92006).A,width:"750",height:"707"})),(0,i.yg)("p",null,"On the ",(0,i.yg)("strong",{parentName:"p"},"Cyton Board")," the pins you need to connect to are accessed from the BOTTOM of the board. Connect the jumper wires to the ",(0,i.yg)("em",{parentName:"p"},"center")," of the pads as shown and press tightly while uploading to the Device.\nHelpful tips:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use a 4pin female header to keep the wires in place"),(0,i.yg)("li",{parentName:"ul"},"Don't move your hand at all"),(0,i.yg)("li",{parentName:"ul"},"Place the board on a table or hard surface"),(0,i.yg)("li",{parentName:"ul"},"Keep the pins straight up and ",(0,i.yg)("em",{parentName:"li"},"centered")," on the pads. (perpendicular to the surface of the pads)")),(0,i.yg)("p",null,"There is a trick to it, it may take you a couple tries to get good at it. On Mac, It does not matter if you select ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/cu.*")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/tty.*")," in the port selection on the Arduino IDE."),(0,i.yg)("h2",{id:"program-device-radio-with-other-ftdi-boards"},"Program Device Radio with Other FTDI Boards"),(0,i.yg)("p",null,"There are many, many FTDI chip breakouts and cables out there that you can use. Here are a couple examples of popular devices."),(0,i.yg)("h3",{id:"rfduino"},"RFduino"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"RFduinoUSBshield",src:t(9714).A,width:"1568",height:"1468"})),(0,i.yg)("p",null,"RFduino makes a small board that they call a ",(0,i.yg)("a",{parentName:"p",href:"http://www.rfduino.com/product/rfd22121-usb-shield-for-rfduino/index.html"},"USB Shield"),". The form-factor and pinout of the OpenBCI Dongle matches exactly the pinout of the RFduino USB Shield. It's almost like we planned it that way ;) The only thing to change, is that the GPIO6 is not the same as the OpenBCI Dongle. Connect the OpenBCI pin RF RST to the RFduino USB Shield pin RESET. And, you don't need to provide a 0.1uF cap, because ",(0,i.yg)("strong",{parentName:"p"},"the USB Shield comes with the 0.1uF capacitor already installed!")),(0,i.yg)("h3",{id:"ftdi-friend"},"FTDI Friend"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"FTDI Friend",src:t(57650).A,width:"1000",height:"545"}),"\n",(0,i.yg)("img",{alt:"FTDI Friend Back",src:t(96291).A,width:"769",height:"458"})),(0,i.yg)("p",null,"Another example would be the ",(0,i.yg)("a",{parentName:"p",href:"http://www.adafruit.com/products/284"},"FTDI Friend")," from Adafruit. In this case, the pin labled 'RTS' is the one you want to connect to the RF RST on the OpenBCI board. We need to ensure that the 'RTS' pin is behaving correctly and that we're sending 3V logic out! Note the image of the back of the FTDI Friend. I have jumped the pads marked DTR, and also the 3V pads on VCC out. The Signal Logic Level already has the 3V pads jumped. I cut the trace on the RTS and 5V pads as well. These are the correct settings for uploading to RFduino using FTDI Friend. The 'RTS' pin jump to OpenBCI RF RST connection will also need a 0.1uF series capacitor. These breakouts are awesome, but they can be alittle advanced."),(0,i.yg)("h3",{id:"ftdi-basic-breakout"},"FTDI Basic Breakout"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"FTDI BasicFront",src:t(34549).A,width:"500",height:"388"}),"\n",(0,i.yg)("img",{alt:"FTDI BasicBack",src:t(97343).A,width:"498",height:"426"})),(0,i.yg)("p",null,"Sparkfun makes an FTDI breakout as well, and they come in a couple of flavors. 5V and 3V. By now, you know that you want the ",(0,i.yg)("a",{parentName:"p",href:"https://www.sparkfun.com/products/9873"},"3V Version"),". ","[pic coming soon]"," The Basic Breakout isn't as fancy as the FTDI Friend, but you do need to put a 0.1uF capacitor between the DTR pin and the RF RST pin. Also, if you have a version of this board with a voltage selection on the back, make sure that it has the 3.3V pads connected and the 5V pads cut!"),(0,i.yg)("h2",{id:"uploading-host-firmware-to-the-openbci-dongle"},"Uploading Host Firmware to the OpenBCI Dongle"),(0,i.yg)("h3",{id:"overview-2"},"Overview"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"DongleBack",src:t(25025).A,width:"747",height:"1000"})),(0,i.yg)("p",null,"This process does not require 3rd party hardware. Before you begin, note that there is a switch on the dongle that allows for selection between ",(0,i.yg)("strong",{parentName:"p"},"RESET")," and ",(0,i.yg)("strong",{parentName:"p"},"GPIO6"),". This switch routes the DTR pin from the FTDI chip to either RESET or GPIO6 pin on the RFduino module. When the switch is in the GPIO6 position, the Dongle is ready for general communication, code upload, and streamingData mode to the OpenBCI Board. When the switch is in the RESET position, it is possible to upload code to the RFduino right there on the Dongle."),(0,i.yg)("h3",{id:"upload-host-firmware-version-2xx-fall-2016"},"Upload HOST Firmware Version 2.x.x (Fall 2016)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Steps:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"In the Arduino IDE 1.5.8 go ",(0,i.yg)("inlineCode",{parentName:"p"},"File--\x3eExamples--\x3eOpenBCI_Radios--\x3eRadioHost32bit")," which will launch the Host firmware.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Then go to ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools--\x3eBoard")," and select ",(0,i.yg)("inlineCode",{parentName:"p"},"RFduino"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Plug the Dongle into your computer. Flip the switch to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Reset")," position if it is not already.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Now go ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools--\x3ePort")," and select the ",(0,i.yg)("inlineCode",{parentName:"p"},"COM")," port (Windows) or ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/tty.usbserial-*")," port (Mac/Linux) for your device or")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Verify" on the toolbar (checkmark icon) to verify everything is ready. If you see ',(0,i.yg)("inlineCode",{parentName:"p"},"Done Compiling")," then you are ready to go!")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Choose a channel number for your device. The channel number can be set in the code see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/blob/master/examples/RadioHost32bit/RadioHost32bit.ino#L30"},(0,i.yg)("inlineCode",{parentName:"a"},"radio.begin(OPENBCI_MODE_HOST,20);")),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Click "Upload" on the toolbar (the icon to the right of the checkmark). Your code is now uploading to the OpenBCI Dongle!'))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Important!")," As of firmware version 2, you must first flash the board with the line ",(0,i.yg)("inlineCode",{parentName:"p"},"radio.flashNonVolatileMemory();")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"setup()")," function uncommented, then comment the line back out and program again. It is very important that you reprogram the board with the line commented out. We must do this because with firmware version two, the channel number is stored to non-volatile memory so we can change the channel number of the system from the PC/Driver, turn the system off and still remember the newly set channel. ",(0,i.yg)("em",{parentName:"p"},"If this is your first time uploading firmware version two (your bought your board prior to October 2016), you may ignore this message the first time you upload radio code.")),(0,i.yg)("h2",{id:"using-radio-firmware-version-1xx-2014---fall-2016"},"Using Radio Firmware Version 1.x.x (2014 - Fall 2016)"),(0,i.yg)("p",null,"The following is for working with our original radio firmware. Please refer to the images above when following these instrucitons."),(0,i.yg)("h3",{id:"getting-radio-firmware-version-1xx-2014---fall-2016"},"Getting Radio Firmware Version 1.x.x (2014 - Fall 2016)"),(0,i.yg)("p",null,"Download the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/tree/maint/1.0.0"},"OpenBCI_Radios")," repo from our github, and place it in the proper location depending upon your OS."),(0,i.yg)("p",null,"Put the RFduino folder and everything it contains in one of the following folders:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nOn Mac: /Applications/Arduino.app/Contents/Resources/Java/hardware/arduino\n\nOn Windows: C\\Program Files (x86)\\Arduino-1.5.x\\hardware\\arduino\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Note")),': To upload code to the Cyton board, you need Arduino v1.8.0 or later, while you need Arduino v1.5.8 to upload code to the dongle. If you have already installed Ardiono v1.8.0, you may see an error message while installing 1.5.8 saying that you need to uninstall v1.8.0. Instead of doing that, simply move the existing "Arduino" program folder (which should be 1.8.0) in your Program Files to another folder (such as "Documents"). Go to your program manager (called "Change or Remove Program" in Windows, press Uninstall Arduino 1.8.0, and confirm if told that there was an error in uninstalling 1.8.0. Then, install 1.5.8. Rename the new "Arduino" program folder (which should now be 1.5.8) to "Arduino 1.5.8", and rename the Arduino folder that you moved to the name "Arduino 1.8.0". Move this folder back to your Program Files where "Arduino 1.5.8" is located, allowing you to keep both versions.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note for Windows users")," While installing 1.5.8 if the installer instructs you to uninstall 1.8.0, move the Arduino folder from ",(0,i.yg)("inlineCode",{parentName:"p"},"Program Files (x86)")," to your downloads folder. Rename this folder to ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino_1.8.0"),". Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"Change or remove program")," app in control panel and uninstall the Arduino application. There will be a popup indicating that the files do not exist and asking if you want to remove the program from the files list, select yes. Then install 1.5.8 as normal. Navigate to back to your ",(0,i.yg)("inlineCode",{parentName:"p"},"Program Files (x86)")," folder and locate the Arduino folder. Rename this folder to ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino_1.5.8"),". Now drag and drop the ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino_1.8.0")," back into ",(0,i.yg)("inlineCode",{parentName:"p"},"Program Files (x86)")," folder."),(0,i.yg)("p",null,"The files contained in the RFduino folder are custom builds for OpenBCI by our good friends over at RFdigital. Those guys are great! They helped us to squeeze all of the speed we could get out of the RFduinoGZLL library, and also gave us access to 25 discreet channels for OpenBCI boards to work on. ROCK!"),(0,i.yg)("h3",{id:"upload-device-radio-firmware-version-1xx-2014---fall-2016"},"Upload DEVICE Radio Firmware Version 1.x.x (2014 - Fall 2016)"),(0,i.yg)("p",null,"For 32bit boards, you will want to upload: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/blob/maint/1.0.0/OpenBCI_32bit_Device/OpenBCI_32bit_Device.ino"},(0,i.yg)("inlineCode",{parentName:"a"},"OpenBCI_32bit_Device.ino"))),(0,i.yg)("p",null,"For 8bit boards, you will want to upload:\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Radios/blob/maint/1.0.0/OpenBCI_8bit_Device/OpenBCI_8bit_Device.ino"},(0,i.yg)("inlineCode",{parentName:"a"},"OpenBCI_8bit_Device.ino"))),(0,i.yg)("h3",{id:"upload-pass-thru-radio-firmware-version-1xx-2014---fall-2016"},"Upload Pass Thru Radio Firmware Version 1.x.x (2014 - Fall 2016)"),(0,i.yg)("p",null,"We provide an Arduino sketch called OpenBCI_Dongle_PassThru.ino which makes this possible. After uploading, make sure to move the switch back over to the GPIO6 side!"),(0,i.yg)("p",null,"Now hit the upload button, it's the button to the right of the check mark in the top left of the IDE. Don't worry! You can re-load the Host code easily after programming the Device. After uploading, make sure to move the switch back over to the GPIO6 side!"),(0,i.yg)("h3",{id:"upload-host-firmware-version-1xx-2014---fall-2016"},"Upload HOST Firmware Version 1.x.x (2014 - Fall 2016)"),(0,i.yg)("p",null,"If you want to modify the firmware that the OpenBCI Dongle came with, or roll your own, make sure that you are setting the RFduino up as a HOST, and that channel is selected correctly. The channel your boards were shipped with is noted on the anit-static baggie that it came in."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\n    // place this above the setup()\n    #include <RFduinoGZLL.h>  // using the Gazelle Stack\n    device_t role = HOST;  // This is the HOST\n\n    void setup(){\n         RFduinoGZLL.channel = 6;  // use channels 2-25. 1 is same as 0 and 0-8 in normal GZLL library\n         RFduinoGZLL.begin(role);  // start the GZLL stack\n         // more stuff here\n    }\n\n")),(0,i.yg)("p",null,"Also, make sure that you use the code that is specific to your board. There are important differences between the way the 8bit and Cyton code functions! Both the 8bit Host and Cyton Host code are downloaded with the RFduino libraries above."))}g.isMDXComponent=!0},92006:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/32bitDeviceConnection-b2c20b02af34254d3d6a22c48385236b.jpg"},60281:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/8bitDeviceConnection-14a416fac3374b8f64525e6e99339feb.jpg"},42642:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/DonglePassThruLashup-70002cfde0874eb075d0672bca98f548.jpg"},97343:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/FTDI_BASICback-76a49e368ff7c627ab934db7a1a1a3e2.jpg"},34549:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/FTDI_BASICfront-7f20e83544d5fd75b9c7e65b5c52c7f5.jpg"},57650:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/FTDI_Friend-27e370bf10343aa17fcd61c56fee72ac.jpg"},96291:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/FTDI_FriendBack-09836e29cc6688981514e50c664b2630.jpg"},9714:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/RFduinoUSBshield-2cad2693939de466c859dc6e6cae0d36.jpg"},75069:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/caps-c1a7096cf8e15b6fa087426549ff5711.jpg"},25025:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/dongleBack_switch-61e10f98196b13d2303584c082f73b33.jpg"},54631:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/dongleHeaders-bd6d0845f1f56183013f34e3389e10ae.jpg"}}]);