<template>
    <div class="page-container">
        <product-banner />
        <product-highlight />
        <product-centric-highlights />
        <product-centric-highlights-2 />
        <product-video />
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
    opacity: 0;
    visibility: hidden;
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

        var dispHeight = window.innerHeight;
        if(window.innerWidth > 1600) {
            var adjdispHeight = dispHeight/2.1;
        } else {
            var adjdispHeight = dispHeight/2;
        }

        var productBanner = gsap.timeline({
            scrollTrigger:{
            trigger: "#product_banner",
            start: "0% 0%",
            end: "55% 50%",
            scrub: 0.5,
            markers: true,
            pin: true
        }
        });

        productBanner.from("#product_banner .bg-img-holder", {scale:1.4, duration: 3, transformOrigin: "50% 0%"}, "first-scroll");
        // productBanner.fromTo(".product-mover", {y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, {scale:0.9, y:adjdispHeight, duration: 2, transformOrigin: "50% 100%"}, "first-scroll-=1");
        productBanner.fromTo(".product-mover", {css: {top: adjdispHeight}, duration: 2}, {css: {top: adjdispHeight/1.8, scale: "0.9"}, duration: 2}, "first-scroll");

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
            markers: true
        }
        });

        productHighlightOne.to(".product-mover",{css: {top: heightlightHeight, x:"400", scale: "0.5", transformOrigin: "50% 100%", duration: 4}});
        productHighlightOne.to(".product-mover-alt",{autoAlpha: 0, duration: 0});

        function productFixedFix() {
            console.log("ended")
        }

        var heightlightHeight = (window.innerHeight + $('#highlight_1').innerHeight() + $('#highlight_1').innerHeight())/1.4 + window.innerHeight*0.2;

        var fixedHeightFix = (window.innerHeight/2 - $('.product-mover').innerHeight()/2)/2;

        var productHighlightTwo = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_1",
                start: "-30% 10%",
                end: "50% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightTwo.to(".product-mover",{css: {top: heightlightHeight, x:"0", scale: "0.8", duration: 4}}, "first-center");
        productHighlightTwo.to(".product-mover",{autoAlpha: 0, duration: 0});
        productHighlightTwo.to(".product-mover-alt",{autoAlpha: 1, duration: 0});

        var productHighlightThree = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_2",
                start: "30% 50%",
                end: "50% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightThree.to(".product-mover-alt",{autoAlpha: 0, duration: 1}, "product-open-change");
        productHighlightThree.to(".product-mover-open",{autoAlpha: 1, duration: 1}, "product-open-change");

        var productHighlightFour = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_3",
                start: "45% 50%",
                end: "70% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightFour.from("#product_highlights_1 .bg-img-holder",{clipPath: "inset(0% 100% 0% 0%)", duration: 1}, "product-open-change");

        
        var productHighlightFourAlt = gsap.timeline({
            scrollTrigger:{
                trigger: "#highlight_3",
                start: "75% 50%",
                end: "95% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightFourAlt.to("#product_highlights_1 .bg-img-holder",{autoAlpha: 0, duration: 1});
        // productHighlightFourAlt.to(".product-mover-open",{autoAlpha: 0, duration: 1});

        
        
        var productHighlightFive = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_highlights_2 .last-row-text",
                start: "-50% 50%",
                end: "80% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightFive.to(".row-image",{y: (dispHeight)/2, duration: 1});
        productHighlightFive.to(".meditate-semi",{x: -300, duration: 1}, "semi-open");
        productHighlightFive.from(".meditate-semi-part",{autoAlpha: 0, duration: 1}, "semi-open");
        productHighlightFive.to(".product-mover-open",{autoAlpha: 0, duration: 1}, "semi-open");
        
        
        var productHighlightSix = gsap.timeline({
            scrollTrigger:{
                trigger: "#product_video",
                start: "0% 50%",
                end: "45% 50%",
                scrub: 0.5,
                markers: true
            }
        });

        productHighlightSix.from("#product_video .bg-vid-holder, #product_video .bg-vid-overlay",{clipPath: "inset(10% 20% 10% 20%)", opacity: 0.3, duration: 1});
    }
}
</script>