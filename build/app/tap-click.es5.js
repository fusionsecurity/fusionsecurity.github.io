/*! Built with http://stenciljs.com */
App.loadBundle("tap-click.js",["exports","./chunk-07cd1608.js"],function(e,t){function n(e){return"instant"===e.getAttribute("ion-activatable")}window;var o="activated",i=200,r=200;e.startTapClick=function(e){var a,c,u,d=-25e3,s=0,f=!1,l=!1,v=new WeakMap;function p(e){d=t.now(e),L(e)}function h(){clearTimeout(u),u=void 0,a&&(b(!1),a=void 0),f=!0}function w(e){a||l||(f=!1,m(function(e){if(!e.composedPath)return e.target.closest("[ion-activatable]");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var o=t[n];if(o.hasAttribute&&o.hasAttribute("ion-activatable"))return o}}(e),e))}function L(e){l||(m(void 0,e),f&&e.cancelable&&e.preventDefault())}function m(e,r){if(!e||e!==a){clearTimeout(u),u=void 0;var c=t.pointerCoord(r),d=c.x,s=c.y;if(a){if(v.has(a))throw new Error("internal error");a.classList.contains(o)||E(a,d,s),b(!0)}if(e){var f=v.get(e);f&&(clearTimeout(f),v.delete(e));var l=n(e)?0:i;e.classList.remove(o),u=setTimeout(function(){E(e,d,s),u=void 0},l)}a=e}}function E(e,t,n){s=Date.now(),e.classList.add(o);var i=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")}(e);i&&i.addRipple&&(c=i.addRipple(t,n))}function b(e){void 0!==c&&c.then(function(e){return e()});var t=a;if(t){var i=r-Date.now()+s;if(e&&i>0&&!n(t)){var u=setTimeout(function(){t.classList.remove(o),v.delete(t)},r);v.set(t,u)}else t.classList.remove(o)}}e.addEventListener("click",function(e){(f||l)&&(e.preventDefault(),e.stopPropagation())},!0),e.addEventListener("ionScrollStart",function(){l=!0,h()}),e.addEventListener("ionScrollEnd",function(){l=!1}),e.addEventListener("ionGestureCaptured",h),e.addEventListener("touchstart",function(e){d=t.now(e),w(e)},!0),e.addEventListener("touchcancel",p,!0),e.addEventListener("touchend",p,!0),e.addEventListener("mousedown",function(e){var n=t.now(e)-2500;d<n&&w(e)},!0),e.addEventListener("mouseup",function(e){var n=t.now(e)-2500;d<n&&L(e)},!0)},Object.defineProperty(e,"__esModule",{value:!0})});