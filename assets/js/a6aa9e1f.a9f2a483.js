"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{78665:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(63366),l=a(67294),n=a(86010),i=a(18882),s=a(39960);const m={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(95999);function c(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:m.sidebarItemList},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title))}))))}var d=["sidebar","toc","children"];const g=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,d),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(c,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(67294),l=a(52263),n=a(78665),i=a(38561),s=a(39960),m=a(95999);const o=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(63616);const d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,p="/"===t.permalink?m:g;return r.createElement(n.Z,{title:p,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},38561:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(67294),l=a(86010),n=a(3905),i=a(95999),s=a(39960),m=a(44996),o=a(63616),c=a(67707),d=a(86753);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";var b=a(8727);const v="image_9q7L";const h=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:v,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},E={authorCol:"authorCol_8c0z"};function N(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",E.authorCol),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}const _=function(e){var t,a,v,h,E=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,Z=e.children,f=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,I=e.isBlogPostPage,L=void 0!==I&&I,w=P.date,C=P.formattedDate,y=P.permalink,M=P.tags,x=P.readingTime,A=P.title,B=P.editUrl,R=P.authors,U=null!=(t=k.image)?t:f.image,F=!L&&T,z=M.length>0;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=L?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:g,itemProp:"headline"},L?A:r.createElement(s.Z,{itemProp:"url",to:y},A)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},C),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",E(x))),r.createElement(N,{authors:R,assets:k}))),U&&r.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},Z)),(z||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[u]=L,a))},z&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":F})},r.createElement(b.Z,{tags:M})),L&&B&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:B})),F&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":z})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+A},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),l=a(95999),n=a(87462),i=a(63366),s=a(86010);const m="iconEdit_mS5F";var o=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(63616);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8727:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),l=a(86010),n=a(95999),i=a(39960);const s="tag_WK-t",m="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){var t,a=e.permalink,n=e.name,c=e.count;return r.createElement(i.Z,{href:a,className:(0,l.Z)(s,(t={},t[m]=!c,t[o]=c,t))},n,c&&r.createElement("span",null,c))},d={tags:"tags_NBRY",tag:"tag_F03v"};function g(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(d.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:d.tag},r.createElement(c,{name:t,permalink:a}))}))))}}}]);