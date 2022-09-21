"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3482],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7286:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"EMG_Tetris",title:"EMG-controlled Tetris"},l=void 0,p={unversionedId:"Examples/EMGProjects/EMG_Tetris",id:"Examples/EMGProjects/EMG_Tetris",title:"EMG-controlled Tetris",description:"In this tutorial, we will show you how to make your own muscle-controlled Tetris game. You can now play Tetris on your computer without pressing any keys!",source:"@site/docs/Examples/EMGProjects/Tetris_Tutorial.md",sourceDirName:"Examples/EMGProjects",slug:"/Examples/EMGProjects/EMG_Tetris",permalink:"/Examples/EMGProjects/EMG_Tetris",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EMGProjects/Tetris_Tutorial.md",tags:[],version:"current",lastUpdatedAt:1658939376,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"EMG_Tetris",title:"EMG-controlled Tetris"},sidebar:"docs",previous:{title:"EMG Chrome Dino Game",permalink:"/Examples/EMGProjects/EMG_Chrome_Dino_Game"},next:{title:"EMG-controlled Piano",permalink:"/Examples/EMGProjects/EMGpiano"}},c=[{value:"Materials Required",id:"materials-required",children:[],level:2},{value:"Step 1: Hardware Assembly.",id:"step-1-hardware-assembly",children:[],level:2},{value:"Step 2: Software Setup.",id:"step-2-software-setup",children:[],level:2},{value:"Step 3: Data Stream using the GUI.",id:"step-3-data-stream-using-the-gui",children:[],level:2},{value:"Step 4: Using a Python Script to Read the Data and Scroll.",id:"step-4-using-a-python-script-to-read-the-data-and-scroll",children:[],level:2}],d={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will show you how to make your own muscle-controlled Tetris game. You can now play Tetris on your computer without pressing any keys!"),(0,o.kt)("p",null,"To do that, we will be using the Cyton's built-in accelerometer to track head movement and EMG signals produced when you blink to rotate the pieces."),(0,o.kt)("p",null,"Check out an example video of this tutorial being put into action!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VpeLf-K2Iro"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/VpeLf-K2Iro/0.jpg",alt:"Tetris Demo Video"}))),(0,o.kt)("h2",{id:"materials-required"},"Materials Required"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"OpenBCI ",(0,o.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,o.kt)("li",{parentName:"ol"},"OpenBCI ",(0,o.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv"},"Ultracortex Mark IV")),(0,o.kt)("li",{parentName:"ol"},"Computer with downloaded OpenBCI ",(0,o.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"GUI"))),(0,o.kt)("h2",{id:"step-1-hardware-assembly"},"Step 1: Hardware Assembly."),(0,o.kt)("p",null,"Follow the Ultracortex Mark IV Getting Started ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openbci.com/AddOns/Headwear/MarkIV/"},"tutorial")," on this link to connect assemble and properly connect the channels on your headset. The linked tutorial will also show you how to connect the Cyton board and stream data to the OpenBCI GUI."),(0,o.kt)("h2",{id:"step-2-software-setup"},"Step 2: Software Setup."),(0,o.kt)("p",null,"Download and install Python (preferrably version 3). Python might already be installed on your computer. Type ",(0,o.kt)("inlineCode",{parentName:"p"},"python --version")," to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed: pyautogui, socket, sys, time, argparse, signal, json."),(0,o.kt)("h2",{id:"step-3-data-stream-using-the-gui"},"Step 3: Data Stream using the GUI."),(0,o.kt)("p",null,"For this project, you will be streaming data using UDP through the GUI from the Networking Widget. Open up the Accelerometer, EMG, and Networking widgets and configure the networking widget to look like below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EMG Tetris GUI UDP Screenshot",src:a(23852).Z})),(0,o.kt)("p",null,"Mainly, change the protocol from Serial to UDP and set the Data Type of Stream 1 and 2 as Accel/Aux and EMG respectively. Furthermore, change the Port of both Stream 1 and 2 to \u201c12345\u201d. Before continuing, ensure the electrodes are making good contact with the scalp by examining the noise in the timeseries widget. Proper data is essential for clean readings and control of the Tetris game."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Important"),":\xa0Make sure your EMG and Accelerometer widgets are open before you start streaming."))),(0,o.kt)("h2",{id:"step-4-using-a-python-script-to-read-the-data-and-scroll"},"Step 4: Using a Python Script to Read the Data and Scroll."),(0,o.kt)("p",null,"The Python script will search for the EMG and Accelerometer data streams. Once it finds them, it will read them and detect any spikes that correspond to blinks as well as movements of the head."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Download the Python script from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/blob/master/EMG_Controlled_Tetris/tetris.py"},"here"),"."))),(0,o.kt)("p",null,'Run the Python script in your preferred IDE or through your command line using "python tetris.py" in the directory where you have it saved. Once you run the script, you can start the data stream and start the UDP stream from the GUI data.'),(0,o.kt)("p",null,'Keep your head still for the less than 10 second calibration period. Once the calibration period is complete (indicated by the "Calibration done. You may now begin Tetris!" message), go ahead and navigate to your favorite online Tetris website with arrow and space controls (these controls can be modified using the variables at the start of the code).'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://jstris.jezevec10.com"},"https://jstris.jezevec10.com"),"."))),(0,o.kt)("p",null,"Try it out and send us a video of your final prototype!"))}m.isMDXComponent=!0},23852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EMG_Tetris_GUI_UDP_Screenshot-6312bebc6290e9b047a29f0d0b6388a5.png"}}]);