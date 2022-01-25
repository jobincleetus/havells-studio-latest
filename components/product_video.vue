<template>
    <section id="product_video" class="grid-section has-reveal-anim">
        <div class="container">
            <h2 class="head-level-4 reveal-text reveal-center">Enjoy fresh air anywhere with AQI Monitor</h2>
            <p class="reveal-text reveal-center">This monitor can be carried anywhere and placed close to the user. The monitor is aware of the condition around the user and can adjust the air quality of the air purifier by adjusting its fan speed. </p>
        </div>
        <a href="#" class="play-btn-only"></a>
        <video class="bg-vid-holder" autoplay="autoplay" loop muted>
            <source src="~/assets/vids/Meditate_Page.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="bg-vid-overlay"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product_video {
        justify-content: flex-start;
        .play-btn-only {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: url('~/assets/imgs/Play.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            transition: 0.45s ease all;

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
    }
</style>

<script>
export default {
    name: 'product-video',
    mounted() {
    }
}
</script>

