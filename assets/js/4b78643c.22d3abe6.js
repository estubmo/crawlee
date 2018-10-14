"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(70989),s=n(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,c=e.tabValues,p=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(m(t),s(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var l,i=p.indexOf(e.currentTarget)-1;n=null!=(l=p[i])?l:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:d},i,{className:(0,l.Z)("tabs__item",u.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function p(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function m(e){var t=(0,o.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function d(e){var t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(67294),r=n(16550),l=n(91980),i=n(67392),o=n(50012);function s(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,o=(0,r.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:i});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function m(e){var t,n,r,l,i=e.defaultValue,s=e.queryString,m=void 0!==s&&s,d=e.groupId,h=u(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:h})})),y=f[0],w=f[1],k=p({queryString:m,groupId:d}),b=k[0],v=k[1],g=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,o.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=g[0],C=g[1],q=function(){var e=null!=b?b:x;return c({value:e,tabValues:h})?e:null}();return(0,a.useLayoutEffect)((function(){q&&w(q)}),[q]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!c({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);w(e),v(e),C(e)}),[v,C,h]),tabValues:h}}},14959:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(39960),l=n(74477),i=n(52263),o=n(50643).version.split("."),s=[o[0],o[1]].join(".");const u=function(e){var t=e.to,n=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===s?a.createElement(r.default,{to:"/api/"+t},n):a.createElement(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},n)}},51701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>f,default:()=>g,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),s=n(41435),u=n(14959);const c="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'all' will enqueue all links found\n            // highlight-next-line\n            strategy: EnqueueStrategy.All,\n            // Alternatively, you can pass in the string 'all'\n            // strategy: 'all',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",p="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-domain' will enqueue all links found that are on the\n            // same hostname as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameDomain,\n            // Alternatively, you can pass in the string 'same-domain'\n            // strategy: 'same-domain',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",m="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-hostname' will enqueue all links found that are on the\n            // same hostname (including subdomain) as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-hostname'\n            // strategy: 'same-hostname',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n";var d=["components"],h={id:"crawl-relative-links",title:"Crawl a website with relative links"},f=void 0,y={unversionedId:"examples/crawl-relative-links",id:"version-3.2/examples/crawl-relative-links",title:"Crawl a website with relative links",description:"When crawling a website, you may encounter different types of links present that you may want to crawl.",source:"@site/versioned_docs/version-3.2/examples/crawl_relative_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/docs/3.2/examples/crawl-relative-links",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"docs",previous:{title:"Crawl multiple URLs",permalink:"/docs/3.2/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/docs/3.2/examples/crawl-single-url"}},w={},k=[],b={toc:k},v="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)(v,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When crawling a website, you may encounter different types of links present that you may want to crawl.\nTo facilitate the easy crawling of such links, we provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method on the crawler context, which will\nautomatically find links and add them to the crawler's ",(0,l.kt)(u.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"."),(0,l.kt)("p",null,"We provide 3 different strategies for crawling relative links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#All",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"All")," (or the string ",(0,l.kt)("inlineCode",null,'"all"'),")")," which will enqueue all links found, regardless of the domain they point to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameHostname",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameHostname")," (or the string ",(0,l.kt)("inlineCode",null,'"same-hostname"'),")")," which will enqueue all links found for the same hostname. This is the default strategy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameDomain",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameDomain")," (or the string ",(0,l.kt)("inlineCode",null,'"same-domain"'),")")," which will enqueue all links found that have the same domain name, including links from any possible subdomain.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For these examples, we are using the ",(0,l.kt)(u.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", however\nthe same method is available for both the ",(0,l.kt)(u.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"\nand ",(0,l.kt)(u.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", and you use it\nthe exact same way.")),(0,l.kt)(i.Z,{groupId:"enqueue_strategy",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"all",label:"All Links",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Any urls found will be matched by this strategy, even if they go off of the site you are currently crawling.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},c)),(0,l.kt)(o.Z,{value:"same_hostname",label:"Same Hostname",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls and urls that point to the same\nhostname."),(0,l.kt)("blockquote",{parentName:"admonition"},(0,l.kt)("p",{parentName:"blockquote"},"This is the default strategy when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"),", so you don't have to specify it.")),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy. But links to any subdomain like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path")," won't.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},m)),(0,l.kt)(o.Z,{value:"same-subdomain",label:"Same Subdomain",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls or urls that point to the same domain name, regardless of their subdomain."),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy, as well as links to other subdomains or to the naked domain, like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://other-subdomain.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com")," will work too.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p))))}g.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);