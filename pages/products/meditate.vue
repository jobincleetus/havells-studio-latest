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
.page-container {
    position: relative;
    z-index: 1;
}
.product-mover, .product-mover-alt, .product-mover-open {
    position: fixed;
    width: 100%;
    max-height: 100vh;
    object-fit: contain;
    object-position: center center;
    top: calc(50% - 48vh); 
    left: 50%;
    z-index: 1;
    pointer-events: none;
    transform: translate(-50%, 0%);
    transform-origin: 50% 50%;
}
.product-mover-open {
    opacity: 0;
}
.product-mover-alt {
    opacity: 0;
}
@media only screen and (max-width:767px) {
    .product-mover {
        top: calc(50% - 35vh);
    }
    .product-mover-open {
        width: 50%;
        transform: scale(0.7);
    }
    #product_highlights_1 .bg-img-holder {
        max-height: 120vh;
    }
    #highlight_3 h2.head-level-4 {
        padding-bottom: 40px;
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

            var productBanner = gsap.timeline({
                scrollTrigger:{
                trigger: "#product_banner",
                pin: true,
                start: "0% 0%", // when the top of the trigger hits the top of the viewport
                scrub: 0.5,
                toggleActions: "play none reverse none",
                // markers: true,
            }
            });

            
            if(window.innerWidth > 768) {
                var objectCenter = window.innerHeight/2;
            } else {
                var objectCenter = window.innerHeight/3.5;
            }


            productBanner.to("#product_banner h1, #product_banner p", {autoAlpha:0, duration: 0.5, transformOrigin: "50% 0%"}, "first-scroll");
            if(window.innerWidth > 768) {
                productBanner.to("#product_banner .product-banner-title", {scale:3, duration: 2, opacity: "0.35", transformOrigin: "50% 0%"}, "first-scroll");
            } else{
                productBanner.to("#product_banner .product-banner-title", {scale:1.2, duration: 2, opacity: "0.35", transformOrigin: "50% 0%"}, "first-scroll");
            };
            if(window.innerWidth > 380) {
                productBanner.from("#product_banner .bg-img-holder", {scale:1.5, duration: 2.5, transformOrigin: "50% 0%"}, "first-scroll");
            } else {
                productBanner.fromTo("#product_banner .bg-img-holder", {scale:1.5, duration: 2.5, transformOrigin: "50% 0%"}, {scale:1.15, duration: 2.5, transformOrigin: "50% 0%"}, "first-scroll");
            }
            // productBanner.fromTo(".product-mover", {y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, {scale:0.9, y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, "first-scroll-=1");
            productBanner.from(".product-mover", {top: "50vh", duration: 2}, "first-scroll");
            productBanner.to(".product-mover", {scale: 0.6, duration: 2}, "first-scroll");
            productBanner.to({}, {duration: 3})       

            // var productBannerMid = gsap.timeline({
            //     scrollTrigger:{
            //     trigger: "#product_banner",
            //     // pin: true,
            //     start: "90% 50%", // when the top of the trigger hits the top of the viewport
            //     // scrub: 0.5,
            //     toggleActions: "none none reverse none",
            //     markers: true,
            // }
            // });
            // productBannerMid.to(".product-mover", {top: "calc(50% - 45vh)", x: "0", scale: 0.6, duration: 2});      

            var productBannerMidSec = gsap.timeline({
                scrollTrigger:{
                trigger: "#product_highlight_1",
                // pin: true,
                start: "0% 0%", // when the top of the trigger hits the top of the viewport
                // scrub: 0.5,
                onEnterBack: () => console.log("onEnterBack"),
                toggleActions: "none none none restart",
                // markers: true,
            }
            });
            productBannerMidSec.to(".product-mover", {top: "calc(50% - 45vh)", x: "0", scale: 0.6, duration: 0.5});

            var productBannerNext = gsap.timeline({
                scrollTrigger:{
                trigger: "#product_highlight_1",
                pin: true,
                start: "0% 0%", // when the top of the trigger hits the top of the viewport
                scrub: 0.5,
                // toggleActions: "play none none reverse",
                // markers: true,
            }
            });
            productBannerNext.to(".product-mover", {top: "calc(50% - 45vh)", scale: 0.6, duration: 0.001}, "scrolling");
            if(window.innerWidth > 768) {
                productBannerNext.to(".product-mover", {top: "30vh", x: "400", scale: 0.3, duration: 2}, "scrolling");
            } else {
                productBannerNext.to(".product-mover", {top: "35vh", x: "100", scale: 0.3, duration: 2}, "scrolling");
            }
            productBannerNext.to({}, {duration: 3})


            var productHighlightOne = gsap.timeline({
                scrollTrigger:{
                trigger: "#highlight_1",
                start: "0% 50%",
                end: "50% 50%", // when the top of the trigger hits the top of the viewport
                scrub: 0.5,
                toggleActions: "play none none reverse",
                // markers: true,
            }
            });
            if(window.innerWidth > 768) {
                productHighlightOne.to(".product-mover", {top: "calc(50% - 45vh)", x: 0, scale: 0.7, duration: 2}, "first-scroll");
            } else {
                productHighlightOne.to(".product-mover", {top: objectCenter, xPercent: "-50", width: "50%", scale: 0.7, duration: 2}, "first-scroll");
            }
            productHighlightOne.to(".product-mover-open",{scale: 0.7, duration: 0.2}, "first-scroll");

            
            var productHighlightTwo = gsap.timeline({
                scrollTrigger:{
                    trigger: "#highlight_2",
                    start: "0% 50%",
                    // end: "10% 50%",
                    // scrub: 0.5,
                    toggleActions: "play none none reverse",
                    // markers: true,
                }
            });
            productHighlightTwo.to(".product-mover",{autoAlpha: 0, duration: 0.3}, "product-open-change");
            productHighlightTwo.to(".product-mover-open",{autoAlpha: 1, duration: 0.3}, "product-open-change");
            if(window.innerWidth < 768) {
                productHighlightTwo.to(".product-mover", {xPercent: "-100", duration: 0.5}, "product-open-change");
                productHighlightTwo.to(".product-mover-open", {top: objectCenter, duration: 0.0001}, "product-open-change");
                productHighlightTwo.to(".product-mover-open", {xPercent: "-100", duration: 0.5}, "product-open-change");
            }


            var productHighlightThreeMob = gsap.timeline({
                scrollTrigger:{
                    trigger: "#highlight_3",
                    start: "10% 50%",
                    toggleActions: "play none none reverse",
                    // markers: true,
                }
            });
            
            if(window.innerWidth < 768) {
                productHighlightThreeMob.to(".product-mover-open", {xPercent: "-100", duration: 0.0001});
                productHighlightThreeMob.to(".product-mover-open", {xPercent: "-50", scale: "0.8", duration: 0.5});
            }

            if(window.innerWidth > 768) {
                var productHighlightThreeStart = "10% 50%";
                var productHighlightThreeEnd = "50% 50%";
            } else {
                var productHighlightThreeStart = "0% 0%";
                var productHighlightThreeEnd = "100% 50%";
            }
            var productHighlightThree = gsap.timeline({
                scrollTrigger:{
                    trigger: "#highlight_3",
                    start: productHighlightThreeStart,
                    // end: productHighlightThreeEnd,
                    pin: "#product_highlights_1",
                    scrub: 0.5,
                    toggleActions: "play none none reverse",
                    // markers: true,
                }
            });
            productHighlightThree.from("#product_highlights_1 .left-germ",{clipPath: "inset(0% 100% 0% 0%)", duration: 1});
            productHighlightThree.from("#highlight_3 .col-sm-4:first-child p",{autoAlpha: 0, y: "50", duration: 1}, "-=0.5");
            productHighlightThree.from("#product_highlights_1 .right-germ",{clipPath: "inset(0% 100% 0% 0%)", duration: 1}, "-=0.5");
            productHighlightThree.from("#highlight_3 .col-sm-4:last-child h2",{autoAlpha: 0, y: "50", duration: 1}, "-=0.5");
            productHighlightThree.to({}, {duration: 5})



            // var dispHeight = window.innerHeight;

            // var productHighlightFive = gsap.timeline({
            // scrollTrigger:{
            //     trigger: "#product_highlights_2 .last-row-text",
            //     start: "-150% 50%",
            //     end: "50% 50%",
            //     scrub: 0.5,
            //     // markers: true
            //     }
            // });

            // if(window.innerWidth > 768) {
            //     productHighlightFive.to(".row-image",{y: (dispHeight)/2, duration: 1});
            //     productHighlightFive.to(".meditate-semi",{x: -300, duration: 1}, "semi-open");
            //     productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
            // } else {
            //     productHighlightFive.to(".meditate-semi",{xPercent: "-25", duration: 1}, "semi-open");
            //     productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
            //     productHighlightFive.to(".meditate-semi-part",{xPercent: "15", scale: 0.7, duration: 1}, "semi-open");
            // }
            // productHighlightFive.to(".product-mover-open",{autoAlpha: 0, duration: 1}, "semi-open");

            // var productHighlightFiveTwo = gsap.timeline({
            //     scrollTrigger:{
            //         trigger: "#product_highlights_2",
            //         start: "0% 50%",
            //         end: "10% 50%",
            //         scrub: 0.5,
            //         // toggleActions: "play none none reverse",
            //         // markers: true,
            //     }
            // });
            // productHighlightFiveTwo.to(".product-mover-open",{autoAlpha: 0, duration: 0.001}, "close-semi");


            var dispHeight = window.innerHeight;

            if(window.innerWidth > 768) {
                var productHighlightFiveStart = "-150% 50%";
                var productHighlightFiveEnd = "50% 50%";
            } else {
                var productHighlightFiveStart = "-200% 100%";
                var productHighlightFiveEnd = "0% 50%";
            }

            var productHighlightFive = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_highlights_2 .last-row-text",
                start: productHighlightFiveStart,
                end: productHighlightFiveEnd,
                scrub: 0.5,
                // markers: true
                }
            });

            if(window.innerWidth > 768) {
                productHighlightFive.to(".row-image",{y: (dispHeight)/2, duration: 1});
                productHighlightFive.to(".meditate-semi",{x: -300, duration: 1}, "semi-open");
                productHighlightFive.to(".meditate-semi-part",{autoAlpha: 1, duration: 1}, "semi-open");
            } else {
                // productHighlightFive.to(".row-image",{y: "20", duration: 1});
                productHighlightFive.to(".meditate-semi",{xPercent: "-25", duration: 1}, "semi-open");
                productHighlightFive.to(".meditate-semi-part",{autoAlpha: 1, duration: 1}, "semi-open");
                productHighlightFive.to(".meditate-semi-part",{xPercent: "15", scale: 0.7, duration: 1}, "semi-open");
            }
            // productHighlightFive.to(".product-mover-open",{autoAlpha: 0, duration: 1}, "semi-open");

            var productHighlightFiveTwo = gsap.timeline({
                scrollTrigger:{
                    trigger: "#highlight_3",
                    start: "50% 50%",
                    end: "50% 50%",
                    // scrub: 0.5,
                    toggleActions: "play none none reverse",
                    // markers: true,
                }
            });
            productHighlightFiveTwo.to(".product-mover-open",{autoAlpha:"0", duration: 0.01}, "close-semi");
            productHighlightFiveTwo.to(".product-mover-open-alt",{autoAlpha:"1", duration: 0.01}, "close-semi");


            var productHighlightSix = gsap.timeline({
                scrollTrigger:{
                    trigger: "#product_video",
                    start: "10% 50%",
                    toggleActions: "play none none reverse",
                    // scrub: 1,
                    // markers: true
                }
            });

            productHighlightSix.from("#product_video .bg-vid-holder",{scale: "1.3", duration: 1});
            
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