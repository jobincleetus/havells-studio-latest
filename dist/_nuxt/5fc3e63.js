(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{245:function(t,e,l){t.exports=l.p+"img/highlight_bg.cd72e27.jpg"},272:function(t,e,l){var content=l(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(56).default)("c9997a7e",content,!0,{sourceMap:!1})},361:function(t,e,l){"use strict";l(272)},362:function(t,e,l){var h=l(55),o=l(131),r=l(245),c=h(!1),n=o(r);c.push([t.i,"#home-highlights[data-v-022a6e30]{color:#fff}#home-highlights .bg-img-holder[data-v-022a6e30]{background-image:url("+n+")}#home-highlights h3[data-v-022a6e30]{max-width:80%}#home-highlights p[data-v-022a6e30]{max-width:60%}#home-highlights .col-sm-4[data-v-022a6e30]:nth-child(2){padding-top:8%}#home-highlights .col-sm-4[data-v-022a6e30]:nth-child(3){padding-top:16%}",""]),t.exports=c},396:function(t,e,l){"use strict";l.r(e);var h={name:"highlights",mounted:function(){var t=gsap.timeline({scrollTrigger:{trigger:"#home-highlights",start:"top 0",scrub:.2,pin:!0,end:"+=2000"}});window.innerWidth<768?(t.from("#home-highlights .col-sm-4:nth-child(2)",{y:500,duration:2},"first-scroll"),t.to("#home-highlights .bg-img-holder",{scale:1,x:-250,duration:2},"first-scroll"),t.to("#home-highlights .col-sm-4:nth-child(1)",{autoAlpha:0,duration:.5},"first-scroll+=0.5"),t.from("#home-highlights .col-sm-4:nth-child(3)",{y:1200,duration:2},"second-scroll"),t.to("#home-highlights .bg-img-holder",{scale:1,x:-500,duration:2},"second-scroll"),t.to("#home-highlights .col-sm-4:nth-child(2)",{autoAlpha:0,duration:.5},"second-scroll+=0.5")):(t.from("#home-highlights .col-sm-4:nth-child(2)",{y:700,duration:2},"first-scroll"),t.to("#home-highlights .bg-img-holder",{scale:1.02,duration:2,transformOrigin:"45% 60%"},"first-scroll"),t.from("#home-highlights .col-sm-4:nth-child(3)",{y:1200,duration:2},"second-scroll"),t.to("#home-highlights .bg-img-holder",{scale:1.2,y:100,duration:2,transformOrigin:"45% 60%"},"second-scroll+=1"))}},o=(l(361),l(22)),component=Object(o.a)(h,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"grid-section",attrs:{id:"home-highlights"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row text-left"},[l("div",{staticClass:"col-sm-4"},[l("h4",{staticClass:"sub-gold reveal-text"},[t._v("GLOBAL")]),t._v(" "),l("h3",{staticClass:"head-level-4 reveal-text"},[t._v("Benchmarked consumer durables")]),t._v(" "),l("p",{staticClass:"reveal-text"},[t._v("Where superior design meets premium functionality.")])]),t._v(" "),l("div",{staticClass:"col-sm-4"},[l("h4",{staticClass:"sub-gold reveal-text"},[t._v("ESTABLISHED")]),t._v(" "),l("h3",{staticClass:"head-level-4 reveal-text"},[t._v("Time-tested quality")]),t._v(" "),l("p",{staticClass:"reveal-text"},[t._v("Staying true to Havells’ traditions to deliver top-notch quality.")])]),t._v(" "),l("div",{staticClass:"col-sm-4"},[l("h4",{staticClass:"sub-gold reveal-text"},[t._v("INNOVATIVE")]),t._v(" "),l("h3",{staticClass:"head-level-4 reveal-text"},[t._v("Driven by "),l("br"),t._v("high-end technology")]),t._v(" "),l("p",{staticClass:"reveal-text"},[t._v("Modern features curated for the consumer of today.")])])])]),t._v(" "),l("div",{staticClass:"bg-img-holder"})])}],!1,null,"022a6e30",null);e.default=component.exports}}]);