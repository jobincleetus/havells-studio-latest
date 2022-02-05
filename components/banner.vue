<template>
    <section id="banner" class="grid-section text-center has-reveal-anim">
        <div class="container">
            <h4 class="text-uppercase ls-4 reveal-text reveal-center">Introducing</h4>
            <h1 class="head-level-2 reveal-text reveal-center">Modern products backed by <br>futuristic & innovative <br>technology.</h1>
            <a href="#" class="btn play-btn video-btn mt-4" data-toggle="modal" data-target="#videoModal" data-src="https://www.youtube.com/embed/cE0wfjsybIQ">PLAY VIDEO</a>
        </div>
        <div class="bg-img-holder"></div>
        <video class="bg-vid-holder" autoplay="autoplay" loop muted>
            <source src="~/assets/vids/homepage.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="bg-vid-overlay"></div>

    </section>
</template>

<style lang="scss" scoped>
    #banner{
        text-align: center;
        color: #fff;
        .bg-img-holder {
            background-image: url('~/assets/imgs/bg_desktop.jpg');
            z-index: 1;
        }
        .bg-vid-overlay {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000000;
            opacity: 0.40;
            z-index: -1;
        }
        h1 {
            max-width: 800px;
            margin: 20px auto 40px;
        }
    }

    @media only screen and (max-width: 768px) {
        h1 {
            margin: 10px auto 20px;
        }
    }
</style>

<script>
export default {
  name: 'banner',
  mounted() {

      var banner = gsap.timeline();

      banner.from("body", {autoAlpha:0, duration: 1});
      banner.to("#banner .bg-img-holder", {autoAlpha:0, duration: 1}, "videoshow");
    //   banner.to("#banner .bg-img-holder", {cssRule: {viu: 'none'}, duration: 0.1});
      banner.from("#banner .bg-vid-holder", {autoAlpha:0, scale: 10, transformOrigin: "80% 20%", duration: 2.5}, "videoshow-=0.3");
    //   banner.from("#banner .container", {autoAlpha:0, y: 100, transformOrigin: "50% 50%", duration: 1}, "videoshow+=1");
  }
}
</script>