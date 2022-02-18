<template>
    <section id="product-showcase" class="grid-section has-reveal-anim">
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-4">
                    <img src="~/assets/imgs/meditate-product-2.png" class="product-showcase-img img-fluid" alt="Product Showcase" />
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-6">
                    <img src="~/assets/imgs/meditate.svg" class="product-showcase-logo img-fluid" alt="Product Showcase" />
                    <h2 class="head-level-3 reveal-text reveal-center">Air purifers powered by Space Tech</h2>
                    <p class="reveal-text reveal-center">Air Purifier is inspired by consumer need and fortified with SpaceTech Technology that ensures you breathe the purest air.</p>
                    <NuxtLink to="/products/meditate" class="btn mt-4 center-btn">EXPLORE</NuxtLink>
                </div>
            </div>
        </div>
        <div class="bg-img-holder"></div>
        <div class="bg-img-holder bg-img-holder-2"></div>
    </section>
</template>

<style lang="scss" scoped>
    #product-showcase {
        .bg-img-holder {
            background-image: url('~/assets/imgs/highlight_bg.jpg');
        }
        .bg-img-holder-2 {
            background-image: url('~/assets/imgs/rays.png');
            background-position: 30% 90%;
        }
        text-align: center;
        color: #fff;
        flex-direction: row;
        align-items: stretch;

        .row {
            height: 100%;
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;   
            }
            .col-sm-4 {
                justify-content: flex-end;
            }
        }
        .product-showcase-img {
            max-width: 80%;
            width: 100%;
            margin: 0 auto;
        }
        .product-showcase-logo {
            width: 300px;
            margin: 0 auto 30px;
        }
        p {
            max-width: 400px;
            margin: 0 auto 10px;
        }
    }
    @media only screen and (max-width: 768px) {
        #product-showcase {
            p {
                max-width: 80%;
                margin: 0 auto 10px;
            }
            .product-showcase-logo {
                width: 220px;
                margin: 0 auto 15px;
            }
        }
    }
</style>

<script>
export default {
  name: 'product-showcase',
  mounted() {

    function riseimgFix() {
        if($('body').width() > $('.container').width() ) {
            let balanceSize = $('body').width() - $('.container').width();
            console.log(balanceSize);
            let adjustedWidth = (-balanceSize + 360)/10;
            $('.product-showcase-img').css('margin-left', adjustedWidth);
        }
    }
    riseimgFix();
    window.addEventListener("resize", riseimgFix);

      var productShowcase = gsap.timeline({
          scrollTrigger:{
			trigger: "#product-showcase",
			start: "50% 50%",
			scrub: 0.2,
            // markers: true,
            pin: true
		}
      });
      if(window.innerWidth < 768) {
        productShowcase.to("#product-showcase .bg-img-holder-2", {scale:1.2, duration: 2, transformOrigin: "50% 100%"}, "first-scroll");
      } else {
        productShowcase.to("#product-showcase .bg-img-holder-2", {scale:1.2, duration: 2, transformOrigin: "33% 80%"}, "first-scroll");
      }
      
  }
}
</script>