<template>
    <section id="product_video" class="grid-section has-reveal-anim">
        <div class="container">
            <h2 class="head-level-4 reveal-text reveal-center">Enjoy fresh air anywhere with AQI Monitor</h2>
            <p class="reveal-text reveal-center">This monitor can be carried anywhere and placed close to the user. The monitor is aware of the condition around the user and can adjust the air quality of the air purifier by adjusting its fan speed. </p>
        </div>
        <a href="#" class="play-btn-only video-btn" data-toggle="modal" data-target="#videoModal" data-src="https://www.youtube.com/embed/cE0wfjsybIQ"></a>
        <video class="bg-vid-holder" autoplay="autoplay" loop muted>
            <source src="~/assets/vids/meditate_page.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="bg-vid-overlay"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_video {
        justify-content: flex-start;
        .play-btn-only {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:hover {
                transform: translate(-50%, -50%) scale(1.2);
            }
        }
        .container {
            z-index: 2;
        }
        .bg-vid-overlay {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('~/assets/imgs/mask.png');
            opacity: 0.40;
            z-index: -1;
        }
        p {
            max-width: 700px;
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 768px) {
        #product_video {
            min-height: 700px;
            .play-btn-only {
                top: 60%;
                transform: translate(-50%, -60%);
            }
        }
    }
</style>

<script>
export default {
    name: 'product-video',
    mounted() {
    }
}
</script>

