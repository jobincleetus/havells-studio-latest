<template>
    <section id="home-tech" class="has-reveal-anim">
        <div class="comp-container grid-section">
            <div class="container">
                <h2 class="head-level-1 text-center reveal-text reveal-center">Exquisitely crafted technology</h2>
                <a href="#" class="btn text-center mt-4">READ MORE</a>
            </div>
            <div class="bg-img-holder"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #home-tech {
        .bg-img-holder {
            background-image: url('~/assets/imgs/home-tech.jpg');
            height: calc(100vh * 2);
        }
        text-align: center;
        color: #fff;
        h2 {
            max-width: 600px;
            margin: 0 auto;
        }
        overflow: hidden;
        position: relative;
        min-height: auto;
        padding: 0;
        .comp-container {
            min-height: 100vh;

        }
        z-index: -1;
    }

    @media only screen and (max-width: 768px) {
        #home-tech {
            h2 {
                max-width: 250px;
            }
        }
    }
</style>

<script>
export default {
  name: 'home-tech',
  mounted() {

      if(window.innerWidth < 768 ){
        var dispHeight = (window.innerHeight)/4;
        var hometechStart = "-30% 80%";
      } else {
        var dispHeight = (window.innerHeight)/2;
        var hometechStart = "-10% 80%";
      }

      var homeTech = gsap.timeline({
          scrollTrigger:{
			trigger: "#home-tech",
			start: hometechStart,
			end: "15% 50%",
			scrub: 0.2,
            // markers: true
		}
      });
      homeTech.from("#home-tech .bg-img-holder", {y: dispHeight, duration: 2});

      var homeTechText = gsap.timeline({
          scrollTrigger:{
			trigger: "#home-tech",
			start: "0% 70%",
			end: "20% 50%",
			scrub: true,
		}
      });
      homeTechText.from("#home-tech .container", {y: 300, transformOrigin: "50% 50%", duration: 1});

      if(window.innerWidth > 768) {
        var homeTechDown = gsap.timeline({
            scrollTrigger:{
            trigger: "#home-tech",
            start: "0% 0%",
            end: "100% 0%",
            scrub: true,
            // markers: true
        }
        });

      homeTechDown.to("#home-tech .comp-container", {yPercent:"70", duration: 2, transformOrigin: "50% 50%"}, "first-scroll");
    }
  }
}
</script>