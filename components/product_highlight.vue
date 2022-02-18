<template>
    <section id="product_highlight_1" class="grid-section text-center has-reveal-anim">
        <div class="container">
             <h2 class="head-level-2 reveal-text reveal-center">Designed for larger spaces for 360 degree air purification</h2>
            <p class="reveal-text reveal-center">It differentiates itself from existing Air Puriifier with its external portant air quality monitor, which can be carried with and placed close to the user.</p>
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

        h2 {
            max-width: 600px;
            margin: 0 auto 20px;
        }
        p {
            max-width: 700px;
            font-size: 18px;
            margin: 0 auto;
        }
    }
</style>

<script>
export default {
    name: 'product-highlight',
    mounted() {
    }
}
</script>