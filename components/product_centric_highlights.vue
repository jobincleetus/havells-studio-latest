<template>
    <section id="product_highlights_1" class="grid-section has-reveal-anim">
        <div class="container" id="highlight_1">
            <div class="row">
                <div class="col-sm-8"></div>
                <div class="col-sm-4">
                    <h2 class="head-level-4 reveal-text">Removes up to 99.97% of 0.3㎛ sized dust</h2>
                    <p class="reveal-text">Meditate Air Purifier uses a powerful photo-chemical process developed in-house inspired from NASA technology.</p>
                </div>
            </div>
        </div>
        <div class="container" id="highlight_2">
            <div class="row">
                <div class="col-sm-4">
                    <h2 class="head-level-4 reveal-text">The HEPA filter traps smallest of the things</h2>
                    <p class="reveal-text">The high grade HEPA and carbon filter enables the process in elminating unwanted things and lets you breathe clean air.</p>
                </div>
                <div class="col-sm-8"></div>
            </div>
        </div>
        <div class="container" id="highlight_3">
            <div class="row">
                <div class="col-sm-4">
                    <p class="reveal-text">This process enables in eliminating dust particles, VOC & harmful gases and, bio aerosol & micro-organisms</p>
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <h2 class="head-level-4 reveal-text">Breathe clean air. Pure, fast & wide.</h2>
                </div>
            </div>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_highlights_1 {
        background-color: #EFD884;
        .container {
            min-height: 100vh;
            display: grid;
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
        .bg-img-holder {
            background-image: url('~/assets/imgs/germ-cleaning.jpg');
            max-height: 100vh;
            top: auto;
            bottom: 0;
            transform: translateX(-50%);
        }
        #highlight_3 {
            align-items: flex-end;
        }
        #highlight_2, #highlight_3 {
            min-height: 50vh;
        }
    }
    @media only screen and (max-width: 768px) {
        #product_highlights_1 #highlight_3 {
            min-height: 100vh;
        }
    }
</style>

<script>
export default {
    name: 'product-centric-highlights',
    mounted() {
    }
}
</script>