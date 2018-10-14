"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(f,o(o({ref:r},c),{},{components:t})):a.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(67294),n=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){var r=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:t},r)}},65488:(e,r,t)=>{t.d(r,{Z:()=>m});var a=t(87462),n=t(67294),l=t(86010),o=t(12466),i=t(70989),s=t(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var r=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,c=e.tabValues,p=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var r=e.currentTarget,t=p.indexOf(r),a=c[t].value;a!==i&&(d(r),s(a))},f=function(e){var r,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;t=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;t=null!=(l=p[o])?l:p[p.length-1]}null==(r=t)||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:function(e){return p.push(e)},onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",u.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===r})}),null!=t?t:r)})))}function p(e){var r=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var o=l.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})})))}function d(e){var r=(0,i.Y)(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},n.createElement(c,(0,a.Z)({},e,r)),n.createElement(p,(0,a.Z)({},e,r)))}function m(e){var r=(0,s.Z)();return n.createElement(d,(0,a.Z)({key:String(r)},e))}},70989:(e,r,t)=>{t.d(r,{Y:()=>d});var a=t(67294),n=t(16550),l=t(91980),o=t(67392),i=t(50012);function s(e){return function(e){var r,t;return null!=(r=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function u(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:s(t);return function(e){var r=(0,o.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function c(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,t=void 0!==r&&r,o=e.groupId,i=(0,n.k6)(),s=function(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:o});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var r=new URLSearchParams(i.location.search);r.set(s,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[s,i])]}function d(e){var r,t,n,l,o=e.defaultValue,s=e.queryString,d=void 0!==s&&s,m=e.groupId,f=u(e),w=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var n=null!=(r=a.find((function(e){return e.default})))?r:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:f})})),y=w[0],b=w[1],v=p({queryString:d,groupId:m}),h=v[0],g=v[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,i.Nk)(r),n=t[0],l=t[1],[n,(0,a.useCallback)((function(e){r&&l.set(e)}),[r,l])]),x=k[0],O=k[1],C=function(){var e=null!=h?h:x;return c({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!c({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),O(e)}),[g,O,f]),tabValues:f}}},14959:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(67294),n=t(39960),l=t(74477),o=t(52263),i=t(50643).version.split("."),s=[i[0],i[1]].join(".");const u=function(e){var r=e.to,t=e.children,i=(0,l.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===s?a.createElement(n.default,{to:"/api/"+r},t):a.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+r},t)}},175:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>w,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var a=t(87462),n=t(63366),l=(t(67294),t(3905)),o=t(65488),i=t(85162),s=t(41435),u=t(14959);const c="import { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",p="import { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",d="import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n";var m=["components"],f={id:"crawl-sitemap",title:"Crawl a sitemap"},w=void 0,y={unversionedId:"examples/crawl-sitemap",id:"version-3.1/examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap, by using the downloadListOfUrls utility method provided by the @crawlee/utils module.",source:"@site/versioned_docs/version-3.1/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/docs/3.1/examples/crawl-sitemap",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/docs/3.1/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/docs/3.1/examples/crawl-some-links"}},b={},v=[],h={toc:v},g="wrapper";function k(e){var r=e.components,t=(0,n.Z)(e,m);return(0,l.kt)(g,(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example downloads and crawls the URLs from a sitemap, by using the ",(0,l.kt)(u.Z,{to:"utils/function/downloadListOfUrls",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"downloadListOfUrls"))," utility method provided by the ",(0,l.kt)(u.Z,{to:"utils",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"@crawlee/utils"))," module."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},c)),(0,l.kt)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p)),(0,l.kt)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},d))))}k.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);