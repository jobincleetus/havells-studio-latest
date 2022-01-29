<template>
    <section id="contact_banner">
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #contact_banner {
        height: 60vh;
        min-height: 400px;
        .bg-img-holder {
            background-image: url('~/assets/imgs/contact_banner.jpg');
        }
    }
    @media only screen and (max-width: 768px) {
        #contact_banner {
            height: 35vh;
            min-height: 300px;
        }
    }
</style>

<script>
export default {
    name: 'contact-banner'
}
</script>