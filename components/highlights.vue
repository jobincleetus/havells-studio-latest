<template>
    <section id="home-highlights" class="grid-section">
        <div class="container">
            <div class="row text-left">
                <div class="col-sm-4">
                    <h4 class="sub-gold">GLOBAL</h4>
                     <h3 class="head-level-3">Benchmarked consumer durables</h3>
                     <p>Where superior design meets premium functionality.</p>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold">ESTABLISHED</h4>
                     <h3 class="head-level-3">Time-tested quality</h3>
                     <p>Staying true to Havells’ traditions to deliver top-notch quality.</p>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold">INNOVATIVE</h4>
                     <h3 class="head-level-3">Driven by <br>high-end technology</h3>
                     <p>Modern features curated for the consumer of today.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #home-highlights {
        background-image: url('~/assets/imgs/highlight_bg.jpg');
        background-size: cover;
        color: #fff;
    }
    #home-highlights h3 {
        max-width: 80%;
    }
    #home-highlights p {
        max-width: 50%;
    }
    #home-highlights  {
        justify-content: flex-end;
        .col-sm-4:nth-child(2) {
            padding-top: 10%;
        }
        .col-sm-4:nth-child(3) {
            padding-top: 20%;
        }
    }
</style>

<script>
export default {
  name: 'highlights'
}
</script>