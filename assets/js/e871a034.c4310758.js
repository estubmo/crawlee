"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14959:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(39960),o=a(74477),s=a(52263),i=a(50643).version.split("."),l=[i[0],i[1]].join(".");const p=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?r.createElement(n.default,{to:"/api/"+t},a):r.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},a)}},64809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(14959),i=["components"],l={id:"result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!"},p=void 0,d={unversionedId:"guides/result-storage",id:"version-3.1/guides/result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!",source:"@site/versioned_docs/version-3.1/guides/result_storage.mdx",sourceDirName:"guides",slug:"/guides/result-storage",permalink:"/docs/3.1/guides/result-storage",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1682566928,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!"},sidebar:"docs",previous:{title:"Request Storage",permalink:"/docs/3.1/guides/request-storage"},next:{title:"Configuration",permalink:"/docs/3.1/guides/configuration"}},u={},c=[{value:"Key-value store",id:"key-value-store",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Cleaning up the storages",id:"cleaning-up-the-storages",level:2}],m={toc:c},h="wrapper";function y(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Crawlee has several result storage types that are useful for specific tasks. The data is stored on a local disk to the directory defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable. If this variable is not defined, by default Crawlee sets ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage")," in the current working directory."),(0,o.kt)("p",null,"Crawlee storage is managed by ",(0,o.kt)(s.Z,{to:"memory-storage/class/MemoryStorage",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"MemoryStorage"))," class. During the crawler run all information is stored in memory, while also being off-loaded to the local files in respective storage type folders."),(0,o.kt)("h2",{id:"key-value-store"},"Key-value store"),(0,o.kt)("p",null,"The key-value store is used for saving and reading data records or files. Each data record is represented by a unique key and associated with a MIME content type. Key-value stores are ideal for saving screenshots of web pages, PDFs or to persist the state of crawlers."),(0,o.kt)("p",null,"Each Crawlee project run is associated with a ",(0,o.kt)("strong",{parentName:"p"},"default key-value store"),". By convention, the project input and output are stored in the default key-value store under the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," keys respectively. Typically, both input and output are JSON files, although they could be any other format."),(0,o.kt)("p",null,"In Crawlee, the key-value store is represented by the ",(0,o.kt)(s.Z,{to:"core/class/KeyValueStore",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore"))," class. In order to simplify access to the default key-value store, Crawlee also provides ",(0,o.kt)(s.Z,{to:"core/class/KeyValueStore#getValue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore.getValue()"))," and ",(0,o.kt)(s.Z,{to:"core/class/KeyValueStore#setValue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore.setValue()"))," functions."),(0,o.kt)("p",null,"The data is stored in the directory specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{CRAWLEE_STORAGE_DIR}/key_value_stores/{STORE_ID}/{KEY}.{EXT}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"{STORE_ID}")," is the name or the ID of the key-value store. The default key-value store has ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless we override it by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID")," environment variable. The ",(0,o.kt)("inlineCode",{parentName:"p"},"{KEY}")," is the key of the record and ",(0,o.kt)("inlineCode",{parentName:"p"},"{EXT}")," corresponds to the MIME content type of the data value.")),(0,o.kt)("p",null,"The following code demonstrates basic operations of key-value stores:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { KeyValueStore } from 'crawlee';\n\n// Get the INPUT from the default key-value store\nconst input = await KeyValueStore.getInput();\n\n// Write the OUTPUT to the default key-value store\nawait KeyValueStore.setValue('OUTPUT', { myResult: 123 });\n\n// Open a named key-value store\nconst store = await KeyValueStore.open('some-name');\n\n// Write a record to the named key-value store.\n// JavaScript object is automatically converted to JSON,\n// strings and binary buffers are stored as they are\nawait store.setValue('some-key', { foo: 'bar' });\n\n// Read a record from the named key-value store.\n// Note that JSON is automatically parsed to a JavaScript object,\n// text data is returned as a string, and other data is returned as binary buffer\nconst value = await store.getValue('some-key');\n\n// Delete a record from the named key-value store\nawait store.setValue('some-key', null);\n")),(0,o.kt)("p",null,"To see a real-world example of how to get the input from the key-value store, see the ",(0,o.kt)("a",{parentName:"p",href:"../examples/capture-screenshot",target:null,rel:null},"Screenshots")," example."),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"Datasets are used to store structured data where each object stored has the same attributes, such as online store products or real estate offers. Dataset can be imagined as a table, where each object is a row and its attributes are columns. Dataset is an append-only storage - we can only add new records to it, but we cannot modify or remove existing records."),(0,o.kt)("p",null,"Each Crawlee project run is associated with a ",(0,o.kt)("strong",{parentName:"p"},"default dataset"),". Typically, it is used to store crawling results specific for the crawler run. Its usage is optional."),(0,o.kt)("p",null,"In Crawlee, the dataset is represented by the ",(0,o.kt)(s.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset"))," class. In order to simplify writes to the default dataset, Crawlee also provides the ",(0,o.kt)(s.Z,{to:"core/class/Dataset#pushData",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.pushData()"))," function."),(0,o.kt)("p",null,"The data is stored in the directory specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{CRAWLEE_STORAGE_DIR}/datasets/{DATASET_ID}/{INDEX}.json\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"{DATASET_ID}")," is the name or the ID of the dataset. The default dataset has ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless we override it by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_DEFAULT_DATASET_ID")," environment variable. Each dataset item is stored as a separate JSON file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"{INDEX}")," is a zero-based index of the item in the dataset.")),(0,o.kt)("p",null,"The following code demonstrates basic operations of the dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Dataset } from 'crawlee';\n\n// Write a single row to the default dataset\nawait Dataset.pushData({ col1: 123, col2: 'val2' });\n\n// Open a named dataset\nconst dataset = await Dataset.open('some-name');\n\n// Write a single row\nawait dataset.pushData({ foo: 'bar' });\n\n// Write multiple rows\nawait dataset.pushData([{ foo: 'bar2', col2: 'val2' }, { col3: 123 }]);\n")),(0,o.kt)("p",null,"To see how to use the dataset to store crawler results, see the ",(0,o.kt)("a",{parentName:"p",href:"../examples/cheerio-crawler",target:null,rel:null},"Cheerio Crawler")," example."),(0,o.kt)("h2",{id:"cleaning-up-the-storages"},"Cleaning up the storages"),(0,o.kt)("p",null,"Default storages are purged before the crawler starts if not specified otherwise. This happens as early as when we try to open some storage (e.g. via ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.open()"),") or when we try to work with a default storage via one of the helper methods (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.pushData()")," that under the hood calls ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.open()"),"). If we don't work with storages explicitly in our code, the purging will eventually happen when the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method of our crawler is executed. In case we need to purge the storages sooner, we can use the ",(0,o.kt)(s.Z,{to:"core/function/purgeDefaultStorages",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"purgeDefaultStorages()"))," helper explicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { purgeDefaultStorages } from 'crawlee';\n\nawait purgeDefaultStorages();\n")),(0,o.kt)("p",null,"Calling this function will clean up the default results storage directories except the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," key in default key-value store directory. This is a shortcut for running (optional) ",(0,o.kt)("inlineCode",{parentName:"p"},"purge")," method on the ",(0,o.kt)(s.Z,{to:"core/interface/StorageClient",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"StorageClient"))," interface, in other words it will call the ",(0,o.kt)("inlineCode",{parentName:"p"},"purge")," method of the underlying storage implementation we are currently using. In addition, this method will make sure the storage is purged only once for a given execution context, so it is safe to call it multiple times."))}y.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.3.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.3.1","@crawlee/browser":"^3.3.1","@crawlee/cheerio":"^3.3.1","@crawlee/cli":"^3.3.1","@crawlee/core":"^3.3.1","@crawlee/http":"^3.3.1","@crawlee/jsdom":"^3.3.1","@crawlee/playwright":"^3.3.1","@crawlee/puppeteer":"^3.3.1","@crawlee/utils":"^3.3.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);