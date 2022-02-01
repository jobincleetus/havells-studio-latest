<template>
    <section id="product_highlights_2" class="grid-section has-reveal-anim">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 first-row-text">
                    <h2 class="head-level-4 reveal-text">Harmoniously stylish design</h2>
                    <p class="reveal-text">Wooden finish base to give a ultra premium look and feel, so it blends harmoniously with modern interiors.</p>
                </div>
                <div class="col-sm-4 row-image">
                    <img src="~/assets/imgs/havells-meditate-semi.png" alt="Havells Studio" class="meditate-semi" />
                    <img src="~/assets/imgs/part-hepta.png" alt="Havells Studio" class="meditate-semi-part" />
                    <img src="~/assets/imgs/part-hepta-2.png" alt="Havells Studio" class="meditate-semi-part" />
                </div>
                <div class="col-sm-4 last-row-text">
                    <h2 class="head-level-4 reveal-text">Easy and intuitive maintenance</h2>
                    <p class="reveal-text">The HEPA filter is easy to change and only needs periodic cleaning and they can be easily replaced.</p>
                </div>
            </div>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_highlights_2 {
        background-image: url('~/assets/imgs/bg-grey-desktop.jpg');
        background-size: cover;
        background-position: center;
        z-index: 2;
        padding-top: 0px;
        padding-bottom: 40vh;

        .row {
            align-items: center;
        }

        .last-row-text {
            margin-top: 100vh;
        }

        .meditate-semi-part {
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);

            &:last-child {
                z-index: -1;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        #product_highlights_2 {
            padding-top: 90px;
            padding-bottom: 90px;
        }
        #product_highlights_2 .last-row-text {
            margin-top: 30px;
        }
        .col-sm-4.row-image  {
            max-width: 60%;
            margin: 30px auto 0;
            img {
                max-width: 100%;
            }
        }
    }
</style>

<script>
export default {
    name: 'product-centric-highlights-2',
    mounted() {

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
        
        var dispHeight = window.innerHeight;

        if(window.innerWidth > 768) {
            var highlightFiveStart = "-50% 50%";
            var highlightFiveEnd = "60% 50%";
        } else {
            var highlightFiveStart = "-100% 100%";
            var highlightFiveEnd = "-90% 30%";
        }
        var productHighlightFive = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_highlights_2 .last-row-text",
                start: highlightFiveStart,
                end: highlightFiveEnd,
                scrub: 0.5,
                // markers: true
            }
        });

        if(window.innerWidth > 768) {
            productHighlightFive.to(".row-image",{y: (dispHeight)/2, duration: 1});
            productHighlightFive.to(".meditate-semi",{x: -300, duration: 1}, "semi-open");
            productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
        } else {
            // productHighlightFive.to(".row-image",{y: "20", duration: 1});
            productHighlightFive.to(".meditate-semi",{xPercent: "-25", duration: 1}, "semi-open");
            productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
            productHighlightFive.to(".meditate-semi-part",{xPercent: "15", scale: 0.7, duration: 1}, "semi-open");
        }
        productHighlightFive.to(".product-mover-open",{autoAlpha: 0, duration: 1}, "semi-open");
    }
}
</script>