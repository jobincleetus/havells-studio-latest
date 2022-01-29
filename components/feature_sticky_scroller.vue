<template>
    <section id="sticky_scroller">
        <div class="container">
            <div class="row">
                <div class="col-1">
                    <div class="scroller-illustration-container">
                        <div class="scroller-illustration-img" id="section1-illustration">
                            <img src="~/assets/imgs/device-monitor.png" alt="device monitor" class="device-monitor img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <section class="section1" id="section1">
                        <h4 class="text-uppercase sub-gold reveal-text">Active Mode</h4>
                        <h3 class="head-level-4 reveal-text">Precise monitoring, intuitive display</h3>
                        <p class="reveal-text">The device displays the AQI using the LED indicator, the display is off to save the battery when not in use.</p>
                    </section>
                    <section class="section2" id="section2">
                        <h4 class="text-uppercase sub-gold reveal-text">Sleep Mode</h4>
                        <h3 class="head-level-4 reveal-text">Purification that's quiet as a whisper</h3>
                        <p class="reveal-text">It saves your effort and reduces energy use and, also helps you sleep by creating a quieter air flow, without display lighting.</p>
                    </section>
                    <section class="section3" id="section3">
                        <h4 class="text-uppercase sub-gold reveal-text">Explore Mode</h4>
                        <h3 class="head-level-4 reveal-text">Check the air purity with just a glance</h3>
                        <p class="reveal-text">The device can be taken to other areas of the house to check the AQI. This mode displays air quality but doesn’t allow control of the air purifier.</p>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #sticky_scroller {

        background: #FFEDAB;
        overflow: inherit;
        min-height: auto;
        padding: 80px 0;

        .row {
            position: relative;
            display: flex;
            align-items: stretch;
            justify-content: space-between;
        }
        .col-1 {
            min-width: 50%;
            width: 50%;
            max-width: 632px;
            height: 100vh;
        /*     max-height: 700px; */
            display: flex;
            align-items: center;
            position: sticky;
            top: 0%;
            transform: translateY(0%);
        }
        .col-2 {
            position: relative;
            width: 50%;
            min-width: 50%;
            height: 100%;
        }
        .section1, .section2, .section3 {
            position: relative;
            height: 100vh;
        /*     max-height: 700px; */
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            max-width: 400px;

        }
        .scroller-illustration-img {
            position: relative;
            width: fit-content;
            margin: 0 auto;
            &:after {
                content: "";
                position: absolute;
                width: 40%;
                height: 40%;
                top: 35%;
                left: 50%;
                transform: translate(-50%, -35%);
                background-color: black;
                opacity: 0;
                transition: 0.5s ease all;
            }
            &:before {
                content: "";
                position: absolute;
                width: 50%;
                height: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-image: url('~/assets/imgs/cover-disp.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                opacity: 0;
                transition: 0.5s ease all;
            }
        }
        #section2-illustration:after {
            opacity: 1;
        }
        #section3-illustration:before {
            opacity: 1;
        }
    }
</style>

<script>
export default {
    name: 'feature-sticky-scroller',
    mounted() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                var viewportHeight = window.innerHeight;
                var activeSec = entry.intersectionRect.height / viewportHeight
                if (activeSec > 0) {
                    // document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
                    console.log(id);
                    var illustrationMain = $('.scroller-illustration-img');
                    var illustrationMainId = id+"-illustration";
                    jQuery(illustrationMain).attr("id",illustrationMainId);
                } else {
                    // document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                }
            });
        }, 
        {rootMargin: "-45% 0px -50%",threshold: 0});

        // Track all sections that have an `id` applied
        document.querySelectorAll('#sticky_scroller section[id]').forEach((section) => {
            observer.observe(section);
        });
    }
}
</script>