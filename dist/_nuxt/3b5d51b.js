(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{368:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("840415b2",content,!0,{sourceMap:!1})},399:function(t,e,n){t.exports=n.p+"img/havells-meditate-semi.5128a2c.png"},400:function(t,e,n){t.exports=n.p+"img/part-hepta.1ff5020.png"},401:function(t,e,n){t.exports=n.p+"img/part-hepta-2.9aaf0f2.png"},402:function(t,e,n){"use strict";n(368)},403:function(t,e,n){var o=n(55),r=n(131),l=n(404),c=o(!1),d=r(l);c.push([t.i,"#product_highlights_2[data-v-41719be8]{background-image:url("+d+");background-size:cover;background-position:50%;z-index:2;padding-top:0;padding-bottom:40vh}#product_highlights_2 .row[data-v-41719be8]{align-items:center}#product_highlights_2 .last-row-text[data-v-41719be8]{margin-top:100vh}#product_highlights_2 .meditate-semi-part[data-v-41719be8]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#product_highlights_2 .meditate-semi-part[data-v-41719be8]:last-child{z-index:-1}@media only screen and (max-width:768px){#product_highlights_2[data-v-41719be8]{padding-top:90px;padding-bottom:90px}#product_highlights_2 .last-row-text[data-v-41719be8]{margin-top:30px}.col-sm-4.row-image[data-v-41719be8]{max-width:60%;margin:30px auto 0}.col-sm-4.row-image img[data-v-41719be8]{max-width:100%}}",""]),t.exports=c},404:function(t,e,n){t.exports=n.p+"img/bg-grey-desktop.5f9990f.jpg"},410:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"grid-section has-reveal-anim",attrs:{id:"product_highlights_2"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4 first-row-text"},[o("h2",{staticClass:"head-level-4 reveal-text"},[t._v("Harmoniously stylish design")]),t._v(" "),o("p",{staticClass:"reveal-text"},[t._v("Wooden finish base to give a ultra premium look and feel, so it blends harmoniously with modern interiors.")])]),t._v(" "),o("div",{staticClass:"col-sm-4 row-image"},[o("img",{staticClass:"meditate-semi",attrs:{src:n(399),alt:"Havells Studio"}}),t._v(" "),o("img",{staticClass:"meditate-semi-part",attrs:{src:n(400),alt:"Havells Studio"}}),t._v(" "),o("img",{staticClass:"meditate-semi-part",attrs:{src:n(401),alt:"Havells Studio"}})]),t._v(" "),o("div",{staticClass:"col-sm-4 last-row-text"},[o("h2",{staticClass:"head-level-4 reveal-text"},[t._v("Easy and intuitive maintenance")]),t._v(" "),o("p",{staticClass:"reveal-text"},[t._v("The HEPA filter is easy to change and only needs periodic cleaning and they can be easily replaced.")])])])]),t._v(" "),o("div",{staticClass:"bg-img-holder"})])}],r=(n(15),n(28),n(102),n(37),n(26),n(132),{name:"product-centric-highlights-2",mounted:function(){!function(){$(".page-container").hasClass("dark-header")?$(".navbar-container").addClass("dark-nav"):$(".navbar-container").removeClass("dark-nav");var t,e,n=function(t){for(var line,e,n=[],o=t.querySelectorAll("span"),i=0;i<o.length;i++){var r=o[i];r.offsetTop!=e&&(r.classList.contains("whitespace")||(e=r.offsetTop,line=[],n.push(line))),line.push(r)}return n};t=".reveal-text",e=document.querySelectorAll(t),function(t){document.querySelectorAll(t).forEach((function(t){t.dataset.splitText=t.textContent,t.innerHTML=t.textContent.split(/\s/).map((function(t){return t.split("-").map((function(t){return'<span class="word">'+t+"</span>"})).join('<span class="hyphen">-</span>')})).join('<span class="whitespace"> </span>')}))}(t),e.forEach((function(t){var e=n(t),o="";e.forEach((function(t){o+='<span class="line"><span class="words">',t.forEach((function(t){o+=t.outerHTML})),o+="</span></span>"})),t.innerHTML=o}));var o=document.querySelectorAll(".reveal-text");gsap.registerPlugin(ScrollTrigger),o.forEach((function(element,i){var t=element.querySelectorAll(".words");var e=gsap.timeline({onComplete:function(){$(element).parents("section").addClass("active")},scrollTrigger:{id:"indexPannels"+i,trigger:element,toggleActions:"restart none none reset"}});e.set(element,{autoAlpha:1}),e.from(t,1,{yPercent:100,ease:Power3.out,stagger:.25,delay:.2})})),console.log("init started")}();var t=window.innerHeight;if(window.innerWidth>768)var e="-50% 50%",n="60% 50%";else e="-100% 100%",n="-90% 30%";var o=gsap.timeline({scrollTrigger:{trigger:"#product_highlights_2 .last-row-text",start:e,end:n,scrub:.5}});window.innerWidth>768?(o.to(".row-image",{y:t/2,duration:1}),o.to(".meditate-semi",{x:-300,duration:1},"semi-open"),o.from(".meditate-semi-part",{autoAlpha:0,duration:1},"semi-open")):(o.to(".meditate-semi",{xPercent:"-25",duration:1},"semi-open"),o.from(".meditate-semi-part",{autoAlpha:0,duration:1},"semi-open"),o.to(".meditate-semi-part",{xPercent:"15",scale:.7,duration:1},"semi-open")),o.to(".product-mover-open",{autoAlpha:0,duration:1},"semi-open")}}),l=(n(402),n(22)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"41719be8",null);e.default=component.exports}}]);