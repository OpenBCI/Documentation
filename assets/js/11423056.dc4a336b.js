"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2961],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},55423:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"EMG_Chrome_Dino_Game",title:"EMG Chrome Dino Game"},s=void 0,p={unversionedId:"Examples/EMGProjects/EMG_Chrome_Dino_Game",id:"Examples/EMGProjects/EMG_Chrome_Dino_Game",title:"EMG Chrome Dino Game",description:"In this tutorial we will show you how to play the Google Chrome Dinosaur Game without touching your laptop. To do that, we will read EMG data from your arm muscles and find the peaks which correspond to flexing, using them to trigger a jump of the dinosaur.",source:"@site/docs/Examples/EMGProjects/05-EMG_Chrome_Dino_Game.md",sourceDirName:"Examples/EMGProjects",slug:"/Examples/EMGProjects/EMG_Chrome_Dino_Game",permalink:"/Examples/EMGProjects/EMG_Chrome_Dino_Game",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EMGProjects/05-EMG_Chrome_Dino_Game.md",tags:[],version:"current",lastUpdatedAt:1628087977,formattedLastUpdatedAt:"8/4/2021",sidebarPosition:5,frontMatter:{id:"EMG_Chrome_Dino_Game",title:"EMG Chrome Dino Game"},sidebar:"docs",previous:{title:"EMG-controlled LED",permalink:"/Examples/EMGProjects/EMG_LED"},next:{title:"EMG-controlled Tetris",permalink:"/Examples/EMGProjects/EMG_Tetris"}},d=[{value:"Materials Required",id:"materials-required",children:[],level:2},{value:"Step 1: Hardware Assembly.",id:"step-1-hardware-assembly",children:[],level:2},{value:"Step 2: Software Setup.",id:"step-2-software-setup",children:[],level:2},{value:"Step 3: Download and Run the Script.",id:"step-3-download-and-run-the-script",children:[],level:2}],c={toc:d},m="wrapper";function u(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial we will show you how to play the Google Chrome Dinosaur Game without touching your laptop. To do that, we will read EMG data from your arm muscles and find the peaks which correspond to flexing, using them to trigger a jump of the dinosaur."),(0,r.kt)("p",null,"Check out an example video of this tutorial being put into action!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/Iyxb0WAiUUvffbg3mV/giphy.gif",alt:"EMGdinogif"})),(0,r.kt)("p",null,"The following instructions have been written for use with Linux 16.04."),(0,r.kt)("h2",{id:"materials-required"},"Materials Required"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395"},"Skintact sticky electrodes")," or ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit"},"IDUN Dryodes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958"},"EMG/ECG Snap Electrode Cables")),(0,r.kt)("li",{parentName:"ol"},"Computer with downloaded OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"GUI"))),(0,r.kt)("h2",{id:"step-1-hardware-assembly"},"Step 1: Hardware Assembly."),(0,r.kt)("p",null,"Follow the EMG Getting Started ",(0,r.kt)("a",{parentName:"p",href:"/GettingStarted/Biosensing-Setups/EMGSetup"},"tutorial")," on this link to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI. For this tutorial, you will need to connect one of your arms to Channel 1 and Ground."),(0,r.kt)("h2",{id:"step-2-software-setup"},"Step 2: Software Setup."),(0,r.kt)("p",null,"Install Python version 2 or 3. ",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/how-to-download-and-install-python-latest-version-on-linux/"},"Here")," is a useful tutorial to find out if Python is already installed on your computer and to install it. To use this program, you need the following Python packages installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pylsl")," : use ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install pylsl")," from the command line to install it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pyautogui")," : use ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install pyautogui")," to install it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brainflow"),": use ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install brainflow"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numpy"),": use ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install numpy"),".")),(0,r.kt)("h2",{id:"step-3-download-and-run-the-script"},"Step 3: Download and Run the Script."),(0,r.kt)("p",null,"The Python script will set up the Cyton board, read data from it, and analyze it to detect any spikes that correspond to muscle flexing. If a flex is detected and 100 milliseconds have passed since the last one, it will press the space bar, which will make the dinosaur jump. The threshold for the time between flexes can be modified as needed to avoid debouncing."),(0,r.kt)("p",null,"In this tutorial, we provide two alternative ways of processing the data to detect the peaks and encourage you to think of your own ways to do it. Get either the ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v1.py")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v2.py")," Python script from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaesteban/brainflow/tree/games/games"},"here")," by cloning the repository or copying the individual code file to a .py script. Once your board is connected, open a terminal and launch the script by running ",(0,r.kt)("inlineCode",{parentName:"p"},"python <script name> --serial-port /dev/ttyUSB0 --board-id 0")," from the folder its stored in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," If you are using a serial port other than /dev/ttyUSB0, replace it in the above command."),(0,r.kt)("p",null,"Once the script has launched, follow the instructions on the terminal. The script ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v1.py")," removes the noise from the signal, squares it, and sets a threshold to detect the peaks. The script ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v2.py")," denoises the signal and then uses a rolling window with normalization to detect the peaks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v1.py")," and the mean value printed out is negative, swap the N and P electrode cables and repeat calibration to get a positive mean."),(0,r.kt)("p",null,"Next, open a Google Chrome tab and go to the url ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://dino"),". You do not have to disable your internet to access this free game. Start the game by pressing the spacebar or flexing your arm. Every time you flex, the dinosaur will jump. Since we\u2019re processing raw signals, the threshold might need to be adjusted. If the jump is not getting triggered, play with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"flex_thres")," by modifying the variable directly in ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v2.py")," or the percentage multiplier set to 0.5 in ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome_dino_v1.py"),". You can also modify the time between flexes by changing the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"time_thres"),"."),(0,r.kt)("p",null,"To learn more about brainflow visit its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brainflow-dev/brainflow"},"GitHub repository")," and its ",(0,r.kt)("a",{parentName:"p",href:"https://brainflow.readthedocs.io/en/stable/"},"Documentation"),"."),(0,r.kt)("p",null,"This is a great example to get started with brainflow. Try it out and send us a video of how you modify this prototype!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":\xa0This\xa0tutorial\xa0is\xa0based\xa0on\xa0Brainflow\xa02020. If\xa0you\xa0experience\xa0any\xa0issues\xa0with\xa0the\xa0latest\xa0versions\xa0email\xa0us\xa0at\xa0",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@openbci.com"},"contact@openbci.com"),"."))}u.isMDXComponent=!0}}]);