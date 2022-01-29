<template>
    <section id="category_banner" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h1 class="head-level-2 reveal-text reveal-center">We are creating customer-centric products.</h1>
        </div>
        <div class="category-background-grid">
            <div class="container-first-half">
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
            </div>
            <div class="container-second-half">
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
                <div class="category-background-img"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #category_banner {
        .container {
            padding: 100px 0;
            position: relative;
            z-index: 1;

            &:after {
                content: '';
                position: absolute;
                width: 100vw;
                height: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-image: url('~/assets/imgs/category-img/radial-bg.png');
                background-size: 100% 100%;
                z-index: -1;
            }
        }
        .category-background-grid {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            display: grid;
            grid-gap: 20px;
                .container-first-half, .container-second-half {
                    display: grid;
                    grid-gap: 20px;
                    grid-template-columns: repeat(4, 30vw);
                }
        }
        .container-first-half {
            .category-background-img {
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;

                &:nth-child(1) {
                    background-image: url('~/assets/imgs/category-img/2.jpg');
                }
                &:nth-child(2) {
                    background-image: url('~/assets/imgs/category-img/3.jpg');
                }
                &:nth-child(3) {
                    background-image: url('~/assets/imgs/category-img/2.jpg');
                }
                &:nth-child(4) {
                    background-image: url('~/assets/imgs/category-img/1.jpg');
                }
            }
        }
        .container-second-half {

            .category-background-img {
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;

                &:nth-child(1) {
                    background-image: url('~/assets/imgs/category-img/1.jpg');
                }
                &:nth-child(2) {
                    background-image: url('~/assets/imgs/category-img/2.jpg');
                }
                &:nth-child(3) {
                    background-image: url('~/assets/imgs/category-img/3.jpg');
                }
                &:nth-child(4) {
                    background-image: url('~/assets/imgs/category-img/1.jpg');
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
        #category_banner .category-background-grid {
            .container-first-half, .container-second-half {
                grid-template-columns: repeat(4, 60vw);
            }
        }
    }
</style>

<script>
export default {
    name: 'category-banner'
}
</script>