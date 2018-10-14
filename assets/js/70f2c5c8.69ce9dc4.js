"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,h=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39708:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>p,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],p={},i=void 0,c=[{value:"3.3.1 (2023-04-11)",id:"331-2023-04-11",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3},{value:"3.2.2 (2023-02-08)",id:"322-2023-02-08",level:2},{value:"3.2.1 (2023-02-07)",id:"321-2023-02-07",level:2},{value:"Features",id:"features-1",level:3},{value:"3.1.2 (2022-11-15)",id:"312-2022-11-15",level:2},{value:"3.1.1 (2022-11-07)",id:"311-2022-11-07",level:2},{value:"3.0.4 (2022-08-22)",id:"304-2022-08-22",level:2}],u={toc:c},s="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,o.kt)("h2",{id:"331-2023-04-11"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.0...v3.3.1"},"3.3.1")," (2023-04-11)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h1",{id:"330-2023-03-09"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.2.2...v3.3.0"},"3.3.0")," (2023-03-09)"),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemoryStorage:")," RequestQueue#handledRequestCount should update (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1817"},"#1817"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/a775e4afea20d0b31492f44b90f61b6a903491b6"},"a775e4a"),"), closes ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1764"},"#1764"))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add basic support for ",(0,o.kt)("inlineCode",{parentName:"li"},"setStatusMessage")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1790"},"#1790"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/c318980ec11d211b1a5c9e6bdbe76198c5d895be"},"c318980"),")"),(0,o.kt)("li",{parentName:"ul"},"move the status message implementation to Crawlee, noop in storage (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1808"},"#1808"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/99c3fdc18030b7898e6b6d149d6d94fab7881f09"},"99c3fdc"),")")),(0,o.kt)("h2",{id:"322-2023-02-08"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2"},"3.2.2")," (2023-02-08)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h2",{id:"321-2023-02-07"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1"},"3.2.1")," (2023-02-07)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h1",{id:"320-2023-02-07"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0"},"3.2.0")," (2023-02-07)"),(0,o.kt)("h3",{id:"features-1"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemoryStorage:")," read from fs if persistStorage is enabled, ram only otherwise (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1761"},"#1761"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/e9039809a0c0af0bc086be1f1400d18aa45ae490"},"e903980"),")")),(0,o.kt)("h2",{id:"312-2022-11-15"},"3.1.2 (2022-11-15)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h2",{id:"311-2022-11-07"},"3.1.1 (2022-11-07)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h1",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"),(0,o.kt)("h2",{id:"304-2022-08-22"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4"},"3.0.4")," (2022-08-22)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/types"))}m.isMDXComponent=!0}}]);