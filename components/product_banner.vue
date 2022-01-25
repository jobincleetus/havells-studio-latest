<template>
    <section id="product_banner" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <img src="~/assets/imgs/meditate.svg" class="product-banner-title img-fluid" alt="Product Showcase" />
            <h1 class="head-level-2 reveal-text reveal-center">Air Purifier with SpaceTech Technology</h1>
            <p class="reveal-text reveal-center">Pollutants can build up inside your home. But you can't always see them.</p>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_banner {
        .bg-img-holder {
            background-image: url('~/assets/imgs/product_banner.jpg');
            background-position: center bottom;
        }
        color: #fff;
        justify-content: flex-start;
        padding-top:130px;
        .product-banner-title {
            margin-bottom: 20px;
        }
    }
</style>

<script>
export default {
    name: 'product-banner',
    mounted() {

        var productBannerText = gsap.timeline({
            scrollTrigger:{
            trigger: "#product_banner",
            start: "10% 10%",
            end: "55% 50%",
            scrub: true,
            markers: true,
            pin: true
        }
        });

        productBannerText.to("#product_banner h1, #product_banner p", {autoAlpha:0, duration: 0.5, transformOrigin: "50% 0%"}, "first-scroll");
        productBannerText.to("#product_banner .product-banner-title", {scale:3, duration: 2, transformOrigin: "50% 0%"}, "first-scroll");
    }
}
</script>