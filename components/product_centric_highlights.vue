<template>
    <section id="product_highlights_1" class="grid-section has-reveal-anim">
        <div class="container" id="highlight_1">
            <div class="row">
                <div class="col-sm-8"></div>
                <div class="col-sm-4">
                    <h2 class="head-level-4">Removes up to 99.97% of 0.3㎛ sized dust</h2>
                    <p class="">Meditate Air Purifier uses a powerful photo-chemical process developed in-house inspired from NASA technology.</p>
                </div>
            </div>
        </div>
        <div class="container" id="highlight_2">
            <div class="row">
                <div class="col-sm-4">
                    <h2 class="head-level-4">The HEPA filter traps smallest of the things</h2>
                    <p class="">The high grade HEPA and carbon filter enables the process in elminating unwanted things and lets you breathe clean air.</p>
                </div>
                <div class="col-sm-8"></div>
            </div>
        </div>
        <div class="container" id="highlight_3">
            <div class="row">
                <div class="col-sm-4">
                    <p class="">This process enables in eliminating dust particles, VOC & harmful gases and, bio aerosol & micro-organisms</p>
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <h2 class="head-level-4">Breathe clean air. Pure, fast & wide.</h2>
                </div>
            </div>
            <img src="~/assets/imgs/havells-meditate-open.png" class="product-mover-open-alt" alt="product-showcase" />
        </div>
        <div class="bg-img-holder left-germ"></div>
        <div class="bg-img-holder right-germ"></div>
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
            background-image: url('~/assets/imgs/germ-cleaning-1.jpg');
            max-height: 100vh;
            width: 50%;
            top: auto;
            bottom: 0;
            left: 0;
            transform: translateX(0%);
        }
        .right-germ {
            background-image: url('~/assets/imgs/germ-cleaning-2.jpg');
            left: auto;
            right: 0;
        }
        #highlight_3 {
            align-items: flex-end;
            position: relative;
        }
        #highlight_2, #highlight_3 {
            min-height: 50vh;
        }
    }
    @media only screen and (max-width: 768px) {
        #product_highlights_1 #highlight_3 {
            min-height: 100vh;
            text-align: center;
        }
        #product_highlights_1 {
            .bg-img-holder {
                bottom: 10%;
                max-height: 60vh;
            }
        }
    }
    
.product-mover-open-alt {
    position: absolute;
    width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    object-position: center center;
    top: -86%;
    // bottom: 10%; 
    left: 50%;
    z-index: 1;
    pointer-events: none;
    transform: translate(-50%, 0%) scale(0.7);
    transform-origin: 50% 50%;
}
.product-mover-open-alt {
    opacity: 0;
}
@media only screen and (max-width:767px) {
    .product-mover-open-alt {
        top: 30%;
        width: 50%;
        transform: translate(-50%, 0%) scale(0.8);
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