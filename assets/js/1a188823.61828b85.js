"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2135],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>w});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,w=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return t?a.createElement(w,s(s({ref:r},c),{},{components:t})):a.createElement(w,s({ref:r},c))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7511:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>h,frontMatter:()=>p,toc:()=>l});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),s=["components"],p={},i=void 0,l=[],c={toc:l},u="wrapper";function h(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)(u,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a simple framework for parallel crawling of web pages using headless browsers with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer"},"Puppeteer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright"},"Playwright"),". The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserCrawler")," uses headless (or even headful) browsers to download web pages and extract data, it is useful for crawling of websites that require to execute JavaScript. If the target website doesn't need JavaScript, we should consider using the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler"},"CheerioCrawler"),", which downloads the pages using raw HTTP requests and is about 10x faster."),(0,o.kt)("p",null,"The source URLs are represented by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects that are fed from the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," or ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," instances provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#requestList"},(0,o.kt)("inlineCode",{parentName:"a"},"requestList"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#requestQueue"},(0,o.kt)("inlineCode",{parentName:"a"},"requestQueue"))," constructor options, respectively. If neither ",(0,o.kt)("inlineCode",{parentName:"p"},"requestList")," nor ",(0,o.kt)("inlineCode",{parentName:"p"},"requestQueue")," options are provided, the crawler will open the default request queue either when the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/class/BrowserCrawler#addRequests"},(0,o.kt)("inlineCode",{parentName:"a"},"crawler.addRequests()"))," function is called, or if ",(0,o.kt)("inlineCode",{parentName:"p"},"requests")," parameter (representing the initial requests) of the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/class/BrowserCrawler#run"},(0,o.kt)("inlineCode",{parentName:"a"},"crawler.run()"))," function is provided."),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#requestList"},(0,o.kt)("inlineCode",{parentName:"a"},"requestList"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#requestQueue"},(0,o.kt)("inlineCode",{parentName:"a"},"requestQueue"))," options are used, the instance first processes URLs from the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," and automatically enqueues all of them to the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," before it starts their processing. This ensures that a single URL is not crawled multiple times."),(0,o.kt)("p",null,"The crawler finishes when there are no more ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects to crawl."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BrowserCrawler")," opens a new browser page (i.e. tab or window) for each ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," object to crawl and then calls the function provided by user as the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#requestHandler"},(0,o.kt)("inlineCode",{parentName:"a"},"requestHandler"))," option."),(0,o.kt)("p",null,"New pages are only opened when there is enough free CPU and memory available, using the functionality provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," class.\nAll ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," configuration options can be passed to the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#autoscaledPoolOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"autoscaledPoolOptions"))," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserCrawler")," constructor. For user convenience, the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/interface/AutoscaledPoolOptions#minConcurrency"},(0,o.kt)("inlineCode",{parentName:"a"},"minConcurrency"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/interface/AutoscaledPoolOptions#maxConcurrency"},(0,o.kt)("inlineCode",{parentName:"a"},"maxConcurrency"))," options of the underlying ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," constructor are available directly in the ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserCrawler")," constructor."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE:")," the pool of browser instances is internally managed by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/browser-pool/class/BrowserPool"},"BrowserPool")," class.")))}h.isMDXComponent=!0}}]);