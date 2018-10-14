"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=i,h=u["".concat(o,".").concat(f)]||u[f]||m[f]||l;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},67732:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>s,toc:()=>p});var r=a(87462),i=a(63366),l=(a(67294),a(3905)),n=["components"],s={},o=void 0,p=[{value:"3.3.1 (2023-04-11)",id:"331-2023-04-11",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Features",id:"features",level:3},{value:"3.2.2 (2023-02-08)",id:"322-2023-02-08",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"3.2.1 (2023-02-07)",id:"321-2023-02-07",level:2},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"Features",id:"features-1",level:3},{value:"3.1.2 (2022-11-15)",id:"312-2022-11-15",level:2},{value:"3.1.1 (2022-11-07)",id:"311-2022-11-07",level:2},{value:"3.0.4 (2022-08-22)",id:"304-2022-08-22",level:2},{value:"Bug Fixes",id:"bug-fixes-4",level:3}],c={toc:p},u="wrapper";function m(e){var t=e.components,a=(0,i.Z)(e,n);return(0,l.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,l.kt)("h2",{id:"331-2023-04-11"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.0...v3.3.1"},"3.3.1")," (2023-04-11)"),(0,l.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," handling of readable streams for key-value stores when setting records (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1852"},"#1852"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/a5ee37d7e245f004785fc03220e37aeafdfa0e81"},"a5ee37d"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1843"},"#1843"))),(0,l.kt)("h1",{id:"330-2023-03-09"},(0,l.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.2.2...v3.3.0"},"3.3.0")," (2023-03-09)"),(0,l.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," request queues race conditions causing crashes (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1806"},"#1806"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/083a9db9ebcddd3fa886631234c790d4c5bcdf86"},"083a9db"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1792"},"#1792")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," RequestQueue should respect ",(0,l.kt)("inlineCode",{parentName:"li"},"forefront")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1816"},"#1816"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/b68e86a97954bcbe30fde802fed5f263016fffe2"},"b68e86a"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1787"},"#1787")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," RequestQueue#handledRequestCount should update (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1817"},"#1817"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/a775e4afea20d0b31492f44b90f61b6a903491b6"},"a775e4a"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1764"},"#1764"))),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add basic support for ",(0,l.kt)("inlineCode",{parentName:"li"},"setStatusMessage")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1790"},"#1790"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/c318980ec11d211b1a5c9e6bdbe76198c5d895be"},"c318980"),")"),(0,l.kt)("li",{parentName:"ul"},"move the status message implementation to Crawlee, noop in storage (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1808"},"#1808"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/99c3fdc18030b7898e6b6d149d6d94fab7881f09"},"99c3fdc"),")")),(0,l.kt)("h2",{id:"322-2023-02-08"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2"},"3.2.2")," (2023-02-08)"),(0,l.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," request queues saved in the wrong place (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1779"},"#1779"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/19409dbd614560a73c97ef6e00997e482573d2ff"},"19409db"),")")),(0,l.kt)("h2",{id:"321-2023-02-07"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1"},"3.2.1")," (2023-02-07)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/memory-storage"),(0,l.kt)("h1",{id:"320-2023-02-07"},(0,l.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0"},"3.2.0")," (2023-02-07)"),(0,l.kt)("h3",{id:"bug-fixes-3"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Correctly compute ",(0,l.kt)("inlineCode",{parentName:"li"},"pendingRequestCount")," in request queue (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1765"},"#1765"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/946535f2338086e13c71ff70129e7a1f6bfd275d"},"946535f"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com//github.com/apify/crawlee/blob/master/packages/memory-storage/src/resource-clients/request-queue.ts/issues/L291-L298"},"/github.com/apify/crawlee/blob/master/packages/memory-storage/src/resource-clients/request-queue.ts#L291-L298")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KeyValueStore:")," big buffers should not crash (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1734"},"#1734"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/2f682f7ddd189cad11a3f5e7655ac6243444ff74"},"2f682f7"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1732"},"#1732")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1710"},"#1710")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"memory-storage:")," dont fail when storage already purged (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1737"},"#1737"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/86940273dbac2d13294140962f816f66582684ff"},"8694027"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1736"},"#1736")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"utils:")," add missing dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"ow")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/bf0e03cc6ddc103c9337de5cd8dce9bc86c369a3"},"bf0e03c"),"), closes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1716"},"#1716"))),(0,l.kt)("h3",{id:"features-1"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MemoryStorage:")," read from fs if persistStorage is enabled, ram only otherwise (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1761"},"#1761"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/e9039809a0c0af0bc086be1f1400d18aa45ae490"},"e903980"),")")),(0,l.kt)("h2",{id:"312-2022-11-15"},"3.1.2 (2022-11-15)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/memory-storage"),(0,l.kt)("h2",{id:"311-2022-11-07"},"3.1.1 (2022-11-07)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/memory-storage"),(0,l.kt)("h1",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/memory-storage"),(0,l.kt)("h2",{id:"304-2022-08-22"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4"},"3.0.4")," (2022-08-22)"),(0,l.kt)("h3",{id:"bug-fixes-4"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key value stores emitting an error when multiple write promises ran in parallel (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1460"},"#1460"),") (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/f201cca4a99d1c8b3e87be0289d5b3b363048f09"},"f201cca"),")")))}m.isMDXComponent=!0}}]);