<template>
    <section id="closing_highlights" class="grid-section text-center">
        <div class="container">
            <div class="row text-center">
                <div class="col-sm-6">
                    <img src="~/assets/imgs/wireless-charging.jpg" alt="Wireless Charger" class="br-30" />
                    <h3 class="head-level-4">Long live the wireless charger</h3>
                    <p class="">The filter comes with wireless charger which is designed to keep going more than a year on a standard battery you can easily replace.</p>
                </div>
                <div class="col-sm-6">
                    <img src="~/assets/imgs/mobile-data.jpg" alt="Wireless Charger" class="br-30" />
                    <h3 class="head-level-4">Complete control, at your fingertips</h3>
                    <p class="">The Havells app lets you monitor and control your air purifier. So you can understand and adjust the conditions in your home, from wherever you are.</p>
                    <a href="#" class="btn"><img src="~/assets/imgs/download-android.png" class="img-fluid" /></a>
                    <a href="#" class="btn"><img src="~/assets/imgs/dowmload-apple.png" class="img-fluid" /></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #closing_highlights {
        h3 {
            font-size: 32px;
            margin-top:20px;
        }
        .btn {
            background-color: #000000;
            border-color: #000000;

            &:after {
                content: none;
            }
        }
        .btn:last-child {
            margin-left: 15px;
        }
        .col-sm-6 {
            // padding-left: 25px;
            // padding-right: 25px;
            img {
                width: 100%;
                max-width: 100%;
            }
            &:last-child {
                margin-top: 50vh;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        #closing_highlights {
            h3 {
                font-size: 27px;
            }
        }
    }
</style>

<script>
export default {
    name: 'closing-points'
}
</script>