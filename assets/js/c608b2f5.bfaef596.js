"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14959:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),o=n(39960),r=n(74477),i=n(52263),l=n(50643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,n=e.children,l=(0,r.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?a.createElement(o.default,{to:"/api/"+t},n):a.createElement(o.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},n)}},76117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(14959),l=["components"],s={id:"configuration",title:"Configuration",description:"Configuring Crawlee parameters"},p=void 0,d={unversionedId:"guides/configuration",id:"version-3.1/guides/configuration",title:"Configuration",description:"Configuring Crawlee parameters",source:"@site/versioned_docs/version-3.1/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/docs/3.1/guides/configuration",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"configuration",title:"Configuration",description:"Configuring Crawlee parameters"},sidebar:"docs",previous:{title:"Result Storage",permalink:"/docs/3.1/guides/result-storage"},next:{title:"CheerioCrawler",permalink:"/docs/3.1/guides/cheerio-crawler-guide"}},u={},c=[{value:"<code>crawlee.json</code>",id:"crawleejson",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Important env vars",id:"important-env-vars",level:3},{value:"<code>CRAWLEE_STORAGE_DIR</code>",id:"crawlee_storage_dir",level:4},{value:"<code>CRAWLEE_DEFAULT_DATASET_ID</code>",id:"crawlee_default_dataset_id",level:4},{value:"<code>CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID</code>",id:"crawlee_default_key_value_store_id",level:4},{value:"<code>CRAWLEE_DEFAULT_REQUEST_QUEUE_ID</code>",id:"crawlee_default_request_queue_id",level:4},{value:"<code>CRAWLEE_PURGE_ON_START</code>",id:"crawlee_purge_on_start",level:4},{value:"Convenience env vars",id:"convenience-env-vars",level:3},{value:"<code>CRAWLEE_HEADLESS</code>",id:"crawlee_headless",level:4},{value:"<code>CRAWLEE_LOG_LEVEL</code>",id:"crawlee_log_level",level:4},{value:"<code>CRAWLEE_VERBOSE_LOG</code>",id:"crawlee_verbose_log",level:4},{value:"<code>CRAWLEE_MEMORY_MBYTES</code>",id:"crawlee_memory_mbytes",level:4},{value:"Configuration class",id:"configuration-class",level:2},{value:"Global Configuration",id:"global-configuration",level:3},{value:"Custom configuration",id:"custom-configuration",level:3}],m={toc:c},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u200b",(0,r.kt)(i.Z,{to:"core/class/Configuration",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"))," is a class holding Crawlee configuration parameters. By default, you don't need to set or change any of them, but for certain use cases you might want to do so, e.g. in order to change the default storage directory, or enable verbose error logging, and so on."),(0,r.kt)("p",null,"There are three ways of changing the configuration parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding ",(0,r.kt)("inlineCode",{parentName:"li"},"crawlee.json")," file to your project"),(0,r.kt)("li",{parentName:"ul"},"setting environment variables"),(0,r.kt)("li",{parentName:"ul"},"using the ",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration")," class")),(0,r.kt)("p",null,"You could also combine all the above, but you should keep in mind, that the precedence for these 3 options is the following:\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"crawlee.json")))," < ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"constructor options"))," < ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"environment variables")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json")," is a baseline. The options provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," constructor will override the options provided in the JSON. Environment variables will override both."),(0,r.kt)("h2",{id:"crawleejson"},(0,r.kt)("inlineCode",{parentName:"h2"},"crawlee.json")),(0,r.kt)("p",null,"The first option you could use for configuring Crawlee is ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json")," file. The only thing you need to do is specify the ",(0,r.kt)(i.Z,{to:"core/interface/ConfigurationOptions",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationOptions"))," in the file, place the file in the root of your project, and Crawlee will use provided options as global configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="crawlee.json"',title:'"crawlee.json"'},'{\n  "persistStateIntervalMillis": 10000,\n  "logLevel": "DEBUG"\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json")," you don't need to do anything else in the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler, sleep } from 'crawlee';\n// We are not importing nor passing\n// the Configuration to the crawler.\n// We are not assigning any env vars either.\nconst crawler = new CheerioCrawler();\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // for the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // for the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n")),(0,r.kt)("p",null,"If you run this example (assuming you placed the ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json")," file with ",(0,r.kt)("inlineCode",{parentName:"p"},"persistStateIntervalMillis")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logLevel")," specified there in the root of your project), you will find the ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK_CRAWLER_STATISTICS")," file in default Key-Value store,\nwhich would show, that there's 1 finished request and crawler runtime was ~10 seconds.\nThis confirms that the state was persisted after 10 seconds, as it was set in ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json"),".\nBesides, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," logs in addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO")," ones in your terminal, as ",(0,r.kt)("inlineCode",{parentName:"p"},"logLevel")," was set to ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json"),", meaning Crawlee picked both provided options correctly."),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Another way of configuring Crawlee is setting environment variables.\nThe following is a list of the environment variables used by Crawlee that are available to the user."),(0,r.kt)("h3",{id:"important-env-vars"},"Important env vars"),(0,r.kt)("p",null,"The following environment variables have large impact on the way Crawlee works and its behavior\ncan be changed significantly by setting or unsetting them."),(0,r.kt)("h4",{id:"crawlee_storage_dir"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_STORAGE_DIR")),(0,r.kt)("p",null,"Defines the path to a local directory where ",(0,r.kt)(i.Z,{to:"core/class/KeyValueStore",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"KeyValueStore")),", ",(0,r.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")),", and ",(0,r.kt)(i.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," store their data. By default, it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"./storage"),"."),(0,r.kt)("h4",{id:"crawlee_default_dataset_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_DEFAULT_DATASET_ID")),(0,r.kt)("p",null,"The default dataset has ID ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Setting this environment variable overrides the default dataset ID with the provided value."),(0,r.kt)("h4",{id:"crawlee_default_key_value_store_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID")),(0,r.kt)("p",null,"The default key-value store has ID ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Setting this environment variable overrides the default key-value store ID with the provided value."),(0,r.kt)("h4",{id:"crawlee_default_request_queue_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_DEFAULT_REQUEST_QUEUE_ID")),(0,r.kt)("p",null,"The default request queue has ID ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Setting this environment variable overrides the default request queue ID with the provided value."),(0,r.kt)("h4",{id:"crawlee_purge_on_start"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_PURGE_ON_START")),(0,r.kt)("p",null,"Storage directories are purged by default. If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," - local storage directories would not be purged automatically at the start of the crawler run or before opening of some storage explicitly (e.g. via ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset.open()"),"). Useful if we're trying e.g. to add more items to dataset with each next run (and keep the previously saved/scraped items)."),(0,r.kt)("h3",{id:"convenience-env-vars"},"Convenience env vars"),(0,r.kt)("p",null,"The next group includes env vars that can help achieve certain goals without having to change\nour code, such as temporarily switching log level to DEBUG or enabling verbose logging for errors."),(0,r.kt)("h4",{id:"crawlee_headless"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_HEADLESS")),(0,r.kt)("p",null,"If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", web browsers launched by Crawlee will run in the headless mode. We can still override\nthis setting in the code, e.g. by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"headless: true")," option to the ",(0,r.kt)(i.Z,{to:"puppeteer-crawler/function/launchPuppeteer",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"launchPuppeteer()"))," function. By default, the browsers\nare launched in headful mode, i.e. with windows."),(0,r.kt)("h4",{id:"crawlee_log_level"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_LOG_LEVEL")),(0,r.kt)("p",null,"Specifies the minimum log level, which can be one of the following values (in order of severity):\n",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OFF"),". By default, the log level is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),",\nwhich means that ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," messages are not printed to console. See the ",(0,r.kt)(i.Z,{to:"core/class/Log",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"utils.log")),"\nnamespace for logging utilities."),(0,r.kt)("h4",{id:"crawlee_verbose_log"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_VERBOSE_LOG")),(0,r.kt)("p",null,"Enables verbose logging if set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". If not explicitly set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," - for errors thrown from inside request handler a warning with only error message will be logged as long as we know the request will be retried. Same applies to some known errors (such as timeout errors). Disabled by default."),(0,r.kt)("h4",{id:"crawlee_memory_mbytes"},(0,r.kt)("inlineCode",{parentName:"h4"},"CRAWLEE_MEMORY_MBYTES")),(0,r.kt)("p",null,"Sets the amount of system memory in megabytes to be used by the ",(0,r.kt)(i.Z,{to:"core/class/AutoscaledPool",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"AutoscaledPool")),".\nIt is used to limit the number of concurrently running tasks. By default, the max amount of memory\nto be used is set to one quarter of total system memory, i.e. on a system with 8192 MB of memory,\nthe autoscaling feature will only use up to 2048 MB of memory."),(0,r.kt)("h2",{id:"configuration-class"},"Configuration class"),(0,r.kt)("p",null,"The last option to adjust Crawlee configuration is to use the ",(0,r.kt)(i.Z,{to:"core/class/Configuration",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"))," class in the code."),(0,r.kt)("h3",{id:"global-configuration"},"Global Configuration"),(0,r.kt)("p",null,"By default, there is a global singleton instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," class, it is used by the crawlers and some other classes that depend on a configurable behavior. In most cases you don't need to adjust any options there, but if needed - you can get access to it via ",(0,r.kt)(i.Z,{to:"core/class/Configuration#getGlobalConfig",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"Configuration.getGlobalConfig()"))," function. Now you can easily ",(0,r.kt)(i.Z,{to:"core/class/Configuration#get",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"get"))," and ",(0,r.kt)(i.Z,{to:"core/class/Configuration#set",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"set"))," the ",(0,r.kt)(i.Z,{to:"core/interface/ConfigurationOptions",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationOptions")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler, Configuration, sleep } from 'crawlee';\n\n// Get the global configuration\nconst config = Configuration.getGlobalConfig();\n// Set the 'persistStateIntervalMillis' option\n// of global configuration to 10 seconds\nconfig.set('persistStateIntervalMillis', 10_000);\n\n// Note, that we are not passing the configuration to the crawler\n// as it's using the global configuration\nconst crawler = new CheerioCrawler();\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // For the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // For the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n")),(0,r.kt)("p",null,"This is pretty much the same example we used for showing ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee.json")," usage,\nbut now we're using the global configuration, which is the only difference.\nIf you run this example - you will find the ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK_CRAWLER_STATISTICS")," file in default Key-Value store as before,\nwhich would show the same number of finishes requests (one) and the same crawler runtime (~10 seconds).\nThis confirms that provided parameters worked: the state was persisted after 10 seconds, as it was set in the global configuration."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After running the same example with commented two lines of code related to ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," there will be\nno ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK_CRAWLER_STATISTICS")," file stored in the default Key-Value store:\nas we did not change the ",(0,r.kt)("inlineCode",{parentName:"p"},"persistStateIntervalMillis"),", Crawlee used the default value of 60 seconds,\nand the crawler was forcefully aborted after ~15 seconds of run time before it persisted the state for the first time.")),(0,r.kt)("h3",{id:"custom-configuration"},"Custom configuration"),(0,r.kt)("p",null,"Alternatively, you can create a custom configuration. In this case you need to pass it to the class that is going to use it, e.g. to the crawler. Let's adjust the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler, Configuration, sleep } from 'crawlee';\n\n// Create new configuration\nconst config = new Configuration({\n    // Set the 'persistStateIntervalMillis' option to 10 seconds\n    persistStateIntervalMillis: 10_000,\n});\n\n// Now we need to pass the configuration to the crawler\nconst crawler = new CheerioCrawler({}, config);\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // for the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // for the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n")),(0,r.kt)("p",null,"If you run this example - it would work exactly the same as before,\nwith the same ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK_CRAWLER_STATISTICS")," file in default Key-Value store after the run,\nshowing the same number of finished requests and the same crawler run time."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you would not pass the configuration to the crawler, there again will be\nno ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK_CRAWLER_STATISTICS")," file stored in the default Key-Value store, this time for a different reason though.\nSince we did not pass the configuration to the crawler,\nthe crawler will use the global configuration, which is using the default ",(0,r.kt)("inlineCode",{parentName:"p"},"persistStateIntervalMillis"),".\nSo again, the run was aborted before the state was persisted for the first time.")))}f.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);