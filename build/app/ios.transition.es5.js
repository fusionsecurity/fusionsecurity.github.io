/*! Built with http://stenciljs.com */
App.loadBundle("ios.transition.js",["exports"],function(e){window;var o="opacity";function r(e){return e.shadowRoot||e}e.shadow=r,e.iosTransitionAnimation=function(e,t,a){var n="rtl"===document.dir,l=n?"-99.5%":"99.5%",d=n?"33%":"-33%",i=a.enteringEl,s=a.leavingEl,m=new e;if(m.addElement(i).duration(a.duration||500).easing(a.easing||"cubic-bezier(0.36,0.66,0.04,1)").beforeRemoveClass("ion-page-invisible"),s&&t){var f=new e;f.addElement(t),m.add(f)}var c="back"===a.direction,u=i.querySelector(":scope > ion-content"),b=i.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=i.querySelector(":scope > ion-header > ion-toolbar"),S=new e;if(u||y||0!==b.length?(S.addElement(u),S.addElement(b)):S.addElement(i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),m.add(S),c?S.beforeClearStyles([o]).fromTo("translateX",d,"0%",!0).fromTo(o,.8,1,!0):S.beforeClearStyles([o]).fromTo("translateX",l,"0%",!0),y){var v=new e;v.addElement(y),m.add(v);var T=new e;T.addElement(y.querySelector("ion-title"));var p=new e;p.addElement(y.querySelectorAll("ion-buttons,[menuToggle]"));var E=new e;E.addElement(r(y).querySelector(".toolbar-background"));var w=new e,q=y.querySelector("ion-back-button");if(w.addElement(q),v.add(T).add(p).add(E).add(w),T.fromTo(o,.01,1,!0),p.fromTo(o,.01,1,!0),c)T.fromTo("translateX",d,"0%",!0),w.fromTo(o,.01,1,!0);else if(T.fromTo("translateX",l,"0%",!0),E.beforeClearStyles([o]).fromTo(o,.01,1,!0),w.fromTo(o,.01,1,!0),q){var g=new e;g.addElement(r(q).querySelector(".button-text")).fromTo("translateX",n?"-100px":"100px","0px"),v.add(g)}}if(s){var C=new e;C.addElement(s.querySelector(":scope > ion-content")),C.addElement(s.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),m.add(C),c?C.beforeClearStyles([o]).fromTo("translateX","0%",n?"-100%":"100%"):C.fromTo("translateX","0%",d,!0).fromTo(o,1,.8,!0);var X=s.querySelector(":scope > ion-header > ion-toolbar");if(X){var h=new e;h.addElement(X);var x=new e;x.addElement(X.querySelector("ion-title"));var A=new e;A.addElement(X.querySelectorAll("ion-buttons,[menuToggle]"));var k=new e;k.addElement(r(X).querySelector(".toolbar-background"));var P=new e;if(q=X.querySelector("ion-back-button"),P.addElement(q),h.add(x).add(A).add(P).add(k),m.add(h),P.fromTo(o,.99,0,!0),x.fromTo(o,.99,0,!0),A.fromTo(o,.99,0,!0),c){if(x.fromTo("translateX","0%",n?"-100%":"100%"),k.beforeClearStyles([o]).fromTo(o,1,.01,!0),q){var R=new e;R.addElement(r(q).querySelector(".button-text")),R.fromTo("translateX","0%",(n?-124:124)+"px"),h.add(R)}}else x.fromTo("translateX","0%",d).afterClearStyles(["transform"]),P.afterClearStyles([o]),x.afterClearStyles([o]),A.afterClearStyles([o])}}return Promise.resolve(m)},Object.defineProperty(e,"__esModule",{value:!0})});