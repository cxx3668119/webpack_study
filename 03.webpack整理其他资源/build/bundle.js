(()=>{var e={177:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var r=t(645),o=t.n(r),i=t(969),c=t(667),a=t.n(c),s=t(205),l=o()((function(e){return e[1]}));l.i(i.Z);var u=a()(s.Z);l.push([e.id,".demo {\r\n  color: red;\r\n}\r\n\r\n.bg-image {\r\n  display: inline-block;\r\n  background: url("+u+");\r\n  background-size: contain;\r\n}\r\n",""]);const d=l},969:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".content {\r\n  color: rgba(18,52,86,0.47059);\r\n}\r\n:-webkit-full-screen {\r\n  color: red;\r\n}\r\n:-ms-fullscreen {\r\n  color: red;\r\n}\r\n:fullscreen {\r\n  color: red;\r\n}\r\n\r\n.content {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 2s ease;\r\n}\r\n",""]);const i=o},913:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".content {\n  font-size: 50px;\n  font-weight: 700;\n}\n",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},205:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"06dedfb4ca6fc17e0b559c076504c435.jpg"},849:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"7fbcbf9f3645f232aafaab519e9f324f.png"},379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=p||(p=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var s=a(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}},466:e=>{e.exports={dateFormat:e=>"2020-12-12",priceFormat:e=>"100.00"}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{"use strict";var e=t(379),n=t.n(e),r=t(177);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(913);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,document.body.appendChild(function(){const e=document.createElement("div");e.innerHTML=["hello","world"].join(""),e.className="content";const n=new Image;n.src=t(849).Z,e.appendChild(n);const r=document.createElement("div");return r.style.width="200px",r.style.height="200px",r.className="bg-image",r.style.backgroundColor="red",e.appendChild(r),e}());const{dateFormat:i,priceFormat:c}=t(466);console.log(50),console.log(600),console.log(i("1213")),console.log(c("1213"))})()})();