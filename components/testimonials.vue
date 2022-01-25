<template>
    <section id="testimonials" class="text-center grid-section">
        <div class="container">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <h4 class="reveal-text reveal-center">
                            Today’s homes want more than just gadgets and furniture. They require an elevated way of living and I’m glad to present Havells’ MEDITATE to my clients. As the name suggests, it purifies the air around your home and lets you enjoy a peaceful environment. It takes your living space to the next level with its futuristic design.
                        </h4>
                        <p class="gold-text reveal-text reveal-center">Vinita Shah, Interior Designer</p>
                    </div>
                    <div class="swiper-slide">
                        <h4 class="reveal-text reveal-center">
                            Today’s homes want more than just gadgets and furniture. They require an elevated way of living and I’m glad to present Havells’ MEDITATE to my clients. As the name suggests, it purifies the air around your home and lets you enjoy a peaceful environment. It takes your living space to the next level with its futuristic design.
                        </h4>
                        <p class="gold-text reveal-center">Vinita Shah, Interior Designer</p>
                    </div>
                    <div class="swiper-slide">
                        <h4 class="reveal-text reveal-center">
                            Today’s homes want more than just gadgets and furniture. They require an elevated way of living and I’m glad to present Havells’ MEDITATE to my clients. As the name suggests, it purifies the air around your home and lets you enjoy a peaceful environment. It takes your living space to the next level with its futuristic design.
                        </h4>
                        <p class="gold-text reveal-center">Vinita Shah, Interior Designer</p>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #testimonials {
        min-height: 500px;
        h4 {
            font-size: 27px;
            max-width: 900px;
            margin: 0 auto 30px;
            line-height: 1.8;
        }
        .swiper-button-next, .swiper-button-prev {
            top: calc(50% - 45px);
        }
        .swiper-pagination {
            display: none;
        }
    }
</style>

<script>
export default {
  name: 'testimonials',
  mounted() {
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });
  }
}
</script>