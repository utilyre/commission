if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const o=e=>i(e,t),c={module:{uri:t},exports:d,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.4fbcb350.js",revision:null},{url:"assets/index.eddc8626.css",revision:null},{url:"index.html",revision:"b7fbadaac8cc01d11d7377deae55487f"},{url:"registerSW.js",revision:"ea1d6edc3f32dd8bd9d5d20717bc6498"},{url:"favicon.svg",revision:"92ea7e4ae544159d3eca8836154419ec"},{url:"manifest.webmanifest",revision:"c775f51acd0c1f3fc59a6fd0e50d585b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
