"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7004],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(t),s=a,y=u["".concat(p,".").concat(s)]||u[s]||d[s]||o;return t?r.createElement(y,i(i({ref:n},g),{},{components:t})):r.createElement(y,i({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],l={id:"GanglionLanding",title:"Ganglion Board"},p=void 0,c={unversionedId:"Ganglion/GanglionLanding",id:"Ganglion/GanglionLanding",title:"Ganglion Board",description:"Buy it!",source:"@site/docs/Ganglion/01-GanglionBoard.md",sourceDirName:"Ganglion",slug:"/Ganglion/GanglionLanding",permalink:"/Ganglion/GanglionLanding",draft:!1,editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Ganglion/01-GanglionBoard.md",tags:[],version:"current",lastUpdatedAt:1684276618,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:1,frontMatter:{id:"GanglionLanding",title:"Ganglion Board"},sidebar:"docs",previous:{title:"Using SD Card with Cyton and CytonDaisy Board",permalink:"/Cyton/CytonSDCard"},next:{title:"Ganglion Specs",permalink:"/Ganglion/GanglionSpecs"}},g={},u=[{value:"Buy it!",id:"buy-it",level:3},{value:"Included will be:",id:"included-will-be",level:4}],d={toc:u},s="wrapper";function y(e){var n=e.components,t=(0,a.A)(e,i);return(0,o.yg)(s,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"buy-it"},(0,o.yg)("a",{parentName:"h3",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"Buy it!")),(0,o.yg)("p",null,"This set of tutorials will show you everything you need to know about the OpenBCI 4-channel Ganglion Biosensing Board."),(0,o.yg)("img",{src:"https://i.ibb.co/x5PpvCc/Screen-Shot-2019-07-23-at-1-30-32-PM.png",border:0,width:"50%"}),(0,o.yg)("br",null),(0,o.yg)("h4",{id:"included-will-be"},"Included will be:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Ganglion/GanglionSpecs"},(0,o.yg)("strong",{parentName:"a"},"Spec Overview"))," \u2014 The specs of the board, including explanations of the components and circuit schematics."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Ganglion/GanglionDataFormat"},(0,o.yg)("strong",{parentName:"a"},"Data Sheet"))," \u2014 A rundown of the defined data format for the Ganglion."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Ganglion/GanglionSDK"},(0,o.yg)("strong",{parentName:"a"},"OpenBCI Ganglion SDK"))," \u2014 Goes over the byte string command protocol that is compatible for use with the OpenBCI Ganglion Board."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Ganglion/GanglionProgram"},(0,o.yg)("strong",{parentName:"a"},"OpenBCI Board Programming Tutorial"))," \u2014 Tutorial explaining how to reprogram the OpenBCI Ganglion Board, allowing you to update firmware or hope to customize the board. ",(0,o.yg)("em",{parentName:"li"},"Not needed if you wish to use the board out-of-box"))))}y.isMDXComponent=!0}}]);