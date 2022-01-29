<template>
    <section id="next_product" class="has-reveal-anim">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-10">
                    <h4 class="text-uppercase sub-gold reveal-tex">NEXT</h4>
                    <img src="~/assets/imgs/halo.svg" class="next-product-logo" />
                </div>
                <div class="col-sm-2">
                    <NuxtLink to="/" class="play-btn-only"></NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #next_product {
        .sub-gold {
            color: #332B29;
            margin-bottom:20px;
        }
        .play-btn-only {
            margin-left: auto;
            margin-right: 0;
        }
    }
</style>

<script>
export default {
    name: 'next-product'
}
</script>