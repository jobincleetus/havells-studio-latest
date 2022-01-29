<template>
    <section id="product_cta" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h2 class="head-level-3 reveal-text reveal-center">There is more to our Meditate Air Purifier</h2>
            <a href="#" class="btn btn-white">SHOP AIR PURIFIER</a>
            <a href="#" class="btn btn-transparent">DOWNLOAD SPECS</a>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_cta {
        padding-top: 130px;
        justify-content: flex-start;
        height: 90vh;
        min-height: 750px;
        color: #fff;
        .bg-img-holder {
            background-image: url('~/assets/imgs/cta-section.jpg');
        }
        .btn:last-child {
            margin-left: 15px;
        }
        h2 {
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 768px) {
        #product_cta {
            .bg-img-holder {
                background-position: 30% 70%;
            }
        }
    }
</style>

<script>
export default {
    name: 'product-cta'
}
</script>