"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10928:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"MyoGanglion",title:"MyoWare OpenBCI Integration (Ganglion Board)"},d=void 0,s={unversionedId:"ThirdParty/Myoware/MyoGanglion",id:"ThirdParty/Myoware/MyoGanglion",title:"MyoWare OpenBCI Integration (Ganglion Board)",description:"Overview",source:"@site/docs/ThirdParty/Myoware/15-MyoWare_Integration_Ganglion.md",sourceDirName:"ThirdParty/Myoware",slug:"/ThirdParty/Myoware/MyoGanglion",permalink:"/ThirdParty/Myoware/MyoGanglion",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/ThirdParty/Myoware/15-MyoWare_Integration_Ganglion.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:15,frontMatter:{id:"MyoGanglion",title:"MyoWare OpenBCI Integration (Ganglion Board)"},sidebar:"docs",previous:{title:"MyoWare OpenBCI Integration (Cyton Board)",permalink:"/ThirdParty/Myoware/MyoCyton"},next:{title:"Pulse Sensor Guide",permalink:"/ThirdParty/Pulse_Sensor/Pulse_Sensor_Landing"}},p=[{value:"Overview",id:"overview",children:[],level:3},{value:"Materials Needed",id:"materials-needed",children:[],level:3},{value:"1. Soldering the MyoWare Headers",id:"1-soldering-the-myoware-headers",children:[],level:3},{value:"2. Preparing OpenBCI Ganglion Board",id:"2-preparing-openbci-ganglion-board",children:[],level:3},{value:"3. Wiring the MyoWare Board to the OpenBCI Ganglion Board",id:"3-wiring-the-myoware-board-to-the-openbci-ganglion-board",children:[],level:3},{value:"4. Streaming EMG Data with the OpenBCI GUI",id:"4-streaming-emg-data-with-the-openbci-gui",children:[],level:3},{value:"5. Using OpenBCI&#39;s EMG GUI Widget",id:"5-using-openbcis-emg-gui-widget",children:[],level:3}],c={toc:p},h="wrapper";function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This tutorial will show you how to read EMG data (electrical signals from muscles) using a MyoWare board, an OpenBCI Ganglion board, and the OpenBCI GUI. If you have a Cyton board instead, check out our ",(0,o.kt)("a",{parentName:"p",href:"/ThirdParty/Myoware/MyoCyton"},"Cyton board MyoWare integration tutorial!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MyoWare + Ganglion supplies",src:n(21001).Z})),(0,o.kt)("h3",{id:"materials-needed"},"Materials Needed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"MyoWare board"),(0,o.kt)("li",{parentName:"ol"},"OpenBCI Ganglion board, with power source"),(0,o.kt)("li",{parentName:"ol"},"Skintact sticky electrodes (for using the MyoWare board)"),(0,o.kt)("li",{parentName:"ol"},"Soldering iron and materials"),(0,o.kt)("li",{parentName:"ol"},"Two male-male jumper wires (like ",(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/266"},"these"),"), and three male-female jumper wires (like ",(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/826"},"these"),")")),(0,o.kt)("p",null,"Note: jumper wires aren't sold on the OpenBCI website, but we used the ones from Adafruit (linked above) for this tutorial"),(0,o.kt)("h3",{id:"1-soldering-the-myoware-headers"},"1. Soldering the MyoWare Headers"),(0,o.kt)("p",null,'Solder 5 wires to the MyoWare board as shown below. Solder the male-male wires to the "+" and "-" connects, and the male-female wires to the R, E, and M connects.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MyoWare Board post-soldering",src:n(95504).Z})),(0,o.kt)("p",null,'The wires attached to the "+" and "-" connects will be used to supply power to the board. They\'ll be attached to high voltage and ground outputs on the OpenBCI Ganglion board.'),(0,o.kt)("p",null,"The wires attached to the R, E, and M connects will transmit electrical signals from MyoWare's three electrodes to the OpenBCI Ganglion board. R is the reference electrode, the one attached to the black wire. M is the middle electrode, and E is the end electrode. The E and M electrodes will measure activity across a muscle."),(0,o.kt)("h3",{id:"2-preparing-openbci-ganglion-board"},"2. Preparing OpenBCI Ganglion Board"),(0,o.kt)("p",null,"Remove the transparent yellow stickers from the four switches on the front of the Ganglion Board."),(0,o.kt)("h3",{id:"3-wiring-the-myoware-board-to-the-openbci-ganglion-board"},"3. Wiring the MyoWare Board to the OpenBCI Ganglion Board"),(0,o.kt)("p",null,"Connect the 5 wires from the MyoWare board in step 1 to the Ganglion board, as shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Board with Headers",src:n(4701).Z})),(0,o.kt)("p",null,'The "+" and "-" from the MyoWare board should go to the DVDD and GNDA connects on the left side of the Ganglion board. R, E, and M will connect to the pins at the top.'),(0,o.kt)("p",null,"The wires should be connected like this:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"MyoWare Board"),(0,o.kt)("th",{parentName:"tr",align:null},"OpenBCI Ganglion Board"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"DVDD")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"GNDA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"R"),(0,o.kt)("td",{parentName:"tr",align:null},"D_G (top pin)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"E"),(0,o.kt)("td",{parentName:"tr",align:null},"1- (bottom pin)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"M"),(0,o.kt)("td",{parentName:"tr",align:null},"1+ (top pin)")))),(0,o.kt)("p",null,'R, "+", and "-" must always go to the pins shown above. E and M can also be connected to 2+ and 2- (the top and bottom "2" pins), or 3+ and 3-, or 4+ and 4-.'),(0,o.kt)("p",null,"When you have everything wired up, set the power switch on the MyoWare board to \"on\". Turn on the OpenBCI Ganglion board, turn on your computer's Bluetooth feature, and start the OpenBCI GUI software. If you're new to using a Ganglion board with your computer, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/GettingStarted/Boards/GanglionGS"},"Ganglion Getting Started Guide"),"."),(0,o.kt)("h3",{id:"4-streaming-emg-data-with-the-openbci-gui"},"4. Streaming EMG Data with the OpenBCI GUI"),(0,o.kt)("p",null,"Attach three Skintact electrodes to the three electrodes on the MyoWare board, and then stick the board on a muscle you'd like to monitor. The Adafruit MyoWare tutorial has good guidelines for MyoWare board placement: (https:)."),(0,o.kt)("p",null,"You'll be able to see signals from the MyoWare electrodes in the OpenBCI GUI. If you connected E and M to the 1- and 1+ pins on the OpenBCI Ganglion board, then the MyoWare data will appear in channel 1."),(0,o.kt)("p",null,"Here's what the GUI, and channel 1, will look like with the muscle at rest:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Resting",src:n(64500).Z})),(0,o.kt)("p",null,"And here's what channel 1 will look like after flexing the muscle:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Firing",src:n(40317).Z})),(0,o.kt)("h3",{id:"5-using-openbcis-emg-gui-widget"},"5. Using OpenBCI's EMG GUI Widget"),(0,o.kt)("p",null,'The OpenBCI GUI also has a widget for visualizing EMG data. To view it, click on the drop down menu under "FFT Plot", and select "EMG" instead:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ganglion EMG Before Flex",src:n(42271).Z})),(0,o.kt)("p",null,"Each circle and box represents a channel. The circle and box fill up as the intensity of the signal on that channel increases."),(0,o.kt)("p",null,"Here's what happens to the GUI when a muscle is flexed:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ganglion EMG After Flex",src:n(40992).Z})),(0,o.kt)("p",null,"You can use this change in signal intensity to trigger analog or digital events from within the GUI as you like. Check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"W_EMG.pde")," file for more information on the EMG widget."),(0,o.kt)("p",null,"Still have questions? Post on our ",(0,o.kt)("a",{parentName:"p",href:"http://openbci.com/index.php/forum/"},"Forum")," or let us know at ",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@openbci.com"},"contact@openbci.com"),"!"))}u.isMDXComponent=!0},40317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ganglion_GUI_after_flex-8f0df5ea2170646e9d1239905cddc6ba.png"},40992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ganglion_GUI_after_widget-99e056559636602c8d6919a8cdf530cc.png"},64500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ganglion_GUI_before_flexing-a7faa0b53d5870029b2843e93f51c5ca.png"},42271:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ganglion_GUI_before_widget-f5f4b4d833a508307b82eb1e84338816.png"},21001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flatlay_myoware_ganglion-a31ddcc2a23a69a7a71f1b76e4fce2ba.JPG"},4701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_myoware_connects-7d50e1d9b22251281fecea1772a720d7.JPG"},95504:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/myoware_post_solder-9427e35184a091fbf30406c08b90ff2d.jpg"}}]);