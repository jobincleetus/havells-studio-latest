<template>
    <div class="navbar-container">
        <div class="container-fluid">
            <div class="navbar-head">
                <NuxtLink to="/" class="site-link">
                    <img src="~/assets/imgs/havells-logo.svg" alt="Havells Studio" class="navbar-logo" />
                </NuxtLink>
            </div>

            <div class="canvas-container">
            <div class="canvas-container-inner">
                    <nav>
                        <NuxtLink to="/products/meditate" class="nav-link">PRODUCTS</NuxtLink>
                        <NuxtLink to="/" class="nav-link">ABOUT US</NuxtLink>
                        <NuxtLink to="/" class="nav-link">CONTACT US</NuxtLink>
                        <NuxtLink to="/" class="nav-link">PRIVACY POLICY</NuxtLink>
                    </nav>

                    <NuxtLink to="/" class="canvas-logo"><img src="~/assets/imgs/havells-logo.svg" alt="Havells Studio" /></NuxtLink>

                </div>
            </div>
            
            <button class="navbar-btn">
                <div class="navbar-line"></div>
            </button>

        </div>

    </div>
</template>

<script>
export default {
  name: 'navbar',
  mounted() {


      
    $(".navbar-btn").click(function(){
      $(this).toggleClass("active");
      if (!$(".canvas-container").hasClass("canvas-open")) {
          navLink.restart();
      }
      $('.canvas-container').toggleClass("canvas-open");
    });

    $(".nav-link, .canvas-logo").click(function(){
      $('.navbar-btn').removeClass("active");
      $('.canvas-container').removeClass("canvas-open");
    });


    let navLink = gsap.timeline({
        paused: true
    });
    navLink.from(".nav-link, .canvas-logo", 0.5, {
        yPercent: 100,
        opacity: 0,
        ease: Power3.out,
        stagger: 0.25,
        delay: 0.2
    });
    navLink.set("element", { autoAlpha: 1 });


    window.onscroll = function() {headscroll()};

    var header = $('.navbar-container');
    var sticky = $('.navbar-container').height();

    function headscroll() {
        if (window.pageYOffset > sticky) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    }
  },
}
</script>