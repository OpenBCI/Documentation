"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),h=r,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72382:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"CytonDataFormat",title:"Cyton Data Format"},s=void 0,d={unversionedId:"Cyton/CytonDataFormat",id:"Cyton/CytonDataFormat",title:"Cyton Data Format",description:'This discussion of the OpenBCI data format only applies to OpenBCI v1 (2014-2016) and v2.0.0 (Fall 2016). For OpenBCI Cyton, the OpenBCI board contains either a ChipKIT or ATmega microcontroller that can both be programmed through the Arduino IDE. The Cyton board has an on-board RFDuino radio module acting as a "Device". The Cyton system includes a USB dongle for the PC, which acts as the RFDuino "Host". The format of the OpenBCI data as seen on the PC is defined by a combination of the Arduino code on the Cyton board and of the RFDuino code running on the Host. So, if you don\'t like the data format defined here, feel free to change it! For more info on the v2 firmware, see these Notes On Updating and Using v2.0.0 Cyton Firmware. There is also further information on controlling the OpenBCI Cyton on our OpenBCI Cyton SDK page.',source:"@site/docs/Cyton/03-Cyton_Data_Format.md",sourceDirName:"Cyton",slug:"/Cyton/CytonDataFormat",permalink:"/Cyton/CytonDataFormat",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Cyton/03-Cyton_Data_Format.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:3,frontMatter:{id:"CytonDataFormat",title:"Cyton Data Format"},sidebar:"docs",previous:{title:"Cyton Specs",permalink:"/Cyton/CytonSpecs"},next:{title:"Cyton Board SDK",permalink:"/Cyton/CytonSDK"}},p=[{value:"Proprietary (&quot;RFDuino&quot;) vs Standard Bluetooth",id:"proprietary-rfduino-vs-standard-bluetooth",children:[],level:2},{value:"Serial Setup",id:"serial-setup",children:[],level:2},{value:"Startup",id:"startup",children:[{value:"<strong>Cyton Board</strong>",id:"cyton-board",children:[],level:3},{value:"<strong>8bit Board (deprecated)</strong>",id:"8bit-board-deprecated",children:[],level:3}],level:2},{value:"Initiating Binary Transfer",id:"initiating-binary-transfer",children:[{value:"Firmware Version 1.0.0 (2014 to Fall 2016)",id:"firmware-version-100-2014-to-fall-2016",children:[],level:4},{value:"Firmware Version 2.0.0 (Fall 2016 to Now)",id:"firmware-version-200-fall-2016-to-now",children:[],level:4}],level:2},{value:"Binary Format",id:"binary-format",children:[{value:"Firmware Version 1.0.0 (2014 to Fall 2016)",id:"firmware-version-100-2014-to-fall-2016-1",children:[],level:4},{value:"Firmware Version 2.0.0 (Fall 2016 to Now)",id:"firmware-version-200-fall-2016-to-now-1",children:[],level:4}],level:2},{value:"24-Bit Signed Data Values",id:"24-bit-signed-data-values",children:[],level:2},{value:"16-Bit Signed Data Values",id:"16-bit-signed-data-values",children:[],level:2},{value:"32-Bit Unsigned Time Stamp",id:"32-bit-unsigned-time-stamp",children:[],level:2},{value:"Interpreting the EEG Data",id:"interpreting-the-eeg-data",children:[],level:2},{value:"16 Channel Data with Daisy Mdule",id:"16-channel-data-with-daisy-mdule",children:[{value:"Room For Improvement",id:"room-for-improvement",children:[],level:3}],level:2}],m={toc:p},c="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This discussion of the OpenBCI data format only applies to OpenBCI ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," (2014-2016) and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0"),' (Fall 2016). For OpenBCI Cyton, the OpenBCI board contains either a ChipKIT or ATmega microcontroller that can both be programmed through the Arduino IDE. The Cyton board has an on-board RFDuino radio module acting as a "Device". The Cyton system includes a USB dongle for the PC, which acts as the RFDuino "Host". The format of the OpenBCI data as seen on the PC is defined by a combination of the Arduino code on the Cyton board and of the RFDuino code running on the Host. So, if you don\'t like the data format defined here, feel free to change it! For more info on the v2 firmware, see these ',(0,i.kt)("a",{parentName:"p",href:"/Cyton/CytonProgram"},"Notes On Updating and Using v2.0.0 Cyton Firmware"),". There is also further information on controlling the OpenBCI Cyton on our ",(0,i.kt)("a",{parentName:"p",href:"/Cyton/CytonSDK"},"OpenBCI Cyton SDK page"),"."),(0,i.kt)("h2",{id:"proprietary-rfduino-vs-standard-bluetooth"},'Proprietary ("RFDuino") vs Standard Bluetooth'),(0,i.kt)("p",null,"OpenBCI Cyton uses RFDuino modules for its Bluetooth wireless connection. To achieve the highest data rates, OpenBCI supplies a RFDuino USB dongle that connects to the computer. When using this USB dongle, higher data rates can be achieved versus using a standard bluetooth 4.n BLE connection."),(0,i.kt)("p",null,"If you prefer to use a standard bluetooth connection (to a mobile phone, for instance), that software and data format has not yet been defined."),(0,i.kt)("h2",{id:"serial-setup"},"Serial Setup"),(0,i.kt)("p",null,'The RFDuino USB dongle (the RFDuino "Host") is connected to an FTDI USB',"<",">","Serial converter configured to appear to the computer as if it is a standard serial port running at a rate of 115200 baud using the typical 8-N-1. It is possible to run at faster baud (FT231XQ-R on dongle tested up to 1Mbaud), but 115200 is required if you want to upload code to the target uC."),(0,i.kt)("h2",{id:"startup"},"Startup"),(0,i.kt)("h3",{id:"cyton-board"},(0,i.kt)("strong",{parentName:"h3"},"Cyton Board")),(0,i.kt)("p",null,"The chipKIT on our 32bit Board does not go through a reset cycle when its serial port is opened. Because of this, it's possible to connect to the 32bit board and not know it's state. In this case, the terminal or application should write a ",(0,i.kt)("strong",{parentName:"p"},"v")," to the serial port, which causes the system to reset its state to default values."),(0,i.kt)("h3",{id:"8bit-board-deprecated"},(0,i.kt)("strong",{parentName:"h3"},"8bit Board (deprecated)")),(0,i.kt)("p",null,"When the serial port for the dongle is opened by your PC, it will reset an 8bit Board. That's because the DTR signal from FTDI is getting sent over air, and the ATmega is configured as an Arduino UNO. You will see the familiar blink of the pin 13 LED. After a second or so, you will see the OpenBCI board generate a few lines of ASCII text displaying the device IDs of the ADS1299 and Accelerometer ending in $$$. If you are writing client software for the PC, your software must expect an ASCII string on startup, and look for the $$$ to know it is ready to receive commands."),(0,i.kt)("h2",{id:"initiating-binary-transfer"},"Initiating Binary Transfer"),(0,i.kt)("p",null,"Once the OpenBCI has initialized itself and sent the $$$, it waits for commands. In other words, it sends no data until it is told to start sending data. To begin data transfer, transmit a single ASCII ",(0,i.kt)("strong",{parentName:"p"},"b"),". Once the ",(0,i.kt)("strong",{parentName:"p"},"b")," is received, continuous transfer of data in binary format will ensue. To turn off the fire hose, send an ",(0,i.kt)("strong",{parentName:"p"},"s"),"."),(0,i.kt)("h4",{id:"firmware-version-100-2014-to-fall-2016"},"Firmware Version 1.0.0 (2014 to Fall 2016)"),(0,i.kt)("p",null,"Both the Host and Device radios take notice of the ",(0,i.kt)("strong",{parentName:"p"},"b")," and ",(0,i.kt)("strong",{parentName:"p"},"s"),", and go into or out of streamingMode accordingly. That's right, the radio modules on both the OpenBCI board and the Dongle have two states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"!streamingData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The radios appear to be a transparent UART betweeen the PC and target uC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonSDK"},"Command characters")," need some delay before and after sending to pass from PC to target uC"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"streamingData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Device radio expects to get 31 bytes in each data packet from the uC"),(0,i.kt)("li",{parentName:"ul"},"After 1 second of no transmission, or not getting 31 bytes in time, Device and Host will revert to ",(0,i.kt)("strong",{parentName:"li"},"!streamingData")," mode"),(0,i.kt)("li",{parentName:"ul"},"Command characters can be sent from PC following timing protocol above")))),(0,i.kt)("h4",{id:"firmware-version-200-fall-2016-to-now"},"Firmware Version 2.0.0 (Fall 2016 to Now)"),(0,i.kt)("p",null,"There are no states in the new Device and Host radio code. However we had to introduce a packet format that ",(0,i.kt)("strong",{parentName:"p"},"must")," be followed when trying to send samples at 250Hz! You must send a one byte header ",(0,i.kt)("inlineCode",{parentName:"p"},"0x41")," then by 31 bytes of data (your choice), followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"0xCX")," where X is 0-F in hex. This X is carried through to the PC/Driver and is described towards the end of the next section."),(0,i.kt)("h2",{id:"binary-format"},"Binary Format"),(0,i.kt)("p",null,"Each packet contains a header followed by a sample counter, followed by 8 ADS channel data, followed by the three axes values of the accelerometer, followed by a footer. The accelerometer data are optional, and don't need to be sent with every packet when used. if unused, the bytes will read 0. This allows for user defined auxiliary data to be sent in the last six bytes before the footer. Also, there may be room for compressing more samples. Here are details on the format."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Header")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Byte 1: 0xA0  "),(0,i.kt)("li",{parentName:"ul"},"Byte 2: Sample Number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EEG Data"),(0,i.kt)("br",{parentName:"p"}),"\n","Note: values are 24-bit signed, MSB first"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bytes 3-5: Data value for EEG channel 1  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 6-8: Data value for EEG channel 2  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 9-11: Data value for EEG channel 3  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 12-14: Data value for EEG channel 4  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 15-17: Data value for EEG channel 5  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 18-20: Data value for EEG channel 6  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 21-23: Data value for EEG channel 6  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 24-26: Data value for EEG channel 8  ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aux Data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bytes 27-32: 6 bytes of data defined and parsed based on the ",(0,i.kt)("strong",{parentName:"li"},"Footer")," below")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Footer"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Byte 33: 0xCX where X is 0-F in hex")),(0,i.kt)("h4",{id:"firmware-version-100-2014-to-fall-2016-1"},"Firmware Version 1.0.0 (2014 to Fall 2016)"),(0,i.kt)("p",null,"The following table is sorted by ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop Byte"),". Drivers should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop Byte")," to determine how to parse the 6 ",(0,i.kt)("inlineCode",{parentName:"p"},"AUX")," bytes."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Stop Byte"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 27"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 28"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 29"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 30"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 31"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 32"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xC0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ0")))),(0,i.kt)("p",null,"AX1-AX0: Data value for accelerometer channel X\nAY1-AY0: Data value for accelerometer channel Y\nAZ1-AZ0: Data value for accelerometer channel Z"),(0,i.kt)("h4",{id:"firmware-version-200-fall-2016-to-now-1"},"Firmware Version 2.0.0 (Fall 2016 to Now)"),(0,i.kt)("p",null,"The following table is sorted by ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop Byte"),". Drivers should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop Byte")," to determine how to parse the 6 ",(0,i.kt)("inlineCode",{parentName:"p"},"AUX")," bytes."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Stop Byte"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 27"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 28"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 29"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 30"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 31"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 32"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ0"),(0,i.kt)("td",{parentName:"tr",align:null},"Standard with accel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:null},"Standard with raw aux")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:null},"User defined")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AV"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T0"),(0,i.kt)("td",{parentName:"tr",align:null},"Time stamped ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("em",{parentName:"strong"},"set"))," with accel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AV"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T0"),(0,i.kt)("td",{parentName:"tr",align:null},"Time stamped with accel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T0"),(0,i.kt)("td",{parentName:"tr",align:null},"Time stamped ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("em",{parentName:"strong"},"set"))," with raw aux")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0xC6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UDF"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T0"),(0,i.kt)("td",{parentName:"tr",align:null},"Time stamped with raw aux")))),(0,i.kt)("p",null,"AX1-AX0: Data value for accelerometer channel X\nAY1-AY0: Data value for accelerometer channel Y\nAZ1-AZ0: Data value for accelerometer channel Z"),(0,i.kt)("p",null,"We can still fit a 25Hz accelerometer in with time stamps due to some interlacing and timing constraints. Since we stream channel data at 250Hz and accelerometer at 25Hz; we have essentially 10 samples to send the accelerometer data in. When a ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC4")," you should parse ",(0,i.kt)("em",{parentName:"p"},"Byte 27")," to indicate what ",(0,i.kt)("em",{parentName:"p"},"Byte 28")," is:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 27"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Byte 28"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'X'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'x'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AX0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'Y'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'y'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AY0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'Z'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"'z'"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AZ0")))),(0,i.kt)("p",null,"Where ",(0,i.kt)("em",{parentName:"p"},"AC")," stands for accel code and is an ASCII character. An upper case signifies that ",(0,i.kt)("em",{parentName:"p"},"Byte 28")," is the upper 8 bits of the 16 bit signed integer, while a lower case character represents the lower 8 bits of the 16 bit signed integer. You combine both bytes to form the one number. For example, let's say a sample comes in with ",(0,i.kt)("em",{parentName:"p"},"AC")," equal to 'X', we would then store the value in ",(0,i.kt)("em",{parentName:"p"},"AV")," to a temporary variable. The next sample comes in with 'x' for it's ",(0,i.kt)("em",{parentName:"p"},"AC")," byte, we would then combine this sample's ",(0,i.kt)("em",{parentName:"p"},"Byte 28")," with the previous sample's ",(0,i.kt)("em",{parentName:"p"},"Byte 28")," and then convert as described in the section below called ",(0,i.kt)("em",{parentName:"p"},"16-Bit Signed Data Values"),"."),(0,i.kt)("p",null,"T3-T0: 32 bit unsigned integer OpenBCI board time representing time since the board was started in ms. Simply store as an unsigned integer."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0xC3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC5")," are special in that they contain the same exact data as their counter parts ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC5"),". However ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xC5")," are only sent after the time stamp/sync (",(0,i.kt)("strong",{parentName:"p"},"<"),") command is issued from the PC/Driver to the Board. When the Board parses a ",(0,i.kt)("strong",{parentName:"p"},"<")," it sets a flag high to send on the next sample a different end byte to allow for the PC/Driver to calculate a round trip response time."),(0,i.kt)("p",null,"UDF stands for User Defined and for a general driver perspective, should be left alone and sent up to the user."),(0,i.kt)("h2",{id:"24-bit-signed-data-values"},"24-Bit Signed Data Values"),(0,i.kt)("p",null,"For the EEG data values, you will note that we are transferring the data as a 24-bit signed integer, which is a bit unusual. We are using this number format because it is the native format used by the ADS1299 chip that is at the core of the Cyton board. To convert this unusual number format into a more standard 32-bit signed integer, you can steal some ideas from the example Processing (aka, Java) code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nint interpret24bitAsInt32(byte[] byteArray) {     \n    int newInt = (  \n     ((0xFF & byteArray[0]) <! 16) |  \n     ((0xFF & byteArray[1]) <! 8) |   \n     (0xFF & byteArray[2])  \n    );  \n    if ((newInt & 0x00800000) > 0) {  \n      newInt |= 0xFF000000;  \n    } else {  \n      newInt &= 0x00FFFFFF;  \n    }  \n    return newInt;  \n}  \n\n")),(0,i.kt)("h2",{id:"16-bit-signed-data-values"},"16-Bit Signed Data Values"),(0,i.kt)("p",null,"The accelerometer data, if used, is sent as a 16bit signed value. We're using a similar scheme to convert these values into 32bit integers in Processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nint interpret16bitAsInt32(byte[] byteArray) {\n    int newInt = (\n    ((0xFF & byteArray[0]) <! 8) |\n    (0xFF & byteArray[1])\n    );\n    if ((newInt & 0x00008000) > 0) {\n        newInt |= 0xFFFF0000;\n    } else {\n        newInt &= 0x0000FFFF;\n    }\n    return newInt;\n\n")),(0,i.kt)("p",null,'  \t{"}"}'),(0,i.kt)("h2",{id:"32-bit-unsigned-time-stamp"},"32-Bit Unsigned Time Stamp"),(0,i.kt)("p",null,"To time stamp data, if used, is sent as a 32 bit unsigned integer representing time since the board was started in ms. We are using a different scheme to convert these values into 32 bit integers in Processing."),(0,i.kt)("h2",{id:"interpreting-the-eeg-data"},"Interpreting the EEG Data"),(0,i.kt)("p",null,"Once you receive and parse the data packets, it is important to know how to interpret the data so that the EEG values are useful in a quantitative way. The two critical pieces of information are (1) the sample rate and (2) the scale factor."),(0,i.kt)("p",null,"For the sample rate, we set the default rate to 250 Hz. Faster rates are supported by the ADS1299, but the RFDuino wireless link and the serial limits might not be able to keep up with faster sample rates. If you give it a try, let us know how it worked!"),(0,i.kt)("p",null,"For the scale factor, this is the multiplier that you use to convert the EEG values from \u201ccounts\u201d (the int32 number that you parse from the binary stream) into scientific units like \u201cvolts\u201d. By default, our Arduino sketch running on the OpenBCI board sets the ADS1299 chip to its maximum gain (24x), which results in a scale factor of 0.02235 microVolts per count. Because the gain is user-configurable (24x, 12x, 8x, 6x, 4x, 2x, 1x), the scale factor will be different. If the gain is changed, the equation that you should use for determining the scale factor is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nScale Factor (Volts/count) = 4.5 Volts / gain / (2^23 - 1);\n\n")),(0,i.kt)("p",null,"Note that 2^23 might be an unexpected term in this equation considering that the ADS1299 is a 24-bit device. That's because the 24bit raw count value is in 2's complement format. This equation is from the ADS1299 data sheet, specifically it is from the text surrounding Table 7. This scale factor has also been confirmed experimentally using known calibration signals."),(0,i.kt)("p",null,"Accelerometer data must also be scaled before it can be correctly interpreted. The equation used to scale Accelerometer data is as follows (We assume 4Gs, so 2mG per digit):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nAccelerometer Scale Factor = 0.002 / 2^4;\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As of January 2021, these constants and equations are included in BrainFlow for Cyton users!")," This means users can pick any supported language and the data will already be scaled appropriately. These equations are still necessary if you plan to use data stored to SD card using a Cyton."),(0,i.kt)("h2",{id:"16-channel-data-with-daisy-mdule"},"16 Channel Data with Daisy Mdule"),(0,i.kt)("p",null,"Our 16 channel system allows for control of individual settings for all 16 channels, and data is retrieved from both ADS1299 IC at a rate of 250SPS. The current bandwith limitations on our serial radio links limit the number of packets we can send. To solve for this, we are sending data packet at the same rate of 250SPS, and alternating sample packets between the on Board ADS1299 and the on Daisy ADS1299. The method takes an average of the current and most recent channel values before sending to the radio. The first sample sent will be invalid because there is no previous sample to average it with.  After this, on ",(0,i.kt)("strong",{parentName:"p"},"odd")," sample numbers, the Board ADS1299 values are sent, and on ",(0,i.kt)("strong",{parentName:"p"},"even")," sample numbers, the Daisy ADS1299 samples are sent. When running the system with 16 channels, it is highly recommended that you use an SD card to store the raw (un-averaged) data for post processing."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"sample#"),(0,i.kt)("th",{parentName:"tr",align:"center"},"recorded"),(0,i.kt)("th",{parentName:"tr",align:"center"},"sent"),(0,i.kt)("th",{parentName:"tr",align:"right"},"sent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(0),daisy(0)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"an invalid sample")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(1),daisy(1)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"avg(board(0),board(1))"),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(2),daisy(2)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(daisy(1),daisy(2))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(3),daisy(3)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"avg(board(2),board(3))"),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(4),daisy(4)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(daisy(3),daisy(4))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(5),daisy(5)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"avg(board(4),board(5))"),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"board(6),daisy(6)"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(daisy(5),daisy(6))")))),(0,i.kt)("p",null,"The received averages might be upsampled to 250SPS in the following simple manner:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"received"),(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"right"},"upsampled board data"),(0,i.kt)("th",{parentName:"tr",align:"left"},"upsampled daisy data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(3)"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(sample(1),sample(3)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(4)"),(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(3)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"avg(sample(2),sample(4)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(5)"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(sample(3),sample(5)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(4)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(6)"),(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(5)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"avg(sample(4),sample(6)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(7)"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"right"},"avg(sample(5),sample(7)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(6)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"sample(8)"),(0,i.kt)("td",{parentName:"tr",align:"right"},"sample(7)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"avg(sample(6),sample(8)")))),(0,i.kt)("p",null,"The times of the upsampled values are delayed by 1 sample compared to the received values."),(0,i.kt)("h3",{id:"room-for-improvement"},"Room For Improvement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Change protocol to meet other standards.")," The over-air data is sent in packets (or frames, depending upon your preferred word). The maximum bytes allowed per packet is 32. We are reserving the first byte to use as a packet check-sum in our protocol. So the available bytes-per-packet, as far as the uC is concerned, is 31. The over-air protocol that the Dongle/RFduino Host gets is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Byte 1: Packet Counter"),(0,i.kt)("li",{parentName:"ul"},"Byte 2: Sample Number"),(0,i.kt)("li",{parentName:"ul"},"Bytes 3-5: Data value for EEG channel 1  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 6-8: Data value for EEG channel 2  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 9-11: Data value for EEG channel 3  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 12-14: Data value for EEG channel 4  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 15-17: Data value for EEG channel 5  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 18-20: Data value for EEG channel 6  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 21-23: Data value for EEG channel 6  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 24-26: Data value for EEG channel 8  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 27-28: Data value for accelerometer channel X  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 29-30: Data value for accelerometer channel Y  "),(0,i.kt)("li",{parentName:"ul"},"Bytes 31-32: Data value for accelerometer channel Z")),(0,i.kt)("p",null,"Our Host code removes the Packet Counter and adds the header and footer. It could be modified to work natively with other protocol specs for other signal processing software...."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data Compression.")," In situations where an increase in the sample rate, or higher channel counts are desired, a data compression scheme can be implemented. As noted above, when sending ",(0,i.kt)("strong",{parentName:"p"},"only")," the ADS1299 values for 8 channels there are six unused bytes in the radio packet. It may be possible to, for example, increase the sample rate, and compress two samples worth of ADS data into a single radio packet. Or fit all 16 channels of data into a single packet and avoid the averaging that is currently used."))}h.isMDXComponent=!0}}]);