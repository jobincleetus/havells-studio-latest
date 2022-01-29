<template>
    <section id="breaking_banner_product" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h4 class="text-uppercase sub-gold reveal-text reveal-center">Performance and Design</h4>
            <h3 class="head-level-3 reveal-text reveal-center">Control AQI monitor remotely with real data, real time</h3>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #breaking_banner_product {
        background: #FFEDAB;
        .bg-img-holder {
            background-image: url('~/assets/imgs/faded_product.png');
            background-size: contain;
            background-position: 50% 70%;
            width: 50%;
            height: 60%;
            background-repeat: no-repeat;
            top: 60%;
            transform: translate(-50%, -60%)
        }
        h3 {
            max-width: 800px;
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 768px) {
        #breaking_banner_product {
            min-height: 60vh;
        }
        #breaking_banner_product .bg-img-holder {
            width: 70%;
        }
    }
</style>

<script>
export default {
    name: 'breaking-banner-product'
}
</script>