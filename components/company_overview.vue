<template>
    <section id="company_overview" class="has-reveal-anim">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="sub-gold reveal-text">HAVELLS STUDIO</h4>
                    <h2 class="head-level-3 reveal-text">Company Overview</h2>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-6">
                    <h4 class="reveal-text">
                        Our range of products include globally benchmarked consumer durables and electronic products that are inspired and made for India. Each product offers a unique experience keeping in mind the aspirations of today’s consumers.
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #company_overview {
        h2 {
            line-height: 1.2;
        }
        .sub-gold {
            font-size: 16px;
            letter-spacing: 2px;
        }
        .col-sm-6 {
            h4 {
                font-size: 28px;
                line-height: 1.6;
            }
        }
    }
</style>

<script>
export default {
    name: 'company-overview'
}
</script>