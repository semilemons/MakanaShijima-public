/*! For license information please see component---src-pages-articles-contentful-article-slug-jsx-a46e377f197fba84d35e.js.LICENSE.txt */
(self.webpackChunkshijima_makana_publish=self.webpackChunkshijima_makana_publish||[]).push([[283],{4129:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n,o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},s=("function"==typeof SuppressedError&&SuppressedError,"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{});function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var u=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));l(u);u.BLOCKS;var d=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));l(d);d.INLINES;var f=c((function(e,t){var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(r||(r={})),t.default=r}));l(f);var p=c((function(e,t){var r,n=s&&s.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},a=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var i=a(f);t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((r={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],r[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],r[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],r),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,d.INLINES.HYPERLINK,d.INLINES.ENTRY_HYPERLINK,d.INLINES.ASSET_HYPERLINK,d.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[i.default.BOLD,i.default.CODE,i.default.ITALIC,i.default.UNDERLINE]}));l(p);p.V1_MARKS,p.V1_NODE_TYPES,p.TEXT_CONTAINERS,p.HEADINGS,p.CONTAINERS,p.VOID_BLOCKS,p.TABLE_BLOCKS,p.LIST_ITEM_BLOCKS,p.TOP_LEVEL_BLOCKS;var E=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(E);var m=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(m);var y=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r={nodeType:u.BLOCKS.DOCUMENT,data:{},content:[{nodeType:u.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=r}));l(y);var g=c((function(e,t){function r(e,t){for(var r=0,n=Object.keys(e);r<n.length;r++){if(t===e[n[r]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return r(d.INLINES,e.nodeType)},t.isBlock=function(e){return r(u.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));l(g);g.isText,g.isBlock,g.isInline;var S=c((function(e,t){var r=s&&s.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=s&&s.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=s&&s.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=s&&s.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},o=s&&s.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return d.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return o(f).default}}),a(p,t),a(E,t),a(m,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return o(y).default}});var l=i(g);t.helpers=l}));l(S);var L,h,b=S.helpers,v=(S.EMPTY_DOCUMENT,S.MARKS),O=S.INLINES,_=S.BLOCKS;function C(e,t){return e.map((function(e,r){return n=N(e,t),i=r,a.isValidElement(n)&&null===n.key?a.cloneElement(n,{key:i}):n;var n,i}))}function N(e,t){var r=t.renderNode,n=t.renderMark,a=t.renderText,o=t.preserveWhitespace;if(b.isText(e)){var s=a?a(e.value):e.value;if(o){var l=(s=s.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),c=[];l.forEach((function(e,t){c.push(e),t!==l.length-1&&c.push(i.createElement("br",null))})),s=c}return e.marks.reduce((function(e,t){return n[t.type]?n[t.type](e):e}),s)}var u=C(e.content,t);return e.nodeType&&r[e.nodeType]?r[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var I=((L={})[_.DOCUMENT]=function(e,t){return t},L[_.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},L[_.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},L[_.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},L[_.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},L[_.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},L[_.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},L[_.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},L[_.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},L[_.EMBEDDED_RESOURCE]=function(e,t){return i.createElement("div",null,t)},L[_.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},L[_.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},L[_.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},L[_.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},L[_.HR]=function(){return i.createElement("hr",null)},L[_.TABLE]=function(e,t){return i.createElement("table",null,i.createElement("tbody",null,t))},L[_.TABLE_ROW]=function(e,t){return i.createElement("tr",null,t)},L[_.TABLE_HEADER_CELL]=function(e,t){return i.createElement("th",null,t)},L[_.TABLE_CELL]=function(e,t){return i.createElement("td",null,t)},L[O.ASSET_HYPERLINK]=function(e){return B(O.ASSET_HYPERLINK,e)},L[O.ENTRY_HYPERLINK]=function(e){return B(O.ENTRY_HYPERLINK,e)},L[O.RESOURCE_HYPERLINK]=function(e){return A(O.RESOURCE_HYPERLINK,e)},L[O.EMBEDDED_ENTRY]=function(e){return B(O.EMBEDDED_ENTRY,e)},L[O.EMBEDDED_RESOURCE]=function(e,t){return A(O.EMBEDDED_RESOURCE,e)},L[O.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},L),T=((h={})[v.BOLD]=function(e){return i.createElement("b",null,e)},h[v.ITALIC]=function(e){return i.createElement("i",null,e)},h[v.UNDERLINE]=function(e){return i.createElement("u",null,e)},h[v.CODE]=function(e){return i.createElement("code",null,e)},h[v.SUPERSCRIPT]=function(e){return i.createElement("sup",null,e)},h[v.SUBSCRIPT]=function(e){return i.createElement("sub",null,e)},h);function B(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function A(e,t){return i.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?N(e,{renderNode:o(o({},I),t.renderNode),renderMark:o(o({},T),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,a)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=n(c)===c&&a(c)!==c,s=o,o=a(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3903:function(e,t,r){"use strict";r.r(t);var n=r(3346),a=r.n(n),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,i=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var l={},c=function(e,t){var r=t.entryId,n=t.linkType,a=t.spaceId,i=t.environmentId;return a&&i?e.get(a+"!"+i+"!"+n+"!"+r):e.get(n+"!"+r)},u=function(e,t){var r=t.sys,n=r.type,a=r.linkType;if("ResourceLink"===n){var i=function(e){var t=/.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;if(t.test(e)){var r=e.match(t),n=o(r,4),a=(n[0],n[1]),i=n[2];return{spaceId:a,environmentId:void 0===i?"master":i,entryId:n[3]}}}(t.sys.urn),s=i.spaceId,u=i.environmentId,d=i.entryId,f=a.split(":")[1];return c(e,{linkType:f,entryId:d,spaceId:s,environmentId:u})||l}var p=t.sys.id;return c(e,{linkType:a,entryId:p})||l},d=function e(t,r,n,a){if(r(t))return n(t);if(t&&"object"===(void 0===t?"undefined":i(t))){for(var o in t)t.hasOwnProperty(o)&&(t[o]=e(t[o],r,n,a));a&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==l}));for(var t in e)e[t]===l&&delete e[t];return e}(t))}return t};t.default=function(e,t){if(t=t||{},!e.items)return[];var r=a()(e),n=Object.keys(r.includes||{}).reduce((function(t,r){return[].concat(s(t),s(e.includes[r]))}),[]),i=[].concat(s(r.items),s(n)).filter((function(e){return Boolean(e.sys)})),o=new Map(i.reduce((function(e,t){var r,n=(r=t.sys,r.space&&r.environment?[r.type+"!"+r.id,r.space.sys.id+"!"+r.environment.sys.id+"!"+r.type+"!"+r.id]:[r.type+"!"+r.id]).map((function(e){return[e,t]}));return e.push.apply(e,s(n)),e}),[]));return i.forEach((function(e){var r=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,r){return t[r]=e[r],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,d(r,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return function(e,t,r){var n=u(e,t);return n===l?r?n:t:n}(o,e,t.removeUnresolved)}),t.removeUnresolved))})),r.items}},3346:function(e,t,r){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,l=Object.prototype,c=l.hasOwnProperty,u=l.propertyIsEnumerable,d="function"==typeof o,f="function"==typeof WeakMap,p=function(){if(f)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),E=function(r,n){var a=r.__proto__||s(r);if(!a)return t(null);var i=a.constructor;if(i===n.Object)return a===n.Object.prototype?{}:t(a);if(~e.call(i).indexOf("[native code]"))try{return new i}catch(l){}return t(a)},m=function(e,t,r,n){var a=E(e,t);for(var i in n.set(e,a),e)c.call(e,i)&&(a[i]=r(e[i],n));if(d)for(var s=o(e),l=0,f=s.length,p=void 0;l<f;++l)p=s[l],u.call(e,p)&&(a[p]=r(e[p],n));return a},y=function(e,t,r,s){var l=E(e,t);s.set(e,l);for(var c=d?i(e).concat(o(e)):i(e),u=0,f=c.length,p=void 0,m=void 0;u<f;++u)if("callee"!==(p=c[u])&&"caller"!==p)if(m=a(e,p)){m.get||m.set||(m.value=r(e[p],s));try{n(l,p,m)}catch(y){l[p]=m.value}}else l[p]=r(e[p],s);return l},g=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},S=Array.isArray,L=Object.getPrototypeOf,h=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function b(e,t){var r=!(!t||!t.isStrict),n=t&&t.realm||h,a=r?y:m,i=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var o,s=e.__proto__||L(e),l=s&&s.constructor;if(!l||l===n.Object)return a(e,n,i,t);if(S(e)){if(r)return y(e,n,i,t);o=new l,t.set(e,o);for(var c=0,u=e.length;c<u;++c)o[c]=i(e[c],t);return o}if(e instanceof n.Date)return new l(e.getTime());if(e instanceof n.RegExp)return(o=new l(e.source,e.flags||g(e))).lastIndex=e.lastIndex,o;if(n.Map&&e instanceof n.Map)return o=new l,t.set(e,o),e.forEach((function(e,r){o.set(r,i(e,t))})),o;if(n.Set&&e instanceof n.Set)return o=new l,t.set(e,o),e.forEach((function(e){o.add(i(e,t))})),o;if(n.Blob&&e instanceof n.Blob)return e.slice(0,e.size,e.type);if(n.Buffer&&n.Buffer.isBuffer(e))return o=n.Buffer.allocUnsafe?n.Buffer.allocUnsafe(e.length):new l(e.length),t.set(e,o),e.copy(o),o;if(n.ArrayBuffer){if(n.ArrayBuffer.isView(e))return o=new l(e.buffer.slice(0)),t.set(e,o),o;if(e instanceof n.ArrayBuffer)return o=e.slice(0),t.set(e,o),o}return"function"==typeof e.then||e instanceof Error||n.WeakMap&&e instanceof n.WeakMap||n.WeakSet&&e instanceof n.WeakSet?e:a(e,n,i,t)};return i(e,p())}return b.default=b,b.strict=function(e,t){return b(e,{isStrict:!0,realm:t?t.realm:void 0})},b}()},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return K},L:function(){return m},M:function(){return O},P:function(){return v},S:function(){return U},_:function(){return s},a:function(){return o},b:function(){return d},c:function(){return c},g:function(){return f},h:function(){return l}});var n=r(7294),a=(r(3204),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function f(e,t,r,n,a,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],E=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(E,o({},r)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],S=function(e){let{src:t,srcSet:r,loading:a,alt:i="",shouldLoad:l}=e,c=s(e,y);return n.createElement("img",o({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},L=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,i=s(e,g);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(S,o({},i,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var h;S.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},L.displayName="Picture",L.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,r=s(e,b);return t?n.createElement(L,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};v.displayName="Placeholder",v.propTypes={fallback:a.string,sources:null==(h=L.propTypes)?void 0:h.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const O=function(e){return n.createElement(n.Fragment,null,n.createElement(L,o({},e)),n.createElement("noscript",null,n.createElement(L,o({},e,{shouldLoad:!0}))))};O.displayName="MainImage",O.propTypes=L.propTypes;const _=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],N=e=>e.replace(/\n/g,""),I=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:I},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],D=new Set;let R,w;const x=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:d,class:f,onStartLoad:p,onLoad:E,onError:m}=e,y=s(e,B);const{width:g,height:S,layout:L}=a,h=u(g,S,L),{style:b,className:v}=h,O=s(h,A),_=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);f&&(d=f);const N=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(L,g,S);return(0,n.useEffect)((()=>{R||(R=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return w=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==E||E({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==E||E({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void D.add(C);if(w&&D.has(C))return;let t,n;return R.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;_.current&&(_.current.innerHTML=r(o({isLoading:!0,isLoaded:D.has(C),image:a},y)),D.has(C)||(t=requestAnimationFrame((()=>{_.current&&(n=s(_.current,C,D,i,p,E,m))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{D.has(C)&&w&&(_.current.innerHTML=w(o({isLoading:D.has(C),isLoaded:D.has(C),image:a},y)),null==p||p({wasCached:!0}),null==E||E({wasCached:!0}))}),[a]),(0,n.createElement)(t,o({},O,{style:o({},b,i,{backgroundColor:c}),className:v+(d?" "+d:""),ref:_,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},K=(0,n.memo)((function(e){return e.image?(0,n.createElement)(x,e):null}));K.propTypes=T,K.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function k(e){return function(t){let{src:r,__imageData:a,__error:i}=t,l=s(t,P);return i&&console.warn(i),a?n.createElement(e,o({image:a},l)):(console.warn("Image not loaded",r),null)}}const M=k((function(e){let{as:t="div",className:r,class:a,style:i,image:l,loading:c="lazy",imgClassName:p,imgStyle:E,backgroundColor:y,objectFit:g,objectPosition:S}=e,L=s(e,_);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),E=o({objectFit:g,objectPosition:S,backgroundColor:y},E);const{width:h,height:b,layout:I,images:T,placeholder:B,backgroundColor:A}=l,D=u(h,b,I),{style:R,className:w}=D,x=s(D,C),K={fallback:void 0,sources:[]};return T.fallback&&(K.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?N(T.fallback.srcSet):void 0})),T.sources&&(K.sources=T.sources.map((e=>o({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,o({},x,{style:o({},R,i,{backgroundColor:y}),className:w+(r?" "+r:"")}),n.createElement(m,{layout:I,width:h,height:b},n.createElement(v,o({},f(B,!1,I,h,b,A,g,S))),n.createElement(O,o({"data-gatsby-image-ssr":"",className:p},L,d("eager"===c,!1,K,c,E)))))})),j=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),G={src:i().string.isRequired,alt:I,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=G;const U=k(K);U.displayName="StaticImage",U.propTypes=G},8872:function(e,t,r){"use strict";var n=r(4836);t.Z=function(e,t){let{raw:r,references:n}=e;void 0===t&&(t={});const o=JSON.parse(r||null);if(!n||!n.length)return(0,a.documentToReactComponents)(o,t);const s={items:[{sys:{type:"Entry"},richText:o}],includes:{Entry:n.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:n.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},l=(0,i.default)(s,{removeUnresolved:!0});return(0,a.documentToReactComponents)(l[0].richText,t)};var a=r(4129),i=n(r(3903))},1084:function(e,t,r){"use strict";var n=r(7294);t.Z=e=>{let{children:t}=e;return n.createElement("div",null,t)}},9556:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return F},default:function(){return z}});var n=r(7294),a=r(8032),i=r(3967),o=r.n(i),s=r(5893);const l=["xxl","xl","lg","md","sm","xs"],c=n.createContext({prefixes:{},breakpoints:l,minBreakpoint:"xs"}),{Consumer:u,Provider:d}=c;function f(e,t){const{prefixes:r}=(0,n.useContext)(c);return e||r[t]||t}function p(){const{breakpoints:e}=(0,n.useContext)(c);return e}function E(){const{minBreakpoint:e}=(0,n.useContext)(c);return e}const m=n.forwardRef((({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...a},i)=>{const l=f(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,s.jsx)(r,{ref:i,...a,className:o()(n,t?`${l}${c}`:l)})}));m.displayName="Container";var y=m;const g=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},a)=>{const i=f(e,"row"),l=p(),c=E(),u=`${i}-cols`,d=[];return l.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==c?`-${e}`:"";null!=r&&d.push(`${u}${a}-${r}`)})),(0,s.jsx)(r,{ref:a,...n,className:o()(t,i,...d)})}));g.displayName="Row";var S=g;const L=n.forwardRef(((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:i,spans:l}]=function({as:e,bsPrefix:t,className:r,...n}){t=f(t,"col");const a=p(),i=E(),s=[],l=[];return a.forEach((e=>{const r=n[e];let a,o,c;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:o,order:c}=r):a=r;const u=e!==i?`-${e}`:"";a&&s.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=c&&l.push(`order${u}-${c}`),null!=o&&l.push(`offset${u}-${o}`)})),[{...n,className:o()(r,...s,...l)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,s.jsx)(a,{...n,ref:t,className:o()(r,!l.length&&i)})}));L.displayName="Col";var h=L;const b=n.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=f(t,"card-body"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));b.displayName="CardBody";var v=b;const O=n.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=f(t,"card-footer"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));O.displayName="CardFooter";var _=O;const C=n.createContext(null);C.displayName="CardHeaderContext";var N=C;const I=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},i)=>{const l=f(e,"card-header"),c=(0,n.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,s.jsx)(N.Provider,{value:c,children:(0,s.jsx)(r,{ref:i,...a,className:o()(t,l)})})}));I.displayName="CardHeader";var T=I;const B=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},i)=>{const l=f(e,"card-img");return(0,s.jsx)(n,{ref:i,className:o()(r?`${l}-${r}`:l,t),...a})}));B.displayName="CardImg";var A=B;const D=n.forwardRef((({className:e,bsPrefix:t,as:r="div",...n},a)=>(t=f(t,"card-img-overlay"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));D.displayName="CardImgOverlay";var R=D;const w=n.forwardRef((({className:e,bsPrefix:t,as:r="a",...n},a)=>(t=f(t,"card-link"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));w.displayName="CardLink";var x=w,K=e=>n.forwardRef(((t,r)=>(0,s.jsx)("div",{...t,ref:r,className:o()(t.className,e)})));const P=K("h6"),k=n.forwardRef((({className:e,bsPrefix:t,as:r=P,...n},a)=>(t=f(t,"card-subtitle"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));k.displayName="CardSubtitle";var M=k;const j=n.forwardRef((({className:e,bsPrefix:t,as:r="p",...n},a)=>(t=f(t,"card-text"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));j.displayName="CardText";var H=j;const G=K("h5"),U=n.forwardRef((({className:e,bsPrefix:t,as:r=G,...n},a)=>(t=f(t,"card-title"),(0,s.jsx)(r,{ref:a,className:o()(e,t),...n}))));U.displayName="CardTitle";var Y=U;const $=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:i=!1,children:l,as:c="div",...u},d)=>{const p=f(e,"card");return(0,s.jsx)(c,{ref:d,...u,className:o()(t,p,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:i?(0,s.jsx)(v,{children:l}):l})}));$.displayName="Card";var W=Object.assign($,{Img:A,Title:Y,Subtitle:M,Body:v,Link:x,Text:H,Header:T,Footer:_,ImgOverlay:R}),V=r(8872),q=r(1084);const F=e=>{let{data:t}=e;const r=t.contentfulArticle.articleTitle||"title";return n.createElement(n.Fragment,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("title",null,r))};var z=e=>{let{data:t}=e;const i=t.contentfulArticle||null,o=i?i.articleTitle:"",s=i?i.category:"",l=i?i.authorGithubLink:"",c=i?i.author:"",u=i?i.articleIntroduction:"",d=i?i.articleContentsMd:"",f=i?(0,a.c)(i.scene1Image.gatsbyImageData):"",p=i?i.createdAt:"";return n.createElement(q.Z,null,n.createElement("header",{className:"text-white text-center px-5 pb-3"},n.createElement(a.G,{image:f,alt:"サイトのロゴ",style:{height:"5rem"}})),n.createElement(y,{className:"pb-5"},n.createElement(S,null,n.createElement(h,{xs:12,md:8},n.createElement("div",{className:"mb-3"},n.createElement("div",{className:"article-abstracts mb-4",style:{borderBottom:"1px solid #555"}},n.createElement("em",null,n.createElement("h5",{className:"mb-4"},s)),n.createElement("h1",null,o),n.createElement("p",{className:"mb-2 text-muted"},p," by ",c),n.createElement("p",null,u)),n.createElement(a.G,{image:f,alt:"サイトのロゴ",style:{borderRadius:"1rem"}}),n.createElement("div",{className:"article-contents"},(0,V.Z)(d)))),n.createElement(h,{xs:12,md:4},n.createElement(W,{className:"mb-3"},n.createElement(W.Body,null,n.createElement(W.Title,{className:"mb-3"},n.createElement("em",null,"筆者")),n.createElement("div",{className:"mb-3",style:{display:"flex",justifyContent:"center"}},n.createElement(a.S,{src:"../../images/MakanaShijima.png",alt:"サイトのロゴ",style:{width:"67%",borderRadius:"2rem"},__imageData:r(2922)})),n.createElement("p",null,n.createElement("em",null,"四島摩訶那です！ある方のアシスタントをとして活動していて、この記事の執筆活動を任されています。"),n.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{color:"blue",textDecoration:"underline"}},n.createElement("em",null,"Github")))))))),n.createElement("footer",{className:"bg-dark text-white text-center p-3"},n.createElement("p",null,"© ",(new Date).getFullYear()," 四島摩訶那. All rights reserved.")))}},3967:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},2922:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/20a4635a8870061424d1937a25536f2b/993f0/MakanaShijima.png","srcSet":"/static/20a4635a8870061424d1937a25536f2b/f6ab5/MakanaShijima.png 171w,\\n/static/20a4635a8870061424d1937a25536f2b/19ff7/MakanaShijima.png 342w,\\n/static/20a4635a8870061424d1937a25536f2b/993f0/MakanaShijima.png 684w","sizes":"(min-width: 684px) 684px, 100vw"},"sources":[{"srcSet":"/static/20a4635a8870061424d1937a25536f2b/c235b/MakanaShijima.webp 171w,\\n/static/20a4635a8870061424d1937a25536f2b/deb97/MakanaShijima.webp 342w,\\n/static/20a4635a8870061424d1937a25536f2b/89ad1/MakanaShijima.webp 684w","type":"image/webp","sizes":"(min-width: 684px) 684px, 100vw"}]},"width":684,"height":692}')}}]);
//# sourceMappingURL=component---src-pages-articles-contentful-article-slug-jsx-a46e377f197fba84d35e.js.map