"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[404],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>y});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(o),p=n,y=g["".concat(s,".").concat(p)]||g[p]||d[p]||i;return o?r.createElement(y,a(a({ref:t},c),{},{components:o})):r.createElement(y,a({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9918:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var r=o(58168),n=o(98587),i=(o(96540),o(15680)),a=["components"],l={id:"minimizingNoise",title:"Minimizing Noise"},s=void 0,u={unversionedId:"Troubleshooting/minimizingNoise",id:"Troubleshooting/minimizingNoise",title:"Minimizing Noise",description:'Are you getting "noisy" data from your device? There are several possible reasons for this. Let\'s go through some simple troubleshooting steps that resolve most issues.',source:"@site/docs/Troubleshooting/01-MinimizingNoise.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/minimizingNoise",permalink:"/Troubleshooting/minimizingNoise",draft:!1,editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Troubleshooting/01-MinimizingNoise.md",tags:[],version:"current",lastUpdatedAt:1690839349,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:1,frontMatter:{id:"minimizingNoise",title:"Minimizing Noise"},sidebar:"docs",previous:{title:"Troubleshooting Landing",permalink:"/Troubleshooting/TroubleshootingLanding"},next:{title:"GUI Troubleshooting",permalink:"/Troubleshooting/GUI_Troubleshooting"}},c={},g=[{value:"Get rid of AC noise",id:"get-rid-of-ac-noise",level:4},{value:"Stabilize your electrodes",id:"stabilize-your-electrodes",level:4},{value:"Ensure that your electrodes are securely connected",id:"ensure-that-your-electrodes-are-securely-connected",level:4},{value:"Make sure your OpenBCI hardware is streaming data properly",id:"make-sure-your-openbci-hardware-is-streaming-data-properly",level:4},{value:"Check Cyton - GUI connection",id:"check-cyton---gui-connection",level:4},{value:"General tips for reducing noise (Cyton and Ganglion boards):",id:"general-tips-for-reducing-noise-cyton-and-ganglion-boards",level:4},{value:"Further troubleshooting",id:"further-troubleshooting",level:4}],d={toc:g},p="wrapper";function y(e){var t=e.components,l=(0,n.A)(e,a);return(0,i.yg)(p,(0,r.A)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,'Are you getting "noisy" data from your device? There are several possible reasons for this. Let\'s go through some simple troubleshooting steps that resolve most issues.'),(0,i.yg)("h4",{id:"get-rid-of-ac-noise"},"Get rid of AC noise"),(0,i.yg)("p",null,"Get rid of 60 Hz (or 50 Hz if you're in Europe or any country that operates on a 50 Hz power grid) using the OpenBCI GUI built-in notch filter. This does a good job at eliminating 60 Hz noise. You can adjust the notch filter by clicking the ",(0,i.yg)("strong",{parentName:"p"},"Filters")," button next to ",(0,i.yg)("strong",{parentName:"p"},"Start/Stop Data Stream")," then choose an option from the dropdown list. Additionally, if your board is on a table with any power cords or devices that are plugged into a wall outlet, move it to a location away from any electronic devices plugged into the wall. This will drastically reduce the alternating current (AC) influence on your signal."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Notch Filter",src:o(19422).A,width:"852",height:"345"})),(0,i.yg)("h4",{id:"stabilize-your-electrodes"},"Stabilize your electrodes"),(0,i.yg)("p",null,"Make sure your electrode cables are steady. If you shake the electrodes that are dangling from your head/body, you'll notice that it severely affects the signals. This movement noise is something that could be greatly improved with active electrodes. When using the passive electrodes that come with the OpenBCI electrode starter kit, you have to be very careful to remain steady while using the system to produce the best signal. As a quick fix, binding all of the electrode cables together with a piece of electric tape secures them and minimizes cable movement. It is not as important to include any EMG/ECG channels in the bundle, since movement noise doesn't affect their signal as significantly."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Stabilize Your Cables w/ Tape",src:o(85897).A,width:"768",height:"273"})),(0,i.yg)("h4",{id:"ensure-that-your-electrodes-are-securely-connected"},"Ensure that your electrodes are securely connected"),(0,i.yg)("p",null,"Ensure that your electrodes are connected securely (especially your reference)!"),(0,i.yg)("h4",{id:"make-sure-your-openbci-hardware-is-streaming-data-properly"},"Make sure your OpenBCI hardware is streaming data properly"),(0,i.yg)("p",null,"Every so often, an error will occur with the wireless communication between your OpenBCI Dongle and board. If you've followed all of the steps above, and the data that you are seeing in the GUI interface is still illegible, try the following:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Power down your board and unplug your USB Dongle."),(0,i.yg)("li",{parentName:"ol"},"Plug back in your USB Dongle and power up your board in that order. "),(0,i.yg)("li",{parentName:"ol"},"Restart the GUI and start a new session.")),(0,i.yg)("h4",{id:"check-cyton---gui-connection"},"Check Cyton - GUI connection"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Open the GUI application and select ",(0,i.yg)("strong",{parentName:"li"},"Cyton")),(0,i.yg)("li",{parentName:"ol"},"Select the ",(0,i.yg)("strong",{parentName:"li"},"Manual")," option"),(0,i.yg)("li",{parentName:"ol"},"Unplug your dongle and select ",(0,i.yg)("strong",{parentName:"li"},"Refresh")," on the port selection"),(0,i.yg)("li",{parentName:"ol"},"Re-plug the dongle and select ",(0,i.yg)("strong",{parentName:"li"},"Refresh")," once again"),(0,i.yg)("li",{parentName:"ol"},"Select the serial port number (so that it's highlighted green)"),(0,i.yg)("li",{parentName:"ol"},'Selecting channel 20 within the "OVERRIDE DONGLE" dropdown'),(0,i.yg)("li",{parentName:"ol"},'Press "SYSTEM STATUS" and you should see "SUCCESS - HOST AND DEVICE ON CHANNEL 20"'),(0,i.yg)("li",{parentName:"ol"},'Hit "START SESSION"')),(0,i.yg)("h4",{id:"general-tips-for-reducing-noise-cyton-and-ganglion-boards"},"General tips for reducing noise (Cyton and Ganglion boards):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Plug the dongle into a USB hub or USB extension cord. This limits radio interference caused by computers."),(0,i.yg)("li",{parentName:"ul"},"Toggle on the filters in the OpenBCI GUI"),(0,i.yg)("li",{parentName:"ul"},"Use the feet that came with the board"),(0,i.yg)("li",{parentName:"ul"},"Use a fully charged battery"),(0,i.yg)("li",{parentName:"ul"},"Turn off bluetooth devices in the room"),(0,i.yg)("li",{parentName:"ul"},"Sit slightly away from the computer"),(0,i.yg)("li",{parentName:"ul"},"Use the FTDI fix for ",(0,i.yg)("a",{parentName:"li",href:"https://docs.openbci.com/Troubleshooting/FTDI_Fix_Windows/"},"Windows")," or ",(0,i.yg)("a",{parentName:"li",href:"https://docs.openbci.com/Troubleshooting/FTDI_Fix_Mac/"},"Mac"))),(0,i.yg)("admonition",{title:"Additional Sources of Noise",type:"caution"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"AC power or extension cables on the floor"),(0,i.yg)("li",{parentName:"ul"},"Conduits inside walls, floors or ceilings"),(0,i.yg)("li",{parentName:"ul"},"Nearby wifi or cellular equipment"),(0,i.yg)("li",{parentName:"ul"},"Laptop and desktop computers that have certain 'ground loop' or AC noise characteristics"),(0,i.yg)("li",{parentName:"ul"},"Metal desks or other large metal objects nearby"),(0,i.yg)("li",{parentName:"ul"},"LED, CFL or fluorescent lighting"))),(0,i.yg)("h4",{id:"further-troubleshooting"},"Further troubleshooting"),(0,i.yg)("p",null,"If you are still having issues, refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://openbci.com/forum/"},"Forum")," for further troubleshooting techniques."))}y.isMDXComponent=!0},19422:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/filters_UI-c28f5311615edb732be051a08c9dee2c.PNG"},85897:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/secureCables-e12ddbd33530f26bcb31974abbe1b3bc.JPG"}}]);