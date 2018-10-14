"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5068:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>i,toc:()=>c});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={},p=void 0,c=[{value:"3.3.1 (2023-04-11)",id:"331-2023-04-11",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"3.2.2 (2023-02-08)",id:"322-2023-02-08",level:2},{value:"3.2.1 (2023-02-07)",id:"321-2023-02-07",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"3.1.2 (2022-11-15)",id:"312-2022-11-15",level:2},{value:"3.1.1 (2022-11-07)",id:"311-2022-11-07",level:2},{value:"3.0.4 (2022-08-22)",id:"304-2022-08-22",level:2}],u={toc:c},s="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,l.kt)("h2",{id:"331-2023-04-11"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.0...v3.3.1"},"3.3.1")," (2023-04-11)"),(0,l.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"jsdom:")," delay closing of the window and add some polyfills (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/2e81618afb5f3890495e3e5fcfa037eb3319edc9"},"2e81618"),")")),(0,l.kt)("h1",{id:"330-2023-03-09"},(0,l.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.2.2...v3.3.0"},"3.3.0")," (2023-03-09)"),(0,l.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add ",(0,l.kt)("inlineCode",{parentName:"li"},"proxyUrl")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"DownloadListOfUrlsOptions")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/779be1e4f29dff191d02e623eefb1bd5650c14ad"},"779be1e"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1780"},"#1780"))),(0,l.kt)("h2",{id:"322-2023-02-08"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2"},"3.2.2")," (2023-02-08)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,l.kt)("h2",{id:"321-2023-02-07"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1"},"3.2.1")," (2023-02-07)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,l.kt)("h1",{id:"320-2023-02-07"},(0,l.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0"},"3.2.0")," (2023-02-07)"),(0,l.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"utils:")," add missing dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"ow")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/bf0e03cc6ddc103c9337de5cd8dce9bc86c369a3"},"bf0e03c"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1716"},"#1716"))),(0,l.kt)("h2",{id:"312-2022-11-15"},"3.1.2 (2022-11-15)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,l.kt)("h2",{id:"311-2022-11-07"},"3.1.1 (2022-11-07)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,l.kt)("h1",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,l.kt)("h2",{id:"304-2022-08-22"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4"},"3.0.4")," (2022-08-22)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"))}m.isMDXComponent=!0}}]);