"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(39960),s=r(74477),o=r(52263),i=r(50643).version.split("."),p=[i[0],i[1]].join(".");const l=function(e){var t=e.to,r=e.children,i=(0,s.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},r)}},5269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=r(41435),i=r(14959);const p="import { Dataset, PuppeteerCrawler } from 'crawlee';\n\n// Create an instance of the PuppeteerCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Puppeteer.\nconst crawler = new PuppeteerCrawler({\n    // Here you can set options that are passed to the launchPuppeteer() function.\n    launchContext: {\n        launchOptions: {\n            headless: true,\n            // Other Puppeteer options\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n";var l=["components"],c={id:"puppeteer-crawler",title:"Puppeteer crawler"},u=void 0,d={unversionedId:"examples/puppeteer-crawler",id:"version-3.0/examples/puppeteer-crawler",title:"Puppeteer crawler",description:"This example demonstrates how to use PuppeteerCrawler in combination",source:"@site/versioned_docs/version-3.0/examples/puppeteer_crawler.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-crawler",permalink:"/docs/3.0/examples/puppeteer-crawler",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"puppeteer-crawler",title:"Puppeteer crawler"},sidebar:"docs",previous:{title:"Capture a screenshot using Puppeteer",permalink:"/docs/3.0/examples/capture-screenshot"},next:{title:"Puppeteer recursive crawl",permalink:"/docs/3.0/examples/puppeteer-recursive-crawl"}},m={},f=[],h={toc:f},w="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)(w,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates how to use ",(0,s.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," in combination\nwith ",(0,s.kt)(i.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"\nto recursively scrape the ",(0,s.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Puppeteer."),(0,s.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,s.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,s.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,s.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},p))}y.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);