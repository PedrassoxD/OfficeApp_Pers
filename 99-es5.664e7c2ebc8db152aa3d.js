(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{l2mW:function(a,n,e){"use strict";e.r(n),e.d(n,"mdTransitionAnimation",(function(){return o})),e("ae0+"),e("ttJE"),e("wSPg");var t=e("FX7f"),i=(e("ocqh"),e("zrW2")),o=function(a,n){var e="back"===n.direction,o=n.enteringEl,r=n.leavingEl,c=Object(i.b)(o),d=c.querySelector("ion-toolbar"),b=Object(t.a)();if(b.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),e?b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var s=Object(t.a)();s.addElement(d),b.addAnimation(s)}if(r&&e){b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(t.a)();l.addElement(Object(i.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),b.addAnimation(l)}return b}}}]);