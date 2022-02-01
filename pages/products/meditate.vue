<template>
    <div class="page-container">
        <product-banner />
        <product-highlight />
        <product-centric-highlights />
        <product-centric-highlights-2 />
        <product-video />
        <breaking-banner-product /> 
        <feature-sticky-scroller />
        <closing-points />
        <product-cta />
        <next-product />
        <youtube-video />
        <img src="~/assets/imgs/meditate-product.png" class="product-mover" alt="product-showcase" />
        <img src="~/assets/imgs/meditate-product.png" class="product-mover-alt" alt="product-showcase" />
        <img src="~/assets/imgs/havells-meditate-open.png" class="product-mover-open" alt="product-showcase" />
    </div>
</template>

<style lang="scss" scoped>
.product-mover, .product-mover-alt, .product-mover-open {
    position: absolute;
    width: 100%;
    max-height: calc(90vh - 250px);
    object-fit: contain;
    object-position: center bottom;
    transform-origin: center bottom;
    top: 0;
    bottom: auto;
    left: 0;
    z-index: 1;
    pointer-events: none;
}
.product-mover-alt, .product-mover-open {
    position: fixed;
    top: calc(50% - 120px);
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
}
.product-mover-open {
    opacity: 0;
    visibility: hidden;
}
@media only screen and (max-width:767px) {
    .product-mover-alt, .product-mover-open {
        width: 50%;
        left: 100%;
        transform: translate(-100%, -50%) scale(0.8);
    }
}
</style>

