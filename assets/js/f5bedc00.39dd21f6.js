"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2896],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(n),m=o,p=g["".concat(l,".").concat(m)]||g[m]||h[m]||i;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var a=n(58168),o=n(98587),i=(n(96540),n(15680)),r=["components"],s={id:"CytonSDCard",title:"Using SD Card with Cyton and CytonDaisy Board"},l=void 0,d={unversionedId:"Cyton/CytonSDCard",id:"Cyton/CytonSDCard",title:"Using SD Card with Cyton and CytonDaisy Board",description:"Overview",source:"@site/docs/Cyton/09-Using_SD_Card_with_OpenBCI.md",sourceDirName:"Cyton",slug:"/Cyton/CytonSDCard",permalink:"/Cyton/CytonSDCard",draft:!1,editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Cyton/09-Using_SD_Card_with_OpenBCI.md",tags:[],version:"current",lastUpdatedAt:1711134394,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:9,frontMatter:{id:"CytonSDCard",title:"Using SD Card with Cyton and CytonDaisy Board"},sidebar:"docs",previous:{title:"External Trigger on OpenBCI Cyton Board",permalink:"/Cyton/CytonExternal"},next:{title:"Ganglion Board",permalink:"/Ganglion/GanglionLanding"}},c={},g=[{value:"Overview",id:"overview",level:2},{value:"SD Card Basics",id:"sd-card-basics",level:2},{value:"Formatting",id:"formatting",level:3},{value:"Formatting SD Card on Mac",id:"formatting-sd-card-on-mac",level:4},{value:"Formatting SD Card on Windows",id:"formatting-sd-card-on-windows",level:4},{value:"Formatting SD Card on Linux",id:"formatting-sd-card-on-linux",level:4},{value:"Block Writing",id:"block-writing",level:3},{value:"OpenBCI Formatting",id:"openbci-formatting",level:3},{value:"File Naming",id:"file-naming",level:4},{value:"Data Logging Format",id:"data-logging-format",level:3},{value:"Writing to SD Card using the OpenBCI GUI",id:"writing-to-sd-card-using-the-openbci-gui",level:3},{value:"Loading SD Card files for Playback using OpenBCI GUI",id:"loading-sd-card-files-for-playback-using-openbci-gui",level:3},{value:"Converting Hex files in OpenBCI GUI",id:"converting-hex-files-in-openbci-gui",level:3}],h={toc:g},m="wrapper";function p(e){var t=e.components,s=(0,o.A)(e,r);return(0,i.yg)(m,(0,a.A)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"There are many situations where logging biometric data to local storage may be desirable. You may be doing a sleep study, or out on the road with your OpenBCI, and the wireless connection to a PC may be tenuous. The amount of data you are producing may require more bandwidth than the BLE connection can handle. This tutorial will cover the basics of adding an SD card for local storage to OpenBCI, how the data is formatted on the card, and how to retrieve the data after you've logged it. "),(0,i.yg)("p",null,"The data saved to SD card is sampled at 250 Hz, even if you use a CytonDaisy 16-channel board! Therefore you are not limited to the 125 Hz sampling rate when streaming data from CytonDaisy. Note, the data still streams from CytonDaisy to computer at 125 Hz, but the sampling rate is 250Hz if you select the 'save to SD card' option in the GUI start screen."),(0,i.yg)("h2",{id:"sd-card-basics"},"SD Card Basics"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SD_Class",src:n(93075).A,width:"270",height:"242"}),"\n",(0,i.yg)("img",{alt:"SD_Cards",src:n(55676).A,width:"1000",height:"450"})),(0,i.yg)("p",null,"First thing to know is that low-cost cards and slow speed cards are ",(0,i.yg)("strong",{parentName:"p"},"not")," recommended. When shopping for SD cards, make sure to look for high quality (Scan Disk, eg) and high speed (class 10 minimum). Look for the symbols to the right to know you are getting the right kind of card. You will also want to look for a card that has 8 or 16 GB of storage.  OpenBCI will generate about 1 mega bye of data per minute when it is recording 8 channels at the default rate of 250Hz. That's a lot of data!"),(0,i.yg)("p",null,"We've used these two cards in the OpenBCI lab, and they both work great."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2024 Update")),(0,i.yg)("p",null,"We recommend this newer ",(0,i.yg)("a",{parentName:"p",href:"https://www.amazon.com/gp/product/B07CV344WJ/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1"},"16GB SanDisk microsd card"),"."),(0,i.yg)("p",null,"People have reported issues with ",(0,i.yg)("em",{parentName:"p"},"Transcend")," and ",(0,i.yg)("em",{parentName:"p"},"Samsung")," Class 10 cards."),(0,i.yg)("h3",{id:"formatting"},"Formatting"),(0,i.yg)("admonition",{title:"Important",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"If you are using a new card, or one that you've had around, you MUST format it to FAT32 or FAT. We recommend a card that stores no more than 16GB."),(0,i.yg)("p",{parentName:"admonition"},"We've found that the most successful formatting method is one that overwrites the card, not just 'erasing' it which can leave old data intact. The Mac OS provides this option in the Disk Utility. Click the Erase tab, open Security Options, and slide the slider to the 'single pass of zeros' option. There are more comprehensive secure erase options, but they take longer."),(0,i.yg)("p",{parentName:"admonition"},"In our experience, it's best not to have any sort of file structure on the SD card. All files that OpenBCI boards create will be saved in the root.")),(0,i.yg)("h4",{id:"formatting-sd-card-on-mac"},"Formatting SD Card on Mac"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"DiskUtility",src:n(93422).A,width:"1806",height:"1284"}),"\n",(0,i.yg)("img",{alt:"SecureErase",src:n(52549).A,width:"963",height:"786"}),"\n",(0,i.yg)("img",{alt:"ScanDiskFormatterMAC",src:n(87554).A,width:"1000",height:"652"})),(0,i.yg)("h4",{id:"formatting-sd-card-on-windows"},"Formatting SD Card on Windows"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ScanDiskFormatterWin",src:n(58971).A,width:"437",height:"329"}),"\n",(0,i.yg)("img",{alt:"ScanDiskFormatterOverwriteWIN",src:n(98927).A,width:"438",height:"329"})),(0,i.yg)("p",null,"Another, and some say better, option is to use the SD Association's own formatter software. ",(0,i.yg)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter_4/"},"Download it here"),". (available for Windows and Mac). We recommend using it if you are on a Windows machine, because the Windows format option does not allow for overwriting the disk. Make sure to select OverWrite Format Type when using the SDFormatter tool on Windows or Mac."),(0,i.yg)("h4",{id:"formatting-sd-card-on-linux"},"Formatting SD Card on Linux"),(0,i.yg)("p",null,'If you are using Linux, you can simply search the internet for "How to Format SD Card on Linux" and pick your favorite method.'),(0,i.yg)("h3",{id:"block-writing"},"Block Writing"),(0,i.yg)("p",null,"In order to write OpenBCI data to the SD card in a timely fashion, we are using a block writing technique in Arduino and chipKIT. Blocks are 512 bytes. That means that OpenBCI will collect bytes as they come in from the sensors, and when a block is complete (512 bytes) it is written to the file on SD card. First, of course, the file needs to be created, and memory on the card allocated. OpenBCI uses ASCII commands to control the creation of a file. The following key commands allocate different amounts of SD card memory"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\n'A': BLOCK_COUNT = BLOCK_5MIN   = 5.6Mb\n'S': BLOCK_COUNT = BLOCK_15MIN  = 17Mb\n'F': BLOCK_COUNT = BLOCK_30MIN  = 34Mb\n'G': BLOCK_COUNT = BLOCK_1HR    = 67Mb\n'H': BLOCK_COUNT = BLOCK_2HR    = 133.5Mb\n'J': BLOCK_COUNT = BLOCK_4HR    = 266.8Mb\n'K': BLOCK_COUNT = BLOCK_12HR   = 800Mb\n'L': BLOCK_COUNT = BLOCK_24HR   = 1.6Gb\n'a': BLOCK_COUNT = ~14 seconds  = 262Kb\n\n")),(0,i.yg)("p",null,"The OpenBCI Processing sketch allows for selecting recording blocks from 'A' to 'L'. The small 'a' block allocation is for testing. You can use it if you like. Make sure the card is installed correctly on the OpenBCI board before you send the command to create the file. If you don't have the card installed, all is not lost! The program will hang until a valid card is installed and the file created. One of the nice things about writing the data in blocks is that once the block is written, it is on the card. In other words, if you create a file that allocates 30 minutes of record time and then stop your recording after only 15 minutes (by resetting the uC, or powering down the board, or pulling out the card) all of the data that was written will still be on the card!"),(0,i.yg)("h3",{id:"openbci-formatting"},"OpenBCI Formatting"),(0,i.yg)("h4",{id:"file-naming"},"File Naming"),(0,i.yg)("p",null,"We are using the SDFat library, which limits our file name to the old 8.3 format (8 character file name, three character file type extension). OpenBCI automatically creates SD files with an incrementing counter as part of the file name. For example, the first file that you ever make with your OpenBCI board will be called OBCI_01.TXT and the next one will be called OBCI_02.TXT. The numbering counts up in Hexadecimal until you get to file OBCI_FF.TXT, the next file will be OBCI_00.TXT. So, you have up to 256 discreet files that you can make on the SD card before you overwrite anything. The file name counter values are saved in the Arduino and chipKIT EEPROM, and incremented every time you create a file."),(0,i.yg)("h3",{id:"data-logging-format"},"Data Logging Format"),(0,i.yg)("p",null,"We tried to make it as easy as possible to log the data, given the 512 block limitation. (A sample of a saved file is to the right) Because it's difficult to manage signed decimal values in a timely fashion, we are writing all of the data in hexadecimal. That also makes it easier to anticipate file size and record time. In the example you can see that each ADS channel value is a 24bit number separated by a comma. The Accelerometer/Aux values are 16bit, and only written when they get updated or are used (activated). In this example, the Accelerometer is sampling at 50Hz, while the ADS1299 is sampling at 250Hz."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nSample#, 8 ADS Channel Values, 3 Accelerometer/Aux Values\n\n8B,028A3C,028A0E,028A86,028A04,0288FB,028AB7,028962,028A42\n8C,028A3D,028A09,028A89,028A08,0288FE,028AC5,028960,028A3C\n8D,028A3A,028A0B,028A85,028A01,0288ED,028AB1,02895A,028A3D\n8E,028A41,028A06,028A83,0289FE,0288F2,028AAD,028953,028A3A,02A0,FF80,21A0\n8F,028A42,028A02,028A79,0289FC,0288E8,028AAF,02894D,028A3F\n90,028A32,028A0C,028A7C,0289FF,0288EE,028AB4,028959,028A3A\n91,028A39,028A03,028A80,028A04,0288F6,028AB6,02894D,028A29\n92,028A3B,028A0C,028A84,028A04,0288F1,028ABE,028952,028A37\n93,028A3D,028A0F,028A7E,0289F6,0288EA,028AC2,02895A,028A35,02A0,FF80,2190\n94,028A40,028A11,028A76,028A03,0288E4,028ABD,028953,028A38\n\n")),(0,i.yg)("p",null,"The saved file also contains meta-data at the beginning and end. Lines of text start with a ",(0,i.yg)("strong",{parentName:"p"},"%")," symbol, so that conversion software will know they are just text. The first line time-stamps with the time in milliseconds ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"since the board was turned on")),". If for any reason the streaming data is stopped during a recording session, The stop time will be inserted, and if re-started, there will be another start time stamp. At the end of the file there is a record of the total write time in milliseconds, and information about the block write performance: min block write and max block write in microseconds, as well as record of any blocks that took more than two milliseconds to write. Examples of the meta-data at right."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\n%START AT\n00001C70\n00,8822D0,882E56,8CB903,8AA6B0,88101E,881459,8C9E38,8CC28A\n01,882194,882D1F,8CB47F,8AA0B5,880EE8,881321,8C9B2D,8CC403\n....\n50,876554,8770E3,8BFE9F,891AE4,875316,875739,8BE3A1,8C0FE0\n%STOP AT\n000025BD\n%START AT\n0000315A\n00,866B60,8676F6,8B099A,86F099,8659F9,865DAA,8AE564\n01,866A24,8675B7,8B05B9,86E9D6,8658B7,865C68,8AE291\n....\n%Total time mS:\n00005F53\n%min Write time uS:\n0000012B\n%max Write time uS:\n00000131\n%Over:\n00000000\n%block, uS\n\n")),(0,i.yg)("p",null,"The OpenBCI Processing Sketch has the functionality to read and convert these hexadecimal files to 'normal' data files."),(0,i.yg)("h3",{id:"writing-to-sd-card-using-the-openbci-gui"},"Writing to SD Card using the OpenBCI GUI"),(0,i.yg)("p",null,'Before starting the session, expand the dropdown in the "Write to SD Card?" section of the Control Panel with Cyton as the Data Source. Select the maximum file size in minutes. Note that the dropdown can scroll to show more options.'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"WriteToSDGUIScreenshot",src:n(30598).A,width:"1136",height:"902"})),(0,i.yg)("h3",{id:"loading-sd-card-files-for-playback-using-openbci-gui"},"Loading SD Card files for Playback using OpenBCI GUI"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"SD file conversion is no longer necessary in GUI v5. Simply select an SD card file from the Cyton or Cyton+Daisy and it will load for playback!")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"LoadSDCardPlaybackScreenshot",src:n(66443).A,width:"1136",height:"902"})),(0,i.yg)("h3",{id:"converting-hex-files-in-openbci-gui"},"Converting Hex files in OpenBCI GUI"),(0,i.yg)("details",null,(0,i.yg)("summary",null,(0,i.yg)("b",null,"DEPRECATED -- Expand this dropdown for instructions to convert SD files using GUI v4.2.0")),(0,i.yg)("br",null),'Note: To convert very large recordings, you must run the OpenBCI_GUI Sketch in Processing after changing "Increase Maximum Available Memory to: " at least 9000 MB aka 9GB.',(0,i.yg)("br",null),(0,i.yg)("p",null,"We don't currently have a way to recall the file contents from the OpenBCI board over the Radio link to the Dongle. You must remove the SD card from the OpenBCI board and access the files via your computer.",(0,i.yg)("br",null)),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SelectFilePrompt",src:n(11401).A,width:"1125",height:"516"}),(0,i.yg)("br",null)),(0,i.yg)("p",null,"On startup, the OpenBCI GUI will ask you for the data source you want to work with. Select ",(0,i.yg)("strong",{parentName:"p"},"PLAYBACK(from file)")," and click the ",(0,i.yg)("strong",{parentName:"p"},"SELECT SD FILE")," button.",(0,i.yg)("br",null)),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SelectSDfile",src:n(90813).A,width:"2052",height:"1452"}),(0,i.yg)("br",null)),(0,i.yg)("p",null,"Navigate to the OpenBCI generated file, and click ",(0,i.yg)("strong",{parentName:"p"},"OPEN"),". The GUI will convert the file you selected. The resulting file will be placed inside a file called EEG_Data in the Processing OpenBCI GUI Sketch Folder. The file naming convention is ",(0,i.yg)("strong",{parentName:"p"},"SDconverted-Year-Month-Day-Time.txt"),". Example:",(0,i.yg)("br",null)),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"/Documents/OpenBCI_GUI/SDconverted-2015-01-14_13-35-54.txt"),(0,i.yg)("br",null))))}p.isMDXComponent=!0},93422:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/DiskUtil_Erase-2642da5a42288b0539311c410a3f639c.jpg"},52549:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/DiskUtil_eraseSecure-6146e71a414f011643545220e6cf75a9.jpg"},66443:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_V5-Cyton_LoadSDCardPlayback_Screenshot-0c47943fdc7cd094ce52c2b6a841cf65.png"},30598:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_V5-Cyton_WriteToSDCard_Screenshot-3349f87f2d1adc50fd3fbde3678a8485.png"},11401:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_selectSDfile-ad30f5eec596d9522c6ff21f997580ea.jpg"},90813:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/GUI_selectSDfileWindow-dd80f89226109169747f75ce1cbf4659.jpg"},55676:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/MicroSDcards-326a9a00e39b2c6645fb3ea328838dc7.jpg"},93075:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/SDclass-7d8e543f63f70eb5c20c23caa9ee42b4.jpg"},98927:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/SDformatterFullOverwrite-83ad7579340a273a6507c427aa0ef3ab.jpg"},58971:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/SDformatterWin-e89b18fe9bf27f0c7ceebfd5e767180d.jpg"},87554:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ScanDiskFormatter-c41a238f8bc0f49feb8111f7c4ea6779.jpg"}}]);