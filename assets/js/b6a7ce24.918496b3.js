"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},l),{},{components:a})):r.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14959:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(39960),o=a(74477),s=a(52263),i=a(50643).version.split("."),p=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?r.createElement(n.default,{to:"/api/"+t},a):r.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},a)}},91457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(41435),i=a(14959);const p="import { Dataset, CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\nawait crawler.addRequests([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\n// Run the crawler\nawait crawler.run();\n";var c=["components"],l={id:"add-data-to-dataset",title:"Add data to dataset"},d=void 0,u={unversionedId:"examples/add-data-to-dataset",id:"version-3.2/examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/versioned_docs/version-3.2/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/docs/3.2/examples/add-data-to-dataset",draft:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/docs/3.2/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/docs/3.2/examples/basic-crawler"}},m={},f=[],y={toc:f},w="wrapper";function b(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)(w,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,o.kt)(i.Z,{to:"core/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.open()"))),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p),(0,o.kt)("p",null,"Each item in this dataset will be saved to its own file in the following directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/datasets/default/\n")))}b.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);