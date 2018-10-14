"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"got-scraping",title:"Got Scraping",description:"Blazing fast cURL alternative for modern web scraping"},l=void 0,p={unversionedId:"guides/got-scraping",id:"version-3.2/guides/got-scraping",title:"Got Scraping",description:"Blazing fast cURL alternative for modern web scraping",source:"@site/versioned_docs/version-3.2/guides/got_scraping.mdx",sourceDirName:"guides",slug:"/guides/got-scraping",permalink:"/docs/3.2/guides/got-scraping",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"got-scraping",title:"Got Scraping",description:"Blazing fast cURL alternative for modern web scraping"},sidebar:"docs",previous:{title:"JSDOMCrawler",permalink:"/docs/3.2/guides/jsdom-crawler-guide"},next:{title:"TypeScript Projects",permalink:"/docs/3.2/guides/typescript-project"}},d={},c=[{value:"Intro",id:"intro",level:2},{value:"<code>sendRequest</code> API",id:"sendrequest-api",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>method</code>",id:"method",level:3},{value:"<code>body</code>",id:"body",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>sessionToken</code>",id:"sessiontoken",level:3},{value:"<code>responseType</code>",id:"responsetype",level:3},{value:"<code>cookieJar</code>",id:"cookiejar",level:3},{value:"<code>retry.limit</code>",id:"retrylimit",level:3},{value:"<code>useHeaderGenerator</code>",id:"useheadergenerator",level:3},{value:"<code>headerGeneratorOptions</code>",id:"headergeneratoroptions",level:3}],u={toc:c},m="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"BasicCrawler"),", we have to send the requests manually. In order to do this, we can use the context-aware ",(0,a.kt)("inlineCode",{parentName:"p"},"sendRequest()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BasicCrawler } from 'crawlee';\n\nconst crawler = new BasicCrawler({\n    async requestHandler({ sendRequest, log }) {\n        const res = await sendRequest();\n        log.info('received body', res.body);\n    },\n});\n")),(0,a.kt)("p",null,"It uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"got-scraping"))," under the hood.\nGot Scraping is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener"},"Got")," extension developed to mimic browser requests, so there's a high chance we'll open the webpage without getting blocked."),(0,a.kt)("h2",{id:"sendrequest-api"},(0,a.kt)("inlineCode",{parentName:"h2"},"sendRequest")," API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async sendRequest(overrideOptions?: GotOptionsInit) => {\n    return gotScraping({\n        url: request.url,\n        method: request.method,\n        body: request.payload,\n        headers: request.headers,\n        proxyUrl: crawlingContext.proxyInfo?.url,\n        sessionToken: session,\n        responseType: 'text',\n        ...overrideOptions,\n        retry: {\n            limit: 0,\n            ...overrideOptions?.retry,\n        },\n        cookieJar: {\n            getCookieString: (url: string) => session!.getCookieString(url),\n            setCookie: (rawCookie: string, url: string) => session!.setCookie(rawCookie, url),\n            ...overrideOptions?.cookieJar,\n        },\n    });\n}\n")),(0,a.kt)("h3",{id:"url"},(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("p",null,"By default, it's the URL of current task. However you can override this with a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," instance if necessary."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#url",target:"_blank",rel:"noopener"},"Got documentation"),".")),(0,a.kt)("h3",{id:"method"},(0,a.kt)("inlineCode",{parentName:"h3"},"method")),(0,a.kt)("p",null,"By default, it's the HTTP method of current task. Possible values are ",(0,a.kt)("inlineCode",{parentName:"p"},"'GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#method",target:"_blank",rel:"noopener"},"Got documentation"),".")),(0,a.kt)("h3",{id:"body"},(0,a.kt)("inlineCode",{parentName:"h3"},"body")),(0,a.kt)("p",null,"By default, it's the HTTP payload of current task."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#body",target:"_blank",rel:"noopener"},"Got documentation"),".")),(0,a.kt)("h3",{id:"headers"},(0,a.kt)("inlineCode",{parentName:"h3"},"headers")),(0,a.kt)("p",null,"By default, it's the HTTP headers of current task. It's an object with ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," values."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#headers",target:"_blank",rel:"noopener"},"Got documentation"),".")),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,"It's a string representing the proxy server in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"protocol://username:password@hostname:port"),"."),(0,a.kt)("p",null,"For example, an Apify proxy server looks like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://auto:password@proxy.apify.com:8000"),"."),(0,a.kt)("p",null,"Basic Crawler does not have the concept of a session or proxy, therefore we need to manually pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BasicCrawler } from 'crawlee';\n\nconst crawler = new BasicCrawler({\n    async requestHandler({ sendRequest, log }) {\n        const res = await sendRequest({\n            proxyUrl: 'http://auto:password@proxy.apify.com:8000',\n        });\n        log.info('received body', res.body);\n    },\n});\n")),(0,a.kt)("p",null,"We use proxies to hide our real IP address."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/apify/got-scraping#proxyurl",target:"_blank",rel:"noopener"},"Got Scraping documentation"),".")),(0,a.kt)("h3",{id:"sessiontoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionToken")),(0,a.kt)("p",null,"It's a non-primitive object used as a key when generating browser fingerprint. Fingerprints with the same token don't change.\nThis can be used to retain the ",(0,a.kt)("inlineCode",{parentName:"p"},"user-agent")," header when using the same Apify Session."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/apify/got-scraping#sessiontoken",target:"_blank",rel:"noopener"},"Got Scraping documentation"),".")),(0,a.kt)("h3",{id:"responsetype"},(0,a.kt)("inlineCode",{parentName:"h3"},"responseType")),(0,a.kt)("p",null,"This option defines how the response should be parsed."),(0,a.kt)("p",null,"By default, we fetch HTML websites - that is plaintext. Hence, we set ",(0,a.kt)("inlineCode",{parentName:"p"},"responseType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"'text'"),". However, JSON is possible as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BasicCrawler } from 'crawlee';\n\nconst crawler = new BasicCrawler({\n    async requestHandler({ sendRequest, log }) {\n        const res = await sendRequest({ responseType: 'json' });\n        log.info('received body', res.body);\n    },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#responsetype",target:"_blank",rel:"noopener"},"Got documentation"),".")),(0,a.kt)("h3",{id:"cookiejar"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookieJar")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Got")," uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"cookieJar")," to manage cookies. It's an object with an interface of a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/salesforce/tough-cookie",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"tough-cookie")," package"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BasicCrawler } from 'crawlee';\nimport { CookieJar } from 'tough-cookie';\n\nconst cookieJar = new CookieJar();\n\nconst crawler = new BasicCrawler({\n    async requestHandler({ sendRequest, log }) {\n        const res = await sendRequest({ cookieJar });\n        log.info('received body', res.body);\n    },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md#cookiejar",target:"_blank",rel:"noopener"},"Got documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/salesforce/tough-cookie#cookiejarstore-options",target:"_blank",rel:"noopener"},"Tough Cookie documentation")))),(0,a.kt)("h3",{id:"retrylimit"},(0,a.kt)("inlineCode",{parentName:"h3"},"retry.limit")),(0,a.kt)("p",null,"This option specifies the maximum number of ",(0,a.kt)("inlineCode",{parentName:"p"},"Got")," retries."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"retry.limit")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". This is because Crawlee has its own (complicated enough) retry management."),(0,a.kt)("p",null,"We suggest NOT changing this value for stability reasons."),(0,a.kt)("h3",{id:"useheadergenerator"},(0,a.kt)("inlineCode",{parentName:"h3"},"useHeaderGenerator")),(0,a.kt)("p",null,"It's a boolean for whether to generate browser headers. By default, it's set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", and we recommend keeping this for better results."),(0,a.kt)("h3",{id:"headergeneratoroptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerGeneratorOptions")),(0,a.kt)("p",null,"This option represents an object how to generate browser fingerprint. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BasicCrawler } from 'crawlee';\n\nconst crawler = new BasicCrawler({\n    async requestHandler({ sendRequest, log }) {\n        const res = await sendRequest({\n            headerGeneratorOptions: {\n                devices: ['mobile', 'desktop'],\n                locales: ['en-US'],\n                operatingSystems: ['windows', 'macos', 'android', 'ios'],\n                browsers: ['chrome', 'edge', 'firefox', 'safari'],\n            },\n        });\n        log.info('received body', res.body);\n    },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"More details in ",(0,a.kt)("a",{parentName:"em",href:"https://apify.github.io/fingerprint-suite/api/fingerprint-generator/interface/HeaderGeneratorOptions/",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"HeaderGeneratorOptions")," documentation"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Related links")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/got#documentation",target:"_blank",rel:"noopener"},"Got documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"Got Scraping documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apify.github.io/fingerprint-suite/docs/guides/fingerprint-generator/",target:"_blank",rel:"noopener"},"Header Generator documentation"))))}k.isMDXComponent=!0}}]);