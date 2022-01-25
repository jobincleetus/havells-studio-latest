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
        }
    }
</style>

<script>
export default {
    name: 'product-centric-highlights-2',
    mounted() {
    }
}
</script>