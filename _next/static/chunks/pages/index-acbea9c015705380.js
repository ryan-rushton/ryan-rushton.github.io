(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9892)}])},9892:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var i=n(5893),s=n(9008),o=n(7294),r=n(579),a=n.n(r),c=function(e){var t=e.name,n=e.links,s=e.description;return(0,i.jsxs)("div",{className:a().project,children:[(0,i.jsxs)("div",{className:a().header,children:[(0,i.jsx)("h2",{className:a().title,children:t}),(0,i.jsx)("div",{className:a().links,children:n&&n.map((function(e){return(0,i.jsx)("span",{children:(0,i.jsx)("a",{href:e.full,className:"rr-site-link",children:e.short})},e.full)}))})]}),(0,i.jsx)("div",{className:a().description,children:s})]})},l=n(365),d=n.n(l),u=n(1464),h=n.n(u),m="left",p="right",x=function(e){var t,n,s=e.icon,r=e.text,a=e.popupSide,c=e.width,l=(0,o.useState)(!1),d=l[0],u=l[1],m=(0,o.useRef)(null),p=(0,o.useRef)(null),x=(null===(t=m.current)||void 0===t?void 0:t.clientWidth)||0,_=(null===(n=p.current)||void 0===n?void 0:n.clientWidth)||0,j={opacity:d?100:0,zIndex:d?5:-5,marginLeft:"right"===a?10:-(x+_+10),width:c};return(0,i.jsxs)("div",{className:h().container,children:[(0,i.jsx)("div",{ref:m,className:h().icon,onMouseOver:function(){return u(!0)},onMouseOut:function(){return u(!1)},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},children:s}),(0,i.jsx)("div",{ref:p,className:h().popup,style:j,children:r})]})},_=n(9583),j=n(7735),f=[[{icon:(0,i.jsx)(j.WZi,{}),text:"Typescript"},{icon:(0,i.jsx)(_.zPb,{}),text:"Javascript"},{icon:(0,i.jsx)(_.huN,{}),text:"React"},{icon:(0,i.jsx)(j.EOq,{}),text:"Material UI",width:70}],[{icon:(0,i.jsx)(_.hBm,{}),text:"Sass"},{icon:(0,i.jsx)(_.rek,{}),text:"UIKit"},{icon:(0,i.jsx)(_.gtO,{}),text:"HTML"},{icon:(0,i.jsx)(_.FGx,{}),text:"CSS",width:30}],[{icon:(0,i.jsx)(_.zEo,{}),text:"Java"},{icon:(0,i.jsx)(_.osz,{}),text:"Python"},{icon:(0,i.jsx)(j.YgB,{}),text:"Oracle DB's"},{icon:(0,i.jsx)(j.u4B,{}),text:"PostgreSQL DB's",width:70}],[{icon:(0,i.jsx)(_.oV6,{}),text:"Microsoft VS Code and MSSQL DB's",width:70},{icon:(0,i.jsx)(_.X2n,{}),text:"Docker"},{icon:(0,i.jsx)(_._Aq,{}),text:"Linux"},{icon:(0,i.jsx)(_.UC$,{}),text:"AWS"}],[{icon:(0,i.jsx)(_.MmV,{}),text:"Git"},{icon:(0,i.jsx)(_.hJX,{}),text:"GitHub including their actions for CI/CD"},{icon:(0,i.jsx)(j.NCQ,{}),text:"GitLab including their CI/CD"},{icon:(0,i.jsx)(_.qaF,{}),text:"Bit Bucket",width:70}],[{icon:(0,i.jsx)(j.QDk,{}),text:"Travis CI"},{icon:(0,i.jsx)(j.g2Y,{}),text:"Atlassian's Bamboo"},{icon:(0,i.jsx)(_.TUz,{}),text:"Jira"},{icon:(0,i.jsx)(_.kyC,{}),text:"Confluence",width:70}]],v=function(e){var t=e.icons;return(0,i.jsx)("div",{className:d().techGridRow,children:t.map((function(e,n){return(0,i.jsx)(x,{icon:e.icon,text:e.text,width:e.width,popupSide:n<=Math.floor(t.length/2)?p:m},e.text)}))},"row-".concat(t.map((function(e){return e.text})).join(",")))},g=function(){return(0,i.jsxs)("div",{id:"rr-body",className:"rr-content ".concat(d().body),children:[(0,i.jsx)("h1",{className:d().title,children:"About Me"}),(0,i.jsx)("p",{children:"I am passionate about building things people love to use and making complex data as intuitive as possible. I enjoy working with people and value camaraderie and culture within in a team."}),(0,i.jsx)("h1",{className:d().title,children:"Projects"}),(0,i.jsx)("p",{children:"Here is a bunch of projects I work on from time to time. Some I have have built myself and some I contribute to."}),(0,i.jsxs)("div",{className:d().projects,children:[(0,i.jsx)(c,{name:"The System",links:[{full:"https://github.com/ryan-rushton/the-system",short:"github"},{full:"https://the-system.netlify.app",short:"the-system"}],description:"The solar system in your browser. I started this as an exercise making some performance optimisations in React. It renders a large number of elements when creating the belt. Now I tend to use it as a testing ground for new technology."}),(0,i.jsx)(c,{name:"Xbdd",links:[{full:"https://github.com/orionhealth/XBDD",short:"github"}],description:"A web application that provides an overview of Cucumber scenario test reports. It allows automated scenarios to be cross checked and catalogued and provides a history of manually tested scenario results. \n\nThis is an Orion Health open source project that I helped rejuvenate. We moved it from an old Jersey/YUI application that was converted to React, Typescript and Spring Boot."}),(0,i.jsx)(c,{name:"Destiny Item Manager",links:[{full:"https://github.com/DestinyItemManager/DIM",short:"github"}],description:"An item/content manager for the game Destiny that is regarded as the staple choice by the Destiny community. I contribute with small to medium features and bugfixes."}),(0,i.jsx)(c,{name:"Destiny Quartermaster",links:[{full:"https://github.com/ryan-rushton/destiny-quartermaster",short:"github"}],description:"This one is still under construction but it is planned to be a app to help people find an optimum build in the game Destiny. Currently I have built a lot of the infrastructure to get all the required data from the bungie api. I need to build UI's now."}),(0,i.jsx)(c,{name:"eslint-plugin-no-except",links:[{full:"https://github.com/ryan-rushton/eslint-plugin-no-except",short:"github"},{full:"https://npmjs.com/package/eslint-plugin-no-except",short:"npm"}],description:"For a product at work, we needed an eslint rule that would disallow the use of Array.includes but allow _.includes as we were working with Internet Explorer."})]}),(0,i.jsx)("h1",{className:d().title,children:"Tech"}),(0,i.jsx)("div",{children:"A collection of technologies I have used in my last few jobs or in open source."}),(0,i.jsx)("div",{className:d().techGrid,children:f.map((function(e){return(0,i.jsx)(v,{icons:e},e.map((function(e){return e.text})).join("+"))}))})," "]})},b=n(8134),y=n.n(b),k=n(7610),N=n.n(k),w=function(){return(0,i.jsx)(y(),{canvasClassName:N().particles,params:{fpsLimit:60,particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{value:"#80c0a8",animation:{enable:!0,speed:20,sync:!0}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:3,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!0,speed:5,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:100,color:"#717171",opacity:.2,width:1},move:{enable:!0,speed:2,direction:"bottom",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:.8},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})},I=n(6574),B=n.n(I),R=function(){var e;return null===(e=null===document||void 0===document?void 0:document.getElementById("rr-body"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})},L=function(){return(0,i.jsxs)("div",{className:B().container,children:[(0,i.jsx)(w,{}),(0,i.jsx)("div",{className:"rr-content ".concat(B().intro),children:(0,i.jsxs)("div",{className:B().content,children:[(0,i.jsx)("img",{className:B().portrait,src:"/me_cropped.png",alt:""}),(0,i.jsxs)("div",{className:B().textBlock,children:[(0,i.jsxs)("div",{className:B().firstLine,children:["Hi, I'm ",(0,i.jsx)("span",{className:"rr-site-link",role:"button",tabIndex:0,onClick:R,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||R()},children:"Ryan"}),","]}),(0,i.jsx)("div",{className:B().secondLine,children:"a fullstack software engineer."})]})]})})]})},C=n(4777),S=n.n(C),D=function(){return(0,i.jsx)("div",{className:S().navbar,children:(0,i.jsxs)("div",{className:S().content,children:[(0,i.jsx)("div",{className:S().flexItem,children:(0,i.jsx)("a",{href:"/",className:"".concat(S().link," ").concat(S().homeLink),children:(0,i.jsx)("img",{className:S().logo,src:"/RR_Logo_Outlined.svg",width:70,height:48,alt:""})})}),(0,i.jsx)("div",{className:S().flexItem,children:(0,i.jsxs)("div",{className:S().rightLinks,children:[(0,i.jsx)("a",{href:"https://github.com/rushton3179/personal-site",className:S().link,children:(0,i.jsx)(_.hJX,{})}),(0,i.jsx)("a",{href:"mailto:ryan.rushton79@gmail.com",className:S().link,children:(0,i.jsx)(_.SRX,{})})]})})]})})},T=n(8901),M=n.n(T),O=function(){return(0,i.jsx)("div",{className:M().throbber,children:(0,i.jsx)("img",{className:M().image,src:"/RR_Logo_Outlined.svg",alt:""})})},A="Ryan Rushton",G="Ryan Rushton's portfolio website",P=n(4265),z=n.n(P),F=function(){var e,t=A,n=G,r=(0,o.useState)(!1),a=r[0],c=r[1];return"undefined"!==typeof Image&&((e=new Image).onload=function(){return c(!0)},e.onerror=function(){return c(!0)},e.src="/thailand.jpg"),a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("link",{rel:"icon",type:"image/svg",href:"/RR_Logo_Outlined.svg"}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:t}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"og:site_name",content:t})]}),(0,i.jsx)(D,{}),(0,i.jsx)(L,{}),(0,i.jsx)("div",{className:z().cover,style:{backgroundImage:e?"url(".concat(e.src,")"):""}}),(0,i.jsx)(g,{})]}):(0,i.jsx)("div",{className:z().cover,children:(0,i.jsx)(O,{})})}},365:function(e){e.exports={body:"Body_body__Rb0rR",projects:"Body_projects__Ggo3J",title:"Body_title__7stf3",techGrid:"Body_techGrid__8vrHd",techGridRow:"Body_techGridRow__fCYVH"}},1464:function(e){e.exports={container:"Icon_container__gVTFN",icon:"Icon_icon__OzCrV",popup:"Icon_popup__n64e7"}},6574:function(e){e.exports={container:"Intro_container__C5SI5",intro:"Intro_intro__5rsYT",content:"Intro_content__FCzqZ",githubLink:"Intro_githubLink__Iw_UM",portrait:"Intro_portrait__9axKF",textBlock:"Intro_textBlock__9ZGRp",firstLine:"Intro_firstLine__G8Wbo",secondLine:"Intro_secondLine__2SK8O",portraitAndHi:"Intro_portraitAndHi__AtYAP"}},7610:function(e){e.exports={particles:"Background_particles__4kNex"}},4777:function(e){e.exports={navbar:"NavBar_navbar__k5tAZ",content:"NavBar_content__wCi34",flexItem:"NavBar_flexItem__B9Omp",rightLinks:"NavBar_rightLinks__9N_SB",link:"NavBar_link__vrU2H",homeLink:"NavBar_homeLink__RsdCz",logo:"NavBar_logo__s1C_m"}},579:function(e){e.exports={project:"Project_project__w8LjB",title:"Project_title__FN3ex",header:"Project_header__kUe8d",links:"Project_links__ReBdZ",description:"Project_description__q_PRR"}},8901:function(e){e.exports={throbber:"Throbber_throbber__MHUFi",image:"Throbber_image__4gpmZ",spin:"Throbber_spin__Ma_41"}},4265:function(e){e.exports={cover:"index_cover__J23mF"}}},function(e){e.O(0,[415,445,588,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);