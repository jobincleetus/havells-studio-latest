<template>
    <section id="category_about" class="has-reveal-anim text-center">
        <div class="comp-container grid-section">
        <div class="container">
            <h2 class="head-level-3 reveal-text reveal-center">
                Havells Studio is a Premium Brand with a unique offering of aesthetically beautiful, modern products backed by futuristic and innovative technology.
            </h2>
        </div>
        <div class="bg-img-holder"></div>
        <img class="logo-img-holder logo-holder-1" src="~/assets/imgs/havells-logo.svg" />
        <img class="logo-img-holder logo-holder-2" src="~/assets/imgs/havells-logo.svg" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #category_about {
        overflow: hidden;
        position: relative;
        min-height: auto;
        padding: 0;
        .comp-container {
            min-height: 100vh;

        }
        z-index: -1;
        .bg-img-holder {
            background-image: url('~/assets/imgs/category-img/about_category.jpg')
        }
        .logo-img-holder {
            position: absolute;
            width: 120vw;
            top: 20%;
            transform: translateY(-20%);
            opacity: 0.05;
        }
        .logo-holder-2 {
            top: 80%;
            transform: translateY(-80%);
        }
    }
</style>

<script>
export default {
    name: 'category-about'
}
</script>