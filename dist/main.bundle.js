!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.querySelector("nav"),o=document.getElementById("menuToggle");window.makeNavbarTransparent=function(){1==o.checked?(n.classList.add("nav-transparent"),n.classList.remove("nav-colored")):(document.body.scrollTop>=100||document.documentElement.scrollTop>=100)&&(n.classList.add("nav-colored"),n.classList.remove("nav-transparent"))};const r=document.body;let s=0;window.addEventListener("scroll",()=>{const e=window.pageYOffset;0!=e?(0==o.checked&&(e>=100?(n.classList.add("nav-colored"),n.classList.remove("nav-transparent")):(n.classList.add("nav-transparent"),n.classList.remove("nav-colored")),e>=200&&(e>s&&!r.classList.contains("scroll-down")?(r.classList.remove("scroll-up"),r.classList.add("scroll-down")):e<s&&r.classList.contains("scroll-down")&&(r.classList.remove("scroll-down"),r.classList.add("scroll-up")))),s=e):r.classList.remove("scroll-up")})}]);