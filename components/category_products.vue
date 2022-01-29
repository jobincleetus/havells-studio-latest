<template>
    <div class="category-products">
        <section id="category_meditate" class="category_products_container grid-section has-reveal-anim" data-color="#A4DEC6">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <img src="~/assets/imgs/category-img/meditate-poster.jpg" class="product-img-category" />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <img src="~/assets/imgs/category-img/meditate_gold.svg" class="product-logo-category" />
                        <h3 class="head-level-3 reveal-text">
                            Air purifers powered by Space Tech
                        </h3>
                        <p class="reveal-text">
                            Air Purifier is inspired by consumer need and fortified with SpaceTech Technology that ensures you breathe the purest air.
                        </p>
                        <NuxtLink to="/products/meditate" class="btn mt-4">EXPLORE</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="bg-img-holder"></div>
        </section>
        <section id="category_halo" class="category_products_container grid-section has-reveal-anim" data-color="#DFCFFA">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <img src="~/assets/imgs/category-img/halo_gold.svg" class="product-logo-category" />
                        <h3 class="head-level-3 reveal-text">
                            Bladeless fans with mood lighting
                        </h3>
                        <p class="reveal-text">
                            A blameless fan gives breeze in every corner just like in ancient havelis.
                        </p>
                        <NuxtLink to="/" class="btn mt-4">EXPLORE</NuxtLink>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-6">
                        <img src="~/assets/imgs/category-img/poster-halo.jpg" class="product-img-category" />
                    </div>
                </div>
            </div>
            <div class="bg-img-holder"></div>
        </section>
        <section id="category_essence" class="category_products_container grid-section has-reveal-anim" data-color="#CDEF84">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <img src="~/assets/imgs/category-img/meditate-poster.jpg" class="product-img-category" />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <img src="~/assets/imgs/category-img/essence_gold.svg" class="product-logo-category" />
                        <h3 class="head-level-3 reveal-text">
                            Wet and Dry Grinder inspired by stones
                        </h3>
                        <p class="reveal-text">
                            Wet and Dry Grinder uses real Coimbatore stones to ensure authentic tastes are retained in everything you create.
                        </p>
                        <NuxtLink to="/" class="btn mt-4">EXPLORE</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="bg-img-holder"></div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .category-products {
        background-color: #A4DEC6;
        .category_products_container {
            min-height: auto;
            padding-top: 130px;
            padding-bottom: 0;
            h3 {
                font-size: 40px;
                margin-top: 10px;
            }
            .product-img-category {
                width: 100%;
                max-height: calc(100vh - 130px);
                object-fit: cover;
            }
        }
    }
    #category_essence {
        padding-top: 130px;
        padding-bottom: 130px;
    }

    #category_meditate .bg-img-holder {
        background-image: url('~/assets/imgs/category-img/feather.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    #category_halo .bg-img-holder {
        background-image: url('~/assets/imgs/category-img/feather_2.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        mix-blend-mode: screen;
        opacity: 0.2;
    }
    @media only screen and (max-width: 768px) {
        .category-products .category_products_container {
            padding-top: 90px !important;
            .product-img-category {
                margin-bottom: 30px;
                max-width: 80%;
            }
            h3 {
                font-size: 30px;
            }
            &#category_halo {
                .col-sm-5 {
                    order: 2;
                }
            }
            #category_essence {
                padding-top: 90px !important;;
                padding-bottom: 90px !important;;
            }
        }
    }
</style>

<script>
export default {
    name: 'category-products',
    mounted() {
    }
}
</script>