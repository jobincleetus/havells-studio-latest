<template>
    <section id="home-tech" class="grid-section has-reveal-anim">
        <div class="container">
            <h2 class="head-level-1 text-center reveal-text reveal-center">Exquisitely crafted technology</h2>
            <a href="#" class="btn text-center mt-4">READ MORE</a>
        </div>
        <div class="bg-img-holder"></div>
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
    }
</style>

<script>
export default {
  name: 'home-tech',
  mounted() {

      if(window.innerWidth < 768 ){
        var dispHeight = (window.innerHeight)/4;
      } else {
        var dispHeight = (window.innerHeight)/2;
      }

      var homeTech = gsap.timeline({
          scrollTrigger:{
			trigger: "#home-tech",
			start: "0% 80%",
			end: "30% 50%",
			scrub: 0.2,
            // markers: true
		}
      });
      homeTech.from("#home-tech .bg-img-holder", {y: dispHeight, duration: 2});

      var homeTechText = gsap.timeline({
          scrollTrigger:{
			trigger: "#home-tech",
			start: "45% 70%",
			end: "70% 50%",
			scrub: true,
		}
      });
      homeTechText.from("#home-tech .container", {y: 300, transformOrigin: "50% 50%", duration: 1});
  }
}
</script>