<script>
export default {
    head () {
        return {
            title: 'Product - Meditate'
        }
    },
    mounted() {

        function productAnimInit() {

        if (window.innerWidth > 768) {
            var firstTwoSec = $('#product_banner').innerHeight() + $('#product_highlight_1').innerHeight() + ($('#highlight_1').innerHeight())/2 - ($('.product-mover-alt').innerHeight())/2;
        } else {
            var firstTwoSec = $('#product_banner').innerHeight() + $('#product_highlight_1').innerHeight() + ($('#highlight_1').innerHeight())/2.5 - ($('.product-mover-alt').innerHeight())/2;
        }

        // var lastScrollTop = 0;
        // $(window).scroll(function() {
        //     var st = $(this).scrollTop();
        //     if (st < lastScrollTop) {
        //         if($(window).scrollTop() == $(window).height() - $(window).height() || $(window).scrollTop() < firstTwoSec ) {
        //             // console.log("top!");
        //             setTimeout(function(){ $('.product-mover-alt').css({"opacity": "0", "visibility": "hidden", "transition": "0"}) });
                    
        //         }
        //     }
        //     lastScrollTop = st;
        // });

        var dispHeight = window.innerHeight;
        if(window.innerWidth > 1600) {
            var adjdispHeight = dispHeight/2.1;
        } else {
            var adjdispHeight = dispHeight/2;
        }

        // var scrollInitialFix = gsap.timeline({
        //     scrollTrigger:{
        //     trigger: "#product_banner",
        //     start: "0% 1%",
        //     toggleActions: "restart restart restart restart",
        //     // markers: true,
        // }
        // });
        // scrollInitialFix.to(".product-mover-alt",{autoAlpha: 0, duration: 0.00001});

        var productBanner = gsap.timeline({
            scrollTrigger:{
            trigger: "#product_banner",
            start: "0% 0%",
            end: "55% 50%",
            scrub: 0.5,
            // markers: true,
            pin: true
        }
        });

        productBanner.from("#product_banner .bg-img-holder", {scale:1.4, duration: 3, transformOrigin: "50% 0%"}, "first-scroll");
        // productBanner.fromTo(".product-mover", {y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, {scale:0.9, y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, "first-scroll-=1");
        if(window.innerHeight > 900 && window.innerWidth > 1600) {
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight}, duration: 2}, {css: {top: adjdispHeight/2.3, scale: "0.9"}, duration: 2}, "first-scroll");
        } else if(window.innerHeight > 900 && window.innerWidth > 500 ) {
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight}, duration: 2}, {css: {top: adjdispHeight/2, scale: "0.9"}, duration: 2}, "first-scroll");
        } else if(window.innerHeight > 700 && window.innerWidth > 500 ) {
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight}, duration: 2}, {css: {top: adjdispHeight/1.85, scale: "0.9"}, duration: 2}, "first-scroll");
        } else if (window.innerHeight > 820 && window.innerWidth < 500 ){
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight/0.8}, duration: 2}, {css: {top: adjdispHeight/1.8, scale: "0.9"}, duration: 2}, "first-scroll");
        } else if (window.innerWidth < 500 ){
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight/0.8}, duration: 2}, {css: {top: adjdispHeight/1.6, scale: "0.9"}, duration: 2}, "first-scroll");
            console.log("test")
        } else {
            productBanner.fromTo(".product-mover", {css: {top: adjdispHeight/0.8}, duration: 2}, {css: {top: adjdispHeight/1.6, scale: "0.9"}, duration: 2}, "first-scroll");
        }

        if(window.innerHeight > 900) {
            var heightlightHeight = window.innerHeight + $('#product_highlight_1').innerHeight() - $('#product_highlight_1').innerHeight()/1.4;
        } else {
            var heightlightHeight = window.innerHeight + $('#product_highlight_1').innerHeight() - $('#product_highlight_1').innerHeight()/1.6;
        }
        
        var productHighlightOne = gsap.timeline({
            scrollTrigger:{
            trigger: "#product_highlight_1",
            start: "-20% 0%",
            end: "50% 50%",
            scrub: 0.5,
            // markers: true
        }
        });

        if(window.innerWidth > 768) {
            productHighlightOne.to(".product-mover",{css: {top: heightlightHeight, x:"400", scale: "0.5", transformOrigin: "50% 100%", duration: 4}});
        } else {
            productHighlightOne.to(".product-mover",{css: {top: heightlightHeight, xPercent:"30", scale: "0.4", transformOrigin: "50% 100%", duration: 4}});
        }

        function productFixedFix() {
            console.log("ended")
        }

        var heightlightHeight = (window.innerHeight + $('#highlight_1').innerHeight() + $('#highlight_1').innerHeight())/1.4;

        var fixedHeightFix = (window.innerHeight/2 - $('.product-mover').innerHeight()/2)/2;

        // var productHighlightTwoScrubFix = gsap.timeline({
        //     scrollTrigger:{
        //         trigger: "#highlight_1",
        //         start: "15% 50%",
        //         toggleActions: "restart reverse restart reverse",
        //         // scrub: 0.5,
        //         // markers: true
        //     }
        // });
        
        // productHighlightTwoScrubFix.to(".product-mover-alt",{autoAlpha: 0, duration: 0.00001});
        // if(window.innerWidth > 768) {
        //     productHighlightTwoScrubFix.from(".product-mover-alt",{xPercent:"80", yPercent:"-40", scale: "0.3", transformOrigin: "50% 100%", duration: 0.00001});
        // }

        function logRed() {
            // console.log("left");
            const myTimeout = setTimeout( () => {$('.product-mover-alt').css({"opacity": "0", "visibility": "hidden"})}, 1000);
            
        }

        var productHighlightTwoScrubFix = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_1",
                start: "50% 50%",
                end: "51% 50%",
                // toggleActions: "restart reset restart reset",
                scrub: 0.5,
                onLeaveBack: () => logRed(),
                // markers: true
            }
        });

        
        productHighlightTwoScrubFix.from(".product-mover-alt",{autoAlpha: 0, duration: 0.00001});
        // productHighlightTwoScrubFix.to(".product-mover-alt",{autoAlpha: 0, duration: 0.00001} ,{autoAlpha: 1, duration: 0.00001});
        productHighlightTwoScrubFix.to(".product-mover-open",{autoAlpha: 0, duration: 0.00001});

        var productHighlightTwoScrubFixTwo = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_1",
                start: "50% 50%",
                toggleActions: "restart reverse restart reverse",
                // scrub: 0.5,
                // markers: true
            }
        });

        
        productHighlightTwoScrubFixTwo.to(".product-mover",{autoAlpha: 0, duration: 0.00001});

        var productHighlightTwo = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_1",
                start: "-30% 10%",
                end: "50% 50%",
                scrub: 0.5,
                // markers: true
            }
        });

        if(window.innerWidth > 768) {
            productHighlightTwo.to(".product-mover",{css: {top: heightlightHeight, x:"0", scale: "0.8", duration: 4}}, "first-center");
        } else {
            productHighlightTwo.to(".product-mover",{css: {top: heightlightHeight, width: "50%", xPercent:"100", scale: "0.8", duration: 4}}, "first-center");
        }


        if(window.innerWidth > 768) {
            var highlightTwoStart = "20% 50%";
        } else {
            var highlightTwoStart = "-10% 50%";
        }
        var productHighlightThree = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_2",
                start: highlightTwoStart,
                end: "30% 50%",
                scrub: 0.5,
                // markers: true
            }
        });

        if(window.innerWidth > 768) {
            productHighlightThree.to(".product-mover-alt",{autoAlpha: 0, duration: 1}, "product-open-change");
            productHighlightThree.to(".product-mover-open",{autoAlpha: 1, duration: 1}, "product-open-change");
        } else {
            productHighlightThree.to(".product-mover-alt",{xPercent: "-100", autoAlpha: 0, duration: 1}, "product-open-change");
            productHighlightThree.to(".product-mover-open",{xPercent: "-100", autoAlpha: 1, duration: 1}, "product-open-change");
        }


        if(window.innerWidth > 768) {
            var highlightFourStart = "-10% 50%";
            var highlightFourEnd = "30% 50%";
        } else {
            var highlightFourStart = "-10% 50%";
            var highlightFourEnd = "30% 50%";
        }
        var productHighlightFour = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_3",
                start: highlightFourStart,
                end: highlightFourEnd,
                scrub: 0.5,
                // markers: true
            }
        });

        productHighlightFour.to(".product-mover-open",{autoAlpha: 1});
        productHighlightFour.from("#product_highlights_1 .bg-img-holder",{clipPath: "inset(0% 100% 0% 0%)", duration: 1}, "product-open-change");
        if(window.innerWidth < 768) {
            productHighlightFour.to(".product-mover-open",{xPercent: "-50", duration: 1}, "product-open-change");
        }

        
        var productHighlightFourAlt = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_3",
                start: "65% 50%",
                end: "80% 50%",
                scrub: 0.5,
                // markers: true
            }
        });

        productHighlightFourAlt.to("#product_highlights_1 .bg-img-holder",{autoAlpha: 0, duration: 1});
        // productHighlightFourAlt.to(".product-mover-open",{autoAlpha: 0, duration: 1});
        

        
        var productHighlightFourAltClose = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_3",
                start: "80% 50%",
                end: "120% 60%",
                scrub: 0.5,
                // markers: true
            }
        });

        productHighlightFourAltClose.to(".product-mover-open",{autoAlpha: 0, duration: 1});

        
        // if(window.innerWidth > 768) {
        //     var highlightFiveStart = "-50% 50%";
        //     var highlightFiveEnd = "60% 50%";
        // } else {
        //     var highlightFiveStart = "-100% 100%";
        //     var highlightFiveEnd = "-90% 30%";
        // }
        // var productHighlightFive = gsap.timeline({
        //     scrollTrigger:{
        //         trigger: "#product_highlights_2 .last-row-text",
        //         start: highlightFiveStart,
        //         end: highlightFiveEnd,
        //         scrub: 0.5,
        //         // markers: true
        //     }
        // });

        // if(window.innerWidth > 768) {
        //     productHighlightFive.to(".row-image",{y: (dispHeight)/2, duration: 1});
        //     productHighlightFive.to(".meditate-semi",{x: -300, duration: 1}, "semi-open");
        //     productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
        // } else {
        //     // productHighlightFive.to(".row-image",{y: "20", duration: 1});
        //     productHighlightFive.to(".meditate-semi",{xPercent: "-25", duration: 1}, "semi-open");
        //     productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
        //     productHighlightFive.to(".meditate-semi-part",{xPercent: "15", scale: 0.7, duration: 1}, "semi-open");
        // }
        // productHighlightFive.to(".product-mover-open",{autoAlpha: 0, duration: 1}, "semi-open");
        
        
        var productHighlightSix = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_video",
                start: "0% 50%",
                end: "45% 50%",
                scrub: 0.5,
                // markers: true
            }
        });

        productHighlightSix.from("#product_video .bg-vid-holder, #product_video .bg-vid-overlay",{clipPath: "inset(10% 20% 10% 20%)", opacity: 0.3, duration: 1});
        
        var closingCtaProduct = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_cta",
                start: "10% 50%",
                end: "60% 50%",
                scrub: 1,
                // markers: true
            }
        });

        closingCtaProduct.from("#product_cta .bg-img-holder",{scale: 1.3, duration: 2});
        }

        productAnimInit();

        // if (window.location.href.indexOf("meditate") > -1) {
        //     const myTimeout = setTimeout(productAnimInit, 300);
        // }
    }
}
</script>