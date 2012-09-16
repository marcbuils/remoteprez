(function(){var e=function(t,n){var r=e.resolve(t,n||"/"),i=e.modules[r];if(!i)throw new Error("Failed to resolve module "+t+", tried "+r);var s=e.cache[r],o=s?s.exports:i();return o};e.paths=[],e.modules={},e.cache={},e.extensions=[".js",".coffee",".json"],e._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},e.resolve=function(){return function(t,n){function u(t){t=r.normalize(t);if(e.modules[t])return t;for(var n=0;n<e.extensions.length;n++){var i=e.extensions[n];if(e.modules[t+i])return t+i}}function a(t){t=t.replace(/\/+$/,"");var n=r.normalize(t+"/package.json");if(e.modules[n]){var i=e.modules[n](),s=i.browserify;if(typeof s=="object"&&s.main){var o=u(r.resolve(t,s.main));if(o)return o}else if(typeof s=="string"){var o=u(r.resolve(t,s));if(o)return o}else if(i.main){var o=u(r.resolve(t,i.main));if(o)return o}}return u(t+"/index")}function f(e,t){var n=l(t);for(var r=0;r<n.length;r++){var i=n[r],s=u(i+"/"+e);if(s)return s;var o=a(i+"/"+e);if(o)return o}var s=u(e);if(s)return s}function l(e){var t;e==="/"?t=[""]:t=r.normalize(e).split("/");var n=[];for(var i=t.length-1;i>=0;i--){if(t[i]==="node_modules")continue;var s=t.slice(0,i+1).join("/")+"/node_modules";n.push(s)}return n}n||(n="/");if(e._core[t])return t;var r=e.modules.path();n=r.resolve("/",n);var i=n||"/";if(t.match(/^(?:\.\.?\/|\/)/)){var s=u(r.resolve(i,t))||a(r.resolve(i,t));if(s)return s}var o=f(t,i);if(o)return o;throw new Error("Cannot find module '"+t+"'")}}(),e.alias=function(t,n){var r=e.modules.path(),i=null;try{i=e.resolve(t+"/package.json","/")}catch(s){i=e.resolve(t,"/")}var o=r.dirname(i),u=(Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t})(e.modules);for(var a=0;a<u.length;a++){var f=u[a];if(f.slice(0,o.length+1)===o+"/"){var l=f.slice(o.length);e.modules[n+l]=e.modules[o+l]}else f===o&&(e.modules[n]=e.modules[o])}},function(){var t={};e.define=function(n,r){e.modules.__browserify_process&&(t=e.modules.__browserify_process());var i=e._core[n]?"":e.modules.path().dirname(n),s=function(t){var n=e(t,i),r=e.cache[e.resolve(t,i)];return r&&r.parent===null&&(r.parent=o),n};s.resolve=function(t){return e.resolve(t,i)},s.modules=e.modules,s.define=e.define,s.cache=e.cache;var o={id:n,filename:n,exports:{},loaded:!1,parent:null};e.modules[n]=function(){return e.cache[n]=o,r.call(o.exports,s,o,o.exports,i,n,t),o.loaded=!0,o.exports}}}(),e.define("path",function(e,t,n,r,i,s){function o(e,t){var n=[];for(var r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}function u(e,t){var n=0;for(var r=e.length;r>=0;r--){var i=e[r];i=="."?e.splice(r,1):i===".."?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var a=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;n.resolve=function(){var e="",t=!1;for(var n=arguments.length;n>=-1&&!t;n--){var r=n>=0?arguments[n]:s.cwd();if(typeof r!="string"||!r)continue;e=r+"/"+e,t=r.charAt(0)==="/"}return e=u(o(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},n.normalize=function(e){var t=e.charAt(0)==="/",n=e.slice(-1)==="/";return e=u(o(e.split("/"),function(e){return!!e}),!t).join("/"),!e&&!t&&(e="."),e&&n&&(e+="/"),(t?"/":"")+e},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,t){return e&&typeof e=="string"}).join("/"))},n.dirname=function(e){var t=a.exec(e)[1]||"",n=!1;return t?t.length===1||n&&t.length<=3&&t.charAt(1)===":"?t:t.substring(0,t.length-1):"."},n.basename=function(e,t){var n=a.exec(e)[2]||"";return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return a.exec(e)[3]||""}}),e.define("__browserify_process",function(e,t,n,r,i,s){var s=t.exports={};s.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return window.setImmediate;if(t){var n=[];return window.addEventListener("message",function(e){if(e.source===window&&e.data==="browserify-tick"){e.stopPropagation();if(n.length>0){var t=n.shift();t()}}},!0),function(t){n.push(t),window.postMessage("browserify-tick","*")}}return function(t){setTimeout(t,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.binding=function(t){if(t==="evals")return e("vm");throw new Error("No such module. (Possibly not yet loaded)")},function(){var t="/",n;s.cwd=function(){return t},s.chdir=function(r){n||(n=e("path")),t=n.resolve(r,t)}}()}),e.define("/node_modules/node-uuid/package.json",function(e,t,n,r,i,s){t.exports={main:"./uuid.js"}}),e.define("/node_modules/node-uuid/uuid.js",function(e,t,n,r,i,s){(function(){function v(e,t,n){var r=t&&n||0,i=0;t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){i<16&&(t[r+i++]=p[e])});while(i<16)t[r+i++]=0;return t}function m(e,t){var n=t||0,r=h;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function S(e,t,n){var r=t&&n||0,i=t||[];e=e||{};var s=e.clockseq!=null?e.clockseq:b,o=e.msecs!=null?e.msecs:(new Date).getTime(),u=e.nsecs!=null?e.nsecs:E+1,a=o-w+(u-E)/1e4;a<0&&e.clockseq==null&&(s=s+1&16383),(a<0||o>w)&&e.nsecs==null&&(u=0);if(u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");w=o,E=u,b=s,o+=122192928e5;var f=((o&268435455)*1e4+u)%4294967296;i[r++]=f>>>24&255,i[r++]=f>>>16&255,i[r++]=f>>>8&255,i[r++]=f&255;var l=o/4294967296*1e4&268435455;i[r++]=l>>>8&255,i[r++]=l&255,i[r++]=l>>>24&15|16,i[r++]=l>>>16&255,i[r++]=s>>>8|128,i[r++]=s&255;var c=e.node||y;for(var h=0;h<6;h++)i[r+h]=c[h];return t?t:m(i)}function x(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e=="binary"?new c(16):null,e=null),e=e||{};var i=e.random||(e.rng||l)();i[6]=i[6]&15|64,i[8]=i[8]&63|128;if(t)for(var s=0;s<16;s++)t[r+s]=i[s];return t||m(i)}var n=this,r,i,s,o=new Array(16);r=function(){var e,t=o,n=0;for(var n=0,e;n<16;n++)(n&3)==0&&(e=Math.random()*4294967296),t[n]=e>>>((n&3)<<3)&255;return t};if(n.crypto&&crypto.getRandomValues){var u=new Uint32Array(4);s=function(){crypto.getRandomValues(u);for(var e=0;e<16;e++)o[e]=u[e>>2]>>>(e&3)*8&255;return o}}try{var a=e("crypto").randomBytes;i=a&&function(){return a(16)}}catch(f){}var l=i||s||r,c=typeof Buffer=="function"?Buffer:Array,h=[],p={};for(var d=0;d<256;d++)h[d]=(d+256).toString(16).substr(1),p[h[d]]=d;var g=l(),y=[g[0]|1,g[1],g[2],g[3],g[4],g[5]],b=(g[6]<<8|g[7])&16383,w=0,E=0,T=x;T.v1=S,T.v4=x,T.parse=v,T.unparse=m,T.BufferClass=c,T.mathRNG=r,T.nodeRNG=i,T.whatwgRNG=s;if(typeof t!="undefined")t.exports=T;else{var N=n.uuid;T.noConflict=function(){return n.uuid=N,T},n.uuid=T}})()}),e.define("crypto",function(e,t,n,r,i,s){t.exports=e("crypto-browserify")}),e.define("/node_modules/crypto-browserify/package.json",function(e,t,n,r,i,s){t.exports={}}),e.define("/node_modules/crypto-browserify/index.js",function(e,t,n,r,i,s){function f(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}var o=e("./sha"),u=e("./rng"),a={sha1:{hex:o.hex_sha1,binary:o.b64_sha1,ascii:o.str_sha1}};n.createHash=function(e){e=e||"sha1",a[e]||f("algorithm:",e,"is not yet supported");var t="",n=a[e];return{update:function(e){return t+=e,this},digest:function(r){r=r||"binary";var i;(i=n[r])||f("encoding:",r,"is not yet supported for algorithm",e);var s=i(t);return t=null,s}}},n.randomBytes=function(e,t){if(!t||!t.call)return u(e);try{t.call(this,undefined,u(e))}catch(n){t(n)}},["createCredentials","createHmac","createCypher","createCypheriv","createDecipher","createDecipheriv","createSign","createVerify","createDeffieHellman","pbkdf2"].forEach(function(e){n[e]=function(){f("sorry,",e,"is not implemented yet")}})}),e.define("/node_modules/crypto-browserify/sha.js",function(e,t,n,r,i,s){function f(e){return T(m(S(e),e.length*a))}function l(e){return N(m(S(e),e.length*a))}function c(e){return x(m(S(e),e.length*a))}function h(e,t){return T(b(e,t))}function p(e,t){return N(b(e,t))}function d(e,t){return x(b(e,t))}function v(){return f("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d"}function m(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;var n=Array(80),r=1732584193,i=-271733879,s=-1732584194,o=271733878,u=-1009589776;for(var a=0;a<e.length;a+=16){var f=r,l=i,c=s,h=o,p=u;for(var d=0;d<80;d++){d<16?n[d]=e[a+d]:n[d]=E(n[d-3]^n[d-8]^n[d-14]^n[d-16],1);var v=w(w(E(r,5),g(d,i,s,o)),w(w(u,n[d]),y(d)));u=o,o=s,s=E(i,30),i=r,r=v}r=w(r,f),i=w(i,l),s=w(s,c),o=w(o,h),u=w(u,p)}return Array(r,i,s,o,u)}function g(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function y(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function b(e,t){var n=S(e);n.length>16&&(n=m(n,e.length*a));var r=Array(16),i=Array(16);for(var s=0;s<16;s++)r[s]=n[s]^909522486,i[s]=n[s]^1549556828;var o=m(r.concat(S(t)),512+t.length*a);return m(i.concat(o),672)}function w(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function E(e,t){return e<<t|e>>>32-t}function S(e){var t=Array(),n=(1<<a)-1;for(var r=0;r<e.length*a;r+=a)t[r>>5]|=(e.charCodeAt(r/a)&n)<<32-a-r%32;return t}function x(e){var t="",n=(1<<a)-1;for(var r=0;r<e.length*32;r+=a)t+=String.fromCharCode(e[r>>5]>>>32-a-r%32&n);return t}function T(e){var t=o?"0123456789ABCDEF":"0123456789abcdef",n="";for(var r=0;r<e.length*4;r++)n+=t.charAt(e[r>>2]>>(3-r%4)*8+4&15)+t.charAt(e[r>>2]>>(3-r%4)*8&15);return n}function N(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="";for(var r=0;r<e.length*4;r+=3){var i=(e[r>>2]>>8*(3-r%4)&255)<<16|(e[r+1>>2]>>8*(3-(r+1)%4)&255)<<8|e[r+2>>2]>>8*(3-(r+2)%4)&255;for(var s=0;s<4;s++)r*8+s*6>e.length*32?n+=u:n+=t.charAt(i>>6*(3-s)&63)}return n}n.hex_sha1=f,n.b64_sha1=l,n.str_sha1=c,n.hex_hmac_sha1=h,n.b64_hmac_sha1=p,n.str_hmac_sha1=d;var o=0,u="",a=8}),e.define("/node_modules/crypto-browserify/rng.js",function(e,t,n,r,i,s){(function(){var e=this,n,r;n=function(e){var t=new Array(e),n;for(var r=0,n;r<e;r++)(r&3)==0&&(n=Math.random()*4294967296),t[r]=n>>>((r&3)<<3)&255;return t};if(e.crypto&&crypto.getRandomValues){var i=new Uint32Array(4);r=function(e){var t=new Array(e);crypto.getRandomValues(i);for(var n=0;n<e;n++)t[n]=i[n>>2]>>>(n&3)*8&255;return t}}t.exports=r||n})()}),e.define("/src/index.js",function(e,t,n,r,i,s){"use strict";function l(){return h(";("+c.toString()+"());"),document.body.dataset.remoteprez}function c(){var e=window.Reveal||"",t=window.impress||"",n=window.prevSlide||"";typeof e=="object"&&(e=e.toggleOverview);var r={"reveal.js":e,"impress.js":t,html5slides:n};Object.keys(r).forEach(function(e){typeof r[e]=="function"&&(document.body.dataset.remoteprez=e)})}function h(e){var t=document.createElement("script");t.textContent=e,document.body.appendChild(t),t.parentNode.removeChild(t)}function p(){var e=document.createElement("a");e.href="http://remoteprez.margaine.com/prez.html?c="+a+"&e="+f,e.textContent="Click here to control your presentation",e.target="_blank",e.style.background="white",e.style.position="absolute",e.style.top="10px",e.style.left="10px",e.style.pointerEvents="auto",e.addEventListener("click",function(){this.parentNode.removeChild(this)},!1),document.body.appendChild(e)}var o=e("node-uuid"),u=io.connect("http://remoteprez.margaine.com:8080/"),a=o.v4(),f=l();u.on("connect",function(){u.emit("create channel",a),p(),u.on("send direction",function(e,t){var n={"impress.js":{top:"impress().prev()",bottom:"impress().next()",left:"impress().prev()",right:"impress().next()"},"reveal.js":{top:"Reveal.navigateUp()",bottom:"Reveal.navigateDown()",left:"Reveal.navigateLeft()",right:"Reveal.navigateRight()"},html5slides:{top:"prevSlide()",bottom:"nextSlide()",left:"prevSlide()",right:"nextSlide()"}};h(n[e][t])})})}),e("/src/index.js")})();