<template>
    <section id="about_banner" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h1 class="head-level-3 reveal-text reveal-center">
                Havells Studio is a premium brand with a unique offering of aesthetically beautiful, modern products backed by futuristic and innovative technology. 
            </h1>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #about_banner {
        justify-content: flex-start;
        padding-top:130px;
        .bg-img-holder {
            background-image: url('~/assets/imgs/about/banner.jpg')
        }

    }
    @media only screen and (max-width: 768px) {
        #about_banner {
            .bg-img-holder {
                background-position: 70% 100%;
            }
            h1 {
                font-size: 28px;
            }
        }
    }
</style>

<script>
export default {
    name: 'about-banner'
}
</script>