"use strict";// poor man's autoreload
window.addEventListener("load",()=>(async()=>{const a={credentials:"include"},b=await fetch(location.href,a);if(!b.ok)return;const c=await b.text(),d=Date.now();for(;Date.now()-d<600000;){await new Promise(a=>setTimeout(a,800));const b=await fetch(location.href,a);if(b.ok){const a=await b.text();if(c!==a)return void location.reload(!0)}}})());
