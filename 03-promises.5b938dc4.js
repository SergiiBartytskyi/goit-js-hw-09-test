!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function l(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"),{position:"right-top",fontSize:"20px",width:"350px"})}function u(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"),{position:"right-top",fontSize:"20px",width:"350px"})}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(r.elements.delay.value),t=Number(r.elements.step.value),o=Number(r.elements.amount.value),i=1;i<=o;i+=1)a(i,n).then(l).catch(u),n+=t}))}();
//# sourceMappingURL=03-promises.5b938dc4.js.map
