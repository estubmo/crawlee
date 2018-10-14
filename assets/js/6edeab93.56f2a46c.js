"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,s(s({ref:n},c),{},{components:t})):o.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(67294),r=t(86010);const a={tabItem:"tabItem_Ymn6"};function s(e){var n=e.children,t=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),r=t(67294),a=t(86010),s=t(12466),i=t(70989),l=t(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var n=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,p=[],d=(0,s.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=p.indexOf(n),o=c[t].value;o!==i&&(d(n),l(o))},f=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var o,r=p.indexOf(e.currentTarget)+1;t=null!=(o=p[r])?o:p[0];break;case"ArrowLeft":var a,s=p.indexOf(e.currentTarget)-1;t=null!=(a=p[s])?a:p[p.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return p.push(e)},onKeyDown:f,onClick:m},s,{className:(0,a.Z)("tabs__item",u.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function p(e){var n=e.lazy,t=e.children,o=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=a.find((function(e){return e.props.value===o}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})})))}function d(e){var n=(0,i.Y)(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",u.tabList)},r.createElement(c,(0,o.Z)({},e,n)),r.createElement(p,(0,o.Z)({},e,n)))}function m(e){var n=(0,l.Z)();return r.createElement(d,(0,o.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>d});var o=t(67294),r=t(16550),a=t(91980),s=t(67392),i=t(50012);function l(e){return function(e){var n,t;return null!=(n=null==(t=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function u(e){var n=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=n?n:l(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function c(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,i=(0,r.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:t,groupId:s});return[(0,a._X)(l),(0,o.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function d(e){var n,t,r,a,s=e.defaultValue,l=e.queryString,d=void 0!==l&&l,m=e.groupId,f=u(e),y=(0,o.useState)((function(){return function(e){var n,t=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=o.find((function(e){return e.default})))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),h=y[0],g=y[1],w=p({queryString:d,groupId:m}),b=w[0],k=w[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,i.Nk)(n),r=t[0],a=t[1],[r,(0,o.useCallback)((function(e){n&&a.set(e)}),[n,a])]),C=v[0],x=v[1],P=function(){var e=null!=b?b:C;return c({value:e,tabValues:f})?e:null}();return(0,o.useLayoutEffect)((function(){P&&g(P)}),[P]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!c({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),x(e)}),[k,x,f]),tabValues:f}}},14959:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(67294),r=t(39960),a=t(74477),s=t(52263),i=t(50643).version.split("."),l=[i[0],i[1]].join(".");const u=function(e){var n=e.to,t=e.children,i=(0,a.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?o.createElement(r.default,{to:"/api/"+n},t):o.createElement(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+n},t)}},6633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>S,frontMatter:()=>w,metadata:()=>k,toc:()=>C});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=t(14959),i=t(65488),l=t(85162),u=t(41435);const c="import { BasicCrawler, ProxyConfiguration } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new BasicCrawler({\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    async requestHandler({ request, session }) {\n        const { url } = request;\n        const requestOptions = {\n            url,\n            // We use session id in order to have the same proxyUrl\n            // for all the requests using the same session.\n            proxyUrl: await proxyConfiguration.newUrl(session.id),\n            throwHttpErrors: false,\n            headers: {\n                // If you want to use the cookieJar.\n                // This way you get the Cookie headers string from session.\n                Cookie: session.getCookieString(url),\n            },\n        };\n        let response;\n\n        try {\n            response = await gotScraping(requestOptions);\n        } catch (e) {\n            if (e === 'SomeNetworkError') {\n                // If a network error happens, such as timeout, socket hangup, etc.\n                // There is usually a chance that it was just bad luck\n                // and the proxy works. No need to throw it away.\n                session.markBad();\n            }\n            throw e;\n        }\n\n        // Automatically retires the session based on response HTTP status code.\n        session.retireOnBlockedStatusCodes(response.statusCode);\n\n        if (response.body.blocked) {\n            // You are sure it is blocked.\n            // This will throw away the session.\n            session.retire();\n        }\n\n        // Everything is ok, you can get the data.\n        // No need to call session.markGood -> BasicCrawler calls it for you.\n\n        // If you want to use the CookieJar in session you need.\n        session.setCookiesFromResponse(response);\n    },\n});\n",p="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, body }) {\n        const title = body.match(/<title(?:.*?)>(.*?)<\\/title>/)?.[1];\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",d="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, $ }) {\n        const title = $('title').text();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",m="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, window }) {\n        const title = window.document.title;\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",f="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PlaywrightCrawler.\n        }\n    },\n});\n",y="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PuppeteerCrawler.\n        }\n    },\n});\n",h="import { SessionPool } from 'crawlee';\n\n// Override the default Session pool configuration.\nconst sessionPoolOptions = {\n    maxPoolSize: 100,\n};\n\n// Open Session Pool.\nconst sessionPool = await SessionPool.open(sessionPoolOptions);\n\n// Get session.\nconst session = await sessionPool.getSession();\n\n// Increase the errorScore.\nsession.markBad();\n\n// Throw away the session.\nsession.retire();\n\n// Lower the errorScore and mark the session good.\nsession.markGood();\n";var g=["components"],w={id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},b=void 0,k={unversionedId:"guides/session-management",id:"version-3.3/guides/session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more",source:"@site/versioned_docs/version-3.3/guides/session_management.mdx",sourceDirName:"guides",slug:"/guides/session-management",permalink:"/docs/guides/session-management",draft:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},sidebar:"docs",previous:{title:"Proxy Management",permalink:"/docs/guides/proxy-management"},next:{title:"Scaling our crawlers",permalink:"/docs/guides/scaling-crawlers"}},v={},C=[],x={toc:C},P="wrapper";function S(e){var n=e.components,t=(0,r.Z)(e,g);return(0,a.kt)(P,(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u200b",(0,a.kt)(s.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"SessionPool"))," is a class that allows us to handle the rotation of proxy IP addresses along with cookies and other custom settings in Crawlee."),(0,a.kt)("p",null,"The main benefit of using Session pool is that we can filter out blocked or non-working proxies,\nso our actor does not retry requests over known blocked/non-working proxies.\nAnother benefit of using SessionPool is that we can store information tied tightly to an IP address,\nsuch as cookies, auth tokens, and particular headers. Having our cookies and other identifiers used only with a specific IP will reduce the chance of being blocked.\nThe last but not least benefit is the even rotation of IP addresses - SessionPool  picks the session randomly,\nwhich should prevent burning out a small pool of available IPs."),(0,a.kt)("p",null,"Now let's take a look at the examples of how to use Session pool:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"basic-crawler/class/BasicCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"BasicCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"http-crawler/class/HttpCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"HttpCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"CheerioCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"JSDOMCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"PlaywrightCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"with ",(0,a.kt)(s.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"li"},"PuppeteerCrawler")),";"),(0,a.kt)("li",{parentName:"ul"},"without a crawler (standalone usage to manage sessions manually).")),(0,a.kt)(i.Z,{groupId:"session_pool",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"basic",label:"BasicCrawler",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},c)),(0,a.kt)(l.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},p)),(0,a.kt)(l.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},d)),(0,a.kt)(l.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},m)),(0,a.kt)(l.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},f)),(0,a.kt)(l.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},y)),(0,a.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},h))),(0,a.kt)("p",null,"These are the basics of configuring SessionPool.\nPlease, bear in mind that a Session pool needs time to find working IPs and build up the pool,\nso we will probably see a lot of errors until it becomes stabilized."))}S.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);