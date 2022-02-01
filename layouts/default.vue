<template>
    <main>
        <navbar />
        <Nuxt />
        <footer-main />
    </main>
</template>

<style lang="scss">
   section {
        padding: 90px 0;
   }
   .grid-section {
        min-height: 100vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

<script>

export default {

    head () {
        return {
        link: [
            { 
            rel:'stylesheet',
            href:'https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.4.1/swiper-bundle.min.css' 
            },
            {
            rel: 'stylesheet',
            href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            }
        ],
        script: [
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.4.1/swiper-bundle.min.js',
            defer: true 
            },
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js',
            defer: true 
            },
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollToPlugin.min.js',
            defer: true 
            },
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js',
            defer: true 
            },
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/EasePack.min.js',
            defer: true 
            },
            {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/CSSRulePlugin.min.js',
            defer: true 
            }
        ]
        }
    },
    mounted() {


        var navbarAnim = gsap.timeline();

        navbarAnim.from(".navbar-container", 0.5, {autoAlpha:0}, "+=1");
        
        function init() {

            if($('.page-container').hasClass( "dark-header" )) {
                $('.navbar-container').addClass( "dark-nav" )
            } else{
                $('.navbar-container').removeClass( "dark-nav" )
            }
            
            let splitWords = function (selector) {
                var elements = document.querySelectorAll(selector);

                elements.forEach(function (el) {
                el.dataset.splitText = el.textContent;
                el.innerHTML = el.textContent
                    .split(/\s/)
                    .map(function (word) {
                    return word
                        .split("-")
                        .map(function (word) {
                        return '<span class="word">' + word + "</span>";
                        })
                        .join('<span class="hyphen">-</span>');
                    })
                    .join('<span class="whitespace"> </span>');
                });
            };

            let splitLines = function (selector) {
                var elements = document.querySelectorAll(selector);

                splitWords(selector);

                elements.forEach(function (el) {
                var lines = getLines(el);

                var wrappedLines = "";
                lines.forEach(function (wordsArr) {
                    wrappedLines += '<span class="line"><span class="words">';
                    wordsArr.forEach(function (word) {
                    wrappedLines += word.outerHTML;
                    });
                    wrappedLines += "</span></span>";
                });
                el.innerHTML = wrappedLines;
                });
            };

            let getLines = function (el) {
                var lines = [];
                var line;
                var words = el.querySelectorAll("span");
                var lastTop;
                for (var i = 0; i < words.length; i++) {
                var word = words[i];
                if (word.offsetTop != lastTop) {
                    // Don't start with whitespace
                    if (!word.classList.contains("whitespace")) {
                    lastTop = word.offsetTop;

                    line = [];
                    lines.push(line);
                    }
                }
                line.push(word);
                }
                return lines;
            };

            splitLines(".reveal-text");

            let revealText = document.querySelectorAll(".reveal-text");

            gsap.registerPlugin(ScrollTrigger);
            // ScrollTrigger.enable();

                let revealLines = revealText.forEach((element, i) => {
                    const lines = element.querySelectorAll(".words");

                    function addActive() {
                    $(element).parents("section").addClass("active");
                    }
                            
                    let tl = gsap.timeline({
                    onComplete: function(){ 
                        addActive();
                    },
                    scrollTrigger: {
                        id: "indexPannels" + i,
                        trigger: element,
                        toggleActions: "restart none none reset"
                    }
                    });
                    tl.set(element, { autoAlpha: 1 });
                    tl.from(lines, 1, {
                    yPercent: 100,
                    ease: Power3.out,
                    stagger: 0.25,
                    delay: 0.2
                    });

                });
                    console.log("init started")
        }

        init();

        // if (window.location.href.indexOf("meditate") > -1) {
        //     const myTimeout = setTimeout(init, 300);
        //     var productHighlightTwoScrubFix = gsap.timeline({
        //         scrollTrigger:{
        //             trigger: "#product_highlights_2",
        //             start: "0% 50%",
        //             onEnter: function(){
        //                 init();
        //             },
        //             // scrub: 0.5,
        //             markers: true
        //         }
        //     });

            
        // }

        let lastUrl = location.href; 
            new MutationObserver(() => {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;
                onUrlChange();
            }
        }).observe(document, {subtree: true, childList: true});
            
            
        function onUrlChange() {
            console.log('URL changed!', location.href);
            const myTimeout = setTimeout(init, 100);
        }
        
    },
    watch: {
        "$route": function(){
            console.log('$route')
            ScrollTrigger.getAll().forEach(ST => ST.kill());
        }
    }
}
</script>
