<template>
    <div class="navbar-container">
        <div class="container-fluid">
            <div class="navbar-head">
                <NuxtLink to="/" class="site-link">
                    <img src="~/assets/imgs/havells-logo.svg" alt="Havells Studio" class="navbar-logo" />
                </NuxtLink>
            </div>

            <div class="canvas-container">

                <nav>
                    <NuxtLink to="/products" class="nav-link">PRODUCTS</NuxtLink>
                    <NuxtLink to="/about" class="nav-link">ABOUT US</NuxtLink>
                    <NuxtLink to="/contact" class="nav-link">CONTACT US</NuxtLink>
                    <NuxtLink to="/privacy-policy" class="nav-link">PRIVACY POLICY</NuxtLink>
                </nav>

                <img src="~/assets/imgs/havells-logo.svg" alt="Havells Studio" class="canvas-logo" />

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
      $('.canvas-container').toggleClass("canvas-open");
    });

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