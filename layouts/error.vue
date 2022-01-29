<template>
    <div class="page-container dark-header">
        <section id="error_page" class="grid-section text-center has-reveal-anim">
            <div class="container">
                <h1 class="head-level-1 reveal-text reveal-center">404 Error</h1>
                <p>The page you are looking for doesn’t exist.</p>
                <NuxtLink to="/" class="btn btn-black">BACK TO HOMEPAGE</NuxtLink>
            </div>
            <div class="bg-img-holder"></div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    #error_page {
        padding-top: 130px;
        justify-content: flex-start;
        .bg-img-holder {
            background-image: url('~/assets/imgs/error.jpg')
        }
        .btn {
            font-size: 16px;
        }
    }
</style>