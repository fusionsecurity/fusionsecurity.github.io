/*! Built with http://stenciljs.com */
const{h:n}=window.App;function t(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)}function e(n){return!!n.shadowRoot&&!!n.attachShadow}function i(n){const t=n.closest("ion-item");return t?t.querySelector("ion-label"):null}function o(n,t,i,o,r){if(n||e(t)){let n=t.querySelector("input.aux-input");n||((n=t.ownerDocument.createElement("input")).type="hidden",n.classList.add("aux-input"),t.appendChild(n)),n.disabled=r,n.name=i,n.value=o||""}}function r(n,t){if(!n){const n="ASSERT: "+t;throw console.error(n),new Error(n)}}function a(n){return n.timeStamp||Date.now()}function c(n){if(n){const t=n.changedTouches;if(t&&t.length>0){const n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function u(n,t=0){let e;return(...i)=>{clearTimeout(e),e=setTimeout(n,t,...i)}}const s={ipad:function(n){return p(n,/iPad/i)},iphone:function(n){return p(n,/iPhone/i)},ios:function(n){return p(n,/iPad|iPhone|iPod/i)},android:function(n){return p(n,/android|sink/i)},phablet:function(n){const t=n.innerWidth,e=n.innerHeight,i=Math.min(t,e),o=Math.max(t,e);return i>390&&i<520&&o>620&&o<800},tablet:function(n){const t=n.innerWidth,e=n.innerHeight,i=Math.min(t,e),o=Math.max(t,e);return i>460&&i<820&&o>780&&o<1400},cordova:f,capacitor:h,electron:function(n){return p(n,/electron/)},pwa:function(n){return n.matchMedia("(display-mode: standalone)").matches},mobile:l,desktop:function(n){return!l(n)},hybrid:function(n){return f(n)||h(n)}};function d(n,t){return function(n){return function(n){n.Ionic=n.Ionic||{};let t=n.Ionic.platforms;if(null==t){t=n.Ionic.platforms=function(n){return Object.keys(s).filter(t=>s[t](n))}(n);const e=n.document.documentElement.classList;t.forEach(n=>e.add(`plt-${n}`))}return t}(n)}(n).includes(t)}function l(n){return function(n,t){return n.matchMedia("(any-pointer:coarse)").matches}(n)}function f(n){return!!(n.cordova||n.phonegap||n.PhoneGap)}function h(n){const t=n.Capacitor;return!(!t||!t.isNative)}function p(n,t){return t.test(n.navigator.userAgent)}export{t as a,r as b,u as c,i as d,o as e,e as f,a as g,c as h,d as i};