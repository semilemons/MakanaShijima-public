"use strict";(self.webpackChunkshijima_makana_publish=self.webpackChunkshijima_makana_publish||[]).push([[230],{1084:function(e,t,n){var r=n(7294);t.Z=e=>{let{children:t}=e;return r.createElement("div",null,t)}},8406:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Ze},default:function(){return Qe}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return se},hasStandardBrowserEnv:function(){return ie},hasStandardBrowserWebWorkerEnv:function(){return ce}});var o=n(1084),s=n(7294);function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,u=(l=Object.create(null),e=>{const t=a.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});var l;const f=e=>(e=e.toLowerCase(),t=>u(t)===e),d=e=>t=>typeof t===e,{isArray:h}=Array,p=d("undefined");const m=f("ArrayBuffer");const y=d("string"),g=d("function"),b=d("number"),E=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},O=f("Date"),S=f("File"),R=f("Blob"),v=f("FileList"),A=f("URLSearchParams");function T(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),h(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!p(e)&&e!==N;const x=(P="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>P&&e instanceof P);var P;const _=f("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),k=f("RegExp"),U=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};T(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},B="abcdefghijklmnopqrstuvwxyz",D="0123456789",L={DIGIT:D,ALPHA:B,ALPHA_DIGIT:B+B.toUpperCase()+D};const q=f("AsyncFunction");var I={isArray:h,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=u(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer),t},isString:y,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:E,isPlainObject:w,isUndefined:p,isDate:O,isFile:S,isBlob:R,isRegExp:k,isFunction:g,isStream:e=>E(e)&&g(e.pipe),isURLSearchParams:A,isTypedArray:x,isFileList:v,forEach:T,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const s=t&&j(n,o)||o;w(n[s])&&w(r)?n[s]=e(n[s],r):w(r)?n[s]=e({},r):h(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&T(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(T(t,((t,r)=>{n&&g(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:f,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:_,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return h(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:j,global:N,isContextDefined:C,ALPHABET:L,generateString:(e=16,t=L.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=h(e)?[]:{};return T(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:q,isThenable:e=>e&&(E(e)||g(e))&&g(e.then)&&g(e.catch)};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}I.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const z=M.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{H[e]={value:e}})),Object.defineProperties(M,H),Object.defineProperty(z,"isAxiosError",{value:!0}),M.from=(e,t,n,r,o,s)=>{const i=Object.create(z);return I.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),M.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var J=M;function W(e){return I.isPlainObject(e)||I.isArray(e)}function K(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function V(e,t,n){return e?e.concat(t).map((function(e,t){return e=K(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const G=I.toFlatObject(I,{},null,(function(e){return/^is[A-Z]/.test(e)}));var $=function(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!I.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(I.isDate(e))return e.toISOString();if(!a&&I.isBlob(e))throw new J("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(e)||I.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(I.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&function(e){return I.isArray(e)&&!e.some(W)}(e)||(I.isFileList(e)||I.endsWith(n,"[]"))&&(a=I.toArray(e)))return n=K(n),a.forEach((function(e,r){!I.isUndefined(e)&&null!==e&&t.append(!0===i?V([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!W(e)||(t.append(V(o,n,s),c(e)),!1)}const l=[],f=Object.assign(G,{defaultVisitor:u,convertValue:c,isVisitable:W});if(!I.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!I.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),I.forEach(n,(function(n,s){!0===(!(I.isUndefined(n)||null===n)&&o.call(t,n,I.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function X(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Z(e,t){this._pairs=[],e&&$(e,this,t)}const Q=Z.prototype;Q.append=function(e,t){this._pairs.push([e,t])},Q.toString=function(e){const t=e?function(t){return e.call(this,t,X)}:X;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Y=Z;function ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function te(e,t,n){if(!t)return e;const r=n&&n.encode||ee,o=n&&n.serialize;let s;if(s=o?o(t,n):I.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var ne=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){I.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Y,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const se="undefined"!=typeof window&&"undefined"!=typeof document,ie=(ae="undefined"!=typeof navigator&&navigator.product,se&&["ReactNative","NativeScript","NS"].indexOf(ae)<0);var ae;const ce="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var ue={...r,...oe};var le=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&I.isArray(r)?r.length:s,a)return I.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&I.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&I.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,((e,r)=>{t(function(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const fe={transitional:re,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=I.isObject(e);o&&I.isHTMLForm(e)&&(e=new FormData(e));if(I.isFormData(e))return r?JSON.stringify(le(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return $(e,new ue.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ue.isNode&&I.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=I.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return $(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||fe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&I.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw J.from(o,J.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],(e=>{fe.headers[e]={}}));var de=fe;const he=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const pe=Symbol("internals");function me(e){return e&&String(e).trim().toLowerCase()}function ye(e){return!1===e||null==e?e:I.isArray(e)?e.map(ye):String(e)}function ge(e,t,n,r,o){return I.isFunction(r)?r.call(this,t,n):(o&&(t=n),I.isString(t)?I.isString(r)?-1!==t.indexOf(r):I.isRegExp(r)?r.test(t):void 0:void 0)}class be{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=me(t);if(!o)throw new Error("header name must be a non-empty string");const s=I.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ye(e))}const s=(e,t)=>I.forEach(e,((e,n)=>o(e,n,t)));return I.isPlainObject(e)||e instanceof this.constructor?s(e,t):I.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&he[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=me(e)){const n=I.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=me(e)){const n=I.findKey(this,e);return!(!n||void 0===this[n]||t&&!ge(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=me(e)){const o=I.findKey(n,e);!o||t&&!ge(0,n[o],o,t)||(delete n[o],r=!0)}}return I.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ge(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return I.forEach(this,((r,o)=>{const s=I.findKey(n,o);if(s)return t[s]=ye(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ye(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return I.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&I.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[pe]=this[pe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=me(e);t[r]||(!function(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),I.reduceDescriptors(be.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),I.freezeMethods(be);var Ee=be;function we(e,t){const n=this||de,r=t||n,o=Ee.from(r.headers);let s=r.data;return I.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Oe(e){return!(!e||!e.__CANCEL__)}function Se(e,t,n){J.call(this,null==e?"canceled":e,J.ERR_CANCELED,t,n),this.name="CanceledError"}I.inherits(Se,J,{__CANCEL__:!0});var Re=Se;var ve=ue.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];I.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),I.isString(r)&&i.push("path="+r),I.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ae(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Te=ue.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=I.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};var je=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}};function Ne(e,t){let n=0;const r=je(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Ce={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Ee.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(I.isFormData(r))if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=Ae(e.baseURL,e.url);function d(){if(!l)return;const r=Ee.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),te(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new J("Request aborted",J.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||re;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new J(t,r.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,l)),l=null},ue.hasStandardBrowserEnv&&(c&&I.isFunction(c)&&(c=c(e)),c||!1!==c&&Te(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&ve.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&I.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),I.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Ne(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Ne(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new Re(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);h&&-1===ue.protocols.indexOf(h)?n(new J("Unsupported protocol "+h+":",J.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};I.forEach(Ce,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const xe=e=>`- ${e}`,Pe=e=>I.isFunction(e)||null===e||!1===e;var _e=e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Pe(n)&&(r=Ce[(t=String(n)).toLowerCase()],void 0===r))throw new J(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(xe).join("\n"):" "+xe(e[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Re(null,e)}function ke(e){Fe(e),e.headers=Ee.from(e.headers),e.data=we.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return _e(e.adapter||de.adapter)(e).then((function(t){return Fe(e),t.data=we.call(e,e.transformResponse,t),t.headers=Ee.from(t.headers),t}),(function(t){return Oe(t)||(Fe(e),t&&t.response&&(t.response.data=we.call(e,e.transformResponse,t.response),t.response.headers=Ee.from(t.response.headers))),Promise.reject(t)}))}const Ue=e=>e instanceof Ee?e.toJSON():e;function Be(e,t){t=t||{};const n={};function r(e,t,n){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:n},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function o(e,t,n){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!I.isUndefined(t))return r(void 0,t)}function i(e,t){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ue(e),Ue(t),!0)};return I.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);I.isUndefined(i)&&s!==a||(n[r]=i)})),n}const De="1.6.7",Le={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Le[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const qe={};Le.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new J(r(o," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!qe[o]&&(qe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Ie={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new J("option "+s+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}},validators:Le};const Me=Ie.validators;class ze{constructor(e){this.defaults=e,this.interceptors={request:new ne,response:new ne}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Be(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ie.assertOptions(n,{silentJSONParsing:Me.transitional(Me.boolean),forcedJSONParsing:Me.transitional(Me.boolean),clarifyTimeoutError:Me.transitional(Me.boolean)},!1),null!=r&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:Ie.assertOptions(r,{encode:Me.function,serialize:Me.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&I.merge(o.common,o[t.method]);o&&I.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ee.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[ke.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=ke.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return te(Ae((e=Be(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}I.forEach(["delete","get","head","options"],(function(e){ze.prototype[e]=function(t,n){return this.request(Be(n||{},{method:e,url:t,data:(n||{}).data}))}})),I.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Be(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ze.prototype[e]=t(),ze.prototype[e+"Form"]=t(!0)}));var He=ze;class Je{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Re(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Je((function(t){e=t})),cancel:e}}}var We=Je;const Ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ke).forEach((([e,t])=>{Ke[t]=e}));var Ve=Ke;const Ge=function e(t){const n=new He(t),r=i(He.prototype.request,n);return I.extend(r,He.prototype,n,{allOwnKeys:!0}),I.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Be(t,n))},r}(de);Ge.Axios=He,Ge.CanceledError=Re,Ge.CancelToken=We,Ge.isCancel=Oe,Ge.VERSION=De,Ge.toFormData=$,Ge.AxiosError=J,Ge.Cancel=Ge.CanceledError,Ge.all=function(e){return Promise.all(e)},Ge.spread=function(e){return function(t){return e.apply(null,t)}},Ge.isAxiosError=function(e){return I.isObject(e)&&!0===e.isAxiosError},Ge.mergeConfig=Be,Ge.AxiosHeaders=Ee,Ge.formToJSON=e=>le(I.isHTMLForm(e)?new FormData(e):e),Ge.getAdapter=_e,Ge.HttpStatusCode=Ve,Ge.default=Ge;var $e=Ge;var Xe=()=>{const{0:e,1:t}=(0,s.useState)(null),n=window.location.origin;return s.createElement("div",null,n,s.createElement("button",{onClick:()=>{$e.get("https://github.com/semilemons/ShijimaMakana-Publish/blob/makana/README.md").then((e=>{const n=e.data.content,r=atob(n.replace(/\s/g,""));t(r)})).catch((e=>{console.error(e)}))}},"ファイルを取得"),e&&s.createElement("pre",null,e))};const Ze=()=>s.createElement(s.Fragment,null,s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,"My name is Makana!!"));var Qe=()=>s.createElement(o.Z,null,s.createElement(Xe,null))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-fcd266d0cc1d954c4acc.js.map