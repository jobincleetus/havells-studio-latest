<template>
    <section id="home-highlights" class="grid-section">
        <div class="container">
            <div class="row text-left">
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">GLOBAL</h4>
                     <h3 class="head-level-4 reveal-text">Benchmarked consumer durables</h3>
                     <p class="reveal-text">Where superior design meets premium functionality.</p>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">ESTABLISHED</h4>
                     <h3 class="head-level-4 reveal-text">Time-tested quality</h3>
                     <p class="reveal-text">Staying true to Havells’ traditions to deliver top-notch quality.</p>
                </div>
                <div class="col-sm-4">
                    <h4 class="sub-gold reveal-text">INNOVATIVE</h4>
                     <h3 class="head-level-4 reveal-text">Driven by <br>high-end technology</h3>
                     <p class="reveal-text">Modern features curated for the consumer of today.</p>
                </div>
            </div>
        </div>
        <div class="bg-img-holder"></div>
    </section>
</template>

<style lang="scss" scoped>
    #home-highlights {
        .bg-img-holder {
            background-image: url('~/assets/imgs/highlight_bg.jpg');
        }
        color: #fff;
    }
    #home-highlights h3 {
        max-width: 80%;
    }
    #home-highlights p {
        max-width: 60%;
    }
    #home-highlights  {
        // justify-content: flex-end;
        .col-sm-4:nth-child(2) {
            padding-top: 8%;
        }
        .col-sm-4:nth-child(3) {
            padding-top: 16%;
        }
    }
</style>

<script>
export default {
  name: 'highlights',
  mounted() {

      var homeHighlights = gsap.timeline({
          scrollTrigger:{
			trigger: "#home-highlights",
			start: "50% 50%",
			scrub: 0.2,
            pin: true,
            end: "+=2000"
		}
      });

      if(window.innerWidth < 768) {
        homeHighlights.from("#home-highlights .col-sm-4:nth-child(2)", {y:500, duration: 2}, "first-scroll");
        homeHighlights.to("#home-highlights .bg-img-holder", {scale:1, x: -250, duration: 2}, "first-scroll");
        homeHighlights.to("#home-highlights .col-sm-4:nth-child(1)", {autoAlpha:0, duration: 0.5}, "first-scroll+=0.5");
        homeHighlights.from("#home-highlights .col-sm-4:nth-child(3)", {y:1200, duration: 2}, "second-scroll");
        homeHighlights.to("#home-highlights .bg-img-holder", {scale:1, x: -500, duration: 2}, "second-scroll");
        homeHighlights.to("#home-highlights .col-sm-4:nth-child(2)", {autoAlpha:0, duration: 0.5}, "second-scroll+=0.5");
      } else {
        homeHighlights.from("#home-highlights .col-sm-4:nth-child(2)", {y:700, duration: 2}, "first-scroll");
        homeHighlights.to("#home-highlights .bg-img-holder", {scale:1.02, duration: 2, transformOrigin: "45% 60%"}, "first-scroll");
        homeHighlights.from("#home-highlights .col-sm-4:nth-child(3)", {y:1200, duration: 2}, "second-scroll");
        homeHighlights.to("#home-highlights .bg-img-holder", {scale:1.2, y: 100, duration: 2, transformOrigin: "45% 60%"}, "second-scroll+=1");
      }

  }
}
</script>