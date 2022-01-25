<template>
    <section id="product_highlight_1" class="grid-section text-center has-reveal-anim">
        <div class="container">
             <h2 class="head-level-2 reveal-text reveal-center">Air Purifier with SpaceTech Technology</h2>
            <p class="reveal-text reveal-center">Pollutants can build up inside your home. But you can't always see them.</p>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_highlight_1 {
        .bg-img-holder {
            background-image: url('~/assets/imgs/green-bg-desktop.jpg');
            background-position: center bottom;
        }
        justify-content: flex-start;
        padding-top:130px;
    }
</style>

<script>
export default {
    name: 'product-highlight',
    mounted() {
    }
}
</script>