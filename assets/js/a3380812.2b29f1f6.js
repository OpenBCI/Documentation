"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3991],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,h=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(58168),r=n(98587),o=(n(96540),n(15680)),i=["components"],l={id:"FocusArduino",title:"Send Focus Data from GUI to Arduino"},p=void 0,s={unversionedId:"Examples/EEGProjects/FocusArduino",id:"Examples/EEGProjects/FocusArduino",title:"Send Focus Data from GUI to Arduino",description:"This tutorial shows you how to get started streaming data from the OpenBCI_GUI's Focus Widget via Serial connection to an Arduino UNO Rev3.",source:"@site/docs/Examples/EEGProjects/17-Arduino_Focus_Example.md",sourceDirName:"Examples/EEGProjects",slug:"/Examples/EEGProjects/FocusArduino",permalink:"/Examples/EEGProjects/FocusArduino",draft:!1,editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EEGProjects/17-Arduino_Focus_Example.md",tags:[],version:"current",lastUpdatedAt:1673040892,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:17,frontMatter:{id:"FocusArduino",title:"Send Focus Data from GUI to Arduino"},sidebar:"docs",previous:{title:"EMG-controlled Piano",permalink:"/Examples/EMGProjects/EMGpiano"},next:{title:"Motor Imagery",permalink:"/Examples/EEGProjects/MotorImagery"}},u={},d=[{value:"What do I need?",id:"what-do-i-need",level:2},{value:"Helpful Background Skills",id:"helpful-background-skills",level:2},{value:"Step 1 - Load the Example in the Arduino IDE",id:"step-1---load-the-example-in-the-arduino-ide",level:3},{value:"Step 2 - Upload the Arduino sketch",id:"step-2---upload-the-arduino-sketch",level:3},{value:"Step 3 - Open OpenBCI_GUI in Synthetic Mode",id:"step-3---open-openbci_gui-in-synthetic-mode",level:3},{value:"Step 4 - Start Streaming",id:"step-4---start-streaming",level:3},{value:"Open and Setup the Networking Widget",id:"open-and-setup-the-networking-widget",level:4},{value:"Open the Focus Widget. Then, click &quot;Start Data Stream&quot; and then &quot;Start&quot; in the Networking Widget.",id:"open-the-focus-widget-then-click-start-data-stream-and-then-start-in-the-networking-widget",level:4},{value:"Next, turn off channels 5 through 8 to simulate Relaxed state.",id:"next-turn-off-channels-5-through-8-to-simulate-relaxed-state",level:4},{value:"Step 5 - Learn! Create! Share!",id:"step-5---learn-create-share",level:3}],c={toc:d},g="wrapper";function h(e){var t=e.components,l=(0,r.A)(e,i);return(0,o.yg)(g,(0,a.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This tutorial shows you how to get started streaming data from the OpenBCI_GUI's Focus Widget via Serial connection to an ",(0,o.yg)("a",{parentName:"p",href:"https://store.arduino.cc/usa/arduino-uno-rev3"},"Arduino UNO Rev3"),".\nHead ",(0,o.yg)("a",{parentName:"p",href:"https://www.instructables.com/id/Send-Focus-Data-From-OpenBCI-GUI-to-Arduino/"},(0,o.yg)("strong",{parentName:"a"},"HERE"))," to find the OpenBCI/Arduino Focus Data tutorial in the updated Instructable format!"),(0,o.yg)("h2",{id:"what-do-i-need"},"What do I need?"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/latest"},"OpenBCI_GUI")," standalone app or Processing sketch"),(0,o.yg)("li",{parentName:"ul"},"An ",(0,o.yg)("a",{parentName:"li",href:"https://store.arduino.cc/usa/arduino-uno-rev3"},"Arduino UNO"),", or other similar device"),(0,o.yg)("li",{parentName:"ul"},"An ",(0,o.yg)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage"},"OpenBCI Board")," ",(0,o.yg)("em",{parentName:"li"},"(Optional)"))),(0,o.yg)("h2",{id:"helpful-background-skills"},"Helpful Background Skills"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/HomePage"},"Arduino Basics")),(0,o.yg)("li",{parentName:"ul"},"Knowledge of ",(0,o.yg)("a",{parentName:"li",href:"https://www.arduino.cc/reference/en/"},"Arduino")," or C-based programming"),(0,o.yg)("li",{parentName:"ul"},"Experience running the OpenBCI GUI ",(0,o.yg)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"from the Processing IDE")," ",(0,o.yg)("em",{parentName:"li"},"(Optional)"))),(0,o.yg)("h3",{id:"step-1---load-the-example-in-the-arduino-ide"},"Step 1 - Load the Example in the Arduino IDE"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/Documentation/blob/master/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino"},"OpenBCI_GUI-FocusArduino.ino")," file is designed to serve as a simple starting point for creating your own Arduino project using data from the GUI over serial."),(0,o.yg)("p",null,"You can copy/paste the code from Github into the Arduino IDE or ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenBCI/Documentation/archive/master.zip"},"download the Docs")," and navigate to the example ",(0,o.yg)("inlineCode",{parentName:"p"},"/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino"),"."),(0,o.yg)("h3",{id:"step-2---upload-the-arduino-sketch"},"Step 2 - Upload the Arduino sketch"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Upload Arduino Sketch",src:n(10198).A,width:"1224",height:"1014"})),(0,o.yg)("p",null,"After uploading the sketch, you can close or minimize the Arduino IDE, but keep the Arduino connected to the computer. The sketch we just uploaded is running!"),(0,o.yg)("h3",{id:"step-3---open-openbci_gui-in-synthetic-mode"},"Step 3 - Open OpenBCI_GUI in Synthetic Mode"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Open GUI Synthetic Mode",src:n(12075).A,width:"590",height:"532"})),(0,o.yg)("h3",{id:"step-4---start-streaming"},"Step 4 - Start Streaming"),(0,o.yg)("h4",{id:"open-and-setup-the-networking-widget"},"Open and Setup the Networking Widget"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Setup Networking Widget",src:n(85994).A,width:"510",height:"363"})),(0,o.yg)("h4",{id:"open-the-focus-widget-then-click-start-data-stream-and-then-start-in-the-networking-widget"},'Open the Focus Widget. Then, click "Start Data Stream" and then "Start" in the Networking Widget.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"OpenBCI Serial Not Focused",src:n(94232).A,width:"1136",height:"902"})),(0,o.yg)("h4",{id:"next-turn-off-channels-5-through-8-to-simulate-relaxed-state"},"Next, turn off channels 5 through 8 to simulate Relaxed state."),(0,o.yg)("p",null,"The Arduino's built-in LED should blink when the Focus Widget reads ",(0,o.yg)("inlineCode",{parentName:"p"},"Relaxing"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"OpenBCI Serial Focused",src:n(19711).A,width:"1136",height:"902"})),(0,o.yg)("h3",{id:"step-5---learn-create-share"},"Step 5 - Learn! Create! Share!"),(0,o.yg)("p",null,"From here, you can add more to your new Arduino project to react to Focus data from the OpenBCI_GUI:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Use Live Data from a ",(0,o.yg)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton")," or ",(0,o.yg)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"Ganglion"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Try controlling even more LEDs using the Arduino")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Try controlling a motor or group of motors")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Make a second copy of your project and make it a two player game!")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://openbci.com/community/"},"Share what you've made in a community post!")))))}h.isMDXComponent=!0},12075:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_ArduinoFocus_SelectSyntheticMode-013338643688173d20a38502719b292a.png"},94232:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_ArduinoFocus_Serial_NotRelaxed-f7e400ad3c4306bc31bb4d1d61dbe53c.png"},19711:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_ArduinoFocus_Serial_Relaxed-e89a4c6f8828ce13ae76515fa36df4d1.png"},85994:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_ArduinoFocus_SetupNetworkingWidgetSerial-7648726e80952ae59e459365001052c4.png"},10198:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/gui_arduino_uploadArduinoSketchIDE-10148a4d0ba99f80d181695fc8846c2a.png"}}]);