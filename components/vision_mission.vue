<template>
    <section id="vision_mission" class="grid-section has-reveal-anim">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-3">
                    <h3 class="head-level-4 reveal-text">Our Vision</h3>
                    <p class="reveal-text">
                        We aim to create products that give you a unique, superior and unparalleled experience, fueled by the desire to find joy in your day-to-day lives.
                    </p>
                </div>
                <div class="col-sm-6">
                </div>
                <div class="col-sm-3">
                    <h3 class="head-level-4 reveal-text">Our Mission</h3>
                    <p class="reveal-text">
                        We have a simple approach to reach our goals - creating customer-centric world-best products made of world-best ideas and designed by world-best solutions.
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #vision_mission {
        min-height: 600px;
        justify-content: flex-start;
        .bg-img-holder {
            background-image: url('~/assets/imgs/about/vision_mission_1.jpg');
        }
    }
    @media only screen and (max-width: 768px) {
        #vision_mission {
            min-height: 800px;
            .bg-img-holder {
                background-image: url('~/assets/imgs/about/vision_mission_mob.jpg');
                background-position: center bottom;
            }
        }
    }
</style>

<script>
export default {
    name: 'vision-mission'
}
</script>