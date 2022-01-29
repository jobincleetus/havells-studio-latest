<template>
    <section id="our_values" class="text-center">
        <div class="container">
            <h2 class="head-level-3 reveal-text reveal-center">Our Values</h2>
            <div class="row">
                <div class="col-sm-3">
                    <img src="~/assets/imgs/about/delight.svg" class="value-img" />
                    <h4 class="reveal-text reveal-center">Delight</h4>
                    <p class="reveal-text reveal-center">
                        We are committed to surpassing our customers’ expectations.
                    </p>
                </div>
                <div class="col-sm-3">
                    <img src="~/assets/imgs/about/integrity.svg" class="value-img" />
                    <h4 class="reveal-text reveal-center">Integrity</h4>
                    <p class="reveal-text reveal-center">
                        We strive to create unique and exciting experiences that are entirely our own.
                    </p>
                </div>
                <div class="col-sm-3">
                    <img src="~/assets/imgs/about/innovation.svg" class="value-img" />
                    <h4 class="reveal-text reveal-center">Innovation</h4>
                    <p class="reveal-text reveal-center">
                        Using engineering logic and ingenious thinking, we create the future of our products.
                    </p>
                </div>
                <div class="col-sm-3">
                    <img src="~/assets/imgs/about/excellence.svg" class="value-img" />
                    <h4 class="reveal-text reveal-center">Excellence</h4>
                    <p class="reveal-text reveal-center">
                        We are committed to improve our teams, services and our products to become the best-in-class.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #our_values {
        .head-level-3 {
            margin-bottom: 30px;
        }
        .value-img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 20px;
        }
    }
</style>

<script>
export default {
    name: 'our-values'
}
</script>