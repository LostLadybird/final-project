!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n=document.querySelector(".page__button_main-text"),i=document.querySelector(".page__text_3");n.addEventListener("click",(function(){i.classList.contains("hidden-text")?n.textContent="Скрыть":n.textContent="Читать далее",i.classList.toggle("hidden-text"),"block"!=i.style.display?i.style.display="block":i.style.display="none"}))},function(e,t){new Swiper(".swiper-container",{slidesPerView:1.3,spaceBetween:16,pagination:{el:".swiper-pagination"},breakpoints:{320:{slidesPerView:1.3,spaceBetween:16},480:{slidesPerView:1.8,spaceBetween:24},640:{slidesPerView:2.8,spaceBetween:40}}})},function(e,t){var n=document.querySelector(".page__button_text"),i=document.querySelector(".swiper-wrapper"),r=document.querySelector(".devices__button"),o=document.querySelector(".devices__wrapper");n.addEventListener("click",(function(){n.classList.contains("hidden")?n.textContent="Показать все":n.textContent="Скрыть",n.classList.toggle("hidden"),"170px"==i.style.maxHeight?i.style.maxHeight="300px":i.style.maxHeight="170px"})),r.addEventListener("click",(function(){r.classList.contains("hidden")?r.textContent="Скрыть":r.textContent="Показать все","170px"==o.style.maxHeight?o.style.maxHeight="350px":o.style.maxHeight="170px",r.classList.toggle("hidden")}))},function(e,t){var n=document.querySelector(".aside"),i=document.querySelector(".aside__button");document.querySelector(".burger").addEventListener("click",(function(){n.classList.toggle("hidden-menu")})),i.addEventListener("click",(function(){n.classList.toggle("hidden-menu")}))}]);
//# sourceMappingURL=bundle.js.map