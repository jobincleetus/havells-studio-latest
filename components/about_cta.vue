<template>
    <section id="about_cta" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h2 class="head-level-3 reveal-text reveal-center">Elevate your Standard of Living</h2>
            <a href="#" class="btn btn-white">EXPLORE MORE</a>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #about_cta {
        padding-top: 130px;
        justify-content: flex-start;
        height: 75vh;
        min-height: 650px;
        color: #fff;
        .bg-img-holder {
            background-image: url('~/assets/imgs/cta-section.jpg');
        }
        h2 {
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 786px) {
        #about_cta {
            padding-top: 90px;
            .bg-img-holder {
                background-position: 30% 70%;
            }
        }
    }
</style>

<script>
export default {
    name: 'about-cta'
}
</script>